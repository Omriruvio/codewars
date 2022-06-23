const { exec } = require('child_process');
const path = require('path');
const { getLatestFile } = require('./getallfiles');
const chalk = require('chalk');
const fileStyle = chalk.magenta.bold.underline;

const config = {
  searchDirectory: __dirname,
  trackedExtensions: ['.js', '.ts'],
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Awake'), ms);
  });
}

const main = () => {
  const { searchDirectory, trackedExtensions } = config;
  let previousChangeTime = null;
  const checkForUpdates = () => {
    sleep(500)
      .then(() => {
        const { path: latestFilePath, time: latestFileChangeTime } = getLatestFile(searchDirectory, trackedExtensions);
        const latestFile = path.basename(latestFilePath);

        if (previousChangeTime !== latestFileChangeTime && latestFile !== path.basename(__filename)) {
          previousChangeTime = latestFileChangeTime;
          console.log(`Displaying file:`, fileStyle(`${latestFilePath}`));
          exec(`node ${latestFilePath}`, (error, stdout, stderr) => {
            if (error) {
              console.log(`error: ${error.message}`);
              return;
            }
            if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
            }
            console.log(`${stdout}`);
          });
        }
        checkForUpdates();
      })
      .catch((error) => console.log(`error: ${error}`));
  };
  checkForUpdates();
  // }
};
main();
