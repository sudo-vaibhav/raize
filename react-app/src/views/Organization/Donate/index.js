import { Formik, Form, Field, ErrorMessage } from 'formik'
import FeatherIcon from 'feather-icons-react'
import Card from '../../../components/Card'

const DonationField = ({ fieldName }) => {
  return (
    <div>
      <label>{fieldName} *</label>
      <div>
        <Field name={fieldName} />
      </div>
      <div>
        <ErrorMessage name={fieldName} />
      </div>
    </div>
  )
}

const Donate = () => {
  return (
    <div className="bg-light-500">
      <div className="flex mx-auto container">
        <div className="w-1/2 px-4">
          <h3 className="text-3xl font-semibold my-8">Welcome to Raize 👋</h3>
          <Card>
            <h5 className="text-xl font-semibold my-3">About this charity</h5>
            <h3 className="text-primary-900 font-semibold text-2xl my-3">
              Children and Youth Development, Human Services, International
            </h3>
            <p className="my-3">
              A shared commitment to relieve suffering and improve the lives of
              Moldova's Children. Moldova World Children's Fund has over 20
              years of completed projects throughout Moldova. Over 93% of all
              donations go directly to projects. Under 7% for admin,
              fundraising, and salaries. Thank you for your continued support.
            </p>
            <p>
              EIN: 14-1942074
              <br />
              Hendersonville, NC
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
            ].map((e) => {
              return (
                <div key={e.heading} className="flex items-center my-3">
                  <div className="p-3 border-primary-900 border-2 rounded-full mr-5">
                    <FeatherIcon
                      icon={e.icon}
                      //   fill={'var(--color-primary-700)'}
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
        <div className="w-1/2 px-4">
          <div className="bg-primary-900 p-7 text-light-100 mt-8">
            <h5 className="text-xl">Donation Details</h5>
          </div>
          <div className="bg-light-100">
            <Formik
              initialValues={{
                name: 'Vaibhav Chopra',
                email: 'mailvaibhavchopra@gmail.com',
                phone: '9319740960',
                amount: '500',
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <DonationField fieldName={'name'} />
                  <DonationField fieldName={'email'} />
                  <button type="submit" disabled={isSubmitting}>
                    Donate Now
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
