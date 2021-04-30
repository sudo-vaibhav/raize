import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import FormField from '../../../components/FormField'

const InfluencerLogin = () => {
  return (
    <div className="container mx-auto">
      <Formik
        initialValues={{
          email: 'mailvaibhavchopra@gmail.com',
          password: '',
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col justify-start px-5">
            <div>
              <h2 className="font-bold text-2xl pb-2 pt-5">Login</h2>
              <FormField fieldName={'email'} />
              <FormField fieldName={'password'} />
              <Link className="w-full font-semibold text-right block my-2">
                Forgot password?
              </Link>
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
