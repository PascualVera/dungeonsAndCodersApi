// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { postLogin } = require('../controllers/login')

// Crear endpoints para la ruta /login y atenderlo mediante su controlador
router.post('/', postLogin);

// Exportar router
module.exports = router;