const LoginCoach = async (username) => {
  const foundUser = await Coach.findOne({
    where: {
      username,
    },
  });
  return foundCoach;
};

const RegisterCoach = async (dataCoach) => {
  const newCoach = await Coach.create({
    dataUser,
  });
  return newCoach;
};

const DeleteCoach = async (idCoach) => {
  const deletedCoach = await Coach.destroy({
    where: {
      idCoach,
    },
  });
  return deletedCoach;
};

const UpdateCoach = async (updateCoach) => {
  const updatedCoach = await Coach.update({
    where: {
      updateCoach,
    },
  });
  return updatedUser;
};

const FindCoach = async (idCoach) => {
  const findUser = await Coach.findOne({
    where: {
      idCoach,
    },
  });
  return findCoach;
};

const FindAllCoach = async () => {
  const findAllCoach = await Coach.findAll({});
  return findAllCoach;
};

module.exports = {
  LoginCoach,
  RegisterCoach,
  DeleteCoach,
  UpdateCoach,
  FindCoach,
  FindAllCoach,
};
