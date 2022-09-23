const express = require('express');
const router = express.Router();

// API para buscar todos los POSTS en la base de datos con PUBLISHED TRUE
router.get('/posts', function(req, res, next){
    return res.json('API to fetch posts in database');
});

// API para buscar un determinado POST en la base da datos junto con sus comentarios.
router.get('/post/:name', function(req, res, next){
    return res.json('API to fetch a single POST and its comments');
});

// API para crear un nuevo comentario
router.post('/post/:name/create-comment', function(req, res, next){
    return res.json('Create new comment');
})

// API para crear un nuevo POST
router.post('/post/:name/create-post', function(req, res, next){
    return res.json('Create new post');
})