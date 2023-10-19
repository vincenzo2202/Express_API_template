import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controllers/userControllers";

const usersRouter = Router();

usersRouter.get("/users",getUser );

usersRouter.put("/users",createUser );

usersRouter.post("/users", updateUser);

usersRouter.delete("/users", deleteUser);

export {usersRouter}
