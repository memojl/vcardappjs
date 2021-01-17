<?php
//Funcion para quitar los Notice (Avisos) de PHP7
error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT & ~E_WARNING & ~E_NOTICE);
// Desactivar toda notificación de error
//error_reporting(0);

/*VARIABLES DEL SISTEMA*/
$year		= date('Y');
$month		= date('m');
$day		= date('d');
$time		= date('Gis');
$fecha		= date('Y-m-d');
$date		= date("Y-m-d H:i:s");
$serv_proto = (isset($_SERVER['SERVER_PROTOCOL']))?$_SERVER['SERVER_PROTOCOL']:''; //Protocolo de Internet
//$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://'; //Protocolo de Internet
//$protocol   = (isset($_SERVER['HTTPS']))?'https://':'http://';  //Protocolo de Internet
$host		= $_SERVER['HTTP_HOST'];			//Nombre del dominio (dominio.com).
$ip_address = $_SERVER['REMOTE_ADDR'];			//Se obtiene la direccion ip del visitante de la pagina web.
$ip			= ($ip_address!='' && $ip_address!=NULL && $ip_address!='::1')?$ip_address:gethostbyname($host);
$IPv4 		= ip2long($ip);						//Direccion IPv4 
$pag_self 	= $_SERVER['PHP_SELF'];			    //Se obtiene la raiz y el nombre de la pagina.
$pag_url 	= $_SERVER['REQUEST_URI'];		    //Se obtiene la url de la pagina incluyendo variables.
$pag_name 	= basename($_SERVER['PHP_SELF']);   //Nombre de la pagina.
$refer 		= (isset($_SERVER['HTTP_REFERER']))?$_SERVER['HTTP_REFERER']:'';

$protocol   = ($host=='localhost')?'http://':'https://';
$dominio    = $protocol.$host.'/';          //Dominio Estructurado
$dominio1   = $protocol.$host;              //Dominio Simple
$url        = $dominio1.$pag_self;			//Se obtiene la url de la pagina.
$URL        = $dominio1.$pag_url;			//Se obtiene la url completa, incluyendo variables.

$path_root  = ($host=='localhost')?'MisSitios/vcardappjs/':'';
$page_url   = $dominio.$path_root;
/*VARIABLES GET*/
$perfil     = (isset($_GET['pro']))?$_GET['pro']:'';
/**TEMA */
$tema_ver = 'v1';
/*---VARIABLES DE PAGINA---*/
$bootstrap='<link href="'.$page_url.'app/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">'."\r\n";


/*---------------------------------------------------------------------------------------------------------------------*/
//--FUNCIONES DE CONSULTAS BASICAS--//////////////////////////////////////////////////////////////////////////////
/*---------------------------------------------------------------------------------------------------------------------*/
//FUNCION DATA 
function query_data($tabla,$url_api){
global $page_url,$path_jsonDB,$path_jsonWS;
    $path_JSON=$path_jsonDB.$tabla.'.json';
    if(!file_exists($path_JSON)){$path_JSON=$page_url.$path_jsonWS.$tabla;}
    $path_JSON=($url_api)?$url_api:$path_JSON;//echo $path_JSON;
    $objData=file_get_contents($path_JSON);//*Tarda consulta
    $Data=json_decode($objData,true);//usort($Data, function($a, $b){return strnatcmp($a['ord'], $b['ord']);});//Orden del menu
    return $Data;
}

//--FUNCIONES CRUD JSON--//////////////////////////////////////////////////////////////////////////////
//[GET-SHOW][ID] Buscar ID/CAMPO y Mostrar un registro  
function query_row($tabla,$url_api,$campo,$id){
    $data=query_data($tabla,$url_api);
    //DATOS
    foreach($data as $key => $value){
        $b_id=$data[$key][$campo];
        if($b_id==$id){//$index=$key;
            $row=$data[$key];
        }
    }
    return $row;
}

function crear_vcard($path_f,$nombre_archivo,$contenido,&$path_file){
$path_file=$path_f.$nombre_archivo;
$archivo=fopen($path_file, "w+");
fwrite($archivo, $contenido);
fclose($archivo);
}

function profile_vcard(){
global $page_url,$mod;
global $profile,$nombre,$empresa,$puesto,$email,$cell,$tel_ofi,$web;
        
$path_f='../app/bloques/files/vcf/';
$nombre_archivo=$profile.'.vcf';
$contenido='BEGIN:VCARD
VERSION:3.0
N: ;'.$nombre.';;;
FN:'.$nombre.'
ORG:'.$empresa.';
TITLE:'.$puesto.'
EMAIL;TYPE=PREF,INTERNET:'.$email.'
TEL;TYPE=CELL,voice:'.$cell.'
TEL;TYPE=WORK,voice:'.$tel_ofi.'
TEL;TYPE=WORK,fax:
URL:'.$web.'
    
NOTE:Tarjeta creada desde VcardApp
    
REV:2008-04-24T19:52:43Z
END:VCARD
';
crear_vcard($path_f,$nombre_archivo,$contenido,$path_file);
}

function url_exist($url){
$array = get_headers($url);
$string = $array[0];
    if(strpos($string,"200")){
       return true;
    }else{
       return false;
    }
}

