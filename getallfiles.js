const fs = require('fs');
const path = require('path');

const getAllFiles = function (dirPath, extension = '.js', arrayOfFiles = []) {
  files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    if (fs.statSync(path.join(dirPath, '/', file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, '/', file), extension, arrayOfFiles);
    } else {
      if (path.extname(file).toLowerCase() === extension) {
        arrayOfFiles.push({
          path: path.join(dirPath, '/', file),
          time: fs.statSync(dirPath + '/' + file).mtime.getTime(),
        });
      }
    }
  });

  return arrayOfFiles;
};

const getLatestFile = (dirname, extension) => {
  let arrayOfFiles = getAllFiles(dirname, extension);
  arrayOfFiles.sort((a, b) => a.time - b.time);
  return arrayOfFiles.slice(-1)[0].path;
};

console.log(getLatestFile(__dirname));

module.exports = { getAllFiles, getLatestFile };
