<?php
	/*
		对象
			* 类
			* 实例化
			* 读取：->
	 */
	
	// 类
	class Girl{
		// 定义对象的属性
		// var $name="laoxie";

		// 构造函数
		function __construct($name,$age){
			// 使用$this

			// 给实例定义属性
			// ->
			$this->name = $name;
			$this->age = $age;
			$this->gender = '女';
		}

		// 定义对象的方法
		function eat(){
			return "我叫$this->name ，我特能吃";
		}

		function say(){
			echo "我是$this->name , 人称靓丽白条";
		}

		function setName($name){
			$this->name = $name;
		}
	}

	// 实例化（创建）
	// new

	$yy = new Girl('yy',18);

	$lemon = new Girl('lemon',32);

	$yueyue = new Girl('yueyue',17);

	var_dump($yy);
	var_dump($lemon->age);
	var_dump($yueyue->eat());

	$yy->say();
	$yy->setName('圆圆');

	var_dump($yy);

	// 转换json字符串
	echo json_encode($yy,JSON_UNESCAPED_UNICODE);

?>