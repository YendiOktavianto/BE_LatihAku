const { Category } = require("../models");
const createCategory = (dataCategory) => {
  return Category.create(dataCategory);
};

const readOneCategory = (categoryId) => {
  return Category.findByPk(categoryId);
};

const readAllCategory = () => {
  return Category.findAll();
};

const updateCategory = async (updateData, categoryId) => {
  const updatedCategory = await readOneCategory(categoryId);
  if (updatedCategory <= 0) {
    throw new Error("CATEGORY_NOT_FOUND");
  } else {
    updatedCategory.update(updateData);
  }
  return updatedCategory;
};

const deleteCategory = (categoryId) => {
  return Category.destroy({
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
