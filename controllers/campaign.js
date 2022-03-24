// Conexión dungeonsDB
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /campaign
// GET
const getCampaign = (req, res) => {

    // idUser para el perfil
    const { idCampaign, idUser } = req.query;
    let params = [idCampaign];
    let sql;

    if (!idCampaign) {
        sql = "SELECT campaign.idCampaign, campaign.campaignName, campaign.numPlayer, campaign.maxPlayer, campaign.public, campaignpre.campaignName AS campaignNamePre, campaignpre.playerMin, campaignpre.playerMax FROM campaign JOIN campaignpre ON campaign.idCampaignPre = campaignpre.idCampaignPre WHERE campaign.numPlayer < campaign.maxPlayer AND NOT campaign.closed"
    } else {
        sql = "SELECT campaign.idCampaign, campaign.campaignName, campaign.idCampaignPre, campaign.date, campaign.numPlayer, campaign.maxPlayer, campaign.public,campaign.closed, user.name FROM campaign JOIN user ON campaign.idMaster = user.idUser WHERE campaign.idCampaign = ?"
    };
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.length == 0 && idCampaign) {
                respuesta = { ok: false, message: `Campaña con id ${idCampaign} no encontrado`};
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
    return res.status(200).send({ ok: true, message: `postCampaign works!!` });

    // const { titulo, tipo, autor, precio, foto, id_usuario } = req.body;
    // let params = [titulo, tipo, autor, precio, foto, id_usuario];
    // let sql = 'INSERT INTO libro (titulo, tipo, autor, precio, foto, id_usuario) VALUES (?, ?, ?, ?, ?, ?)';
    // dungeonsDB.query(sql, params, (error, result) => {
    //     if (!error) {
    //         let respuesta = { ok: true, message: `Registrado libro con id ${result.insertId}`, resultado: { id_libro: result.insertId }};
    //         return res.status(200).json(respuesta);
    //     } else {
    //         let respuesta = { ok: false, message: error.sqlMessage };
    //         return res.status(200).json(respuesta);
    //     }
    // })    
};

// PUT
const putCampaign = (req, res) => {

    const { numPlayer, closed, idCampaign } = req.body;
    let params = [numPlayer, closed, idCampaign];
    let sql = "UPDATE campaign SET numPlayer = COALESCE(?, numPlayer), closed = COALESCE(?, closed) WHERE idCampaign = ?";
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.affectedRows == 0){
                respuesta = { ok: false, message: `Campaña con id ${req.body.idCampaign} no encontrado`};
            }else {
                respuesta = { ok: true, message: `Campaña con id ${req.body.idCampaign} modificado`};
            }
            return res.status(200).json(respuesta);
        }else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(200).json(respuesta);
        }
    })
};

// DELETE
const deleteCampaign = (req, res) => {
    return res.status(200).send({ ok: true, message: `deleteCampaign works!!` });

    //  let params = [req.body.id_libro];
    //  let sql = "DELETE FROM libro WHERE id_libro = ?";
    // dungeonsDB.query(sql, params, (error, result) => {
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
};

// Exportar controladores
module.exports = {
    getCampaign,
    postCampaign,
    putCampaign,
    deleteCampaign
}