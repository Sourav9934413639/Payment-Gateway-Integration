import express from 'express';
import { checkout, paymentVerify } from '../controller/paymentController.js';
const router=express.Router();
router.route("/checkout").post(checkout);
router.route("/paymentVerification").post(paymentVerify);

export default router;