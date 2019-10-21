let gulp = require('gulp');
let gulpSass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch:sass', function () {
  gulp.watch('scss/*.scss',['sass']);
})

gulp.task('default', ['watch:sass']);
