import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createRequest } from "../../repositories/request"; 

export default function CreateRequest() {
  const history = useHistory();

  const [state, setState] = useState({
    nombre: "",
    rut: "",
    valor_credito: 0,
    tasa: 0,
    plazo: 0
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await createRequest(state);
      history.push(`/analista/${response.data.id}`);
    } catch (error) {
      console.log(error);
      alert("Ha ocurrido un error al crear la solicitud");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            className="form-control"
            id="nombre"
            type="text"
            value={state.nombre}
            onChange={(e) => setState({ ...state, nombre: e.target.value })}
            placeholder="Ingrese Nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rut">Rut</label>
          <input
            className="form-control"
            id="rut"
            type="text"
            value={state.rut}
            onChange={(e) => setState({ ...state, rut: e.target.value })}
            placeholder="Ingrese su Rut"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="valor_credito">Valor Crédito</label>
          <input
            className="form-control"
            id="valor_credito"
            type="number"
            value={state.valor_credito}
            onChange={(e) =>
              setState({ ...state, valor_credito: Number(e.target.value) })
            }
            placeholder="Ingrese Valor Crédito"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tasa">Tasa</label>
          <input
            className="form-control"
            id="tasa"
            type="number"
            value={state.tasa}
            onChange={(e) => setState({ ...state, tasa: Number(e.target.value) })}
            placeholder="Ingrese Tasa"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plazo">Plazo</label>
          <input
            className="form-control"
            id="plazo"
            type="number"
            value={state.plazo}
            onChange={(e) =>
              setState({ ...state, plazo: Number(e.target.value) })
            }
            placeholder="Ingrese Plazo"
            required
          />
        </div>

        <div className="float-right">
          <button type="submit" className="btn btn-primary">
            <Link to ="/analista/index">Crear Solicitud </Link>
          </button>
        </div>
      </form>
    </div>
  );
}