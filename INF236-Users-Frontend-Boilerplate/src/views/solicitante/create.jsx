import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { createRequest } from "../../repositories/request";
import { createQuote } from "../../repositories/quotes";
import Header from "../../components/UserHeader";
import jwt, { decode } from 'jsonwebtoken'
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Ufvalue from "../../components/Ufvalue";
import axios from 'axios';
import { randomExecutive } from "../../repositories/user";
import store from "../../redux/store";


export default function CreateRequest() {
  const history = useHistory();

  const storedToken = localStorage.getItem('token');
  const [header, payload, signature] = storedToken.split(".");
  const decodedPayload = JSON.parse(atob(payload));
  const userId = decodedPayload.userId;
  const username = decodedPayload.nombre;
  const userrut = decodedPayload.rut;

  
  const [executive, setExecutive] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
      const id = await randomExecutive();
      setExecutive(id);
    } catch(error){
      console.error(error);
    }
  };
  fetchData();
},[]
);


  console.log(storedToken);

  const try1 = executive;

  const [state, setState] = useState({
    nombre: username,
    rut: userrut,
    valor_credito: 0,
    tasa: 1,
    plazo: 0,
    id_ejecutivo: try1,
  } );
  

  const [ufvalue, setUfValue] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [calculatedValues, setCalculatedValues] = useState({});
 

  const sendQuote = async (e) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => {
        if (calculatedValues.cuota !== '' && calculatedValues.total !== '') {
          resolve();
        } else {
          const interval = setInterval(() => {
            if (calculatedValues.cuota !== '' && calculatedValues.total !== '') {
              clearInterval(interval);
              resolve();
            }
          }, 100);
        }
      });
  
      const dataToSend = {
        valor_cuota: Math.floor(calculatedValues.cuota),
        total: Math.floor(calculatedValues.total),
        plazo: state.plazo,
        user_id: userId,
      };

      console.log(dataToSend)
  
      const response = await createQuote(dataToSend);
      alert("Se ha enviado la cotizacion");
  
      }catch (error) {
        console.log(error);
        alert("Ha ocurrido un error al crear la solicitud");
      }
  };
  




  useEffect(() => {
    const calculatedValues = async () => {
      try {
        const result = await calcularCuota();
        setCalculatedValues(result);
      } catch (error) {
        console.error(error);
      }
    };

    calculatedValues();
  }, [state.valor_credito, state.plazo]);

  useEffect(() => {
		const fetchedUfValue = localStorage.getItem('ufvalue');
		setUfValue(Number.isNaN(parseFloat(fetchedUfValue)) ? 1 : parseFloat(fetchedUfValue));
	}, [])


  async function calcularCuota() {
    const tasa = state.tasa/100;
    const credito = state.valor_credito;
    const valor_uf = ufvalue;
    const plazo = state.plazo;

    const cuota = (credito)/((1-(1+tasa)**(-plazo))/tasa);
    const cuota_fixed = cuota.toFixed(2);

    const totaluf = (cuota * plazo);
    const totaluf_fixex = totaluf.toFixed(2);

    const totalclp = totaluf_fixex * valor_uf * 1000;


    return {
      cuota: cuota_fixed,
      total: totalclp,
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => {
        if (executive) {
          resolve();
        } else {
          const interval = setInterval(() => {
            if (executive) {
              clearInterval(interval);
              resolve();
            }
          }, 100);
        }
      });
  
      const response = await createRequest(state);
      history.push(`/solicitante/home`);
    } catch (error) {
      console.log(error);
      alert("Ha ocurrido un error al crear la solicitud");
    }
  };


 
  
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <label htmlFor="valor_credito">Valor Crédito</label>
            <input
              className="form-control"
              id="valor_credito"
              type="int"
              value={state.valor_credito}
              onChange={(e) =>
                setState({ ...state, valor_credito: Number(e.target.value), id_ejecutivo: executive })
              }
              placeholder="Ingrese Valor Crédito"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="plazo">Plazo (Meses) </label>
            <input
              className="form-control"
              id="plazo"
              type="int"
              value={state.plazo}
              onChange={(e) =>
                setState({ ...state, plazo: Number(e.target.value) })
              }
              placeholder="Ingrese Plazo"
              required
            />
          </div>
        </form>
          <div className="float-right">
            <button onClick={submitForm} className="btn btn-success">
              <Link to="/solicitante/home" style={{ textDecoration: 'none', color: 'white' }}>Crear Solicitud </Link>
            </button>
          </div>
          <button onClick={sendQuote} className="btn btn-success">
              Enviar Cotizacion
          </button>
          <div>
            <Container className="pt-4">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Valor Cuota UF</th>
                    <td>{calculatedValues.cuota}</td>
                    <th>Total ($) </th>
                    <td>{calculatedValues.total}</td>
                  </tr>
                </thead>
              </Table>
            </Container>
          </div>
      </div>
    </div>
  );
}
