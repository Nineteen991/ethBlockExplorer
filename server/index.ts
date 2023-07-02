import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as dotenv from 'dotenv'
dotenv.config()

import alchemyRouter from './routes/alchemyControllerRoutes'

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Getting ethereum blockchain info from Alchemy node.")
})
app.use('/api/v1/alchemy-node', alchemyRouter)

const PORT = Number(process.env.PORT)

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${ PORT }`)
    })
  } catch (error) {
    console.error(`Server broken: ${ error }`)
  }
}

start()