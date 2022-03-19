// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuario')

// Crear los endpoints para la ruta /usuarios y atenderlos mediante sus controladores
router.get('/', getUsuario);
router.post('/', postUsuario);
router.put('/', putUsuario);
router.delete('/', deleteUsuario);

// Exportar router
module.exports = router;