// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getHome } = require('../controllers/homepage')

// Crear endpoints para la ruta /homepage y atenderlo mediante su controlador
router.get('/', getHome);

// Exportar router
module.exports = router;