// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getEnemyCampaign } = require('../controllers/enemigo')

// Crear los endpoints para la ruta /enemigo y atenderlos mediante sus controladores
router.get('/', getEnemyCampaign);

// Exportar router
module.exports = router;