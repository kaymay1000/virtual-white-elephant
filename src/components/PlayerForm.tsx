import { Formik, Form, Field, FieldArray, FormikHelpers, FormikProps, FormikProvider, useFormik } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

interface PlayerFormValues {
  players: Array<{ name: string }>
}

const PlayerForm = () => {
  // worked through this Formik tutorial and each of its iterations/ways of using it
  // useFormik() hook --> getFieldProps (not able to leverage) --> <Formik /> w/ render props
  // https://formik.org/docs/tutorial
  const navigate = useNavigate();

  const initialValues: PlayerFormValues = {
    players: [{name: ''}]
  }

  return (
    <div className="max-w-full h-96 px-6 pb-6 pt-4 overflow-auto border-solid border-2 border-gray">
      <h1 className="text-lg md:text-2xl">Player Names</h1>
      {/* <Formik> component calls useFormik() under-the-hood, which returns all Formik state and helpers */}
      {/* <Formik> accepts a function as its children (aka a render prop) */}
      {/* <Formik>'s argument is the exact same object returned by useFormik() */}
      {/* https://formik.org/docs/tutorial#leveraging-react-context */}
      
      {/* using the "children" render method of <Formik> */}
      {/* https://formik.org/docs/api/formik#formik-render-methods-and-props */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log('values: ', values);
           setSubmitting(false);
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
                        <div key={index} className="flex justify-center">
                          <label 
                            htmlFor={`players[${index}].name`}
                            className="text-sm md:text-base px-2 flex items-center"
                          >
                            Name
                          </label>
                          {/* <Field> ultimately compiles to an HTML <input> */}
                          {/* <Field> implicitly grabs the respective onChange, onBlur and value props and pass them to the element */}
                          {/* https://formik.org/docs/tutorial#leveraging-react-context --> <Field> component */}
                          <Field 
                            id={`players[${index}].name`}
                            type="text"
                            name={`players[${index}].name`}
                            className="border-solid border-2 border-black px-1 my-2 w-40 md:w-auto"
                          />
                
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                            className="px-2 text-sm md:text-base"
                          >
                            <Icon iconName={faTrash}></Icon>
                          </button>
                        </div>
                      ))
                    )}
                    <button 
                      type="button" 
                      onClick={() => {arrayHelpers.push({name: ''});}}
                      className="border-solid border-2 border-black px-2 rounded hover:bg-green-400"
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
                className="border-solid border-2 border-black px-2 rounded justify-end hover:bg-green-400" 
                // onClick={() => {
                //   navigate('/player-order')
                // }}
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
