const { Router } = require("express")
const router = Router()

const { filterCharacter } = require("../controllers/character.filter")
router.get("/", filterCharacter)


module.exports = router