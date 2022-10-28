const express = require('express');
const router = express.Router();

// Renderizar un POST en específico y sus comentarios.
router.get('/:name/a', function(req, res, next){
    return res.send('Here goes a post');
});

// Editar un POST (exclusivo del dueño del POST).
router.get('/:name/edit/a', function(req, res, next){
    return res.send('Here should be edited a specific post');
});

// Eliminar un POST (exclusivo del dueño del POST).
router.get('/:name/delete/a', function(req, res, next){
    return res.send('Here should be deleted a specific post');
});

// ------------- Rutas para comentarios. -------------
// ---------------------------------------------------

// Ruta para crear comentario en un POST
router.get('/:name/create-comment/a', function(req, res, next){
    return res.send('Here should be created a comment');
});


module.exports = router;