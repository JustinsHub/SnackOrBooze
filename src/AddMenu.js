import React from 'react'
import useFormHandle from './custom-hooks/useFormHandle'
import './AddMenu.css'

const AddMenu = ({addItem}) => {
    const INITIAL_DATA = {
        id: "",
        name: "",
        description: "", 
        recipe: "",
        server: ""
    }
    const [formData, setFormData, handleChange] = useFormHandle(INITIAL_DATA)

    const handleSubmit = (e) =>{
        e.preventDefault()
        addItem(formData)
        setFormData(INITIAL_DATA)
    }


    return (
        <section className="text-center">
            <form className="AddMenu-form-bg"onSubmit={handleSubmit}>
            <h1 className="AddMenu-h1">Add a Snack or Drink</h1>
            <div className="m-1">
            <label htmlFor="id"></label>
            <input
            id="id"
            type="text"
            name="id"
            value={formData.id}
            placeholder="ID"
            onChange={handleChange}
            />
            </div>

            <div className="m-1">
            <label htmlFor="name"></label>
            <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name of item"
            onChange={handleChange}
            />
            </div>

            <div className="m-1">
            <label htmlFor="description"></label>
            <input
            id="description"
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
            />
            </div>

            <div className="m-1">
            <label htmlFor="recipe"></label>
            <input
            id="recipe"
            type="text"
            name="recipe"
            value={formData.recipe}
            placeholder="Recipe"
            onChange={handleChange}
            />
            </div>

            <div className="m-1">
            <label htmlFor="server"></label>
            <input
            id="server"
            type="text"
            name="server"
            value={formData.server}
            placeholder="Server"
            onChange={handleChange}
            />
            </div>
            
            <div className="m-1">
            <button type="submit">Submit</button>
            </div>
            </form>
        </section>
    )
}

export default AddMenu