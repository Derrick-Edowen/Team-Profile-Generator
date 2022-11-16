const  { Manager } = require('../lib/Manager');

test('Creates a new manager', () => {
    const employee = new Manager('Randy Savage', 789, 'randy@savage.com', 1234567890);
    expect(employee.name).toBe('Randy Savage');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
    expect(employee.office).toEqual(expect.any(Number));
})

test('Method check for manager class', () => {
const employee = new Manager('Randy Savage', 789, 'randy@savage.com', 1234567890);
expect(employee.getName()).toBe(employee.name);
expect(employee.getId()).toBe(employee.id);
expect(employee.getEmail()).toBe(employee.email);
expect(employee.getOffice()).toBe(employee.office);
expect(employee.getRole()).toBe('Manager');
})