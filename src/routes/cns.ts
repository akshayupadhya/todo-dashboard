import { Router, Request, Response } from 'express'

const cns: Router = Router()
cns.get('/', (req: Request, res: Response) => {
	res.send('cns')
})
export default cns
