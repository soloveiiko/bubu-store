const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
// const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const paths = {
  styles: {
    src: './src/style/scss/style.scss',
    dest: './src/style/css',
    watch: './src/style/scss/**/*.scss',
  },
};

function buildCss() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: [
            'Chrome >= 35',
            'Firefox >= 38',
            'Edge >= 12',
            'Explorer >= 10',
            'iOS >= 8',
            'Safari >= 8',
            'Android 2.3',
            'Android >= 4',
            'Opera >= 12',
          ],
        }),
      ])
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest));
}

function watcher() {
  gulp.watch([paths.styles.watch], gulp.series(buildCss));
}

exports.watch = gulp.series(buildCss, watcher);
exports.default = gulp.series(buildCss, watcher);
