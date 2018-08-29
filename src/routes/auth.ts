import { Router, Request, Response } from 'express'

const auth: Router = Router()
auth.get('/', (req: Request, res: Response) => {
	res.send('auth')
})

export default auth
