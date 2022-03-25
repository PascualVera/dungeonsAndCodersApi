const { query } = require("express")
const { dungeonsDB } = require("../bbdd")

function filterCharacter(req,res) {
	let id = req.query.id
	let sql = `SELECT characterpre.name, characterpre.idCharacter FROM characterpre
	JOIN player ON (player.idCharacter = characterpre.idCharacter)
	JOIN campaign ON (player.idCampaign = campaign.idCampaign)
	WHERE campaign.idCampaign = '${id}'`
	dungeonsDB.query(sql, (err,result)=>{
		if(err){
			let respuesta= {ok: false, message: err.sqlMessage}
			res.status(400).json(respuesta)
		}else{
			let respuesta = {ok:true, respuesta:result}
			res.status(200).json(respuesta)
		}
	})
}

module.exports = { filterCharacter }