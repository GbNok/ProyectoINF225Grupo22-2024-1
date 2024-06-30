// import React, { useState } from "react";
// import { useHistory, Link } from "react-router-dom";
// import { loginUser } from "../../repositories/user";

// export default function Login() {
//   const history = useHistory();

//   const [state, setState] = useState({
//     email: "",
//     password: "",
//   });

//   const submitForm = async (e) => {
// 	e.preventDefault();
// 	try {
// 	  const response = await loginUser(state.email, state.password);
// 	  history.push(`/analista/${response.data.id}`);
// 	} catch (error) {
// 	  console.error('Error during login:', error);
// 	  alert(`Ha ocurrido un error al iniciar sesión. Por favor, verifica tus credenciales. ${state.password}`);
// 	}
//   };

//   return (
//     <div className="container mt-4">
//       <form onSubmit={submitForm}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             className="form-control"
//             id="email"
//             type="text"
//             value={state.email}
//             onChange={(e) => {
//               setState({ ...state, email: e.target.value });
//             }}
//             placeholder="Ingrese Email"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Contraseña</label>
//           <input
//             className="form-control"
//             id="password"
//             type="password"
//             value={state.password}
//             onChange={(e) => {
//               setState({ ...state, password: e.target.value });
//             }}
//             placeholder="Contraseña"
//             required
//           />
//         </div>
//         <div className="float-right">
//           <button className="create-button">
//             <Link to="/users/create">Regístrate</Link>
//           </button>
//         </div>
//         <div className="float-right">
//           <button type="submit" className="btn btn-primary">
//             Iniciar sesión
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
