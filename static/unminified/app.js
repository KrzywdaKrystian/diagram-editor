/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,X,w){'use strict';function I(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.7/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Za(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===pa&&a?!0:G(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(x(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(J(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(mc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)ta.call(b,d)&&a.call(c,b[d],d,b);return b}function nc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function oc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function pc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var h=a[e];if(C(h)||x(h))for(var g=Object.keys(h),l=0,k=g.length;l<k;l++){var n=g[l],p=h[n];c&&C(p)?ea(p)?b[n]=new Date(p.valueOf()):Oa(p)?
b[n]=new RegExp(p):(C(b[n])||(b[n]=J(p)?[]:{}),Mb(b[n],[p],!0)):b[n]=p}}pc(b,d);return b}function P(b){return Mb(b,ua.call(arguments,1),!1)}function Vd(b){return Mb(b,ua.call(arguments,1),!0)}function Y(b){return parseInt(b,10)}function Nb(b,a){return P(Object.create(b),a)}function y(){}function $a(b){return b}function qa(b){return function(){return b}}function qc(b){return x(b.toString)&&b.toString!==Object.prototype.toString}function v(b){return"undefined"===typeof b}function A(b){return"undefined"!==
typeof b}function C(b){return null!==b&&"object"===typeof b}function mc(b){return null!==b&&"object"===typeof b&&!rc(b)}function G(b){return"string"===typeof b}function V(b){return"number"===typeof b}function ea(b){return"[object Date]"===va.call(b)}function x(b){return"function"===typeof b}function Oa(b){return"[object RegExp]"===va.call(b)}function Za(b){return b&&b.window===b}function ab(b){return b&&b.$evalAsync&&b.$watch}function bb(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||
b.prop&&b.attr&&b.find))}function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function wa(b){return F(b.nodeName||b[0]&&b[0].nodeName)}function cb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function ha(b,a,c,d){if(Za(b)||ab(b))throw Ea("cpws");if(tc.test(va.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];C(b)&&(c.push(b),d.push(a));var e;if(J(b))for(e=a.length=0;e<b.length;e++)a.push(ha(b[e],null,c,d));else{var f=a.$$hashKey;J(a)?
a.length=0:m(a,function(b,c){delete a[c]});if(mc(b))for(e in b)a[e]=ha(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=ha(b[e],null,c,d));else for(e in b)ta.call(b,e)&&(a[e]=ha(b[e],null,c,d));pc(a,f)}}else if(a=b,C(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(J(b))return ha(b,[],c,d);if(tc.test(va.call(b)))a=new b.constructor(b);else if(ea(b))a=new Date(b.getTime());else if(Oa(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
b.lastIndex;else if(x(b.cloneNode))a=b.cloneNode(!0);else return e=Object.create(rc(b)),ha(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ja(b,a){if(J(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(C(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<
c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?ka(b.getTime(),a.getTime()):!1;if(Oa(b))return Oa(a)?b.toString()==a.toString():!1;if(ab(b)||ab(a)||Za(b)||Za(a)||J(a)||ea(a)||Oa(a))return!1;c=fa();for(d in b)if("$"!==d.charAt(0)&&!x(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c)&&"$"!==d.charAt(0)&&A(a[d])&&!x(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(ua.call(a,c))}function uc(b,a){var c=2<arguments.length?ua.call(arguments,2):[];
return!x(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,db(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=w:Za(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":ab(a)&&(c="$SCOPE");return c}function eb(b,a){if("undefined"===typeof b)return w;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function vc(b){return G(b)?JSON.parse(b):b}function wc(b,
a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function xa(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===Pa?F(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(d){return F(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}
function yc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=xc(e),A(e)&&(f=A(f)?xc(f):!0,ta.call(a,e)?J(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){J(b)?m(b,function(b){a.push(la(d,!0)+(!0===b?"":"="+la(b,!0)))}):a.push(la(d,!0)+(!0===b?"":"="+la(b,!0)))});return a.length?a.join("&"):""}function ob(b){return la(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function la(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Qa.length;for(d=0;d<e;++d)if(c=Qa[d]+a,G(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Qa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Qa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":",
"\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){C(c)||(c={});c=P({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===X?"document":xa(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=fb(a,c.strictDi);d.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");da.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};x(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function $d(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}
function ae(b){b=da.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Bc){var a=pb();(ra=v(a)?Q.jQuery:a?Q[a]:w)&&ra.fn.on?(B=ra,P(ra.fn,{scope:Ra.scope,isolateScope:Ra.isolateScope,controller:Ra.controller,injector:Ra.injector,inheritedData:Ra.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=
ra._data(f,"events"))&&d.$destroy&&ra(f).triggerHandler("$destroy");b(a)}):B=R;da.element=B;Bc=!0}}function qb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&J(b)&&(b=b[b.length-1]);qb(x(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ta(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&
x(b)?uc(e,b):b}function rb(b){for(var a=b[0],c=b[b.length-1],d,e=1;a!==c&&(a=a.nextSibling);e++)if(d||b[e]!==a)d||(d=B(ua.call(b,0,e))),d.push(a);return d||b}function fa(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=I("$injector"),d=I("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||I;return a(b,"module",function(){var b={};return function(f,h,g){if("hasOwnProperty"===f)throw d("badname","module");h&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,
c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return E}}function b(a,c){return function(b,e){e&&x(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return E}}if(!h)throw c("nomod",f);var d=[],e=[],r=[],t=a("$injector","invoke","push",e),E={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:h,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:t,run:function(a){r.push(a);return this}};g&&t(g);return E})}})}function ee(b){P(b,{bootstrap:zc,copy:ha,extend:P,merge:Vd,equals:ka,element:B,forEach:m,injector:fb,noop:y,bind:uc,toJson:eb,fromJson:vc,identity:$a,isUndefined:v,isDefined:A,isString:G,isFunction:x,isObject:C,isNumber:V,isElement:sc,isArray:J,
version:fe,isDate:ea,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:I,$$csp:Fa,reloadWithDebugInfo:$d});Rb=de(Q);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Dc).directive({a:he,input:Ec,textarea:Ec,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Jc);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
$filter:Kc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function gb(b){return b.replace(Af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Bf,"Moz$1")}function Lc(b){b=b.nodeType;
return b===pa||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Cf.exec(b)||["",""])[1].toLowerCase();d=ma[d]||ma._default;c.innerHTML=d[1]+b.replace(Df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;G(b)&&(b=T(b),
a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=Ef.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Ub(b){return b.cloneNode(!0)}function ub(b,a){a||vb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)vb(c[d])}function Oc(b,a,c,d){if(A(d))throw Tb("offargs");var e=(d=wb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(A(c)){var d=e[a];cb(d||[],c);if(d&&0<
d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function vb(b,a){var c=b.ng339,d=c&&hb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Oc(b)),delete hb[c],b.ng339=w))}function wb(b,a){var c=b.ng339,c=c&&hb[c];a&&!c&&(b.ng339=c=++Ff,c=hb[c]={events:{},data:{},handle:w});return c}function Vb(b,a,c){if(Lc(b)){var d=A(c),e=!d&&a&&!C(a),f=!a;b=(b=wb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
if(e)return b&&b[a];P(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if(A(c=B.data(b,a[d])))return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(ub(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Wb(b,a){a||ub(b);var c=b.parentNode;c&&c.removeChild(b)}function Gf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Rc(b,a){var c=Bb[a.toLowerCase()];return c&&Sc[wa(b)]&&c}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],h=f?f.length:0;if(h){if(v(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();g&&g.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<h&&(f=ja(f));for(var l=0;l<h;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function xf(){this.$get=function(){return P(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Ua(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Tc,"").match(Uc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(b,a){function c(a){return function(b,c){if(C(b))m(b,oc(a));else return a(b,c)}}function d(a,b){Ta(a,"service");if(x(b)||J(b))b=r.instantiate(b);
if(!b.$get)throw Ha("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=E.invoke(b,this);if(v(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function h(a){qb(v(a)||J(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{G(a)?(c=Rb(a),b=b.concat(h(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):
x(a)?b.push(r.invoke(a)):J(a)?b.push(r.invoke(a)):Sa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=
f,f=null);var h=[],k=fb.$$annotate(b,a,g),l,r,p;r=0;for(l=k.length;r<l;r++){p=k[r];if("string"!==typeof p)throw Ha("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}J(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((J(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return C(a)||x(a)?a:d},get:d,annotate:fb.$$annotate,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Ua([],!0),p={$provide:{provider:c(d),
factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,qa(b),!1)}),constant:c(function(a,b){Ta(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=E.invoke(d,c);return E.invoke(b,null,{$delegate:a})}}}},r=p.$injector=g(p,function(a,b){da.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),t={},E=t.$injector=g(t,function(a,b){var c=r.get(a+"Provider",b);
return E.invoke(c.$get,c,w,a)});m(h(b),function(a){a&&E.invoke(a)});return E}function Qe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=h.yOffset;x(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,
a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function h(a){a=G(a)?a:c.hash();var b;a?(b=g.getElementById(a))?f(b):(b=e(g.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Gf(function(){d.$evalAsync(h)})});return h}]}function ib(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;J(b)&&(b=b.join(" "));J(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){G(b)&&(b=b.split(" "));var a=fa();m(b,function(b){b.length&&
(a[b]=!0)});return a}function Ia(b){return C(b)?b:{}}function Kf(b,a,c,d){function e(a){try{a.apply(null,ua.call(arguments,1))}finally{if(E--,0===E)for(;K.length;)try{K.pop()()}catch(b){c.error(b)}}}function f(){ia=null;h();g()}function h(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=v(u)?null:u;ka(u,L)&&(u=L);L=u}function g(){if(z!==l.url()||q!==u)z=l.url(),q=u,m(O,function(a){a(l.url(),u)})}var l=this,k=b.location,n=b.history,p=b.setTimeout,r=b.clearTimeout,t={};l.isMock=!1;var E=0,K=[];l.$$completeOutstandingRequest=
e;l.$$incOutstandingRequestCount=function(){E++};l.notifyWhenNoOutstandingRequests=function(a){0===E?a():K.push(a)};var u,q,z=k.href,N=a.find("base"),ia=null;h();q=u;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=q===e;if(z===a&&(!d.history||f))return l;var g=z&&Ja(z)===Ja(a);z=a;q=e;if(!d.history||g&&f){if(!g||ia)ia=a;c?k.replace(a):g?(c=k,e=a.indexOf("#"),e=-1===e?"":a.substr(e),c.hash=e):k.href=a;k.href!==a&&(ia=a)}else n[c?"replaceState":
"pushState"](e,"",a),h(),q=u;return l}return ia||k.href.replace(/%27/g,"'")};l.state=function(){return u};var O=[],H=!1,L=null;l.onUrlChange=function(a){if(!H){if(d.history)B(b).on("popstate",f);B(b).on("hashchange",f);H=!0}O.push(a);return a};l.$$applicationDestroyed=function(){B(b).off("hashchange popstate",f)};l.$$checkUrlChange=g;l.baseHref=function(){var a=N.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;E++;c=p(function(){delete t[c];e(a)},b||0);
t[c]=!0;return c};l.defer.cancel=function(a){return t[a]?(delete t[a],r(a),e(y),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=p&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var h=0,g=P({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,r=null;return a[b]=
{put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||h++;l[a]=b;h>k&&this.remove(r.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];h--},removeAll:function(){l={};h=0;n={};p=r=null},destroy:function(){n=g=l=null;delete a[b]},info:function(){return P({},g,{size:h})}}}var a={};b.info=function(){var b=
{};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function rf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||
b!==F(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Ta(a,"directive");G(a)?(d(a),qb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);x(h)?h={compile:qa(h)}:
!h.compile&&h.link&&(h.compile=qa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,r=h.name,n={isolateScope:null,bindToController:null};C(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));C(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(C(n.bindToController)){var S=l.controller,E=l.controllerAs;if(!S)throw ga("noctrl",
r);var ca;a:if(E&&G(E))ca=E;else{if(G(S)){var m=Vc.exec(S);if(m){ca=m[3];break a}}ca=void 0}if(!ca)throw ga("noident",r);}var s=k.$$bindings=n;C(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(w){d(w)}});return f}])),e[a].push(f)):m(a,oc(r));return this};this.aHrefSanitizationWhitelist=function(b){return A(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a.imgSrcSanitizationWhitelist(b),
this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return A(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,q,z,N,ia,O,H){function L(a,b){try{a.addClass(b)}catch(c){}}function W(a,b,c,d,e){a instanceof B||(a=B(a));m(a,function(b,c){b.nodeType==Pa&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=
S(a,b,a,c,d,e);W.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Xb(g,B("<div>").append(a).html())):c?Ra.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);W.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,
b,c,d,e,f){function g(a,c,d,e){var f,k,l,r,n,t,O;if(q)for(O=Array(c.length),r=0;r<h.length;r+=3)f=h[r],O[f]=c[f];else O=c;r=0;for(n=h.length;r<n;)if(k=O[h[r++]],c=h[r++],f=h[r++],c){if(c.scope){if(l=a.$new(),W.$$addScopeInfo(B(k),l),t=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",t)}else l=a;t=c.transcludeOnThisElement?ba(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ba(a,b):null;c(f,l,k,d,t,c)}else f&&f(a,k.childNodes,w,e)}for(var h=[],k,l,r,n,q,t=0;t<a.length;t++){k=new Z;
l=ca(a[t],[],k,0===t?d:w,e);(f=l.length?D(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&W.$$addScopeClass(k.$$element);k=f&&f.terminal||!(r=a[t].childNodes)||!r.length?null:S(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(t,f,k),n=!0,q=q||f;f=null}return n?g:null}function ba(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ca(a,b,c,d,e){var g=
c.$attr,k;switch(a.nodeType){case pa:na(b,ya(wa(a)),"E",d,e);for(var l,r,n,q=a.attributes,t=0,O=q&&q.length;t<O;t++){var K=!1,H=!1;l=q[t];k=l.name;r=T(l.value);l=ya(k);if(n=ja.test(l))k=k.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var S=l.replace(/(Start|End)$/,"");I(S)&&l===S+"Start"&&(K=k,H=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=ya(k.toLowerCase());g[l]=k;if(n||!c.hasOwnProperty(l))c[l]=r,Rc(a,l)&&(c[l]=!0);V(a,b,r,l,n);na(b,l,"A",d,e,K,H)}a=
a.className;C(a)&&(a=a.animVal);if(G(a)&&""!==a)for(;k=h.exec(a);)l=ya(k[2]),na(b,l,"C",d,e)&&(c[l]=T(k[3])),a=a.substr(k.index+k[0].length);break;case Pa:if(11===Wa)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Pa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);Ka(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=ya(k[1]),na(b,l,"M",d,e)&&(c[l]=T(k[2]))}catch(E){}}b.sort(M);return b}function za(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",
b,c);a.nodeType==pa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=za(e[0],b,c);return a(d,e,f,g,h)}}function D(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=D.require;a.directiveName=y;if(u===D||D.$$isolateScope)a=$(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=D.require;b.directiveName=y;if(u===D||D.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}
function t(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ga("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=t(a,b[g],c,d);return e||null}function O(a,b,c,d,e,f){var g=fa(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=k.controller;"@"==r&&(r=b[k.name]);l=q(r,
l,!0,k.controllerAs);g[k.name]=l;ia||a.data("$"+k.name+"Controller",l.instance)}return g}function K(a,c,e,f,g,l){function r(a,b,c){var d;ab(a)||(c=b,b=a,a=w);ia&&(d=ca);c||(c=ia?N.parent():N);return g(a,b,d,c,za)}var n,q,H,E,ca,z,N;b===e?(f=d,N=d.$$element):(N=B(e),f=new Z(N,d));u&&(E=c.$new(!0));g&&(z=r,z.$$boundTransclude=g);ba&&(ca=O(N,f,z,ba,E,c));u&&(W.$$addScopeInfo(N,E,!0,!(L&&(L===u||L===u.$$originalDirective))),W.$$addScopeClass(N,!0),E.$$isolateBindings=u.$$isolateBindings,Y(c,f,E,E.$$isolateBindings,
u,E));if(ca){var Va=u||S,m;Va&&ca[Va.name]&&(q=Va.$$bindings.bindToController,(H=ca[Va.name])&&H.identifier&&q&&(m=H,l.$$destroyBindings=Y(c,f,H.instance,q,Va)));for(n in ca){H=ca[n];var D=H();D!==H.instance&&(H.instance=D,N.data("$"+n+"Controller",D),H===m&&(l.$$destroyBindings(),l.$$destroyBindings=Y(c,f,D,q,Va)))}}n=0;for(l=h.length;n<l;n++)q=h[n],aa(q,q.isolateScope?E:c,N,f,q.require&&t(q.directiveName,q.require,N,ca),z);var za=c;u&&(u.template||null===u.templateUrl)&&(za=E);a&&a(za,e.childNodes,
w,g);for(n=k.length-1;0<=n;n--)q=k[n],aa(q,q.isolateScope?E:c,N,f,q.require&&t(q.directiveName,q.require,N,ca),z)}r=r||{};for(var H=-Number.MAX_VALUE,S=r.newScopeDirective,ba=r.controllerDirectives,u=r.newIsolateScopeDirective,L=r.templateDirective,z=r.nonTlbTranscludeDirective,N=!1,m=!1,ia=r.hasElementTranscludeDirective,v=d.$$element=B(b),D,y,M,Ka=e,na,I=0,F=a.length;I<F;I++){D=a[I];var P=D.$$start,R=D.$$end;P&&(v=za(b,P,R));M=w;if(H>D.priority)break;if(M=D.scope)D.templateUrl||(C(M)?(Q("new/isolated scope",
u||S,D,v),u=D):Q("new/isolated scope",u,D,v)),S=S||D;y=D.name;!D.templateUrl&&D.controller&&(M=D.controller,ba=ba||fa(),Q("'"+y+"' controller",ba[y],D,v),ba[y]=D);if(M=D.transclude)N=!0,D.$$tlb||(Q("transclusion",z,D,v),z=D),"element"==M?(ia=!0,H=D.priority,M=v,v=d.$$element=B(X.createComment(" "+y+": "+d[y]+" ")),b=v[0],U(f,ua.call(M,0),b),Ka=W(M,e,H,g&&g.name,{nonTlbTranscludeDirective:z})):(M=B(Ub(b)).contents(),v.empty(),Ka=W(M,e));if(D.template)if(m=!0,Q("template",L,D,v),L=D,M=x(D.template)?
D.template(v,d):D.template,M=ha(M),D.replace){g=D;M=Sb.test(M)?Xc(Xb(D.templateNamespace,T(M))):[];b=M[0];if(1!=M.length||b.nodeType!==pa)throw ga("tplrt",y,"");U(f,v,b);F={$attr:{}};M=ca(b,[],F);var Lf=a.splice(I+1,a.length-(I+1));u&&A(M);a=a.concat(M).concat(Lf);Yc(d,F);F=a.length}else v.html(M);if(D.templateUrl)m=!0,Q("template",L,D,v),L=D,D.replace&&(g=D),K=Mf(a.splice(I,a.length-I),v,d,f,N&&Ka,h,k,{controllerDirectives:ba,newScopeDirective:S!==D&&S,newIsolateScopeDirective:u,templateDirective:L,
nonTlbTranscludeDirective:z}),F=a.length;else if(D.compile)try{na=D.compile(v,d,Ka),x(na)?n(null,na,P,R):na&&n(na.pre,na.post,P,R)}catch(V){c(V,xa(v))}D.terminal&&(K.terminal=!0,H=Math.max(H,D.priority))}K.scope=S&&!0===S.scope;K.transcludeOnThisElement=N;K.templateOnThisElement=m;K.transclude=Ka;r.hasElementTranscludeDirective=ia;return K}function A(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function na(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;
d=a.get(d+"Directive");for(var q=0,t=d.length;q<t;q++)try{n=d[q],(v(g)||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Nb(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(H){c(H)}}return h}function I(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Yc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==
f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Mf(a,b,c,e,f,g,h,k){var l=[],r,n,q=b[0],t=a.shift(),H=Nb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),O=x(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,E=t.templateNamespace;b.empty();d(O).then(function(d){var K,u;d=ha(d);if(t.replace){d=Sb.test(d)?Xc(Xb(E,T(d))):
[];K=d[0];if(1!=d.length||K.nodeType!==pa)throw ga("tplrt",t.name,O);d={$attr:{}};U(e,b,K);var z=ca(K,[],d);C(t.scope)&&A(z);a=z.concat(a);Yc(c,d)}else K=q,b.html(d);a.unshift(H);r=D(a,K,c,f,b,t,g,h,k);m(e,function(a,c){a==K&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var N=l.shift(),W=l.shift(),z=b[0];if(!d.$$destroyed){if(u!==q){var za=u.className;k.hasElementTranscludeDirective&&t.replace||(z=Ub(K));U(N,B(u),z);L(B(z),za)}u=r.transcludeOnThisElement?ba(d,r.transclude,
W):W;r(n,d,z,e,u,r)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(r.transcludeOnThisElement&&(a=ba(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function M(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function Ka(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&W.$$addBindingClass(a);return function(a,c){var e=c.parent();b||W.$$addBindingClass(e);W.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return ia.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return ia.RESOURCE_URL}function V(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var l=b(d,!0,h,f);if(l){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",xa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=fa());if(k.test(e))throw ga("nodomevents");var r=g[e];r!==d&&(l=r&&b(r,!0,h,f),d=r);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,
a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);B.hasData(d)&&(B(c).data(B(d).data()),ra?(Qb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function $(a,
b){return P(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function Y(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,r,n,q,K;switch(e.mode){case "@":l||ta.call(c,k)||(d[g]=c[k]=void 0);c.$observe(k,function(a){G(a)&&(d[g]=a)});c.$$observers[k].$$scope=a;G(c[k])&&(d[g]=b(c[k])(a));break;case "=":if(!ta.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;n=u(c[k]);K=n.literal?ka:function(a,b){return a===b||a!==a&&b!==
b};q=n.assign||function(){r=d[g]=n(a);throw ga("nonassign",c[k],f.name);};r=d[g]=n(a);l=function(b){K(b,d[g])||(K(b,r)?q(a,b=d[g]):d[g]=b);return r=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,n.literal);h=h||[];h.push(l);break;case "&":n=c.hasOwnProperty(k)?u(c[k]):y;if(n===y&&l)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:y;return g&&e!==y?(g.$on("$destroy",e),y):e}var Z=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Z.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zc(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=Zc(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=$c[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=
b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,"-"));f=wa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var r=2*l,f=f+H(T(g[r]),!0),f=f+(" "+T(g[r+1]));g=T(g[2*l]).split(/\s/);f+=H(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||v(b)?this.$$element.removeAttr(e):
this.$$element.attr(e,b));(a=this.$$observers)&&m(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=fa()),e=d[a]||(d[a]=[]);e.push(b);z.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||v(c[a])||b(c[a])});return function(){cb(e,b)}}};var da=b.startSymbol(),ea=b.endSymbol(),ha="{{"==da||"}}"==ea?$a:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ea)},ja=/^ngAttr[A-Z]/;W.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||
[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;W.$$addBindingClass=n?function(a){L(a,"ng-binding")}:y;W.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;W.$$addScopeClass=n?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:y;return W}]}function ya(b){return gb(b.replace(Wc,""))}function Zc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?
" ":"")+h}return c}function Xc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Nf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ta(a,"controller");C(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!C(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,h,g,l){var k,n,p;g=!0===g;l&&G(l)&&(p=l);if(G(f)){l=f.match(Vc);if(!l)throw Of("ctrlfmt",f);
n=l[1];p=p||l[3];f=b.hasOwnProperty(n)?b[n]:Cc(h.$scope,n,!0)||(a?Cc(d,n,!0):w);Sa(f,n,!0)}if(g)return g=(J(f)?f[f.length-1]:f).prototype,k=Object.create(g||null),p&&e(h,p,k,n||f.name),P(function(){var a=c.invoke(f,k,h,n);a!==k&&(C(a)||x(a))&&(k=a,p&&e(h,p,k,n||f.name));return k},{instance:k,identifier:p});k=c.instantiate(f,h,n);p&&e(h,p,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return B(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,
arguments)}}]}function Yb(b){return C(b)?ea(b)?b.toISOString():eb(b):b}function df(){this.$get=function(){return function(b){if(!b)return"";var a=[];nc(b,function(b,d){null===b||v(b)||(J(b)?m(b,function(b,c){a.push(la(d)+"="+la(Yb(b)))}):a.push(la(d)+"="+la(Yb(b))))});return a.join("&")}}}function ef(){this.$get=function(){return function(b){function a(b,e,f){null===b||v(b)||(J(b)?m(b,function(b,c){a(b,e+"["+(C(b)?c:"")+"]")}):C(b)&&!ea(b)?nc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(la(e)+
"="+la(Yb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(G(b)){var c=b.replace(Pf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(ad))||(d=(d=c.match(Qf))&&Rf[d[0]].test(c));d&&(b=vc(c))}}return b}function bd(b){var a=fa(),c;G(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=F(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):C(b)&&m(b,function(b,c){var f=F(c),h=T(b);f&&(a[f]=a[f]?a[f]+", "+h:h)});return a}function cd(b){var a;
return function(c){a||(a=bd(b));return c?(c=a[F(c)],void 0===c&&(c=null),c):a}}function dd(b,a,c,d){if(x(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function cf(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return C(a)&&"[object File]"!==va.call(a)&&"[object Blob]"!==va.call(a)&&"[object FormData]"!==va.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja($b),put:ja($b),patch:ja($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",
paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return A(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return A(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,h,g,l,k){function n(a){function d(a){var b=P({},a);b.data=a.data?dd(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,
d={};m(a,function(a,e){x(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!da.isObject(a))throw I("$http")("badreq",a);var f=P({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=P({},a.headers),f,g,h,c=P({},c.common,c[F(a.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ja(a))}(a);f.method=sb(f.method);f.paramSerializer=G(f.paramSerializer)?k.get(f.paramSerializer):
f.paramSerializer;var g=[function(a){var c=a.headers,e=dd(a.data,cd(c),w,a.transformRequest);v(e)&&m(c,function(a,b){"content-type"===F(b)&&delete c[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return p(a,e).then(d,d)},w],h=l.when(f);for(m(E,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Sa(a,
"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Sa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=ed("success"),h.error=ed("error"));return h}function p(c,d){function h(b,c,d,e){function f(){k(c,b,d,e)}L&&(200<=b&&300>b?L.put(ba,[b,c,bd(d),e]):L.remove(ba));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function k(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:cd(d),config:c,statusText:e})}
function p(a){k(a.data,a.status,ja(a.headers()),a.statusText)}function E(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var O=l.defer(),H=O.promise,L,m,S=c.headers,ba=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);H.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(L=C(c.cache)?c.cache:C(b.cache)?b.cache:t);L&&(m=L.get(ba),A(m)?m&&x(m.then)?m.then(p,p):J(m)?k(m[1],m[0],ja(m[2]),m[3]):k(m,200,{},"OK"):L.put(ba,H));v(m)&&((m=
fd(c.url)?f()[c.xsrfCookieName||b.xsrfCookieName]:w)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,ba,d,h,S,c.timeout,c.withCredentials,c.responseType));return H}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var t=h("$http");b.paramSerializer=G(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var E=[];m(d,function(a){E.unshift(G(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(P({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function gf(){this.$get=function(){return function(){return new Q.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(b,a,c,d){return Sf(b,d,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),
n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var h=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,h="error"===a.type?404:200);c&&c(h,t)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,g,l,k,n,p,r,t){function E(){q&&q();z&&z.abort()}function K(a,d,e,f,g){A(s)&&c.cancel(s);q=z=null;a(d,
e,f,g);b.$$completeOutstandingRequest(y)}b.$$incOutstandingRequestCount();g=g||b.url();if("jsonp"==F(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var q=f(g.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){K(k,a,d[u].data,"",b);d[u]=y})}else{var z=a(e,g);z.open(e,g,!0);m(n,function(a,b){A(a)&&z.setRequestHeader(b,a)});z.onload=function(){var a=z.statusText||"",b="response"in z?z.response:z.responseText,c=1223===z.status?204:z.status;0===c&&(c=
b?200:"file"==Aa(g).protocol?404:0);K(k,c,b,z.getAllResponseHeaders(),a)};e=function(){K(k,-1,null,null,"")};z.onerror=e;z.onabort=e;r&&(z.withCredentials=!0);if(t)try{z.responseType=t}catch(N){if("json"!==t)throw N;}z.send(v(l)?null:l)}if(0<p)var s=c(E,p);else p&&x(p.then)&&p.then(E)}}function af(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+
a}function h(c){return c.replace(n,b).replace(p,a)}function g(f,g,n,p){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(p&&!A(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}c=a}return c}catch(g){d(La.interr(f,g))}}p=!!p;for(var q,m,N=0,s=[],O=[],H=f.length,L=[],W=[];N<H;)if(-1!=(q=f.indexOf(b,N))&&-1!=(m=f.indexOf(a,q+l)))N!==q&&L.push(h(f.substring(N,q))),N=f.substring(q+l,m),s.push(N),O.push(c(N,u)),N=m+k,W.push(L.length),
L.push("");else{N!==H&&L.push(h(f.substring(N)));break}n&&1<L.length&&La.throwNoconcat(f);if(!g||s.length){var S=function(a){for(var b=0,c=s.length;b<c;b++){if(p&&v(a[b]))return;L[W[b]]=a[b]}return L.join("")};return P(function(a){var b=0,c=s.length,e=Array(c);try{for(;b<c;b++)e[b]=O[b](a);return S(e)}catch(g){d(La.interr(f,g))}},{exp:f,expressions:s,$$watchDelegate:function(a,b){var c;return a.$watchGroup(O,function(d,e){var f=S(d);x(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,
n=new RegExp(b.replace(/./g,f),"g"),p=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,g,l,k){var n=4<arguments.length,p=n?ua.call(arguments,4):[],r=a.setInterval,t=a.clearInterval,E=0,K=A(k)&&!k,u=(K?d:c).defer(),q=u.promise;l=A(l)?l:0;q.then(null,null,n?function(){e.apply(null,p)}:e);q.$$intervalId=r(function(){u.notify(E++);0<l&&E>=l&&(u.resolve(E),
t(q.$$intervalId),delete f[q.$$intervalId]);K||b.$apply()},g);f[q.$$intervalId]=u;return q}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);return b.join("/")}function gd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Y(c.port)||Tf[c.protocol]||null}function hd(b,a){var c="/"!==b.charAt(0);
c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function sa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";gd(b,this);this.$$parse=function(b){var c=sa(a,
b);if(!G(c))throw Db("ipthprfx",b,a);hd(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;A(f=sa(b,d))?(h=f,h=A(f=sa(c,f))?a+(sa("/",f)||f):b+h):A(f=sa(a,d))?h=a+f:a==d+"/"&&(h=a);h&&this.$$parse(h);return!!h}}function cc(b,a,c){gd(b,this);
this.$$parse=function(d){var e=sa(b,d)||sa(a,d),f;v(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",v(e)&&(b=d,this.replace())):(f=sa(c,e),v(f)&&(f=e));hd(f,this);d=this.$$path;var e=b,h=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));h.exec(f)||(d=(f=h.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=
function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function id(b,a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,h;b==Ja(d)?f=d:(h=sa(a,d))?f=b+c+h:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function jd(b,
a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function hf(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return A(a)?(b=a,this):b};this.html5Mode=function(b){return bb(b)?(a.enabled=b,this):C(b)?(bb(b.enabled)&&(a.enabled=b.enabled),bb(b.requireBase)&&(a.requireBase=b.requireBase),bb(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,
d,e,f,h){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?bc:id}else r=Ja(p),n=cc;var t=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,t,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();
var E=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");C(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Aa(g.animVal).href);E.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),h.angular["ff-684208-preventDefault"]=
!0))}});Cb(k.absUrl())!=Cb(p)&&d.url(k.absUrl(),!0);var K=!0;d.onUrlChange(function(a,b){v(sa(t,a))?h.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(K=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),h=k.$$replace,r=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(K||r)K=!1,
c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(r&&g(b,h,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function jf(){var b=!0,a=this;this.debugEnabled=function(a){return A(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=
a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Xa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
b||"__proto__"===b)throw Z("isecfld",a);return b}function kd(b,a){b+="";if(!G(b))throw Z("iseccst",a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw Z("isecfn",a);if(b.window===b)throw Z("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Z("isecdom",a);if(b===Object)throw Z("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw Z("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw Z("isecff",a);}}function md(b,a){if(b&&(b===(0).constructor||b===(!1).constructor||
b==="".constructor||b==={}.constructor||b===[].constructor||b===Function.constructor))throw Z("isecaf",a);}function Xf(b,a){return"undefined"!==typeof b?b:a}function nd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case s.Program:c=!0;m(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case s.Literal:b.constant=!0;b.toWatch=[];break;case s.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=
b.argument.toWatch;break;case s.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case s.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case s.Identifier:b.constant=
!1;b.toWatch=[b];break;case s.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case s.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case s.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;
b.toWatch=[b];break;case s.ArrayExpression:c=!0;d=[];m(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case s.ObjectExpression:c=!0;d=[];m(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case s.ThisExpression:b.constant=!1,b.toWatch=[]}}function od(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:w}}
function pd(b){return b.type===s.Identifier||b.type===s.MemberExpression}function qd(b){if(1===b.body.length&&pd(b.body[0].expression))return{type:s.AssignmentExpression,left:b.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function rd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===s.Literal||b.body[0].expression.type===s.ArrayExpression||b.body[0].expression.type===s.ObjectExpression)}function sd(b,a){this.astBuilder=b;this.$filter=a}function td(b,
a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return x(b.valueOf)?b.valueOf():Yf.call(b)}function kf(){var b=fa(),a=fa();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var k=d,g=g[0];return a.$watch(function(a){var b=g(a);d(b,k)||(h=e(a,w,w,[b]),k=b&&dc(b));return h},b,c,f)}for(var l=[],n=[],p=0,
m=g.length;p<m;p++)l[p]=d,n[p]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!d(k,l[c])))n[c]=k,l[c]=k&&dc(k)}b&&(h=e(a,w,w,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;x(b)&&b.apply(this,arguments);A(a)&&d.$$postDigest(function(){A(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){A(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;x(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function g(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){x(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return A(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=
a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},p={csp:k,expensiveChecks:!0};return function(d,k,E){var m,u,q;switch(typeof d){case "string":q=d=d.trim();var s=E?a:b;m=s[q];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),E=E?p:n,m=new ec(E),m=(new fc(m,c,E)).parse(d),m.constant?m.$$watchDelegate=g:u?m.$$watchDelegate=m.literal?h:f:m.inputs&&(m.$$watchDelegate=e),s[q]=m);return l(m,k);case "function":return l(d,k);default:return y}}}]}function mf(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return ud(function(a){b.$evalAsync(a)},a)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(b,a){return ud(function(a){b.defer(a)},a)}]}function ud(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=w;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{x(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function h(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var g=I("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(v(a)&&v(b)&&v(c))return this;var d=new h;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,
a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(h.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(C(b)||x(b))d=b&&b.then;x(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],
this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(x(b)?b(c):c)}catch(h){a(h)}}})}});
var l=function(a,b){var c=new h;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{x(c)&&(d=c())}catch(e){return l(e,!1)}return d&&x(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new h;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!x(a))throw g("norslvr",a);if(!(this instanceof t))return new t(a);var b=new h;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new h};
p.reject=function(a){var b=new h;b.reject(a);return b.promise};p.when=n;p.resolve=n;p.all=function(a){var b=new h,c=0,d=J(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function wf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,
e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function lf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=I("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=
["$injector","$exceptionHandler","$parse","$browser",function(f,h,g,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(q.$$phase)throw c("inprog",q.$$phase);q.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=
a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function E(){}function s(){for(;w.length;)try{w.shift()()}catch(a){h(a)}e=null}function u(){null===e&&(e=l.defer(function(){q.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=
d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var h=this,k=h.$$watchers,l={fn:b,last:E,get:f,exp:e||a,eq:!!c};d=null;x(b)||(l.fn=y);k||(k=h.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=cb(k,l)&&r(h,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;
if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(C(e))if(Da(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],
g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},t=0,l++);a=0;for(b in e)ta.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,n=g(a,c),p=[],r={},q=!0,t=0;return this.$watch(n,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(Da(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h=
{},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var b,f,g,k,n,r,t=a,m,u=[],D,v;p("$digest");l.$$checkUrlChange();this===q&&null!==e&&(l.defer.cancel(e),s());d=null;do{r=!1;for(m=this;z.length;){try{v=z.shift(),v.scope.$eval(v.expression,v.locals)}catch(w){h(w)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(g=b.last)&&!(b.eq?ka(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))r=!0,d=b,b.last=b.eq?ha(f,null):f,b.fn(f,g===E?f:g,m),5>
t&&(D=4-t,u[D]||(u[D]=[]),u[D].push({msg:x(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:g}));else if(b===d){r=!1;break a}}catch(y){h(y)}if(!(k=m.$$watchersCount&&m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||z.length)&&!t--)throw q.$$phase=null,c("infdig",a,u);}while(r||z.length);for(q.$$phase=null;N.length;)try{N.shift()()}catch(A){h(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this===q&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=y;this.$on=
this.$watch=this.$watchGroup=function(){return y};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){q.$$phase||z.length||l.defer(function(){z.length&&q.$digest()});z.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){N.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{q.$$phase=null}}catch(b){h(b)}finally{try{q.$digest()}catch(c){throw h(c),
c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,g={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},
k=db([g],arguments,1),l,n;do{d=e.$$listeners[a]||c;g.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(p){h(p)}else d.splice(l,1),l--,n--;if(f)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=db([e],arguments,1),g,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||
[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,f)}catch(l){h(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var q=new n,z=q.$$asyncQueue=[],N=q.$$postDigestQueue=[],w=q.$$applyAsyncQueue=[];return q}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return A(a)?
(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Zf(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=vd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Oa(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function wd(b){var a=[];A(b)&&m(b,function(b){a.push(Zf(b))});
return a}function pf(){this.SCE_CONTEXTS=oa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=wd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?fd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var h=e(),g={};g[oa.HTML]=e(h);g[oa.CSS]=e(h);g[oa.URL]=e(h);g[oa.JS]=e(h);g[oa.RESOURCE_URL]=e(g[oa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||v(b)||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||v(e)||""===e)return e;var h=g.hasOwnProperty(c)?g[c]:null;if(h&&e instanceof
h)return e.$$unwrapTrustedValue();if(c===oa.RESOURCE_URL){var h=Aa(e.toString()),p,r,t=!1;p=0;for(r=b.length;p<r;p++)if(d(b[p],h)){t=!0;break}if(t)for(p=0,r=a.length;p<r;p++)if(d(a[p],h)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===oa.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof h?a.$$unwrapTrustedValue():a}}}]}function of(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
8>Wa)throw Ca("iequirks");var d=ja(oa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=$a);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,h=d.trustAs;m(oa,function(a,b){var c=F(b);d[gb("parse_as_"+c)]=function(b){return e(a,b)};d[gb("get_trusted_"+c)]=function(b){return f(a,b)};d[gb("trust_as_"+
c)]=function(b){return h(a,b)}});return d}]}function qf(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(F((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h,g=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=g.exec(p)){h=k[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!d||k&&n||(k=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Wa)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:h,transitions:k,animations:n,android:d}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,h){e.totalPendingRequests++;G(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var g=a.defaults&&a.defaults.transformResponse;
J(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(f,{cache:b,transformResponse:g})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,a.data);return a.data},function(a){if(!h)throw ga("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var h=[];m(a,function(a){var d=
da.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(d)&&h.push(a):-1!=d.indexOf(b)&&h.push(a)})});return h},findModels:function(a,b,c){for(var h=["ng-","data-ng-","ng\\:"],g=0;g<h.length;++g){var l=a.querySelectorAll("["+h[g]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function uf(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){x(f)||(k=l,l=f,f=y);var n=ua.call(arguments,3),p=A(k)&&!k,r=(p?d:c).defer(),t=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete h[t.$$timeoutId]}p||b.$apply()},l);t.$$timeoutId=m;h[m]=r;return t}var h={};f.cancel=function(b){return b&&b.$$timeoutId in h?(h[b.$$timeoutId].reject("canceled"),delete h[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}
function Aa(b){Wa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function fd(b){b=G(b)?Aa(b):b;return b.protocol===xd.protocol&&b.host===xd.host}function vf(){this.$get=qa(Q)}function yd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}
var c=b[0]||{},d={},e="";return function(){var b,h,g,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},g=0;g<b.length;g++)h=b[g],l=h.indexOf("="),0<l&&(k=a(h.substring(0,l)),v(d[k])&&(d[k]=a(h.substring(l+1))));return d}}function zf(){this.$get=yd}function Kc(b){function a(c,d){if(C(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",zd);a("date",Ad);
a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Bd);a("orderBy",Cd);a("uppercase",dg)}function $f(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw I("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=C(b)&&"$"in b;!0===a?a=ka:x(a)||(a=function(a,b){if(v(a))return!1;if(null===
a||null===b)return a===b;if(C(b)||C(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!C(e)?Ma(e,b.$,a,!1):Ma(e,b,a,c)}}function Ma(b,a,c,d,e){var f=gc(b),h=gc(a);if("string"===h&&"!"===a.charAt(0))return!Ma(b,a.substring(1),c,d);if(J(b))return b.some(function(b){return Ma(b,a,c,d)});switch(f){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&Ma(b[g],a,c,!0))return!0;return e?!1:Ma(b,a,c,!1)}if("object"===h){for(g in a)if(e=a[g],!x(e)&&!v(e)&&
(f="$"===g,!Ma(f?b:b[g],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===b?"null":typeof b}function zd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Dd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Bd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Dd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dd(b,
a,c,d,e){if(C(b))return"";var f=0>b;b=Math.abs(b);var h=Infinity===b;if(!h&&!isFinite(b))return"";var g=b+"",l="",k=!1,n=[];h&&(l="\u221e");if(!h&&-1!==g.indexOf("e")){var p=g.match(/([\d\.]+)e(-?)(\d+)/);p&&"-"==p[2]&&p[3]>e+1?b=0:(l=g,k=!0)}if(h||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l),l=l.replace(hc,d));else{h=(g.split(hc)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var h=(""+b).split(hc),g=h[0],h=h[1]||"",p=0,
r=a.lgSize,t=a.gSize;if(g.length>=r+t)for(p=g.length-r,k=0;k<p;k++)0===(p-k)%t&&0!==k&&(l+=c),l+=g.charAt(k);for(k=p;k<g.length;k++)0===(g.length-k)%r&&0!==k&&(l+=c),l+=g.charAt(k);for(;h.length<e;)h+="0";e&&"0"!==e&&(l+=d+h.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function aa(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<
c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=sb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function Ad(b){function a(a){var b;if(b=
a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),h=Y(b[9]+b[11]));g.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;h=Y(b[5]||0)-h;g=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var h="",g=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=
fg.test(c)?Y(c):a(c));V(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(g=db(g,k,1),e=g.pop()):(g.push(e),e=null);var n=c.getTimezoneOffset();f&&(n=wc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(g,function(a){l=hg[a];h+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return h}}function ag(){return function(b,a){v(a)&&(a=2);return eb(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(isNaN(a))return b;
V(b)&&(b=b.toString());if(!J(b)&&!G(b))return b;c=!c||isNaN(c)?0:Y(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Cd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,g=$a;if(x(a))g=a;else if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(g=b(a),g.constant))var l=g(),g=function(a){return a[l]}}return{get:g,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}return function(b,e,f){if(!Da(b))return b;J(e)||(e=[e]);0===e.length&&(e=["+"]);var h=a(e,f);h.push({get:function(){return{}},descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:h.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(qc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});
b.sort(function(a,b){for(var c=0,d=0,e=h.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],t=0;c.type===f.type?c.value!==f.value&&(t=c.value<f.value?-1:1):t=c.type<f.type?-1:1;if(c=t*h[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Na(b){x(b)&&(b={link:b});b.restrict=b.restrict||"AC";return qa(b)}function Gd(b,a,c,d,e){var f=this,h=[];f.$error={};f.$$success={};f.$pending=w;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=
!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){m(h,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(h,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ta(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});
m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});cb(h,a);a.$$parentForm=Ib};Hd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(cb(d,c),0===d.length&&delete a[b])},$animate:d});f.$setDirty=function(){d.removeClass(b,Ya);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){d.setClass(b,Ya,Jb+" ng-submitted");f.$dirty=
!1;f.$pristine=!0;f.$submitted=!1;m(h,function(a){a.$setPristine()})};f.$setUntouched=function(){m(h,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var h=F(a[0].type);if(!e.android){var g=!1;a.on("compositionstart",function(a){g=!0});a.on("compositionend",function(){g=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),
k=null);if(!g){var e=a.val();b=b&&b.type;"password"===h||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?
"":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(G(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,h,g,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return A(a)&&!ea(a)?c(a)||w:a}Id(e,f,h,g);jb(e,f,h,g,l,k);var t=g&&g.$options&&g.$options.timezone,m;g.$$parserName=b;g.$parsers.push(function(b){return g.$isEmpty(b)?null:a.test(b)?(b=c(b,m),t&&(b=Ob(b,t)),b):w});g.$formatters.push(function(a){if(a&&!ea(a))throw lb("datefmt",a);if(p(a))return(m=a)&&t&&(m=Ob(m,t,!0)),
n("date")(a,d,t);m=null;return""});if(A(h.min)||h.ngMin){var s;g.$validators.min=function(a){return!p(a)||v(s)||c(a)>=s};h.$observe("min",function(a){s=r(a);g.$validate()})}if(A(h.max)||h.ngMax){var u;g.$validators.max=function(a){return!p(a)||v(u)||c(a)<=u};h.$observe("max",function(a){u=r(a);g.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=C(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?w:b})}function Jd(b,a,c,d,e){if(A(d)){b=
b(d);if(!b.constant)throw lb("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(m(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):C(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,h,g){function l(a,b){var c=h.data("$classCounts")||fa(),
d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});h.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=l(k,1);g.$addClass(m)}else if(!ka(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(h,m);k&&k.length&&c.removeClass(h,k)}}n=ja(b)}var n;f.$watch(g[b],k,!0);g.$observe("class",function(a){k(f.$eval(g[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var h=c&1;if(h!==(d&1)){var k=
e(f.$eval(g[b]));h===a?(h=l(k,1),g.$addClass(h)):(h=l(k,-1),g.$removeClass(h))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},h=b.set,g=b.unset,l=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){v(e)?(d.$pending||(d.$pending={}),h(d.$pending,b,f)):(d.$pending&&g(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=w));bb(e)?
e?(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),g(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=w,c("",null)):(a(Md,!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?w:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);d.$$parentForm.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,F=function(b){return G(b)?b.toLowerCase():b},ta=Object.prototype.hasOwnProperty,
sb=function(b){return G(b)?b.toUpperCase():b},Wa,B,ra,ua=[].slice,Nf=[].splice,kg=[].push,va=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=I("ng"),da=Q.angular||(Q.angular={}),Rb,nb=0;Wa=X.documentMode;y.$inject=[];$a.$inject=[];var J=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return G(b)?b.trim():b},vd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!A(Fa.rules)){var b=
X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},pb=function(){if(A(pb.name_))return pb.name_;var b,a,c=Qa.length,d,e;for(a=0;a<c;++a)if(d=Qa[a],b=X.querySelector("["+d.replace(":","\\:")+"jq]")){e=
b.getAttribute(d+"jq");break}return pb.name_=e},Qa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Bc=!1,Qb,pa=1,Pa=3,fe={full:"1.4.7",major:1,minor:4,dot:7,codeName:"dark-luminescence"};R.expando="ng339";var hb=R.cache={},Ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,lg={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=I("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ma={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option;ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead;ma.th=ma.td;var Ra=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(Q).on("load",a))},
toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Bb={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[F(b)]=b});var Sc={};m("input select option textarea button form details".split(" "),function(b){Sc[b]=!0});var $c={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
m({data:Vb,removeData:vb,hasData:function(b){for(var a in hb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});m({data:Vb,inheritedData:Ab,scope:function(b){return B.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=gb(a);if(A(c))b.style[a]=c;else return b.style[a]},
attr:function(b,a,c){var d=b.nodeType;if(d!==Pa&&2!==d&&8!==d)if(d=F(a),Bb[d])if(A(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:w;else if(A(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?w:b},prop:function(b,a,c){if(A(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===pa||d===Pa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),
val:function(b,a){if(v(a)){if(b.multiple&&"select"===wa(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;ub(b,!0);b.innerHTML=a},empty:Qc},function(b,a){R.prototype[a]=function(a,d){var e,f,h=this.length;if(b!==Qc&&v(2==b.length&&b!==xb&&b!==Pc?a:d)){if(C(a)){for(e=0;e<h;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;h=v(e)?Math.min(h,1):h;
for(f=0;f<h;f++){var g=b(this[f],a,d);e=e?e+g:g}return e}for(e=0;e<h;e++)b(this[e],a,d);return this}});m({removeData:vb,on:function a(c,d,e,f){if(A(f))throw Tb("onargs");if(Lc(c)){var h=wb(c,!0);f=h.events;var g=h.handle;g||(g=h.handle=Hf(c,f));for(var h=0<=d.indexOf(" ")?d.split(" "):[d],l=h.length;l--;){d=h[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||g(a,d)}):"$destroy"!==d&&c.addEventListener(d,g,!1),
k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ub(a);m(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===pa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===pa||11===d){c=new R(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===pa){var d=a.firstChild;m(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,h=c.length;f<h;f++){var g=c[f];e.insertBefore(g,d.nextSibling);d=g}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=
d;v(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,h=c.type||c,g=wb(a);if(g=(g=g&&g.events)&&g[h])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:y,type:h,target:a},c.type&&(e=P(e,c)),c=ja(g),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var h,g=0,l=this.length;g<l;g++)v(h)?(h=a(this[g],c,e,f),A(h)&&(h=B(h))):Nc(h,a(this[g],c,e,f));return A(h)?h:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ua.prototype={put:function(a,
c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var yf=[function(){this.$get=[function(){return Ua}]}],Uc=/^[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Tc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=I("$injector");fb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw G(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Tc,
"");c=c.match(Uc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else J(a)?(c=a.length-1,Sa(a[c],"fn"),e=a.slice(0,c)):Sa(a,"fn",!0);return e};var Nd=I("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=y;d.chain=y;d.prototype={end:y,cancel:y,resume:y,pause:y,complete:y,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Te=function(){var a=new Ua,c=[];this.$get=["$$AnimateRunner","$rootScope",
function(d,e){function f(a,c,d){var e=!1;c&&(c=G(c)?c.split(" "):J(c)?c:[],m(c,function(c){c&&(e=!0,a[c]=d)}));return e}function h(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",h="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:h+=(h.length?" ":"")+c)});m(c,function(a){f&&zb(a,f);h&&yb(a,h)});a.remove(c)}});c.length=0}return{enabled:y,on:y,off:y,pin:y,push:function(g,l,k,n){n&&n();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(l=k.addClass,
n=k.removeClass,k=a.get(g)||{},l=f(k,l,!0),n=f(k,n,!1),l||n)a.put(g,k),c.push(g),1===c.length&&e.$$postDigest(h);return new d}}}]},Re=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,h,g,l){h=h&&B(h);g=g&&B(g);h=h||g.parent();c(f,h,g);return a.push(f,"enter",Ia(l))},move:function(f,h,g,l){h=h&&B(h);g=g&&B(g);
h=h||g.parent();c(f,h,g);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,g){g=Ia(g);g.addClass=ib(g.addclass,e);return a.push(c,"addClass",g)},removeClass:function(c,e,g){g=Ia(g);g.removeClass=ib(g.removeClass,e);return a.push(c,"removeClass",g)},setClass:function(c,e,g,l){l=Ia(l);l.addClass=ib(l.addClass,e);l.removeClass=ib(l.removeClass,g);return a.push(c,"setClass",l)},animate:function(c,e,g,l,k){k=Ia(k);k.from=k.from?
P(k.from,e):e;k.to=k.to?P(k.to,g):g;k.tempClasses=ib(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)}};return function(c,f){function h(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);g||l.done();g=!0});return l}f.cleanupStyles&&(f.from=f.to=null);f.from&&(c.css(f.from),f.from=null);var g,l=new d;return{start:h,end:h}}}]},ga=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Of=I("$controller"),
Vc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(c){c?!c.nodeType&&c instanceof B&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},ad="application/json",$b={"Content-Type":ad+";charset=utf-8"},Qf=/^\[|^\{(?!\{)/,Rf={"[":/]$/,"{":/}$/},Pf=/^\)\]\}',?\n/,og=I("$http"),ed=function(a){return function(){throw og("legacy",a);}},La=da.$interpolateMinErr=I("$interpolate");La.throwNoconcat=function(a){throw La("noconcat",a);};La.interr=function(a,c){return La("interr",
a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Db=I("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:jd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||V(a))a=a.toString(),this.$$search=yc(a);else if(C(a))a=ha(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:jd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([id,cc,bc],function(a){a.prototype=Object.create(qg);a.prototype.state=
function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");this.$$state=v(c)?null:c;return this}});var Z=I("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Lb=fa();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=A(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Z("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=
this.text.charAt(this.index),e=e+h;if(f)"u"===h?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[h]||h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var s=function(a,c){this.lexer=a;this.options=c};s.Program="Program";s.ExpressionStatement=
"ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";
s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:c.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=ha(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},
this.consume(")")):"["===c.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());
while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
c={type:s.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,c){throw Z("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw Z("ueoe",this.text);var c=this.expect(a);
c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw Z("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var h=a.text;if(h===c||h===d||h===e||h===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},
"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:w},"this":{type:s.ThisExpression}}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",h;this.stage="assign";if(h=qd(e))this.state.computing="assign",f=this.nextId(),this.recurse(h,f),this.return_(f),f="fn.assign="+this.generateFunction("assign",
"s,v,l");h=od(e.body);d.stage="inputs";m(h,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",f))(this.$filter,Xa,Ba,ld,kd,md,Xf,nd,a);this.state=this.stage=w;f.literal=rd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,h){var g,l,k=this,n,p;e=e||y;if(!h&&A(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case s.Program:m(a.body,
function(c,d){k.recurse(c.expression,w,w,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case s.Literal:p=this.escape(a.value);this.assign(c,p);e(p);break;case s.UnaryExpression:this.recurse(a.argument,w,w,function(a){l=a});p=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,p);e(p);break;case s.BinaryExpression:this.recurse(a.left,w,w,function(a){g=a});this.recurse(a.right,w,w,function(a){l=a});p="+"===a.operator?this.plus(g,l):"-"===a.operator?this.ifDefined(g,
0)+a.operator+this.ifDefined(l,0):"("+g+")"+a.operator+"("+l+")";this.assign(c,p);e(p);break;case s.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case s.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case s.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",
a.name)+"?l:s"),d.computed=!1,d.name=a.name);Xa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||
this.nextId();c=c||this.nextId();k.recurse(a.object,g,w,function(){k.if_(k.notNull(g),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.getStringValue(l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(g,l)),k.lazyAssign(k.computedMember(g,l),"{}")),p=k.ensureSafeObject(k.computedMember(g,l)),k.assign(c,p),d&&(d.computed=!0,d.name=l);else{Xa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),
"{}"));p=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))p=k.ensureSafeObject(p);k.assign(c,p);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case s.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),p=l+"("+n.join(",")+")",k.assign(c,p),e(c)):(l=k.nextId(),g={},n=[],k.recurse(a.callee,l,g,function(){k.if_(k.notNull(l),
function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),p=k.member(g.context,g.name,g.computed)+"("+n.join(",")+")"):p=l+"("+n.join(",")+")";p=k.ensureSafeObject(p);k.assign(c,p)},function(){k.assign(c,"undefined")});e(c)}));break;case s.AssignmentExpression:l=this.nextId();g={};if(!pd(a.left))throw Z("lval");this.recurse(a.left,w,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);p=k.member(g.context,g.name,g.computed)+a.operator+l;k.assign(c,p);e(c||p)})},1);break;case s.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),w,function(a){n.push(a)})});p="["+n.join(",")+"]";this.assign(c,p);e(p);break;case s.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),w,function(c){n.push(k.escape(a.key.type===
s.Identifier?a.key.name:""+a.key.value)+":"+c)})});p="{"+n.join(",")+"}";this.assign(c,p);e(p);break;case s.ThisExpression:this.assign(c,"s");e("s");break;case s.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,
c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+
a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,c,d,e,f,h){var g=this;return function(){g.recurse(a,c,d,e,f,h)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Z("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
td.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,h;if(f=qd(e))h=this.recurse(f);f=od(e.body);var g;f&&(g=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;g.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};h&&(f.assign=function(a,c,d){return h(a,d,c)});g&&(f.inputs=
g);f.literal=rd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,h=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,c);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case s.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case s.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case s.Identifier:return Xa(a.name,h.expression),h.identifier(a.name,h.expensiveChecks||Fb(a.name),c,d,h.expression);case s.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Xa(a.property.name,h.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,h.expression):this.nonComputedMember(e,f,
h.expensiveChecks,c,d,h.expression);case s.CallExpression:return g=[],m(a.arguments,function(a){g.push(h.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,h){for(var r=[],m=0;m<g.length;++m)r.push(g[m](a,d,e,h));a=f.apply(w,r,h);return c?{context:w,name:w,value:a}:a}:function(a,d,e,p){var r=f(a,d,e,p),m;if(null!=r.value){Ba(r.context,h.expression);ld(r.value,h.expression);m=[];for(var s=0;s<g.length;++s)m.push(Ba(g[s](a,d,e,p),
h.expression));m=Ba(r.value.apply(r.context,m),h.expression)}return c?{value:m}:m};case s.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,g,p){var r=e(a,d,g,p);a=f(a,d,g,p);Ba(r.value,h.expression);md(r.context);r.context[r.name]=a;return c?{value:a}:a};case s.ArrayExpression:return g=[],m(a.elements,function(a){g.push(h.recurse(a))}),function(a,d,e,f){for(var h=[],m=0;m<g.length;++m)h.push(g[m](a,d,e,f));return c?{value:h}:h};case s.ObjectExpression:return g=
[],m(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:h.recurse(a.value)})}),function(a,d,e,f){for(var h={},m=0;m<g.length;++m)h[g[m].key]=g[m].value(a,d,e,f);return c?{value:h}:h};case s.ThisExpression:return function(a){return c?{value:a}:a};case s.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,h){d=a(d,e,f,h);d=A(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,
f,h){d=a(d,e,f,h);d=A(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,h){d=!a(d,e,f,h);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=nd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,h,g){var l=a(e,f,h,g);e=c(e,f,h,g);l=(A(l)?l:0)-(A(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)*c(e,f,h,g);return d?{value:e}:e}},"binary/":function(a,c,
d){return function(e,f,h,g){e=a(e,f,h,g)/c(e,f,h,g);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)%c(e,f,h,g);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)===c(e,f,h,g);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)!==c(e,f,h,g);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)==c(e,f,h,g);return d?{value:e}:e}},"binary!=":function(a,c,
d){return function(e,f,h,g){e=a(e,f,h,g)!=c(e,f,h,g);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<c(e,f,h,g);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>c(e,f,h,g);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)<=c(e,f,h,g);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)>=c(e,f,h,g);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,
f,h,g){e=a(e,f,h,g)&&c(e,f,h,g);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,h,g){e=a(e,f,h,g)||c(e,f,h,g);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,h,g,l){f=a(f,h,g,l)?c(f,h,g,l):d(f,h,g,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:w,name:w,value:a}:a}},identifier:function(a,c,d,e,f){return function(h,g,l,k){h=g&&a in g?g:h;e&&1!==e&&h&&!h[a]&&(h[a]={});g=h?h[a]:w;c&&Ba(g,f);return d?{context:h,name:a,value:g}:
g}},computedMember:function(a,c,d,e,f){return function(h,g,l,k){var n=a(h,g,l,k),p,m;null!=n&&(p=c(h,g,l,k),p=kd(p),Xa(p,f),e&&1!==e&&n&&!n[p]&&(n[p]={}),m=n[p],Ba(m,f));return d?{context:n,name:p,value:m}:m}},nonComputedMember:function(a,c,d,e,f,h){return function(g,l,k,n){g=a(g,l,k,n);f&&1!==f&&g&&!g[c]&&(g[c]={});l=null!=g?g[c]:w;(d||Fb(c))&&Ba(l,h);return e?{context:g,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,h){return h?h[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=
a;this.$filter=c;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new td(this.ast,c):new sd(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};fa();fa();var Yf=Object.prototype.valueOf,Ca=I("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ga=I("$compile"),$=X.createElement("a"),xd=Aa(Q.location.href);yd.$inject=["$document"];Kc.$inject=["$provide"];zd.$inject=["$locale"];Bd.$inject=
["$locale"];var hc=".",hg={yyyy:aa("FullYear",4),yy:aa("FullYear",2,0,!0),y:aa("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=
a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;Ad.$inject=["$locale"];var cg=qa(F),dg=qa(sb);Cd.$inject=["$parse"];var he=qa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===
va.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),tb={};m(Bb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=ya("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});tb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m($c,function(a,c){tb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=ya("ng-"+a);tb[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===va.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(c){c?(f.$set(g,c),Wa&&h&&e.prop(h,f[g])):"href"===a&&f.$set(g,null)})}}}});var Ib={$addControl:y,$$renameControl:function(a,c){a.$name=c},$removeControl:y,$setValidity:y,
$setDirty:y,$setPristine:y,$setSubmitted:y};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||y}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Gd,compile:function(d,h){d.addClass(Ya).addClass(mb);var g=h.name?"name":a&&h.ngForm?"ngForm":!1;return{pre:function(a,d,f,h){var m=h[0];if(!("action"in f)){var t=function(c){a.$apply(function(){m.$commitViewValue();
m.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",t,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",t,!1)},0,!1)})}(h[1]||m.$$parentForm).$addControl(m);var s=g?e(m.$name):y;g&&(s(a,m),f.$observe(g,function(c){m.$name!==c&&(s(a,w),m.$$parentForm.$$renameControl(m,c),s=e(m.$name),s(a,m))}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);s(a,w);P(m,Ib)})}}}}}]},ie=Od(),ve=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e)},date:kb("date",
Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ea(a))return a;if(G(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],h=d=0,g=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),h=c.getMinutes(),g=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,h,g,l)}}return NaN},"yyyy-Www"),
month:kb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){Id(a,c,d,e);jb(a,c,d,e,f,h);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):w});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw lb("numfmt",a);a=a.toString()}return a});if(A(d.min)||d.ngMin){var g;e.$validators.min=function(a){return e.$isEmpty(a)||v(g)||a>=g};d.$observe("min",function(a){A(a)&&!V(a)&&(a=parseFloat(a,10));g=V(a)&&!isNaN(a)?a:w;e.$validate()})}if(A(d.max)||
d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){A(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:w;e.$validate()})}},url:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,h){jb(a,c,d,e,f,h);jc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,
d,e){v(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,h,g,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,
k)});e.$parsers.push(function(a){return a?k:n})},hidden:y,button:y,submit:y,reset:y,file:y},Ec=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,h,g,l){l[0]&&(Td[F(g.type)]||Td.text)(f,h,g,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=v(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,h){d=a(f.attr(h.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];h.$observe("ngBindTemplate",function(a){f.textContent=v(a)?"":a})}}}}],oe=["$sce","$parse",
"$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var h=c(f.ngBindHtml),g=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(g,function(){e.html(a.getTrustedHtml(h(c))||"")})}}}}],Me=qa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=kc("",!0),se=kc("Odd",0),re=kc("Even",1),te=Na({compile:function(a,c){c.$set("ngCloak",
w);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Jc={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,h){var g=d(h[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){g(c,{$event:d})};
wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,l,k;c.$watch(e.ngIf,function(c){c?l||h(function(c,f){l=f;c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),g&&(k=rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll",
"$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(e,f){var h=f.ngInclude||f.src,g=f.onload||"",l=f.autoscroll;return function(e,f,m,r,t){var s=0,v,u,q,z=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);q&&(d.leave(q).then(function(){u=null}),u=q,q=null)};e.$watch(h,function(h){var m=function(){!A(l)||l&&!e.$eval(l)||c()},p=++s;h?(a(h,!0).then(function(a){if(p===s){var c=e.$new();r.template=a;a=t(c,function(a){z();
d.enter(a,null,f).then(m)});v=c;q=a;v.$emit("$includeContentLoaded",h);e.$eval(g)}},function(){p===s&&(z(),e.$emit("$includeContentError",h))}),e.$emit("$includeContentRequested",h)):(z(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Na({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,g=h?T(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&m(a.split(g),function(a){a&&c.push(h?T(a):a)});return c}});e.$formatters.push(function(a){return J(a)?a.join(f):w});e.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",Kd="ng-invalid",Ya="ng-pristine",Jb="ng-dirty",Md=
"ng-pending",lb=I("ngModel"),xg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,h,g,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=w;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
w;this.$name=n(d.name||"",!1)(a);this.$$parentForm=Ib;var p=f(d.ngModel),r=p.assign,t=p,s=r,K=null,u,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);x(d)&&(d=c(a));return d};s=function(a,c){x(p(a))?g(a,{$$$p:q.$modelValue}):r(a,q.$modelValue)}}else if(!p.assign)throw lb("nonassign",d.ngModel,xa(e));};this.$render=y;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var z=0;Hd({ctrl:this,$element:e,
set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},$animate:h});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;h.removeClass(e,Jb);h.addClass(e,Ya)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;h.removeClass(e,Ya);h.addClass(e,Jb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;h.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;h.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=
function(){g.cancel(K);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!V(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,c=q.$valid,d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(f){e||c===f||(q.$modelValue=f?a:w,q.$modelValue!==d&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(q.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?
!0:(m(q.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(q.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!x(k.then))throw lb("$asyncValidators",k);g(h,w);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},y):h(!0)}function g(a,c){l===z&&q.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=q.$$parserName||"parse";if(v(u))g(a,null);else return u||(m(q.$validators,function(a,c){g(c,null)}),m(q.$asyncValidators,
function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(K);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=q.$$lastCommittedViewValue;if(u=v(c)?w:!0)for(var d=0;d<q.$parsers.length;d++)if(c=q.$parsers[d](c),v(c)){u=!1;break}V(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=t(a));
var e=q.$modelValue,f=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=c;f&&(q.$modelValue=c,q.$modelValue!==e&&q.$$writeModelToScope());q.$$runValidators(c,q.$$lastCommittedViewValue,function(a){f||(q.$modelValue=a?c:w,q.$modelValue!==e&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);m(q.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(c)};
this.$$debounceViewValueCommit=function(c){var d=0,e=q.$options;e&&A(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));g.cancel(K);d?K=g(function(){q.$commitViewValue()},d):l.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==q.$modelValue&&(q.$modelValue===q.$modelValue||c===c)){q.$modelValue=q.$$rawModelValue=c;u=w;for(var d=q.$formatters,e=d.length,f=c;e--;)f=d[e](f);q.$viewValue!==f&&(q.$viewValue=
q.$$lastCommittedViewValue=f,q.$render(),q.$$runValidators(c,f,y))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Ya).addClass("ng-untouched").addClass(mb);return{pre:function(a,c,f,h){var g=h[0];c=h[1]||g.$$parentForm;g.$$setOptions(h[2]&&h[2].$options);c.$addControl(g);f.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},
post:function(c,e,f,h){var g=h[0];if(g.$options&&g.$options.updateOn)e.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){g.$touched||(a.$$phase?c.$evalAsync(g.$setTouched):c.$apply(g.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=ha(a.$eval(c.ngModelOptions));A(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(yg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Na({terminal:!0,priority:1E3}),zg=I("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=
d;this.group=e;this.disabled=g}function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,xa(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var v=m[9];d=c(m[2]?m[1]:r);var w=a&&c(a)||d,u=v&&c(v),q=v?function(a,c){return u(e,c)}:function(a){return Ga(a)},z=function(a,c){return q(a,x(a,c))},y=c(m[2]||m[1]),A=c(m[3]||""),O=c(m[4]||""),H=c(m[8]),B={},x=s?function(a,c){B[s]=c;B[r]=a;return B}:
function(a){B[r]=a;return B};return{trackBy:v,getTrackByValue:z,getWatchables:c(H,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=x(a[h],h),h=q(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=O(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=H(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var p=d===g?m:g[m],r=x(d[p],p),s=w(e,r),p=q(s,r),t=y(e,r),u=A(e,r),r=O(e,r),s=new f(p,s,t,u,r);a.push(s);c[p]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[z(a)]},
getViewValueFromOption:function(a){return v?da.copy(a.viewValue):a.viewValue}}}}}var e=X.createElement("option"),f=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,g,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.label!==c.label&&(c.label=a.label,c.textContent=a.label);a.value!==c.value&&(c.value=a.selectValue)}function p(a,c,d,e){c&&F(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=
a.nextSibling,Wb(a),a=c}function s(a){var c=q&&q[0],d=H&&H[0];if(c||d)for(;a&&(a===c||a===d||c&&8===c.nodeType);)a=a.nextSibling;return a}function v(){var a=x&&u.readValue();x=C.getOptions();var c={},d=g[0].firstChild;O&&g.prepend(q);d=s(d);x.items.forEach(function(a){var h,k;a.group?(h=c[a.group],h||(h=p(g[0],d,"optgroup",f),d=h.nextSibling,h.label=a.group,h=c[a.group]={groupElement:h,currentOptionElement:h.firstChild}),k=p(h.groupElement,h.currentOptionElement,"option",e),n(a,k),h.currentOptionElement=
k.nextSibling):(k=p(g[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);w.$render();if(!w.$isEmpty(a)){var h=u.readValue();(C.trackBy?ka(a,h):a===h)||(w.$setViewValue(h),w.$render())}}var w=k[1];if(w){var u=k[0];k=l.multiple;for(var q,z=0,y=g.children(),A=y.length;z<A;z++)if(""===y[z].value){q=y.eq(z);break}var O=!!q,H=B(e.cloneNode(!1));H.val("?");var x,C=d(l.ngOptions,g,c);k?(w.$isEmpty=function(a){return!a||0===a.length},u.writeValue=
function(a){x.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=x.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],c=[];m(a,function(a){(a=x.selectValueMap[a])&&!a.disabled&&c.push(x.getViewValueFromOption(a))});return c},C.trackBy&&c.$watchCollection(function(){if(J(w.$viewValue))return w.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){w.$render()})):(u.writeValue=function(a){var c=x.getOptionFromViewValue(a);
c&&!c.disabled?g[0].value!==c.selectValue&&(H.remove(),O||q.remove(),g[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||O?(H.remove(),O||g.prepend(q),g.val(""),q.prop("selected",!0),q.attr("selected",!0)):(O||q.remove(),g.prepend(H),g.val("?"),H.prop("selected",!0),H.attr("selected",!0))},u.readValue=function(){var a=x.selectValueMap[g.val()];return a&&!a.disabled?(O||q.remove(),H.remove(),x.getViewValueFromOption(a)):null},C.trackBy&&c.$watch(function(){return C.getTrackByValue(w.$viewValue)},
function(){w.$render()}));O?(q.remove(),a(q)(c),q.removeClass("ng-scope")):q=B(e.cloneNode(!1));v();c.$watchCollection(C.getWatchables,v)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(h,g,l){function k(a){g.text(a||"")}var n=l.count,p=l.$attr.when&&g.attr(l.$attr.when),r=l.offset||0,s=h.$eval(p)||{},w={},A=c.startSymbol(),u=c.endSymbol(),q=A+n+"-"+r+u,z=da.noop,x;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+F(d[2]),s[d]=g.attr(l.$attr[c]))});
m(s,function(a,d){w[d]=c(a.replace(e,q))});h.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===x||f&&V(x)&&isNaN(x)||(z(),f=w[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+p),z=y,k()):z=h.$watch(f,k),x=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=I("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,h){var g=h.ngRepeat,l=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",g);var n=k[1],p=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var v=k[3]||k[1],y=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var u,q,z,A,x={$id:Ga};s?u=a(s):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,h,k,n){u&&(q=function(c,d,e){y&&(x[y]=c);x[v]=d;x.$index=e;return u(a,x)});var s=fa();a.$watchCollection(p,function(h){var k,p,t=f[0],u,x=fa(),C,G,J,M,I,F,L;r&&(a[r]=h);if(Da(h))I=h,p=q||z;else for(L in p=q||A,I=[],h)ta.call(h,L)&&"$"!==L.charAt(0)&&I.push(L);C=I.length;L=Array(C);for(k=0;k<C;k++)if(G=h===I?k:I[k],J=h[G],M=p(G,J,k),s[M])F=s[M],delete s[M],x[M]=F,L[k]=F;else{if(x[M])throw m(L,
function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",g,M,J);L[k]={id:M,scope:w,clone:w};x[M]=!0}for(u in s){F=s[u];M=rb(F.clone);c.leave(M);if(M[0].parentNode)for(k=0,p=M.length;k<p;k++)M[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<C;k++)if(G=h===I?k:I[k],J=h[G],F=L[k],F.scope){u=t;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);F.clone[0]!=u&&c.move(rb(F.clone),null,B(t));t=F.clone[F.clone.length-1];e(F.scope,k,v,J,y,G,C)}else n(function(a,d){F.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,B(t));t=f;F.clone=a;x[F.id]=F;e(F.scope,k,v,J,y,G,C)});s=x})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Na(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h=[],g=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=rb(g[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}g.length=0;k.length=0;(h=f.cases["!"+
c]||f.cases["?"])&&m(h,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Na({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:y,$render:y},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ua;e.ngModelCtrl=Bg;e.unknownOption=B(X.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=y});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ta(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=w)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var h=e[0];h.ngModelCtrl=f;f.$render=function(){h.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(h.readValue())})});
if(d.multiple){h.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};h.writeValue=function(a){var d=new Ua(a);m(c.find("option"),function(a){a.selected=A(d.get(a.value))})};var g,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(c,d){if(A(d.value))var e=a(d.value,
!0);else{var f=a(c.text(),!0);f||d.$set("value",c.text())}return function(a,c,d){function k(a){p.addOption(a,c);p.ngModelCtrl.$render();c[0].hasAttribute("selected")&&(c[0].selected=!0)}var m=c.parent(),p=m.data("$selectController")||m.parent().data("$selectController");if(p&&p.ngModelCtrl){if(e){var r;d.$observe("value",function(a){A(r)&&p.removeOption(r);r=a;k(a)})}else f?a.$watch(f,function(a,c){d.$set("value",a);c!==a&&p.removeOption(c);k(a)}):k(d.value);c.on("$destroy",function(){p.removeOption(d.value);
p.ngModelCtrl.$render()})}}}}}],le=qa({restrict:"E",terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,h=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",
h,a,xa(c));f=a||w;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||v(f)||f.test(c)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Y(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Y(a)||0;e.$validate()});
e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(da),da.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=a|0,h=e;w===h&&(h=Math.min(c(a),3));Math.pow(10,h);return 1==f&&0==h?"one":"other"}})}]),B(X).ready(function(){Zd(X,zc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
 /*!
* EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/


//##############################################################################
// extend.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * @class Utility Methods
 */

/**
 * Sets up the prototype chain and constructor property for a new class.
 *
 * This should be called right after creating the class constructor.
 *
 * 	function MySubClass() {}
 * 	createjs.extend(MySubClass, MySuperClass);
 * 	MySubClass.prototype.doSomething = function() { }
 *
 * 	var foo = new MySubClass();
 * 	console.log(foo instanceof MySuperClass); // true
 * 	console.log(foo.prototype.constructor === MySubClass); // true
 *
 * @method extend
 * @param {Function} subclass The subclass.
 * @param {Function} superclass The superclass to extend.
 * @return {Function} Returns the subclass's new prototype.
 */
createjs.extend = function(subclass, superclass) {
	"use strict";

	function o() { this.constructor = subclass; }
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o());
};

//##############################################################################
// promote.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * @class Utility Methods
 */

/**
 * Promotes any methods on the super class that were overridden, by creating an alias in the format `prefix_methodName`.
 * It is recommended to use the super class's name as the prefix.
 * An alias to the super class's constructor is always added in the format `prefix_constructor`.
 * This allows the subclass to call super class methods without using `function.call`, providing better performance.
 *
 * For example, if `MySubClass` extends `MySuperClass`, and both define a `draw` method, then calling `promote(MySubClass, "MySuperClass")`
 * would add a `MySuperClass_constructor` method to MySubClass and promote the `draw` method on `MySuperClass` to the
 * prototype of `MySubClass` as `MySuperClass_draw`.
 *
 * This should be called after the class's prototype is fully defined.
 *
 * 	function ClassA(name) {
 * 		this.name = name;
 * 	}
 * 	ClassA.prototype.greet = function() {
 * 		return "Hello "+this.name;
 * 	}
 *
 * 	function ClassB(name, punctuation) {
 * 		this.ClassA_constructor(name);
 * 		this.punctuation = punctuation;
 * 	}
 * 	createjs.extend(ClassB, ClassA);
 * 	ClassB.prototype.greet = function() {
 * 		return this.ClassA_greet()+this.punctuation;
 * 	}
 * 	createjs.promote(ClassB, "ClassA");
 *
 * 	var foo = new ClassB("World", "!?!");
 * 	console.log(foo.greet()); // Hello World!?!
 *
 * @method promote
 * @param {Function} subclass The class to promote super class methods on.
 * @param {String} prefix The prefix to add to the promoted method names. Usually the name of the superclass.
 * @return {Function} Returns the subclass.
 */
createjs.promote = function(subclass, prefix) {
	"use strict";

	var subP = subclass.prototype, supP = (Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;
	if (supP) {
		subP[(prefix+="_") + "constructor"] = supP.constructor; // constructor is not always innumerable
		for (var n in supP) {
			if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) { subP[prefix + n] = supP[n]; }
		}
	}
	return subclass;
};

//##############################################################################
// indexOf.js
//##############################################################################

this.createjs = this.createjs||{};

/**
 * @class Utility Methods
 */

/**
 * Finds the first occurrence of a specified value searchElement in the passed in array, and returns the index of
 * that value.  Returns -1 if value is not found.
 *
 *      var i = createjs.indexOf(myArray, myElementToFind);
 *
 * @method indexOf
 * @param {Array} array Array to search for searchElement
 * @param searchElement Element to find in array.
 * @return {Number} The first index of searchElement in array.
 */
createjs.indexOf = function (array, searchElement){
	"use strict";

	for (var i = 0,l=array.length; i < l; i++) {
		if (searchElement === array[i]) {
			return i;
		}
	}
	return -1;
};

//##############################################################################
// Event.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";

// constructor:
	/**
	 * Contains properties and methods shared by all events for use with
	 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
	 * 
	 * Note that Event objects are often reused, so you should never
	 * rely on an event object's state outside of the call stack it was received in.
	 * @class Event
	 * @param {String} type The event type.
	 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
	 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
	 * @constructor
	 **/
	function Event(type, bubbles, cancelable) {
		
	
	// public properties:
		/**
		 * The type of event.
		 * @property type
		 * @type String
		 **/
		this.type = type;
	
		/**
		 * The object that generated an event.
		 * @property target
		 * @type Object
		 * @default null
		 * @readonly
		*/
		this.target = null;
	
		/**
		 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
		 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
		 * is generated from childObj, then a listener on parentObj would receive the event with
		 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
		 * @property currentTarget
		 * @type Object
		 * @default null
		 * @readonly
		*/
		this.currentTarget = null;
	
		/**
		 * For bubbling events, this indicates the current event phase:<OL>
		 * 	<LI> capture phase: starting from the top parent to the target</LI>
		 * 	<LI> at target phase: currently being dispatched from the target</LI>
		 * 	<LI> bubbling phase: from the target to the top parent</LI>
		 * </OL>
		 * @property eventPhase
		 * @type Number
		 * @default 0
		 * @readonly
		*/
		this.eventPhase = 0;
	
		/**
		 * Indicates whether the event will bubble through the display list.
		 * @property bubbles
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.bubbles = !!bubbles;
	
		/**
		 * Indicates whether the default behaviour of this event can be cancelled via
		 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
		 * @property cancelable
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.cancelable = !!cancelable;
	
		/**
		 * The epoch time at which this event was created.
		 * @property timeStamp
		 * @type Number
		 * @default 0
		 * @readonly
		*/
		this.timeStamp = (new Date()).getTime();
	
		/**
		 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
		 * on this event.
		 * @property defaultPrevented
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.defaultPrevented = false;
	
		/**
		 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
		 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
		 * @property propagationStopped
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.propagationStopped = false;
	
		/**
		 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
		 * on this event.
		 * @property immediatePropagationStopped
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.immediatePropagationStopped = false;
		
		/**
		 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
		 * @property removed
		 * @type Boolean
		 * @default false
		 * @readonly
		*/
		this.removed = false;
	}
	var p = Event.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.

// public methods:
	/**
	 * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true if the event is cancelable.
	 * Mirrors the DOM level 2 event standard. In general, cancelable events that have `preventDefault()` called will
	 * cancel the default behaviour associated with the event.
	 * @method preventDefault
	 **/
	p.preventDefault = function() {
		this.defaultPrevented = this.cancelable&&true;
	};

	/**
	 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
	 * Mirrors the DOM event standard.
	 * @method stopPropagation
	 **/
	p.stopPropagation = function() {
		this.propagationStopped = true;
	};

	/**
	 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
	 * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
	 * Mirrors the DOM event standard.
	 * @method stopImmediatePropagation
	 **/
	p.stopImmediatePropagation = function() {
		this.immediatePropagationStopped = this.propagationStopped = true;
	};
	
	/**
	 * Causes the active listener to be removed via removeEventListener();
	 * 
	 * 		myBtn.addEventListener("click", function(evt) {
	 * 			// do stuff...
	 * 			evt.remove(); // removes this listener.
	 * 		});
	 * 
	 * @method remove
	 **/
	p.remove = function() {
		this.removed = true;
	};
	
	/**
	 * Returns a clone of the Event instance.
	 * @method clone
	 * @return {Event} a clone of the Event instance.
	 **/
	p.clone = function() {
		return new Event(this.type, this.bubbles, this.cancelable);
	};
	
	/**
	 * Provides a chainable shortcut method for setting a number of properties on the instance.
	 *
	 * @method set
	 * @param {Object} props A generic object containing properties to copy to the instance.
	 * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
	 * @chainable
	*/
	p.set = function(props) {
		for (var n in props) { this[n] = props[n]; }
		return this;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Event (type="+this.type+")]";
	};

	createjs.Event = Event;
}());

//##############################################################################
// EventDispatcher.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
	 *
	 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
	 * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
	 * 
	 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
	 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
	 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
	 * 
	 * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
	 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The 
	 * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
	 * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
	 * 
	 * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
	 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also 
	 * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
	 *
	 * <h4>Example</h4>
	 * Add EventDispatcher capabilities to the "MyClass" class.
	 *
	 *      EventDispatcher.initialize(MyClass.prototype);
	 *
	 * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
	 *
	 *      instance.addEventListener("eventName", handlerMethod);
	 *      function handlerMethod(event) {
	 *          console.log(event.target + " Was Clicked");
	 *      }
	 *
	 * <b>Maintaining proper scope</b><br />
	 * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
	 * method to subscribe to events simplifies this.
	 *
	 *      instance.addEventListener("click", function(event) {
	 *          console.log(instance == this); // false, scope is ambiguous.
	 *      });
	 *      
	 *      instance.on("click", function(event) {
	 *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
	 *      });
	 * 
	 * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage scope.
	 *      
	 *
	 * @class EventDispatcher
	 * @constructor
	 **/
	function EventDispatcher() {
	
	
	// private properties:
		/**
		 * @protected
		 * @property _listeners
		 * @type Object
		 **/
		this._listeners = null;
		
		/**
		 * @protected
		 * @property _captureListeners
		 * @type Object
		 **/
		this._captureListeners = null;
	}
	var p = EventDispatcher.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// static public methods:
	/**
	 * Static initializer to mix EventDispatcher methods into a target object or prototype.
	 * 
	 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
	 * 		EventDispatcher.initialize(myObject); // add to a specific instance
	 * 
	 * @method initialize
	 * @static
	 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
	 * prototype.
	 **/
	EventDispatcher.initialize = function(target) {
		target.addEventListener = p.addEventListener;
		target.on = p.on;
		target.removeEventListener = target.off =  p.removeEventListener;
		target.removeAllEventListeners = p.removeAllEventListeners;
		target.hasEventListener = p.hasEventListener;
		target.dispatchEvent = p.dispatchEvent;
		target._dispatchEvent = p._dispatchEvent;
		target.willTrigger = p.willTrigger;
	};
	

// public methods:
	/**
	 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
	 * multiple callbacks getting fired.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.addEventListener("click", handleClick);
	 *      function handleClick(event) {
	 *         // Click happened.
	 *      }
	 *
	 * @method addEventListener
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	 * the event is dispatched.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 * @return {Function | Object} Returns the listener for chaining or assignment.
	 **/
	p.addEventListener = function(type, listener, useCapture) {
		var listeners;
		if (useCapture) {
			listeners = this._captureListeners = this._captureListeners||{};
		} else {
			listeners = this._listeners = this._listeners||{};
		}
		var arr = listeners[type];
		if (arr) { this.removeEventListener(type, listener, useCapture); }
		arr = listeners[type]; // remove may have deleted the array
		if (!arr) { listeners[type] = [listener];  }
		else { arr.push(listener); }
		return listener;
	};
	
	/**
	 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
	 * only run once, associate arbitrary data with the listener, and remove the listener.
	 * 
	 * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
	 * The wrapper function is returned for use with `removeEventListener` (or `off`).
	 * 
	 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener, or use
	 * {{#crossLink "Event/remove"}}{{/crossLink}}. Likewise, each time you call `on` a NEW wrapper function is subscribed, so multiple calls
	 * to `on` with the same params will create multiple listeners.
	 * 
	 * <h4>Example</h4>
	 * 
	 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
	 * 		function handleClick(evt, data) {
	 * 			data.count -= 1;
	 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
	 * 			if (data.count == 0) {
	 * 				alert("clicked 3 times!");
	 * 				myBtn.off("click", listener);
	 * 				// alternately: evt.remove();
	 * 			}
	 * 		}
	 * 
	 * @method on
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	 * the event is dispatched.
	 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
	 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
	 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
	 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
	 **/
	p.on = function(type, listener, scope, once, data, useCapture) {
		if (listener.handleEvent) {
			scope = scope||listener;
			listener = listener.handleEvent;
		}
		scope = scope||this;
		return this.addEventListener(type, function(evt) {
				listener.call(scope, evt, data);
				once&&evt.remove();
			}, useCapture);
	};

	/**
	 * Removes the specified event listener.
	 *
	 * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
	 * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
	 * closure will not work.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.removeEventListener("click", handleClick);
	 *
	 * @method removeEventListener
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener The listener function or object.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 **/
	p.removeEventListener = function(type, listener, useCapture) {
		var listeners = useCapture ? this._captureListeners : this._listeners;
		if (!listeners) { return; }
		var arr = listeners[type];
		if (!arr) { return; }
		for (var i=0,l=arr.length; i<l; i++) {
			if (arr[i] == listener) {
				if (l==1) { delete(listeners[type]); } // allows for faster checks.
				else { arr.splice(i,1); }
				break;
			}
		}
	};
	
	/**
	 * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
	 * .on method.
	 * 
	 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener. See 
	 * {{#crossLink "EventDispatcher/on"}}{{/crossLink}} for an example.
	 *
	 * @method off
	 * @param {String} type The string type of the event.
	 * @param {Function | Object} listener The listener function or object.
	 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	 **/
	p.off = p.removeEventListener;

	/**
	 * Removes all listeners for the specified type, or all listeners of all types.
	 *
	 * <h4>Example</h4>
	 *
	 *      // Remove all listeners
	 *      displayObject.removeAllEventListeners();
	 *
	 *      // Remove all click listeners
	 *      displayObject.removeAllEventListeners("click");
	 *
	 * @method removeAllEventListeners
	 * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
	 **/
	p.removeAllEventListeners = function(type) {
		if (!type) { this._listeners = this._captureListeners = null; }
		else {
			if (this._listeners) { delete(this._listeners[type]); }
			if (this._captureListeners) { delete(this._captureListeners[type]); }
		}
	};

	/**
	 * Dispatches the specified event to all listeners.
	 *
	 * <h4>Example</h4>
	 *
	 *      // Use a string event
	 *      this.dispatchEvent("complete");
	 *
	 *      // Use an Event instance
	 *      var event = new createjs.Event("progress");
	 *      this.dispatchEvent(event);
	 *
	 * @method dispatchEvent
	 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
	 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
	 * dispatchEvent will construct an Event instance if necessary with the specified type. This latter approach can
	 * be used to avoid event object instantiation for non-bubbling events that may not have any listeners.
	 * @param {Boolean} [bubbles] Specifies the `bubbles` value when a string was passed to eventObj.
	 * @param {Boolean} [cancelable] Specifies the `cancelable` value when a string was passed to eventObj.
	 * @return {Boolean} Returns false if `preventDefault()` was called on a cancelable event, true otherwise.
	 **/
	p.dispatchEvent = function(eventObj, bubbles, cancelable) {
		if (typeof eventObj == "string") {
			// skip everything if there's no listeners and it doesn't bubble:
			var listeners = this._listeners;
			if (!bubbles && (!listeners || !listeners[eventObj])) { return true; }
			eventObj = new createjs.Event(eventObj, bubbles, cancelable);
		} else if (eventObj.target && eventObj.clone) {
			// redispatching an active event object, so clone it:
			eventObj = eventObj.clone();
		}
		
		// TODO: it would be nice to eliminate this. Maybe in favour of evtObj instanceof Event? Or !!evtObj.createEvent
		try { eventObj.target = this; } catch (e) {} // try/catch allows redispatching of native events

		if (!eventObj.bubbles || !this.parent) {
			this._dispatchEvent(eventObj, 2);
		} else {
			var top=this, list=[top];
			while (top.parent) { list.push(top = top.parent); }
			var i, l=list.length;

			// capture & atTarget
			for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
				list[i]._dispatchEvent(eventObj, 1+(i==0));
			}
			// bubbling
			for (i=1; i<l && !eventObj.propagationStopped; i++) {
				list[i]._dispatchEvent(eventObj, 3);
			}
		}
		return !eventObj.defaultPrevented;
	};

	/**
	 * Indicates whether there is at least one listener for the specified event type.
	 * @method hasEventListener
	 * @param {String} type The string type of the event.
	 * @return {Boolean} Returns true if there is at least one listener for the specified event.
	 **/
	p.hasEventListener = function(type) {
		var listeners = this._listeners, captureListeners = this._captureListeners;
		return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
	};
	
	/**
	 * Indicates whether there is at least one listener for the specified event type on this object or any of its
	 * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
	 * specified type is dispatched from this object, it will trigger at least one listener.
	 * 
	 * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
	 * event flow for a listener, not just this object.
	 * @method willTrigger
	 * @param {String} type The string type of the event.
	 * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
	 **/
	p.willTrigger = function(type) {
		var o = this;
		while (o) {
			if (o.hasEventListener(type)) { return true; }
			o = o.parent;
		}
		return false;
	};

	/**
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[EventDispatcher]";
	};


// private methods:
	/**
	 * @method _dispatchEvent
	 * @param {Object | String | Event} eventObj
	 * @param {Object} eventPhase
	 * @protected
	 **/
	p._dispatchEvent = function(eventObj, eventPhase) {
		var l, listeners = (eventPhase==1) ? this._captureListeners : this._listeners;
		if (eventObj && listeners) {
			var arr = listeners[eventObj.type];
			if (!arr||!(l=arr.length)) { return; }
			try { eventObj.currentTarget = this; } catch (e) {}
			try { eventObj.eventPhase = eventPhase; } catch (e) {}
			eventObj.removed = false;
			
			arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
			for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
				var o = arr[i];
				if (o.handleEvent) { o.handleEvent(eventObj); }
				else { o(eventObj); }
				if (eventObj.removed) {
					this.off(eventObj.type, o, eventPhase==1);
					eventObj.removed = false;
				}
			}
		}
	};


	createjs.EventDispatcher = EventDispatcher;
}());

//##############################################################################
// Ticker.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
	 * event to be notified when a set time interval has elapsed.
	 *
	 * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
	 * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
	 * can not be instantiated.
	 *
	 * <h4>Example</h4>
	 *
	 *      createjs.Ticker.addEventListener("tick", handleTick);
	 *      function handleTick(event) {
	 *          // Actions carried out each tick (aka frame)
	 *          if (!event.paused) {
	 *              // Actions carried out when the Ticker is not paused.
	 *          }
	 *      }
	 *
	 * @class Ticker
	 * @uses EventDispatcher
	 * @static
	 **/
	function Ticker() {
		throw "Ticker cannot be instantiated.";
	}


// constants:
	/**
	 * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
	 * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
	 * dispatches the tick when the time is within a certain threshold.
	 *
	 * This mode has a higher variance for time between frames than {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}},
	 * but does not require that content be time based as with {{#crossLink "Ticker/RAF:property"}}{{/crossLink}} while
	 * gaining the benefits of that API (screen synch, background throttling).
	 *
	 * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
	 * framerates of 10, 12, 15, 20, and 30 work well.
	 *
	 * Falls back to {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
	 * supported.
	 * @property RAF_SYNCHED
	 * @static
	 * @type {String}
	 * @default "synched"
	 * @readonly
	 **/
	Ticker.RAF_SYNCHED = "synched";

	/**
	 * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
	 * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
	 * You can leverage {{#crossLink "Ticker/getTime"}}{{/crossLink}} and the {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
	 * event object's "delta" properties to make this easier.
	 *
	 * Falls back on {{#crossLink "Ticker/TIMEOUT:property"}}{{/crossLink}} if the requestAnimationFrame API is not
	 * supported.
	 * @property RAF
	 * @static
	 * @type {String}
	 * @default "raf"
	 * @readonly
	 **/
	Ticker.RAF = "raf";

	/**
	 * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
	 * provide the benefits of requestAnimationFrame (screen synch, background throttling).
	 * @property TIMEOUT
	 * @static
	 * @type {String}
	 * @default "timeout"
	 * @readonly
	 **/
	Ticker.TIMEOUT = "timeout";


// static events:
	/**
	 * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused using
	 * {{#crossLink "Ticker/setPaused"}}{{/crossLink}}.
	 *
	 * <h4>Example</h4>
	 *
	 *      createjs.Ticker.addEventListener("tick", handleTick);
	 *      function handleTick(event) {
	 *          console.log("Paused:", event.paused, event.delta);
	 *      }
	 *
	 * @event tick
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Boolean} paused Indicates whether the ticker is currently paused.
	 * @param {Number} delta The time elapsed in ms since the last tick.
	 * @param {Number} time The total time in ms since Ticker was initialized.
	 * @param {Number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
	 * 	you could determine the amount of time that the Ticker has been paused since initialization with `time-runTime`.
	 * @since 0.6.0
	 */


// public static properties:
	/**
	 * Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}, and will be removed in a future version. If true, timingMode will
	 * use {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} by default.
	 * @deprecated Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}.
	 * @property useRAF
	 * @static
	 * @type {Boolean}
	 * @default false
	 **/
	Ticker.useRAF = false;

	/**
	 * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use. See
	 * {{#crossLink "Ticker/TIMEOUT"}}{{/crossLink}}, {{#crossLink "Ticker/RAF"}}{{/crossLink}}, and
	 * {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} for mode details.
	 * @property timingMode
	 * @static
	 * @type {String}
	 * @default Ticker.TIMEOUT
	 **/
	Ticker.timingMode = null;

	/**
	 * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
	 * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
	 * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
	 * (ex. maxDelta=50 when running at 40fps).
	 * 
	 * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
	 * when using both delta and other values.
	 * 
	 * If 0, there is no maximum.
	 * @property maxDelta
	 * @static
	 * @type {number}
	 * @default 0
	 */
	Ticker.maxDelta = 0;
	
	/**
	 * When the ticker is paused, all listeners will still receive a tick event, but the <code>paused</code> property
	 * of the event will be `true`. Also, while paused the `runTime` will not increase. See {{#crossLink "Ticker/tick:event"}}{{/crossLink}},
	 * {{#crossLink "Ticker/getTime"}}{{/crossLink}}, and {{#crossLink "Ticker/getEventTime"}}{{/crossLink}} for more
	 * info.
	 *
	 * <h4>Example</h4>
	 *
	 *      createjs.Ticker.addEventListener("tick", handleTick);
	 *      createjs.Ticker.paused = true;
	 *      function handleTick(event) {
	 *          console.log(event.paused,
	 *          	createjs.Ticker.getTime(false),
	 *          	createjs.Ticker.getTime(true));
	 *      }
	 *
	 * @property paused
	 * @static
	 * @type {Boolean}
	 * @default false
	 **/
	Ticker.paused = false;


// mix-ins:
	// EventDispatcher methods:
	Ticker.removeEventListener = null;
	Ticker.removeAllEventListeners = null;
	Ticker.dispatchEvent = null;
	Ticker.hasEventListener = null;
	Ticker._listeners = null;
	createjs.EventDispatcher.initialize(Ticker); // inject EventDispatcher methods.
	Ticker._addEventListener = Ticker.addEventListener;
	Ticker.addEventListener = function() {
		!Ticker._inited&&Ticker.init();
		return Ticker._addEventListener.apply(Ticker, arguments);
	};


// private static properties:
	/**
	 * @property _inited
	 * @static
	 * @type {Boolean}
	 * @protected
	 **/
	Ticker._inited = false;

	/**
	 * @property _startTime
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._startTime = 0;

	/**
	 * @property _pausedTime
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._pausedTime=0;

	/**
	 * The number of ticks that have passed
	 * @property _ticks
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._ticks = 0;

	/**
	 * The number of ticks that have passed while Ticker has been paused
	 * @property _pausedTicks
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._pausedTicks = 0;

	/**
	 * @property _interval
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._interval = 50;

	/**
	 * @property _lastTime
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._lastTime = 0;

	/**
	 * @property _times
	 * @static
	 * @type {Array}
	 * @protected
	 **/
	Ticker._times = null;

	/**
	 * @property _tickTimes
	 * @static
	 * @type {Array}
	 * @protected
	 **/
	Ticker._tickTimes = null;

	/**
	 * Stores the timeout or requestAnimationFrame id.
	 * @property _timerId
	 * @static
	 * @type {Number}
	 * @protected
	 **/
	Ticker._timerId = null;
	
	/**
	 * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
	 * if that property changed and a tick hasn't fired.
	 * @property _raf
	 * @static
	 * @type {Boolean}
	 * @protected
	 **/
	Ticker._raf = true;
	

// static getter / setters:
	/**
	 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
	 * @method setInterval
	 * @static
	 * @param {Number} interval
	 * @deprecated
	 **/
	Ticker.setInterval = function(interval) {
		Ticker._interval = interval;
		if (!Ticker._inited) { return; }
		Ticker._setupTick();
	};

	/**
	 * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
	 * @method getInterval
	 * @static
	 * @return {Number}
	 * @deprecated
	 **/
	Ticker.getInterval = function() {
		return Ticker._interval;
	};

	/**
	 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
	 * @method setFPS
	 * @static
	 * @param {Number} value
	 * @deprecated
	 **/
	Ticker.setFPS = function(value) {
		Ticker.setInterval(1000/value);
	};

	/**
	 * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
	 * @method getFPS
	 * @static
	 * @return {Number}
	 * @deprecated
	 **/
	Ticker.getFPS = function() {
		return 1000/Ticker._interval;
	};

	/**
	 * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
	 * Note that actual time between ticks may be more than specified depending on CPU load.
	 * This property is ignored if the ticker is using the `RAF` timing mode.
	 * @property interval
	 * @static
	 * @type {Number}
	 **/
	 
	/**
	 * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
	 * `framerate == 1000/interval`.
	 * @property framerate
	 * @static
	 * @type {Number}
	 **/
	try {
		Object.defineProperties(Ticker, {
			interval: { get: Ticker.getInterval, set: Ticker.setInterval },
			framerate: { get: Ticker.getFPS, set: Ticker.setFPS }
		});
	} catch (e) { console.log(e); }


// public static methods:
	/**
	 * Starts the tick. This is called automatically when the first listener is added.
	 * @method init
	 * @static
	 **/
	Ticker.init = function() {
		if (Ticker._inited) { return; }
		Ticker._inited = true;
		Ticker._times = [];
		Ticker._tickTimes = [];
		Ticker._startTime = Ticker._getTime();
		Ticker._times.push(Ticker._lastTime = 0);
		Ticker.interval = Ticker._interval;
	};
	
	/**
	 * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
	 * @method reset
	 * @static
	 **/
	Ticker.reset = function() {
		if (Ticker._raf) {
			var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
			f&&f(Ticker._timerId);
		} else {
			clearTimeout(Ticker._timerId);
		}
		Ticker.removeAllEventListeners("tick");
		Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
		Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
		Ticker._inited = false;
	};

	/**
	 * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
	 * because it only measures the time spent within the tick execution stack. 
	 * 
	 * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between 
	 * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that 
	 * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
	 *
	 * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
	 * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
	 * other than the tick is using ~80ms (another script, DOM rendering, etc).
	 * @method getMeasuredTickTime
	 * @static
	 * @param {Number} [ticks] The number of previous ticks over which to measure the average time spent in a tick.
	 * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
	 * @return {Number} The average time spent in a tick in milliseconds.
	 **/
	Ticker.getMeasuredTickTime = function(ticks) {
		var ttl=0, times=Ticker._tickTimes;
		if (!times || times.length < 1) { return -1; }

		// by default, calculate average for the past ~1 second:
		ticks = Math.min(times.length, ticks||(Ticker.getFPS()|0));
		for (var i=0; i<ticks; i++) { ttl += times[i]; }
		return ttl/ticks;
	};

	/**
	 * Returns the actual frames / ticks per second.
	 * @method getMeasuredFPS
	 * @static
	 * @param {Number} [ticks] The number of previous ticks over which to measure the actual frames / ticks per second.
	 * Defaults to the number of ticks per second.
	 * @return {Number} The actual frames / ticks per second. Depending on performance, this may differ
	 * from the target frames per second.
	 **/
	Ticker.getMeasuredFPS = function(ticks) {
		var times = Ticker._times;
		if (!times || times.length < 2) { return -1; }

		// by default, calculate fps for the past ~1 second:
		ticks = Math.min(times.length-1, ticks||(Ticker.getFPS()|0));
		return 1000/((times[0]-times[ticks])/ticks);
	};

	/**
	 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
	 * @method setPaused
	 * @static
	 * @param {Boolean} value
	 * @deprecated
	 **/
	Ticker.setPaused = function(value) {
		// TODO: deprecated.
		Ticker.paused = value;
	};

	/**
	 * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
	 * @method getPaused
	 * @static
	 * @return {Boolean}
	 * @deprecated
	 **/
	Ticker.getPaused = function() {
		// TODO: deprecated.
		return Ticker.paused;
	};

	/**
	 * Returns the number of milliseconds that have elapsed since Ticker was initialized via {{#crossLink "Ticker/init"}}.
	 * Returns -1 if Ticker has not been initialized. For example, you could use
	 * this in a time synchronized animation to determine the exact amount of time that has elapsed.
	 * @method getTime
	 * @static
	 * @param {Boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
	 * If false, the value returned will be total time elapsed since the first tick event listener was added.
	 * @return {Number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
	 **/
	Ticker.getTime = function(runTime) {
		return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
	};

	/**
	 * Similar to the {{#crossLink "Ticker/getTime"}}{{/crossLink}} method, but returns the time on the most recent {{#crossLink "Ticker/tick:event"}}{{/crossLink}}
	 * event object.
	 * @method getEventTime
	 * @static
	 * @param runTime {Boolean} [runTime=false] If true, the runTime property will be returned instead of time.
	 * @returns {number} The time or runTime property from the most recent tick event or -1.
	 */
	Ticker.getEventTime = function(runTime) {
		return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
	};
	
	/**
	 * Returns the number of ticks that have been broadcast by Ticker.
	 * @method getTicks
	 * @static
	 * @param {Boolean} pauseable Indicates whether to include ticks that would have been broadcast
	 * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
	 * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
	 * value. The default value is false.
	 * @return {Number} of ticks that have been broadcast.
	 **/
	Ticker.getTicks = function(pauseable) {
		return  Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
	};


// private static methods:
	/**
	 * @method _handleSynch
	 * @static
	 * @protected
	 **/
	Ticker._handleSynch = function() {
		Ticker._timerId = null;
		Ticker._setupTick();

		// run if enough time has elapsed, with a little bit of flexibility to be early:
		if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval-1)*0.97) {
			Ticker._tick();
		}
	};

	/**
	 * @method _handleRAF
	 * @static
	 * @protected
	 **/
	Ticker._handleRAF = function() {
		Ticker._timerId = null;
		Ticker._setupTick();
		Ticker._tick();
	};

	/**
	 * @method _handleTimeout
	 * @static
	 * @protected
	 **/
	Ticker._handleTimeout = function() {
		Ticker._timerId = null;
		Ticker._setupTick();
		Ticker._tick();
	};

	/**
	 * @method _setupTick
	 * @static
	 * @protected
	 **/
	Ticker._setupTick = function() {
		if (Ticker._timerId != null) { return; } // avoid duplicates

		var mode = Ticker.timingMode||(Ticker.useRAF&&Ticker.RAF_SYNCHED);
		if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
			var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if (f) {
				Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
				Ticker._raf = true;
				return;
			}
		}
		Ticker._raf = false;
		Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
	};

	/**
	 * @method _tick
	 * @static
	 * @protected
	 **/
	Ticker._tick = function() {
		var paused = Ticker.paused;
		var time = Ticker._getTime();
		var elapsedTime = time-Ticker._lastTime;
		Ticker._lastTime = time;
		Ticker._ticks++;
		
		if (paused) {
			Ticker._pausedTicks++;
			Ticker._pausedTime += elapsedTime;
		}
		
		if (Ticker.hasEventListener("tick")) {
			var event = new createjs.Event("tick");
			var maxDelta = Ticker.maxDelta;
			event.delta = (maxDelta && elapsedTime > maxDelta) ? maxDelta : elapsedTime;
			event.paused = paused;
			event.time = time;
			event.runTime = time-Ticker._pausedTime;
			Ticker.dispatchEvent(event);
		}
		
		Ticker._tickTimes.unshift(Ticker._getTime()-time);
		while (Ticker._tickTimes.length > 100) { Ticker._tickTimes.pop(); }

		Ticker._times.unshift(time);
		while (Ticker._times.length > 100) { Ticker._times.pop(); }
	};

	/**
	 * @method _getTime
	 * @static
	 * @protected
	 **/
	var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
	Ticker._getTime = function() {
		return ((now&&now.call(performance))||(new Date().getTime())) - Ticker._startTime;
	};


	createjs.Ticker = Ticker;
}());

//##############################################################################
// UID.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Global utility for generating sequential unique ID numbers. The UID class uses a static interface (ex. <code>UID.get()</code>)
	 * and should not be instantiated.
	 * @class UID
	 * @static
	 **/
	function UID() {
		throw "UID cannot be instantiated";
	}


// private static properties:
	/**
	 * @property _nextID
	 * @type Number
	 * @protected
	 **/
	UID._nextID = 0;


// public static methods:
	/**
	 * Returns the next unique id.
	 * @method get
	 * @return {Number} The next unique id
	 * @static
	 **/
	UID.get = function() {
		return UID._nextID++;
	};


	createjs.UID = UID;
}());

//##############################################################################
// MouseEvent.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Passed as the parameter to all mouse/pointer/touch related events. For a listing of mouse events and their properties,
	 * see the {{#crossLink "DisplayObject"}}{{/crossLink}} and {{#crossLink "Stage"}}{{/crossLink}} event listings.
	 * @class MouseEvent
	 * @param {String} type The event type.
	 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
	 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
	 * @param {Number} stageX The normalized x position relative to the stage.
	 * @param {Number} stageY The normalized y position relative to the stage.
	 * @param {MouseEvent} nativeEvent The native DOM event related to this mouse event.
	 * @param {Number} pointerID The unique id for the pointer.
	 * @param {Boolean} primary Indicates whether this is the primary pointer in a multitouch environment.
	 * @param {Number} rawX The raw x position relative to the stage.
	 * @param {Number} rawY The raw y position relative to the stage.
	 * @param {DisplayObject} relatedTarget The secondary target for the event.
	 * @extends Event
	 * @constructor
	 **/
	function MouseEvent(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY, relatedTarget) {
		this.Event_constructor(type, bubbles, cancelable);
		
		
	// public properties:
		/**
		 * The normalized x position on the stage. This will always be within the range 0 to stage width.
		 * @property stageX
		 * @type Number
		*/
		this.stageX = stageX;
	
		/**
		 * The normalized y position on the stage. This will always be within the range 0 to stage height.
		 * @property stageY
		 * @type Number
		 **/
		this.stageY = stageY;
	
		/**
		 * The raw x position relative to the stage. Normally this will be the same as the stageX value, unless
		 * stage.mouseMoveOutside is true and the pointer is outside of the stage bounds.
		 * @property rawX
		 * @type Number
		*/
		this.rawX = (rawX==null)?stageX:rawX;
	
		/**
		 * The raw y position relative to the stage. Normally this will be the same as the stageY value, unless
		 * stage.mouseMoveOutside is true and the pointer is outside of the stage bounds.
		 * @property rawY
		 * @type Number
		*/
		this.rawY = (rawY==null)?stageY:rawY;
	
		/**
		 * The native MouseEvent generated by the browser. The properties and API for this
		 * event may differ between browsers. This property will be null if the
		 * EaselJS property was not directly generated from a native MouseEvent.
		 * @property nativeEvent
		 * @type HtmlMouseEvent
		 * @default null
		 **/
		this.nativeEvent = nativeEvent;
	
		/**
		 * The unique id for the pointer (touch point or cursor). This will be either -1 for the mouse, or the system
		 * supplied id value.
		 * @property pointerID
		 * @type {Number}
		 */
		this.pointerID = pointerID;
	
		/**
		 * Indicates whether this is the primary pointer in a multitouch environment. This will always be true for the mouse.
		 * For touch pointers, the first pointer in the current stack will be considered the primary pointer.
		 * @property primary
		 * @type {Boolean}
		 */
		this.primary = !!primary;
		
		/**
		 * The secondary target for the event, if applicable. This is used for mouseout/rollout
		 * events to indicate the object that the mouse entered from, mouseover/rollover for the object the mouse exited,
		 * and stagemousedown/stagemouseup events for the object that was the under the cursor, if any.
		 * 
		 * Only valid interaction targets will be returned (ie. objects with mouse listeners or a cursor set).
		 * @property relatedTarget
		 * @type {DisplayObject}
		 */
		this.relatedTarget = relatedTarget;
	}
	var p = createjs.extend(MouseEvent, createjs.Event);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
	
// getter / setters:
	/**
	 * Returns the x position of the mouse in the local coordinate system of the current target (ie. the dispatcher).
	 * @property localX
	 * @type {Number}
	 * @readonly
	 */
	p._get_localX = function() {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
	};
	
	/**
	 * Returns the y position of the mouse in the local coordinate system of the current target (ie. the dispatcher).
	 * @property localY
	 * @type {Number}
	 * @readonly
	 */
	p._get_localY = function() {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
	};
	
	/**
	 * Indicates whether the event was generated by a touch input (versus a mouse input).
	 * @property isTouch
	 * @type {Boolean}
	 * @readonly
	 */
	p._get_isTouch = function() {
		return this.pointerID !== -1;
	};
	
	
	try {
		Object.defineProperties(p, {
			localX: { get: p._get_localX },
			localY: { get: p._get_localY },
			isTouch: { get: p._get_isTouch }
		});
	} catch (e) {} // TODO: use Log


// public methods:
	/**
	 * Returns a clone of the MouseEvent instance.
	 * @method clone
	 * @return {MouseEvent} a clone of the MouseEvent instance.
	 **/
	p.clone = function() {
		return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]";
	};


	createjs.MouseEvent = createjs.promote(MouseEvent, "Event");
}());

//##############################################################################
// Matrix2D.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
	 *
	 * This matrix can be visualized as:
	 *
	 * 	[ a  c  tx
	 * 	  b  d  ty
	 * 	  0  0  1  ]
	 *
	 * Note the locations of b and c.
	 *
	 * @class Matrix2D
	 * @param {Number} [a=1] Specifies the a property for the new matrix.
	 * @param {Number} [b=0] Specifies the b property for the new matrix.
	 * @param {Number} [c=0] Specifies the c property for the new matrix.
	 * @param {Number} [d=1] Specifies the d property for the new matrix.
	 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
	 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
	 * @constructor
	 **/
	function Matrix2D(a, b, c, d, tx, ty) {
		this.setValues(a,b,c,d,tx,ty);
		
	// public properties:
		// assigned in the setValues method.
		/**
		 * Position (0, 0) in a 3x3 affine transformation matrix.
		 * @property a
		 * @type Number
		 **/
	
		/**
		 * Position (0, 1) in a 3x3 affine transformation matrix.
		 * @property b
		 * @type Number
		 **/
	
		/**
		 * Position (1, 0) in a 3x3 affine transformation matrix.
		 * @property c
		 * @type Number
		 **/
	
		/**
		 * Position (1, 1) in a 3x3 affine transformation matrix.
		 * @property d
		 * @type Number
		 **/
	
		/**
		 * Position (2, 0) in a 3x3 affine transformation matrix.
		 * @property tx
		 * @type Number
		 **/
	
		/**
		 * Position (2, 1) in a 3x3 affine transformation matrix.
		 * @property ty
		 * @type Number
		 **/
	}
	var p = Matrix2D.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// constants:
	/**
	 * Multiplier for converting degrees to radians. Used internally by Matrix2D.
	 * @property DEG_TO_RAD
	 * @static
	 * @final
	 * @type Number
	 * @readonly
	 **/
	Matrix2D.DEG_TO_RAD = Math.PI/180;


// static public properties:
	/**
	 * An identity matrix, representing a null transformation.
	 * @property identity
	 * @static
	 * @type Matrix2D
	 * @readonly
	 **/
	Matrix2D.identity = null; // set at bottom of class definition.
	

// public methods:
	/**
	 * Sets the specified values on this instance. 
	 * @method setValues
	 * @param {Number} [a=1] Specifies the a property for the new matrix.
	 * @param {Number} [b=0] Specifies the b property for the new matrix.
	 * @param {Number} [c=0] Specifies the c property for the new matrix.
	 * @param {Number} [d=1] Specifies the d property for the new matrix.
	 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
	 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
	 * @return {Matrix2D} This instance. Useful for chaining method calls.
	*/
	p.setValues = function(a, b, c, d, tx, ty) {
		// don't forget to update docs in the constructor if these change:
		this.a = (a == null) ? 1 : a;
		this.b = b || 0;
		this.c = c || 0;
		this.d = (d == null) ? 1 : d;
		this.tx = tx || 0;
		this.ty = ty || 0;
		return this;
	};

	/**
	 * Appends the specified matrix properties to this matrix. All parameters are required.
	 * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
	 * @method append
	 * @param {Number} a
	 * @param {Number} b
	 * @param {Number} c
	 * @param {Number} d
	 * @param {Number} tx
	 * @param {Number} ty
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.append = function(a, b, c, d, tx, ty) {
		var a1 = this.a;
		var b1 = this.b;
		var c1 = this.c;
		var d1 = this.d;
		if (a != 1 || b != 0 || c != 0 || d != 1) {
			this.a  = a1*a+c1*b;
			this.b  = b1*a+d1*b;
			this.c  = a1*c+c1*d;
			this.d  = b1*c+d1*d;
		}
		this.tx = a1*tx+c1*ty+this.tx;
		this.ty = b1*tx+d1*ty+this.ty;
		return this;
	};

	/**
	 * Prepends the specified matrix properties to this matrix.
	 * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
	 * All parameters are required.
	 * @method prepend
	 * @param {Number} a
	 * @param {Number} b
	 * @param {Number} c
	 * @param {Number} d
	 * @param {Number} tx
	 * @param {Number} ty
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.prepend = function(a, b, c, d, tx, ty) {
		var a1 = this.a;
		var c1 = this.c;
		var tx1 = this.tx;

		this.a  = a*a1+c*this.b;
		this.b  = b*a1+d*this.b;
		this.c  = a*c1+c*this.d;
		this.d  = b*c1+d*this.d;
		this.tx = a*tx1+c*this.ty+tx;
		this.ty = b*tx1+d*this.ty+ty;
		return this;
	};

	/**
	 * Appends the specified matrix to this matrix.
	 * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
	 * @method appendMatrix
	 * @param {Matrix2D} matrix
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.appendMatrix = function(matrix) {
		return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
	};

	/**
	 * Prepends the specified matrix to this matrix.
	 * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
	 * For example, you could calculate the combined transformation for a child object using:
	 * 
	 * 	var o = myDisplayObject;
	 * 	var mtx = o.getMatrix();
	 * 	while (o = o.parent) {
	 * 		// prepend each parent's transformation in turn:
	 * 		o.prependMatrix(o.getMatrix());
	 * 	}
	 * @method prependMatrix
	 * @param {Matrix2D} matrix
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.prependMatrix = function(matrix) {
		return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
	};

	/**
	 * Generates matrix properties from the specified display object transform properties, and appends them to this matrix.
	 * For example, you can use this to generate a matrix representing the transformations of a display object:
	 * 
	 * 	var mtx = new Matrix2D();
	 * 	mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
	 * @method appendTransform
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} scaleX
	 * @param {Number} scaleY
	 * @param {Number} rotation
	 * @param {Number} skewX
	 * @param {Number} skewY
	 * @param {Number} regX Optional.
	 * @param {Number} regY Optional.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.appendTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
		if (rotation%360) {
			var r = rotation*Matrix2D.DEG_TO_RAD;
			var cos = Math.cos(r);
			var sin = Math.sin(r);
		} else {
			cos = 1;
			sin = 0;
		}

		if (skewX || skewY) {
			// TODO: can this be combined into a single append operation?
			skewX *= Matrix2D.DEG_TO_RAD;
			skewY *= Matrix2D.DEG_TO_RAD;
			this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
			this.append(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, 0, 0);
		} else {
			this.append(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, x, y);
		}
		
		if (regX || regY) {
			// append the registration offset:
			this.tx -= regX*this.a+regY*this.c; 
			this.ty -= regX*this.b+regY*this.d;
		}
		return this;
	};

	/**
	 * Generates matrix properties from the specified display object transform properties, and prepends them to this matrix.
	 * For example, you could calculate the combined transformation for a child object using:
	 * 
	 * 	var o = myDisplayObject;
	 * 	var mtx = new createjs.Matrix2D();
	 * 	do  {
	 * 		// prepend each parent's transformation in turn:
	 * 		mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
	 * 	} while (o = o.parent);
	 * 	
	 * 	Note that the above example would not account for {{#crossLink "DisplayObject/transformMatrix:property"}}{{/crossLink}}
	 * 	values. See {{#crossLink "Matrix2D/prependMatrix"}}{{/crossLink}} for an example that does.
	 * @method prependTransform
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} scaleX
	 * @param {Number} scaleY
	 * @param {Number} rotation
	 * @param {Number} skewX
	 * @param {Number} skewY
	 * @param {Number} regX Optional.
	 * @param {Number} regY Optional.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.prependTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
		if (rotation%360) {
			var r = rotation*Matrix2D.DEG_TO_RAD;
			var cos = Math.cos(r);
			var sin = Math.sin(r);
		} else {
			cos = 1;
			sin = 0;
		}

		if (regX || regY) {
			// prepend the registration offset:
			this.tx -= regX; this.ty -= regY;
		}
		if (skewX || skewY) {
			// TODO: can this be combined into a single prepend operation?
			skewX *= Matrix2D.DEG_TO_RAD;
			skewY *= Matrix2D.DEG_TO_RAD;
			this.prepend(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, 0, 0);
			this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
		} else {
			this.prepend(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, x, y);
		}
		return this;
	};

	/**
	 * Applies a clockwise rotation transformation to the matrix.
	 * @method rotate
	 * @param {Number} angle The angle to rotate by, in degrees. To use a value in radians, multiply it by `180/Math.PI`.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.rotate = function(angle) {
		angle = angle*Matrix2D.DEG_TO_RAD;
		var cos = Math.cos(angle);
		var sin = Math.sin(angle);

		var a1 = this.a;
		var b1 = this.b;

		this.a = a1*cos+this.c*sin;
		this.b = b1*cos+this.d*sin;
		this.c = -a1*sin+this.c*cos;
		this.d = -b1*sin+this.d*cos;
		return this;
	};

	/**
	 * Applies a skew transformation to the matrix.
	 * @method skew
	 * @param {Number} skewX The amount to skew horizontally in degrees. To use a value in radians, multiply it by `180/Math.PI`.
	 * @param {Number} skewY The amount to skew vertically in degrees.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	*/
	p.skew = function(skewX, skewY) {
		skewX = skewX*Matrix2D.DEG_TO_RAD;
		skewY = skewY*Matrix2D.DEG_TO_RAD;
		this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
		return this;
	};

	/**
	 * Applies a scale transformation to the matrix.
	 * @method scale
	 * @param {Number} x The amount to scale horizontally. E.G. a value of 2 will double the size in the X direction, and 0.5 will halve it.
	 * @param {Number} y The amount to scale vertically.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.scale = function(x, y) {
		this.a *= x;
		this.b *= x;
		this.c *= y;
		this.d *= y;
		//this.tx *= x;
		//this.ty *= y;
		return this;
	};

	/**
	 * Translates the matrix on the x and y axes.
	 * @method translate
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.translate = function(x, y) {
		this.tx += this.a*x + this.c*y;
		this.ty += this.b*x + this.d*y;
		return this;
	};

	/**
	 * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
	 * @method identity
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.identity = function() {
		this.a = this.d = 1;
		this.b = this.c = this.tx = this.ty = 0;
		return this;
	};

	/**
	 * Inverts the matrix, causing it to perform the opposite transformation.
	 * @method invert
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	 **/
	p.invert = function() {
		var a1 = this.a;
		var b1 = this.b;
		var c1 = this.c;
		var d1 = this.d;
		var tx1 = this.tx;
		var n = a1*d1-b1*c1;

		this.a = d1/n;
		this.b = -b1/n;
		this.c = -c1/n;
		this.d = a1/n;
		this.tx = (c1*this.ty-d1*tx1)/n;
		this.ty = -(a1*this.ty-b1*tx1)/n;
		return this;
	};

	/**
	 * Returns true if the matrix is an identity matrix.
	 * @method isIdentity
	 * @return {Boolean}
	 **/
	p.isIdentity = function() {
		return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
	};
	
	/**
	 * Returns true if this matrix is equal to the specified matrix (all property values are equal).
	 * @method equals
	 * @param {Matrix2D} matrix The matrix to compare.
	 * @return {Boolean}
	 **/
	p.equals = function(matrix) {
		return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d;
	};

	/**
	 * Transforms a point according to this matrix.
	 * @method transformPoint
	 * @param {Number} x The x component of the point to transform.
	 * @param {Number} y The y component of the point to transform.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
	 * @return {Point} This matrix. Useful for chaining method calls.
	 **/
	p.transformPoint = function(x, y, pt) {
		pt = pt||{};
		pt.x = x*this.a+y*this.c+this.tx;
		pt.y = x*this.b+y*this.d+this.ty;
		return pt;
	};

	/**
	 * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that these values
	 * may not match the transform properties you used to generate the matrix, though they will produce the same visual
	 * results.
	 * @method decompose
	 * @param {Object} target The object to apply the transform properties to. If null, then a new object will be returned.
	 * @return {Object} The target, or a new generic object with the transform properties applied.
	*/
	p.decompose = function(target) {
		// TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation even when scale is negative
		if (target == null) { target = {}; }
		target.x = this.tx;
		target.y = this.ty;
		target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
		target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);

		var skewX = Math.atan2(-this.c, this.d);
		var skewY = Math.atan2(this.b, this.a);

		var delta = Math.abs(1-skewX/skewY);
		if (delta < 0.00001) { // effectively identical, can use rotation:
			target.rotation = skewY/Matrix2D.DEG_TO_RAD;
			if (this.a < 0 && this.d >= 0) {
				target.rotation += (target.rotation <= 0) ? 180 : -180;
			}
			target.skewX = target.skewY = 0;
		} else {
			target.skewX = skewX/Matrix2D.DEG_TO_RAD;
			target.skewY = skewY/Matrix2D.DEG_TO_RAD;
		}
		return target;
	};
	
	/**
	 * Copies all properties from the specified matrix to this matrix.
	 * @method copy
	 * @param {Matrix2D} matrix The matrix to copy properties from.
	 * @return {Matrix2D} This matrix. Useful for chaining method calls.
	*/
	p.copy = function(matrix) {
		return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
	};

	/**
	 * Returns a clone of the Matrix2D instance.
	 * @method clone
	 * @return {Matrix2D} a clone of the Matrix2D instance.
	 **/
	p.clone = function() {
		return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty);
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]";
	};

	// this has to be populated after the class is defined:
	Matrix2D.identity = new Matrix2D();


	createjs.Matrix2D = Matrix2D;
}());

//##############################################################################
// DisplayProps.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";

	/**
	 * Used for calculating and encapsulating display related properties.
	 * @class DisplayProps
	 * @param {Number} [visible=true] Visible value.
	 * @param {Number} [alpha=0] Alpha value.
	 * @param {Number} [shadow=null] A Shadow instance or null.
	 * @param {Number} [compositeOperation=null] A compositeOperation value or null.
	 * @param {Number} [matrix] A transformation matrix. Defaults to a new identity matrix.
	 * @constructor
	 **/
	function DisplayProps(visible, alpha, shadow, compositeOperation, matrix) {
		this.setValues(visible, alpha, shadow, compositeOperation, matrix);
		
	// public properties:
		// assigned in the setValues method.
		/**
		 * Property representing the alpha that will be applied to a display object.
		 * @property alpha
		 * @type Number
		 **/
	
		/**
		 * Property representing the shadow that will be applied to a display object.
		 * @property shadow
		 * @type Shadow
		 **/
	
		/**
		 * Property representing the compositeOperation that will be applied to a display object.
		 * You can find a list of valid composite operations at:
		 * <a href="https://developer.mozilla.org/en/Canvas_tutorial/Compositing">https://developer.mozilla.org/en/Canvas_tutorial/Compositing</a>
		 * @property compositeOperation
		 * @type String
		 **/
		
		/**
		 * Property representing the value for visible that will be applied to a display object.
		 * @property visible
		 * @type Boolean
		 **/
		
		/**
		 * The transformation matrix that will be applied to a display object.
		 * @property matrix
		 * @type Matrix2D
		 **/
	}
	var p = DisplayProps.prototype;

// initialization:
	/**
	 * Reinitializes the instance with the specified values.
	 * @method setValues
	 * @param {Number} [visible=true] Visible value.
	 * @param {Number} [alpha=1] Alpha value.
	 * @param {Number} [shadow=null] A Shadow instance or null.
	 * @param {Number} [compositeOperation=null] A compositeOperation value or null.
	 * @param {Number} [matrix] A transformation matrix. Defaults to an identity matrix.
	 * @return {DisplayProps} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.setValues = function (visible, alpha, shadow, compositeOperation, matrix) {
		this.visible = visible == null ? true : !!visible;
		this.alpha = alpha == null ? 1 : alpha;
		this.shadow = shadow;
		this.compositeOperation = shadow;
		this.matrix = matrix || (this.matrix&&this.matrix.identity()) || new createjs.Matrix2D();
		return this;
	};

// public methods:
	/**
	 * Appends the specified display properties. This is generally used to apply a child's properties its parent's.
	 * @method append
	 * @param {Boolean} visible desired visible value
	 * @param {Number} alpha desired alpha value
	 * @param {Shadow} shadow desired shadow value
	 * @param {String} compositeOperation desired composite operation value
	 * @param {Matrix2D} [matrix] a Matrix2D instance
	 * @return {DisplayProps} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.append = function(visible, alpha, shadow, compositeOperation, matrix) {
		this.alpha *= alpha;
		this.shadow = shadow || this.shadow;
		this.compositeOperation = compositeOperation || this.compositeOperation;
		this.visible = this.visible && visible;
		matrix&&this.matrix.appendMatrix(matrix);
		return this;
	};
	
	/**
	 * Prepends the specified display properties. This is generally used to apply a parent's properties to a child's.
	 * For example, to get the combined display properties that would be applied to a child, you could use:
	 * 
	 * 	var o = myDisplayObject;
	 * 	var props = new createjs.DisplayProps();
	 * 	do {
	 * 		// prepend each parent's props in turn:
	 * 		props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation, o.getMatrix());
	 * 	} while (o = o.parent);
	 * 	
	 * @method prepend
	 * @param {Boolean} visible desired visible value
	 * @param {Number} alpha desired alpha value
	 * @param {Shadow} shadow desired shadow value
	 * @param {String} compositeOperation desired composite operation value
	 * @param {Matrix2D} [matrix] a Matrix2D instance
	 * @return {DisplayProps} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.prepend = function(visible, alpha, shadow, compositeOperation, matrix) {
		this.alpha *= alpha;
		this.shadow = this.shadow || shadow;
		this.compositeOperation = this.compositeOperation || compositeOperation;
		this.visible = this.visible && visible;
		matrix&&this.matrix.prependMatrix(matrix);
		return this;
	};
	
	/**
	 * Resets this instance and its matrix to default values.
	 * @method identity
	 * @return {DisplayProps} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.identity = function() {
		this.visible = true;
		this.alpha = 1;
		this.shadow = this.compositeOperation = null;
		this.matrix.identity();
		return this;
	};
	
	/**
	 * Returns a clone of the DisplayProps instance. Clones the associated matrix.
	 * @method clone
	 * @return {DisplayProps} a clone of the DisplayProps instance.
	 **/
	p.clone = function() {
		return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
	};

// private methods:

	createjs.DisplayProps = DisplayProps;
})();

//##############################################################################
// Point.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Represents a point on a 2 dimensional x / y coordinate system.
	 *
	 * <h4>Example</h4>
	 * 
	 *      var point = new createjs.Point(0, 100);
	 * 
	 * @class Point
	 * @param {Number} [x=0] X position.
	 * @param {Number} [y=0] Y position.
	 * @constructor
	 **/
	function Point(x, y) {
	 	this.setValues(x, y);
	 	
	 	
	// public properties:
		// assigned in the setValues method.
		/**
		 * X position.
		 * @property x
		 * @type Number
		 **/
	
		/**
		 * Y position.
		 * @property y
		 * @type Number
		 **/
	}
	var p = Point.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.

	
// public methods:
	/** 
	 * Sets the specified values on this instance.
	 * @method setValues
	 * @param {Number} [x=0] X position.
	 * @param {Number} [y=0] Y position.
	 * @return {Point} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.setValues = function(x, y) {
		this.x = x||0;
		this.y = y||0;
		return this;
	};
	
	/**
	 * Copies all properties from the specified point to this point.
	 * @method copy
	 * @param {Point} point The point to copy properties from.
	 * @return {Point} This point. Useful for chaining method calls.
	 * @chainable
	*/
	p.copy = function(point) {
		this.x = point.x;
		this.y = point.y;
		return this;
	};
	
	/**
	 * Returns a clone of the Point instance.
	 * @method clone
	 * @return {Point} a clone of the Point instance.
	 **/
	p.clone = function() {
		return new Point(this.x, this.y);
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Point (x="+this.x+" y="+this.y+")]";
	};
	
	
	createjs.Point = Point;
}());

//##############################################################################
// Rectangle.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Represents a rectangle as defined by the points (x, y) and (x+width, y+height).
	 *
	 * <h4>Example</h4>
	 *
	 *      var rect = new createjs.Rectangle(0, 0, 100, 100);
	 *
	 * @class Rectangle
	 * @param {Number} [x=0] X position.
	 * @param {Number} [y=0] Y position.
	 * @param {Number} [width=0] The width of the Rectangle.
	 * @param {Number} [height=0] The height of the Rectangle.
	 * @constructor
	 **/
	function Rectangle(x, y, width, height) {
		this.setValues(x, y, width, height);
		
		
	// public properties:
		// assigned in the setValues method.
		/**
		 * X position.
		 * @property x
		 * @type Number
		 **/
	
		/**
		 * Y position.
		 * @property y
		 * @type Number
		 **/
	
		/**
		 * Width.
		 * @property width
		 * @type Number
		 **/
	
		/**
		 * Height.
		 * @property height
		 * @type Number
		 **/
	}
	var p = Rectangle.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// public methods:
	/** 
	 * Sets the specified values on this instance.
	 * @method setValues
	 * @param {Number} [x=0] X position.
	 * @param {Number} [y=0] Y position.
	 * @param {Number} [width=0] The width of the Rectangle.
	 * @param {Number} [height=0] The height of the Rectangle.
	 * @return {Rectangle} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.setValues = function(x, y, width, height) {
		// don't forget to update docs in the constructor if these change:
		this.x = x||0;
		this.y = y||0;
		this.width = width||0;
		this.height = height||0;
		return this;
	};
	
	/** 
	 * Extends the rectangle's bounds to include the described point or rectangle.
	 * @method extend
	 * @param {Number} x X position of the point or rectangle.
	 * @param {Number} y Y position of the point or rectangle.
	 * @param {Number} [width=0] The width of the rectangle.
	 * @param {Number} [height=0] The height of the rectangle.
	 * @return {Rectangle} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.extend = function(x, y, width, height) {
		width = width||0;
		height = height||0;
		if (x+width > this.x+this.width) { this.width = x+width-this.x; }
		if (y+height > this.y+this.height) { this.height = y+height-this.y; }
		if (x < this.x) { this.width += this.x-x; this.x = x; }
		if (y < this.y) { this.height += this.y-y; this.y = y; }
		return this;
	};
	
	/** 
	 * Adds the specified padding to the rectangle's bounds.
	 * @method extend
	 * @param {Number} [top=0]
	 * @param {Number} [left=0]
	 * @param {Number} [right=0]
	 * @param {Number} [bottom=0]
	 * @return {Rectangle} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	p.pad = function(top, left, bottom, right) {
		this.x -= left;
		this.y -= top;
		this.width += left+right;
		this.height += top+bottom;
		return this;
	};
	
	/**
	 * Copies all properties from the specified rectangle to this rectangle.
	 * @method copy
	 * @param {Rectangle} rectangle The rectangle to copy properties from.
	 * @return {Rectangle} This rectangle. Useful for chaining method calls.
	 * @chainable
	*/
	p.copy = function(rectangle) {
		return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	};
	
	/** 
	 * Returns true if this rectangle fully encloses the described point or rectangle.
	 * @method contains
	 * @param {Number} x X position of the point or rectangle.
	 * @param {Number} y Y position of the point or rectangle.
	 * @param {Number} [width=0] The width of the rectangle.
	 * @param {Number} [height=0] The height of the rectangle.
	 * @return {Boolean} True if the described point or rectangle is contained within this rectangle.
	*/
	p.contains = function(x, y, width, height) {
		width = width||0;
		height = height||0;
		return (x >= this.x && x+width <= this.x+this.width && y >= this.y && y+height <= this.y+this.height);
	};
	
	/** 
	 * Returns a new rectangle which contains this rectangle and the specified rectangle.
	 * @method union
	 * @param {Rectangle} rect The rectangle to calculate a union with.
	 * @return {Rectangle} A new rectangle describing the union.
	*/
	p.union = function(rect) {
		return this.clone().extend(rect.x, rect.y, rect.width, rect.height);
	};
	
	/** 
	 * Returns a new rectangle which describes the intersection (overlap) of this rectangle and the specified rectangle,
	 * or null if they do not intersect.
	 * @method intersection
	 * @param {Rectangle} rect The rectangle to calculate an intersection with.
	 * @return {Rectangle} A new rectangle describing the intersection or null.
	*/
	p.intersection = function(rect) {
		var x1 = rect.x, y1 = rect.y, x2 = x1+rect.width, y2 = y1+rect.height;
		if (this.x > x1) { x1 = this.x; }
		if (this.y > y1) { y1 = this.y; }
		if (this.x + this.width < x2) { x2 = this.x + this.width; }
		if (this.y + this.height < y2) { y2 = this.y + this.height; }
		return (x2 <= x1 || y2 <= y1) ? null : new Rectangle(x1, y1, x2-x1, y2-y1);
	};
	
	/** 
	 * Returns true if the specified rectangle intersects (has any overlap) with this rectangle.
	 * @method intersects
	 * @param {Rectangle} rect The rectangle to compare.
	 * @return {Boolean} True if the rectangles intersect.
	*/
	p.intersects = function(rect) {
		return (rect.x <= this.x+this.width && this.x <= rect.x+rect.width && rect.y <= this.y+this.height && this.y <= rect.y + rect.height);
	};
	
	/** 
	 * Returns true if the width or height are equal or less than 0.
	 * @method isEmpty
	 * @return {Boolean} True if the rectangle is empty.
	*/
	p.isEmpty = function() {
		return this.width <= 0 || this.height <= 0;
	};
	
	/**
	 * Returns a clone of the Rectangle instance.
	 * @method clone
	 * @return {Rectangle} a clone of the Rectangle instance.
	 **/
	p.clone = function() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]";
	};
	
	
	createjs.Rectangle = Rectangle;
}());

//##############################################################################
// ButtonHelper.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * The ButtonHelper is a helper class to create interactive buttons from {{#crossLink "MovieClip"}}{{/crossLink}} or
	 * {{#crossLink "Sprite"}}{{/crossLink}} instances. This class will intercept mouse events from an object, and
	 * automatically call {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} or {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}},
	 * to the respective animation labels, add a pointer cursor, and allows the user to define a hit state frame.
	 *
	 * The ButtonHelper instance does not need to be added to the stage, but a reference should be maintained to prevent
	 * garbage collection.
	 * 
	 * Note that over states will not work unless you call {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
	 *
	 * <h4>Example</h4>
	 *
	 *      var helper = new createjs.ButtonHelper(myInstance, "out", "over", "down", false, myInstance, "hit");
	 *      myInstance.addEventListener("click", handleClick);
	 *      function handleClick(event) {
	 *          // Click Happened.
	 *      }
	 *
	 * @class ButtonHelper
	 * @param {Sprite|MovieClip} target The instance to manage.
	 * @param {String} [outLabel="out"] The label or animation to go to when the user rolls out of the button.
	 * @param {String} [overLabel="over"] The label or animation to go to when the user rolls over the button.
	 * @param {String} [downLabel="down"] The label or animation to go to when the user presses the button.
	 * @param {Boolean} [play=false] If the helper should call "gotoAndPlay" or "gotoAndStop" on the button when changing
	 * states.
	 * @param {DisplayObject} [hitArea] An optional item to use as the hit state for the button. If this is not defined,
	 * then the button's visible states will be used instead. Note that the same instance as the "target" argument can be
	 * used for the hitState.
	 * @param {String} [hitLabel] The label or animation on the hitArea instance that defines the hitArea bounds. If this is
	 * null, then the default state of the hitArea will be used. *
	 * @constructor
	 */
	function ButtonHelper(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
		if (!target.addEventListener) { return; }
	
	
	// public properties:
		/**
		 * The target for this button helper.
		 * @property target
		 * @type MovieClip | Sprite
		 * @readonly
		 **/
		this.target = target;
	
		/**
		 * The label name or frame number to display when the user mouses out of the target. Defaults to "over".
		 * @property overLabel
		 * @type String | Number
		 **/
		this.overLabel = overLabel == null ? "over" : overLabel;
	
		/**
		 * The label name or frame number to display when the user mouses over the target. Defaults to "out".
		 * @property outLabel
		 * @type String | Number
		 **/
		this.outLabel = outLabel == null ? "out" : outLabel;
	
		/**
		 * The label name or frame number to display when the user presses on the target. Defaults to "down".
		 * @property downLabel
		 * @type String | Number
		 **/
		this.downLabel = downLabel == null ? "down" : downLabel;
	
		/**
		 * If true, then ButtonHelper will call gotoAndPlay, if false, it will use gotoAndStop. Default is false.
		 * @property play
		 * @default false
		 * @type Boolean
		 **/
		this.play = play;
		
		
	//  private properties
		/**
		 * @property _isPressed
		 * @type Boolean
		 * @protected
		 **/
		this._isPressed = false;
	
		/**
		 * @property _isOver
		 * @type Boolean
		 * @protected
		 **/
		this._isOver = false;
	
		/**
		 * @property _enabled
		 * @type Boolean
		 * @protected
		 **/
		this._enabled = false;
		
	// setup:
		target.mouseChildren = false; // prevents issues when children are removed from the display list when state changes.
		this.enabled = true;
		this.handleEvent({});
		if (hitArea) {
			if (hitLabel) {
				hitArea.actionsEnabled = false;
				hitArea.gotoAndStop&&hitArea.gotoAndStop(hitLabel);
			}
			target.hitArea = hitArea;
		}
	}
	var p = ButtonHelper.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.

	
// getter / setters:
	/**
	 * Use the {{#crossLink "ButtonHelper/enabled:property"}}{{/crossLink}} property instead.
	 * @method setEnabled
	 * @param {Boolean} value
	 * @deprecated
	 **/
	p.setEnabled = function(value) { // TODO: deprecated.
		if (value == this._enabled) { return; }
		var o = this.target;
		this._enabled = value;
		if (value) {
			o.cursor = "pointer";
			o.addEventListener("rollover", this);
			o.addEventListener("rollout", this);
			o.addEventListener("mousedown", this);
			o.addEventListener("pressup", this);
			if (o._reset) { o.__reset = o._reset; o._reset = this._reset;}
		} else {
			o.cursor = null;
			o.removeEventListener("rollover", this);
			o.removeEventListener("rollout", this);
			o.removeEventListener("mousedown", this);
			o.removeEventListener("pressup", this);
			if (o.__reset) { o._reset = o.__reset; delete(o.__reset); }
		}
	};
	/**
	 * Use the {{#crossLink "ButtonHelper/enabled:property"}}{{/crossLink}} property instead.
	 * @method getEnabled
	 * @return {Boolean}
	 * @deprecated
	 **/
	p.getEnabled = function() {
		return this._enabled;
	};

	/**
	 * Enables or disables the button functionality on the target.
	 * @property enabled
	 * @type {Boolean}
	 **/
	try {
		Object.defineProperties(p, {
			enabled: { get: p.getEnabled, set: p.setEnabled }
		});
	} catch (e) {} // TODO: use Log


// public methods:
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[ButtonHelper]";
	};


// private methods:
	/**
	 * @method handleEvent
	 * @param {Object} evt The mouse event to handle.
	 * @protected
	 **/
	p.handleEvent = function(evt) {
		var label, t = this.target, type = evt.type;
		if (type == "mousedown") {
			this._isPressed = true;
			label = this.downLabel;
		} else if (type == "pressup") {
			this._isPressed = false;
			label = this._isOver ? this.overLabel : this.outLabel;
		} else if (type == "rollover") {
			this._isOver = true;
			label = this._isPressed ? this.downLabel : this.overLabel;
		} else { // rollout and default
			this._isOver = false;
			label = this._isPressed ? this.overLabel : this.outLabel;
		}
		if (this.play) {
			t.gotoAndPlay&&t.gotoAndPlay(label);
		} else {
			t.gotoAndStop&&t.gotoAndStop(label);
		}
	};
	
	/**
	 * Injected into target. Preserves the paused state through a reset.
	 * @method _reset
	 * @protected
	 **/
	p._reset = function() {
		// TODO: explore better ways to handle this issue. This is hacky & disrupts object signatures.
		var p = this.paused;
		this.__reset();
		this.paused = p;
	};


	createjs.ButtonHelper = ButtonHelper;
}());

//##############################################################################
// Shadow.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * This class encapsulates the properties required to define a shadow to apply to a {{#crossLink "DisplayObject"}}{{/crossLink}}
	 * via its <code>shadow</code> property.
	 *
	 * <h4>Example</h4>
	 *
	 *      myImage.shadow = new createjs.Shadow("#000000", 5, 5, 10);
	 *
	 * @class Shadow
	 * @constructor
	 * @param {String} color The color of the shadow. This can be any valid CSS color value.
	 * @param {Number} offsetX The x offset of the shadow in pixels.
	 * @param {Number} offsetY The y offset of the shadow in pixels.
	 * @param {Number} blur The size of the blurring effect.
	 **/
	function Shadow(color, offsetX, offsetY, blur) {
		
		
	// public properties:
		/** 
		 * The color of the shadow. This can be any valid CSS color value.
		 * @property color
		 * @type String
		 * @default null
		 */
		this.color = color||"black";
	
		/** The x offset of the shadow.
		 * @property offsetX
		 * @type Number
		 * @default 0
		 */
		this.offsetX = offsetX||0;
	
		/** The y offset of the shadow.
		 * @property offsetY
		 * @type Number
		 * @default 0
		 */
		this.offsetY = offsetY||0;
	
		/** The blur of the shadow.
		 * @property blur
		 * @type Number
		 * @default 0
		 */
		this.blur = blur||0;
	}
	var p = Shadow.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// static public properties:
	/**
	 * An identity shadow object (all properties are set to 0).
	 * @property identity
	 * @type Shadow
	 * @static
	 * @final
	 * @readonly
	 **/
	Shadow.identity = new Shadow("transparent", 0, 0, 0);


// public methods:
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Shadow]";
	};

	/**
	 * Returns a clone of this Shadow instance.
	 * @method clone
	 * @return {Shadow} A clone of the current Shadow instance.
	 **/
	p.clone = function() {
		return new Shadow(this.color, this.offsetX, this.offsetY, this.blur);
	};
	

	createjs.Shadow = Shadow;
}());

//##############################################################################
// SpriteSheet.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Encapsulates the properties and methods associated with a sprite sheet. A sprite sheet is a series of images (usually
	 * animation frames) combined into a larger image (or images). For example, an animation consisting of eight 100x100
	 * images could be combined into a single 400x200 sprite sheet (4 frames across by 2 high).
	 *
	 * The data passed to the SpriteSheet constructor defines:<ol>
	 * 	<li> The source image or images to use.</li>
	 * 	<li> The positions of individual image frames.</li>
	 * 	<li> Sequences of frames that form named animations. Optional.</li>
	 * 	<li> The target playback framerate. Optional.</li>
	 * </OL>
	 *
	 * <h3>SpriteSheet Format</h3>
	 *
	 * SpriteSheets are an object with two required properties (`images` and `frames`), and two optional properties
	 * (`framerate` and `animations`). This makes them easy to define in javascript code, or in JSON.
	 *
	 * <h4>images</h4>
	 * An array of source images. Images can be either an HTMLImage
	 * instance, or a uri to an image. The former is recommended to control preloading.
	 *
	 * 	images: [image1, "path/to/image2.png"],
	 *
	 * <h4>frames</h4>
	 * Defines the individual frames. There are two supported formats for frame data:<OL>
	 * <LI> when all of the frames are the same size (in a grid), use an object with `width`, `height`, `regX`, `regY`, and `count` properties.
	 * `width` & `height` are required and specify the dimensions of the frames.
	 * `regX` & `regY` indicate the registration point or "origin" of the frames.
	 * `spacing` indicate the spacing between frames.
	 * `margin` specify the margin around the image(s).
	 * `count` allows you to specify the total number of frames in the spritesheet; if omitted, this will be calculated
	 * based on the dimensions of the source images and the frames. Frames will be assigned indexes based on their position
	 * in the source images (left to right, top to bottom).
	 *
	 * 	frames: {width:64, height:64, count:20, regX: 32, regY:64, spacing:0, margin:0}
	 *
	 * <LI> if the frames are of different sizes, use an array of frame definitions. Each definition is itself an array
	 * with 4 required and 3 optional entries, in the order: `x`, `y`, `width`, `height`, `imageIndex`, `regX`, `regY`. The first
	 * four entries are required and define the frame rectangle. The fifth specifies the index of the source image (defaults to 0). The
	 * last two specify the registration point of the frame.
	 *
	 * 	frames: [
	 * 		// x, y, width, height, imageIndex*, regX*, regY*
	 * 		[64, 0, 96, 64],
	 * 		[0, 0, 64, 64, 1, 32, 32]
	 * 		// etc.
	 * 	]
	 *
	 * </OL>
	 *
	 * <h4>animations</h4>
	 * Optional. An object defining sequences of frames to play as named animations. Each property corresponds to an
	 * animation of the same name. Each animation must specify the frames to play, and may
	 * also include a relative playback `speed` (ex. 2 would playback at double speed, 0.5 at half), and
	 * the name of the `next` animation to sequence to after it completes.
	 *
	 * There are three formats supported for defining the frames in an animation, which can be mixed and matched as appropriate:<OL>
	 * <LI> for a single frame animation, you can simply specify the frame index
	 *
	 * 	animations: {
	 * 		sit: 7
	 * 	}
	 *
	 * <LI> for an animation of consecutive frames, you can use an array with two required, and two optional entries
	 * in the order: `start`, `end`, `next`, and `speed`. This will play the frames from start to end inclusive.
	 *
	 * 	animations: {
	 * 		// start, end, next*, speed*
	 * 		run: [0, 8],
	 * 		jump: [9, 12, "run", 2]
	 * 	}
	 *
	 * <LI> for non-consecutive frames, you can use an object with a `frames` property defining an array of frame indexes to
	 * play in order. The object can also specify `next` and `speed` properties.
	 *
	 * 	animations: {
	 * 		walk: {
	 * 			frames: [1,2,3,3,2,1]
	 * 		},
	 * 		shoot: {
	 * 			frames: [1,4,5,6],
	 * 			next: "walk",
	 * 			speed: 0.5
	 * 		}
	 * 	}
	 *
	 * </OL>
	 * <strong>Note:</strong> the `speed` property was added in EaselJS 0.7.0. Earlier versions had a `frequency`
	 * property instead, which was the inverse of `speed`. For example, a value of "4" would be 1/4 normal speed in earlier
	 * versions, but is 4x normal speed in 0.7.0+.
	 *
	 * <h4>framerate</h4>
	 * Optional. Indicates the default framerate to play this spritesheet at in frames per second.
	 * See {{#crossLink "SpriteSheet/framerate:property"}}{{/crossLink}} for more information.
	 *
	 * 	framerate: 20
	 *
	 * <h4>Example</h4>
	 * To define a simple sprite sheet, with a single image "sprites.jpg" arranged in a regular 50x50 grid with three
	 * animations: "stand" showing the first frame, "run" looping frame 1-5 inclusive, and "jump" playing  frame 6-8 and sequencing back to run.
	 *
	 * 	var data = {
	 * 		images: ["sprites.jpg"],
	 * 		frames: {width:50, height:50},
	 * 		animations: {
	 * 			stand:0,
	 * 			run:[1,5],
	 * 			jump:[6,8,"run"]
	 * 		}
	 * 	};
	 * 	var spriteSheet = new createjs.SpriteSheet(data);
	 * 	var animation = new createjs.Sprite(spriteSheet, "run");
	 *
	 *
	 * <strong>Warning:</strong> Images loaded cross-origin will throw cross-origin security errors when interacted with
	 * using a mouse, using methods such as `getObjectUnderPoint`, using filters, or caching. You can get around this by
	 * setting `crossOrigin` flags on your images before passing them to EaselJS, eg: `img.crossOrigin="Anonymous";`
	 *
	 * @class SpriteSheet
	 * @constructor
	 * @param {Object} data An object describing the SpriteSheet data.
	 * @extends EventDispatcher
	 **/
	function SpriteSheet(data) {
		this.EventDispatcher_constructor();


		// public properties:
		/**
		 * Indicates whether all images are finished loading.
		 * @property complete
		 * @type Boolean
		 * @readonly
		 **/
		this.complete = true;

		/**
		 * Specifies the framerate to use by default for Sprite instances using the SpriteSheet. See
		 * Sprite.framerate for more information.
		 * @property framerate
		 * @type Number
		 **/
		this.framerate = 0;


		// private properties:
		/**
		 * @property _animations
		 * @protected
		 * @type Array
		 **/
		this._animations = null;

		/**
		 * @property _frames
		 * @protected
		 * @type Array
		 **/
		this._frames = null;

		/**
		 * @property _images
		 * @protected
		 * @type Array
		 **/
		this._images = null;

		/**
		 * @property _data
		 * @protected
		 * @type Object
		 **/
		this._data = null;

		/**
		 * @property _loadCount
		 * @protected
		 * @type Number
		 **/
		this._loadCount = 0;

		// only used for simple frame defs:
		/**
		 * @property _frameHeight
		 * @protected
		 * @type Number
		 **/
		this._frameHeight = 0;

		/**
		 * @property _frameWidth
		 * @protected
		 * @type Number
		 **/
		this._frameWidth = 0;

		/**
		 * @property _numFrames
		 * @protected
		 * @type Number
		 **/
		this._numFrames = 0;

		/**
		 * @property _regX
		 * @protected
		 * @type Number
		 **/
		this._regX = 0;

		/**
		 * @property _regY
		 * @protected
		 * @type Number
		 **/
		this._regY = 0;

		/**
		 * @property _spacing
		 * @protected
		 * @type Number
		 **/
		this._spacing = 0;

		/**
		 * @property _margin
		 * @protected
		 * @type Number
		 **/
		this._margin = 0;

		// setup:
		this._parseData(data);
	}
	var p = createjs.extend(SpriteSheet, createjs.EventDispatcher);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// events:
	/**
	 * Dispatched when all images are loaded.  Note that this only fires if the images
	 * were not fully loaded when the sprite sheet was initialized. You should check the complete property
	 * to prior to adding a listener. Ex.
	 *
	 * 	var sheet = new SpriteSheet(data);
	 * 	if (!sheet.complete) {
	 * 		// not preloaded, listen for the complete event:
	 * 		sheet.addEventListener("complete", handler);
	 * 	}
	 *
	 * @event complete
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by {{#crossLink "SpriteSheetBuilder"}}{{/crossLink}}
	 * when doing on-demand rendering.
	 * @event getframe
	 * @param {Number} index The frame index.
	 * @param {Object} frame The frame object that getFrame will return.
	 */


// getter / setters:
	/**
	 * Use the {{#crossLink "SpriteSheet/animations:property"}}{{/crossLink}} property instead.
	 * @method getAnimations
	 * @return {Array}
	 * @deprecated
	 **/
	p.getAnimations = function() {
		return this._animations.slice();
	};

	/**
	 * Returns an array of all available animation names available on this sprite sheet as strings.
	 * @property animations
	 * @type {Array}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			animations: { get: p.getAnimations }
		});
	} catch (e) {}


// public methods:
	/**
	 * Returns the total number of frames in the specified animation, or in the whole sprite
	 * sheet if the animation param is omitted. Returns 0 if the spritesheet relies on calculated frame counts, and
	 * the images have not been fully loaded.
	 * @method getNumFrames
	 * @param {String} animation The name of the animation to get a frame count for.
	 * @return {Number} The number of frames in the animation, or in the entire sprite sheet if the animation param is omitted.
	 */
	p.getNumFrames = function(animation) {
		if (animation == null) {
			return this._frames ? this._frames.length : this._numFrames || 0;
		} else {
			var data = this._data[animation];
			if (data == null) { return 0; }
			else { return data.frames.length; }
		}
	};

	/**
	 * Returns an object defining the specified animation. The returned object contains:<UL>
	 * 	<LI>frames: an array of the frame ids in the animation</LI>
	 * 	<LI>speed: the playback speed for this animation</LI>
	 * 	<LI>name: the name of the animation</LI>
	 * 	<LI>next: the default animation to play next. If the animation loops, the name and next property will be the
	 * 	same.</LI>
	 * </UL>
	 * @method getAnimation
	 * @param {String} name The name of the animation to get.
	 * @return {Object} a generic object with frames, speed, name, and next properties.
	 **/
	p.getAnimation = function(name) {
		return this._data[name];
	};

	/**
	 * Returns an object specifying the image and source rect of the specified frame. The returned object has:<UL>
	 * 	<LI>an image property holding a reference to the image object in which the frame is found</LI>
	 * 	<LI>a rect property containing a Rectangle instance which defines the boundaries for the frame within that
	 * 	image.</LI>
	 * 	<LI> A regX and regY property corresponding to the regX/Y values for the frame.
	 * </UL>
	 * @method getFrame
	 * @param {Number} frameIndex The index of the frame.
	 * @return {Object} a generic object with image and rect properties. Returns null if the frame does not exist.
	 **/
	p.getFrame = function(frameIndex) {
		var frame;
		if (this._frames && (frame=this._frames[frameIndex])) { return frame; }
		return null;
	};

	/**
	 * Returns a {{#crossLink "Rectangle"}}{{/crossLink}} instance defining the bounds of the specified frame relative
	 * to the origin. For example, a 90 x 70 frame with a regX of 50 and a regY of 40 would return:
	 *
	 * 	[x=-50, y=-40, width=90, height=70]
	 *
	 * @method getFrameBounds
	 * @param {Number} frameIndex The index of the frame.
	 * @param {Rectangle} [rectangle] A Rectangle instance to copy the values into. By default a new instance is created.
	 * @return {Rectangle} A Rectangle instance. Returns null if the frame does not exist, or the image is not fully loaded.
	 **/
	p.getFrameBounds = function(frameIndex, rectangle) {
		var frame = this.getFrame(frameIndex);
		return frame ? (rectangle||new createjs.Rectangle()).setValues(-frame.regX, -frame.regY, frame.rect.width, frame.rect.height) : null;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[SpriteSheet]";
	};

	/**
	 * SpriteSheet cannot be cloned. A SpriteSheet can be shared by multiple Sprite instances without cloning it.
	 * @method clone
	 **/
	p.clone = function() {
		throw("SpriteSheet cannot be cloned.")
	};

// private methods:
	/**
	 * @method _parseData
	 * @param {Object} data An object describing the SpriteSheet data.
	 * @protected
	 **/
	p._parseData = function(data) {
		var i,l,o,a;
		if (data == null) { return; }

		this.framerate = data.framerate||0;

		// parse images:
		if (data.images && (l=data.images.length) > 0) {
			a = this._images = [];
			for (i=0; i<l; i++) {
				var img = data.images[i];
				if (typeof img == "string") {
					var src = img;
					img = document.createElement("img");
					img.src = src;
				}
				a.push(img);
				if (!img.getContext && !img.naturalWidth) {
					this._loadCount++;
					this.complete = false;
					(function(o) { img.onload = function() { o._handleImageLoad(); } })(this);
				}
			}
		}

		// parse frames:
		if (data.frames == null) { // nothing
		} else if (data.frames instanceof Array) {
			this._frames = [];
			a = data.frames;
			for (i=0,l=a.length;i<l;i++) {
				var arr = a[i];
				this._frames.push({image:this._images[arr[4]?arr[4]:0], rect:new createjs.Rectangle(arr[0],arr[1],arr[2],arr[3]), regX:arr[5]||0, regY:arr[6]||0 });
			}
		} else {
			o = data.frames;
			this._frameWidth = o.width;
			this._frameHeight = o.height;
			this._regX = o.regX||0;
			this._regY = o.regY||0;
			this._spacing = o.spacing||0;
			this._margin = o.margin||0;
			this._numFrames = o.count;
			if (this._loadCount == 0) { this._calculateFrames(); }
		}

		// parse animations:
		this._animations = [];
		if ((o=data.animations) != null) {
			this._data = {};
			var name;
			for (name in o) {
				var anim = {name:name};
				var obj = o[name];
				if (typeof obj == "number") { // single frame
					a = anim.frames = [obj];
				} else if (obj instanceof Array) { // simple
					if (obj.length == 1) { anim.frames = [obj[0]]; }
					else {
						anim.speed = obj[3];
						anim.next = obj[2];
						a = anim.frames = [];
						for (i=obj[0];i<=obj[1];i++) {
							a.push(i);
						}
					}
				} else { // complex
					anim.speed = obj.speed;
					anim.next = obj.next;
					var frames = obj.frames;
					a = anim.frames = (typeof frames == "number") ? [frames] : frames.slice(0);
				}
				if (anim.next === true || anim.next === undefined) { anim.next = name; } // loop
				if (anim.next === false || (a.length < 2 && anim.next == name)) { anim.next = null; } // stop
				if (!anim.speed) { anim.speed = 1; }
				this._animations.push(name);
				this._data[name] = anim;
			}
		}
	};

	/**
	 * @method _handleImageLoad
	 * @protected
	 **/
	p._handleImageLoad = function() {
		if (--this._loadCount == 0) {
			this._calculateFrames();
			this.complete = true;
			this.dispatchEvent("complete");
		}
	};

	/**
	 * @method _calculateFrames
	 * @protected
	 **/
	p._calculateFrames = function() {
		if (this._frames || this._frameWidth == 0) { return; }

		this._frames = [];

		var maxFrames = this._numFrames || 100000; // if we go over this, something is wrong.
		var frameCount = 0, frameWidth = this._frameWidth, frameHeight = this._frameHeight;
		var spacing = this._spacing, margin = this._margin;
		
		imgLoop:
		for (var i=0, imgs=this._images; i<imgs.length; i++) {
			var img = imgs[i], imgW = img.width, imgH = img.height;

			var y = margin;
			while (y <= imgH-margin-frameHeight) {
				var x = margin;
				while (x <= imgW-margin-frameWidth) {
					if (frameCount >= maxFrames) { break imgLoop; }
					frameCount++;
					this._frames.push({
							image: img,
							rect: new createjs.Rectangle(x, y, frameWidth, frameHeight),
							regX: this._regX,
							regY: this._regY
						});
					x += frameWidth+spacing;
				}
				y += frameHeight+spacing;
			}
		}
		this._numFrames = frameCount;
	};


	createjs.SpriteSheet = createjs.promote(SpriteSheet, "EventDispatcher");
}());

//##############################################################################
// Graphics.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * The Graphics class exposes an easy to use API for generating vector drawing instructions and drawing them to a
	 * specified context. Note that you can use Graphics without any dependency on the EaselJS framework by calling {{#crossLink "Graphics/draw"}}{{/crossLink}}
	 * directly, or it can be used with the {{#crossLink "Shape"}}{{/crossLink}} object to draw vector graphics within the
	 * context of an EaselJS display list.
	 *
	 * There are two approaches to working with Graphics object: calling methods on a Graphics instance (the "Graphics API"), or
	 * instantiating Graphics command objects and adding them to the graphics queue via {{#crossLink "Graphics/append"}}{{/crossLink}}.
	 * The former abstracts the latter, simplifying beginning and ending paths, fills, and strokes.
	 *
	 *      var g = new createjs.Graphics();
	 *      g.setStrokeStyle(1);
	 *      g.beginStroke("#000000");
	 *      g.beginFill("red");
	 *      g.drawCircle(0,0,30);
	 *
	 * All drawing methods in Graphics return the Graphics instance, so they can be chained together. For example,
	 * the following line of code would generate the instructions to draw a rectangle with a red stroke and blue fill:
	 *
	 *      myGraphics.beginStroke("red").beginFill("blue").drawRect(20, 20, 100, 50);
	 *
	 * Each graphics API call generates a command object (see below). The last command to be created can be accessed via
	 * {{#crossLink "Graphics/command:property"}}{{/crossLink}}:
	 *
	 *      var fillCommand = myGraphics.beginFill("red").command;
	 *      // ... later, update the fill style/color:
	 *      fillCommand.style = "blue";
	 *      // or change it to a bitmap fill:
	 *      fillCommand.bitmap(myImage);
	 *
	 * For more direct control of rendering, you can instantiate and append command objects to the graphics queue directly. In this case, you
	 * need to manage path creation manually, and ensure that fill/stroke is applied to a defined path:
	 *
	 *      // start a new path. Graphics.beginCmd is a reusable BeginPath instance:
	 *      myGraphics.append(createjs.Graphics.beginCmd);
	 *      // we need to define the path before applying the fill:
	 *      var circle = new createjs.Graphics.Circle(0,0,30);
	 *      myGraphics.append(circle);
	 *      // fill the path we just defined:
	 *      var fill = new createjs.Graphics.Fill("red");
	 *      myGraphics.append(fill);
	 *
	 * These approaches can be used together, for example to insert a custom command:
	 *
	 *      myGraphics.beginFill("red");
	 *      var customCommand = new CustomSpiralCommand(etc);
	 *      myGraphics.append(customCommand);
	 *      myGraphics.beginFill("blue");
	 *      myGraphics.drawCircle(0, 0, 30);
	 *
	 * See {{#crossLink "Graphics/append"}}{{/crossLink}} for more info on creating custom commands.
	 *
	 * <h4>Tiny API</h4>
	 * The Graphics class also includes a "tiny API", which is one or two-letter methods that are shortcuts for all of the
	 * Graphics methods. These methods are great for creating compact instructions, and is used by the Toolkit for CreateJS
	 * to generate readable code. All tiny methods are marked as protected, so you can view them by enabling protected
	 * descriptions in the docs.
	 *
	 * <table>
	 *     <tr><td><b>Tiny</b></td><td><b>Method</b></td><td><b>Tiny</b></td><td><b>Method</b></td></tr>
	 *     <tr><td>mt</td><td>{{#crossLink "Graphics/moveTo"}}{{/crossLink}} </td>
	 *     <td>lt</td> <td>{{#crossLink "Graphics/lineTo"}}{{/crossLink}}</td></tr>
	 *     <tr><td>a/at</td><td>{{#crossLink "Graphics/arc"}}{{/crossLink}} / {{#crossLink "Graphics/arcTo"}}{{/crossLink}} </td>
	 *     <td>bt</td><td>{{#crossLink "Graphics/bezierCurveTo"}}{{/crossLink}} </td></tr>
	 *     <tr><td>qt</td><td>{{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}} (also curveTo)</td>
	 *     <td>r</td><td>{{#crossLink "Graphics/rect"}}{{/crossLink}} </td></tr>
	 *     <tr><td>cp</td><td>{{#crossLink "Graphics/closePath"}}{{/crossLink}} </td>
	 *     <td>c</td><td>{{#crossLink "Graphics/clear"}}{{/crossLink}} </td></tr>
	 *     <tr><td>f</td><td>{{#crossLink "Graphics/beginFill"}}{{/crossLink}} </td>
	 *     <td>lf</td><td>{{#crossLink "Graphics/beginLinearGradientFill"}}{{/crossLink}} </td></tr>
	 *     <tr><td>rf</td><td>{{#crossLink "Graphics/beginRadialGradientFill"}}{{/crossLink}} </td>
	 *     <td>bf</td><td>{{#crossLink "Graphics/beginBitmapFill"}}{{/crossLink}} </td></tr>
	 *     <tr><td>ef</td><td>{{#crossLink "Graphics/endFill"}}{{/crossLink}} </td>
	 *     <td>ss / sd</td><td>{{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} / {{#crossLink "Graphics/setStrokeDash"}}{{/crossLink}} </td></tr>
	 *     <tr><td>s</td><td>{{#crossLink "Graphics/beginStroke"}}{{/crossLink}} </td>
	 *     <td>ls</td><td>{{#crossLink "Graphics/beginLinearGradientStroke"}}{{/crossLink}} </td></tr>
	 *     <tr><td>rs</td><td>{{#crossLink "Graphics/beginRadialGradientStroke"}}{{/crossLink}} </td>
	 *     <td>bs</td><td>{{#crossLink "Graphics/beginBitmapStroke"}}{{/crossLink}} </td></tr>
	 *     <tr><td>es</td><td>{{#crossLink "Graphics/endStroke"}}{{/crossLink}} </td>
	 *     <td>dr</td><td>{{#crossLink "Graphics/drawRect"}}{{/crossLink}} </td></tr>
	 *     <tr><td>rr</td><td>{{#crossLink "Graphics/drawRoundRect"}}{{/crossLink}} </td>
	 *     <td>rc</td><td>{{#crossLink "Graphics/drawRoundRectComplex"}}{{/crossLink}} </td></tr>
	 *     <tr><td>dc</td><td>{{#crossLink "Graphics/drawCircle"}}{{/crossLink}} </td>
	 *     <td>de</td><td>{{#crossLink "Graphics/drawEllipse"}}{{/crossLink}} </td></tr>
	 *     <tr><td>dp</td><td>{{#crossLink "Graphics/drawPolyStar"}}{{/crossLink}} </td>
	 *     <td>p</td><td>{{#crossLink "Graphics/decodePath"}}{{/crossLink}} </td></tr>
	 * </table>
	 *
	 * Here is the above example, using the tiny API instead.
	 *
	 *      myGraphics.s("red").f("blue").r(20, 20, 100, 50);
	 *
	 * @class Graphics
	 * @constructor
	 **/
	function Graphics() {


	// public properties
		/**
		 * Holds a reference to the last command that was created or appended. For example, you could retain a reference
		 * to a Fill command in order to dynamically update the color later by using:
		 * 		myFill = myGraphics.beginFill("red").command;
		 * 		// update color later:
		 * 		myFill.style = "yellow";
		 * @property command
		 * @type Object
		 **/
		this.command = null;


	// private properties
		/**
		 * @property _stroke
		 * @protected
		 * @type {Stroke}
		 **/
		this._stroke = null;

		/**
		 * @property _strokeStyle
		 * @protected
		 * @type {StrokeStyle}
		 **/
		this._strokeStyle = null;
		
		/**
		 * @property _oldStrokeStyle
		 * @protected
		 * @type {StrokeStyle}
		 **/
		this._oldStrokeStyle = null;
		
		/**
		 * @property _strokeDash
		 * @protected
		 * @type {StrokeDash}
		 **/
		this._strokeDash = null;
		
		/**
		 * @property _oldStrokeDash
		 * @protected
		 * @type {StrokeDash}
		 **/
		this._oldStrokeDash = null;

		/**
		 * @property _strokeIgnoreScale
		 * @protected
		 * @type Boolean
		 **/
		this._strokeIgnoreScale = false;

		/**
		 * @property _fill
		 * @protected
		 * @type {Fill}
		 **/
		this._fill = null;

		/**
		 * @property _instructions
		 * @protected
		 * @type {Array}
		 **/
		this._instructions = [];

		/**
		 * Indicates the last instruction index that was committed.
		 * @property _commitIndex
		 * @protected
		 * @type {Number}
		 **/
		this._commitIndex = 0;

		/**
		 * Uncommitted instructions.
		 * @property _activeInstructions
		 * @protected
		 * @type {Array}
		 **/
		this._activeInstructions = [];

		/**
		 * This indicates that there have been changes to the activeInstruction list since the last updateInstructions call.
		 * @property _dirty
		 * @protected
		 * @type {Boolean}
		 * @default false
		 **/
		this._dirty = false;

		/**
		 * Index to draw from if a store operation has happened.
		 * @property _storeIndex
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._storeIndex = 0;

	// setup:
		this.clear();
	}
	var p = Graphics.prototype;
	var G = Graphics; // shortcut

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// static public methods:
	/**
	 * Returns a CSS compatible color string based on the specified RGB numeric color values in the format
	 * "rgba(255,255,255,1.0)", or if alpha is null then in the format "rgb(255,255,255)". For example,
	 *
	 *      createjs.Graphics.getRGB(50, 100, 150, 0.5);
	 *      // Returns "rgba(50,100,150,0.5)"
	 *
	 * It also supports passing a single hex color value as the first param, and an optional alpha value as the second
	 * param. For example,
	 *
	 *      createjs.Graphics.getRGB(0xFF00FF, 0.2);
	 *      // Returns "rgba(255,0,255,0.2)"
	 *
	 * @method getRGB
	 * @static
	 * @param {Number} r The red component for the color, between 0 and 0xFF (255).
	 * @param {Number} g The green component for the color, between 0 and 0xFF (255).
	 * @param {Number} b The blue component for the color, between 0 and 0xFF (255).
	 * @param {Number} [alpha] The alpha component for the color where 0 is fully transparent and 1 is fully opaque.
	 * @return {String} A CSS compatible color string based on the specified RGB numeric color values in the format
	 * "rgba(255,255,255,1.0)", or if alpha is null then in the format "rgb(255,255,255)".
	 **/
	Graphics.getRGB = function(r, g, b, alpha) {
		if (r != null && b == null) {
			alpha = g;
			b = r&0xFF;
			g = r>>8&0xFF;
			r = r>>16&0xFF;
		}
		if (alpha == null) {
			return "rgb("+r+","+g+","+b+")";
		} else {
			return "rgba("+r+","+g+","+b+","+alpha+")";
		}
	};

	/**
	 * Returns a CSS compatible color string based on the specified HSL numeric color values in the format "hsla(360,100,100,1.0)",
	 * or if alpha is null then in the format "hsl(360,100,100)".
	 *
	 *      createjs.Graphics.getHSL(150, 100, 70);
	 *      // Returns "hsl(150,100,70)"
	 *
	 * @method getHSL
	 * @static
	 * @param {Number} hue The hue component for the color, between 0 and 360.
	 * @param {Number} saturation The saturation component for the color, between 0 and 100.
	 * @param {Number} lightness The lightness component for the color, between 0 and 100.
	 * @param {Number} [alpha] The alpha component for the color where 0 is fully transparent and 1 is fully opaque.
	 * @return {String} A CSS compatible color string based on the specified HSL numeric color values in the format
	 * "hsla(360,100,100,1.0)", or if alpha is null then in the format "hsl(360,100,100)".
	 **/
	Graphics.getHSL = function(hue, saturation, lightness, alpha) {
		if (alpha == null) {
			return "hsl("+(hue%360)+","+saturation+"%,"+lightness+"%)";
		} else {
			return "hsla("+(hue%360)+","+saturation+"%,"+lightness+"%,"+alpha+")";
		}
	};


// static properties:
	/**
	 * A reusable instance of {{#crossLink "Graphics/BeginPath"}}{{/crossLink}} to avoid
	 * unnecessary instantiation.
	 * @property beginCmd
	 * @type {Graphics.BeginPath}
	 * @static
	 **/
	 // defined at the bottom of this file.

	/**
	 * Map of Base64 characters to values. Used by {{#crossLink "Graphics/decodePath"}}{{/crossLink}}.
	 * @property BASE_64
	 * @static
	 * @final
	 * @readonly
	 * @type {Object}
	 **/
	Graphics.BASE_64 = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};

	/**
	 * Maps numeric values for the caps parameter of {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} to
	 * corresponding string values. This is primarily for use with the tiny API. The mappings are as follows: 0 to
	 * "butt", 1 to "round", and 2 to "square".
	 * For example, to set the line caps to "square":
	 *
	 *      myGraphics.ss(16, 2);
	 *
	 * @property STROKE_CAPS_MAP
	 * @static
	 * @final
	 * @readonly
	 * @type {Array}
	 **/
	Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"];

	/**
	 * Maps numeric values for the joints parameter of {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} to
	 * corresponding string values. This is primarily for use with the tiny API. The mappings are as follows: 0 to
	 * "miter", 1 to "round", and 2 to "bevel".
	 * For example, to set the line joints to "bevel":
	 *
	 *      myGraphics.ss(16, 0, 2);
	 *
	 * @property STROKE_JOINTS_MAP
	 * @static
	 * @final
	 * @readonly
	 * @type {Array}
	 **/
	Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];

	/**
	 * @property _ctx
	 * @static
	 * @protected
	 * @type {CanvasRenderingContext2D}
	 **/
	var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
	if (canvas.getContext) {
		Graphics._ctx = canvas.getContext("2d");
		canvas.width = canvas.height = 1;
	}


// getter / setters:
	/**
	 * Use the {{#crossLink "Graphics/instructions:property"}}{{/crossLink}} property instead.
	 * @method getInstructions
	 * @return {Array}
	 * @deprecated
	 **/
	p.getInstructions = function() {
		this._updateInstructions();
		return this._instructions;
	};

	/**
	 * Returns the graphics instructions array. Each entry is a graphics command object (ex. Graphics.Fill, Graphics.Rect)
	 * Modifying the returned array directly is not recommended, and is likely to result in unexpected behaviour.
	 *
	 * This property is mainly intended for introspection of the instructions (ex. for graphics export).
	 * @property instructions
	 * @type {Array}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			instructions: { get: p.getInstructions }
		});
	} catch (e) {}


// public methods:
	/**
	 * Returns true if this Graphics instance has no drawing commands.
	 * @method isEmpty
	 * @return {Boolean} Returns true if this Graphics instance has no drawing commands.
	 **/
	p.isEmpty = function() {
		return !(this._instructions.length || this._activeInstructions.length);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Object} data Optional data that is passed to graphics command exec methods. When called from a Shape instance, the shape passes itself as the data parameter. This can be used by custom graphic commands to insert contextual data.
	 **/
	p.draw = function(ctx, data) {
		this._updateInstructions();
		var instr = this._instructions;
		for (var i=this._storeIndex, l=instr.length; i<l; i++) {
			instr[i].exec(ctx, data);
		}
	};

	/**
	 * Draws only the path described for this Graphics instance, skipping any non-path instructions, including fill and
	 * stroke descriptions. Used for <code>DisplayObject.mask</code> to draw the clipping path, for example.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method drawAsPath
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 **/
	p.drawAsPath = function(ctx) {
		this._updateInstructions();
		var instr, instrs = this._instructions;
		for (var i=this._storeIndex, l=instrs.length; i<l; i++) {
			// the first command is always a beginPath command.
			if ((instr = instrs[i]).path !== false) { instr.exec(ctx); }
		}
	};


// public methods that map directly to context 2D calls:
	/**
	 * Moves the drawing point to the specified position. A tiny API method "mt" also exists.
	 * @method moveTo
	 * @param {Number} x The x coordinate the drawing point should move to.
	 * @param {Number} y The y coordinate the drawing point should move to.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls).
	 * @chainable
	 **/
	p.moveTo = function(x, y) {
		return this.append(new G.MoveTo(x,y), true);
	};

	/**
	 * Draws a line from the current drawing point to the specified position, which become the new current drawing
	 * point. A tiny API method "lt" also exists.
	 *
	 * For detailed information, read the
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#complex-shapes-(paths)">
	 * whatwg spec</a>.
	 * @method lineTo
	 * @param {Number} x The x coordinate the drawing point should draw to.
	 * @param {Number} y The y coordinate the drawing point should draw to.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.lineTo = function(x, y) {
		return this.append(new G.LineTo(x,y));
	};

	/**
	 * Draws an arc with the specified control points and radius.  For detailed information, read the
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-arcto">
	 * whatwg spec</a>. A tiny API method "at" also exists.
	 * @method arcTo
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} x2
	 * @param {Number} y2
	 * @param {Number} radius
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.arcTo = function(x1, y1, x2, y2, radius) {
		return this.append(new G.ArcTo(x1, y1, x2, y2, radius));
	};

	/**
	 * Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y). For
	 * example, to draw a full circle with a radius of 20 centered at (100, 100):
	 *
	 *      arc(100, 100, 20, 0, Math.PI*2);
	 *
	 * For detailed information, read the
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-arc">whatwg spec</a>.
	 * A tiny API method "a" also exists.
	 * @method arc
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} startAngle Measured in radians.
	 * @param {Number} endAngle Measured in radians.
	 * @param {Boolean} anticlockwise
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
		return this.append(new G.Arc(x, y, radius, startAngle, endAngle, anticlockwise));
	};

	/**
	 * Draws a quadratic curve from the current drawing point to (x, y) using the control point (cpx, cpy). For detailed
	 * information, read the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-quadraticcurveto">
	 * whatwg spec</a>. A tiny API method "qt" also exists.
	 * @method quadraticCurveTo
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.quadraticCurveTo = function(cpx, cpy, x, y) {
		return this.append(new G.QuadraticCurveTo(cpx, cpy, x, y));
	};

	/**
	 * Draws a bezier curve from the current drawing point to (x, y) using the control points (cp1x, cp1y) and (cp2x,
	 * cp2y). For detailed information, read the
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-beziercurveto">
	 * whatwg spec</a>. A tiny API method "bt" also exists.
	 * @method bezierCurveTo
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
		return this.append(new G.BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y));
	};

	/**
	 * Draws a rectangle at (x, y) with the specified width and height using the current fill and/or stroke.
	 * For detailed information, read the
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-rect">
	 * whatwg spec</a>. A tiny API method "r" also exists.
	 * @method rect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.rect = function(x, y, w, h) {
		return this.append(new G.Rect(x, y, w, h));
	};

	/**
	 * Closes the current path, effectively drawing a line from the current drawing point to the first drawing point specified
	 * since the fill or stroke was last set. A tiny API method "cp" also exists.
	 * @method closePath
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.closePath = function() {
		return this._activeInstructions.length ? this.append(new G.ClosePath()) : this;
	};


// public methods that roughly map to Flash graphics APIs:
	/**
	 * Clears all drawing instructions, effectively resetting this Graphics instance. Any line and fill styles will need
	 * to be redefined to draw shapes following a clear call. A tiny API method "c" also exists.
	 * @method clear
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.clear = function() {
		this._instructions.length = this._activeInstructions.length = this._commitIndex = 0;
		this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null;
		this._dirty = this._strokeIgnoreScale = false;
		return this;
	};

	/**
	 * Begins a fill with the specified color. This ends the current sub-path. A tiny API method "f" also exists.
	 * @method beginFill
	 * @param {String} color A CSS compatible color value (ex. "red", "#FF0000", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no fill.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginFill = function(color) {
		return this._setFill(color ? new G.Fill(color) : null);
	};

	/**
	 * Begins a linear gradient fill defined by the line (x0, y0) to (x1, y1). This ends the current sub-path. For
	 * example, the following code defines a black to white vertical gradient ranging from 20px to 120px, and draws a
	 * square to display it:
	 *
	 *      myGraphics.beginLinearGradientFill(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
	 *
	 * A tiny API method "lf" also exists.
	 * @method beginLinearGradientFill
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define a gradient
	 * drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1, 0.9] would draw
	 * the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
		return this._setFill(new G.Fill().linearGradient(colors, ratios, x0, y0, x1, y1));
	};

	/**
	 * Begins a radial gradient fill. This ends the current sub-path. For example, the following code defines a red to
	 * blue radial gradient centered at (100, 100), with a radius of 50, and draws a circle to display it:
	 *
	 *      myGraphics.beginRadialGradientFill(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50).drawCircle(100, 100, 50);
	 *
	 * A tiny API method "rf" also exists.
	 * @method beginRadialGradientFill
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		return this._setFill(new G.Fill().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
	};

	/**
	 * Begins a pattern fill using the specified image. This ends the current sub-path. A tiny API method "bf" also
	 * exists.
	 * @method beginBitmapFill
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern. Must be loaded prior to creating a bitmap fill, or the fill will be empty.
	 * @param {String} repetition Optional. Indicates whether to repeat the image in the fill area. One of "repeat",
	 * "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat". Note that Firefox does not support "repeat-x" or
	 * "repeat-y" (latest tests were in FF 20.0), and will default to "repeat".
	 * @param {Matrix2D} matrix Optional. Specifies a transformation matrix for the bitmap fill. This transformation
	 * will be applied relative to the parent transform.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginBitmapFill = function(image, repetition, matrix) {
		return this._setFill(new G.Fill(null,matrix).bitmap(image, repetition));
	};

	/**
	 * Ends the current sub-path, and begins a new one with no fill. Functionally identical to <code>beginFill(null)</code>.
	 * A tiny API method "ef" also exists.
	 * @method endFill
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.endFill = function() {
		return this.beginFill();
	};

	/**
	 * Sets the stroke style. Like all drawing methods, this can be chained, so you can define
	 * the stroke style and color in a single line of code like so:
	 *
	 * 	myGraphics.setStrokeStyle(8,"round").beginStroke("#F00");
	 *
	 * A tiny API method "ss" also exists.
	 * @method setStrokeStyle
	 * @param {Number} thickness The width of the stroke.
	 * @param {String | Number} [caps=0] Indicates the type of caps to use at the end of lines. One of butt,
	 * round, or square. Defaults to "butt". Also accepts the values 0 (butt), 1 (round), and 2 (square) for use with
	 * the tiny API.
	 * @param {String | Number} [joints=0] Specifies the type of joints that should be used where two lines meet.
	 * One of bevel, round, or miter. Defaults to "miter". Also accepts the values 0 (miter), 1 (round), and 2 (bevel)
	 * for use with the tiny API.
	 * @param {Number} [miterLimit=10] If joints is set to "miter", then you can specify a miter limit ratio which
	 * controls at what point a mitered joint will be clipped.
	 * @param {Boolean} [ignoreScale=false] If true, the stroke will be drawn at the specified thickness regardless
	 * of active transformations.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
		this._updateInstructions(true);
		this._strokeStyle = this.command = new G.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);

		// ignoreScale lives on Stroke, not StrokeStyle, so we do a little trickery:
		if (this._stroke) { this._stroke.ignoreScale = ignoreScale; }
		this._strokeIgnoreScale = ignoreScale;
		return this;
	};
	
	/**
	 * Sets or clears the stroke dash pattern.
	 *
	 * 	myGraphics.setStrokeDash([20, 10], 0);
	 *
	 * A tiny API method `sd` also exists.
	 * @method setStrokeDash
	 * @param {Array} [segments] An array specifying the dash pattern, alternating between line and gap.
	 * For example, `[20,10]` would create a pattern of 20 pixel lines with 10 pixel gaps between them.
	 * Passing null or an empty array will clear the existing stroke dash.
	 * @param {Number} [offset=0] The offset of the dash pattern. For example, you could increment this value to create a "marching ants" effect.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.setStrokeDash = function(segments, offset) {
		this._updateInstructions(true);
		this._strokeDash = this.command = new G.StrokeDash(segments, offset);
		return this;
	};

	/**
	 * Begins a stroke with the specified color. This ends the current sub-path. A tiny API method "s" also exists.
	 * @method beginStroke
	 * @param {String} color A CSS compatible color value (ex. "#FF0000", "red", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no stroke.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginStroke = function(color) {
		return this._setStroke(color ? new G.Stroke(color) : null);
	};

	/**
	 * Begins a linear gradient stroke defined by the line (x0, y0) to (x1, y1). This ends the current sub-path. For
	 * example, the following code defines a black to white vertical gradient ranging from 20px to 120px, and draws a
	 * square to display it:
	 *
	 *      myGraphics.setStrokeStyle(10).
	 *          beginLinearGradientStroke(["#000","#FFF"], [0, 1], 0, 20, 0, 120).drawRect(20, 20, 120, 120);
	 *
	 * A tiny API method "ls" also exists.
	 * @method beginLinearGradientStroke
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
		return this._setStroke(new G.Stroke().linearGradient(colors, ratios, x0, y0, x1, y1));
	};

	/**
	 * Begins a radial gradient stroke. This ends the current sub-path. For example, the following code defines a red to
	 * blue radial gradient centered at (100, 100), with a radius of 50, and draws a rectangle to display it:
	 *
	 *      myGraphics.setStrokeStyle(10)
	 *          .beginRadialGradientStroke(["#F00","#00F"], [0, 1], 100, 100, 0, 100, 100, 50)
	 *          .drawRect(50, 90, 150, 110);
	 *
	 * A tiny API method "rs" also exists.
	 * @method beginRadialGradientStroke
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%, then draw the second color
	 * to 100%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		return this._setStroke(new G.Stroke().radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
	};

	/**
	 * Begins a pattern fill using the specified image. This ends the current sub-path. Note that unlike bitmap fills,
	 * strokes do not currently support a matrix parameter due to limitations in the canvas API. A tiny API method "bs"
	 * also exists.
	 * @method beginBitmapStroke
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern. Must be loaded prior to creating a bitmap fill, or the fill will be empty.
	 * @param {String} [repetition=repeat] Optional. Indicates whether to repeat the image in the fill area. One of
	 * "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat".
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.beginBitmapStroke = function(image, repetition) {
		// NOTE: matrix is not supported for stroke because transforms on strokes also affect the drawn stroke width.
		return this._setStroke(new G.Stroke().bitmap(image, repetition));
	};

	/**
	 * Ends the current sub-path, and begins a new one with no stroke. Functionally identical to <code>beginStroke(null)</code>.
	 * A tiny API method "es" also exists.
	 * @method endStroke
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.endStroke = function() {
		return this.beginStroke();
	};

	/**
	 * Maps the familiar ActionScript <code>curveTo()</code> method to the functionally similar {{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}}
	 * method.
	 * @method quadraticCurveTo
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.curveTo = p.quadraticCurveTo;

	/**
	 *
	 * Maps the familiar ActionScript <code>drawRect()</code> method to the functionally similar {{#crossLink "Graphics/rect"}}{{/crossLink}}
	 * method.
	 * @method drawRect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawRect = p.rect;

	/**
	 * Draws a rounded rectangle with all corners with the specified radius.
	 * @method drawRoundRect
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radius Corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawRoundRect = function(x, y, w, h, radius) {
		return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
	};

	/**
	 * Draws a rounded rectangle with different corner radii. Supports positive and negative corner radii. A tiny API
	 * method "rc" also exists.
	 * @method drawRoundRectComplex
	 * @param {Number} x The horizontal coordinate to draw the round rect.
	 * @param {Number} y The vertical coordinate to draw the round rect.
	 * @param {Number} w The width of the round rect.
	 * @param {Number} h The height of the round rect.
	 * @param {Number} radiusTL Top left corner radius.
	 * @param {Number} radiusTR Top right corner radius.
	 * @param {Number} radiusBR Bottom right corner radius.
	 * @param {Number} radiusBL Bottom left corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
		return this.append(new G.RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL));
	};

	/**
	 * Draws a circle with the specified radius at (x, y).
	 *
	 *      var g = new createjs.Graphics();
	 *	    g.setStrokeStyle(1);
	 *	    g.beginStroke(createjs.Graphics.getRGB(0,0,0));
	 *	    g.beginFill(createjs.Graphics.getRGB(255,0,0));
	 *	    g.drawCircle(0,0,3);
	 *
	 *	    var s = new createjs.Shape(g);
	 *		s.x = 100;
	 *		s.y = 100;
	 *
	 *	    stage.addChild(s);
	 *	    stage.update();
	 *
	 * A tiny API method "dc" also exists.
	 * @method drawCircle
	 * @param {Number} x x coordinate center point of circle.
	 * @param {Number} y y coordinate center point of circle.
	 * @param {Number} radius Radius of circle.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawCircle = function(x, y, radius) {
		return this.append(new G.Circle(x, y, radius));
	};

	/**
	 * Draws an ellipse (oval) with a specified width (w) and height (h). Similar to {{#crossLink "Graphics/drawCircle"}}{{/crossLink}},
	 * except the width and height can be different. A tiny API method "de" also exists.
	 * @method drawEllipse
	 * @param {Number} x The left coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from center.
	 * @param {Number} y The top coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from the center.
	 * @param {Number} w The height (horizontal diameter) of the ellipse. The horizontal radius will be half of this
	 * number.
	 * @param {Number} h The width (vertical diameter) of the ellipse. The vertical radius will be half of this number.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawEllipse = function(x, y, w, h) {
		return this.append(new G.Ellipse(x, y, w, h));
	};

	/**
	 * Draws a star if pointSize is greater than 0, or a regular polygon if pointSize is 0 with the specified number of
	 * points. For example, the following code will draw a familiar 5 pointed star shape centered at 100, 100 and with a
	 * radius of 50:
	 *
	 *      myGraphics.beginFill("#FF0").drawPolyStar(100, 100, 50, 5, 0.6, -90);
	 *      // Note: -90 makes the first point vertical
	 *
	 * A tiny API method "dp" also exists.
	 *
	 * @method drawPolyStar
	 * @param {Number} x Position of the center of the shape.
	 * @param {Number} y Position of the center of the shape.
	 * @param {Number} radius The outer radius of the shape.
	 * @param {Number} sides The number of points on the star or sides on the polygon.
	 * @param {Number} pointSize The depth or "pointy-ness" of the star points. A pointSize of 0 will draw a regular
	 * polygon (no points), a pointSize of 1 will draw nothing because the points are infinitely pointy.
	 * @param {Number} angle The angle of the first point / corner. For example a value of 0 will draw the first point
	 * directly to the right of the center.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
		return this.append(new G.PolyStar(x, y, radius, sides, pointSize, angle));
	};

	// TODO: deprecated.
	/**
	 * Removed in favour of using custom command objects with {{#crossLink "Graphics/append"}}{{/crossLink}}.
	 * @method inject
	 * @deprecated
	 **/

	/**
	 * Appends a graphics command object to the graphics queue. Command objects expose an "exec" method
	 * that accepts two parameters: the Context2D to operate on, and an arbitrary data object passed into
	 * {{#crossLink "Graphics/draw"}}{{/crossLink}}. The latter will usually be the Shape instance that called draw.
	 *
	 * This method is used internally by Graphics methods, such as drawCircle, but can also be used directly to insert
	 * built-in or custom graphics commands. For example:
	 *
	 * 		// attach data to our shape, so we can access it during the draw:
	 * 		myShape.color = "red";
	 *
	 * 		// append a Circle command object:
	 * 		myShape.graphics.append(new Graphics.Circle(50, 50, 30));
	 *
	 * 		// append a custom command object with an exec method that sets the fill style
	 * 		// based on the shape's data, and then fills the circle.
	 * 		myShape.graphics.append({exec:function(ctx, shape) {
	 * 			ctx.fillStyle = shape.color;
	 * 			ctx.fill();
	 * 		}});
	 *
	 * @method append
	 * @param {Object} command A graphics command object exposing an "exec" method.
	 * @param {boolean} clean The clean param is primarily for internal use. A value of true indicates that a command does not generate a path that should be stroked or filled.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.append = function(command, clean) {
		this._activeInstructions.push(command);
		this.command = command;
		if (!clean) { this._dirty = true; }
		return this;
	};

	/**
	 * Decodes a compact encoded path string into a series of draw instructions.
	 * This format is not intended to be human readable, and is meant for use by authoring tools.
	 * The format uses a base64 character set, with each character representing 6 bits, to define a series of draw
	 * commands.
	 *
	 * Each command is comprised of a single "header" character followed by a variable number of alternating x and y
	 * position values. Reading the header bits from left to right (most to least significant): bits 1 to 3 specify the
	 * type of operation (0-moveTo, 1-lineTo, 2-quadraticCurveTo, 3-bezierCurveTo, 4-closePath, 5-7 unused). Bit 4
	 * indicates whether position values use 12 bits (2 characters) or 18 bits (3 characters), with a one indicating the
	 * latter. Bits 5 and 6 are currently unused.
	 *
	 * Following the header is a series of 0 (closePath), 2 (moveTo, lineTo), 4 (quadraticCurveTo), or 6 (bezierCurveTo)
	 * parameters. These parameters are alternating x/y positions represented by 2 or 3 characters (as indicated by the
	 * 4th bit in the command char). These characters consist of a 1 bit sign (1 is negative, 0 is positive), followed
	 * by an 11 (2 char) or 17 (3 char) bit integer value. All position values are in tenths of a pixel. Except in the
	 * case of move operations which are absolute, this value is a delta from the previous x or y position (as
	 * appropriate).
	 *
	 * For example, the string "A3cAAMAu4AAA" represents a line starting at -150,0 and ending at 150,0.
	 * <br />A - bits 000000. First 3 bits (000) indicate a moveTo operation. 4th bit (0) indicates 2 chars per
	 * parameter.
	 * <br />n0 - 110111011100. Absolute x position of -150.0px. First bit indicates a negative value, remaining bits
	 * indicate 1500 tenths of a pixel.
	 * <br />AA - 000000000000. Absolute y position of 0.
	 * <br />I - 001100. First 3 bits (001) indicate a lineTo operation. 4th bit (1) indicates 3 chars per parameter.
	 * <br />Au4 - 000000101110111000. An x delta of 300.0px, which is added to the previous x value of -150.0px to
	 * provide an absolute position of +150.0px.
	 * <br />AAA - 000000000000000000. A y delta value of 0.
	 *
	 * A tiny API method "p" also exists.
	 * @method decodePath
	 * @param {String} str The path string to decode.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.decodePath = function(str) {
		var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
		var paramCount = [2, 2, 4, 6, 0];
		var i=0, l=str.length;
		var params = [];
		var x=0, y=0;
		var base64 = Graphics.BASE_64;

		while (i<l) {
			var c = str.charAt(i);
			var n = base64[c];
			var fi = n>>3; // highest order bits 1-3 code for operation.
			var f = instructions[fi];
			// check that we have a valid instruction & that the unused bits are empty:
			if (!f || (n&3)) { throw("bad path data (@"+i+"): "+c); }
			var pl = paramCount[fi];
			if (!fi) { x=y=0; } // move operations reset the position.
			params.length = 0;
			i++;
			var charCount = (n>>2&1)+2;  // 4th header bit indicates number size for this operation.
			for (var p=0; p<pl; p++) {
				var num = base64[str.charAt(i)];
				var sign = (num>>5) ? -1 : 1;
				num = ((num&31)<<6)|(base64[str.charAt(i+1)]);
				if (charCount == 3) { num = (num<<6)|(base64[str.charAt(i+2)]); }
				num = sign*num/10;
				if (p%2) { x = (num += x); }
				else { y = (num += y); }
				params[p] = num;
				i += charCount;
			}
			f.apply(this,params);
		}
		return this;
	};

	/**
	 * Stores all graphics commands so they won't be executed in future draws. Calling store() a second time adds to
	 * the existing store. This also affects `drawAsPath()`.
	 *
	 * This is useful in cases where you are creating vector graphics in an iterative manner (ex. generative art), so
	 * that only new graphics need to be drawn (which can provide huge performance benefits), but you wish to retain all
	 * of the vector instructions for later use (ex. scaling, modifying, or exporting).
	 *
	 * Note that calling store() will force the active path (if any) to be ended in a manner similar to changing
	 * the fill or stroke.
	 *
	 * For example, consider a application where the user draws lines with the mouse. As each line segment (or collection of
	 * segments) are added to a Shape, it can be rasterized using {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}},
	 * and then stored, so that it can be redrawn at a different scale when the application is resized, or exported to SVG.
	 *
	 * 	// set up cache:
	 * 	myShape.cache(0,0,500,500,scale);
	 *
	 * 	// when the user drags, draw a new line:
	 * 	myShape.graphics.moveTo(oldX,oldY).lineTo(newX,newY);
	 * 	// then draw it into the existing cache:
	 * 	myShape.updateCache("source-over");
	 * 	// store the new line, so it isn't redrawn next time:
	 * 	myShape.store();
	 *
	 * 	// then, when the window resizes, we can re-render at a different scale:
	 * 	// first, unstore all our lines:
	 * 	myShape.unstore();
	 * 	// then cache using the new scale:
	 * 	myShape.cache(0,0,500,500,newScale);
	 * 	// finally, store the existing commands again:
	 * 	myShape.store();
	 *
	 * @method store
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.store = function() {
		this._updateInstructions(true);
		this._storeIndex = this._instructions.length;
		return this;
	};

	/**
	 * Unstores any graphics commands that were previously stored using {{#crossLink "Graphics/store"}}{{/crossLink}}
	 * so that they will be executed in subsequent draw calls.
	 *
	 * @method unstore
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.unstore = function() {
		this._storeIndex = 0;
		return this;
	};

	/**
	 * Returns a clone of this Graphics instance. Note that the individual command objects are not cloned.
	 * @method clone
	 * @return {Graphics} A clone of the current Graphics instance.
	 **/
	p.clone = function() {
		var o = new Graphics();
		o.command = this.command;
		o._stroke = this._stroke;
		o._strokeStyle = this._strokeStyle;
		o._strokeDash = this._strokeDash;
		o._strokeIgnoreScale = this._strokeIgnoreScale;
		o._fill = this._fill;
		o._instructions = this._instructions.slice();
		o._commitIndex = this._commitIndex;
		o._activeInstructions = this._activeInstructions.slice();
		o._dirty = this._dirty;
		o._storeIndex = this._storeIndex;
		return o;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Graphics]";
	};


// tiny API:
	/**
	 * Shortcut to moveTo.
	 * @method mt
	 * @param {Number} x The x coordinate the drawing point should move to.
	 * @param {Number} y The y coordinate the drawing point should move to.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls).
	 * @chainable
	 * @protected
	 **/
	p.mt = p.moveTo;

	/**
	 * Shortcut to lineTo.
	 * @method lt
	 * @param {Number} x The x coordinate the drawing point should draw to.
	 * @param {Number} y The y coordinate the drawing point should draw to.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.lt = p.lineTo;

	/**
	 * Shortcut to arcTo.
	 * @method at
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} x2
	 * @param {Number} y2
	 * @param {Number} radius
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.at = p.arcTo;

	/**
	 * Shortcut to bezierCurveTo.
	 * @method bt
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.bt = p.bezierCurveTo;

	/**
	 * Shortcut to quadraticCurveTo / curveTo.
	 * @method qt
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 * @protected
	 * @chainable
	 **/
	p.qt = p.quadraticCurveTo;

	/**
	 * Shortcut to arc.
	 * @method a
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} startAngle Measured in radians.
	 * @param {Number} endAngle Measured in radians.
	 * @param {Boolean} anticlockwise
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @protected
	 * @chainable
	 **/
	p.a = p.arc;

	/**
	 * Shortcut to rect.
	 * @method r
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.r = p.rect;

	/**
	 * Shortcut to closePath.
	 * @method cp
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.cp = p.closePath;

	/**
	 * Shortcut to clear.
	 * @method c
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.c = p.clear;

	/**
	 * Shortcut to beginFill.
	 * @method f
	 * @param {String} color A CSS compatible color value (ex. "red", "#FF0000", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no fill.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.f = p.beginFill;

	/**
	 * Shortcut to beginLinearGradientFill.
	 * @method lf
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define a gradient
	 * drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1, 0.9] would draw
	 * the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.lf = p.beginLinearGradientFill;

	/**
	 * Shortcut to beginRadialGradientFill.
	 * @method rf
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rf = p.beginRadialGradientFill;

	/**
	 * Shortcut to beginBitmapFill.
	 * @method bf
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern.
	 * @param {String} repetition Optional. Indicates whether to repeat the image in the fill area. One of "repeat",
	 * "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat". Note that Firefox does not support "repeat-x" or
	 * "repeat-y" (latest tests were in FF 20.0), and will default to "repeat".
	 * @param {Matrix2D} matrix Optional. Specifies a transformation matrix for the bitmap fill. This transformation
	 * will be applied relative to the parent transform.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.bf = p.beginBitmapFill;

	/**
	 * Shortcut to endFill.
	 * @method ef
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.ef = p.endFill;

	/**
	 * Shortcut to setStrokeStyle.
	 * @method ss
	 * @param {Number} thickness The width of the stroke.
	 * @param {String | Number} [caps=0] Indicates the type of caps to use at the end of lines. One of butt,
	 * round, or square. Defaults to "butt". Also accepts the values 0 (butt), 1 (round), and 2 (square) for use with
	 * the tiny API.
	 * @param {String | Number} [joints=0] Specifies the type of joints that should be used where two lines meet.
	 * One of bevel, round, or miter. Defaults to "miter". Also accepts the values 0 (miter), 1 (round), and 2 (bevel)
	 * for use with the tiny API.
	 * @param {Number} [miterLimit=10] If joints is set to "miter", then you can specify a miter limit ratio which
	 * controls at what point a mitered joint will be clipped.
	 * @param {Boolean} [ignoreScale=false] If true, the stroke will be drawn at the specified thickness regardless
	 * of active transformations.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.ss = p.setStrokeStyle;
	
	/**
	 * Shortcut to setStrokeDash.
	 * @method sd
	 * @param {Array} [segments] An array specifying the dash pattern, alternating between line and gap.
	 * For example, [20,10] would create a pattern of 20 pixel lines with 10 pixel gaps between them.
	 * Passing null or an empty array will clear any existing dash.
	 * @param {Number} [offset=0] The offset of the dash pattern. For example, you could increment this value to create a "marching ants" effect.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.sd = p.setStrokeDash;

	/**
	 * Shortcut to beginStroke.
	 * @method s
	 * @param {String} color A CSS compatible color value (ex. "#FF0000", "red", or "rgba(255,0,0,0.5)"). Setting to
	 * null will result in no stroke.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.s = p.beginStroke;

	/**
	 * Shortcut to beginLinearGradientStroke.
	 * @method ls
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%.
	 * @param {Number} x0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} y0 The position of the first point defining the line that defines the gradient direction and size.
	 * @param {Number} x1 The position of the second point defining the line that defines the gradient direction and size.
	 * @param {Number} y1 The position of the second point defining the line that defines the gradient direction and size.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.ls = p.beginLinearGradientStroke;

	/**
	 * Shortcut to beginRadialGradientStroke.
	 * @method rs
	 * @param {Array} colors An array of CSS compatible color values. For example, ["#F00","#00F"] would define
	 * a gradient drawing from red to blue.
	 * @param {Array} ratios An array of gradient positions which correspond to the colors. For example, [0.1,
	 * 0.9] would draw the first color to 10% then interpolating to the second color at 90%, then draw the second color
	 * to 100%.
	 * @param {Number} x0 Center position of the inner circle that defines the gradient.
	 * @param {Number} y0 Center position of the inner circle that defines the gradient.
	 * @param {Number} r0 Radius of the inner circle that defines the gradient.
	 * @param {Number} x1 Center position of the outer circle that defines the gradient.
	 * @param {Number} y1 Center position of the outer circle that defines the gradient.
	 * @param {Number} r1 Radius of the outer circle that defines the gradient.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rs = p.beginRadialGradientStroke;

	/**
	 * Shortcut to beginBitmapStroke.
	 * @method bs
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image The Image, Canvas, or Video object to use
	 * as the pattern.
	 * @param {String} [repetition=repeat] Optional. Indicates whether to repeat the image in the fill area. One of
	 * "repeat", "repeat-x", "repeat-y", or "no-repeat". Defaults to "repeat".
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.bs = p.beginBitmapStroke;

	/**
	 * Shortcut to endStroke.
	 * @method es
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.es = p.endStroke;

	/**
	 * Shortcut to drawRect.
	 * @method dr
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w Width of the rectangle
	 * @param {Number} h Height of the rectangle
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.dr = p.drawRect;

	/**
	 * Shortcut to drawRoundRect.
	 * @method rr
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radius Corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rr = p.drawRoundRect;

	/**
	 * Shortcut to drawRoundRectComplex.
	 * @method rc
	 * @param {Number} x The horizontal coordinate to draw the round rect.
	 * @param {Number} y The vertical coordinate to draw the round rect.
	 * @param {Number} w The width of the round rect.
	 * @param {Number} h The height of the round rect.
	 * @param {Number} radiusTL Top left corner radius.
	 * @param {Number} radiusTR Top right corner radius.
	 * @param {Number} radiusBR Bottom right corner radius.
	 * @param {Number} radiusBL Bottom left corner radius.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.rc = p.drawRoundRectComplex;

	/**
	 * Shortcut to drawCircle.
	 * @method dc
	 * @param {Number} x x coordinate center point of circle.
	 * @param {Number} y y coordinate center point of circle.
	 * @param {Number} radius Radius of circle.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.dc = p.drawCircle;

	/**
	 * Shortcut to drawEllipse.
	 * @method de
	 * @param {Number} x The left coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from center.
	 * @param {Number} y The top coordinate point of the ellipse. Note that this is different from {{#crossLink "Graphics/drawCircle"}}{{/crossLink}}
	 * which draws from the center.
	 * @param {Number} w The height (horizontal diameter) of the ellipse. The horizontal radius will be half of this
	 * number.
	 * @param {Number} h The width (vertical diameter) of the ellipse. The vertical radius will be half of this number.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.de = p.drawEllipse;

	/**
	 * Shortcut to drawPolyStar.
	 * @method dp
	 * @param {Number} x Position of the center of the shape.
	 * @param {Number} y Position of the center of the shape.
	 * @param {Number} radius The outer radius of the shape.
	 * @param {Number} sides The number of points on the star or sides on the polygon.
	 * @param {Number} pointSize The depth or "pointy-ness" of the star points. A pointSize of 0 will draw a regular
	 * polygon (no points), a pointSize of 1 will draw nothing because the points are infinitely pointy.
	 * @param {Number} angle The angle of the first point / corner. For example a value of 0 will draw the first point
	 * directly to the right of the center.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.dp = p.drawPolyStar;

	/**
	 * Shortcut to decodePath.
	 * @method p
	 * @param {String} str The path string to decode.
	 * @return {Graphics} The Graphics instance the method is called on (useful for chaining calls.)
	 * @chainable
	 * @protected
	 **/
	p.p = p.decodePath;


// private methods:
	/**
	 * @method _updateInstructions
	 * @param commit
	 * @protected
	 **/
	p._updateInstructions = function(commit) {
		var instr = this._instructions, active = this._activeInstructions, commitIndex = this._commitIndex;

		if (this._dirty && active.length) {
			instr.length = commitIndex; // remove old, uncommitted commands
			instr.push(Graphics.beginCmd);

			var l = active.length, ll = instr.length;
			instr.length = ll+l;
			for (var i=0; i<l; i++) { instr[i+ll] = active[i]; }

			if (this._fill) { instr.push(this._fill); }
			if (this._stroke) {
				// doesn't need to be re-applied if it hasn't changed.
				if (this._strokeDash !== this._oldStrokeDash) {
					this._oldStrokeDash = this._strokeDash;
					instr.push(this._strokeDash);
				}
				if (this._strokeStyle !== this._oldStrokeStyle) {
					this._oldStrokeStyle = this._strokeStyle;
					instr.push(this._strokeStyle);
				}
				instr.push(this._stroke);
			}

			this._dirty = false;
		}

		if (commit) {
			active.length = 0;
			this._commitIndex = instr.length;
		}
	};

	/**
	 * @method _setFill
	 * @param fill
	 * @protected
	 **/
	p._setFill = function(fill) {
		this._updateInstructions(true);
		this.command = this._fill = fill;
		return this;
	};

	/**
	 * @method _setStroke
	 * @param stroke
	 * @protected
	 **/
	p._setStroke = function(stroke) {
		this._updateInstructions(true);
		if (this.command = this._stroke = stroke) {
			stroke.ignoreScale = this._strokeIgnoreScale;
		}
		return this;
	};

// Command Objects:
	/**
	 * @namespace Graphics
	 */
	/**
	 * Graphics command object. See {{#crossLink "Graphics/lineTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information. See {{#crossLink "Graphics"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class LineTo
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.LineTo = function(x, y) {
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.lineTo(this.x,this.y); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/moveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class MoveTo
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.MoveTo = function(x, y) {
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.moveTo(this.x, this.y); };


	/**
	 * Graphics command object. See {{#crossLink "Graphics/arcTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class ArcTo
	 * @constructor
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} x2
	 * @param {Number} y2
	 * @param {Number} radius
	 **/
	/**
	 * @property x1
	 * @type Number
	 */
	/**
	 * @property y1
	 * @type Number
	 */
	/**
	 * @property x2
	 * @type Number
	 */
	/**
	 * @property y2
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.ArcTo = function(x1, y1, x2, y2, radius) {
		this.x1 = x1; this.y1 = y1;
		this.x2 = x2; this.y2 = y2;
		this.radius = radius;
	}).prototype.exec = function(ctx) { ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/arc"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Arc
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} startAngle
	 * @param {Number} endAngle
	 * @param {Number} anticlockwise
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * @property startAngle
	 * @type Number
	 */
	/**
	 * @property endAngle
	 * @type Number
	 */
	/**
	 * @property anticlockwise
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.Arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
		this.x = x; this.y = y;
		this.radius = radius;
		this.startAngle = startAngle; this.endAngle = endAngle;
		this.anticlockwise = !!anticlockwise;
	}).prototype.exec = function(ctx) { ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/quadraticCurveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class QuadraticCurveTo
	 * @constructor
	 * @param {Number} cpx
	 * @param {Number} cpy
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property cpx
	 * @type Number
	 */
	/**
	 * @property cpy
	 * @type Number
	 */
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.QuadraticCurveTo = function(cpx, cpy, x, y) {
		this.cpx = cpx; this.cpy = cpy;
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/bezierCurveTo"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class BezierCurveTo
	 * @constructor
	 * @param {Number} cp1x
	 * @param {Number} cp1y
	 * @param {Number} cp2x
	 * @param {Number} cp2y
	 * @param {Number} x
	 * @param {Number} y
	 **/
	/**
	 * @property cp1x
	 * @type Number
	 */
	/**
	 * @property cp1y
	 * @type Number
	 */
	/**
	 * @property cp2x
	 * @type Number
	 */
	/**
	 * @property cp2y
	 * @type Number
	 */
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.BezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
		this.cp1x = cp1x; this.cp1y = cp1y;
		this.cp2x = cp2x; this.cp2y = cp2y;
		this.x = x; this.y = y;
	}).prototype.exec = function(ctx) { ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/rect"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Rect
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property w
	 * @type Number
	 */
	/**
	 * @property h
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.Rect = function(x, y, w, h) {
		this.x = x; this.y = y;
		this.w = w; this.h = h;
	}).prototype.exec = function(ctx) { ctx.rect(this.x, this.y, this.w, this.h); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/closePath"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class ClosePath
	 * @constructor
	 **/
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.ClosePath = function() {
	}).prototype.exec = function(ctx) { ctx.closePath(); };

	/**
	 * Graphics command object to begin a new path. See {{#crossLink "Graphics"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class BeginPath
	 * @constructor
	 **/
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.BeginPath = function() {
	}).prototype.exec = function(ctx) { ctx.beginPath(); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/beginFill"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Fill
	 * @constructor
	 * @param {Object} style A valid Context2D fillStyle.
	 * @param {Matrix2D} matrix
	 **/
	/**
	 * A valid Context2D fillStyle.
	 * @property style
	 * @type Object
	 */
	/**
	 * @property matrix
	 * @type Matrix2D
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	p = (G.Fill = function(style, matrix) {
		this.style = style;
		this.matrix = matrix;
	}).prototype;
	p.exec = function(ctx) {
		if (!this.style) { return; }
		ctx.fillStyle = this.style;
		var mtx = this.matrix;
		if (mtx) { ctx.save(); ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty); }
		ctx.fill();
		if (mtx) { ctx.restore(); }
	};
	/**
	 * Creates a linear gradient style and assigns it to {{#crossLink "Fill/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginLinearGradientFill"}}{{/crossLink}} for more information.
	 * @method linearGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @return {Fill} Returns this Fill object for chaining or assignment.
	 */
	p.linearGradient = function(colors, ratios, x0, y0, x1, y1) {
		var o = this.style =  Graphics._ctx.createLinearGradient(x0, y0, x1, y1);
		for (var i=0, l=colors.length; i<l; i++) { o.addColorStop(ratios[i], colors[i]); }
		o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, x1:x1, y1:y1, type:"linear"};
		return this;
	};
	/**
	 * Creates a radial gradient style and assigns it to {{#crossLink "Fill/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginRadialGradientFill"}}{{/crossLink}} for more information.
	 * @method radialGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} r0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} r1
	 * @return {Fill} Returns this Fill object for chaining or assignment.
	 */
	p.radialGradient = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
		var o = this.style =  Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
		for (var i=0, l=colors.length; i<l; i++) { o.addColorStop(ratios[i], colors[i]); }
		o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, r0:r0, x1:x1, y1:y1, r1:r1, type:"radial"};
		return this;
	};
	/**
	 * Creates a bitmap fill style and assigns it to the {{#crossLink "Fill/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginBitmapFill"}}{{/crossLink}} for more information.
	 * @method bitmap
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement} image  Must be loaded prior to creating a bitmap fill, or the fill will be empty.
	 * @param {String} [repetition] One of: repeat, repeat-x, repeat-y, or no-repeat.
	 * @return {Fill} Returns this Fill object for chaining or assignment.
	 */
	p.bitmap = function(image, repetition) {
		if (image.naturalWidth || image.getContext || image.readyState >= 2) {
			var o = this.style = Graphics._ctx.createPattern(image, repetition || "");
			o.props = {image: image, repetition: repetition, type: "bitmap"};
		}
		return this;
	};
	p.path = false;

	/**
	 * Graphics command object. See {{#crossLink "Graphics/beginStroke"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Stroke
	 * @constructor
	 * @param {Object} style A valid Context2D fillStyle.
	 * @param {Boolean} ignoreScale
	 **/
	/**
	 * A valid Context2D strokeStyle.
	 * @property style
	 * @type Object
	 */
	/**
	 * @property ignoreScale
	 * @type Boolean
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	p = (G.Stroke = function(style, ignoreScale) {
		this.style = style;
		this.ignoreScale = ignoreScale;
	}).prototype;
	p.exec = function(ctx) {
		if (!this.style) { return; }
		ctx.strokeStyle = this.style;
		if (this.ignoreScale) { ctx.save(); ctx.setTransform(1,0,0,1,0,0); }
		ctx.stroke();
		if (this.ignoreScale) { ctx.restore(); }
	};
	/**
	 * Creates a linear gradient style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginLinearGradientStroke"}}{{/crossLink}} for more information.
	 * @method linearGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @return {Fill} Returns this Stroke object for chaining or assignment.
	 */
	p.linearGradient = G.Fill.prototype.linearGradient;
	/**
	 * Creates a radial gradient style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginRadialGradientStroke"}}{{/crossLink}} for more information.
	 * @method radialGradient
	 * @param {Array} colors
	 * @param {Array} ratios
	 * @param {Number} x0
	 * @param {Number} y0
	 * @param {Number} r0
	 * @param {Number} x1
	 * @param {Number} y1
	 * @param {Number} r1
	 * @return {Fill} Returns this Stroke object for chaining or assignment.
	 */
	p.radialGradient = G.Fill.prototype.radialGradient;
	/**
	 * Creates a bitmap fill style and assigns it to {{#crossLink "Stroke/style:property"}}{{/crossLink}}.
	 * See {{#crossLink "Graphics/beginBitmapStroke"}}{{/crossLink}} for more information.
	 * @method bitmap
	 * @param {HTMLImageElement} image
	 * @param {String} [repetition] One of: repeat, repeat-x, repeat-y, or no-repeat.
	 * @return {Fill} Returns this Stroke object for chaining or assignment.
	 */
	p.bitmap = G.Fill.prototype.bitmap;
	p.path = false;

	/**
	 * Graphics command object. See {{#crossLink "Graphics/setStrokeStyle"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class StrokeStyle
	 * @constructor
	 * @param {Number} width
	 * @param {String} [caps]
	 * @param {String} [joints]
	 * @param {Number} [miterLimit]
	 **/
	/**
	 * @property width
	 * @type Number
	 */
	/**
	 * One of: butt, round, square
	 * @property caps
	 * @type String
	 */
	/**
	 * One of: round, bevel, miter
	 * @property joints
	 * @type String
	 */
	/**
	 * @property miterLimit
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	p = (G.StrokeStyle = function(width, caps, joints, miterLimit) {
		this.width = width;
		this.caps = caps;
		this.joints = joints;
		this.miterLimit = miterLimit;
	}).prototype;
	p.exec = function(ctx) {
		ctx.lineWidth = (this.width == null ? "1" : this.width);
		ctx.lineCap = (this.caps == null ? "butt" : (isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps]));
		ctx.lineJoin = (this.joints == null ? "miter" : (isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints]));
		ctx.miterLimit = (this.miterLimit == null ? "10" : this.miterLimit);
	};
	p.path = false;
	
	/**
	 * Graphics command object. See {{#crossLink "Graphics/setStrokeDash"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class StrokeDash
	 * @constructor
	 * @param {Array} [segments]
	 * @param {Number} [offset=0]
	 **/
	/**
	 * @property segments
	 * @type Array
	 */
	/**
	 * @property offset
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.StrokeDash = function(segments, offset) {
		this.segments = segments;
		this.offset = offset||0;
	}).prototype.exec = function(ctx) {
		if (ctx.setLineDash) { // feature detection.
			ctx.setLineDash(this.segments|| G.StrokeDash.EMPTY_SEGMENTS); // instead of [] to reduce churn.
			ctx.lineDashOffset = this.offset||0;
		}
	};
	/**
	 * The default value for segments (ie. no dash).
	 * @property EMPTY_SEGMENTS
	 * @static
	 * @final
	 * @readonly
	 * @protected
	 * @type {Array}
	 **/
	G.StrokeDash.EMPTY_SEGMENTS = [];

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawRoundRectComplex"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class RoundRect
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 * @param {Number} radiusTL
	 * @param {Number} radiusTR
	 * @param {Number} radiusBR
	 * @param {Number} radiusBL
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property w
	 * @type Number
	 */
	/**
	 * @property h
	 * @type Number
	 */
	/**
	 * @property radiusTL
	 * @type Number
	 */
	/**
	 * @property radiusTR
	 * @type Number
	 */
	/**
	 * @property radiusBR
	 * @type Number
	 */
	/**
	 * @property radiusBL
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.RoundRect = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
		this.x = x; this.y = y;
		this.w = w; this.h = h;
		this.radiusTL = radiusTL; this.radiusTR = radiusTR;
		this.radiusBR = radiusBR; this.radiusBL = radiusBL;
	}).prototype.exec = function(ctx) {
		var max = (w<h?w:h)/2;
		var mTL=0, mTR=0, mBR=0, mBL=0;
		var x = this.x, y = this.y, w = this.w, h = this.h;
		var rTL = this.radiusTL, rTR = this.radiusTR, rBR = this.radiusBR, rBL = this.radiusBL;

		if (rTL < 0) { rTL *= (mTL=-1); }
		if (rTL > max) { rTL = max; }
		if (rTR < 0) { rTR *= (mTR=-1); }
		if (rTR > max) { rTR = max; }
		if (rBR < 0) { rBR *= (mBR=-1); }
		if (rBR > max) { rBR = max; }
		if (rBL < 0) { rBL *= (mBL=-1); }
		if (rBL > max) { rBL = max; }

		ctx.moveTo(x+w-rTR, y);
		ctx.arcTo(x+w+rTR*mTR, y-rTR*mTR, x+w, y+rTR, rTR);
		ctx.lineTo(x+w, y+h-rBR);
		ctx.arcTo(x+w+rBR*mBR, y+h+rBR*mBR, x+w-rBR, y+h, rBR);
		ctx.lineTo(x+rBL, y+h);
		ctx.arcTo(x-rBL*mBL, y+h+rBL*mBL, x, y+h-rBL, rBL);
		ctx.lineTo(x, y+rTL);
		ctx.arcTo(x-rTL*mTL, y-rTL*mTL, x+rTL, y, rTL);
		ctx.closePath();
	};

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawCircle"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Circle
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.Circle = function(x, y, radius) {
		this.x = x; this.y = y;
		this.radius = radius;
	}).prototype.exec = function(ctx) { ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2); };

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawEllipse"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class Ellipse
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} w
	 * @param {Number} h
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property w
	 * @type Number
	 */
	/**
	 * @property h
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.Ellipse = function(x, y, w, h) {
		this.x = x; this.y = y;
		this.w = w; this.h = h;
	}).prototype.exec = function(ctx) {
		var x = this.x, y = this.y;
		var w = this.w, h = this.h;

		var k = 0.5522848;
		var ox = (w / 2) * k;
		var oy = (h / 2) * k;
		var xe = x + w;
		var ye = y + h;
		var xm = x + w / 2;
		var ym = y + h / 2;

		ctx.moveTo(x, ym);
		ctx.bezierCurveTo(x, ym-oy, xm-ox, y, xm, y);
		ctx.bezierCurveTo(xm+ox, y, xe, ym-oy, xe, ym);
		ctx.bezierCurveTo(xe, ym+oy, xm+ox, ye, xm, ye);
		ctx.bezierCurveTo(xm-ox, ye, x, ym+oy, x, ym);
	};

	/**
	 * Graphics command object. See {{#crossLink "Graphics/drawPolyStar"}}{{/crossLink}} and {{#crossLink "Graphics/append"}}{{/crossLink}} for more information.
	 * @class PolyStar
	 * @constructor
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} radius
	 * @param {Number} sides
	 * @param {Number} pointSize
	 * @param {Number} angle
	 **/
	/**
	 * @property x
	 * @type Number
	 */
	/**
	 * @property y
	 * @type Number
	 */
	/**
	 * @property radius
	 * @type Number
	 */
	/**
	 * @property sides
	 * @type Number
	 */
	/**
	 * @property pointSize
	 * @type Number
	 */
	/**
	 * @property angle
	 * @type Number
	 */
	/**
	 * @method exec
	 * @param {CanvasRenderingContext2D} ctx
	 */
	(G.PolyStar = function(x, y, radius, sides, pointSize, angle) {
		this.x = x; this.y = y;
		this.radius = radius;
		this.sides = sides;
		this.pointSize = pointSize;
		this.angle = angle;
	}).prototype.exec = function(ctx) {
		var x = this.x, y = this.y;
		var radius = this.radius;
		var angle = (this.angle||0)/180*Math.PI;
		var sides = this.sides;
		var ps = 1-(this.pointSize||0);
		var a = Math.PI/sides;

		ctx.moveTo(x+Math.cos(angle)*radius, y+Math.sin(angle)*radius);
		for (var i=0; i<sides; i++) {
			angle += a;
			if (ps != 1) {
				ctx.lineTo(x+Math.cos(angle)*radius*ps, y+Math.sin(angle)*radius*ps);
			}
			angle += a;
			ctx.lineTo(x+Math.cos(angle)*radius, y+Math.sin(angle)*radius);
		}
		ctx.closePath();
	};

	// docced above.
	Graphics.beginCmd = new G.BeginPath(); // so we don't have to instantiate multiple instances.


	createjs.Graphics = Graphics;
}());

//##############################################################################
// DisplayObject.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * DisplayObject is an abstract class that should not be constructed directly. Instead construct subclasses such as
	 * {{#crossLink "Container"}}{{/crossLink}}, {{#crossLink "Bitmap"}}{{/crossLink}}, and {{#crossLink "Shape"}}{{/crossLink}}.
	 * DisplayObject is the base class for all display classes in the EaselJS library. It defines the core properties and
	 * methods that are shared between all display objects, such as transformation properties (x, y, scaleX, scaleY, etc),
	 * caching, and mouse handlers.
	 * @class DisplayObject
	 * @extends EventDispatcher
	 * @constructor
	 **/
	function DisplayObject() {
		this.EventDispatcher_constructor();
		
		
	// public properties:
		/**
		 * The alpha (transparency) for this display object. 0 is fully transparent, 1 is fully opaque.
		 * @property alpha
		 * @type {Number}
		 * @default 1
		 **/
		this.alpha = 1;
	
		/**
		 * If a cache is active, this returns the canvas that holds the cached version of this display object. See {{#crossLink "cache"}}{{/crossLink}}
		 * for more information.
		 * @property cacheCanvas
		 * @type {HTMLCanvasElement | Object}
		 * @default null
		 * @readonly
		 **/
		this.cacheCanvas = null;
	
		/**
		 * Returns an ID number that uniquely identifies the current cache for this display object. This can be used to
		 * determine if the cache has changed since a previous check.
		 * @property cacheID
		 * @type {Number}
		 * @default 0
		 */
		this.cacheID = 0;
	
		/**
		 * Unique ID for this display object. Makes display objects easier for some uses.
		 * @property id
		 * @type {Number}
		 * @default -1
		 **/
		this.id = createjs.UID.get();
	
		/**
		 * Indicates whether to include this object when running mouse interactions. Setting this to `false` for children
		 * of a {{#crossLink "Container"}}{{/crossLink}} will cause events on the Container to not fire when that child is
		 * clicked. Setting this property to `false` does not prevent the {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}
		 * method from returning the child.
		 *
		 * <strong>Note:</strong> In EaselJS 0.7.0, the mouseEnabled property will not work properly with nested Containers. Please
		 * check out the latest NEXT version in <a href="https://github.com/CreateJS/EaselJS/tree/master/lib">GitHub</a> for an updated version with this issue resolved. The fix will be
		 * provided in the next release of EaselJS.
		 * @property mouseEnabled
		 * @type {Boolean}
		 * @default true
		 **/
		this.mouseEnabled = true;
		
		/**
		 * If false, the tick will not run on this display object (or its children). This can provide some performance benefits.
		 * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
		 * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
		 * @property tickEnabled
		 * @type Boolean
		 * @default true
		 **/
		this.tickEnabled = true;
	
		/**
		 * An optional name for this display object. Included in {{#crossLink "DisplayObject/toString"}}{{/crossLink}} . Useful for
		 * debugging.
		 * @property name
		 * @type {String}
		 * @default null
		 **/
		this.name = null;
	
		/**
		 * A reference to the {{#crossLink "Container"}}{{/crossLink}} or {{#crossLink "Stage"}}{{/crossLink}} object that
		 * contains this display object, or null if it has not been added
		 * to one.
		 * @property parent
		 * @final
		 * @type {Container}
		 * @default null
		 * @readonly
		 **/
		this.parent = null;
	
		/**
		 * The left offset for this display object's registration point. For example, to make a 100x100px Bitmap rotate
		 * around its center, you would set regX and {{#crossLink "DisplayObject/regY:property"}}{{/crossLink}} to 50.
		 * @property regX
		 * @type {Number}
		 * @default 0
		 **/
		this.regX = 0;
	
		/**
		 * The y offset for this display object's registration point. For example, to make a 100x100px Bitmap rotate around
		 * its center, you would set {{#crossLink "DisplayObject/regX:property"}}{{/crossLink}} and regY to 50.
		 * @property regY
		 * @type {Number}
		 * @default 0
		 **/
		this.regY = 0;
	
		/**
		 * The rotation in degrees for this display object.
		 * @property rotation
		 * @type {Number}
		 * @default 0
		 **/
		this.rotation = 0;
	
		/**
		 * The factor to stretch this display object horizontally. For example, setting scaleX to 2 will stretch the display
		 * object to twice its nominal width. To horizontally flip an object, set the scale to a negative number.
		 * @property scaleX
		 * @type {Number}
		 * @default 1
		 **/
		this.scaleX = 1;
	
		/**
		 * The factor to stretch this display object vertically. For example, setting scaleY to 0.5 will stretch the display
		 * object to half its nominal height. To vertically flip an object, set the scale to a negative number.
		 * @property scaleY
		 * @type {Number}
		 * @default 1
		 **/
		this.scaleY = 1;
	
		/**
		 * The factor to skew this display object horizontally.
		 * @property skewX
		 * @type {Number}
		 * @default 0
		 **/
		this.skewX = 0;
	
		/**
		 * The factor to skew this display object vertically.
		 * @property skewY
		 * @type {Number}
		 * @default 0
		 **/
		this.skewY = 0;
	
		/**
		 * A shadow object that defines the shadow to render on this display object. Set to `null` to remove a shadow. If
		 * null, this property is inherited from the parent container.
		 * @property shadow
		 * @type {Shadow}
		 * @default null
		 **/
		this.shadow = null;
	
		/**
		 * Indicates whether this display object should be rendered to the canvas and included when running the Stage
		 * {{#crossLink "Stage/getObjectsUnderPoint"}}{{/crossLink}} method.
		 * @property visible
		 * @type {Boolean}
		 * @default true
		 **/
		this.visible = true;
	
		/**
		 * The x (horizontal) position of the display object, relative to its parent.
		 * @property x
		 * @type {Number}
		 * @default 0
		 **/
		this.x = 0;
	
		/** The y (vertical) position of the display object, relative to its parent.
		 * @property y
		 * @type {Number}
		 * @default 0
		 **/
		this.y = 0;
		
		/**
		 * If set, defines the transformation for this display object, overriding all other transformation properties
		 * (x, y, rotation, scale, skew).
		 * @property transformMatrix
		 * @type {Matrix2D}
		 * @default null
		 **/
		this.transformMatrix = null;
		
		/**
		 * The composite operation indicates how the pixels of this display object will be composited with the elements
		 * behind it. If `null`, this property is inherited from the parent container. For more information, read the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#compositing">
		 * whatwg spec on compositing</a>.
		 * @property compositeOperation
		 * @type {String}
		 * @default null
		 **/
		this.compositeOperation = null;
	
		/**
		 * Indicates whether the display object should be drawn to a whole pixel when
		 * {{#crossLink "Stage/snapToPixelEnabled"}}{{/crossLink}} is true. To enable/disable snapping on whole
		 * categories of display objects, set this value on the prototype (Ex. Text.prototype.snapToPixel = true).
		 * @property snapToPixel
		 * @type {Boolean}
		 * @default true
		 **/
		this.snapToPixel = true;
	
		/**
		 * An array of Filter objects to apply to this display object. Filters are only applied / updated when {{#crossLink "cache"}}{{/crossLink}}
		 * or {{#crossLink "updateCache"}}{{/crossLink}} is called on the display object, and only apply to the area that is
		 * cached.
		 * @property filters
		 * @type {Array}
		 * @default null
		 **/
		this.filters = null;
		
		/**
		 * A Shape instance that defines a vector mask (clipping path) for this display object.  The shape's transformation
		 * will be applied relative to the display object's parent coordinates (as if it were a child of the parent).
		 * @property mask
		 * @type {Shape}
		 * @default null
		 */
		this.mask = null;
		
		/**
		 * A display object that will be tested when checking mouse interactions or testing {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}.
		 * The hit area will have its transformation applied relative to this display object's coordinate space (as though
		 * the hit test object were a child of this display object and relative to its regX/Y). The hitArea will be tested
		 * using only its own `alpha` value regardless of the alpha value on the target display object, or the target's
		 * ancestors (parents).
		 * 
		 * If set on a {{#crossLink "Container"}}{{/crossLink}}, children of the Container will not receive mouse events.
		 * This is similar to setting {{#crossLink "mouseChildren"}}{{/crossLink}} to false.
		 *
		 * Note that hitArea is NOT currently used by the `hitTest()` method, nor is it supported for {{#crossLink "Stage"}}{{/crossLink}}.
		 * @property hitArea
		 * @type {DisplayObject}
		 * @default null
		 */
		this.hitArea = null;
		
		/**
		 * A CSS cursor (ex. "pointer", "help", "text", etc) that will be displayed when the user hovers over this display
		 * object. You must enable mouseover events using the {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}} method to
		 * use this property. Setting a non-null cursor on a Container will override the cursor set on its descendants.
		 * @property cursor
		 * @type {String}
		 * @default null
		 */
		this.cursor = null;
	
	
	// private properties:
		/**
		 * @property _cacheOffsetX
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._cacheOffsetX = 0;
	
		/**
		 * @property _cacheOffsetY
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._cacheOffsetY = 0;
		
		/**
		 * @property _filterOffsetX
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._filterOffsetX = 0;
		
		/**
		 * @property _filterOffsetY
		 * @protected
		 * @type {Number}
		 * @default 0
		 **/
		this._filterOffsetY = 0;
		
		/**
		 * @property _cacheScale
		 * @protected
		 * @type {Number}
		 * @default 1
		 **/
		this._cacheScale = 1;
	
		/**
		* @property _cacheDataURLID
		* @protected
		* @type {Number}
		* @default 0
		*/
		this._cacheDataURLID = 0;
		
		/**
		* @property _cacheDataURL
		* @protected
		* @type {String}
		* @default null
		*/
		this._cacheDataURL = null;
	
		/**
		 * @property _props
		 * @protected
		 * @type {DisplayObject}
		 * @default null
		 **/
		this._props = new createjs.DisplayProps();
	
		/**
		 * @property _rectangle
		 * @protected
		 * @type {Rectangle}
		 * @default null
		 **/
		this._rectangle = new createjs.Rectangle();
	
		/**
		 * @property _bounds
		 * @protected
		 * @type {Rectangle}
		 * @default null
		 **/
		this._bounds = null;
	}
	var p = createjs.extend(DisplayObject, createjs.EventDispatcher);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	
// static properties:
	/**
	 * Listing of mouse event names. Used in _hasMouseEventListener.
	 * @property _MOUSE_EVENTS
	 * @protected
	 * @static
	 * @type {Array}
	 **/
	DisplayObject._MOUSE_EVENTS = ["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"];

	/**
	 * Suppresses errors generated when using features like hitTest, mouse events, and {{#crossLink "getObjectsUnderPoint"}}{{/crossLink}}
	 * with cross domain content.
	 * @property suppressCrossDomainErrors
	 * @static
	 * @type {Boolean}
	 * @default false
	 **/
	DisplayObject.suppressCrossDomainErrors = false;
	
	/**
	 * @property _snapToPixelEnabled
	 * @protected
	 * @static
	 * @type {Boolean}
	 * @default false
	 **/
	DisplayObject._snapToPixelEnabled = false; // stage.snapToPixelEnabled is temporarily copied here during a draw to provide global access.

	/**
	 * @property _hitTestCanvas
	 * @type {HTMLCanvasElement | Object}
	 * @static
	 * @protected
	 **/
	/**
	 * @property _hitTestContext
	 * @type {CanvasRenderingContext2D}
	 * @static
	 * @protected
	 **/
	var canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); // prevent errors on load in browsers without canvas.
	if (canvas.getContext) {
		DisplayObject._hitTestCanvas = canvas;
		DisplayObject._hitTestContext = canvas.getContext("2d");
		canvas.width = canvas.height = 1;
	}

	/**
	 * @property _nextCacheID
	 * @type {Number}
	 * @static
	 * @protected
	 **/
	DisplayObject._nextCacheID = 1;


// events:
	/**
	 * Dispatched when the user presses their left mouse button over the display object. See the 
	 * {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event mousedown
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched when the user presses their left mouse button and then releases it while over the display object.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event click
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched when the user double clicks their left mouse button over this display object.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event dblclick
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched when the user's mouse enters this display object. This event must be enabled using 
	 * {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}. See also {{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event mouseover
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the user's mouse leaves this display object. This event must be enabled using 
	 * {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}. See also {{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event mouseout
	 * @since 0.6.0
	 */
	 
	/**
	 * This event is similar to {{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}, with the following
	 * differences: it does not bubble, and it considers {{#crossLink "Container"}}{{/crossLink}} instances as an
	 * aggregate of their content.
	 * 
	 * For example, myContainer contains two overlapping children: shapeA and shapeB. The user moves their mouse over
	 * shapeA and then directly on to shapeB. With a listener for {{#crossLink "mouseover:event"}}{{/crossLink}} on
	 * myContainer, two events would be received, each targeting a child element:<OL>
	 * <LI>when the mouse enters shapeA (target=shapeA)</LI>
	 * <LI>when the mouse enters shapeB (target=shapeB)</LI>
	 * </OL>
	 * However, with a listener for "rollover" instead, only a single event is received when the mouse first enters
	 * the aggregate myContainer content (target=myContainer).
	 * 
	 * This event must be enabled using {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event rollover
	 * @since 0.7.0
	 */
	 
	/**
	 * This event is similar to {{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}, with the following
	 * differences: it does not bubble, and it considers {{#crossLink "Container"}}{{/crossLink}} instances as an
	 * aggregate of their content.
	 * 
	 * For example, myContainer contains two overlapping children: shapeA and shapeB. The user moves their mouse over
	 * shapeA, then directly on to shapeB, then off both. With a listener for {{#crossLink "mouseout:event"}}{{/crossLink}}
	 * on myContainer, two events would be received, each targeting a child element:<OL>
	 * <LI>when the mouse leaves shapeA (target=shapeA)</LI>
	 * <LI>when the mouse leaves shapeB (target=shapeB)</LI>
	 * </OL>
	 * However, with a listener for "rollout" instead, only a single event is received when the mouse leaves
	 * the aggregate myContainer content (target=myContainer).
	 * 
	 * This event must be enabled using {{#crossLink "Stage/enableMouseOver"}}{{/crossLink}}.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event rollout
	 * @since 0.7.0
	 */
	 
	/**
	 * After a {{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}} occurs on a display object, a pressmove
	 * event will be generated on that object whenever the mouse moves until the mouse press is released. This can be
	 * useful for dragging and similar operations.
	 * @event pressmove
	 * @since 0.7.0
	 */
	 
	/**
	 * After a {{#crossLink "DisplayObject/mousedown:event"}}{{/crossLink}} occurs on a display object, a pressup event
	 * will be generated on that object when that mouse press is released. This can be useful for dragging and similar
	 * operations.
	 * @event pressup
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched when the display object is added to a parent container.
	 * @event added
	 */
	 
	/**
	 * Dispatched when the display object is removed from its parent container.
	 * @event removed
	 */
	 
	/**
	 * Dispatched on each display object on a stage whenever the stage updates. This occurs immediately before the
	 * rendering (draw) pass. When {{#crossLink "Stage/update"}}{{/crossLink}} is called, first all display objects on
	 * the stage dispatch the tick event, then all of the display objects are drawn to stage. Children will have their
	 * {{#crossLink "tick:event"}}{{/crossLink}} event dispatched in order of their depth prior to the event being
	 * dispatched on their parent.
	 * @event tick
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Array} params An array containing any arguments that were passed to the Stage.update() method. For
	 *      example if you called stage.update("hello"), then the params would be ["hello"].
	 * @since 0.6.0
	 */
	
	
// getter / setters:
	/**
	 * Use the {{#crossLink "DisplayObject/stage:property"}}{{/crossLink}} property instead.
	 * @method getStage
	 * @return {Stage}
	 * @deprecated
	 **/
	p.getStage = function() {
		// uses dynamic access to avoid circular dependencies;
		var o = this, _Stage = createjs["Stage"];
		while (o.parent) { o = o.parent; }
		if (o instanceof _Stage) { return o; }
		return null;
	};

	/**
	 * Returns the Stage instance that this display object will be rendered on, or null if it has not been added to one.
	 * @property stage
	 * @type {Stage}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			stage: { get: p.getStage }
		});
	} catch (e) {}


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns <code>true</code> if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache. For example,
	 * used for drawing the cache (to prevent it from simply drawing an existing cache back into itself).
	 * @return {Boolean}
	 **/
	p.draw = function(ctx, ignoreCache) {
		var cacheCanvas = this.cacheCanvas;
		if (ignoreCache || !cacheCanvas) { return false; }
		var scale = this._cacheScale;
		ctx.drawImage(cacheCanvas, this._cacheOffsetX+this._filterOffsetX, this._cacheOffsetY+this._filterOffsetY, cacheCanvas.width/scale, cacheCanvas.height/scale);
		return true;
	};
	
	/**
	 * Applies this display object's transformation, alpha, globalCompositeOperation, clipping path (mask), and shadow
	 * to the specified context. This is typically called prior to {{#crossLink "DisplayObject/draw"}}{{/crossLink}}.
	 * @method updateContext
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D to update.
	 **/
	p.updateContext = function(ctx) {
		var o=this, mask=o.mask, mtx= o._props.matrix;
		
		if (mask && mask.graphics && !mask.graphics.isEmpty()) {
			mask.getMatrix(mtx);
			ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
			
			mask.graphics.drawAsPath(ctx);
			ctx.clip();
			
			mtx.invert();
			ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
		}
		
		this.getMatrix(mtx);
		var tx = mtx.tx, ty = mtx.ty;
		if (DisplayObject._snapToPixelEnabled && o.snapToPixel) {
			tx = tx + (tx < 0 ? -0.5 : 0.5) | 0;
			ty = ty + (ty < 0 ? -0.5 : 0.5) | 0;
		}
		ctx.transform(mtx.a,  mtx.b, mtx.c, mtx.d, tx, ty);
		ctx.globalAlpha *= o.alpha;
		if (o.compositeOperation) { ctx.globalCompositeOperation = o.compositeOperation; }
		if (o.shadow) { this._applyShadow(ctx, o.shadow); }
	};

	/**
	 * Draws the display object into a new canvas, which is then used for subsequent draws. For complex content
	 * that does not change frequently (ex. a Container with many children that do not move, or a complex vector Shape),
	 * this can provide for much faster rendering because the content does not need to be re-rendered each tick. The
	 * cached display object can be moved, rotated, faded, etc freely, however if its content changes, you must
	 * manually update the cache by calling <code>updateCache()</code> or <code>cache()</code> again. You must specify
	 * the cache area via the x, y, w, and h parameters. This defines the rectangle that will be rendered and cached
	 * using this display object's coordinates.
	 *
	 * <h4>Example</h4>
	 * For example if you defined a Shape that drew a circle at 0, 0 with a radius of 25:
	 *
	 *      var shape = new createjs.Shape();
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 25);
	 *      myShape.cache(-25, -25, 50, 50);
	 *
	 * Note that filters need to be defined <em>before</em> the cache is applied. Check out the {{#crossLink "Filter"}}{{/crossLink}}
	 * class for more information. Some filters (ex. BlurFilter) will not work as expected in conjunction with the scale param.
	 * 
	 * Usually, the resulting cacheCanvas will have the dimensions width*scale by height*scale, however some filters (ex. BlurFilter)
	 * will add padding to the canvas dimensions.
	 *
	 * @method cache
	 * @param {Number} x The x coordinate origin for the cache region.
	 * @param {Number} y The y coordinate origin for the cache region.
	 * @param {Number} width The width of the cache region.
	 * @param {Number} height The height of the cache region.
	 * @param {Number} [scale=1] The scale at which the cache will be created. For example, if you cache a vector shape using
	 * 	myShape.cache(0,0,100,100,2) then the resulting cacheCanvas will be 200x200 px. This lets you scale and rotate
	 * 	cached elements with greater fidelity. Default is 1.
	 **/
	p.cache = function(x, y, width, height, scale) {
		// draw to canvas.
		scale = scale||1;
		if (!this.cacheCanvas) { this.cacheCanvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
		this._cacheWidth = width;
		this._cacheHeight = height;
		this._cacheOffsetX = x;
		this._cacheOffsetY = y;
		this._cacheScale = scale;
		this.updateCache();
	};

	/**
	 * Redraws the display object to its cache. Calling updateCache without an active cache will throw an error.
	 * If compositeOperation is null the current cache will be cleared prior to drawing. Otherwise the display object
	 * will be drawn over the existing cache using the specified compositeOperation.
	 *
	 * <h4>Example</h4>
	 * Clear the current graphics of a cached shape, draw some new instructions, and then update the cache. The new line
	 * will be drawn on top of the old one.
	 *
	 *      // Not shown: Creating the shape, and caching it.
	 *      shapeInstance.clear();
	 *      shapeInstance.setStrokeStyle(3).beginStroke("#ff0000").moveTo(100, 100).lineTo(200,200);
	 *      shapeInstance.updateCache();
	 *
	 * @method updateCache
	 * @param {String} compositeOperation The compositeOperation to use, or null to clear the cache and redraw it.
	 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#compositing">
	 * whatwg spec on compositing</a>.
	 **/
	p.updateCache = function(compositeOperation) {
		var cacheCanvas = this.cacheCanvas;
		if (!cacheCanvas) { throw "cache() must be called before updateCache()"; }
		var scale = this._cacheScale, offX = this._cacheOffsetX*scale, offY = this._cacheOffsetY*scale;
		var w = this._cacheWidth, h = this._cacheHeight, ctx = cacheCanvas.getContext("2d");
		
		var fBounds = this._getFilterBounds();
		offX += (this._filterOffsetX = fBounds.x);
		offY += (this._filterOffsetY = fBounds.y);
		
		w = Math.ceil(w*scale) + fBounds.width;
		h = Math.ceil(h*scale) + fBounds.height;
		if (w != cacheCanvas.width || h != cacheCanvas.height) {
			// TODO: it would be nice to preserve the content if there is a compositeOperation.
			cacheCanvas.width = w;
			cacheCanvas.height = h;
		} else if (!compositeOperation) {
			ctx.clearRect(0, 0, w+1, h+1);
		}
		
		ctx.save();
		ctx.globalCompositeOperation = compositeOperation;
		ctx.setTransform(scale, 0, 0, scale, -offX, -offY);
		this.draw(ctx, true);
		// TODO: filters and cache scale don't play well together at present.
		this._applyFilters();
		ctx.restore();
		this.cacheID = DisplayObject._nextCacheID++;
	};

	/**
	 * Clears the current cache. See {{#crossLink "DisplayObject/cache"}}{{/crossLink}} for more information.
	 * @method uncache
	 **/
	p.uncache = function() {
		this._cacheDataURL = this.cacheCanvas = null;
		this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
		this._cacheScale = 1;
	};
	
	/**
	 * Returns a data URL for the cache, or null if this display object is not cached.
	 * Uses cacheID to ensure a new data URL is not generated if the cache has not changed.
	 * @method getCacheDataURL
	 * @return {String} The image data url for the cache.
	 **/
	p.getCacheDataURL = function() {
		if (!this.cacheCanvas) { return null; }
		if (this.cacheID != this._cacheDataURLID) { this._cacheDataURL = this.cacheCanvas.toDataURL(); }
		return this._cacheDataURL;
	};

	/**
	 * Transforms the specified x and y position from the coordinate space of the display object
	 * to the global (stage) coordinate space. For example, this could be used to position an HTML label
	 * over a specific point on a nested display object. Returns a Point instance with x and y properties
	 * correlating to the transformed coordinates on the stage.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.x = 300;
	 *      displayObject.y = 200;
	 *      stage.addChild(displayObject);
	 *      var point = myDisplayObject.localToGlobal(100, 100);
	 *      // Results in x=400, y=300
	 *
	 * @method localToGlobal
	 * @param {Number} x The x position in the source display object to transform.
	 * @param {Number} y The y position in the source display object to transform.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
	 * @return {Point} A Point instance with x and y properties correlating to the transformed coordinates
	 * on the stage.
	 **/
	p.localToGlobal = function(x, y, pt) {
		return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x,y, pt||new createjs.Point());
	};

	/**
	 * Transforms the specified x and y position from the global (stage) coordinate space to the
	 * coordinate space of the display object. For example, this could be used to determine
	 * the current mouse position within the display object. Returns a Point instance with x and y properties
	 * correlating to the transformed position in the display object's coordinate space.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.x = 300;
	 *      displayObject.y = 200;
	 *      stage.addChild(displayObject);
	 *      var point = myDisplayObject.globalToLocal(100, 100);
	 *      // Results in x=-200, y=-100
	 *
	 * @method globalToLocal
	 * @param {Number} x The x position on the stage to transform.
	 * @param {Number} y The y position on the stage to transform.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
	 * @return {Point} A Point instance with x and y properties correlating to the transformed position in the
	 * display object's coordinate space.
	 **/
	p.globalToLocal = function(x, y, pt) {
		return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x,y, pt||new createjs.Point());
	};

	/**
	 * Transforms the specified x and y position from the coordinate space of this display object to the coordinate
	 * space of the target display object. Returns a Point instance with x and y properties correlating to the
	 * transformed position in the target's coordinate space. Effectively the same as using the following code with
	 * {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}} and {{#crossLink "DisplayObject/globalToLocal"}}{{/crossLink}}.
	 *
	 *      var pt = this.localToGlobal(x, y);
	 *      pt = target.globalToLocal(pt.x, pt.y);
	 *
	 * @method localToLocal
	 * @param {Number} x The x position in the source display object to transform.
	 * @param {Number} y The y position on the source display object to transform.
	 * @param {DisplayObject} target The target display object to which the coordinates will be transformed.
	 * @param {Point | Object} [pt] An object to copy the result into. If omitted a new Point object with x/y properties will be returned. 
	 * @return {Point} Returns a Point instance with x and y properties correlating to the transformed position
	 * in the target's coordinate space.
	 **/
	p.localToLocal = function(x, y, target, pt) {
		pt = this.localToGlobal(x, y, pt);
		return target.globalToLocal(pt.x, pt.y, pt);
	};

	/**
	 * Shortcut method to quickly set the transform properties on the display object. All parameters are optional.
	 * Omitted parameters will have the default value set.
	 *
	 * <h4>Example</h4>
	 *
	 *      displayObject.setTransform(100, 100, 2, 2);
	 *
	 * @method setTransform
	 * @param {Number} [x=0] The horizontal translation (x position) in pixels
	 * @param {Number} [y=0] The vertical translation (y position) in pixels
	 * @param {Number} [scaleX=1] The horizontal scale, as a percentage of 1
	 * @param {Number} [scaleY=1] the vertical scale, as a percentage of 1
	 * @param {Number} [rotation=0] The rotation, in degrees
	 * @param {Number} [skewX=0] The horizontal skew factor
	 * @param {Number} [skewY=0] The vertical skew factor
	 * @param {Number} [regX=0] The horizontal registration point in pixels
	 * @param {Number} [regY=0] The vertical registration point in pixels
	 * @return {DisplayObject} Returns this instance. Useful for chaining commands.
	 * @chainable
	*/
	p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
		this.x = x || 0;
		this.y = y || 0;
		this.scaleX = scaleX == null ? 1 : scaleX;
		this.scaleY = scaleY == null ? 1 : scaleY;
		this.rotation = rotation || 0;
		this.skewX = skewX || 0;
		this.skewY = skewY || 0;
		this.regX = regX || 0;
		this.regY = regY || 0;
		return this;
	};
	
	/**
	 * Returns a matrix based on this object's current transform.
	 * @method getMatrix
	 * @param {Matrix2D} matrix Optional. A Matrix2D object to populate with the calculated values. If null, a new
	 * Matrix object is returned.
	 * @return {Matrix2D} A matrix representing this display object's transform.
	 **/
	p.getMatrix = function(matrix) {
		var o = this, mtx = matrix&&matrix.identity() || new createjs.Matrix2D();
		return o.transformMatrix ?  mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
	};
	
	/**
	 * Generates a Matrix2D object representing the combined transform of the display object and all of its
	 * parent Containers up to the highest level ancestor (usually the {{#crossLink "Stage"}}{{/crossLink}}). This can
	 * be used to transform positions between coordinate spaces, such as with {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}}
	 * and {{#crossLink "DisplayObject/globalToLocal"}}{{/crossLink}}.
	 * @method getConcatenatedMatrix
	 * @param {Matrix2D} [matrix] A {{#crossLink "Matrix2D"}}{{/crossLink}} object to populate with the calculated values.
	 * If null, a new Matrix2D object is returned.
	 * @return {Matrix2D} The combined matrix.
	 **/
	p.getConcatenatedMatrix = function(matrix) {
		var o = this, mtx = this.getMatrix(matrix);
		while (o = o.parent) {
			mtx.prependMatrix(o.getMatrix(o._props.matrix));
		}
		return mtx;
	};
	
	/**
	 * Generates a DisplayProps object representing the combined display properties of the  object and all of its
	 * parent Containers up to the highest level ancestor (usually the {{#crossLink "Stage"}}{{/crossLink}}).
	 * @method getConcatenatedDisplayProps
	 * @param {DisplayProps} [props] A {{#crossLink "DisplayProps"}}{{/crossLink}} object to populate with the calculated values.
	 * If null, a new DisplayProps object is returned.
	 * @return {DisplayProps} The combined display properties.
	 **/
	p.getConcatenatedDisplayProps = function(props) {
		props = props ? props.identity() : new createjs.DisplayProps();
		var o = this, mtx = o.getMatrix(props.matrix); 
		do {
			props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
			
			// we do this to avoid problems with the matrix being used for both operations when o._props.matrix is passed in as the props param.
			// this could be simplified (ie. just done as part of the prepend above) if we switched to using a pool.
			if (o != this) { mtx.prependMatrix(o.getMatrix(o._props.matrix)); }
		} while (o = o.parent);
		return props;
	};

	/**
	 * Tests whether the display object intersects the specified point in local coordinates (ie. draws a pixel with alpha > 0 at
	 * the specified position). This ignores the alpha, shadow, hitArea, mask, and compositeOperation of the display object.
	 *
	 * <h4>Example</h4>
	 *
	 *      stage.addEventListener("stagemousedown", handleMouseDown);
	 *      function handleMouseDown(event) {
	 *          var hit = myShape.hitTest(event.stageX, event.stageY);
	 *      }
	 *
	 * Please note that shape-to-shape collision is not currently supported by EaselJS.
	 * @method hitTest
	 * @param {Number} x The x position to check in the display object's local coordinates.
	 * @param {Number} y The y position to check in the display object's local coordinates.
	 * @return {Boolean} A Boolean indicating whether a visible portion of the DisplayObject intersect the specified
	 * local Point.
	*/
	p.hitTest = function(x, y) {
		var ctx = DisplayObject._hitTestContext;
		ctx.setTransform(1, 0, 0, 1, -x, -y);
		this.draw(ctx);

		var hit = this._testHit(ctx);
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, 2, 2);
		return hit;
	};
	
	/**
	 * Provides a chainable shortcut method for setting a number of properties on the instance.
	 *
	 * <h4>Example</h4>
	 *
	 *      var myGraphics = new createjs.Graphics().beginFill("#ff0000").drawCircle(0, 0, 25);
	 *      var shape = stage.addChild(new Shape()).set({graphics:myGraphics, x:100, y:100, alpha:0.5});
	 *
	 * @method set
	 * @param {Object} props A generic object containing properties to copy to the DisplayObject instance.
	 * @return {DisplayObject} Returns the instance the method is called on (useful for chaining calls.)
	 * @chainable
	*/
	p.set = function(props) {
		for (var n in props) { this[n] = props[n]; }
		return this;
	};
	
	/**
	 * Returns a rectangle representing this object's bounds in its local coordinate system (ie. with no transformation).
	 * Objects that have been cached will return the bounds of the cache.
	 * 
	 * Not all display objects can calculate their own bounds (ex. Shape). For these objects, you can use 
	 * {{#crossLink "DisplayObject/setBounds"}}{{/crossLink}} so that they are included when calculating Container
	 * bounds.
	 * 
	 * <table>
	 * 	<tr><td><b>All</b></td><td>
	 * 		All display objects support setting bounds manually using setBounds(). Likewise, display objects that
	 * 		have been cached using cache() will return the bounds of their cache. Manual and cache bounds will override
	 * 		the automatic calculations listed below.
	 * 	</td></tr>
	 * 	<tr><td><b>Bitmap</b></td><td>
	 * 		Returns the width and height of the sourceRect (if specified) or image, extending from (x=0,y=0).
	 * 	</td></tr>
	 * 	<tr><td><b>Sprite</b></td><td>
	 * 		Returns the bounds of the current frame. May have non-zero x/y if a frame registration point was specified
	 * 		in the spritesheet data. See also {{#crossLink "SpriteSheet/getFrameBounds"}}{{/crossLink}}
	 * 	</td></tr>
	 * 	<tr><td><b>Container</b></td><td>
	 * 		Returns the aggregate (combined) bounds of all children that return a non-null value from getBounds().
	 * 	</td></tr>
	 * 	<tr><td><b>Shape</b></td><td>
	 * 		Does not currently support automatic bounds calculations. Use setBounds() to manually define bounds.
	 * 	</td></tr>
	 * 	<tr><td><b>Text</b></td><td>
	 * 		Returns approximate bounds. Horizontal values (x/width) are quite accurate, but vertical values (y/height) are
	 * 		not, especially when using textBaseline values other than "top".
	 * 	</td></tr>
	 * 	<tr><td><b>BitmapText</b></td><td>
	 * 		Returns approximate bounds. Values will be more accurate if spritesheet frame registration points are close
	 * 		to (x=0,y=0).
	 * 	</td></tr>
	* </table>
	 * 
	 * Bounds can be expensive to calculate for some objects (ex. text, or containers with many children), and
	 * are recalculated each time you call getBounds(). You can prevent recalculation on static objects by setting the
	 * bounds explicitly:
	 * 
	 * 	var bounds = obj.getBounds();
	 * 	obj.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
	 * 	// getBounds will now use the set values, instead of recalculating
	 * 
	 * To reduce memory impact, the returned Rectangle instance may be reused internally; clone the instance or copy its
	 * values if you need to retain it.
	 * 
	 * 	var myBounds = obj.getBounds().clone();
	 * 	// OR:
	 * 	myRect.copy(obj.getBounds());
	 * 
	 * @method getBounds
	 * @return {Rectangle} A Rectangle instance representing the bounds, or null if bounds are not available for this
	 * object.
	 **/
	p.getBounds = function() {
		if (this._bounds) { return this._rectangle.copy(this._bounds); }
		var cacheCanvas = this.cacheCanvas;
		if (cacheCanvas) {
			var scale = this._cacheScale;
			return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width/scale, cacheCanvas.height/scale);
		}
		return null;
	};
	
	/**
	 * Returns a rectangle representing this object's bounds in its parent's coordinate system (ie. with transformations applied).
	 * Objects that have been cached will return the transformed bounds of the cache.
	 * 
	 * Not all display objects can calculate their own bounds (ex. Shape). For these objects, you can use 
	 * {{#crossLink "DisplayObject/setBounds"}}{{/crossLink}} so that they are included when calculating Container
	 * bounds.
	 * 
	 * To reduce memory impact, the returned Rectangle instance may be reused internally; clone the instance or copy its
	 * values if you need to retain it.
	 * 
	 * Container instances calculate aggregate bounds for all children that return bounds via getBounds.
	 * @method getTransformedBounds
	 * @return {Rectangle} A Rectangle instance representing the bounds, or null if bounds are not available for this object.
	 **/
	p.getTransformedBounds = function() {
		return this._getBounds();
	};
	
	/**
	 * Allows you to manually specify the bounds of an object that either cannot calculate their own bounds (ex. Shape &
	 * Text) for future reference, or so the object can be included in Container bounds. Manually set bounds will always
	 * override calculated bounds.
	 * 
	 * The bounds should be specified in the object's local (untransformed) coordinates. For example, a Shape instance
	 * with a 25px radius circle centered at 0,0 would have bounds of (-25, -25, 50, 50).
	 * @method setBounds
	 * @param {Number} x The x origin of the bounds. Pass null to remove the manual bounds.
	 * @param {Number} y The y origin of the bounds.
	 * @param {Number} width The width of the bounds.
	 * @param {Number} height The height of the bounds.
	 **/
	p.setBounds = function(x, y, width, height) {
		if (x == null) { this._bounds = x; }
		this._bounds = (this._bounds || new createjs.Rectangle()).setValues(x, y, width, height);
	};

	/**
	 * Returns a clone of this DisplayObject. Some properties that are specific to this instance's current context are
	 * reverted to their defaults (for example .parent). Caches are not maintained across clones, and some elements
	 * are copied by reference (masks, individual filter instances, hit area)
	 * @method clone
	 * @return {DisplayObject} A clone of the current DisplayObject instance.
	 **/
	p.clone = function() {
		return this._cloneProps(new DisplayObject());
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[DisplayObject (name="+  this.name +")]";
	};


// private methods:
	// separated so it can be used more easily in subclasses:
	/**
	 * @method _cloneProps
	 * @param {DisplayObject} o The DisplayObject instance which will have properties from the current DisplayObject
	 * instance copied into.
	 * @return {DisplayObject} o
	 * @protected
	 **/
	p._cloneProps = function(o) {
		o.alpha = this.alpha;
		o.mouseEnabled = this.mouseEnabled;
		o.tickEnabled = this.tickEnabled;
		o.name = this.name;
		o.regX = this.regX;
		o.regY = this.regY;
		o.rotation = this.rotation;
		o.scaleX = this.scaleX;
		o.scaleY = this.scaleY;
		o.shadow = this.shadow;
		o.skewX = this.skewX;
		o.skewY = this.skewY;
		o.visible = this.visible;
		o.x  = this.x;
		o.y = this.y;
		o.compositeOperation = this.compositeOperation;
		o.snapToPixel = this.snapToPixel;
		o.filters = this.filters==null?null:this.filters.slice(0);
		o.mask = this.mask;
		o.hitArea = this.hitArea;
		o.cursor = this.cursor;
		o._bounds = this._bounds;
		return o;
	};

	/**
	 * @method _applyShadow
	 * @protected
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Shadow} shadow
	 **/
	p._applyShadow = function(ctx, shadow) {
		shadow = shadow || Shadow.identity;
		ctx.shadowColor = shadow.color;
		ctx.shadowOffsetX = shadow.offsetX;
		ctx.shadowOffsetY = shadow.offsetY;
		ctx.shadowBlur = shadow.blur;
	};
	
	
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * @protected
	 **/
	p._tick = function(evtObj) {
		// because tick can be really performance sensitive, check for listeners before calling dispatchEvent.
		var ls = this._listeners;
		if (ls && ls["tick"]) {
			// reset & reuse the event object to avoid construction / GC costs:
			evtObj.target = null;
			evtObj.propagationStopped = evtObj.immediatePropagationStopped = false;
			this.dispatchEvent(evtObj);
		}
	};

	/**
	 * @method _testHit
	 * @protected
	 * @param {CanvasRenderingContext2D} ctx
	 * @return {Boolean}
	 **/
	p._testHit = function(ctx) {
		try {
			var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1;
		} catch (e) {
			if (!DisplayObject.suppressCrossDomainErrors) {
				throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
			}
		}
		return hit;
	};

	/**
	 * @method _applyFilters
	 * @protected
	 **/
	p._applyFilters = function() {
		if (!this.filters || this.filters.length == 0 || !this.cacheCanvas) { return; }
		var l = this.filters.length;
		var ctx = this.cacheCanvas.getContext("2d");
		var w = this.cacheCanvas.width;
		var h = this.cacheCanvas.height;
		for (var i=0; i<l; i++) {
			this.filters[i].applyFilter(ctx, 0, 0, w, h);
		}
	};
	
	/**
	 * @method _getFilterBounds
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getFilterBounds = function(rect) {
		var l, filters = this.filters, bounds = this._rectangle.setValues(0,0,0,0);
		if (!filters || !(l=filters.length)) { return bounds; }
		
		for (var i=0; i<l; i++) {
			var f = this.filters[i];
			f.getBounds&&f.getBounds(bounds);
		}
		return bounds;
	};
	
	/**
	 * @method _getBounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform If true, does not apply this object's transform.
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getBounds = function(matrix, ignoreTransform){
		return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
	};
	
	/**
	 * @method _transformBounds
	 * @param {Rectangle} bounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform
	 * @return {Rectangle}
	 * @protected
	 **/
	p._transformBounds = function(bounds, matrix, ignoreTransform) {
		if (!bounds) { return bounds; }
		var x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height, mtx = this._props.matrix;
		mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
		
		if (x || y) { mtx.appendTransform(0,0,1,1,0,0,0,-x,-y); } // TODO: simplify this.
		if (matrix) { mtx.prependMatrix(matrix); }
		
		var x_a = width*mtx.a, x_b = width*mtx.b;
		var y_c = height*mtx.c, y_d = height*mtx.d;
		var tx = mtx.tx, ty = mtx.ty;
		
		var minX = tx, maxX = tx, minY = ty, maxY = ty;

		if ((x = x_a + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
		if ((x = x_a + y_c + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
		if ((x = y_c + tx) < minX) { minX = x; } else if (x > maxX) { maxX = x; }
		
		if ((y = x_b + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
		if ((y = x_b + y_d + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
		if ((y = y_d + ty) < minY) { minY = y; } else if (y > maxY) { maxY = y; }
		
		return bounds.setValues(minX, minY, maxX-minX, maxY-minY);
	};
	
	/**
	 * Indicates whether the display object has any mouse event listeners or a cursor.
	 * @method _isMouseOpaque
	 * @return {Boolean}
	 * @protected
	 **/
	p._hasMouseEventListener = function() {
		var evts = DisplayObject._MOUSE_EVENTS;
		for (var i= 0, l=evts.length; i<l; i++) {
			if (this.hasEventListener(evts[i])) { return true; }
		}
		return !!this.cursor;
	};

	createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher");
}());

//##############################################################################
// Container.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";
	

// constructor:
/**
 * A Container is a nestable display list that allows you to work with compound display elements. For  example you could
 * group arm, leg, torso and head {{#crossLink "Bitmap"}}{{/crossLink}} instances together into a Person Container, and
 * transform them as a group, while still being able to move the individual parts relative to each other. Children of
 * containers have their <code>transform</code> and <code>alpha</code> properties concatenated with their parent
 * Container.
 *
 * For example, a {{#crossLink "Shape"}}{{/crossLink}} with x=100 and alpha=0.5, placed in a Container with <code>x=50</code>
 * and <code>alpha=0.7</code> will be rendered to the canvas at <code>x=150</code> and <code>alpha=0.35</code>.
 * Containers have some overhead, so you generally shouldn't create a Container to hold a single child.
 *
 * <h4>Example</h4>
 *
 *      var container = new createjs.Container();
 *      container.addChild(bitmapInstance, shapeInstance);
 *      container.x = 100;
 *
 * @class Container
 * @extends DisplayObject
 * @constructor
 **/
	function Container() {
		this.DisplayObject_constructor();
		
	// public properties:
		/**
		 * The array of children in the display list. You should usually use the child management methods such as
		 * {{#crossLink "Container/addChild"}}{{/crossLink}}, {{#crossLink "Container/removeChild"}}{{/crossLink}},
		 * {{#crossLink "Container/swapChildren"}}{{/crossLink}}, etc, rather than accessing this directly, but it is
		 * included for advanced uses.
		 * @property children
		 * @type Array
		 * @default null
		 **/
		this.children = [];
		
		/**
		 * Indicates whether the children of this container are independently enabled for mouse/pointer interaction.
		 * If false, the children will be aggregated under the container - for example, a click on a child shape would
		 * trigger a click event on the container.
		 * @property mouseChildren
		 * @type Boolean
		 * @default true
		 **/
		this.mouseChildren = true;
		
		/**
		 * If false, the tick will not be propagated to children of this Container. This can provide some performance benefits.
		 * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
		 * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
		 * @property tickChildren
		 * @type Boolean
		 * @default true
		 **/
		this.tickChildren = true;
	}
	var p = createjs.extend(Container, createjs.DisplayObject);
	
	
// getter / setters:
	/**
	 * Use the {{#crossLink "Container/numChildren:property"}}{{/crossLink}} property instead.
	 * @method getNumChildren
	 * @return {Number}
	 * @deprecated
	 **/
	p.getNumChildren = function() {
		return this.children.length;
	};

	/**
	 * Returns the number of children in the container.
	 * @property numChildren
	 * @type {Number}
	 * @readonly
	 **/
	try {
		Object.defineProperties(p, {
			numChildren: { get: p.getNumChildren }
		});
	} catch (e) {}
	

// public methods:
	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = Container; // TODO: deprecated.
	
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || this.children.length;
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		
		// this ensures we don't have issues with display list changes that occur during a draw:
		var list = this.children.slice();
		for (var i=0,l=list.length; i<l; i++) {
			var child = list[i];
			if (!child.isVisible()) { continue; }
			
			// draw the child:
			ctx.save();
			child.updateContext(ctx);
			child.draw(ctx);
			ctx.restore();
		}
		return true;
	};
	
	/**
	 * Adds a child to the top of the display list.
	 *
	 * <h4>Example</h4>
	 *
	 * 		container.addChild(bitmapInstance);
	 *
	 * You can also add multiple children at once:
	 *
	 * 		container.addChild(bitmapInstance, shapeInstance, textInstance);
	 *
	 * @method addChild
	 * @param {DisplayObject} child The display object to add.
	 * @return {DisplayObject} The child that was added, or the last child if multiple children were added.
	 **/
	p.addChild = function(child) {
		if (child == null) { return child; }
		var l = arguments.length;
		if (l > 1) {
			for (var i=0; i<l; i++) { this.addChild(arguments[i]); }
			return arguments[l-1];
		}
		if (child.parent) { child.parent.removeChild(child); }
		child.parent = this;
		this.children.push(child);
		child.dispatchEvent("added");
		return child;
	};

	/**
	 * Adds a child to the display list at the specified index, bumping children at equal or greater indexes up one, and
	 * setting its parent to this Container.
	 *
	 * <h4>Example</h4>
	 *
	 *      addChildAt(child1, index);
	 *
	 * You can also add multiple children, such as:
	 *
	 *      addChildAt(child1, child2, ..., index);
	 *
	 * The index must be between 0 and numChildren. For example, to add myShape under otherShape in the display list,
	 * you could use:
	 *
	 *      container.addChildAt(myShape, container.getChildIndex(otherShape));
	 *
	 * This would also bump otherShape's index up by one. Fails silently if the index is out of range.
	 *
	 * @method addChildAt
	 * @param {DisplayObject} child The display object to add.
	 * @param {Number} index The index to add the child at.
	 * @return {DisplayObject} Returns the last child that was added, or the last child if multiple children were added.
	 **/
	p.addChildAt = function(child, index) {
		var l = arguments.length;
		var indx = arguments[l-1]; // can't use the same name as the index param or it replaces arguments[1]
		if (indx < 0 || indx > this.children.length) { return arguments[l-2]; }
		if (l > 2) {
			for (var i=0; i<l-1; i++) { this.addChildAt(arguments[i], indx+i); }
			return arguments[l-2];
		}
		if (child.parent) { child.parent.removeChild(child); }
		child.parent = this;
		this.children.splice(index, 0, child);
		child.dispatchEvent("added");
		return child;
	};

	/**
	 * Removes the specified child from the display list. Note that it is faster to use removeChildAt() if the index is
	 * already known.
	 *
	 * <h4>Example</h4>
	 *
	 *      container.removeChild(child);
	 *
	 * You can also remove multiple children:
	 *
	 *      removeChild(child1, child2, ...);
	 *
	 * Returns true if the child (or children) was removed, or false if it was not in the display list.
	 * @method removeChild
	 * @param {DisplayObject} child The child to remove.
	 * @return {Boolean} true if the child (or children) was removed, or false if it was not in the display list.
	 **/
	p.removeChild = function(child) {
		var l = arguments.length;
		if (l > 1) {
			var good = true;
			for (var i=0; i<l; i++) { good = good && this.removeChild(arguments[i]); }
			return good;
		}
		return this.removeChildAt(createjs.indexOf(this.children, child));
	};

	/**
	 * Removes the child at the specified index from the display list, and sets its parent to null.
	 *
	 * <h4>Example</h4>
	 *
	 *      container.removeChildAt(2);
	 *
	 * You can also remove multiple children:
	 *
	 *      container.removeChild(2, 7, ...)
	 *
	 * Returns true if the child (or children) was removed, or false if any index was out of range.
	 * @method removeChildAt
	 * @param {Number} index The index of the child to remove.
	 * @return {Boolean} true if the child (or children) was removed, or false if any index was out of range.
	 **/
	p.removeChildAt = function(index) {
		var l = arguments.length;
		if (l > 1) {
			var a = [];
			for (var i=0; i<l; i++) { a[i] = arguments[i]; }
			a.sort(function(a, b) { return b-a; });
			var good = true;
			for (var i=0; i<l; i++) { good = good && this.removeChildAt(a[i]); }
			return good;
		}
		if (index < 0 || index > this.children.length-1) { return false; }
		var child = this.children[index];
		if (child) { child.parent = null; }
		this.children.splice(index, 1);
		child.dispatchEvent("removed");
		return true;
	};

	/**
	 * Removes all children from the display list.
	 *
	 * <h4>Example</h4>
	 *
	 * 	container.removeAllChildren();
	 *
	 * @method removeAllChildren
	 **/
	p.removeAllChildren = function() {
		var kids = this.children;
		while (kids.length) { this.removeChildAt(0); }
	};

	/**
	 * Returns the child at the specified index.
	 *
	 * <h4>Example</h4>
	 *
	 *      container.getChildAt(2);
	 *
	 * @method getChildAt
	 * @param {Number} index The index of the child to return.
	 * @return {DisplayObject} The child at the specified index. Returns null if there is no child at the index.
	 **/
	p.getChildAt = function(index) {
		return this.children[index];
	};
	
	/**
	 * Returns the child with the specified name.
	 * @method getChildByName
	 * @param {String} name The name of the child to return.
	 * @return {DisplayObject} The child with the specified name.
	 **/
	p.getChildByName = function(name) {
		var kids = this.children;
		for (var i=0,l=kids.length;i<l;i++) {
			if(kids[i].name == name) { return kids[i]; }
		}
		return null;
	};

	/**
	 * Performs an array sort operation on the child list.
	 *
	 * <h4>Example: Display children with a higher y in front.</h4>
	 * 
	 *      var sortFunction = function(obj1, obj2, options) {
	 *          if (obj1.y > obj2.y) { return 1; }
	 *          if (obj1.y < obj2.y) { return -1; }
	 *          return 0;
	 *      }
	 *      container.sortChildren(sortFunction);
	 *
	 * @method sortChildren
	 * @param {Function} sortFunction the function to use to sort the child list. See JavaScript's <code>Array.sort</code>
	 * documentation for details.
	 **/
	p.sortChildren = function(sortFunction) {
		this.children.sort(sortFunction);
	};

	/**
	 * Returns the index of the specified child in the display list, or -1 if it is not in the display list.
	 *
	 * <h4>Example</h4>
	 *
	 *      var index = container.getChildIndex(child);
	 *
	 * @method getChildIndex
	 * @param {DisplayObject} child The child to return the index of.
	 * @return {Number} The index of the specified child. -1 if the child is not found.
	 **/
	p.getChildIndex = function(child) {
		return createjs.indexOf(this.children, child);
	};
	
	/**
	 * Swaps the children at the specified indexes. Fails silently if either index is out of range.
	 * @method swapChildrenAt
	 * @param {Number} index1
	 * @param {Number} index2
	 **/
	p.swapChildrenAt = function(index1, index2) {
		var kids = this.children;
		var o1 = kids[index1];
		var o2 = kids[index2];
		if (!o1 || !o2) { return; }
		kids[index1] = o2;
		kids[index2] = o1;
	};
	
	/**
	 * Swaps the specified children's depth in the display list. Fails silently if either child is not a child of this
	 * Container.
	 * @method swapChildren
	 * @param {DisplayObject} child1
	 * @param {DisplayObject} child2
	 **/
	p.swapChildren = function(child1, child2) {
		var kids = this.children;
		var index1,index2;
		for (var i=0,l=kids.length;i<l;i++) {
			if (kids[i] == child1) { index1 = i; }
			if (kids[i] == child2) { index2 = i; }
			if (index1 != null && index2 != null) { break; }
		}
		if (i==l) { return; } // TODO: throw error?
		kids[index1] = child2;
		kids[index2] = child1;
	};
	
	/**
	 * Changes the depth of the specified child. Fails silently if the child is not a child of this container, or the index is out of range.
	 * @param {DisplayObject} child
	 * @param {Number} index  
	 * @method setChildIndex
	 **/
	p.setChildIndex = function(child, index) {
		var kids = this.children, l=kids.length;
		if (child.parent != this || index < 0 || index >= l) { return; }
		for (var i=0;i<l;i++) {
			if (kids[i] == child) { break; }
		}
		if (i==l || i == index) { return; }
		kids.splice(i,1);
		kids.splice(index,0,child);
	};

	/**
	 * Returns true if the specified display object either is this container or is a descendent (child, grandchild, etc)
	 * of this container.
	 * @method contains
	 * @param {DisplayObject} child The DisplayObject to be checked.
	 * @return {Boolean} true if the specified display object either is this container or is a descendent.
	 **/
	p.contains = function(child) {
		while (child) {
			if (child == this) { return true; }
			child = child.parent;
		}
		return false;
	};

	/**
	 * Tests whether the display object intersects the specified local point (ie. draws a pixel with alpha > 0 at the
	 * specified position). This ignores the alpha, shadow and compositeOperation of the display object, and all
	 * transform properties including regX/Y.
	 * @method hitTest
	 * @param {Number} x The x position to check in the display object's local coordinates.
	 * @param {Number} y The y position to check in the display object's local coordinates.
	 * @return {Boolean} A Boolean indicating whether there is a visible section of a DisplayObject that overlaps the specified
	 * coordinates.
	 **/
	p.hitTest = function(x, y) {
		// TODO: optimize to use the fast cache check where possible.
		return (this.getObjectUnderPoint(x, y) != null);
	};

	/**
	 * Returns an array of all display objects under the specified coordinates that are in this container's display
	 * list. This routine ignores any display objects with {{#crossLink "DisplayObject/mouseEnabled:property"}}{{/crossLink}}
	 * set to `false`. The array will be sorted in order of visual depth, with the top-most display object at index 0.
	 * This uses shape based hit detection, and can be an expensive operation to run, so it is best to use it carefully.
	 * For example, if testing for objects under the mouse, test on tick (instead of on {{#crossLink "DisplayObject/mousemove:event"}}{{/crossLink}}),
	 * and only if the mouse's position has changed.
	 * 
	 * <ul>
	 *     <li>By default (mode=0) this method evaluates all display objects.</li>
	 *     <li>By setting the `mode` parameter to `1`, the {{#crossLink "DisplayObject/mouseEnabled:property"}}{{/crossLink}}
	 * 		and {{#crossLink "mouseChildren:property"}}{{/crossLink}} properties will be respected.</li>
	 * 	   <li>Setting the `mode` to `2` additionally excludes display objects that do not have active mouse event
	 * 	   	listeners or a {{#crossLink "DisplayObject:cursor:property"}}{{/crossLink}} property. That is, only objects
	 * 	   	that would normally intercept mouse interaction will be included. This can significantly improve performance
	 * 	   	in some cases by reducing the number of display objects that need to be tested.</li>
	 * </li>
	 * 
	 * This method accounts for both {{#crossLink "DisplayObject/hitArea:property"}}{{/crossLink}} and {{#crossLink "DisplayObject/mask:property"}}{{/crossLink}}.
	 * @method getObjectsUnderPoint
	 * @param {Number} x The x position in the container to test.
	 * @param {Number} y The y position in the container to test.
	 * @param {Number} [mode=0] The mode to use to determine which display objects to include. 0-all, 1-respect mouseEnabled/mouseChildren, 2-only mouse opaque objects.
	 * @return {Array} An Array of DisplayObjects under the specified coordinates.
	 **/
	p.getObjectsUnderPoint = function(x, y, mode) {
		var arr = [];
		var pt = this.localToGlobal(x, y);
		this._getObjectsUnderPoint(pt.x, pt.y, arr, mode>0, mode==1);
		return arr;
	};

	/**
	 * Similar to {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}}, but returns only the top-most display
	 * object. This runs significantly faster than <code>getObjectsUnderPoint()</code>, but is still potentially an expensive
	 * operation. See {{#crossLink "Container/getObjectsUnderPoint"}}{{/crossLink}} for more information.
	 * @method getObjectUnderPoint
	 * @param {Number} x The x position in the container to test.
	 * @param {Number} y The y position in the container to test.
	 * @param {Number} mode The mode to use to determine which display objects to include.  0-all, 1-respect mouseEnabled/mouseChildren, 2-only mouse opaque objects.
	 * @return {DisplayObject} The top-most display object under the specified coordinates.
	 **/
	p.getObjectUnderPoint = function(x, y, mode) {
		var pt = this.localToGlobal(x, y);
		return this._getObjectsUnderPoint(pt.x, pt.y, null, mode>0, mode==1);
	};
	
	/**
	 * Docced in superclass.
	 */
	p.getBounds = function() {
		return this._getBounds(null, true);
	};
	
	
	/**
	 * Docced in superclass.
	 */
	p.getTransformedBounds = function() {
		return this._getBounds();
	};

	/**
	 * Returns a clone of this Container. Some properties that are specific to this instance's current context are
	 * reverted to their defaults (for example .parent).
	 * @method clone
	 * @param {Boolean} [recursive=false] If true, all of the descendants of this container will be cloned recursively. If false, the
	 * properties of the container will be cloned, but the new instance will not have any children.
	 * @return {Container} A clone of the current Container instance.
	 **/
	p.clone = function(recursive) {
		var o = this._cloneProps(new Container());
		if (recursive) { this._cloneChildren(o); }
		return o;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Container (name="+  this.name +")]";
	};


// private methods:
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * @protected
	 **/
	p._tick = function(evtObj) {
		if (this.tickChildren) {
			for (var i=this.children.length-1; i>=0; i--) {
				var child = this.children[i];
				if (child.tickEnabled && child._tick) { child._tick(evtObj); }
			}
		}
		this.DisplayObject__tick(evtObj);
	};
	
	/**
	 * Recursively clones all children of this container, and adds them to the target container.
	 * @method cloneChildren
	 * @protected
	 * @param {Container} o The target container.
	 **/
	p._cloneChildren = function(o) {
		if (o.children.length) { o.removeAllChildren(); }
		var arr = o.children;
		for (var i=0, l=this.children.length; i<l; i++) {
			var clone = this.children[i].clone(true);
			clone.parent = o;
			arr.push(clone);
		}
	};

	/**
	 * @method _getObjectsUnderPoint
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Array} arr
	 * @param {Boolean} mouse If true, it will respect mouse interaction properties like mouseEnabled, mouseChildren, and active listeners.
	 * @param {Boolean} activeListener If true, there is an active mouse event listener on a parent object.
	 * @param {Number} currentDepth Indicates the current depth of the search.
	 * @return {DisplayObject}
	 * @protected
	 **/
	p._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth) {
		currentDepth = currentDepth || 0;
		if (!currentDepth && !this._testMask(this, x, y)) { return null; }
		var mtx, ctx = createjs.DisplayObject._hitTestContext;
		activeListener = activeListener || (mouse&&this._hasMouseEventListener());

		// draw children one at a time, and check if we get a hit:
		var children = this.children, l = children.length;
		for (var i=l-1; i>=0; i--) {
			var child = children[i];
			var hitArea = child.hitArea;
			if (!child.visible || (!hitArea && !child.isVisible()) || (mouse && !child.mouseEnabled)) { continue; }
			if (!hitArea && !this._testMask(child, x, y)) { continue; }
			
			// if a child container has a hitArea then we only need to check its hitArea, so we can treat it as a normal DO:
			if (!hitArea && child instanceof Container) {
				var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth+1);
				if (!arr && result) { return (mouse && !this.mouseChildren) ? this : result; }
			} else {
				if (mouse && !activeListener && !child._hasMouseEventListener()) { continue; }
				
				// TODO: can we pass displayProps forward, to avoid having to calculate this backwards every time? It's kind of a mixed bag. When we're only hunting for DOs with event listeners, it may not make sense.
				var props = child.getConcatenatedDisplayProps(child._props);
				mtx = props.matrix;
				
				if (hitArea) {
					mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix));
					props.alpha = hitArea.alpha;
				}
				
				ctx.globalAlpha = props.alpha;
				ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
				(hitArea||child).draw(ctx);
				if (!this._testHit(ctx)) { continue; }
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.clearRect(0, 0, 2, 2);
				if (arr) { arr.push(child); }
				else { return (mouse && !this.mouseChildren) ? this : child; }
			}
		}
		return null;
	};
	
	/**
	 * @method _testMask
	 * @param {DisplayObject} target
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Boolean} Indicates whether the x/y is within the masked region.
	 * @protected
	 **/
	p._testMask = function(target, x, y) {
		var mask = target.mask;
		if (!mask || !mask.graphics || mask.graphics.isEmpty()) { return true; }
		
		var mtx = this._props.matrix, parent = target.parent;
		mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
		mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
		
		var ctx = createjs.DisplayObject._hitTestContext;
		ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
		
		// draw the mask as a solid fill:
		mask.graphics.drawAsPath(ctx);
		ctx.fillStyle = "#000";
		ctx.fill();
		
		if (!this._testHit(ctx)) { return false; }
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, 2, 2);
		
		return true;
	};
	
	/**
	 * @method _getBounds
	 * @param {Matrix2D} matrix
	 * @param {Boolean} ignoreTransform If true, does not apply this object's transform.
	 * @return {Rectangle}
	 * @protected
	 **/
	p._getBounds = function(matrix, ignoreTransform) {
		var bounds = this.DisplayObject_getBounds();
		if (bounds) { return this._transformBounds(bounds, matrix, ignoreTransform); }
		
		var mtx = this._props.matrix;
		mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
		if (matrix) { mtx.prependMatrix(matrix); }
		
		var l = this.children.length, rect=null;
		for (var i=0; i<l; i++) {
			var child = this.children[i];
			if (!child.visible || !(bounds = child._getBounds(mtx))) { continue; }
			if (rect) { rect.extend(bounds.x, bounds.y, bounds.width, bounds.height); }
			else { rect = bounds.clone(); }
		}
		return rect;
	};


	createjs.Container = createjs.promote(Container, "DisplayObject");
}());

//##############################################################################
// Stage.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * A stage is the root level {{#crossLink "Container"}}{{/crossLink}} for a display list. Each time its {{#crossLink "Stage/tick"}}{{/crossLink}}
	 * method is called, it will render its display list to its target canvas.
	 *
	 * <h4>Example</h4>
	 * This example creates a stage, adds a child to it, then uses {{#crossLink "Ticker"}}{{/crossLink}} to update the child
	 * and redraw the stage using {{#crossLink "Stage/update"}}{{/crossLink}}.
	 *
	 *      var stage = new createjs.Stage("canvasElementId");
	 *      var image = new createjs.Bitmap("imagePath.png");
	 *      stage.addChild(image);
	 *      createjs.Ticker.addEventListener("tick", handleTick);
	 *      function handleTick(event) {
	 *          image.x += 10;
	 *          stage.update();
	 *      }
	 *
	 * @class Stage
	 * @extends Container
	 * @constructor
	 * @param {HTMLCanvasElement | String | Object} canvas A canvas object that the Stage will render to, or the string id
	 * of a canvas object in the current document.
	 **/
	function Stage(canvas) {
		this.Container_constructor();
	
	
	// public properties:
		/**
		 * Indicates whether the stage should automatically clear the canvas before each render. You can set this to <code>false</code>
		 * to manually control clearing (for generative art, or when pointing multiple stages at the same canvas for
		 * example).
		 *
		 * <h4>Example</h4>
		 *
		 *      var stage = new createjs.Stage("canvasId");
		 *      stage.autoClear = false;
		 *
		 * @property autoClear
		 * @type Boolean
		 * @default true
		 **/
		this.autoClear = true;
	
		/**
		 * The canvas the stage will render to. Multiple stages can share a single canvas, but you must disable autoClear for all but the
		 * first stage that will be ticked (or they will clear each other's render).
		 *
		 * When changing the canvas property you must disable the events on the old canvas, and enable events on the
		 * new canvas or mouse events will not work as expected. For example:
		 *
		 *      myStage.enableDOMEvents(false);
		 *      myStage.canvas = anotherCanvas;
		 *      myStage.enableDOMEvents(true);
		 *
		 * @property canvas
		 * @type HTMLCanvasElement | Object
		 **/
		this.canvas = (typeof canvas == "string") ? document.getElementById(canvas) : canvas;
	
		/**
		 * The current mouse X position on the canvas. If the mouse leaves the canvas, this will indicate the most recent
		 * position over the canvas, and mouseInBounds will be set to false.
		 * @property mouseX
		 * @type Number
		 * @readonly
		 **/
		this.mouseX = 0;
	
		/**
		 * The current mouse Y position on the canvas. If the mouse leaves the canvas, this will indicate the most recent
		 * position over the canvas, and mouseInBounds will be set to false.
		 * @property mouseY
		 * @type Number
		 * @readonly
		 **/
		this.mouseY = 0;
	
		/**
		 * Specifies the area of the stage to affect when calling update. This can be use to selectively
		 * re-draw specific regions of the canvas. If null, the whole canvas area is drawn.
		 * @property drawRect
		 * @type {Rectangle}
		 */
		this.drawRect = null;
	
		/**
		 * Indicates whether display objects should be rendered on whole pixels. You can set the
		 * {{#crossLink "DisplayObject/snapToPixel"}}{{/crossLink}} property of
		 * display objects to false to enable/disable this behaviour on a per instance basis.
		 * @property snapToPixelEnabled
		 * @type Boolean
		 * @default false
		 **/
		this.snapToPixelEnabled = false;
	
		/**
		 * Indicates whether the mouse is currently within the bounds of the canvas.
		 * @property mouseInBounds
		 * @type Boolean
		 * @default false
		 **/
		this.mouseInBounds = false;
	
		/**
		 * If true, tick callbacks will be called on all display objects on the stage prior to rendering to the canvas.
		 * @property tickOnUpdate
		 * @type Boolean
		 * @default true
		 **/
		this.tickOnUpdate = true;
	
		/**
		 * If true, mouse move events will continue to be called when the mouse leaves the target canvas. See
		 * {{#crossLink "Stage/mouseInBounds:property"}}{{/crossLink}}, and {{#crossLink "MouseEvent"}}{{/crossLink}}
		 * x/y/rawX/rawY.
		 * @property mouseMoveOutside
		 * @type Boolean
		 * @default false
		 **/
		this.mouseMoveOutside = false;
		
		
		/**
		 * Prevents selection of other elements in the html page if the user clicks and drags, or double clicks on the canvas.
		 * This works by calling `preventDefault()` on any mousedown events (or touch equivalent) originating on the canvas.
		 * @property preventSelection
		 * @type Boolean
		 * @default true
		 **/
		this.preventSelection = true;
	
		/**
		 * The hitArea property is not supported for Stage.
		 * @property hitArea
		 * @type {DisplayObject}
		 * @default null
		 */
		 
		 
	// private properties:
		/**
		 * Holds objects with data for each active pointer id. Each object has the following properties:
		 * x, y, event, target, overTarget, overX, overY, inBounds, posEvtObj (native event that last updated position)
		 * @property _pointerData
		 * @type {Object}
		 * @private
		 */
		this._pointerData = {};
	
		/**
		 * Number of active pointers.
		 * @property _pointerCount
		 * @type {Object}
		 * @private
		 */
		this._pointerCount = 0;
	
		/**
		 * The ID of the primary pointer.
		 * @property _primaryPointerID
		 * @type {Object}
		 * @private
		 */
		this._primaryPointerID = null;
	
		/**
		 * @property _mouseOverIntervalID
		 * @protected
		 * @type Number
		 **/
		this._mouseOverIntervalID = null;
		
		/**
		 * @property _nextStage
		 * @protected
		 * @type Stage
		 **/
		this._nextStage = null;
		
		/**
		 * @property _prevStage
		 * @protected
		 * @type Stage
		 **/
		this._prevStage = null;
		
		
	// initialize:
		this.enableDOMEvents(true);
	}
	var p = createjs.extend(Stage, createjs.Container);

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// events:
	/**
	 * Dispatched when the user moves the mouse over the canvas.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event stagemousemove
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the user presses their left mouse button on the canvas. See the {{#crossLink "MouseEvent"}}{{/crossLink}}
	 * class for a listing of event properties.
	 * @event stagemousedown
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the user the user presses somewhere on the stage, then releases the mouse button anywhere that the page can detect it (this varies slightly between browsers).
	 * You can use {{#crossLink "Stage/mouseInBounds:property"}}{{/crossLink}} to check whether the mouse is currently within the stage bounds.
	 * See the {{#crossLink "MouseEvent"}}{{/crossLink}} class for a listing of event properties.
	 * @event stagemouseup
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when the mouse moves from within the canvas area (mouseInBounds == true) to outside it (mouseInBounds == false).
	 * This is currently only dispatched for mouse input (not touch). See the {{#crossLink "MouseEvent"}}{{/crossLink}}
	 * class for a listing of event properties.
	 * @event mouseleave
	 * @since 0.7.0
	 */

	/**
	 * Dispatched when the mouse moves into the canvas area (mouseInBounds == false) from outside it (mouseInBounds == true).
	 * This is currently only dispatched for mouse input (not touch). See the {{#crossLink "MouseEvent"}}{{/crossLink}}
	 * class for a listing of event properties.
	 * @event mouseenter
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately before the tick event is propagated through the display list.
	 * You can call preventDefault on the event object to cancel propagating the tick event.
	 * @event tickstart
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately after the tick event is propagated through the display list. Does not fire if
	 * tickOnUpdate is false. Precedes the "drawstart" event.
	 * @event tickend
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately before the canvas is cleared and the display list is drawn to it.
	 * You can call preventDefault on the event object to cancel the draw.
	 * @event drawstart
	 * @since 0.7.0
	 */
	 
	/**
	 * Dispatched each update immediately after the display list is drawn to the canvas and the canvas context is restored.
	 * @event drawend
	 * @since 0.7.0
	 */

	 
// getter / setters:
	/**
	 * Specifies a target stage that will have mouse / touch interactions relayed to it after this stage handles them.
	 * This can be useful in cases where you have multiple layered canvases and want user interactions
	 * events to pass through. For example, this would relay mouse events from topStage to bottomStage:
	 *
	 *      topStage.nextStage = bottomStage;
	 *
	 * To disable relaying, set nextStage to null.
	 * 
	 * MouseOver, MouseOut, RollOver, and RollOut interactions are also passed through using the mouse over settings
	 * of the top-most stage, but are only processed if the target stage has mouse over interactions enabled.
	 * Considerations when using roll over in relay targets:<OL>
	 * <LI> The top-most (first) stage must have mouse over interactions enabled (via enableMouseOver)</LI>
	 * <LI> All stages that wish to participate in mouse over interaction must enable them via enableMouseOver</LI>
	 * <LI> All relay targets will share the frequency value of the top-most stage</LI>
	 * </OL>
	 * To illustrate, in this example the targetStage would process mouse over interactions at 10hz (despite passing
	 * 30 as it's desired frequency):
	 * 	topStage.nextStage = targetStage;
	 * 	topStage.enableMouseOver(10);
	 * 	targetStage.enableMouseOver(30);
	 * 
	 * If the target stage's canvas is completely covered by this stage's canvas, you may also want to disable its
	 * DOM events using:
	 * 
	 *	targetStage.enableDOMEvents(false);
	 * 
	 * @property nextStage
	 * @type {Stage}
	 **/
	p._get_nextStage = function() {
		return this._nextStage;
	};
	p._set_nextStage = function(value) {
		if (this._nextStage) { this._nextStage._prevStage = null; }
		if (value) { value._prevStage = this; }
		this._nextStage = value;
	};
	
	try {
		Object.defineProperties(p, {
			nextStage: { get: p._get_nextStage, set: p._set_nextStage }
		});
	} catch (e) {} // TODO: use Log


// public methods:
	/**
	 * Each time the update method is called, the stage will call {{#crossLink "Stage/tick"}}{{/crossLink}}
	 * unless {{#crossLink "Stage/tickOnUpdate:property"}}{{/crossLink}} is set to false,
	 * and then render the display list to the canvas.
	 *
	 * @method update
	 * @param {Object} [props] Props object to pass to `tick()`. Should usually be a {{#crossLink "Ticker"}}{{/crossLink}} event object, or similar object with a delta property.
	 **/
	p.update = function(props) {
		if (!this.canvas) { return; }
		if (this.tickOnUpdate) { this.tick(props); }
		if (this.dispatchEvent("drawstart", false, true) === false) { return; }
		createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
		var r = this.drawRect, ctx = this.canvas.getContext("2d");
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		if (this.autoClear) {
			if (r) { ctx.clearRect(r.x, r.y, r.width, r.height); }
			else { ctx.clearRect(0, 0, this.canvas.width+1, this.canvas.height+1); }
		}
		ctx.save();
		if (this.drawRect) {
			ctx.beginPath();
			ctx.rect(r.x, r.y, r.width, r.height);
			ctx.clip();
		}
		this.updateContext(ctx);
		this.draw(ctx, false);
		ctx.restore();
		this.dispatchEvent("drawend");
	};
	
	/**
	 * Propagates a tick event through the display list. This is automatically called by {{#crossLink "Stage/update"}}{{/crossLink}}
	 * unless {{#crossLink "Stage/tickOnUpdate:property"}}{{/crossLink}} is set to false.
	 *
	 * If a props object is passed to `tick()`, then all of its properties will be copied to the event object that is
	 * propagated to listeners.
	 *
	 * Some time-based features in EaselJS (for example {{#crossLink "Sprite/framerate"}}{{/crossLink}} require that
	 * a {{#crossLink "Ticker/tick:event"}}{{/crossLink}} event object (or equivalent object with a delta property) be
	 * passed as the `props` parameter to `tick()`. For example:
	 *
	 * 	Ticker.on("tick", handleTick);
	 * 	function handleTick(evtObj) {
	 * 		// clone the event object from Ticker, and add some custom data to it:
	 * 		var evt = evtObj.clone().set({greeting:"hello", name:"world"});
	 * 		
	 * 		// pass it to stage.update():
	 * 		myStage.update(evt); // subsequently calls tick() with the same param
	 * 	}
	 * 	
	 * 	// ...
	 * 	myDisplayObject.on("tick", handleDisplayObjectTick);
	 * 	function handleDisplayObjectTick(evt) {
	 * 		console.log(evt.delta); // the delta property from the Ticker tick event object
	 * 		console.log(evt.greeting, evt.name); // custom data: "hello world"
	 * 	}
	 * 
	 * @method tick
	 * @param {Object} [props] An object with properties that should be copied to the event object. Should usually be a Ticker event object, or similar object with a delta property.
	 **/
	p.tick = function(props) {
		if (!this.tickEnabled || this.dispatchEvent("tickstart", false, true) === false) { return; }
		var evtObj = new createjs.Event("tick");
		if (props) {
			for (var n in props) {
				if (props.hasOwnProperty(n)) { evtObj[n] = props[n]; }
			}
		}
		this._tick(evtObj);
		this.dispatchEvent("tickend");
	};

	/**
	 * Default event handler that calls the Stage {{#crossLink "Stage/update"}}{{/crossLink}} method when a {{#crossLink "DisplayObject/tick:event"}}{{/crossLink}}
	 * event is received. This allows you to register a Stage instance as a event listener on {{#crossLink "Ticker"}}{{/crossLink}}
	 * directly, using:
	 *
	 *      Ticker.addEventListener("tick", myStage");
	 *
	 * Note that if you subscribe to ticks using this pattern, then the tick event object will be passed through to
	 * display object tick handlers, instead of <code>delta</code> and <code>paused</code> parameters.
	 * @property handleEvent
	 * @type Function
	 **/
	p.handleEvent = function(evt) {
		if (evt.type == "tick") { this.update(evt); }
	};

	/**
	 * Clears the target canvas. Useful if {{#crossLink "Stage/autoClear:property"}}{{/crossLink}} is set to `false`.
	 * @method clear
	 **/
	p.clear = function() {
		if (!this.canvas) { return; }
		var ctx = this.canvas.getContext("2d");
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, this.canvas.width+1, this.canvas.height+1);
	};

	/**
	 * Returns a data url that contains a Base64-encoded image of the contents of the stage. The returned data url can
	 * be specified as the src value of an image element.
	 * @method toDataURL
	 * @param {String} [backgroundColor] The background color to be used for the generated image. Any valid CSS color
	 * value is allowed. The default value is a transparent background.
	 * @param {String} [mimeType="image/png"] The MIME type of the image format to be create. The default is "image/png". If an unknown MIME type
	 * is passed in, or if the browser does not support the specified MIME type, the default value will be used.
	 * @return {String} a Base64 encoded image.
	 **/
	p.toDataURL = function(backgroundColor, mimeType) {
		var data, ctx = this.canvas.getContext('2d'), w = this.canvas.width, h = this.canvas.height;

		if (backgroundColor) {
			data = ctx.getImageData(0, 0, w, h);
			var compositeOperation = ctx.globalCompositeOperation;
			ctx.globalCompositeOperation = "destination-over";
			
			ctx.fillStyle = backgroundColor;
			ctx.fillRect(0, 0, w, h);
		}

		var dataURL = this.canvas.toDataURL(mimeType||"image/png");

		if(backgroundColor) {
			ctx.putImageData(data, 0, 0);
			ctx.globalCompositeOperation = compositeOperation;
		}

		return dataURL;
	};

	/**
	 * Enables or disables (by passing a frequency of 0) mouse over ({{#crossLink "DisplayObject/mouseover:event"}}{{/crossLink}}
	 * and {{#crossLink "DisplayObject/mouseout:event"}}{{/crossLink}}) and roll over events ({{#crossLink "DisplayObject/rollover:event"}}{{/crossLink}}
	 * and {{#crossLink "DisplayObject/rollout:event"}}{{/crossLink}}) for this stage's display list. These events can
	 * be expensive to generate, so they are disabled by default. The frequency of the events can be controlled
	 * independently of mouse move events via the optional `frequency` parameter.
	 *
	 * <h4>Example</h4>
	 *
	 *      var stage = new createjs.Stage("canvasId");
	 *      stage.enableMouseOver(10); // 10 updates per second
	 *
	 * @method enableMouseOver
	 * @param {Number} [frequency=20] Optional param specifying the maximum number of times per second to broadcast
	 * mouse over/out events. Set to 0 to disable mouse over events completely. Maximum is 50. A lower frequency is less
	 * responsive, but uses less CPU.
	 **/
	p.enableMouseOver = function(frequency) {
		if (this._mouseOverIntervalID) {
			clearInterval(this._mouseOverIntervalID);
			this._mouseOverIntervalID = null;
			if (frequency == 0) {
				this._testMouseOver(true);
			}
		}
		if (frequency == null) { frequency = 20; }
		else if (frequency <= 0) { return; }
		var o = this;
		this._mouseOverIntervalID = setInterval(function(){ o._testMouseOver(); }, 1000/Math.min(50,frequency));
	};

	/**
	 * Enables or disables the event listeners that stage adds to DOM elements (window, document and canvas). It is good
	 * practice to disable events when disposing of a Stage instance, otherwise the stage will continue to receive
	 * events from the page.
	 *
	 * When changing the canvas property you must disable the events on the old canvas, and enable events on the
	 * new canvas or mouse events will not work as expected. For example:
	 *
	 *      myStage.enableDOMEvents(false);
	 *      myStage.canvas = anotherCanvas;
	 *      myStage.enableDOMEvents(true);
	 *
	 * @method enableDOMEvents
	 * @param {Boolean} [enable=true] Indicates whether to enable or disable the events. Default is true.
	 **/
	p.enableDOMEvents = function(enable) {
		if (enable == null) { enable = true; }
		var n, o, ls = this._eventListeners;
		if (!enable && ls) {
			for (n in ls) {
				o = ls[n];
				o.t.removeEventListener(n, o.f, false);
			}
			this._eventListeners = null;
		} else if (enable && !ls && this.canvas) {
			var t = window.addEventListener ? window : document;
			var _this = this;
			ls = this._eventListeners = {};
			ls["mouseup"] = {t:t, f:function(e) { _this._handleMouseUp(e)} };
			ls["mousemove"] = {t:t, f:function(e) { _this._handleMouseMove(e)} };
			ls["dblclick"] = {t:this.canvas, f:function(e) { _this._handleDoubleClick(e)} };
			ls["mousedown"] = {t:this.canvas, f:function(e) { _this._handleMouseDown(e)} };

			for (n in ls) {
				o = ls[n];
				o.t.addEventListener(n, o.f, false);
			}
		}
	};

	/**
	 * Stage instances cannot be cloned.
	 * @method clone
	 **/
	p.clone = function() {
		throw("Stage cannot be cloned.");
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Stage (name="+  this.name +")]";
	};


// private methods:
	/**
	 * @method _getElementRect
	 * @protected
	 * @param {HTMLElement} e
	 **/
	p._getElementRect = function(e) {
		var bounds;
		try { bounds = e.getBoundingClientRect(); } // this can fail on disconnected DOM elements in IE9
		catch (err) { bounds = {top: e.offsetTop, left: e.offsetLeft, width:e.offsetWidth, height:e.offsetHeight}; }

		var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
		var offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop  || document.body.clientTop  || 0);

		var styles = window.getComputedStyle ? getComputedStyle(e,null) : e.currentStyle; // IE <9 compatibility.
		var padL = parseInt(styles.paddingLeft)+parseInt(styles.borderLeftWidth);
		var padT = parseInt(styles.paddingTop)+parseInt(styles.borderTopWidth);
		var padR = parseInt(styles.paddingRight)+parseInt(styles.borderRightWidth);
		var padB = parseInt(styles.paddingBottom)+parseInt(styles.borderBottomWidth);

		// note: in some browsers bounds properties are read only.
		return {
			left: bounds.left+offX+padL,
			right: bounds.right+offX-padR,
			top: bounds.top+offY+padT,
			bottom: bounds.bottom+offY-padB
		}
	};

	/**
	 * @method _getPointerData
	 * @protected
	 * @param {Number} id
	 **/
	p._getPointerData = function(id) {
		var data = this._pointerData[id];
		if (!data) { data = this._pointerData[id] = {x:0,y:0}; }
		return data;
	};

	/**
	 * @method _handleMouseMove
	 * @protected
	 * @param {MouseEvent} e
	 **/
	p._handleMouseMove = function(e) {
		if(!e){ e = window.event; }
		this._handlePointerMove(-1, e, e.pageX, e.pageY);
	};

	/**
	 * @method _handlePointerMove
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Number} pageX
	 * @param {Number} pageY
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handlePointerMove = function(id, e, pageX, pageY, owner) {
		if (this._prevStage && owner === undefined) { return; } // redundant listener.
		if (!this.canvas) { return; }
		var nextStage=this._nextStage, o=this._getPointerData(id);

		var inBounds = o.inBounds;
		this._updatePointerPosition(id, e, pageX, pageY);
		if (inBounds || o.inBounds || this.mouseMoveOutside) {
			if (id === -1 && o.inBounds == !inBounds) {
				this._dispatchMouseEvent(this, (inBounds ? "mouseleave" : "mouseenter"), false, id, o, e);
			}
			
			this._dispatchMouseEvent(this, "stagemousemove", false, id, o, e);
			this._dispatchMouseEvent(o.target, "pressmove", true, id, o, e);
		}
		
		nextStage&&nextStage._handlePointerMove(id, e, pageX, pageY, null);
	};

	/**
	 * @method _updatePointerPosition
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Number} pageX
	 * @param {Number} pageY
	 **/
	p._updatePointerPosition = function(id, e, pageX, pageY) {
		var rect = this._getElementRect(this.canvas);
		pageX -= rect.left;
		pageY -= rect.top;

		var w = this.canvas.width;
		var h = this.canvas.height;
		pageX /= (rect.right-rect.left)/w;
		pageY /= (rect.bottom-rect.top)/h;
		var o = this._getPointerData(id);
		if (o.inBounds = (pageX >= 0 && pageY >= 0 && pageX <= w-1 && pageY <= h-1)) {
			o.x = pageX;
			o.y = pageY;
		} else if (this.mouseMoveOutside) {
			o.x = pageX < 0 ? 0 : (pageX > w-1 ? w-1 : pageX);
			o.y = pageY < 0 ? 0 : (pageY > h-1 ? h-1 : pageY);
		}

		o.posEvtObj = e;
		o.rawX = pageX;
		o.rawY = pageY;

		if (id === this._primaryPointerID || id === -1) {
			this.mouseX = o.x;
			this.mouseY = o.y;
			this.mouseInBounds = o.inBounds;
		}
	};

	/**
	 * @method _handleMouseUp
	 * @protected
	 * @param {MouseEvent} e
	 **/
	p._handleMouseUp = function(e) {
		this._handlePointerUp(-1, e, false);
	};

	/**
	 * @method _handlePointerUp
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Boolean} clear
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handlePointerUp = function(id, e, clear, owner) {
		var nextStage = this._nextStage, o = this._getPointerData(id);
		if (this._prevStage && owner === undefined) { return; } // redundant listener.
		
		var target=null, oTarget = o.target;
		if (!owner && (oTarget || nextStage)) { target = this._getObjectsUnderPoint(o.x, o.y, null, true); }
		
		if (o.down) { this._dispatchMouseEvent(this, "stagemouseup", false, id, o, e, target); o.down = false; }
		
		if (target == oTarget) { this._dispatchMouseEvent(oTarget, "click", true, id, o, e); }
		this._dispatchMouseEvent(oTarget, "pressup", true, id, o, e);
		
		if (clear) {
			if (id==this._primaryPointerID) { this._primaryPointerID = null; }
			delete(this._pointerData[id]);
		} else { o.target = null; }
		
		nextStage&&nextStage._handlePointerUp(id, e, clear, owner || target && this);
	};

	/**
	 * @method _handleMouseDown
	 * @protected
	 * @param {MouseEvent} e
	 **/
	p._handleMouseDown = function(e) {
		this._handlePointerDown(-1, e, e.pageX, e.pageY);
	};

	/**
	 * @method _handlePointerDown
	 * @protected
	 * @param {Number} id
	 * @param {Event} e
	 * @param {Number} pageX
	 * @param {Number} pageY
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handlePointerDown = function(id, e, pageX, pageY, owner) {
		if (this.preventSelection) { e.preventDefault(); }
		if (this._primaryPointerID == null || id === -1) { this._primaryPointerID = id; } // mouse always takes over.
		
		if (pageY != null) { this._updatePointerPosition(id, e, pageX, pageY); }
		var target = null, nextStage = this._nextStage, o = this._getPointerData(id);
		if (!owner) { target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true); }

		if (o.inBounds) { this._dispatchMouseEvent(this, "stagemousedown", false, id, o, e, target); o.down = true; }
		this._dispatchMouseEvent(target, "mousedown", true, id, o, e);
		
		nextStage&&nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this);
	};

	/**
	 * @method _testMouseOver
	 * @param {Boolean} clear If true, clears the mouseover / rollover (ie. no target)
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 * @param {Stage} eventTarget The stage that the cursor is actively over.
	 * @protected
	 **/
	p._testMouseOver = function(clear, owner, eventTarget) {
		if (this._prevStage && owner === undefined) { return; } // redundant listener.
		
		var nextStage = this._nextStage;
		if (!this._mouseOverIntervalID) {
			// not enabled for mouseover, but should still relay the event.
			nextStage&&nextStage._testMouseOver(clear, owner, eventTarget);
			return;
		}
		var o = this._getPointerData(-1);
		// only update if the mouse position has changed. This provides a lot of optimization, but has some trade-offs.
		if (!o || (!clear && this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds)) { return; }
		
		var e = o.posEvtObj;
		var isEventTarget = eventTarget || e&&(e.target == this.canvas);
		var target=null, common = -1, cursor="", t, i, l;
		
		if (!owner && (clear || this.mouseInBounds && isEventTarget)) {
			target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
			this._mouseOverX = this.mouseX;
			this._mouseOverY = this.mouseY;
		}

		var oldList = this._mouseOverTarget||[];
		var oldTarget = oldList[oldList.length-1];
		var list = this._mouseOverTarget = [];

		// generate ancestor list and check for cursor:
		t = target;
		while (t) {
			list.unshift(t);
			if (!cursor) { cursor = t.cursor; }
			t = t.parent;
		}
		this.canvas.style.cursor = cursor;
		if (!owner && eventTarget) { eventTarget.canvas.style.cursor = cursor; }

		// find common ancestor:
		for (i=0,l=list.length; i<l; i++) {
			if (list[i] != oldList[i]) { break; }
			common = i;
		}

		if (oldTarget != target) {
			this._dispatchMouseEvent(oldTarget, "mouseout", true, -1, o, e, target);
		}

		for (i=oldList.length-1; i>common; i--) {
			this._dispatchMouseEvent(oldList[i], "rollout", false, -1, o, e, target);
		}

		for (i=list.length-1; i>common; i--) {
			this._dispatchMouseEvent(list[i], "rollover", false, -1, o, e, oldTarget);
		}

		if (oldTarget != target) {
			this._dispatchMouseEvent(target, "mouseover", true, -1, o, e, oldTarget);
		}
		
		nextStage&&nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this);
	};

	/**
	 * @method _handleDoubleClick
	 * @protected
	 * @param {MouseEvent} e
	 * @param {Stage} owner Indicates that the event has already been captured & handled by the indicated stage.
	 **/
	p._handleDoubleClick = function(e, owner) {
		var target=null, nextStage=this._nextStage, o=this._getPointerData(-1);
		if (!owner) {
			target = this._getObjectsUnderPoint(o.x, o.y, null, true);
			this._dispatchMouseEvent(target, "dblclick", true, -1, o, e);
		}
		nextStage&&nextStage._handleDoubleClick(e, owner || target && this);
	};

	/**
	 * @method _dispatchMouseEvent
	 * @protected
	 * @param {DisplayObject} target
	 * @param {String} type
	 * @param {Boolean} bubbles
	 * @param {Number} pointerId
	 * @param {Object} o
	 * @param {MouseEvent} [nativeEvent]
	 * @param {DisplayObject} [relatedTarget]
	 **/
	p._dispatchMouseEvent = function(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
		// TODO: might be worth either reusing MouseEvent instances, or adding a willTrigger method to avoid GC.
		if (!target || (!bubbles && !target.hasEventListener(type))) { return; }
		/*
		// TODO: account for stage transformations?
		this._mtx = this.getConcatenatedMatrix(this._mtx).invert();
		var pt = this._mtx.transformPoint(o.x, o.y);
		var evt = new createjs.MouseEvent(type, bubbles, false, pt.x, pt.y, nativeEvent, pointerId, pointerId==this._primaryPointerID || pointerId==-1, o.rawX, o.rawY);
		*/
		var evt = new createjs.MouseEvent(type, bubbles, false, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || pointerId === -1, o.rawX, o.rawY, relatedTarget);
		target.dispatchEvent(evt);
	};


	createjs.Stage = createjs.promote(Stage, "Container");
}());

//##############################################################################
// Bitmap.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	
	/**
	 * A Bitmap represents an Image, Canvas, or Video in the display list. A Bitmap can be instantiated using an existing
	 * HTML element, or a string.
	 *
	 * <h4>Example</h4>
	 *
	 *      var bitmap = new createjs.Bitmap("imagePath.jpg");
	 *
	 * <strong>Notes:</strong>
	 * <ol>
	 *     <li>When a string path or image tag that is not yet loaded is used, the stage may need to be redrawn before it
	 *      will be displayed.</li>
	 *     <li>Bitmaps with an SVG source currently will not respect an alpha value other than 0 or 1. To get around this,
	 *     the Bitmap can be cached.</li>
	 *     <li>Bitmaps with an SVG source will taint the canvas with cross-origin data, which prevents interactivity. This
	 *     happens in all browsers except recent Firefox builds.</li>
	 *     <li>Images loaded cross-origin will throw cross-origin security errors when interacted with using a mouse, using
	 *     methods such as `getObjectUnderPoint`, or using filters, or caching. You can get around this by setting
	 *     `crossOrigin` flags on your images before passing them to EaselJS, eg: `img.crossOrigin="Anonymous";`</li>
	 * </ol>
	 *
	 * @class Bitmap
	 * @extends DisplayObject
	 * @constructor
	 * @param {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | String} imageOrUri The source object or URI to an image to
	 * display. This can be either an Image, Canvas, or Video object, or a string URI to an image file to load and use.
	 * If it is a URI, a new Image object will be constructed and assigned to the .image property.
	 **/
	function Bitmap(imageOrUri) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The image to render. This can be an Image, a Canvas, or a Video. Not all browsers (especially
		 * mobile browsers) support drawing video to a canvas.
		 * @property image
		 * @type HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
		 **/
		if (typeof imageOrUri == "string") {
			this.image = document.createElement("img");
			this.image.src = imageOrUri;
		} else {
			this.image = imageOrUri;
		}
	
		/**
		 * Specifies an area of the source image to draw. If omitted, the whole image will be drawn.
		 * Note that video sources must have a width / height set to work correctly with `sourceRect`.
		 * @property sourceRect
		 * @type Rectangle
		 * @default null
		 */
		this.sourceRect = null;
	}
	var p = createjs.extend(Bitmap, createjs.DisplayObject);
	
	
// public methods:
	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = Bitmap; // TODO: deprecated.

	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var image = this.image;
		var hasContent = this.cacheCanvas || (image && (image.naturalWidth || image.getContext || image.readyState >= 2));
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 *
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 * @return {Boolean}
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache) || !this.image) { return true; }
		var img = this.image, rect = this.sourceRect;
		if (rect) {
			// some browsers choke on out of bound values, so we'll fix them:
			var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height, x = 0, y = 0, w = img.width, h = img.height;
			if (x1 < 0) { x -= x1; x1 = 0; }
			if (x2 > w) { x2 = w; }
			if (y1 < 0) { y -= y1; y1 = 0; }
			if (y2 > h) { y2 = h; }
			ctx.drawImage(img, x1, y1, x2-x1, y2-y1, x, y, x2-x1, y2-y1);
		} else {
			ctx.drawImage(img, 0, 0);
		}
		return true;
	};
	
	//Note, the doc sections below document using the specified APIs (from DisplayObject)  from
	//Bitmap. This is why they have no method implementations.
	
	/**
	 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
	 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
	 *
	 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
	 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
	 * method.
	 * @method cache
	 **/
	
	/**
	 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
	 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
	 *
	 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
	 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
	 * method.
	 * @method updateCache
	 **/
	
	/**
	 * Because the content of a Bitmap is already in a simple format, cache is unnecessary for Bitmap instances.
	 * You should <b>not</b> cache Bitmap instances as it can degrade performance.
	 *
	 * <strong>However: If you want to use a filter on a Bitmap, you <em>MUST</em> cache it, or it will not work.</strong>
	 * To see the API for caching, please visit the DisplayObject {{#crossLink "DisplayObject/cache"}}{{/crossLink}}
	 * method.
	 * @method uncache
	 **/

	/**
	 * Docced in superclass.
	 */
	p.getBounds = function() {
		var rect = this.DisplayObject_getBounds();
		if (rect) { return rect; }
		var image = this.image, o = this.sourceRect || image;
		var hasContent = (image && (image.naturalWidth || image.getContext || image.readyState >= 2));
		return hasContent ? this._rectangle.setValues(0, 0, o.width, o.height) : null;
	};
	
	/**
	 * Returns a clone of the Bitmap instance.
	 * @method clone
	 * @return {Bitmap} a clone of the Bitmap instance.
	 **/
	p.clone = function() {
		var o = new Bitmap(this.image);
		if (this.sourceRect) { o.sourceRect = this.sourceRect.clone(); }
		this._cloneProps(o);
		return o;
	};
	
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Bitmap (name="+  this.name +")]";
	};

	
	createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject");
}());

//##############################################################################
// Sprite.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Displays a frame or sequence of frames (ie. an animation) from a SpriteSheet instance. A sprite sheet is a series of
	 * images (usually animation frames) combined into a single image. For example, an animation consisting of 8 100x100
	 * images could be combined into a 400x200 sprite sheet (4 frames across by 2 high). You can display individual frames,
	 * play frames as an animation, and even sequence animations together.
	 *
	 * See the {{#crossLink "SpriteSheet"}}{{/crossLink}} class for more information on setting up frames and animations.
	 *
	 * <h4>Example</h4>
	 *
	 *      var instance = new createjs.Sprite(spriteSheet);
	 *      instance.gotoAndStop("frameName");
	 *
	 * Until {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} or {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}} is called,
	 * only the first defined frame defined in the sprite sheet will be displayed.
	 *
	 * @class Sprite
	 * @extends DisplayObject
	 * @constructor
	 * @param {SpriteSheet} spriteSheet The SpriteSheet instance to play back. This includes the source image(s), frame
	 * dimensions, and frame data. See {{#crossLink "SpriteSheet"}}{{/crossLink}} for more information.
	 * @param {String|Number} [frameOrAnimation] The frame number or animation to play initially.
	 **/
	function Sprite(spriteSheet, frameOrAnimation) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The frame index that will be drawn when draw is called. Note that with some {{#crossLink "SpriteSheet"}}{{/crossLink}}
		 * definitions, this will advance non-sequentially. This will always be an integer value.
		 * @property currentFrame
		 * @type {Number}
		 * @default 0
		 * @readonly
		 **/
		this.currentFrame = 0;
	
		/**
		 * Returns the name of the currently playing animation.
		 * @property currentAnimation
		 * @type {String}
		 * @final
		 * @readonly
		 **/
		this.currentAnimation = null;
	
		/**
		 * Prevents the animation from advancing each tick automatically. For example, you could create a sprite
		 * sheet of icons, set paused to true, and display the appropriate icon by setting <code>currentFrame</code>.
		 * @property paused
		 * @type {Boolean}
		 * @default false
		 **/
		this.paused = true;
	
		/**
		 * The SpriteSheet instance to play back. This includes the source image, frame dimensions, and frame
		 * data. See {{#crossLink "SpriteSheet"}}{{/crossLink}} for more information.
		 * @property spriteSheet
		 * @type {SpriteSheet}
		 * @readonly
		 **/
		this.spriteSheet = spriteSheet;
	
		/**
		 * Specifies the current frame index within the currently playing animation. When playing normally, this will increase
		 * from 0 to n-1, where n is the number of frames in the current animation.
		 *
		 * This could be a non-integer value if
		 * using time-based playback (see {{#crossLink "Sprite/framerate"}}{{/crossLink}}, or if the animation's speed is
		 * not an integer.
		 * @property currentAnimationFrame
		 * @type {Number}
		 * @default 0
		 **/
		this.currentAnimationFrame = 0;
	
		/**
		 * By default Sprite instances advance one frame per tick. Specifying a framerate for the Sprite (or its related
		 * SpriteSheet) will cause it to advance based on elapsed time between ticks as appropriate to maintain the target
		 * framerate.
		 *
		 * For example, if a Sprite with a framerate of 10 is placed on a Stage being updated at 40fps, then the Sprite will
		 * advance roughly one frame every 4 ticks. This will not be exact, because the time between each tick will
		 * vary slightly between frames.
		 *
		 * This feature is dependent on the tick event object (or an object with an appropriate "delta" property) being
		 * passed into {{#crossLink "Stage/update"}}{{/crossLink}}.
		 * @property framerate
		 * @type {Number}
		 * @default 0
		 **/
		this.framerate = 0;
	
	
	// private properties:
		/**
		 * Current animation object.
		 * @property _animation
		 * @protected
		 * @type {Object}
		 * @default null
		 **/
		this._animation = null;
	
		/**
		 * Current frame index.
		 * @property _currentFrame
		 * @protected
		 * @type {Number}
		 * @default null
		 **/
		this._currentFrame = null;
		
		/**
		 * Skips the next auto advance. Used by gotoAndPlay to avoid immediately jumping to the next frame
		 * @property _skipAdvance
		 * @protected
		 * @type {Boolean}
		 * @default false
		 **/
		this._skipAdvance = false;
		
		
		if (frameOrAnimation != null) { this.gotoAndPlay(frameOrAnimation); }
	}
	var p = createjs.extend(Sprite, createjs.DisplayObject);

	/**
	 * Constructor alias for backwards compatibility. This method will be removed in future versions.
	 * Subclasses should be updated to use {{#crossLink "Utility Methods/extends"}}{{/crossLink}}.
	 * @method initialize
	 * @deprecated in favour of `createjs.promote()`
	 **/
	p.initialize = Sprite; // TODO: Deprecated. This is for backwards support of FlashCC spritesheet export.


// events:
	/**
	 * Dispatched when an animation reaches its ends.
	 * @event animationend
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {String} name The name of the animation that just ended.
	 * @param {String} next The name of the next animation that will be played, or null. This will be the same as name if the animation is looping.
	 * @since 0.6.0
	 */
	 
	/**
	 * Dispatched any time the current frame changes. For example, this could be due to automatic advancement on a tick,
	 * or calling gotoAndPlay() or gotoAndStop().
	 * @event change
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 */


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || this.spriteSheet.complete;
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		this._normalizeFrame();
		var o = this.spriteSheet.getFrame(this._currentFrame|0);
		if (!o) { return false; }
		var rect = o.rect;
		if (rect.width && rect.height) { ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height); }
		return true;
	};

	//Note, the doc sections below document using the specified APIs (from DisplayObject)  from
	//Bitmap. This is why they have no method implementations.

	/**
	 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
	 * You should not cache Sprite instances as it can degrade performance.
	 * @method cache
	 **/

	/**
	 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
	 * You should not cache Sprite instances as it can degrade performance.
	 * @method updateCache
	 **/

	/**
	 * Because the content of a Sprite is already in a raster format, cache is unnecessary for Sprite instances.
	 * You should not cache Sprite instances as it can degrade performance.
	 * @method uncache
	 **/

	/**
	 * Play (unpause) the current animation. The Sprite will be paused if either {{#crossLink "Sprite/stop"}}{{/crossLink}}
	 * or {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} is called. Single frame animations will remain
	 * unchanged.
	 * @method play
	 **/
	p.play = function() {
		this.paused = false;
	};

	/**
	 * Stop playing a running animation. The Sprite will be playing if {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}}
	 * is called. Note that calling {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}} or {{#crossLink "Sprite/play"}}{{/crossLink}}
	 * will resume playback.
	 * @method stop
	 **/
	p.stop = function() {
		this.paused = true;
	};

	/**
	 * Sets paused to false and plays the specified animation name, named frame, or frame number.
	 * @method gotoAndPlay
	 * @param {String|Number} frameOrAnimation The frame number or animation name that the playhead should move to
	 * and begin playing.
	 **/
	p.gotoAndPlay = function(frameOrAnimation) {
		this.paused = false;
		this._skipAdvance = true;
		this._goto(frameOrAnimation);
	};

	/**
	 * Sets paused to true and seeks to the specified animation name, named frame, or frame number.
	 * @method gotoAndStop
	 * @param {String|Number} frameOrAnimation The frame number or animation name that the playhead should move to
	 * and stop.
	 **/
	p.gotoAndStop = function(frameOrAnimation) {
		this.paused = true;
		this._goto(frameOrAnimation);
	};

	/**
	 * Advances the playhead. This occurs automatically each tick by default.
	 * @param [time] {Number} The amount of time in ms to advance by. Only applicable if framerate is set on the Sprite
	 * or its SpriteSheet.
	 * @method advance
	*/
	p.advance = function(time) {
		var fps = this.framerate || this.spriteSheet.framerate;
		var t = (fps && time != null) ? time/(1000/fps) : 1;
		this._normalizeFrame(t);
	};
	
	/**
	 * Returns a {{#crossLink "Rectangle"}}{{/crossLink}} instance defining the bounds of the current frame relative to
	 * the origin. For example, a 90 x 70 frame with <code>regX=50</code> and <code>regY=40</code> would return a
	 * rectangle with [x=-50, y=-40, width=90, height=70]. This ignores transformations on the display object.
	 *
	 * Also see the SpriteSheet {{#crossLink "SpriteSheet/getFrameBounds"}}{{/crossLink}} method.
	 * @method getBounds
	 * @return {Rectangle} A Rectangle instance. Returns null if the frame does not exist, or the image is not fully
	 * loaded.
	 **/
	p.getBounds = function() {
		// TODO: should this normalizeFrame?
		return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
	};

	/**
	 * Returns a clone of the Sprite instance. Note that the same SpriteSheet is shared between cloned
	 * instances.
	 * @method clone
	 * @return {Sprite} a clone of the Sprite instance.
	 **/
	p.clone = function() {
		return this._cloneProps(new Sprite(this.spriteSheet));
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Sprite (name="+  this.name +")]";
	};

// private methods:
	/**
	 * @method _cloneProps
	 * @param {Sprite} o
	 * @return {Sprite} o
	 * @protected
	 **/
	p._cloneProps = function(o) {
		this.DisplayObject__cloneProps(o);
		o.currentFrame = this.currentFrame;
		o.currentAnimation = this.currentAnimation;
		o.paused = this.paused;
		o.currentAnimationFrame = this.currentAnimationFrame;
		o.framerate = this.framerate;
		
		o._animation = this._animation;
		o._currentFrame = this._currentFrame;
		o._skipAdvance = this._skipAdvance;
		return o;
	};
	
	/**
	 * Advances the <code>currentFrame</code> if paused is not true. This is called automatically when the {{#crossLink "Stage"}}{{/crossLink}}
	 * ticks.
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * @protected
	 * @method _tick
	 **/
	p._tick = function(evtObj) {
		if (!this.paused) {
			if (!this._skipAdvance) { this.advance(evtObj&&evtObj.delta); }
			this._skipAdvance = false;
		}
		this.DisplayObject__tick(evtObj);
	};


	/**
	 * Normalizes the current frame, advancing animations and dispatching callbacks as appropriate.
	 * @protected
	 * @method _normalizeFrame
	 **/
	p._normalizeFrame = function(frameDelta) {
		frameDelta = frameDelta || 0;
		var animation = this._animation;
		var paused = this.paused;
		var frame = this._currentFrame;
		var l;
		
		if (animation) {
			var speed = animation.speed || 1;
			var animFrame = this.currentAnimationFrame;
			l = animation.frames.length;
			if (animFrame + frameDelta * speed >= l) {
				var next = animation.next;
				if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) {
					// something changed in the event stack, so we shouldn't make any more changes here.
					return;
				} else if (next) {
					// sequence. Automatically calls _normalizeFrame again with the remaining frames.
					return this._goto(next, frameDelta - (l - animFrame) / speed);
				} else {
					// end.
					this.paused = true;
					animFrame = animation.frames.length - 1;
				}
			} else {
				animFrame += frameDelta * speed;
			}
			this.currentAnimationFrame = animFrame;
			this._currentFrame = animation.frames[animFrame | 0]
		} else {
			frame = (this._currentFrame += frameDelta);
			l = this.spriteSheet.getNumFrames();
			if (frame >= l && l > 0) {
				if (!this._dispatchAnimationEnd(animation, frame, paused, l - 1)) {
					// looped.
					if ((this._currentFrame -= l) >= l) { return this._normalizeFrame(); }
				}
			}
		}
		frame = this._currentFrame | 0;
		if (this.currentFrame != frame) {
			this.currentFrame = frame;
			this.dispatchEvent("change");
		}
	};

	/**
	 * Dispatches the "animationend" event. Returns true if a handler changed the animation (ex. calling {{#crossLink "Sprite/stop"}}{{/crossLink}},
	 * {{#crossLink "Sprite/gotoAndPlay"}}{{/crossLink}}, etc.)
	 * @property _dispatchAnimationEnd
	 * @private
	 * @type {Function}
	 **/
	p._dispatchAnimationEnd = function(animation, frame, paused, next, end) {
		var name = animation ? animation.name : null;
		if (this.hasEventListener("animationend")) {
			var evt = new createjs.Event("animationend");
			evt.name = name;
			evt.next = next;
			this.dispatchEvent(evt);
		}
		// did the animation get changed in the event stack?:
		var changed = (this._animation != animation || this._currentFrame != frame);
		// if the animation hasn't changed, but the sprite was paused, then we want to stick to the last frame:
		if (!changed && !paused && this.paused) { this.currentAnimationFrame = end; changed = true; }
		return changed;
	};

	/**
	 * Moves the playhead to the specified frame number or animation.
	 * @method _goto
	 * @param {String|Number} frameOrAnimation The frame number or animation that the playhead should move to.
	 * @param {Boolean} [frame] The frame of the animation to go to. Defaults to 0.
	 * @protected
	 **/
	p._goto = function(frameOrAnimation, frame) {
		this.currentAnimationFrame = 0;
		if (isNaN(frameOrAnimation)) {
			var data = this.spriteSheet.getAnimation(frameOrAnimation);
			if (data) {
				this._animation = data;
				this.currentAnimation = frameOrAnimation;
				this._normalizeFrame(frame);
			}
		} else {
			this.currentAnimation = this._animation = null;
			this._currentFrame = frameOrAnimation;
			this._normalizeFrame();
		}
	};


	createjs.Sprite = createjs.promote(Sprite, "DisplayObject");
}());

//##############################################################################
// Shape.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * A Shape allows you to display vector art in the display list. It composites a {{#crossLink "Graphics"}}{{/crossLink}}
	 * instance which exposes all of the vector drawing methods. The Graphics instance can be shared between multiple Shape
	 * instances to display the same vector graphics with different positions or transforms.
	 *
	 * If the vector art will not
	 * change between draws, you may want to use the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method to reduce the
	 * rendering cost.
	 *
	 * <h4>Example</h4>
	 *
	 *      var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 100, 100);
	 *      var shape = new createjs.Shape(graphics);
	 *
	 *      //Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
	 *      var shape = new createjs.Shape();
	 *      shape.graphics.beginFill("#ff0000").drawRect(0, 0, 100, 100);
	 *
	 * @class Shape
	 * @extends DisplayObject
	 * @constructor
	 * @param {Graphics} graphics Optional. The graphics instance to display. If null, a new Graphics instance will be created.
	 **/
	function Shape(graphics) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The graphics instance to display.
		 * @property graphics
		 * @type Graphics
		 **/
		this.graphics = graphics ? graphics : new createjs.Graphics();
	}
	var p = createjs.extend(Shape, createjs.DisplayObject);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/**
	 * Returns true or false indicating whether the Shape would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the Shape would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this.graphics && !this.graphics.isEmpty());
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the Shape into the specified context ignoring its visible, alpha, shadow, and transform. Returns true if
	 * the draw was handled (useful for overriding functionality).
	 *
	 * <i>NOTE: This method is mainly for internal use, though it may be useful for advanced uses.</i>
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} [ignoreCache=false] Indicates whether the draw operation should ignore any current cache. For example,
	 * used for drawing the cache (to prevent it from simply drawing an existing cache back into itself).
	 * @return {Boolean}
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }
		this.graphics.draw(ctx, this);
		return true;
	};

	/**
	 * Returns a clone of this Shape. Some properties that are specific to this instance's current context are reverted to
	 * their defaults (for example .parent).
	 * @method clone
	 * @param {Boolean} recursive If true, this Shape's {{#crossLink "Graphics"}}{{/crossLink}} instance will also be
	 * cloned. If false, the Graphics instance will be shared with the new Shape.
	 **/
	p.clone = function(recursive) {
		var g = (recursive && this.graphics) ? this.graphics.clone() : this.graphics;
		return  this._cloneProps(new Shape(g));
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Shape (name="+  this.name +")]";
	};


	createjs.Shape = createjs.promote(Shape, "DisplayObject");
}());

//##############################################################################
// Text.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Display one or more lines of dynamic text (not user editable) in the display list. Line wrapping support (using the
	 * lineWidth) is very basic, wrapping on spaces and tabs only. Note that as an alternative to Text, you can position HTML
	 * text above or below the canvas relative to items in the display list using the {{#crossLink "DisplayObject/localToGlobal"}}{{/crossLink}}
	 * method, or using {{#crossLink "DOMElement"}}{{/crossLink}}.
	 *
	 * <b>Please note that Text does not support HTML text, and can only display one font style at a time.</b> To use
	 * multiple font styles, you will need to create multiple text instances, and position them manually.
	 *
	 * <h4>Example</h4>
	 *
	 *      var text = new createjs.Text("Hello World", "20px Arial", "#ff7700");
	 *      text.x = 100;
	 *      text.textBaseline = "alphabetic";
	 *
	 * CreateJS Text supports web fonts (the same rules as Canvas). The font must be loaded and supported by the browser
	 * before it can be displayed.
	 *
	 * <strong>Note:</strong> Text can be expensive to generate, so cache instances where possible. Be aware that not all
	 * browsers will render Text exactly the same.
	 * @class Text
	 * @extends DisplayObject
	 * @constructor
	 * @param {String} [text] The text to display.
	 * @param {String} [font] The font style to use. Any valid value for the CSS font attribute is acceptable (ex. "bold
	 * 36px Arial").
	 * @param {String} [color] The color to draw the text in. Any valid value for the CSS color attribute is acceptable (ex.
	 * "#F00", "red", or "#FF0000").
	 **/
	function Text(text, font, color) {
		this.DisplayObject_constructor();
		
		
	// public properties:
		/**
		 * The text to display.
		 * @property text
		 * @type String
		 **/
		this.text = text;
	
		/**
		 * The font style to use. Any valid value for the CSS font attribute is acceptable (ex. "bold 36px Arial").
		 * @property font
		 * @type String
		 **/
		this.font = font;
	
		/**
		 * The color to draw the text in. Any valid value for the CSS color attribute is acceptable (ex. "#F00"). Default is "#000".
		 * It will also accept valid canvas fillStyle values.
		 * @property color
		 * @type String
		 **/
		this.color = color;
	
		/**
		 * The horizontal text alignment. Any of "start", "end", "left", "right", and "center". For detailed
		 * information view the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
		 * whatwg spec</a>. Default is "left".
		 * @property textAlign
		 * @type String
		 **/
		this.textAlign = "left";
	
		/**
		 * The vertical alignment point on the font. Any of "top", "hanging", "middle", "alphabetic", "ideographic", or
		 * "bottom". For detailed information view the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
		 * whatwg spec</a>. Default is "top".
		 * @property textBaseline
		 * @type String
		*/
		this.textBaseline = "top";
	
		/**
		 * The maximum width to draw the text. If maxWidth is specified (not null), the text will be condensed or
		 * shrunk to make it fit in this width. For detailed information view the
		 * <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#text-styles">
		 * whatwg spec</a>.
		 * @property maxWidth
		 * @type Number
		*/
		this.maxWidth = null;
	
		/**
		 * If greater than 0, the text will be drawn as a stroke (outline) of the specified width.
		 * @property outline
		 * @type Number
		 **/
		this.outline = 0;
	
		/**
		 * Indicates the line height (vertical distance between baselines) for multi-line text. If null or 0,
		 * the value of getMeasuredLineHeight is used.
		 * @property lineHeight
		 * @type Number
		 **/
		this.lineHeight = 0;
	
		/**
		 * Indicates the maximum width for a line of text before it is wrapped to multiple lines. If null,
		 * the text will not be wrapped.
		 * @property lineWidth
		 * @type Number
		 **/
		this.lineWidth = null;
	}
	var p = createjs.extend(Text, createjs.DisplayObject);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.

	
// static properties:
	/**
	 * @property _workingContext
	 * @type CanvasRenderingContext2D
	 * @private
	 **/
	var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
	if (canvas.getContext) { Text._workingContext = canvas.getContext("2d"); canvas.width = canvas.height = 1; }
	
	
// constants:
	/**
	 * Lookup table for the ratio to offset bounds x calculations based on the textAlign property.
	 * @property H_OFFSETS
	 * @type Object
	 * @protected
	 * @static
	 **/
	Text.H_OFFSETS = {start: 0, left: 0, center: -0.5, end: -1, right: -1};
	
	/**
	 * Lookup table for the ratio to offset bounds y calculations based on the textBaseline property.
	 * @property H_OFFSETS
	 * @type Object
	 * @protected
	 * @static
	 **/
	Text.V_OFFSETS = {top: 0, hanging: -0.01, middle: -0.4, alphabetic: -0.8, ideographic: -0.85, bottom: -1};


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this.text != null && this.text !== "");
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the Text into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }

		var col = this.color || "#000";
		if (this.outline) { ctx.strokeStyle = col; ctx.lineWidth = this.outline*1; }
		else { ctx.fillStyle = col; }
		
		this._drawText(this._prepContext(ctx));
		return true;
	};

	/**
	 * Returns the measured, untransformed width of the text without wrapping. Use getBounds for a more robust value.
	 * @method getMeasuredWidth
	 * @return {Number} The measured, untransformed width of the text.
	 **/
	p.getMeasuredWidth = function() {
		return this._getMeasuredWidth(this.text);
	};

	/**
	 * Returns an approximate line height of the text, ignoring the lineHeight property. This is based on the measured
	 * width of a "M" character multiplied by 1.2, which provides an approximate line height for most fonts.
	 * @method getMeasuredLineHeight
	 * @return {Number} an approximate line height of the text, ignoring the lineHeight property. This is
	 * based on the measured width of a "M" character multiplied by 1.2, which approximates em for most fonts.
	 **/
	p.getMeasuredLineHeight = function() {
		return this._getMeasuredWidth("M")*1.2;
	};

	/**
	 * Returns the approximate height of multi-line text by multiplying the number of lines against either the
	 * <code>lineHeight</code> (if specified) or {{#crossLink "Text/getMeasuredLineHeight"}}{{/crossLink}}. Note that
	 * this operation requires the text flowing logic to run, which has an associated CPU cost.
	 * @method getMeasuredHeight
	 * @return {Number} The approximate height of the untransformed multi-line text.
	 **/
	p.getMeasuredHeight = function() {
		return this._drawText(null,{}).height;
	};

	/**
	 * Docced in superclass.
	 */
	p.getBounds = function() {
		var rect = this.DisplayObject_getBounds();
		if (rect) { return rect; }
		if (this.text == null || this.text === "") { return null; }
		var o = this._drawText(null, {});
		var w = (this.maxWidth && this.maxWidth < o.width) ? this.maxWidth : o.width;
		var x = w * Text.H_OFFSETS[this.textAlign||"left"];
		var lineHeight = this.lineHeight||this.getMeasuredLineHeight();
		var y = lineHeight * Text.V_OFFSETS[this.textBaseline||"top"];
		return this._rectangle.setValues(x, y, w, o.height);
	};
	
	/**
	 * Returns an object with width, height, and lines properties. The width and height are the visual width and height
	 * of the drawn text. The lines property contains an array of strings, one for
	 * each line of text that will be drawn, accounting for line breaks and wrapping. These strings have trailing
	 * whitespace removed.
	 * @method getMetrics
	 * @return {Object} An object with width, height, and lines properties.
	 **/
	p.getMetrics = function() {
		var o = {lines:[]};
		o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline||"top"];
		return this._drawText(null, o, o.lines);
	};

	/**
	 * Returns a clone of the Text instance.
	 * @method clone
	 * @return {Text} a clone of the Text instance.
	 **/
	p.clone = function() {
		return this._cloneProps(new Text(this.text, this.font, this.color));
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Text (text="+  (this.text.length > 20 ? this.text.substr(0, 17)+"..." : this.text) +")]";
	};


// private methods:
	/**
	 * @method _cloneProps
	 * @param {Text} o
	 * @protected
	 * @return {Text} o
	 **/
	p._cloneProps = function(o) {
		this.DisplayObject__cloneProps(o);
		o.textAlign = this.textAlign;
		o.textBaseline = this.textBaseline;
		o.maxWidth = this.maxWidth;
		o.outline = this.outline;
		o.lineHeight = this.lineHeight;
		o.lineWidth = this.lineWidth;
		return o;
	};

	/**
	 * @method _getWorkingContext
	 * @param {CanvasRenderingContext2D} ctx
	 * @return {CanvasRenderingContext2D}
	 * @protected
	 **/
	p._prepContext = function(ctx) {
		ctx.font = this.font||"10px sans-serif";
		ctx.textAlign = this.textAlign||"left";
		ctx.textBaseline = this.textBaseline||"top";
		return ctx;
	};

	/**
	 * Draws multiline text.
	 * @method _drawText
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Object} o
	 * @param {Array} lines
	 * @return {Object}
	 * @protected
	 **/
	p._drawText = function(ctx, o, lines) {
		var paint = !!ctx;
		if (!paint) {
			ctx = Text._workingContext;
			ctx.save();
			this._prepContext(ctx);
		}
		var lineHeight = this.lineHeight||this.getMeasuredLineHeight();
		
		var maxW = 0, count = 0;
		var hardLines = String(this.text).split(/(?:\r\n|\r|\n)/);
		for (var i=0, l=hardLines.length; i<l; i++) {
			var str = hardLines[i];
			var w = null;
			
			if (this.lineWidth != null && (w = ctx.measureText(str).width) > this.lineWidth) {
				// text wrapping:
				var words = str.split(/(\s)/);
				str = words[0];
				w = ctx.measureText(str).width;
				
				for (var j=1, jl=words.length; j<jl; j+=2) {
					// Line needs to wrap:
					var wordW = ctx.measureText(words[j] + words[j+1]).width;
					if (w + wordW > this.lineWidth) {
						if (paint) { this._drawTextLine(ctx, str, count*lineHeight); }
						if (lines) { lines.push(str); }
						if (w > maxW) { maxW = w; }
						str = words[j+1];
						w = ctx.measureText(str).width;
						count++;
					} else {
						str += words[j] + words[j+1];
						w += wordW;
					}
				}
			}
			
			if (paint) { this._drawTextLine(ctx, str, count*lineHeight); }
			if (lines) { lines.push(str); }
			if (o && w == null) { w = ctx.measureText(str).width; }
			if (w > maxW) { maxW = w; }
			count++;
		}
		
		if (o) {
			o.width = maxW;
			o.height = count*lineHeight;
		}
		if (!paint) { ctx.restore(); }
		return o;
	};

	/**
	 * @method _drawTextLine
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {String} text
	 * @param {Number} y
	 * @protected
	 **/
	p._drawTextLine = function(ctx, text, y) {
		// Chrome 17 will fail to draw the text if the last param is included but null, so we feed it a large value instead:
		if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
		else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
	};
	
	
	/**
	 * @method _getMeasuredWidth
	 * @param {String} text
	 * @protected
	 **/
	p._getMeasuredWidth = function(text) {
		var ctx = Text._workingContext;
		ctx.save();
		var w = this._prepContext(ctx).measureText(text).width;
		ctx.restore();
		return w;
	};


	createjs.Text = createjs.promote(Text, "DisplayObject");
}());

//##############################################################################
// BitmapText.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";


// constructor:
	/**
	 * Displays text using bitmap glyphs defined in a sprite sheet. Multi-line text is supported
	 * using new line characters, but automatic wrapping is not supported. See the 
	 * {{#crossLink "BitmapText/spriteSheet:property"}}{{/crossLink}}
	 * property for more information on defining glyphs.
	 * 
	 * <strong>Important:</strong> BitmapText extends Container, but is not designed to be used as one.
	 * As such, methods like addChild and removeChild are disabled.
	 * @class BitmapText
	 * @extends DisplayObject
	 * @param {String} [text=""] The text to display.
	 * @param {SpriteSheet} [spriteSheet=null] The spritesheet that defines the character glyphs.
	 * @constructor
	 **/
	function BitmapText(text, spriteSheet) {
		this.Container_constructor();
		
		
	// public properties:
		/**
		 * The text to display.
		 * @property text
		 * @type String
		 * @default ""
		 **/
		this.text = text||"";
		
		/**
		 * A SpriteSheet instance that defines the glyphs for this bitmap text. Each glyph/character
		 * should have a single frame animation defined in the sprite sheet named the same as
		 * corresponding character. For example, the following animation definition:
		 *
		 * 		"A": {frames: [0]}
		 *
		 * would indicate that the frame at index 0 of the spritesheet should be drawn for the "A" character. The short form
		 * is also acceptable:
		 * 
		 * 		"A": 0
		 *
		 * Note that if a character in the text is not found in the sprite sheet, it will also
		 * try to use the alternate case (upper or lower).
		 *
		 * See SpriteSheet for more information on defining sprite sheet data.
		 * @property spriteSheet
		 * @type SpriteSheet
		 * @default null
		 **/
		this.spriteSheet = spriteSheet;
	
		/**
		 * The height of each line of text. If 0, then it will use a line height calculated
		 * by checking for the height of the "1", "T", or "L" character (in that order). If
		 * those characters are not defined, it will use the height of the first frame of the
		 * sprite sheet.
		 * @property lineHeight
		 * @type Number
		 * @default 0
		 **/
		this.lineHeight = 0;
	
		/**
		 * This spacing (in pixels) will be added after each character in the output.
		 * @property letterSpacing
		 * @type Number
		 * @default 0
		 **/
		this.letterSpacing = 0;
	
		/**
		 * If a space character is not defined in the sprite sheet, then empty pixels equal to
		 * spaceWidth will be inserted instead. If 0, then it will use a value calculated
		 * by checking for the width of the "1", "l", "E", or "A" character (in that order). If
		 * those characters are not defined, it will use the width of the first frame of the
		 * sprite sheet.
		 * @property spaceWidth
		 * @type Number
		 * @default 0
		 **/
		this.spaceWidth = 0;
		
		
	// private properties:
	 	/**
		 * @property _oldProps
		 * @type Object
		 * @protected
		 **/
		this._oldProps = {text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0};
	}
	var p = createjs.extend(BitmapText, createjs.Container);

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.

// static properties:
	/**
	 * BitmapText uses Sprite instances to draw text. To reduce the creation and destruction of instances (and thus garbage collection), it maintains
	 * an internal object pool of sprite instances to reuse. Increasing this value can cause more sprites to be
	 * retained, slightly increasing memory use, but reducing instantiation.
	 * @property maxPoolSize
	 * @type Number
	 * @static
	 * @default 100
	 **/
	BitmapText.maxPoolSize = 100;
	
	/**
	 * Sprite object pool.
	 * @type {Array}
	 * @static
	 * @private
	 */
	BitmapText._spritePool = [];

	
// public methods:
	/**
	 * Docced in superclass.
	 **/
	p.draw = function(ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return; }
		this._updateText();
		this.Container_draw(ctx, ignoreCache);
	};
	
	/**
	 * Docced in superclass.
	 **/
	p.getBounds = function() {
		this._updateText();
		return this.Container_getBounds();
	};
	
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function() {
		var hasContent = this.cacheCanvas || (this.spriteSheet && this.spriteSheet.complete && this.text);
		return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && hasContent);
	};
	
	p.clone = function() {
		return this._cloneProps(new BitmapText(this.text, this.spriteSheet));
	};
	
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method addChild
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method addChildAt
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method removeChild
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method removeChildAt
	 **/
	/**
	 * <strong>Disabled in BitmapText.</strong>
	 * @method removeAllChildren
	 **/
	p.addChild = p.addChildAt = p.removeChild = p.removeChildAt = p.removeAllChildren = function() {};


// private methods:
 	/**
	 * @method _cloneProps
	 * @param {BitmapText} o
	 * @return {BitmapText} o
	 * @protected
	 **/
	p._cloneProps = function(o) {
		this.Container__cloneProps(o);
		o.lineHeight = this.lineHeight;
		o.letterSpacing = this.letterSpacing;
		o.spaceWidth = this.spaceWidth;
		return o;
	};
	
	/**
	 * @method _getFrameIndex
	 * @param {String} character
	 * @param {SpriteSheet} spriteSheet
	 * @return {Number}
	 * @protected
	 **/
	p._getFrameIndex = function(character, spriteSheet) {
		var c, o = spriteSheet.getAnimation(character);
		if (!o) {
			(character != (c = character.toUpperCase())) || (character != (c = character.toLowerCase())) || (c=null);
			if (c) { o = spriteSheet.getAnimation(c); }
		}
		return o && o.frames[0];
	};
	
	/**
	 * @method _getFrame
	 * @param {String} character
	 * @param {SpriteSheet} spriteSheet
	 * @return {Object}
	 * @protected
	 **/
	p._getFrame = function(character, spriteSheet) {
		var index = this._getFrameIndex(character, spriteSheet);
		return index == null ? index : spriteSheet.getFrame(index);
	};
	
	/**
	 * @method _getLineHeight
	 * @param {SpriteSheet} ss
	 * @return {Number}
	 * @protected
	 **/
	p._getLineHeight = function(ss) {
		var frame = this._getFrame("1",ss) || this._getFrame("T",ss) || this._getFrame("L",ss) || ss.getFrame(0);
		return frame ? frame.rect.height : 1;
	};
	/**
	 * @method _getSpaceWidth
	 * @param {SpriteSheet} ss
	 * @return {Number}
	 * @protected
	 **/
	p._getSpaceWidth = function(ss) {
		var frame = this._getFrame("1",ss) || this._getFrame("l",ss) || this._getFrame("e",ss) || this._getFrame("a",ss) || ss.getFrame(0);
		return frame ? frame.rect.width : 1;
	};
	
	/**
	 * @method _drawText
	 * @protected
	 **/
	p._updateText = function() {
		var x=0, y=0, o=this._oldProps, change=false, spaceW=this.spaceWidth, lineH=this.lineHeight, ss=this.spriteSheet;
		var pool=BitmapText._spritePool, kids=this.children, childIndex=0, numKids=kids.length, sprite;
		
		for (var n in o) {
			if (o[n] != this[n]) {
				o[n] = this[n];
				change = true;
			}
		}
		if (!change) { return; }
		
		var hasSpace = !!this._getFrame(" ", ss);
		if (!hasSpace && !spaceW) { spaceW = this._getSpaceWidth(ss); }
		if (!lineH) { lineH = this._getLineHeight(ss); }
		
		for(var i=0, l=this.text.length; i<l; i++) {
			var character = this.text.charAt(i);
			if (character == " " && !hasSpace) {
				x += spaceW;
				continue;
			} else if (character=="\n" || character=="\r") {
				if (character=="\r" && this.text.charAt(i+1) == "\n") { i++; } // crlf
				x = 0;
				y += lineH;
				continue;
			}

			var index = this._getFrameIndex(character, ss);
			if (index == null) { continue; }
			
			if (childIndex < numKids) {
				sprite = kids[childIndex];
			} else {
				kids.push(sprite = pool.length ? pool.pop() : new createjs.Sprite());
				sprite.parent = this;
				numKids++;
			}
			sprite.spriteSheet = ss;
			sprite.gotoAndStop(index);
			sprite.x = x;
			sprite.y = y;
			childIndex++;
			
			x += sprite.getBounds().width + this.letterSpacing;
		}
		while (numKids > childIndex) {
			 // faster than removeChild.
			pool.push(sprite = kids.pop());
			sprite.parent = null;
			numKids--;
		}
		if (pool.length > BitmapText.maxPoolSize) { pool.length = BitmapText.maxPoolSize; }
	};


	createjs.BitmapText = createjs.promote(BitmapText, "Container");
}());

//##############################################################################
// SpriteSheetUtils.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";
	
	
// constructor:
	/**
	 * The SpriteSheetUtils class is a collection of static methods for working with {{#crossLink "SpriteSheet"}}{{/crossLink}}s.
	 * A sprite sheet is a series of images (usually animation frames) combined into a single image on a regular grid. For
	 * example, an animation consisting of 8 100x100 images could be combined into a 400x200 sprite sheet (4 frames across
	 * by 2 high). The SpriteSheetUtils class uses a static interface and should not be instantiated.
	 * @class SpriteSheetUtils
	 * @static
	 **/
	function SpriteSheetUtils() {
		throw "SpriteSheetUtils cannot be instantiated";
	}


// private static properties:
	/**
	 * @property _workingCanvas
	 * @static
	 * @type HTMLCanvasElement | Object
	 * @protected
	*/
	/**
	 * @property _workingContext
	 * @static
	 * @type CanvasRenderingContext2D
	 * @protected
	*/
	var canvas = (createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));
	if (canvas.getContext) {
		SpriteSheetUtils._workingCanvas = canvas;
		SpriteSheetUtils._workingContext = canvas.getContext("2d");
		canvas.width = canvas.height = 1;
	}


// public static methods:
	/**
	 * <b>This is an experimental method, and may be buggy. Please report issues.</b><br/><br/>
	 * Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both,
	 * and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names
	 * (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method.
	 * <br/><br/>
	 * For example:<br/>
	 * SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true);
	 * The above would add frames that are flipped horizontally AND frames that are flipped vertically.
	 * <br/><br/>
	 * Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some
	 * browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance,
	 * which is why addFlippedFrames is available.
	 * @method addFlippedFrames
	 * @static
	 * @param {SpriteSheet} spriteSheet
	 * @param {Boolean} horizontal If true, horizontally flipped frames will be added.
	 * @param {Boolean} vertical If true, vertically flipped frames will be added.
	 * @param {Boolean} both If true, frames that are flipped both horizontally and vertically will be added.
	 * @deprecated Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
	 **/
	SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
		if (!horizontal && !vertical && !both) { return; }

		var count = 0;
		if (horizontal) { SpriteSheetUtils._flip(spriteSheet,++count,true,false); }
		if (vertical) { SpriteSheetUtils._flip(spriteSheet,++count,false,true); }
		if (both) { SpriteSheetUtils._flip(spriteSheet,++count,true,true); }
	};

	/**
	 * Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is
	 * to use a spritesheet frame as the source for a bitmap fill.
	 *
	 * <strong>WARNING:</strong> In almost all cases it is better to display a single frame using a {{#crossLink "Sprite"}}{{/crossLink}}
	 * with a {{#crossLink "Sprite/gotoAndStop"}}{{/crossLink}} call than it is to slice out a frame using this
	 * method and display it with a Bitmap instance. You can also crop an image using the {{#crossLink "Bitmap/sourceRect"}}{{/crossLink}}
	 * property of {{#crossLink "Bitmap"}}{{/crossLink}}.
	 *
	 * The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
	 * @method extractFrame
	 * @static
	 * @param {SpriteSheet} spriteSheet The SpriteSheet instance to extract a frame from.
	 * @param {Number|String} frameOrAnimation The frame number or animation name to extract. If an animation
	 * name is specified, only the first frame of the animation will be extracted.
	 * @return {HTMLImageElement} a single frame of the specified sprite sheet as a new PNG image.
	*/
	SpriteSheetUtils.extractFrame = function(spriteSheet, frameOrAnimation) {
		if (isNaN(frameOrAnimation)) {
			frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0];
		}
		var data = spriteSheet.getFrame(frameOrAnimation);
		if (!data) { return null; }
		var r = data.rect;
		var canvas = SpriteSheetUtils._workingCanvas;
		canvas.width = r.width;
		canvas.height = r.height;
		SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
		var img = document.createElement("img");
		img.src = canvas.toDataURL("image/png");
		return img;
	};

	/**
	 * Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed
	 * JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of
	 * images (those with detail that lend itself to JPEG compression) this can provide significant file size savings
	 * versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
	 * @method mergeAlpha
	 * @static
	 * @param {HTMLImageElement} rbgImage The image (or canvas) containing the RGB channels to use.
	 * @param {HTMLImageElement} alphaImage The image (or canvas) containing the alpha channel to use.
	 * @param {HTMLCanvasElement} canvas Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
	 * @return {HTMLCanvasElement} A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
	 * @deprecated Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
	*/
	SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
		if (!canvas) { canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
		canvas.width = Math.max(alphaImage.width, rgbImage.width);
		canvas.height = Math.max(alphaImage.height, rgbImage.height);
		var ctx = canvas.getContext("2d");
		ctx.save();
		ctx.drawImage(rgbImage,0,0);
		ctx.globalCompositeOperation = "destination-in";
		ctx.drawImage(alphaImage,0,0);
		ctx.restore();
		return canvas;
	};


// private static methods:
	SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
		var imgs = spriteSheet._images;
		var canvas = SpriteSheetUtils._workingCanvas;
		var ctx = SpriteSheetUtils._workingContext;
		var il = imgs.length/count;
		for (var i=0;i<il;i++) {
			var src = imgs[i];
			src.__tmp = i; // a bit hacky, but faster than doing indexOf below.
			ctx.setTransform(1,0,0,1,0,0);
			ctx.clearRect(0,0,canvas.width+1,canvas.height+1);
			canvas.width = src.width;
			canvas.height = src.height;
			ctx.setTransform(h?-1:1, 0, 0, v?-1:1, h?src.width:0, v?src.height:0);
			ctx.drawImage(src,0,0);
			var img = document.createElement("img");
			img.src = canvas.toDataURL("image/png");
			// work around a strange bug in Safari:
			img.width = src.width;
			img.height = src.height;
			imgs.push(img);
		}

		var frames = spriteSheet._frames;
		var fl = frames.length/count;
		for (i=0;i<fl;i++) {
			src = frames[i];
			var rect = src.rect.clone();
			img = imgs[src.image.__tmp+il*count];

			var frame = {image:img,rect:rect,regX:src.regX,regY:src.regY};
			if (h) {
				rect.x = img.width-rect.x-rect.width; // update rect
				frame.regX = rect.width-src.regX; // update registration point
			}
			if (v) {
				rect.y = img.height-rect.y-rect.height;  // update rect
				frame.regY = rect.height-src.regY; // update registration point
			}
			frames.push(frame);
		}

		var sfx = "_"+(h?"h":"")+(v?"v":"");
		var names = spriteSheet._animations;
		var data = spriteSheet._data;
		var al = names.length/count;
		for (i=0;i<al;i++) {
			var name = names[i];
			src = data[name];
			var anim = {name:name+sfx,speed:src.speed,next:src.next,frames:[]};
			if (src.next) { anim.next += sfx; }
			frames = src.frames;
			for (var j=0,l=frames.length;j<l;j++) {
				anim.frames.push(frames[j]+fl*count);
			}
			data[anim.name] = anim;
			names.push(anim.name);
		}
	};


	createjs.SpriteSheetUtils = SpriteSheetUtils;
}());

//##############################################################################
// SpriteSheetBuilder.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * The SpriteSheetBuilder allows you to generate sprite sheets at run time from any display object. This can allow
	 * you to maintain your assets as vector graphics (for low file size), and render them at run time as sprite sheets
	 * for better performance.
	 *
	 * Sprite sheets can be built either synchronously, or asynchronously, so that large sprite sheets can be generated
	 * without locking the UI.
	 *
	 * Note that the "images" used in the generated sprite sheet are actually canvas elements, and that they will be sized
	 * to the nearest power of 2 up to the value of <code>maxWidth</code> or <code>maxHeight</code>.
	 * @class SpriteSheetBuilder
	 * @extends EventDispatcher
	 * @constructor
	 **/
	function SpriteSheetBuilder() {
		this.EventDispatcher_constructor();
		
	// public properties:
		/**
		 * The maximum width for the images (not individual frames) in the generated sprite sheet. It is recommended to use
		 * a power of 2 for this value (ex. 1024, 2048, 4096). If the frames cannot all fit within the max dimensions, then
		 * additional images will be created as needed.
		 * @property maxWidth
		 * @type Number
		 * @default 2048
		*/
		this.maxWidth = 2048;
	
		/**
		 * The maximum height for the images (not individual frames) in the generated sprite sheet. It is recommended to use
		 * a power of 2 for this value (ex. 1024, 2048, 4096). If the frames cannot all fit within the max dimensions, then
		 * additional images will be created as needed.
		 * @property maxHeight
		 * @type Number
		 * @default 2048
		 **/
		this.maxHeight = 2048;
	
		/**
		 * The sprite sheet that was generated. This will be null before a build is completed successfully.
		 * @property spriteSheet
		 * @type SpriteSheet
		 **/
		this.spriteSheet = null;
	
		/**
		 * The scale to apply when drawing all frames to the sprite sheet. This is multiplied against any scale specified
		 * in the addFrame call. This can be used, for example, to generate a sprite sheet at run time that is tailored to
		 * the a specific device resolution (ex. tablet vs mobile).
		 * @property scale
		 * @type Number
		 * @default 1
		 **/
		this.scale = 1;
	
		/**
		* The padding to use between frames. This is helpful to preserve antialiasing on drawn vector content.
		* @property padding
		* @type Number
		* @default 1
		**/
		this.padding = 1;
	
		/**
		 * A number from 0.01 to 0.99 that indicates what percentage of time the builder can use. This can be
		 * thought of as the number of seconds per second the builder will use. For example, with a timeSlice value of 0.3,
		 * the builder will run 20 times per second, using approximately 15ms per build (30% of available time, or 0.3s per second).
		 * Defaults to 0.3.
		 * @property timeSlice
		 * @type Number
		 * @default 0.3
		 **/
		this.timeSlice = 0.3;
	
		/**
		 * A value between 0 and 1 that indicates the progress of a build, or -1 if a build has not
		 * been initiated.
		 * @property progress
		 * @type Number
		 * @default -1
		 * @readonly
		 **/
		this.progress = -1;
	
	
	// private properties:
		/**
		 * @property _frames
		 * @protected
		 * @type Array
		 **/
		this._frames = [];
	
		/**
		 * @property _animations
		 * @protected
		 * @type Array
		 **/
		this._animations = {};
	
		/**
		 * @property _data
		 * @protected
		 * @type Array
		 **/
		this._data = null;
	
		/**
		 * @property _nextFrameIndex
		 * @protected
		 * @type Number
		 **/
		this._nextFrameIndex = 0;
	
		/**
		 * @property _index
		 * @protected
		 * @type Number
		 **/
		this._index = 0;
	
		/**
		 * @property _timerID
		 * @protected
		 * @type Number
		 **/
		this._timerID = null;
	
		/**
		 * @property _scale
		 * @protected
		 * @type Number
		 **/
		this._scale = 1;
	}
	var p = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// constants:
	SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
	SpriteSheetBuilder.ERR_RUNNING = "a build is already running";

// events:
	/**
	 * Dispatched when a build completes.
	 * @event complete
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @since 0.6.0
	 */

	/**
	 * Dispatched when an asynchronous build has progress.
	 * @event progress
	 * @param {Object} target The object that dispatched the event.
	 * @param {String} type The event type.
	 * @param {Number} progress The current progress value (0-1).
	 * @since 0.6.0
	 */


// public methods:
	/**
	 * Adds a frame to the {{#crossLink "SpriteSheet"}}{{/crossLink}}. Note that the frame will not be drawn until you
	 * call {{#crossLink "SpriteSheetBuilder/build"}}{{/crossLink}} method. The optional setup params allow you to have
	 * a function run immediately before the draw occurs. For example, this allows you to add a single source multiple
	 * times, but manipulate it or its children to change it to generate different frames.
	 *
	 * Note that the source's transformations (x, y, scale, rotate, alpha) will be ignored, except for regX/Y. To apply
	 * transforms to a source object and have them captured in the sprite sheet, simply place it into a {{#crossLink "Container"}}{{/crossLink}}
	 * and pass in the Container as the source.
	 * @method addFrame
	 * @param {DisplayObject} source The source {{#crossLink "DisplayObject"}}{{/crossLink}}  to draw as the frame.
	 * @param {Rectangle} [sourceRect] A {{#crossLink "Rectangle"}}{{/crossLink}} defining the portion of the
	 * source to draw to the frame. If not specified, it will look for a <code>getBounds</code> method, bounds property,
	 * or <code>nominalBounds</code> property on the source to use. If one is not found, the frame will be skipped.
	 * @param {Number} [scale=1] Optional. The scale to draw this frame at. Default is 1.
	 * @param {Function} [setupFunction] A function to call immediately before drawing this frame. It will be called with two parameters: the source, and setupData.
	 * @param {Object} [setupData] Arbitrary setup data to pass to setupFunction as the second parameter.
	 * @return {Number} The index of the frame that was just added, or null if a sourceRect could not be determined.
	 **/
	p.addFrame = function(source, sourceRect, scale, setupFunction, setupData) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		var rect = sourceRect||source.bounds||source.nominalBounds;
		if (!rect&&source.getBounds) { rect = source.getBounds(); }
		if (!rect) { return null; }
		scale = scale||1;
		return this._frames.push({source:source, sourceRect:rect, scale:scale, funct:setupFunction, data:setupData, index:this._frames.length, height:rect.height*scale})-1;
	};

	/**
	 * Adds an animation that will be included in the created sprite sheet.
	 * @method addAnimation
	 * @param {String} name The name for the animation.
	 * @param {Array} frames An array of frame indexes that comprise the animation. Ex. [3,6,5] would describe an animation
	 * that played frame indexes 3, 6, and 5 in that order.
	 * @param {String} [next] Specifies the name of the animation to continue to after this animation ends. You can
	 * also pass false to have the animation stop when it ends. By default it will loop to the start of the same animation.
	 * @param {Number} [frequency] Specifies a frame advance frequency for this animation. For example, a value
	 * of 2 would cause the animation to advance every second tick.
	 **/
	p.addAnimation = function(name, frames, next, frequency) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		this._animations[name] = {frames:frames, next:next, frequency:frequency};
	};

	/**
	 * This will take a MovieClip instance, and add its frames and labels to this builder. Labels will be added as an animation
	 * running from the label index to the next label. For example, if there is a label named "foo" at frame 0 and a label
	 * named "bar" at frame 10, in a MovieClip with 15 frames, it will add an animation named "foo" that runs from frame
	 * index 0 to 9, and an animation named "bar" that runs from frame index 10 to 14.
	 *
	 * Note that this will iterate through the full MovieClip with actionsEnabled set to false, ending on the last frame.
	 * @method addMovieClip
	 * @param {MovieClip} source The source MovieClip instance to add to the sprite sheet.
	 * @param {Rectangle} [sourceRect] A {{#crossLink "Rectangle"}}{{/crossLink}} defining the portion of the source to
	 * draw to the frame. If not specified, it will look for a <code>getBounds</code> method, <code>frameBounds</code>
	 * Array, <code>bounds</code> property, or <code>nominalBounds</code> property on the source to use. If one is not
	 * found, the MovieClip will be skipped.
	 * @param {Number} [scale=1] The scale to draw the movie clip at.
	 * @param {Function} [setupFunction] A function to call immediately before drawing each frame. It will be called with three parameters: the source, setupData, and the frame index.
	 * @param {Object} [setupData] Arbitrary setup data to pass to setupFunction as the second parameter.
	 * @param {Function} [labelFunction] This method will be called for each movieclip label that is added with four parameters: the label name, the source movieclip instance, the starting frame index (in the movieclip timeline) and the end index. It must return a new name for the label/animation, or false to exclude the label.
	 **/
	p.addMovieClip = function(source, sourceRect, scale, setupFunction, setupData, labelFunction) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		var rects = source.frameBounds;
		var rect = sourceRect||source.bounds||source.nominalBounds;
		if (!rect&&source.getBounds) { rect = source.getBounds(); }
		if (!rect && !rects) { return; }

		var i, l, baseFrameIndex = this._frames.length;
		var duration = source.timeline.duration;
		for (i=0; i<duration; i++) {
			var r = (rects&&rects[i]) ? rects[i] : rect;
			this.addFrame(source, r, scale, this._setupMovieClipFrame, {i:i, f:setupFunction, d:setupData});
		}
		var labels = source.timeline._labels;
		var lbls = [];
		for (var n in labels) {
			lbls.push({index:labels[n], label:n});
		}
		if (lbls.length) {
			lbls.sort(function(a,b){ return a.index-b.index; });
			for (i=0,l=lbls.length; i<l; i++) {
				var label = lbls[i].label;
				var start = baseFrameIndex+lbls[i].index;
				var end = baseFrameIndex+((i == l-1) ? duration : lbls[i+1].index);
				var frames = [];
				for (var j=start; j<end; j++) { frames.push(j); }
				if (labelFunction) {
					label = labelFunction(label, source, start, end);
					if (!label) { continue; }
				}
				this.addAnimation(label, frames, true); // for now, this loops all animations.
			}
		}
	};

	/**
	 * Builds a SpriteSheet instance based on the current frames.
	 * @method build
	 * @return {SpriteSheet} The created SpriteSheet instance, or null if a build is already running or an error occurred.
	 **/
	p.build = function() {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		this._startBuild();
		while (this._drawNext()) {}
		this._endBuild();
		return this.spriteSheet;
	};

	/**
	 * Asynchronously builds a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance based on the current frames. It will
	 * run 20 times per second, using an amount of time defined by <code>timeSlice</code>. When it is complete it will
	 * call the specified callback.
	 * @method buildAsync
	 * @param {Number} [timeSlice] Sets the timeSlice property on this instance.
	 **/
	p.buildAsync = function(timeSlice) {
		if (this._data) { throw SpriteSheetBuilder.ERR_RUNNING; }
		this.timeSlice = timeSlice;
		this._startBuild();
		var _this = this;
		this._timerID = setTimeout(function() { _this._run(); }, 50-Math.max(0.01, Math.min(0.99, this.timeSlice||0.3))*50);
	};

	/**
	 * Stops the current asynchronous build.
	 * @method stopAsync
	 **/
	p.stopAsync = function() {
		clearTimeout(this._timerID);
		this._data = null;
	};

	/**
	 * SpriteSheetBuilder instances cannot be cloned.
	 * @method clone
	 **/
	p.clone = function() {
		throw("SpriteSheetBuilder cannot be cloned.");
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[SpriteSheetBuilder]";
	};


// private methods:
	/**
	 * @method _startBuild
	 * @protected
	 **/
	p._startBuild = function() {
		var pad = this.padding||0;
		this.progress = 0;
		this.spriteSheet = null;
		this._index = 0;
		this._scale = this.scale;
		var dataFrames = [];
		this._data = {
			images: [],
			frames: dataFrames,
			animations: this._animations // TODO: should we "clone" _animations in case someone adds more animations after a build?
		};

		var frames = this._frames.slice();
		frames.sort(function(a,b) { return (a.height<=b.height) ? -1 : 1; });

		if (frames[frames.length-1].height+pad*2 > this.maxHeight) { throw SpriteSheetBuilder.ERR_DIMENSIONS; }
		var y=0, x=0;
		var img = 0;
		while (frames.length) {
			var o = this._fillRow(frames, y, img, dataFrames, pad);
			if (o.w > x) { x = o.w; }
			y += o.h;
			if (!o.h || !frames.length) {
				var canvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");
				canvas.width = this._getSize(x,this.maxWidth);
				canvas.height = this._getSize(y,this.maxHeight);
				this._data.images[img] = canvas;
				if (!o.h) {
					x=y=0;
					img++;
				}
			}
		}
	};
	
	/**
	 * @method _setupMovieClipFrame
	 * @protected
	 * @return {Number} The width & height of the row.
	 **/
	p._setupMovieClipFrame = function(source, data) {
		var ae = source.actionsEnabled;
		source.actionsEnabled = false;
		source.gotoAndStop(data.i);
		source.actionsEnabled = ae;
		data.f&&data.f(source, data.d, data.i);
	};

	/**
	 * @method _getSize
	 * @protected
	 * @return {Number} The width & height of the row.
	 **/
	p._getSize = function(size,max) {
		var pow = 4;
		while (Math.pow(2,++pow) < size){}
		return Math.min(max,Math.pow(2,pow));
	};

	/**
	 * @method _fillRow
	 * @param {Array} frames
	 * @param {Number} y
	 * @param {HTMLImageElement} img
	 * @param {Object} dataFrames
	 * @param {Number} pad
	 * @protected
	 * @return {Number} The width & height of the row.
	 **/
	p._fillRow = function(frames, y, img, dataFrames, pad) {
		var w = this.maxWidth;
		var maxH = this.maxHeight;
		y += pad;
		var h = maxH-y;
		var x = pad;
		var height = 0;
		for (var i=frames.length-1; i>=0; i--) {
			var frame = frames[i];
			var sc = this._scale*frame.scale;
			var rect = frame.sourceRect;
			var source = frame.source;
			var rx = Math.floor(sc*rect.x-pad);
			var ry = Math.floor(sc*rect.y-pad);
			var rh = Math.ceil(sc*rect.height+pad*2);
			var rw = Math.ceil(sc*rect.width+pad*2);
			if (rw > w) { throw SpriteSheetBuilder.ERR_DIMENSIONS; }
			if (rh > h || x+rw > w) { continue; }
			frame.img = img;
			frame.rect = new createjs.Rectangle(x,y,rw,rh);
			height = height || rh;
			frames.splice(i,1);
			dataFrames[frame.index] = [x,y,rw,rh,img,Math.round(-rx+sc*source.regX-pad),Math.round(-ry+sc*source.regY-pad)];
			x += rw;
		}
		return {w:x, h:height};
	};

	/**
	 * @method _endBuild
	 * @protected
	 **/
	p._endBuild = function() {
		this.spriteSheet = new createjs.SpriteSheet(this._data);
		this._data = null;
		this.progress = 1;
		this.dispatchEvent("complete");
	};

	/**
	 * @method _run
	 * @protected
	 **/
	p._run = function() {
		var ts = Math.max(0.01, Math.min(0.99, this.timeSlice||0.3))*50;
		var t = (new Date()).getTime()+ts;
		var complete = false;
		while (t > (new Date()).getTime()) {
			if (!this._drawNext()) { complete = true; break; }
		}
		if (complete) {
			this._endBuild();
		} else {
			var _this = this;
			this._timerID = setTimeout(function() { _this._run(); }, 50-ts);
		}
		var p = this.progress = this._index/this._frames.length;
		if (this.hasEventListener("progress")) {
			var evt = new createjs.Event("progress");
			evt.progress = p;
			this.dispatchEvent(evt);
		}
	};

	/**
	 * @method _drawNext
	 * @protected
	 * @return Boolean Returns false if this is the last draw.
	 **/
	p._drawNext = function() {
		var frame = this._frames[this._index];
		var sc = frame.scale*this._scale;
		var rect = frame.rect;
		var sourceRect = frame.sourceRect;
		var canvas = this._data.images[frame.img];
		var ctx = canvas.getContext("2d");
		frame.funct&&frame.funct(frame.source, frame.data);
		ctx.save();
		ctx.beginPath();
		ctx.rect(rect.x, rect.y, rect.width, rect.height);
		ctx.clip();
		ctx.translate(Math.ceil(rect.x-sourceRect.x*sc), Math.ceil(rect.y-sourceRect.y*sc));
		ctx.scale(sc,sc);
		frame.source.draw(ctx); // display object will draw itself.
		ctx.restore();
		return (++this._index) < this._frames.length;
	};


	createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher");
}());

//##############################################################################
// DOMElement.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * <b>This class is still experimental, and more advanced use is likely to be buggy. Please report bugs.</b>
	 *
	 * A DOMElement allows you to associate a HTMLElement with the display list. It will be transformed
	 * within the DOM as though it is child of the {{#crossLink "Container"}}{{/crossLink}} it is added to. However, it is
	 * not rendered to canvas, and as such will retain whatever z-index it has relative to the canvas (ie. it will be
	 * drawn in front of or behind the canvas).
	 *
	 * The position of a DOMElement is relative to their parent node in the DOM. It is recommended that
	 * the DOM Object be added to a div that also contains the canvas so that they share the same position
	 * on the page.
	 *
	 * DOMElement is useful for positioning HTML elements over top of canvas content, and for elements
	 * that you want to display outside the bounds of the canvas. For example, a tooltip with rich HTML
	 * content.
	 *
	 * <h4>Mouse Interaction</h4>
	 *
	 * DOMElement instances are not full EaselJS display objects, and do not participate in EaselJS mouse
	 * events or support methods like hitTest. To get mouse events from a DOMElement, you must instead add handlers to
	 * the htmlElement (note, this does not support EventDispatcher)
	 *
	 *      var domElement = new createjs.DOMElement(htmlElement);
	 *      domElement.htmlElement.onclick = function() {
	 *          console.log("clicked");
	 *      }
	 *
	 * @class DOMElement
	 * @extends DisplayObject
	 * @constructor
	 * @param {HTMLElement} htmlElement A reference or id for the DOM element to manage.
	 */
	function DOMElement(htmlElement) {
		this.DisplayObject_constructor();
		
		if (typeof(htmlElement)=="string") { htmlElement = document.getElementById(htmlElement); }
		this.mouseEnabled = false;
		
		var style = htmlElement.style;
		style.position = "absolute";
		style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%";
		
		
	// public properties:
		/**
		 * The DOM object to manage.
		 * @property htmlElement
		 * @type HTMLElement
		 */
		this.htmlElement = htmlElement;
	
	
	// private properties:
		/**
		 * @property _oldMtx
		 * @type Matrix2D
		 * @protected
		 */
		this._oldProps = null;
	}
	var p = createjs.extend(DOMElement, createjs.DisplayObject);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 */
	p.isVisible = function() {
		return this.htmlElement != null;
	};

	/**
	 * Draws the display object into the specified context ignoring its visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 * @return {Boolean}
	 */
	p.draw = function(ctx, ignoreCache) {
		// this relies on the _tick method because draw isn't called if the parent is not visible.
		// the actual update happens in _handleDrawEnd
		return true;
	};

	/**
	 * Not applicable to DOMElement.
	 * @method cache
	 */
	p.cache = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method uncache
	 */
	p.uncache = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method updateCache
	 */
	p.updateCache = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method hitTest
	 */
	p.hitTest = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method localToGlobal
	 */
	p.localToGlobal = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method globalToLocal
	 */
	p.globalToLocal = function() {};

	/**
	 * Not applicable to DOMElement.
	 * @method localToLocal
	 */
	p.localToLocal = function() {};

	/**
	 * DOMElement cannot be cloned. Throws an error.
	 * @method clone
	 */
	p.clone = function() {
		throw("DOMElement cannot be cloned.")
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 */
	p.toString = function() {
		return "[DOMElement (name="+  this.name +")]";
	};

	/**
     * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
	 * are not full EaselJS display objects and do not participate in EaselJS mouse events.
	 * @event click
	 */

     /**
     * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
 	 * are not full EaselJS display objects and do not participate in EaselJS mouse events.
	 * @event dblClick
	 */

     /**
      * Interaction events should be added to `htmlElement`, and not the DOMElement instance, since DOMElement instances
 	  * are not full EaselJS display objects and do not participate in EaselJS mouse events.
	  * @event mousedown
	  */

     /**
      * The HTMLElement can listen for the mouseover event, not the DOMElement instance.
      * Since DOMElement instances are not full EaselJS display objects and do not participate in EaselJS mouse events.
      * @event mouseover
	  */

     /**
      * Not applicable to DOMElement.
	  * @event tick
	  */


// private methods:
	/**
	 * @method _tick
	 * @param {Object} evtObj An event object that will be dispatched to all tick listeners. This object is reused between dispatchers to reduce construction & GC costs.
	 * function.
	 * @protected
	 */
	p._tick = function(evtObj) {
		var stage = this.getStage();
		stage&&stage.on("drawend", this._handleDrawEnd, this, true);
		this.DisplayObject__tick(evtObj);
	};
	
	/**
	 * @method _handleDrawEnd
	 * @param {Event} evt
	 * @protected
	 */
	p._handleDrawEnd = function(evt) {
		var o = this.htmlElement;
		if (!o) { return; }
		var style = o.style;
		
		var props = this.getConcatenatedDisplayProps(this._props), mtx = props.matrix;
		
		var visibility = props.visible ? "visible" : "hidden";
		if (visibility != style.visibility) { style.visibility = visibility; }
		if (!props.visible) { return; }
		
		var oldProps = this._oldProps, oldMtx = oldProps&&oldProps.matrix;
		var n = 10000; // precision
		
		if (!oldMtx || !oldMtx.equals(mtx)) {
			var str = "matrix(" + (mtx.a*n|0)/n +","+ (mtx.b*n|0)/n +","+ (mtx.c*n|0)/n +","+ (mtx.d*n|0)/n +","+ (mtx.tx+0.5|0);
			style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str +","+ (mtx.ty+0.5|0) +")";
			style.MozTransform = str +"px,"+ (mtx.ty+0.5|0) +"px)";
			if (!oldProps) { oldProps = this._oldProps = new createjs.DisplayProps(true, NaN); }
			oldProps.matrix.copy(mtx);
		}
		
		if (oldProps.alpha != props.alpha) {
			style.opacity = ""+(props.alpha*n|0)/n;
			oldProps.alpha = props.alpha;
		}
	};


	createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject");
}());

//##############################################################################
// Filter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Base class that all filters should inherit from. Filters need to be applied to objects that have been cached using
	 * the {{#crossLink "DisplayObject/cache"}}{{/crossLink}} method. If an object changes, please cache it again, or use
	 * {{#crossLink "DisplayObject/updateCache"}}{{/crossLink}}. Note that the filters must be applied before caching.
	 *
	 * <h4>Example</h4>
	 *
	 *      myInstance.filters = [
	 *          new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
	 *          new createjs.BlurFilter(5, 5, 10)
	 *      ];
	 *      myInstance.cache(0,0, 100, 100);
	 *
	 * Note that each filter can implement a {{#crossLink "Filter/getBounds"}}{{/crossLink}} method, which returns the
	 * margins that need to be applied in order to fully display the filter. For example, the {{#crossLink "BlurFilter"}}{{/crossLink}}
	 * will cause an object to feather outwards, resulting in a margin around the shape.
	 *
	 * <h4>EaselJS Filters</h4>
	 * EaselJS comes with a number of pre-built filters. Note that individual filters are not compiled into the minified
	 * version of EaselJS. To use them, you must include them manually in the HTML.
	 * <ul><li>{{#crossLink "AlphaMapFilter"}}{{/crossLink}} : Map a greyscale image to the alpha channel of a display object</li>
	 *      <li>{{#crossLink "AlphaMaskFilter"}}{{/crossLink}}: Map an image's alpha channel to the alpha channel of a display object</li>
	 *      <li>{{#crossLink "BlurFilter"}}{{/crossLink}}: Apply vertical and horizontal blur to a display object</li>
	 *      <li>{{#crossLink "ColorFilter"}}{{/crossLink}}: Color transform a display object</li>
	 *      <li>{{#crossLink "ColorMatrixFilter"}}{{/crossLink}}: Transform an image using a {{#crossLink "ColorMatrix"}}{{/crossLink}}</li>
	 * </ul>
	 *
	 * @class Filter
	 * @constructor
	 **/
	function Filter() {}
	var p = Filter.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// public methods:
	/**
	 * Provides padding values for this filter. That is, how much the filter will extend the visual bounds of an object it is applied to.
	 * @method getBounds
	 * @param {Rectangle} [rect] If specified, the provided Rectangle instance will be expanded by the padding amounts and returned.
	 * @return {Rectangle} If a `rect` param was provided, it is returned. If not, either a new rectangle with the padding values, or null if no padding is required for this filter.
	 **/
	p.getBounds = function(rect) {
		return rect;
	};

	/**
	 * Applies the filter to the specified context.
	 * @method applyFilter
	 * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
	 * @param {Number} x The x position to use for the source rect.
	 * @param {Number} y The y position to use for the source rect.
	 * @param {Number} width The width to use for the source rect.
	 * @param {Number} height The height to use for the source rect.
	 * @param {CanvasRenderingContext2D} [targetCtx] The 2D context to draw the result to. Defaults to the context passed to ctx.
	 * @param {Number} [targetX] The x position to draw the result to. Defaults to the value passed to x.
	 * @param {Number} [targetY] The y position to draw the result to. Defaults to the value passed to y.
	 * @return {Boolean} If the filter was applied successfully.
	 **/
	p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
		// this is the default behaviour because most filters access pixel data. It is overridden when not needed.
		targetCtx = targetCtx || ctx;
		if (targetX == null) { targetX = x; }
		if (targetY == null) { targetY = y; }
		try {
			var imageData = ctx.getImageData(x, y, width, height);
		} catch (e) {
			return false;
		}
		if (this._applyFilter(imageData)) {
			targetCtx.putImageData(imageData, targetX, targetY);
			return true;
		}
		return false;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[Filter]";
	};

	/**
	 * Returns a clone of this Filter instance.
	 * @method clone
	 * @return {Filter} A clone of the current Filter instance.
	 **/
	p.clone = function() {
		return new Filter();
	};
	
// private methods:
	/**
	 * @method _applyFilter
	 * @param {ImageData} imageData Target ImageData instance.
	 * @return {Boolean}
	 **/
	p._applyFilter = function(imageData) { return true; };


	createjs.Filter = Filter;
}());

//##############################################################################
// BlurFilter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Applies a box blur to DisplayObjects. Note that this filter is fairly CPU intensive, particularly if the quality is
	 * set higher than 1.
	 *
	 * <h4>Example</h4>
	 * This example creates a red circle, and then applies a 5 pixel blur to it. It uses the {{#crossLink "Filter/getBounds"}}{{/crossLink}}
	 * method to account for the spread that the blur causes.
	 *
	 *      var shape = new createjs.Shape().set({x:100,y:100});
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
	 *
	 *      var blurFilter = new createjs.BlurFilter(5, 5, 1);
	 *      shape.filters = [blurFilter];
	 *      var bounds = blurFilter.getBounds();
	 *
	 *      shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
	 * @class BlurFilter
	 * @extends Filter
	 * @constructor
	 * @param {Number} [blurX=0] The horizontal blur radius in pixels.
	 * @param {Number} [blurY=0] The vertical blur radius in pixels.
	 * @param {Number} [quality=1] The number of blur iterations.
	 **/
	function BlurFilter( blurX, blurY, quality) {
		if ( isNaN(blurX) || blurX < 0 ) blurX = 0;
		if ( isNaN(blurY) || blurY < 0 ) blurY = 0;
		if ( isNaN(quality) || quality < 1  ) quality = 1;


		// public properties:
		/**
		 * Horizontal blur radius in pixels
		 * @property blurX
		 * @default 0
		 * @type Number
		 **/
		this.blurX = blurX | 0;

		/**
		 * Vertical blur radius in pixels
		 * @property blurY
		 * @default 0
		 * @type Number
		 **/
		this.blurY = blurY | 0;

		/**
		 * Number of blur iterations. For example, a value of 1 will produce a rough blur. A value of 2 will produce a
		 * smoother blur, but take twice as long to run.
		 * @property quality
		 * @default 1
		 * @type Number
		 **/
		this.quality = quality | 0;
	}
	var p = createjs.extend(BlurFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// constants:
	/**
	 * Array of multiply values for blur calculations.
	 * @property MUL_TABLE
	 * @type Array
	 * @protected
	 * @static
	 **/
	BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];

	/**
	 * Array of shift values for blur calculations.
	 * @property SHG_TABLE
	 * @type Array
	 * @protected
	 * @static
	 **/
	BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];

// public methods:
	/** docced in super class **/
	p.getBounds = function (rect) {
		var x = this.blurX|0, y = this.blurY| 0;
		if (x <= 0 && y <= 0) { return rect; }
		var q = Math.pow(this.quality, 0.2);
		return (rect || new createjs.Rectangle()).pad(x*q+1,y*q+1,x*q+1,y*q+1);
	};

	/** docced in super class **/
	p.clone = function() {
		return new BlurFilter(this.blurX, this.blurY, this.quality);
	};

	/** docced in super class **/
	p.toString = function() {
		return "[BlurFilter]";
	};


// private methods:

	/** docced in super class **/
	p._applyFilter = function (imageData) {

		var radiusX = this.blurX >> 1;
		if (isNaN(radiusX) || radiusX < 0) return false;
		var radiusY = this.blurY >> 1;
		if (isNaN(radiusY) || radiusY < 0) return false;
		if (radiusX == 0 && radiusY == 0) return false;

		var iterations = this.quality;
		if (isNaN(iterations) || iterations < 1) iterations = 1;
		iterations |= 0;
		if (iterations > 3) iterations = 3;
		if (iterations < 1) iterations = 1;

		var px = imageData.data;
		var x=0, y=0, i=0, p=0, yp=0, yi=0, yw=0, r=0, g=0, b=0, a=0, pr=0, pg=0, pb=0, pa=0;

		var divx = (radiusX + radiusX + 1) | 0;
		var divy = (radiusY + radiusY + 1) | 0;
		var w = imageData.width | 0;
		var h = imageData.height | 0;

		var w1 = (w - 1) | 0;
		var h1 = (h - 1) | 0;
		var rxp1 = (radiusX + 1) | 0;
		var ryp1 = (radiusY + 1) | 0;

		var ssx = {r:0,b:0,g:0,a:0};
		var sx = ssx;
		for ( i = 1; i < divx; i++ )
		{
			sx = sx.n = {r:0,b:0,g:0,a:0};
		}
		sx.n = ssx;

		var ssy = {r:0,b:0,g:0,a:0};
		var sy = ssy;
		for ( i = 1; i < divy; i++ )
		{
			sy = sy.n = {r:0,b:0,g:0,a:0};
		}
		sy.n = ssy;

		var si = null;


		var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
		var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
		var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
		var sty = BlurFilter.SHG_TABLE[radiusY] | 0;

		while (iterations-- > 0) {

			yw = yi = 0;
			var ms = mtx;
			var ss = stx;
			for (y = h; --y > -1;) {
				r = rxp1 * (pr = px[(yi) | 0]);
				g = rxp1 * (pg = px[(yi + 1) | 0]);
				b = rxp1 * (pb = px[(yi + 2) | 0]);
				a = rxp1 * (pa = px[(yi + 3) | 0]);

				sx = ssx;

				for( i = rxp1; --i > -1; )
				{
					sx.r = pr;
					sx.g = pg;
					sx.b = pb;
					sx.a = pa;
					sx = sx.n;
				}

				for( i = 1; i < rxp1; i++ )
				{
					p = (yi + ((w1 < i ? w1 : i) << 2)) | 0;
					r += ( sx.r = px[p]);
					g += ( sx.g = px[p+1]);
					b += ( sx.b = px[p+2]);
					a += ( sx.a = px[p+3]);

					sx = sx.n;
				}

				si = ssx;
				for ( x = 0; x < w; x++ )
				{
					px[yi++] = (r * ms) >>> ss;
					px[yi++] = (g * ms) >>> ss;
					px[yi++] = (b * ms) >>> ss;
					px[yi++] = (a * ms) >>> ss;

					p = ((yw + ((p = x + radiusX + 1) < w1 ? p : w1)) << 2);

					r -= si.r - ( si.r = px[p]);
					g -= si.g - ( si.g = px[p+1]);
					b -= si.b - ( si.b = px[p+2]);
					a -= si.a - ( si.a = px[p+3]);

					si = si.n;

				}
				yw += w;
			}

			ms = mty;
			ss = sty;
			for (x = 0; x < w; x++) {
				yi = (x << 2) | 0;

				r = (ryp1 * (pr = px[yi])) | 0;
				g = (ryp1 * (pg = px[(yi + 1) | 0])) | 0;
				b = (ryp1 * (pb = px[(yi + 2) | 0])) | 0;
				a = (ryp1 * (pa = px[(yi + 3) | 0])) | 0;

				sy = ssy;
				for( i = 0; i < ryp1; i++ )
				{
					sy.r = pr;
					sy.g = pg;
					sy.b = pb;
					sy.a = pa;
					sy = sy.n;
				}

				yp = w;

				for( i = 1; i <= radiusY; i++ )
				{
					yi = ( yp + x ) << 2;

					r += ( sy.r = px[yi]);
					g += ( sy.g = px[yi+1]);
					b += ( sy.b = px[yi+2]);
					a += ( sy.a = px[yi+3]);

					sy = sy.n;

					if( i < h1 )
					{
						yp += w;
					}
				}

				yi = x;
				si = ssy;
				if ( iterations > 0 )
				{
					for ( y = 0; y < h; y++ )
					{
						p = yi << 2;
						px[p+3] = pa =(a * ms) >>> ss;
						if ( pa > 0 )
						{
							px[p]   = ((r * ms) >>> ss );
							px[p+1] = ((g * ms) >>> ss );
							px[p+2] = ((b * ms) >>> ss );
						} else {
							px[p] = px[p+1] = px[p+2] = 0
						}

						p = ( x + (( ( p = y + ryp1) < h1 ? p : h1 ) * w )) << 2;

						r -= si.r - ( si.r = px[p]);
						g -= si.g - ( si.g = px[p+1]);
						b -= si.b - ( si.b = px[p+2]);
						a -= si.a - ( si.a = px[p+3]);

						si = si.n;

						yi += w;
					}
				} else {
					for ( y = 0; y < h; y++ )
					{
						p = yi << 2;
						px[p+3] = pa =(a * ms) >>> ss;
						if ( pa > 0 )
						{
							pa = 255 / pa;
							px[p]   = ((r * ms) >>> ss ) * pa;
							px[p+1] = ((g * ms) >>> ss ) * pa;
							px[p+2] = ((b * ms) >>> ss ) * pa;
						} else {
							px[p] = px[p+1] = px[p+2] = 0
						}

						p = ( x + (( ( p = y + ryp1) < h1 ? p : h1 ) * w )) << 2;

						r -= si.r - ( si.r = px[p]);
						g -= si.g - ( si.g = px[p+1]);
						b -= si.b - ( si.b = px[p+2]);
						a -= si.a - ( si.a = px[p+3]);

						si = si.n;

						yi += w;
					}
				}
			}

		}
		return true;
	};

	createjs.BlurFilter = createjs.promote(BlurFilter, "Filter");
}());

//##############################################################################
// AlphaMapFilter.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";
	
	
// constructor:
	/**
	 * Applies a greyscale alpha map image (or canvas) to the target, such that the alpha channel of the result will
	 * be copied from the red channel of the map, and the RGB channels will be copied from the target.
	 *
	 * Generally, it is recommended that you use {{#crossLink "AlphaMaskFilter"}}{{/crossLink}}, because it has much
	 * better performance.
	 *
	 * <h4>Example</h4>
	 * This example draws a red->blue box, caches it, and then uses the cache canvas as an alpha map on a 100x100 image.
	 *
	 *       var box = new createjs.Shape();
	 *       box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
	 *       box.graphics.drawRect(0, 0, 100, 100);
	 *       box.cache(0, 0, 100, 100);
	 *
	 *       var bmp = new createjs.Bitmap("path/to/image.jpg");
	 *       bmp.filters = [
	 *           new createjs.AlphaMapFilter(box.cacheCanvas)
	 *       ];
	 *       bmp.cache(0, 0, 100, 100);
	 *       stage.addChild(bmp);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for more information on applying filters.
	 * @class AlphaMapFilter
	 * @extends Filter
	 * @constructor
	 * @param {HTMLImageElement|HTMLCanvasElement} alphaMap The greyscale image (or canvas) to use as the alpha value for the
	 * result. This should be exactly the same dimensions as the target.
	 **/
	function AlphaMapFilter(alphaMap) {
	
	
	// public properties:
		/**
		 * The greyscale image (or canvas) to use as the alpha value for the result. This should be exactly the same
		 * dimensions as the target.
		 * @property alphaMap
		 * @type HTMLImageElement|HTMLCanvasElement
		 **/
		this.alphaMap = alphaMap;
		
		
	// private properties:
		/**
		 * @property _alphaMap
		 * @protected
		 * @type HTMLImageElement|HTMLCanvasElement
		 **/
		this._alphaMap = null;
		
		/**
		 * @property _mapData
		 * @protected
		 * @type Uint8ClampedArray
		 **/
		this._mapData = null;
	}
	var p = createjs.extend(AlphaMapFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/** docced in super class **/
	p.clone = function () {
		var o = new AlphaMapFilter(this.alphaMap);
		o._alphaMap = this._alphaMap;
		o._mapData = this._mapData;
		return o;
	};

	/** docced in super class **/
	p.toString = function () {
		return "[AlphaMapFilter]";
	};


// private methods:
	/** docced in super class **/
	p._applyFilter = function (imageData) {
		if (!this.alphaMap) { return true; }
		if (!this._prepAlphaMap()) { return false; }
		
		// TODO: update to support scenarios where the target has different dimensions.
		var data = imageData.data;
		var map = this._mapData;
		for(var i=0, l=data.length; i<l; i += 4) { data[i + 3] = map[i] || 0; }
		
		return true;
	};

	/**
	 * @method _prepAlphaMap
	 * @protected
	 **/
	p._prepAlphaMap = function () {
		if (!this.alphaMap) { return false; }
		if (this.alphaMap == this._alphaMap && this._mapData) { return true; }

		this._mapData = null;
		var map = this._alphaMap = this.alphaMap;
		var canvas = map;
		var ctx;
		if (map instanceof HTMLCanvasElement) {
			ctx = canvas.getContext("2d");
		} else {
			canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
			canvas.width = map.width;
			canvas.height = map.height;
			ctx = canvas.getContext("2d");
			ctx.drawImage(map, 0, 0);
		}

		try {
			var imgData = ctx.getImageData(0, 0, map.width, map.height);
		} catch (e) {
			//if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
			return false;
		}
		
		this._mapData = imgData.data;
		return true;
	};


	createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter");
}());

//##############################################################################
// AlphaMaskFilter.js
//##############################################################################

this.createjs = this.createjs || {};

(function () {
	"use strict";


// constructor:
	/**
	 * Applies the alpha from the mask image (or canvas) to the target, such that the alpha channel of the result will
	 * be derived from the mask, and the RGB channels will be copied from the target. This can be used, for example, to
	 * apply an alpha mask to a display object. This can also be used to combine a JPG compressed RGB image with a PNG32
	 * alpha mask, which can result in a much smaller file size than a single PNG32 containing ARGB.
	 *
	 * <b>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters correctly.</b>
	 *
	 * <h4>Example</h4>
	 * This example draws a gradient box, then caches it and uses the "cacheCanvas" as the alpha mask on a 100x100 image.
	 *
	 *      var box = new createjs.Shape();
	 *      box.graphics.beginLinearGradientFill(["#000000", "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
	 *      box.graphics.drawRect(0, 0, 100, 100);
	 *      box.cache(0, 0, 100, 100);
	 *
	 *      var bmp = new createjs.Bitmap("path/to/image.jpg");
	 *      bmp.filters = [
	 *          new createjs.AlphaMaskFilter(box.cacheCanvas)
	 *      ];
	 *      bmp.cache(0, 0, 100, 100);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for more information on applying filters.
	 * @class AlphaMaskFilter
	 * @extends Filter
	 * @constructor
	 * @param {HTMLImageElement|HTMLCanvasElement} mask
	 **/
	function AlphaMaskFilter(mask) {
	
	
	// public properties:
		/**
		 * The image (or canvas) to use as the mask.
		 * @property mask
		 * @type HTMLImageElement|HTMLCanvasElement
		 **/
		this.mask = mask;
	}
	var p = createjs.extend(AlphaMaskFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	

// public methods:
	/**
	 * Applies the filter to the specified context.
	 *
	 * <strong>IMPORTANT NOTE: This filter currently does not support the targetCtx, or targetX/Y parameters
	 * correctly.</strong>
	 * @method applyFilter
	 * @param {CanvasRenderingContext2D} ctx The 2D context to use as the source.
	 * @param {Number} x The x position to use for the source rect.
	 * @param {Number} y The y position to use for the source rect.
	 * @param {Number} width The width to use for the source rect.
	 * @param {Number} height The height to use for the source rect.
	 * @param {CanvasRenderingContext2D} [targetCtx] NOT SUPPORTED IN THIS FILTER. The 2D context to draw the result to. Defaults to the context passed to ctx.
	 * @param {Number} [targetX] NOT SUPPORTED IN THIS FILTER. The x position to draw the result to. Defaults to the value passed to x.
	 * @param {Number} [targetY] NOT SUPPORTED IN THIS FILTER. The y position to draw the result to. Defaults to the value passed to y.
	 * @return {Boolean} If the filter was applied successfully.
	 **/
	p.applyFilter = function (ctx, x, y, width, height, targetCtx, targetX, targetY) {
		if (!this.mask) { return true; }
		targetCtx = targetCtx || ctx;
		if (targetX == null) { targetX = x; }
		if (targetY == null) { targetY = y; }

		targetCtx.save();
		if (ctx != targetCtx) {
			// TODO: support targetCtx and targetX/Y
			// clearRect, then draw the ctx in?
			return false;
		}

		targetCtx.globalCompositeOperation = "destination-in";
		targetCtx.drawImage(this.mask, targetX, targetY);
		targetCtx.restore();
		return true;
	};

	/** docced in super class **/
	p.clone = function () {
		return new AlphaMaskFilter(this.mask);
	};

	/** docced in super class **/
	p.toString = function () {
		return "[AlphaMaskFilter]";
	};


	createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter");
}());

//##############################################################################
// ColorFilter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Applies a color transform to DisplayObjects.
	 *
	 * <h4>Example</h4>
	 * This example draws a red circle, and then transforms it to Blue. This is accomplished by multiplying all the channels
	 * to 0 (except alpha, which is set to 1), and then adding 255 to the blue channel.
	 *
	 *      var shape = new createjs.Shape().set({x:100,y:100});
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
	 *
	 *      shape.filters = [
	 *          new createjs.ColorFilter(0,0,0,1, 0,0,255,0)
	 *      ];
	 *      shape.cache(-50, -50, 100, 100);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
	 * @class ColorFilter
	 * @param {Number} [redMultiplier=1] The amount to multiply against the red channel. This is a range between 0 and 1.
	 * @param {Number} [greenMultiplier=1] The amount to multiply against the green channel. This is a range between 0 and 1.
	 * @param {Number} [blueMultiplier=1] The amount to multiply against the blue channel. This is a range between 0 and 1.
	 * @param {Number} [alphaMultiplier=1] The amount to multiply against the alpha channel. This is a range between 0 and 1.
	 * @param {Number} [redOffset=0] The amount to add to the red channel after it has been multiplied. This is a range
	 * between -255 and 255.
	 * @param {Number} [greenOffset=0] The amount to add to the green channel after it has been multiplied. This is a range
	  * between -255 and 255.
	 * @param {Number} [blueOffset=0] The amount to add to the blue channel after it has been multiplied. This is a range
	  * between -255 and 255.
	 * @param {Number} [alphaOffset=0] The amount to add to the alpha channel after it has been multiplied. This is a range
	  * between -255 and 255.
	 * @constructor
	 * @extends Filter
	 **/
	function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
		
	
	// public properties:
		/**
		 * Red channel multiplier.
		 * @property redMultiplier
		 * @type Number
		 **/
		this.redMultiplier = redMultiplier != null ? redMultiplier : 1;
	
		/**
		 * Green channel multiplier.
		 * @property greenMultiplier
		 * @type Number
		 **/
		this.greenMultiplier = greenMultiplier != null ? greenMultiplier : 1;
	
		/**
		 * Blue channel multiplier.
		 * @property blueMultiplier
		 * @type Number
		 **/
		this.blueMultiplier = blueMultiplier != null ? blueMultiplier : 1;
	
		/**
		 * Alpha channel multiplier.
		 * @property alphaMultiplier
		 * @type Number
		 **/
		this.alphaMultiplier = alphaMultiplier != null ? alphaMultiplier : 1;
	
		/**
		 * Red channel offset (added to value).
		 * @property redOffset
		 * @type Number
		 **/
		this.redOffset = redOffset || 0;
	
		/**
		 * Green channel offset (added to value).
		 * @property greenOffset
		 * @type Number
		 **/
		this.greenOffset = greenOffset || 0;
	
		/**
		 * Blue channel offset (added to value).
		 * @property blueOffset
		 * @type Number
		 **/
		this.blueOffset = blueOffset || 0;
	
		/**
		 * Alpha channel offset (added to value).
		 * @property alphaOffset
		 * @type Number
		 **/
		this.alphaOffset = alphaOffset || 0;
	}
	var p = createjs.extend(ColorFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


// public methods:
	/** docced in super class **/
	p.toString = function() {
		return "[ColorFilter]";
	};

	/** docced in super class **/
	p.clone = function() {
		return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
	};
	

// private methods:
	/** docced in super class **/
	p._applyFilter = function(imageData) {
		var data = imageData.data;
		var l = data.length;
		for (var i=0; i<l; i+=4) {
			data[i] = data[i]*this.redMultiplier+this.redOffset;
			data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
			data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
			data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;
		}
		return true;
	};


	createjs.ColorFilter = createjs.promote(ColorFilter, "Filter");
}());

//##############################################################################
// ColorMatrix.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Provides helper functions for assembling a matrix for use with the {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}.
	 * Most methods return the instance to facilitate chained calls.
	 *
	 * <h4>Example</h4>
	 *
	 *      myColorMatrix.adjustHue(20).adjustBrightness(50);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters, or {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}
	 * for an example of how to use ColorMatrix to change a DisplayObject's color.
	 * @class ColorMatrix
	 * @param {Number} brightness
	 * @param {Number} contrast
	 * @param {Number} saturation
	 * @param {Number} hue
	 * @constructor
	 **/
	function ColorMatrix(brightness, contrast, saturation, hue) {
		this.setColor(brightness, contrast, saturation, hue);
	}
	var p = ColorMatrix.prototype;

	/**
	 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	 * for details.
	 *
	 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	 *
	 * @method initialize
	 * @protected
	 * @deprecated
	 */
	// p.initialize = function() {}; // searchable for devs wondering where it is.


// constants:
	/**
	 * Array of delta values for contrast calculations.
	 * @property DELTA_INDEX
	 * @type Array
	 * @protected
	 * @static
	 **/
	ColorMatrix.DELTA_INDEX = [
		0,    0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1,  0.11,
		0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
		0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
		0.44, 0.46, 0.48, 0.5,  0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
		0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
		1.0,  1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
		1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0,  2.12, 2.25,
		2.37, 2.50, 2.62, 2.75, 2.87, 3.0,  3.2,  3.4,  3.6,  3.8,
		4.0,  4.3,  4.7,  4.9,  5.0,  5.5,  6.0,  6.5,  6.8,  7.0,
		7.3,  7.5,  7.8,  8.0,  8.4,  8.7,  9.0,  9.4,  9.6,  9.8,
		10.0
	];

	/**
	 * Identity matrix values.
	 * @property IDENTITY_MATRIX
	 * @type Array
	 * @protected
	 * @static
	 **/
	ColorMatrix.IDENTITY_MATRIX = [
		1,0,0,0,0,
		0,1,0,0,0,
		0,0,1,0,0,
		0,0,0,1,0,
		0,0,0,0,1
	];

	/**
	 * The constant length of a color matrix.
	 * @property LENGTH
	 * @type Number
	 * @protected
	 * @static
	 **/
	ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;


// public methods:
	/**
	 * Resets the instance with the specified values.
	 * @method setColor
	 * @param {Number} brightness
	 * @param {Number} contrast
	 * @param {Number} saturation
	 * @param {Number} hue
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 */
	p.setColor = function(brightness,contrast,saturation,hue) {
		return this.reset().adjustColor(brightness,contrast,saturation,hue);
	};

	/**
	 * Resets the matrix to identity values.
	 * @method reset
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 */
	p.reset = function() {
		return this.copy(ColorMatrix.IDENTITY_MATRIX);
	};

	/**
	 * Shortcut method to adjust brightness, contrast, saturation and hue.
	 * Equivalent to calling adjustHue(hue), adjustContrast(contrast),
	 * adjustBrightness(brightness), adjustSaturation(saturation), in that order.
	 * @method adjustColor
	 * @param {Number} brightness
	 * @param {Number} contrast
	 * @param {Number} saturation
	 * @param {Number} hue
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustColor = function(brightness,contrast,saturation,hue) {
		this.adjustHue(hue);
		this.adjustContrast(contrast);
		this.adjustBrightness(brightness);
		return this.adjustSaturation(saturation);
	};

	/**
	 * Adjusts the brightness of pixel color by adding the specified value to the red, green and blue channels.
	 * Positive values will make the image brighter, negative values will make it darker.
	 * @method adjustBrightness
	 * @param {Number} value A value between -255 & 255 that will be added to the RGB channels.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustBrightness = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,255);
		this._multiplyMatrix([
			1,0,0,0,value,
			0,1,0,0,value,
			0,0,1,0,value,
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};

	/**
	 * Adjusts the contrast of pixel color.
	 * Positive values will increase contrast, negative values will decrease contrast.
	 * @method adjustContrast
	 * @param {Number} value A value between -100 & 100.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustContrast = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,100);
		var x;
		if (value<0) {
			x = 127+value/100*127;
		} else {
			x = value%1;
			if (x == 0) {
				x = ColorMatrix.DELTA_INDEX[value];
			} else {
				x = ColorMatrix.DELTA_INDEX[(value<<0)]*(1-x)+ColorMatrix.DELTA_INDEX[(value<<0)+1]*x; // use linear interpolation for more granularity.
			}
			x = x*127+127;
		}
		this._multiplyMatrix([
			x/127,0,0,0,0.5*(127-x),
			0,x/127,0,0,0.5*(127-x),
			0,0,x/127,0,0.5*(127-x),
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};

	/**
	 * Adjusts the color saturation of the pixel.
	 * Positive values will increase saturation, negative values will decrease saturation (trend towards greyscale).
	 * @method adjustSaturation
	 * @param {Number} value A value between -100 & 100.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustSaturation = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,100);
		var x = 1+((value > 0) ? 3*value/100 : value/100);
		var lumR = 0.3086;
		var lumG = 0.6094;
		var lumB = 0.0820;
		this._multiplyMatrix([
			lumR*(1-x)+x,lumG*(1-x),lumB*(1-x),0,0,
			lumR*(1-x),lumG*(1-x)+x,lumB*(1-x),0,0,
			lumR*(1-x),lumG*(1-x),lumB*(1-x)+x,0,0,
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};


	/**
	 * Adjusts the hue of the pixel color.
	 * @method adjustHue
	 * @param {Number} value A value between -180 & 180.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.adjustHue = function(value) {
		if (value == 0 || isNaN(value)) { return this; }
		value = this._cleanValue(value,180)/180*Math.PI;
		var cosVal = Math.cos(value);
		var sinVal = Math.sin(value);
		var lumR = 0.213;
		var lumG = 0.715;
		var lumB = 0.072;
		this._multiplyMatrix([
			lumR+cosVal*(1-lumR)+sinVal*(-lumR),lumG+cosVal*(-lumG)+sinVal*(-lumG),lumB+cosVal*(-lumB)+sinVal*(1-lumB),0,0,
			lumR+cosVal*(-lumR)+sinVal*(0.143),lumG+cosVal*(1-lumG)+sinVal*(0.140),lumB+cosVal*(-lumB)+sinVal*(-0.283),0,0,
			lumR+cosVal*(-lumR)+sinVal*(-(1-lumR)),lumG+cosVal*(-lumG)+sinVal*(lumG),lumB+cosVal*(1-lumB)+sinVal*(lumB),0,0,
			0,0,0,1,0,
			0,0,0,0,1
		]);
		return this;
	};

	/**
	 * Concatenates (multiplies) the specified matrix with this one.
	 * @method concat
	 * @param {Array} matrix An array or ColorMatrix instance.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.concat = function(matrix) {
		matrix = this._fixMatrix(matrix);
		if (matrix.length != ColorMatrix.LENGTH) { return this; }
		this._multiplyMatrix(matrix);
		return this;
	};

	/**
	 * Returns a clone of this ColorMatrix.
	 * @method clone
	 * @return {ColorMatrix} A clone of this ColorMatrix.
	 **/
	p.clone = function() {
		return (new ColorMatrix()).copy(this);
	};

	/**
	 * Return a length 25 (5x5) array instance containing this matrix's values.
	 * @method toArray
	 * @return {Array} An array holding this matrix's values.
	 **/
	p.toArray = function() {
		var arr = [];
		for (var i= 0, l=ColorMatrix.LENGTH; i<l; i++) {
			arr[i] = this[i];
		}
		return arr;
	};

	/**
	 * Copy the specified matrix's values to this matrix.
	 * @method copy
	 * @param {Array} matrix An array or ColorMatrix instance.
	 * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
	 * @chainable
	 **/
	p.copy = function(matrix) {
		var l = ColorMatrix.LENGTH;
		for (var i=0;i<l;i++) {
			this[i] = matrix[i];
		}
		return this;
	};
	
	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[ColorMatrix]";
	};


// private methods:
	/**
	 * @method _multiplyMatrix
	 * @param {Array} matrix
	 * @protected
	 **/
	p._multiplyMatrix = function(matrix) {
		var i, j, k, col = [];

		for (i=0;i<5;i++) {
			for (j=0;j<5;j++) {
				col[j] = this[j+i*5];
			}
			for (j=0;j<5;j++) {
				var val=0;
				for (k=0;k<5;k++) {
					val += matrix[j+k*5]*col[k];
				}
				this[j+i*5] = val;
			}
		}
	};

	/**
	 * Make sure values are within the specified range, hue has a limit of 180, brightness is 255, others are 100.
	 * @method _cleanValue
	 * @param {Number} value The raw number
	 * @param {Number} limit The maximum that the number can be. The minimum is the limit * -1.
	 * @protected
	 **/
	p._cleanValue = function(value, limit) {
		return Math.min(limit,Math.max(-limit,value));
	};

	/**
	 * Makes sure matrixes are 5x5 (25 long).
	 * @method _fixMatrix
	 * @param {Array} matrix
	 * @protected
	 **/
	p._fixMatrix = function(matrix) {
		if (matrix instanceof ColorMatrix) { matrix = matrix.toArray(); }
		if (matrix.length < ColorMatrix.LENGTH) {
			matrix = matrix.slice(0,matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length,ColorMatrix.LENGTH));
		} else if (matrix.length > ColorMatrix.LENGTH) {
			matrix = matrix.slice(0,ColorMatrix.LENGTH);
		}
		return matrix;
	};


	createjs.ColorMatrix = ColorMatrix;
}());

//##############################################################################
// ColorMatrixFilter.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
	 * Allows you to carry out complex color operations such as modifying saturation, brightness, or inverting. See the
	 * {{#crossLink "ColorMatrix"}}{{/crossLink}} for more information on changing colors. For an easier color transform,
	 * consider the {{#crossLink "ColorFilter"}}{{/crossLink}}.
	 *
	 * <h4>Example</h4>
	 * This example creates a red circle, inverts its hue, and then saturates it to brighten it up.
	 *
	 *      var shape = new createjs.Shape().set({x:100,y:100});
	 *      shape.graphics.beginFill("#ff0000").drawCircle(0,0,50);
	 *
	 *      var matrix = new createjs.ColorMatrix().adjustHue(180).adjustSaturation(100);
	 *      shape.filters = [
	 *          new createjs.ColorMatrixFilter(matrix)
	 *      ];
	 *
	 *      shape.cache(-50, -50, 100, 100);
	 *
	 * See {{#crossLink "Filter"}}{{/crossLink}} for an more information on applying filters.
	 * @class ColorMatrixFilter
	 * @constructor
	 * @extends Filter
	 * @param {Array | ColorMatrix} matrix A 4x5 matrix describing the color operation to perform. See also the {{#crossLink "ColorMatrix"}}{{/crossLink}}
	 * class.
	 **/
	function ColorMatrixFilter(matrix) {
	
		
	// public properties:
		/**
		 * A 4x5 matrix describing the color operation to perform. See also the {{#crossLink "ColorMatrix"}}{{/crossLink}}
		 * @property matrix
		 * @type Array | ColorMatrix
		 **/
		this.matrix = matrix;
	}
	var p = createjs.extend(ColorMatrixFilter, createjs.Filter);

	// TODO: deprecated
	// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.
	

// public methods:
	/** docced in super class **/
	p.toString = function() {
		return "[ColorMatrixFilter]";
	};

	/** docced in super class **/
	p.clone = function() {
		return new ColorMatrixFilter(this.matrix);
	};

// private methods:
	/** docced in super class **/
	p._applyFilter = function(imageData) { 
		var data = imageData.data;
		var l = data.length;
		var r,g,b,a;
		var mtx = this.matrix;
		var m0 =  mtx[0],  m1 =  mtx[1],  m2 =  mtx[2],  m3 =  mtx[3],  m4 =  mtx[4];
		var m5 =  mtx[5],  m6 =  mtx[6],  m7 =  mtx[7],  m8 =  mtx[8],  m9 =  mtx[9];
		var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
		var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];

		for (var i=0; i<l; i+=4) {
			r = data[i];
			g = data[i+1];
			b = data[i+2];
			a = data[i+3];
			data[i] = r*m0+g*m1+b*m2+a*m3+m4; // red
			data[i+1] = r*m5+g*m6+b*m7+a*m8+m9; // green
			data[i+2] = r*m10+g*m11+b*m12+a*m13+m14; // blue
			data[i+3] = r*m15+g*m16+b*m17+a*m18+m19; // alpha
		}
		return true;
	};


	createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter");
}());

//##############################################################################
// Touch.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";


// constructor:
	/**
 * Global utility for working with multi-touch enabled devices in EaselJS. Currently supports W3C Touch API (iOS and
 * modern Android browser) and the Pointer API (IE), including ms-prefixed events in IE10, and unprefixed in IE11.
 *
 * Ensure that you {{#crossLink "Touch/disable"}}{{/crossLink}} touch when cleaning up your application. You do not have
 * to check if touch is supported to enable it, as it will fail gracefully if it is not supported.
 *
 * <h4>Example</h4>
 *
 *      var stage = new createjs.Stage("canvasId");
 *      createjs.Touch.enable(stage);
 *
 * <strong>Note:</strong> It is important to disable Touch on a stage that you are no longer using:
 *
 *      createjs.Touch.disable(stage);
 *
 * @class Touch
 * @static
 **/
	function Touch() {
		throw "Touch cannot be instantiated";
	}


// public static methods:
	/**
	 * Returns `true` if touch is supported in the current browser.
	 * @method isSupported
	 * @return {Boolean} Indicates whether touch is supported in the current browser.
	 * @static
	 **/
	Touch.isSupported = function() {
		return	!!(('ontouchstart' in window) // iOS & Android
			|| (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) // IE10
			|| (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0)); // IE11+
	};

	/**
	 * Enables touch interaction for the specified EaselJS {{#crossLink "Stage"}}{{/crossLink}}. Currently supports iOS
	 * (and compatible browsers, such as modern Android browsers), and IE10/11. Supports both single touch and
	 * multi-touch modes. Extends the EaselJS {{#crossLink "MouseEvent"}}{{/crossLink}} model, but without support for
	 * double click or over/out events. See the MouseEvent {{#crossLink "MouseEvent/pointerId:property"}}{{/crossLink}}
	 * for more information.
	 * @method enable
	 * @param {Stage} stage The {{#crossLink "Stage"}}{{/crossLink}} to enable touch on.
	 * @param {Boolean} [singleTouch=false] If `true`, only a single touch will be active at a time.
	 * @param {Boolean} [allowDefault=false] If `true`, then default gesture actions (ex. scrolling, zooming) will be
	 * allowed when the user is interacting with the target canvas.
	 * @return {Boolean} Returns `true` if touch was successfully enabled on the target stage.
	 * @static
	 **/
	Touch.enable = function(stage, singleTouch, allowDefault) {
		if (!stage || !stage.canvas || !Touch.isSupported()) { return false; }
		if (stage.__touch) { return true; }

		// inject required properties on stage:
		stage.__touch = {pointers:{}, multitouch:!singleTouch, preventDefault:!allowDefault, count:0};

		// note that in the future we may need to disable the standard mouse event model before adding
		// these to prevent duplicate calls. It doesn't seem to be an issue with iOS devices though.
		if ('ontouchstart' in window) { Touch._IOS_enable(stage); }
		else if (window.navigator['msPointerEnabled'] || window.navigator["pointerEnabled"]) { Touch._IE_enable(stage); }
		return true;
	};

	/**
	 * Removes all listeners that were set up when calling `Touch.enable()` on a stage.
	 * @method disable
	 * @param {Stage} stage The {{#crossLink "Stage"}}{{/crossLink}} to disable touch on.
	 * @static
	 **/
	Touch.disable = function(stage) {
		if (!stage) { return; }
		if ('ontouchstart' in window) { Touch._IOS_disable(stage); }
		else if (window.navigator['msPointerEnabled'] || window.navigator["pointerEnabled"]) { Touch._IE_disable(stage); }
		
		delete stage.__touch;
	};


// Private static methods:
	/**
	 * @method _IOS_enable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IOS_enable = function(stage) {
		var canvas = stage.canvas;
		var f = stage.__touch.f = function(e) { Touch._IOS_handleEvent(stage,e); };
		canvas.addEventListener("touchstart", f, false);
		canvas.addEventListener("touchmove", f, false);
		canvas.addEventListener("touchend", f, false);
		canvas.addEventListener("touchcancel", f, false);
	};

	/**
	 * @method _IOS_disable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IOS_disable = function(stage) {
		var canvas = stage.canvas;
		if (!canvas) { return; }
		var f = stage.__touch.f;
		canvas.removeEventListener("touchstart", f, false);
		canvas.removeEventListener("touchmove", f, false);
		canvas.removeEventListener("touchend", f, false);
		canvas.removeEventListener("touchcancel", f, false);
	};

	/**
	 * @method _IOS_handleEvent
	 * @param {Stage} stage
	 * @param {Object} e The event to handle
	 * @protected
	 * @static
	 **/
	Touch._IOS_handleEvent = function(stage, e) {
		if (!stage) { return; }
		if (stage.__touch.preventDefault) { e.preventDefault&&e.preventDefault(); }
		var touches = e.changedTouches;
		var type = e.type;
		for (var i= 0,l=touches.length; i<l; i++) {
			var touch = touches[i];
			var id = touch.identifier;
			if (touch.target != stage.canvas) { continue; }

			if (type == "touchstart") {
				this._handleStart(stage, id, e, touch.pageX, touch.pageY);
			} else if (type == "touchmove") {
				this._handleMove(stage, id, e, touch.pageX, touch.pageY);
			} else if (type == "touchend" || type == "touchcancel") {
				this._handleEnd(stage, id, e);
			}
		}
	};

	/**
	 * @method _IE_enable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IE_enable = function(stage) {
		var canvas = stage.canvas;
		var f = stage.__touch.f = function(e) { Touch._IE_handleEvent(stage,e); };

		if (window.navigator["pointerEnabled"] === undefined) {
			canvas.addEventListener("MSPointerDown", f, false);
			window.addEventListener("MSPointerMove", f, false);
			window.addEventListener("MSPointerUp", f, false);
			window.addEventListener("MSPointerCancel", f, false);
			if (stage.__touch.preventDefault) { canvas.style.msTouchAction = "none"; }
		} else {
			canvas.addEventListener("pointerdown", f, false);
			window.addEventListener("pointermove", f, false);
			window.addEventListener("pointerup", f, false);
			window.addEventListener("pointercancel", f, false);
			if (stage.__touch.preventDefault) { canvas.style.touchAction = "none"; }

		}
		stage.__touch.activeIDs = {};
	};

	/**
	 * @method _IE_disable
	 * @protected
	 * @param {Stage} stage
	 * @static
	 **/
	Touch._IE_disable = function(stage) {
		var f = stage.__touch.f;

		if (window.navigator["pointerEnabled"] === undefined) {
			window.removeEventListener("MSPointerMove", f, false);
			window.removeEventListener("MSPointerUp", f, false);
			window.removeEventListener("MSPointerCancel", f, false);
			if (stage.canvas) {
				stage.canvas.removeEventListener("MSPointerDown", f, false);
			}
		} else {
			window.removeEventListener("pointermove", f, false);
			window.removeEventListener("pointerup", f, false);
			window.removeEventListener("pointercancel", f, false);
			if (stage.canvas) {
				stage.canvas.removeEventListener("pointerdown", f, false);
			}
		}
	};

	/**
	 * @method _IE_handleEvent
	 * @param {Stage} stage
	 * @param {Object} e The event to handle.
	 * @protected
	 * @static
	 **/
	Touch._IE_handleEvent = function(stage, e) {
		if (!stage) { return; }
		if (stage.__touch.preventDefault) { e.preventDefault && e.preventDefault(); }
		var type = e.type;
		var id = e.pointerId;
		var ids = stage.__touch.activeIDs;

		if (type == "MSPointerDown" || type == "pointerdown") {
			if (e.srcElement != stage.canvas) { return; }
			ids[id] = true;
			this._handleStart(stage, id, e, e.pageX, e.pageY);
		} else if (ids[id]) { // it's an id we're watching
			if (type == "MSPointerMove" || type == "pointermove") {
				this._handleMove(stage, id, e, e.pageX, e.pageY);
			} else if (type == "MSPointerUp" || type == "MSPointerCancel"
					|| type == "pointerup" || type == "pointercancel") {
				delete(ids[id]);
				this._handleEnd(stage, id, e);
			}
		}
	};

	/**
	 * @method _handleStart
	 * @param {Stage} stage
	 * @param {String|Number} id
	 * @param {Object} e
	 * @param {Number} x
	 * @param {Number} y
	 * @protected
	 **/
	Touch._handleStart = function(stage, id, e, x, y) {
		var props = stage.__touch;
		if (!props.multitouch && props.count) { return; }
		var ids = props.pointers;
		if (ids[id]) { return; }
		ids[id] = true;
		props.count++;
		stage._handlePointerDown(id, e, x, y);
	};

	/**
	 * @method _handleMove
	 * @param {Stage} stage
	 * @param {String|Number} id
	 * @param {Object} e
	 * @param {Number} x
	 * @param {Number} y
	 * @protected
	 **/
	Touch._handleMove = function(stage, id, e, x, y) {
		if (!stage.__touch.pointers[id]) { return; }
		stage._handlePointerMove(id, e, x, y);
	};

	/**
	 * @method _handleEnd
	 * @param {Stage} stage
	 * @param {String|Number} id
	 * @param {Object} e
	 * @protected
	 **/
	Touch._handleEnd = function(stage, id, e) {
		// TODO: cancel should be handled differently for proper UI (ex. an up would trigger a click, a cancel would more closely resemble an out).
		var props = stage.__touch;
		var ids = props.pointers;
		if (!ids[id]) { return; }
		props.count--;
		stage._handlePointerUp(id, e, true);
		delete(ids[id]);
	};


	createjs.Touch = Touch;
}());

//##############################################################################
// version.js
//##############################################################################

this.createjs = this.createjs || {};

(function() {
	"use strict";

	/**
	 * Static class holding library specific information such as the version and buildDate of
	 * the library.
	 * @class EaselJS
	 **/
	var s = createjs.EaselJS = createjs.EaselJS || {};

	/**
	 * The version string for this release.
	 * @property version
	 * @type String
	 * @static
	 **/
	s.version = /*=version*/"NEXT"; // injected by build process

	/**
	 * The build date for this release in UTC format.
	 * @property buildDate
	 * @type String
	 * @static
	 **/
	s.buildDate = /*=date*/"Wed, 27 May 2015 18:12:21 GMT"; // injected by build process

})(); /*
 AngularJS v1.2.18
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,h,q){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function k(a){var d={};a=a.split(",");var b;for(b=0;b<a.length;b++)d[a[b]]=!0;return d}function F(a,d){function b(a,c,b,g){c=h.lowercase(c);if(t[c])for(;f.last()&&u[f.last()];)e("",f.last());v[c]&&f.last()==c&&e("",c);(g=w[c]||!!g)||f.push(c);var l={};b.replace(G,function(a,c,d,b,e){l[c]=r(d||b||e||"")});d.start&&d.start(c,l,g)}function e(a,c){var b=0,e;if(c=h.lowercase(c))for(b=f.length-1;0<=b&&f[b]!=c;b--);
if(0<=b){for(e=f.length-1;e>=b;e--)d.end&&d.end(f[e]);f.length=b}}var c,g,f=[],l=a;for(f.last=function(){return f[f.length-1]};a;){g=!0;if(f.last()&&x[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(c,a){a=a.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(a));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))c=a.indexOf("--",4),0<=c&&a.lastIndexOf("--\x3e",c)===c&&(d.comment&&d.comment(a.substring(4,c)),a=a.substring(c+3),g=!1);else if(y.test(a)){if(c=a.match(y))a=
a.replace(c[0],""),g=!1}else if(J.test(a)){if(c=a.match(z))a=a.substring(c[0].length),c[0].replace(z,e),g=!1}else K.test(a)&&(c=a.match(A))&&(a=a.substring(c[0].length),c[0].replace(A,b),g=!1);g&&(c=a.indexOf("<"),g=0>c?a:a.substring(0,c),a=0>c?"":a.substring(c),d.chars&&d.chars(r(g)))}if(a==l)throw L("badparse",a);l=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];var b=d[3];if(d=d[2])n.innerHTML=d.replace(/</g,"&lt;"),d="textContent"in n?n.textContent:n.innerText;return a+d+b}function B(a){return a.replace(/&/g,
"&amp;").replace(N,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var b=!1,e=h.bind(a,a.push);return{start:function(a,g,f){a=h.lowercase(a);!b&&x[a]&&(b=a);b||!0!==C[a]||(e("<"),e(a),h.forEach(g,function(b,f){var g=h.lowercase(f),k="img"===a&&"src"===g||"background"===g;!0!==P[g]||!0===D[g]&&!d(b,k)||(e(" "),e(f),e('="'),e(B(b)),e('"'))}),
e(f?"/>":">"))},end:function(a){a=h.lowercase(a);b||!0!==C[a]||(e("</"),e(a),e(">"));a==b&&(b=!1)},chars:function(a){b||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,z=/^<\s*\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\s*\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,
w=k("area,br,col,hr,img,wbr");p=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");q=k("rp,rt");var v=h.extend({},q,p),t=h.extend({},p,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},q,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=k("script,style"),
C=h.extend({},w,t,u,v),D=k("background,cite,href,longdesc,src,usemap"),P=h.extend({},D,k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),n=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=
["$$sanitizeUri",function(a){return function(d){var b=[];F(d,s(b,function(b,c){return!/^unsafe/.test(a(b,c))}));return b.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,b=/^mailto:/;return function(e,c){function g(a){a&&m.push(E(a))}function f(a,b){m.push("<a ");h.isDefined(c)&&(m.push('target="'),m.push(c),m.push('" '));m.push('href="');m.push(a);m.push('">');g(b);m.push("</a>")}if(!e)return e;
for(var l,k=e,m=[],n,p;l=k.match(d);)n=l[0],l[2]==l[3]&&(n="mailto:"+n),p=l.index,g(k.substr(0,p)),f(n,l[0].replace(b,"")),k=k.substring(p+l[0].length);g(k);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
 /*
 * angular-mm-foundation
 * http://pineconellc.github.io/angular-foundation/

 * Version: 0.8.0 - 2015-10-13
 * License: MIT
 * (c) Pinecone, LLC
 */
angular.module("mm.foundation",["mm.foundation.tpls","mm.foundation.accordion","mm.foundation.alert","mm.foundation.bindHtml","mm.foundation.buttons","mm.foundation.position","mm.foundation.mediaQueries","mm.foundation.dropdownToggle","mm.foundation.interchange","mm.foundation.transition","mm.foundation.modal","mm.foundation.offcanvas","mm.foundation.pagination","mm.foundation.tooltip","mm.foundation.popover","mm.foundation.progressbar","mm.foundation.rating","mm.foundation.tabs","mm.foundation.topbar","mm.foundation.tour","mm.foundation.typeahead"]),angular.module("mm.foundation.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/topbar/has-dropdown.html","template/topbar/toggle-top-bar.html","template/topbar/top-bar-dropdown.html","template/topbar/top-bar-section.html","template/topbar/top-bar.html","template/tour/tour.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("mm.foundation.accordion",[]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse",function(a){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(b,c,d,e){var f,g;e.addGroup(b),b.isOpen=!1,d.isOpen&&(f=a(d.isOpen),g=f.assign,b.$parent.$watch(f,function(a){b.isOpen=!!a})),b.$watch("isOpen",function(a){a&&e.closeOthers(b),g&&g(b.$parent,a)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(a,b,c){return function(a,b,d,e){e.setHeading(c(a,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("mm.foundation.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b&&"undefined"!=typeof b.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"}}}),angular.module("mm.foundation.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("mm.foundation.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass,this.toggleEvent=a.toggleEvent}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){b.hasClass(e.activeClass)||a.$apply(function(){f.$setViewValue(a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("mm.foundation.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].body.scrollTop||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].body.scrollLeft||a[0].documentElement.scrollLeft)}}}}]),angular.module("mm.foundation.mediaQueries",[]).factory("matchMedia",["$document","$window",function(a,b){return b.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a[0])}]).factory("mediaQueries",["$document","matchMedia",function(a,b){var c=angular.element(a[0].querySelector("head"));c.append('<meta class="foundation-mq-topbar" />'),c.append('<meta class="foundation-mq-small" />'),c.append('<meta class="foundation-mq-medium" />'),c.append('<meta class="foundation-mq-large" />');var d=/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,e={topbar:getComputedStyle(c[0].querySelector("meta.foundation-mq-topbar")).fontFamily.replace(d,""),small:getComputedStyle(c[0].querySelector("meta.foundation-mq-small")).fontFamily.replace(d,""),medium:getComputedStyle(c[0].querySelector("meta.foundation-mq-medium")).fontFamily.replace(d,""),large:getComputedStyle(c[0].querySelector("meta.foundation-mq-large")).fontFamily.replace(d,"")};return{topbarBreakpoint:function(){return!b(e.topbar).matches},small:function(){return b(e.small).matches},medium:function(){return b(e.medium).matches},large:function(){return b(e.large).matches}}}]),angular.module("mm.foundation.dropdownToggle",["mm.foundation.position","mm.foundation.mediaQueries"]).controller("DropdownToggleController",["$scope","$attrs","mediaQueries",function(a,b,c){this.small=function(){return c.small()&&!c.medium()}}]).directive("dropdownToggle",["$document","$window","$location","$position",function(a,b,c,d){var e=null,f=angular.noop;return{restrict:"CA",controller:"DropdownToggleController",link:function(c,g,h,i){var j=g.parent(),k=angular.element(a[0].querySelector(h.dropdownToggle)),l=function(){return j.hasClass("has-dropdown")},m=function(c){k=angular.element(a[0].querySelector(h.dropdownToggle));var m=g===e;if(c.preventDefault(),c.stopPropagation(),e&&f(),!m&&!g.hasClass("disabled")&&!g.prop("disabled")){k.css("display","block"),k.addClass("f-open-dropdown");var n=d.offset(g),o=d.offset(angular.element(k[0].offsetParent)),p=k.prop("offsetWidth"),q={top:n.top-o.top+n.height+"px"};if(i.small())q.left=Math.max((o.width-p)/2,8)+"px",q.position="absolute",q.width="95%",q["max-width"]="none";else{var r=Math.round(n.left-o.left),s=b.innerWidth-p-8;r>s&&(r=s,k.removeClass("left").addClass("right")),q.left=r+"px",q.position=null,q["max-width"]=null}k.css(q),g.addClass("expanded"),l()&&j.addClass("hover"),e=g,f=function(){a.off("click",f),k.css("display","none"),k.removeClass("f-open-dropdown"),g.removeClass("expanded"),f=angular.noop,e=null,j.hasClass("hover")&&j.removeClass("hover")},a.on("click",f)}};k&&k.css("display","none"),c.$watch("$location.path",function(){f()}),g.on("click",m),g.on("$destroy",function(){g.off("click",m)})}}}]),angular.module("mm.foundation.interchange",["mm.foundation.mediaQueries"]).factory("interchangeQueries",["$document",function(a){for(var b,c,d={"default":"only screen",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},e="foundation-mq-",f=["small","medium","large","xlarge","xxlarge"],g=angular.element(a[0].querySelector("head")),h=0;h<f.length;h++)g.append('<meta class="'+e+f[h]+'" />'),b=getComputedStyle(g[0].querySelector("meta."+e+f[h])),c=b.fontFamily.replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),d[f[h]]=c;return d}]).factory("interchangeQueriesManager",["interchangeQueries",function(a){return{add:function(b,c){return b&&c&&angular.isString(b)&&angular.isString(c)&&!a[b]?(a[b]=c,!0):!1}}}]).factory("interchangeTools",["$window","matchMedia","interchangeQueries",function(a,b,c){var d=function(a){for(var b,c=a.split(/\[(.*?)\]/),d=c.length,e=/^(.+)\,\ \((.+)\)$/,f={};d--;)c[d].replace(/[\W\d]+/,"").length>4&&(b=e.exec(c[d]),b&&3===b.length&&(f[b[2]]=b[1]));return f},e=function(a){var d,e,f;for(d in a)if(e=c[d]||d,f=b(e),f.matches)return a[d]};return{parseAttribute:d,findCurrentMediaFile:e}}]).directive("interchange",["$window","$rootScope","interchangeTools",function(a,b,c){var d=/[A-Za-z0-9-_]+\.(jpg|jpeg|png|gif|bmp|tiff)\ *,/i;return{restrict:"A",scope:!0,priority:450,compile:function(e,f){return"DIV"!==e[0].nodeName||d.test(f.interchange)||e.html('<ng-include src="currentFile"></ng-include>'),{pre:function(){},post:function(d,e,f){var g,h;switch(h=e&&e[0]&&e[0].nodeName,d.fileMap=c.parseAttribute(f.interchange),h){case"DIV":g=c.findCurrentMediaFile(d.fileMap),d.type=/[A-Za-z0-9-_]+\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(g)?"background":"include";break;case"IMG":d.type="image";break;default:return}var i=function(a){var f=c.findCurrentMediaFile(d.fileMap);if(!d.currentFile||d.currentFile!==f){switch(d.currentFile=f,d.type){case"image":e.attr("src",d.currentFile);break;case"background":e.css("background-image","url("+d.currentFile+")")}b.$emit("replace",e,d),a&&d.$apply()}};i(),a.addEventListener("resize",i),d.$on("$destroy",function(){a.removeEventListener("resize",i)})}}}}}]),angular.module("mm.foundation.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("mm.foundation.modal",["mm.foundation.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$modalStack","$timeout",function(a,b){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(c){c.animate=!1,b(function(){c.animate=!0}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:"template/modal/window.html",link:function(a,c,d){a.windowClass=d.windowClass||"",b(function(){a.animate=!0,c[0].querySelectorAll("[autofocus]").length>0?c[0].querySelectorAll("[autofocus]")[0].focus():c[0].focus()})}}}]).factory("$modalStack",["$window","$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f,g){function h(){for(var a=-1,b=q.keys(),c=0;c<b.length;c++)q.get(b[c]).value.backdrop&&(a=c);return a}function i(a){var b=d.find(a.options.parent).eq(0),c=q.get(a).value;q.remove(a),k(c.modalDomEl,c.modalScope,300,function(){c.modalScope.$destroy(),b.toggleClass(p,q.length()>0),j()})}function j(){if(m&&-1==h()){var a=n;k(m,n,150,function(){a.$destroy(),a=null}),m=void 0,n=void 0}}function k(a,d,e,f){function g(){g.done||(g.done=!0,a.remove(),f&&f())}d.animate=!1;var h=b.transitionEndEventName;if(h){var i=c(g,e);a.bind(h,function(){c.cancel(i),g(),d.$apply()})}else c(g,0)}function l(b,c){angular.isUndefined(c)&&(c=0);var d=a.pageYOffset||0;return c+d}var m,n,o,p="modal-open",q=g.createNew(),r={};return f.$watch(h,function(a){n&&(n.index=a)}),d.bind("keydown",function(a){var b;27===a.which&&(b=q.top(),b&&b.value.keyboard&&f.$apply(function(){r.dismiss(b.key)}))}),r.open=function(b,c){b.options={deferred:c.deferred,modalScope:c.scope,backdrop:c.backdrop,keyboard:c.keyboard,parent:c.parent},q.add(b,b.options);var g=d.find(c.parent).eq(0),i=h();i>=0&&!m&&(n=f.$new(!0),n.index=i,m=e("<div modal-backdrop></div>")(n),g.append(m));var j=angular.element('<div class="reveal-modal" style="z-index:-1""></div>');g.append(j[0]),o=parseInt(a.getComputedStyle(j[0]).top)||0;var k=l(j,o);j.remove();var r=angular.element('<div modal-window style="visibility: visible; top:'+k+'px;"></div>').attr({"window-class":c.windowClass,index:q.length()-1,animate:"animate"});r.html(c.content);var s=e(r)(c.scope);q.top().value.modalDomEl=s,g.append(s),g.addClass(p)},r.reposition=function(a){var b=q.get(a).value;if(b){var c=b.modalDomEl,d=l(c,o);c.css("top",d+"px")}},r.close=function(a,b){var c=q.get(a);c&&(c.value.deferred.resolve(b),i(a))},r.dismiss=function(a,b){var c=q.get(a);c&&(c.value.deferred.reject(b),i(a))},r.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},r.getTop=function(){return q.top()},r}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)},reposition:function(){h.reposition(k)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,windowClass:b.windowClass,parent:b.parent||"body"})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("mm.foundation.offcanvas",[]).directive("offCanvasWrap",["$window",function(a){return{scope:{},restrict:"C",link:function(b,c){var d=angular.element(a),e=b.sidebar=c;b.hide=function(){e.removeClass("move-left"),e.removeClass("move-right")},d.bind("resize.body",b.hide),b.$on("$destroy",function(){d.unbind("resize.body",b.hide)})},controller:["$scope",function(a){this.leftToggle=function(){a.sidebar.toggleClass("move-right")},this.rightToggle=function(){a.sidebar.toggleClass("move-left")},this.hide=function(){a.hide()}}]}}]).directive("leftOffCanvasToggle",[function(){return{require:"^offCanvasWrap",restrict:"C",link:function(a,b,c,d){b.on("click",function(){d.leftToggle()})}}}]).directive("rightOffCanvasToggle",[function(){return{require:"^offCanvasWrap",restrict:"C",link:function(a,b,c,d){b.on("click",function(){d.rightToggle()})}}}]).directive("exitOffCanvas",[function(){return{require:"^offCanvasWrap",restrict:"C",link:function(a,b,c,d){b.on("click",function(){d.hide()})}}}]).directive("offCanvasList",[function(){return{require:"^offCanvasWrap",restrict:"C",link:function(a,b,c,d){b.on("click",function(){d.hide()})}}}]),angular.module("mm.foundation.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse","$interpolate",function(a,b,c,d){var e=this,f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d){b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){e.itemsPerPage=parseInt(b,10),a.totalPages=e.calculateTotalPages()}):this.itemsPerPage=d},this.noPrevious=function(){return 1===this.page},this.noNext=function(){return this.page===a.totalPages},this.isActive=function(a){return this.page===a},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.getAttributeValue=function(b,c,e){return angular.isDefined(b)?e?d(b)(a.$parent):a.$parent.$eval(b):c},this.render=function(){this.page=parseInt(a.page,10)||1,this.page>0&&this.page<=a.totalPages&&(a.pages=this.getPages(this.page,a.totalPages))},a.selectPage=function(b){!e.isActive(b)&&b>0&&b<=a.totalPages&&(a.page=b,a.onSelectPage({page:b}))},a.$watch("page",function(){e.render()}),a.$watch("totalItems",function(){a.totalPages=e.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),e.page>b?a.selectPage(b):e.render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &"},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c,d){return{number:a,text:b,active:c,disabled:d}}var h,i=f.getAttributeValue(e.boundaryLinks,b.boundaryLinks),j=f.getAttributeValue(e.directionLinks,b.directionLinks),k=f.getAttributeValue(e.firstText,b.firstText,!0),l=f.getAttributeValue(e.previousText,b.previousText,!0),m=f.getAttributeValue(e.nextText,b.nextText,!0),n=f.getAttributeValue(e.lastText,b.lastText,!0),o=f.getAttributeValue(e.rotate,b.rotate);f.init(b.itemsPerPage),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){h=parseInt(a,10),f.render()}),f.getPages=function(a,b){var c=[],d=1,e=b,p=angular.isDefined(h)&&b>h;p&&(o?(d=Math.max(a-Math.floor(h/2),1),e=d+h-1,e>b&&(e=b,d=e-h+1)):(d=(Math.ceil(a/h)-1)*h+1,e=Math.min(d+h-1,b)));for(var q=d;e>=q;q++){var r=g(q,q,f.isActive(q),!1);c.push(r)}if(p&&!o){if(d>1){var s=g(d-1,"...",!1,!1);c.unshift(s)}if(b>e){var t=g(e+1,"...",!1,!1);c.push(t)}}if(j){var u=g(a-1,l,!1,f.noPrevious());c.unshift(u);var v=g(a+1,m,!1,f.noNext());c.push(v)}if(i){var w=g(1,k,!1,f.noPrevious());c.unshift(w);var x=g(b,n,!1,f.noNext());c.push(x)}return c}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &"},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){function f(a,b,c,d,e){return{number:a,text:b,disabled:c,previous:i&&d,next:i&&e}}var g=e.getAttributeValue(d.previousText,a.previousText,!0),h=e.getAttributeValue(d.nextText,a.nextText,!0),i=e.getAttributeValue(d.align,a.align);e.init(a.itemsPerPage),e.getPages=function(a){return[f(a-1,g,e.noPrevious(),!0,!1),f(a+1,h,e.noNext(),!1,!0)]}}}}]),angular.module("mm.foundation.tooltip",["mm.foundation.position","mm.foundation.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!z||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return b.tt_content?(r(),u&&g.cancel(u),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),A(),b.tt_isOpen=!0,b.$digest(),A):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),b.tt_animation?u=g(s,500):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=!1,z=angular.isDefined(d[l+"Enable"]),A=function(){var a,d,e,f;switch(a=w?j.offset(c):j.position(c),d=t.prop("offsetWidth"),e=t.prop("offsetHeight"),b.tt_placement){case"right":f={top:a.top+a.height/2-e/2,left:a.left+a.width+10};break;case"bottom":f={top:a.top+a.height+10,left:a.left};break;case"left":f={top:a.top+a.height/2-e/2,left:a.left-d-10};break;default:f={top:a.top-e-10,left:a.left}}f.top+="px",f.left+="px",t.css(f)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d[l+"Placement"]=d[l+"Placement"]||null,d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)&&a?a:o.placement}),d[l+"PopupDelay"]=d[l+"PopupDelay"]||null,d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var B=function(){y&&(angular.isFunction(x.show)?C():(c.unbind(x.show,k),c.unbind(x.hide,m)))},C=function(){};d[l+"Trigger"]=d[l+"Trigger"]||null,d.$observe(l+"Trigger",function(a){B(),C(),x=n(a),angular.isFunction(x.show)?C=b.$watch(function(){return x.show(b,c,d)},function(a){return g(a?p:q)}):x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m)),y=!0});var D=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(D)?!!D:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),B(),C(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("mm.foundation.popover",["mm.foundation.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("mm.foundation.progressbar",["mm.foundation.transition"]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig","$transition",function(a,b,c,d){var e=this,f=[],g=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,h=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.addBar=function(a,b){var c=0,d=a.$parent.$index;angular.isDefined(d)&&f[d]&&(c=f[d].value),f.push(a),this.update(b,a.value,c),a.$watch("value",function(a,c){a!==c&&e.update(b,a,c)}),a.$on("$destroy",function(){e.removeBar(a)})},this.update=function(a,b,c){var e=this.getPercentage(b);h?(a.css("width",this.getPercentage(c)+"%"),d(a,{width:e+"%"})):a.css({transition:"none",width:e+"%"})},this.removeBar=function(a){f.splice(f.indexOf(a),1)},this.getPercentage=function(a){return Math.round(100*a/g)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},template:'<div class="progress" ng-transclude></div>'}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("mm.foundation.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","$parse","ratingConfig",function(a,b,c,d){this.maxRange=angular.isDefined(b.max)?a.$parent.$eval(b.max):d.max,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):d.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):d.stateOff,this.createRateObjects=function(a){for(var b={stateOn:this.stateOn,stateOff:this.stateOff},c=0,d=a.length;d>c;c++)a[c]=angular.extend({index:c},b,a[c]);return a},a.range=this.createRateObjects(angular.isDefined(b.ratingStates)?angular.copy(a.$parent.$eval(b.ratingStates)):new Array(this.maxRange)),a.rate=function(b){a.value===b||a.readonly||(a.value=b)},a.enter=function(b){a.readonly||(a.val=b),a.onHover({value:b})},a.reset=function(){a.val=angular.copy(a.value),a.onLeave()},a.$watch("value",function(b){a.val=b}),a.readonly=!1,b.readonly&&a.$parent.$watch(c(b.readonly),function(b){a.readonly=!!b})}]).directive("rating",function(){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0}}),angular.module("mm.foundation.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];angular.isUndefined(a.openOnLoad)&&(a.openOnLoad=!0),b.select=function(a){angular.forEach(c,function(a){a.active=!1}),a.active=!0},b.addTab=function(d){c.push(d),a.openOnLoad&&(1===c.length||d.active)&&b.select(d)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{openOnLoad:"=?"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1,a.type=angular.isDefined(c.type)?a.$parent.$eval(c.type):"tabs"}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){var g,h;e.active?(g=a(e.active),h=g.assign,b.$parent.$watch(g,function(a,c){a!==c&&(b.active=!!a)}),b.active=g(b.$parent)):h=g=angular.noop,b.$watch("active",function(a){angular.isFunction(h)&&(h(b.$parent,a),a?(f.select(b),b.onSelect()):b.onDeselect())}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("mm.foundation.topbar",["mm.foundation.mediaQueries"]).factory("closest",[function(){return function(a,b){for(var c=function(a,b){for(var c=(a.parentNode||a.document).querySelectorAll(b),d=-1;c[++d]&&c[d]!=a;);return!!c[d]},d=a[0];d;){if(c(d,b))return angular.element(d);d=d.parentElement}return!1}}]).directive("topBar",["$timeout","$compile","$window","$document","mediaQueries",function(a,b,c,d,e){return{scope:{stickyClass:"@",backText:"@",stickyOn:"=",customBackText:"=",isHover:"=",mobileShowParentLink:"=",scrolltop:"="},restrict:"EA",replace:!0,templateUrl:"template/topbar/top-bar.html",transclude:!0,controller:["$window","$scope","closest",function(b,c,f){c.settings={},c.settings.stickyClass=c.stickyClass||"sticky",c.settings.backText=c.backText||"Back",c.settings.stickyOn=c.stickyOn||"all",c.settings.customBackText=void 0===c.customBackText?!0:c.customBackText,c.settings.isHover=void 0===c.isHover?!0:c.isHover,c.settings.mobileShowParentLink=void 0===c.mobileShowParentLink?!0:c.mobileShowParentLink,c.settings.scrolltop=void 0===c.scrolltop?!0:c.scrolltop,this.settings=c.settings,c.index=0;var g=function(a){var b=a.offsetHeight,c=a.currentStyle||getComputedStyle(a);return b+=parseInt(c.marginTop,10)+parseInt(c.marginBottom,10)},h=[];this.addSection=function(a){h.push(a)},this.removeSection=function(a){var b=h.indexOf(a);b>-1&&h.splice(b,1)};var i=/rtl/i.test(d.find("html").attr("dir"))?"right":"left";c.$watch("index",function(a){for(var b=0;b<h.length;b++)h[b].move(i,a)}),this.toggle=function(a){c.toggle(a);
for(var b=0;b<h.length;b++)h[b].reset();c.index=0,c.height="",c.$apply()},this.back=function(b){if(!(c.index<1)&&e.topbarBreakpoint()){var d=angular.element(b.currentTarget),h=f(d,"li.moved"),i=h.parent();c.index=c.index-1,c.height=0===c.index?"":c.originalHeight+g(i[0]),a(function(){h.removeClass("moved")},300)}},this.forward=function(a){if(!e.topbarBreakpoint())return!1;var b=angular.element(a.currentTarget),d=f(b,"li");d.addClass("moved"),c.height=c.originalHeight+g(b.parent()[0].querySelector("ul")),c.index=c.index+1,c.$apply()}}],link:function(a,b){var f=a.topbar=b,g=f.parent(),h=angular.element(d[0].querySelector("body")),i=e.topbarBreakpoint(),j=a.isSticky=function(){var b=g.hasClass(a.settings.stickyClass);return b&&"all"===a.settings.stickyOn?!0:b&&e.small()&&"small"===a.settings.stickyOn?!0:b&&e.medium()&&"medium"===a.settings.stickyOn?!0:b&&e.large()&&"large"===a.settings.stickyOn?!0:!1},k=function(){if(a.stickyTopbar&&a.isSticky()){var b=n;c.pageYOffset>b&&!g.hasClass("fixed")?(g.addClass("fixed"),h.css("padding-top",a.originalHeight+"px")):c.pageYOffset<=b&&g.hasClass("fixed")&&(g.removeClass("fixed"),h.css("padding-top",""))}},l=function(){var b=e.topbarBreakpoint();if(i!==b){i=e.topbarBreakpoint(),f.removeClass("expanded"),f.parent().removeClass("expanded"),a.height="";var c=angular.element(f[0].querySelectorAll("section"));angular.forEach(c,function(a){angular.element(a.querySelectorAll("li.moved")).removeClass("moved")}),a.$apply()}},m=function(){k(),a.$apply()};if(a.toggle=function(b){if(!e.topbarBreakpoint())return!1;var d=void 0===b?!f.hasClass("expanded"):b;d?f.addClass("expanded"):f.removeClass("expanded"),a.settings.scrolltop?!d&&f.hasClass("fixed")?(f.parent().addClass("fixed"),f.removeClass("fixed"),h.css("padding-top",a.originalHeight+"px")):d&&f.parent().hasClass("fixed")&&(f.parent().removeClass("fixed"),f.addClass("fixed"),h.css("padding-top",""),c.scrollTo(0,0)):(j()&&f.parent().addClass("fixed"),f.parent().hasClass("fixed")&&(d?(f.addClass("fixed"),f.parent().addClass("expanded"),h.css("padding-top",a.originalHeight+"px")):(f.removeClass("fixed"),f.parent().removeClass("expanded"),k())))},g.hasClass("fixed")||j()){a.stickyTopbar=!0,a.height=g[0].offsetHeight;var n=g[0].getBoundingClientRect().top+c.pageYOffset}else a.height=f[0].offsetHeight;a.originalHeight=a.height,a.$watch("height",function(a){a?f.css("height",a+"px"):f.css("height","")}),angular.element(c).bind("resize",l),angular.element(c).bind("scroll",m),a.$on("$destroy",function(){angular.element(c).unbind("scroll",l),angular.element(c).unbind("resize",m)}),g.hasClass("fixed")&&h.css("padding-top",a.originalHeight+"px")}}}]).directive("toggleTopBar",["closest",function(a){return{scope:{},require:"^topBar",restrict:"A",replace:!0,templateUrl:"template/topbar/toggle-top-bar.html",transclude:!0,link:function(b,c,d,e){c.bind("click",function(b){var c=a(angular.element(b.currentTarget),"li");c.hasClass("back")||c.hasClass("has-dropdown")||e.toggle()}),b.$on("$destroy",function(){c.unbind("click")})}}}]).directive("topBarSection",["$compile","closest",function(a,b){return{scope:{},require:"^topBar",restrict:"EA",replace:!0,templateUrl:"template/topbar/top-bar-section.html",transclude:!0,link:function(a,c,d,e){var f=c;a.reset=function(){angular.element(f[0].querySelectorAll("li.moved")).removeClass("moved")},a.move=function(a,b){f.css("left"===a?{left:-100*b+"%"}:{right:-100*b+"%"})},e.addSection(a),a.$on("$destroy",function(){e.removeSection(a)});var g=f[0].querySelectorAll("li>a");angular.forEach(g,function(c){var d=angular.element(c),f=b(d,"li");f.hasClass("has-dropdown")||f.hasClass("back")||f.hasClass("title")||(d.bind("click",function(){e.toggle(!1)}),a.$on("$destroy",function(){d.bind("click")}))})}}}]).directive("hasDropdown",["mediaQueries",function(a){return{scope:{},require:"^topBar",restrict:"A",templateUrl:"template/topbar/has-dropdown.html",replace:!0,transclude:!0,link:function(b,c,d,e){b.triggerLink=c.children("a")[0];var f=angular.element(b.triggerLink);f.bind("click",function(a){e.forward(a)}),b.$on("$destroy",function(){f.unbind("click")}),c.bind("mouseenter",function(){e.settings.isHover&&!a.topbarBreakpoint()&&c.addClass("not-click")}),c.bind("click",function(){e.settings.isHover||a.topbarBreakpoint()||c.toggleClass("not-click")}),c.bind("mouseleave",function(){c.removeClass("not-click")}),b.$on("$destroy",function(){c.unbind("click"),c.unbind("mouseenter"),c.unbind("mouseleave")})},controller:["$window","$scope",function(a,b){this.triggerLink=b.triggerLink}]}}]).directive("topBarDropdown",["$compile",function(a){return{scope:{},require:["^topBar","^hasDropdown"],restrict:"A",replace:!0,templateUrl:"template/topbar/top-bar-dropdown.html",transclude:!0,link:function(b,c,d,e){var f,g=e[0],h=e[1],i=angular.element(h.triggerLink),j=i.attr("href");b.linkText=i.text(),b.back=function(a){g.back(a)},b.backText=g.settings.customBackText?g.settings.backText:"&laquo; "+i.html(),f=angular.element(g.settings.mobileShowParentLink&&j&&j.length>1?'<li class="title back js-generated"><h5><a href="#" ng-click="back($event);">{{backText}}</a></h5></li><li><a class="parent-link js-generated" href="'+j+'">{{linkText}}</a></li>':'<li class="title back js-generated"><h5><a href="" ng-click="back($event);">{{backText}}</a></h5></li>'),a(f)(b),c.prepend(f)}}}]),angular.module("mm.foundation.tour",["mm.foundation.position","mm.foundation.tooltip"]).service("$tour",["$window",function(a){function b(){try{return parseInt(a.localStorage.getItem("mm.tour.step"),10)}catch(b){if("SecurityError"!==b.name)throw b}}function c(){try{a.localStorage.setItem("mm.tour.step",e)}catch(b){if("SecurityError"!==b.name)throw b}}function d(a){e=a,c()}var e=b(),f={};this.add=function(a,b){f[a]=b},this.has=function(a){return!!f[a]},this.isActive=function(){return e>0},this.current=function(a){return a?void d(e):e},this.start=function(){d(1)},this.next=function(){d(e+1)},this.end=function(){d(0)}}]).directive("stepTextPopup",["$tour",function(a){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tour/tour.html",link:function(b,c){b.isLastStep=function(){return!a.has(a.current()+1)},b.endTour=function(){c.remove(),a.end()},b.nextStep=function(){c.remove(),a.next()},b.$on("$locationChangeSuccess",b.endTour)}}}]).directive("stepText",["$position","$tooltip","$tour","$window",function(a,b,c,d){function e(a){var b=a[0].getBoundingClientRect();return b.top>=0&&b.left>=0&&b.bottom<=d.innerHeight-80&&b.right<=d.innerWidth}function f(b,f,g){var h=parseInt(g.stepIndex,10);if(c.isActive()&&h&&(c.add(h,g),h===c.current())){if(!e(f)){var i=a.offset(f);d.scrollTo(0,i.top-d.innerHeight/2)}return!0}return!1}return b("stepText","step",f)}]),angular.module("mm.foundation.typeahead",["mm.foundation.position","mm.foundation.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+c+"'.");return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?b(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=angular.element("<div typeahead-popup></div>");w.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&w.attr("template-url",k.typeaheadTemplateUrl);var x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y=function(){x.matches=[],x.activeIdx=-1},z=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){if(a===l.$viewValue&&m)if(c.length>0){x.activeIdx=0,x.matches.length=0;for(var d=0;d<c.length;d++)b[v.itemName]=c[d],x.matches.push({label:v.viewMapper(x,b),model:c[d]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight")}else y()},function(){y()}).finally(function(){q(i,!1)})};y(),x.query=void 0;var A;l.$parsers.unshift(function(a){return a&&a.length>=n?o>0?(A&&d.cancel(A),A=d(function(){z(a)},o)):z(a):(q(i,!1),y()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,d={};d[v.itemName]=c=x.matches[a].model,b=v.modelMapper(i,d),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,d)}),y(),j[0].focus()},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),y(),x.$digest()))}),j.bind("blur",function(){m=!1}),j.bind("focus",function(){m=!0});var B=function(a){j[0]!==a.target&&(y(),x.$digest())};e.bind("click",B),i.$on("$destroy",function(){e.unbind("click",B)});var C=a(w)(x);t?e.find("body").append(C):j.after(C)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?b.replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<dd>\n  <a ng-click="isOpen = !isOpen" ng-class="{ active: isOpen }"  accordion-transclude="heading">{{heading}}</a>\n  <div class="content" ng-class="{ active: isOpen }" ng-transclude></div>\n</dd>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<dl class="accordion" ng-transclude></dl>\n')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html","<div class='alert-box' ng-class='(type || \"\")'>\n  <span ng-transclude></span>\n  <a ng-show='closeable' class='close' ng-click='close()'>&times;</a>\n</div>\n")}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="reveal-modal-bg fade" ng-class="{in: animate}" ng-click="close($event)" style="display: block"></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" class="reveal-modal fade {{ windowClass }}"\n  ng-class="{in: animate}" style="display: block; visibility: visible">\n  <div ng-transclude></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pagination">\n  <li ng-repeat="page in pages" class="arrow" ng-class="{unavailable: page.disabled, left: page.previous, right: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-repeat="page in pages" ng-class="{arrow: $first || $last, current: page.active, unavailable: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<span class="tooltip tip-{{placement}}"\n  ng-class="{ in: isOpen(), fade: animation() }"\n  style="width: auto">\n  <span bind-html-unsafe="content"></span>\n  <span class="nub"></span>\n</span>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<span class="tooltip tip-{{placement}}"\n  ng-class="{ in: isOpen(), fade: animation() }"\n  style="width: auto">\n  <span ng-bind="content"></span>\n  <span class="nub"></span>\n</span>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="joyride-tip-guide" ng-class="{ in: isOpen(), fade: animation() }">\n  <span class="joyride-nub" ng-class="{\n    bottom: placement === \'top\',\n    left: placement === \'right\',\n    right: placement === \'left\',\n    top: placement === \'bottom\'\n  }"></span>\n  <div class="joyride-content-wrapper">\n    <h4 ng-bind="title" ng-show="title"></h4>\n    <p ng-bind="content"></p>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<span class="meter" ng-transclude></span>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-class="type" ng-transclude></div>\n')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress" ng-class="type">\n  <span class="meter" ng-transclude></span>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()">\n  <i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="fa"\n    ng-class="$index < val && (r.stateOn || \'fa-star\') || (r.stateOff || \'fa-star-o\')"></i>\n</span>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<dd ng-class="{active: active}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</dd>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div class="tabbable">\n  <dl class="tabs" ng-class="{\'vertical\': vertical}" ng-transclude></dl>\n  <div class="tabs-content" ng-class="{\'vertical\': vertical}">\n    <div class="content" \n      ng-repeat="tab in tabs" \n      ng-class="{active: tab.active}">\n      <div tab-content-transclude="tab"></div>\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/topbar/has-dropdown.html",[]).run(["$templateCache",function(a){a.put("template/topbar/has-dropdown.html",'<li class="has-dropdown" ng-transclude></li>')}]),angular.module("template/topbar/toggle-top-bar.html",[]).run(["$templateCache",function(a){a.put("template/topbar/toggle-top-bar.html",'<li class="toggle-topbar menu-icon" ng-transclude></li>')}]),angular.module("template/topbar/top-bar-dropdown.html",[]).run(["$templateCache",function(a){a.put("template/topbar/top-bar-dropdown.html",'<ul class="dropdown" ng-transclude></ul>')}]),angular.module("template/topbar/top-bar-section.html",[]).run(["$templateCache",function(a){a.put("template/topbar/top-bar-section.html",'<section class="top-bar-section" ng-transclude></section>')}]),angular.module("template/topbar/top-bar.html",[]).run(["$templateCache",function(a){a.put("template/topbar/top-bar.html",'<nav class="top-bar" ng-transclude></nav>')}]),angular.module("template/tour/tour.html",[]).run(["$templateCache",function(a){a.put("template/tour/tour.html",'<div class="joyride-tip-guide" ng-class="{ in: isOpen(), fade: animation() }">\n  <span class="joyride-nub" ng-class="{\n    bottom: placement === \'top\',\n    left: placement === \'right\',\n    right: placement === \'left\',\n    top: placement === \'bottom\'\n  }"></span>\n  <div class="joyride-content-wrapper">\n    <h4 ng-bind="title" ng-show="title"></h4>\n    <p ng-bind="content"></p>\n    <a class="small button joyride-next-tip" ng-show="!isLastStep()" ng-click="nextStep()">Next</a>\n    <a class="small button joyride-next-tip" ng-show="isLastStep()" ng-click="endTour()">End</a>\n    <a class="joyride-close-tip" ng-click="endTour()">&times;</a>\n  </div>\n</div>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html","<ul class=\"f-dropdown\" ng-style=\"{display: isOpen()&&'block' || 'none', top: position.top+'px', left: position.left+'px'}\">\n"+'    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]); /**
 * TODO drag line
 * TODO resize line
 * TODO Frame
 * TODO save board
 * TODO load board
 * TODO List elements (settings: show/hide, delete, up/down)
 */
var app = angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]).run(function(Board) {
    Board.create();
});
 app.controller('EditLineController', function($scope, $rootScope, Board) {

    $scope.arrowLeft = function() {
        $scope.editLineObj.line.addStartArrow();
    };

    $scope.arrowRight = function() {
        $scope.editLineObj.line.addEndArrow();
    };

    $scope.changeType = function() {
        $scope.editLineObj.line.changeType();
    };

    $scope.deleteElement = function(){
        $scope.editLineObj.visible = false;
        Board.removeElement($scope.editLineObj.line);
    };

    $scope.$watch('editLineObj.visible', function(newValue) {
        if(newValue) {

            var centerY = 0;
            var centerX = 0;

            if($scope.editLineObj.line.xStart < $scope.editLineObj.line.xEnd) {
                centerX = ($scope.editLineObj.line.xStart + $scope.editLineObj.line.xEnd)/2
            }
            else {
                centerX = ($scope.editLineObj.line.xEnd + $scope.editLineObj.line.xStart)/2
            }

            if($scope.editLineObj.line.yStart < $scope.editLineObj.line.yEnd) {
                centerY = ($scope.editLineObj.line.yStart + $scope.editLineObj.line.yEnd)/2
            }
            else {
                centerY = ($scope.editLineObj.line.yEnd + $scope.editLineObj.line.yStart)/2
            }

            $scope.styleEditLine = {
                top: centerY+'px',
                left: centerX+'px'
            };
        }
    });
}); app.controller('EditPanelController', function($scope, $rootScope, Board, Line) {

    var board = Board.getBoard();


    $scope.addLine = function(){
        $rootScope.canvasCursor = 'cursor-crosshair';
        $rootScope.drawwingLine = true;

        var dragging = true;
        var element = null;

        var xStart = $scope.editPanelObj.element.getX() + $scope.editPanelObj.element.getCenterX();
        var yStart = $scope.editPanelObj.element.getY() + $scope.editPanelObj.element.getCenterX();

        if($rootScope.drawwingLine) {
            Board.addElement(Line(xStart, yStart, xStart, xStart));
            element = Board.getElement(Board.count()-1);
        }

        console.log('start');
        $('canvas').mousedown(function(evt) {
            dragging = false;
            $rootScope.drawwingLine = false;
            $('canvas').unbind('mousemove');
            $('canvas').unbind('mousedown');
        });

        $('canvas').mousemove(function(e){
            if(dragging && $rootScope.drawwingLine) {
                element.redraw(xStart, yStart, e.pageX-160, e.pageY);
            }
        });
    };

    $scope.resizeElement = function(){
        $scope.editPanelObj.visible = false;
        $rootScope.resizeMode = true;
        $rootScope.styleResizePanel = {
            left: $scope.editPanelObj.element.x+'px',
            top: $scope.editPanelObj.element.y+'px',
            width: $scope.editPanelObj.element.getWidth()+'px',
            height: $scope.editPanelObj.element.getHeight()+'px'
        };
    };

    $scope.deleteElement = function(){
        $scope.editPanelObj.visible = false;
        Board.removeElement($scope.editPanelObj.element);
    };

    $scope.$watch('editPanelObj.visible', function(newValue) {
        if(newValue) {
            $scope.styleEditPanel = {
                top: $scope.editPanelObj.element.getY()+'px',
                left: $scope.editPanelObj.element.getX()+$scope.editPanelObj.element.getWidth()+'px'
            }
        }
    });

}); app.controller('LayerController', function($scope, $rootScope, Board) {

    $scope.layers = [];

    $rootScope.boardUpdate = function() {
        $scope.layers = Board.getBoardElements();
    };

    $scope.setVisible = function(index, val) {
        Board.setVisible(index, val);
    };

    $scope.remove = function(element) {
        Board.removeElement(element);
    };

}); app.controller('MainController', function($scope, $rootScope, Diagram, Board, Line) {

    setInterval(function(){
        $scope.loaded = true;
        $scope.$apply();
    }, 10000);

    var board = Board.getBoard();
    $scope.alpha = 0;

    board.on("stagemousedown", function(evt) {
        if($scope.editPanelObj)
            $scope.editPanelObj.visible = false;

        if($scope.editLineObj)
            $scope.editLineObj.visible = false;

        if($scope.editElementObj)
            $scope.editElementObj.visible = false;

        $scope.editElementObj.properties = {};
        $rootScope.resizeMode = false;
    });

    $scope.$watch('editElementObj.properties.alpha', function(newValue) {
        if(newValue) {
            $scope.editElementObj.element.setAlpha(newValue);
            $scope.alpha = newValue;
        }
    });

    Diagram.setResize(true, board);

    $scope.fileForm = null;
    $scope.editPanelObj = {};
    $scope.editElementObj = {};
    $scope.styleEditPanel = {};
    $scope.color = '#000000';

    $scope.addElement = function(type) {
        $scope.canvasCursor = '';
        Diagram.addElement(type);
    };

    $scope.drawLine = function(e, type) {
        $scope.canvasCursor = 'cursor-crosshair';
        $rootScope.drawwingLine = true;

        var dragging,
            xStart,
            yStart;
        var element = null;

        $('canvas').mousedown(function(e){
            xStart = e.pageX-160;
            yStart = e.pageY;
            dragging = true;
            if($rootScope.drawwingLine) {
                Board.addElement(Line(xStart, yStart, xStart, xStart, type !== 'solid'));
                element = Board.getElement(Board.count()-1);
            }

        });
        $('canvas').mouseup(function(e){
            dragging = false;
            $rootScope.drawwingLine = false;
            $scope.canvasCursor = '';
            $('canvas').unbind('mousemove');
            $('canvas').unbind('mouseup');
            $('canvas').unbind('mousedown');
        }).mousemove(function(e){
            if(dragging && $rootScope.drawwingLine) {
                element.redraw(xStart, yStart, e.pageX-160, e.pageY, type !== 'solid');
            }
        });


    };

    $scope.loadDiagram = function () {
        document.getElementById('load-diagram').click();
    };

    $scope.saveDiagram = function () {
        Diagram.saveDiagram();
    };

    window.addEventListener("keypress", dealWithKeyboard, false);

    function dealWithKeyboard(e) {
        if(e.which == 0){
            $rootScope.drawwingLine = false;
            console.log('esc');
            $scope.canvasCursor = '';
            $scope.$apply();
        }
    }

});
 app.controller('ResizeController', function($scope, $rootScope, Board) {
    var direction = null;
    var startX = null;
    var startY = null;
    var startWidth = null;
    var startHeight = null;

    $scope.Resize = function(event, dragDirection) {
        direction = dragDirection;
    };

    $(document).ready(function(){
        $(document).on('mousedown', '.dot', function(e) {
            startX = e.pageX;
            startY = e.pageY;
            startWidth = $('#resize-panel').width();
            startHeight = $('#resize-panel').height();
            $rootScope.resizeing = true;
            var width = startWidth;
            var height = startHeight;
            var left = startX;
            var top = startY;

            $('#resize-panel').addClass('draggable').parents().on('mousemove', function(e) {


                if(e.pageX-160 > 0 && $rootScope.resizeing) {
                    if(direction === 'w' && startX-e.pageX+startWidth > 5) {
                        width = startX-e.pageX+startWidth;
                        left = e.pageX-160;
                        $('.draggable').css({
                            width: width+'px',
                            left: left
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            height = width;
                            $('.draggable').css({
                                height: height+'px'
                            });
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, $scope.editPanelObj.element.getHeight());
                        }
                    }
                    else if(direction === 'e' && e.pageX-startX+startWidth > 5) {
                        width = e.pageX-startX+startWidth;
                        left = startX-startWidth-160;
                        $('.draggable').css({
                            width: width+'px',
                            left: left
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            height = width;
                            $('.draggable').css({
                                height: height+'px'
                            });
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, $scope.editPanelObj.element.getHeight());
                        }
                    }
                    else if(direction === 'n' && startY-e.pageY+startHeight > 5) {
                        height = startY-e.pageY+startHeight;
                        top = e.pageY;
                        $('.draggable').css({
                            height: height,
                            top: top
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            width = height;
                            $('.draggable').css({
                                width: width+'px'
                            });
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, $scope.editPanelObj.element.getWidth(), height);
                        }
                    }
                    else if(direction === 's' && e.pageY-startY+startHeight > 5) {
                        height = e.pageY-startY+startHeight;
                        top = startY-startHeight;
                        $('.draggable').css({
                            height: height,
                            top: top
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            width = height;
                            $('.draggable').css({
                                width: width+'px'
                            });
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, $scope.editPanelObj.element.getWidth(), height);
                        }
                    }
                    Board.update();
                }
            });
            e.preventDefault();
        }).on('mouseup', function() {
            $rootScope.resizeing = false;
            $('.draggable').removeClass('draggable');
            $('draggable').parents().unbind( "mousemove" );
            direction = null;
        });
    });

}); function Arrow(){

    this.type = 'Arrow';
    this.strokeStyle = 3;
    this.strokeColor = 'black';
    this.drawing = false;
    this.detalis = {};
    var self = this;

    this.init = function(details){
        var line = null;
        if(details) {
            diagramStructure.push(details);

            line = new createjs.Shape();
            line.graphics.setStrokeStyle(self.strokeStyle);
            line.graphics.beginStroke(self.strokeColor);
            line.graphics.moveTo(details.xStart, details.yStart);
            line.graphics.lineTo(details.xEnd, details.yEnd);
            line.graphics.endStroke();
            stage.addChild(line);
            stage.update();
        }
        else {
            diagramStructure.push({
                id: id,
                type: this.type,
                x: this.defaultX,
                y: this.defaultY,
                w: this.defaultW,
                h: this.defaultH
            });
        }
    };

    this.start = function(x, y) {
        var prev = null;
        var line = null;

        var listenerMousMmove = stage.on("stagemousemove", function(evt) {
            self.drawing = true;
            if(prev){
                if(line) {
                    line.removeAllEventListeners();
                    stage.removeChild(line);
                    stage.update();
                }
            }
            if(self.drawing){
                line = new createjs.Shape();
                line.graphics.setStrokeStyle(self.strokeStyle);
                line.graphics.beginStroke(self.strokeColor);
                line.graphics.moveTo(x, y);
                line.graphics.lineTo(evt.stageX, evt.stageY);
                line.graphics.endStroke();
                stage.addChild(line);
                stage.update();
                self.detalis = {
                    xStart: x,
                    yStart: y,
                    xEnd: evt.stageX,
                    yEnd: evt.stageY
                };
                prev = true;
            }
            //console.log("the canvas was clicked at "+evt.stageX+","+evt.stageY);
        });

        stage.on('click', function(evt){
            if(self.drawing){
                stage.off("stagemousemove", listenerMousMmove);
                var id = new Diagram().generateID();
                diagramStructure.push({
                    id: id,
                    type: self.type,
                    xStart: self.detalis.xStart,
                    yStart: self.detalis.yStart,
                    xEnd: self.detalis.xEnd,
                    yEnd: self.detalis.yEnd
                });

            }
            console.log('klik na stage');
        });

    };
} app.directive('alphaBar', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            bindModel: '=ngModel',
            id: '@',
            defaultValue: '@'
        },
        template: '<div class="alpha-bar">'+
                    '<div class="value" data-drag-bar></div>' +
                    '<input type="hidden" ng-model="bindModel"/>'+
                  '</div>',
        link: function (scope, el) {
            var dataDragBar = el.find('div');
            var dragging = false;
            var parent = {
                width: null,
                offset: null
            };

            scope.$watch('id', function(newValue) {
                if(newValue) {
                    dataDragBar.css({
                        left: (parseFloat(scope.defaultValue)*100)+'%'
                    });
                }
            });

            $('[data-drag-bar]').mousedown(function(){
                dragging = $(this);
                parent.width = $(this).parent().width();
                parent.offset = $(this).parent().offset();
            });
            $(document).mouseup(function(e){
                dragging = false;
                parent = {
                    width: null,
                    offset: null
                };
            }).mousemove(function(e){
                if(dragging) {
                    var left;
                    if(e.pageX < parent.offset.left)
                        left = 0;
                    else if (e.pageX > parent.offset.left + parent.width)
                        left = parent.width;
                    else
                        left = e.pageX-parent.offset.left;
                    dragging.css({
                        left: left+'px'
                    });
                    scope.$apply(function() {
                        scope.bindModel = parseFloat(left/parent.width).toFixed(2);
                    });
                }
            })
        }
    };
}); //pozmieniac
angular.module('app').directive('validfile', function validFile($http, Board, Diagram) {

    var validFormats = ['json'];
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$validators.validFile = function() {
                elem.on('change', function (changeEvent) {

                    var value = elem.val();
                    var ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();

                    if(!validFormats.indexOf(ext)){
                        //api html5
                        var reader = new FileReader();
                        reader.onload = function (loadEvent) {

                            $http.get(loadEvent.target.result).success(function(response) {
                                return response.data;
                            }).success(function (data) {
                                Board.removeAllElements();
                                angular.forEach(data, function(value, key) {
                                    console.log(value);
                                    Diagram.addElement(value.type, value);
                                });
                                console.log(Board.getBoardElements());

                            }).error(function () {
                                alert('Wystąpił błąd')
                            });
                        };
                        reader.readAsDataURL(changeEvent.target.files[0]);


                    }
                    else{
                        alert('Plik musi być w formacie JSON');
                        elem.val(null);
                    }
                });
            };
        }
    };
}); app.factory('Actor', function(Board, Interaction) {

    var self = this;

    this.drawActor = function (x, y, w, h, color, actor) {
        actor.elementColor = color;
        if(actor.graphics)
            actor.graphics.clear();

        actor.x = x;
        actor.y = y;
        actor.w = w;
        h = w;
        actor.h = h;

        var stroke = h/25;
        actor.graphics.setStrokeStyle(stroke);
        actor.graphics.beginStroke(actor.elementColor);
        actor.graphics.drawCircle(w/2, h/4, w/4);
        actor.graphics.moveTo(w/2, h/2);
        actor.graphics.lineTo(w/2, h*5/6);
        actor.graphics.lineTo(w/3, h);
        actor.graphics.moveTo(w/2, h*5/6);
        actor.graphics.lineTo(w-w/3, h);
        actor.graphics.moveTo(w/4, h/2+stroke);
        actor.graphics.lineTo(w*3/4, h/2+stroke);
        actor.graphics.endStroke();
        return actor
    };

    return function(x, y, w, h, color, alpha, visible) {
        var actor = new createjs.Shape();
        actor.elementColor = color ? color : Interaction.getColor();
        actor = self.drawActor(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, actor.elementColor, actor);

        actor.symmetrically = true;
        actor.elementName = 'Actor';
        actor.elementType = 'Actor';

        actor.redraw = function(x, y, w, h, color) {
            actor = self.drawActor(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : actor.elementColor, actor);
            Board.update();
        };

        actor.getX = function(){
            return actor.x;
        };

        actor.getY = function(){
            return actor.y;
        };

        actor.getCenterX = function(){
            return actor.w/2;
        };

        actor.getCenterY = function(){
            return actor.h/2;
        };

        actor.getWidth = function(){
            return actor.w;
        };

        actor.getHeight = function(){
            return actor.h;
        };

        actor.setAlpha = function(x){
            actor.alpha = x;
            Board.update();
        };

        actor.setVisible = function(visible){
            actor.visible = visible;
            Board.update();
        };

        actor.getColor = function() {
            return this.elementColor;
        };

        if(alpha) {
            actor.setAlpha(alpha);
        }

        if(visible) {
            actor.setVisible(visible === 'yes');
        }

        Interaction.drag(actor);
        Interaction.edit(actor);
        Interaction.editPanel(actor);

        return actor;
    }
}); app.factory('Circle', function(Board, Interaction) {

    var self = this;

    this.drawCircle = function (x, y, w, h, color, circle) {
        if(circle.graphics)
            circle.graphics.clear();
        circle.x = x;
        circle.y = y;
        circle.w = w;
        circle.graphics.beginFill(color).drawCircle(w/2, w/2, w/2);
        return circle
    };

    return function(x, y, w, h, color, alpha, visible) {
        var circle = new createjs.Shape();
        circle = self.drawCircle(x ? x : 50, y ? y : 50, w ? w: 50, h ? h :50, color ? color : Interaction.getColor(), circle);
        circle.elementName = 'Circle';
        circle.elementType = 'Circle';

        circle.redraw = function(x, y, w, h, color) {
            circle = self.drawCircle(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : circle.graphics._fill.style, circle);
            Board.update();
        };

        circle.symmetrically = true;

        circle.getX = function(){
            return circle.x;
        };

        circle.getY = function(){
            return circle.y;
        };

        circle.getCenterX = function(){
            return circle.graphics.command.radius;
        };

        circle.getCenterY = function(){
            return circle.graphics.command.radius;
        };

        circle.getWidth = function(){
            return circle.graphics.command.radius*2;
        };

        circle.getHeight = function(){
            return circle.graphics.command.radius*2;
        };

        circle.setAlpha = function(x){
            circle.alpha = x;
            Board.update();
        };

        circle.setVisible = function(visible){
            circle.visible = visible;
            Board.update();
        };

        circle.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            circle.setAlpha(alpha);
        }

        if(visible) {
            circle.setVisible(visible === 'yes');
        }

        Interaction.drag(circle);
        Interaction.edit(circle);
        Interaction.editPanel(circle);

        return circle;
    }
}); app.factory('DestroyObject', function(Board, Interaction) {

    var self = this;

    this.drawDestroyObject = function (x, y, w, h, color, destroyObject) {
        destroyObject.elementColor = color;
        if(destroyObject.graphics)
            destroyObject.graphics.clear();

        destroyObject.x = x;
        destroyObject.y = y;
        destroyObject.w = w;
        h = w;
        destroyObject.h = h;

        var stroke = h/25;
        destroyObject.graphics.setStrokeStyle(stroke);
        destroyObject.graphics.beginStroke(destroyObject.elementColor);
        destroyObject.graphics.moveTo(0, 0);
        destroyObject.graphics.lineTo(w, h);
        destroyObject.graphics.moveTo(w, 0);
        destroyObject.graphics.lineTo(0, h);
        destroyObject.graphics.endStroke();
        return destroyObject
    };

    return function(x, y, w, h, color, alpha, visible) {
        var destroyObject = new createjs.Shape();
        destroyObject.elementColor = color ? color : Interaction.getColor();
        destroyObject = self.drawDestroyObject(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, destroyObject.elementColor, destroyObject);
        destroyObject.elementName = 'Destroy Object';
        destroyObject.elementType = 'DestroyObject';

        destroyObject.symmetrically = true;

        destroyObject.redraw = function(x, y, w, h, color) {
            destroyObject = self.drawDestroyObject(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : destroyObject.elementColor, destroyObject);
            Board.update();
        };

        destroyObject.getX = function(){
            return destroyObject.x;
        };

        destroyObject.getY = function(){
            return destroyObject.y;
        };

        destroyObject.getCenterX = function(){
            return destroyObject.w/2;
        };

        destroyObject.getCenterY = function(){
            return destroyObject.h/2;
        };

        destroyObject.getWidth = function(){
            return destroyObject.w;
        };

        destroyObject.getHeight = function(){
            return destroyObject.h;
        };

        destroyObject.setAlpha = function(x){
            destroyObject.alpha = x;
            Board.update();
        };

        destroyObject.setVisible = function(visible){
            destroyObject.visible = visible;
            Board.update();
        };

        destroyObject.getColor = function() {
            return this.elementColor;
        };

        if(alpha) {
            destroyObject.setAlpha(alpha);
        }

        if(visible) {
            destroyObject.setVisible(visible === 'yes');
        }

        Interaction.drag(destroyObject);
        Interaction.edit(destroyObject);
        Interaction.editPanel(destroyObject);

        return destroyObject;
    }
}); app.factory('Ellipse', function(Board, Interaction) {

    var self = this;

    this.drawEllipse = function (x, y, w, h, color, ellipse) {
        if(ellipse.graphics){
            ellipse.graphics.clear();
        }
        ellipse.x = x;
        ellipse.y = y;
        ellipse.w = w;
        ellipse.h = h;
        ellipse.graphics.beginFill(color).drawEllipse(0, 0, w, h);
        return ellipse;
    };

    return function(x, y, w, h, color, alpha, visible) {
        var ellipse = new createjs.Shape();
        ellipse = self.drawEllipse(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :25, color ? color: Interaction.getColor(), ellipse);
        ellipse.elementName = 'Ellipse';
        ellipse.elementType = 'Ellipse';

        ellipse.redraw = function(x, y, w, h, color) {
            ellipse = self.drawEllipse(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : ellipse.graphics._fill.style, ellipse);
            Board.update();
        };

        ellipse.getX = function(){
            return ellipse.x;
        };

        ellipse.getY = function(){
            return ellipse.y;
        };

        ellipse.getCenterX = function(){
            return ellipse.graphics.command.w/2;
        };

        ellipse.getCenterY = function(){
            return ellipse.graphics.command.h/2;
        };

        ellipse.getWidth = function(){
            return ellipse.graphics.command.w;
        };

        ellipse.getHeight = function(){
            return ellipse.graphics.command.h;
        };

        ellipse.setAlpha = function(x){
            ellipse.alpha = x;
            Board.update();
        };

        ellipse.setVisible = function(visible){
            ellipse.visible = visible;
            Board.update();
        };

        ellipse.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            ellipse.setAlpha(alpha);
        }

        if(visible) {
            ellipse.setVisible(visible === 'yes');
        }

        Interaction.drag(ellipse);
        Interaction.edit(ellipse);
        Interaction.editPanel(ellipse);

        return ellipse;
    }
}); app.factory('Line', function(Board, Interaction) {

    var self = this;

    this.drawLine = function (xStart, yStart, xEnd, yEnd, arrowStart, arrowEnd, color, dashed, container ) {
        container.removeAllChildren();
        container.arrowStart = false;
        container.arrowEnd = false;
        container.elementName = 'Line';
        container.elementType = 'Line';

        //distance and angle
        var angle = self.angle({x: xStart, y: yStart}, {x: xEnd, y: yEnd});
        var distance = self.distance({x: xStart, y: yStart}, {x: xEnd, y: yEnd});

        //line
        var line = new createjs.Shape();
        line.x = 0;
        line.y = 0;
        line.xStart = xStart;
        line.yStart = yStart;
        line.xEnd = xEnd;
        line.yEnd = yEnd;
        line.graphics.setStrokeStyle(2);
        line.graphics.beginStroke(color);
        if(dashed){
            container.elementName = 'Line (dashed)';
            var detlaX = xEnd-xStart;
            var detlaY = yEnd-yStart;
            var dashLength = 10;
            var dashes = parseInt(distance/dashLength);

            line.graphics.moveTo(0,0);
            var i = 0;
            var x = 0;
            var y = 0;
            while( i++ < dashes ){
                x += detlaX/dashes;
                y += detlaY/dashes;
                if(i%2 == 0) {
                    line.graphics.moveTo(x, y);
                }
                else {
                    line.graphics.lineTo(x, y);
                }
            }
            line.graphics.closePath();
        }
        else{
            line.graphics.moveTo(0,0).lineTo(xEnd-xStart, yEnd-yStart).closePath();
        }
        line.graphics.endStroke();
        container.addChild(line);

        //arrow
        var s = 10;
        var h = 10;
        //arrow Start
        if(arrowStart) {
            var arrowStartShape = new createjs.Shape();
            arrowStartShape = new createjs.Shape();
            arrowStartShape.graphics.beginFill(color);
            arrowStartShape.graphics.moveTo(0,0).lineTo(h,s).lineTo(h,-s).closePath();
            arrowStartShape.rotation = angle;
            container.addChild(arrowStartShape);
            container.arrowStart = true;
        }

        //arrow End
        if(arrowEnd) {
            var arrowEndShape = new createjs.Shape();
            arrowEndShape.graphics.beginFill(color);
            arrowEndShape.graphics.moveTo(0,0).lineTo(-h,s).lineTo(-h,-s).closePath();
            arrowEndShape.x = xEnd-xStart;
            arrowEndShape.y = yEnd-yStart;
            arrowEndShape.rotation = angle;
            container.addChild(arrowEndShape);
            container.arrowEnd = true;
        }

        container.x = xStart;
        container.y = yStart;
        container.xStart = xStart;
        container.yStart = yStart;
        container.xEnd = xEnd;
        container.yEnd = yEnd;
        container.color = color;
        container.dashed = dashed;

        return container;
    };

    this.angle = function(p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    };

    this.distance = function(start, end) {
        var deltaX = start.x - end.x;
        var deltaY = start.y - end.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    this.dashedLineTo = function( x1 , y1 , x2 , y2 , dashLen ){
        this.moveTo( x1 , y1 );

        var dX = x2 - x1;
        var dY = y2 - y1;
        var dashes = Math.floor(Math.sqrt( dX * dX + dY * dY ) / dashLen );
        var dashX = dX / dashes;
        var dashY = dY / dashes;

        var q = 0;
        while( q++ < dashes ){
            x1 += dashX;
            y1 += dashY;
            this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
        }
        this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
        return this;
    };

    return function(xStart, yStart, xEnd, yEnd, dashed, color, alpha, visible, arrowStart, arrowEnd) {
        var line = new createjs.Container();
        //var line = new createjs.Shape();
        line = self.drawLine(xStart, yStart, xEnd, yEnd, false, false, color ? color : Interaction.getColor(), dashed, line);

        line.redraw = function(x, y, w, h, color, dashed) {
            line = self.drawLine(x, y, w, h, false, false, color ? color : line.color, dashed ? dashed : line.dashed, line);
            Board.update();
        };

        line.addStartArrow = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart ? false : true, line.arrowEnd, line.color, line.dashed, line);
            Board.update();
        };

        line.addEndArrow = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart, line.arrowEnd ? false : true, line.color, line.dashed, line);
            Board.update();
        };

        line.changeType = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart, line.arrowEnd, line.color, line.dashed ? false : true, line);
            Board.update();
        };

        if(arrowStart) {
            line.addStartArrow();
        }

        if(arrowEnd) {
            line.addEndArrow();
        }

        line.getX = function(){
            return line.x;
        };

        line.getY = function(){
            return line.y;
        };

        line.setAlpha = function(x){
            line.alpha = x;
            Board.update();
        };

        line.setVisible = function(visible){
            line.visible = visible;
            Board.update();
        };

        line.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            line.setAlpha(alpha);
        }

        if(visible) {
            line.setVisible(visible === 'yes');
        }

        line.on("dblclick", function(evt) {
            var appElement = document.querySelector('[ng-app=app]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function () {
                $scope.editLineObj = {
                    visible: true,
                    line: line
                }
            });
        });

        return line;
    };

}); app.factory('Rect', function(Board, Interaction) {

    var self = this;

    this.drawRect = function (x, y, w, h, color, rect) {
        if(rect.graphics){
            rect.graphics.clear();
        }
        rect.x = x;
        rect.y = y;
        rect.w = w;
        rect.h = h;
        rect.graphics.beginFill(color).drawRect(0, 0, w, h);
        return rect
    };

    return function(x, y, w, h, color, alpha, visible) {
        var rect = new createjs.Shape();
        rect = self.drawRect(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, color ? color: Interaction.getColor(), rect);
        rect.elementName = 'Rectangle';
        rect.elementType = 'Rect';

        rect.redraw = function(x, y, w, h, color) {
            rect = self.drawRect(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : rect.graphics._fill.style, rect);
            Board.update();
        };

        rect.getX = function(){
            return rect.x;
        };

        rect.getY = function(){
            return rect.y;
        };

        rect.getCenterX = function(){
            return rect.graphics.command.w/2;
        };

        rect.getCenterY = function(){
            return rect.graphics.command.h/2;
        };

        rect.getWidth = function(){
            return rect.graphics.command.w;
        };

        rect.getHeight = function(){
            return rect.graphics.command.h;
        };

        rect.setAlpha = function(x){
            rect.alpha = x;
            Board.update();
        };

        rect.setVisible = function(visible){
            rect.visible = visible;
            Board.update();
        };

        rect.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            rect.setAlpha(alpha);
        }

        if(visible) {
            rect.setVisible(visible === 'yes');
        }

        Interaction.drag(rect);
        Interaction.edit(rect);
        Interaction.editPanel(rect);

        return rect;
    }
}); app.factory('RoundRect', function(Board, Interaction) {

    var self = this;

    this.drawRoundRect = function (x, y, w, h, color, roundRect) {
        var radiusTL = 15,
            radiusTR = 15,
            radiusBR = 15,
            radiusBL = 15;

        if(roundRect.graphics) {
            if(roundRect.graphics.command) {
                radiusTL = roundRect.graphics.command.radiusTL;
                radiusTR = roundRect.graphics.command.radiusTR;
                radiusBR = roundRect.graphics.command.radiusBR;
                radiusBL = roundRect.graphics.command.radiusBL;
            }
            roundRect.graphics.clear();
        }

        roundRect.x = x;
        roundRect.y = y;
        roundRect.w = w;
        roundRect.h = h;
        roundRect.graphics.beginFill(color).drawRoundRect(0, 0, w, h, radiusTL, radiusTR, radiusBR, radiusBL);
        return roundRect
    };

    return function(x, y, w, h, color, alpha, visible) {
        var roundRect = new createjs.Shape();
        roundRect = self.drawRoundRect(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, color ? color: Interaction.getColor(), roundRect);
        roundRect.elementName = 'Rounded Rectangle';
        roundRect.elementType = 'RoundRect';

        roundRect.redraw = function(x, y, w, h, color) {
            roundRect = self.drawRoundRect(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : roundRect.graphics._fill.style, roundRect);
            Board.update();
        };

        roundRect.redrawRadius = function(radiusTL, radiusTR, radiusBR, radiusBL) {
            if(roundRect.h/2 >= radiusTL && roundRect.w/2 >= radiusTL)
                roundRect.graphics.command.radiusTL = radiusTL;

            if(roundRect.h/2 >= radiusTR && roundRect.w/2 >= radiusTR)
                roundRect.graphics.command.radiusTR = radiusTR;

            if(roundRect.h/2 >= radiusBR && roundRect.w/2 >= radiusBR)
                roundRect.graphics.command.radiusBR = radiusBR;

            if(roundRect.h/2 >= radiusBL && roundRect.w/2 >= radiusBL)
                roundRect.graphics.command.radiusBL = radiusBL;
            Board.update();
        };

        roundRect.getX = function(){
            return roundRect.x;
        };

        roundRect.getY = function(){
            return roundRect.y;
        };

        roundRect.getCenterX = function(){
            return roundRect.graphics.command.w/2;
        };

        roundRect.getCenterY = function(){
            return roundRect.graphics.command.h/2;
        };

        roundRect.getWidth = function(){
            return roundRect.graphics.command.w;
        };

        roundRect.getHeight = function(){
            return roundRect.graphics.command.h;
        };

        roundRect.setAlpha = function(x){
            roundRect.alpha = x;
            Board.update();
        };

        roundRect.setVisible = function(visible){
            roundRect.visible = visible;
            Board.update();
        };

        roundRect.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            roundRect.setAlpha(alpha);
        }

        if(visible) {
            roundRect.setVisible(visible === 'yes');
        }

        Interaction.drag(roundRect);
        Interaction.edit(roundRect);
        Interaction.editPanel(roundRect);

        return roundRect;
    }
}); app.factory('Text', function($modal, Board, Interaction){

    var self = this;

    this.drawText = function (x, y, w, h, color, text) {
        text.x = x;
        text.y = y;
        text.color = color;
        text.textBaseline = "alphabetic";
        return text
    };

    this.prompt = function() {
        return window.prompt("Text:","");
    };

    return function(x, y, w, h, color, alpha, visible, value, font) {
        var text = new createjs.Text(value ? value : window.prompt("Text:",""), "20px Arial", "#000000");
        text = self.drawText(x ? x : 50, y ? y : 50, null, null, color ? color : Interaction.getColor(), text);
        text.elementName = 'Text';
        text.elementType = 'Text';

        text.redraw = function(x, y, w, h, color) {
            text = self.drawText(parseInt(x), parseInt(y), null, null, color ? color : text.color, text);
            Board.update();
        };

        text.getX = function(){
            return text.x;
        };

        text.getY = function(){
            return text.y;
        };

        text.getCenterX = function(){
            return 1;
        };

        text.getCenterY = function(){
            return 1;
        };

        text.getWidth = function(){
            return 1;
        };

        text.getHeight = function(){
            return 1;
        };

        text.editText = function(text) {
            text.text = self.prompt(text);
            Board.update();
        };

        text.setFontSize = function(fontSize) {
            text.font = fontSize;
            Board.update();
        };

        text.setAlpha = function(x){
            text.alpha = x;
            Board.update();
        };

        text.setVisible = function(visible){
            text.visible = visible;
            Board.update();
        };

        text.getColor = function() {
            return this.color;
        };

        if(alpha) {
            text.setAlpha(alpha);
        }

        if(visible) {
            text.setVisible(visible === 'yes');
        }

        if(font) {
            console.log(font);
            text.setFontSize(font);
        }

        text.on("dblclick", function(evt) {
            text.text = window.prompt("Text:",text.text);
            Board.update();
        });

        Interaction.drag(text);
        Interaction.edit(text);
        Board.addElement(text);

    };

}); app.factory("Triangle", function(Board, Interaction) {

    var self = this;

    this.drawTriangle = function (left, top, width, height, color, triangle) {
        if(triangle.graphics)
            triangle.graphics.clear();

        triangle.x = left;
        triangle.y = top;
        triangle.w = width;
        triangle.h = height;

        var s = width,
            h = height,
            x = width/2,
            y = 0;
        
        triangle.graphics.beginFill(color);
        triangle.graphics.moveTo(x,y).lineTo(x+s/2,y+h).lineTo(x-s/2,y+h).closePath();
        return triangle
    };

    return function(x, y, w, h, color, alpha, visible) {
        var triangle = new createjs.Shape();
        triangle = self.drawTriangle(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, color ? color: Interaction.getColor(), triangle);
        triangle.elementName = 'Triangle';
        triangle.elementType = 'Triangle';

        triangle.redraw = function(x, y, w, h, color) {
            triangle = self.drawTriangle(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : triangle.graphics._fill.style, triangle);
            Board.update();
        };

        triangle.getX = function(){
            return triangle.x;
        };

        triangle.getY = function(){
            return triangle.y;
        };

        triangle.getCenterX = function(){
            return triangle.w/2;
        };

        triangle.getCenterY = function(){
            return triangle.h/2;
        };

        triangle.getWidth = function(){
            return triangle.w;
        };

        triangle.getHeight = function(){
            return triangle.h;
        };

        triangle.setAlpha = function(x){
            triangle.alpha = x;
            Board.update();
        };

        triangle.setVisible = function(visible){
            triangle.visible = visible;
            Board.update();
        };

        triangle.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            triangle.setAlpha(alpha);
        }

        if(visible) {
            triangle.setVisible(visible === 'yes');
        }

        Interaction.drag(triangle);
        Interaction.edit(triangle);
        Interaction.editPanel(triangle);

        return triangle;
    };

}); app.service('Board', function($rootScope) {

    this.board = null;

    this.create = function () {
        console.log('init board');
        this.board= new createjs.Stage("board");
        this.board.mouseMoveOutside = true;
        this.board.enableMouseOver(10);
    };

    this.update = function () {
        $rootScope.boardUpdate();
        this.board.update();
    };

    this.getBoard = function () {
      return this.board;
    };

    this.getBoardElements = function () {
        return this.board.children;
    };

    this.addElement = function(element) {
        this.board.addChild(element);
        this.update();
    };

    this.getElement = function(index) {
        return this.board.children[index];
    };

    this.count = function() {
        return this.board.children.length;
    };

    this.removeElement = function(element) {
        this.board.removeChild(element);
        this.update();
    };

    this.removeAllElements = function() {
        this.board.removeAllChildren();
        this.update();
    };

    this.setVisible = function(index, val) {
        this.board.children[index].visible = val;
        this.update();
    };

}); app.service('Diagram', function(Board, $injector) {

    this.setResize = function(resize, stage){
        stage.canvas.width = window.innerWidth-217;
        stage.canvas.height = window.innerHeight;
        if(resize){
            window.addEventListener('resize', function(){
                stage.canvas.width = window.innerWidth-217;
                stage.canvas.height = window.innerHeight;
            }, false);
        }
    };

    this.saveDiagram = function () {
        var elements = Board.getBoardElements();
        console.log(elements);
        var data = [];
        angular.forEach(elements, function(value, key) {
            if(value.elementType === 'Line') {
                this.push({
                    alpha: value.alpha,
                    visible: value.visible ? 'yes' : 'no',
                    type: value.elementType,
                    xStart: value.xStart,
                    yStart: value.yStart,
                    xEnd: value.xEnd,
                    yEnd: value.yEnd,
                    dashed: value.dashed,
                    color: value.color,
                    arrowStart: value.arrowStart,
                    arrowEnd: value.arrowEnd
                });
            }
            else if(value.elementType === 'Text') {
                this.push({
                    alpha: value.alpha,
                    visible: value.visible ? 'yes' : 'no',
                    type: value.elementType,
                    x: value.getX(),
                    y: value.getY(),
                    color: value.getColor(),
                    text: value.text,
                    font: value.font
                });
            }
            else {
                this.push({
                    alpha: value.alpha,
                    visible: value.visible ? 'yes' : 'no',
                    type: value.elementType,
                    x: value.getX(),
                    y: value.getY(),
                    w: value.getWidth(),
                    h: value.getHeight(),
                    color: value.getColor()
                });
            }

            if(elements.length === key+1) {
                var filename = window.prompt("Filename:","download.json");

                if (typeof data === 'object') {
                    console.log(data);
                    data = JSON.stringify(data, undefined, 2);
                }

                var blob = new Blob([data], {type: 'text/json'}),
                    e = document.createEvent('MouseEvents'),
                    a = document.createElement('a');

                a.download = filename;
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
                e.initMouseEvent('click', true, false, window,
                    0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            }
        }, data);
    };

    this.addElement = function (type, params) {
        try {
            if(params) {
                if(params.type === 'Line') {
                    Board.addElement($injector.get(type)(
                        params.xStart,
                        params.yStart,
                        params.xEnd,
                        params.yEnd,
                        params.dashed,
                        params.color,
                        params.alpha,
                        params.visible,
                        params.arrowStart,
                        params.arrowEnd
                    ));
                }
                else {
                    Board.addElement($injector.get(type)(
                        params.x,
                        params.y,
                        params.w,
                        params.h,
                        params.color,
                        params.alpha,
                        params.visible,
                        params.text ? params.text : null,
                        params.font ? params.font : null
                    ));
                }
            }
            else {
                Board.addElement($injector.get(type)());
            }
        }
        catch(err) {
            alert(err);
        }
    };
}); app.service('Interaction', function(Board, $rootScope) {

    this.drag = function(element){
        element.on("pressmove",function(evt) {
            if(!$rootScope.drawwingLine) {
                evt.currentTarget.x = evt.stageX-element.getCenterX();
                evt.currentTarget.y = evt.stageY-element.getCenterY();
                Board.update();
            }
        });
    };

    this.edit = function(element) {
        element.on("click", function(evt) {
            if(!$rootScope.drawwingLine) {

                var edit = {};
                console.log('edit');

                if (element.alpha)
                    edit.alpha = element.alpha;

                if (element.x)
                    edit.x = element.x;

                if (element.y)
                    edit.y = element.y;

                if (element.w)
                    edit.w = element.getWidth();

                if (element.h && !element.symmetrically)
                    edit.h = element.getHeight();

                if (element.graphics && element.graphics._fill)
                    edit.color = element.graphics._fill.style;

                else if (element.color)
                    edit.color = element.color;

                if (element.graphics && element.graphics.command && element.graphics.command.radiusTL)
                    edit.radiusTL = element.graphics.command.radiusTL;

                if (element.graphics && element.graphics.command && element.graphics.command.radiusTR)
                    edit.radiusTR = element.graphics.command.radiusTR;

                if (element.graphics && element.graphics.command && element.graphics.command.radiusBR)
                    edit.radiusBR = element.graphics.command.radiusBR;

                if (element.graphics && element.graphics.command && element.graphics.command.radiusBL)
                    edit.radiusBL = element.graphics.command.radiusBL;

                if (element.font)
                    edit.font = element.font;

                var appElement = document.querySelector('[ng-app=app]');
                var $scope = angular.element(appElement).scope();
                $scope.$apply(function () {
                    $scope.editElementObj = {
                        visible: true,
                        properties: edit,
                        element: element
                    };
                });
            }
        });
    };

    this.editPanel = function(element) {
        element.on("dblclick", function(evt) {
            if(!$rootScope.drawwingLine) {
                var appElement = document.querySelector('[ng-app=app]');
                var $scope = angular.element(appElement).scope();
                $scope.$apply(function () {
                    $scope.editPanelObj = {
                        visible: true,
                        element: element
                    }
                });
            }
        });
    };

    this.getColor = function(){
        var appElement = document.querySelector('[ng-app=app]');
        var $scope = angular.element(appElement).scope();
        return $scope.color;
    };

});