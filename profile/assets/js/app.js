/* VARIABLES CONSTANTES*/
console.log('/* VARIABLES CONSTANTES*/');
var loc = window.location;
console.log(loc);
var fecha = new Date();
console.log(fecha);
const protocol = window.location.protocol;
console.log('protocol='+protocol);
const host = window.location.host;
console.log('host='+host);
const dominio = window.location.origin+'/';
console.log('dominio='+dominio);
const dominio1 = window.location.origin;
console.log('dominio1='+dominio1);
const path_url = window.location.pathname;
console.log('path_url='+path_url);
const URL = window.location.href;
console.log('URL='+URL);
/* VARIABLES */
console.log('/* VARIABLES */');
var path_url1 = path_url.replace("/", "");
//var path_root=(host=='localhost')?path_url1:'';
var path_root=(host=='localhost')?'MisSitios/vcardappjs/':'';
console.log('path_root='+path_root);
var page_url = dominio+path_root;
console.log('page_url='+page_url);
var perfil = filename();
console.log(perfil);
var url_json_vcard = 'https://vcardapp-js.firebaseio.com/vcard_vcard.json';
console.log(url_json_vcard);

/*FUNCIONES */
function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}

//if(perfil==='' || perfil==null){
  document.getElementById('nom').style.fontSize="30px";
  document.getElementById('nom').style.color="#000000";
  document.getElementById('bg-fondo').style.backgroundColor='#000000';
//}

const obtenerVcard = async () => {
  try {
    const res = await fetch(url_json_vcard);
    const data = await res.json();
    let val = Object.values(data); //console.log(val)
    const pro = val.filter((per) => per.profile === perfil);//console.log(pro)
    const { ID,cover,profile,nombre,cell,email,descripcion,puesto,web,idemp,fb,tw,lk,ins,visible } = pro[0];
    document.getElementById('idp').innerHTML='<!-- '+ID+' -->';
    document.getElementById('cov').innerHTML='<div class="img" ng-style="{&#39;background&#39;:view.avatar?&#39;url(&#39;+view.avatar+&#39;)&#39;:&#39;none&#39;}" style="background: url(../app/files/images/photos/'+cover+');"></div>';
    document.getElementById('prof').innerHTML='<!-- '+profile+' -->';
    document.getElementById('nom').innerHTML=nombre;
    document.getElementById('btn-cell').innerHTML='<a href="tel:'+cell+'"><i class="icon-phone dynamicTextColor"></i><small class="dynamicTextColor">Llamar</small></a>';
    document.getElementById('btn-email').innerHTML='<a href="mailto:'+email+'?subject=Desde%20Mi%20Tarjeta&body=" target="_newEmail""><i class="icon-send dynamicTextColor"></i><small class="dynamicTextColor">Email</small></a>';

    document.getElementById('bio').innerHTML=descripcion;
    document.getElementById('pue').innerHTML=puesto;
    document.getElementById('cell').innerHTML=cell;
    document.getElementById('cell').href='tel:'+cell;
    //document.getElementById('tel').innerHTML=reg.tel;
    document.getElementById('mailto').innerHTML=email;
    document.getElementById('mailto').href='mailto:'+email;
    //document.getElementById('empresa').innerHTML=empresa;
    document.getElementById('web').innerHTML=web;
    document.getElementById('web').href=web;

    document.getElementById('send-email').href=URL;
    document.getElementById('share-facebook').href=URL;
    //document.getElementById('share-twitter').href=URL;
    document.getElementById('share-whatsapp').href='whatsapp://send?text='+URL;
    document.getElementById('share-email').href='mailto:?body='+URL;
    document.getElementById('shortUrl').value=URL;

    if(fb!=''){
      var fb1=`
      <a href="`+fb+`" target="_blank" class="channel-container ng-scope" id="channel-item-Facebook" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
        <div class="table-cell-middle pl-55 pos-relative">
          <div class="channel-bgd-facebook">
            <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-facebook"></i><!-- end ngIf: channel.name != 'Snapchat' -->
            <!-- ngIf: channel.name == 'Snapchat' -->
          </div>
        </div>
      </a>
      <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
    }else{var fb1='';}
    if(tw!=''){
      var tw1=`
      <a href="`+tw+`" target="_blank" class="channel-container ng-scope" id="channel-item-Twitter" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
        <div class="table-cell-middle pl-55 pos-relative">
          <div class="channel-bgd-twitter">
            <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-twitter"></i><!-- end ngIf: channel.name != 'Snapchat' -->
            <!-- ngIf: channel.name == 'Snapchat' -->
          </div>
        </div>
      </a>
      <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
    }else{var tw1='';}
    if(ins!=''){
      var ins1=`
      <a href="`+ins+`" target="_blank" class="channel-container ng-scope" id="channel-item-Instagram" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
        <div class="table-cell-middle pl-55 pos-relative">
          <div class="channel-bgd-instagram">
            <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-instagram"></i><!-- end ngIf: channel.name != 'Snapchat' -->
            <!-- ngIf: channel.name == 'Snapchat' -->
          </div>
         </div>
      </a>
      <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
    }else{var ins1='';}
    if(lk!=''){
      var lk1=`
      <a href="`+lk+`" target="_blank" class="channel-container ng-scope" id="channel-item-LinkedIn" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
        <div class="table-cell-middle pl-55 pos-relative">
          <div class="channel-bgd-linkedin">
            <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-linkedin"></i><!-- end ngIf: channel.name != 'Snapchat' -->
            <!-- ngIf: channel.name == 'Snapchat' -->
          </div>
        </div>
      </a>
      <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
    }else{var lk1='';}
    document.getElementById('social-media').innerHTML=fb1+tw1+ins1+lk1;

    empresa(idemp);
  } catch (error) {
    console.log(error);
  }
}

