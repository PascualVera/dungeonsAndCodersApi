// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getPlayerHitPoints, getEnemyHitPoints, getGuiaMaster, putEnemyLifePoints, putPlayerLifePoints } = require('../controllers/vistaMaster');

// Crear los endpoints para la ruta /campaign y atenderlos mediante sus controladores
router.get('/player', getPlayerHitPoints);
router.get('/enemy', getEnemyHitPoints);
router.get('/', getGuiaMaster);
router.put('/enemy', putEnemyLifePoints);
router.put('/player', putPlayerLifePoints)

// Exportar router
module.exports = router;