import axios from "axios";
import jwt from 'jsonwebtoken';
import { useEffect } from "react";
import React, { useState } from 'react';

const { SECRET_KEY } = process.env;

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// const [header, payload, signature] = token.split(".");
// const 

// const getNameAndRutFromToken = async (tok)


const updateUser = async (id, data) =>
	axios
		.put(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, data);

const createUser = async (data) =>
	axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/users`, data);

const deleteUser = async (id) =>
	axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`).then(res => res.data);

const getAllUsers = () =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
		.then((res) => res.data);

const getUser = (id) =>
	axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`)
		.then((res) => res.data);

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      email,
      password,
    });


    // console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
    console.log('Response data:', response);

    if (response && response.data && response.data.token) {
      const token = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('User authenticated:', response.data);
      return response.data;
    } else {
      console.error('Authentication failed. No token received.');
      throw new Error('Authentication failed. No token received.');
    }
  } catch (error) {
    console.error('Failed to authenticate user:', error);
    throw error;
  }
};

	

// Haciendo una solicitud a tu backend para obtener el ID del ejecutivo



const randomExecutive = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/solicitante`);
    const executiveId = response.data.executiveId;
    return executiveId;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}





// eslint-disable-nextline
export { deleteUser, updateUser, createUser, getAllUsers, getUser, loginUser, randomExecutive };
