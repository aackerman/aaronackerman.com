var gulp        = require('gulp');
var react       = require('gulp-react');
var regenerator = require('gulp-regenerator');
var sass        = require('gulp-sass');
var copy        = require('gulp-copy');
var rev         = require('gulp-rev');
var rimraf      = require('gulp-rimraf');

function ifEnv(env, cb) {
  if (process.env.APP_ENV && process.env.APP_ENV == env) {
    cb();
  }
}

gulp.task('build', ['scripts', 'images', 'styles']);

gulp.task('clean', function(){
  gulp.src('build/*', '!build/.keep', { read: false })
      .pipe(rimraf({ force: true }));
});

gulp.task('scripts', function(){
  var task = gulp.src('app/scripts/**/*').pipe(react())

  ifEnv('production', function(){
    task = task.pipe(rev());
    task = task.pipe(rev.manifest());
  });

  task.pipe(gulp.dest('build/js'));
});

gulp.task('images', function(){
  var task = gulp.src('app/images/**/*')

  ifEnv('production', function(){
    task = task.pipe(rev())
    task = task.pipe(rev.manifest())
  });

  task.pipe(gulp.dest('build/img'));
});

gulp.task('styles', function(){
  var task = gulp.src('app/styles/**/*')
  task = task.pipe(sass())

  ifEnv('production', function(){
    task = task.pipe(rev())
    task = task.pipe(rev.manifest())
  });

  task.pipe(gulp.dest('build/styles'));
});

gulp.task('default', ['build']);
