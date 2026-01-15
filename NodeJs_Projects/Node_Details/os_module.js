// Import the OS module, which provides utilities for interacting with the operating system
const os = require('os');
// Import the path module, which provides utilities for working with file paths
const path = require('path');

// System Information
// This section retrieves and logs various system information, such as the platform, type, release, architecture, and hostname
console.log('System Information:');
console.log(`- Platform: ${os.platform()}`); // Returns the operating system platform (e.g. 'darwin', 'win32', 'linux')
console.log(`- Type: ${os.type()}`); // Returns the operating system name (e.g. 'Linux', 'Darwin', 'Windows_NT')
console.log(`- Release: ${os.release()}`); // Returns the operating system release number
console.log(`- Architecture: ${os.arch()}`); // Returns the CPU architecture (e.g. 'x64', 'arm', 'arm64')
console.log(`- Hostname: ${os.hostname()}`); // Returns the hostname of the operating system

// Memory Information
// This section retrieves and logs the total and free system memory
console.log('\nMemory Information:');
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2); // Convert total memory from bytes to GB
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2); // Convert free memory from bytes to GB
console.log(`- Total Memory: ${totalMemGB} GB`);
console.log(`- Free Memory: ${freeMemGB} GB`);

// CPU Information
// This section retrieves and logs information about the CPU, including the number of cores and model
console.log('\nCPU Information:');
const cpus = os.cpus(); // Returns an array of objects containing information about each logical CPU core
console.log(`- Number of Cores: ${cpus.length}`);
cpus.forEach((cpu, index) => {
  console.log(`- Core ${index + 1}: ${cpu.model} (${cpu.speed} MHz)`); // Logs the model and speed of each CPU core
});

// User Information
// This section retrieves and logs information about the current user, including the username and home directory
console.log('\nUser Information:');
const userInfo = os.userInfo(); // Returns an object containing information about the current user
console.log(`- Username: ${userInfo.username}`);
console.log(`- Home Directory: ${os.homedir()}`); // Returns the home directory of the current user

// Network Information
// This section retrieves and logs information about the network interfaces, including the interface name and address
console.log('\nNetwork Information:');
const networkInterfaces = os.networkInterfaces(); // Returns an object containing network interfaces that have been assigned a network address
Object.entries(networkInterfaces).forEach(([name, addresses]) => {
  console.log(`- Interface: ${name}`);
  addresses.forEach((address) => {
    console.log(`  - Address: ${address.address}`);
  });
});

// Best Practices
// This section demonstrates best practices for working with file paths, including using path.join() to ensure cross-platform compatibility
console.log('\nBest Practices:');
const filePath = path.join(os.homedir(), 'app', 'config.json'); // Uses path.join() to create a file path
console.log(`- Use path.join() for file paths: ${filePath}`);

// Practical Examples
// This section provides a practical example of how to use the OS module to retrieve system information
console.log('\nPractical Examples:');
function getSystemInfo() {
  // Create an object to store system information
  const info = {
    os: {
      type: os.type(),
      platform: os.platform(),
      architecture: os.arch(),
      release: os.release(),
      hostname: os.hostname(),
    },
    user: {
      username: os.userInfo().username,
      homedir: os.homedir(),
    },
    memory: {
      total: `${totalMemGB} GB`,
      free: `${freeMemGB} GB`,
    },
    cpu: {
      model: cpus[0].model,
      cores: cpus.length,
      speed: `${cpus[0].speed} MHz`,
    },
  };
  return info;
}

const systemInfo = getSystemInfo(); // Call the getSystemInfo() function to retrieve system information
console.log('System Information:');
console.log(JSON.stringify(systemInfo, null, 2)); // Log the system information in JSON format