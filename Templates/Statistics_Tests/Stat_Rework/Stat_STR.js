//Display 2
var fs = require('fs');
var dt = require('./Stat_Roll_Com.js');

//append content at the end of the file:
exports.Data_STR = function(){
    fs.appendFile('Stats.txt','Your Strenght Stat is: \n' + dt.Stat(), function (err){
        if (err) throw err;
        console.log('Created STR!');
    });
}