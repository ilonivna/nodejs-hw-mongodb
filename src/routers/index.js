import { Router } from "express";
import contactsRouter from "./contacts.js";
import authRouter from "./auth.js";

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/register', authRouter);

export default router;
