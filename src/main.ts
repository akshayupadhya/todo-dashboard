import express, { Application, Request, Response } from 'express'
import auth from './routes/auth'
import logger from './logger'
const app: Application = express()
app.use(logger)
app.get('/', (req: Request, res: Response) => {
  res.send('lets do it!!')
})
app.use('/auth', auth)
app.listen('3000', () => {
  console.log(`listening on port 3000`)
})
