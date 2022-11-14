const Employee = require('./Employee');

const manQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email?"
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the Manager's office number?"
    }
]
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getRole() {
        return 'Manager';
    }
    getOffice() {
        return this.office;
    }
}
module.exports = { Manager, manQuestions};