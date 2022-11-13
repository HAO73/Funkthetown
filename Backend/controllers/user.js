const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');



  exports.signup = (req, res, next) => {
   console.log(req.body.email)
         
        const user = new User({
           email: req.body.email,
           });
         user.save()
           .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
         .catch(error => res.status(400).json({ error }));
       
      
   };

