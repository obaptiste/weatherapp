// Bundle settings
var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
}));

// Bundle tasks
function bundle() {
    return bundler
        .bundle()
        .on('error', notify)
        .pipe(source('main.js'))
        .pipe(gulp.dest('./'))
}
bundler.on('update', bundle);

// Create bundle
gulp.task('build', function() {
    bundle()
});