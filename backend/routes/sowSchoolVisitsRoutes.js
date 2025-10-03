// routes/sowSchoolVisitsRoutes.js
import { Router } from "express";
import { getLastTwentyVisits } from "../controllers/sowSchoolVisitsController.js";

const router = Router();

// GET /api/visits/last20
router.get("/last20", getLastTwentyVisits);

export default router;
