var express = require('express');
var router = express.Router();

const Serialport = require("../serialport")


/* GET users listing. */
router.get('/', function(req, res, next) {

    var callback = function(isOpen){

        res.setHeader('Access-Control-Allow-Origin', "*");

        res.status(200).json({
            connected: isOpen
        })   
     }

    Serialport.isPortOpen(callback)


});

module.exports = router;
