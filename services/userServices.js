const { User } = require("../models");
const loginUser = async (username) => {
  const foundUser = await User.findOne({
    where: {
      username: username,
    },
  });
  return foundUser;
};

const registerUser = async () => {
  const newUser = await User.create();
  return newUser;
};

const readOneUser = async (userId) => {
  const findUser = await User.findOne(userId);
  return findUser;
};

const readAllUser = async () => {
  const findAllUser = await User.findAll();
  return findAllUser;
};

const updateUser = async (updateData) => {
  const updatedUser = await User.update({
    where: {
      updateData,
    },
  });
  return updatedUser;
};

const deleteUser = async (userId) => {
  const deleteUser = await User.destroy({
    where: {
      userId,
    },
  });
  return deleteUser;
};

module.exports = {
  loginUser,
  registerUser,
  deleteUser,
  updateUser,
  readOneUser,
  readAllUser,
};
