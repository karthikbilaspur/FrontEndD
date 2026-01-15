const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const readline = require('readline');

// Define the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt the user for input
function promptUser() {
  const questions = [
    { key: 'name', message: 'Package Name' },
    { key: 'version', message: 'Package Version' },
    { key: 'description', message: 'Package Description' },
    { key: 'author', message: 'Author Name' },
  ];

  let answers = {};

  function askQuestion(index) {
    if (index >= questions.length) {
      createPackageJson(answers);
      return;
    }

    const question = questions[index];
    rl.question(`${question.message}: `, (answer) => {
      answers[question.key] = answer.trim();
      askQuestion(index + 1);
    });
  }

  askQuestion(0);
}

// Function to create package.json
function createPackageJson(answers) {
  const packageJson = {
    name: answers.name,
    version: answers.version,
    description: answers.description,
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
    },
    author: answers.author,
    license: 'MIT',
  };

  // Write the package.json file
  fs.writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(packageJson, null, 2));

  // Run npm publish
  publishPackage();
}

// Function to publish the package
function publishPackage() {
  childProcess.exec('npm publish', (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(stdout);
    rl.close();
  });
}

// Start the prompt
promptUser();