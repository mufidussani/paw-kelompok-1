import React, { Component } from 'react';
import axios from "axios";

class AddMahasiswa extends Component {

    constructor(props){
        super();
        this.state = {
            name: "",
            nim: "",
            jurusan: "",
            email: "",
            nohp: ""
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNim = this.onChangeNim.bind(this);
        this.onChangeJurusan = this.onChangeJurusan.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNohp = this.onChangeNohp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeNim(e) {
        this.setState({ nim: e.target.value})
    }
    onChangeJurusan(e) {
        this.setState({ jurusan: e.target.value})
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value})
    }
    onChangeNohp(e) {
        this.setState({ nohp: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const mahasiswa = {
            name: this.state.name,
            nim: this.state.nim,
            jurusan: this.state.jurusan,
            email: this.state.email,
            nohp: this.state.nohp
        }

        console.log(mahasiswa);

        axios.post('http://localhost:5000/add', mahasiswa)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3 style={{textAlign: 'center'}}>Tambah Data Mahasiswa</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{marginTop: '1rem'}}>Nama Lengkap: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group" style={{marginTop: '1rem'}}>
                        <label>NIM: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.nim}
                            onChange={this.onChangeNim}
                        />
                    </div>
                    <div className="form-group" style={{marginTop: '1rem'}}>
                        <label>Jurusan: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.jurusan}
                            onChange={this.onChangeJurusan}
                        />
                    </div>
                    <div className="form-group" style={{marginTop: '1rem'}}>
                        <label>Email: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group" style={{marginTop: '1rem'}}>
                        <label>Nomor Handphone: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.nohp}
                            onChange={this.onChangeNohp}
                        />
                    </div>
                    <div className="form-group" style={{marginTop: '2rem'}}>
                        <input type="submit" value="Tambah Data" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddMahasiswa;