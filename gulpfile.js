var gulp        = require('gulp');
var react       = require('gulp-react');
var regenerator = require('gulp-regenerator');
var sass        = require('gulp-sass');
var copy        = require('gulp-copy');
var rev         = require('gulp-rev');
var rimraf      = require('gulp-rimraf');

function isEnv(env) {
  return process.env.APP_ENV && process.env.APP_ENV == env
}

gulp.task('build', ['scripts', 'images', 'styles']);

gulp.task('clean', function(){
  gulp.src('build/*', '!build/.keep', { read: false })
      .pipe(rimraf({ force: true }));
});

gulp.task('scripts', function(){
  var task = gulp.src('app/scripts/**/*').pipe(react())

  if (isEnv('production')) {
    task = task.pipe(rev())
    task = task.pipe(rev.manifest())
  }

  task.pipe(gulp.dest('build/js'));
});

gulp.task('images', function(){
  var task = gulp.src('app/images/**/*')

  if (isEnv('production')) {
    task = task.pipe(rev())
    task = task.pipe(rev.manifest())
  }

  task.pipe(gulp.dest('build/img'));
});

gulp.task('styles', function(){
  var task = gulp.src('app/styles/**/*')
  task = task.pipe(sass())

  if (isEnv('production')) {
    task = task.pipe(rev())
    task = task.pipe(rev.manifest())
  }

  task.pipe(gulp.dest('build/styles'));
});
