// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const instMgr=new Manager('james','01','xsl@gmail.com','4');
    expect(instMgr.office_no).toEqual('4');
});

test('getRole() should return "Manager"', () => {
    const instMgr=new Manager('james','01','xsl@gmail.com','4');
    expect(instMgr.getRole()).toEqual('Manager');
});

test("Can get office number via getOffice()", () => {
    const instMgr=new Manager('james','01','xsl@gmail.com','4');
    expect(instMgr.getOffice()).toEqual('4');
});
