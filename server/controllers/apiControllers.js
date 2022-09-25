const Post = require('../models/post');
const Comment = require('../models/comment');
const async = require('async')

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