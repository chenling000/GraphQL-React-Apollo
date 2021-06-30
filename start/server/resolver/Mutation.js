const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, stock, onSale, slug, category },
    { animalsData }
  ) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      slug,
      category,
    };
    animalsData.push(newAnimal);

    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animalsData }) => {
    let index = animalsData.findIndex((animal) => {
      return animal.id === id;
    });
    const animalBeRemoved = animalsData[index];
    animalsData.splice(index, 1);

    return animalBeRemoved;
  },
};

module.exports = Mutation;

// type Animal {
//     id: ID!
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     stock: Int!
//     onSale: Boolean
//     slug: String!
//     category: Category
//   }

const monkey = {
  image: "monkey",
  title: "monkey",
  rating: 4.0,
  price: "$2,000,000",
  description: ["joiwxioew", "ioxwjqoxfew"],
  stock: 13,
  onSale: true,
  slug: "monkey",
  category: "mammals",
};
