//Display 2
var fs = require('fs');
var dt = require('./Stat_Roll_General.js');

//append content at the end of the file:
exports.Data_INT = function(){
  return 'Your Intelegence Stat is:\n' + dt.Stat()
}