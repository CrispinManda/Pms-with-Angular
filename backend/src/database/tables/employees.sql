CREATE TABLE Employees (
    employee_id VARCHAR(100) NOT NULL ,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    // phone_no VARCHAR(20) NOT NULL UNIQUE,
    // id_no INT NOT NULL UNIQUE,
    // KRA_PIN VARCHAR(12) NOT NULL UNIQUE,
    // NHIF_NO VARCHAR(15) NOT NULL UNIQUE,
    // NSSF_NO VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(20) Default 'employee',
    welcomed BIT Default 0
)

-- DROP TABLE Employees

-- SELECT * FROM Employees

SELECT * FROM EMPLOYEES WHERE EMAIL ='dankinyi99@gmail.com' 

UPDATE Employees SET role = 'admin' WHERE email = 'crispinmanda06@gmail.com'