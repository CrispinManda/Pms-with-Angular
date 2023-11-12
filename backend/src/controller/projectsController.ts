import express, { Request, Response } from 'express';
import mssql from 'mssql';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import { sqlConfig } from '../config/sqlConfig';

// Admin assigns projects
export const assignProject = async (req: Request, res: Response) => {
  const { projectName, projectDescription, endDate, assignedUserID, projectStatus } = req.body;

  try {
    const projectID = uuidv4();

    const pool = await mssql.connect(sqlConfig);

    const projectDetails = await pool
      .request()
      .input('projectID', mssql.UniqueIdentifier, projectID)
      .input('projectName', mssql.VarChar(250), projectName)
      .input('projectDescription', mssql.VarChar(500), projectDescription)
      .input('endDate', mssql.Date, endDate)
      .input('assignedUserID', mssql.UniqueIdentifier, assignedUserID)
      .input('projectStatus', mssql.VarChar(250), projectStatus)
      .execute('InsertProject');

    const assignmentResult = projectDetails.recordset[0].AssignmentResult;

    if (assignmentResult === -1) {
      return res.status(400).json({ error: 'User is unavailable' });
    } else if (assignmentResult === -2) {
      return res.status(400).json({ error: 'User does not exist' });
    } else if (assignmentResult === -3) {
      return res.status(400).json({ error: 'Project name is required' });
    } else if (assignmentResult === -4) {
      return res.status(400).json({ error: 'User ID is required' });
    } else if (assignmentResult === -5) {
      return res.status(400).json({ error: 'Invalid project status' });
    } else if (assignmentResult !== 1) {
      return res.status(500).json({ error: 'Unexpected error during project assignment' });
    }

    const assignedProjectID = projectDetails.recordset[0].AssignedProjectID;

    // Log success or any other relevant information
    console.log(`Project assigned successfully. Assigned Project ID: ${assignedProjectID}`);

    return res.status(200).json({
      message: 'Project assigned successfully',
      assignedProjectID,
    });
  } catch (error) {
    console.error('Error assigning project:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
