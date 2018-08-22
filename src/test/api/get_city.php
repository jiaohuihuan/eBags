<?php
	/*
		根据IP获取城市
			* url：http://ip.taobao.com/service/getIpInfo.php?ip=61.144.96.228
			* 获取数据：file_get_contents($url)
	 */
	
	$ip = isset($_GET['ip']) ? $_GET['ip'] : '';

	$url = 'http://ip.taobao.com/service/getIpInfo.php?ip='.$ip;

	$content = file_get_contents($url);

	
	echo $content;
?>