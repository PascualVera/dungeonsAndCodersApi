// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Módulo de encriptación
const bcrypt = require('bcryptjs')

// Controladores endpoint /usuario
// GET
const getUsuario = (req, res) => {
    const { idUser } = req.query;
    let params = [idUser];
    let sql;
    if (!idUser) {
        sql = "SELECT idUser, name, email, urlAvatar FROM user";
    } else {
        sql = "SELECT idUser, name, email, urlAvatar FROM user WHERE idUser = ?";
    };
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {            
            let respuesta;
            if (result.length == 0 && idUser) {
                respuesta = { ok: false, message: `Usuario con id ${idUser} no encontrado`};
            } else if (idUser) {
                respuesta = { ok: true, message: `Usuario con id ${idUser}`, resultado: result };
            } else {
                respuesta = { ok: true, message: `Listado usuarios`, resultado: result };
            }
            return res.status(200).send(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })
};

// POST
const postUsuario = (req, res) => {
    const { name, email, password, urlAvatar } = req.body;

    // Encriptar password
    const salt = bcrypt.genSaltSync();
    const passwordCrypt  = bcrypt.hashSync(password, salt);

    let params = [name, email, passwordCrypt, urlAvatar];
    let sql = 'INSERT INTO user (name, email, password, urlAvatar) VALUES (?, ?, ?, ?)';
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: true, message: `Agregado usuario con id ${result.insertId}`, resultado: { idUser: result.insertId }};
            return res.status(200).json(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).send(respuesta);
        }
    })    
};

// PUT
const putUsuario = (req, res) => {
    const { idUser, password, passTemp, passTimeOut, urlAvatar } = req.body;

    // Encriptar password
    let passwordCrypt;
    let passTempCrypt;
    if (password) {
        let salt = bcrypt.genSaltSync();
        passwordCrypt  = bcrypt.hashSync(password, salt);
    }
    if (passTemp) {
        let salt = bcrypt.genSaltSync();
        passTempCrypt  = bcrypt.hashSync(passTemp, salt);
    }
    let params = [passwordCrypt, passTempCrypt, passTimeOut, urlAvatar, idUser];
    let sql = "UPDATE user SET password = COALESCE(?, password)," +
              "passTemp = COALESCE(?, passTemp), passTimeOut = COALESCE(?, passTimeOut)," +
              "urlAvatar = COALESCE(?, urlAvatar) WHERE idUser = ?";
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta;
            if (result.affectedRows == 0){
                respuesta = { ok: false, message: `Usuario con id ${req.body.idUser} no encontrado`};
            }else {
                respuesta = { ok: true, message: `Usuario con id ${req.body.idUser} modificado`};
            }
            return res.status(200).json(respuesta);
        }else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).json(respuesta);
        }
    })
};

// DELETE
const deleteUsuario = (req, res) => {

     let params = [req.body.idUser];
     let sql = "DELETE FROM user WHERE idUser = ?";
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