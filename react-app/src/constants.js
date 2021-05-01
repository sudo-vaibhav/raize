export const platformColorMap = {
  youtube: '#FE0000',
  twitter: '#55ACEE',
  instagram: '#C94471',
}

export const siteUrl =
  process.env['NODE_ENV'] === 'dev'
    ? 'http://localhost:3000'
    : 'https://raize-baa4f.web.app'

export const razorPayUrl = 'https://raize-razorpay.azurewebsites.net'

// process.env['NODE_ENV'] === 'dev'
//   ? 'http://localhost:8989'
//   : 'https://raize-razorpay.azurewebsites.net'
