var fs = require('fs');
var dt = require('./Stat_Roll.js');

//append content at the end of the file:
fs.appendFile('Stats.txt', 'Your Strenght Stat is:\n' + dt.Rng(), function (err) {
  if (err) throw err;
  console.log('Updated!');
});