const empresa = async (idemp) => {
  var url_json_empresa = 'https://vcardapp-js.firebaseio.com/vcard_vcard_empresas.json';
  try {
    const res = await fetch(url_json_empresa);
    const data = await res.json();
    let val = Object.values(data); //console.log(val)
    const emp = val.filter((em) => em.ID == idemp); //console.log(emp)
    const {ID,cover,empresa,bg_color} = emp[0];
      bgcolor=(bg_color!=null)?bg_color:'#000000';
      document.getElementById('bg-fondo').style.backgroundColor=bgcolor;
      //document.getElementById('prime').style.backgroundColor=bg_color;
      document.getElementById('empresa').innerHTML=empresa;
      //document.getElementById('logo').innerHTML=cover;
  } catch (error) {
    console.log(error);
  }
}

function load(){
  obtenerVcard();
}

onload = load();
/*
fetch(url_json_vcard).then(response => response.json()).then(data => {
  //data.results.foreach(element => {console.log(element)});
  var val=Object.values(data);//console.log(val)
  for(i=0;i<val.length;i++){reg=val[i];
    if(reg.profile==perfil){console.log(reg)
      document.getElementById('idp').innerHTML='<!-- '+reg.ID+' -->';
      document.getElementById('cov').innerHTML='<div class="img" ng-style="{&#39;background&#39;:view.avatar?&#39;url(&#39;+view.avatar+&#39;)&#39;:&#39;none&#39;}" style="background: url(../app/files/images/photos/'+reg.cover+');"></div>';
      document.getElementById('prof').innerHTML='<!-- '+reg.profile+' -->';
      document.getElementById('nom').innerHTML=reg.nombre;
      document.getElementById('btn-cell').innerHTML='<a href="tel:'+reg.cell+'"><i class="icon-phone dynamicTextColor"></i><small class="dynamicTextColor">Llamar</small></a>';
      document.getElementById('btn-email').innerHTML='<a href="mailto:'+reg.email+'?subject=Desde%20Mi%20Tarjeta&body=" target="_newEmail""><i class="icon-send dynamicTextColor"></i><small class="dynamicTextColor">Email</small></a>';

      document.getElementById('bio').innerHTML=reg.descripcion;
      document.getElementById('pue').innerHTML=reg.puesto;
      document.getElementById('cell').innerHTML=reg.cell;
      document.getElementById('cell').href='tel:'+reg.cell;
      //document.getElementById('tel').innerHTML=reg.tel;
      document.getElementById('mailto').innerHTML=reg.email;
      document.getElementById('mailto').href='mailto:'+reg.email;
      //document.getElementById('empresa').innerHTML=reg.empresa;
      document.getElementById('web').innerHTML=reg.web;
      document.getElementById('web').href=reg.web;

      document.getElementById('send-email').href=URL;
      document.getElementById('share-facebook').href=URL;
      //document.getElementById('share-twitter').href=URL;
      document.getElementById('share-whatsapp').href='whatsapp://send?text='+URL;
      document.getElementById('share-email').href='mailto:?body='+URL;
      document.getElementById('shortUrl').value=URL;

      if(reg.fb!=''){
        var fb=`
        <a href="`+reg.fb+`" target="_blank" class="channel-container ng-scope" id="channel-item-Facebook" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-facebook">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-facebook"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
          </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var fb='';}
      if(reg.tw!=''){
        var tw=`
        <a href="`+reg.tw+`" target="_blank" class="channel-container ng-scope" id="channel-item-Twitter" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-twitter">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-twitter"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
          </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var tw='';}
      if(reg.ins!=''){
        var ins=`
        <a href="`+reg.ins+`" target="_blank" class="channel-container ng-scope" id="channel-item-Instagram" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-instagram">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-instagram"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
           </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var ins='';}
      if(reg.lk!=''){
        var lk=`
        <a href="`+reg.lk+`" target="_blank" class="channel-container ng-scope" id="channel-item-LinkedIn" ng-click="loadDemo ? callAction($event,&#39;channelAction&#39;) : &#39;&#39;" ng-repeat="channel in view.code.channels track by $index">
          <div class="table-cell-middle pl-55 pos-relative">
            <div class="channel-bgd-linkedin">
              <!-- ngIf: channel.name != 'Snapchat' --><i ng-if="channel.name != &#39;Snapchat&#39;" class="icon-social-linkedin"></i><!-- end ngIf: channel.name != 'Snapchat' -->
              <!-- ngIf: channel.name == 'Snapchat' -->
            </div>
          </div>
        </a>
        <!-- end ngRepeat: channel in view.code.channels track by $index -->`;
      }else{var lk='';}
      document.getElementById('social-media').innerHTML=fb+tw+ins+lk;

      empresa(reg.idemp);
    }
  }*/
  /*
  function parentId(ID) {
    return function(item) {
      return item.profile === ID
    }
  }
  var regis=val.filter(parentId(perfil));
  console.log(regis[0]);*/
//});
/*
function empresa(idemp){
  var url_json_empresa = 'https://vcardapp-js.firebaseio.com/vcard_vcard_empresas.json';
  console.log(url_json_empresa);
  fetch(url_json_empresa).then(response => response.json()).then(data => {
    var val=Object.values(data);
    for(i=0;i<val.length;i++){reg=val[i];
      //if(reg.uid==userId){console.log(reg)
        if(reg.ID==idemp){console.log(reg)
          bgcolor=(reg.bg_color!=null)?reg.bg_color:'#000000';
          document.getElementById('bg-fondo').style.backgroundColor=bgcolor;
          //document.getElementById('prime').style.backgroundColor=reg.bg_color;
          document.getElementById('empresa').innerHTML=reg.empresa;
          //document.getElementById('logo').innerHTML=reg.cover;
        }
      //}
    }
  });
}
*/

