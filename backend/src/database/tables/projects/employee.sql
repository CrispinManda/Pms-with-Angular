CREATE TABLE Projects (
    projectID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    projectName VARCHAR(250),
    projectDescription VARCHAR(500),
    endDate DATE,
    assignedUserID UNIQUEIDENTIFIER, -- foreign key referencing Employees table
    createdDateTime DATETIME DEFAULT GETDATE(),
    isCompleted BIT DEFAULT 0,
    projectStatus VARCHAR(250) DEFAULT 'pending',

    -- Foreign key reference to Employees table
    CONSTRAINT FK_AssignedUser FOREIGN KEY (assignedUserID) REFERENCES Employees(employee_id)
);





