import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
}

export default config
