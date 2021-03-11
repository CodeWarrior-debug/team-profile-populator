// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const instEE=new Employee();
    expect(typeof(instEE)).toBe('object')
});

test("Can set name via constructor arguments", () => {
    const instEE=new Employee('james');
    expect(instEE.name).toEqual('james');
});

test("Can set id via constructor argument", () => {
    const instEE=new Employee('james','01');
    expect(instEE.id).toEqual('01');
});

test("Can set email via constructor argument", () => {
    const instEE=new Employee('james','01','jpjordan1987@gmail.com');
    expect(instEE.email).toEqual('jpjordan1987@gmail.com');
});

test("Can get name via getName()", () => {
    const instEE=new Employee('james','01','jpjordan1987@gmail.com');
    expect(instEE.getName()).toEqual('james');
});

// test("Can get id via getId()", () => {
    
// });

// test("Can get email via getEmail()", () => {

// });

// test("getRole() should return \"Employee\"", () => {

// });
