const { Router } = require('express');
const { getMaster } = require('../controllers/getMaster');
const router = Router();

router.get('/',getMaster)

module.exports = router