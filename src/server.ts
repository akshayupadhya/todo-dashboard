import express, { Application, Request, Response, Router } from 'express'
import auth from './routes/auth'
import logger from './logger'
const app: Router = Router()
app.use(logger)
app.get('/', (req: Request, res: Response) => {
  res.send('lets do it!!')
})
app.use('/auth', auth)
export default app
