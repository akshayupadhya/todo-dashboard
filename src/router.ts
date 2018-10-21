import { Router, Request, Response } from 'express'
import auth from './controllers/auth'
import cns from './controllers/cns'
const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	res.send('lets do it!!')
})

router.use('/auth', auth)
router.use('/cns', cns)

export default router
