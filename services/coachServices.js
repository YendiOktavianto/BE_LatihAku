const { Coach } = require("../models");
const loginCoach =  (username) => {
  const foundCoach =  Coach.findOne({
    where: {
      username: username,
    },
  });
  return foundCoach;
};

const registerCoach =  (dataCoach) => {
  const newCoach =  Coach.create(dataCoach);
  return newCoach;
};

const readOneCoach =  (coachId) => {
  const findCoach =  Coach.findByPk(coachId);
  return findCoach;
};

const readAllCoach =  () => {
  return  Coach.findAll();
};

const updateCoach =  (updateData) => {
  return  Coach.update({
    where: {
      updateData,
    },
  });
};

const deleteCoach =  (coachId) => {
  return  Coach.destroy({
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
