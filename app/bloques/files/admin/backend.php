<?php
include 'lib.php';
include 'functions.php';

switch(true){
  case($action=='subir_cover'):
	$cover = 'bloques/files/images/photos/sinfoto.png';
	$file=file_ima($cover);

	//datos del arhivo 
	$repositor='../images/photos/';
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
  case($action=='buscar'):
	$q=$_POST['q'];
	
  	if(!empty($q)){
      query_buscar($tabla,'https://vcardapp-js.firebaseio.com/vcard_vcard.json','puesto',$q);
		/* 
		template+=`
  <div class="public-user-block block">
    <div class="row d-flex align-items-center">                   
      <div class="col-lg-4 d-flex align-items-center">
        <div class="order">${ID}</div>
        <div class="avatar" style="background:url(${cover});background-repeat:no-repeat;background-size:cover;background-position:center;"></div>
        <a href="${page_url}../profile/${profile}" class="name">
          <strong class="d-block">${nombre}</strong>
          <span class="d-block">${profile}</span>
        </a>
      </div>
      <div class="col-lg-4 text-center">
        <div class="contributions">${puesto}</div>
      </div>
      <div class="col-lg-4">
        <div class="details d-flex">
          <div class="item"><i class="fa fa-calendar"></i><strong>${f_create}</strong></div>
          <!--div class="item"><i class="icon-info"></i><strong></strong></div-->
          <!--div class="item"><i class="fa fa-gg"></i><strong>200</strong></div-->
          <!--div class="item"><i class="icon-flow-branch"></i><strong></strong></div-->
        </div>
      </div>
    </div>
  </div>`
		*/
	}
  break;
  default:

  break;
}