// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPersonaje, postPersonaje, putPersonaje, deletePersonaje } = require('../controllers/personaje')

// Crear los endpoints para la ruta /profesores y atenderlos mediante sus controladores
router.get('/', getPersonaje);
router.post('/', postPersonaje);
router.put('/', putPersonaje);
router.delete('/', deletePersonaje);

// Exportar router
module.exports = router;