-- Create a new project
CREATE PROCEDURE InsertProject
    @projectName VARCHAR(250),
    @projectDescription VARCHAR(500),
    @endDate DATE,
    @assignedUserID UNIQUEIDENTIFIER,
    @projectStatus VARCHAR(250) = 'pending'
AS
BEGIN
    INSERT INTO Projects (projectName, projectDescription, endDate, assignedUserID, projectStatus)
    VALUES (@projectName, @projectDescription, @endDate, @assignedUserID, @projectStatus);
END;

-- Update an existing project
CREATE PROCEDURE UpdateProject
    @projectID UNIQUEIDENTIFIER,
    @projectName VARCHAR(250),
    @projectDescription VARCHAR(500),
    @endDate DATE,
    @isCompleted BIT,
    @projectStatus VARCHAR(250)
AS
BEGIN
    UPDATE Projects
    SET projectName = @projectName,
        projectDescription = @projectDescription,
        endDate = @endDate,
        isCompleted = @isCompleted,
        projectStatus = @projectStatus
    WHERE projectID = @projectID;
END;

-- Delete a project
CREATE PROCEDURE DeleteProject
    @projectID UNIQUEIDENTIFIER
AS
BEGIN
    DELETE FROM Projects
    WHERE projectID = @projectID;
END;
