const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@datamahasiswa.rhqba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true});

require('./mahasiswa.model');