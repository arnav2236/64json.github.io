/**
 * jasonpark.me - Jinseo Jason Park
 * @version v3.0.0
 * @link http://jasonpark.me/
 * @license MIT
 */
"use strict";var _slicedToArray=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(t.push(o.value),!r||t.length!==r);a=!0);}catch(e){n=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw i}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _toArray(e){return Array.isArray(e)?e:Array.from(e)}function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}$(document).ready(function(){var x=$(".window"),d=$("#directory"),e=$("#browser"),T=$("#terminal"),r=x.find(".toolbar"),t=r.find(".button-container"),A=e.find(".iframe"),j=e.find(".addressbar"),_=$("#instagram").find(".embed-container"),a=$("html"),i=$(".label-clock"),n=$("a"),o=2,s=null,u=null,z=function(e){window.location.hash=e.data("last-hash"),x.removeClass("focus"),e.removeClass("minimize"),e.addClass("focus"),e.css("z-index",o++)},c=function(){var e=window.location.hash;if(e.endsWith("-")){var r=e.substring(0,e.length-1);return $(r).data("last-hash",null),void(window.location.hash=r)}var t=$(e);if(t.hasClass("window","open")){var a=t.data("last-hash");if(a&&a!==e)return void(window.location.hash=a)}var n=e;if(/^#?$/.test(n))x.removeClass("focus");else{$("a[href^='"+n+"-']").removeClass("active"),$("[id^='"+n.substring(1)+"-']").removeClass("open");for(var i=[n];;){var o=n.lastIndexOf("-");if(!~o)break;n=n.substring(0,o),i.unshift(n)}var s=$(n);s.data("last-hash",e),z(s);for(var c=null,l=0;l<i.length;l++){var d=i[l],u=$(d),f=$("a[href='"+d+"']");if(f.length&&(c=f.first()),0<l){var v=i[l-1];$("a[href^='"+v+"-']").removeClass("active"),$("[id^='"+v.substring(1)+"-']").removeClass("open")}f.addClass("active"),u.addClass("open")}switch(s.attr("id")){case"browser":var h=s.find(".tab-container");if(t.length){t[0].click()}else{var p=$('<a class="tab open active"></a>');p.attr("id",e.substring(1)),p.attr("href",e);var m=c.data("url");p.data({url:m}),p.mousedown(function(e){return e.stopPropagation()});var y=$('<div class="icon"></div>'),b=$('<div class="name"></div>'),w=$('<a class="close" href="#"></a>');y.css("background-image","url("+c.data("image")+")"),b.text(c.data("name")),w.attr("href","#"),w.click(function(e){e.preventDefault();var r=p.hasClass("open"),t=p.prev()[0]||p.next()[0];if(p.remove(),r)if(t)t.click();else{var a=s.find(".button-close");_slicedToArray(a,1)[0].click()}}),p.append(y),p.append(b),p.append(w),p.click(function(){A.attr("src")!==m&&A.attr("src",m),j.find(".url").text(m)}),p.click(),h.append(p)}break;case"instagram":var g=s.find(".title-container");if(g.empty(),g.append('<div class="icon icon-instagram">'),g.append('<div class="name">Instagram</div>'),!t.length){var k=c.data("instagram");$.ajax({url:"https://api.instagram.com/oembed/",dataType:"jsonp",data:{url:"http://instagram.com/p/"+k+"/",omitscript:!0},success:function(e){_.attr("id","instagram-"+k),_.html(e.html),instgrm.Embeds.process(),_.addClass("open")}})}break;default:var C=s.find(".title-container");C.empty(),C.append(c.children().clone())}}};window.setTimeout(c,0),$(window).on("hashchange",c),t.click(function(){if(u){var e=$(this).find(".button-close");_slicedToArray(e,1)[0].click()}}),t.find(".button-close").click(function(e){var r=$(this).parents(".window"),t=r.attr("id");switch($("a[href='#"+t+"']").removeClass("active"),r.removeClass("open"),r.data("last-hash",null),r.attr("id")){case"terminal":V();break;case"browser":r.find(".tab-container").empty(),A.attr("src",null),j.find(".url").text(null)}}),t.find(".button-minimize").click(function(e){u||$(this).parents(".window").addClass("minimize")}),t.find(".button-maximize").click(function(e){u||(e.preventDefault(),$(this).parents(".window").toggleClass("maximize"))}),j.find(".button-refresh").click(function(e){e.preventDefault(),A.attr("src",A.attr("src"))}),j.find(".button-new").click(function(e){e.preventDefault(),window.open(A.attr("src"))}),$(".desktop").mousedown(function(){window.location.hash="#",x.removeClass("focus")}),x.mousedown(function(e){e.stopPropagation(),z($(this))});var l={users:{jason:{desktop:{}}}},f=[];$("*").each(function(){var e=this.id;e&&f.push(e)});var v=!0,h=!1,p=void 0;try{for(var m,y=f[Symbol.iterator]();!(v=(m=y.next()).done);v=!0){var b=m.value,w=l.users.jason.desktop,g=b.split("-"),k=!0,C=!1,I=void 0;try{for(var S,O=g[Symbol.iterator]();!(k=(S=O.next()).done);k=!0){var P=S.value;w[P]||(w[P]={}),w=w[P]}}catch(e){C=!0,I=e}finally{try{!k&&O.return&&O.return()}finally{if(C)throw I}}}}catch(e){h=!0,p=e}finally{try{!v&&y.return&&y.return()}finally{if(h)throw p}}var D=null;$.get("/js/script.js",function(e){return D=e},"text");var W=null;$.get("/data/personal_statement.txt",function(e){return W=e},"text");var J=null,X=[],Y=0,E=null,M=null,N=null,V=function(){E=!(J=["users","jason","desktop"]),H(),q(!0)};window.setTimeout(V,0);var H=function(){M=!1,N=0},q=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],r=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],t=T.find(".line-container");e&&t.empty();var a=$('<div class="line">');if(r){var n=[].concat(_toConsumableArray(J));"users"===n[0]&&"jason"===n[1]&&n.splice(0,2,"~");var i=n.join("/")||"/";a.append("jason@world:"+i+"$ ")}return T.find(".cursor").removeClass("cursor"),a.append('<div class="letter cursor">'),t.append(a),a},B=function(e){var r=e?e.split("/"):[],t=[].concat(_toConsumableArray(J));""===r[0]?(t=[],r.shift()):"~"===r[0]&&(t=["users","jason"],r.shift());var a=!0,n=!1,i=void 0;try{for(var o,s=r[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var c=o.value;switch(c){case"":case".":break;case"..":t.pop();break;default:t.push(c)}}}catch(e){n=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw i}}return t},F=function(e){var r=l,t=!0,a=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){r=r[i.value]}}catch(e){a=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw n}}return r},G=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];Array.isArray(e)||(e=[e]);var a=T.find(".line-container");e.forEach(function(e){var r=$('<div class="line">');t?r.html(e&&e.replace(/([.,?!"';]*\w*[.,?!"';]*\s*)/g,"<span>$1</span>").replace(/\{(.+)\}/g,'<div class="underline">$1</div>&nbsp;&nbsp;').replace(/\*(.+)\*/g,'<div class="highlight">$1</div>')):r.html(e),a.append(r)})},K=function(e){var r=T.find(".cursor");if(L(r),void 0!==e){var t=Array.from(e),a=!0,n=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var c=o.value;"\n"===c?(q(!1,!1),r=T.find(".cursor")):r.before('<div class="letter">'+c+"</div>")}}catch(e){n=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw i}}}},L=function(e){e.prev().after(e)},Q=function(e,r){return 0<Object.keys(e[r]).length},R=function(e){var r=e.keyCode;switch(r){case 8:case 9:case 13:case 27:case 37:case 38:case 39:case 40:e.preventDefault()}if(!M||27===r){var t=T.find(".cursor"),a=t.prev(".letter"),n=t.next(".letter"),i=t.parents(".line");switch(r){case 8:a.length&&(a.remove(),L(t));break;case 9:if(!n.length){var o=i.children(".letter").text().split(/\s+/).pop(),s=o.lastIndexOf("/"),c=o.substring(0,s+1),l=o.substring(s+1),d=B(c),u=F(d);if(u){var f=Object.keys(u).filter(function(e){return e.startsWith(l)});if(1===f.length){var v=f[0].substring(l.length);K(v)}else if(1<f.length){if(E){t.detach(),i.before(i.clone());var h=!0,p=!1,m=void 0;try{for(var y,b=f[Symbol.iterator]();!(h=(y=b.next()).done);h=!0){var w=y.value;i.before('<div class="line"><div class="'+(Q(u,w)?"dir":"file")+'">'+w+"</div></div>")}}catch(e){p=!0,m=e}finally{try{!h&&b.return&&b.return()}finally{if(p)throw m}}t.appendTo(i)}E=!0}}}break;case 13:var g=i.children(".letter").text();X.push(g),Y=X.length,function(e){var r=_toArray(e.split(/\s+/)),a=r[0],t=r.slice(1),n=t.filter(function(e){return!e.startsWith("-")}),i=t.find(function(e){return e.startsWith("-")}),o=i?i.substring(1).split(""):[];switch(a){case"":break;case"help":G([" *help*            show all the possible commands"," *whoami* [-j]     display information about Jason"," *cd* {dir}        change the working directory"," *ls* {dir}        list directory contents"," *pwd*             return the working directory"," *rm* [-fr] {dir}  remove directory entries"," *open* {files}    open the files"," *clear*           clear the terminal screen"," *exit*            close the terminal window"," *hackertyper*     ?????"],!0);break;case"whoami":o.includes("j")?G(["*Jinseo Jason Park*",""].concat(_toConsumableArray(W.split("\n"))),!0):G(["*Jinseo Jason Park*","I am a developer, hackathoner, and backpacker.",'Type "*whoami -j*" to show my journey so far.'],!0);break;case"cd":var s=n.shift(),c=B(s),l=F(c);if(void 0===l){G("-bash: "+a+": "+s+": No such file or directory");break}if(0===Object.keys(l).length){G("-bash: "+a+": "+s+": Not a directory");break}J=[].concat(_toConsumableArray(c));break;case"ls":var d=n.shift(),u=B(d),f=F(u);if(void 0===f){G("-bash: "+a+": "+d+": No such file or directory");break}if(0===Object.keys(f).length){G('<div class="file">'+u.pop()+"</div>");break}G(Object.keys(f).map(function(e){return'<div class="'+(Q(f,e)?"dir":"file")+'">'+e+"</div>"}));break;case"pwd":G("/"+J.join("/"));break;case"rm":var v=n.shift(),h=B(v),p=F(h);if(void 0===p){G("-bash: "+a+": "+v+": No such file or directory");break}if(Object.keys(p).length&&!o.includes("r")){G("-bash: "+a+": "+v+": Is a directory");break}var m="#"+h.slice(3).join("-");if("#"===m){if(!o.includes("f")){G("-bash: "+a+": "+v+": Permission denied (try again with -f)");break}$(".desktop").remove()}else $("a[href='"+m+"']").remove(),$("[id='"+m.substring(1)+"']").remove(),$("a[href^='"+m+"-']").remove(),$("[id^='"+m.substring(1)+"-']").remove();var y=h.pop();delete F(h)[y];break;case"open":var b=0,w=!0,g=!1,k=void 0;try{for(var C,x=function(){var e=C.value,r=B(e);if(void 0===F(r))return G("The file /"+r.join("/")+" does not exist."),"continue";"users"===r[0]&&"jason"===r[1]&&"desktop"===r[2]&&r.splice(0,3);var t="#"+r.join("-");if("#"===t||!$(t).length)return G("-bash: "+a+": "+e+": Permission denied"),"continue";window.setTimeout(function(){window.location.hash=t},b+=200)},A=n[Symbol.iterator]();!(w=(C=A.next()).done);w=!0)x()}catch(e){g=!0,k=e}finally{try{!w&&A.return&&A.return()}finally{if(g)throw k}}break;case"clear":return q(!0);case"exit":var j=T.find(".button-close");return _slicedToArray(j,1)[0].click();case"hackertyper":if(D)return q(M=!0,!1);G("Error occurred while loading source code.");break;default:G("-bash: "+a+": command not found")}q();var _=T.find(".cursor");_slicedToArray(_,1)[0].scrollIntoView()}(g);break;case 27:H(),q();break;case 37:a.length&&(a.addClass("cursor"),t.removeClass("cursor"));break;case 38:if(0<Y){var k=X[--Y];t.detach(),i.find(".letter").remove(),i.append(t),K(k)}break;case 39:n.length&&(n.addClass("cursor"),t.removeClass("cursor"));break;case 40:if(Y<X.length){var C=X[++Y];t.detach(),i.find(".letter").remove(),i.append(t),K(C)}}9!==r&&(E=!1),_slicedToArray(t,1)[0].scrollIntoView()}};$(document).keydown(function(e){d.hasClass("focus")?function(e){var r=d.find(".panel.open .directory.active").last();switch(e.keyCode){case 38:var t=r.prev(":not(.directory-parent)"),a=_slicedToArray(t,1)[0];a&&a.click();break;case 40:var n=r.next(),i=_slicedToArray(n,1)[0];i&&i.click();break;case 37:var o=r.parents(".panel-container").prev().find(".panel.open .directory.active"),s=_slicedToArray(o,1)[0];s&&s.click();break;case 39:var c=r.parents(".panel-container").next().find(".panel.open .directory:not(.directory-parent)").first(),l=_slicedToArray(c,1)[0];l&&l.click()}}(e):T.hasClass("focus")&&R(e)}),$(document).keypress(function(e){T.hasClass("focus")&&function(e){var r=e.charCode||e.keyCode;if(3===r)H(),q();else if(32<=r)if(M){var t=1+(8*Math.random()|0),a=D.substr(N,t);a||(H(),q()),N+=t,K(a)}else{var n=String.fromCharCode(r);K(n)}var i=T.find(".cursor");_slicedToArray(i,1)[0].scrollIntoView()}(e)}),x.each(function(e){var r=20+20*e,t=20+20*e;$(this).css({top:r,left:t})});var U=null,Z={},ee={};r.mousedown(function(e){u||1===e.which&&((U=$(this).parents(".window")).hasClass("maximize")||(U.addClass("moving"),Z=U.position(),ee.x=e.clientX,ee.y=e.clientY,$(document).mousemove(function(e){var r=e.clientX-ee.x,t=e.clientY-ee.y;Z.left+=r,Z.top+=t,ee.x=e.clientX,ee.y=e.clientY,U.css(Z)}),$(document).mouseup(function(){U.removeClass("moving"),$(document).off("mousemove"),$(document).off("mouseup")})))}),n.mousedown(function(e){e.stopPropagation()}),[[".border-left","left","width","x","clientX"],[".border-top","top","height","y","clientY"],[".border-right",null,"width","x","clientX"],[".border-bottom",null,"height","y","clientY"]].map(function(e){var r=_slicedToArray(e,5),t=r[0],a=r[1],n=r[2],i=r[3],o=r[4],s=null,c={},l={};x.find(t).mousedown(function(e){if(!u&&1===e.which&&!(s=$(this).parents(".window")).hasClass("maximize")){if(s.addClass("resizing"),a){var r=s.position();c[a]=r[a]}c[n]=s[n](),l[i]=e[o],$(document).mousemove(function(e){var r=e[o]-l[i];a?(c[a]+=r,c[n]-=r):c[n]+=r,l[i]=e[o],c.width<280||c.height<60||s.css(c)}),$(document).mouseup(function(){s.removeClass("resizing"),$(document).off("mousemove"),$(document).off("mouseup")})}})});var re=function(){var e=function(e){return e<10?"0"+e:e},r=new Date,t=r.getHours(),a=r.getMinutes(),n=e(t%12||12)+":"+e(a)+" "+["AM","PM"][t/12|0];i.find(".name").text(n)};window.setInterval(re,1e3),re(),n.each(function(){$(this).attr("href").startsWith("#")||($(this).attr("target","_blank"),$(this).attr("rel","noopener"),$(this).addClass("link-external"))});var te=function(){var e=document.body.clientWidth;u=!(s=512<e),a.toggleClass("desktop",s),a.toggleClass("mobile",u)};te(),window.onresize=te});