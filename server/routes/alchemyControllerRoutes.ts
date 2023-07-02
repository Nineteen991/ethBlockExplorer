import express from 'express'

import { getCurrentBlockNumber } from '../controllers/alchemyController'

const router = express.Router()

router.route('/')
  .get(getCurrentBlockNumber)

export default router