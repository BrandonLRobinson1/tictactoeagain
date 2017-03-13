console.log('connected');

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

clear();
console.log(
  chalk.red(
    figlet.textSync('TicTacToe', { horizontalLayout: 'full'} )
    )
  )