import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorisePermissions,checkTestUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorisePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
