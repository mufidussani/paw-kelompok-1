const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Mahasiswa = mongoose.model('Mahasiswa');


router.get('/', (req, res) => {
    res.render("mahasiswa/create_or_update", {
        viewTitle: "Input Data Mahasiswa"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        createRecord(req, res);
        else
        updateRecord(req, res);
});


function createRecord(req,res){
    var mahasiswa = new Mahasiswa();

    mahasiswa.name = req.body.name;
    mahasiswa.nim = req.body.nim;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.email = req.body.email;
    mahasiswa.nohp = req.body.nohp;
    mahasiswa.save((err,doc)=>{
        if (!err)
            res.redirect('mahasiswa/list');
        else{
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("mahasiswa/create_or_update", {
                    viewTitle: 'Update Data Mahasiwa',
                    mahasiswa: req.body
                });
            }
            console.log('Error during record insertion:'+ err);
        }

    });
}

function updateRecord(req, res) {
    Mahasiswa.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('mahasiswa/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("mahasiswa/create_or_update", {
                    viewTitle: 'Update Data Mahasiswa',
                    mahasiswa: req.body
                });
            }
            else
                console.log('Error ketika memperbarui record : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Mahasiswa.find((err, docs) => {
        if (!err) {
            docs= docs.map(item=> item.toObject())
            res.render("mahasiswa/list", {
                list: docs
            });
        }
        else {
            console.log('Error dalam mendapatkan list mahasiswa :' + err);
        }
    });
});

router.get('/listjson', (req, res) => {
    Mahasiswa.find((err, docs) => {
        if (!err) {
            docs= docs.map(item=> item.toObject())
            res.send({"doc" : docs})
        }
        else {
            console.log('Error dalam mendapatkan list mahasiswa :' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Mahasiswa.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("mahasiswa/create_or_update", {
                viewTitle: "Update Data Mahasiswa",
                mahasiswa: doc
            });
        }
    })
});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/delete/:id', (req, res) => {
    Mahasiswa.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/mahasiswa/list');
        }
        else { console.log('Error dalam penghapusan record mahasiswa :' + err); }
    });
});

module.exports = router;