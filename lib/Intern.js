const Employee = require('./Employee');

const intQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the Intern's school?"
    }
]
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}
module.exports = { Intern, intQuestions};