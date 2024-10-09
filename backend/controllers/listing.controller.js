import Listing from "../models/listing.model.js";
import asyncHandler from 'express-async-handler';

const createListing  = asyncHandler(async (req, res) => {
  const {
    hostId,title, location, listingName,
    price, listingType, guest, beds, bedrooms,
    bathroom, amenities, description, imageUrls} = req.body;
  
    if (!hostId || !title || !location || !listingName || !price || !listingType || !guest || !beds || !bedrooms || !bathroom) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }
    try {
    const listing = await Listing.create({
      host: req.user._id,title, location, listingName,
      price, listingType, guest, beds,bedrooms,
      bathroom, amenities, description, imageUrls
    });
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error creating listing', error: error.message  });
  }

  res.status(200).json({ message: 'Created Listing  successfully' });
});

const updateListing = asyncHandler(async (req, res) => {
  const {
    hostId,title, location, listingName,
    price, listingType, guest, beds,bedrooms,
    bathroom, amenities, description, imageUrls} = req.body;

    if (!hostId || !title || !location || !listingName || !price || !listingType || !guest || !beds || !bedrooms || !bathroom) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }
    try {
    const listing = await Listing.findByIdAndUpdate(request.params.id, {
      host: req.user._id,title, location, listingName,
      price, listingType, guest, beds,
      bathroom, amenities, description, imageUrls
    }, { new: true });

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(201).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error updating listing', error: error.message  });
  }
  res.status(200).json({ message: 'Updated listing successfully' });
});



const getAllListing = asyncHandler(async (req, res) => {
  try {
    
    const listing = await Listing.find().populate('hostId', 'name email'); // Populate host information if needed

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Respond with the listing data
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching listing', error: error.message });
  }
  res.status(200).json({ message: 'Listing fetched successfully' });
})

const deleteListing = asyncHandler(async (req, res) => {
  try {
    // Find the listing by its ID and delete it
    const listing = await Listing.findByIdAndDelete(req.params.id);

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Respond with a success message
    res.status(200).json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting listing', error: error.message });
  }
});


export { createListing, updateListing, getAllListing, deleteListing };