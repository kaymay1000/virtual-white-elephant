import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type PlayerFormTempProps = {
  numPlayers: number;
}

type PlayerFormTempValues = {
  players: Array<{ name: string }>
}

const PlayerFormTemp = ({
  numPlayers,
}: PlayerFormTempProps) => {

const initialValues: PlayerFormTempValues = {
  // works
  players: [{name: ''}]
  // doesn't work (Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components)
  // players: [...Array(numPlayers)]
  // doesn't work (ditto)
  // players: [...Array<{name: ''}>(numPlayers)]
}

  console.log('initialValues: ', initialValues)

  return (
    <div>
      <h1>Player Names</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log('values: ', values)}
      >
        {({values}) => (
            <Form>
              {/* https://formik.org/docs/examples/field-arrays */}
              <FieldArray name="players">
                {arrayHelpers => (
                  <div>
                    {values.players.length > 0 && (
                      values.players.map((player, index) => (
                        <div key={index}>
                          <label htmlFor={`players.${index}.name`}>Name</label>
                          <Field 
                            name={`players.${index}.name`}
                          />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            X
                          </button>
                        </div>
                      ))
                    )}
                    <button 
                      type="button" 
                      onClick={() => {arrayHelpers.push({name: ''});}}
                    >
                      Add a player
                    </button>
                  </div>
                )}
              </FieldArray>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
    </div>
  )
};

export default PlayerFormTemp;
