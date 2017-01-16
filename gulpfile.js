var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyHTML = require("gulp-minify-html-2");
var options = {
    comments:true, 
    spare:true
};
var cleanCSS = require("gulp-clean-css");
var optCSS = {
	compatibility: 'ie8'
};

gulp.task('sass', function () {
 return gulp.src('./source/scss/*.scss')
   .pipe(cleanCSS(optCSS))
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'));
});


gulp.task('minifyHTML',function() {
	return gulp.src('./source/index.html')
		   .pipe(minifyHTML(options))
		   .pipe(gulp.dest('dist/'));
});

gulp.task('background',function(){
	gulp.watch('./source/index.html',['minifyHTML']);
	gulp.watch('./source/scss/*.scss',['sass']);
})