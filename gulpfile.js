const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var minifycss = require('gulp-minify-css');


gulp.task('hello', function(done){
    console.log ('Привет мир!');
    done();
});



// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// CSS Минимизация 
gulp.task('css', function() {
    return gulp.src('./css/*.css')
      .pipe(minifycss())
      .pipe(gulp.dest('./css'));
  });
