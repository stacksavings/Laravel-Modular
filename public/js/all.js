// Pannellum 2.3.2, https://github.com/mpetroff/pannellum
window.libpannellum=function(z,k,g){function ia($){function S(a,e){return 1==a.level&&1!=e.level?-1:1==e.level&&1!=a.level?1:e.timestamp-a.timestamp}function ea(a,e){return a.level!=e.level?a.level-e.level:a.diff-e.diff}function J(a,e,d,k,q,b){this.vertices=a;this.side=e;this.level=d;this.x=k;this.y=q;this.path=b.replace("%s",e).replace("%l",d).replace("%x",k).replace("%y",q)}function ta(a,e,k,l,q){var b;var h=e.vertices;b=aa(a,h.slice(0,3));var s=aa(a,h.slice(3,6)),g=aa(a,h.slice(6,9)),h=aa(a,h.slice(9,
12)),A=b[0]+s[0]+g[0]+h[0];-4==A||4==A?b=!1:(A=b[1]+s[1]+g[1]+h[1],b=-4==A||4==A?!1:4!=b[2]+s[2]+g[2]+h[2]);if(b){b=e.vertices;s=b[0]+b[3]+b[6]+b[9];g=b[1]+b[4]+b[7]+b[10];h=b[2]+b[5]+b[8]+b[11];A=Math.sqrt(s*s+g*g+h*h);h=Math.asin(h/A);s=Math.atan2(g,s)-l;s+=s>Math.PI?-2*Math.PI:s<-Math.PI?2*Math.PI:0;s=Math.abs(s);e.diff=Math.acos(Math.sin(k)*Math.sin(h)+Math.cos(k)*Math.cos(h)*Math.cos(s));s=!1;for(g=0;g<d.nodeCache.length;g++)if(d.nodeCache[g].path==e.path){s=!0;d.nodeCache[g].timestamp=d.nodeCacheTimestamp++;
d.nodeCache[g].diff=e.diff;d.currentNodes.push(d.nodeCache[g]);break}s||(e.timestamp=d.nodeCacheTimestamp++,d.currentNodes.push(e),d.nodeCache.push(e));if(e.level<d.level){var h=r.cubeResolution*Math.pow(2,e.level-r.maxLevel),s=Math.ceil(h*r.invTileResolution)-1,g=h%r.tileResolution*2,B=2*h%r.tileResolution;0===B&&(B=r.tileResolution);0===g&&(g=2*r.tileResolution);A=0.5;if(e.x==s||e.y==s)A=1-r.tileResolution/(r.tileResolution+B);var v=1-A,h=[],z=A,O=A,D=A,I=v,x=v,y=v;if(B<r.tileResolution)if(e.x==
s&&e.y!=s){if(x=O=0.5,"d"==e.side||"u"==e.side)y=D=0.5}else e.x!=s&&e.y==s&&(I=z=0.5,"l"==e.side||"r"==e.side)&&(y=D=0.5);g<=r.tileResolution&&(e.x==s&&(z=0,I=1,"l"==e.side||"r"==e.side)&&(D=0,y=1),e.y==s&&(O=0,x=1,"d"==e.side||"u"==e.side)&&(D=0,y=1));B=[b[0],b[1],b[2],b[0]*z+b[3]*I,b[1]*A+b[4]*v,b[2]*D+b[5]*y,b[0]*z+b[6]*I,b[1]*O+b[7]*x,b[2]*D+b[8]*y,b[0]*A+b[9]*v,b[1]*O+b[10]*x,b[2]*D+b[11]*y];B=new J(B,e.side,e.level+1,2*e.x,2*e.y,r.fullpath);h.push(B);e.x==s&&g<=r.tileResolution||(B=[b[0]*z+
b[3]*I,b[1]*A+b[4]*v,b[2]*D+b[5]*y,b[3],b[4],b[5],b[3]*A+b[6]*v,b[4]*O+b[7]*x,b[5]*D+b[8]*y,b[0]*z+b[6]*I,b[1]*O+b[7]*x,b[2]*D+b[8]*y],B=new J(B,e.side,e.level+1,2*e.x+1,2*e.y,r.fullpath),h.push(B));e.x==s&&g<=r.tileResolution||e.y==s&&g<=r.tileResolution||(B=[b[0]*z+b[6]*I,b[1]*O+b[7]*x,b[2]*D+b[8]*y,b[3]*A+b[6]*v,b[4]*O+b[7]*x,b[5]*D+b[8]*y,b[6],b[7],b[8],b[9]*z+b[6]*I,b[10]*A+b[7]*v,b[11]*D+b[8]*y],B=new J(B,e.side,e.level+1,2*e.x+1,2*e.y+1,r.fullpath),h.push(B));e.y==s&&g<=r.tileResolution||(B=
[b[0]*A+b[9]*v,b[1]*O+b[10]*x,b[2]*D+b[11]*y,b[0]*z+b[6]*I,b[1]*O+b[7]*x,b[2]*D+b[8]*y,b[9]*z+b[6]*I,b[10]*A+b[7]*v,b[11]*D+b[8]*y,b[9],b[10],b[11]],B=new J(B,e.side,e.level+1,2*e.x,2*e.y+1,r.fullpath),h.push(B));for(e=0;e<h.length;e++)ta(a,h[e],k,l,q)}}}function ua(){return[-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,1,1,1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1]}function ka(a,e,d){var g=Math.sin(e);e=Math.cos(e);
if("x"==d)return[a[0],e*a[1]+g*a[2],e*a[2]-g*a[1],a[3],e*a[4]+g*a[5],e*a[5]-g*a[4],a[6],e*a[7]+g*a[8],e*a[8]-g*a[7]];if("y"==d)return[e*a[0]-g*a[2],a[1],e*a[2]+g*a[0],e*a[3]-g*a[5],a[4],e*a[5]+g*a[3],e*a[6]-g*a[8],a[7],e*a[8]+g*a[6]];if("z"==d)return[e*a[0]+g*a[1],e*a[1]-g*a[0],a[2],e*a[3]+g*a[4],e*a[4]-g*a[3],a[5],e*a[6]+g*a[7],e*a[7]-g*a[6],a[8]]}function fa(a){return[a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]]}function va(a){a.textureLoad||(a.textureLoad=
!0,Ea(encodeURI(a.path+"."+r.extension),function(e){a.texture=e;a.textureLoaded=!0}))}function aa(a,e){var d=[a[0]*e[0]+a[1]*e[1]+a[2]*e[2],a[4]*e[0]+a[5]*e[1]+a[6]*e[2],a[11]+a[8]*e[0]+a[9]*e[1]+a[10]*e[2],1/(a[12]*e[0]+a[13]*e[1]+a[14]*e[2])],g=d[0]*d[3],k=d[1]*d[3],d=d[2]*d[3],b=[0,0,0];-1>g&&(b[0]=-1);1<g&&(b[0]=1);-1>k&&(b[1]=-1);1<k&&(b[1]=1);if(-1>d||1<d)b[2]=1;return b}var v=k.createElement("canvas");v.style.width=v.style.height="100%";$.appendChild(v);var d,a,K,L,wa,R,la,ba,r,y,ga,E,X,ma,
V;this.init=function(f,e,z,sa,q,b,h,s){typeof e===g&&(e="equirectangular");y=e;r=f;ga=z;if(d){K&&(a.detachShader(d,K),a.deleteShader(K));L&&(a.detachShader(d,L),a.deleteShader(L));a.bindBuffer(a.ARRAY_BUFFER,null);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);d.texture&&a.deleteTexture(d.texture);if(d.nodeCache)for(f=0;f<d.nodeCache.length;f++)a.deleteTexture(d.nodeCache[f].texture);a.deleteProgram(d);d=g}ba=g;"cubemap"==y&&0!==(r[0].width&r[0].width-1)&&(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)||
navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/)||navigator.userAgent.match(/Trident.*rv[ :]*11\./))||a||(a=v.getContext("experimental-webgl",{alpha:!1,depth:!1}));if(!a&&("multires"==y&&r.hasOwnProperty("fallbackPath")||"cubemap"==y)&&("WebkitAppearance"in k.documentElement.style||navigator.userAgent.match(/Trident.*rv[ :]*11\./)||-1!==navigator.appVersion.indexOf("MSIE 10"))){R&&$.removeChild(R);R=k.createElement("div");R.className="pnlm-world";sa=r.basePath?r.basePath+r.fallbackPath:
r.fallbackPath;var ja="frblud".split(""),A=0;q=function(){var a=k.createElement("canvas");a.className="pnlm-face pnlm-"+ja[this.side]+"face";R.appendChild(a);var b=a.getContext("2d");a.style.width=this.width+4+"px";a.style.height=this.height+4+"px";a.width=this.width+4;a.height=this.height+4;b.drawImage(this,2,2);var e=b.getImageData(0,0,a.width,a.height),d=e.data,g,f;for(g=2;g<a.width-2;g++)for(f=0;4>f;f++)d[4*(g+a.width)+f]=d[4*(g+2*a.width)+f],d[4*(g+a.width*(a.height-2))+f]=d[4*(g+a.width*(a.height-
3))+f];for(g=2;g<a.height-2;g++)for(f=0;4>f;f++)d[4*(g*a.width+1)+f]=d[4*(g*a.width+2)+f],d[4*((g+1)*a.width-2)+f]=d[4*((g+1)*a.width-3)+f];for(f=0;4>f;f++)d[4*(a.width+1)+f]=d[4*(2*a.width+2)+f],d[4*(2*a.width-2)+f]=d[4*(3*a.width-3)+f],d[4*(a.width*(a.height-2)+1)+f]=d[4*(a.width*(a.height-3)+2)+f],d[4*(a.width*(a.height-1)-2)+f]=d[4*(a.width*(a.height-2)-3)+f];for(g=1;g<a.width-1;g++)for(f=0;4>f;f++)d[4*g+f]=d[4*(g+a.width)+f],d[4*(g+a.width*(a.height-1))+f]=d[4*(g+a.width*(a.height-2))+f];for(g=
1;g<a.height-1;g++)for(f=0;4>f;f++)d[g*a.width*4+f]=d[4*(g*a.width+1)+f],d[4*((g+1)*a.width-1)+f]=d[4*((g+1)*a.width-2)+f];for(f=0;4>f;f++)d[f]=d[4*(a.width+1)+f],d[4*(a.width-1)+f]=d[4*(2*a.width-2)+f],d[a.width*(a.height-1)*4+f]=d[4*(a.width*(a.height-2)+1)+f],d[4*(a.width*a.height-1)+f]=d[4*(a.width*(a.height-1)-2)+f];b.putImageData(e,0,0);A++;6==A&&(wa=this.width,$.appendChild(R),h())};for(f=0;6>f;f++)b=new Image,b.crossOrigin="anonymous",b.side=f,b.onload=q,b.src="multires"==y?encodeURI(sa.replace("%s",
ja[f])+"."+r.extension):encodeURI(r[f].src)}else{if(!a)throw console.log("Error: no WebGL support detected!"),{type:"no webgl"};r.fullpath=r.basePath?r.basePath+r.path:r.path;r.invTileResolution=1/r.tileResolution;e=ua();la=[];for(f=0;6>f;f++)la[f]=e.slice(12*f,12*f+12),e=ua();if("equirectangular"==y){if(f=Math.max(r.width,r.height),e=a.getParameter(a.MAX_TEXTURE_SIZE),f>e)throw console.log("Error: The image is too big; it's "+f+"px wide, but this device's maximum supported width is "+e+"px."),{type:"webgl size error",
width:f,maxWidth:e};}else if("cubemap"==y&&(f=r[0].width,e=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f>e))throw console.log("Error: The cube face image is too big; it's "+f+"px wide, but this device's maximum supported width is "+e+"px."),{type:"webgl size error",width:f,maxWidth:e};s===g||s.horizonPitch===g&&s.horizonRoll===g||(ba=[s.horizonPitch==g?0:s.horizonPitch,s.horizonRoll==g?0:s.horizonRoll]);f=a.TEXTURE_2D;a.viewport(0,0,v.width,v.height);K=a.createShader(a.VERTEX_SHADER);e=l;"multires"==
y&&(e=x);a.shaderSource(K,e);a.compileShader(K);L=a.createShader(a.FRAGMENT_SHADER);e=na;"cubemap"==y?(f=a.TEXTURE_CUBE_MAP,e=Fa):"multires"==y&&(e=oa);a.shaderSource(L,e);a.compileShader(L);d=a.createProgram();a.attachShader(d,K);a.attachShader(d,L);a.linkProgram(d);a.getShaderParameter(K,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(K));a.getShaderParameter(L,a.COMPILE_STATUS)||console.log(a.getShaderInfoLog(L));a.getProgramParameter(d,a.LINK_STATUS)||console.log(a.getProgramInfoLog(d));a.useProgram(d);
d.drawInProgress=!1;d.texCoordLocation=a.getAttribLocation(d,"a_texCoord");a.enableVertexAttribArray(d.texCoordLocation);"multires"!=y?(E||(E=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,E),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,1,1,1,1,-1,-1,1,1,-1,-1,-1]),a.STATIC_DRAW),a.vertexAttribPointer(d.texCoordLocation,2,a.FLOAT,!1,0,0),d.aspectRatio=a.getUniformLocation(d,"u_aspectRatio"),a.uniform1f(d.aspectRatio,v.width/v.height),d.psi=a.getUniformLocation(d,"u_psi"),d.theta=a.getUniformLocation(d,
"u_theta"),d.f=a.getUniformLocation(d,"u_f"),d.h=a.getUniformLocation(d,"u_h"),d.v=a.getUniformLocation(d,"u_v"),d.vo=a.getUniformLocation(d,"u_vo"),d.rot=a.getUniformLocation(d,"u_rot"),a.uniform1f(d.h,sa/(2*Math.PI)),a.uniform1f(d.v,q/Math.PI),a.uniform1f(d.vo,b/Math.PI*2),"equirectangular"==y&&(d.backgroundColor=a.getUniformLocation(d,"u_backgroundColor"),a.uniform4fv(d.backgroundColor,(s.backgroundColor?s.backgroundColor:[0,0,0]).concat([1]))),d.texture=a.createTexture(),a.bindTexture(f,d.texture),
"cubemap"==y?(a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r[1]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r[3]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r[4]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r[5]),a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r[0]),a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r[2])):a.texImage2D(f,
0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r),a.texParameteri(f,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(f,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(f,a.TEXTURE_MAG_FILTER,a.LINEAR)):(d.vertPosLocation=a.getAttribLocation(d,"a_vertCoord"),a.enableVertexAttribArray(d.vertPosLocation),X||(X=a.createBuffer()),ma||(ma=a.createBuffer()),V||(V=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,ma),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,
0,1]),a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,V),a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),a.STATIC_DRAW),d.perspUniform=a.getUniformLocation(d,"u_perspMatrix"),d.cubeUniform=a.getUniformLocation(d,"u_cubeMatrix"),d.level=-1,d.currentNodes=[],d.nodeCache=[],d.nodeCacheTimestamp=0);if(0!==a.getError())throw console.log("Error: Something went wrong with WebGL!"),{type:"webgl error"};h()}};this.destroy=function(){$!==g&&(v!==g&&$.removeChild(v),R!==g&&$.removeChild(R));
if(a){var d=a.getExtension("WEBGL_lose_context");d&&d.loseContext()}};this.resize=function(){var g=z.devicePixelRatio||1;v.width=v.clientWidth*g;v.height=v.clientHeight*g;a&&(a.viewport(0,0,v.width,v.height),"multires"!=y&&a.uniform1f(d.aspectRatio,v.width/v.height))};this.resize();this.render=function(f,e,k,l){var q;q=0;l===g&&(l={});l.roll&&(q=l.roll);if(ba!==g){var b=ba[0],h=ba[1],s=f,x=e,A=Math.cos(h)*Math.sin(f)*Math.sin(b)+Math.cos(f)*(Math.cos(b)*Math.cos(e)+Math.sin(h)*Math.sin(b)*Math.sin(e)),
B=-Math.sin(f)*Math.sin(h)+Math.cos(f)*Math.cos(h)*Math.sin(e);f=Math.cos(h)*Math.cos(b)*Math.sin(f)+Math.cos(f)*(-Math.cos(e)*Math.sin(b)+Math.cos(b)*Math.sin(h)*Math.sin(e));f=Math.asin(Math.max(Math.min(f,1),-1));e=Math.atan2(B,A);b=[Math.cos(s)*(Math.sin(h)*Math.sin(b)*Math.cos(x)-Math.cos(b)*Math.sin(x)),Math.cos(s)*Math.cos(h)*Math.cos(x),Math.cos(s)*(Math.cos(b)*Math.sin(h)*Math.cos(x)+Math.sin(x)*Math.sin(b))];h=[-Math.cos(f)*Math.sin(e),Math.cos(f)*Math.cos(e)];h=Math.acos(Math.max(Math.min((b[0]*
h[0]+b[1]*h[1])/(Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2])*Math.sqrt(h[0]*h[0]+h[1]*h[1])),1),-1));0>b[2]&&(h=2*Math.PI-h);q+=h}if(a||"multires"!=y&&"cubemap"!=y){if("multires"!=y)k=2*Math.atan(Math.tan(0.5*k)/(v.width/v.height)),k=1/Math.tan(0.5*k),a.uniform1f(d.psi,e),a.uniform1f(d.theta,f),a.uniform1f(d.rot,q),a.uniform1f(d.f,k),!0===ga&&"equirectangular"==y&&(a.bindTexture(a.TEXTURE_2D,d.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,r)),a.drawArrays(a.TRIANGLES,0,6);else{b=v.width/
v.height;h=2*Math.atan(Math.tan(k/2)*v.height/v.width);h=1/Math.tan(h/2);b=[h/b,0,0,0,0,h,0,0,0,0,100.1/-99.9,20/-99.9,0,0,-1,0];for(h=1;h<r.maxLevel&&v.width>r.tileResolution*Math.pow(2,h-1)*Math.tan(k/2)*0.707;)h++;d.level=h;h=[1,0,0,0,1,0,0,0,1];h=ka(h,-q,"z");h=ka(h,-f,"x");h=ka(h,e,"y");h=[h[0],h[1],h[2],0,h[3],h[4],h[5],0,h[6],h[7],h[8],0,0,0,0,1];a.uniformMatrix4fv(d.perspUniform,!1,new Float32Array(fa(b)));a.uniformMatrix4fv(d.cubeUniform,!1,new Float32Array(fa(h)));b=[b[0]*h[0],b[0]*h[1],
b[0]*h[2],0,b[5]*h[4],b[5]*h[5],b[5]*h[6],0,b[10]*h[8],b[10]*h[9],b[10]*h[10],b[11],-h[8],-h[9],-h[10],0];d.nodeCache.sort(S);if(200<d.nodeCache.length&&d.nodeCache.length>d.currentNodes.length+50)for(h=d.nodeCache.splice(200,d.nodeCache.length-200),q=0;q<h.length;q++)a.deleteTexture(h[q].texture);d.currentNodes=[];h="fbudlr".split("");for(q=0;6>q;q++)s=new J(la[q],h[q],1,0,0,r.fullpath),ta(b,s,f,e,k);d.currentNodes.sort(ea);for(q=0;q<d.currentNodes.length;q++)if(!d.currentNodes[q].texture){setTimeout(va(d.currentNodes[q]),
0);break}if(!d.drawInProgress){d.drawInProgress=!0;for(f=0;f<d.currentNodes.length;f++)d.currentNodes[f].textureLoaded&&(a.bindBuffer(a.ARRAY_BUFFER,X),a.bufferData(a.ARRAY_BUFFER,new Float32Array(d.currentNodes[f].vertices),a.STATIC_DRAW),a.vertexAttribPointer(d.vertPosLocation,3,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,ma),a.vertexAttribPointer(d.texCoordLocation,2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,d.currentNodes[f].texture),a.drawElements(a.TRIANGLES,6,a.UNSIGNED_SHORT,0));d.drawInProgress=
!1}}if(l.returnImage!==g)return v.toDataURL("image/png")}else for(q=wa/2,l={f:"translate3d(-"+(q+2)+"px, -"+(q+2)+"px, -"+q+"px)",b:"translate3d("+(q+2)+"px, -"+(q+2)+"px, "+q+"px) rotateX(180deg) rotateZ(180deg)",u:"translate3d(-"+(q+2)+"px, -"+q+"px, "+(q+2)+"px) rotateX(270deg)",d:"translate3d(-"+(q+2)+"px, "+q+"px, -"+(q+2)+"px) rotateX(90deg)",l:"translate3d(-"+q+"px, -"+(q+2)+"px, "+(q+2)+"px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",r:"translate3d("+q+"px, -"+(q+2)+"px, -"+(q+2)+"px) rotateY(270deg)"},
k=1/Math.tan(k/2),k=k*v.width/(z.devicePixelRatio||1)/2+"px",f="perspective("+k+") translateZ("+k+") rotateX("+f+"rad) rotateY("+e+"rad) ",e=Object.keys(l),q=0;6>q;q++)k=R.querySelector(".pnlm-"+e[q]+"face").style,k.webkitTransform=f+l[e[q]],k.transform=f+l[e[q]]};this.isLoading=function(){if(a&&"multires"==y)for(var g=0;g<d.currentNodes.length;g++)if(!d.currentNodes[g].textureLoaded)return!0;return!1};this.getCanvas=function(){return v};var Ea=function(){function d(){var b=this;this.texture=this.callback=
null;this.image=new Image;this.image.crossOrigin="anonymous";this.image.addEventListener("load",function(){var d=b.image;a.bindTexture(a.TEXTURE_2D,b.texture);a.texImage2D(a.TEXTURE_2D,0,a.RGB,a.RGB,a.UNSIGNED_BYTE,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.bindTexture(a.TEXTURE_2D,null);b.callback(b.texture);
l.length?(d=l.shift(),b.loadTexture(d.src,d.texture,d.callback)):k[g++]=b})}function e(a,b,d){this.src=a;this.texture=b;this.callback=d}var g=4,k={},l=[];d.prototype.loadTexture=function(a,b,d){this.texture=b;this.callback=d;this.image.src=a};for(var b=0;b<g;b++)k[b]=new d;return function(b,d){var f=a.createTexture();g?k[--g].loadTexture(b,f,d):l.push(new e(b,f,d));return f}}()}var l="attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}",
x="attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}",Fa="precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);float cosphi = cos(phi);\ngl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));\n}",
na="precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);lambda = mod(lambda + PI, PI * 2.0) - PI;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = u_backgroundColor;\nelse\ngl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}",
oa="varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";return{renderer:function(g,k,l,x){return new ia(g,k,l,x)}}}(window,document);window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(z,k){window.setTimeout(z,1E3/60)}}());
window.pannellum=function(z,k,g){function ia(l,x){function Fa(){var w=k.createElement("div");w.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e";if(1==w.getElementsByTagName("i").length)S();else{xa=c.hfov;ya=c.pitch;var a;if("cubemap"==c.type){M=[];for(w=0;6>w;w++)M.push(new Image),M[w].crossOrigin="anonymous";n.load.lbox.style.display="block";n.load.lbar.style.display="none"}else if("multires"==c.type)w=JSON.parse(JSON.stringify(c.multiRes)),c.basePath&&c.multiRes.basePath&&!/^(?:[a-z]+:)?\/\//i.test(c.multiRes.basePath)?
w.basePath=c.basePath+c.multiRes.basePath:c.multiRes.basePath?w.basePath=c.multiRes.basePath:c.basePath&&(w.basePath=c.basePath),M=w;else if(!0===c.dynamic)M=c.panorama;else{if(c.panorama===g){S("No panorama image was specified.");return}M=new Image}if("cubemap"==c.type)for(var b=6,d=function(){b--;0===b&&oa()},e=function(a){var w=k.createElement("a");w.href=a.target.src;w.innerHTML=w.href;S("The file "+w.outerHTML+" could not be accessed.")},w=0;w<M.length;w++)M[w].onload=d,M[w].onerror=e,a=c.cubeMap[w],
c.basePath&&!na(a)&&(a=c.basePath+a),M[w].src=encodeURI(a);else if("multires"==c.type)oa();else if(a="",c.basePath&&(a=c.basePath),!0!==c.dynamic){a=na(c.panorama)?c.panorama:a+c.panorama;M.onload=function(){z.URL.revokeObjectURL(this.src);oa()};var f=new XMLHttpRequest;f.onloadend=function(){if(200!=f.status){var w=k.createElement("a");w.href=encodeURI(a);w.innerHTML=w.href;S("The file "+w.outerHTML+" could not be accessed.")}$(this.response);n.load.msg.innerHTML=""};f.onprogress=function(a){if(a.lengthComputable){n.load.lbarFill.style.width=
a.loaded/a.total*100+"%";var w,c;1E6<a.total?(w="MB",c=(a.loaded/1E6).toFixed(2),a=(a.total/1E6).toFixed(2)):1E3<a.total?(w="kB",c=(a.loaded/1E3).toFixed(1),a=(a.total/1E3).toFixed(1)):(w="B",c=a.loaded,a=a.total);n.load.msg.innerHTML=c+" / "+a+" "+w}else n.load.lbox.style.display="block",n.load.lbar.style.display="none"};try{f.open("GET",a,!0)}catch(h){S("There is something wrong with the panorama URL.")}f.responseType="blob";f.setRequestHeader("Accept","image/*,*/*;q=0.9");f.send()}l.classList.add("pnlm-grab");
l.classList.remove("pnlm-grabbing")}}function na(a){return/^(?:[a-z]+:)?\/\//i.test(a)||"/"==a[0]||"blob:"==a.slice(0,5)}function oa(){C||(C=new libpannellum.renderer(G));Ma||(Ma=!0,F.addEventListener("mousedown",ta,!1),k.addEventListener("mousemove",ka,!1),k.addEventListener("mouseup",fa,!1),c.mouseZoom&&(l.addEventListener("mousewheel",L,!1),l.addEventListener("DOMMouseScroll",L,!1)),l.addEventListener("mozfullscreenchange",A,!1),l.addEventListener("webkitfullscreenchange",A,!1),l.addEventListener("msfullscreenchange",
A,!1),l.addEventListener("fullscreenchange",A,!1),z.addEventListener("resize",ga,!1),z.addEventListener("orientationchange",ga,!1),l.addEventListener("keydown",wa,!1),l.addEventListener("keyup",la,!1),l.addEventListener("blur",R,!1),k.addEventListener("mouseleave",fa,!1),F.addEventListener("touchstart",va,!1),F.addEventListener("touchmove",aa,!1),F.addEventListener("touchend",v,!1),F.addEventListener("pointerdown",d,!1),F.addEventListener("pointermove",a,!1),F.addEventListener("pointerup",K,!1),F.addEventListener("pointerleave",
K,!1),z.navigator.pointerEnabled&&(l.style.touchAction="none"));f();setTimeout(function(){},500)}function $(a){var m=new FileReader;m.addEventListener("loadend",function(){var b=m.result;if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)){var d=b.indexOf("\u00ff\u00c2");(0>d||65536<d)&&S("Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).")}d=b.indexOf("<x:xmpmeta");if(-1<d&&!0!==c.ignoreGPanoXMP){var e=
b.substring(d,b.indexOf("</x:xmpmeta>")+12),f=function(a){var w;0<=e.indexOf(a+'="')?(w=e.substring(e.indexOf(a+'="')+a.length+2),w=w.substring(0,w.indexOf('"'))):0<=e.indexOf(a+">")&&(w=e.substring(e.indexOf(a+">")+a.length+1),w=w.substring(0,w.indexOf("<")));return w!==g?Number(w):null},b=f("GPano:FullPanoWidthPixels"),d=f("GPano:CroppedAreaImageWidthPixels"),h=f("GPano:FullPanoHeightPixels"),k=f("GPano:CroppedAreaImageHeightPixels"),l=f("GPano:CroppedAreaTopPixels"),p=f("GPano:PoseHeadingDegrees"),
n=f("GPano:PosePitchDegrees"),f=f("GPano:PoseRollDegrees");null!==b&&null!==d&&null!==h&&null!==k&&null!==l&&(0>W.indexOf("haov")&&(c.haov=d/b*360),0>W.indexOf("vaov")&&(c.vaov=k/h*180),0>W.indexOf("vOffset")&&(c.vOffset=-180*((l+k/2)/h-0.5)),null!==p&&0>W.indexOf("northOffset")&&(c.northOffset=p,!1!==c.compass&&(c.compass=!0)),null!==n&&null!==f&&(0>W.indexOf("horizonPitch")&&(c.horizonPitch=n),0>W.indexOf("horizonRoll")&&(c.horizonRoll=f)))}M.src=z.URL.createObjectURL(a)});m.readAsBinaryString!==
g?m.readAsBinaryString(a):m.readAsText(a)}function S(a){a===g&&(a="Your browser does not have the necessary WebGL support to display this panorama.");n.errorMsg.innerHTML="<p>"+a+"</p>";t.load.style.display="none";n.load.box.style.display="none";n.errorMsg.style.display="table";Ga=!0;G.style.display="none";pa("error",a)}function ea(a){var c=J(a);Y.style.left=c.x+"px";Y.style.top=c.y+"px";clearTimeout(ea.t1);clearTimeout(ea.t2);Y.style.display="block";Y.style.opacity=1;ea.t1=setTimeout(function(){Y.style.opacity=
0},2E3);ea.t2=setTimeout(function(){Y.style.display="none"},2500);a.preventDefault()}function J(a){var c=l.getBoundingClientRect(),b={};b.x=a.clientX-c.left;b.y=a.clientY-c.top;return b}function ta(a){a.preventDefault();l.focus();if(N){var m=J(a);if(c.hotSpotDebug){var b=ua(a);console.log("Pitch: "+b[0]+", Yaw: "+b[1]+", Center Pitch: "+c.pitch+", Center Yaw: "+c.yaw+", HFOV: "+c.hfov)}Ca();I();c.roll=0;u.hfov=0;ca=!0;P=Date.now();qa=m.x;ra=m.y;Ha=c.yaw;Ia=c.pitch;l.classList.add("pnlm-grabbing");
l.classList.remove("pnlm-grab");pa("mousedown",a);E()}}function ua(a){var m=J(a);a=C.getCanvas();var b=a.width/(z.devicePixelRatio||1),d=a.height/(z.devicePixelRatio||1);a=m.x/b*2-1;var d=(1-m.y/d*2)*d/b,e=1/Math.tan(c.hfov*Math.PI/360),g=Math.sin(c.pitch*Math.PI/180),f=Math.cos(c.pitch*Math.PI/180),m=e*f-d*g,b=Math.sqrt(a*a+m*m),d=180*Math.atan((d*f+e*g)/b)/Math.PI;a=180*Math.atan2(a/b,m/b)/Math.PI+c.yaw;return[d,a]}function ka(a){if(ca&&N){P=Date.now();var m=C.getCanvas(),b=m.width/(z.devicePixelRatio||
1),m=m.height/(z.devicePixelRatio||1);a=J(a);var d=180*(Math.atan(qa/b*2-1)-Math.atan(a.x/b*2-1))/Math.PI*c.hfov/90+Ha;u.yaw=(d-c.yaw)%360*0.2;c.yaw=d;b=360*Math.atan(Math.tan(c.hfov/360*Math.PI)*m/b)/Math.PI;b=180*(Math.atan(a.y/m*2-1)-Math.atan(ra/m*2-1))/Math.PI*b/90+Ia;u.pitch=0.2*(b-c.pitch);c.pitch=b}}function fa(a){ca&&(ca=!1,15<Date.now()-P&&(u.pitch=u.yaw=0),l.classList.add("pnlm-grab"),l.classList.remove("pnlm-grabbing"),P=Date.now(),pa("mouseup",a))}function va(a){if(N){Ca();I();c.roll=
0;u.hfov=0;var m=J(a.targetTouches[0]);qa=m.x;ra=m.y;2==a.targetTouches.length&&(a=J(a.targetTouches[1]),qa+=0.5*(a.x-m.x),ra+=0.5*(a.y-m.y),za=Math.sqrt((m.x-a.x)*(m.x-a.x)+(m.y-a.y)*(m.y-a.y)));ca=!0;P=Date.now();Ha=c.yaw;Ia=c.pitch;E()}}function aa(a){a.preventDefault();N&&(P=Date.now());if(ca&&N){var m=J(a.targetTouches[0]),b=m.x,d=m.y;2==a.targetTouches.length&&-1!=za&&(a=J(a.targetTouches[1]),b+=0.5*(a.x-m.x),d+=0.5*(a.y-m.y),m=Math.sqrt((m.x-a.x)*(m.x-a.x)+(m.y-a.y)*(m.y-a.y)),Q(c.hfov+0.1*
(za-m)),za=m);m=c.hfov/360;b=(qa-b)*m+Ha;u.yaw=(b-c.yaw)%360*0.2;c.yaw=b;d=(d-ra)*m+Ia;u.pitch=0.2*(d-c.pitch);c.pitch=d}}function v(){ca=!1;150<Date.now()-P&&(u.pitch=u.yaw=0);za=-1;P=Date.now()}function d(a){"touch"==a.pointerType&&(da.push(a.pointerId),Aa.push({clientX:a.clientX,clientY:a.clientY}),a.targetTouches=Aa,va(a),a.preventDefault())}function a(a){if("touch"==a.pointerType)for(var c=0;c<da.length;c++)if(a.pointerId==da[c]){Aa[c]={clientX:a.clientX,clientY:a.clientY};a.targetTouches=Aa;
aa(a);break}}function K(a){if("touch"==a.pointerType){for(var c=!1,b=0;b<da.length;b++)a.pointerId==da[b]&&(da[b]=g),da[b]&&(c=!0);c||(da=[],Aa=[],v());a.preventDefault()}}function L(a){a.preventDefault();N&&(Ca(),P=Date.now(),a.wheelDeltaY?(Q(c.hfov-0.05*a.wheelDeltaY),u.hfov=0>a.wheelDelta?1:-1):a.wheelDelta?(Q(c.hfov-0.05*a.wheelDelta),u.hfov=0>a.wheelDelta?1:-1):a.detail&&(Q(c.hfov+1.5*a.detail),u.hfov=0<a.detail?1:-1),E())}function wa(a){a.preventDefault();Ca();P=Date.now();I();c.roll=0;var m=
a.keycode;a.which&&(m=a.which);27==m?Ja&&ja():ba(m,!0)}function R(){for(var a=0;10>a;a++)p[a]=!1}function la(a){a.preventDefault();var c=a.keycode;a.which&&(c=a.which);ba(c,!1)}function ba(a,c){var b=!1;switch(a){case 109:case 189:case 17:p[0]!=c&&(b=!0);p[0]=c;break;case 107:case 187:case 16:p[1]!=c&&(b=!0);p[1]=c;break;case 38:p[2]!=c&&(b=!0);p[2]=c;break;case 87:p[6]!=c&&(b=!0);p[6]=c;break;case 40:p[3]!=c&&(b=!0);p[3]=c;break;case 83:p[7]!=c&&(b=!0);p[7]=c;break;case 37:p[4]!=c&&(b=!0);p[4]=c;
break;case 65:p[8]!=c&&(b=!0);p[8]=c;break;case 39:p[5]!=c&&(b=!0);p[5]=c;break;case 68:p[9]!=c&&(b=!0),p[9]=c}b&&c&&(Z="undefined"!==typeof performance&&performance.now()?performance.now():Date.now(),E())}function r(){if(N){var a=!1,m=c.pitch,b=c.yaw,d=c.hfov,e;e="undefined"!==typeof performance&&performance.now()?performance.now():Date.now();Z===g&&(Z=e);var f=(e-Z)*c.hfov/1700,f=Math.min(f,1);p[0]&&!0===c.keyboardZoom&&(Q(c.hfov+(0.8*u.hfov+0.5)*f),a=!0);p[1]&&!0===c.keyboardZoom&&(Q(c.hfov+(0.8*
u.hfov-0.2)*f),a=!0);if(p[2]||p[6])c.pitch+=(0.8*u.pitch+0.2)*f,a=!0;if(p[3]||p[7])c.pitch+=(0.8*u.pitch-0.2)*f,a=!0;if(p[4]||p[8])c.yaw+=(0.8*u.yaw-0.2)*f,a=!0;if(p[5]||p[9])c.yaw+=(0.8*u.yaw+0.2)*f,a=!0;a&&(P=Date.now());Date.now();if(c.autoRotate){if(0.001<e-Z){var a=(e-Z)/1E3,h=(u.yaw/a*f-0.2*c.autoRotate)*a,h=(0<-c.autoRotate?1:-1)*Math.min(Math.abs(c.autoRotate*a),Math.abs(h));c.yaw+=h}c.autoRotateStopDelay&&(c.autoRotateStopDelay-=e-Z,0>=c.autoRotateStopDelay&&(c.autoRotateStopDelay=!1,T=c.autoRotate,
c.autoRotate=0))}H.pitch&&(y("pitch"),m=c.pitch);H.yaw&&(y("yaw"),b=c.yaw);H.hfov&&(y("hfov"),d=c.hfov);0<f&&!c.autoRotate&&(p[4]||p[5]||p[8]||p[9]||H.yaw||(c.yaw+=u.yaw*f*0.85),p[2]||p[3]||p[6]||p[7]||H.pitch||(c.pitch+=u.pitch*f*0.85),p[0]||p[1]||H.hfov||Q(c.hfov+u.hfov*f*0.85));Z=e;0<f&&(u.yaw=0.8*u.yaw+(c.yaw-b)/f*0.2,u.pitch=0.8*u.pitch+(c.pitch-m)/f*0.2,u.hfov=0.8*u.hfov+(c.hfov-d)/f*0.2,m=c.autoRotate?Math.abs(c.autoRotate):5,u.yaw=Math.min(m,Math.max(u.yaw,-m)),u.pitch=Math.min(m,Math.max(u.pitch,
-m)),u.hfov=Math.min(m,Math.max(u.hfov,-m)));p[0]&&p[0]&&(u.hfov=0);(p[2]||p[6])&&(p[3]||p[7])&&(u.pitch=0);(p[4]||p[8])&&(p[5]||p[9])&&(u.yaw=0)}}function y(a){var m=H[a],b=Math.min(1,Math.max((Date.now()-m.startTime)/1E3/(m.duration/1E3),0)),b=m.startPosition+(0.5>b?2*b*b:-1+(4-2*b)*b)*(m.endPosition-m.startPosition);if(m.endPosition>m.startPosition&&b>=m.endPosition||m.endPosition<m.startPosition&&b<=m.endPosition)b=m.endPosition,u[a]=0,delete H[a];c[a]=b}function ga(){A()}function E(){Na||(Na=
!0,X())}function X(){ma();Oa&&clearTimeout(Oa);if(ca||Ka)requestAnimationFrame(X);else if(p[0]||p[1]||p[2]||p[3]||p[4]||p[5]||p[6]||p[7]||p[8]||p[9]||c.autoRotate||H.pitch||H.yaw||H.hfov||0.01<Math.abs(u.yaw)||0.01<Math.abs(u.pitch)||0.01<Math.abs(u.hfov))r(),0<=c.autoRotateInactivityDelay&&T&&Date.now()-P>c.autoRotateInactivityDelay&&!c.autoRotate&&(c.autoRotate=T,La.lookAt(ya,g,xa,3E3)),requestAnimationFrame(X);else if(C&&(C.isLoading()||!0===c.dynamic&&Ta))requestAnimationFrame(X);else{Na=!1;Z=
g;var a=c.autoRotateInactivityDelay-(Date.now()-P);0<a?Oa=setTimeout(function(){c.autoRotate=T;La.lookAt(ya,g,xa,3E3);E()},a):0<=c.autoRotateInactivityDelay&&T&&(c.autoRotate=T,La.lookAt(ya,g,xa,3E3),E())}}function ma(){var a;if(N){180<c.yaw?c.yaw-=360:-180>c.yaw&&(c.yaw+=360);a=c.yaw;var m=c.maxYaw-c.minYaw,d=-180,e=180;360>m&&(d=c.minYaw+c.hfov/2,e=c.maxYaw-c.hfov/2,m<c.hfov&&(d=e=(d+e)/2));c.yaw=Math.max(d,Math.min(e,c.yaw));!1!==c.autoRotate&&a!=c.yaw&&(c.autoRotate*=-1);a=C.getCanvas();a=2*Math.atan(Math.tan(c.hfov/
180*Math.PI*0.5)/(a.width/a.height))/Math.PI*180;m=c.minPitch+a/2;d=c.maxPitch-a/2;c.maxPitch-c.minPitch<a&&(m=d=(m+d)/2);isNaN(m)&&(m=-90);isNaN(d)&&(d=90);c.pitch=Math.max(m,Math.min(d,c.pitch));C.render(c.pitch*Math.PI/180,c.yaw*Math.PI/180,c.hfov*Math.PI/180,{roll:c.roll*Math.PI/180});c.hotSpots.forEach(b);c.compass&&(Ba.style.transform="rotate("+(-c.yaw-c.northOffset)+"deg)",Ba.style.webkitTransform="rotate("+(-c.yaw-c.northOffset)+"deg)")}}function V(a,c,b,d){this.w=a;this.x=c;this.y=b;this.z=
d}function Ea(a){var b;b=a.alpha;var d=a.beta;a=a.gamma;d=[d?d*Math.PI/180/2:0,a?a*Math.PI/180/2:0,b?b*Math.PI/180/2:0];b=[Math.cos(d[0]),Math.cos(d[1]),Math.cos(d[2])];d=[Math.sin(d[0]),Math.sin(d[1]),Math.sin(d[2])];b=new V(b[0]*b[1]*b[2]-d[0]*d[1]*d[2],d[0]*b[1]*b[2]-b[0]*d[1]*d[2],b[0]*d[1]*b[2]+d[0]*b[1]*d[2],b[0]*b[1]*d[2]+d[0]*d[1]*b[2]);b=b.multiply(new V(Math.sqrt(0.5),-Math.sqrt(0.5),0,0));d=z.orientation?-z.orientation*Math.PI/180/2:0;b=b.multiply(new V(Math.cos(d),0,-Math.sin(d),0)).toEulerAngles();
c.pitch=b[0]/Math.PI*180;c.roll=-b[1]/Math.PI*180;c.yaw=-b[2]/Math.PI*180+c.northOffset}function f(){try{var a={};c.horizonPitch!==g&&(a.horizonPitch=c.horizonPitch*Math.PI/180);c.horizonRoll!==g&&(a.horizonRoll=c.horizonRoll*Math.PI/180);c.backgroundColor!==g&&(a.backgroundColor=c.backgroundColor);C.init(M,c.type,c.dynamic,c.haov*Math.PI/180,c.vaov*Math.PI/180,c.vOffset*Math.PI/180,e,a);!0!==c.dynamic&&(M=g)}catch(b){if("webgl error"==b.type||"no webgl"==b.type)S();else if("webgl size error"==b.type)S("This panorama is too big for your device! It's "+
b.width+"px wide, but your device only supports images up to "+b.maxWidth+"px wide. Try another device. (If you're the author, try scaling down the image.)");else throw S("Unknown error. Check developer console."),b;}}function e(){if(c.sceneFadeDuration&&C.fadeImg!==g){C.fadeImg.style.opacity=0;var a=C.fadeImg;delete C.fadeImg;setTimeout(function(){G.removeChild(a)},c.sceneFadeDuration)}Ba.style.display=c.compass?"inline":"none";sa();n.load.box.style.display="none";ha!==g&&(G.removeChild(ha),ha=g);
N=!0;pa("load");E()}function ia(a){a.pitch=Number(a.pitch)||0;a.yaw=Number(a.yaw)||0;var b=k.createElement("div");b.className="pnlm-hotspot-base";b.className=a.cssClass?b.className+(" "+a.cssClass):b.className+(" pnlm-hotspot pnlm-sprite pnlm-"+Da(a.type));var d=k.createElement("span");a.text&&(d.innerHTML=Da(a.text));var e;if(a.video){e=k.createElement("video");var f=a.video;c.basePath&&!na(f)&&(f=c.basePath+f);e.src=encodeURI(f);e.controls=!0;e.style.width=a.width+"px";G.appendChild(b);d.appendChild(e)}else if(a.image){f=
a.image;c.basePath&&!na(f)&&(f=c.basePath+f);e=k.createElement("a");e.href=encodeURI(a.URL?a.URL:f);e.target="_blank";d.appendChild(e);var g=k.createElement("img");g.src=encodeURI(f);g.style.width=a.width+"px";g.style.paddingTop="5px";G.appendChild(b);e.appendChild(g);d.style.maxWidth="initial"}else a.URL?(e=k.createElement("a"),e.href=encodeURI(a.URL),e.target="_blank",G.appendChild(e),b.style.cursor="pointer",d.style.cursor="pointer",e.appendChild(b)):(a.sceneId&&(b.onclick=function(){D(a.sceneId,
a.targetPitch,a.targetYaw,a.targetHfov);return!1},b.ontouchend=function(){D(a.sceneId,a.targetPitch,a.targetYaw,a.targetHfov);return!1},b.style.cursor="pointer",d.style.cursor="pointer"),G.appendChild(b));if(a.createTooltipFunc)a.createTooltipFunc(b,a.createTooltipArgs);else if(a.text||a.video||a.image)b.classList.add("pnlm-tooltip"),b.appendChild(d),d.style.width=d.scrollWidth-20+"px",d.style.marginLeft=-(d.scrollWidth-b.offsetWidth)/2+"px",d.style.marginTop=-d.scrollHeight-12+"px";a.clickHandlerFunc&&
(b.addEventListener("click",function(c){a.clickHandlerFunc(c,a.clickHandlerArgs)},"false"),b.style.cursor="pointer",d.style.cursor="pointer");a.div=b}function sa(){Pa||(c.hotSpots?(c.hotSpots=c.hotSpots.sort(function(a,c){return a.pitch<c.pitch}),c.hotSpots.forEach(ia)):c.hotSpots=[],Pa=!0,c.hotSpots.forEach(b))}function q(){if(c.hotSpots)for(var a=0;a<c.hotSpots.length;a++){for(var b=c.hotSpots[a].div;b.parentNode!=G;)b=b.parentNode;G.removeChild(b);delete c.hotSpots[a].div}Pa=!1;delete c.hotSpots}
function b(a){var b=Math.sin(a.pitch*Math.PI/180),d=Math.cos(a.pitch*Math.PI/180),e=Math.sin(c.pitch*Math.PI/180),f=Math.cos(c.pitch*Math.PI/180),g=Math.cos((-a.yaw+c.yaw)*Math.PI/180),h=b*e+d*g*f;if(90>=a.yaw&&-90<a.yaw&&0>=h||(90<a.yaw||-90>=a.yaw)&&0>=h)a.div.style.visibility="hidden";else{var k=Math.sin((-a.yaw+c.yaw)*Math.PI/180),l=Math.tan(c.hfov*Math.PI/360);a.div.style.visibility="visible";var p=C.getCanvas(),n=p.width/(z.devicePixelRatio||1),p=p.height/(z.devicePixelRatio||1),b=[-n/l*k*d/
h/2,-n/l*(b*f-d*g*e)/h/2],d=Math.sin(c.roll*Math.PI/180),e=Math.cos(c.roll*Math.PI/180),b=[b[0]*e-b[1]*d,b[0]*d+b[1]*e];b[0]+=(n-a.div.offsetWidth)/2;b[1]+=(p-a.div.offsetHeight)/2;n="translate("+b[0]+"px, "+b[1]+"px) translateZ(9999px) rotate("+c.roll+"deg)";a.div.style.webkitTransform=n;a.div.style.MozTransform=n;a.div.style.transform=n}}function h(a){c={};var b,d="haov vaov vOffset northOffset horizonPitch horizonRoll".split(" ");W=[];for(b in Qa)Qa.hasOwnProperty(b)&&(c[b]=Qa[b]);for(b in x.default)x.default.hasOwnProperty(b)&&
(c[b]=x.default[b],0<=d.indexOf(b)&&W.push(b));if(null!==a&&""!==a&&x.scenes&&x.scenes[a]){var e=x.scenes[a];for(b in e)e.hasOwnProperty(b)&&(c[b]=e[b],0<=d.indexOf(b)&&W.push(b));c.scene=a}for(b in x)x.hasOwnProperty(b)&&(c[b]=x[b],0<=d.indexOf(b)&&W.push(b))}function s(){if("preview"in c){var a=c.preview;c.basePath&&(a=c.basePath+a);ha=k.createElement("div");ha.className="pnlm-preview-img";ha.style.backgroundImage="url('"+encodeURI(a)+"')";G.appendChild(ha)}c.hasOwnProperty("title")||(n.title.innerHTML=
"");c.hasOwnProperty("author")||(n.author.innerHTML="");c.hasOwnProperty("title")||c.hasOwnProperty("author")||(n.container.style.display="none");for(var b in c)if(c.hasOwnProperty(b))switch(b){case "title":n.title.innerHTML=Da(c[b]);n.container.style.display="inline";break;case "author":n.author.innerHTML="by "+Da(c[b]);n.container.style.display="inline";break;case "fallback":n.errorMsg.innerHTML='<p>Your browser does not support WebGL.<br><a href="'+encodeURI(c[b])+'" target="_blank">Click here to view this panorama in an alternative viewer.</a></p>';
break;case "hfov":Q(Number(c[b]));break;case "autoLoad":!0===c[b]&&C===g&&(n.load.box.style.display="inline",t.load.style.display="none",Fa());break;case "showZoomCtrl":t.zoom.style.display=c[b]&&!1!=c.showControls?"block":"none";break;case "showFullscreenCtrl":t.fullscreen.style.display=c[b]&&!1!=c.showControls&&("fullscreen"in k||"mozFullScreen"in k||"webkitIsFullScreen"in k||"msFullscreenElement"in k)?"block":"none";break;case "hotSpotDebug":Ra.style.display=c[b]?"block":"none";break;case "showControls":c[b]||
(t.orientation.style.display="none",t.zoom.style.display="none",t.fullscreen.style.display="none");break;case "orientationOnByDefault":c[b]&&Sa()}}function ja(){if(N&&!Ga)if(Ja)k.exitFullscreen?k.exitFullscreen():k.mozCancelFullScreen?k.mozCancelFullScreen():k.webkitCancelFullScreen?k.webkitCancelFullScreen():k.msExitFullscreen&&k.msExitFullscreen();else try{l.requestFullscreen?l.requestFullscreen():l.mozRequestFullScreen?l.mozRequestFullScreen():l.msRequestFullscreen?l.msRequestFullscreen():l.webkitRequestFullScreen()}catch(a){}}
function A(){k.fullscreen||k.mozFullScreen||k.webkitIsFullScreen||k.msFullscreenElement?(t.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active"),Ja=!0):(t.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active"),Ja=!1);C.resize();Q(c.hfov);E()}function B(a){var b=c.minHfov;"multires"==c.type&&C&&(b=Math.min(b,C.getCanvas().width/(c.multiRes.cubeResolution/90*0.9)));return b>c.maxHfov?(console.log("HFOV bounds do not make sense (minHfov > maxHfov)."),c.hfov):a<b?b:a>c.maxHfov?
c.maxHfov:a}function Q(a){c.hfov=B(a)}function Ca(){H={};T=c.autoRotate?c.autoRotate:T;c.autoRotate=!1}function O(){Ga&&(n.load.box.style.display="none",n.errorMsg.style.display="none",Ga=!1,pa("errorcleared"));t.load.style.display="none";n.load.box.style.display="inline";Fa()}function D(a,b,d,e,f){N=!1;H={};var k,l;c.sceneFadeDuration&&!f?(f=new Image,f.className="pnlm-fade-img",f.style.transition="opacity "+c.sceneFadeDuration/1E3+"s",f.style.width="100%",f.style.height="100%",f.onload=function(){D(a,
b,d,e,!0)},k=C.render(c.pitch*Math.PI/180,c.yaw*Math.PI/180,c.hfov*Math.PI/180,{returnImage:!0}),k!==g&&(f.src=k),G.appendChild(f),C.fadeImg=f):(f="same"===b?c.pitch:b,k="same"===d?c.yaw:"sameAzimuth"===d?c.yaw+c.northOffset-x.scenes[a].northOffset:d,l="same"===e?c.hfov:e,q(),h(a),u.yaw=u.pitch=u.hfov=0,s(),f!==g&&(c.pitch=f),k!==g&&(c.yaw=k),l!==g&&(c.hfov=l),pa("scenechange",a),O())}function I(){z.removeEventListener("deviceorientation",Ea);t.orientation.classList.remove("pnlm-orientation-button-active");
Ka=!1}function Sa(){Ka=!0;z.addEventListener("deviceorientation",Ea);t.orientation.classList.add("pnlm-orientation-button-active");requestAnimationFrame(X)}function Da(a){return String(a).replace(/&/g,"&amp;").replace('"',"&quot;").replace("'","&#39;").replace("<","&lt;").replace(">","&gt;").replace("/","&#x2f;")}function pa(a){if(a in U)for(var b=0;b<U[a].length;b++)U[a][b].apply(null,[].slice.call(arguments,1))}var La=this,c,C,ha,ca=!1,P=Date.now(),qa=0,ra=0,za=-1,Ha=0,Ia=0,p=Array(10),Ja=!1,N=
!1,Ga=!1,Ma=!1,M,Z,u={yaw:0,pitch:0,hfov:0},Na=!1,Ka=!1,Oa,T=0,xa,ya,H={},U={},W=[],Ta=!1,Pa=!1,Qa={hfov:100,minHfov:50,maxHfov:120,pitch:0,minPitch:g,maxPitch:g,yaw:0,minYaw:-180,maxYaw:180,roll:0,haov:360,vaov:180,vOffset:0,autoRotate:!1,autoRotateInactivityDelay:-1,autoRotateStopDelay:g,type:"equirectangular",northOffset:0,showFullscreenCtrl:!0,dynamic:!1,keyboardZoom:!0,mouseZoom:!0,showZoomCtrl:!0,autoLoad:!1,showControls:!0,orientationOnByDefault:!1,hotSpotDebug:!1,backgroundColor:[0,0,0]};
l="string"===typeof l?k.getElementById(l):l;l.classList.add("pnlm-container");l.tabIndex=0;var G=k.createElement("div");G.className="pnlm-render-container";l.appendChild(G);var F=k.createElement("div");F.className="pnlm-dragfix";l.appendChild(F);var Y=k.createElement("span");Y.className="pnlm-about-msg";Y.innerHTML='<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.3.2';l.appendChild(Y);F.addEventListener("contextmenu",ea);var n={},Ra=k.createElement("div");Ra.className="pnlm-sprite pnlm-hot-spot-debug-indicator";
l.appendChild(Ra);n.container=k.createElement("div");n.container.className="pnlm-panorama-info";n.title=k.createElement("div");n.title.className="pnlm-title-box";n.container.appendChild(n.title);n.author=k.createElement("div");n.author.className="pnlm-author-box";n.container.appendChild(n.author);l.appendChild(n.container);n.load={};n.load.box=k.createElement("div");n.load.box.className="pnlm-load-box";n.load.box.innerHTML="<p>Loading...</p>";n.load.lbox=k.createElement("div");n.load.lbox.className=
"pnlm-lbox";n.load.lbox.innerHTML='<div class="pnlm-loading"></div>';n.load.box.appendChild(n.load.lbox);n.load.lbar=k.createElement("div");n.load.lbar.className="pnlm-lbar";n.load.lbarFill=k.createElement("div");n.load.lbarFill.className="pnlm-lbar-fill";n.load.lbar.appendChild(n.load.lbarFill);n.load.box.appendChild(n.load.lbar);n.load.msg=k.createElement("p");n.load.msg.className="pnlm-lmsg";n.load.box.appendChild(n.load.msg);l.appendChild(n.load.box);n.errorMsg=k.createElement("div");n.errorMsg.className=
"pnlm-error-msg pnlm-info-box";l.appendChild(n.errorMsg);var t={};t.container=k.createElement("div");t.container.className="pnlm-controls-container";l.appendChild(t.container);t.load=k.createElement("div");t.load.className="pnlm-load-button";t.load.innerHTML="<p>Click to<br>Load<br>Panorama<p>";t.load.addEventListener("click",O);l.appendChild(t.load);t.zoom=k.createElement("div");t.zoom.className="pnlm-zoom-controls pnlm-controls";t.zoomIn=k.createElement("div");t.zoomIn.className="pnlm-zoom-in pnlm-sprite pnlm-control";
t.zoomIn.addEventListener("click",function(){N&&(Q(c.hfov-5),E())});t.zoom.appendChild(t.zoomIn);t.zoomOut=k.createElement("div");t.zoomOut.className="pnlm-zoom-out pnlm-sprite pnlm-control";t.zoomOut.addEventListener("click",function(){N&&(Q(c.hfov+5),E())});t.zoom.appendChild(t.zoomOut);t.container.appendChild(t.zoom);t.fullscreen=k.createElement("div");t.fullscreen.addEventListener("click",ja);t.fullscreen.className="pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";
(k.fullscreenEnabled||k.mozFullScreenEnabled||k.webkitFullscreenEnabled||k.msFullscreenEnabled)&&t.container.appendChild(t.fullscreen);t.orientation=k.createElement("div");t.orientation.addEventListener("click",function(a){Ka?I():Sa()});t.orientation.addEventListener("mousedown",function(a){a.stopPropagation()});t.orientation.addEventListener("touchstart",function(a){a.stopPropagation()});t.orientation.addEventListener("pointerdown",function(a){a.stopPropagation()});t.orientation.className="pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control";
z.DeviceOrientationEvent&&z.addEventListener("deviceorientation",function(a){z.removeEventListener("deviceorientation",this);a&&null!==a.alpha&&null!==a.beta&&null!==a.gamma&&t.container.appendChild(t.orientation)});var Ba=k.createElement("div");Ba.className="pnlm-compass pnlm-controls pnlm-control";l.appendChild(Ba);x.firstScene?h(x.firstScene):x.default&&x.default.firstScene?h(x.default.firstScene):h(null);s();var da=[],Aa=[];V.prototype.multiply=function(a){return new V(this.w*a.w-this.x*a.x-this.y*
a.y-this.z*a.z,this.x*a.w+this.w*a.x+this.y*a.z-this.z*a.y,this.y*a.w+this.w*a.y+this.z*a.x-this.x*a.z,this.z*a.w+this.w*a.z+this.x*a.y-this.y*a.x)};V.prototype.toEulerAngles=function(){var a=Math.atan2(2*(this.w*this.x+this.y*this.z),1-2*(this.x*this.x+this.y*this.y)),b=Math.asin(2*(this.w*this.y-this.z*this.x)),c=Math.atan2(2*(this.w*this.z+this.x*this.y),1-2*(this.y*this.y+this.z*this.z));return[a,b,c]};this.getPitch=function(){return c.pitch};this.setPitch=function(a,b){(b=b==g?1E3:Number(b))?
H.pitch={startTime:Date.now(),startPosition:c.pitch,endPosition:a,duration:b}:c.pitch=a;E();return this};this.getPitchBounds=function(){return[c.minPitch,c.maxPitch]};this.setPitchBounds=function(a){c.minPitch=Math.max(-90,Math.min(a[0],90));c.maxPitch=Math.max(-90,Math.min(a[1],90));return this};this.getYaw=function(){return c.yaw};this.setYaw=function(a,b){for(;180<a;)a-=360;for(;-180>a;)a+=360;(b=b==g?1E3:Number(b))?H.yaw={startTime:Date.now(),startPosition:c.yaw,endPosition:a,duration:b}:c.yaw=
a;E();return this};this.getYawBounds=function(){return[c.minYaw,c.maxYaw]};this.setYawBounds=function(a){c.minYaw=Math.max(-180,Math.min(a[0],180));c.maxYaw=Math.max(-180,Math.min(a[1],180));return this};this.getHfov=function(){return c.hfov};this.setHfov=function(a,b){(b=b==g?1E3:Number(b))?H.hfov={startTime:Date.now(),startPosition:c.hfov,endPosition:B(a),duration:b}:Q(a);E();return this};this.getHfovBounds=function(){return[c.minHfov,c.maxHfov]};this.setHfovBounds=function(a){c.minHfov=Math.max(0,
a[0]);c.maxHfov=Math.max(0,a[1]);return this};this.lookAt=function(a,b,c,d){d=d==g?1E3:Number(d);a!==g&&this.setPitch(a,d);b!==g&&this.setYaw(b,d);c!==g&&this.setHfov(c,d);return this};this.getNorthOffset=function(){return c.northOffset};this.setNorthOffset=function(a){c.northOffset=Math.min(360,Math.max(0,a));E();return this};this.startAutoRotate=function(a){a=a||T||1;c.autoRotate=a;La.lookAt(ya,g,xa,3E3);E();return this};this.stopAutoRotate=function(){T=c.autoRotate?c.autoRotate:T;c.autoRotate=
!1;c.autoRotateInactivityDelay=-1;return this};this.getRenderer=function(){return C};this.setUpdate=function(a){Ta=!0===a;C===g?oa():E();return this};this.mouseEventToCoords=function(a){return ua(a)};this.loadScene=function(a,b,c,d){N&&D(a,b,c,d);return this};this.getScene=function(){return c.scene};this.addScene=function(a,b){x.scenes[a]=b;return this};this.removeScene=function(a){if(c.scene===a||!x.scenes.hasOwnProperty(a))return!1;delete x.scenes[a];return!0};this.toggleFullscreen=function(){ja();
return this};this.getConfig=function(){return c};this.addHotSpot=function(a,d){if(d===g||c.scene==d)ia(a),c.hotSpots.push(a),b(a);else if(x.scenes.hasOwnProperty(d))x.scenes[d].hotSpots.push(a);else throw"Invalid scene ID!";return this};this.removeHotSpot=function(a){if(!c.hotSpots)return!1;for(var b=0;b<c.hotSpots.length;b++)if(c.hotSpots[b].hasOwnProperty("id")&&c.hotSpots[b].id===a){for(a=c.hotSpots[b].div;a.parentNode!=G;)a=a.parentNode;G.removeChild(a);delete c.hotSpots[b].div;c.hotSpots.splice(b,
1);return!0}return!1};this.on=function(a,b){U[a]=U[a]||[];U[a].push(b);return this};this.off=function(a,b){if(!a)return U={},this;if(b){var c=U[a].indexOf(b);0<=c&&U[a].splice(c,1);U[a].length=0}else delete U[a];return this};this.destroy=function(){C&&C.destroy();Ma&&(F.removeEventListener("mousedown",ta,!1),k.removeEventListener("mousemove",ka,!1),k.removeEventListener("mouseup",fa,!1),l.removeEventListener("mousewheel",L,!1),l.removeEventListener("DOMMouseScroll",L,!1),l.removeEventListener("mozfullscreenchange",
A,!1),l.removeEventListener("webkitfullscreenchange",A,!1),l.removeEventListener("msfullscreenchange",A,!1),l.removeEventListener("fullscreenchange",A,!1),z.removeEventListener("resize",ga,!1),z.removeEventListener("orientationchange",ga,!1),l.removeEventListener("keydown",wa,!1),l.removeEventListener("keyup",la,!1),l.removeEventListener("blur",R,!1),k.removeEventListener("mouseleave",fa,!1),F.removeEventListener("touchstart",va,!1),F.removeEventListener("touchmove",aa,!1),F.removeEventListener("touchend",
v,!1),F.removeEventListener("pointerdown",d,!1),F.removeEventListener("pointermove",a,!1),F.removeEventListener("pointerup",K,!1),F.removeEventListener("pointerleave",K,!1));l.innerHTML="";l.classList.remove("pnlm-container");l.classList.remove("pnlm-grab");l.classList.remove("pnlm-grabbing")}}return{viewer:function(g,k){return new ia(g,k)}}}(window,document);

