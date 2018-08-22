<?php
	/*
		数组
			* 值数组：类似于js中的数组   []
			* 关联数组：类似于js中的对象 {key,value}

		操作
			* 创建
			* 读取
			* 遍历
				* for 一般用于遍历数值数组
				* foreach() 一般用于遍历关联数组
	 */
	
	// 值数组
	$arr = array('laoxie','yy','lemon','yueyue','tiantian');

	print_r($arr);
	
	var_dump($arr);

	// 关联数组
	$goods = array(
		'name'=>'noteX',
		'price'=>998,
		'imgurl'=>'img/iphonex.jpg'
	);

	print_r($goods);
	var_dump($goods);


	// 读取
	echo $arr[0];

	// 遍历
	echo "遍历<br>";
	for($i=0;$i<count($arr);$i++){
		echo "$arr[$i] , ";
	}

	echo "foreach as<br>";
	// foreach( as )
	foreach($goods as $key=>$item){//$item为值
		echo "$key : $item <br>";
	}

	// 排序
	// sort() 对数组进行升序排列
	rsort($arr);
	print_r($arr);


	asort($goods);
	var_dump($goods);
?>