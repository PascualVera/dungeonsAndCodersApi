// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPlayerHitPoints, getEnemyHitPoints, getGuiaMaster } = require('../controllers/vistaMaster');

// Crear los endpoints para la ruta /campaign y atenderlos mediante sus controladores
router.get('/player', getPlayerHitPoints);
router.get('/enemy', getEnemyHitPoints);
router.get('/', getGuiaMaster);

// Exportar router
module.exports = router;