// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getChat, postChat, putChat, deleteChat } = require('../controllers/chat')

// Crear los endpoints para la ruta /chat y atenderlos mediante sus controladores
router.get('/', getChat);
router.post('/', postChat);
router.put('/', putChat);
router.delete('/', deleteChat);

// Exportar router
module.exports = router;