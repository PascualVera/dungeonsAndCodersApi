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
    html:`<body style="width: 100%; background:#a34c50; color: white ">
    <header style= "height:5vh; width:100%; background:#264c5e ;"><h1 style="color:white; margin: 1vw">Dungeons & Coders Team</h1></header>
    <h2 style="color: white; margin:1vw" >Este es tu pin de acceso temporal:</h2>
    <h1 style="margin:1vw; font-size: 3rem">${temporaryPin}</h1> 
    <div style="margin:1vw; font-size: 1rem">La validez de esta contraseña
    expirará en 24 horas, cambia la contraseña en tu area personal usando este mismo pin.
    </div>
    </body>
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