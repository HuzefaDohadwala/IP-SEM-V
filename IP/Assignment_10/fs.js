const fs = require('fs');

// File paths
const file1Path = 'file1.txt';
const file2Path = 'file2.txt';

// Function to create file1 (A)
fs.writeFile(file1Path, 'This is file 1 content', (err) => {
  if (err) {
    console.error('Error creating file 1:', err);
  } else {
    console.log('File 1 created successfully.');

    // Function to read data from file2 (B)
    fs.readFile(file2Path, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file 2:', err);
      } else {
        console.log('File 2 content:', data);

        // Function to write data to file2 (C)
        const newData = 'This is the updated content for file 2.';
        fs.writeFile(file2Path, newData, (err) => {
          if (err) {
            console.error('Error writing to file 2:', err);
          } else {
            console.log('File 2 updated successfully.');

            // Function to rename file2 (D)
            const newFilePath = 'file2-updated.txt';
            fs.rename(file2Path, newFilePath, (err) => {
              if (err) {
                console.error('Error renaming file 2:', err);
              } else {
                console.log('File 2 renamed to file2-updated.txt.');

                // Function to delete file1 (E)
                fs.unlink(file1Path, (err) => {
                  if (err) {
                    console.error('Error deleting file 1:', err);
                  } else {
                    console.log('File 1 deleted successfully.');

                    // Read updated data from file2
                    fs.readFile(newFilePath, 'utf8', (err, updatedData) => {
                      if (err) {
                        console.error('Error reading updated file 2:', err);
                      } else {
                        console.log('Updated File 2 content:', updatedData);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
