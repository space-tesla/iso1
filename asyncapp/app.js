const fs = require('fs').promises;

async function readFiles() {
  try {
    const file1 = await fs.readFile('./data/file1.txt', 'utf-8');
    const file2 = await fs.readFile('./data/file2.txt', 'utf-8');
    const file3 = await fs.readFile('./data/file3.txt', 'utf-8');

    console.log("File 1:", file1);
    console.log("File 2:", file2);
    console.log("File 3:", file3);
    
  } catch (err) {
    console.log("Error Reading Files:", err);
  }
}

readFiles();



// HOW TO RUN THIS PROGRAM:

// Step 1: First run these commands in terminal (if not already done)
// npm install express
// npm init -y
// npm install

// Step 2: Run the program
// node app.js