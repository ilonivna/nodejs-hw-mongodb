import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserSchema, loginUserSchema } from "../validation/auth.js";
import { registerUserController, loginUserController, logoutUserController } from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";
import { refreshUsersSession } from "../services/auth.js";


const router = Router();

router.post('/register', validateBody(registerUserSchema),
    ctrlWrapper(registerUserController));

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController));

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUsersSession));

export default router;
