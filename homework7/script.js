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
  ])
  .then(
    function getData (answers) {
      const queryUrl = `https://api.github.com/users/${answers.github}`;
      const starsUrl = `https://api.github.com/users/${answers.github}/starred?`;
      res = axios.get(queryUrl).then(function (res) {
      stars = axios.get(starsUrl).then(function (stars) {

      return  writeFileAsync("index.html",

  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Calistoga&display=swap" rel="stylesheet">
    <script src="https://use.fontawesome.com/6360c5bb77.js"></script>
    <style>
    img {
      position: relative;
      left: 40%;
      max-height: 800px;
      max-width: 800px;
      border-radius: 50%;
      border: 1px solid black;
  }
  
  h1 {
      text-align: center;
      font-family: 'Calistoga', cursive;
  }
  
  p {
      text-align: right;
      font-family: 'Calistoga', cursive;
  }
  
  .middle{
      text-align: center;
      font-size: large;
      font-weight: bold;
      padding: 20px;
      margin: 5px;
      font-family: 'Calistoga', cursive;
  }
  
  #second {
      background-color:#d3d3d3;
  }

  #following {
    position: relative;
    left: 35%;
  }
  </style>
    <title>GitHub Profile</title>
  </head>
  <body>
    <div class="container" style="max-width: 960px">
      <div class="row">
        <div></div>
        <div>
        <div class="jumbotron jumbotron-fluid" style="background-color: ${answers.color}">
          <div class="container">
          <img src="https://avatars1.githubusercontent.com/u/53546340?v=4" alt="Profile Picture" style="border-radius: 50%">
            <h1 class="display-4">Hi!<br>My name is ${answers.name}!</h1>
              <a href="https://www.google.com/maps/place/${answers.location}"><p class="lead" style="font-size:24px"><i class="fas fa-search-location"></i> ${answers.location}.</p></a>
              <a href="https://github.com/${answers.github}" style="font-size:24px"><p class="list-group-item">My GitHub username is <i class="fab fa-github"></i> ${answers.github}</p></a>
              <a href="https://www.linkedin.com/in/${answers.linkedin}" style="font-size:24px"><p class="list-group-item">LinkedIn: <i class="fab fa-linkedin"></i> ${answers.linkedin}</p></a>
          </div>
        </div>
        </div>
        <div></div>
      </div>
      <p class="middle">I work on making applications and websites, and I am a swell person!</p>
      <div id="second">
      <div class="row">
          <div></div>
          <div>
          <div class="card w-100 h-100 middle" style="background-color: ${answers.color}">Public Repositories: ${res.data.public_repos}</div>
          </div>
          <div></div>
          <div>
          <div class="card w-100 h-100 middle" style="background-color: ${answers.color}">Followers: ${res.data.followers}</div>
          </div>
          <div></div>
        </div>
          <div class="row">
          <div></div>
          <div>
          <div class="card w-100 h-100 middle" style="background-color: ${answers.color}">Github Stars: ${stars.data.length}</div>
          </div>
          <div></div>
          <div>
          <div class="card w-100 h-100 middle" id="following" style="background-color: ${answers.color}">Following: ${res.data.following}</div>
          </div>
          <div></div>
        </div>
        </div>
    </div>
  </body>
  </html>`
)
})
})
})}

async function init() {
  try {
   
 await promptUser();

      var readHtml = fs.readFileSync('index.html', 'utf8');
      var options = { format: 'Letter',
                      height: "2000px",
                      width: "2000px"};
       
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
