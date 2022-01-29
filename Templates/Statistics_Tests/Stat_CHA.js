//Display 2
var fs = require('fs');
var dt = require('./Stat_Append_CHA.js');

//append content at the end of the file:
exports.Data_CHA = function(){
  return 'Your Charisma Stat is:\n' + dt.Stat()
}