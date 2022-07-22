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
      const { name, image } = request.body;

      const dataCategory = {
        name,
        image,
      };

      createCategory(dataCategory).then(function (newCategory) {
        response.status(200).json({
          statusCode: 200,
          message: "Create Category Successfully",
          data: newCategory,
        });
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
      readAllCategory().then(function (findAllCategory) {
        if (findAllCategory <= 0) {
          throw new Error("CATEGORY_IS_EMPTY");
        }

        response.status(200).json({
          statusCode: 200,
          message: "Category found",
          data: findAllCategory,
        });
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
      readOneCategory(categoryId).then(function (unUpdatedCategory) {
        if (unUpdatedCategory <= 0) {
          throw new Error("CATEGORY_NOT_FOUND");
        } else {
          updateCategory(updateData).then(function (updatedCategory) {
            response.status(200).json({
              statusCode: 200,
              message: "Category updated successfully",
              data: updatedCategory,
            });
          });
        }
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
      deleteCategory(categoryId).then(function (deletedCategory) {
        if (deletedCategory <= 0) {
          throw new Error("CATEGORY_NOT_FOUND");
        }
        response.status(200).json({
          statusCode: 200,
          message: `Category deleted successfully`,
          data: deletedCategory,
        });
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
      readOneCategory(categoryId).then(function (findCategory) {
        if (findCategory <= 0) {
          throw new Error("CATEGORY_NOT_FOUND");
        }

        response.status(200).json({
          statusCode: 200,
          message: "Data Category Found",
          data: findCategory,
        });
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
