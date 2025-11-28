const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /bookings
// @access  Public
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({
      message: 'booking created',
      booking,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Get all bookings
// @route   GET /bookings
// @access  Public
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  createBooking,
  getBookings,
};
