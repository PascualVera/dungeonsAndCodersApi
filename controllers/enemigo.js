// Conexión codenotchBBDD
const { dungeonsDB } = require('../bbdd');

// Controladores endpoint /enemigo
// GET
const getEnemyCampaign = (req, res) =>{

    const idCampaignPre = req.query.id;
    let sql;
    let params;
    if(idCampaignPre)
    {
        sql = `SELECT ec.cantidad, ep.*  FROM enemypre AS ep INNER JOIN enemypre_campaignpre AS ec ON (ep.idEnemyPre = ec.idEnemyPre) WHERE ec.idCampaignPre = ?`;
        params= [idCampaignPre];

        dungeonsDB.query(sql, params, (error, result) => {
            if(!error)
            {
                let respuesta = {ok: true, message: 'Enemigos de la campaña '+idCampaignPre , resultado: result};
                return res.status(200).send(respuesta); 
            }else{
                let respuesta = { ok: false, message: error.sqlMessage };
                return res.status(400).send(respuesta);
            }
        })
    }else{
        let respuesta = {ok: true, message: 'Pendiente: Datos completos de campaña'};
        return res.status(200).send(respuesta);
    }
}

// Exportar controladores
module.exports = {
    getEnemyCampaign
}