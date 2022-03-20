const { Router } = require('express');
const router = Router();


const {sendMail} = require('../controllers/sendMail')
router.post('/',sendMail)


module.exports = router