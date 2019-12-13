var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Feel Good Inc"
});

let allEmployees = []

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View all Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Done",

      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          allEmployeeSearch();
          break;

        case "View All Employees by Department":
          employeeByDeptSearch();
          break;

        case "View all Employees by Manager":
          employeeByMgrSearch();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          changeEmployeeRole();
          break;

        case "Update Employee Manager":
          changeEmployeeMgr();
          break;

        case "Done":
          done();
          break;

      }
    });
}
function allEmployeeSearch() {
  connection.query("SELECT * FROM employees", function (err, result) {
    if (err) throw err;
    allEmployees = result
    console.table(allEmployees)
  });
  runSearch();
}
function employeeByDeptSearch() {
  inquirer.prompt({
    name: "department",
    type: "rawlist",
    message: "What Department do you want to see?",
    choices: [
      "Sales",
      "Engineering",
      "Finance",
      "Legal",
    ]
  })
    .then(function (answer) {
      connection.query('SELECT `firstName, lastName` FROM `employees` WHERE `department` = ?', [answer], function (error, results) {
        if (error) throw error;
        console.table(results)
      })
      });
      runSearch();
    };
 
  function employeeByMgrSearch() {
    inquirer.prompt({
      name: "manager",
      type: "rawlist",
      message: "Select a Manager to see their direct reports?",
      choices: [
        "Chad Johnson",
        "Jessica Mathias",
        "Elfriede Benkert",
        "Omar Hassan",
      ]
    })
      .then(function (answer) {
        connection.query('SELECT `firstName, lastName` FROM `employees` WHERE `manager` = ?', [answer], function (error, results) {
          if (error) throw error;
          console.log(results)
        })
      });
      runSearch();
    };


function addEmployee() {
        inquirer
          .prompt({
            name: "firstName",
            type: "input",
            message: "What is the Employee's first name?",

            name: "lastName",
            type: "input",
            message: "What is the Employee's last name?",

            name: "title",
            type: "input",
            message: "What is the Employee's title?",

            name: "department",
            type: "rawlist",
            message: "What Department will they work in?",
            choices: [
              "Sales",
              "Engineering",
              "Finance",
              "Legal",
            ],
        
            name: "salary",
            type: "input",
            message: "What is the Employee's salary?",

            name: "manager",
            type: "rawlist",
            message: "Who will be their manager?",
            choices: [
              "Chad Johnson",
              "Jessica Mathias",
              "Elfriede Benkert",
              "Omar Hassan",
            ]
       })
          .then(function (answer) {
            connection.query('INSERT INTO `Fake_Inc` (firstName,lastName,title,department,salary,manager) VAlUES(?)', [answer], function (error, results) {
              if (error) throw error;
              console.log(results)
            })
          });
          runSearch();
        };

        runSearch();