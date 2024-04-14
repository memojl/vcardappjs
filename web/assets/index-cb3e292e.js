var wo=(m,f)=>()=>(f||m((f={exports:{}}).exports,f),f.exports);import{getAuth as To,GoogleAuthProvider as ko,signInWithPopup as Co,signOut as jo,onAuthStateChanged as So}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";import{initializeApp as Eo}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import{getFirestore as Ao}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";import{getDatabase as Lo,set as Do,ref as ur,onValue as No}from"https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";var Bi=wo((zi,qt)=>{(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))w(S);new MutationObserver(S=>{for(const L of S)if(L.type==="childList")for(const V of L.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&w(V)}).observe(document,{childList:!0,subtree:!0});function j(S){const L={};return S.integrity&&(L.integrity=S.integrity),S.referrerPolicy&&(L.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?L.credentials="include":S.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function w(S){if(S.ep)return;S.ep=!0;const L=j(S);fetch(S.href,L)}})();/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(m,f){typeof qt=="object"&&typeof qt.exports=="object"?qt.exports=m.document?f(m,!0):function(j){if(!j.document)throw new Error("jQuery requires a window with a document");return f(j)}:f(m)})(typeof window<"u"?window:globalThis,function(m,f){var j=[],w=m.document,S=Object.getPrototypeOf,L=j.slice,V=j.concat,ne=j.push,ye=j.indexOf,Y={},$e=Y.toString,Te=Y.hasOwnProperty,qe=Te.toString,Je=qe.call(Object),W={},O=function(t){return typeof t=="function"&&typeof t.nodeType!="number"},Ae=function(t){return t!=null&&t===t.window},Rt={type:!0,src:!0,noModule:!0};function dt(e,t,n){var r,i=(t=t||w).createElement("script");if(i.text=e,n)for(r in Rt)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function be(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?Y[$e.call(e)]||"object":typeof e}var o=function(e,t){return new o.fn.init(e,t)},pt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;o.fn=o.prototype={jquery:"3.3.1",constructor:o,length:0,toArray:function(){return L.call(this)},get:function(e){return e==null?L.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=o.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return o.each(this,e)},map:function(e){return this.pushStack(o.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(L.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ne,sort:j.sort,splice:j.splice},o.extend=o.fn.extend=function(){var e,t,n,r,i,s,a=arguments[0]||{},u=1,d=arguments.length,h=!1;for(typeof a=="boolean"&&(h=a,a=arguments[u]||{},u++),typeof a=="object"||O(a)||(a={}),u===d&&(a=this,u--);u<d;u++)if((e=arguments[u])!=null)for(t in e)n=a[t],a!==(r=e[t])&&(h&&r&&(o.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,s=n&&Array.isArray(n)?n:[]):s=n&&o.isPlainObject(n)?n:{},a[t]=o.extend(h,s,r)):r!==void 0&&(a[t]=r));return a},o.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||$e.call(e)!=="[object Object]")&&(!(t=S(e))||typeof(n=Te.call(t,"constructor")&&t.constructor)=="function"&&qe.call(n)===Je)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){dt(e)},each:function(e,t){var n,r=0;if(Ye(e))for(n=e.length;r<n&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e},trim:function(e){return e==null?"":(e+"").replace(pt,"")},makeArray:function(e,t){var n=t||[];return e!=null&&(Ye(Object(e))?o.merge(n,typeof e=="string"?[e]:e):ne.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:ye.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],s=0,a=e.length,u=!n;s<a;s++)(r=!t(e[s],s))!==u&&i.push(e[s]);return i},map:function(e,t,n){var r,i,s=0,a=[];if(Ye(e))for(r=e.length;s<r;s++)(i=t(e[s],s,n))!=null&&a.push(i);else for(s in e)(i=t(e[s],s,n))!=null&&a.push(i);return V.apply([],a)},guid:1,support:W}),typeof Symbol=="function"&&(o.fn[Symbol.iterator]=j[Symbol.iterator]),o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){Y["[object "+t+"]"]=t.toLowerCase()});function Ye(e){var t=!!e&&"length"in e&&e.length,n=be(e);return!O(e)&&!Ae(e)&&(n==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e)}var ke=function(e){var t,n,r,i,s,a,u,d,h,x,C,v,b,D,M,q,K,Q,ae,_="sizzle"+1*new Date,R=e.document,se=0,F=0,J=tn(),it=tn(),Xe=tn(),ge=function(l,c){return l===c&&(C=!0),0},st={}.hasOwnProperty,pe=[],Ne=pe.pop,Ge=pe.push,Z=pe.push,Yn=pe.slice,Oe=function(l,c){for(var p=0,y=l.length;p<y;p++)if(l[p]===c)return p;return-1},Qt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",U="[\\x20\\t\\r\\n\\f]",Me="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",Kn="\\["+U+"*("+Me+")(?:"+U+"*([*^$|!~]?=)"+U+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Me+"))|)"+U+"*\\]",Zt=":("+Me+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Kn+")*)|.*)\\)|)",so=new RegExp(U+"+","g"),jt=new RegExp("^"+U+"+|((?:^|[^\\\\])(?:\\\\.)*)"+U+"+$","g"),ao=new RegExp("^"+U+"*,"+U+"*"),lo=new RegExp("^"+U+"*([>+~]|"+U+")"+U+"*"),co=new RegExp("="+U+`*([^\\]'"]*?)`+U+"*\\]","g"),uo=new RegExp(Zt),po=new RegExp("^"+Me+"$"),St={ID:new RegExp("^#("+Me+")"),CLASS:new RegExp("^\\.("+Me+")"),TAG:new RegExp("^("+Me+"|[*])"),ATTR:new RegExp("^"+Kn),PSEUDO:new RegExp("^"+Zt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+U+"*(even|odd|(([+-]|)(\\d*)n|)"+U+"*(?:([+-]|)"+U+"*(\\d+)|))"+U+"*\\)|)","i"),bool:new RegExp("^(?:"+Qt+")$","i"),needsContext:new RegExp("^"+U+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+U+"*((?:-\\d)?\\d*)"+U+"*\\)|)(?=[^-]|$)","i")},fo=/^(?:input|select|textarea|button)$/i,ho=/^h\d$/i,at=/^[^{]+\{\s*\[native \w/,go=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,en=/[+~]/,Se=new RegExp("\\\\([\\da-f]{1,6}"+U+"?|("+U+")|.)","ig"),Ee=function(l,c,p){var y="0x"+c-65536;return y!==y||p?c:y<0?String.fromCharCode(y+65536):String.fromCharCode(y>>10|55296,1023&y|56320)},Qn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Zn=function(l,c){return c?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l},er=function(){v()},mo=At(function(l){return l.disabled===!0&&("form"in l||"label"in l)},{dir:"parentNode",next:"legend"});try{Z.apply(pe=Yn.call(R.childNodes),R.childNodes),pe[R.childNodes.length].nodeType}catch{Z={apply:pe.length?function(c,p){Ge.apply(c,Yn.call(p))}:function(c,p){for(var y=c.length,g=0;c[y++]=p[g++];);c.length=y-1}}}function z(l,c,p,y){var g,T,k,E,A,P,N,H=c&&c.ownerDocument,$=c?c.nodeType:9;if(p=p||[],typeof l!="string"||!l||$!==1&&$!==9&&$!==11)return p;if(!y&&((c?c.ownerDocument||c:R)!==b&&v(c),c=c||b,M)){if($!==11&&(A=go.exec(l)))if(g=A[1]){if($===9){if(!(k=c.getElementById(g)))return p;if(k.id===g)return p.push(k),p}else if(H&&(k=H.getElementById(g))&&ae(c,k)&&k.id===g)return p.push(k),p}else{if(A[2])return Z.apply(p,c.getElementsByTagName(l)),p;if((g=A[3])&&n.getElementsByClassName&&c.getElementsByClassName)return Z.apply(p,c.getElementsByClassName(g)),p}if(n.qsa&&!Xe[l+" "]&&(!q||!q.test(l))){if($!==1)H=c,N=l;else if(c.nodeName.toLowerCase()!=="object"){for((E=c.getAttribute("id"))?E=E.replace(Qn,Zn):c.setAttribute("id",E=_),T=(P=a(l)).length;T--;)P[T]="#"+E+" "+Et(P[T]);N=P.join(","),H=en.test(l)&&rn(c.parentNode)||c}if(N)try{return Z.apply(p,H.querySelectorAll(N)),p}catch{}finally{E===_&&c.removeAttribute("id")}}}return d(l.replace(jt,"$1"),c,p,y)}function tn(){var l=[];function c(p,y){return l.push(p+" ")>r.cacheLength&&delete c[l.shift()],c[p+" "]=y}return c}function me(l){return l[_]=!0,l}function we(l){var c=b.createElement("fieldset");try{return!!l(c)}catch{return!1}finally{c.parentNode&&c.parentNode.removeChild(c),c=null}}function nn(l,c){for(var p=l.split("|"),y=p.length;y--;)r.attrHandle[p[y]]=c}function tr(l,c){var p=c&&l,y=p&&l.nodeType===1&&c.nodeType===1&&l.sourceIndex-c.sourceIndex;if(y)return y;if(p){for(;p=p.nextSibling;)if(p===c)return-1}return l?1:-1}function vo(l){return function(c){return c.nodeName.toLowerCase()==="input"&&c.type===l}}function yo(l){return function(c){var p=c.nodeName.toLowerCase();return(p==="input"||p==="button")&&c.type===l}}function nr(l){return function(c){return"form"in c?c.parentNode&&c.disabled===!1?"label"in c?"label"in c.parentNode?c.parentNode.disabled===l:c.disabled===l:c.isDisabled===l||c.isDisabled!==!l&&mo(c)===l:c.disabled===l:"label"in c&&c.disabled===l}}function Be(l){return me(function(c){return c=+c,me(function(p,y){for(var g,T=l([],p.length,c),k=T.length;k--;)p[g=T[k]]&&(p[g]=!(y[g]=p[g]))})})}function rn(l){return l&&typeof l.getElementsByTagName<"u"&&l}n=z.support={},s=z.isXML=function(l){var c=l&&(l.ownerDocument||l).documentElement;return!!c&&c.nodeName!=="HTML"},v=z.setDocument=function(l){var c,p,y=l?l.ownerDocument||l:R;return y!==b&&y.nodeType===9&&y.documentElement&&(b=y,D=b.documentElement,M=!s(b),R!==b&&(p=b.defaultView)&&p.top!==p&&(p.addEventListener?p.addEventListener("unload",er,!1):p.attachEvent&&p.attachEvent("onunload",er)),n.attributes=we(function(g){return g.className="i",!g.getAttribute("className")}),n.getElementsByTagName=we(function(g){return g.appendChild(b.createComment("")),!g.getElementsByTagName("*").length}),n.getElementsByClassName=at.test(b.getElementsByClassName),n.getById=we(function(g){return D.appendChild(g).id=_,!b.getElementsByName||!b.getElementsByName(_).length}),n.getById?(r.filter.ID=function(g){var T=g.replace(Se,Ee);return function(k){return k.getAttribute("id")===T}},r.find.ID=function(g,T){if(typeof T.getElementById<"u"&&M){var k=T.getElementById(g);return k?[k]:[]}}):(r.filter.ID=function(g){var T=g.replace(Se,Ee);return function(k){var E=typeof k.getAttributeNode<"u"&&k.getAttributeNode("id");return E&&E.value===T}},r.find.ID=function(g,T){if(typeof T.getElementById<"u"&&M){var k,E,A,P=T.getElementById(g);if(P){if((k=P.getAttributeNode("id"))&&k.value===g)return[P];for(A=T.getElementsByName(g),E=0;P=A[E++];)if((k=P.getAttributeNode("id"))&&k.value===g)return[P]}return[]}}),r.find.TAG=n.getElementsByTagName?function(g,T){return typeof T.getElementsByTagName<"u"?T.getElementsByTagName(g):n.qsa?T.querySelectorAll(g):void 0}:function(g,T){var k,E=[],A=0,P=T.getElementsByTagName(g);if(g==="*"){for(;k=P[A++];)k.nodeType===1&&E.push(k);return E}return P},r.find.CLASS=n.getElementsByClassName&&function(g,T){if(typeof T.getElementsByClassName<"u"&&M)return T.getElementsByClassName(g)},K=[],q=[],(n.qsa=at.test(b.querySelectorAll))&&(we(function(g){D.appendChild(g).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",g.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+U+`*(?:''|"")`),g.querySelectorAll("[selected]").length||q.push("\\["+U+"*(?:value|"+Qt+")"),g.querySelectorAll("[id~="+_+"-]").length||q.push("~="),g.querySelectorAll(":checked").length||q.push(":checked"),g.querySelectorAll("a#"+_+"+*").length||q.push(".#.+[+~]")}),we(function(g){g.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var T=b.createElement("input");T.setAttribute("type","hidden"),g.appendChild(T).setAttribute("name","D"),g.querySelectorAll("[name=d]").length&&q.push("name"+U+"*[*^$|!~]?="),g.querySelectorAll(":enabled").length!==2&&q.push(":enabled",":disabled"),D.appendChild(g).disabled=!0,g.querySelectorAll(":disabled").length!==2&&q.push(":enabled",":disabled"),g.querySelectorAll("*,:x"),q.push(",.*:")})),(n.matchesSelector=at.test(Q=D.matches||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&we(function(g){n.disconnectedMatch=Q.call(g,"*"),Q.call(g,"[s!='']:x"),K.push("!=",Zt)}),q=q.length&&new RegExp(q.join("|")),K=K.length&&new RegExp(K.join("|")),c=at.test(D.compareDocumentPosition),ae=c||at.test(D.contains)?function(g,T){var k=g.nodeType===9?g.documentElement:g,E=T&&T.parentNode;return g===E||!(!E||E.nodeType!==1||!(k.contains?k.contains(E):g.compareDocumentPosition&&16&g.compareDocumentPosition(E)))}:function(g,T){if(T){for(;T=T.parentNode;)if(T===g)return!0}return!1},ge=c?function(g,T){if(g===T)return C=!0,0;var k=!g.compareDocumentPosition-!T.compareDocumentPosition;return k||(1&(k=(g.ownerDocument||g)===(T.ownerDocument||T)?g.compareDocumentPosition(T):1)||!n.sortDetached&&T.compareDocumentPosition(g)===k?g===b||g.ownerDocument===R&&ae(R,g)?-1:T===b||T.ownerDocument===R&&ae(R,T)?1:x?Oe(x,g)-Oe(x,T):0:4&k?-1:1)}:function(g,T){if(g===T)return C=!0,0;var k,E=0,A=g.parentNode,P=T.parentNode,N=[g],H=[T];if(!A||!P)return g===b?-1:T===b?1:A?-1:P?1:x?Oe(x,g)-Oe(x,T):0;if(A===P)return tr(g,T);for(k=g;k=k.parentNode;)N.unshift(k);for(k=T;k=k.parentNode;)H.unshift(k);for(;N[E]===H[E];)E++;return E?tr(N[E],H[E]):N[E]===R?-1:H[E]===R?1:0}),b},z.matches=function(l,c){return z(l,null,null,c)},z.matchesSelector=function(l,c){if((l.ownerDocument||l)!==b&&v(l),c=c.replace(co,"='$1']"),n.matchesSelector&&M&&!Xe[c+" "]&&(!K||!K.test(c))&&(!q||!q.test(c)))try{var p=Q.call(l,c);if(p||n.disconnectedMatch||l.document&&l.document.nodeType!==11)return p}catch{}return z(c,b,null,[l]).length>0},z.contains=function(l,c){return(l.ownerDocument||l)!==b&&v(l),ae(l,c)},z.attr=function(l,c){(l.ownerDocument||l)!==b&&v(l);var p=r.attrHandle[c.toLowerCase()],y=p&&st.call(r.attrHandle,c.toLowerCase())?p(l,c,!M):void 0;return y!==void 0?y:n.attributes||!M?l.getAttribute(c):(y=l.getAttributeNode(c))&&y.specified?y.value:null},z.escape=function(l){return(l+"").replace(Qn,Zn)},z.error=function(l){throw new Error("Syntax error, unrecognized expression: "+l)},z.uniqueSort=function(l){var c,p=[],y=0,g=0;if(C=!n.detectDuplicates,x=!n.sortStable&&l.slice(0),l.sort(ge),C){for(;c=l[g++];)c===l[g]&&(y=p.push(g));for(;y--;)l.splice(p[y],1)}return x=null,l},i=z.getText=function(l){var c,p="",y=0,g=l.nodeType;if(g){if(g===1||g===9||g===11){if(typeof l.textContent=="string")return l.textContent;for(l=l.firstChild;l;l=l.nextSibling)p+=i(l)}else if(g===3||g===4)return l.nodeValue}else for(;c=l[y++];)p+=i(c);return p},(r=z.selectors={cacheLength:50,createPseudo:me,match:St,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(l){return l[1]=l[1].replace(Se,Ee),l[3]=(l[3]||l[4]||l[5]||"").replace(Se,Ee),l[2]==="~="&&(l[3]=" "+l[3]+" "),l.slice(0,4)},CHILD:function(l){return l[1]=l[1].toLowerCase(),l[1].slice(0,3)==="nth"?(l[3]||z.error(l[0]),l[4]=+(l[4]?l[5]+(l[6]||1):2*(l[3]==="even"||l[3]==="odd")),l[5]=+(l[7]+l[8]||l[3]==="odd")):l[3]&&z.error(l[0]),l},PSEUDO:function(l){var c,p=!l[6]&&l[2];return St.CHILD.test(l[0])?null:(l[3]?l[2]=l[4]||l[5]||"":p&&uo.test(p)&&(c=a(p,!0))&&(c=p.indexOf(")",p.length-c)-p.length)&&(l[0]=l[0].slice(0,c),l[2]=p.slice(0,c)),l.slice(0,3))}},filter:{TAG:function(l){var c=l.replace(Se,Ee).toLowerCase();return l==="*"?function(){return!0}:function(p){return p.nodeName&&p.nodeName.toLowerCase()===c}},CLASS:function(l){var c=J[l+" "];return c||(c=new RegExp("(^|"+U+")"+l+"("+U+"|$)"))&&J(l,function(p){return c.test(typeof p.className=="string"&&p.className||typeof p.getAttribute<"u"&&p.getAttribute("class")||"")})},ATTR:function(l,c,p){return function(y){var g=z.attr(y,l);return g==null?c==="!=":!c||(g+="",c==="="?g===p:c==="!="?g!==p:c==="^="?p&&g.indexOf(p)===0:c==="*="?p&&g.indexOf(p)>-1:c==="$="?p&&g.slice(-p.length)===p:c==="~="?(" "+g.replace(so," ")+" ").indexOf(p)>-1:c==="|="&&(g===p||g.slice(0,p.length+1)===p+"-"))}},CHILD:function(l,c,p,y,g){var T=l.slice(0,3)!=="nth",k=l.slice(-4)!=="last",E=c==="of-type";return y===1&&g===0?function(A){return!!A.parentNode}:function(A,P,N){var H,$,X,I,ee,te,le=T!==k?"nextSibling":"previousSibling",G=A.parentNode,lt=E&&A.nodeName.toLowerCase(),ct=!N&&!E,fe=!1;if(G){if(T){for(;le;){for(I=A;I=I[le];)if(E?I.nodeName.toLowerCase()===lt:I.nodeType===1)return!1;te=le=l==="only"&&!te&&"nextSibling"}return!0}if(te=[k?G.firstChild:G.lastChild],k&&ct){for(fe=(ee=(H=($=(X=(I=G)[_]||(I[_]={}))[I.uniqueID]||(X[I.uniqueID]={}))[l]||[])[0]===se&&H[1])&&H[2],I=ee&&G.childNodes[ee];I=++ee&&I&&I[le]||(fe=ee=0)||te.pop();)if(I.nodeType===1&&++fe&&I===A){$[l]=[se,ee,fe];break}}else if(ct&&(fe=ee=(H=($=(X=(I=A)[_]||(I[_]={}))[I.uniqueID]||(X[I.uniqueID]={}))[l]||[])[0]===se&&H[1]),fe===!1)for(;(I=++ee&&I&&I[le]||(fe=ee=0)||te.pop())&&!((E?I.nodeName.toLowerCase()===lt:I.nodeType===1)&&++fe&&(ct&&(($=(X=I[_]||(I[_]={}))[I.uniqueID]||(X[I.uniqueID]={}))[l]=[se,fe]),I===A)););return(fe-=g)===y||fe%y==0&&fe/y>=0}}},PSEUDO:function(l,c){var p,y=r.pseudos[l]||r.setFilters[l.toLowerCase()]||z.error("unsupported pseudo: "+l);return y[_]?y(c):y.length>1?(p=[l,l,"",c],r.setFilters.hasOwnProperty(l.toLowerCase())?me(function(g,T){for(var k,E=y(g,c),A=E.length;A--;)g[k=Oe(g,E[A])]=!(T[k]=E[A])}):function(g){return y(g,0,p)}):y}},pseudos:{not:me(function(l){var c=[],p=[],y=u(l.replace(jt,"$1"));return y[_]?me(function(g,T,k,E){for(var A,P=y(g,null,E,[]),N=g.length;N--;)(A=P[N])&&(g[N]=!(T[N]=A))}):function(g,T,k){return c[0]=g,y(c,null,k,p),c[0]=null,!p.pop()}}),has:me(function(l){return function(c){return z(l,c).length>0}}),contains:me(function(l){return l=l.replace(Se,Ee),function(c){return(c.textContent||c.innerText||i(c)).indexOf(l)>-1}}),lang:me(function(l){return po.test(l||"")||z.error("unsupported lang: "+l),l=l.replace(Se,Ee).toLowerCase(),function(c){var p;do if(p=M?c.lang:c.getAttribute("xml:lang")||c.getAttribute("lang"))return(p=p.toLowerCase())===l||p.indexOf(l+"-")===0;while((c=c.parentNode)&&c.nodeType===1);return!1}}),target:function(l){var c=e.location&&e.location.hash;return c&&c.slice(1)===l.id},root:function(l){return l===D},focus:function(l){return l===b.activeElement&&(!b.hasFocus||b.hasFocus())&&!!(l.type||l.href||~l.tabIndex)},enabled:nr(!1),disabled:nr(!0),checked:function(l){var c=l.nodeName.toLowerCase();return c==="input"&&!!l.checked||c==="option"&&!!l.selected},selected:function(l){return l.parentNode&&l.parentNode.selectedIndex,l.selected===!0},empty:function(l){for(l=l.firstChild;l;l=l.nextSibling)if(l.nodeType<6)return!1;return!0},parent:function(l){return!r.pseudos.empty(l)},header:function(l){return ho.test(l.nodeName)},input:function(l){return fo.test(l.nodeName)},button:function(l){var c=l.nodeName.toLowerCase();return c==="input"&&l.type==="button"||c==="button"},text:function(l){var c;return l.nodeName.toLowerCase()==="input"&&l.type==="text"&&((c=l.getAttribute("type"))==null||c.toLowerCase()==="text")},first:Be(function(){return[0]}),last:Be(function(l,c){return[c-1]}),eq:Be(function(l,c,p){return[p<0?p+c:p]}),even:Be(function(l,c){for(var p=0;p<c;p+=2)l.push(p);return l}),odd:Be(function(l,c){for(var p=1;p<c;p+=2)l.push(p);return l}),lt:Be(function(l,c,p){for(var y=p<0?p+c:p;--y>=0;)l.push(y);return l}),gt:Be(function(l,c,p){for(var y=p<0?p+c:p;++y<c;)l.push(y);return l})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=vo(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=yo(t);function rr(){}rr.prototype=r.filters=r.pseudos,r.setFilters=new rr,a=z.tokenize=function(l,c){var p,y,g,T,k,E,A,P=it[l+" "];if(P)return c?0:P.slice(0);for(k=l,E=[],A=r.preFilter;k;){p&&!(y=ao.exec(k))||(y&&(k=k.slice(y[0].length)||k),E.push(g=[])),p=!1,(y=lo.exec(k))&&(p=y.shift(),g.push({value:p,type:y[0].replace(jt," ")}),k=k.slice(p.length));for(T in r.filter)!(y=St[T].exec(k))||A[T]&&!(y=A[T](y))||(p=y.shift(),g.push({value:p,type:T,matches:y}),k=k.slice(p.length));if(!p)break}return c?k.length:k?z.error(l):it(l,E).slice(0)};function Et(l){for(var c=0,p=l.length,y="";c<p;c++)y+=l[c].value;return y}function At(l,c,p){var y=c.dir,g=c.next,T=g||y,k=p&&T==="parentNode",E=F++;return c.first?function(A,P,N){for(;A=A[y];)if(A.nodeType===1||k)return l(A,P,N);return!1}:function(A,P,N){var H,$,X,I=[se,E];if(N){for(;A=A[y];)if((A.nodeType===1||k)&&l(A,P,N))return!0}else for(;A=A[y];)if(A.nodeType===1||k)if(X=A[_]||(A[_]={}),$=X[A.uniqueID]||(X[A.uniqueID]={}),g&&g===A.nodeName.toLowerCase())A=A[y]||A;else{if((H=$[T])&&H[0]===se&&H[1]===E)return I[2]=H[2];if($[T]=I,I[2]=l(A,P,N))return!0}return!1}}function on(l){return l.length>1?function(c,p,y){for(var g=l.length;g--;)if(!l[g](c,p,y))return!1;return!0}:l[0]}function bo(l,c,p){for(var y=0,g=c.length;y<g;y++)z(l,c[y],p);return p}function Lt(l,c,p,y,g){for(var T,k=[],E=0,A=l.length,P=c!=null;E<A;E++)(T=l[E])&&(p&&!p(T,y,g)||(k.push(T),P&&c.push(E)));return k}function sn(l,c,p,y,g,T){return y&&!y[_]&&(y=sn(y)),g&&!g[_]&&(g=sn(g,T)),me(function(k,E,A,P){var N,H,$,X=[],I=[],ee=E.length,te=k||bo(c||"*",A.nodeType?[A]:A,[]),le=!l||!k&&c?te:Lt(te,X,l,A,P),G=p?g||(k?l:ee||y)?[]:E:le;if(p&&p(le,G,A,P),y)for(N=Lt(G,I),y(N,[],A,P),H=N.length;H--;)($=N[H])&&(G[I[H]]=!(le[I[H]]=$));if(k){if(g||l){if(g){for(N=[],H=G.length;H--;)($=G[H])&&N.push(le[H]=$);g(null,G=[],N,P)}for(H=G.length;H--;)($=G[H])&&(N=g?Oe(k,$):X[H])>-1&&(k[N]=!(E[N]=$))}}else G=Lt(G===E?G.splice(ee,G.length):G),g?g(null,E,G,P):Z.apply(E,G)})}function an(l){for(var c,p,y,g=l.length,T=r.relative[l[0].type],k=T||r.relative[" "],E=T?1:0,A=At(function(H){return H===c},k,!0),P=At(function(H){return Oe(c,H)>-1},k,!0),N=[function(H,$,X){var I=!T&&(X||$!==h)||((c=$).nodeType?A(H,$,X):P(H,$,X));return c=null,I}];E<g;E++)if(p=r.relative[l[E].type])N=[At(on(N),p)];else{if((p=r.filter[l[E].type].apply(null,l[E].matches))[_]){for(y=++E;y<g&&!r.relative[l[y].type];y++);return sn(E>1&&on(N),E>1&&Et(l.slice(0,E-1).concat({value:l[E-2].type===" "?"*":""})).replace(jt,"$1"),p,E<y&&an(l.slice(E,y)),y<g&&an(l=l.slice(y)),y<g&&Et(l))}N.push(p)}return on(N)}function xo(l,c){var p=c.length>0,y=l.length>0,g=function(T,k,E,A,P){var N,H,$,X=0,I="0",ee=T&&[],te=[],le=h,G=T||y&&r.find.TAG("*",P),lt=se+=le==null?1:Math.random()||.1,ct=G.length;for(P&&(h=k===b||k||P);I!==ct&&(N=G[I])!=null;I++){if(y&&N){for(H=0,k||N.ownerDocument===b||(v(N),E=!M);$=l[H++];)if($(N,k||b,E)){A.push(N);break}P&&(se=lt)}p&&((N=!$&&N)&&X--,T&&ee.push(N))}if(X+=I,p&&I!==X){for(H=0;$=c[H++];)$(ee,te,k,E);if(T){if(X>0)for(;I--;)ee[I]||te[I]||(te[I]=Ne.call(A));te=Lt(te)}Z.apply(A,te),P&&!T&&te.length>0&&X+c.length>1&&z.uniqueSort(A)}return P&&(se=lt,h=le),ee};return p?me(g):g}return u=z.compile=function(l,c){var p,y=[],g=[],T=Xe[l+" "];if(!T){for(c||(c=a(l)),p=c.length;p--;)(T=an(c[p]))[_]?y.push(T):g.push(T);(T=Xe(l,xo(g,y))).selector=l}return T},d=z.select=function(l,c,p,y){var g,T,k,E,A,P=typeof l=="function"&&l,N=!y&&a(l=P.selector||l);if(p=p||[],N.length===1){if((T=N[0]=N[0].slice(0)).length>2&&(k=T[0]).type==="ID"&&c.nodeType===9&&M&&r.relative[T[1].type]){if(!(c=(r.find.ID(k.matches[0].replace(Se,Ee),c)||[])[0]))return p;P&&(c=c.parentNode),l=l.slice(T.shift().value.length)}for(g=St.needsContext.test(l)?0:T.length;g--&&(k=T[g],!r.relative[E=k.type]);)if((A=r.find[E])&&(y=A(k.matches[0].replace(Se,Ee),en.test(T[0].type)&&rn(c.parentNode)||c))){if(T.splice(g,1),!(l=y.length&&Et(T)))return Z.apply(p,y),p;break}}return(P||u(l,N))(y,c,!M,p,!c||en.test(l)&&rn(c.parentNode)||c),p},n.sortStable=_.split("").sort(ge).join("")===_,n.detectDuplicates=!!C,v(),n.sortDetached=we(function(l){return 1&l.compareDocumentPosition(b.createElement("fieldset"))}),we(function(l){return l.innerHTML="<a href='#'></a>",l.firstChild.getAttribute("href")==="#"})||nn("type|href|height|width",function(l,c,p){if(!p)return l.getAttribute(c,c.toLowerCase()==="type"?1:2)}),n.attributes&&we(function(l){return l.innerHTML="<input/>",l.firstChild.setAttribute("value",""),l.firstChild.getAttribute("value")===""})||nn("value",function(l,c,p){if(!p&&l.nodeName.toLowerCase()==="input")return l.defaultValue}),we(function(l){return l.getAttribute("disabled")==null})||nn(Qt,function(l,c,p){var y;if(!p)return l[c]===!0?c.toLowerCase():(y=l.getAttributeNode(c))&&y.specified?y.value:null}),z}(m);o.find=ke,o.expr=ke.selectors,o.expr[":"]=o.expr.pseudos,o.uniqueSort=o.unique=ke.uniqueSort,o.text=ke.getText,o.isXMLDoc=ke.isXML,o.contains=ke.contains,o.escapeSelector=ke.escape;var Le=function(e,t,n){for(var r=[],i=n!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(i&&o(e).is(n))break;r.push(e)}return r},ft=function(e,t){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n},Ke=o.expr.match.needsContext;function ce(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var ht=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Fe(e,t,n){return O(t)?o.grep(e,function(r,i){return!!t.call(r,i,r)!==n}):t.nodeType?o.grep(e,function(r){return r===t!==n}):typeof t!="string"?o.grep(e,function(r){return ye.call(t,r)>-1!==n}):o.filter(t,e,n)}o.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),t.length===1&&r.nodeType===1?o.find.matchesSelector(r,e)?[r]:[]:o.find.matches(e,o.grep(t,function(i){return i.nodeType===1}))},o.fn.extend({find:function(e){var t,n,r=this.length,i=this;if(typeof e!="string")return this.pushStack(o(e).filter(function(){for(t=0;t<r;t++)if(o.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)o.find(e,i[t],n);return r>1?o.uniqueSort(n):n},filter:function(e){return this.pushStack(Fe(this,e||[],!1))},not:function(e){return this.pushStack(Fe(this,e||[],!0))},is:function(e){return!!Fe(this,typeof e=="string"&&Ke.test(e)?o(e):e||[],!1).length}});var Pe,Ie=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(o.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||Pe,typeof e=="string"){if(!(r=e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?[null,e,null]:Ie.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof o?t[0]:t,o.merge(this,o.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:w,!0)),ht.test(r[1])&&o.isPlainObject(t))for(r in t)O(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=w.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):O(e)?n.ready!==void 0?n.ready(e):e(o):o.makeArray(e,this)}).prototype=o.fn,Pe=o(w);var Ot=/^(?:parents|prev(?:Until|All))/,gt={children:!0,contents:!0,next:!0,prev:!0};o.fn.extend({has:function(e){var t=o(e,this),n=t.length;return this.filter(function(){for(var r=0;r<n;r++)if(o.contains(this,t[r]))return!0})},closest:function(e,t){var n,r=0,i=this.length,s=[],a=typeof e!="string"&&o(e);if(!Ke.test(e)){for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:n.nodeType===1&&o.find.matchesSelector(n,e))){s.push(n);break}}return this.pushStack(s.length>1?o.uniqueSort(s):s)},index:function(e){return e?typeof e=="string"?ye.call(o(e),this[0]):ye.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(o.uniqueSort(o.merge(this.get(),o(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Qe(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}o.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return Le(e,"parentNode")},parentsUntil:function(e,t,n){return Le(e,"parentNode",n)},next:function(e){return Qe(e,"nextSibling")},prev:function(e){return Qe(e,"previousSibling")},nextAll:function(e){return Le(e,"nextSibling")},prevAll:function(e){return Le(e,"previousSibling")},nextUntil:function(e,t,n){return Le(e,"nextSibling",n)},prevUntil:function(e,t,n){return Le(e,"previousSibling",n)},siblings:function(e){return ft((e.parentNode||{}).firstChild,e)},children:function(e){return ft(e.firstChild)},contents:function(e){return ce(e,"iframe")?e.contentDocument:(ce(e,"template")&&(e=e.content||e),o.merge([],e.childNodes))}},function(e,t){o.fn[e]=function(n,r){var i=o.map(this,t,n);return e.slice(-5)!=="Until"&&(r=n),r&&typeof r=="string"&&(i=o.filter(r,i)),this.length>1&&(gt[e]||o.uniqueSort(i),Ot.test(e)&&i.reverse()),this.pushStack(i)}});var ue=/[^\x20\t\r\n\f]+/g;function Mt(e){var t={};return o.each(e.match(ue)||[],function(n,r){t[r]=!0}),t}o.Callbacks=function(e){e=typeof e=="string"?Mt(e):o.extend({},e);var t,n,r,i,s=[],a=[],u=-1,d=function(){for(i=i||e.once,r=t=!0;a.length;u=-1)for(n=a.shift();++u<s.length;)s[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=s.length,n=!1);e.memory||(n=!1),t=!1,i&&(s=n?[]:"")},h={add:function(){return s&&(n&&!t&&(u=s.length-1,a.push(n)),function x(C){o.each(C,function(v,b){O(b)?e.unique&&h.has(b)||s.push(b):b&&b.length&&be(b)!=="string"&&x(b)})}(arguments),n&&!t&&d()),this},remove:function(){return o.each(arguments,function(x,C){for(var v;(v=o.inArray(C,s,v))>-1;)s.splice(v,1),v<=u&&u--}),this},has:function(x){return x?o.inArray(x,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return i=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return i=a=[],n||t||(s=n=""),this},locked:function(){return!!i},fireWith:function(x,C){return i||(C=[x,(C=C||[]).slice?C.slice():C],a.push(C),t||d()),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!r}};return h};function De(e){return e}function We(e){throw e}function mt(e,t,n,r){var i;try{e&&O(i=e.promise)?i.call(e).done(t).fail(n):e&&O(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(s){n.apply(void 0,[s])}}o.extend({Deferred:function(e){var t=[["notify","progress",o.Callbacks("memory"),o.Callbacks("memory"),2],["resolve","done",o.Callbacks("once memory"),o.Callbacks("once memory"),0,"resolved"],["reject","fail",o.Callbacks("once memory"),o.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},catch:function(s){return r.then(null,s)},pipe:function(){var s=arguments;return o.Deferred(function(a){o.each(t,function(u,d){var h=O(s[d[4]])&&s[d[4]];i[d[1]](function(){var x=h&&h.apply(this,arguments);x&&O(x.promise)?x.promise().progress(a.notify).done(a.resolve).fail(a.reject):a[d[0]+"With"](this,h?[x]:arguments)})}),s=null}).promise()},then:function(s,a,u){var d=0;function h(x,C,v,b){return function(){var D=this,M=arguments,q=function(){var Q,ae;if(!(x<d)){if((Q=v.apply(D,M))===C.promise())throw new TypeError("Thenable self-resolution");ae=Q&&(typeof Q=="object"||typeof Q=="function")&&Q.then,O(ae)?b?ae.call(Q,h(d,C,De,b),h(d,C,We,b)):(d++,ae.call(Q,h(d,C,De,b),h(d,C,We,b),h(d,C,De,C.notifyWith))):(v!==De&&(D=void 0,M=[Q]),(b||C.resolveWith)(D,M))}},K=b?q:function(){try{q()}catch(Q){o.Deferred.exceptionHook&&o.Deferred.exceptionHook(Q,K.stackTrace),x+1>=d&&(v!==We&&(D=void 0,M=[Q]),C.rejectWith(D,M))}};x?K():(o.Deferred.getStackHook&&(K.stackTrace=o.Deferred.getStackHook()),m.setTimeout(K))}}return o.Deferred(function(x){t[0][3].add(h(0,x,O(u)?u:De,x.notifyWith)),t[1][3].add(h(0,x,O(s)?s:De)),t[2][3].add(h(0,x,O(a)?a:We))}).promise()},promise:function(s){return s!=null?o.extend(s,r):r}},i={};return o.each(t,function(s,a){var u=a[2],d=a[5];r[a[1]]=u.add,d&&u.add(function(){n=d},t[3-s][2].disable,t[3-s][3].disable,t[0][2].lock,t[0][3].lock),u.add(a[3].fire),i[a[0]]=function(){return i[a[0]+"With"](this===i?void 0:this,arguments),this},i[a[0]+"With"]=u.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=arguments.length,n=t,r=Array(n),i=L.call(arguments),s=o.Deferred(),a=function(u){return function(d){r[u]=this,i[u]=arguments.length>1?L.call(arguments):d,--t||s.resolveWith(r,i)}};if(t<=1&&(mt(e,s.done(a(n)).resolve,s.reject,!t),s.state()==="pending"||O(i[n]&&i[n].then)))return s.then();for(;n--;)mt(i[n],a(n),s.reject);return s.promise()}});var gn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;o.Deferred.exceptionHook=function(e,t){m.console&&m.console.warn&&e&&gn.test(e.name)&&m.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},o.readyException=function(e){m.setTimeout(function(){throw e})};var Bt=o.Deferred();o.fn.ready=function(e){return Bt.then(e).catch(function(t){o.readyException(t)}),this},o.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--o.readyWait:o.isReady)||(o.isReady=!0,e!==!0&&--o.readyWait>0||Bt.resolveWith(w,[o]))}}),o.ready.then=Bt.then;function vt(){w.removeEventListener("DOMContentLoaded",vt),m.removeEventListener("load",vt),o.ready()}w.readyState==="complete"||w.readyState!=="loading"&&!w.documentElement.doScroll?m.setTimeout(o.ready):(w.addEventListener("DOMContentLoaded",vt),m.addEventListener("load",vt));var Ce=function(e,t,n,r,i,s,a){var u=0,d=e.length,h=n==null;if(be(n)==="object"){i=!0;for(u in n)Ce(e,t,u,n[u],!0,s,a)}else if(r!==void 0&&(i=!0,O(r)||(a=!0),h&&(a?(t.call(e,r),t=null):(h=t,t=function(x,C,v){return h.call(o(x),v)})),t))for(;u<d;u++)t(e[u],n,a?r:r.call(e[u],u,t(e[u],n)));return i?e:h?t.call(e):d?t(e[0],n):s},vr=/^-ms-/,yr=/-([a-z])/g;function br(e,t){return t.toUpperCase()}function xe(e){return e.replace(vr,"ms-").replace(yr,br)}var yt=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Ze(){this.expando=o.expando+Ze.uid++}Ze.uid=1,Ze.prototype={cache:function(e){var t=e[this.expando];return t||(t={},yt(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if(typeof t=="string")i[xe(t)]=n;else for(r in t)i[xe(r)]=t[r];return i},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][xe(t)]},access:function(e,t,n){return t===void 0||t&&typeof t=="string"&&n===void 0?this.get(e,t):(this.set(e,t,n),n!==void 0?n:t)},remove:function(e,t){var n,r=e[this.expando];if(r!==void 0){if(t!==void 0)for(n=(t=Array.isArray(t)?t.map(xe):(t=xe(t))in r?[t]:t.match(ue)||[]).length;n--;)delete r[t[n]];(t===void 0||o.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!o.isEmptyObject(t)}};var B=new Ze,re=new Ze,xr=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,wr=/[A-Z]/g;function Tr(e){return e==="true"||e!=="false"&&(e==="null"?null:e===+e+""?+e:xr.test(e)?JSON.parse(e):e)}function mn(e,t,n){var r;if(n===void 0&&e.nodeType===1)if(r="data-"+t.replace(wr,"-$&").toLowerCase(),typeof(n=e.getAttribute(r))=="string"){try{n=Tr(n)}catch{}re.set(e,t,n)}else n=void 0;return n}o.extend({hasData:function(e){return re.hasData(e)||B.hasData(e)},data:function(e,t,n){return re.access(e,t,n)},removeData:function(e,t){re.remove(e,t)},_data:function(e,t,n){return B.access(e,t,n)},_removeData:function(e,t){B.remove(e,t)}}),o.fn.extend({data:function(e,t){var n,r,i,s=this[0],a=s&&s.attributes;if(e===void 0){if(this.length&&(i=re.get(s),s.nodeType===1&&!B.get(s,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name).indexOf("data-")===0&&(r=xe(r.slice(5)),mn(s,r,i[r]));B.set(s,"hasDataAttrs",!0)}return i}return typeof e=="object"?this.each(function(){re.set(this,e)}):Ce(this,function(u){var d;if(s&&u===void 0){if((d=re.get(s,e))!==void 0||(d=mn(s,e))!==void 0)return d}else this.each(function(){re.set(this,e,u)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){re.remove(this,e)})}}),o.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=B.get(e,t),n&&(!r||Array.isArray(n)?r=B.access(e,t,o.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=o.queue(e,t),r=n.length,i=n.shift(),s=o._queueHooks(e,t),a=function(){o.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,a,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return B.get(e,n)||B.access(e,n,{empty:o.Callbacks("once memory").add(function(){B.remove(e,[t+"queue",n])})})}}),o.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?o.queue(this[0],e):t===void 0?this:this.each(function(){var r=o.queue(this,e,t);o._queueHooks(this,e),e==="fx"&&r[0]!=="inprogress"&&o.dequeue(this,e)})},dequeue:function(e){return this.each(function(){o.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=o.Deferred(),s=this,a=this.length,u=function(){--r||i.resolveWith(s,[s])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";a--;)(n=B.get(s[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var vn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,et=new RegExp("^(?:([+-])=|)("+vn+")([a-z%]*)$","i"),je=["Top","Right","Bottom","Left"],bt=function(e,t){return(e=t||e).style.display==="none"||e.style.display===""&&o.contains(e.ownerDocument,e)&&o.css(e,"display")==="none"},yn=function(e,t,n,r){var i,s,a={};for(s in t)a[s]=e.style[s],e.style[s]=t[s];i=n.apply(e,r||[]);for(s in t)e.style[s]=a[s];return i};function bn(e,t,n,r){var i,s,a=20,u=r?function(){return r.cur()}:function(){return o.css(e,t,"")},d=u(),h=n&&n[3]||(o.cssNumber[t]?"":"px"),x=(o.cssNumber[t]||h!=="px"&&+d)&&et.exec(o.css(e,t));if(x&&x[3]!==h){for(d/=2,h=h||x[3],x=+d||1;a--;)o.style(e,t,x+h),(1-s)*(1-(s=u()/d||.5))<=0&&(a=0),x/=s;x*=2,o.style(e,t,x+h),n=n||[]}return n&&(x=+x||+d||0,i=n[1]?x+(n[1]+1)*n[2]:+n[2],r&&(r.unit=h,r.start=x,r.end=i)),i}var xn={};function kr(e){var t,n=e.ownerDocument,r=e.nodeName,i=xn[r];return i||(t=n.body.appendChild(n.createElement(r)),i=o.css(t,"display"),t.parentNode.removeChild(t),i==="none"&&(i="block"),xn[r]=i,i)}function _e(e,t){for(var n,r,i=[],s=0,a=e.length;s<a;s++)(r=e[s]).style&&(n=r.style.display,t?(n==="none"&&(i[s]=B.get(r,"display")||null,i[s]||(r.style.display="")),r.style.display===""&&bt(r)&&(i[s]=kr(r))):n!=="none"&&(i[s]="none",B.set(r,"display",n)));for(s=0;s<a;s++)i[s]!=null&&(e[s].style.display=i[s]);return e}o.fn.extend({show:function(){return _e(this,!0)},hide:function(){return _e(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){bt(this)?o(this).show():o(this).hide()})}});var wn=/^(?:checkbox|radio)$/i,Tn=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,kn=/^$|^module$|\/(?:java|ecma)script/i,de={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};de.optgroup=de.option,de.tbody=de.tfoot=de.colgroup=de.caption=de.thead,de.th=de.td;function oe(e,t){var n;return n=typeof e.getElementsByTagName<"u"?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?e.querySelectorAll(t||"*"):[],t===void 0||t&&ce(e,t)?o.merge([e],n):n}function $t(e,t){for(var n=0,r=e.length;n<r;n++)B.set(e[n],"globalEval",!t||B.get(t[n],"globalEval"))}var Cr=/<|&#?\w+;/;function Cn(e,t,n,r,i){for(var s,a,u,d,h,x,C=t.createDocumentFragment(),v=[],b=0,D=e.length;b<D;b++)if((s=e[b])||s===0)if(be(s)==="object")o.merge(v,s.nodeType?[s]:s);else if(Cr.test(s)){for(a=a||C.appendChild(t.createElement("div")),u=(Tn.exec(s)||["",""])[1].toLowerCase(),d=de[u]||de._default,a.innerHTML=d[1]+o.htmlPrefilter(s)+d[2],x=d[0];x--;)a=a.lastChild;o.merge(v,a.childNodes),(a=C.firstChild).textContent=""}else v.push(t.createTextNode(s));for(C.textContent="",b=0;s=v[b++];)if(r&&o.inArray(s,r)>-1)i&&i.push(s);else if(h=o.contains(s.ownerDocument,s),a=oe(C.appendChild(s),"script"),h&&$t(a),n)for(x=0;s=a[x++];)kn.test(s.type||"")&&n.push(s);return C}(function(){var e=w.createDocumentFragment().appendChild(w.createElement("div")),t=w.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),W.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",W.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue})();var xt=w.documentElement,jr=/^key/,Sr=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,jn=/^([^.]*)(?:\.(.+)|)/;function wt(){return!0}function Ue(){return!1}function Sn(){try{return w.activeElement}catch{}}function Ft(e,t,n,r,i,s){var a,u;if(typeof t=="object"){typeof n!="string"&&(r=r||n,n=void 0);for(u in t)Ft(e,u,n,r,t[u],s);return e}if(r==null&&i==null?(i=n,r=n=void 0):i==null&&(typeof n=="string"?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=Ue;else if(!i)return e;return s===1&&(a=i,(i=function(d){return o().off(d),a.apply(this,arguments)}).guid=a.guid||(a.guid=o.guid++)),e.each(function(){o.event.add(this,t,i,r,n)})}o.event={global:{},add:function(e,t,n,r,i){var s,a,u,d,h,x,C,v,b,D,M,q=B.get(e);if(q)for(n.handler&&(n=(s=n).handler,i=s.selector),i&&o.find.matchesSelector(xt,i),n.guid||(n.guid=o.guid++),(d=q.events)||(d=q.events={}),(a=q.handle)||(a=q.handle=function(K){return typeof o<"u"&&o.event.triggered!==K.type?o.event.dispatch.apply(e,arguments):void 0}),h=(t=(t||"").match(ue)||[""]).length;h--;)b=M=(u=jn.exec(t[h])||[])[1],D=(u[2]||"").split(".").sort(),b&&(C=o.event.special[b]||{},b=(i?C.delegateType:C.bindType)||b,C=o.event.special[b]||{},x=o.extend({type:b,origType:M,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&o.expr.match.needsContext.test(i),namespace:D.join(".")},s),(v=d[b])||((v=d[b]=[]).delegateCount=0,C.setup&&C.setup.call(e,r,D,a)!==!1||e.addEventListener&&e.addEventListener(b,a)),C.add&&(C.add.call(e,x),x.handler.guid||(x.handler.guid=n.guid)),i?v.splice(v.delegateCount++,0,x):v.push(x),o.event.global[b]=!0)},remove:function(e,t,n,r,i){var s,a,u,d,h,x,C,v,b,D,M,q=B.hasData(e)&&B.get(e);if(q&&(d=q.events)){for(h=(t=(t||"").match(ue)||[""]).length;h--;)if(u=jn.exec(t[h])||[],b=M=u[1],D=(u[2]||"").split(".").sort(),b){for(C=o.event.special[b]||{},v=d[b=(r?C.delegateType:C.bindType)||b]||[],u=u[2]&&new RegExp("(^|\\.)"+D.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=s=v.length;s--;)x=v[s],!i&&M!==x.origType||n&&n.guid!==x.guid||u&&!u.test(x.namespace)||r&&r!==x.selector&&(r!=="**"||!x.selector)||(v.splice(s,1),x.selector&&v.delegateCount--,C.remove&&C.remove.call(e,x));a&&!v.length&&(C.teardown&&C.teardown.call(e,D,q.handle)!==!1||o.removeEvent(e,b,q.handle),delete d[b])}else for(b in d)o.event.remove(e,b+t[h],n,r,!0);o.isEmptyObject(d)&&B.remove(e,"handle events")}},dispatch:function(e){var t=o.event.fix(e),n,r,i,s,a,u,d=new Array(arguments.length),h=(B.get(this,"events")||{})[t.type]||[],x=o.event.special[t.type]||{};for(d[0]=t,n=1;n<arguments.length;n++)d[n]=arguments[n];if(t.delegateTarget=this,!x.preDispatch||x.preDispatch.call(this,t)!==!1){for(u=o.event.handlers.call(this,t,h),n=0;(s=u[n++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,r=0;(a=s.handlers[r++])&&!t.isImmediatePropagationStopped();)t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,(i=((o.event.special[a.origType]||{}).handle||a.handler).apply(s.elem,d))!==void 0&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return x.postDispatch&&x.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,s,a,u=[],d=t.delegateCount,h=e.target;if(d&&h.nodeType&&!(e.type==="click"&&e.button>=1)){for(;h!==this;h=h.parentNode||this)if(h.nodeType===1&&(e.type!=="click"||h.disabled!==!0)){for(s=[],a={},n=0;n<d;n++)a[i=(r=t[n]).selector+" "]===void 0&&(a[i]=r.needsContext?o(i,this).index(h)>-1:o.find(i,this,null,[h]).length),a[i]&&s.push(r);s.length&&u.push({elem:h,handlers:s})}}return h=this,d<t.length&&u.push({elem:h,handlers:t.slice(d)}),u},addProp:function(e,t){Object.defineProperty(o.Event.prototype,e,{enumerable:!0,configurable:!0,get:O(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(n){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:n})}})},fix:function(e){return e[o.expando]?e:new o.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Sn()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Sn()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&ce(this,"input"))return this.click(),!1},_default:function(e){return ce(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},o.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},o.Event=function(e,t){if(!(this instanceof o.Event))return new o.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?wt:Ue,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&o.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[o.expando]=!0},o.Event.prototype={constructor:o.Event,isDefaultPrevented:Ue,isPropagationStopped:Ue,isImmediatePropagationStopped:Ue,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=wt,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=wt,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=wt,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},o.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return e.which==null&&jr.test(e.type)?e.charCode!=null?e.charCode:e.keyCode:!e.which&&t!==void 0&&Sr.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},o.event.addProp),o.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){o.event.special[e]={delegateType:t,bindType:t,handle:function(n){var r,i=this,s=n.relatedTarget,a=n.handleObj;return s&&(s===i||o.contains(i,s))||(n.type=a.origType,r=a.handler.apply(this,arguments),n.type=t),r}}}),o.fn.extend({on:function(e,t,n,r){return Ft(this,e,t,n,r)},one:function(e,t,n,r){return Ft(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,o(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if(typeof e=="object"){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&typeof t!="function"||(n=t,t=void 0),n===!1&&(n=Ue),this.each(function(){o.event.remove(this,e,n,t)})}});var Er=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ar=/<script|<style|<link/i,Lr=/checked\s*(?:[^=]|=\s*.checked.)/i,Dr=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function En(e,t){return ce(e,"table")&&ce(t.nodeType!==11?t:t.firstChild,"tr")&&o(e).children("tbody")[0]||e}function Nr(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function qr(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function An(e,t){var n,r,i,s,a,u,d,h;if(t.nodeType===1){if(B.hasData(e)&&(s=B.access(e),a=B.set(t,s),h=s.events)){delete a.handle,a.events={};for(i in h)for(n=0,r=h[i].length;n<r;n++)o.event.add(t,i,h[i][n])}re.hasData(e)&&(u=re.access(e),d=o.extend({},u),re.set(t,d))}}function Pr(e,t){var n=t.nodeName.toLowerCase();n==="input"&&wn.test(e.type)?t.checked=e.checked:n!=="input"&&n!=="textarea"||(t.defaultValue=e.defaultValue)}function Ve(e,t,n,r){t=V.apply([],t);var i,s,a,u,d,h,x=0,C=e.length,v=C-1,b=t[0],D=O(b);if(D||C>1&&typeof b=="string"&&!W.checkClone&&Lr.test(b))return e.each(function(M){var q=e.eq(M);D&&(t[0]=b.call(this,M,q.html())),Ve(q,t,n,r)});if(C&&(i=Cn(t,e[0].ownerDocument,!1,e,r),s=i.firstChild,i.childNodes.length===1&&(i=s),s||r)){for(u=(a=o.map(oe(i,"script"),Nr)).length;x<C;x++)d=i,x!==v&&(d=o.clone(d,!0,!0),u&&o.merge(a,oe(d,"script"))),n.call(e[x],d,x);if(u)for(h=a[a.length-1].ownerDocument,o.map(a,qr),x=0;x<u;x++)d=a[x],kn.test(d.type||"")&&!B.access(d,"globalEval")&&o.contains(h,d)&&(d.src&&(d.type||"").toLowerCase()!=="module"?o._evalUrl&&o._evalUrl(d.src):dt(d.textContent.replace(Dr,""),h,d))}return e}function Ln(e,t,n){for(var r,i=t?o.filter(t,e):e,s=0;(r=i[s])!=null;s++)n||r.nodeType!==1||o.cleanData(oe(r)),r.parentNode&&(n&&o.contains(r.ownerDocument,r)&&$t(oe(r,"script")),r.parentNode.removeChild(r));return e}o.extend({htmlPrefilter:function(e){return e.replace(Er,"<$1></$2>")},clone:function(e,t,n){var r,i,s,a,u=e.cloneNode(!0),d=o.contains(e.ownerDocument,e);if(!(W.noCloneChecked||e.nodeType!==1&&e.nodeType!==11||o.isXMLDoc(e)))for(a=oe(u),r=0,i=(s=oe(e)).length;r<i;r++)Pr(s[r],a[r]);if(t)if(n)for(s=s||oe(e),a=a||oe(u),r=0,i=s.length;r<i;r++)An(s[r],a[r]);else An(e,u);return(a=oe(u,"script")).length>0&&$t(a,!d&&oe(e,"script")),u},cleanData:function(e){for(var t,n,r,i=o.event.special,s=0;(n=e[s])!==void 0;s++)if(yt(n)){if(t=n[B.expando]){if(t.events)for(r in t.events)i[r]?o.event.remove(n,r):o.removeEvent(n,r,t.handle);n[B.expando]=void 0}n[re.expando]&&(n[re.expando]=void 0)}}}),o.fn.extend({detach:function(e){return Ln(this,e,!0)},remove:function(e){return Ln(this,e)},text:function(e){return Ce(this,function(t){return t===void 0?o.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=t)})},null,e,arguments.length)},append:function(){return Ve(this,arguments,function(e){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||En(this,e).appendChild(e)})},prepend:function(){return Ve(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=En(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ve(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ve(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(o.cleanData(oe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e!=null&&e,t=t??e,this.map(function(){return o.clone(this,e,t)})},html:function(e){return Ce(this,function(t){var n=this[0]||{},r=0,i=this.length;if(t===void 0&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!Ar.test(t)&&!de[(Tn.exec(t)||["",""])[1].toLowerCase()]){t=o.htmlPrefilter(t);try{for(;r<i;r++)(n=this[r]||{}).nodeType===1&&(o.cleanData(oe(n,!1)),n.innerHTML=t);n=0}catch{}}n&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Ve(this,arguments,function(t){var n=this.parentNode;o.inArray(this,e)<0&&(o.cleanData(oe(this)),n&&n.replaceChild(t,this))},e)}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){o.fn[e]=function(n){for(var r,i=[],s=o(n),a=s.length-1,u=0;u<=a;u++)r=u===a?this:this.clone(!0),o(s[u])[t](r),ne.apply(i,r.get());return this.pushStack(i)}});var Wt=new RegExp("^("+vn+")(?!px)[a-z%]+$","i"),Tt=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=m),t.getComputedStyle(e)},Ir=new RegExp(je.join("|"),"i");(function(){function e(){if(d){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xt.appendChild(u).appendChild(d);var h=m.getComputedStyle(d);n=h.top!=="1%",a=t(h.marginLeft)===12,d.style.right="60%",s=t(h.right)===36,r=t(h.width)===36,d.style.position="absolute",i=d.offsetWidth===36||"absolute",xt.removeChild(u),d=null}}function t(h){return Math.round(parseFloat(h))}var n,r,i,s,a,u=w.createElement("div"),d=w.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",W.clearCloneStyle=d.style.backgroundClip==="content-box",o.extend(W,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))})();function tt(e,t,n){var r,i,s,a,u=e.style;return(n=n||Tt(e))&&((a=n.getPropertyValue(t)||n[t])!==""||o.contains(e.ownerDocument,e)||(a=o.style(e,t)),!W.pixelBoxStyles()&&Wt.test(a)&&Ir.test(t)&&(r=u.width,i=u.minWidth,s=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=s)),a!==void 0?a+"":a}function Dn(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var Hr=/^(none|table(?!-c[ea]).+)/,Nn=/^--/,Rr={position:"absolute",visibility:"hidden",display:"block"},qn={letterSpacing:"0",fontWeight:"400"},Pn=["Webkit","Moz","ms"],In=w.createElement("div").style;function Or(e){if(e in In)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Pn.length;n--;)if((e=Pn[n]+t)in In)return e}function Hn(e){var t=o.cssProps[e];return t||(t=o.cssProps[e]=Or(e)||e),t}function Rn(e,t,n){var r=et.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function _t(e,t,n,r,i,s){var a=t==="width"?1:0,u=0,d=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)n==="margin"&&(d+=o.css(e,n+je[a],!0,i)),r?(n==="content"&&(d-=o.css(e,"padding"+je[a],!0,i)),n!=="margin"&&(d-=o.css(e,"border"+je[a]+"Width",!0,i))):(d+=o.css(e,"padding"+je[a],!0,i),n!=="padding"?d+=o.css(e,"border"+je[a]+"Width",!0,i):u+=o.css(e,"border"+je[a]+"Width",!0,i));return!r&&s>=0&&(d+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-d-u-.5))),d}function On(e,t,n){var r=Tt(e),i=tt(e,t,r),s=o.css(e,"boxSizing",!1,r)==="border-box",a=s;if(Wt.test(i)){if(!n)return i;i="auto"}return a=a&&(W.boxSizingReliable()||i===e.style[t]),(i==="auto"||!parseFloat(i)&&o.css(e,"display",!1,r)==="inline")&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+_t(e,t,n||(s?"border":"content"),a,r,i)+"px"}o.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=tt(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&e.nodeType!==3&&e.nodeType!==8&&e.style){var i,s,a,u=xe(t),d=Nn.test(t),h=e.style;if(d||(t=Hn(u)),a=o.cssHooks[t]||o.cssHooks[u],n===void 0)return a&&"get"in a&&(i=a.get(e,!1,r))!==void 0?i:h[t];(s=typeof n)=="string"&&(i=et.exec(n))&&i[1]&&(n=bn(e,t,i),s="number"),n!=null&&n===n&&(s==="number"&&(n+=i&&i[3]||(o.cssNumber[u]?"":"px")),W.clearCloneStyle||n!==""||t.indexOf("background")!==0||(h[t]="inherit"),a&&"set"in a&&(n=a.set(e,n,r))===void 0||(d?h.setProperty(t,n):h[t]=n))}},css:function(e,t,n,r){var i,s,a,u=xe(t);return Nn.test(t)||(t=Hn(u)),(a=o.cssHooks[t]||o.cssHooks[u])&&"get"in a&&(i=a.get(e,!0,n)),i===void 0&&(i=tt(e,t,r)),i==="normal"&&t in qn&&(i=qn[t]),n===""||n?(s=parseFloat(i),n===!0||isFinite(s)?s||0:i):i}}),o.each(["height","width"],function(e,t){o.cssHooks[t]={get:function(n,r,i){if(r)return!Hr.test(o.css(n,"display"))||n.getClientRects().length&&n.getBoundingClientRect().width?On(n,t,i):yn(n,Rr,function(){return On(n,t,i)})},set:function(n,r,i){var s,a=Tt(n),u=o.css(n,"boxSizing",!1,a)==="border-box",d=i&&_t(n,t,i,u,a);return u&&W.scrollboxSize()===a.position&&(d-=Math.ceil(n["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(a[t])-_t(n,t,"border",!1,a)-.5)),d&&(s=et.exec(r))&&(s[3]||"px")!=="px"&&(n.style[t]=r,r=o.css(n,t)),Rn(n,r,d)}}}),o.cssHooks.marginLeft=Dn(W.reliableMarginLeft,function(e,t){if(t)return(parseFloat(tt(e,"marginLeft"))||e.getBoundingClientRect().left-yn(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),o.each({margin:"",padding:"",border:"Width"},function(e,t){o.cssHooks[e+t]={expand:function(n){for(var r=0,i={},s=typeof n=="string"?n.split(" "):[n];r<4;r++)i[e+je[r]+t]=s[r]||s[r-2]||s[0];return i}},e!=="margin"&&(o.cssHooks[e+t].set=Rn)}),o.fn.extend({css:function(e,t){return Ce(this,function(n,r,i){var s,a,u={},d=0;if(Array.isArray(r)){for(s=Tt(n),a=r.length;d<a;d++)u[r[d]]=o.css(n,r[d],!1,s);return u}return i!==void 0?o.style(n,r,i):o.css(n,r)},e,t,arguments.length>1)}});function ie(e,t,n,r,i){return new ie.prototype.init(e,t,n,r,i)}o.Tween=ie,ie.prototype={constructor:ie,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||o.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(o.cssNumber[n]?"":"px")},cur:function(){var e=ie.propHooks[this.prop];return e&&e.get?e.get(this):ie.propHooks._default.get(this)},run:function(e){var t,n=ie.propHooks[this.prop];return this.options.duration?this.pos=t=o.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ie.propHooks._default.set(this),this}},ie.prototype.init.prototype=ie.prototype,ie.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=o.css(e.elem,e.prop,""))&&t!=="auto"?t:0},set:function(e){o.fx.step[e.prop]?o.fx.step[e.prop](e):e.elem.nodeType!==1||e.elem.style[o.cssProps[e.prop]]==null&&!o.cssHooks[e.prop]?e.elem[e.prop]=e.now:o.style(e.elem,e.prop,e.now+e.unit)}}},ie.propHooks.scrollTop=ie.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},o.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},o.fx=ie.prototype.init,o.fx.step={};var ze,kt,Mr=/^(?:toggle|show|hide)$/,Br=/queueHooks$/;function Ut(){kt&&(w.hidden===!1&&m.requestAnimationFrame?m.requestAnimationFrame(Ut):m.setTimeout(Ut,o.fx.interval),o.fx.tick())}function Mn(){return m.setTimeout(function(){ze=void 0}),ze=Date.now()}function Ct(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=je[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Bn(e,t,n){for(var r,i=(he.tweeners[t]||[]).concat(he.tweeners["*"]),s=0,a=i.length;s<a;s++)if(r=i[s].call(n,t,e))return r}function $r(e,t,n){var r,i,s,a,u,d,h,x,C="width"in t||"height"in t,v=this,b={},D=e.style,M=e.nodeType&&bt(e),q=B.get(e,"fxshow");n.queue||((a=o._queueHooks(e,"fx")).unqueued==null&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,v.always(function(){v.always(function(){a.unqueued--,o.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],Mr.test(i)){if(delete t[r],s=s||i==="toggle",i===(M?"hide":"show")){if(i!=="show"||!q||q[r]===void 0)continue;M=!0}b[r]=q&&q[r]||o.style(e,r)}if((d=!o.isEmptyObject(t))||!o.isEmptyObject(b)){C&&e.nodeType===1&&(n.overflow=[D.overflow,D.overflowX,D.overflowY],(h=q&&q.display)==null&&(h=B.get(e,"display")),(x=o.css(e,"display"))==="none"&&(h?x=h:(_e([e],!0),h=e.style.display||h,x=o.css(e,"display"),_e([e]))),(x==="inline"||x==="inline-block"&&h!=null)&&o.css(e,"float")==="none"&&(d||(v.done(function(){D.display=h}),h==null&&(x=D.display,h=x==="none"?"":x)),D.display="inline-block")),n.overflow&&(D.overflow="hidden",v.always(function(){D.overflow=n.overflow[0],D.overflowX=n.overflow[1],D.overflowY=n.overflow[2]})),d=!1;for(r in b)d||(q?"hidden"in q&&(M=q.hidden):q=B.access(e,"fxshow",{display:h}),s&&(q.hidden=!M),M&&_e([e],!0),v.done(function(){M||_e([e]),B.remove(e,"fxshow");for(r in b)o.style(e,r,b[r])})),d=Bn(M?q[r]:0,r,v),r in q||(q[r]=d.start,M&&(d.end=d.start,d.start=0))}}function Fr(e,t){var n,r,i,s,a;for(n in e)if(r=xe(n),i=t[r],s=e[n],Array.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),(a=o.cssHooks[r])&&"expand"in a){s=a.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}function he(e,t,n){var r,i,s=0,a=he.prefilters.length,u=o.Deferred().always(function(){delete d.elem}),d=function(){if(i)return!1;for(var C=ze||Mn(),v=Math.max(0,h.startTime+h.duration-C),b=1-(v/h.duration||0),D=0,M=h.tweens.length;D<M;D++)h.tweens[D].run(b);return u.notifyWith(e,[h,b,v]),b<1&&M?v:(M||u.notifyWith(e,[h,1,0]),u.resolveWith(e,[h]),!1)},h=u.promise({elem:e,props:o.extend({},t),opts:o.extend(!0,{specialEasing:{},easing:o.easing._default},n),originalProperties:t,originalOptions:n,startTime:ze||Mn(),duration:n.duration,tweens:[],createTween:function(C,v){var b=o.Tween(e,h.opts,C,v,h.opts.specialEasing[C]||h.opts.easing);return h.tweens.push(b),b},stop:function(C){var v=0,b=C?h.tweens.length:0;if(i)return this;for(i=!0;v<b;v++)h.tweens[v].run(1);return C?(u.notifyWith(e,[h,1,0]),u.resolveWith(e,[h,C])):u.rejectWith(e,[h,C]),this}}),x=h.props;for(Fr(x,h.opts.specialEasing);s<a;s++)if(r=he.prefilters[s].call(h,e,x,h.opts))return O(r.stop)&&(o._queueHooks(h.elem,h.opts.queue).stop=r.stop.bind(r)),r;return o.map(x,Bn,h),O(h.opts.start)&&h.opts.start.call(e,h),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always),o.fx.timer(o.extend(d,{elem:e,anim:h,queue:h.opts.queue})),h}o.Animation=o.extend(he,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return bn(n.elem,e,et.exec(t),n),n}]},tweener:function(e,t){O(e)?(t=e,e=["*"]):e=e.match(ue);for(var n,r=0,i=e.length;r<i;r++)n=e[r],he.tweeners[n]=he.tweeners[n]||[],he.tweeners[n].unshift(t)},prefilters:[$r],prefilter:function(e,t){t?he.prefilters.unshift(e):he.prefilters.push(e)}}),o.speed=function(e,t,n){var r=e&&typeof e=="object"?o.extend({},e):{complete:n||!n&&t||O(e)&&e,duration:e,easing:n&&t||t&&!O(t)&&t};return o.fx.off?r.duration=0:typeof r.duration!="number"&&(r.duration in o.fx.speeds?r.duration=o.fx.speeds[r.duration]:r.duration=o.fx.speeds._default),r.queue!=null&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){O(r.old)&&r.old.call(this),r.queue&&o.dequeue(this,r.queue)},r},o.fn.extend({fadeTo:function(e,t,n,r){return this.filter(bt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=o.isEmptyObject(e),s=o.speed(t,n,r),a=function(){var u=he(this,o.extend({},e),s);(i||B.get(this,"finish"))&&u.stop(!0)};return a.finish=a,i||s.queue===!1?this.each(a):this.queue(s.queue,a)},stop:function(e,t,n){var r=function(i){var s=i.stop;delete i.stop,s(n)};return typeof e!="string"&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var i=!0,s=e!=null&&e+"queueHooks",a=o.timers,u=B.get(this);if(s)u[s]&&u[s].stop&&r(u[s]);else for(s in u)u[s]&&u[s].stop&&Br.test(s)&&r(u[s]);for(s=a.length;s--;)a[s].elem!==this||e!=null&&a[s].queue!==e||(a[s].anim.stop(n),i=!1,a.splice(s,1));!i&&n||o.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=B.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],s=o.timers,a=r?r.length:0;for(n.finish=!0,o.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),o.each(["toggle","show","hide"],function(e,t){var n=o.fn[t];o.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"?n.apply(this,arguments):this.animate(Ct(t,!0),r,i,s)}}),o.each({slideDown:Ct("show"),slideUp:Ct("hide"),slideToggle:Ct("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){o.fn[e]=function(n,r,i){return this.animate(t,n,r,i)}}),o.timers=[],o.fx.tick=function(){var e,t=0,n=o.timers;for(ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||o.fx.stop(),ze=void 0},o.fx.timer=function(e){o.timers.push(e),o.fx.start()},o.fx.interval=13,o.fx.start=function(){kt||(kt=!0,Ut())},o.fx.stop=function(){kt=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(e,t){return e=o.fx&&o.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(n,r){var i=m.setTimeout(n,e);r.stop=function(){m.clearTimeout(i)}})},function(){var e=w.createElement("input"),t=w.createElement("select").appendChild(w.createElement("option"));e.type="checkbox",W.checkOn=e.value!=="",W.optSelected=t.selected,(e=w.createElement("input")).value="t",e.type="radio",W.radioValue=e.value==="t"}();var $n,nt=o.expr.attrHandle;o.fn.extend({attr:function(e,t){return Ce(this,o.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){o.removeAttr(this,e)})}}),o.extend({attr:function(e,t,n){var r,i,s=e.nodeType;if(s!==3&&s!==8&&s!==2)return typeof e.getAttribute>"u"?o.prop(e,t,n):(s===1&&o.isXMLDoc(e)||(i=o.attrHooks[t.toLowerCase()]||(o.expr.match.bool.test(t)?$n:void 0)),n!==void 0?n===null?void o.removeAttr(e,t):i&&"set"in i&&(r=i.set(e,n,t))!==void 0?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&(r=i.get(e,t))!==null?r:(r=o.find.attr(e,t))==null?void 0:r)},attrHooks:{type:{set:function(e,t){if(!W.radioValue&&t==="radio"&&ce(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(ue);if(i&&e.nodeType===1)for(;n=i[r++];)e.removeAttribute(n)}}),$n={set:function(e,t,n){return t===!1?o.removeAttr(e,n):e.setAttribute(n,n),n}},o.each(o.expr.match.bool.source.match(/\w+/g),function(e,t){var n=nt[t]||o.find.attr;nt[t]=function(r,i,s){var a,u,d=i.toLowerCase();return s||(u=nt[d],nt[d]=a,a=n(r,i,s)!=null?d:null,nt[d]=u),a}});var Wr=/^(?:input|select|textarea|button)$/i,_r=/^(?:a|area)$/i;o.fn.extend({prop:function(e,t){return Ce(this,o.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[o.propFix[e]||e]})}}),o.extend({prop:function(e,t,n){var r,i,s=e.nodeType;if(s!==3&&s!==8&&s!==2)return s===1&&o.isXMLDoc(e)||(t=o.propFix[t]||t,i=o.propHooks[t]),n!==void 0?i&&"set"in i&&(r=i.set(e,n,t))!==void 0?r:e[t]=n:i&&"get"in i&&(r=i.get(e,t))!==null?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=o.find.attr(e,"tabindex");return t?parseInt(t,10):Wr.test(e.nodeName)||_r.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),W.optSelected||(o.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});function He(e){return(e.match(ue)||[]).join(" ")}function Re(e){return e.getAttribute&&e.getAttribute("class")||""}function Vt(e){return Array.isArray(e)?e:typeof e=="string"?e.match(ue)||[]:[]}o.fn.extend({addClass:function(e){var t,n,r,i,s,a,u,d=0;if(O(e))return this.each(function(h){o(this).addClass(e.call(this,h,Re(this)))});if((t=Vt(e)).length){for(;n=this[d++];)if(i=Re(n),r=n.nodeType===1&&" "+He(i)+" "){for(a=0;s=t[a++];)r.indexOf(" "+s+" ")<0&&(r+=s+" ");i!==(u=He(r))&&n.setAttribute("class",u)}}return this},removeClass:function(e){var t,n,r,i,s,a,u,d=0;if(O(e))return this.each(function(h){o(this).removeClass(e.call(this,h,Re(this)))});if(!arguments.length)return this.attr("class","");if((t=Vt(e)).length){for(;n=this[d++];)if(i=Re(n),r=n.nodeType===1&&" "+He(i)+" "){for(a=0;s=t[a++];)for(;r.indexOf(" "+s+" ")>-1;)r=r.replace(" "+s+" "," ");i!==(u=He(r))&&n.setAttribute("class",u)}}return this},toggleClass:function(e,t){var n=typeof e,r=n==="string"||Array.isArray(e);return typeof t=="boolean"&&r?t?this.addClass(e):this.removeClass(e):O(e)?this.each(function(i){o(this).toggleClass(e.call(this,i,Re(this),t),t)}):this.each(function(){var i,s,a,u;if(r)for(s=0,a=o(this),u=Vt(e);i=u[s++];)a.hasClass(i)?a.removeClass(i):a.addClass(i);else e!==void 0&&n!=="boolean"||((i=Re(this))&&B.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||e===!1?"":B.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(n.nodeType===1&&(" "+He(Re(n))+" ").indexOf(t)>-1)return!0;return!1}});var Ur=/\r/g;o.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=O(e),this.each(function(s){var a;this.nodeType===1&&((a=r?e.call(this,s,o(this).val()):e)==null?a="":typeof a=="number"?a+="":Array.isArray(a)&&(a=o.map(a,function(u){return u==null?"":u+""})),(t=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&t.set(this,a,"value")!==void 0||(this.value=a))});if(i)return(t=o.valHooks[i.type]||o.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&(n=t.get(i,"value"))!==void 0?n:typeof(n=i.value)=="string"?n.replace(Ur,""):n??""}}}),o.extend({valHooks:{option:{get:function(e){var t=o.find.attr(e,"value");return t??He(o.text(e))}},select:{get:function(e){var t,n,r,i=e.options,s=e.selectedIndex,a=e.type==="select-one",u=a?null:[],d=a?s+1:i.length;for(r=s<0?d:a?s:0;r<d;r++)if(((n=i[r]).selected||r===s)&&!n.disabled&&(!n.parentNode.disabled||!ce(n.parentNode,"optgroup"))){if(t=o(n).val(),a)return t;u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,s=o.makeArray(t),a=i.length;a--;)((r=i[a]).selected=o.inArray(o.valHooks.option.get(r),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=o.inArray(o(e).val(),t)>-1}},W.checkOn||(o.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})}),W.focusin="onfocusin"in m;var Fn=/^(?:focusinfocus|focusoutblur)$/,Wn=function(e){e.stopPropagation()};o.extend(o.event,{trigger:function(e,t,n,r){var i,s,a,u,d,h,x,C,v=[n||w],b=Te.call(e,"type")?e.type:e,D=Te.call(e,"namespace")?e.namespace.split("."):[];if(s=C=a=n=n||w,n.nodeType!==3&&n.nodeType!==8&&!Fn.test(b+o.event.triggered)&&(b.indexOf(".")>-1&&(b=(D=b.split(".")).shift(),D.sort()),d=b.indexOf(":")<0&&"on"+b,e=e[o.expando]?e:new o.Event(b,typeof e=="object"&&e),e.isTrigger=r?2:3,e.namespace=D.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+D.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=t==null?[e]:o.makeArray(t,[e]),x=o.event.special[b]||{},r||!x.trigger||x.trigger.apply(n,t)!==!1)){if(!r&&!x.noBubble&&!Ae(n)){for(u=x.delegateType||b,Fn.test(u+b)||(s=s.parentNode);s;s=s.parentNode)v.push(s),a=s;a===(n.ownerDocument||w)&&v.push(a.defaultView||a.parentWindow||m)}for(i=0;(s=v[i++])&&!e.isPropagationStopped();)C=s,e.type=i>1?u:x.bindType||b,(h=(B.get(s,"events")||{})[e.type]&&B.get(s,"handle"))&&h.apply(s,t),(h=d&&s[d])&&h.apply&&yt(s)&&(e.result=h.apply(s,t),e.result===!1&&e.preventDefault());return e.type=b,r||e.isDefaultPrevented()||x._default&&x._default.apply(v.pop(),t)!==!1||!yt(n)||d&&O(n[b])&&!Ae(n)&&((a=n[d])&&(n[d]=null),o.event.triggered=b,e.isPropagationStopped()&&C.addEventListener(b,Wn),n[b](),e.isPropagationStopped()&&C.removeEventListener(b,Wn),o.event.triggered=void 0,a&&(n[d]=a)),e.result}},simulate:function(e,t,n){var r=o.extend(new o.Event,n,{type:e,isSimulated:!0});o.event.trigger(r,null,t)}}),o.fn.extend({trigger:function(e,t){return this.each(function(){o.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return o.event.trigger(e,t,n,!0)}}),W.focusin||o.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(r){o.event.simulate(t,r.target,o.event.fix(r))};o.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=B.access(r,t);i||r.addEventListener(e,n,!0),B.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=B.access(r,t)-1;i?B.access(r,t,i):(r.removeEventListener(e,n,!0),B.remove(r,t))}}});var rt=m.location,_n=Date.now(),zt=/\?/;o.parseXML=function(e){var t;if(!e||typeof e!="string")return null;try{t=new m.DOMParser().parseFromString(e,"text/xml")}catch{t=void 0}return t&&!t.getElementsByTagName("parsererror").length||o.error("Invalid XML: "+e),t};var Vr=/\[\]$/,Un=/\r?\n/g,zr=/^(?:submit|button|image|reset|file)$/i,Xr=/^(?:input|select|textarea|keygen)/i;function Xt(e,t,n,r){var i;if(Array.isArray(t))o.each(t,function(s,a){n||Vr.test(e)?r(e,a):Xt(e+"["+(typeof a=="object"&&a!=null?s:"")+"]",a,n,r)});else if(n||be(t)!=="object")r(e,t);else for(i in t)Xt(e+"["+i+"]",t[i],n,r)}o.param=function(e,t){var n,r=[],i=function(s,a){var u=O(a)?a():a;r[r.length]=encodeURIComponent(s)+"="+encodeURIComponent(u??"")};if(Array.isArray(e)||e.jquery&&!o.isPlainObject(e))o.each(e,function(){i(this.name,this.value)});else for(n in e)Xt(n,e[n],t,i);return r.join("&")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=o.prop(this,"elements");return e?o.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!o(this).is(":disabled")&&Xr.test(this.nodeName)&&!zr.test(e)&&(this.checked||!wn.test(e))}).map(function(e,t){var n=o(this).val();return n==null?null:Array.isArray(n)?o.map(n,function(r){return{name:t.name,value:r.replace(Un,`\r
`)}}):{name:t.name,value:n.replace(Un,`\r
`)}}).get()}});var Gr=/%20/g,Jr=/#.*$/,Yr=/([?&])_=[^&]*/,Kr=/^(.*?):[ \t]*([^\r\n]*)$/gm,Qr=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zr=/^(?:GET|HEAD)$/,eo=/^\/\//,Vn={},Gt={},zn="*/".concat("*"),Jt=w.createElement("a");Jt.href=rt.href;function Xn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(ue)||[];if(O(n))for(;r=s[i++];)r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Gn(e,t,n,r){var i={},s=e===Gt;function a(u){var d;return i[u]=!0,o.each(e[u]||[],function(h,x){var C=x(t,n,r);return typeof C!="string"||s||i[C]?s?!(d=C):void 0:(t.dataTypes.unshift(C),a(C),!1)}),d}return a(t.dataTypes[0])||!i["*"]&&a("*")}function Yt(e,t){var n,r,i=o.ajaxSettings.flatOptions||{};for(n in t)t[n]!==void 0&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&o.extend(!0,e,r),e}function to(e,t,n){for(var r,i,s,a,u=e.contents,d=e.dataTypes;d[0]==="*";)d.shift(),r===void 0&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r){for(i in u)if(u[i]&&u[i].test(r)){d.unshift(i);break}}if(d[0]in n)s=d[0];else{for(i in n){if(!d[0]||e.converters[i+" "+d[0]]){s=i;break}a||(a=i)}s=s||a}if(s)return s!==d[0]&&d.unshift(s),n[s]}function no(e,t,n,r){var i,s,a,u,d,h={},x=e.dataTypes.slice();if(x[1])for(a in e.converters)h[a.toLowerCase()]=e.converters[a];for(s=x.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!d&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),d=s,s=x.shift()){if(s==="*")s=d;else if(d!=="*"&&d!==s){if(!(a=h[d+" "+s]||h["* "+s])){for(i in h)if((u=i.split(" "))[1]===s&&(a=h[d+" "+u[0]]||h["* "+u[0]])){a===!0?a=h[i]:h[i]!==!0&&(s=u[0],x.unshift(u[1]));break}}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(C){return{state:"parsererror",error:a?C:"No conversion from "+d+" to "+s}}}}return{state:"success",data:t}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:rt.href,type:"GET",isLocal:Qr.test(rt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,o.ajaxSettings),t):Yt(o.ajaxSettings,e)},ajaxPrefilter:Xn(Vn),ajaxTransport:Xn(Gt),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var n,r,i,s,a,u,d,h,x,C,v=o.ajaxSetup({},t),b=v.context||v,D=v.context&&(b.nodeType||b.jquery)?o(b):o.event,M=o.Deferred(),q=o.Callbacks("once memory"),K=v.statusCode||{},Q={},ae={},_="canceled",R={readyState:0,getResponseHeader:function(F){var J;if(d){if(!s)for(s={};J=Kr.exec(i);)s[J[1].toLowerCase()]=J[2];J=s[F.toLowerCase()]}return J??null},getAllResponseHeaders:function(){return d?i:null},setRequestHeader:function(F,J){return d==null&&(F=ae[F.toLowerCase()]=ae[F.toLowerCase()]||F,Q[F]=J),this},overrideMimeType:function(F){return d==null&&(v.mimeType=F),this},statusCode:function(F){var J;if(F)if(d)R.always(F[R.status]);else for(J in F)K[J]=[K[J],F[J]];return this},abort:function(F){var J=F||_;return n&&n.abort(J),se(0,J),this}};if(M.promise(R),v.url=((e||v.url||rt.href)+"").replace(eo,rt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(ue)||[""],v.crossDomain==null){u=w.createElement("a");try{u.href=v.url,u.href=u.href,v.crossDomain=Jt.protocol+"//"+Jt.host!=u.protocol+"//"+u.host}catch{v.crossDomain=!0}}if(v.data&&v.processData&&typeof v.data!="string"&&(v.data=o.param(v.data,v.traditional)),Gn(Vn,v,t,R),d)return R;(h=o.event&&v.global)&&o.active++==0&&o.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Zr.test(v.type),r=v.url.replace(Jr,""),v.hasContent?v.data&&v.processData&&(v.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(v.data=v.data.replace(Gr,"+")):(C=v.url.slice(r.length),v.data&&(v.processData||typeof v.data=="string")&&(r+=(zt.test(r)?"&":"?")+v.data,delete v.data),v.cache===!1&&(r=r.replace(Yr,"$1"),C=(zt.test(r)?"&":"?")+"_="+_n+++C),v.url=r+C),v.ifModified&&(o.lastModified[r]&&R.setRequestHeader("If-Modified-Since",o.lastModified[r]),o.etag[r]&&R.setRequestHeader("If-None-Match",o.etag[r])),(v.data&&v.hasContent&&v.contentType!==!1||t.contentType)&&R.setRequestHeader("Content-Type",v.contentType),R.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+(v.dataTypes[0]!=="*"?", "+zn+"; q=0.01":""):v.accepts["*"]);for(x in v.headers)R.setRequestHeader(x,v.headers[x]);if(v.beforeSend&&(v.beforeSend.call(b,R,v)===!1||d))return R.abort();if(_="abort",q.add(v.complete),R.done(v.success),R.fail(v.error),n=Gn(Gt,v,t,R)){if(R.readyState=1,h&&D.trigger("ajaxSend",[R,v]),d)return R;v.async&&v.timeout>0&&(a=m.setTimeout(function(){R.abort("timeout")},v.timeout));try{d=!1,n.send(Q,se)}catch(F){if(d)throw F;se(-1,F)}}else se(-1,"No Transport");function se(F,J,it,Xe){var ge,st,pe,Ne,Ge,Z=J;d||(d=!0,a&&m.clearTimeout(a),n=void 0,i=Xe||"",R.readyState=F>0?4:0,ge=F>=200&&F<300||F===304,it&&(Ne=to(v,R,it)),Ne=no(v,Ne,R,ge),ge?(v.ifModified&&((Ge=R.getResponseHeader("Last-Modified"))&&(o.lastModified[r]=Ge),(Ge=R.getResponseHeader("etag"))&&(o.etag[r]=Ge)),F===204||v.type==="HEAD"?Z="nocontent":F===304?Z="notmodified":(Z=Ne.state,st=Ne.data,ge=!(pe=Ne.error))):(pe=Z,!F&&Z||(Z="error",F<0&&(F=0))),R.status=F,R.statusText=(J||Z)+"",ge?M.resolveWith(b,[st,Z,R]):M.rejectWith(b,[R,Z,pe]),R.statusCode(K),K=void 0,h&&D.trigger(ge?"ajaxSuccess":"ajaxError",[R,v,ge?st:pe]),q.fireWith(b,[R,Z]),h&&(D.trigger("ajaxComplete",[R,v]),--o.active||o.event.trigger("ajaxStop")))}return R},getJSON:function(e,t,n){return o.get(e,t,n,"json")},getScript:function(e,t){return o.get(e,void 0,t,"script")}}),o.each(["get","post"],function(e,t){o[t]=function(n,r,i,s){return O(r)&&(s=s||i,i=r,r=void 0),o.ajax(o.extend({url:n,type:t,dataType:s,data:r,success:i},o.isPlainObject(n)&&n))}}),o._evalUrl=function(e){return o.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},o.fn.extend({wrapAll:function(e){var t;return this[0]&&(O(e)&&(e=e.call(this[0])),t=o(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(e){return O(e)?this.each(function(t){o(this).wrapInner(e.call(this,t))}):this.each(function(){var t=o(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=O(e);return this.each(function(n){o(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){o(this).replaceWith(this.childNodes)}),this}}),o.expr.pseudos.hidden=function(e){return!o.expr.pseudos.visible(e)},o.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},o.ajaxSettings.xhr=function(){try{return new m.XMLHttpRequest}catch{}};var ro={0:200,1223:204},ot=o.ajaxSettings.xhr();W.cors=!!ot&&"withCredentials"in ot,W.ajax=ot=!!ot,o.ajaxTransport(function(e){var t,n;if(W.cors||ot&&!e.crossDomain)return{send:function(r,i){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(s in r)a.setRequestHeader(s,r[s]);t=function(u){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,u==="abort"?a.abort():u==="error"?typeof a.status!="number"?i(0,"error"):i(a.status,a.statusText):i(ro[a.status]||a.status,a.statusText,(a.responseType||"text")!=="text"||typeof a.responseText!="string"?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),a.onabort!==void 0?a.onabort=n:a.onreadystatechange=function(){a.readyState===4&&m.setTimeout(function(){t&&n()})},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(u){if(t)throw u}},abort:function(){t&&t()}}}),o.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return o.globalEval(e),e}}}),o.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),o.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=o("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(s){t.remove(),n=null,s&&i(s.type==="error"?404:200,s.type)}),w.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Jn=[],Kt=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jn.pop()||o.expando+"_"+_n++;return this[e]=!0,e}}),o.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,s,a=e.jsonp!==!1&&(Kt.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Kt.test(e.data)&&"data");if(a||e.dataTypes[0]==="jsonp")return r=e.jsonpCallback=O(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Kt,"$1"+r):e.jsonp!==!1&&(e.url+=(zt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return s||o.error(r+" was not called"),s[0]},e.dataTypes[0]="json",i=m[r],m[r]=function(){s=arguments},n.always(function(){i===void 0?o(m).removeProp(r):m[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Jn.push(r)),s&&O(i)&&i(s[0]),s=i=void 0}),"script"}),W.createHTMLDocument=function(){var e=w.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),o.parseHTML=function(e,t,n){if(typeof e!="string")return[];typeof t=="boolean"&&(n=t,t=!1);var r,i,s;return t||(W.createHTMLDocument?((r=(t=w.implementation.createHTMLDocument("")).createElement("base")).href=w.location.href,t.head.appendChild(r)):t=w),i=ht.exec(e),s=!n&&[],i?[t.createElement(i[1])]:(i=Cn([e],t,s),s&&s.length&&o(s).remove(),o.merge([],i.childNodes))},o.fn.load=function(e,t,n){var r,i,s,a=this,u=e.indexOf(" ");return u>-1&&(r=He(e.slice(u)),e=e.slice(0,u)),O(t)?(n=t,t=void 0):t&&typeof t=="object"&&(i="POST"),a.length>0&&o.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(d){s=arguments,a.html(r?o("<div>").append(o.parseHTML(d)).find(r):d)}).always(n&&function(d,h){a.each(function(){n.apply(this,s||[d.responseText,h,d])})}),this},o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){o.fn[t]=function(n){return this.on(t,n)}}),o.expr.pseudos.animated=function(e){return o.grep(o.timers,function(t){return e===t.elem}).length},o.offset={setOffset:function(e,t,n){var r,i,s,a,u,d,h=o.css(e,"position"),x=o(e),C={};h==="static"&&(e.style.position="relative"),u=x.offset(),s=o.css(e,"top"),d=o.css(e,"left"),(h==="absolute"||h==="fixed")&&(s+d).indexOf("auto")>-1?(a=(r=x.position()).top,i=r.left):(a=parseFloat(s)||0,i=parseFloat(d)||0),O(t)&&(t=t.call(e,n,o.extend({},u))),t.top!=null&&(C.top=t.top-u.top+a),t.left!=null&&(C.left=t.left-u.left+i),"using"in t?t.using.call(e,C):x.css(C)}},o.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(i){o.offset.setOffset(this,e,i)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if(o.css(r,"position")==="fixed")t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&o.css(e,"position")==="static";)e=e.parentNode;e&&e!==r&&e.nodeType===1&&((i=o(e).offset()).top+=o.css(e,"borderTopWidth",!0),i.left+=o.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-o.css(r,"marginTop",!0),left:t.left-i.left-o.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&o.css(e,"position")==="static";)e=e.offsetParent;return e||xt})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=t==="pageYOffset";o.fn[e]=function(r){return Ce(this,function(i,s,a){var u;if(Ae(i)?u=i:i.nodeType===9&&(u=i.defaultView),a===void 0)return u?u[t]:i[s];u?u.scrollTo(n?u.pageXOffset:a,n?a:u.pageYOffset):i[s]=a},e,r,arguments.length)}}),o.each(["top","left"],function(e,t){o.cssHooks[t]=Dn(W.pixelPosition,function(n,r){if(r)return r=tt(n,t),Wt.test(r)?o(n).position()[t]+"px":r})}),o.each({Height:"height",Width:"width"},function(e,t){o.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){o.fn[r]=function(i,s){var a=arguments.length&&(n||typeof i!="boolean"),u=n||(i===!0||s===!0?"margin":"border");return Ce(this,function(d,h,x){var C;return Ae(d)?r.indexOf("outer")===0?d["inner"+e]:d.document.documentElement["client"+e]:d.nodeType===9?(C=d.documentElement,Math.max(d.body["scroll"+e],C["scroll"+e],d.body["offset"+e],C["offset"+e],C["client"+e])):x===void 0?o.css(d,h,u):o.style(d,h,x,u)},t,a?i:void 0,a)}})}),o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){o.fn[t]=function(n,r){return arguments.length>0?this.on(t,null,n,r):this.trigger(t)}}),o.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),o.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)}}),o.proxy=function(e,t){var n,r,i;if(typeof t=="string"&&(n=e[t],t=e,e=n),O(e))return r=L.call(arguments,2),i=function(){return e.apply(t||this,r.concat(L.call(arguments)))},i.guid=e.guid=e.guid||o.guid++,i},o.holdReady=function(e){e?o.readyWait++:o.ready(!0)},o.isArray=Array.isArray,o.parseJSON=JSON.parse,o.nodeName=ce,o.isFunction=O,o.isWindow=Ae,o.camelCase=xe,o.type=be,o.now=Date.now,o.isNumeric=function(e){var t=o.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},typeof define=="function"&&define.amd&&define("jquery",[],function(){return o});var oo=m.jQuery,io=m.$;return o.noConflict=function(e){return m.$===o&&(m.$=io),e&&m.jQuery===o&&(m.jQuery=oo),o},f||(m.jQuery=m.$=o),o});let qo=window.location;const{pathname:Po,host:ln}=qo;ln!=="localhost"&&ln!=="localhost:5173"&&ln!=="127.0.0.1:5173"&&"serviceWorker"in navigator&&navigator.serviceWorker.register(Po+"sw.js").then(function(m){console.log("Service Worker registro correcto con scope: ",m.scope)}).catch(function(m){console.log("Service Worker registro fallo: ",m)});const{host:Pt}=window.location,Io="Vcard",Ho="firebase",Dt="#/",dr="src/",cn=dr+"pages/",Ro="vite",It="localhost:5173",Ht="localhost",dn=Pt==It||Pt==Ht?"http://localhost/MisSitios/apirestm/api":"https://apirestm.000webhostapp.com/api",Oo=dn+"/v2/api_version";console.log(Pt+"=="+It,Pt+"=="+Ht);console.warn("Api="+dn);const Mo=`<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Recuperar contraseña</h5>\r
                <div class="card-body">\r
                    <form id="form-registro" action="#/registro" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="email" class="form-control" id="email" placeholder="Email" autocomplete="off" required>\r
                        </div>\r
                        <button type="submit" class="btn btn-primary">Aceptar</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <a href="#/">Inicio</a> | <a href="#/login">Login</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,Bo=`<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Login</h5>\r
                <div class="card-body">\r
                    <form id="form-login" action="#/login" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="text" class="form-control" id="username" placeholder="*Usuario" autocomplete="off" required>\r
                        </div>\r
                        <div class="mb-3">\r
                            <input type="password" class="form-control" id="password" placeholder="*Password" required>\r
                        </div>\r
                        <button type="submit" class="btn btn-primary">Aceptar</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <a href="#/">Inicio</a> | <a href="#/registro">Registrarse</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,$o=`<div class="container text-center">\r
    <h1>Logout</h1>\r
    <img src="./assets/img/loading.gif">\r
    <p>Espere un momento...</p>\r
    <a href="#/">Inicio</a>\r
