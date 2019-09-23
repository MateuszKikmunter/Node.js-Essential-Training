const fs = require("fs");

//read folder contents synchronously
const files = fs.readdirSync("./assets");
console.log(files);

//read folder contents async
fs.readdir("./assets", (err, files) => {
    if(err) {
        throw err;
    }

    console.log("complete");
    console.log(files);
});

//read file contents synchronously
const text = fs.readFileSync("./assets/colors.json", "UTF-8");
console.log(text);

//read file contents async
fs.readFile("./assets/colors.json", "UTF-8", (err, text) => {
    if(err) {
        throw err;
    }

    console.log("complete reading file");
    console.log(text);
});

//read binary file contents async
fs.readFile("./assets/matt.png", (err, text) => {
    if(err) {
        throw err;
    }

    console.log("complete reading binary file");
    console.log(text);
});