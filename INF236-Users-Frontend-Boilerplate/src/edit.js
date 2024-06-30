 import React, { useState } from "react";
import useSWR from "swr";

import { useHistory, useParams } from "react-router-dom";
import { updateUser, getUser } from "./repositories/user";

export default function edit() {
	const history = useHistory();
	const { id } = useParams();

	const { data, error } = useSWR(id, {
		fetcher: getUser,
		initialData: { nombre: '', email: '' },
		revalidateOnMount: true,
	});

	const [state, setstate] = useState(data);

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			await updateUser(data.id, state);
            if(data.email.includes("@gmail.com")){
                history.push('/solicitante/home');
              } else if(data.email.includes("@laclave.cl")){
                history.push('/analista/home');
              } else if(data.email.includes("@slaclave.cl")){
                history.push('/supervisor/home');
              } else{
                history.push('/Home');
              }
		} catch (error) {
			alert("A ocurrido un error al actualizar");
		}
	};

	return (
		<div className="container mt-4">
			<form onSubmit={submitForm}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						className="form-control"
						id="email"
						type="email"
						value={state.email}
						onChange={(e) => {
							setstate({ ...state, email: e.target.value });
						}}
						placeholder="Ingrese Email"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="contraseña">Contraseña</label>
					<input
						className="form-control"
						id="contraseña"
						type="text"
						value={state.password}
						onChange={(e) => {
							setstate({ ...state, password: e.target.value });
						}}
						placeholder="Ingrese su nueva contraseña"
					/>
				</div>
				<div className="float-right">
					<button type="submit" className="btn btn-primary">
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
}