var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LazyLoad=t()}(this,function(){"use strict";var e={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null},t=function(e){return e.filter(function(e){return!e.dataset.wasProcessed})},n=function(e,t){var n=new e(t),r=new CustomEvent("LazyLoad::Initialized",{detail:{instance:n}});window.dispatchEvent(r)},r=function(e,t){var n=t.data_srcset,r=e.parentElement;if("PICTURE"===r.tagName)for(var s,o=0;s=r.children[o];o+=1)if("SOURCE"===s.tagName){var a=s.dataset[n];a&&s.setAttribute("srcset",a)}},s=function(e,t){var n=t.data_src,s=t.data_srcset,o=e.tagName,a=e.dataset[n];if("IMG"===o){r(e,t);var i=e.dataset[s];return i&&e.setAttribute("srcset",i),void(a&&e.setAttribute("src",a))}"IFRAME"!==o?a&&(e.style.backgroundImage='url("'+a+'")'):a&&e.setAttribute("src",a)},o=function(e,t){e&&e(t)},a=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},i=function(e,t){var n=function n(s){c(s,!0,t),a(e,n,r)},r=function r(s){c(s,!1,t),a(e,n,r)};e.addEventListener("load",n),e.addEventListener("error",r)},c=function(e,t,n){var r=e.target;r.classList.remove(n.class_loading),r.classList.add(t?n.class_loaded:n.class_error),o(t?n.callback_load:n.callback_error,r)},l=function(e,t){["IMG","IFRAME"].indexOf(e.tagName)>-1&&(i(e,t),e.classList.add(t.class_loading)),s(e,t),e.dataset.wasProcessed=!0,o(t.callback_set,e)},d=function(t){this._settings=_extends({},e,t),this._setObserver(),this.update()};d.prototype={_setObserver:function(){var e=this;if("IntersectionObserver"in window){var n=this._settings;this._observer=new IntersectionObserver(function(r){r.forEach(function(t){if(t.isIntersecting){var r=t.target;l(r,n),e._observer.unobserve(r)}}),e._elements=t(e._elements)},{root:n.container===document?null:n.container,rootMargin:n.threshold+"px"})}},update:function(){var e=this,n=this._settings,r=n.container.querySelectorAll(n.elements_selector);this._elements=t(Array.prototype.slice.call(r)),this._observer?this._elements.forEach(function(t){e._observer.observe(t)}):(this._elements.forEach(function(e){l(e,n)}),this._elements=t(this._elements))},destroy:function(){var e=this;this._observer&&(t(this._elements).forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null}};var u=window.lazyLoadOptions;return u&&function(e,t){if(t.length)for(var r,s=0;r=t[s];s+=1)n(e,r);else n(e,t)}(d,u),d});

