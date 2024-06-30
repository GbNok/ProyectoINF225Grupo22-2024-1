import React from 'react'

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import papel from "../../images/papeles.jpg"

import Header from "../../components/SupervisorHeader";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
        <Header />
        <Grid container spacing={5}>
          <Grid item md={11}></Grid>
          <Grid item md={4.8}></Grid>
          <Grid item>
          <Card style={{ border: '3px solid #618847',background: 'linear-gradient(to top, #4d7831, #a7d08b)', boxShadow: '-20px 20px 8px rgba(0, 0, 0, 0.3)' }} sx={{ maxWidth: 345 }}>
                <Typography gutterBottom variant="h4" component="div" style={{textAlign:'center', margin:'10px'}}>
                    Ver solicitudes pendientes
                </Typography>
            <CardActionArea>
                <CardMedia
                component="div"
                style={{ width:"800px", height: "10px", overflow: "hidden" }}
                />
                <img src={papel}
                alt =" imagen de papeles"
                style={{margin:"16px", width:"90%", height:"100%", objectFit:"cover"}}
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="view-request" size="small" color="primary" style={{marginLeft:'75px',fontSize:'16px',border:'2px solid #000000'}}>
                <Link to="/supervisor/index" style={{textDecoration: 'none', color: 'black', fontWeight:'bold' }}> ver solicitudes</Link>
                </Button>
            </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={11}></Grid>
          <Grid item md={4.8}></Grid>
          <Grid item>
          <Card style={{ border: '3px solid #618847',background: 'linear-gradient(to top, #4d7831, #a7d08b)', boxShadow: '-20px 20px 8px rgba(0, 0, 0, 0.3)' }} sx={{ maxWidth: 345 }}>
                <Typography gutterBottom variant="h4" component="div" style={{textAlign:'center', margin:'10px'}}>
                    Ver Cotizaciones
                </Typography>
            <CardActionArea>
                <CardMedia
                component="div"
                style={{ width:"800px", height: "10px", overflow: "hidden" }}
                />
                <img src={papel}
                alt =" imagen de papeles"
                style={{margin:"16px", width:"90%", height:"100%", objectFit:"cover"}}
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="view-request" size="small" color="primary" style={{marginLeft:'75px',fontSize:'16px',border:'2px solid #000000'}}>
                <Link to="/supervisor/viewcot" style={{textDecoration: 'none', color: 'black', fontWeight:'bold' }}> ver cotizaciones</Link>
                </Button>
            </CardActions>
            </Card>
          </Grid>
        </Grid>
    </div>
  );
}


