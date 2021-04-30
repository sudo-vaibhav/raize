import { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import FormField from '../../../components/FormField'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase'

const StartCampaign = () => {
  const { ngoId } = useParams()
  const [ngoData, setNgoData] = useState({
    organizationName: '',
  })
  useEffect(() => {
    db.collection('ngo')
      .doc(ngoId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setNgoData(doc.data())
        } else {
          console.log('doc doesnt exist')
        }
      })
  }, [ngoId])

  return (
    <div className="mx-auto  container pb-20">
      <div className="px-5 ">
        <h2 className="font-medium text-2xl pb-2 pt-5">
          Start Fundraiser for{' '}
          <span className="font-bold text-primary-900">
            {ngoData.organizationName}
          </span>
        </h2>
        <Formik
          initialValues={{
            name: 'Drinking Water for children',
            description: 'Homeless kids in Rajasthan need your help',
            ngoId: 'asiujfbasioufbasihoafhis',
            target: 500000,
            bannerUrl: 'https://i.ibb.co/YkCgJNj/water.png',
          }}
        >
          {({ isSubmitting, values }) => {
            return (
              <Form>
                <FormField fieldName="name" />
                <FormField fieldName="description" />
                <FormField fieldName="target" />
                <FormField fieldName="bannerUrl" />
                <img
                  className="w-100 rounded-lg"
                  alt="banner"
                  src={values.bannerUrl}
                />
                <div className="flex justify-end my-10 pb-10">
                  <button className="btn-primary-900 light">
                    Start Campaign
                  </button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default StartCampaign
