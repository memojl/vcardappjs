<?php
$mod='tarjetas';

function file_ima($cover){
global $page_url,$mod;
	$file='<input type="hidden" class="form-control" id="cover" name="cover" value="'.$cover.'">
	<img id="ima" src="'.$page_url.'modulos/'.$mod.'/files/fotos/'.$cover.'" style="width:150px;" title="'.$cover.'">
	<a href="javascript:up(1);">Cambiar Foto</a><div id="upload"></div>';
	return $file;
}

switch(true){
  case($action=='subir_cover'):

	if($cover==''){$cover='nodisponible.jpg';}
	$file=file_ima($cover);

	//datos del arhivo 
	$repositor='../files/fotos';
	$nombre_archivo = $_FILES['userfile']['name']; 
	$tipo_archivo = $_FILES['userfile']['type']; 
	$tamano_archivo = $_FILES['userfile']['size']; 
	$path_archivo = $repositor."/".$nombre_archivo;
	//compruebo si las características del archivo son las que deseo 
	if (!((strpos($tipo_archivo, "gif") || strpos($tipo_archivo, "jpeg") || strpos($tipo_archivo, "png")) && ($tamano_archivo < 1000000))) { 
  		$file='<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  		<b>Error:</b> El archivo NO ha sido aceptado.</div>'.$file;
	}else{ 
  	  if (@move_uploaded_file($_FILES['userfile']['tmp_name'],$path_archivo)){
  		$file='<div class="alert alert-success alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  		<b>Correcto:</b> El archivo se subio correctamente.</div>'.file_ima($nombre_archivo);
	  }else{
  		$file='<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  		<b>Error:</b> Ocurri&oacute; alg&uacute;n error al subir el fichero. No pudo guardarse.</div>'.$file;
	  }
	}
	echo $file;    
  break;
  default:

  break;
}