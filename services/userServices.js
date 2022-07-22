const { User } = require("../models");

const loginUser = async (firstName) => {
  return await User.findOne({
    where: {
      firstName: firstName,
    },
  });
};

const registerUser = async (dataUser) => {
  return await User.create(dataUser);
};

const readOneUser = async (userId) => {
  return await User.findByPk(userId);
};

const readAllUser = async () => {
  return await User.findAll();
};

const updateUser = async (updateData) => {
  return await User.update({
    where: {
      updateData,
    },
  });
};

const deleteUser = async (userId) => {
  return await User.destroy({
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
