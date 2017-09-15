var gulp=require("gulp");
var less=require("gulp-less");
var concat=require('gulp-concat');
var browserSync=require("browser-sync");

var LESS='./less/*.less';
var JS='./js/*.js';
gulp.task("default",["minCss","watch","server"]);

gulp.task("minCss",function(){
  gulp.src([LESS,'!./less/index.less'])
    .pipe(less())
    .pipe(concat("home.css"))
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());
})
gulp.task("watch",function(){
  gulp.watch(LESS,["minCss"]);
  gulp.watch("./view/*.html",["html"]);
  gulp.watch(JS,["html"]);
})

gulp.task("html",function(){
  gulp.src("./view/*.html")
    .pipe(browserSync.stream());
})

gulp.task("server",function(){
  browserSync.init({
    server:{
      baseDir:"./"
    }
  })
})
