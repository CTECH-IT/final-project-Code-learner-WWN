//Display one
var fs = require('fs');

    fs.appendFile('Stats.txt','The Stats for "Test_User" are: \n', function (err){
        if (err) throw err;
        console.log('Created Stats!');
    });