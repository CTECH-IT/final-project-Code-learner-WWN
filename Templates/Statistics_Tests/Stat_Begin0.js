var fs = require('fs');
exports.Beta = function (){
    fs.appendFile('Stats.txt','The Stats for "Test_User" are: \n', function (err){
        if (err) throw err;
        console.log('Update.one');
    });
}