// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getEnemigo, postEnemigo, putEnemigo, deleteEnemigo } = require('../controllers/enemigo')

// Crear los endpoints para la ruta /enemigo y atenderlos mediante sus controladores
router.get('/', getEnemigo);
router.post('/', postEnemigo);
router.put('/', putEnemigo);
router.delete('/', deleteEnemigo);

// Exportar router
module.exports = router;