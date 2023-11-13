import express, { NextFunction, Request, Response, json } from 'express'
import cors from 'cors'
import employee_router from './routes/employeeRoutes'
import project_router from './routes/projectRoutes'
import dotenv from 'dotenv'

const app = express()

app.use(cors())
app.use(json())

app.use('/employee', employee_router)
app.use('/project',project_router)

app.use((error: Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: error.message
    })
})

app.listen(4400, ()=>{
    console.log("Server running on port 4400");
})