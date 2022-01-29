//Display one
var fs = require('fs');
var dSTR = require('./Stat_STR');
var dDEX =  require('./Stat_DEX');
var dCON =  require('./Stat_CON');
var dWIS = require('./Stat_WIS');
var dINT = require('./Stat_INT');
var dCHA = require('./Stat_CHA');
var mSTR = require('./MOD_STR');
var mDEX = require('./MOD_DEX');
var mCON = require('./MOD_CON');
var mWIS = require('./MOD_WIS');
var mINT = require('./MOD_INT');
var mCHA = require('./MOD_CHA');

fs.appendFile('Stats.txt','The Stats for "Test_User" are: \n' + dSTR.Data_STR() + '\n' + dDEX.Data_DEX() +  '\n'+ dCON.Data_CON() + '\n' + dWIS.Data_WIS()+ '\n' + dINT.Data_INT() +  '\n' + dCHA.Data_CHA(), function (err){
    if (err) throw err;
    console.log('Created Stats!');
});

fs.appendFile('Modifiers_STR.txt', 'The Strength Modifier is:\n', function (err){
    if (err) throw err;
});
fs.appendFile('Modifiers_DEX.txt', 'The Dexterity Modifier is:\n', function (err){
    if (err) throw err;
});
fs.appendFile('Modifiers_CON.txt', 'The Constitution Modifier is:\n', function (err){
    if (err) throw err;
});
fs.appendFile('Modifiers_WIS.txt', 'The Wisdom Modifier is:\n', function (err){
    if (err) throw err;
});
fs.appendFile('Modifiers_INT.txt', 'The Intelegence Modifier is:\n', function (err){
    if (err) throw err;
});
fs.appendFile('Modifiers_CHA.txt', 'The Charisma Modifier is:\n', function (err){
    if (err) throw err;
});