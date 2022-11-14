const  Intern = require('../lib/Employee');

test('Creates a new intern', () => {
    const employee = new Intern('Randy Savage', 789, 'randy@savage.com', 'York');
    expect(employee.name).toBe('Randy Savage');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
    expect(employee.school).toEqual(expect.any(String));
})

test('Method check for intern class', () => {
const employee = new Intern('Randy Savage', 789, 'randy@savage.com', 'York');
expect(employee.getName()).toBe(employee.name);
expect(employee.getId()).toBe(employee.id);
expect(employee.getEmail()).toBe(employee.email);
expect(employee.getSchool()).toBe(employee.school);
expect(employee.getRole()).toBe('Intern');
})