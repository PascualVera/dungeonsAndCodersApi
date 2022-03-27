// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /chat
// GET
const getChat = (req, res) => {
    const { idCampaign } = req.query;
    let params = [idCampaign];
    let sql = "SELECT * FROM chat WHERE campaignCode = ?";

    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: true, message: `Listado mensajes campaña: ${idCampaign}`, resultado: result };
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// POST
const postChat = (req, res) => {
    const { campaignCode, emisor, mensaje, fecha } = req.body;
    let params = [campaignCode, emisor, mensaje, fecha];
    let sql = 'INSERT INTO chat (campaignCode, emisor, mensaje, fecha) VALUES (?, ?, ?, ?)';
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: true, message: `Registrado mensaje con id ${result.insertId}`, resultado: { idChat: result.insertId }};
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })    
};

// PUT
const putChat = (req, res) => {
    return res.status(200).send({ ok: true, message: `putChat works!!` });

    // const { titulo, tipo, autor, precio, foto, id_libro } = req.body;
    // let params = [titulo, tipo, autor, precio, foto, id_libro];
    // let sql = "UPDATE libro SET titulo = COALESCE(?, titulo)," +
    //           "tipo = COALESCE(?, tipo), autor = COALESCE(?, autor)," +
    //           "precio = COALESCE(?, precio), foto = COALESCE(?, foto) WHERE id_libro = ?";
    // appbooksBBDD.query(sql, params, (error, result) => {
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
const deleteChat = (req, res) => {
    return res.status(200).send({ ok: true, message: `deleteChat works!!` });

    // let params = [req.body.id_libro];
    // let sql = "DELETE FROM libro WHERE id_libro = ?";
    // appbooksBBDD.query(sql, params, (error, result) => {
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
    getChat,
    postChat,
    putChat,
    deleteChat
}