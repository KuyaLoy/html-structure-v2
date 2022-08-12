// youtube video: https://youtu.be/yZPfIFOxYWo

const { src, dest, watch, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

function minifyJS(){
  return src('assets/js/all-js/*.js')
    .pipe(sourcemaps.init())  
    .pipe(concat('script.min.js'))
    .pipe(terser({
      toplevel: true,
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('assets/js'));
}

function watchTask(){
  watch('assets/js/all-js/*.js', minifyJS)
}

exports.default = series(minifyJS, watchTask);