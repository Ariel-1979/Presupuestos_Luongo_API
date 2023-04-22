import { Router } from 'express';
import controllers from './users.controllers.js';

const router = Router();

router.get('/usuarios', controllers.getAllUsers);
router.post('/login', controllers.login);
router.post('/registro');

export default router;
