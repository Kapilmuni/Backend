const path = require("path");
const fs= require("fs");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


switch (operation) {
  // complete the fillowing function.
  case "read":
    if(!file){
        console.log("file missing for read");
    }
    else{
        fs.readFile(file,"utf8",(err,data)=>{
            if(err){
                console.log(`error in reading '${file}':`,err.message)
            }
            else{
                console.log(data);
            }
        })
    }
    break;

    case "delete":
        if(!file){
            console.log("file missing for delete");
        }
        else{
            fs.unlink(file,(err,data)=>{
                if (err) {
                    console.error(`Error deleting file '${file}':`, err.message);
                }
                else{
                    console.log(`file ${file} deleted`);
                }
            })
        }
        break;

    case "create":
        if(!file){
            console.log("file missing for create");
        }
        else{
            fs.writeFile(file,"",(err)=>{
                if(err){
                    console.log(`Error creating file '${file}':`, err.message);
                }
                else{
                    console.log(`File '${file}' created.`);
                }
            })
        }
    break;
    
    case "append":
        if (!content || !file) {
            console.log('missing content or file for append operation.');
        }
        else{
            fs.appendFile(file,content + "/n",(err)=>{
                if (err) {  
                    console.error(`Error appending to file '${file}':`, err.message);
                  } else {
                    console.log(`Content appended to '${file}'.`);
                  }
            })
        }
    break;

    case 'rename':
    const newFile = process.argv[4];
    if (!file || !newFile) {
      console.log('Missing old file or new file for rename operation.');
    } else {
      fs.rename(file, newFile, (err) => {
        if (err) {
          console.error(`Error renaming '${file}' to '${newFile}':`, err.message);
        } else {
          console.log(`Renamed '${file}' to '${newFile}'.`);
        }
      });
    }
    break;

  case 'list':
    if (!file) {
      console.log('Missing directory for list operation.');
    } else {
      fs.readdir(file, (err, files) => {
        if (err) {
          console.error(`Error listing directory '${file}':`, err.message);
        } else {
          files.forEach(fileName => console.log(fileName));
        }
      });
    }
    break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}
