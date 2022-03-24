const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /chat
// GET
const getEquip = (req, res) => {

    let id = req.query.idCharacter
    let sql = `SELECT characterpre.idCharacter, name, weapon.nameEquip, weapon.bonusEquip, weapon.damageType,
    weapon.anotacion FROM dungeonsdb2.characterpre
    JOIN weapon_character ON (characterpre.idCharacter = weapon_character.idCharacter)
    JOIN weapon ON (weapon.idEquip = weapon_character.idWeapon)
    WHERE characterpre.idCharacter = ${id}`

   dungeonsDB.query(sql,(err,result)=>{
     if(err){
      let respuesta = { ok: false, message: err.sqlMessage };
            return res.status(400).json(respuesta);
     }else{
       let respuesta = {ok:true, resultado:result}
       return res.status(200).json(respuesta)
     }
   })
};

module.exports = {getEquip}