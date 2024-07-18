import { Router } from "express";
const router = Router()
import { Register,Login } from "../controllers/authController.js";
import { ValidateRegisterInput,ValidateLoginInput, Logout } from "../middleware/validationMiddleware.js";

router.post('/register',ValidateRegisterInput,Register)
router.post('/login',ValidateLoginInput,Login)
router.get('/logout',Logout)

export default router