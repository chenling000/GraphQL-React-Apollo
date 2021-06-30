import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";

// make query and fetch data
import { useQuery, gql } from "@apollo/client";

// make query
const MAINCARDS_QUERY = gql`
  {
    mainCards {
      image
      title
    }
  }
`;

function MainHero() {
  // make query
  const { loading, error, data } = useQuery(MAINCARDS_QUERY);

  // dealing with response
  if (loading) return <div>Loading...</div>;

  if (error) return <div>ERROR</div>;

  console.log("data", data);

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt="rhino" />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card) => {
            return (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <img
                  src={animals[card.image]}
                  alt="card"
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
