const { Router } = require('express');
const router = Router();


const { getEquip } = require('../controllers/equip');

router.get('/',getEquip)

module.exports = router