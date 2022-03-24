const { Router } = require('express');
const { getSpell, getSpellEnemy } = require('../controllers/spell');
const router = Router();

router.get('/',getSpell);
router.get('/enemy',getSpellEnemy);

module.exports = router