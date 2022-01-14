var fs = require('fs');
var dt = require('./Stat_Roll_MK2.js');

//append content at the end of the file:
fs.appendFile('Stats.txt', 'Your Strenght Stat is:\n' + dt.Stat(), function (err) {
  if (err) throw err;
  console.log('Updated!');
});