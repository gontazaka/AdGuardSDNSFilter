/* globals require, __dirname, process */

let whitelist = [];
let blacklist = [];

let args = process.argv.slice(2);
args.forEach(function (val) {
    if (val.startsWith('-i=')) {
        whitelist = whitelist.concat(val.substr(3).split(',').map(x => Number.parseInt(x)));
    }

    if (val.startsWith('-s=')) {
        blacklist = blacklist.concat(val.substr(3).split(',').map(x => Number.parseInt(x)));
    }
});

const path = require('path');
const fs = require('fs');
const compiler = require("adguard-filters-compiler");

const buildDir = path.join(__dirname, './build');
try {
    fs.mkdirSync(buildDir, { recursive: true });
} catch (err) {
    if (err.code === 'EEXIST') { // already exists
        ;
    }

    // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
    if (err.code === 'ENOENT') { // Throw the original parentDir error on buildDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${buildDir}'`);
    }

    const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
    if ((!caughtErr || caughtErr) && (curDir === path.resolve(dir))) {
        throw err; // Throw if it's just the last created dir.
    }
}

const filtersDir = path.join(__dirname, './sources');
const logPath = path.join(buildDir, './log.txt');

let reportPath = path.join(buildDir, './report.txt');
if (whitelist.length > 0 || blacklist.length > 0) {
    // Disable report if this is not a full build
    reportPath = null;
}

const platformsPath = path.join(buildDir, './platforms');

compiler.compile(filtersDir, logPath, reportPath, platformsPath, whitelist, blacklist);
