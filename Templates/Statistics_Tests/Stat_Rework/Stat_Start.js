//Display one
var fs = require('fs');
var dt = require('./Stat_STR.js');

fs.appendFile('Stats.txt','The Stats for "Test_User" are: \n' + dt.Data_STR(), function (err){
    if (err) throw err;
    console.log('Created Stats!');
});