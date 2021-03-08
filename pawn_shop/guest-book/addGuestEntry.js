const fs = require('fs-extra');

const addGuestEntry =  async (newGuestEntry)  => {
  console.log('add guest entries fired')
  const json = JSON.stringify(newGuestEntry, null, 2)
  console.log('entry:', json)

  const logStream = fs.createWriteStream(__dirname +'/guestEntries.JSON', {flags: 'a'});

  try {
    await logStream.write(',' + json);
    console.log('wrote to guestEntries');
  } catch (error) {
    console.error(error)
  }
}

module.exports ={addGuestEntry}

