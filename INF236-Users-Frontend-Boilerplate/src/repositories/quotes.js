import axios from "axios";

const createQuote = (data) =>
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/quote`, data);

const getAllQuotes = () =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/quote`)
		.then((res) => res.data);

export {createQuote, getAllQuotes};