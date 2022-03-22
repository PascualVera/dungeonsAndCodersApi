// Conexión dungeonsDB
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /campaign
// GET
const getCampaign = (req, res) => {
    // return res.status(200).send({ ok: true, message: `getCampaign works!!` });

    let sql = `SELECT u.name, cp.campaignName FROM campaign AS c INNER JOIN user AS u ON (c.idMaster = u.idUser) 
    INNER JOIN campaignpre AS cp ON( c.idCampaignPre = cp.idCampaignPre) ORDER BY c.date LIMIT 5`
    dungeonsDB.query(sql, (error, result) => {
        if(!error){
            let respuesta = {ok: true, message: `Las 5 ultimas partidas` , resultado: result};
            return res.status(200).json(respuesta);
        }else{
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(200).json(respuesta);
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