DROP DATABASE IF EXISTS people_db;

CREATE DATABASE people_db;
USE people_db;
CREATE TABLE users (
    
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 	createdAt TIMESTAMP not null DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    cell BIGINT,
    email VARCHAR(60),
    role VARCHAR(60)
    );


CREATE TABLE events (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 	createdAt TIMESTAMP not null DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    title VARCHAR (100),
    location VARCHAR (60),
    host VARCHAR(60),
    keyword VARCHAR(80) NOT NULL
);

CREATE TABLE keywords (
keywordTwo VARCHAR(100)
cell BIGINT
);