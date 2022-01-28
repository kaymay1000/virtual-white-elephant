
import Icon from './Icon';
import { Formik, Form, Field, FieldArray, FormikProvider, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
interface PlayerFormValues {
  players: Array<{ name: string }>
}

const lettersOnlyPattern = /^[a-zA-Z\s]+$/;
// TODO: try to prevent empty strings
// const emptyStringPattern = /^$/

// TODO: try to prevent spaces only
// const whitespaceOnlyPattern = /^\s+$/;
// another approach...
// https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250


const formValidationSchema = Yup.object().shape({
  players: Yup.array()
  .of(
    Yup.object().shape({
      name: Yup.string().matches(lettersOnlyPattern, 'Letters and spaces only, please.').min(1, 'Please delete blank fields.')
    })
  )
  // TODO: try to force four player minimum
  // .min(4, 'You must add at least four players.')
})

const PlayerForm = (): JSX.Element => {
  // worked through this Formik tutorial and each of its iterations/ways of using it
  // useFormik() hook --> getFieldProps (not able to leverage) --> <Formik /> w/ render props
  // https://formik.org/docs/tutorial
  
  const navigate = useNavigate();
  const initialValues: PlayerFormValues = {
    players: [{name: ''}]
  }
  

  return (
    <div className="max-w-full h-96 px-6 pb-6 pt-4 overflow-auto border-2 border-gray">
      <h1 className="text-lg md:text-2xl">Player Names</h1>
      {/* <Formik> component calls useFormik() under-the-hood, which returns all Formik state and helpers */}
      {/* <Formik> accepts a function as its children (aka a render prop) */}
      {/* <Formik>'s argument is the exact same object returned by useFormik() */}
      {/* https://formik.org/docs/tutorial#leveraging-react-context */}
      
      {/* using the "children" render method of <Formik> */}
      {/* https://formik.org/docs/api/formik#formik-render-methods-and-props */}
      <Formik
        initialValues={initialValues}
        validationSchema={formValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false);
          // can pass data to whichever component is rendered at the route navigate is told to go to
          // https://github.com/remix-run/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/packages/react-router-dom/index.js#L173
          // https://reacttraining.com/blog/react-router-v6-pre/#suspense-ready-navigation
          // https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component/64566486
           navigate('/player-order', {state: values});
         }, 400);
       }}
      >
        {/* "formik" prop below could also be destructured into: {({ handleSubmit, handleChange, handleBlur, values, errors }) => ( <Form /> )} */}
        {/* https://formik.org/docs/api/formik#children-reactreactnode--props-formikpropsvalues--reactnode */}
        
        {/* render prop */}
        {formik => (
          <Form>
            {/* <FieldArray> doesn't play nice with useFormik() hook, so have to wrap it in <FormikProvider> in order to pass necessary props to it ("formik") */}
            {/* https://stackoverflow.com/questions/59980094/can-i-use-fieldarray-alongside-useformik-hook */}
            <FormikProvider value={formik}>
              {/* https://formik.org/docs/examples/field-arrays */}
              <FieldArray name="players">
                {arrayHelpers => (
                  <div className="my-4">
                    {formik.values.players.length > 0 && (
                      formik.values.players.map((player, index) => (
                        <div key={index}>
                          <div className="flex justify-center">
                            <label 
                              htmlFor={`players[${index}].name`}
                              className="text-sm md:text-base px-2 flex items-center"
                            >
                              Name
                            </label>
                            {/* <Field> ultimately compiles to an HTML <input> */}
                            {/* <Field> implicitly grabs the respective onChange, onBlur and value props and pass them to the element */}
                            {/* https://formik.org/docs/tutorial#leveraging-react-context --> <Field> component */}
                            
                            {/* TODO: style border of invalid */}
                            {/* https://stackoverflow.com/questions/57113561/how-do-i-style-the-borders-of-a-formik-error-field */}
                            <Field 
                              id={`players[${index}].name`}
                              type="text"
                              name={`players[${index}].name`}
                              className="border-2 border-black px-1 my-2 w-40 md:w-auto"
                              // TODO: better way to do this?
                              required
                            />
                  
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                              className="px-2 text-sm md:text-base"
                            >
                              <Icon iconName={faTrash}></Icon>
                            </button>
                          </div>
                          <div className="mb-2">
                            <ErrorMessage 
                              className="text-red-600 text-xs md:text-sm"
                              component="p"
                              name={`players[${index}].name`}
                            />
                          </div>
                        </div>
                      ))
                    )}
                    <button 
                      type="button" 
                      onClick={() => {arrayHelpers.push({name: ''});}}
                      className="border-2 border-black px-2 rounded hover:bg-green-400"
                    >
                      Add Player
                    </button>
                  </div>
                )}
              </FieldArray>
            </FormikProvider>

            <div className="flex justify-center md:justify-end mt-2">
              <p>Total Players: {`${formik.values.players.length}`}</p>
            </div>

            <div className="flex justify-center md:justify-end mt-2">
              <button 
                type="submit"
                className="border-2 border-black px-2 rounded justify-end hover:bg-green-400"
              >
                Next
              </button>          
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default PlayerForm;
