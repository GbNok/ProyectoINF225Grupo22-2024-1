import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import fondo from "./images/background.jpg"
import icono from "./images/logo.png"


import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rut, setRut] = useState('');
  const [user_type, setUser] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    try {

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        nombre,
        rut,
        email,
        password,
        // user_type,
      });

      console.log("Registro: ", response.data);

      history.push('/lgin');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img src={icono} style={{
        position: 'absolute',
        top: 10,
        right: 10,
        width: '200px',
      }}></img>
      <Grid container spacing={5}>
        <Grid item md={11}></Grid>
        <Grid item md={5}></Grid>
        <Grid item>
          <Card style={{
            width: 320,
            background: 'linear-gradient(to top, #4c7631, #a7d08b)',
            padding: '10px',
            border: '1px solid #548235'}}>
          <Card style={{ 
          width: 300 , 
          background: 'linear-gradient(to top, #c6c6c6, #e9e9e9)', 
          border:'2px solid #000000' }}>
            <CardActionArea>
              <CardContent>
                <Grid container direction="column" spacing={2} alignItems="center">
                  <Grid item>
                  <Typography gutterBottom variant="h4" component="div" >
            <h2>Register</h2>
            </Typography>
            <Typography gutterBottom variant="h4" component="div" style={{ fontSize:' 30px',textAlign: 'left' }}>
              Nombre:
              </Typography>
              <Grid item>
            <label>
              <input type="" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{fontSize: '22px', border: '2px solid #000000'}} />
            </label>
            </Grid>
            <Typography gutterBottom variant="h4" component="div" style={{ fontSize:' 30px',textAlign: 'left' }}>
              Rut:
            </Typography>
            <label>
              <input type="" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)} style={{fontSize: '22px', border: '2px solid #000000'}} />
            </label>
            <Typography gutterBottom variant="h4" component="div" style={{ fontSize:' 30px',textAlign: 'left' }}>
              Email:
            </Typography>
            <label>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{fontSize: '22px', border: '2px solid #000000'}} />
            </label>
            <br />
            <Typography gutterBottom  variant="h4" component="div" style={{ fontSize:' 30px',textAlign: 'left' }}>
              Password:
            </Typography>
            <label>
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize: '22px', border: '2px solid #000000'}}/>
            </label>
            </Grid>
            </Grid>
            </CardContent>
            </CardActionArea>
            <br />
            <button onClick={handleRegister}  className='btn btn-success' style={{marginLeft: '100px', marginBottom:'10px', fontSize: '18px' , border: '2px solid #2b4719'}}>Register</button>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;