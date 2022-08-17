const { PaymentCoach } = require("../models");
const createPaymentCoach = (dataPaymentCoach) => {
  return PaymentCoach.create(dataPaymentCoach);
};

const readOnePaymentCoach = (PaymentCoachId) => {
  return PaymentCoach.findByPk(PaymentCoachId);
};

const readOnePaymentCoachByName = (name) => {
  return PaymentCoach.findOne({
    where: { name: name },
    //include: Profile
  });
};
const readAllPaymentCoach = () => {
  return PaymentCoach.findAll();
};

const updatePaymentCoach = async (updateData, PaymentCoachId) => {
  const updatedPaymentCoach = await readOnePaymentCoach(PaymentCoachId);
  if (updatedPaymentCoach <= 0) {
    throw new Error("PAYMENT_COACH_NOT_FOUND");
  } else {
    updatedPaymentCoach.update(updateData);
  }
  return updatedPaymentCoach;
};

const deletePaymentCoach = (PaymentCoachId) => {
  return PaymentCoach.destroy({
    where: {
      PaymentCoachId,
    },
  });
};

module.exports = {
  createPaymentCoach,
  readOnePaymentCoach,
  readAllPaymentCoach,
  updatePaymentCoach,
  deletePaymentCoach,
  readOnePaymentCoachByName,
};
