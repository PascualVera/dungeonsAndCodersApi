// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Controlador endpoint /login
// POST
const postLogin = (req, res) => {

    const { nameEmail, password } = req.body;
    let params = [nameEmail, nameEmail, password];
    let sql = 'SELECT * FROM User WHERE (name = ? || email = ?) && (password = ?)';
    dungeonsDB.query(sql, params, (error, result) => {
        if (!error) {
            let respuesta = { ok: false, message: `Usuario o contraseña incorrectos` };                
            if (result.length > 0) {
                const { idUser, name, email, urlAvatar } = result[0]
                let user = {  idUser, name, email, urlAvatar };
                respuesta = { ok: true, message: `Login correcto`, resultado: user };
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