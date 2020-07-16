const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// copy html
gulp.task('copy-html', function(done) {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
    done();
});

// copy images
gulp.task('copy-img', function(done) {
  gulp.src('src/assets/img/*')
    .pipe(gulp.dest('dist/assets/img'));
    done();
});

// copy css
gulp.task('copy-css', function(done) {
  gulp.src('src/assets/css/*')
    .pipe(gulp.dest('dist/assets/css'));
    done();
});

// copy fonts
gulp.task('copy-fonts', function(done) {
  gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'));
    done();
});

// minify js
gulp.task('minify-js', function(done) {
  gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
    done();
});

// sass
gulp.task('sass-compile', function(done) {
  gulp.src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'));
    done();
});

// watch realtime
gulp.task('watch', function(done) {
  gulp.watch('src/*.html', gulp.series('copy-html'));
  gulp.watch('src/assets/img/*', gulp.series('copy-img'));
  gulp.watch('src/assets/css/*', gulp.series('copy-css'));
  gulp.watch('src/assets/fonts/*', gulp.series('copy-fonts'));
  gulp.watch('src/assets/js/*.js', gulp.series('minify-js'));
  gulp.watch('src/assets/scss/*.scss', gulp.series('sass-compile'));
  done();
});