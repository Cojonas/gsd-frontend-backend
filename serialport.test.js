const Serialport = require('./serialport')

test(
    'expext serial port not to be undefined',
    () => {
        var callback = function(result) {
            expect(result).not.toBeUndefined()   
        }

        Serialport.isPortOpen(callback);

    }
)