import {useState} from 'react'

const useFormHandle = (INITIAL_DATA) => {
    const [formData, setFormData] = useState(INITIAL_DATA)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }
    return [formData, setFormData, handleChange]
}

export default useFormHandle