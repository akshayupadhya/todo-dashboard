import { Router, Request, Response } from 'express'
import auth from './routes/auth'
import cns from './routes/cns'
const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('lets do it!!')
})

router.use('/auth', auth)
router.use('/cns', cns)

export default router
