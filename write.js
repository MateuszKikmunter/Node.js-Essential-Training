const fs = require("fs");

const md = `
    #This is a new file.

    We can write text to a file with fs.writeFile.

    Other useful fs methods are:

    * fs.readDir
    * fs.readFile
    * fs.writeFile
`;

const trowError = err => {
    if (err) {
        throw err;
    }
};

fs.writeFile("./assets/notes.md", md.trim(), err => {
    trowError(err);
    console.log("file saved");
});

fs.readFile("./assets/notes.md", "UTF-8", (err, text) => {
    trowError(err);
    console.log("file reading completed");
    console.log(text);
});