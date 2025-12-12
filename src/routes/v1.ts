import { Router } from 'express'
import type {
  NextFunction,
  Request,
  Response,
  Router as RouterType,
} from 'express'

const v1Router: RouterType = Router()

v1Router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.json({ apiVersion: 1 })
})

export default v1Router
