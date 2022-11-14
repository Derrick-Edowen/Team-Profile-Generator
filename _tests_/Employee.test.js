const Employee = require('../lib/Employee');

test('Creates a new employee', () => {
    const employee = new Employee('Randy Savage', 789, 'randy@savage.com');
    expect(employee.name).toBe('Randy Savage');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
})

test('Method check for Employee class', () => {
const employee = new Employee('Randy Savage', 789, 'randy@savage.com');
expect(employee.getName()).toBe(employee.name);
expect(employee.getId()).toBe(employee.id);
expect(employee.getEmail()).toBe(employee.email);
expect(employee.getRole()).toBe('Employee');
})