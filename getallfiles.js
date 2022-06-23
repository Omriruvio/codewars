const fs = require('fs');
const path = require('path');

const getAllFiles = function (dirPath, extensions = ['.js'], arrayOfFiles = []) {
  files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    if (fs.statSync(path.join(dirPath, '/', file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, '/', file), extensions, arrayOfFiles);
    } else {
      if (path.basename(file) === path.basename(__filename)) return;
      if (extensions.includes(path.extname(file).toLowerCase())) {
        arrayOfFiles.push({
          path: path.join(dirPath, '/', file),
          time: fs.statSync(dirPath + '/' + file).mtime.getTime(),
        });
      }
    }
  });
  return arrayOfFiles;
};

const getLatestFile = (dirname, extensions) => {
  let arrayOfFiles = getAllFiles(dirname, extensions);
  arrayOfFiles.sort((a, b) => a.time - b.time);
  return arrayOfFiles.slice(-1)[0];
};

// console.log(getAllFiles(__dirname));
console.log(getLatestFile(__dirname));

module.exports = { getAllFiles, getLatestFile };
