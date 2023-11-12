import express from 'express';
import { assignProject,  } from '../controller/projectsController';

const router = express.Router();

// Assign a project to a user
router.post('/assign', assignProject);

// Update a project
//router.put('/:projectID', updateProject);

// Delete a project
//router.delete('/:projectID', deleteProject);

// Add more routes as needed

export default router;
