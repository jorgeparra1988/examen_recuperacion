DROP DATABASE IF EXISTS gorras_database;

CREATE DATABASE gorras_database;

USE gorras_database;

CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE gorras(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    user_id INT UNSIGNED,
    created_at TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

