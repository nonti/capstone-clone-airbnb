import express from 'express';
import {createReservation, getHostReservations, getUserReservations, deleteReservations} from '../controllers/reservation.controller.js';

const router = express.Router();

router.post('/', createReservation);
router.get('/host/:id', getHostReservations);
router.get('/user/:id', getUserReservations);
router.delete('/:id', deleteReservations);

export default router;

