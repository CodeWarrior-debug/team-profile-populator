// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const instIntrn=new Intern('james','01','xsl@gmail.com','GCC');
    expect(instIntrn.school).toEqual('GCC');
});

test("getRole() should return \"Intern\"", () => {
    const instIntrn=new Intern('james','01','xsl@gmail.com','GCC');
    expect(instIntrn.getRole()).toEqual('Intern');
});

test("Can get school via getSchool()", () => {
    const instIntrn=new Intern('james','01','xsl@gmail.com','GCC');
    expect(instIntrn.getSchool()).toEqual('GCC');
});
