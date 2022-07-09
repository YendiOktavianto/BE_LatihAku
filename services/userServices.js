const LoginUser = async (username) => {
  const foundUser = await User.findOne({
    where: {
      username,
    },
  });
  return foundUser;
};

const RegisterUser = async (dataUser) => {
  const newUser = await User.create({
    dataUser,
  });
  return newUser;
};

const DeleteUser = async (idUser) => {
  const deleteUser = await User.destroy({
    where: {
      idUser,
    },
  });
  return deleteUser;
};

const UpdateUser = async (updateUser) => {
  const updatedUser = await User.update({
    where: {
      updateUser,
    },
  });
  return updatedUser;
};

const FindUser = async (idUser) => {
  const findUser = await User.findOne({
    where: {
      idUser,
    },
  });
  return findUser;
};

const FindAllUser = async () => {
  const findAllUser = await User.findAll({});
  return findAllUser;
};

module.exports = {
  LoginUser,
  RegisterUser,
  DeleteUser,
  UpdateUser,
  FindUser,
  FindAllUser,
};
