import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

//Takes snacks as props and maps through the state to show API data to the UI
//Each snack link directs user to more information about the snack
function FoodMenu({ snacks }) {
  return (
    <section className="col-md-4"> 
    <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some food for you?
          </CardText>
          <ListGroup>
            {snacks.map(snack => (
              <Link to={`/snacks/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card> 
      <Link to="/add-items">
      <button>Add a snack</button>
      </Link>
      
    </section>
  );
}

export default FoodMenu;
