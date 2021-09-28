require('./models/database');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const Handlebars = require('handlebars');

const {
    allowInsecurePrototypeAccess,
  } = require('@handlebars/allow-prototype-access');

const mahasiswaController = require('./controllers/mahasiswaController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layout/', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/mahasiswa', mahasiswaController);

