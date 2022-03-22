// Conexión dungeonsDB
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /campaign
// GET
const getCampaignPre = (req, res) => {
    // return res.status(200).send({ ok: true, message: `getCampaign works!!` });

    const { id_campaign } = req.query;
    let params = [id_campaign];
    let sql;
    if (!id_campaign) {
        sql = "SELECT campaignName FROM campaignPre";
    }else {
        sql = "SELECT synopsis FROM campaignPre WHERE idCampaignPre = ?";
    };
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.length == 0){
                respuesta = { ok: false, message: `Campaña no encontrada` };
            }else if (id_campaign){
                respuesta = { ok: true, message: `El resumend de la campaña con id ${id_campaign}`, resultado: result};                
            }else {
                respuesta = { ok: true, message: `Listado de campañas`, resultado: result};                
            }
            return res.status(200).json(respuesta);
        }else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(200).json(respuesta);
        }
    })
};

// POST
const postCampaignPre = (req, res) => {
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
const putCampaignPre = (req, res) => {
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
const deleteCampaignPre = (req, res) => {
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
    getCampaignPre,
    postCampaignPre,
    putCampaignPre,
    deleteCampaignPre
}