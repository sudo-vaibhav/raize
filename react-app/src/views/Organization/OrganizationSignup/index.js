import { useState } from 'react'
import { Formik, Form } from 'formik'
import Card from '../../../components/Card'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import tick from '../../../lotte/tick.json'
import { db } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'
import getUniqueId from '../../../helpers/getUniqueId'

const OrganizationSignup = () => {
  const [step, setStep] = useState(1)
  const { signup } = useAuth()
  const handleClick = () => {
    if (step === 2) {
    }
    setStep(step + 1)
  }

  return (
    <div className="bg-light-500" style={{ minHeight: 'calc(100vh - 73px)' }}>
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold py-10">Welcome to Raize</h3>
        <Card style={{ padding: '0' }}>
          <div className="flex rounded-lg rounded-b-none justify-between items-center p-8 my-10 bg-dark-700 text-light-100">
            <div className="flex-grow text-2xl">Organization Sign Up</div>
            <div className="grid grid-cols-3 gap-2 flex-grow">
              {[0, 1, 2].map((e) => {
                return (
                  <div
                    key={e}
                    className={`rounded-full ${
                      e < step ? 'bg-primary-900' : 'bg-light-500'
                    }`}
                    style={{ height: 10 }}
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="rounded-lg rounded-t-none">
            <Formik
              initialValues={{
                organizationName: 'Hemkunt Foundation',
                organizationType: 'healthcare',
                phoneNumber: '9319740960',
                password: '123456',
                email: 'contact@hemkuntfoundation.com',
                website: 'hemkuntfoundation.com',
                organizationLogo: 'https://i.ibb.co/c2fJbz1/Ellipse-231.png',
                orgId: getUniqueId(),
                description:
                  'Hemkunt Foundation is a non-government organisation that aims to provide humanitarian aid to marginalized sections of society.',
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true)
                console.log(signup)
                try {
                  const ref = await signup(values.email, values.password, 'ngo')
                  await db
                    .collection('ngo')
                    .add({ ...values, orgUId: ref.user.uid })
                } catch (err) {
                  alert('some error occured')
                  console.log(err)
                }
                setSubmitting(false)
                handleClick()
                // console.log(values)
                // console.log('submitting bro')
              }}
            >
              {({ isSubmitting, values, handleSubmit }) => (
                <Form className="flex flex-col px-5 ">
                  {step === 3 ? (
                    <div className="text-center pb-16">
                      <Player
                        autoplay
                        keepLastFrame
                        src={tick}
                        style={{ height: '200px', width: '300px' }}
                      />
                      <h3 className="text-4xl font-bold">All Set!</h3>
                      <p className="mt-5 mb-20 w-1/2 mx-auto">
                        You are one step closer to cutting-edge, AI-powered
                        accountancy and insights. So now you can go out there
                        and be the fantastic superheroes you are while we handle
                        the rest :)
                      </p>
                      <Link
                        to={'/organization/'}
                        className="btn-primary-900 light"
                      >
                        Get Started
                      </Link>
                    </div>
                  ) : step === 1 ? (
                    <div className="grid gap-8 w-5/6 mt-10 mx-auto grid-cols-2 mb-16">
                      <FormField fieldName="organizationName" />
                      <FormField fieldName="email" />
                      <FormField fieldName="organizationType" as="select">
                        {[
                          'animal care and rights',
                          'healthcare',
                          'children and orphanages',
                        ].map((e) => {
                          return (
                            <option key={e} value={e}>
                              {e}
                            </option>
                          )
                        })}
                      </FormField>
                      <FormField fieldName="phoneNumber" />
                    </div>
                  ) : (
                    <div className="grid gap-8 w-5/6 mt-10 mx-auto grid-cols-2 mb-16">
                      <FormField fieldName="description" />
                      <FormField fieldName="website" />
                      <FormField fieldName="organizationLogo" />
                      <FormField fieldName="password" />
                      <img src={values.organizationLogo} alt="" />
                    </div>
                  )}

                  {step !== 3 && (
                    <div className="w-5/6 mx-auto flex justify-end mt-10 mb-16">
                      {step === 1 ? (
                        <Link
                          className="btn-primary-900 light"
                          onClick={handleClick}
                        >
                          Continue
                        </Link>
                      ) : (
                        <button
                          className="btn-primary-900 light"
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => {
                            handleSubmit()
                          }}
                        >
                          Finish
                        </button>
                      )}
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default OrganizationSignup
