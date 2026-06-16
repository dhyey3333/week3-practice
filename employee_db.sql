CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100),

    department VARCHAR(100),

    status VARCHAR(50)

);

INSERT INTO employees
(name, department, status)

VALUES

('John Smith', 'Development', 'Active'),

('Sarah Johnson', 'HR', 'Active'),

('Marcus Lee', 'Sales', 'Leave');