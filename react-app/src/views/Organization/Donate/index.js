import Modal from 'react-modal'
import logo from './Logo.png'
import { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import FeatherIcon from 'feather-icons-react'
import Card from '../../../components/Card'
import { useParams } from 'react-router'
import { db } from '../../../firebase'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import paymentDone from '../../../lotte/payment-done.json'
import axios from 'axios'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const Donate = () => {
  async function displayRazorpay(values) {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    // name: 'Vaibhav Chopra',
    // email: 'mailvaibhavchopra@gmail.com',
    // phone: '9319740960',
    // amount: 500,

    // creating a new order
    const result = await axios.post('http://localhost:8989/orders', {
      amount: values.amount,
    })

    if (!result) {
      alert('Server error. Are you online?')
      return
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data

    const options = {
      key: 'rzp_test_JxTRhuWo22IDA4', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Raize Fundraising',
      description: 'Test Transaction',
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        }

        const result = await axios.post('http://localhost:8989/success', data)

        // alert(result.data.msg)

        // setIsOpen(true)
      },
      prefill: {
        name: values.name,
        email: values.email,
        contact: values.phone,
      },
      // notes: {
      //   address: 'Soumya Dey Corporate Office',
      // },
      theme: {
        color: '#16AE89',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--color-light-500)',
    },
  }

  // const history = useHistory()
  const [modalIsOpen, setIsOpen] = useState(false)
  const { donationCode } = useParams()
  const [campaignId, platformCode] = donationCode.split('-')
  const [{ campaignData, organizationData }, setData] = useState({
    campaignData: {},
    organizationData: {
      organizationLogo: '',
    },
  })
  console.log(campaignId)
  useEffect(() => {
    db.collection('campaign')
      .where('campaignId', '==', campaignId)
      .get()
      .then((querySnapshot) => {
        let campaignDoc, orgDoc, orgId

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          campaignDoc = {
            id: doc.id,
            ...doc.data(),
          }

          orgId = doc.data().orgUId
        })
        db.collection('ngo')
          .doc(orgId)
          .get()
          .then((doc) => {
            if (doc.exists) console.log('exis')
            orgDoc = {
              id: doc.id,
              ...doc.data(),
            }

            setData({
              campaignData: campaignDoc,
              organizationData: orgDoc,
            })
          })
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
  }, [donationCode, campaignId])

  console.log('campaign data:', campaignData, 'organization', organizationData)
  return (
    <div className="bg-light-500 px-4">
      <div className="text-2xl mx-auto container items-center flex font-semibold py-8">
        <img
          src={organizationData.organizationLogo}
          style={{
            width: 77,
            height: 77,
          }}
        />
        <div className="ml-4">{organizationData.organizationName}</div>
      </div>
      <div className="grid gap-4 py-8 lg:grid-cols-2 mx-auto container">
        <div className="">
          <Card>
            <div className="text-xl font-semibold mb-3">
              <img
                src={campaignData.bannerUrl}
                className="rounded-lg w-full"
                alt="banner"
              />
            </div>
            <h3 className="font-semibold text-2xl my-3">{campaignData.name}</h3>
            <p className="my-3">{campaignData.description}</p>
            <p>
              {/* EIN: 14-1942074 */}
              <br />
              <a
                href={organizationData}
                rel="noreferrer"
                className="text-primary-900 underline flex w-full justify-between my-4"
              >
                <div className="flex-grow-1">{organizationData.website}</div>
                <FeatherIcon icon="external-link" />
              </a>
            </p>
          </Card>
          <Card className="mt-10">
            <h5 className="text-xl font-semibold mt-3 mb-7">
              100% will go to the charity
            </h5>
            {[
              {
                icon: 'shield',
                heading: 'We work to ensure charities are in good standing',
                description:
                  'We verify that receiving charities have tax-exempt status with the IRS and are not on recognized economic sanctions lists.',
              },
              {
                icon: 'dollar-sign',
                heading: 'We work to ensure charities are in good standing',
                description:
                  'We verify that receiving charities have tax-exempt status with the IRS and are not on recognized economic sanctions lists.',
              },
              {
                icon: 'file-text',
                heading: 'We work to ensure charities are in good standing',
                description:
                  'We verify that receiving charities have tax-exempt status with the IRS and are not on recognized economic sanctions lists.',
              },
            ].map((e, i) => {
              return (
                <div key={i} className="flex items-center my-3">
                  <div className="p-3 border-primary-900 border-2 rounded-full mr-5">
                    <FeatherIcon
                      icon={e.icon}
                      stroke={'var(--color-primary-900)'}
                    />
                  </div>
                  <div>
                    <h6 className="font-medium">{e.heading}</h6>
                    <p>{e.description}</p>
                  </div>
                </div>
              )
            })}
          </Card>
        </div>
        <div className="">
          <div className="bg-primary-900 p-7 text-light-100 rounded-lg rounded-b-none">
            <h5 className="text-xl">Donation Details</h5>
          </div>
          <div className="bg-light-100 rounded-lg rounded-t-none">
            <Formik
              initialValues={{
                name: 'Vaibhav Chopra',
                email: 'mailvaibhavchopra@gmail.com',
                phone: '9319740960',
                amount: 500,
              }}
              onSubmit={async (values) => {
                await displayRazorpay(values)
                await db.collection('donation').add({
                  ...values,
                  campaignId: campaignData.id,
                  platform: {
                    yt: 'youtube',
                    ig: 'instagram',
                    tw: 'twitter',
                  }[platformCode],
                  doneAt: Date.now(),
                  amount: parseFloat(values.amount),
                })

                setIsOpen(true)
              }}
            >
              {({ isSubmitting, values, setValues }) => (
                <Form className="p-4">
                  <FormField fieldName={'name'} />
                  <FormField fieldName={'email'} />
                  <FormField fieldName={'phone'} />
                  <FormField fieldName={'amount'} />
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 100, 500, 1000].map((e) => {
                      return (
                        <div
                          onClick={() => {
                            setValues({
                              ...values,
                              amount: parseFloat(values.amount),
                            })
                          }}
                          className={`border-2 grid place-items-center p-2 border-primary-900 ${
                            parseFloat(values.amount) === e
                              ? 'bg-primary-900 text-light-100'
                              : ''
                          }`}
                          key={e}
                        >
                          ₹{e}
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-end my-4">
                    <button
                      type="submit"
                      className="btn-primary-900 light"
                      disabled={isSubmitting}
                    >
                      Donate Now
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className="">
          <h2 className="ml-3 font-semibold text-2xl text-center ">
            Payment Successful
          </h2>
          <Player
            autoplay
            // keepLastFrame
            loop
            style={{
              height: 300,
              width: 300,
            }}
            src={paymentDone}
          />
          <div className="grid place-items-center">
            <Link to="/" className="btn-primary-900 light">
              Go Home
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Donate
