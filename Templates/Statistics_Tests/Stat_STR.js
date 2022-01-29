//Display 2
var fs = require('fs');
var dt = require('./Stat_Append_STR.js');

//append content at the end of the file:
exports.Data_STR = function(){
  return 'Your Strenght Stat is:\n' + dt.Stat()
}