<?php

	/*
		读取data/football.json
			* 根据参数读取内容
				* qty
				* pageNo


		读取文件：
			qty=10
			pageNo  	array_slice(idx,len)
			1					   (0,10)
			2				  	   (10,10)
			3					   (20,10)


			推导公式：idx = (pageNo-1)*qty
	 */
	// 设置响应头
	header('Content-Type:application/json;charset=utf-8');
	
	// 获取前端传入的参数
	$pageNo = $_GET['pageNo'];
	$qty = $_GET['qty'];


	
	// 文件路径
	$filepath = 'data/football.json';

	// 打开文件
	$file = fopen($filepath,'r');
	

	// 读取文件内容
	$content = fread($file,filesize($filepath));


	// 读取完毕后关闭文件
	fclose($file);

	// 读取的json字符串转换成数组
	$data = json_decode($content);


	// 截取需要的数据
	$res = array(
		"total" => count($data),
		"data" => array_slice($data,($pageNo-1)*$qty,$qty),
		"pageNo" => $pageNo,
		"qty" => $qty
	);

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>