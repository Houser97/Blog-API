const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const apiController = require('../controllers/apiControllers');

// API para buscar todos los POSTS en la base de datos con PUBLISHED TRUE
router.get('/posts', apiController.fetch_posts);

// API para buscar un determinado POST en la base da datos junto con sus comentarios.
router.get('/post/:title', apiController.fetch_post_and_comments);

// API para crear un nuevo comentario
router.post('/post/:title/create-comment', function(req, res, next){
    return res.json('Create new comment');
})

// API de LOGIN para obtener el toke
router.post('/login', apiController.api_login_token)

// API para crear un nuevo POST (se usa JWT)
router.post('/post/create-post', function(req, res, next){
    return res.json('Create new post');
})

module.exports = router;