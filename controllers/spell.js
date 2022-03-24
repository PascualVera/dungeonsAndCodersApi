// Controladores endpoint /enemigo

const { dungeonsDB } = require("../bbdd");

// GET
const getSpell = (req, res) => {
  const idCharacter = req.query.idCharacter
  let params = [idCharacter]

  let sql = `SELECT spell.spellName, spell.description, spell.duration, spell.reach FROM dungeonsdb2.characterpre
  JOIN spell_character ON (characterpre.idCharacter = spell_character.idCharacter)
  JOIN spell ON (spell.idSpell = spell_character.idSpell)
  WHERE characterpre.idCharacter = ${idCharacter}`


  dungeonsDB.query(sql,(err, result)=>{
    if(err){
      let respuesta = { ok: false, message: err.sqlMessage };
      return res.status(400).json(respuesta);
    }else{
      let respuesta = {ok:true, resultado:result}
      return res.status(200).json(respuesta)
    }
  })
};
module.exports = {getSpell}