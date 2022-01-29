//Display 2
var fs = require('fs');
var STAT =  require('./Stat_Roll_General');

//append content at the end of the file:
exports.Data_CHA = function(){
  return 'Your Charisma Stat is:\n' + dt.Stat()
}