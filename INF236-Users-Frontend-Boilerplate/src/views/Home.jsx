import React from 'react'

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; // Grid version 1
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div>
        <Header />
        <Grid container spacing={10}>
            <Grid item md={11}></Grid>
            <Grid item md={2.5}></Grid>
            <Grid item spacing={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Entrar como Analista
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="view-request" size="small" color="primary">
                        <Link to="/analista/home"> Entrar</Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item spacing={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Entrar como Supervisor
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="view-request" size="small" color="primary">
                        <Link to="/supervisor/home"> Entrar</Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item spacing={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Entrar como Solicitante
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="view-request" size="small" color="primary">
                        <Link to="/solicitante/home"> Entrar</Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>
        )
}