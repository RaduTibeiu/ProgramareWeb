import { Request, Response } from 'express';
import { queryUpdate } from '../db';
const TABLE_NAME = 'user';
export const updateBankBalance = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  const body = req.body;
  const affectedRows = await queryUpdate(TABLE_NAME, body, id);

  if (affectedRows != 1)
    return res
      .status(500)
      .send({ message: `Multiple Rows Affected ${affectedRows}` });

  return affectedRows;
};
