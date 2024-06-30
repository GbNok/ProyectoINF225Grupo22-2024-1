import UserController from './UserController.js';
import RequestController from './ReqController.js';
import QuotController from './QuotController.js';


export default (app) => {
	const userController = new UserController();
	const reqController = new RequestController();
	const quotController = new QuotController();

	app.get('/users', userController.getAll);
	app.post('/users', userController.create);
	// app.get('/users', userController.getEjecutivos);
	app.get('/users/:userId', userController.get);
	app.put('/users/:userId', userController.update);
	app.delete('/users/:userId', userController.delete);
	app.get('/users', userController.randomExecutive);
	
	app.get('/analista', reqController.getAll);
	app.post('/analista', reqController.create);
	app.get('/analista/:requestId', reqController.get);
	app.put('/analista/:requestId', reqController.update);
	app.delete('/analista/:requestId', reqController.delete);

	app.get('/solicitante', userController.randomExecutive);

	app.get('/quote', quotController.getAll);
	app.post('/quote', quotController.create);
	app.delete('/quote/:quoteId', quotController.delete);

	// app.get('/ejecutivo/:requestId', reqController.getByEx);

};