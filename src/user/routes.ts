import express from 'express';
import { updateBankBalance } from '../bank/controller';
import {
  getAllUsers,
  insertUser,
  deleteUser,
  authentificateUser,
  updateUser,
} from './controller';
import {
  authCredentials,
  checkMailInUse,
  validateId,
  validateUserBody,
} from './validators';

const router = express.Router();

//auth
router.post('/auth', authCredentials, authentificateUser);

//get all users
router.get('/user', getAllUsers);

//add new user
router.post('/user', checkMailInUse, validateUserBody, insertUser);

//update user

router.put('/user/:userId', validateId, updateUser);
//delete
router.delete('/user/:userId', deleteUser);

export default router;
