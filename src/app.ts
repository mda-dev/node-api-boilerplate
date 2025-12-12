import express, { Express } from 'express'

import errorHandler from '@/middleware/errorHandler'
import v1Router from '@/routes/v1'

const app: Express = express()

app.use(express.json())

app.use('/v1', v1Router)

app.use(errorHandler)

export default app
