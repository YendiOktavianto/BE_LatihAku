const { Category } = require("../models");
const createCategory = async (dataCategory) => {
  const newCategory = await Category.create(dataCategory);
  return newCategory;
};

const readOneCategory = async (categoryId) => {
  const findCategory = await Category.findByPk(categoryId);
  return findCategory;
};

const readAllCategory = async () => {
  const findAllCategory = await Category.findAll();
  return findAllCategory;
};

const updateCategory = async (updateData) => {
  const updatedCategory = await Category.update({
    where: {
      updateData,
    },
  });
  return updatedCategory;
};

const deleteCategory = async (categoryId) => {
  const deletedCategory = await Category.destroy({
    where: {
      categoryId,
    },
  });
  return deletedCategory;
};

module.exports = {
  createCategory,
  readOneCategory,
  readAllCategory,
  updateCategory,
  deleteCategory,
};
