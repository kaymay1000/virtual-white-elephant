import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface PlayerFormValues {
  players: Array<{ name: string }>
}

const PlayerForm = () => {

const initialValues: PlayerFormValues = {
  players: [{name: ''}]
}

// const validate = value => {
//   let error;
//   if (!value) {
//     error = 'Player name required.'
//   }
//   return error;
// }

  return (
    <div className="max-w-full mt-10 mx-48 p-4 overflow-auto border-solid border-2 border-gray player-names-container">
      <h1 className="text-2xl">Player Names</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log('values: ', values)}
      >
        {/* {({values, touched, errors}) => ( */}
        {({values}) => (
            <Form>
              {/* https://formik.org/docs/examples/field-arrays */}
              <FieldArray name="players">
                {arrayHelpers => (
                  <div className="my-4">
                    {values.players.length > 0 && (
                      values.players.map((player, index) => (
                        <div key={index} className="flex justify-center">
                          <label 
                            htmlFor={`players.${index}.name`}
                            className="px-2 flex items-center"
                          >
                              {/* {`${index + 1}`} */}
                              Name
                            </label>
                          <Field 
                            name={`players.${index}.name`}
                            className="border-solid border-2 border-black px-1 my-2"
                            // validate={validate}
                          />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                            className="px-2"
                          >
                            <Icon iconName={faTrash}></Icon>
                          </button>
                          {/* {errors.name && touched.name && <div>{errors.name}</div>} */}
                        </div>
                      ))
                    )}
                    <button 
                      type="button" 
                      onClick={() => {arrayHelpers.push({name: ''});}}
                      className="border-solid border-2 border-black px-2 rounded hover:font-bold"
                    >
                      Add Player
                    </button>
                  </div>
                )}
              </FieldArray>
              <div className="flex flex-col">
                <div className="flex justify-end mt-2">
                  <p>Total Players: {`${values.players.length}`}</p>
                </div>
                <div className="flex justify-end mt-2">
                  <button type="submit" className="border-solid border-2 border-black px-2 rounded justify-end hover:font-bold">Next</button>          
                </div>
                
              </div>
             
            </Form>
          )}
        </Formik>
    </div>
  )
};

export default PlayerForm;
