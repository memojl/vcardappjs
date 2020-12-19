<?php 
//FUNCIONES ESPECIALES MOD: VCARD
$host = $_SERVER['HTTP_HOST']; //Nombre del dominio (dominio.com).
if($host=='localhost'){
	$dominio='http://'.$host.'/';
	$path_root='MisSitios/vcardappjs/app/';	
}else{
	$dominio='https://'.$host.'/';
	$path_root='app/';
}
$page_url = $dominio.$path_root;
$action = (isset($_GET['action']))?$_GET['action']:'';
//$mod = 'tarjetas';

function file_ima($cover){
global $page_url,$mod;
   $url_ima=($mod=='perfil')?$page_url.'files/images/photos/':'';
   $file='<input type="hidden" class="form-control" id="cover" name="cover" value="'.$url_ima.$cover.'">
   <img id="ima" src="'.$page_url.'files/images/photos/'.$cover.'" style="width:150px;" title="'.$cover.'">
   <a href="javascript:up(1);">Cambiar Foto</a><div id="upload"></div>';
   return $file;
}

