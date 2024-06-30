import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import UsersEdit from "./views/users/edit";
import UsersView from "./views/users/show";
import UserList from "./views/users/index";
import UserCreate from "./views/users/create";
import RequestCreate from "./views/solicitante/create";
import UserLogin from "./views/users/login";
import AnalistaView from "./views/analista/index"
import Ufvalue from "./views/analista/ufvalue";
import Viewreq from "./views/analista/viewreq";
import Home from "./views/Home";
import HomeAnalista from "./views/analista/Home";
import HomeSupervisor from "./views/supervisor/Home";
import HomeSolicitante from "./views/solicitante/Home";
import HomeEjecutivo from "./views/ejecutivo/Home";
import SupervisorView from "./views/supervisor/index";
import EjecutivoView from "./views/ejecutivo/index";
import Viewreqs from "./views/supervisor/viewreqs"
import Viewreqe from "./views/ejecutivo/viewreq";
import Viewcots from "./views/supervisor/ViewCot";
import Login from "./lgin"
import Register from "./register"


export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/users/:id/edit">
						<UsersEdit />
					</Route>
					<Route path="/users/:id">
						<UsersView />
					</Route>
					<Route path="/users">
						<UserList />
					</Route>
					<Route path="/Home">
						<Home />
					</Route>
					<Route path="/analista/home">
						<HomeAnalista />
					</Route>
					<Route path="/supervisor/home">
						<HomeSupervisor />
					</Route>
					<Route path="/supervisor/index">
						<SupervisorView />
					</Route>
					<Route path="/ejecutivo/home">
						<HomeEjecutivo />
					</Route>
					<Route path="/ejecutivo/index">
						<EjecutivoView />
					</Route>
					<Route path="/solicitante/home">
						<HomeSolicitante />
					</Route>
					<Route path="/analista/index">
						<AnalistaView />
					</Route>
					<Route path="/analista/ufvalue">
						<Ufvalue />
					</Route>
					<Route path="/solicitante/create">
						<RequestCreate />
					</Route>
					<Route path="/supervisor/viewcot">
						<Viewcots />
					</Route>
					<Route path="/supervisor/:id/viewreqs">
						<Viewreqs />
					</Route>
					<Route path="/analista/:id/viewreq">
						<Viewreq />
					</Route>
					<Route path="/ejecutivo/:id/viewreq">
						<Viewreqe />
					</Route>
					<Route path="/lgin">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/supervisor/">
						<SupervisorView />
					</Route>
					<Redirect from="/" to="/lgin"/>
				</Switch>
			</div>
		</Router>
	);
}
