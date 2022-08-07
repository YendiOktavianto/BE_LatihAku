const { User } = require("../models");

const loginUser = (username) => {
  return User.findOne({
    where: {
      username: username,
    },
  });
};

const registerUser = (dataUser) => {
  return User.create(dataUser);
};

const readOneUser = (userId) => {
  return User.findByPk(userId);
};

const readOneUserByName = (firstName) => {
  return User.findOne({
    where: { firstName: firstName },
  });
};

const readAllUser = () => {
  return User.findAll();
};

const readAllUserByMyCoach = (MyCoachId) => {
  return User.findAll({
    where: { MyCoachId: MyCoachId },
  });
};

const updateUser = async (updateData, userId) => {
  const updatedUser = await readOneUser(userId);
  console.log(updatedUser, updateData);
  if (updatedUser <= 0) {
    throw new Error("USER_NOT_FOUND");
  } else {
    updatedUser.update(updateData);
  }
  return updatedUser;
};

const deleteUser = async (userId) => {
  return await User.destroy({
    where: {
      id: userId,
    },

    truncate: { cascade: true, restartIdentity: true },
  });
};

module.exports = {
  loginUser,
  registerUser,
  deleteUser,
  updateUser,
  readOneUser,
  readAllUser,
  readOneUserByName,
  readAllUserByMyCoach,
};
