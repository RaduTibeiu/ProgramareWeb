export type UserDB = {
  UserId: number;
  NickName: string;
  Surname: string;
  FirstName: string;
  Balance: number;
  Age: number;
  Mail: string;
  CreationDate: string;
  GamesPlayed: number;
  Wins: number;
  Losses: number;
  MoneyWon: number;
  Password: string;
};

export type User = {
  id: number;
  nickname: string;
  surname: string;
  firstname: string;
  balance: number;
  age: number;
  mail: string;
  creationdate: string;
  gamesplayed: number;
  wins: number;
  losses: number;
  moneywon: number;
  password: string;
};
