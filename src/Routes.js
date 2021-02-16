import React, {useContext} from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import SnackContext from './SnackContext'

const Routes = () => {
    const snacks = useContext(SnackContext)
    return (
        <main>
        <Switch>
        <Route exact path="/">
            <Home snacks={snacks} />
        </Route>
        <Route exact path="/snacks">
            <Menu snacks={snacks} title="Snacks" />
        </Route>
        <Route path="/snacks/:id">
            <Snack items={snacks} cantFind="/snacks" />
        </Route>
        <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
        </Route>
        </Switch>
    </main>
    )
}

export default Routes