</div>\r
`,Fo=`<div class="alert alert-warning" role="alert">\r
    <strong>No Autorizado:</strong> No tiene permiso para esta página. \r
    <a href="#/" class="alert-link">Volver al Inicio</a>\r
</div>`,Wo=`<div class="container text-center">\r
    <div class="row">\r
        <div class="col-lg-6 offset-lg-3 mt-5">\r
            <div class="card">\r
                <h5 class="card-header">Registro</h5>\r
                <div class="card-body">\r
                    <form id="form-registro" action="#/registro" class="px-5">\r
                        <div id="msj-error" class="mb-3"></div>\r
                        <div class="mb-3">\r
                            <input type="text" class="form-control" id="username" placeholder="*Agregue un nombre de usuario" autocomplete="off" required>\r
                        </div>\r
                        <div class="mb-3">\r
                            <input type="password" class="form-control" id="password" placeholder="*Agregue Password" required>\r
                        </div>\r
                        <button type="submit" class="btn btn-primary">Aceptar</button>\r
                    </form>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div>\r
        <a href="#/">Inicio</a> | <a href="#/login">Login</a> | <a href="#/forget">Recuperar Contraseña</a>\r
    </div>\r
</div>\r
`,_o=`<!--DASHBOARD-->\r
<div class="dashboard">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div class="search-inner d-flex align-items-center justify-content-center">\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input type="search" id="q" placeholder="Busque una profesión o negocio">\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div class="container-fluid d-flex align-items-center justify-content-between">\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="./" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">Vcard</strong><strong>Admin</strong></div>\r
            <div class="brand-text brand-sm"><strong class="text-primary">D</strong><strong>A</strong></div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle"><i class="fa fa-navicon"></i><!--i class="fa fa-long-arrow-left"></i--></button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item"><a href="#" class="search-open nav-link"><i class="icon-magnifying-glass-browser"></i></a></div>\r
          <!-- Mensajes-->\r
