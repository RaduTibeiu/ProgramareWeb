import { Request, Response } from 'express';
import {
  queryGetAllUsers,
  queryAddUser,
  queryDeleteUser,
  findUser,
} from '../db';
import { convertTypeToUser, convertTypeToUserDB } from './convertor';
const TABLE_NAME = 'user';
export const getAllUsers = async (req: Request, res: Response) => {
  const results = await queryGetAllUsers(TABLE_NAME);

  if (!results) res.status(500).send({ message: 'Internal Error' });

  const array = results.map((value: any) => {
    return convertTypeToUser(value);
  });
  res.status(200).send(array);
};

export const insertUser = async (req: Request, res: Response) => {
  const body = req.body;

  console.log(body);
  const response = await queryAddUser(TABLE_NAME, body);
  res.status(201).json(response.insertId);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);

  const response = await queryDeleteUser(TABLE_NAME, id);

  if (response != 1) {
    return res
      .status(500)
      .send({ message: `Number of rows affected: ${response}` });
  }
  res.status(200).send({ message: `Deleted Succesfully` });
};

export const authentificateUser = async (req: Request, res: Response) => {
  const mail = req.body.Mail;
  const resp = await findUser(mail, 'user');

  return res.status(200).json(resp[0]);
};
