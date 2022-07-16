const { Place } = require("../models");
const createPlace = async (dataPlace) => {
  const newPlace = await Place.create(dataPlace);
  return newPlace;
};

const readOnePlace = async (placeId) => {
  const findPlace = await Place.findByPk(placeId);
  return findPlace;
};

const readAllPlace = async () => {
  const findAllPlace = await Place.findAll();
  return findAllPlace;
};

const updatePlace = async (updateData) => {
  const updatedPlace = await Place.update({
    where: {
      updateData,
    },
  });
  return updatedPlace;
};

const deletePlace = async (placeId) => {
  const deletedPlace = await Place.destroy({
    where: {
      placeId,
    },
  });
  return deletedPlace;
};

module.exports = {
  createPlace,
  readOnePlace,
  readAllPlace,
  updatePlace,
  deletePlace,
};
