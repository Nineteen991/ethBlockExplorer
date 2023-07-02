import { Request, Response } from "express"

import alchemy from "../utils/alchemySettings"

const getCurrentBlockNumber = async (req: Request, res: Response) => {
  const blockNumber = await alchemy.core.getBlockNumber()
  if (!blockNumber) throw new Error("Didn't get blocknumber :(")
  res.status(200).json({ blockNumber })
}

export { getCurrentBlockNumber }