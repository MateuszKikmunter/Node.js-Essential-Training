const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/color-data.json");

//move file by changing its path
fs.rename("./assets/notes.md", "./storage-files/notes.md", error => {
    if (error) {
        throw error;
    }
});

//rename and delete folders
fs.renameSync("./assets", "./storage");

//remove existing files first, then remove folder
fs.readdirSync("./storage").forEach(fileName => fs.unlinkSync(`./storage/${fileName}`));

fs.rmdir("./storage", error => {
    if (error) {
        throw error;
    }
});