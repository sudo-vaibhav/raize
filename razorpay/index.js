const bodyParser = require('body-parser')
const crypto = require('crypto')
const shortid = require('shortid')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const Razorpay = require('razorpay')

const instance = new Razorpay({
  key_id: 'rzp_test_JxTRhuWo22IDA4',
  key_secret: 'i6ZSjDuTUjOLiEScqafNsygq',
})

app.get('/', (req, res) => {
  console.log('hi')
  res.send('hi')
})

app.post('/success', (req, res) => {
  //   console.log('body:', req.body)

  console.log('reached success route')
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac('sha256', 'i6ZSjDuTUjOLiEScqafNsygq')

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`)

    const digest = shasum.digest('hex')

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: 'Transaction not legit!' })

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    return res.send({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

app.post('/orders', (req, res) => {
  var options = {
    amount: req.body.amount * 100, // amount in the smallest currency unit
    currency: 'INR',
    receipt: shortid.generate(),
  }

  instance.orders.create(options, function (err, order) {
    console.log(order)
    res.send(order)
  })
})
app.listen(process.env.PORT || 8989, () => {
  console.log('listening on port 8989')
})
