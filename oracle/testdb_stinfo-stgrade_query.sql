use testdb;
show tables;

create table st_info(ST_ID int, NAME varchar(20), DEPT varchar(25)) 
default charset=utf8;
show tables;

create table st_grade(ST_ID int, Linux int, DB int);
show tables;

explain st_info;
explain st_grade;

alter table st_info add constraint pk_stinfo primary key (ST_ID);
alter table st_grade add constraint pk_stgrade primary key (ST_ID);

explain st_info;
explain st_grade;

insert into st_info values (202301, "LeeGilDong", "Game");
insert into st_info values (202302, "KimGilDong", "Computer");
insert into st_info values (202303, "HongGilDong", "Game");
select * from st_info;

insert into st_grade values (202301, 80, 70);
insert into st_grade values (202302, 90, 75);
insert into st_grade values (202303, 95, 85);
select * from st_grade;


## testdb_stinfo-stgrade_query.sql
use testdb;

select NAME, DEPT from st_info;
select NAME, DEPT from st_info where ST_ID=202301;

select NAME, DEPT from st_info where DEPT='Game';

select Linux from st_grade where ST_ID=202301;

# NAME Linux DB DEPT => 202301
select st_info.NAME, st_grade.Linux, st_grade.DB, st_info.DEPT
from st_info, st_grade
where st_info.ST_ID=202301 and st_grade.ST_ID=202301;

update st_grade set Linux=90 where ST_ID=202301;

select st_info.NAME, st_grade.Linux, st_grade.DB, st_info.DEPT
from st_info, st_grade
where st_info.ST_ID=202301 and st_grade.ST_ID=202301;
