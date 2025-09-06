import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser, deleteUser } from "./controllers/userController.js";

const routes = Router();

routes.get('/users', getUsers);
routes.get('/users/:id', getUserById);
routes.post('/users', createUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

export default routes;
