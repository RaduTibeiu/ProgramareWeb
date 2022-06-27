import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';
import Joi from 'joi';
import { nextTick } from 'process';
import { findById, findUser } from '../db';
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

export const checkMailInUse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const checkMail = await findUser(body.Mail, 'user');
  if (checkMail[0] != undefined) {
    return res.status(404).send({ message: 'Mail already in use !!!' });
  }
  return next();
};

export const authCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mail = req.body.Mail;
  const password = req.body.Password;
  const response = await findUser(mail, 'user');

  if (response[0] == undefined) {
    res.status(404).send({ message: 'Mail does not exist' });
  }
  if (response[0].Password != password) {
    return res.status(404).send({ message: 'Credential Does not match' });
  }
  return next();
};

export const validateId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.params.userId) {
    return res.status(400).send({ message: 'Id is mandatory' });
  }
  const id = parseInt(req.params.userId);

  if (isNaN(id)) {
    return res.status(400).send({ message: 'Id must be numeric' });
  }
  const userId = await findById('user', id);
  if (!userId) {
    return res
      .status(404)
      .send({ message: `Cannot find user with id : ${id}` });
  }
  next();
};
