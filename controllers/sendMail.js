const req = require('express/lib/request')
const res = require('express/lib/response')
const nodemailer = require('nodemailer')


 function sendMail(req,res){


  //Variables de la nueva contraseña
  let temporaryPin = Math.floor(Math.random()*(999999-100000+1)+100000) 
  let date = new Date();
  date.setDate(date.getDate() + 1)
  //Transporter
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'dungeonsandcoders@gmail.com',
      pass: 'Dungeon.pass2022'
    }
  })
  let mailOptions = {
    from: 'dungeonsandcoders@gmail.com',
    to: req.body.email,
    subject:'Contraseña temporal',
    html: `Este es tu pin de acceso temporal: ${temporaryPin}, la validez de esta contraseña
    expirará en 24 horas, cambia tu contraseña en tu area personal usando este mismo pin.
    `
  }
   transporter.sendMail(mailOptions,(err,info)=>{
     if(err){
       res.send(err)
     }else{
       console.log(temporaryPin)
       let respuesta = { ok: true, tempPass: temporaryPin, timeOutDate: date};
            return res.status(200).json(respuesta);
     }
   })

}
module.exports = { sendMail }