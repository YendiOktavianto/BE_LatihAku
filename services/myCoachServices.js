const { MyCoach } = require("../models");
const createMyCoach = (dataMyCoach) => {
  return MyCoach.create(dataMyCoach);
};

const readOneMyCoach = (myCoachId) => {
  return MyCoach.findByPk(myCoachId);
};

const readAllMyCoach = () => {
  return MyCoach.findAll();
};

const updateMyCoach = (updateData) => {
  return MyCoach.update({
    where: {
      updateData,
    },
  });
};

const deleteMyCoach = (myCoachId) => {
  return MyCoach.destroy({
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
