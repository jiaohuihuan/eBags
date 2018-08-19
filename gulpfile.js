
let gulp = require('gulp');
let sass = require('gulp-sass');


// 1.创建任务
gulp.task('compileSass',function(){


	// 2.找出sass文件
	gulp.src(['./src/sass/*.scss'])	

	// 编译scss->css
	.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))	

	
	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))
});


// 自动化编译
gulp.task('autoSass',function(){
	// 监听文件修改，如果有修改，则执行compileSass任务
	gulp.watch('./src/sass/*.scss',['compileSass']);
});


