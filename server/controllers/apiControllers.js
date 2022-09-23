const Post = require('../models/post');
const Comment = require('../models/comment');

// Controlador para buscar posts en base de datos
exports.fetch_posts = function(req, res, next){
    Post.find().sort([['title', 'ascending']]).exec(function(err, posts){
        if(err) return next(err);
        return res.json({'posts':'Houser'})
    });
};