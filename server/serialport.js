const SerialPort = require('serialport')
var mModule = {}

mModule.isPortOpen = function isPortOpen( callback){
    const port = new SerialPort('/dev/ttyAMA0', function(){

        const isOpen = port.isOpen
        callback(isOpen)
        if (isOpen)     port.close()

    })



}


module.exports = mModule;