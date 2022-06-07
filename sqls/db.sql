create table `user`(
`UserId`  int unsigned NOT NULL AUTO_INCREMENT,
`Name` varchar(255) NOT NULL,
`Surname`varchar(255) NOT NULL,
`NickName`varchar(255) NOT NULL,
`Balance` int unsigned DEFAULT 1000,
`Age` int unsigned NOT NULL,
`Mail`varchar(255),
`CreationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`Gamesplayed` int unsigned DEFAULT 0,
`Wins` int unsigned DEFAULT 0,
`Losses` int unsigned DEFAULT 0,
`MoneyWon` int unsigned DEFAULT 0,
`Password` varchar(255) NOT NULL,
PRIMARY KEY (`UserId`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb3;