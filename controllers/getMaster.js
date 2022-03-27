const { dungeonsDB } = require('../bbdd');

const getMaster = (req,res)=>{
  let id = req.query.id
  let sql =`SELECT user.name as master, campaign.*, campaignpre.campaignName as campaignpreName FROM campaign
  JOIN user On (user.idUser = campaign.idMaster)
  Join campaignpre ON (campaignpre.idCampaignpre = campaign.idCampaignpre)
  WHERE user.idUser ='${id}'` 

  dungeonsDB.query(sql,(err,result)=>{

    if(err){
      console.log(err)
      let respuesta = {ok:false, message: err.sqlMessage}
      return res.status(400).send(respuesta)
    }else{
      let respuesta = {ok:true, resultado:result}
      return res.status(200).send(respuesta)
    }
  })
}

module.exports = { getMaster }