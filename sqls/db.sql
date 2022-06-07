create table `user`(
`UserId`  int unsigned NOT NULL AUTO_INCREMENT,
`Name` varchar(255) NOT NULL,
`Surname`varchar(255) NOT NULL,
`NickName`varchar(255) NOT NULL,
`Balance` int unsigned DEFAULT 0,
`Age` int unsigned NOT NULL,
`Mail`varchar(255),
`CreationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`Gamesplayed` int unsigned,
`Wins` int unsigned DEFAULT 0,
`Losses` int unsigned DEFAULT 0,
`MoneyWon` int unsigned DEFAULT 0,
`Password` varchar(255) NOT NULL,
PRIMARY KEY (`UserId`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb3;

create table `room`(
`CurrentWin` int unsigned DEFAULT 0,
`LastTurnWin` int unsigned DEFAULT 0,
`TurnsPlayed` int unsigned DEFAULT 0
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb3;