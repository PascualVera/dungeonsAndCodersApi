let express = require("express")
let mysql = require("mysql2")
let app = express()
let cors = require("cors")
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
let port = process.env.PORT || 4000
let connection = mysql.createConnection({
	host: "dungeons.crskj102zhdh.us-east-1.rds.amazonaws.com",
	user: "admin",
	password: "Dungeons994",
	database: "dungeonsDB",
})
connection.connect(function (error) {
	if (error) {
		console.log(error)
	} else {
		console.log("Connected")
	}
})
app.listen(port,()=>{
  console.log('app listen on port ' + port)
})