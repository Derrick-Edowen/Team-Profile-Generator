const inquirer = require('inquirer')
const writeFile = require('./src/file')
const template =  require('./src/template')


const {Manager, manQuestions} = require('./lib/Manager');
const {Engineer, engQuestions} = require('./lib/Engineer');
const {Intern, intQuestions} = require('./lib/Intern');

const employeeQuest = []

const start = () => managerQuest()

const managerQuest = () => {
    inquirer.prompt(manQuestions)
    .then((answers) => {
        answers = new Manager(answers.name,  answers.id, answers.email, answers.office)
        employeeQuest.push(answers);
        return employeeRespond();
    })
}
const engineerQuest = () => {
    inquirer.prompt(engQuestions)
    .then((answers) => {
        answers = new Engineer(answers.name,  answers.id, answers.email, answers.github)
        employeeQuest.push(answers);
        return employeeRespond();
    })
}
const internQuest = () => {
    inquirer.prompt(intQuestions)
    .then((answers) => {
        answers = new Intern(answers.name,  answers.id, answers.email, answers.school)
        employeeQuest.push(answers);
        return employeeRespond();
    })
}


const employeeRespond = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employee',
        message: 'What type of team member would you like to add to the team?',
        choices: [
            {name: 'Engineer', value: 'Engineer'},
            {name: 'Intern', value: 'Intern'},
            {name: 'Complete', value: 'Complete'}
        ]
    }])
    .then (answer => {
        if (answer.employee === 'Engineer'){
            engineerQuest()
        }
        if (answer.employee === 'Intern'){
            internQuest()
        }
        if (answer.employee === 'Complete'){
            let teamProfiles = template(employeeQuest)
            writeFile(teamProfiles);
        }
    })
}





start();