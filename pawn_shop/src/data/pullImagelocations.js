
const fs = require('fs');
const path = require('path');

const pullImageLocations =() => {
  var products = []
  var fileNames = fs.readdirSync('../public/products');
  fileNames.forEach(name => products.push(name))
  fs.writeFile('products.js', products, (err) => {
    if (err) return console.log(err)
    console.log('complete file write')
  })
  console.log(fileNames)

}

pullImageLocations()

exports = {pullImageLocations};