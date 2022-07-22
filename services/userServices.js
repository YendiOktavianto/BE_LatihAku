const { User } = require("../models");

const loginUser = (firstName) => {
  return User.findOne({
    where: {
      firstName: firstName,
    },
  });
};

const registerUser = (dataUser) => {
  return User.create(dataUser);
};

const readOneUser = (userId) => {
  return User.findByPk(userId);
};

const readAllUser = () => {
  return User.findAll();
};

const updateUser = (updateData) => {
  return User.update({
    where: {
      updateData,
    },
  });
};

const deleteUser = (userId) => {
  return User.destroy({
    where: {
      userId,
    },
  });
};

module.exports = {
  loginUser,
  registerUser,
  deleteUser,
  updateUser,
  readOneUser,
  readAllUser,
};
