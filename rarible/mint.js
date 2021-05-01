import dotenv from 'dotenv'
dotenv.config()
import HDWalletProvider from '@truffle/hdwallet-provider'
import Web3 from 'web3'
import axios from 'axios'

const config = {
  private: process.env.WALLET_SECRET,
  rpc: 'https://rinkeby.infura.io/v3/84653a332a3f4e70b1a46aaea97f0435',
  erc721ContractAddress: '0x25646B08D9796CedA5FB8CE0105a51820740C049',
  apiBaseUrl: 'https://api-staging.rarible.com',
}

const client = axios.create({
  baseURL: 'https://api-staging.rarible.com',
})

const maker = new HDWalletProvider(config.private, config.rpc)
const web3 = new Web3(maker)

const contractAbi = JSON.parse(
  `[{ "inputs": [ { "components": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }, { "internalType": "address[]", "name": "creators", "type": "address[]" }, { "components": [ { "internalType": "address payable", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "internalType": "struct LibPart.Part[]", "name": "royalties", "type": "tuple[]" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" } ], "internalType": "struct LibERC721LazyMint.Mint721Data", "name": "data", "type": "tuple" }, { "internalType": "address", "name": "to", "type": "address" } ], "name": "mintAndTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]`,
)
const contract = new web3.eth.Contract(
  contractAbi,
  config.erc721ContractAddress,
)

performMint(maker.getAddress())
  .then((x) => console.log('Hash:', x))
  .catch((error) => console.log('Mint error', error))

async function performMint(maker) {
  const nonce = await getNonce(config.erc721ContractAddress, maker)

  const invocation = contract.methods.mintAndTransfer(
    [
      nonce,
      '/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp',
      [maker],
      [],
      ['0x0000000000000000000000000000000000000000000000000000000000000000'],
    ],
    maker,
  )
  return new Promise(async (resolve, reject) => {
    web3.eth
      .sendTransaction({
        data: invocation.encodeABI(),
        to: config.erc721ContractAddress,
        from: maker,
        chainId: await web3.eth.net.getId(),
        gasPrice: '5000000000',
        gas: '10000000',
      })
      .once('transactionHash', resolve)
      .once('error', reject)
  })
}

async function getNonce(token, minter) {
  // https://api-staging.rarible.com/protocol/v0.1/ethereum/nft/collections/{collection}/generate_token_id
  const res = await client.get(
    `protocol/v0.1/ethereum/nft/collections/${token}/generate_token_id?minter=${minter}`,
  )

  return res.data.tokenId
}
