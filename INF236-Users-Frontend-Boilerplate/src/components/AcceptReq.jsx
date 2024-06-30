import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { deleteRequest } from "../repositories/request"; 


export default function AcceptReq( {requestId}) {
    async function showAlert(){
        const response = await deleteRequest(requestId);
        alert("Solicitud Aceptada");
        window.location.reload();
    }

    return(
        <div>
            <Link to={'/analista/index'} onClick={showAlert} className='btn btn-success' style={{border: '1px solid #000000', backgroundColor:'#70ad47', fontSize:'22px', fontFamily:'Calibri',  marginRight: '10px'}}> Aceptar Solicitud </Link>
        </div>
    );
}