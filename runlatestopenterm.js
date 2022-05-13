const path = require('path');
const { getLatestFile } = require('./getallfiles');
const { VTexec } = require('open-term');

let previousChangeTime = null;
let previousLatestFile = null;
// let boot = true;
while (true) {
  try {
    const { path: latestFilePath, time: latestFileChangeTime } = getLatestFile(__dirname);
    const latestFile = path.basename(latestFilePath);

    if (previousLatestFile !== latestFile && previousChangeTime !== latestFileChangeTime && latestFile !== path.basename(__filename)) {
      previousChangeTime = latestFileChangeTime;
      previousLatestFile = latestFile;
      VTexec(`nodemon ${latestFilePath}`);
    }
    // boot = false;
  } catch (e) {
    console.log(e);
  }
}

// const main = () => {
//   let previousChangeTime = null;
//   const checkForUpdates = () => {
//     sleep(500)
//       .then(() => {
//         const { path: latestFilePath, time: latestFileChangeTime } = getLatestFile(__dirname);
//         const latestFile = path.basename(latestFilePath);

//         if (previousChangeTime !== latestFileChangeTime && latestFile !== path.basename(__filename)) {
//           previousChangeTime = latestFileChangeTime;
//           console.log(`Displaying file:`, fileStyle(`${latestFilePath}`));
//           exec(`node ${latestFilePath}`, (error, stdout, stderr) => {
//             if (error) {
//               console.log(`error: ${error.message}`);
//               return;
//             }
//             if (stderr) {
//               console.log(`stderr: ${stderr}`);
//               return;
//             }
//             console.log(`${stdout}`);
//           });
//         }
//         checkForUpdates();
//       })
//       .catch((error) => console.log(`error: ${error}`));
//   };
//   checkForUpdates();
//   // }
// };
