DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(

id INTEGER(10) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30),
devoured BOOLEAN,
PRIMARY KEY(id)
);


