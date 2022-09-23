const express = require('express');
const router = express.Router();

// Renderizar un POST en específico.
router.get('/:name', function(req, res, next){
    return res.send('Here goes a post');
});

// Editar un POST (exclusivo del dueño del POST).
router.get('/:name/edit', function(req, res, next){
    return res.send('Here should be edited a specific post');
});

// Eliminar un POST (exclusivo del dueño del POST).
router.get('/:name/delete', function(req, res, next){
    return res.send('Here should be deleted a specific post');
});

module.exports = router;