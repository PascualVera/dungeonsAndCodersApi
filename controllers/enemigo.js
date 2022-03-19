// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /enemigo
// GET
const getEnemigo = (req, res) => {
    return res.status(200).send({ ok: true, message: `getEnemigo works!!` });

    // const { id_usuario, id_libro } = req.query;
    // let params = [id_usuario];
    // let sql;
    // if (!id_libro) {
    //     sql = "SELECT * FROM libro WHERE id_usuario = ? ORDER BY titulo";
    // }else {
    //     params.push(id_libro)
    //     sql = "SELECT * FROM libro WHERE id_usuario = ? AND id_libro = ?";
    // };
    // appbooksBBDD.query(sql, params, (error, result) => {
    //     if (!error) {
    //         let respuesta;
    //         if (result.length == 0){
    //             respuesta = { ok: false, message: `No se encontraron libros` };
    //         }else if (id_libro){
    //             respuesta = { ok: true, message: `Libro con id ${id_libro}`, resultado: result};                
    //         }else {
    //             respuesta = { ok: true, message: `Listado libros`, resultado: result};                
    //         }
    //         return res.status(200).json(respuesta);
    //     }else {
    //         let respuesta = { ok: false, message: error.sqlMessage };
    //         return res.status(200).json(respuesta);
    //     }
    // })
};

// POST
const postEnemigo = (req, res) => {
    return res.status(200).send({ ok: true, message: `postEnemigo works!!` });

    // const { titulo, tipo, autor, precio, foto, id_usuario } = req.body;
    // let params = [titulo, tipo, autor, precio, foto, id_usuario];
    // let sql = 'INSERT INTO libro (titulo, tipo, autor, precio, foto, id_usuario) VALUES (?, ?, ?, ?, ?, ?)';
    // appbooksBBDD.query(sql, params, (error, result) => {
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
const putEnemigo = (req, res) => {
    return res.status(200).send({ ok: true, message: `putEnemigo works!!` });

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
const deleteEnemigo = (req, res) => {
    return res.status(200).send({ ok: true, message: `deleteEnemigo works!!` });

    //  let params = [req.body.id_libro];
    //  let sql = "DELETE FROM libro WHERE id_libro = ?";
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
    getEnemigo,
    postEnemigo,
    putEnemigo,
    deleteEnemigo
}