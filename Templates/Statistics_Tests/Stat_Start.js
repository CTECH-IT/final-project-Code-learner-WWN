var fs = require('fs');
var dt = require('./Stat_Set-up');

fs.appendFile('Test_Stats.txt','The Stats for "Test_User" are: \n' + dt.Data_STR(), function (err){
    if (err) throw err;
    console.log('Created Stats!');
});