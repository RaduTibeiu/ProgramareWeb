import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { nextTick } from 'process';
import { findUser } from '../db';
import { validateBody } from '../util';

const schema = Joi.object().keys({
  Nickname: Joi.string().required(),
  Name: Joi.string().required(),
  Surname: Joi.string().required(),
  Age: Joi.number().greater(17).required(),
  Password: Joi.string().required(),
  Mail: Joi.string().email().required(),
});

export const validateUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return validateBody(req, res, next, schema);
};

export const validateMailExistance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const checkMail = await findUser(body.Mail, 'user');
  if (checkMail != undefined) {
    res.status(400).send({ message: 'Mail does not exist' });
  }
  next;
};
