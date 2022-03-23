// Importar Router
const { Router } = require("express")
const router = Router()

const { getCharacter } = require("../controllers/character")
router.get("/", getCharacter)

module.exports = router
