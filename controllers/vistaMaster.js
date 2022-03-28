const { dungeonsDB } = require('../bbdd');

const getPlayerHitPoints = (req, res) => {
	let id = req.query.id

	let sql = `SELECT  player.idUser, player.idCharacter, characterpre.name, player.hitPoints FROM player
	JOIN user ON (player.idUser = user.idUser)
	JOIN campaign ON (player.idCampaign = campaign.idCampaign) 
    JOIN characterpre ON (player.idCharacter = characterpre.idCharacter)
	WHERE campaign.idCampaign = '${id}'`
	dungeonsDB.query(sql, (err, result) => {
		if (err) {
			let respuesta = {ok:false, result:err.sqlMessage}
			res.send(respuesta)
		} else {
			let respuesta = {ok:true, resultado:result}
			res.status(200).json(respuesta)
		}
	})
}

const getEnemyHitPoints = (req, res) => {
	let id = req.query.id

	let sql = `SELECT enemy.idEnemy, enemypre.idEnemyPre, enemypre.name, enemy.hitPoints FROM enemy
    JOIN enemypre ON (enemypre.idEnemyPre = enemy.idEnemyPre) 
    JOIN campaign ON (campaign.idCampaign = enemy.idCampaign) 
    JOIN enemypre_campaignpre ON (enemypre_campaignpre.idEnemyPre = enemy.idEnemyPre)
	WHERE campaign.idCampaign = '${id}'`
	dungeonsDB.query(sql, (err, result) => {
		if (err) {
			let respuesta = {ok:false, result:err.sqlMessage}
			res.send(respuesta)
		} else {
			let respuesta = {ok:true, resultado:result}
			res.status(200).json(respuesta)
		}
	})
}

const getGuiaMaster = (req, res) =>{
	let id = req.query.id;

	let sql= `SELECT campaignpre.campaignName, campaignpre.routeMasterManual FROM campaignpre JOIN campaign ON campaignpre.idCampaignPre = campaign.idCampaignPre WHERE campaign.idCampaign = '${id}'`
	dungeonsDB.query(sql, (err, result) => {
		if (err) {
			let respuesta = {ok:false, result:err.sqlMessage}
			res.send(respuesta)
		} else {
			let respuesta = {ok:true, resultado:result}
			res.status(200).json(respuesta)
		}
	})
}

//PUT

const putEnemyLifePoints = (req, res) =>{
	const {hitPoints, idEnemy} = req.body
	let params = [ hitPoints, idEnemy]

	let sql = 'UPDATE enemy SET hitPoints= ? WHERE idEnemy = ?';
	dungeonsDB.query(sql, params, (err, result) => {
		if (err) {
			let respuesta = {ok:false, result:err.sqlMessage}
			res.send(respuesta)
		} else {
			let respuesta = {ok:true, resultado:result}
			res.status(200).json(respuesta)
		}
	})
}

const putPlayerLifePoints = (req, res) =>{
	const {hitPoints, idPlayer} = req.body
	let params = [ hitPoints, idPlayer]

	let sql = 'UPDATE player SET hitPoints= ? WHERE idPlayer = ?';
	dungeonsDB.query(sql, params, (err, result) => {
		if (err) {
			let respuesta = {ok:false, result:err.sqlMessage}
			res.send(respuesta)
		} else {
			let respuesta = {ok:true, resultado:result}
			res.status(200).json(respuesta)
		}
	})
}

// Exportar controladores

module.exports={
    getPlayerHitPoints,
    getEnemyHitPoints,
	getGuiaMaster,
	putEnemyLifePoints,
	putPlayerLifePoints
}