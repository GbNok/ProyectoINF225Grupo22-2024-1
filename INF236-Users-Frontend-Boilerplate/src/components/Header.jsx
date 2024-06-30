import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux'
import { getUser } from '../repositories/user';
import { useParams , Link } from "react-router-dom";
import useSWR from "swr";
import logo from "../images/logo.png"
import home from "../images/home.png"



export default function Header() {
    // const nombre = useSelector((store => store.username));

    const { id } = useParams();

	const {data, error } = useSWR(id, {
		fetcher: getUser,
		initialData: [],
		revalidateOnMount: true,
	});

    const nombre = useSelector((store) => store.username);

    return (
       <Navbar bg="success" variant="dark" className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="/home">
                <img src={logo}></img>
            <a> Financiera La Clave </a>
            <Link to="/home">
                <img src={home} ></img>
            </Link>
            </Navbar.Brand>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown_header">
                    {nombre}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item href="/users/:id/edit"> Editar Cuenta </Dropdown.Item>
                    <Dropdown.Item href="/"> Cerrar Sesion </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    )
}

