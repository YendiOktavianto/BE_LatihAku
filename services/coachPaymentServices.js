const { CoachPayment } = require("../models");
const createCoachPayment = (dataCoachPayment) => {
  return CoachPayment.create(dataCoachPayment);
};

const readOneCoachPayment = (coachPaymentId) => {
  return CoachPayment.findByPk(coachPaymentId);
};

const readOneCoachPaymentByName = (name) => {
  return CoachPayment.findOne({
    where: { name: name },
    //include: Profile
  });
};
const readAllCoachPayment = () => {
  return CoachPayment.findAll();
};

const updateCoachPayment = async (updateData, coachPaymentId) => {
  const updatedCoachPayment = await readOneCoachPayment(coachPaymentId);
  if (updatedCoachPayment <= 0) {
    throw new Error("PAYMENT_COACH_NOT_FOUND");
  } else {
    updatedCoachPayment.update(updateData);
  }
  return updatedCoachPayment;
};

const deleteCoachPayment = (coachPaymentId) => {
  return CoachPayment.destroy({
    where: {
      coachPaymentId,
    },
  });
};

module.exports = {
  createCoachPayment,
  readOneCoachPayment,
  readAllCoachPayment,
  updateCoachPayment,
  deleteCoachPayment,
  readOneCoachPaymentByName,
};
