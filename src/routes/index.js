import usersRouter from '#API/components/Users/users.routes.js';
import { Router } from 'express';

const router = Router();

router.get('/usuarios', usersRouter);

export default router;
