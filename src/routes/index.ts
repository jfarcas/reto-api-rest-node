import express from "express";
import JokeRoute from "./joke"
import MathRoute from "./math"

const router = express.Router();

router.use('/math', MathRoute);
router.use('/jokes', JokeRoute);

export default router;
