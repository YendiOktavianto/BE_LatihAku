const { MyCoach } = require("../models");

const createMyCoach = (dataMyCoach) => {
  return MyCoach.create(dataMyCoach);
};

const readOneMyCoach = (myCoachId) => {
  return MyCoach.findByPk(myCoachId);
};
const readOneMyCoachByName = (name) => {
  return MyCoach.findOne({
    where: { name: name },
    include: Profile,
  });
};

const readAllMyCoach = () => {
  return MyCoach.findAll();
};

const updateMyCoach = async (updateData, myCoachId) => {
  const updatedMyCoach = await FindMyCoach(myCoachId);
  if (updatedMyCoach < 0) {
    throw new Error("MY_COACH_NOT_FOUND");
  } else {
    updatedMyCoach.update(updateData);
  }
  return updatedMyCoach;
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
