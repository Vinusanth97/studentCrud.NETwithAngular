select name from sys.databases;

alter database newScienceHall set SINGLE_USER WITH rollback immediate;
drop database newScienceHall;
select db_name();
use newScienceHall;
select name from sys.tables;

exec sp_help StudentDetails;
select * from StudentDetails;
insert into StudentDetails values('Vinusanth','Yokanathan','Vinusanth1997@gmail.com','1997-07-25','Battaicaloa','Yokanathan','+94754746464'),('Karan','Mathan','Karan1998@gmail.com','1996-10-20','Jaffna','Mathan','+94768962386');