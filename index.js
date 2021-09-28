const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const uri = "mongodb://Admin:Admin@localhost:27017";
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('testing')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

app.post('/users/create', async (req, res) => {
    const user = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('db-mhs').collection('users').insertOne({
        id: parseInt(user.id),
        name: user.name,
        nim: user.nim,
        email: user.email,
        nohp: user.nohp
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Data mahasiswa dengan nomor ID " + user.id + " berhasil dibuat",
        "user": user
    });
})

app.get('/users', async (req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const users = await client.db('db-mhs').collection('users').find({}).toArray();
    await client.close();
    res.status(200).send(users);
})

app.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client.db('db-mhs').collection('users').findOne({ "id": id });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "user": user
    });
})

app.put('/users/update', async (req, res) => {
    const user = req.body;
    const id = parseInt(user.id);
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('db-mhs').collection('users').updateOne({ 'id': id }, {
        "$set": {
            id: parseInt(user.id),
            name: user.name,
            nim: user.nim,
            email: user.email,
            nohp: user.nohp
        }
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Data mahasiswa dengan ID = " + id + " telah berhasil diperbarui",
        "user": user
    });
})

app.delete('/users/delete', async (req, res) => {
    const id = parseInt(req.body.id);
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('db-mhs').collection('users').deleteOne({ 'id': id });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Data mahasiswa dengan ID = " + id + " telah berhasil dihapus",
    });
})