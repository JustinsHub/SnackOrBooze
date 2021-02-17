import React, {useState, useEffect} from 'react'
import SnackOrBoozeContext from './SnackOrBoozeContext'
import SnackOrBoozeApi from "./Api";

//document
const SnackWrapper = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([])

useEffect(() => {
    async function getMenu() {
    let snacks = await SnackOrBoozeApi.getSnacks();
    let drinks = await SnackOrBoozeApi.getBooze();
    setSnacks(snacks);
    setDrinks(drinks);
    setIsLoading(false);
    }
    getMenu();
}, []);

// useEffect(() => {
//     async function getDrinks() {
//     let drinks = await SnackOrBoozeApi.getBooze();
//     setDrinks(drinks);
//     setIsLoading(false);
//     }
//     getDrinks();
// }, []);


if (isLoading) {
    return <p>Loading &hellip;</p>;
}

    return (
        <SnackOrBoozeContext.Provider value={{snacks, drinks}}>
        {children}
        </SnackOrBoozeContext.Provider>
    )
}

export default SnackWrapper