// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function init(){

    inquirer
        .prompt([

            {               // Initial set of questions regarding manager
                type:'input',
                message: 'On this team, what is the name of the manager?',
                name:'mgr_name'
            },
            {
                type:'input',
                message: 'What is the employee ID of the manager?',
                name:'mgr_id'
            },
            {
                type:'input',
                message: 'On this team, what is the email address of the manager?',
                name:'mgr_email'
            },
            {
                type:'input',
                message: 'On this team, what is the office number of the manager?',
                name:'mgr_office_no'
            }])
        .then((ans) => {
            new Manager(ans.mgr_name, ans.mgr_id, ans.mgr_email, ans.mgr_office_no);
            menuDirect();
        });

        
}

init();

function menuDirect(){              //lets user choose to proceed and pick a type of employee, or end.

    inquirer
        .prompt({
                type:'rawlist',
                choices:['Add Engineer','Add Intern','Finalize Team'],
                name:'menuChoice'
            })
        .then((answers) => {

            if (answers === 'Finalize Team') {return};

            if (answers === 'Add Engineer') {
                addEngineer();
                return;};

            if (answers === 'Add Intern') {
                addIntern()}
        })}

        function addEngineer(){

            inquirer
                .prompt([
        
                    {               // Initial set of questions regarding manager
                        type:'input',
                        message: 'On this team, what is the name of this engineer?',
                        name:'name'
                    },
                    {
                        type:'input',
                        message: 'What is the employee ID of the manager?',
                        name:'id'
                    },
                    {
                        type:'input',
                        message: 'On this team, what is the email address of the manager?',
                        name:'email'
                    },
                    {
                        type:'input',
                        message: 'On this team, what is the office number of the manager?',
                        name:'office_no'
                    }])
                .then((ans) => {
                    new Manager(ans.name, ans.id, ans.email, ans.office_no);
                    menuDirect();
                });
        
                
        }

        function addIntern(){

            inquirer
                .prompt([
        
                    {               // Initial set of questions regarding manager
                        type:'input',
                        message: 'On this team, what is the name of the manager?',
                        name:'name'
                    },
                    {
                        type:'input',
                        message: 'What is the employee ID of the manager?',
                        name:'id'
                    },
                    {
                        type:'input',
                        message: 'On this team, what is the email address of the manager?',
                        name:'email'
                    },
                    {
                        type:'input',
                        message: 'On this team, what is the office number of the manager?',
                        name:'office_no'
                    }])
                .then((ans) => {
                    new Manager(ans.name, ans.id, ans.email, ans.office_no);
                    menuDirect();
                });
        
                
        }
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
