import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
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
  if (checkMail[0] == undefined) {
    res.status(404).send({ message: 'Mail does not exist' });
  }
  return next();
};

export const passwordMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mail = req.body.Mail;
  const password = req.body.Password;
  const response = await findUser(mail, 'user');
  if (response[0].Password != password) {
    return res.status(404).send({ message: 'Credential Does not match' });
  }
  return next();
};
