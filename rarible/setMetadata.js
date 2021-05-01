const dotenv = require('dotenv')
dotenv.config()
var axios = require('axios')
var data = JSON.stringify({
  name: 'Heart of Gold',
  description: 'Heart of Gold',
  image: 'ipfs://ipfs/Qmeb1GLCuThYZayema6Y7eTBXwZDgAym496UT4p9SWr95D',
  // image.png
  external_url: `https://app.rarible.com/${process.env.RARIBLE_PUBLIC_ID}/image.png`,
  //   external_url: `https://app.rarible.com/${process.env.RARIBLE_PUBLIC_ID}:271899`,
  attributes: [{ key: 'Test', trait_type: 'Test', value: 'Test' }],
})

var config = {
  method: 'put',
  url: 'https://api.pinata.cloud/pinning/hashMetadata',
  headers: {
    pinata_api_key: process.env.PINATA_KEY, // KEY_HERE,
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
