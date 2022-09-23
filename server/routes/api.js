const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiControllers');

// API para buscar todos los POSTS en la base de datos con PUBLISHED TRUE
router.get('/posts', apiController.fetch_posts);

// API para buscar un determinado POST en la base da datos junto con sus comentarios.
router.get('/post/:title', function(req, res, next){
    return res.json('API to fetch a single POST and its comments');
});

// API para crear un nuevo comentario
router.post('/post/:title/create-comment', function(req, res, next){
    return res.json('Create new comment');
})

// API para crear un nuevo POST
router.post('/post/:title/create-post', function(req, res, next){
    return res.json('Create new post');
})

module.exports = router;