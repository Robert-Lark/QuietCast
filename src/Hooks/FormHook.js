import { useState } from 'react';

export const useForm = (initalValue) => {
    const [values, setValues] = useState(initalValue)

    const handleChanges = e => {
        setValues({...values,
        [e.target.name]: e.target.value})
    } 

    const clearForm = e => {
        e.preventDefault()
        setValues(initialValue);
    }

return [values, handleChanges, clearForm]
}

