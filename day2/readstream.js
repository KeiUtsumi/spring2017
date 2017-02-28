const fs = require('fs');
const rs = fs.createReadStream('stream.txt', {encoding: 'utf8'});
rs.on('data', function(datax) {
  console.log('data >>> ', datax.replace('\n', '\\n'));//改行コードの置き換え
});
rs.on('end', function() {
  console.log(" >>> END");
});
