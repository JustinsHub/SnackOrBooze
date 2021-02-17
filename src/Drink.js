import React from 'react'
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Drink = ({drinks}) => {
    const {id} = useParams()

    const drink = drinks.find(drink => drink.id === id)
    if(!drink ) return <Redirect to="/"/>

    return (
        <section>
        <Card>
        <CardBody>
        <CardTitle className="font-weight-bold text-center">
            {drink.name} 
        </CardTitle>
        <CardText className="font-italic">{drink.description}</CardText>
        <p>
            <b>Recipe:</b> {drink.recipe}
        </p>
        <p>
            <b>Serve:</b> {drink.serve}
        </p>
        </CardBody>
    </Card> 
        </section>
    )
} 

export default Drink