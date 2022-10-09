const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');
const async = require('async');
const jwt  = require('jsonwebtoken');
const {body, validationResult} = require('express-validator')

// Controlador para buscar posts en base de datos.
exports.fetch_posts = function(req, res, next){
    Post.find({'published': true}).sort([['title', 'ascending']]).exec(function(err, posts){
        if(err) return next(err);
        return res.json(posts)
    });
};

// Controlador para buscar POST y sus comentarios.
exports.fetch_post_and_comments = function(req, res, next){
    async.parallel({
        post(callback){
            let title = req.params.title;
            title = title.replace(/-/g, ' ');
            Post.find({'title': {$eq: title}}).exec(callback);
        },
        comments(callback){
            Comment.find().exec(callback);
        },
    }, function(err, results){
        if(err) return next(err);
        return res.json(results)
    })
}

// JWT

// Controlador para autenticación y obtener Token
exports.api_login_token = function(req, res, next){
    User.find({'username': req.body.username}).exec(function(err, user){
        if(err) return next(err)
        if(user[0].password === req.body.password){
            jwt.sign({user}, `${process.env.SECRET_KEY}`, {expiresIn: '1h'} ,(err, token) => {
                if(err) return next(err)
                return res.json({token})
            })
        } else {
            return res.json(false)
        }
    });
}

// Controlador para extraer Token.
exports.api_token_verify = function(req, res, next){
    // FORMAT
    // Authorization : Bearer <access_token>

    // Get auth header value
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        // Separar usando el espacio.
        const bearer = bearerHeader.split(' ')
        // Obtener el token.
        const bearerToken = bearer[1]
        // Guardar TOKEN en req.
        req.token = bearerToken;
        next()
    } else {
        return res.json('forbidden')
    }
}

// Controlador para crear POST
exports.api_create_post = [
    (req, res, next) => {
        jwt.verify(req.token, `${process.env.SECRET_KEY}`, (err, authData) => {
            if(err) return res.sendStatus(403)
            else {
                next()
            }
        })
    },

    body('title', 'Title must not be empty').trim().isLength({max: 15}).escape(),
    body('body', 'Body must not be empty').trim().isLength({min:5}),

    (req, res, next) => {
        const errors = validationResult(req)
        const post = new Post({
            title: req.body.title,
            body: req.body.body,
            published: true,
        });

        if(!errors.isEmpty()){
            return res.json('Something went wrong')
        } else {
            post.save(function(err){
                if(err) return next(err);
                res.json('Correct')
            })
        }
    }
]

// Controlador para saber si el TOKEN es válido y renderizar condicionalmente en cliente.
exports.api_is_logged_in = function(req, res, next){
    jwt.verify(req.token, `${process.env.SECRET_KEY}`, (err, authData) => {
        if(err) return res.json(false)
        return res.json(true)
    })
}