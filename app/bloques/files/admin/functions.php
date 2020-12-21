<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//FUNCIONES ESPECIALES MOD: VCARD

$proyecto='vcardappjs/app/';
$host = $_SERVER['HTTP_HOST']; //Nombre del dominio (dominio.com).
$dominio = ($host=='localhost')?'http://'.$host.'/':'https://'.$host.'/';
$path_root = ($host=='localhost')?'MisSitios/'.$proyecto:'';
$page_url = $dominio.$path_root;
$mod = (isset($_GET['mod']))?$_GET['mod']:'';
$action = (isset($_GET['action']))?$_GET['action']:'';
//$mod = 'tarjetas';

function file_ima($cover){
global $page_url,$mod;
   //$url_ima=($mod=='perfil')?$page_url.'bloques/files/images/photos/':'';
   $file='<input type="hidden" class="form-control" id="cover" name="cover" value="'.$page_url.'bloques/files/images/photos/'.$cover.'">
   <img id="ima" src="'.$page_url.'bloques/files/images/photos/'.$cover.'" style="width:150px;" title="'.$cover.'">
   <a href="javascript:up(1);">Cambiar Foto</a><div id="upload"></div>';
   return $file;
}

