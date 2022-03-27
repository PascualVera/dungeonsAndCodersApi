// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getMap } = require('../controllers/map')

// Crear los endpoints para la ruta /chat y atenderlos mediante sus controladores
router.get('/', getMap);

// Exportar router
module.exports = router;