import { query, Request, Response } from 'express';
import { queryUpdateBalance } from '../db';
const TABLE_NAME = 'bank';
export const updateBankBalance = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  const newBalance = parseInt(req.body.balance);
  const affectedRows = await queryUpdateBalance(TABLE_NAME, newBalance, id);

  if (affectedRows != 1)
    return res
      .status(500)
      .send({ message: `Multiple Rows Affected ${affectedRows}` });

  return affectedRows;
};