$(document).ready(function() {

    var images = {};
    var objects = [];
	var wrapper = $('.panorama');

	for (var i = 0; i < wrapper.length; i++) {
		var id = wrapper[i].firstChild.id;
		images[id] = wrapper[i].firstChild.dataset.image;
	}

	for (image in images) {
		objects.push(pannellum.viewer(image, {
		    "type": "equirectangular",
		    "panorama": images[image],
		    "autoLoad": true
		}));
	}

	for (var i = 0; i < objects.length; i++) {
		objects[i];
	}
});

// Galery
// var obj = [];
// var images = { 
// 	'panorama': '/images/alma.jpg', 
// 	'other': '/images/cerro.jpg'
// };

// for (image in images) {
// 	obj.push(pannellum.viewer(image, {
// 	    "type": "equirectangular",
// 	    "panorama": images[image],
// 	    "autoLoad": true
// 	}));
// }

// for (var i = 0; i < obj.length; i++) {
// 	obj[i];
// }


/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend( jQuery.easing,
{
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

;(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el),
        vars = $.extend({}, $.flexslider.defaults, options),
        namespace = vars.namespace,
        touch = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = (touch) ? "touchend" : "click",
        vertical = vars.direction === "vertical",
        reverse = vars.reverse,
        carousel = (vars.itemWidth > 0),
        fade = vars.animation === "fade",
        asNav = vars.asNavFor !== "",
        methods = {};
    
    // Store a reference to the slider object
    $.data(el, "flexslider", slider);
    
    // Privat slider methods
    methods = {
      init: function() {
        slider.animating = false;
        slider.currentSlide = vars.startAt;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = vars.selector.substr(0,vars.selector.search(' '));
        slider.slides = $(vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(vars.sync).length > 0;
        // SLIDE:
        if (vars.animation === "slide") vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        // TOUCH/USECSS:
        slider.transitions = !vars.video && !fade && vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        // CONTROLSCONTAINER:
        if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
        // MANUAL:
        if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);
        
        // RANDOMIZE:
        if (vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }
        
        slider.doMath();
        
        // ASNAV:
        if (asNav) methods.asNav.setup();
        
        // INIT
        slider.setup("init");
        
        // CONTROLNAV:
        if (vars.controlNav) methods.controlNav.setup();
        
        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.setup();
        
        // KEYBOARD:
        if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
        }
        
        // PAUSEPLAY
        if (vars.pausePlay) methods.pausePlay.setup();
        
        // SLIDSESHOW
        if (vars.slideshow) {
          if (vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay) slider.play();
            });
          }
          // initialize animation
          (vars.initDelay > 0) ? setTimeout(slider.play, vars.initDelay) : slider.play();
        }
        
        // TOUCH
        if (touch && vars.touch) methods.touch();
        
        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && vars.smoothHeight)) $(window).bind("resize focus", methods.resize);
        
        
        // API: start() Callback
        setTimeout(function(){
          vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          slider.slides.click(function(e){
            e.preventDefault();
            var $slide = $(this),
                target = $slide.index();
            if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
              slider.direction = (slider.currentItem < target) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
            }
          });
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item;
          
          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');
          
          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              item = (vars.controlNav === "thumbnails") ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }
          
          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();
          
          methods.controlNav.active();
        
          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);

            if (!$this.hasClass(namespace + 'active')) {
              slider.direction = (target > slider.currentSlide) ? "next" : "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNavScaffold.delegate('a', "click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();
          
          slider.controlNav.live(eventType, function(event) {
            event.preventDefault();
            var $this = $(this),
                target = slider.controlNav.index($this);
                
            if (!$this.hasClass(namespace + 'active')) {
              (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
              slider.flexAnimate(target, vars.pauseOnAction);
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.controlNav.live("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        set: function() {
          var selector = (vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');
        
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }
        
          methods.directionNav.update();
        
          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, vars.pauseOnAction);
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.directionNav.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass);
          } else if (!vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
            } else {
              slider.directionNav.removeClass(disabledClass);
            }
          } else {
            slider.directionNav.removeClass(disabledClass);
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
        
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();
            if ($(this).hasClass(namespace + 'pause')) {
              slider.manualPause = true;
              slider.manualPlay = false;
              slider.pause();
            } else {
              slider.manualPause = false;
              slider.manualPlay = true;
              slider.play();
            }
          });
          // Prevent iOS click event bug
          if (touch) {
            slider.pausePlay.bind("click touchstart", function(event) {
              event.preventDefault();
            });
          }
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false;
              
        el.addEventListener('touchstart', onTouchStart, false);
        function onTouchStart(e) {
          if (slider.animating) {
            e.preventDefault();
          } else if (e.touches.length === 1) {
            slider.pause();
            // CAROUSEL: 
            cwidth = (vertical) ? slider.h : slider. w;
            startT = Number(new Date());
            // CAROUSEL:
            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                     (carousel && reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                     (carousel && slider.currentSlide === slider.last) ? slider.limit :
                     (carousel) ? ((slider.itemW + vars.itemMargin) * slider.move) * slider.currentSlide : 
                     (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
            startX = (vertical) ? e.touches[0].pageY : e.touches[0].pageX;
            startY = (vertical) ? e.touches[0].pageX : e.touches[0].pageY;

            el.addEventListener('touchmove', onTouchMove, false);
            el.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function onTouchMove(e) {
          dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
          scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));
          
          if (!scrolling || Number(new Date()) - startT > 500) {
            e.preventDefault();
            if (!fade && slider.transitions) {
              if (!vars.animationLoop) {
                dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
              }
              slider.setProps(offset + dx, "setTouch");
            }
          }
        }
        
        function onTouchEnd(e) {
          // finish the touch by undoing the touch session
          el.removeEventListener('touchmove', onTouchMove, false);
          
          if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
            var updateDx = (reverse) ? -dx : dx,
                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
            
            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
              slider.flexAnimate(target, vars.pauseOnAction);
            } else {
              if (!fade) slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
            }
          }
          el.removeEventListener('touchend', onTouchEnd, false);
          startX = null;
          startY = null;
          dx = null;
          offset = null;
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();
          
          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(vars.sync).data("flexslider"),
            target = slider.animatingTo;
        
        switch (action) {
          case "animate": $obj.flexAnimate(target, vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      }
    }
    
    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";
      
      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;
          
          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }
        
        slider.animating = true;
        slider.animatingTo = target;
        // API: before() animation Callback
        vars.before(slider);
        
        // SLIDESHOW:
        if (pause) slider.pause();
        
        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");
        
        // CONTROLNAV
        if (vars.controlNav) methods.controlNav.active();
        
        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
        
        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;
        
        // DIRECTIONNAV:
        if (vars.directionNav) methods.directionNav.update();
        
        if (target === slider.last) {
          // API: end() of cycle Callback
          vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!vars.animationLoop) slider.pause();
        }
        
        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;
          
          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = (vars.itemWidth > slider.w) ? vars.itemMargin * 2 : vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", vars.animationSpeed);
          if (slider.transitions) {
            if (!vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              slider.wrapup(dimension);
            });
          } else {
            slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
            slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            
            slider.slides.unbind("webkitTransitionEnd transitionend");
            slider.slides.eq(slider.currentSlide).bind("webkitTransitionEnd transitionend", function() {
              // API: after() animation Callback
              vars.after(slider);
            });
            
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
          }
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
      }
    } 
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      vars.after(slider);
    }
    
    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
    }
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.playing = false;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    }
    // SLIDESHOW:
    slider.play = function() {
      slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
      slider.playing = true;
      // PAUSEPLAY:
      if (vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    }
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    }
    slider.getTarget = function(dir) {
      slider.direction = dir; 
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    }
    
    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());
            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
      }
      
      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);
    }
    
    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;
            
        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
        }
        slider.newSlides = $(vars.selector, slider);
        
        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE: 
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
    }
    
    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = vars.itemMargin,
          minItems = vars.minItems,
          maxItems = vars.maxItems;
      
      slider.w = slider.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? maxItems * slider.itemT : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * minItems))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * maxItems))/maxItems :
                       (vars.itemWidth > slider.w) ? slider.w : vars.itemWidth;
        slider.visible = Math.floor(slider.w/(slider.itemW + slideMargin));
        slider.move = (vars.move > 0 && vars.move < slider.visible ) ? vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (vars.itemWidth > slider.w) ? ((slider.itemW + (slideMargin * 2)) * slider.count) - slider.w - slideMargin : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    }
    
    slider.update = function(pos, action) {
      slider.doMath();
      
      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }
      
      // update controlNav
      if (vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (vars.directionNav) methods.directionNav.update();
      
    }
    
    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);
      
      slider.count += 1;
      slider.last = slider.count - 1;
      
      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }
      
      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");
      
      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();
      
      //FlexSlider: added() Callback
      vars.added(slider);
    }
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
      
      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;
      
      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }
      
      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");
      
      // update slider.slides
      slider.slides = $(vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();
      
      // FlexSlider: removed() Callback
      vars.removed(slider);
    }
    
    //FlexSlider: Initialize
    methods.init();
  }
  
  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode  
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    
    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
    
    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item
    
    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item
    
    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    
    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
                                    
    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
  }


  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};
    
    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

        if ($slides.length === 1) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') == undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  }  

})(jQuery);
/* -- DO NOT REMOVE --
 * jQuery DCalendar 1.1 and DCalendar Picker 1.1 plugin
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 *
 * Date: Sat Mar 2 2013
 *
 * @requires jQuery
 * -- DO NOT REMOVE --
 */
