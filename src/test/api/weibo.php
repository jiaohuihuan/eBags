<?php
	/*
		功能：点赞
			* 修改文件点赞数量

		 参数：
		 	* id


		 思路：
		 	1）读取文件内容，转数组
		 	2）找出对应id的微博信息，修改数量
		 	3）重写内容（string）


		 isset()：用于判断是否有某个值，无则返回false（不报错）
	 */
	
	// 接收前端数据
	$id = isset($_GET['id']) ? $_GET['id'] : null;
	
	// 文件路径
	$path = 'data/weibo.json';

	// 打开文件(只读)
	$file = fopen($path,'r');


	// 读取文件内容(json)
	$content = fread($file,filesize($path));

	// 关闭文件
	fclose($file);


	// json->array
	$data = json_decode($content);//得到[object,object,object]


	// 找出对应的微博信息
	for($i=0;$i<count($data);$i++){
		if($data[$i]->id == $id){
			// 数量+1
			$data[$i]->likecnt++;

			// 把修改的信息返回前端
			echo json_encode($data[$i],JSON_UNESCAPED_UNICODE);

			break;
		}
	}

	// 重新打开文件(写入模式)
	$file = fopen($path, 'w');

	// 重新写入内容
	fwrite($file, json_encode($data,JSON_UNESCAPED_UNICODE));

?>