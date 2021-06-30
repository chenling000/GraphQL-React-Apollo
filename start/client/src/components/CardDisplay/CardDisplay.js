import React from "react";
import Card from "../Card/Card";
import { Container } from "react-bootstrap";

import { useQuery, gql } from "@apollo/client";

const ANIMALS_QUERY = gql`
  {
    animals {
      id
      image
      title
      rating
      price
      slug
    }
  }
`;

function CardDisplay() {
  const { loading, error, data } = useQuery(ANIMALS_QUERY);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>ERROR</div>;

  console.log("data", data);

  return (
    <div className="card-display">
      <Container className="card-display-container">
        {data.animals.map((animal) => {
          return <Card animal={animal} />;
        })}
      </Container>
    </div>
  );
}

export default CardDisplay;
