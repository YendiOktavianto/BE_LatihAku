const { Place } = require("../models");
const createPlace = async (dataPlace) => {
  return await Place.create(dataPlace);
};

const readOnePlace = async (placeId) => {
  return await Place.findByPk(placeId);
};

const readAllPlace = async () => {
  return await Place.findAll();
};

const updatePlace = async (updateData) => {
  return await Place.update({
    where: {
      updateData,
    },
  });
};

const deletePlace = async (placeId) => {
  return await Place.destroy({
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
