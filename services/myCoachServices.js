const { MyCoach } = require("../models");
const CreateMyCoach = async (dataMyCoach) => {
  const newMyCoach = await MyCoach.create({
    MyCoach,
  });
  return newMyCoach;
};

const DeleteMyCoach = async (idMyCoach) => {
  const deletedMyCoach = await MyCoach.destroy({
    where: {
      idMyCoach,
    },
  });
  return deletedMyCoach;
};

const UpdateMyCoach = async (updateMyCoach) => {
  const updatedMyCoach = await MyCoach.update({
    where: {
      updateMyCoach,
    },
  });
  return updatedMyCoach;
};

const FindMyCoach = async (idMyCoach) => {
  const findMyCoach = await MyCoach.findOne({
    where: {
      idMyCoach,
    },
  });
  return findMyCoach;
};

const FindAllMyCoach = async () => {
  const findAllMyCoach = await MyCoach.findAll({});
  return findAllMyCoach;
};

module.exports = {
  CreateMyCoach,
  DeleteMyCoach,
  UpdateMyCoach,
  FindMyCoach,
  FindAllMyCoach,
};
