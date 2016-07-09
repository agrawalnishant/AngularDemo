
var gulp = require('gulp')
var gulpUtil = require('gulp-util')
var jshint = require('gulp-jshint')

gulp.task('test', function(){
    console.log('Test task');
})

gulp.task('copyhtml', function(){
    gulpUtil.log('Run copy html');
    gulp.src('src/*.html').pipe(gulp.dest('build'));
})

gulp.task('watch', function(){
    gulp.watch('src/js/*.js',['jshint'])
})

gulp.task('jshint', function(){
    return gulp.src('src/js/*.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
})
