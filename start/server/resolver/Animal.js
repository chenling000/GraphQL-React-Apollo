const Animal = {
  category: (parent, args, { categoriesData }) => {
    return categoriesData.find((category) => {
      return category.id === parent.category;
    });
  },
};

module.exports = Animal;
