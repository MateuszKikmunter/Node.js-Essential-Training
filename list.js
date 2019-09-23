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

//read file content
