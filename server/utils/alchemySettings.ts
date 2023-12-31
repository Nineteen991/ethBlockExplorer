import { Alchemy, Network } from "alchemy-sdk"

const settings = {
  apiKey: process.env.ALCHEMY_KEY as string,
  network: Network.ETH_MAINNET
}

const alchemy = new Alchemy(settings)

export default alchemy