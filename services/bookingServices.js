const { Booking } = require("../models");
const createBooking = async (dataBooking) => {
  const newBooking = await Booking.create(dataBooking);
  return newBooking;
};

const readOneBooking = async (bookingId) => {
  const findBooking = await Booking.findByPk(bookingId);
  return findBooking;
};

const readAllBooking = async () => {
  const findAllBooking = await Booking.findAll();
  return findAllBooking;
};

const updateBooking = async (updateData) => {
  const updatedBooking = await Booking.update({
    where: { updateData },
  });
  return updatedBooking;
};

const deleteBooking = async (bookingId) => {
  const deleteBooking = await Booking.destroy({
    where: {
      bookingId,
    },
  });
  return deleteBooking;
};

module.exports = {
  createBooking,
  readOneBooking,
  readAllBooking,
  updateBooking,
  deleteBooking,
};
