
module.exports = class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email=email;
      this.getName()=function(){return this.name};
      this.getId()=function(){return this.id};
      this.getEmail()=function(){return this.email};
      this.getRole()=function(){return 'Employee'};
    }
}


