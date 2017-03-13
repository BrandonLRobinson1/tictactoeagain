console.log('connected');

// chalk – colorizes the output
// clear – clears the terminal screen
// clui – draws command line tables, gauges and spinners
// figlet – creates ASCII art from text
// inquirer – creates interactive command line user interface
// minimist – parses argument options
// preferences – manage CLI application encrypted preferences
// Additionally, we’ll also be using the following:
// github – Node wrapper for the GitHub API
// lodash – JavaScript utility library
// simple-git – runs Git commands in a Node.js application
// touch – implementation of the *Nix touch command

let inquirer    = require('inquirer');
let chalk       = require('chalk');
let clear       = require('clear');
let clui        = require('clui');
let figlet      = require('figlet');
let Preferences = require('preferences');
let CLI         = require('clui');
let Spinner     = CLI.Spinner;
let GitHubAPI   = require('github');
let _           = require('lodash');
let git         = require('simple-git')();
let touch       = require('touch');
let fs          = require('fs');
let files       = require('./lib/files');


var p1turn = true;
var p2turn = false;

//clears command line
clear();
//creates colored text of a specified color
console.log(
  chalk.red(
    figlet.textSync('TicTacToe', { horizontalLayout: 'full'} )
  )
)

if ( files.directoryExists('.git') ) {
  console.log( chalk.lightblue('already a git') );
  process.exit();
}

var board1 = ['---'];
var board2 = ['---'];
var board3 = ['---'];

// board1[0].charAt(1) = 'x';
// console.log(board1[0])

var showBoard = () => { console.log(
  chalk.blue(
    figlet.textSync(board1, { horizontalLayout: 'full'} )
    )
  )
console.log(
  chalk.blue(
    figlet.textSync(board2, { horizontalLayout: 'full'} )
    )
  )
console.log(
  chalk.blue(
    figlet.textSync(board3, { horizontalLayout: 'full'} )
    )
  )
}

showBoard();

inquirer.prompt([{position: 'where would you like to go player', message: 'what spot?', name: 'playerwhat'}]).then(function (answers) {
    // Use user feedback for... whatever!! 
    console.log(answers)
    
});


// function gameTime(callback) {
//   var ttt = [
//     {
//       position: 0
//     }
//   ];

//   .prompt(ttt).then(callback);
// }

// gameTime(function(){
//   console.log(arguments);
// });