const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const apiController = require('../controllers/apiControllers');

// API para buscar todos los POSTS en la base de datos con PUBLISHED TRUE
router.get('/posts', apiController.fetch_posts);

// API para buscar un determinado POST en la base da datos junto con sus comentarios.
router.get('/post/:title', apiController.fetch_post_and_comments);

// API para crear un nuevo comentario
router.post('/post/create-comment', apiController.api_create_comment)

// API de LOGIN para obtener el toke
router.post('/login', apiController.api_login_token)

// API para crear un nuevo POST (se usa JWT)
router.post('/post/create-post', apiController.api_token_verify , apiController.api_create_post)

//API para preguntar si hay usuario en sesión
router.get('/check-token', apiController.api_token_verify, apiController.api_is_logged_in);

module.exports = router;