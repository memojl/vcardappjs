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

function profile_vcard($api_url,$tabla,$pro,&$profile){
global $page_url,$mod;//global $mysqli,$DBprefix,$url,$page_url,$mod,$ext,$opc,$path_tema,$tema_previo;
$path_JSON='assets/json/'.$tabla.'.json';
if(!file_exists($path_JSON)){$path_JSON=$api_url.'bloques/ws/t/?t='.$tabla;}
 if($path_JSON){
	$objData=file_get_contents($path_JSON);
	$Data=json_decode($objData,true);
	usort($Data, function($a, $b){return strnatcmp($a['ord'], $b['ord']);});//Orden del menu
	$i=0;//if($_SESSION['level']!=-1){echo '<!-- '.$tabla.'.json -->'."\n\r";}else{echo '<!-- '.$tabla.'.json URL:('.$path_JSON.')-->'."\n\r";}
	echo '<!-- '.$tabla.'.json URL:('.$path_JSON.')-->'."\n\r";
	foreach ($Data as $rowm){$i++;
		$perfil=$rowm['profile'];//echo $pro.' - '.$perfil.'<br>';
		$ID=$rowm['ID'];
		$visible=$rowm['visible'];		
		if($perfil==$pro && $visible==1){
			$profile=array('id'=>$rowm['ID'],'perfil'=>$rowm['profile'],'logo'=>$rowm['logo'],'nombre'=>$rowm['nombre'],'empresa'=>$rowm['empresa'],'des'=>$rowm['descripcion'],'puesto'=>$rowm['puesto'],'tel'=>$rowm['tel'],'cell'=>$rowm['cell'],'tel_ofi'=>$rowm['tel_ofi'],'email'=>$rowm['email'],'web'=>$rowm['web'],'fb'=>$rowm['fb'],'tw'=>$rowm['tw'],'lk'=>$rowm['lk'],'ins'=>$rowm['ins'],'bg_color'=>$rowm['bg_color'],'font_fam'=>$rowm['font_fam'],'date_created'=>$rowm['date_created']);			
		}else{$perfil='';}
	}

    if($profile!=''){
$logo=$profile['logo'];
$profile1=$profile['perfil'];
$nombre=$profile['nombre'];
//$des=$profile['descripcion'];
$puesto=$profile['puesto'];
$empresa=$profile['empresa'];
$cell=$profile['cell'];
$email=$profile['email'];
$web=$profile['web'];
$lk=$profile['lk'];
$ins=$profile['ins'];
        
        $path_f='vcf_files/';
		$nombre_archivo=$profile1.'.vcf';
		$contenido='BEGIN:VCARD
VERSION:3.0
N:'.$nombre.'
FN:
ORG:'.$empresa.'
TÍTULO:'.$puesto.'
TEL;WORK;VOZ:'.$cell.'
TEL;CELULAR;VOZ:'.$cell.'
URL;TRABAJO:'.$web.'
EMAIL;INTERNET:'.$email.'
END:VCARD';
		crear_vcard($path_f,$nombre_archivo,$contenido,$path_file);
    }

 }
}

function fecha_php_vcard(){
global $fecha;
echo '
<script language="JavaScript">
//Configuracion de la funcion: [hora.js].
function fecha(){
var dt = new Date();
var d  = dt.getDate();
var day = (d < 10) ? \'0\' + d : d;
var m = dt.getMonth() + 1;
var month = (m < 10) ? \'0\' + m : m;
var yy = dt.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var fecha = year+"-"+month+"-"+day;

var hora = dt.getHours();
var minuto = dt.getMinutes();
var segundo = dt.getSeconds();
var valtime = ((hora<10)? "0" : "")+hora;
valtime += ((minuto<10)? ":0" : ":")+minuto;
valtime += ((segundo<10)? ":0" : ":")+segundo;
tiempo = setTimeout(\'fecha()\',1000);
//document.getElementById("fecha").innerHTML = "'.$fecha.' " + valtime;
document.getElementById("f_create").value = fecha +" "+ valtime;
document.getElementById("f_update").value = fecha +" "+ valtime;
}
window.onload = fecha;
</script>';
}

function select_empresa($tabla,$url_api,$empresa){
global $page_url,$path_jsonDB,$path_jsonWS;
   $data=query_data($tabla,$url_api);//print_r($data);
   $option='<option>Seleccione Empresa</option>';
	foreach ($data as $rowm){$i++;
		$sel=($rowm['empresa']==$empresa)?' selected':'';
		$option.='<option value="'.$rowm['empresa'].'"'.$sel.'>'.$rowm['empresa'].'</option>';
	}
   $select='<select class="form-control" id="empresa" name="empresa" style="float:left;">'.$option.'</select>';
   return $select;
}

