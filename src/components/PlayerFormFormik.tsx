import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type PlayerFormFormikProps = {
  numPlayers: number;
}

type PlayerFormFormikValues = {
  players: Array<{ name: string }>
}

const initialValues: PlayerFormFormikValues = {
  players: [
    {name: ''}
  ]
}

const PlayerFormFormik = ({
  numPlayers,
}: PlayerFormFormikProps) => {

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
                    <button type="button" onClick={() => arrayHelpers.push({name: ''})}>
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

export default PlayerFormFormik;