\r
          <!-- Tasks-->\r
          <!-- Tasks end-->\r
          \r
          <!-- Megamenu-->\r
          <!-- Megamenu end     -->\r
          \r
          <!-- Languages dropdown    -->\r
          \r
          <!-- Log out               -->\r
          <div class="list-inline-item logout"><a id="logout" href="#" class="nav-link"><span class="d-none d-sm-inline">Salir </span><i class="icon-logout"></i></a></div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar"><img src="./assets/img/sinfoto.png" class="img-fluid rounded-circle"></div>\r
        </a>\r
        <div class="title">\r
          <h1 id="nombre_session" class="h5"></h1>\r
          <p id="email_session"></p>\r
        </div>\r
      </div>\r
      <!--div id="email_session"></div-->\r
      <div id="id_code_google"></div>\r
      <!-- Sidebar Navidation Menus-->\r
      <span class="heading">Menu</span>\r
      <ul class="list-unstyled">\r
        <li class="active"><a href="./app/"> <i class="icon-dashboard"></i>Dashboard </a></li>\r
        <li><a href="/#/app/perfil"> <i class="fa fa-user"></i>Perfil </a></li>\r
        <li><a href="/#/app/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a></li>\r
        <li><a href="/#/app/empresas"> <i class="fa fa-industry"></i>Empresas </a></li>\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--section class="">\r
        <ul class="list-group posts">\r
        </ul>\r
      </section-->\r
      <section class="no-padding-bottom">\r
