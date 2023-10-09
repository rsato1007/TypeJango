import { program } from 'commander';

program.version('0.0.1');

program
    // Command
    .command('runserver')
    // Description when you type help
    .description('Start the development server')
    // Command Logic
    .action(() => {
        console.log('Starting server...');
        // Your server code here
    });

program
    .command('migrate')
    .description('Run database migrations')
    .action(() => {
        console.log('Running migrations...');
        // Your migration code here
    });

program.parse(process.argv);