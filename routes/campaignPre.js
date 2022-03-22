// Importar Router
const { Router } = require('express');
const router = Router();

// Importar controladores
const { getCampaignPre, postCampaignPre, putCampaignPre, deleteCampaignPre } = require('../controllers/campaignPre')

// Crear los endpoints para la ruta /campaign y atenderlos mediante sus controladores
router.get('/', getCampaignPre);
router.post('/', postCampaignPre);
router.put('/', putCampaignPre);
router.delete('/', deleteCampaignPre);

// Exportar router
module.exports = router;