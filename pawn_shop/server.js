const {readGuestEntries}  =require('./guest-book/readGuestEntries');
const {addGuestEntry}  = require('./guest-book/addGuestEntry');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
});

app.get('/pawnshop', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
});
app.get('/holyrelapse', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
});


app.get('/guestbook', async (req, res) => {
  res.send(await readGuestEntries(req, res))
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));