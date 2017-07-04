var gulp = require("gulp");
var concat = require("gulp-concat");
gulp.task("minify", function() {
	return gulp.src("./controller/*.js")
		.pipe(concat("main.js"))
		.pipe(gulp.dest("./dist/js"))
})
gulp.task("default", ["minify"])