import express from 'express';
import { signin, signup, getUserProfile, updateUserProfile, signout } from '../controllers/user.controller.js';
import {protect} from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', signup);
router.post('/auth', signin);
router.post('/signout', signout);
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);



export default router;
