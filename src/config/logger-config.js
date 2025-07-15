const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const customFormat = printf(({level, message, label, timestamp}) =>{
    return `${timestamp} : [${label}] : ${level}: ${message}`;
});


const logger = createLogger({
   format: combine(
    timestamp({format: 'YYYY-MM-DDDD HH:MM:SS'}),
    customFormat
  ),
  transports: [

  ],
})