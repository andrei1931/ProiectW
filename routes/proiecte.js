const express = require('express');
const router = express.Router();
const {client}=require('./preluarep')




   router.get('/', function(req, res, next) {
      res.render('proiecte.ejs');
    });


    
module.exports = router;