import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type PlayerFormFormikProps = {
  numPlayers: number;
}

// type PlayerFormFormikValues = {
//   players: Array<{ name: string, id: number }>
// }

// const initialValues: PlayerFormValues = {
//   players: [
//     {name: '', id: 1},
//     {name: '', id: 2},
//     {name: '', id: 3},
//     {name: '', id: 4},
//   ]
// }



const PlayerFormFormik = ({
  numPlayers,
}: PlayerFormFormikProps) => {

  const initialValues = {
    numberOfPlayers: numPlayers,
    players: [...Array(numPlayers)],
  }

  // const handleDeletePlayer = () => {
  //   console.log('in delete handler');
  // }

  return (
    <div>
      <h1>Player Names</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log('values: ', values)}
        render = {({values}) => (
            <Form>
              {/* https://formik.org/docs/examples/field-arrays */}
              <FieldArray 
              name="players"
              render={arrayHelpers => (
                  <div>
                    {values.players && values.players.length > 0 ? (
                      values.players.map((player, index) => (
                        <div key={index}>
                          <label htmlFor={`players.${index}.name`}>Name</label>
                          <Field name={`players.${index}.name`}/>
                          <button
                            type="button"
                            onClick={() => {
                              console.log('players before removal: ', values.players)
                              arrayHelpers.remove(index);
                              console.log('players after removal: ', values.players)
                            }}
                          >
                            -
                          </button>
                        </div>
                      ))
                    ) : 
                    (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        {/* show this when user has removed all friends from the list */}
                        Add a player
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        />
    </div>
  )
};

export default PlayerFormFormik;
