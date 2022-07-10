const { Coach } = require("../models");
const loginCoach = async (username) => {
  const foundCoach = await Coach.findOne();
  return foundCoach;
};

const registerCoach = async () => {
  const newCoach = await Coach.create();
  return newCoach;
};

const readOneCoach = async (coachId) => {
  const findCoach = await Coach.findByPk(coachId);
  return findCoach;
};

const readAllCoach = async () => {
  const findAllCoach = await Coach.findAll();
  return findAllCoach;
};

const updateCoach = async (updateData) => {
  const updatedCoach = await Coach.update({
    where: {
      updateData,
    },
  });
  return updatedCoach;
};

const deleteCoach = async (coachId) => {
  const deletedCoach = await Coach.destroy({
    where: {
      coachId,
    },
  });
  return deletedCoach;
};

module.exports = {
  loginCoach,
  registerCoach,
  readOneCoach,
  readAllCoach,
  updateCoach,
  deleteCoach,
};
