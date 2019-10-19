var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify', ['clean'], function() {
    return gulp.src(['slide_config.js', 'js/*.js'], {base: '.'})
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('useref', function() {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src(['theme/css/*'], { base: '.' })
        .pipe(gulp.dest('dist'));
})

gulp.task('images', function(){
    return gulp.src('img/*.+(png|jpg|jpeg|gif|svg)', {base: '.'})
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del.sync(['dist']);
});

gulp.task('copy', function () {
    return gulp.src(['js/polyfills/*', 'js/prettify/*'], {base: '.'})
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['minify', 'useref', 'images', 'copy']);
