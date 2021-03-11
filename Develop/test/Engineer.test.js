// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const instEgr=new Engineer('james','01','xsl@gmail.com','code-war');
    expect(instEgr.github).toEqual('code-war');
});

test("getRole() should return \"Engineer\"", () => {
    const instEgr=new Engineer('james','01','xsl@gmail.com','code-war');
    expect(instEgr.getRole()).toEqual('Engineer');
});

test("Can get GitHub username via getGithub()", () => {
    const instEgr=new Engineer('james','01','xsl@gmail.com','code-war');
    expect(instEgr.getGithub()).toEqual('code-war');
});
