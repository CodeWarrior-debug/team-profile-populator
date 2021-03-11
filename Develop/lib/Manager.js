// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


const Employee = require("./Employee");

class Manager extends Employee{

    // Just like constructor functions, classes can accept arguments
    constructor(name,id,email,office_no) {
        super(name,id,email)
        this.office_no=office_no;
    }
    
    getOfficeNumber(){return this.office_no};
    getRole(){return 'Manager'};
}

module.exports=Manager;
