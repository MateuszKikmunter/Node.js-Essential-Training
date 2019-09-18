process.stdout.write("hello ");
process.stdout.write("world \n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();
ask(1);
ask(2);