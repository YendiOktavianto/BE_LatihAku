const { MyCoach } = require("../models");
const createMyCoach = async (dataMyCoach) => {
  const newMyCoach = await MyCoach.create({
    dataMyCoach,
  });
  return newMyCoach;
};

const readOneMyCoach = async (myCoachId) => {
  const findMyCoach = await MyCoach.findByPk(myCoachId);
  return findMyCoach;
};

const readAllMyCoach = async () => {
  const findAllMyCoach = await MyCoach.findAll({});
  return findAllMyCoach;
};

const updateMyCoach = async (updateData) => {
  const updatedMyCoach = await MyCoach.update({
    where: {
      updateData,
    },
  });
  return updatedMyCoach;
};

const deleteMyCoach = async (myCoachId) => {
  const deletedMyCoach = await MyCoach.destroy({
    where: {
      myCoachId,
    },
  });
  return deletedMyCoach;
};

module.exports = {
  createMyCoach,
  deleteMyCoach,
  updateMyCoach,
  readOneMyCoach,
  readAllMyCoach,
};
