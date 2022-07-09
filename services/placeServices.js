const { Place } = require("../models");
const CreatePlace = async (dataPlace) => {
  const newPlace = await Place.create({
    dataPlace,
  });
  return newPlace;
};

const DeletePlace = async (idPlace) => {
  const deletedPlace = await Place.destroy({
    where: {
      idPlace,
    },
  });
  return deletedPlace;
};

const UpdatePlace = async (updatePlace) => {
  const updatedPlace = await Place.update({
    where: {
      updatePlace,
    },
  });
  return updatedPlace;
};

const FindPlace = async (idPlace) => {
  const findPlace = await Place.findOne({
    where: {
      idPlace,
    },
  });
  return findPlace;
};

const FindAllPlace = async () => {
  const findAllPlace = await Place.findAll({});
  return findAllPlace;
};

module.exports = {
  CreatePlace,
  DeletePlace,
  UpdatePlace,
  FindPlace,
  FindAllPlace,
};
