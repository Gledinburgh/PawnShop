const fs = require('fs-extra');

const addGuestEntry =  async (req, res, next)  => {

  const json = JSON.stringify( req.body, null, 2)

  const logStream = fs.createWriteStream('guestEntries.JSON', {flags: 'a'});

  try {
    await logStream.write(json + ',')
    console.log('wrote to guestEntries');
  } catch (error) {
    console.error(error)
  }
}

module.exports ={addGuestEntry}

