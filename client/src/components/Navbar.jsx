import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div className="animate__animated animate__fadeIn">
                <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#181D31', paddingLeft: '1rem', paddingRight: '1rem' }}>
                    <a class="navbar-brand" >DatMas - Data Mahasiswa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="/">List Mahasiswa</a>
                            <a class="nav-item nav-link" href="/add">Tambah Mahasiswa</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;