import express from 'express';
import { getAllUsers, insertUser, deleteUser, test } from './controller';
import { validateUserBody } from './validators';

const router = express.Router();

router.get('/user', getAllUsers);

router.post('/userInsert', validateUserBody, insertUser);

router.delete('/userDelete/:userId', deleteUser);
export default router;

router.get('/test', test);
