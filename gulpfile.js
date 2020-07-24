// 引入 gulp及组件
var gulp=require('gulp'),  //gulp基础库
    cleanCSS = require('gulp-clean-css'), //css压缩
    concat = require('gulp-concat'),   //合并文件
    rename = require('gulp-rename'),   //文件重命名
    notify = require('gulp-notify');   //提示

//css
gulp.task('mincss',function(){
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
        .pipe(notify({message:'css task ok'}));   //提示成功
});

gulp.task('minanimate',function(){
    return gulp.src([
        'css/actui_animate.css'
    ])
    //设置css
        //.pipe(concat('actui.css'))      //合并css文件
        //.pipe(rename('actui.debug.css'))//修改文件名
        //.pipe(gulp.dest('css/'))        //设置输出路径
        .pipe(rename('actui_animate.min.css'))      //修改文件名
        .pipe(cleanCSS())               //压缩文件
        .pipe(gulp.dest('css/'))        //设置输出路径
        .pipe(notify({message:'css task ok'}));   //提示成功
});

gulp.task('default', ['mincss']);