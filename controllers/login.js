// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Módulo de encriptación
const bcrypt = require('bcryptjs');

// Controlador endpoint /login
// POST
const postLogin = (req, res) => {
    const { nameEmail, password } = req.body;    
    let params = [nameEmail, nameEmail];
    let sql = 'SELECT * FROM User WHERE (name = ? || email = ?)';
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: false, message: `Usuario o contraseña incorrectos` };                
            if (result.length > 0) {
                const { idUser, name, email, passTemp, passTimeOut, urlAvatar } = result[0];
                let validPassword = bcrypt.compareSync(password, result[0].password);
                validPassword = validPassword || (bcrypt.compareSync(password, passTemp) && passTimeOut >= new Date());
                if (validPassword) {
                    let user = {  idUser, name, email, urlAvatar };
                    respuesta = { ok: true, message: `Login correcto`, resultado: user };
                }
            }
            return res.status(200).json(respuesta);
        } else {
            let respuesta = { ok: false, message: error.sqlMessage };
            return res.status(400).json(respuesta);
        }
    })
};

// Exportar controladores
module.exports = {
    postLogin
}