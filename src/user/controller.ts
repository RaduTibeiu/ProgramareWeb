import { Request, Response } from 'express';
import { queryGetAllUsers, queryAddUser, queryDeleteUser } from '../db';
import { convertTypeToUser } from './convertor';
const TABLE_NAME = 'user';
export const getAllUsers = async (req: Request, res: Response) => {
  const results = await queryGetAllUsers(TABLE_NAME);

  if (!results) res.status(500).send({ message: 'error' });

  const array = results.map((value: any) => {
    return convertTypeToUser(value);
  });
  res.status(200).send(array);
};

export const insertUser = async (req: Request, res: Response) => {
  const body = req.body;
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
