import { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import FormField from '../../../components/FormField'
import { useHistory, useParams } from 'react-router-dom'
import { db } from '../../../firebase'
import getUniqueId from '../../../helpers/getUniqueId'
import { useAuth } from '../../../contexts/AuthContext'

const StartCampaign = () => {
  const { currentUser } = useAuth()
  const { ngoId } = useParams()
  const history = useHistory()
  const [ngoData, setNgoData] = useState({
    organizationName: '',
  })
  useEffect(() => {
    db.collection('ngo')
      .doc(ngoId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setNgoData({ id: doc.id, ...doc.data() })
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
            target: 500000,
            bannerUrl: 'https://i.ibb.co/YkCgJNj/water.png',
          }}
          onSubmit={async (values) => {
            const newCampaign = await db.collection('campaign').add({
              ...values,
              orgUId: ngoData.id,
              campaignId: getUniqueId(),
              influencerId: currentUser.uid,
              createdAt: Date.now(),
            })
            history.push(`/influencer/stats/${newCampaign.id}`)
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
