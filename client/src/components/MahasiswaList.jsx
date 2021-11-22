import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Mahasiswa = props => (
    <tr>
        <td>{props.mahasiswa.name}</td>
        <td>{props.mahasiswa.nim}</td>
        <td>{props.mahasiswa.jurusan}</td>
        <td>{props.mahasiswa.email}</td>
        <td>{props.mahasiswa.nohp}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/update/"+props.mahasiswa._id} style={{color:"white", textDecoration:"none"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteMahasiswa(props.mahasiswa._id) }}>Delete</button>
        </td>
    </tr>
)

class MahasiswaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mahasiswa: []
        }

        this.deleteMahasiswa = this.deleteMahasiswa.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then(res => {
                this.setState({ mahasiswa: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteMahasiswa(id) {
        axios.delete('http://localhost:5000/delete/' +id)
            .then(res => console.log(res.data));

        this.setState({ mahasiswa: this.state.mahasiswa.filter(el => el._id !== id)})
    }

    mahasiswaList() {
        return this.state.mahasiswa.map(currentmahasiswa => {
            return <Mahasiswa mahasiswa={currentmahasiswa} deleteMahasiswa={this.deleteMahasiswa} key={currentmahasiswa._id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Data Mahasiswa</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nama</th>
                            <th>NIM</th>
                            <th>Program Studi</th>
                            <th>E-mail</th>
                            <th>Nomor Handphone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mahasiswaList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MahasiswaList;