var fs = require('fs');

fs.appendFile('Test_Stats.txt','The Stats for "Test_User" are: ', function (err){
    if (err) throw err;
    console.log('Created Stats!');
});