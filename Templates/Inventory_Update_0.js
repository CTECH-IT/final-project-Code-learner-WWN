var fs = require('fs');

//append content at the end of the file:
fs.appendFile('Inventory.txt', 'Test', function (err) {
  if (err) throw err;
  console.log('Updated!');
});