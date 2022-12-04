const express = require('express');
const fs =require('fs');
const https = require('https');
const http = require('http');
const app = express();
module.exports = app;  
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');




//Middleware
app.use(express.static(path.join(__dirname +'.../Funkthetown/Frontend')));

// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
 app.use(bodyParser.json())


 app.use(cors())




 const httpServer = http.createServer((req,res)=>{
  res.writeHead(301,{Location:`https://${req.headers.host}${req.url}`});
    res.end();
}).listen(80);

   const httpsServer = https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/www.funkthetown.net/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.funkthetown.net/fullchain.pem'),
 }, app).listen(443);





const userRoutes = require('./routes/user');


require('dotenv').config();

// const atlasUser = process.env.ATLAS_USER
// const atlasPassword = process.env.ATLAS_PASSWORD

mongoose.connect(`mongodb+srv://hao:shangai2025@funkthetowncluster.bups6.mongodb.net/Funkthetowndb`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



  app.use('/', userRoutes);
  

  

 

