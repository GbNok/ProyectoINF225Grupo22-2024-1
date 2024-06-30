import User from "../models/User.js";
import bcrypt from "bcrypt";
import lodash from 'lodash';
import Op from 'sequelize'
import Sequelize from "sequelize";



export default class UserController {
	 async getAll(req, res) {
		const users = await User.findAll();
		res.send(users);
	}

	async getBynombre(req, res) {
		const users = await User.findAll({
			where: {
				nombre: req.params.nombre
			}
		});
		res.send(users);
	}
	
	async randomExecutive(req, res) {
		const users = await User.findAll({
			where: {
				email: { [Sequelize.Op.like]: "%elaclave.cl" }
			}
		});
	
		if (!users.length) {
			return res.status(404).json({ message: 'No executives found' });
		}
	
		const randomIndex = Math.floor(Math.random() * users.length);
		const randomExecutive = users[randomIndex];
		res.send({ executiveId: randomExecutive.id }); 
	}
	
	async login(req, res) {
		try {
		  const { email, password } = req.body;
	  
		  const user = await User.findOne({
			where: {
			  email: email,
			},
		  });
	  
		  if (!user) {
			return res.status(401).json({ error: 'Invalid email or password' });
		  }
	  
		  const passwordMatch = await bcrypt.compare(password, user.password);
	  

		const token = jwt.sign({ userId: user.id , nombre: user.nombre, rut: user.rut }, 3, { expiresIn: '1h' });
		res.json({ success: true, token: token, user: { id: user.id, email: user.email } });

		} catch (error) {
		  console.error('Error during login:', error);
		  res.status(500).json({ error: 'Internal Server Error'});
		}
	  }

	async get(req, res) {
		const user = await User.findByPk(req.params.userId);
		res.send(user);
	}

	async create(req, res) {
		const user = await User.create({
			nombre: req.body.nombre,
			email: req.body.email,
			password: req.body.password,
			rut: req.body.rut,
			user_type: req.body.usertype,
		});
		res.send(user);
	}

	async update(req, res) {
		const user = await User.findByPk(req.params.userId);
		user.update({nombre: req.body.nombre, email: req.body.email, password: req.body.password, rut: req.body.rut, user_type: req.body.user_type });
		res.send(user);
	}

	async delete(req, res) {
		await User.destroy({where: {id: req.params.userId}});
		res.send({status: "ok"});
	}

	
};


