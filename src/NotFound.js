import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()
    const goHome = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>There seems to be a mistake on what you're looking for.</h1>
            <div className="d-flex justify-content-center">
            <button onClick={goHome}>Back To Main Page</button>
            </div>
        </div>
    )
}

export default NotFound