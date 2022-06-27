import { Request, Response } from 'express';
import {
  queryGetAllUsers,
  queryAddUser,
  queryDeleteUser,
  findUser,
  updateById,
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
  const resp = await queryAddUser(TABLE_NAME, body);
  res.status(201).json(resp.insertId);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);

  const resp = await queryDeleteUser(TABLE_NAME, id);

  if (resp != 1) {
    return res
      .status(500)
      .send({ message: `Number of rows affected: ${resp}` });
  }
  res.status(200).send({ message: `Deleted Succesfully` });
};

export const updateUser = async (req: Request, res: Response) => {
  const body = req.body;
  const id = parseInt(req.params.userId);

  const affectedRows = await updateById(
    'user',
    {
      column: `UserId`,
      value: id,
    },
    body
  );
  if (affectedRows != 1) {
    return res
      .status(500)
      .send({ message: `Multiple Rows Affected ${affectedRows}` });
  }

  return res.status(200).send({ message: `id : ${id} updated succesfully ` });
};

export const authentificateUser = async (req: Request, res: Response) => {
  const mail = req.body.Mail;
  const resp = await findUser(mail, 'user');

  return res.status(200).json(resp[0]);
};
