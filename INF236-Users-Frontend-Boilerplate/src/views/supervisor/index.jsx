import React from "react";
import useSWR from "swr";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import DeleteForm from "../../components/DeleteForm";
import { deleteRequest, getAllRequests } from "../../repositories/request";
import AcceptReq from "../../components/AcceptReqS";
import RejectReq from "../../components/RejectReqS";
import DerivateReq from "../../components/DerivateReq";
import Header from "../../components/SupervisorHeader";

export default function index() {
	const { data, error } = useSWR("/requests/all", {
		fetcher: getAllRequests,
		initialData: [],
		revalidateOnMount: true,
	});

	const tbody = [];

	data.forEach(({ nombre, estado, id, rut, createdAt, valor_credito}) => {
		const formattedDate = new Date(createdAt).toLocaleDateString();

		if (estado) {
			tbody.push(
				<tr>
					<td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{nombre}</td>
					<td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{formattedDate}</td>
					<td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{rut}</td>
					<td style={{ display: 'flex' }}>
						<Link to={`${id}/viewreqs`} className="btn btn-success" style={{ border: '1px solid #000000', backgroundColor: '#70ad47', fontSize: '22px', fontFamily: 'Calibri', marginRight: '10px' }}>
								Detalles
						</Link>
						<AcceptReq requestId={id} />
						<RejectReq requestId={id}/> 
					</td>
				</tr>
			);
		}
	});

	return (
	<div>
		<Header/>
		<Container className="pt-4">
			<div className="d-flex align-items-center">
				<h1>Listado de Solicitudes Pendientes</h1>
			</div>

			<Table striped bordered hover style={{ margin: '10px' }}>
				<thead style={{ backgroundColor: "#70ad47" }}>
					<tr>
						<th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Nombre</th>
						<th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Fecha</th>
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

