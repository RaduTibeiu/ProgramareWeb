import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { validateBody } from '../util';

const schema = Joi.object().keys({
  Nickname: Joi.string().required(),
  Name: Joi.string().required(),
  Surname: Joi.string().required(),
  Age: Joi.number().greater(17).required(),
  Mail: Joi.string().email().required(),
  Password: Joi.string().required,
});

export const validateUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return validateBody(req, res, next, schema);
};
