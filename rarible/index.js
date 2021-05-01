const dotenv = require('dotenv')
dotenv.config()
// const data = {
//   name: 'Heart of Gold' /* NFT Name - This must be a string */,
//   description: 'Proof that the bearer of this token has a heart of gold',
//   /* Description of the NFT - This must be a string */
//   image: 'ipfs://ipfs/Qmeb1GLCuThYZayema6Y7eTBXwZDgAym496UT4p9SWr95D',

//   /*  IPFS Hash to our content, this must be prefixed with "ipfs://ipfs/{{ IPFS_HASH ))" - This must be a string */
//   // "external_url": ""
//   /* This is the link to Rarible which we currently don't have, we can fill this in shortly */
//   // "animation_url": "",
//   /* IPFS Hash just as image field, but it allows every type of multimedia files. Like mp3, mp4 etc */
//   // the below section is not needed.
// }

// var axios = require('axios')
// var data = JSON.stringify({
//   name: 'Test NFT',
//   description: 'Test NFT',
//   image: 'ipfs://ipfs/Qmeb1GLCuThYZayema6Y7eTBXwZDgAym496UT4p9SWr95D/image.png',
//   // "external_url": "https://app.rarible.com/0x60f80121c31a0d46b5279700f9df786054aa5ee5:123913",
//   external_url:
//     'https://app.rarible.com/0x50474e65ba0fc6a55e561907b0145561ed89c52a:123913',

//   // "attributes": [{ "key": "Test", "trait_type": "Test", "value": "Test" }]
// })

// var config = {
//   method: 'post',
//   url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
//   //   headers: {
//   //     'pinata_api_key': // KEY_HERE,
//   //     'pinata_secret_api_key': // SECRET_KEY_HERE,
//   //     'Content-Type': 'application/json'
//   //   },
//   data: data,
// }

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data))
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

var axios = require('axios')
var data = JSON.stringify({
  name: 'Heart of Gold',
  description: 'Proof that the bearer of this token has a heart of gold',
  image:
    'ipfs://ipfs/Qmc871XWpxoPzBKdZFBn9jbVr6KuCD599NDJJwNRh3KK6K/heartofgold.png',
  external_url:
    //rarible =>
    // 'https://app.rarible.com/0x50474e65ba0fc6a55e561907b0145561ed89c52a:123913',
    // rinkeby => 0x25e3C5E194Cb0c208F83a3d257228CeB64302E2f
    'https://app.rarible.com/0x25e3C5E194Cb0c208F83a3d257228CeB64302E2f:123913',
  // "attributes": [{ "key": "Test", "trait_type": "Test", "value": "Test" }]
})

var config = {
  method: 'post',
  url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
  headers: {
    pinata_api_key: process.env.PINATA_KEY,
    // KEY_HERE,
    pinata_secret_api_key: process.env.PINATA_SECRET, // SECRET_KEY_HERE,
    'Content-Type': 'application/json',
  },
  data: data,
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
