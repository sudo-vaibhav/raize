import { ErrorMessage, Field } from 'formik'
const useLabelText = (str) => {
  // adding space between strings
  const result = str.replace(/([A-Z])/g, ' $1')

  // converting first character to uppercase and join it to the final string
  const final = result.charAt(0).toUpperCase() + result.slice(1)

  return final // "My Name"
}

const FormField = ({ fieldName, inputClassName, as, children }) => {
  const labelText = useLabelText(fieldName)
  const type =
    ['password', 'email'].find((e) => e === fieldName.toLowerCase()) || 'text'
  const className = `w-full p-3 rounded-lg border-light-900 border my-3 ${inputClassName}`
  return (
    <div>
      <div>
        <label>{labelText}</label>
        {as === 'select' ? (
          <Field
            name={fieldName}
            as={as}
            // placeholder={fieldName}
            // type={type}
            required
            className={className}
          >
            {children}
          </Field>
        ) : (
          <Field
            name={fieldName}
            placeholder={fieldName}
            type={type}
            required
            className={className}
          />
        )}
      </div>
      <div>
        <ErrorMessage name={fieldName} />
      </div>
    </div>
  )
}

export default FormField
