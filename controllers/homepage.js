// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Controlador endpoint /home
// GET
const getHome = (req, res) => {
    let sql = 'SELECT user.name, campaign.campaignName FROM campaign JOIN user ON campaign.idMaster = user.idUser ORDER BY campaign.date DESC LIMIT 5';
    dungeonsDB.query(sql, (error, result) => {
        if (!error) {
            let respuesta = { ok: false, message: 'Las 5 campañas más recientes', resultado: result };  
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// Exportar controladores
module.exports = {
    getHome
}