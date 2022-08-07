const { Coach } = require("../models");
const loginCoach = (username) => {
  const foundCoach = Coach.findOne({
    where: {
      username: username,
    },
  });
  return foundCoach;
};

const registerCoach = (dataCoach) => {
  return Coach.create(dataCoach);
};

const readOneCoach = (coachId) => {
  return Coach.findByPk(coachId);
};

const readOneCoachByName = (firstName) => {
  return Coach.findOne({
    where: { firstName: firstName },
    //include: Profile,
  });
};

const readAllCoach = () => {
  return Coach.findAll();
};

const readAllCoachByCategory = (CategoryId) => {
  return Coach.findAll({
    where: { CategoryId: CategoryId },
  });
};

const updateCoach = async (updateData, coachId) => {
  const updatedCoach = await readOneCoach(coachId);
  if (updatedCoach <= 0) {
    throw new Error("COACH_NOT_FOUND");
  } else {
    updateCoach.update(updateData);
  }
  return updatedCoach;
};

const deleteCoach = (coachId) => {
  return Coach.destroy({
    where: {
      id: coachId,
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
  readOneCoachByName,
  readAllCoachByCategory,
};
