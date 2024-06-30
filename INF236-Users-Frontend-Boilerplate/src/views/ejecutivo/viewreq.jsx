import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { getRequest } from "../../repositories/request";
import { useParams, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Ufvalue from "../../components/Ufvalue";
import Header from "../../components/AnalistHeader";
import icono from "../../images/logo.png"


export default function ViewReq() {
	const { id } = useParams();

	const { data, error } = useSWR(id, {
		fetcher: getRequest,
		initialData: [],
		revalidateOnMount: true,
	});

	const [ufvalue, setUfValue] = useState('');

	const time = data.createdAt;
	const fecha = new Date(time);
	const fecha_fixed = fecha.toLocaleDateString();

	const tasa = data.tasa / 100;
	const credito = data.valor_credito;
	const plazo = data.plazo;

	const cuota = credito / ((1 - (1 + tasa) ** -plazo) / tasa);
	const cuota_fixed = cuota.toFixed(2);

	const totaluf = cuota * plazo;
	const totaluf_fixed = totaluf.toFixed(2);

	useEffect(() => {
		const fetchedUfValue = localStorage.getItem('ufvalue');
		setUfValue(Number.isNaN(parseFloat(fetchedUfValue)) ? 1 : parseFloat(fetchedUfValue));
	}, []);

	const totalclp = (totaluf_fixed * ufvalue) * 1000;

	return (
		<div>
			<img src={icono}></img>
			<a style={{ fontSize: '30px', fontStyle: 'italic', fontFamily: 'Calibri', color: '#4d4d4d', fontWeight: 'bold'}}> Financiera La Clave </a>
			<div className="container" style={{ background: 'linear-gradient(to top, #5a8b39, #95bf78)', border: '2px solid #000000' }}>
				<div className="d-flex align-items-center">
					<h1 className="green-text" style={{margin:'10px', fontSize:'50px'}}>Detalles</h1>
				</div>
				<table className="table" style={{ borderCollapse: 'collapse', marginTop: '10px', width: '100%' }}>
					<tbody >
						<tr >
							<th style={{fontSize:'25px', fontStyle:'italic'}}>Nombre: {data.nombre}</th>
						</tr>
						<tr>
							<th style={{fontSize:'25px', fontStyle:'italic'}}>RUT: {data.rut}</th>
						</tr>
						<tr >
							<th style={{fontSize:'25px', fontStyle:'italic'}}>Fecha: {fecha_fixed}</th>
						</tr>
						<tr >
							<th style={{fontSize:'25px', fontStyle:'italic'}}>Estado: {data.estado ? 'Derivada' : 'Pendiente'} </th>
						</tr>
						<tr>
							<th style={{fontSize:'25px', fontStyle:'italic'}} >Valor Credito: {data.valor_credito} UF</th>
						</tr>
					</tbody>
				</table>

				<Table striped bordered hover style={{ boxShadow: '-3px 3px 8px rgba(0, 0, 0, 0.5)', background: 'linear-gradient(to top, #5a8b39, #95bf78)' }}>
					<tbody>
						<tr>
							<th style={{fontSize:'20px', color:'white'}}>Tasa %</th>
							<td style={{fontSize:'20px', color:'white'}}>{data.tasa}</td>
						</tr>
						<tr>
							<th style={{fontSize:'20px', color:'white'}}>Valor UF</th>
							<td style={{fontSize:'20px', color:'white'}}>{ufvalue}</td>
						</tr>
						<tr>
							<th style={{fontSize:'20px', color:'white'}}>Plazo Meses</th>
							<td style={{fontSize:'20px', color:'white'}}>{data.plazo}</td>
						</tr>
						<tr>
							<th style={{fontSize:'20px', color:'white'}}>Cuota UF</th>
							<td style={{fontSize:'20px', color:'white'}}>{cuota_fixed}</td>
						</tr>
						<tr>
							<th style={{fontSize:'20px', color:'white'}}>Total UF</th>
							<td style={{fontSize:'20px', color:'white'}}>{totaluf_fixed}</td>
						</tr>
						<tr>
							<th style={{fontSize:'20px', color:'white'}}>Total $</th>
							<td className="green-text" style={{fontSize:'20px', color:'white'}}>{totalclp}</td>
						</tr>
					</tbody>
				</Table>

			</div>

			<div className="Back-button d-flex justify-content-end" style={{ marginTop: '-28rem', marginRight:'10rem' }}>
  				<button className="Back" style={{fontSize: '18px', border: '2px solid #000000', backgroundColor:'#548235', width:'120px', height:'100px'}}>
    				<Link to="/ejecutivo/index" className="green-link" style={{ textDecoration: 'none', color: 'white' }}> Volver </Link>
  				</button>
			</div>

		</div>
	);
}
