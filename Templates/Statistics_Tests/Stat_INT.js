//Display 2
var fs = require('fs');
var STAT =  require('./Stat_Roll_General');

//append content at the end of the file:
exports.Data_INT = function(){
  return 'Your Intelegence Stat is:\n' + dt.Stat()
}