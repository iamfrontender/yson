var $ = require('requirist')([
    //Natives
    'path', 'fs',

    //Node Modules
    'gulp', 'gulp-util',
    'gulp-ext-replace as extReplace',
    'del',

    //Local Modules
    './utils/paths as paths',
    './tasks/gulp-rd-to-svg as toSVG'
]);

var gulp = $.gulp;

gulp.task('default', ['cleanup', 'diagrams:toSVG']);

gulp.task('diagrams:toSVG', function() {
    return gulp.src($.paths.src.diagrams)
        .pipe($.toSVG())
        .pipe($.extReplace('.svg'))
        .pipe(gulp.dest($.paths.dest.diagrams))
});

gulp.task('cleanup', function() {
    return $.del($.paths.cleanup);
});