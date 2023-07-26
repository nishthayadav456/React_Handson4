import React from "react";
import { Link } from "react-router-dom";

function LinkCompo(){
    return(
        <div className="Navbar">
            <Link to="/" className="home">Home</Link>
            <Link to="/Student " className="home">Students</Link>
            <Link to ="/Contact" className="home">Contact US</Link>
        </div>
    )
}
export default LinkCompo;