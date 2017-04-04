var gulp = require('gulp');
var webpack = require('webpack');
var named = require('vinyl-named');
// var config = require('./webpack.config.js')
// gulp.task('default', function() {
//   return gulp.src(['src/vue/page/vue-demo.js'])
//     .pipe(named())
//     .pipe(webpack())
//     .pipe(gulp.dest('dist/'));
// });
//
//
// var livereload = require('livereload');
// var server = livereload.createServer();
// server.watch(__dirname + "/dist");

gulp.task('default',function(cb){
    webpack(require('./webpack.config.js'),function(){
    })
})
gulp.task('watch',function(cb){
    gulp.watch('./src/**/*.js',['default'])
})
