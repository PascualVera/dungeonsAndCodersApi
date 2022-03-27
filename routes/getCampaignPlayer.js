const { Router } = require('express');
const { getPlayerProfile } = require('../controllers/getPlayer');
const router = Router();

router.get('/',getPlayerProfile)

module.exports = router