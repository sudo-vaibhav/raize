import { Formik, Form } from 'formik'
import FormField from '../../../components/FormField'
const OrganizationSettings = () => {
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
