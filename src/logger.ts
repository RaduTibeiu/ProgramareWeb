import * as winston from 'winston'

const errorStackFormat = winston.format(info => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message
    })
  }
  return info
})

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp(),
    errorStackFormat(),
    winston.format.json()
  ),
  transports: [
    // - Write all logs error (and below) to `error.log`.
    // - Write to all logs with level `info` and below to all.log
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/all.log' }),
    new winston.transports.Console()
  ]
})

export default logger