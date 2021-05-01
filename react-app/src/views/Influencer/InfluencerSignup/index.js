import { Link, useHistory } from 'react-router-dom'
import { Form, Formik } from 'formik'
import FormField from '../../../components/FormField'
import { useAuth } from '../../../contexts/AuthContext'
import { db } from '../../../firebase'
import getUniqueId from '../../../helpers/getUniqueId'

const InfluencerSignup = () => {
  const { signup } = useAuth()
  const history = useHistory()
  return (
    <div className="container mx-auto">
      <Formik
        initialValues={{
          name: 'Prajakta',
          email: 'prajakta@gmail.com',
          password: '123456',
          instagram: 'mostlysane',
          youtube: 'MostlySane',
          twitter: 'iamMostlySane',
          profileImage: 'https://i.ibb.co/KFJLg3t/prajakta.png',
          raribleAddress: '0x50474e65ba0fc6a55e561907b0145561ed89c52a',
          influencerId: getUniqueId(),
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          console.log(signup)
          try {
            const ref = await signup(
              values.email,
              values.password,
              'influencer',
            )
            await db
              .collection('influencer')
              .add({ ...values, influencerUId: ref.user.uid })
          } catch (err) {
            alert('some error occured')
            console.log(err)
          }
          setSubmitting(false)
          history.push('/influencer/profile')
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col justify-start px-5">
            <div>
              <h2 className="font-bold text-2xl pb-2 pt-5">Login</h2>
              <FormField fieldName={'name'} />
              <FormField fieldName={'email'} />
              <FormField fieldName={'raribleAddress'} />
              <FormField fieldName={'profileImage'} />
              <FormField fieldName={'password'} />
              <FormField fieldName={'instagram'} />
              <FormField fieldName={'youtube'} />
              <FormField fieldName={'twitter'} />
            </div>
            <div className=" w-full p-5 flex flex-col items-stretch">
              <button
                className="btn-primary-900 light rounded-lg my-4"
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
              <hr className="my-2" />
              <Link
                to={'/influencer/login'}
                className="py-3 my-4 px-10 text-primary-900 border-primary-900 border-2 rounded-lg text-center"
              >
                Log In
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InfluencerSignup
