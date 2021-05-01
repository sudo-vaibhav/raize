import { Link, useHistory } from 'react-router-dom'
import { Form, Formik } from 'formik'
import FormField from '../../../components/FormField'
import { useAuth } from '../../../contexts/AuthContext'

const InfluencerLogin = () => {
  const { signin } = useAuth()
  const history = useHistory()
  return (
    <div className="container mx-auto">
      <Formik
        initialValues={{
          email: 'prajakta@gmail.com',
          password: '123456',
        }}
        onSubmit={async (values) => {
          try {
            await signin(values.email, values.password)
            history.push('/influencer/profile')
          } catch (e) {
            alert('error while signing in')
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col justify-start px-5">
            <div>
              <h2 className="font-bold text-2xl pb-2 pt-5">Login</h2>
              <FormField fieldName={'email'} />
              <FormField fieldName={'password'} />
              {/* <Link className="w-full font-semibold text-right block my-2">
                Forgot password?
              </Link> */}
            </div>
            <div className="fixed w-full left-0  p-5 bottom-0 flex flex-col items-stretch">
              <button
                className="btn-primary-900 light rounded-lg my-4"
                type="submit"
                disabled={isSubmitting}
              >
                Log in
              </button>
              <hr className="my-2" />
              <Link
                to={'/influencer/signup'}
                className="py-3 my-4 px-10 text-primary-900 border-primary-900 border-2 rounded-lg text-center"
              >
                Sign up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default InfluencerLogin
