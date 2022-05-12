const { exec } = require('child_process');
const path = require('path');
const { getLatestFile } = require('./getallfiles');
// const { spawn } = require('child_process');
const { VTexec } = require('open-term');

const latestFile = getLatestFile(__dirname);
console.log('executing command nodemon ' + path.basename(latestFile));

if (path.basename(latestFile) !== path.basename(__filename)) {
  VTexec(`nodemon ${path.basename(latestFile)}`);
}

// exec(`nodemon ${path.basename(latestFile)}`, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// const ls = spawn('nodemon', ['Consonant-value.js']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('error', (error) => {
//   console.log(`error: ${error.message}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
