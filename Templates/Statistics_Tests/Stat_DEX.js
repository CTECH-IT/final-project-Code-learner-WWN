//Display 2
var fs = require('fs');
var dt = require('./Stat_Append_DEX.js');

//append content at the end of the file:
exports.Data_DEX = function(){
  return 'Your Dexterity Stat is:\n' + dt.Stat()
}