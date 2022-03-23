// Conexión dungeonsDB
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /campaign
// GET
const getCampaign = (req, res) => {
    
    // idUser para el perfil
    const { idCampaign, idUser} = req.query;

    if (!idCampaign && !idUser) {
        let sql = "SELECT campaign.idCampaign, campaign.campaignName, campaign.numPlayer, campaign.public, campaignpre.campaignName AS campaignNamePre, campaignpre.playerMin, campaignpre.playerMax FROM campaign JOIN campaignpre ON campaign.idCampaignPre = campaignpre.idCampaignPre WHERE campaign.numPlayer < campaignpre.PlayerMax AND NOT campaign.closed"
        dungeonsDB.query(sql, (error, result) => {
            if(!error){
                let respuesta = {ok: true, message: 'Campañas disponibles' , resultado: result};
                return res.status(200).send(respuesta);
            }else{
                let respuesta = { ok: false, message: error.sqlMessage };
                return res.status(400).send(respuesta);
            }
        })
    } else {
        // Aquí el get de campaña completo por idCampaign del query (con id)
        let respuesta = {ok: true, message: 'Pendiente: Datos completos de campaña'};
        return res.status(200).send(respuesta);
    }
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
    return res.status(200).send({ ok: true, message: `putCampaign works!!` });

    // const { titulo, tipo, autor, precio, foto, id_libro } = req.body;
    // let params = [titulo, tipo, autor, precio, foto, id_libro];
    // let sql = "UPDATE libro SET titulo = COALESCE(?, titulo)," +
    //           "tipo = COALESCE(?, tipo), autor = COALESCE(?, autor)," +
    //           "precio = COALESCE(?, precio), foto = COALESCE(?, foto) WHERE id_libro = ?";
    // dungeonsDB.query(sql, params, (error, result) => {
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