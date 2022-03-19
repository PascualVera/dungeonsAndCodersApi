// Importaciones
const mysql = require('mysql2');

// Datos conexión
const cadenaConexion = {
    host: "dungeons.crskj102zhdh.us-east-1.rds.amazonaws.com",
	user: "admin",
	password: "Dungeons994",
	database: "dungeonsDB",
}

// Crear Conexión y conectar con BBDD dungeonsDB mysql AWS
const dungeonsDB = mysql.createConnection(cadenaConexion)

dungeonsDB.connect((error) => {
	if (!error) {
		console.log("Conectado a MySql dungeonsDB en AWS")
	} else {
		console.log(error)
	}
})

module.exports = {
    dungeonsDB
}


