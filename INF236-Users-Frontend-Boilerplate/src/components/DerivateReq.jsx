import React from 'react';
import { Link } from "react-router-dom";
import { updateRequest } from '../repositories/request';


export default function DerivateReq({requestId}) {
    async function showAlert(){
        const newData = {
            estado: 'true'
        };
        const response = await updateRequest(requestId, newData);
        alert("Solicitud Derivada");
        window.location.reload();
        
    }

    return(
        <div>
            <Link to={'/analista/index'} onClick={showAlert} className='btn btn-success' style={{border: '1px solid #000000', backgroundColor:'#70ad47', fontSize:'22px', fontFamily:'Calibri',  marginRight: '10px'    }}> Derivar Solicitud </Link>
        </div>
    );
}