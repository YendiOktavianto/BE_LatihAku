const { Place } = require("../models");

const createPlace = (dataPlace) => {
  return Place.create(dataPlace);
};

const readOnePlace = (placeId) => {
  return Place.findByPk(placeId);
};

const readOnePlaceByName = (name) => {
  return User.findOne({
    where: { name: name },
  });
};

const readAllPlace = () => {
  return Place.findAll();
};

const updatePlace = async (updateData, placeId) => {
  const updatedPlace = await readOnePlace(placeId);
  if (updatedPlace <= 0) {
    throw new Error("PLACE_NOT_FOUND");
  } else {
    updatedPlace.update(updateData);
  }
  return updatedPlace;
};

const deletePlace = (placeId) => {
  return Place.destroy({
    where: {
      placeId,
    },
  });
};

module.exports = {
  createPlace,
  readOnePlace,
  readAllPlace,
  updatePlace,
  deletePlace,
};
