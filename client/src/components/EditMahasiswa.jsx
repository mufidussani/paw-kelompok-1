import React, { Component } from 'react';
import axios from "axios";

class EditMahasiswa extends Component {

    constructor(props) {
        super();
        this.state = {
            name: "",
            nim: "",
            jurusan: "",
            email: "",
            error:"",
            nohp: ""
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNim = this.onChangeNim.bind(this);
        this.onChangeJurusan = this.onChangeJurusan.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNohp = this.onChangeNohp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const id = window.location.pathname.split("/")[2]
        axios.get('https://datmas-api-paw-kelompok-11.herokuapp.com/' + id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    nim: res.data.nim,
                    jurusan: res.data.jurusan,
                    email: res.data.email,
                    nohp: res.data.nohp,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    emailValidation() {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({
                error: "Invalid E-Mail!"
            });
            return false;
        }
        return true;
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeNim(e) {
        this.setState({ nim: e.target.value })
    }
    onChangeJurusan(e) {
        this.setState({ jurusan: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeNohp(e) {
        this.setState({ nohp: e.target.value })
    }
    onSubmit(e) {
        const id = window.location.pathname.split("/")[2]
        e.preventDefault();
        if (this.emailValidation()) {
            console.warn(this.state);
            const mahasiswa = {
                name: this.state.name,
                nim: this.state.nim,
                jurusan: this.state.jurusan,
                email: this.state.email,
                nohp: this.state.nohp
            }

            console.log(mahasiswa);

            axios.post('https://datmas-api-paw-kelompok-11.herokuapp.com/update/' + id, mahasiswa)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            window.location = "/";
        }
    }

    render() {
        return (
            <div className="container">
                <h3 style={{ textAlign: 'center' }}>Perbarui Data Mahasiswa</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label style={{ marginTop: '1rem' }}>Nama Lengkap</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ marginTop: '1rem' }}>Nomor Induk Mahasiswa (NIM)</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.nim}
                            onChange={this.onChangeNim}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ marginTop: '1rem' }}>Program Studi</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.jurusan}
                            onChange={this.onChangeJurusan}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ marginTop: '1rem' }}>E-Mail</label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                        <span className="text-danger">{this.state.error}</span>
                    </div>
                    <div className="form-group">
                        <label style={{ marginTop: '1rem' }}>Nomor Handphone</label>
                        <input
                            type="number" required
                            pattern="[0-9]*"
                            inputmode="numeric"
                            className="form-control"
                            value={this.state.nohp}
                            onChange={this.onChangeNohp}
                        />
                    </div>
                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <input type="submit" value="Perbarui Data" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditMahasiswa;