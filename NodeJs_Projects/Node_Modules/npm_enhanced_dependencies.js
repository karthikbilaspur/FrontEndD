// npm-dependencies-guide.js
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Define the HTML content
const htmlContent = (title, cssLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>${title}</title>
  <link rel="stylesheet" href="${cssLink}">
</head>
<body>
  <h1>${title}</h1>

  <h2>What are Dependencies?</h2>
  <p>Dependencies in npm are packages that your project relies on to function. There are two main types: dependencies and devDependencies.</p>

  <h3>Types of Dependencies:</h3>
  <ul>
    <li><strong>Dependencies</strong>: These are packages required by your application in production, like Express or Axios.</li>
    <li><strong>DevDependencies</strong>: These are packages needed only during development, like testing frameworks (Jest, Mocha) or build tools (Webpack, Babel).</li>
  </ul>

  <h2>Using Dependencies in Command Line</h2>
  <ul>
    <li>Install a package: <code>npm install &lt;package-name&gt;</code></li>
    <li>Install a package as a dependency: <code>npm install &lt;package-name&gt; --save</code></li>
    <li>Install a package as a devDependency: <code>npm install &lt;package-name&gt; --save-dev</code> or <code>npm install &lt;package-name&gt; -D</code></li>
    <li>Install all dependencies: <code>npm install</code></li>
    <li>Install only devDependencies: <code>npm install --only=dev</code></li>
  </ul>

  <h2>package.json File</h2>
  <p>Your dependencies and devDependencies are listed in the <code>package.json</code> file. You can also manually edit this file to add or remove dependencies.</p>

  <h2>Some Useful Commands</h2>
  <ul>
    <li><code>npm list --dev</code>: List all devDependencies</li>
    <li><code>npm uninstall &lt;package-name&gt; --save-dev</code>: Remove a devDependency</li>
    <li><code>npm update --save-dev</code>: Update devDependencies</li>
  </ul>

  <h2>Caching and Reinstalling</h2>
  <h3>Caching Dependencies</h3>
  <p>npm caches packages to speed up installations. You can clean the cache using:</p>
  <ul>
    <li><code>npm cache clean --force</code></li>
  </ul>

  <h3>Reinstalling Dependencies</h3>
  <p>To reinstall dependencies, you can delete the <code>node_modules</code> directory and run <code>npm install</code>:</p>
  <ul>
    <li><code>rm -rf node_modules</code></li>
    <li><code>npm install</code></li>
  </ul>
  <p>Alternatively, use <code>npm ci</code> for a clean install:</p>
  <ul>
    <li><code>npm ci</code></li>
  </ul>

  <h2>Other Useful Commands</h2>
  <ul>
    <li>Install a specific package: <code>npm install &lt;package-name&gt;</code></li>
    <li>Install a package globally: <code>npm install -g &lt;package-name&gt;</code></li>
    <li>Update dependencies: <code>npm update</code></li>
    <li>Audit dependencies: <code>npm audit</code></li>
  </ul>

  <h2>Managing package-lock.json</h2>
  <p>The <code>package-lock.json</code> file ensures consistent installations across environments. If discrepancies occur, regenerate it using:</p>
  <ul>
    <li><code>npm install</code></li>
  </ul>
  <p>Then, commit the updated file to your repository.</p>
</body>
</html>
`;

// Define the default options
const defaultOptions = {
  title: 'npm Dependencies Guide',
  cssLink: 'https://cdn.jsdelivr.net/npm/water.css@2/dist/dark.min.css',
  outputFile: 'npm-dependencies-guide.html',
};

// Define the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt the user for input
function promptUser() {
  console.log('Enter the following details:');
  rl.question(`Title (${defaultOptions.title}): `, (title) => {
    rl.question(`CSS Link (${defaultOptions.cssLink}): `, (cssLink) => {
      rl.question(`Output File (${defaultOptions.outputFile}): `, (outputFile) => {
        const options = {
          title: title.trim() || defaultOptions.title,
          cssLink: cssLink.trim() || defaultOptions.cssLink,
          outputFile: outputFile.trim() || defaultOptions.outputFile,
        };

        // Generate the HTML content
        const content = htmlContent(options.title, options.cssLink);

        // Write the HTML content to the output file
        fs.writeFile(path.join(__dirname, options.outputFile), content, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`${options.outputFile} file generated successfully!`);
          rl.close();
        });
      });
    });
  });
}

// Start the prompt
promptUser();