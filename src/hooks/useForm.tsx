// https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
// import { useState } from 'react'

// export const useForm = (callback: any, initialState: {}) => {
//   const [values, setValues] = useState(initialState);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     console.log('event.target.value: ', event.target.value);
//     setValues({...values, [event.target.name]: parseInt(event.target.value)});
//   }

//     const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await callback();
//   }

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//   }
// }

export {}
