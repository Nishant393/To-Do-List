import express from "express";
import { deleteUser, getAllUser, login, signup, updateUser } from "../controllers/getAllUser";

const userRouter = express.Router()

userRouter.get("/",getAllUser)
userRouter.post("/signup",signup)
userRouter.put("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",login)

export default userRouter