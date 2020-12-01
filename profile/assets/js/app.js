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
//const shareLink = document.querySelectorAll("#shareLink");

/*FUNCIONES */
function filename(){
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",
  authDomain: "vcardapp-js.firebaseapp.com",
  databaseURL: "https://vcardapp-js.firebaseio.com",
  projectId: "vcardapp-js",
  storageBucket: "vcardapp-js.appspot.com",
  messagingSenderId: "420720513571",
  appId: "1:420720513571:web:f072eeda6cd3cfa1429796",
  measurementId: "G-LDPZ4BZ1GV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.database();
const auth = firebase.auth();
const fs = firebase.firestore();

//Tablas-Documentos
var refConfig = db.ref().child('vcard_config');
var refU = db.ref().child('vcard_signup');
var refVcard = db.ref().child('vcard_vcard');
var refEmpresas = db.ref().child('vcard_vcard_empresas');

function cargar_vcard(profile){//console.log('Buscar:'+profile);
  refVcard.on('value',function(datos){
    reg=datos.val();//console.log(reg);
    $.each(reg, function(indice,valor){
      if(valor.profile==profile){console.log(indice);
        const { ID,cover,profile,nombre,cell,email,descripcion,puesto,web,idemp,fb,tw,lk,ins,visible } = valor;
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
    
        //empresa(idemp);

      }
    });
  });

}

cargar_vcard(perfil);