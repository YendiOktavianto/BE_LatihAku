const { MyCoach } = require("../models");
const createMyCoach = async (dataMyCoach) => {
  return await MyCoach.create(dataMyCoach);
};

const readOneMyCoach = async (myCoachId) => {
  return await MyCoach.findByPk(myCoachId);
};

const readAllMyCoach = async () => {
  return await MyCoach.findAll();
};

const updateMyCoach = async (updateData) => {
  return await MyCoach.update({
    where: {
      updateData,
    },
  });
};

const deleteMyCoach = async (myCoachId) => {
  return await MyCoach.destroy({
    where: {
      myCoachId,
    },
  });
};

module.exports = {
  createMyCoach,
  deleteMyCoach,
  updateMyCoach,
  readOneMyCoach,
  readAllMyCoach,
};
