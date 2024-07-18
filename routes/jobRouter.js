import { Router } from "express";
import { validateJobInput } from "../middleware/validationMiddleware.js";
import { validIdParam } from "../middleware/validationMiddleware.js";
import { checkTestUser } from "../middleware/authMiddleware.js";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats
} from "../controllers/jobController.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route("/:id")
  .get(checkTestUser, validIdParam, getJob)
  .patch(checkTestUser, validIdParam, validateJobInput, updateJob)
  .delete(checkTestUser, validIdParam, deleteJob);

export default router;
