const path = require('path');
const { spawn } = require('child_process');

// Get the directory and filename from command-line arguments
const [directory, filename] = process.argv.slice(2);

// Construct the file path
const filePath = path.join('dist', directory, `${filename}.js`);

// Spawn a new child process to execute the JavaScript file
const childProcess = spawn('node', [filePath]);

// Forward the child process's stdout and stderr to the parent process
childProcess.stdout.pipe(process.stdout);
childProcess.stderr.pipe(process.stderr);