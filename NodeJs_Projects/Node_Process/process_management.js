const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        processManagement: `
            // Import required modules
            require('dotenv').config();
            const { exec, spawn } = require('child_process');
            const os = require('os');
            const process = require('process');

            // Process Management
            console.log('Process Management');

            // Start message
            console.log('Application started');

            // Handle SIGINT event
            process.on('SIGINT', () => {
                console.log('Received SIGINT. Stopping application...');
                process.exit(0);
            });

            // Handle SIGTERM event
            process.on('SIGTERM', () => {
                console.log('Received SIGTERM. Stopping application...');
                process.exit(0);
            });

            // Handle uncaught exceptions
            process.on('uncaughtException', (err, origin) => {
                console.error('Uncaught exception:', err, origin);
                process.exit(1);
            });
        `,
        environmentVariables: `
            // Environment Variables
            console.log('\nEnvironment Variables');
            console.log('NODE_ENV:', process.env.NODE_ENV);
        `,
        childProcesses: `
            // Child Processes
            console.log('\nChild Processes');
            exec('ls -l', (err, stdout, stderr) => {
                if (err) {
                    console.error('Error:', err);
                } else {
                    console.log(stdout);
                }
            });

            const child = spawn('node', ['-v']);
            child.stdout.on('data', (data) => {
                console.log('Node.js version:', data.toString());
            });
        `,
        monitoringPerformance: `
            // Monitoring and Performance
            console.log('\nMonitoring and Performance');
            console.log('Memory usage:', process.memoryUsage());
            console.log('CPU usage:', os.cpus());
        `,
    };

    res.render('index', data);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});