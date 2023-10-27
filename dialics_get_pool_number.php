<?php
session_start();

function dialics_get_pool_number($token){
	$now = time();
	
	if($_SESSION['number'] && $_SESSION['expire'] > $now){
		return $_SESSION['number'];
	} else{
		$params = $_SERVER['QUERY_STRING'];
		$url = 'http://api-num.dialics.com/' . $token . '/get-number?' . $params;		
		
		$ch = curl_init() ;

		curl_setopt($ch,CURLOPT_URL, $url);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch,CURLOPT_HEADER,0);
		curl_setopt($ch,CURLOPT_TIMEOUT,30);
		curl_setopt($ch,CURLOPT_FRESH_CONNECT, 1);

		$response = curl_exec($ch);
		curl_close($ch);

		$response = json_decode($response, true);
		//var_dump($response); exit;
		if(isset($response['success']) && $response['success'] == true){
			$_SESSION['number'] = $response['payload']['number'];
			$_SESSION['expire'] = time() + intval($response['payload']['idle_limit']);
			
			return $response['payload']['number'];
		}
		return '';
	}
}