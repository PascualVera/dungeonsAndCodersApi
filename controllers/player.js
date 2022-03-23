// Conexión codenotchBBDD
const { dungeonsDB } = require("../bbdd")

// Controladores endpoint /personaje
// GET
const getPlayer = (req, res) => {
	let sql = "SELECT * FROM player"
	dungeonsDB.query(sql, (err, result) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.send(result)
		}
	})
}

// POST
const postPlayer = (req, res) => {
	const { hitpoints, idCharacter, idUser, idCampaign } = req.body
	let params = [hitpoints, idCharacter, idUser, idCampaign]
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
