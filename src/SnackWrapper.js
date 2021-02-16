import React, {useState, useEffect} from 'react'
import SnackContext from './SnackContext'
import SnackOrBoozeApi from "./Api";

const SnackWrapper = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);

useEffect(() => {
    async function getSnacks() {
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    setIsLoading(false);
    }
    getSnacks();
}, []);

if (isLoading) {
    return <p>Loading &hellip;</p>;
}

    return (
        <SnackContext.Provider value={snacks}>
        {children}
        </SnackContext.Provider>
    )
}

export default SnackWrapper