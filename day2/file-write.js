const fs = require('fs');
const path = require('path');
fs.writeFile(/*'hello.txt'*//*__dirname + '/hello.txt'*/path.join(__dirname, 'hello.txt'), 'Nodeはじめました\n', function (err) {
  if(err) return console.log("Error!");
});
