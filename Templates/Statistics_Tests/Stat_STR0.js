var fs = require('fs');
var dt = require('./Stat_Begin0.js');

//append content at the end of the file:
exports.Data_STR = function () {
  fs.appendFile('Stats.txt', 'Your Strenght Stat is:\n' + dt.Beta(), function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
}