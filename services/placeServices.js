const { Place } = require("../models");

const createPlace = (dataPlace) => {
  return Place.create(dataPlace);
};

const readOnePlace = (placeId) => {
  return Place.findByPk(placeId);
};

const readAllPlace = () => {
  return Place.findAll();
};

const updatePlace = (updateData) => {
  return Place.update({
    where: {
      updateData,
    },
  });
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
