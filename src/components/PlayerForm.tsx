import { Formik, Form, Field, FieldArray, FormikHelpers, FormikProps, useFormik } from 'formik';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

interface PlayerFormValues {
  // players: Array<{ name: string }>
  firstName: string;
}

const PlayerForm = () => {

  // const navigate = useNavigate();

  const initialValues: PlayerFormValues = {
    // players: [{name: ''}]
    firstName: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      alert(values);
      console.log(values);
    }
  });

  return (
    <div className="max-w-full h-96 px-6 pb-6 pt-4 overflow-auto border-solid border-2 border-gray">
      <h1 className="text-lg md:text-2xl">Player Names</h1>
      <form
        onSubmit={formik.handleSubmit}
      >
        {/* https://formik.org/docs/examples/field-arrays */}
        {/* <FieldArray name="players">
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
                    <input 
                      id={`players[${index}].name`}
                      name={`players[${index}].name`}
                      onChange={formik.handleChange}
                      value={formik.values.players[index].name}
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
        </FieldArray> */}

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        {/* <div className="flex justify-center md:justify-end mt-2">
          <p>Total Players: {`${formik.values.players.length}`}</p>
        </div> */}
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
      </form>
    </div>
  )
};

export default PlayerForm;
