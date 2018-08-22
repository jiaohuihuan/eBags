<?php
	/*
		作用域scope

			* 全局作用域
			* 局部作用域

		在局部作用域使用全局变量
			* $GLOBALS：以数组保存所有全局变量
			* global关键字
	 */
	
	$x = 50;

	// 函数声明
	function show($n){
		global $x;

		// 返回值
		// return 100+$n+$x;//报错，不能直接使用全局变量

		// return 100+$n+$GLOBALS['x'];
		return 100+$n+$x;
	}

	// 函数调用
	echo show(10);
?>