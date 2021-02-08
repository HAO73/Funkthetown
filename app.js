
const express = require('express');
const fs =require('fs');
const https = require('https');
const http = require('http');
const app = express();
module.exports = app;
const bodyParser = require ('body-parser');
const path = require('path');

// const env = require(`/environment/${process.env.NODE_ENV}`);


//Middleware
app.use(express.static(__dirname +'/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function(){

    console.log("Server started");
});

// const httpServer = http.createServer((req,res)=>{
//   res.writeHead(301,{Location:`https://${req.headers.host}${req.url}`});
//   res.end();
// }).listen(80);

// const httpsServer = https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/www.funkthetown.net/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/www.funkthetown.net/fullchain.pem'),
// }, app).listen(443);




app.set('view engine','ejs');



app.post('/', function (req,res){
    
  addEmailToMailchimp(req.body.email);
    
    // const confirm = modal() ;
          // setTimeout(function(){

            res.render('index', function (err, html) {
              res.send(html)
            })
            


  // },3000);

  })


  // sendFile(__dirname+'/index.html');



function addEmailToMailchimp(email) {

  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://us2.api.mailchimp.com/3.0/lists/8af872df3c/members',
    'headers': {
      'Authorization': 'Basic aGFvOmM4OTk2M2EzOThlODE1ZGQ1NDhmMzBjZTQ4ODUyOTI2LXVzMg==',
      'Content-Type': 'application/json',
      'Cookie': 'ak_bmsc=8D2C3706EC60AAB075D659E37EE2B1BF02167195890500003E4D775F99991B13~pl5BiFaLOkE1BOZ+FhGRNLP/D5q+WNADkV/IItWN3E+FMwcSrxhqlHVypec9KZmGWupO9ImTL1+bntdNXIs31HVBoQRKlj7JLp90Ma7CsmQCESU76huWnIuWHKYGKkGaVRQdIVA6kZHiHF/zzMlyg+Z9pGvqL0imCJigjbSGKmc8VFmmsdWLXIBg3J6AWxaDjZR9ICAfMvZlGvUoLMGU+3+WTRcRSWO+X8s5wVJRq6Xio=; bm_sv=5B372C21AA2A1D88B00B74CE35B527F3~oaVEkp6P1a0srXYDUOT8aph9Gxg0NQdgUtCA/N5EGFQwOstM/cM4lenzlFCe+cbZ+8pDM/tylTX2EDXrzP5DWd0G2pOwS98fcZchfOuEBIGCeWI6Tfs99Vxo6HOLai5GuuC6smMnrxLlkULXZEWAwsJK1Y5SGev6yoUd4hmTSrw='
    },
    body: JSON.stringify({"email_address":email,"status":"subscribed"})
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  

}


