var express = require('express');
var router = express.Router();

const { exec } = require('child_process');


/* GET users listing. */
router.get('/adb', function(req, res, next) {

    exec('adb --version', (err, stdout, stderr) => {
        if (err){
            console.log(err.message)
            res.status(200).json({
                ok: false, 
                err: error.message
            })
        } else {
            res.status(200).json({
                ok: true, 
                stdout: stdout
            })
        }
    })

});

module.exports = router;
