import React, {useState, useEffect} from 'react'
import SnackOrBoozeContext from './SnackOrBoozeContext'
import SnackOrBoozeApi from "./Api";

//Wrapper created to easily pass down data from all components using context
const SnackWrapper = ({children}) => {
    //Create an empty array for drinks and snacks
    //Have loading state for UI purposes
    const [isLoading, setIsLoading] = useState(true);
    const [snacks, setSnacks] = useState([]);
    const [drinks, setDrinks] = useState([])

//makes 2 api requests for snacks and drinks using Api.js static class methods
//sets both snacks and drinks data in their arrays
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


if (isLoading) {
    return <p>Loading &hellip;</p>;
}
    //Api values passed down to our created context wrapper
    return (
        <SnackOrBoozeContext.Provider value={{snacks, drinks}}>
        {children}
        </SnackOrBoozeContext.Provider>
    )
}

export default SnackWrapper