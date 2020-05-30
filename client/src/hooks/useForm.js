import { useState } from 'react'

const useForm = (callback) => {
    const [inputs, setInputs] = useState({})
    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault()
        }
        callback()
    }
    const handleInputChange = (e) => {
        e.persist()
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value}))
    }
    return { handleSubmit, handleInputChange, inputs }
}
export default useForm;

// export default (initialState, onSubmit) => {
//     const [inputs, setInputs] = useState(initialState)

//     const subscribe = field => value => {
//         setInputs({ ...inputs, [field]: value })
//     }
//     const handleSubmit = () => {
//         onSubmit(inputs)
//     }
//     return { subscribe, handleSubmit, inputs }
// }
  