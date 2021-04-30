import { Formik, Form } from 'formik'
import FormField from '../../../components/FormField'
import { useAuth } from '../../../contexts/AuthContext'

const OrganizationSettings = () => {
  // console.log('x', x)
  return (
    <div className="bg-light-500">
      <div className="mx-auto container">
        <Formik
          initialValues={{
            email: 'mailvaibhavchopra@gmail.com',
            password: '',
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form className="grid grid-cols-2 py-10">
                <FormField fieldName={'email'} />
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default OrganizationSettings
