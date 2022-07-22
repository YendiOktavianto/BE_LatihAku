const { Booking } = require("../models");
const createBooking = (dataBooking) => {
  return Booking.create(dataBooking);
};

const readOneBooking = (bookingId) => {
  return Booking.findByPk(bookingId);
};

const readAllBooking = () => {
  return Booking.findAll();
};

const updateBooking = (updateData) => {
  return Booking.update({
    where: { updateData },
  });
};

const deleteBooking = (bookingId) => {
  return Booking.destroy({
    where: {
      bookingId,
    },
  });
};

module.exports = {
  createBooking,
  readOneBooking,
  readAllBooking,
  updateBooking,
  deleteBooking,
};
