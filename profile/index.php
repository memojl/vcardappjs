<?php 
include 'admin/lib.php';

if($perfil!='' && $perfil!=NULL){
    $row=query_row($tabla,'https://vcardapp-js.firebaseio.com/vcard_vcard.json',$campo='profile',$perfil);
    $ID=$row['ID'];
    $profile=$row['profile'];
    $nombre=$row['nombre'];
    $cover=$row['cover'];
    $des=$row['descripcion'];
    $email=$row['email'];
    $cell=$row['cell'];
    $tel_ofi=$row['tel_ofi'];
    $puesto=$row['puesto'];
    $idemp=$row['idemp'];    
    $web=$row['web'];
    $fb=$row['fb'];
    $tw=$row['tw'];
    $lk=$row['lk'];
    $ins=$row['ins'];
    $orden=$row['orden'];
    //$uid=$row['uid'];
    //$user=$row['user'];
    $f_create=$row['f_create'];
    $f_update=$row['f_update'];
    $visible=$row['visible'];

    $reg=query_row($tabla,'https://vcardapp-js.firebaseio.com/vcard_vcard_empresas.json',$campo='ID',$idemp);
    $empresa=$reg['empresa'];
    $cover1=$reg['cover'];
    $val=url_exist($cover1);
    $logo=($val==1 && $val!='')?'<img id="logo" src="'.$cover1.'">':'';
    $bg_color=$reg['bg_color'];
    profile_vcard();
    include $tema_ver.'/index.html';
}else{
    echo $bootstrap;    
    echo '<div class="alert alert-danger"><b>Error 404:</b> Perfil No encontrado</div>';
}
?>