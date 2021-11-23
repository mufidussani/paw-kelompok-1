import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#181D31'}}>
                <div className="navbar-brand" style={{marginLeft: '2rem'}}>DatMas - Data Mahasiswa</div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Data Mahasiswa</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Tambah Mahasiswa</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;