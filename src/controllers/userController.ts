import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import { createUser, deleteUser, findById, getAll, updateUserById } from '../features/index';
import { login, verifyToken } from '../features/auth/index';

class UserController implements Controller {
    public path = '/user';
    public router = express.Router();

    constructor() {
      this.initializeRoutes();
    }

    public initializeRoutes() {
      this.router.get(this.path, verifyToken, getAll)
      this.router.get(`${this.path}/:id`, findById);
      this.router.put(`${this.path}/:id`, updateUserById);
      this.router.delete(`${this.path}/:id`, deleteUser);
      this.router.post(`${this.path}/login`, login);
      this.router.post(`${this.path}/create`, createUser);
    }
  }

export default UserController;