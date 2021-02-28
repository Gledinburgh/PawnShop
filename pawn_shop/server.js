const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

console.log(__dirname + '/build');
app.use(express.static(__dirname + '/build'));

app.get('/*', (req, res) => {

  res.sendFile(path.join(__dirname, '/build', 'index.html'))
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));