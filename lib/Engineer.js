const Employee = require('./Employee');

const engQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's github username?"
    }
]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGit() {
        return this.github;
    }
}
module.exports = { Engineer, engQuestions};