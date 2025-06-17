import express from "express";
import { logout, register, signin } from "../controllers/user.controller.js";

const userouter = express.Router();

userouter.post("/register", register);
userouter.post("/signin", signin);
userouter.get("/logout", logout);

export default  userouter;
