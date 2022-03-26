// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /map
// GET
const getMap = (req, res) => {
    const { idCampaignPre } = req.query;
    let params = [idCampaignPre];
    let sql = "SELECT * FROM campaignmap WHERE idCampaignPre = ?";

    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: true, message: `Listado mapas campaña predefinida con id: ${idCampaignPre}`, resultado: result };
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// Exportar controladores
module.exports = {
    getMap
}