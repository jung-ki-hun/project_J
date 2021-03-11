const winston = require('winston');

winston.createLogger({
    transport:[
        new winston.Transport.Console({})
    ]
})
module.exports = logger;