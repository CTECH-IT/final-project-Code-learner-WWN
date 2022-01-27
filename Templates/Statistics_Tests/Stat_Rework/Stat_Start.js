//Display one
var fs = require('fs');

exports.Data_STA = function(){    
    fs.appendFile('Stats.txt','The Stats for "Test_User" are: \n', function (err){
        if (err) throw err;
        console.log('Created Stats!');
    });
}