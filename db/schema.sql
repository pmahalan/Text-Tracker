DROP DATABASE IF EXISTS people_db;

CREATE DATABASE people_db;
USE people_db;
CREATE TABLE people (
    
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date_texted DATETIME NOT NULL,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    cell BIGINT,
    email VARCHAR(60),
    role VARCHAR(60),
    keyword VARCHAR(80),
    
);


CREATE TABLE events (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date_event DATETIME NOT NULL,
    title VARCHAR (100),
    location VARCHAR (60),
    host VARCHAR(60),
    keyword VARCHAR(80) NOT NULL
);