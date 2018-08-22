<?php
	/*
		继承inherit
	 */
	
	class Person{
		// 固定属性

		// 构造函数
		function __construct($name,$age,$gender,$color){
			// 设置属性：人有什么
			$this->name = $name;
			$this->age = $age;
			$this->gender = $gender;
			$this->color = $color;
		}

		// 添加方法:人能做什么
		function eat(){
			return "我叫$this->name ，我是一个吃货";
		}

		function sleep(){
			return "我叫$this->name ，我在修仙，我为睡觉代言";
		}
	}


	// 实例化
	$lemon = new Person('lemon',32,'女','#58bc58');

	echo $lemon->sleep();


	echo "<br>";

	// 女人
	class Girl extends Person{
		var $gender = '女';

		function __construct($name,$age,$color){
			// 设置属性：人有什么
			$this->name = $name;
			$this->age = $age;
			$this->color = $color;
		}

		function drink(){
			echo "酒逢知己千杯少，遇到我 $this->name 你别想跑";
		}
	}


	$yy = new Girl('媛媛',28,'yellow');

	echo $yy->sleep();
	echo $yy->drink();

	var_dump($yy);

	echo json_encode($yy,JSON_UNESCAPED_UNICODE);

?>