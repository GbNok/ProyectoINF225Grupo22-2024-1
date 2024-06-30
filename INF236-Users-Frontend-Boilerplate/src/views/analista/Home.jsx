import React from 'react'

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import papel from "../../images/papeles.jpg"
import monedas from "../../images/monedas.jpg"

import Header from "../../components/AnalistHeader";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <Header />
        <Grid container spacing={10}>
        <Grid item md={10}></Grid>
        <Grid item md={3}></Grid>
        <Grid item spacing={4}>
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
                alt = 'iamgen de papeles'
                style={{margin:"16px", width:"90%", height:"100%", objectFit:"cover"}}
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="view-request" size="small" color="primary" style={{marginLeft:'20px',fontSize:'16px',border:'2px solid #000000'}}>
                <Link to="/analista/index" style={{textDecoration: 'none', color: 'black', fontWeight:'bold' }}> Ver solicitudes pendientes</Link>
                </Button>
            </CardActions>
            </Card>
        </Grid>
        <Grid style={{marginTop:'80px', marginLeft:'200px'}}>
            <Card style={{border: '3px solid #618847',background: 'linear-gradient(to top, #4d7831, #a7d08b)',boxShadow: '-20px 20px 8px rgba(0, 0, 0, 0.3)'  }} sx={{ maxWidth: 330 }}>
                <Typography gutterBottom variant="h4" component="div" style={{textAlign:'center', margin:'10px'}}>
                    Ver valor actual del UF
                </Typography>
            <CardActionArea>
                <CardMedia
                component="div"
                style={{ width:"800px", height: "10px", overflow: "hidden" }}
                />
                <img src={monedas}
                alt = 'imagen monedas'
                style={{margin:"16px", width:"90%", height:"100%", objectFit:"cover"}}
                />
                <CardContent>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="view-request" size="small" color="primary" style={{marginLeft:'110px',fontSize:'16px',border:'2px solid #000000'}}>
                <Link to="/analista/ufvalue" style={{textDecoration: 'none', color: 'black', fontWeight:'bold' }}> Valor UF</Link>
                </Button>
            </CardActions>
            </Card>
        </Grid>
        </Grid>
    </div>
  );
}
