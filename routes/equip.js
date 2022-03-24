const { Router } = require('express');
const router = Router();


const { getEquip, getEquipEnemy } = require('../controllers/equip');

router.get('/',getEquip)
router.get('/enemy', getEquipEnemy)

module.exports = router