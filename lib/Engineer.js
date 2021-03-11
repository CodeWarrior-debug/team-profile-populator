// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class

const Employee = require("./Employee");

class Engineer extends Employee{

    // Just like constructor functions, classes can accept arguments
    constructor(name,id,email,github) {
        super(name,id,email)
        this.github=github;
    }
    getName(){return this.name;}
    getGithub(){return this.github;}
    getRole(){return 'Engineer';}
}

module.exports=Engineer;
