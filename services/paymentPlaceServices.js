const { PaymentPlace } = require("../models");
const createPaymentPlace = (dataPaymentPlace) => {
  return PaymentPlace.create(dataPaymentPlace);
};

const readOnePaymentPlace = (paymentPlaceId) => {
  return PaymentPlace.findByPk(paymentPlaceId);
};

const readOnePaymentPlaceByName = (name) => {
  return PaymentPlace.findOne({
    where: { name: name },
    //include: Profile
  });
};
const readAllPaymentPlace = () => {
  return PaymentPlace.findAll();
};

const updatePaymentPlace = async (updateData, paymentPlaceId) => {
  const updatedPaymentPlace = await readOnePaymentPlace(paymentPlaceId);
  if (updatedPaymentPlace <= 0) {
    throw new Error("PAYMENT_PLACE_NOT_FOUND");
  } else {
    updatedPaymentPlace.update(updateData);
  }
  return updatedPaymentPlace;
};

const deletePaymentPlace = (paymentPlaceId) => {
  return PaymentPlace.destroy({
    where: {
      paymentPlaceId,
    },
  });
};

module.exports = {
  createPaymentPlace,
  readOnePaymentPlace,
  readAllPaymentPlace,
  updatePaymentPlace,
  deletePaymentPlace,
  readOnePaymentPlaceByName,
};
