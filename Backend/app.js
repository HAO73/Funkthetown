const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const userRoutes = require('./routes/user');
const path = require('path');

require('dotenv').config();

const atlasUser = process.env.ATLAS_USER
const atlasPassword = process.env.ATLAS_PASSWORD

mongoose.connect(`mongodb+srv://${atlasUser}:${atlasPassword}@funkthetowncluster.bups6.mongodb.net/Funkthetowndb`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(cors())

  app.use(bodyParser.json());
  

  

  app.use('/', userRoutes);

module.exports = app;  