const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/color-data.json");

//move file by changing its path
fs.rename("./assets/notes.md", "./storage-files/notes.md", error => {
    if (error) {
        throw error;
    }
});