const gulp   = require('gulp'),
      uglify = require('gulp-uglify-es').default,
      javascriptObfuscator = require('gulp-javascript-obfuscator');


gulp.task('uglify', () => {
  return gulp.src(['config/**/*.js', 'controllers/**/*.js', 'routes/**/*.js', 'services/**/*.js','src/**/*.js', "server.js"])
             .pipe(uglify())
             .pipe(javascriptObfuscator({
                  compact: true,
                  renameGlobals : true,
                  unicodeEscapeSequence : true,
                  splitStrings : true,
                  selfDefending : true,
                  controlFlowFlattening : true,
              }))
             .pipe(gulp.dest('dist'));
});


gulp.task('default',  gulp.series(['uglify'])); 
