import React from 'react';
import { Link } from "react-router-dom";
import { deleteRequest } from "../repositories/request"; 

export default function RejectReq({requestId}) {
    async function showAlert(){
        const response = await deleteRequest(requestId);
        alert("Solicitud Rechazada");
        window.location.reload();
        
    }

    return(
        <div>
            <Link to={'/supervisor/index'} onClick={showAlert} className='btn btn-success' style={{border: '1px solid #000000', backgroundColor:'#70ad47', fontSize:'22px', fontFamily:'Calibri',  marginRight: '10px'}}> Rechazar Solicitud </Link>
        </div>
    );
}


