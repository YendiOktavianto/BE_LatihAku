const { Category } = require("../models");
const createCategory = async (dataCategory) => {
  return await Category.create(dataCategory);
};

const readOneCategory = async (categoryId) => {
  return await Category.findByPk(categoryId);
};

const readAllCategory = async () => {
  return await Category.findAll();
};

const updateCategory = async (updateData) => {
  return await Category.update({
    where: {
      updateData,
    },
  });
};

const deleteCategory = async (categoryId) => {
  return await Category.destroy({
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
