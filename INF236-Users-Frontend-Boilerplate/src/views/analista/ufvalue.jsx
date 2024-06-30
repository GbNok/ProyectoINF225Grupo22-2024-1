import React from 'react'
import ReadUf from "../../components/Readuf"

import Header from "../../components/AnalistHeader";
import { Link } from "react-router-dom";

export default function ufvalue () {
    return (
        <div>
            <Header />
                <div>
                    <ReadUf />
                    <div className="Back-button">
                        <button type="submit" className="btn btn-success" style={{fontSize: '18px', border: '2px solid #2b4719', marginLeft:'90%', width:'100px', height:'50px', backgroundColor:'#446a2b'}}>
                            <Link to="/analista/Home" style={{ textDecoration: 'none', color: 'white' }}> Volver </Link>
                        </button>
                    </div>
                </div>
        </div>
            )
 }