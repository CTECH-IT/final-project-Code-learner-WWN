//Display three
var fs = require('fs');
var dt = require('./d6_Roll');

let x = dt.Rng();

exports.Stat = x;

exports.Stat = function(){
    x + x + 6;
}