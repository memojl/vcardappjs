<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//FUNCIONES ESPECIALES MOD: VCARD
$proyecto='vcardappjs';
$host = $_SERVER['HTTP_HOST']; //Nombre del dominio (dominio.com).
$dominio = ($host=='localhost')?'http://'.$host.'/':'https://'.$host.'/';
$path_app = ($proyecto=='vcardappjs'|| $host=='vcardappjs.000webhostapp.com')?'app/':'';
$path_root  = ($host=='localhost')?'MisSitios/'.$proyecto.'/':'';
//$path_root = ($host=='localhost')?'MisSitios/'.$proyecto.'/'.$path_app:$path_app;
$page_url = $dominio.$path_root;
$mod = (isset($_GET['mod']))?$_GET['mod']:'';
$action = (isset($_GET['action']))?$_GET['action']:'';
//$mod = 'tarjetas';

function file_ima($cover){
global $page_url,$mod,$path_app;
   //$url_ima=($mod=='perfil')?$page_url.'bloques/files/images/photos/':'';
   $file='<input type="hidden" class="form-control" id="cover" name="cover" value="'.$page_url.$path_app.'bloques/files/images/photos/'.$cover.'">
   <img id="ima" src="'.$page_url.$path_app.'bloques/files/images/photos/'.$cover.'" style="width:150px;width:150px;border-radius:0%;-moz-border-radius:0%;-webkit-border-radius:0%;" title="'.$cover.'">
   <div id="upload"><a href="javascript:up(1);">Cambiar Foto</a></div>';
   return $file;
}

function file_imaBg($cover){
global $page_url,$mod,$path_app;
   //$url_ima=($mod=='perfil')?$page_url.'bloques/files/images/photos/':'';
   $file='<input type="hidden" class="form-control" id="coverbg" name="coverbg" value="'.$page_url.$path_app.'bloques/files/images/photos/'.$cover.'">
   <img id="ima2" src="'.$page_url.$path_app.'bloques/files/images/photos/'.$cover.'" style="width:150px;" title="'.$cover.'">
   <div id="upload2"><a href="javascript:up2(1);">Cambiar Fondo</a></div>
   ';
   return $file;
}

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
//BUSCAR CON AJAX
function query_buscar($tabla,$url_api,$campo,$val){
global $page_url;
   $data=query_data($tabla,$url_api);
   //DATOS
   foreach($data as $key => $value){
       $row=$data[$key];
       $b_val = $data[$key][$campo];
       $valor = ucwords($val);
       $bus   = strpos($b_val, $valor);
       if($bus==$val){//$index=$key;           
           echo '
           <div class="public-user-block block">
           <div class="row d-flex align-items-center">                   
             <div class="col-lg-4 d-flex align-items-center">
               <div class="order">'.$row['ID'].'</div>
               <div class="avatar" style="background:url('.$row['cover'].');background-repeat:no-repeat;background-size:cover;background-position:center;"></div>
               <a href="'.$page_url.'profile/'.$row['profile'].'" class="name">
                 <strong class="d-block">'.$row['nombre'].'</strong>
                 <span class="d-block">'.$row['profile'].'</span>
               </a>
             </div>
             <div class="col-lg-4 text-center">
               <div class="contributions">'.$row['puesto'].'</div>
             </div>
             <div class="col-lg-4">
               <div class="details d-flex">
                 <div class="item"><i class="fa fa-calendar"></i><strong>'.$row['f_create'].'</strong></div>
               </div>
             </div>
           </div>
         </div>
           ';
       }
   }
}

