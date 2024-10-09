import express from 'express';
import { createListing, updateListing, getAllListing, deleteListing } from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/', createListing);
router.put('/update', updateListing);
router.get('/', getAllListing);
router.delete('/delete', deleteListing);


export default router;