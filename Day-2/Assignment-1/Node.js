const fs= require('fs');
const path = require('path');

const operation= process.argv[2];
const fileName= process.argv[3];
const content= process.argv[4];

switch (operation) {
    case 'read':
        fs.readFile(fileName,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data);
            }
        });
        break;
    case 'create':
        fs.writeFile(fileName,'',(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`File '${fileName}' created`)
            }
        })
        break;
    case 'delete':
        fs.unlink(fileName,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`File '${fileName}' deleted`)
            }
        })
        break;
    case 'append':
        fs.appendFile(fileName,`\n{content}`,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`File '${fileName}' appended`)
            }
        })
        break;
    default:
        break;
}