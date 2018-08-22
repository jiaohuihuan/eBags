<?php
	/*
		for(变量初始化;条件;变量更新){
		
		}
	 */
	$res = '';

	for($i=0;$i<5;$i++){
		$res .= $i . ', ';
	}

	echo "$res";


	$num = 10;
	while($num>5){
		echo "$num - ";
		$num--;
	}
?>