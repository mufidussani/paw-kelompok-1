require('../models/mahasiswa.model')

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Mahasiswa = mongoose.model('Mahasiswa');

router.get('/', (req, res) => {
    Mahasiswa.find()
        .then(mahasiswas => res.json(mahasiswas))
        .catch(err => res.status(400).json('Error: '+err));
});

router.post('/add', (req, res) => {
    var mahasiswa = new Mahasiswa();

    mahasiswa.name = req.body.name;
    mahasiswa.nim = req.body.nim;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.email = req.body.email;
    mahasiswa.nohp = req.body.nohp;

    mahasiswa.save()
        .then(() => res.json('Data mahasiswa berhasil ditambahkan!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.post('/update/:id', (req,res) =>{
    Mahasiswa.findById(req.params.id)
        .then(mahasiswa =>{
            mahasiswa.name = req.body.name;
            mahasiswa.nim = req.body.nim;
            mahasiswa.jurusan = req.body.jurusan;
            mahasiswa.email = req.body.email;
            mahasiswa.nohp = req.body.nohp;

            mahasiswa.save()
                .then(() => res.json('Data mahasiswa berhasil diperbarui!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err))
});

router.get('/:id', (req, res) => {
    Mahasiswa.findById(req.params.id)
        .then(mahasiswa => res.json(mahasiswa))
        .catch(err => res.status(400).json('Error: '+err));
});

router.delete('/delete/:id', (req, res) => {
    Mahasiswa.findByIdAndDelete(req.params.id)
        .then(mahasiswa => res.json('Data mahasiswa berhasil dihapus!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;