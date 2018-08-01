import express, { Application } from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
import { join } from 'path'
import { createWriteStream } from 'fs'

config()

const fileName: string =
	process.env.NODE_ENV === 'development' ? 'dev.log' : 'prod.log'
const filePath: string = join(__dirname, '../logs', fileName)
const logStreams = createWriteStream(filePath, { flags: 'a' })
const logger: Application = express()

logger.use(
	morgan(process.env.NODE_ENV === 'development' ? 'combined' : 'tiny', {
  stream: logStreams
})
)

export default logger
