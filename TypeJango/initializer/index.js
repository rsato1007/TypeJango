"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program.version('0.0.1');
commander_1.program
    .command('runserver')
    .description('Start the development server')
    .action(function () {
    console.log('Starting server...');
    // Your server code here
});
commander_1.program
    .command('migrate')
    .description('Run database migrations')
    .action(function () {
    console.log('Running migrations...');
    // Your migration code here
});
commander_1.program.parse(process.argv);
