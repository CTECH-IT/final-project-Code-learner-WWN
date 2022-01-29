//Display one
var fs = require('fs');
var dSTR = require('./Stat_STR');
var dDEX =  require('./Stat_DEX');
var dCON =  require('./Stat_CON');
var dWIS = require('./Stat_WIS');
var dINT = require('./Stat_INT');
var dCHA = require('./Stat_CHA');

fs.appendFile('Stats.txt','The Stats for "Test_User" are: \n' + dSTR.Data_STR() + '\n' + dDEX.Data_DEX() +  '\n'+ dCON.Data_CON() + '\n' + dWIS.Data_WIS()+ '\n' + dINT.Data_INT() +  '\n' + dCHA.Data_CHA(), function (err){
    if (err) throw err;
    console.log('Created Stats!');
});