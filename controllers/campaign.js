// Conexión dungeonsDB
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /campaign
// GET
const getCampaign = (req, res) => {

    // idMaster para el perfil
    const { idCampaign, idMaster } = req.query;
    let params = [idCampaign];
    let sql;

    if (!idCampaign) {
        sql = "SELECT campaign.idCampaign, campaign.campaignName, campaign.numPlayer, campaign.maxPlayer, campaign.public, campaignpre.campaignName AS campaignNamePre, campaignpre.playerMin, campaignpre.playerMax, campaign.idCampaignPre FROM campaign JOIN campaignpre ON campaign.idCampaignPre = campaignpre.idCampaignPre WHERE campaign.numPlayer < campaign.maxPlayer AND NOT campaign.closed"
    } else {
        sql = "SELECT campaign.idCampaign, campaign.campaignName, campaign.idCampaignPre, campaign.date, campaign.numPlayer, campaign.maxPlayer, campaignpre.playerMin, campaign.public,campaign.closed, user.name FROM campaign JOIN user ON campaign.idMaster = user.idUser JOIN campaignpre ON campaign.idCampaignPre = campaignpre.idCampaignPre WHERE campaign.idCampaign = ?"
    };
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.length == 0 && idCampaign) {
                respuesta = { ok: false, message: `Campaña con id ${idCampaign} no encontrado` };
            } else if (idCampaign) {
                respuesta = { ok: true, message: `Campaña con id ${idCampaign}`, resultado: result };
            } else {
                respuesta = { ok: true, message: 'Campañas disponibles', resultado: result };
            }
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// POST
const postCampaign = (req, res) => {

    const { idCampaign, campaignName, idCampaignPre, idMaster, date, numPlayer, maxPlayer, public, closed } = req.body;
    let params = [idCampaign, campaignName, idCampaignPre, idMaster, date, numPlayer, maxPlayer, public, closed];
    let sql = 'INSERT INTO campaign (idCampaign, campaignName, idCampaignPre, idMaster, date, numPlayer, maxPlayer, public, closed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let resultados = [result];
            params = [idCampaignPre];
            sql = 'SELECT enemypre_campaignpre.idCampaignPre, enemypre_campaignpre.idEnemyPre, enemypre_campaignpre.cantidad, enemypre.hitPoint FROM enemypre_campaignpre JOIN enemypre ON enemypre_campaignpre.idEnemyPre = enemypre.idEnemyPre WHERE enemypre_campaignpre.idCampaignPre = ?';
            dungeonsDB.query(sql, params, (error, result) => {
                if (!error) {
                    resultados.push(result);
                    params = [];
                    result.forEach((enemigo) => {
                        for (let i = 0; i < enemigo.cantidad; i++) {
                            params.push([idCampaign, enemigo.idEnemyPre, enemigo.hitPoint])
                        }
                    })
                    sql = "INSERT INTO enemy (idCampaign, idEnemyPre, hitPoints) VALUES ?"
                    dungeonsDB.query(sql, [params], (error, result) => {
                        if (!error) {
                            resultados.push(result);
                            let respuesta = { ok: true, message: 'Array de resultados', resultado: resultados };
                            return res.status(200).send(respuesta);
                        } else {
                            let respuesta = { ok: false, message: error.sqlMessage };
                            return res.status(400).send(respuesta);
                        }
                    });
                } else {
                    let respuesta = { ok: false, message: error.sqlMessage };
                    return res.status(400).send(respuesta);
                }
            })
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// PUT
const putCampaign = (req, res) => {

    const { numPlayer, closed, idCampaign } = req.body;
    let params = [numPlayer, closed, idCampaign];
    let sql = "UPDATE campaign SET numPlayer = COALESCE(?, numPlayer), closed = COALESCE(?, closed) WHERE idCampaign = ?";
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.affectedRows == 0) {
                respuesta = { ok: false, message: `Campaña con id ${req.body.idCampaign} no encontrado` };
            } else {
                respuesta = { ok: true, message: `Campaña con id ${req.body.idCampaign} modificado` };
            }
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// DELETE
const deleteCampaign = (req, res) => {
    const { idCampaign } = req.body;
    let params = [idCampaign];
    let sql = "DELETE FROM campaign WHERE idCampaign = ?";
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.affectedRows == 0){
                respuesta = { ok: false, message: `Campaña con id ${idCampaign} no encontrada`};
            }else {
                respuesta = { ok: true, message: `Campaña con id ${idCampaign} eliminada`};
            }
            return res.status(200).send(respuesta);            
        }else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// Exportar controladores
module.exports = {
    getCampaign,
    postCampaign,
    putCampaign,
    deleteCampaign
}