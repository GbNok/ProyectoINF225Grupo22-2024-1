import React from "react";
import useSWR from "swr";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import DeleteForm from "../../components/DeleteForm";
import { deleteRequest, getAllRequests, getAllRequestsEx } from "../../repositories/request";
import AcceptReq from "../../components/AcceptReq";
import RejectReq from "../../components/RejectReq";
import DerivateReq from "../../components/DerivateReq";
import Header from "../../components/EjecutivoHeader";
import jwt, { decode } from 'jsonwebtoken'

import Grid from '@mui/material/Grid'; // Grid version 1



// PEDIR LA ID DEL USUARIO PARA QUE SOLO ARROJE LAS QUE EL EJECUTIVO CREO
export default function index() {

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
	const query = getAllRequestsEx(parseInt(userId));
	
	// async function fetchData() {
	// 	try {
	// 	  const result = await query
	// 	  ;
	// 	  console.log(result);
	// 	  const data = result; // Aquí puedes acceder a los datos devueltos
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	//   }
	  
	//   fetchData();
	  
	const { data, error } = useSWR("/requests/all", {
		fetcher: getAllRequests,
		initialData: [],
		revalidateOnMount: true,
	});

	const tbody = [];


	console.log("ERROR!:", tbody)
	
	data.forEach(({ nombre, estado, id, rut, valor_credito, id_ejecutivo }) => {
		if (id_ejecutivo === userId) {

		tbody.push(
			<tr>
				<td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{nombre}</td>
				<td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{rut}</td>
				<td style={{ display: 'flex' }}>
					<Link to={`${id}/viewreq`} className="btn btn-success" style={{ border: '1px solid #000000', backgroundColor: '#70ad47', fontSize: '22px', fontFamily: 'Calibri', marginRight: '10px' }}>
						Detalles
					</Link>
					<AcceptReq requestId={id} />
					<RejectReq requestId={id} />
					<DerivateReq requestId={id} />
				</td>
			</tr>
		);
		}
	});

	return (
		<div>
			<Header />
			<Container className="pt-4">
				<div className="d-flex align-items-center">
					<h1>Listado de Solicitudes Pendientes</h1>
				</div>

				<Table striped bordered hover style={{ margin: '10px' }}>
					<thead style={{ backgroundColor: "#70ad47" }}>
						<tr>
							<th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Nombre</th>
							<th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Rut</th>
							<th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Acciones</th>
						</tr>
					</thead>
					<tbody>{tbody}</tbody>
				</Table>
			</Container>
		</div>
	);
}

