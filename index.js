// Including packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/classes");
const generateHTMLStart = require("./src/generateHTML.js");


        //**************************ADD FILES TO REQUIRE/CONNECT*/

function init(){

    inquirer
        .prompt(
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
                name:'mgr_office#'
            })
        // .then(const actEE = new Employee(ans.mgr_name,ans.mgr_id,ans.mgr_email))
        .then(populateHTMLMgr(ans))
}

function populateHTMLMgr(initAns){   //starts the new file w/ Write File - other will use *******APPEND*******

    fs.writeFile('Team-Page.html',generateHTMLStart(initAns),function (err) {
        if (err) return console.log(err);
    })

    menuDirect();
}

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

init();