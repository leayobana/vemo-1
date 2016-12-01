/* Servidor web gulp para desarrollo hola ing
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
    connect.server({
        port: 9001,
        host: 'localhost'
    });
});
