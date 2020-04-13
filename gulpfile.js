// Initialize Modules

const { src, dest, series, parallel, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();//creates a browser sync instance
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
/* So these are all the different modules I am going to use in creating my tasks */

// File Path Variables
const files = {
	scssPath: './scss/**/*.scss',
	jsPath: './scripts/**/*.js',
	htmlPath: './*.html'
	// This is helpful so I don't have to keep rewriting file paths
}

/*
gulp.task('browser-sync', function() {
	bs.init({
		server: {
			baseDir: "./"
		}
	});
});
*/

// compile scss into css
function style() {
	// 1. find my css file
	 //return gulp.src('./scss/**/*.scss')
	 return src(files.scssPath)
	// 2. pass that file through the sass compiler
	.pipe(sass().on('error', sass.logError))
	// 3. where do I save the compiled CSS
	//.pipe(gulp.dest('./styles/css'))
	.pipe(dest('./styles/css'))
	// 4. stream changes to all browsers
	.pipe(browserSync.stream());
}

function watching() {
	browserSync.init({
		server: {
			baseDir: './'
			//files: "./styles.css"
		}
	});
	// gulp calls the watch function and the watch
	// function calls the style function
	watch('./scss/**/*.scss', style);
	watch('./*.html').on('change', browserSync.reload);
	watch('./scripts/**/*.js').on('change', browserSync.reload);
}
// usage: "gulp style"  at command line
// usage: "gulp watch"
exports.style = style;
exports.watching = watching;
// Kevin Powell "Gulp v4 Sass and Browsersync Setup" youtube