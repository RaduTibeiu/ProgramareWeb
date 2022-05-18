import { Request, Response, NextFunction } from 'express';

import { UserCredentials } from './types';
import { findUserByUsername } from './user-db';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const credential: UserCredentials = req.body;

  const user = await findUserByUsername(credential.username);
  if (!user) {
    return res.boom.badRequest(`No user with username: ${credential.username}`);
  }
  const isMatch = verifyPassword(credential.password, user.Password as string);
  if (!isMatch) {
    return res.boom.badRequest('Wrong password provided');
  }
  return res.status(200);
};

const verifyPassword = (
  passwordInClear: string,
  userPasswordInDatabase: string
) => {
  return false;
};
