// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPlayer, postPlayer, putPlayer, deletePlayer } = require('../controllers/player')

// Crear los endpoints para la ruta /profesores y atenderlos mediante sus controladores
router.get('/', getPlayer);
router.post('/', postPlayer);
router.put('/', putPlayer);
router.delete('/', deletePlayer);

// Exportar router
module.exports = router;