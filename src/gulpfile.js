var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
 
var PATHS = {
    COPY: [
        '**/*',
        '!**/*.ts',
        'gulp_tasks',
        '!gulpfile.js',
        '!typings.json',
        '!tsconfig.json',
    ],
    TS: [
        './**/*.ts'
    ],
    DIST: '../dist'
}
 
gulp.task('scripts', function() {
    var tsProject = ts.createProject('./tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
 
    return tsResult.js.pipe(gulp.dest('.',{cwd:PATHS.DIST}));
});

gulp.task('copy', function() {
    return gulp.src(PATHS.COPY)
    .pipe(gulp.dest(PATHS.DIST));
});
 
gulp.task('watch', ['scripts'], function() {
    gulp.watch(PATHS.TS, ['scripts']);
    gulp.watch(PATHS.COPY,['copy']);
});