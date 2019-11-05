import App from './src/app';
import UserController from './src/controllers/userController'

const app = new App([new UserController()]);

app.listen()