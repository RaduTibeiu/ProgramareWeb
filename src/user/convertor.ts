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
    GamesPlayed: row.gamesplayed,
    Wins: row.wins,
    Losses: row.losses,
    MoneyWon: row.moneywon,
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
    gamesplayed: row.GamesPlayed,
    wins: row.Wins,
    losses: row.Losses,
    moneywon: row.MoneyWon,
  };
};
