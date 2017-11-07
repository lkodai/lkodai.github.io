var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    mustache = require("gulp-mustache"),
    connect = require('gulp-connect');
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

//mustache
//======================
gulp.task('mustache', function () {
  return gulp.src("./src/*.mustache")
    .pipe(mustache('./src/mustache-test.json', {
      extension: '.html'
    }))
    .pipe(gulp.dest("."));
});

//compile LESS
// =====================
gulp.task('less', function () {
  return gulp.src('./src/styles/*.less')
    .pipe(less({
      strictMath: 'on',
    }))
    .pipe(gulp.dest('.'));
});

//PostCss (autoprefixer)
//======================
gulp.task('postcss', function() {
  var plugins = [
    autoprefixer({browsers: ['> 1%'], cascade: false}),
    cssnano
  ];
  return gulp.src('./*.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('.'));
});

//start server 
//=====================
gulp.task('connect', function() {
  connect.server();
});




//  Default Gulp Task
//===========================================
gulp.task('default', ['mustache', 'less', 'connect'], function() {
});



