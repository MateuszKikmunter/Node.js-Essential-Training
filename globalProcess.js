console.log(process.pid);
console.log(process.versions.node);

console.log(process.argv);

//type node your file name your first name and last name to get results, e.g. node globalProcess Mateusz Kikmunter in my case
const [, , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);