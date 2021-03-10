const fs=require('fs');
const eeClasses=require('../lib/classes')

generateHTMLStart(mgrEE)
{
    fs.writeFileSync(
    '../index.html',                        //file to write to
                                            //what to write, using template literals
    `
    <!DOCTYPE html>                         
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./dist/style.css" />
    </head>

    <body>

    <header class='jumbotron center row'>
        <h1>The Team </h1>
    </header>

    <div class='card'>
        <div class='row' style='width: 18rem;'>
            <div class='card-body'>
                <h2 class='ee-name card-title'>${mgrEE.name}</h2>
                <div class='card-subtitle'>
                    <img class='role-pic' src='Assets\img\manager.png' alt=''>
                    <h4 class="mb-2 text-muted role-name">${mgrEE.getRole()}</h4>
                </div>
                <p class='ee-id'>ID: 1</p>
                <p class='ee-email'>Email: <a href="${mgrEE.getEmail()}">${mgrEE.getEmail()}</a></p>
                <p class='ee-mgr-office#'>${mgrEE.getRole()}</p>
                <p class='ee-engnr-github#'></p>
                <p class='ee-intrn-school'></p>
            </div>
        </div>
    </div>
        
        
        `
    )
}

module.exports=generateHTMLStart;
