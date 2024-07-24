const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
    if (!file) {
      console.log('Missing file for read operation.');
    } else {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file '${file}':`, err.message);
        } else {
          console.log(data);
        }
      });
    }
    break;

  case 'delete':
    if (!file) {
      console.log('Missing file for delete operation.');
    } else {
      fs.unlink(file, (err) => {
        if (err) {
          console.error(`Error deleting file '${file}':`, err.message);
        } else {
          console.log(`File '${file}' deleted.`);
        }
      });
    }
    break;

  case 'create':
    if (!file) {
      console.log('Missing file for create operation.');
    } else {
      fs.writeFile(file, '', (err) => {
        if (err) {
          console.error(`Error creating file '${file}':`, err.message);
        } else {
          console.log(`File '${file}' created.`);
        }
      });
    }
    break;

  case 'append':
    if (!content || !file) {
      console.log('Missing content or file for append operation.');
    } else {
      fs.appendFile(file, content + '\n', (err) => {
        if (err) {  
          console.error(`Error appending to file '${file}':`, err.message);
        } else {
          console.log(`Content appended to '${file}'.`);
        }
      });
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
    console.log(`Invalid operation '${operation}'.`);
    console.log(`
      Available operations:
        read <file>                - Read file content
        delete <file>              - Delete a file
        create <file>              - Create a new file
        append <content> <file>    - Append content to file
        rename <oldFile> <newFile> - Rename a file
        list <directory>           - List contents of a directory
    `);
    break;
}
