import { Request, Response } from 'express';
import { queryUpdate } from '../db';
const TABLE_NAME = 'user';
export const updateBankBalance = async (req: Request, res: Response) => {
  const balance = parseInt(req.params.Balance);
  const id = parseInt(req.params.Id);
  const affectedRows = await queryUpdate(TABLE_NAME, balance, id);

  if (affectedRows != 1)
    return res
      .status(500)
      .send({ message: `Multiple Rows Affected ${affectedRows}` });

  return res.status(200).send({ message: `${affectedRows}` });
};
