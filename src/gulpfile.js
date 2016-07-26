const gulp = require('gulp');
const ts = require('gulp-typescript');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');
 
var PATHS = {
    PACKAGE : 'package.json',
    COPY: [
        '!**/*.ts',
        '!typings',
        '!typings/**',
        '!node_modules',
        '!node_modules/**',
        '!gulpfile.js',
        '!typings.json',
        '!tsconfig.json',
        '**/*',
    ],
    TS: [
        '*.ts',
        '**/*.ts'
    ],
    DIST: '../dist'
}

function report(error,stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stdout && stdout !== '') {
        console.log(`******************** stdout ********************\n${stdout}`);
    }
    if (stderr && stderr !== '') {
        console.log(`******************** stderr ********************\n${stderr}`);
    }
}
 
gulp.task('scripts', function() {
    var tsProject = ts.createProject('./tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
 
    return tsResult.js.pipe(gulp.dest('.', {cwd:PATHS.DIST}));
});

gulp.task('copy', function() {
    return gulp.src(PATHS.COPY)
    .pipe(gulp.dest(PATHS.DIST));
});

gulp.task('copy-package', function() {
    return gulp.src(PATHS.PACKAGE)
    .pipe(gulp.dest(PATHS.DIST));
});

gulp.task('npm-install', ['copy-package'] ,function(callback) {
    exec('cd '+PATHS.DIST+' && npm install', (error, stdout, stderr) => {
        report(stdout,stderr);
        callback();
    });
})

gulp.task('serve-start', function(callback) {
    exec('cd '+PATHS.DIST+' && pm2 start process.json', (error, stdout, stderr) => {
        report(stdout,stderr);
        callback();
    });
});

gulp.task('serve-stop', function(callback) {
    exec('cd '+PATHS.DIST+' && pm2 stop process.json', (error, stdout, stderr) => {
        report(stdout,stderr);
        callback();
    });
});
 
gulp.task('watch', ['pre-watch'], function() {
    gulp.watch(PATHS.TS, ['scripts']);
    gulp.watch(PATHS.COPY, ['copy']);
    gulp.watch(PATHS.PACKAGE, ['npm-install']);
});

gulp.task('pre-watch', function () {
    runSequence(['copy', 'npm-install'], 'scripts', 'serve-start');
})

gulp.task('default', function(callback) {
    runSequence(['copy', 'npm-install'], 'scripts', 'serve-start', callback);
})