import express, { Express } from 'express'

import v1Router from './routes/v1'
import errorHandler from './middleware/errorHandler'

const app: Express = express()

app.use(express.json())

app.use('/v1', v1Router)

app.use(errorHandler)

export default app
