import express from 'express';
import { updateBankBalance } from '../bank/controller';
import {
  getAllUsers,
  insertUser,
  deleteUser,
  authentificateUser,
} from './controller';
import {
  passwordMatch,
  validateMailExistance,
  validateUserBody,
} from './validators';

const router = express.Router();

router.get('/user', getAllUsers);

router.post('/userInsert', validateMailExistance, validateUserBody, insertUser);

router.delete('/userDelete/:userId', deleteUser);

router.post('/auth', validateMailExistance, passwordMatch, authentificateUser);

router.post('/muie', updateBankBalance);
export default router;
