const  Engineer = require('../lib/Employee');

test('Creates a new engineer', () => {
    const employee = new Engineer('Randy Savage', 789, 'randy@savage.com', 'randysav');
    expect(employee.name).toBe('Randy Savage');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
    expect(employee.github).toEqual(expect.any(String));
})

test('Method check for engineer class', () => {
const employee = new Engineer('Randy Savage', 789, 'randy@savage.com', 'randysav');
expect(employee.getName()).toBe(employee.name);
expect(employee.getId()).toBe(employee.id);
expect(employee.getEmail()).toBe(employee.email);
expect(employee.getGit()).toBe(employee.github);
expect(employee.getRole()).toBe('Engineer');
})