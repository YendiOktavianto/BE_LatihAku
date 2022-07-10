const {
  createCategory,
  readOneCategory,
  readAllCategory,
  updateCategory,
  deleteCategory,
} = require("../services/categoryServices");

class categoryController {
  static create(request, response) {
    try {
      // const { name, image } = request.body;

      // const dataCategory = {
      //   name,
      //   image,
      // };

      const newCategory = createCategory(dataCategory);
      //createCategory(dataCategory);
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

  static list(response) {
    try {
      const findAllCategory = readAllCategory();
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

  static update(request, response) {
    try {
      const categoryId = request.params.id;
      const { name, image } = request.body;

      const updateData = {
        name,
        image,
      };

      const updatedData = "";
      const oldCategory = readOneCategory(categoryId);
      if (oldCategory <= 0) {
        throw new Error("CATEGORY_NOT_FOUND");
      } else {
        updatedData = updateCategory(updateData);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Category updated successfully",
        data: updatedData,
      });
    } catch (err) {
      let code = 500;
      let msg = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        msg = "Bad Request";
      } else if (err.message === "CATEGORY_NOT_FOUND") {
        code = 404;
        msg = "Category not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: msg,
        },
      });
    }
  }

  static delete(request, response) {
    try {
      const categoryId = request.params.id;
      const deletedCategory = deleteCategory(categoryId);

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
      let msg = "Internal Server Error";

      if (err.message === "CATEGORY_NOT_FOUND") {
        code = 404;
        msg = "Category not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: msg,
        },
      });
    }
  }

  static search(request, response) {
    try {
      const categoryId = request.params.id;
      const findCategory = readOneCategory(categoryId);

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
