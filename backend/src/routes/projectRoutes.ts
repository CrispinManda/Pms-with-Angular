import Router from "express";
import { addNewProject, deleteProject, 
    assignNewProject, 
    getallProjects, 
    getProject, 
    completeProjects, 


} from "../controller/projectControllers";



const project_router = Router()

project_router.post("/newproject", addNewProject);
project_router.post("/assignnewproject", assignNewProject);
project_router.get("/deleteProject/:project_id", deleteProject);
project_router.get("/projects", getallProjects);
project_router.get("/project/:email", getProject);
project_router.get("/complete/:project_id", completeProjects);



export default project_router