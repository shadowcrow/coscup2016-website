/*
*	default gulp task
*	build all website
*/
var gulp = require('gulp');

gulp.task('default',
	['html', 'js', 'scss', 'image', 'favicon']);
