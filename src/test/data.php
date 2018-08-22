<?php
	/*
		
		数据类型
			* String（字符串）
			* Integer（整型）
			* Float（浮点型）
			* Boolean（布尔型）
			* Array（数组）
			* Object（对象）
			* NULL（空值）


		输出：
			* echo 只能输出字符串，速度最快
			* print_r 打印关于变量的信息，适用于数组、对象的打印，一般用于测试
			* var_dump 判断一个变量的类型与长度,并输出变量的数据类型和数值，一般用于测试


	 */
	
	$num1 = 10;
	$num2= 3.14;


	echo $num1 + $num2;

	echo "<br>";

	var_dump($num1);

	echo "<br>";
	var_dump($num2);

	$str = 'laoxie';
	var_dump($str);
	
?>