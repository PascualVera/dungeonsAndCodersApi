// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getCampaign, postCampaign, putCampaign, deleteCampaign } = require('../controllers/campaign')

// Crear los endpoints para la ruta /campaign y atenderlos mediante sus controladores
router.get('/', getCampaign);
router.post('/', postCampaign);
router.put('/', putCampaign);
router.delete('/', deleteCampaign);

// Exportar router
module.exports = router;