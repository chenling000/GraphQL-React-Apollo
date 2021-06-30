const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { mainCardsData, animalsData, categoriesData } = require("./db");
const Query = require("./resolver/Query");
const Mutation = require("./resolver/Mutation");
const Animal = require("./resolver/Animal");
const Category = require("./resolver/Category");

// setting up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category,
  },
  context: {
    mainCardsData,
    animalsData,
    categoriesData,
  },
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
