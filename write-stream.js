const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/lorem-ipsum.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/colors.json", "UTF-8");

//copy file contents to another one
readStream.on("data", data => {
    writeStream.write(data);
});

//write to file on data event
process.stdin.on("data", data => {
    writeStream.write(data);
});