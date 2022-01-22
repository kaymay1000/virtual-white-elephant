import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'

interface PlayerFormValues {
  players: Array<{ name: string, id: number }>
}

const initialValues: PlayerFormValues = {
  players: [
    {name: '', id: 1},
    {name: '', id: 2},
    {name: '', id: 3},
    {name: '', id: 4},
  ]
}

const PlayerForm = () => {
  return (
    <div>
      <h1>Player Names</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: PlayerFormValues) => console.log('values: ', values)}
        >
          {({values}) => (
            <Form>
              {/* https://formik.org/docs/examples/field-arrays */}
              <FieldArray name="players">
                {() => (
                  <div>
                    {values.players.length > 0 &&
                      values.players.map((player, index) => (
                        <div key={index}>
                          <label htmlFor={`players.${index}.name`}>Name</label>
                          <Field
                            name={`players.${index}.name`}
                            placeholder=''
                            type='text'
                          />
                          <ErrorMessage
                            name={`players.${index}.name`}
                            component='div'
                            className='field-error'
                          />
                        </div>
                      ))}
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

export default PlayerForm;
