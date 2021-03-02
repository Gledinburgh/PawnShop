const fs = require('fs-extra')


const readGuestEntries = async (req, res, next) => {
  try {
    let json = await fs.readFile(__dirname + '/guestEntries.JSON', 'utf8');
    json = JSON.stringify('[' + json + ']');
   return (JSON.parse(json));
  } catch (error) {
    console.log(error);
    return (null)
  }
}

module.exports ={readGuestEntries}


