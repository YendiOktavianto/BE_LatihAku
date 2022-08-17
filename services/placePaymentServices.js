const { PlacePayment } = require("../models");
const createPlacePayment = (dataPlacePayment) => {
  return PlacePayment.create(dataPlacePayment);
};

const readOnePlacePayment = (placePaymentId) => {
  return PlacePayment.findByPk(placePaymentId);
};

const readOnePlacePaymentByName = (name) => {
  return PlacePayment.findOne({
    where: { name: name },
    //include: Profile
  });
};
const readAllPlacePayment = () => {
  return PlacePayment.findAll();
};

const updatePlacePayment = async (updateData, placePaymentId) => {
  const updatedPlacePayment = await readOnePlacePayment(placePaymentId);
  if (updatedPlacePayment <= 0) {
    throw new Error("PAYMENT_PLACE_NOT_FOUND");
  } else {
    updatedPlacePayment.update(updateData);
  }
  return updatedPlacePayment;
};

const deletePlacePayment = (placePaymentId) => {
  return PlacePayment.destroy({
    where: {
      placePaymentId,
    },
  });
};

module.exports = {
  createPlacePayment,
  readOnePlacePayment,
  readAllPlacePayment,
  updatePlacePayment,
  deletePlacePayment,
  readOnePlacePaymentByName,
};
