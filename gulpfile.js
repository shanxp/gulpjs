var gulp = require('gulp');
var gulputil = require('gulp-util');
var del = require('del');

//Copy files to dist folder
gulp.task('copy', ['clean'], function() {
    gulp.src(['index.html', 'app/**/*.html', 'app/**/*.css', 'app/*.js','app/**/**'])
        .pipe(gulp.dest('dist'))    
});

//Clean the dist folder
gulp.task('clean', function(cb){
    return del(['dist/**/*']);
});