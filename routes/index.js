var express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const uri = "mongodb://Admin:Admin@localhost:27017";
const bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

router.post('/users/create', async (req, res) => {
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

router.get('/users', async (req, res) => {
  const id = parseInt(req.params.id);
  const client = new MongoClient(uri);
  await client.connect();
  const users = await client.db('db-mhs').collection('users').find({}).toArray();
  await client.close();
  res.status(200).send(users);
})

router.get('/users/:id', async (req, res) => {
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

router.put('/users/update', async (req, res) => {
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

router.delete('/users/delete', async (req, res) => {
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

module.exports = router;
