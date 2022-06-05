import express from 'express';
import { updateBankBalance } from './controller';
const router = express.Router();

router.post('/bank', updateBankBalance);

export default router;
