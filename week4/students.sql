{\rtf1\ansi\ansicpg949\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset129 AppleSDGothicNeo-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 create table `students`( \
	`name` varchar(20) not null, \
	`id` int(3) not null auto_increment, \
	`addmission_year` int(4) not null, \
	`major` int(3) not null, \
	`phone_num` varchar(13) not null, \
	`address` varchar(100) not null, \
	`credits_completed` int(3) default 0, \
	`GPA` double(1,1) not null default 0.0, \
	`is_attending` tinyint(1) default 1, \
	primary key (`
\f1 id
\f0 `),\
	foreign key (`major`)\
	references `departments`(`id`)\
)engine=InnoDB default charset=utf8;\
\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 create table `users`( \
	`id` varchar(20) not null , \
	`addmission_year` int(4) not null, \
	`major` int(3) not null, \
	`phone_num` varchar(13) not null, \
	`address` varchar(100) not null, \
	`credits_completed` int(3) default 0, \
	`GPA` double(1,1) not null default 0.0, \
	`is_attending` tinyint(1) default 1, \
	primary key (`
\f1 id
\f0 `),\
	foreign key (`major`)\
	references `departments`(`id`)\
)engine=InnoDB default charset=utf8;}