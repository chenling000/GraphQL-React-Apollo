const Category = {
  // parent is actually the object itself being executed
  animals: (parent, args, { animalsData }) => {
    return animalsData.filter((animal) => {
      return animal.category === parent.id;
    });
  },
};

module.exports = Category;
