import axios from "axios";

const updateRequest = async (id, data) =>
	axios
		.put(`${process.env.REACT_APP_BACKEND_URL}/analista/${id}`, data);

const createRequest = async (data) =>
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/analista`, data);

const deleteRequest = async (id) =>
	axios
		.delete(`${process.env.REACT_APP_BACKEND_URL}/analista/${id}`)
		.then(res => res.data);

const getAllRequests = () =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/analista`)
		.then((res) => res.data);

const getRequest = (id) =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/analista/${id}`)
		.then((res) => res.data);

const getAllRequestsEx = (id) =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/ejecutivo/${id}`)
		.then((res) => res.data);



// eslint-disable-nextline
export { deleteRequest, updateRequest, createRequest, getAllRequests, getRequest, getAllRequestsEx};