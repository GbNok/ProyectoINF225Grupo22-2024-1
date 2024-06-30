import express from 'express';
import cors from 'cors';
import routes from './controllers/routes.js';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pkg from 'pg';
import User from "./models/User.js";

const { Pool } = pkg;


const app = express();
const port = 3001;

const pool = new Pool({
  user: 'kuve',
  host: 'localhost',
  database: 'anal',
  password: 'chipi0765.',
  port: 5432,
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
routes(app);

app.post('/register', async (req, res) => {
  const { nombre, rut, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let user_type = 0;
  
  if(email.includes("@laclave.cl")){
    user_type = 2;
  } else if(email.includes("@slaclave.cl")){
    user_type = 3;
  } else if(email.includes("@elaclave.cl")){
    user_type = 4;
  } else {
    user_type = 1;
  }
  

  try {
    await pool.query('INSERT INTO "Users" (nombre, email ,rut, password, user_type) VALUES ($1, $2, $3, $4, $5)', [nombre, email, rut, hashedPassword, user_type]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/lgin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM "Users" WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user.id, nombre: user.nombre, rut: user.rut }, 'admin123', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;