import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";
import useSWR from "swr";
import Header from "../../components/SupervisorHeader";
import { getAllQuotes } from "../../repositories/quotes";

export default function Index() {
    const [searchId, setSearchId] = useState("");
    const [tbody, setTbody] = useState([]);
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    const { data, error } = useSWR("/quotes", {
        fetcher: getAllQuotes,
        initialData: [],
        revalidateOnMount: true,
    });

    useEffect(() => {
        if (data) {
            const newTbody = data.map(({ id, valor_cuota, plazo, total, user_id }) => {
                if (user_id === parseInt(searchId)) {
                    return (
                        <tr key={id}>
                            <td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{valor_cuota}</td>
                            <td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{plazo}</td>
                            <td style={{ fontSize: '25px', fontFamily: 'Calibri' }}>{total}</td>
                        </tr>
                    );
                }
            });
            setTbody(newTbody);
        }
    }, [data, searchId]);

    return (
        <div>
            <Header />
            <Container className="pt-4">
                <div className="d-flex align-items-center">
                    <h1>Lista de Cotizaciones</h1>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                    <button onClick={() => setSearchId(searchId)}>Buscar</button>
                </div>
                <Table striped bordered hover style={{ margin: '10px' }}>
                    <thead style={{ backgroundColor: "#70ad47" }}>
                        <tr>
                            <th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Valor de la cuota</th>
                            <th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Plazo</th>
                            <th style={{ fontSize: '25px', fontFamily: 'Calibri', color: 'white', fontWeight: 'bold' }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>{tbody}</tbody>
                </Table>
            </Container>
        </div>
    );
}

