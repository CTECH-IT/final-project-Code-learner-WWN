var fs = require('fs');
var STAT =  require('./Stat_Roll_General');

exports.Stat = function(){
    return fs.appendFile('Base_DEX.txt', '' +  STAT.Stat() , function (err){
        if (err) throw err;
    });
}