const { Booking } = require("../models");
const createBooking = (dataBooking) => {
  return Booking.create(dataBooking);
};

const readOneBooking = (bookingId) => {
  return Booking.findByPk(bookingId);
};

const readOneBookingByUser = (userId) => {
  return Booking.findOne({
    where: { userId: userId },
    //include: Profile,
  });
};

const readAllBooking = () => {
  return Booking.findAll();
};

const updateBooking = async (updateData) => {
  const updatedBooking = await readOneBooking(bookingId);
  if (updatedBooking <= 0) {
    throw new Error("BOOKING_NOT_FOUND");
  } else {
    updatedBooking.update(updateData);
  }
  return updatedBooking;
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
