const fs = require("fs");
const path = "./storage-files";
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(color => {

    if(!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }

    fs.appendFile(`${path}/colors.md`, `${color.name}: ${color.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});

fs.readFile(`${path}/colors.md`, "UTF-8", (err, text) => {
    if (err) {
        throw err;
    }

    console.log("file read complete");
    console.log(text);
});