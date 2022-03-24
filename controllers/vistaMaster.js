const { dungeonsDB } = require('../bbdd');

const getEnemyCampaign = (req, res) =>{

    const idCampaign = req.body.idCampaign;
    let sql;
    let params;
    if(idCampaign)
    {
        sql = `SELECT ec.cantidad, ep.*  FROM enemypre AS ep INNER JOIN enemypre_campaignpre AS ec ON (ep.idEnemyPre = ec.idEnemyPre) WHERE ec.idCampaignPre = ?`;
        params= [idCampaign];

        dungeonsDB.query(sql, params, (error, result) => {
            if(!error)
            {
                let respuesta = {ok: true, message: 'Enemigos de la campaña '+idCampaign , resultado: result};
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