if (typeof jQuery === 'undefined') { throw new Error('DCalendar.Picker: This plugin requires jQuery'); }
 
+function ($) {

	Date.prototype.getDays = function() { return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate(); };
	// Date.prototype.getWeeks = function(){ var d = new Date(this), l = this.getDays(); d.setDate(1); l += d.getDay(); return Math.ceil(l/7) };
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
		short_months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		daysofweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	var DCalendar = function(elem, options) {
	    this.calendar = $(elem);
		this.today = new Date();	//system date
		this.date = this.today;		//current selected date, default is today
		this.viewMode = 'days';
		this.options = options;
		this.selected = this.date.getMonth().toString() + "/" + this.date.getDate() + "/" + this.date.getFullYear();
		if(options.mode == 'calendar')
			this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>');
		else if (options.mode == 'datepicker')
			this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead>');
		this.tHead.find('#currM').text(months[this.today.getMonth()] +" " + this.today.getFullYear());
		this.calendar.prepend(this.tHead);
		var that = this;

		this.calendar.on('click', '#next', function(){ initCreate('next'); })
			.on('click', '#prev', function(){ initCreate('prev'); })
			.on('click', '#today', function(){
				that.viewMode = 'days';
				var curr = new Date(that.date),
					sys = new Date(that.today);
				if(curr.toString() != sys.toString()) { that.date = sys; that.create(that.viewMode); }
			}).on('click', '.date', function(){
				that.selected = that.date.getMonth() + 1 + "/" + $(this).text() + "/" + that.date.getFullYear();
				if(that.options.mode == 'datepicker') {
					that.calendar.find('td').removeClass('selected');
					$(this).addClass('selected');
				}
				selectDate();
				return true;
			}).on('click', '.pMDate', function(){
				that.selected = (that.date.getMonth() == 0 ? '12' : that.date.getMonth()) + "/" + $(this).text() + "/" + (that.date.getMonth() == 0 ? that.date.getFullYear()-1 : that.date.getFullYear());
				if(that.options.mode == 'datepicker') {
					that.calendar.find('td').removeClass('selected');
					$(this).addClass('selected');
				}
				selectDate();
				return true;
			}).on('click', '.nMDate', function(){
				that.selected = (that.date.getMonth()+2 == 13 ? '1' : that.date.getMonth()+2) + "/" + $(this).text() + "/" + (that.date.getMonth()+2 == 13 ? that.date.getFullYear()+1 : that.date.getFullYear());
				if(that.options.mode == 'datepicker') {
					that.calendar.find('td').removeClass('selected');
					$(this).addClass('selected');
				}
				selectDate();
				return true;
			}).on('click', '#currM', function(){
				that.viewMode = 'months';
				that.create(that.viewMode);
			}).on('click', '.month', function(e){
				that.viewMode = 'days';
				var curr = new Date(that.date), y = that.calendar.find('#currM').text();
				curr.setMonth($(e.currentTarget).attr('num'));
				that.date = curr;
				that.create(that.viewMode);
			});

		function selectDate () {
			var newDate = formatDate(that.options.format);
			var e = $.Event('selectdate',{date: newDate});
			that.calendar.trigger(e);
		}

		function formatDate (format) {
			var d = new Date(that.selected), day = d.getDate(), m = d.getMonth(), y = d.getFullYear();
			return format.replace(/(yyyy|yy|mmmm|mmm|mm|m|dd|d)/gi, function (e) {
				switch(e.toLowerCase()){
					case 'd': return day;
					case 'dd': return (day < 10 ? "0"+day: day);
					case 'm': return m+1;
					case 'mm': return (m+1 < 10 ? "0"+(m+1): (m+1));
					case 'mmm': return short_months[m];
					case 'mmmm': return months[m];
					case 'yy': return y.toString().substr(2,2);
					case 'yyyy': return y;
				}
			});
		}

		function initCreate(o){
			var curr = new Date(that.date);
			if(that.viewMode == 'days')
				o == 'next' ? curr.setMonth(curr.getMonth() + 1) : curr.setMonth(curr.getMonth() - 1);
			else
				o == 'next' ? curr.setFullYear(curr.getFullYear() + 1) : curr.setFullYear(curr.getFullYear() - 1);
			curr.setDate(1);
			that.date = curr;
			that.create(that.viewMode);
		}

		this.create(this.viewMode);
	}

	DCalendar.prototype = {

		constructor : DCalendar, 

		//setDate : function(){},

		create : function(mode){
			var that = this, cal = [], tBody = $('<tbody></tbody>'), d = new Date(that.date), days = that.date.getDays(), day = 1, nStartDate = 1, selDate = that.selected.split('/');
			that.calendar.empty();
			if(mode == "days"){
				if(that.options.mode == 'calendar')
					that.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead>');
				else if (that.options.mode == 'datepicker')
					that.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="5" id="currM"></th><th id="next">&rsaquo;</th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead>');
				that.tHead.find('#currM').text(months[that.date.getMonth()] +" " + that.date.getFullYear());
				that.calendar.append(that.tHead);
				for(var i=1; i<=6; i++){
					var temp = [$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>'),$('<td></td>')];

					while(day<=days){
						d.setDate(day);
						var dayOfWeek = d.getDay();
						if(day == that.today.getDate() && d.getMonth() == that.today.getMonth() && d.getFullYear() == that.today.getFullYear()) {
							temp[dayOfWeek].attr('id', 'currDay');
						} else if(that.options.mode == 'datepicker' && (day == selDate[1] && d.getMonth() == (selDate[0]-1) && d.getFullYear() == selDate[2])){
							temp[dayOfWeek].addClass('selected');
						}
						if(i == 1 && dayOfWeek == 0){
							break;
						} else if(dayOfWeek < 6){
							temp[dayOfWeek].html('<span>'+(day++)+'</span>').addClass('date');
						} else {
							temp[dayOfWeek].html('<span>'+(day++)+'</span>').addClass('date');
							break;
						}
					}
					if(i == 1 || i > 4){
						var p = new Date(that.date);
						p.setMonth(p.getMonth()+(i==1?-1:1));
						var pDays = p.getDays();
						for(var a=(i==1?6:0); (i==1?(a>=0):(a<=6)); (i==1?a--:a++)){
							if(temp[a].text() == ''){
								temp[a].html('<span>'+((i==1?pDays--:nStartDate++))+'</span>').addClass((i==1?'pMDate':'nMDate'));
								if(that.options.mode == 'datepicker' && ((i==1?(pDays+1):(nStartDate-1)) == selDate[1] && p.getMonth() == (selDate[0]-1) && p.getFullYear() == selDate[2])){
									temp[a].addClass('selected');
								}
							}
						}
					}
					cal.push(temp);
				}

				$.each(cal, function(i, v){
					var row = $('<tr></tr>'), l = v.length;
					for(var i=0;i<l;i++){ row.append(v[i]); }
					tBody.append(row);
				});

				var sysDate = "Today: " + daysofweek[that.today.getDay()] + ", "+ months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
				tBody.append('<tr><td colspan="7" id="today">'+sysDate+'</td></tr>').appendTo(that.calendar);
			} else {
				this.tHead = $('<thead><tr><th id="prev">&lsaquo;</th><th colspan="2" id="currM"></th><th id="next">&rsaquo;</th></tr>');
				that.tHead.find('#currM').text(that.date.getFullYear());
				that.tHead.appendTo(that.calendar);
				var currI = 0;
				for (var i = 0; i < 3; i++) {
					var row = $('<tr></tr>');
					for (var x = 0; x < 4; x++) {
						var col = $('<td align="center"></td>');
						var m = $('<span class="month" num="'+currI+'">'+short_months[currI]+'</span>');
						col.append(m).appendTo(row);
						currI++;
					}
					tBody.append(row);
				}
				var sysDate = "Today: " + daysofweek[that.today.getDay()] + ", "+ months[that.today.getMonth()] + " " + that.today.getDate() + ", " + that.today.getFullYear();
				tBody.append('<tr><td colspan="4" id="today">'+sysDate+'</td></tr>').appendTo(that.calendar);
			}
		}
	}

	/* DEFINITION FOR DCALENDAR */
	$.fn.dcalendar = function(opts){
		return $(this).each(function(index, elem){
			var that = this;
 			var $this = $(that),
 				data = $(that).data('dcalendar'),
 				options = $.extend({}, $.fn.dcalendar.defaults, $this.data(), typeof opts == 'object' && opts);
 			if(!data){
 				$this.data('dcalendar', (data = new DCalendar(this, options)));
 			}
 			if(typeof opts == 'string') data[opts]();
		});
	}

	$.fn.dcalendar.defaults = {
		mode : 'calendar',
		format: 'mm/dd/yyyy',
	};

	$.fn.dcalendar.Constructor = DCalendar;

	/* DEFINITION FOR DCALENDAR PICKER */
	$.fn.dcalendarpicker = function(opts){
		return $(this).each(function(){
			var that = $(this);
			var cal = $('<table class="calendar"></table>'), hovered = false, selectedDate = false;
			that.wrap($('<div class="datepicker" style="display:inline-block;position:relative;"></div>'));
			cal.css({
				position:'absolute',
				left:0, display:'none',
				'box-shadow':'0 0 4px rgba(0,0,0,0.15)',
				width:'220px',
			}).appendTo(that.parent());
			if(opts){
				opts.mode = 'datepicker';
				cal.dcalendar(opts);
			}
			else
				cal.dcalendar({mode: 'datepicker'});
			cal.hover(function(){
				hovered = true;
			}, function(){
				hovered = false;
			}).on('click', function(){
				if(!selectedDate)
					that.focus();
				else {
					selectedDate = false;
					$(this).hide();
				}
			}).on('selectdate', function(e){
				that.val(e.date);
			    that.trigger($.Event('dateselected',{date: e.date, elem: that}));
				selectedDate = true;
			});
			that.on('keydown', function(e){ if(e.which) return false; })
				.on('focus', function(){
					$('.datepicker').find('.calendar').not(cal).hide();
					cal.show();
				})
				.on('blur', function(){ if(!hovered) cal.hide(); });
		});
	}

}(jQuery);
/*
	Copyright (c) 2012 Colin Rotherham, http://colinr.com
	https://github.com/colinrotherham
*/

	var CRD=CRD||{};
	CRD.Slideshow=function(S,F,G){function k(){d.isManual||(H=setTimeout(function(){g()},d.interval))}function w(){clearTimeout(I);clearTimeout(H)}function J(a){g(a,{isPrev:!1})}function K(a){g(a,{isPrev:!0})}function g(a,e){var c=$(this),f=e&&e.slide,g=b.index;if(!n){p=e&&e.isPrev;if(c.hasClass(d.classSlide)){if(c.is("a"))return;f=h.index(c)}T(f);b.slide.is(b.slideNext)||(n=!0,w(),((f=G?G.call(b,a):!0)||"undefined"===typeof f)&&u(z(g),d.isCarousel?d.time:0,function(){L(a)}))}a?c.is(b.slide)||a.preventDefault():
	k()}function u(a,e,c,f){null===a&&(a=z(b.index));e=e||0;if(U&&d.isCarousel){f=f||0;if(c)l.one(m.toLowerCase()+"TransitionEnd transitionend",c);q[m+"Transition"]=e?e/1E3+"s":"";q[m+"Transform"]="translateX("+-1*(r(a,!0)-f)+"%)"}else l.stop(!0,!0).animate({left:r(a)+"%"},e,c)}function L(a){b.slide=b.slideNext;n=!1;h.removeClass(d.classActive);b.slide.addClass(d.classActive);q[m+"Transition"]="";d.canLoop&&M();N();a&&("click"===a.type&&b.slide.focus(),F&&F.call(b,a))}function T(a){var e=b.index;"undefined"!==
	typeof a?(p=a<e?!0:!1,e=a):e=p?0===e?d.canLoop?c-1:0:e-1:e===c-1?d.canLoop?0:c-1:e+1;b.slideNext=h.eq(e);b.index=e}function O(){return!d.canLoop&&(p&&0===b.index||!p&&b.index===c-1)}function P(a){s&&(a?g(a,{slide:A.index(this)}):A.removeAttr("class").eq(b.index).addClass(d.classActive))}function N(){var a,e=d.classDisabled;if(!d.canLoop){x.removeClass(e);switch(b.index){case 0:a=B;break;case c-1:a=C}a&&a.addClass(e)}P()}function r(a,b){return b?100/c*a:-100*a}function Q(a){a>=c&&(a-=c);0>a&&(a=c+
	a);return a}function z(a){return Q(b.index+(d.canLoop?y-a:0))}function R(a){return Q(d.canLoop?a-y+b.index:a)}function M(){for(var a=c,e,f,g;a--;)e=h.eq(R(a)),f=e.data("x"),g=r(a,!0)+"%",g!==f&&e.css({left:g,display:d.display}).attr("tabindex","-1").data("x",g);u(d.canLoop?y:b.index)}function V(){var a,e;function h(f){var g=f.originalEvent,v=g.touches&&g.touches[0]||g;1<v.length||g.scale&&1!==g.scale||(a=(v.pageX||v.screenX)-k.x,e=(v.pageY||v.screenY)-k.y,"undefined"===typeof t&&(t=!!(t||Math.abs(a)<
	Math.abs(e))),t||(f.preventDefault(),w(),p=0<a,n=!0,!d.canLoop&&O()&&(a/=Math.abs(a)/b.width+1),u(null,null,null,a/b.width*(100/c))))}function l(){if(!t){var e=+new Date-k.time,c=Math.abs(a),e=250>e&&20<c||c>b.width/3;n=!1;e&&!O()?g(event,{isPrev:p}):0<c&&u(null,d.time)}f.off(q,h);f.off(r,l)}function m(a){D&&clearTimeout(D);D=setTimeout(function(){b.width=f.outerWidth()},a?300:0)}var k,q="touchmove MSPointerMove",r="touchend touchleave touchcancel MSPointerUp MSPointerOut";d.isCarousel=!0;f.on("touchstart MSPointerDown",
	function(b){var d=x||s&&s.add(x),c=b.originalEvent,c=c.touches&&c.touches[0]||c;d.has(b.target).length||d.is(b.target)||(n&&L(),k={x:c.pageX||c.screenX,y:c.pageY||c.screenY,time:+new Date},t=e=a=void 0,f.on(q,h),f.on(r,l))}).on("click",function(a){!t&&n&&a.preventDefault()}).addClass(d.classTouch);m();$(window).resize(m)}var b=this,E=["ms","O","Moz","Webkit",""],m="",q,d={next:"button.next",previous:"button.previous",classStrip:"strip",classSlide:"slide",classActive:"sticky",classMarkers:"markers",
	classDisabled:"disabled",classTouch:"touch",delay:3E3,interval:5E3,time:400,display:"block",canLoop:!1,isManual:!0,isCarousel:!0},f,h,l,s,A,x,B,C,I,H,D,c,y,n,t,p,U=function(){for(var a=document.body.style,b=E.length;b--;)if("string"===typeof a[E[b]+"Transition"]){m=E[b];break}return!!m}(),W="ontouchstart"in window||navigator.msPointerEnabled||window.DocumentTouch&&document instanceof DocumentTouch;$.each(S,function(a,b){d[a]=b});b.init=function(){f=$(d.slideshow);h=f.find("."+d.classSlide);l=f.find("."+
	d.classStrip);c=h.length;if(f.length&&!(2>c)){q=l[0].style;b.slide=h.filter("."+d.classActive);b.index=h.index(b.slide);b.slide.length||(b.index=0,b.slide=h.eq(b.index));y=d.canLoop?Math.floor((c-1)/2):0;l.width(100*c+"%");h.width(100/c+"%");W&&V();h.on("click touchend",g);f.mouseenter(w).mouseleave(k);C=f.find(d.next).on("click touchend",J);B=f.find(d.previous).on("click touchend",K);x=B.add(C);I=setTimeout(k,d.delay);if(d.classMarkers){s=$("<div />").addClass(d.classMarkers).on("click touchend",
	"button",P);for(var a=c;a--;)s.prepend($("<button>"+(a+1)+"</button>"));A=s.find("button");f.append(s)}N();M();b.element=f;b.strip=l;b.slides=h;f.removeClass(d.classDisabled)}};b.start=k;b.stop=w;b.next=J;b.prev=K;b.change=g;b.transition=u;b.getTransitionX=r;b.getIndexOffset=z;b.getPositionOffset=R};
/*
	Start the slideshow
	----------------------------------- */

	// Create and initialise the slideshow
	new CRD.Slideshow({ slideshow: '#slideshow' }).init();
/*
* jQuery picPlay plugin
* @name jquery-picEyes-1.0.js
* @author xiaoyan - frbao
* @version 1.0
* @date Jan 14, 2016
* @category jQuery plugin
* @github https://github.com/xiaoyan0552/jquery.picEyes
*/
(function($){
	$.fn.picEyes = function(){
		var $obj = this;
		var num,zg = $obj.length - 1;
		var win_w = $(window).width();
		var win_h = $(window).height();
		var eyeHtml = '<div class="picshade"></div>'
			+'<a class="pictures_eyes_close" href="javascript:;"></a>'
			+'<div class="pictures_eyes">'
			+'<div class="pictures_eyes_in">'
			+'<img src="" />'
			+'<div class="next"></div>'
			+'<div class="prev"></div>'
			+'</div>'
			+'</div>'
			+'<div class="pictures_eyes_indicators"></div>';
		$('body').append(eyeHtml);
		$obj.click(function() {
			$(".picshade").css("height", win_h);
			var n = $(this).find("img").attr('src');
			$(".pictures_eyes img").attr("src", n);
			num = $obj.index(this);
			popwin($('.pictures_eyes'));
		});
		$(".pictures_eyes_close,.picshade,.pictures_eyes").click(function() {
			$(".picshade,.pictures_eyes,.pictures_eyes_close,.pictures_eyes_indicators").fadeOut();
			$('body').css({'overflow':'auto'});
		});
		$('.pictures_eyes img').click(function(e){
			stopPropagation(e);
		});
		$(".next").click(function(e){
			if(num < zg){
				num++;
			}else{
				num = 0;
			}
			var xx = $obj.eq(num).find('img').attr("src");
			$(".pictures_eyes img").attr("src", xx);
			stopPropagation(e);
			popwin($('.pictures_eyes'));
		});
		$(".prev").click(function(e){
			if(num > 0){
				num--;
			}else{
				num = zg;
			}
			var xx = $obj.eq(num).find('img').attr("src");
			$(".pictures_eyes img").attr("src", xx);
			stopPropagation(e);
			popwin($('.pictures_eyes'));
		});
		function popwin(obj){
			$('body').css({'overflow':'hidden'});
			var Pwidth = obj.width();
			var Pheight = obj.height();
			obj.css({left:(win_w - Pwidth)/2,top:(win_h - Pheight)/2}).show();
			$('.picshade,.pictures_eyes_close').fadeIn();
			indicatorsList();
		}
		function updatePlace(obj){
			var Pwidth = obj.width();
			var Pheight = obj.height();
			obj.css({left:(win_w - Pwidth)/2,top:(win_h - Pheight)/2});
		}
		function indicatorsList(){
			var indHtml = '';
			$obj.each(function(){
				var img = $(this).find('img').attr('src');
				indHtml +='<a href="javascript:;"><img src="'+img+'"/></a>';
			});
			$('.pictures_eyes_indicators').html(indHtml).fadeIn();
			$('.pictures_eyes_indicators a').eq(num).addClass('current').siblings().removeClass('current');
			$('.pictures_eyes_indicators a').click(function(){
				$(this).addClass('current').siblings().removeClass('current');
				var xx = $(this).find('img').attr("src");
				$(".pictures_eyes img").attr("src", xx);
				updatePlace($('.pictures_eyes'));
			});
		}
		function stopPropagation(e) {
			e = e || window.event;  
			if(e.stopPropagation) {
				e.stopPropagation();  
			} else {  
				e.cancelBubble = true;
			}  
		}
	}
})(jQuery);

function bar_group(){group_ident=1,$(".bar_group").each(function(){$(this).addClass("group_ident-"+group_ident),$(this).data("gid",group_ident),group_ident++})}function get_max(){$(".bar_group").each(function(){var t=[];$(this).children().each(function(){t.push($(this).attr("value"))}),max_arr["group_ident-"+$(this).data("gid")]=t,void 0!==$(this).attr("max")?$(this).data("bg_max",$(this).attr("max")):$(this).data("bg_max",Math.max.apply(null,t))})}function data_labels(){$(".bar_group__bar").each(function(){void 0!==$(this).attr("label")&&$('<p class="b_label">'+$(this).attr("label")+"</p>").insertBefore($(this))})}function show_values(){$(".bar_group__bar").each(function(){"true"==$(this).attr("show_values")&&($(this).css("margin-bottom","40px"),void 0!==$(this).attr("unit")?($(this).append('<p class="bar_label_min">0 '+$(this).attr("unit")+"</p>"),$(this).append('<p class="bar_label_max">'+$(this).parent().data("bg_max")+" "+$(this).attr("unit")+"</p>")):($(this).append('<p class="bar_label_min">0</p>'),$(this).append('<p class="bar_label_max">'+$(this).parent().data("bg_max")+"</p>")))})}function show_tooltips(){$(".bar_group__bar").each(function(){"true"==$(this).attr("tooltip")&&($(this).css("margin-bottom","40px"),$(this).append('<div class="b_tooltip"><span>'+$(this).attr("value")+'</span><div class="b_tooltip--tri"></div></div>'))})}function in_view(t){var a=$(t),i=$(window),s=i.scrollTop(),r=s+i.height(),n=a.offset().top,o=n+a.height();r>o-45&&a.css("width",a.attr("value")/a.parent().data("bg_max")*100+"%")}function bars(){bar_group(),get_max(),data_labels(),show_tooltips(),show_values()}max_arr={},$(".bar_group__bar").each(function(){in_view($(this))}),$(window).scroll(function(){$(".bar_group__bar").each(function(){in_view($(this))})}),bars();