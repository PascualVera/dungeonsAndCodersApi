// Conexión codenotchBBDD
const { dungeonsDB } = require("../bbdd")

// Controladores endpoint /personaje
// GET
const getPlayer = (req, res) => {
	let id = req.query.id

	let sql = `SELECT user.name, campaign.campaignName, player.* FROM player
	JOIN user ON (player.idUser = user.idUser)
	JOIN campaign ON (player.idCampaign = campaign.idCampaign)
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

// POST
const postPlayer = (req, res) => {
	const { hitPoints, idCharacter, idUser, idCampaign } = req.body
	let params = [hitPoints, idCharacter, idUser, idCampaign]
	let sql = "INSERT INTO player (hitpoints , idCharacter, idUser, idCampaign) VALUES( ?, ?, ?, ?)"

	dungeonsDB.query(sql, params, (err, result) => {
		if (err) {
			let respuesta = { ok: false, message: err.sqlMessage }
			return res.status(500).json(respuesta)
		} else {
			let respuesta = { ok: true, message: `Player con id ${result.insertId} añadido` }
			res.status(200).json(respuesta)
		}
	})
}

// PUT
const putPlayer = (req, res) => {
	return res.status(200).send({ ok: true, message: `putPlayer works!!` })

	// const { titulo, tipo, autor, precio, foto, id_libro } = req.body;
	// let params = [titulo, tipo, autor, precio, foto, id_libro];
	// let sql = "UPDATE libro SET titulo = COALESCE(?, titulo)," +
	// "tipo = COALESCE(?, tipo), autor = COALESCE(?, autor)," +
	//           "precio = COALESCE(?, precio), foto = COALESCE(?, foto) WHERE id_libro = ?";
	// appbooksBBDD.query(sql, params, (error, result) => {
	//     if (!error) {
	//         let respuesta;
	//         if (result.affectedRows == 0){
	//             respuesta = { ok: false, message: `Libro con id ${req.body.id_libro} no encontrado`};
	//         }else {
	//             respuesta = { ok: true, message: `Libro con id ${req.body.id_libro} modificado`};
	//         }
	//         return res.status(200).json(respuesta);
	//     }else {
	//         let respuesta = { ok: false, message: error.sqlMessage };
	//         return res.status(200).json(respuesta);
	//     }
	// })
}

// DELETE
const deletePlayer = (req, res) => {
	return res.status(200).send({ ok: true, message: `deletePlayer works!!` })

	// let params = [req.body.id_libro];
	// let sql = "DELETE FROM libro WHERE id_libro = ?";
	// appbooksBBDD.query(sql, params, (error, result) => {
	//     if (!error) {
	//         let respuesta;
	//         if (result.affectedRows == 0){
	//             respuesta = { ok: false, message: `Libro con id ${req.body.id_libro} no encontrado`};
	//         }else {
	//             respuesta = { ok: true, message: `Libro con id ${req.body.id_libro} eliminado`};
	//         }
	//         return res.status(200).json(respuesta);
	//     }else {
	//         let respuesta = { ok: false, message: error.sqlMessage };
	//         return res.status(200).json(respuesta);
	//     }
	// })
}

// Exportar controladores
module.exports = {
	getPlayer,
	postPlayer,
	putPlayer,
	deletePlayer,
}
