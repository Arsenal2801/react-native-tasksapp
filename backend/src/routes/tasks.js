import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskCount,
  getTasks,
  updateTask,
} from "../controllers";

const taskRouter = Router();

/**
 * @swagger
 * /tasks:
 * get:
 *  summary: Get all tasks
 *
 */
taskRouter.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 * get:
 *  summary: Get the number of tasks
 */
taskRouter.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks/{id}:
 * get:
 *  summary: Get a task by id
 *
 */
taskRouter.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 * post:
 *  summary: Create a new task
 *
 */
taskRouter.post("/tasks", createTask);

/**
 * @swagger
 * /tasks:
 * delete:
 *  summary: Delete a task by id
 *
 */
taskRouter.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks:
 * put:
 *  summary: Update a task by id
 *
 */
taskRouter.put("/tasks/:id", updateTask);

export default taskRouter;
