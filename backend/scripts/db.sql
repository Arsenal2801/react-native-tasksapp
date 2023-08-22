CREATE DATABASE IF NOT EXISTS `tasksdb`;
USE `tasksdb`;

CREATE TABLE IF NOT EXISTS tasks (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);



INSERT INTO tasks (title, description) VALUES
    ( "Task 1", "This a testing task" ),
    ( "Task 2", "This is an another testing task");
    
SELECT * FROM tasks;