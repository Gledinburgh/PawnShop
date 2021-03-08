const {readGuestEntries}  =require('./guest-book/readGuestEntries');
const {addGuestEntry}  = require('./guest-book/addGuestEntry');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyPaser = require('body-parser');



app.use(express.json())
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
app.get('/souls', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
});


app.get('/guestbook', async (req, res) => {
  console.log('get: /guestbook reached');
  res.send( await readGuestEntries(req, res));
  console.log('get guest book entries finished')
})

app.post('/guestbook', async (req, res) => {
  console.log('post: /guestbook reached');
  console.log('req body', req.body);
  // console.log('newGuestEntry', req.newGuestEntry);
  // console.log('newGuestEntry.didto', req.newGuestEntry.newGuestEntry);
  const newGuestEntry = req.body;
  res.send( await addGuestEntry(newGuestEntry));
  console.log(' post guest book entry finished')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));