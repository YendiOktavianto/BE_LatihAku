const {
  createCategory,
  readOneCategory,
  readAllCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryServices");

class categoryController {
  static async create(request, response) {
    try {
      const { name } = request.body;

      const image = request.file.path;

      const dataCategory = {
        name,
        image,
      };

      const newCategory = await createCategory(dataCategory);

      response.status(200).json({
        statusCode: 200,
        message: "Create Category Successfully",
        data: newCategory,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async list(request, response) {
    try {
      const findAllCategory = await readAllCategory();

      if (findAllCategory <= 0) {
        throw new Error("CATEGORY_IS_EMPTY");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Category found",
        data: findAllCategory,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "CATEGORY_IS_EMPTY") {
        code = 400;
        message = "Data Category Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async update(request, response) {
    try {
      const categoryId = request.params.id;
      const { name } = request.body;
      const image = request.file.path;

      const updateData = {
        name,
        image,
      };
      const updatedCategory = await updateCategory(updateData, categoryId);
      response.status(200).json({
        statusCode: 200,
        message: "Category updated successfully",
        data: updatedCategory,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "CATEGORY_NOT_FOUND") {
        code = 404;
        message = "Category not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: message,
        },
      });
    }
  }

  static async delete(request, response) {
    try {
      const categoryId = request.params.id;
      const deletedCategory = await deleteCategory(categoryId);

      if (deletedCategory <= 0) {
        throw new Error("CATEGORY_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: `Category deleted successfully`,
        data: deletedCategory,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "CATEGORY_NOT_FOUND") {
        code = 404;
        message = "Category not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: message,
        },
      });
    }
  }

  static async search(request, response) {
    try {
      const categoryId = request.params.id;

      const findCategory = await readOneCategory(categoryId);

      if (findCategory <= 0) {
        throw new Error("CATEGORY_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Category Found",
        data: findCategory,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "CATEGORY_NOT_FOUND") {
        code = 400;
        message = "Category Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = categoryController;
