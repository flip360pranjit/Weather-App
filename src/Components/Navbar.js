import React from "react";
import "./css/Navbar.css";

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
              <a className="navbar-brand" href="/">
                <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" width="45" height="45" className="d-inline-block align-top" alt="" />
                <h2 style={{marginLeft: "20px", color: "white"}}>Weather App</h2>
              </a>
            </nav>            
        </div>
    )
}

export default Navbar;