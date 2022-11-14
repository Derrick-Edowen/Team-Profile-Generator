const manager = managerPlate => {
    return `
    <div id= '${managerPlate.getRole()}'>
        <div class="card text-bg-warning mb-3 box" style="max-width: 80rem;">
        <div class="card-header">${managerPlate.getRole()}</div>
        <div class="card-body">
          <h5 class="card-title">${managerPlate.getName()}</h5>
        <li class="list-group-item">ID: ${managerPlate.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerPlate.getEmail()}">${managerPlate.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${managerPlate.getOffice()}</li>
        </div>
      </div>
    </div>`
}

const engineer = engineerPlate => {
    return `
    <div id='${engineerPlate.getRole()}'>
      <div class="card text-bg-primary mb-3 box" style="max-width: 80rem;">
        <div class="card-header">${engineerPlate.getRole()}</div>
        <div class="card-body">
          <h5 class="card-title">${engineerPlate.getName()}</h5>
        <li class="list-group-item">ID: ${engineerPlate.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineerPlate.getEmail()}">${engineerPlate.getEmail()}</a></li>
        <li class="list-group-item">Github: ${engineerPlate.getGit()}</li>
        </div>
      </div>
    </div>`
}

const intern = internPlate => {
    return `
    <div id='${internPlate.getRole()}'>
      <div class="card text-bg-danger mb-3 box" style="max-width: 80rem;">
        <div class="card-header">${internPlate.getRole()}</div>
        <div class="card-body">
          <h5 class="card-title">${internPlate.getName()}</h5>
        <li class="list-group-item">ID: ${internPlate.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${internPlate.getEmail()}">${internPlate.getEmail()}</a></li>
        <li class="list-group-item">School: ${internPlate.getSchool()}</li>
        </div>
        </div>
        </div>
    </div>`
}

const employ = employeeQuest => {
let teamPage = '';
for (i=0; i < employeeQuest.length; i++) {
    if (employeeQuest[i].getRole() === 'Manager'){
    teamPage = teamPage + manager(employeeQuest[i])
    }
    if (employeeQuest[i].getRole() === 'Intern'){
        teamPage = teamPage + intern(employeeQuest[i])
    }
    if (employeeQuest[i].getRole() === 'Engineer'){
        teamPage = teamPage + engineer(employeeQuest[i])
    }
} return teamPage
}

const template = info => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class = 'header'>
    <h1>My Team</h1>
    </header>
${employ(info)}
</body>
</html>`
}

module.exports = template;