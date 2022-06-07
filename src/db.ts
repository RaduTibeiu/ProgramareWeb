import mysql from 'mysql';
import * as env from './env';
import { UserDB } from './user/types';
import { ColumnValue } from './types';
export type TableRow = Record<string, number | string>;

export const pool = mysql.createPool({
  connectionLimit: 5,
  host: env.MYSQLDB_HOST,
  port: env.MYSQLDB_PORT,
  user: env.MYSQLDB_USERNAME,
  password: env.MYSQLDB_USER_PASSWORD,
  database: env.MYSQLDB_DATABASE,
  multipleStatements: true,
});

// select / insert / delete
export const queryAddUser = async (TABLE_NAME: string, body: any) => {
  const response = await query(`INSERT INTO ${TABLE_NAME} SET ?`, body);
  return response;
};
export const queryGetAllUsers = async (
  TABLE_NAME: string
): Promise<TableRow[]> => {
  const response = await query(`SELECT * FROM ${TABLE_NAME}`);
  return response;
};

export const queryDeleteUser = async (TABLE_NAME: string, userId: number) => {
  const response = await query(
    `DELETE FROM ${TABLE_NAME} WHERE UserId = ?`,
    userId
  );
  return response.affectedRows;
};

export const queryUpdateBalance = async (
  TABLE_NAME: string,
  balance: number,
  id: number
) => {
  const response = await query(
    `UPDATE ${TABLE_NAME} SET balance = ? WHERE userId = ? `,
    [balance, id]
  );
  return parseInt(response.affectedRows);
};

export const findUser = async (mail: string, TABLE_NAME: string) => {
  const response = await query(
    `SELECT * FROM ${TABLE_NAME} WHERE ${mail} = ? `,
    mail
  );
  return response;
};

export const findWhere = async (
  tableName: String,
  filter: ColumnValue
): Promise<TableRow[]> => {
  const response = await query(
    `SELECT * FROM ${tableName} WHERE ?? = ? ORDER BY CreationDate DESC `,
    [filter.column, filter.value]
  );
  return response;
};

export const query = (sqlQuery: string, values?: Array<any> | Object) => {
  return new Promise<any>((resolve, reject) => {
    pool.query(sqlQuery, values, (error, results) => {
      if (error) {
        console.log(error);

        reject(error);
      }
      resolve(results);
    });
  });
};
