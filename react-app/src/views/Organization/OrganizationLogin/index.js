import { Form, Formik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import image from './organizationHero.svg'
import FormField from '../../../components/FormField'
import Card from '../../../components/Card'
import { useAuth } from '../../../contexts/AuthContext'
const OrganizationLogin = () => {
  const { signin } = useAuth()
  const history = useHistory()
  return (
    <div
      className="bg-dark-700 grid place-items-center"
      style={{ height: 'calc(100vh - 73px)' }}
    >
      <div className="container mx-auto grid grid-cols-3 bg-light-500 rounded-lg">
        <div className="col-span-2 relative">
          <div className="bg-primary-900 h-full w-1/2 rounded-l-lg"></div>
          <div
            className="bg-dark-700 absolute w-5/6 h-5/6 rounded-lg grid place-items-center"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img src={image} />
          </div>
        </div>

        <div className="col-start-3 py-16 col-span-1">
          <Formik
            initialValues={{
              email: 'contact@hemkuntfoundation.com',
              password: '123456',
            }}
            onSubmit={async (values) => {
              try {
                await signin(values.email, values.password)
                history.push('/organization')
              } catch (err) {
                alert('error while signing in, check your credentials')
              }
            }}
          >
            {({ isSubmitting }) => (
              <Card className="m-5">
                <Form className="flex flex-col px-5">
                  <h2 className="font-bold text-2xl pb-2 pt-5">
                    Organization Login
                  </h2>
                  <FormField
                    fieldName={'email'}
                    inputClassName="border border-light-900"
                  />
                  <FormField
                    fieldName={'password'}
                    inputClassName="border border-light-900"
                  />

                  {/* <Link className="w-full font-semibold text-right block my-2">
                    Forgot password?
                  </Link> */}
                  <button
                    className="btn-primary-900 light rounded-lg my-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log in
                  </button>
                  <hr className="my-2" />
                  <Link
                    to={'/organization/signup'}
                    className="py-3 my-4 px-10 text-primary-900 border-primary-900 border-2 rounded-lg text-center"
                  >
                    Sign up
                  </Link>
                </Form>
              </Card>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
export default OrganizationLogin