\r
      </section>\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">2021 &copy; VcardAppJS v.1.2.14. Diseñada por <a target="_blank" href="http://multiportal.com.mx">[:MULTIPORTAL:]</a>.</p>\r
        </div>\r
      </div>\r
    </footer>\r
  </div>\r
</div>\r
<!--//DASHBOARD-->`,Uo=`<section class="home-section">\r
  <div class="home-content">\r
    <i class='bx bx-menu'></i>\r
    <span class="text">Settings</span>\r
  </div>\r
  <div id="content" class="container-fluid" style="margin-top: 25px;">\r
    <div class="row">\r
    </div>\r
  </div>\r
</section>`,Vo=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div\r
          class="search-inner d-flex align-items-center justify-content-center"\r
        >\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input\r
                type="search"\r
                id="q"\r
                placeholder="Busque una profesión o negocio"\r
              />\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div\r
        class="container-fluid d-flex align-items-center justify-content-between"\r
      >\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i\r
            ><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link"\r
              ><i class="icon-magnifying-glass-browser"></i\r
            ></a>\r
          </div>\r
          <!-- Mensajes-->\r
\r
          <!-- Tasks-->\r
          <!-- Tasks end-->\r
\r
          <!-- Megamenu-->\r
          <!-- Megamenu end     -->\r
\r
          <!-- Languages dropdown    -->\r
\r
          <!-- Log out               -->\r
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link"\r
              ><span class="d-none d-sm-inline">Salir </span\r
              ><i class="icon-logout"></i\r
            ></a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img\r
              src="./assets/img/sinfoto.png"\r
              class="img-fluid rounded-circle"\r
            />\r
          </div>\r
        </a>\r
        <div class="title">\r
          <h1 id="nombre_session" class="h5"></h1>\r
          <p id="email_session"></p>\r
        </div>\r
      </div>\r
      <!--div id="email_session"></div-->\r
      <div id="id_code_google"></div>\r
      <!-- Sidebar Navidation Menus-->\r
      <span class="heading">Menu</span>\r
      <ul class="list-unstyled">\r
        <li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/perfil"> <i class="fa fa-user"></i>Perfil </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/empresas"> <i class="fa fa-industry"></i>Empresas </a>\r
        </li>\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--section class="">\r
          <ul class="list-group posts">\r
          </ul>\r
        </section-->\r
      <section class="no-padding-bottom"></section>\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por\r
            <a target="_blank" href="http://multiportal.com.mx"\r
              >[:MULTIPORTAL:]</a\r
            >.\r
          </p>\r
        </div>\r
      </div>\r
    </footer>\r
  </div>\r
</div>\r
<!--//DASHBOARD-->\r
\r
<!--LOGIN-->\r
<div class="login-page">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
                <h1>Login</h1>\r
              </div>\r
              <p>"Conectando negocios y profesionales"</p>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Form Panel    -->\r
        <div class="col-lg-6">\r
          <div class="form d-flex align-items-center">\r
            <div class="content">\r
              <form id="login-form" class="form-validate mb-4">\r
                <div class="form-group">\r
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                  />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                  >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                  Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                >\r
                  Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
              </div>\r
              <div>\r
                <small>¿No tienes cuenta? </small\r
                ><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="copyrights text-center">\r
    <!--p>Design by <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin" class="external">Bootstrapious</a></p-->\r
    <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
  </div>\r
</div>\r
<!--//LOGIN-->\r
\r
<!--REGISTRO-->\r
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
                <h1>Registro</h1>\r
              </div>\r
              <p>"Conectando negocios y profesionales"</p>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Form Panel    -->\r
        <div class="col-lg-6 bg-white">\r
          <div class="form d-flex align-items-center">\r
            <div class="content">\r
              <form id="registro-form" class="text-left form-validate">\r
                <!--div class="form-group-material">\r
                    <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" class="input-material">\r
                    <label for="register-username" class="label-material">Usuario </label>\r
                  </div-->\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                  />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                  />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                      >Políticas de Privacidad</a\r
                    ></label\r
                  >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                    Registrar\r
                  </button>\r
                  <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                  >\r
                    Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <small>¿Ya tienes una cuenta? </small\r
                ><a href="#/app" id="btnLogin" class="signup">Login</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="copyrights text-center">\r
    <!--p>Design by <a href="https://bootstrapious.com" class="external">Bootstrapious</a></p-->\r
    <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
  </div>\r
</div>\r
<!--//REGISTRO-->\r
<!--div class="nav-item logged-in">\r
    <a class="nav-link" id="logout-1" href="#/app">Logout</a>\r
  </div-->\r
`,zo="<!--HOME-->",Xo=`<!--DASHBOARD-->\r
<div class="dashboard" style="display: none">\r
  <header class="header">\r
    <nav class="navbar navbar-expand-lg">\r
      <div class="search-panel">\r
        <div\r
          class="search-inner d-flex align-items-center justify-content-center"\r
        >\r
          <div class="close-btn">Close <i class="fa fa-close"></i></div>\r
          <form id="searchForm">\r
            <div class="form-group">\r
              <input\r
                type="search"\r
                id="q"\r
                placeholder="Busque una profesión o negocio"\r
              />\r
              <button type="submit" class="submit">Buscar</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
      <div\r
        class="container-fluid d-flex align-items-center justify-content-between"\r
      >\r
        <div class="navbar-header">\r
          <!-- Navbar Header-->\r
          <a href="/#/app" class="navbar-brand">\r
            <div class="brand-text brand-big visible text-uppercase">\r
              <strong class="text-primary">Vcard</strong><strong>Admin</strong>\r
            </div>\r
            <div class="brand-text brand-sm">\r
              <strong class="text-primary">D</strong><strong>A</strong>\r
            </div>\r
          </a>\r
          <!-- Sidebar Toggle Btn-->\r
          <button class="sidebar-toggle">\r
            <i class="fa fa-navicon"></i\r
            ><!--i class="fa fa-long-arrow-left"></i-->\r
          </button>\r
        </div>\r
        <div class="right-menu list-inline no-margin-bottom">\r
          <div class="list-inline-item">\r
            <a href="#" class="search-open nav-link"\r
              ><i class="icon-magnifying-glass-browser"></i\r
            ></a>\r
          </div>\r
          <!-- Mensajes-->\r
\r
          <!-- Tasks-->\r
          <!-- Tasks end-->\r
\r
          <!-- Megamenu-->\r
          <!-- Megamenu end     -->\r
\r
          <!-- Languages dropdown    -->\r
\r
          <!-- Log out               -->\r
          <div class="list-inline-item logout">\r
            <a id="logout" href="#" class="nav-link"\r
              ><span class="d-none d-sm-inline">Salir </span\r
              ><i class="icon-logout"></i\r
            ></a>\r
          </div>\r
        </div>\r
      </div>\r
    </nav>\r
  </header>\r
  <div class="d-flex align-items-stretch">\r
    <!-- Sidebar Navigation-->\r
    <nav id="sidebar">\r
      <!-- Sidebar Header-->\r
      <div class="sidebar-header d-flex align-items-center">\r
        <a href="/#/app/perfil">\r
          <div id="photo" class="avatar">\r
            <img\r
              src="./assets/img/sinfoto.png"\r
              class="img-fluid rounded-circle"\r
            />\r
          </div>\r
        </a>\r
        <div class="title">\r
          <h1 id="nombre_session" class="h5"></h1>\r
          <p id="email_session"></p>\r
        </div>\r
      </div>\r
      <!--div id="email_session"></div-->\r
      <div id="id_code_google"></div>\r
      <!-- Sidebar Navidation Menus-->\r
      <span class="heading">Menu</span>\r
      <ul class="list-unstyled">\r
        <li class="active">\r
          <a href="/#/app"> <i class="icon-dashboard"></i>Dashboard </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/perfil"> <i class="fa fa-user"></i>Perfil </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/tarjetas"> <i class="fa fa-vcard"></i>Mis Tarjetas </a>\r
        </li>\r
        <li>\r
          <a href="/#/app/empresas"> <i class="fa fa-industry"></i>Empresas </a>\r
        </li>\r
      </ul>\r
    </nav>\r
    <!-- Sidebar Navigation end-->\r
    <div id="app-modulo" class="page-content">\r
      <!--section class="">\r
          <ul class="list-group posts">\r
          </ul>\r
        </section-->\r
      <section class="no-padding-bottom"></section>\r
    </div>\r
    <footer class="footer">\r
      <div class="footer__block block no-margin-bottom">\r
        <div class="container-fluid text-center">\r
          <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
          <p id="footer_page" class="no-margin-bottom">\r
            2021 &copy; VcardAppJS v.1.2.14. Diseñada por\r
            <a target="_blank" href="http://multiportal.com.mx"\r
              >[:MULTIPORTAL:]</a\r
            >.\r
          </p>\r
        </div>\r
      </div>\r
    </footer>\r
  </div>\r
</div>\r
<!--//DASHBOARD-->\r
\r
<!--LOGIN-->\r
<div class="login-page">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
                <h1>Login</h1>\r
              </div>\r
              <p>"Conectando negocios y profesionales"</p>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Form Panel    -->\r
        <div class="col-lg-6">\r
          <div class="form d-flex align-items-center">\r
            <div class="content">\r
              <form id="login-form" class="form-validate mb-4">\r
                <div class="form-group">\r
                  <input\r
                    id="login-email"\r
                    type="email"\r
                    name="loginUsername"\r
                    required\r
                    data-msg="Please enter your username"\r
                    class="input-material"\r
                  />\r
                  <label for="login-email" class="label-material">Email</label>\r
                </div>\r
                <div class="form-group">\r
                  <input\r
                    id="login-password"\r
                    type="password"\r
                    name="loginPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="login-password" class="label-material"\r
                    >Contraseña</label\r
                  >\r
                </div>\r
                <button type="submit" class="btn btn-primary btn-block">\r
                  Ingresar\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-info btn-block"\r
                  id="googleLogin"\r
                >\r
                  Ingresar con Google\r
                </button>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <a href="#/forget" class="forgot-pass">Olvide mi Password?</a>\r
              </div>\r
              <div>\r
                <small>¿No tienes cuenta? </small\r
                ><a href="#/app" id="btnRegis" class="signup">Registrate</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="copyrights text-center">\r
    <!--p>Design by <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin" class="external">Bootstrapious</a></p-->\r
    <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
  </div>\r
</div>\r
<!--//LOGIN-->\r
\r
<!--REGISTRO-->\r
<div class="registro-page" style="display: none">\r
  <div class="container d-flex align-items-center">\r
    <div class="form-holder has-shadow">\r
      <div class="row">\r
        <!-- Logo & Information Panel-->\r
        <div class="col-lg-6">\r
          <div class="info d-flex-logo align-items-center">\r
            <div class="content">\r
              <div class="logo">\r
                <img src="./assets/img/logo_vcard.min.png" />\r
                <h1>Registro</h1>\r
              </div>\r
              <p>"Conectando negocios y profesionales"</p>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Form Panel    -->\r
        <div class="col-lg-6 bg-white">\r
          <div class="form d-flex align-items-center">\r
            <div class="content">\r
              <form id="registro-form" class="text-left form-validate">\r
                <!--div class="form-group-material">\r
                    <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" class="input-material">\r
                    <label for="register-username" class="label-material">Usuario </label>\r
                  </div-->\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-email"\r
                    type="email"\r
                    name="registerEmail"\r
                    required\r
                    data-msg="Please enter a valid email address"\r
                    class="input-material"\r
                  />\r
                  <label for="register-email" class="label-material"\r
                    >Email\r
                  </label>\r
                </div>\r
                <div class="form-group-material">\r
                  <input\r
                    id="register-password"\r
                    type="password"\r
                    name="registerPassword"\r
                    required\r
                    data-msg="Please enter your password"\r
                    class="input-material"\r
                  />\r
                  <label for="register-password" class="label-material"\r
                    >Contraseña\r
                  </label>\r
                </div>\r
                <div class="form-group terms-conditions text-center">\r
                  <input\r
                    id="register-agree"\r
                    name="registerAgree"\r
                    type="checkbox"\r
                    required\r
                    value="1"\r
                    data-msg="Your agreement is required"\r
                    class="checkbox-template"\r
                  />\r
                  <label for="register-agree"\r
                    ><a target="_blank" href="privacidad.html"\r
                      >Políticas de Privacidad</a\r
                    ></label\r
                  >\r
                </div>\r
                <div class="form-group text-center">\r
                  <button type="submit" class="btn btn-primary btn-block">\r
                    Registrar\r
                  </button>\r
                  <!--input id="register" type="submit" value="Register" class="btn btn-primary"-->\r
                  <button\r
                    type="button"\r
                    class="btn btn-info btn-block"\r
                    id="googleRegister"\r
                  >\r
                    Registrarse con Google\r
                  </button>\r
                </div>\r
              </form>\r
              <div>\r
                <a href="#/" class="forgot-pass">Inicio</a> |\r
                <small>¿Ya tienes una cuenta? </small\r
                ><a href="#/app" id="btnLogin" class="signup">Login</a>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="copyrights text-center">\r
    <!--p>Design by <a href="https://bootstrapious.com" class="external">Bootstrapious</a></p-->\r
    <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->\r
  </div>\r
</div>\r
<!--//REGISTRO-->\r
<!--div class="nav-item logged-in">\r
    <a class="nav-link" id="logout-1" href="#/app">Logout</a>\r
  </div-->\r
`,Go=`<div class="container text-center">\r
    <h1>Nosotros</h1>\r
</div>`,Jo=`<div class="container text-center">\r
    <h1>Productos</h1>\r
</div>`,Yo="<h1>Categorias</h1>",Ko=`<div class="container text-center">\r
    <h1>Contacto</h1>\r
</div>\r
`,Nt=`<nav id="menuweb" class="navbar navbar-expand-lg navbar-dark bg-dark">\r
    <div class="container">\r
        <a class="navbar-brand" href="./">Favorite Links</a>\r
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"\r
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\r
            <span class="navbar-toggler-icon"></span>\r
        </button>\r
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">\r
            <ul class="navbar-nav">\r
                <li class="nav-item">\r
                    <a class="nav-link" href="#/registro">Registro</a>\r
                </li>\r
                <li class="nav-item user-login">\r
                    <a class="btn btn-primary" href="#/login">Login</a>\r
                </li>\r
                <li class="nav-item user-activo">\r
                    <a class="nav-link" href="#/dashboard">Dashboard</a>\r
                </li>\r
                <li class="nav-item user-logout">\r
                    <a class="nav-link" href="#/logout">Salir</a>\r
                </li>\r
            </ul>\r
        </div>\r
    </div>\r
</nav>`,Qo=["dashboard","perfil"],Zo={forget:Mo,login:Bo,logout:$o,noauth:Fo,registro:Wo,dashboard:_o,settings:Uo,perfil:Vo},pr={Home:zo,app:Xo,nosotros:Nt+Go,productos:Nt+Jo,categorias:Nt+Yo,contacto:Nt+Ko},fr={...pr,...Zo},ei=`<div class="text-center">\r
    <div class="alert alert-danger" role="alert">\r
        <strong>Error 404:</strong> La página No existe. <a href="#/" class="alert-link">Volver al Inicio</a>\r
    </div>\r
</div>\r
`,ti=m=>{var f=fr[m];return f=f??ei,pi(f)},or=async m=>{try{const f=await fetch(m);if(f.status==200){const j=await f.json();if(j)return j}else console.log("Error 404")}catch(f){console.log(f)}},{hash:Vi,host:ni,hostDev:ri,typeBack:oi,apiVer:ii}=ut();function si(){var m=self.location.href,f=m.lastIndexOf("/"),j=m.substring(f+1,m.length);return j}function ai(m,f){var j=m.replace("/"+f,""),w=j.split("/"),S=window.location.search.substring(1),L=S.split("&");return S==""&&(L=["mod="+w[1],"ext="+w[2],"id="+w[3]]),L}function li(m){for(var f=0;f<m.length;f++){var j=m[f].split("=");if(j[0]=="mod")var w=j[1];if(j[0]=="ext")var S=j[1];if(j[0]=="id")var L=j[1]}return w=w==""?"Home":w.replace("?",""),S=S==""||S=="undefined"?"index":S,L=L==""||L=="undefined"?"":L,{mod:w,ext:S,id:L}}function ci(m,f,j,w){let S=localStorage.getItem("Token");document.querySelector("#menuweb");let L=document.querySelector(".user-login"),V=document.querySelector(".user-activo"),ne=document.querySelector(".user-logout");j[f]&&(L.classList.remove("d-none"),V.classList.add("d-none"),ne.classList.add("d-none"),S!=null&&S!=null&&S!="null"&&S!="undefined"&&(L.classList.add("d-none"),V.classList.remove("d-none"),ne.classList.remove("d-none")))}const ui=(m,f,j,w)=>{localStorage.getItem("Token"),ve("log","hash=>"+m);let S=j!="index"?" / "+ir(j):"";document.title=w+" - "+ir(f)+S,di(f,Qo);let L=f!="Home"&&j!="index"?j:f,V=document.getElementById("app");if(V&&(V.innerHTML="",m))return V.appendChild(ti(L))};function di(m,f){var j=localStorage.getItem("Token");ve("log","token="+j);let w=f.length;for(let S=0;S<w;S++)m===f[S]&&ve("log","Accceso: "+m+"="+f[S]),m===f[S]&&(j==null||j=="undefined")&&(window.location.href="#/noauth");m=="login"&&j!=null&&j!="undefined"&&(window.location.href="#/dashboard")}function pi(m){const f=document.createElement("div");return f.innerHTML=m,f}function fi(m,f){(m==""||m=="undefined")&&(window.location.href=f)}function ve(m,f){if(ni==ri)switch(m){case"log":console.log(f);break;case"warn":console.warn(f);break;case"error":console.error(f);break;default:console.log(f);break}}function ir(m){return m[0].toUpperCase()+m.slice(1).toLowerCase()}function sr(m,f){if(m.length>0)for(let S=0;S<m.length;S++)if(console.log("load",f+S),document.getElementById(f+S))console.log("Reload Ok: "+f+S);else if(console.log(f+S,m[S]),document.createStyleSheet)document.createStyleSheet(m[S]);else{var j="@import url('"+m[S]+"');",w=document.createElement("link");w.id=f+S,w.rel="stylesheet",w.href="data:text/css,"+escape(j),document.getElementsByTagName("head")[0].appendChild(w)}}function ar(m,f){for(let j=0;j<m.length;j++){console.log("delete",f+j);let w=document.getElementById(f+j);w&&document.getElementsByTagName("head")[0].removeChild(w)}}function lr(m,f,j){if(m.length>0)for(let S=0;S<m.length;S++){console.log("load",f+S);let L=document.getElementById(f+S);if(L&&document.body.removeChild(L),j=="load")if(document.getElementById(f+S))console.log("Reload Ok: "+f+S);else{console.log(f+S,m[S]);var w=document.createElement("script");w.id=f+S,w.src=m[S],document.body.appendChild(w)}}}function hi(m,f){if(m.length>0)for(let w=0;w<m.length;w++)if(console.log("load",f+w),document.getElementById(f+w))console.log("Reload Ok: "+f+w);else{console.log(f+w,m[w]);var j=document.createElement("script");j.id=f+w,j.src=m[w],document.body.appendChild(j)}}function gi(m,f){for(let j=0;j<m.length;j++){console.log("delete",f+j);let w=document.getElementById(f+j);w&&document.body.removeChild(w)}}function mi(){let m=document.getElementsByTagName("body")[0],j=`<div class="layerLoading">
    <img src="./assets/img/loader-green.gif" alt=""/>
    <p>Cargando...</p>
  </div>`;var w=document.createElement("div");w.id="load",w.innerHTML=j,m.appendChild(w),setTimeout(()=>{let S=document.getElementById(w.id);S&&m.removeChild(S)},5e3)}function vi(){const{mod:m,ext:f}=ut();let j=m!="Home"&&f!="index"?f:m;var w=fr[j];m!="logout"&&m!="noauth"&&f=="index"&&w!=null&&mi()}async function yi(m,f){if(oi!="firebase"){if(m=="Home"){const{version:j}=await or(`${f}assets/pwa/manifest.json`);console.log(`Version Actual: ${j}`);const w=await or(ii);if(w&&w!=null){const{ultimate:S}=w.data[0];j!=S&&console.log(`Actualizar version ${m} (${j} => ${S})`)}else console.warn("No se pudo llevar a cabo la comprobación de versiones")}}else console.warn("Only Firebase")}const bi=ut(),{host:xi,dominio:wi,path_url:Ti,hostDev:ki,typeBack:Ci}=bi;console.log("/* javascript login | VARIABLES CONSTANTES*/");let pn=dn+"/login/";xi==ki&&Ci!="firebase"&&console.log("api_login="+pn);function ji(){const m=document.getElementById("form-login");m!=null&&(m.addEventListener("submit",Si),console.log("btnLogin Activado"))}function Si(m){m.preventDefault(),console.log("Validación de Datos");let f=document.getElementById("username").value,j=document.getElementById("password").value;var w={username:f,password:j};const S=pn+"index.php";fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}).then(L=>L.json()).then(L=>{const{data:V}=L;ve("log",L),ve("log","getToken:"+V.token),localStorage.setItem("Token",V.token);let ne=localStorage.getItem("Token");if(ve("log","Res-Token:"+ne),ne!=null&&ne!="undefined")location.href=wi+Ti+"#/dashboard";else{let ye=document.getElementById("msj-error");ye.innerHTML='<div class="alert alert-danger" role="alert">Usuario o Contraseña Incorrectos</div>'}}).catch(L=>{console.log(L);let V=document.getElementById("msj-error");V.innerHTML='<div class="alert alert-danger" role="alert">Error:Usuario o Contraseña Incorrectos</div>'})}const Ei=()=>{const m=pn+"";fetch(m).then(f=>f.json()).then(f=>{ve("log",f)}).catch(f=>console.log(f)),setTimeout(function(){ji()},1e3)};function Ai(){console.log("Logout/Salir"),localStorage.clear();var m=localStorage.getItem("Token");m==null&&(console.warn("TOKEN CLEAR"),setTimeout(function(){window.location.href="#/"},3e3))}ut();function Li(m){let f=document.querySelector(".body");f&&(m!=""&&m!="Home"?f.style.display="none":f.style.display="inherit")}function Di(m,f){const j=["https://fonts.googleapis.com/css?family=Muli:300,400,700","https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css",f+"assets/login/vendor/bootstrap/css/bootstrap.min.css",f+"assets/login/vendor/font-awesome/css/font-awesome.min.css",f+"assets/login/css/font.css",f+"assets/login/css/style.green.css",f+"assets/login/css/custom.css"],w=[f+"assets/login/vendor/popper.js/umd/popper.min.js",f+"assets/login/vendor/bootstrap/js/bootstrap.min.js",f+"assets/login/vendor/bootstrap/js/bootstrap-colorpicker.min.js",f+"assets/login/vendor/jquery.cookie/jquery.cookie.js",f+"assets/login/vendor/chart.js/Chart.min.js",f+"assets/login/vendor/jquery-validation/jquery.validate.min.js","https://cdn.jsdelivr.net/npm/sweetalert2@9.14.4/dist/sweetalert2.all.min.js","https://cdn.jsdelivr.net/npm/toastify-js",f+"assets/login/js/front.js"];m=="app"?(console.log("cssLoadMod-loadStyle",m),sr(j,"appCS-"),lr(w,"appJS-","load")):(console.log("cssLoadMod-delStyle",m),ar(j,"appCS-"),lr(w,"appJS-","del"));const S=["https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CSintony:400,700",f+"assets/tema/css/bootstrap.min.css",f+"assets/tema/css/all.min.css",f+"assets/tema/css/animate.min.css",f+"assets/tema/css/simple-line-icons.min.css",f+"assets/tema/css/owl.carousel.min.css",f+"assets/tema/css/owl.theme.default.min.css",f+"assets/tema/css/magnific-popup.min.css",f+"assets/tema/css/theme.css",f+"assets/tema/css/theme-elements.css",f+"assets/tema/css/theme-blog.css",f+"assets/tema/css/theme-shop.css",f+"assets/tema/css/settings.css",f+"assets/tema/css/layers.css",f+"assets/tema/css/navigation.css",f+"assets/tema/css/demo-business-consulting.css",f+"assets/tema/css/skin-business-consulting.css",f+"assets/tema/css/style.css",f+"assets/font-awesome-4.7.0/css/font-awesome.css"],L=[f+"assets/tema/js/jquery.appear.min.js",f+"assets/tema/js/jquery.easing.min.js",f+"assets/tema/js/jquery.cookie.min.js",f+"assets/tema/js/popper.min.js",f+"assets/tema/js/bootstrap.min.js",f+"assets/tema/js/common.min.js",f+"assets/tema/js/jquery.validate.min.js",f+"assets/tema/js/jquery.easypiechart.min.js",f+"assets/tema/js/jquery.gmap.min.js",f+"assets/tema/js/jquery.lazyload.min.js",f+"assets/tema/js/jquery.isotope.min.js",f+"assets/tema/js/owl.carousel.min.js",f+"assets/tema/js/jquery.magnific-popup.min.js",f+"assets/tema/js/jquery.vide.min.js",f+"assets/tema/js/vivus.min.js",f+"assets/tema/js/theme.js",f+"assets/tema/js/jquery.themepunch.tools.min.js",f+"assets/tema/js/jquery.themepunch.revolution.min.js",f+"assets/tema/js/demo-business-consulting.js",f+"assets/tema/js/custom.js",f+"assets/tema/js/theme.init.js"];m!="Home"?(ar(S,"homeCS-"),gi(L,"homeJS-")):(sr(S,"homeCS-"),hi(L,"homeJS-"))}console.log("Firebase SDK");var Ni={apiKey:"AIzaSyDeX81H_K8AsV2KjQgEbwxte6yVdSYqFXk",authDomain:"vcardapp-js.firebaseapp.com",databaseURL:"https://vcardapp-js.firebaseio.com",projectId:"vcardapp-js",storageBucket:"vcardapp-js.appspot.com",messagingSenderId:"420720513571",appId:"1:420720513571:web:f072eeda6cd3cfa1429796",measurementId:"G-LDPZ4BZ1GV"};const fn=Eo(Ni),hn=To(fn),hr=Lo(fn);Ao(fn);function qi(m){console.log("saveUser");var f={uid:m.uid,usuario:m.displayName,email:m.email,foto:m.photoURL};Do(ur(hr,"vcard_signup/"+m.uid),f)}function Pi(m){const f=document.querySelector("#photo"),j=document.querySelector("#nombre_session"),w=document.querySelector("#email_session"),S=document.querySelector("#id_code_google"),L=ur(hr,"vcard_signup/");No(L,V=>{const ne=V.val();for(let ye in ne){const Y=ne[ye];if(Y.uid==m.uid){console.log(Y);const Te='<img src="'+(Y.foto==null?page_url+"bloques/files/images/photos/sinfoto.png":Y.foto)+'" class="img-fluid rounded-circle">',qe=Y.usuario==null?Y.email:Y.usuario,Je=Y.email,W=Y.uid;f.innerHTML=Te,j.innerHTML=qe,w.innerHTML=Je,S.innerHTML=W}}})}document.querySelectorAll(".logged-out");document.querySelectorAll(".logged-in");const cr=m=>{console.log("loginCheck"),document.querySelector("#logout-1");const f=document.querySelector("#btnRegis"),j=document.querySelector("#btnLogin"),w=document.querySelector(".registro-page"),S=document.querySelector(".login-page"),L=document.querySelector(".dashboard");m?(S.style.display="none",w.style.display="none",L.style.display="block"):(S.style.display="block",L.style.display="none",f&&f.addEventListener("click",()=>{w.style.display="block",S.style.display="none"}),j&&j.addEventListener("click",()=>{w.style.display="none",S.style.display="block"}))};function gr(m,f){Toastify({text:m,duration:3e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"bottom",position:"right",stopOnFocus:!0,style:{background:f==="success"?"green":f==="warning"?"orange":f==="info"?"blue":"red"},onClick:function(){}}).showToast()}function Ii(){const m=document.querySelector("#googleLogin");m&&m.addEventListener("click",async f=>{f.preventDefault();const j=new ko;try{const w=await Co(hn,j);console.log(w),console.log("google sign in"),localStorage.setItem("Token",w.user.accessToken);let S=localStorage.getItem("Token");consoleLocal("log","Res-Token:"+S),gr("Welcome "+w.user.displayName,"success")}catch(w){console.log(w)}})}function Hi(){const m=document.querySelector("#logout");m&&m.addEventListener("click",async f=>{f.preventDefault();try{await jo(hn),console.log("Logout/Salir"),localStorage.clear();var j=localStorage.getItem("Token");j==null&&console.warn("TOKEN CLEAR"),gr("Signup out","info")}catch(w){console.log(w)}})}function Ri(){console.log("Cargando App..."),Ii(),Hi(),So(hn,async m=>{if(m){ve("log",m),cr(m),Pi(m);try{qi(m)}catch(f){console.log(f)}}else cr(m)})}const un=()=>{Ri()};function Oi(m){const{route:f,mod:j,id:w,base_url:S}=m;ve("log","route="+f),vi(),j&&(Li(j),Di(j,S)),f=="app/index"&&un(),f=="app/perfil"&&un(),f=="login/index"&&Ei(),f=="logout/index"&&Ai(),(f=="dashboard/index"||j=="dashboard"||j=="links")&&un()}function ut(){var m=window,f=document,j=m.location,w=new Date,S=w.getDate();S=S<10?"0"+S:S;var L=w.getMonth()+1;L=L<10?"0"+L:L;var V=w.getFullYear(),ne=V+"-"+L+"-"+S;const{protocol:ye,host:Y,origin:$e,pathname:Te,hash:qe,href:Je,search:W}=j,O=$e+"/",Ae=$e,Rt=Je,dt=W,be=Te.replace("/",""),o=O+be,pt=Y=="localhost"||Y!=It&&Y!=Ht?be+Dt:Dt,Ye=Y=="localhost:9001"?"../":"./",ke=O+pt,Le=screen.width,ft=screen.height;var Ke="default",ce="temas/"+Ke+"/",ht=si(),Fe=ai(qe,Dt);let{mod:Pe,ext:Ie,id:Ot}=li(Fe);var gt="/"+Ie,Qe=Pe+gt,ue=Pe||"",Mt=Ie&&Ie!="index"?"/"+Ie:"",De="#/"+ue+Mt,We=o+cn+Qe+".html",mt=o+cn+"404/index.html";return{w:m,d:f,loc:j,dt:w,day:S,mon:L,year:V,fecha:ne,title:Io,typeBack:Ho,typeDev:Ro,path_hash:Dt,path_src:dr,path_page:cn,hostDev:It,hostPre:Ht,protocol:ye,host:Y,dominio:O,dominio1:Ae,pathname:Te,hash:qe,URL:Rt,quest:dt,path_url:be,path_root:pt,path_build:Ye,base_url:o,page_url:ke,screenw:Le,screenh:ft,tema:Ke,path_tema:ce,pag_name:ht,vars_Url:Fe,mod:Pe,ext:Ie,id:Ot,ext2:gt,route:Qe,hash2:De,url_mod:We,url404:mt,apiVer:Oo}}function mr(){const m=ut();ve("log",m);const{hash:f,mod:j,ext:w,page_url:S,base_url:L,title:V}=m;ui(f,j,w,V),Oi(m),ci(f,j,pr),fi(j,S),yi(j,L)}function Mi(){console.log("Run function inicio"),mr()}window.addEventListener("hashchange",()=>{ve("warn","Event Listener"),mr()});Mi()});export default Bi();
