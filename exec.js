const cp = require("child_process");

cp.exec("dir", (err, data, stderr) => {
    if(err) {
        throw err;
    }

    console.log(data);
});