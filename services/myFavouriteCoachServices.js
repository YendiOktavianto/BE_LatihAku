const { MyFavouriteCoach } = require("../models");

const createMyFavouriteCoach = (dataMyCoach) => {
  return MyFavouriteCoach.create(dataMyCoach);
};

const readOneMyFavouriteCoach = (myCoachId) => {
  return MyFavouriteCoach.findByPk(myCoachId);
};
const readOneMyFavouriteCoachByName = (name) => {
  return MyFavouriteCoach.findOne({
    where: { name: name },
    include: Profile,
  });
};

const readAllMyFavouriteCoach = () => {
  return MyFavouriteCoach.findAll();
};

const readAllMyFavouriteCoachByFavourite = () => {
  return MyFavouriteCoach.findAll({
    where: { favourite: true },
  });
};

const updateMyFavouriteCoach = async (updateData, myCoachId) => {
  const updatedMyFavouriteCoach = await FindMyCoach(myCoachId);
  if (updatedMyFavouriteCoach < 0) {
    throw new Error("MY_COACH_NOT_FOUND");
  } else {
    updatedMyFavouriteCoach.update(updateData);
  }
  return updatedMyFavouriteCoach;
};

const deleteMyFavouriteCoach = (myCoachId) => {
  return MyFavouriteCoach.destroy({
    where: {
      myCoachId,
    },
  });
};

module.exports = {
  createMyFavouriteCoach,
  deleteMyFavouriteCoach,
  updateMyFavouriteCoach,
  readOneMyFavouriteCoach,
  readAllMyFavouriteCoach,
  readOneMyFavouriteCoachByName,
  readAllMyFavouriteCoachByFavourite,
};
