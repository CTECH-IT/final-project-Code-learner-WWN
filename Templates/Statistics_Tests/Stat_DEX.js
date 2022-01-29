//Display 2
var fs = require('fs');
var dt = require('./Stat_Roll_STR.js');

//append content at the end of the file:
exports.Data_DEX = function(){
  return 'Your Dexterity Stat is:\n' + dt.Stat()
}