// 引入 gulp及组件
var gulp = require('gulp'),  //gulp基础库
    cleanCSS = require('gulp-clean-css'), //css压缩
    concat = require('gulp-concat'),   //合并文件
    rename = require('gulp-rename'),   //文件重命名
    sass = require("gulp-sass"),
    notify = require('gulp-notify');   //提示

//css
gulp.task('mincss', function () {
    return gulp.src([
        'css/src/license.css',
        'css/src/icon.css',
        'css/src/normalize.css',
        'css/src/reset.css',
        'css/src/base.css',
        'css/src/content.css',
        'css/src/bar.css',
        'css/src/tab.css',
        'css/src/cell.css',
        'css/src/flex.css',
        'css/src/position.css',
        'css/src/avatar.css',
        'css/src/modals.css',
        'css/src/form.css',
        'css/src/preloader.css',
        'css/src/text.css',
        'css/src/pop.css',
        'css/src/landscape.css',
        'css/src/button.css',
        'css/src/animate.css',
        'css/src/theme.css',
        'css/src/debug.css',
        'css/src/tip.css'
    ])
        //设置css
        .pipe(concat('actui.css'))      //合并css文件
        .pipe(rename('actui.debug.css'))//修改文件名
        .pipe(gulp.dest('css/'))        //设置输出路径
        .pipe(rename('actui.css'))      //修改文件名
        .pipe(cleanCSS())               //压缩文件
        .pipe(gulp.dest('css/'))        //设置输出路径
        .pipe(notify({ message: 'css task ok' }));   //提示成功
});

gulp.task('actui', function () {
    return gulp.src([
        'src/actui.scss'
    ])
        .pipe(sass()) //将scss编译成css
        .pipe(rename('actui.css'))      //修改文件名
        .pipe(gulp.dest('dist/'))        //设置输出路径
        .pipe(rename('actui.min.css'))
        .pipe(cleanCSS())               //压缩文件
        .pipe(gulp.dest('dist/'))
})

gulp.task('etui', function () {
    return gulp.src([
        'src/etui.scss'
    ])
        .pipe(sass()) //将scss编译成css
        .pipe(rename('etui.css'))      //修改文件名
        .pipe(gulp.dest('dist/'))        //设置输出路径
        .pipe(rename('etui.min.css'))
        .pipe(cleanCSS())               //压缩文件
        .pipe(gulp.dest('dist/'))
})

gulp.task('mapp', function () {
    return gulp.src([
        'src/etui-mapp.scss'
    ])
        .pipe(sass()) //将scss编译成css
        .pipe(rename('etui-mapp.css'))      //修改文件名
        .pipe(gulp.dest('dist/'))        //设置输出路径
})

gulp.task('default', ['etui', 'actui', 'mapp']);