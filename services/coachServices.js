const { Coach } = require("../models");
const loginCoach = async (username) => {
  const foundCoach = await Coach.findOne({
    where: {
      username: username,
    },
  });
  return foundCoach;
};

const registerCoach = async (dataCoach) => {
  const newCoach = await Coach.create(dataCoach);
  return newCoach;
};

const readOneCoach = async (coachId) => {
  const findCoach = await Coach.findByPk(coachId);
  return findCoach;
};

const readAllCoach = async () => {
  return await Coach.findAll();
};

const updateCoach = async (updateData) => {
  return await Coach.update({
    where: {
      updateData,
    },
  });
};

const deleteCoach = async (coachId) => {
  return await Coach.destroy({
    where: {
      coachId,
    },
  });
};

module.exports = {
  loginCoach,
  registerCoach,
  readOneCoach,
  readAllCoach,
  updateCoach,
  deleteCoach,
};
