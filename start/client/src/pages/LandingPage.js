import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";

import { useQuery, useMutation, gql } from "@apollo/client";

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

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $image: String!
    $title: String!
    $rating: Float!
    $price: String!
    $description: [String!]!
    $stock: Int!
    $onSale: Boolean!
    $slug: String!
    $category: String!
  ) {
    addAnimal(
      image: $image
      title: $title
      rating: $rating
      price: $price
      description: $description
      stock: $stock
      onSale: $onSale
      slug: $slug
      category: $category
    ) {
      id
    }
  }
`;

const addAnimalVar = {
  image: "ostrich",
  title: "1-year Female Ostrich",
  rating: 2.0,
  price: "100",
  description: ["hoiqhfx3ewfevbre", "jiocwjqwpe"],
  stock: 5,
  onSale: true,
  slug: "ostrich",
  category: "1",
};

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMALS_QUERY);
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>ERROR</div>;

  console.log("data", data);

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
      <button
        style={{
          padding: "1rem",
          margin: "2rem",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          addAnimal({
            variables: addAnimalVar,
          });
        }}
      >
        add animal
      </button>
    </div>
  );
}

export default LandingPage;
