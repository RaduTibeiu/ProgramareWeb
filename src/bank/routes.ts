import express from 'express';
import { updateBankBalance } from './controller';
const router = express.Router();

router.put('/bank/:Id/:Balance', updateBankBalance);

export default router;
