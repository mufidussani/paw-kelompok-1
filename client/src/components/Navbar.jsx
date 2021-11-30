import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div class="container-full">
                <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#181D31', paddingLeft: '1rem', paddingRight: '1rem', position: 'relative' }}>
                    <a class="navbar-brand">DatMas - Data Mahasiswa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse animate__animated animate__fadeIn" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="btn btn-outline-success" href="/" style={{ marginLeft: '0.5rem', marginRight: '0.5rem', color: 'white', display: 'block', boxSizing: 'border-box' }}>Data Mahasiswa</a>
                            <a class="btn btn-outline-success" href="/add" style={{ marginLeft: '0.5rem', marginRight: '0.5rem', color: 'white', display: 'block' }}>Tambah Mahasiswa</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;