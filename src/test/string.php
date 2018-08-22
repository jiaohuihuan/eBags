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


		String
			* 并置（拼接）： .
			* strlen()	字符的字节数
			* mb_strlen()
			* strpos()

	 */
	
	$str = 'lemon你好吗';

	echo mb_strlen($str);

	echo "<br>";

	echo strpos($str,'lemon');
	
?>