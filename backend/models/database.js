const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:nimda@storium.rhqba.mongodb.net/PAW?retryWrites=true&w=majority",{useNewUrlParser:true});

require('./mahasiswa.model');