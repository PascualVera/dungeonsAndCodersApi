const { Router } = require('express');
const { getSpell } = require('../controllers/spell');
const router = Router();

router.get('/',getSpell)

module.exports = router