const Query = {
  mainCards: (parent, args, { mainCardsData }) => mainCardsData,
  animals: (parent, args, { animalsData }) => animalsData,
  animal: (parent, args, { animalsData }) => {
    let animal = animalsData.find((animal) => {
      return animal.slug === args.slug;
    });
    return animal;
  },
  categories: (parent, args, { categoriesData }) => categoriesData,
  category: (parent, args, { categoriesData }) => {
    let category = categoriesData.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};

module.exports = Query;

// RESOLVERS
// maybe some more complex logic here
// like asking for database or doing validation etc.
