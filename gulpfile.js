var gulp        = require('gulp');
var react       = require('gulp-react');
var sass        = require('gulp-sass');
var copy        = require('gulp-copy');
var rev         = require('gulp-rev');
var rimraf      = require('gulp-rimraf');
var regenerator = require('gulp-regenerator');

function ifEnv(env, cb) {
  if (process.env.NODE_ENV && process.env.NODE_ENV == env) {
    cb();
  }
}

gulp.task('build', ['scripts', 'images', 'styles']);

gulp.task('clean', function(){
  gulp.src('build/*', '!build/.keep', { read: false })
      .pipe(rimraf({ force: true }));
});

gulp.task('images', function(){
  gulp.src('app/images/**/*')
      .pipe(gulp.dest('build/img'));
});

gulp.task('styles', function(){
  gulp.src('app/styles/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('build/'));
});

gulp.task('build:dist', function(){

});

gulp.task('default', ['build']);
