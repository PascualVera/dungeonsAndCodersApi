const { query } = require("express")
const { dungeonsDB } = require("../bbdd")

function getCharacter(req, res) {
	let sql = "SELECT * FROM characterpre;"
	dungeonsDB.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
		}
	})
}
module.exports = { getCharacter }
