import express from 'express';
import { login, search } from '../controller/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/search', search);

export default router;