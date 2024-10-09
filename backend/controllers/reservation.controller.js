import Reservation from "../models/reservation.model.js";
import asyncHandler from 'express-async-handler';
const createReservation = asyncHandler(async (req, res) => {
  const {
    images, type,location, guests,
    bedrooms, bathrooms, beds, amenities,
    price, title, host, host_id,
    weeklyDiscount, cleaningFee, serviceFee,
    occupancyTaxes, enhancedCleaning, selfCheckin, description,specificRatings, } = req.body;

    if (!images || !type || !location || !guests || !beds || !bedrooms || !bathrooms || !amenities || !rating || !reviews || !price || !title || !host || !host_id) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    try {
      // Create a new reservation
      const newReservation = new Reservation({
        images, type, location, guests,beds,
        bedrooms, bathrooms, amenities,
        rating, reviews, price,
        title, host, host_id, weeklyDiscount, cleaningFee,
        serviceFee, occupancyTaxes, enhancedCleaning,
        selfCheckIn, description, specificRatings
      });
  
      // Save the reservation to the database
      const savedReservation = await newReservation.save();
      res.status(201).json(savedReservation);
    } catch (error) {
      res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }

})

const getHostReservations = asyncHandler(async (req, res) => {
  const { hostId } = req.query;
  try {
    const reservations = await Reservation.find({ host: hostId });
    if (!reservations.length) {
      return res.status(404).json({ message: 'No reservations found for this host.' });
    }

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error: error.message });
  }
})

const getUserReservations = asyncHandler(async (req, res) => {
  const { userId } = req.query;
  try {
    const reservations = await Reservation.find({ user: userId });
    if (!reservations.length) {
      return res.status(404).json({ message: 'No reservations found for this user.' });
    }
    res.status(200).json(reservations);
   } catch (error) {
    res.status(500).json({ message: 'Error fetching reservations', error: error.message });
  }
})

const deleteReservations = asyncHandler(async (req, res) => {
  const { reservationId } = req.query;
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(reservationId);
    if (!deletedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting reservation', error: error.message });
  }
})


export {createReservation, getHostReservations, getUserReservations, deleteReservations};