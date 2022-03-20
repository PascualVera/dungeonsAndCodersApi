// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Módulo de encriptación
const bcrypt = require('bcryptjs')

// Controladores endpoint /usuario
// GET
const getUsuario = (req, res) => {
    return res.status(200).send({ ok: true, message: `getUsuario works!!` });

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
const postUsuario = (req, res) => {
    const { name, email, password, urlAvatar } = req.body;

    // Encriptar password
    const salt = bcrypt.genSaltSync();
    const passwordCrypt  = bcrypt.hashSync(password, salt);

    let params = [name, email, passwordCrypt, urlAvatar];
    let sql = 'INSERT INTO User (name, email, password, urlAvatar) VALUES (?, ?, ?, ?)';
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: true, message: `Agregado usuario con id ${result.insertId}`, resultado: { idUser: result.insertId }};
            return res.status(200).json(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).json(respuesta);
        }
    })    
};

// PUT
const putUsuario = (req, res) => {
    
    return res.status(200).send({ ok: true, message: `putUsuario works!!` });

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
const deleteUsuario = (req, res) => {

     let params = [req.body.idUser];
     let sql = "DELETE FROM User WHERE idUser = ?";
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.affectedRows == 0){
                respuesta = { ok: false, message: `Usuario con id ${req.body.idUser} no encontrado`};
            }else {
                respuesta = { ok: true, message: `Usuario con id ${req.body.idUser} eliminado`};
            }
            return res.status(200).json(respuesta);            
        }else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(200).json(respuesta);
        }
    })
};

// Exportar controladores
module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}