const fs = require('fs');

process.on('message', (msg) =>{
    var stream = fs.createReadStream(msg);
    stream.pipe(res);

    
})