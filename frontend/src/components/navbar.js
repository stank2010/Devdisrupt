import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
export default function Navby({connectWallet,Swap,Host}) {

return (
    <div className="row mb-5">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#"> Cryptaurant </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" onClick={()=>Swap(Host,0)}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" onClick={()=>Swap(Host,1)}>Trade</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" onClick={()=>Swap(Host,2)}>Contact</a>
            </li>
            </ul>
            <div className="form-inline mt-2 mt-md-0">
            {
            (Host.state.selectedAddress === undefined)?
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" onClick={connectWallet}>Connect Wallet</button>
            :
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" onClick={()=>alert(Host.state.selectedAddress)}>{Host.state.selectedAddress}</button>
            }
            </div>
        </div>
        </nav>
    </div>
);

}