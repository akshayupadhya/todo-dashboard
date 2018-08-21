import { Router, Request, Response} from 'express'
import auth from "./routes/auth";

const router :Router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send("lets do it!!");
});
router.use("/auth", auth);

export default router