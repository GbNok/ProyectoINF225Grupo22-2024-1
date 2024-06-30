import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux'
import { getUser } from '../repositories/user';
import { useParams, Link } from "react-router-dom";
import useSWR from "swr";
import logo from "../images/logo.png"
import home from "../images/home.png"

import Grid from '@mui/material/Grid'; // Grid version 1
import jwt, { decode } from 'jsonwebtoken'


export default function Header() {
    const nombre = useSelector((store => store.username));

    const { id } = useParams();

    const { data, error } = useSWR(id, {
        fetcher: getUser,
        initialData: [],
        revalidateOnMount: true,
    });

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/lgin');
    };

    const storedToken = localStorage.getItem('token');
    const [header, payload, signature] = storedToken.split(".");
    const decodedPayload = JSON.parse(atob(payload));
    const userId = decodedPayload.userId;
    const username = decodedPayload.nombre;
    const rut = decodedPayload.rut;

    return (
        <Navbar style={{ background: 'linear-gradient(to top, #5a8b39, #95bf78)', border: '3px solid #548235', fontSize: '18px', padding: '10px', height: '120px' }} variant="dark" className="d-flex justify-content-between align-items-center">
            <Navbar.Brand >
                <img src={logo} alt="logo" style={{ marginRight: '10px' }}></img>
                <a style={{fontSize:'30px', fontStyle:'italic', color:'#4d4d4d', fontWeight:'bold'}}> Financiera La Clave </a>
            </Navbar.Brand>
            <Grid container>
                <Grid item md={4.7}></Grid>
                <Grid item>
                    <Link to="/analista/home">
                        <img width={35} height={35} src={home}></img>
                    </Link>
                </Grid>


            </Grid>


            <Dropdown>
                <Dropdown.Toggle style={{ fontSize: '25px', color: 'black', backgroundColor: '#c5e0b4', border: '2px solid #000000' }} id="dropdown_header">
                    {username}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ fontSize: '25px', color: 'black', backgroundColor: '#c5e0b4', border: '2px solid #000000' }} className="dropdown-menu-right">
                    {/* <Dropdown.Item href="/users/:id/edit"> Editar Cuenta </Dropdown.Item> */}
                    <Dropdown.Item onClick={handleLogout} href="/"> Cerrar Sesion </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    )
}

