const { User } = require("../models");
const loginUser = async (firstName) => {
  const foundUser = await User.findOne({
    where: {
      firstName: firstName,
    },
  });
  return foundUser;
};

const registerUser = async (dataUser) => {
  const newUser = await User.create(dataUser);
  return newUser;
};

const readOneUser = async (userId, cb) => {
  const findUser = await User.findByPk(userId);
  console.log(findUser);
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
