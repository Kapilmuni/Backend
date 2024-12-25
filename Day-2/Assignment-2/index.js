const { createHmac } = require('node:crypto');
const fs= require("fs"); 
const os = require('node:os');
const { log } = require('node:console');

const secret = "Hello, Good Morning";
const hash = createHmac('sha256', secret).digest('hex');
console.log('encrypted key is: ',hash);

const filePath= './large_file.txt';
console.time('fs.readFile');
fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.timeEnd('fs.readFile');
})

console.time('fs.createReadStream');
const readStream= fs.createReadStream(filePath,{encoding:'utf-8'});
readStream.on('data', (chunk) => {

});

readStream.on('end', () => {
    console.timeEnd('fs.createReadStream');
});
readStream.on('error', (err) => {
    console.error(err);
});

console.log(os.cpus())
console.log(os.arch())
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());