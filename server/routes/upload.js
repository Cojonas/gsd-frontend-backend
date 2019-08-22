var express = require('express');
var router = express.Router();
const fs = require("fs")

var multer = require('multer')

var sharedFolder = process.env.SHARED_FOLDER_DOCKER || "public"
console.log(sharedFolder)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, sharedFolder)
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')


router.post('/',function(req, res) {
     
    upload(req, res, function (err) {

      try {

        var filename = sharedFolder + "/"  + req.file.originalname;
        console.log(filename);
        if (fs.existsSync(filename)) console.log("file exists")
        
      } catch(err) {
        console.error(err)
      }

      

      res.setHeader('Access-Control-Allow-Origin', "*");

        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.file)
    })

    

});

module.exports = router;
