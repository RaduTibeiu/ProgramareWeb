import express from 'express';
import {
  getAllUsers,
  insertUser,
  deleteUser,
  authentificateUser,
} from './controller';
import { validateMailExistance, validateUserBody } from './validators';

const router = express.Router();

router.get('/user', getAllUsers);

router.post('/userInsert', validateMailExistance, validateUserBody, insertUser);

router.delete('/userDelete/:userId', deleteUser);

router.post('/auth', authentificateUser);
export default router;
