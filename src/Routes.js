import React, {useContext} from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Menu from "./FoodMenu";
import MenuChoices from "./MenuChoices";
import DrinkMenu from './DrinkMenu'
import Drink from './Drink'
import AddSnack from './AddSnack'
import AddDrink from './AddDrink'
import SnackOrBoozeContext from './SnackOrBoozeContext'
import NotFound from './NotFound'


//snacks and drinks context api's passed down to each particular use for the value on each component
const Routes = () => {
    const {snacks, drinks, addSnacks, addDrinks} = useContext(SnackOrBoozeContext)
    return (
        <main>
        <Switch>
        <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
        </Route>
        <Route exact path="/snacks">
            <Menu snacks={snacks} title="Snacks" />
        </Route>
        <Route path="/snacks/:id">
            <MenuChoices snacks={snacks} cantFind="/snacks" />
        </Route>
        <Route exact path="/drinks">
            <DrinkMenu drinks={drinks}/>
        </Route>
        <Route path="/drinks/:id">
            <Drink drinks={drinks} cantFind="/drinks" />
        </Route>
        <Route exact path="/add-snack">
            <AddSnack addItem={addSnacks} />
        </Route>
        <Route exact path="/add-drink">
            <AddDrink addItem={addDrinks} />
        </Route>
        <Route>
            <NotFound/>
        </Route>
        </Switch>
    </main>
    )
}

export default Routes