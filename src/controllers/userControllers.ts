import { Request, Response } from "express";

const getUser = (req: Request, res: Response) => {
    res.send("GET USER")
};

const createUser = (req: Request, res: Response) => {
    res.send("CREATE USER")
}
const updateUser = (req: Request, res: Response) => {
    res.send("UPDATE USER")
}
const deleteUser = (req: Request, res: Response) => {
    res.send("DELETE USER")
}

export {getUser, createUser, updateUser, deleteUser} ;