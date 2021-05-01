const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data')

// export
const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
  let data = new FormData()

  data.append('file', fs.createReadStream('./heartofgold.png'))

  return axios
    .post(url, data, {
      headers: {
        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretApiKey,
      },
    })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

pinFileToIPFS(process.env.PINATA_KEY, process.env.PINATA_SECRET)

// {
//     IpfsHash: 'Qmeb1GLCuThYZayema6Y7eTBXwZDgAym496UT4p9SWr95D',
//     PinSize: 271899,
//     Timestamp: '2021-05-01T08:57:58.148Z'
//   }
