const inquirer = require("inquirer");
const util = require('util');
const fs = require("fs");
const pdf = require('html-pdf');
const axios = require('axios');


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?" 
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn Username"
    },
  ]);
}

function generateHTML(answers, profileUrl) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>GitHub Profile</title>
  </head>
  <body>
    <div class="container" style="max-width: 960px">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
        <div class="jumbotron jumbotron-fluid" style="background-color: ${answers.color}">
          <div class="container">
          <img src="https://avatars1.githubusercontent.com/u/53546340?v=4" alt="Profile Picture" style="border-radius: 50%">
            <h1 class="display-4">Hi!<br>My name is ${answers.name}!</h1>
              <a href="https://www.google.com/maps/place/${answers.location}><p class="lead fa fa-map-marker" style="font-size:24px">${answers.location}.</p></a>
              <a href="https://github.com/${answers.github}" style="font-size:24px"><p class="list-group-item fab fa-github">My GitHub username is ${answers.github}</p></a>
              <a href="https://www.linkedin.com/in/${answers.linkedin}" style="font-size:24px"><p class="list-group-item fas fa-blog">LinkedIn: ${answers.linkedin}</p></a>
          </div>
        </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
      <p class="middle">I work on making applications and websites, and I am a self-proclaimed Pokemon Master!</p>
      <div id="second">
      <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-3.5">
          <div class="card" style="background-color: ${answers.color}">Public Repositories: ${profileUrl.data.public_repos}</div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-3.5">
          <div class="card" style="background-color: ${answers.color}">Followers: ${profileUrl.data.followers}</div>
          </div>
          <div class="col-lg-2"></div>
        </div>
          <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-3.5">
          <div class="card" style="background-color: ${answers.color}">Github Stars: ${starred.data.stargazers_count}</div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-3.5">
          <div class="card" style="background-color: ${answers.color}">Following: ${profileUrl.data.following}</div>
          </div>
          <div class="col-lg-2"></div>
        </div>
        </div>
    </div>
  </body>
  </html>`;
}

async function init() {
  try {
   
    const answers = await promptUser();
    const profileUrl = await axios.get("https://api.github.com/users/" + answer.github);
  
      const html = generateHTML(answers, profileUrl);
  
      await writeFileAsync("index.html", html);
  
      var readHtml = fs.readFileSync('index.html', 'utf8');
      var options = { format: 'Letter',
                      height: "960px",
                      width: "960px"};
       
      pdf.create(readHtml, options).toFile('test.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); 
      });
  
      console.log("Successfully wrote to index.html");
    } catch (err) {
      console.log(err);
    }
  }
  
  init();