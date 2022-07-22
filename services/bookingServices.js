const { Booking } = require("../models");
const createBooking = async (dataBooking) => {
  return await Booking.create(dataBooking);
};

const readOneBooking = async (bookingId) => {
  return await Booking.findByPk(bookingId);
};

const readAllBooking = async () => {
  return await Booking.findAll();
};

const updateBooking = async (updateData) => {
  return await Booking.update({
    where: { updateData },
  });
};

const deleteBooking = async (bookingId) => {
  return await Booking.destroy({
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
