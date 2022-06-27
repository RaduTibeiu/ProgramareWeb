create database proiectpw;
use proiectpw;

create table `user`(
`UserId`  int unsigned NOT NULL AUTO_INCREMENT,
`Name` varchar(255) NOT NULL,
`Surname`varchar(255) NOT NULL,
`NickName`varchar(255) NOT NULL,
`Balance` int unsigned DEFAULT 1000,
`Age` int unsigned NOT NULL,
`Mail`varchar(255),
`CreationDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`Password` varchar(255) NOT NULL,
PRIMARY KEY (`UserId`)
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb3;