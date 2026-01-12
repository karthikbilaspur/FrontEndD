// asyncExample.js
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('asynchexample.html', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();