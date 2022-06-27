import { UserDB, User } from './types';
export const convertTypeToUserDB = (row: any): UserDB => {
  return {
    UserId: row.id,
    NickName: row.nickname,
    Surname: row.surname,
    FirstName: row.firstname,
    Balance: row.balance,
    Age: row.age,
    Mail: row.mail,
    CreationDate: row.creationdate,
    Password: row.password,
  };
};

export const convertTypeToUser = (row: UserDB): User => {
  return {
    id: row.UserId,
    nickname: row.NickName,
    surname: row.Surname,
    firstname: row.FirstName,
    balance: row.Balance,
    age: row.Age,
    mail: row.Mail,
    creationdate: row.CreationDate,
    password: row.Password,
  };
};
