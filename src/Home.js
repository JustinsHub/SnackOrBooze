import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

//Home takes snacks and drinks props as the API to map through what snacks/drinks are available to the UI
const Home = ({snacks, drinks}) => {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            
          </CardTitle>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Our Snacks
            </h3>
            <ul>
              {snacks.map(s => <li>{s.name}</li>)}
            </ul>
          </CardTitle>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Our Drinks
            </h3>
            <ul>
              {drinks.map(d => <li>{d.name}</li>)}
              </ul>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
