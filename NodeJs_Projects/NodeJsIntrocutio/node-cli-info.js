// node-cli-info.js
const os = require('os');
const childProcess = require('child_process');
const process = require('process');

function getNodeVersion() {
  return process.version;
}

function getNodeHelp() {
  try {
    const output = childProcess.execSync('node --help', { encoding: 'utf8' });
    return output;
  } catch (error) {
    return 'Error: Unable to retrieve Node.js help information.';
  }
}

function getNpmVersion() {
  try {
    const output = childProcess.execSync('npm --version', { encoding: 'utf8' });
    return output.trim();
  } catch (error) {
    return 'Error: Unable to retrieve npm version.';
  }
}

function getNodePath() {
  return process.execPath;
}

function getNodeEnvironment() {
  return process.env.NODE_ENV;
}

function getNodeArguments() {
  return process.argv;
}

function getOperatingSystemInfo() {
  return {
    platform: os.platform(),
    release: os.release(),
    architecture: os.arch(),
    cpus: os.cpus(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };
}

function displayInfo() {
  console.log('Node.js CLI Information');
  console.log('------------------------');
  console.log(`Node.js Version: ${getNodeVersion()}`);
  console.log(`npm Version: ${getNpmVersion()}`);
  console.log(`Node.js Path: ${getNodePath()}`);
  console.log(`Node.js Environment: ${getNodeEnvironment()}`);
  console.log('Node.js Arguments:');
  console.log(getNodeArguments());
  console.log('Node.js Help:');
  console.log(getNodeHelp());
  console.log('------------------------');
  console.log('Operating System Information:');
  const osInfo = getOperatingSystemInfo();
  console.log(`  Platform: ${osInfo.platform}`);
  console.log(`  Release: ${osInfo.release}`);
  console.log(`  Architecture: ${osInfo.architecture}`);
  console.log(`  CPUs: ${osInfo.cpus.length} x ${osInfo.cpus[0].model}`);
  console.log(`  Total Memory: ${Math.round(osInfo.totalMemory / (1024 * 1024 * 1024))} GB`);
  console.log(`  Free Memory: ${Math.round(osInfo.freeMemory / (1024 * 1024 * 1024))} GB`);
}

displayInfo();