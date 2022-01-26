import { Formik, Form, Field, FieldArray } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

interface PlayerFormValues {
  players: Array<{ name: string }>
}

const PlayerForm = () => {

  const navigate = useNavigate();

  const initialValues: PlayerFormValues = {
    players: [{name: ''}]
  }

  return (
    <div className="max-w-full h-96 px-6 pb-6 pt-4 overflow-auto border-solid border-2 border-gray">
      <h1 className="text-lg md:text-2xl">Player Names</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log('values: ', values)}
      >
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
                              className="text-sm md:text-base px-2 flex items-center"
                            >
                              Name
                            </label>
                            <Field 
                              name={`players.${index}.name`}
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
                        className="border-solid border-2 border-black px-2 rounded hover:bg-green-100"
                      >
                        Add Player
                      </button>
                    </div>
                  
                )}
              </FieldArray>

              <div className="flex flex-col">
                <div className="flex justify-center md:justify-end mt-2">
                  <p>Total Players: {`${values.players.length}`}</p>
                </div>
                <div className="flex justify-center md:justify-end mt-2">
                  <button 
                    type="submit" 
                    className="border-solid border-2 border-black px-2 rounded justify-end hover:bg-green-100" 
                    onClick={() => navigate('/player-order')}
                  >
                    Next
                  </button>          
                </div>
              </div>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default PlayerForm;
