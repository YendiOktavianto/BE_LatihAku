const { Category } = require("../models");
const createCategory =  (dataCategory) => {
  return  Category.create(dataCategory);
};

const readOneCategory =  (categoryId) => {
  return  Category.findByPk(categoryId);
};

const readAllCategory =  () => {
  return  Category.findAll();
};

const updateCategory =  (updateData) => {
  return  Category.update({
    where: {
      updateData,
    },
  });
};

const deleteCategory =  (categoryId) => {
  return  Category.destroy({
    where: {
      categoryId,
    },
  });
};

module.exports = {
  createCategory,
  readOneCategory,
  readAllCategory,
  updateCategory,
  deleteCategory,
};
