/**
 * Created by nishantagrawal on 7/9/2016.
 */
var gulp = require('gulp')
var gulpUtil = require('gulp-util')
var jshint = require('gulp-jshint');


gulp.task('test', function () {
        console.log('Test Task done.')
    }
)

gulp.task('copyhtml', function () {
    gulp.src('src/*.html').pipe(gulp.dest('build'));
    gulpUtil.log('Source HTML copied.');

})

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['jshint']);

});


gulp.task('jshint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('j')