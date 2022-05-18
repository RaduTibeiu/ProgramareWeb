import { findWhere } from '../db';

const USERS_TABLE_NAME = 'user';

export const findUserByUsername = async (username: string) => {
  const resp = await findWhere(USERS_TABLE_NAME, {
    column: 'User',
    value: username,
  });

  return resp.length > 0 ? resp[0] : undefined;
};
