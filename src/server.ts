import {Router} from 'express'
import logger from './logger'
import router from './router'

const app: Router = Router()

app.use(logger)
app.use(router)

export default app
