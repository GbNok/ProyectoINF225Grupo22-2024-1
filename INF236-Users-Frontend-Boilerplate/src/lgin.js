import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';  
// import Grid from '@mui/material/Grid'; // Grid version 1
import fondo from "./images/background.jpg"
import icono from "./images/logo.png"

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/lgin`, {
        email,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token); 
      
      if(email.includes("@gmail.com")){
        history.push('/solicitante/home');
      } else if(email.includes("@laclave.cl")){
        history.push('/analista/home');
      } else if(email.includes("@slaclave.cl")){
        history.push('/supervisor/home');
      } else if(email.includes("@elaclave.cl")){
        history.push('/ejecutivo/home');
      }
      else{
        history.push('/Home');
      }

    } catch (error) {
      console.error(error);
      alert(`Invalid credentials.`);
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
          border: '1px solid #548235'
        }}>
        <Card style={{ 
          width: 300 , 
          background: 'linear-gradient(to top, #c6c6c6, #e9e9e9)', 
          border:'2px solid #000000' }}>
          <CardActionArea>
            <CardContent>
              <Grid container direction="column" spacing={2} alignItems="center">
                <Grid item>
                <Typography gutterBottom variant="h4" component="div" >
                  <h2>Iniciar Sesión</h2>
                  </Typography>
                </Grid>
                  <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'left' }}>
                    Email:
                  </Typography>
                <Grid item>
                  <label>
                    <input type="text" placeholder="Ingresa tu email" value={email} onChange={(e) => setEmail(e.target.value)} style={{fontSize: '22px', border: '2px solid #000000'}} />
                  </label>
                </Grid>
                <Typography gutterBottom variant="h4" component="div" style={{ textAlign: 'left' }}>
                    Contraseña:
                    </Typography>
                <Grid item>
                  <label>
                    <input type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize: '22px', border: '2px solid #000000'}} />
                  </label>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardContent>
          </CardContent>
          <CardContent>
            <button onClick={handleLogin} className='btn btn-success' style={{marginRight: '70px', fontSize: '18px' , border: '2px solid #2b4719'}}>Login</button>
            <button type="submit" className="btn btn-success" style={{fontSize: '18px', border: '2px solid #2b4719'}}>
              <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}> Registrarse </Link>
            </button>
            
          </CardContent>
          </Card>
        </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

