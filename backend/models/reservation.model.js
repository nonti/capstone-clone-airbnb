import mongoose from 'mongoose';

const specificRatingsSchema = new mongoose.Schema({
  cleanliness: { type: Number, required: true },
  communication: { type: Number, required: true },
  checkIn: { type: Number, required: true },
  accuracy: { type: Number, required: true },
  location: { type: Number, required: true },
  value: { type: Number, required: true },
}, { _id: false });

const reservationSchema = new mongoose.Schema({
  images: {
    type: [String],
    required: true
  },
  type: { // Fixed the definition of type
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  ratings: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  host_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weeklyDiscount: {
    type: Number,
    default: 0
  },
  cleaningFee: {
    type: Number,
    required: true
  },
  serviceFee: {
    type: Number,
    required: true
  },
  occupancyTaxes: {
    type: Number,
    required: true
  },
  enhancedCleaning: {
    type: Boolean,
    default: false
  },
  selfCheckin: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  specificRatings: specificRatingsSchema,
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
