var gulp = require('gulp');
var browserSync = require('browser-sync') .create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('app/css/**/*.css', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});