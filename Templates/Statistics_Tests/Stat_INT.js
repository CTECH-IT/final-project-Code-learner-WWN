//Display 2
var fs = require('fs');
var dt = require('./Stat_Append_INT.js');

//append content at the end of the file:
exports.Data_INT = function(){
  return 'Your Intelegence Stat is:\n' + dt.Stat()
}