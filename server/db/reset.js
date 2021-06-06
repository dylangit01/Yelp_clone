import dotenv from 'dotenv';
// const fs = require('fs');
import fs from 'fs';
// const chalk = require('chalk');
import chalk from 'chalk';
import pg from 'pg';

dotenv.config();
const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

const { Pool } = pg;
const pool = new Pool();

// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb';

const connectionString =
	DATABASE_URL ||
	`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}?sslmode=disable`;


	// Loads the schema files from db/schema
const runSchemaFiles = function() {
    console.log(chalk.cyan( `-> Loading Schema Files ...` ));
    const schemaFilenames = fs.readdirSync('./db/schema');

    for (const fn of schemaFilenames) {
        const sql = fs.readFileSync( `./db/schema/${fn}` , 'utf8');
        console.log( `\t-> Running ${chalk.green(fn)}` );
        pool.querySync(sql);
    }
};

const runSeedFiles = function() {
    console.log(chalk.cyan( `-> Loading Seeds ...` ));
    const schemaFilenames = fs.readdirSync('./db/seeds');

    for (const fn of schemaFilenames) {
        const sql = fs.readFileSync( `./db/seeds/${fn}` , 'utf8');
        console.log( `\t-> Running ${chalk.green(fn)}` );
        pool.querySync(sql);
    }
};

try {
    console.log( `-> Connecting to PG using ${connectionString} ...` );
    pool.connectSync(connectionString);
    runSchemaFiles();
    runSeedFiles();
    pool.end();
} catch (err) {
    console.error(chalk.red( `Failed due to error: ${err}` ));
    pool.end();
}
