import React, {useContext} from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Menu from "./FoodMenu";
import MenuChoices from "./MenuChoices";
import SnackOrBoozeContext from './SnackOrBoozeContext'
import NotFound from './NotFound'


//document
const Routes = () => {
    const {snacks, drinks} = useContext(SnackOrBoozeContext)
    return (
        <main>
        <Switch>
        <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
        </Route>
        <Route exact path="/snacks">
            <Menu snacks={snacks} drinks={drinks} title="Snacks" />
        </Route>
        <Route path="/snacks/:id">
            <MenuChoices snacks={snacks} drinks={drinks} cantFind="/snacks" />
        </Route>
        <Route exact path="/drinks">
            <Menu snacks={snacks} drinks={drinks} title="Drinks" />
        </Route>
        <Route path="/drinks/:id">
            <MenuChoices snacks={snacks} drinks={drinks} cantFind="/drinks" />
        </Route>
        <Route>
            <NotFound/>
        </Route>
        </Switch>
    </main>
    )
}

export default Routes