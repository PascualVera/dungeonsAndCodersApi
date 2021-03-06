// Puesta en marcha de app de express
const app = require("./app")
// Base de datos
require("./bbdd")

// ************************************************************************
// Middlewares para la carga de las rutas de cada endpoint correspondiente
// ************************************************************************
app.use("/login", require("./routes/login"))
app.use("/usuario", require("./routes/usuario"))
app.use("/campaign", require("./routes/campaign"))
app.use("/campaignPre", require("./routes/campaignPre"))
app.use("/chat", require("./routes/chat"))
app.use("/map", require("./routes/map"))
app.use("/player", require("./routes/player"))
app.use("/enemigo", require("./routes/enemigo"))
app.use("/sendMail", require("./routes/sendMail"))
app.use("/homepage", require("./routes/homepage"))
app.use("/character", require("./routes/character"))
app.use("/characterInGame", require("./routes/character.filter"))
app.use("/spell",require("./routes/spell"))
app.use("/vistaMaster", require("./routes/vistaMaster"))
app.use("/equip",require('./routes/equip'))
app.use('/getMaster',require('./routes/getMaster'))
app.use('/getPlayer',require('./routes/getCampaignPlayer'))
// ************************************************************************

// Respuesta a cualquier petición en '/'
app.all("/", (req, res) => {
	let respuesta = { ok: true, message: "Punto de inicio /" }
	res.status(200).send(respuesta)
})

// Respuesta a cualquier endponit erroneo
app.use((req, res) => {
	respuesta = { ok: false, codigo: 404, mensaje: "URL no encontrada" }
	res.status(404).send(respuesta)
})
