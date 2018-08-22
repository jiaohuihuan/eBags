<?php
	/*
		获取外网IP
			* url：http://2018.ip138.com/ic.asp
			* 获取数据：file_get_contents($url)
	 */


	$url = 'http://2018.ip138.com/ic.asp';

	$content = file_get_contents($url);

	$content = iconv('gb2312','utf-8',$content);

	preg_match('/\[(.+)\]/', $content,$res);
	// preg_match_all('/\[(.+)\]/', $content,$res2);

	echo $res[1];
?>