const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: String,
  },
  guests: {
    type: Number,
    required: [true, 'Please add number of guests'],
    min: [1, 'Guests must be at least 1'],
  },
  accommodationType: {
    type: String,
    required: [true, 'Please select accommodation type'],
    enum: ['Room', 'Villa', 'Suite'],
  },
  checkIn: {
    type: Date,
    required: [true, 'Please add check-in date'],
  },
  checkOut: {
    type: Date,
    required: [true, 'Please add check-out date'],
  },
  activities: {
    type: [String],
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

// Validate checkOut date is after checkIn
bookingSchema.pre('validate', function(next) {
  if (this.checkIn && this.checkOut && this.checkIn >= this.checkOut) {
    this.invalidate('checkOut', 'Check-out date must be after check-in date');
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
