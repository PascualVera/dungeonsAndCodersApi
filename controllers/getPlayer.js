const { dungeonsDB } = require('../bbdd');

const getPlayerProfile = (req,res)=>{
  let id = req.query.id
  let sql =`SELECT campaign.* , campaignpre.campaignName as campaignPreName FROM player
  JOIN user ON (user.idUser = player.idUser)
  JOIN campaign ON(campaign.idCampaign = player.idCampaign)
  JOIN campaignpre ON (campaign.idCampaignPre = campaignpre.idCampaignPre)
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

module.exports = { getPlayerProfile }