/* Luna 3D: incluye three.js r187 (MIT, (c) three.js authors). Fuente: 3d/src/main3d.js */
(()=>{var Tl="187";var of=0,Pu=1,lf=2;var $s=1,cf=2,Fr=3,Ss=0,Sn=1,Rn=2,Ys=0,Or=1,Lu=2,Du=3,Nu=4,uf=5;var Zs=100,hf=101,df=102,ff=103,pf=104,mf=200,gf=201,xf=202,_f=203,Uu=204,Fu=205,yf=206,vf=207,Mf=208,bf=209,Sf=210,Ef=211,Tf=212,wf=213,Af=214,Xo=0,$o=1,Yo=2,Rr=3,Zo=4,Jo=5,Ko=6,jo=7,Ou=0,Rf=1,Cf=2,Ai=0,zu=1,Bu=2,ku=3,Hu=4,Gu=5,Vu=6,Wu=7;var qu=300,Js=301,zr=302,wl=303,Al=304,Qo=1e3,Si=1001,el=1002,Ht=1003,If=1004;var Ba=1005;var Mn=1006,Rl=1007;var $i=1008;var Cn=1009,Xu=1010,$u=1011,Br=1012,Cl=1013,ui=1014,Qn=1015,hi=1016,Il=1017,Pl=1018,Ks=1020,Yu=35902,Zu=35899,Ju=1021,Ku=1022,Gn=1023,Wi=1026,Yi=1027,Ll=1028,Dl=1029,Es=1030,Nl=1031;var Ul=1033,ka=33776,Ha=33777,Ga=33778,Va=33779,Fl=35840,Ol=35841,zl=35842,Bl=35843,kl=36196,Hl=37492,Gl=37496,Vl=37488,Wl=37489,Wa=37490,ql=37491,Xl=37808,$l=37809,Yl=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,uc=36284,qa=36285,hc=36286;var da=2300,tl=2301,Wo=2302,Su=2303,Eu=2400,Tu=2401,wu=2402;var Pf=3200;var dc=0,Lf=1,Zi="",yn="srgb",fa="srgb-linear",pa="linear",xt="srgb";var qo=7680;var Df=519,Nf=512,Uf=513,Ff=514,ju=515,Of=516,zf=517,Qu=518,eh=519,th=35044;var nh="300 es",Kn=2e3,Cr=2001;function zm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bf(){let n=ma("canvas");return n.style.display="block",n}var Id={},Ir=null;function ga(...n){let e="THREE."+n.shift();Ir?Ir("log",e,...n):console.log(e,...n)}function kf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=kf(n);let e="THREE."+n.shift();if(Ir)Ir("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=kf(n);let e="THREE."+n.shift();if(Ir)Ir("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ha(...n){let e=n.join(" ");e in Id||(Id[e]=!0,We(...n))}function Hf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Gf={[Xo]:Xo,[Yo]:Ko,[Zo]:Zo,[Rr]:Jo,[$o]:$o,[Ko]:Yo,[jo]:jo,[Jo]:Rr},Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eu=Math.PI/180,nl=180/Math.PI;function js(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function km(n,e){return(n%e+e)%e}function tu(n,e,t){return(1-t)*n+t*e}function Vf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wf(n,e){if(e.constructor===Float32Array)return n;let t=fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function qf(n,e){if(e.constructor===Float32Array)return n;let t=fc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var He=oh,On=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==m||u!==x){let p=l*h+c*m+u*x+f*y;p<0&&(h=-h,m=-m,x=-x,y=-y,p=-p);let d=1-o;if(p<.9995){let g=Math.acos(p),E=Math.sin(g);d=Math.sin(d*g)/E,o=Math.sin(o*g)/E,l=l*d+h*o,c=c*d+m*o,u=u*d+x*o,f=f*d+y*o}else{l=l*d+h*o,c=c*d+m*o,u=u*d+x*o,f=f*d+y*o;let g=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=g,c*=g,u*=g,f*=g}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+u*f+l*m-c*h,e[t+1]=l*x+u*h+c*f-o*m,e[t+2]=c*x+u*m+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>f){let m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-i-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var D=lh,nu=new D,Pd=new On,ch=class ch{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],y=s[0],p=s[3],d=s[6],g=s[1],E=s[4],M=s[7],v=s[2],w=s[5],_=s[8];return r[0]=a*y+o*g+l*v,r[3]=a*p+o*E+l*w,r[6]=a*d+o*M+l*_,r[1]=c*y+u*g+f*v,r[4]=c*p+u*E+f*w,r[7]=c*d+u*M+f*_,r[2]=h*y+m*g+x*v,r[5]=h*p+m*E+x*w,r[8]=h*d+m*M+x*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,m=c*r-a*l,x=t*f+i*h+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=f*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(iu.makeScale(e,t)),this}rotate(e){return ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var Xe=ch,iu=new Xe,Ld=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){let n={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fa]:{primaries:e,whitePoint:i,transfer:pa,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}var lt=Hm();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var cr,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cr===void 0&&(cr=ma("canvas")),cr.width=e.width,cr.height=e.height;let s=cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=cr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gm=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(su(s[a].image)):r.push(su(s[a]))}else r=su(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?il.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Vm=0,ru=new D,bn=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Si,s=Si,r=Mn,a=$i,o=Gn,l=Cn,c=n.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=js(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=qu;bn.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(m+1)/2,v=(d+1)/2,w=(u+h)/4,_=(f+y)/4,T=(x+p)/4;return E>M&&E>v?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=_/i):M>v?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=T/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=_/r,s=T/r),this.set(i,s,r,t),this}let g=Math.sqrt((p-x)*(p-x)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(f-y)/g,this.z=(h-u)/g,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var Lt=uh,sl=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new bn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends sl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var El=class El{constructor(e,t,i,s,r,a,o,l,c,u,f,h,m,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,m,x,y,p)}set(e,t,i,s,r,a,o,l,c,u,f,h,m,x,y,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new El().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,m=a*f,x=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,m=l*f,x=c*u,y=c*f;t[0]=h+y*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,m=l*f,x=c*u,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,m=a*f,x=o*u,y=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,m=a*c,x=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=h-y*f}else if(e.order==="XZY"){let h=a*l,m=a*c,x=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,qm)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),as.crossVectors(i,Un),as.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),as.crossVectors(i,Un)),as.normalize(),vo.crossVectors(Un,as),s[0]=as.x,s[4]=vo.x,s[8]=Un.x,s[1]=as.y,s[5]=vo.y,s[9]=Un.y,s[2]=as.z,s[6]=vo.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],y=i[6],p=i[10],d=i[14],g=i[3],E=i[7],M=i[11],v=i[15],w=s[0],_=s[4],T=s[8],F=s[12],I=s[1],O=s[5],B=s[9],q=s[13],N=s[2],$=s[6],J=s[10],X=s[14],oe=s[3],Z=s[7],ie=s[11],se=s[15];return r[0]=a*w+o*I+l*N+c*oe,r[4]=a*_+o*O+l*$+c*Z,r[8]=a*T+o*B+l*J+c*ie,r[12]=a*F+o*q+l*X+c*se,r[1]=u*w+f*I+h*N+m*oe,r[5]=u*_+f*O+h*$+m*Z,r[9]=u*T+f*B+h*J+m*ie,r[13]=u*F+f*q+h*X+m*se,r[2]=x*w+y*I+p*N+d*oe,r[6]=x*_+y*O+p*$+d*Z,r[10]=x*T+y*B+p*J+d*ie,r[14]=x*F+y*q+p*X+d*se,r[3]=g*w+E*I+M*N+v*oe,r[7]=g*_+E*O+M*$+v*Z,r[11]=g*T+E*B+M*J+v*ie,r[15]=g*F+E*q+M*X+v*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],y=e[7],p=e[11],d=e[15],g=l*m-c*h,E=o*m-c*f,M=o*h-l*f,v=a*m-c*u,w=a*h-l*u,_=a*f-o*u;return t*(y*g-p*E+d*M)-i*(x*g-p*v+d*w)+s*(x*E-y*v+d*_)-r*(x*M-y*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],y=e[13],p=e[14],d=e[15],g=t*o-i*a,E=t*l-s*a,M=t*c-r*a,v=i*l-s*o,w=i*c-r*o,_=s*c-r*l,T=u*y-f*x,F=u*p-h*x,I=u*d-m*x,O=f*p-h*y,B=f*d-m*y,q=h*d-m*p,N=g*q-E*B+M*O+v*I-w*F+_*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/N;return e[0]=(o*q-l*B+c*O)*$,e[1]=(s*B-i*q-r*O)*$,e[2]=(y*_-p*w+d*v)*$,e[3]=(h*w-f*_-m*v)*$,e[4]=(l*I-a*q-c*F)*$,e[5]=(t*q-s*I+r*F)*$,e[6]=(p*M-x*_-d*E)*$,e[7]=(u*_-h*M+m*E)*$,e[8]=(a*B-o*I+c*T)*$,e[9]=(i*I-t*B-r*T)*$,e[10]=(x*w-y*M+d*g)*$,e[11]=(f*M-u*w-m*g)*$,e[12]=(o*F-a*O-l*T)*$,e[13]=(t*O-i*F+s*T)*$,e[14]=(y*E-x*v-p*g)*$,e[15]=(u*v-f*E+h*g)*$,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,m=r*u,x=r*f,y=a*u,p=a*f,d=o*f,g=l*c,E=l*u,M=l*f,v=i.x,w=i.y,_=i.z;return s[0]=(1-(y+d))*v,s[1]=(m+M)*v,s[2]=(x-E)*v,s[3]=0,s[4]=(m-M)*w,s[5]=(1-(h+d))*w,s[6]=(p+g)*w,s[7]=0,s[8]=(x+E)*_,s[9]=(p-g)*_,s[10]=(1-(h+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),l=ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ai.copy(this);let c=1/a,u=1/o,f=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,t.setFromRotationMatrix(ai),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Kn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===Kn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Cr)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Kn,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===Kn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Cr)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};El.prototype.isMatrix4=!0;var ft=El,ur=new D,ai=new ft,Wm=new D(0,0,0),qm=new D(1,1,1),as=new D,vo=new D,Un=new D,Nd=new ft,Ud=new On,hs=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hs.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xm=0,Fd=new D,hr=new On,Oi=new ft,Mo=new D,na=new D,$m=new D,Ym=new On,Od=new D(1,0,0),zd=new D(0,1,0),Bd=new D(0,0,1),kd={type:"added"},Zm={type:"removed"},dr={type:"childadded",child:null},au={type:"childremoved",child:null},qt=class n extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new hs,i=new On,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(zd,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(zd,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mo.copy(e):Mo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(na,Mo,this.up):Oi.lookAt(Mo,na,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Oi),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kd),dr.child=e,this.dispatchEvent(dr),dr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kd),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,$m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new D(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new we;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},bo={h:0,s:0,l:0};function ou(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=km(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ou(a,r,e+1/3),this.g=ou(a,r,e),this.b=ou(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let i=Xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return lt.workingToColorSpace(dn.copy(this),e),Math.round(ct(dn.r*255,0,255))*65536+Math.round(ct(dn.g*255,0,255))*256+Math.round(ct(dn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(dn.copy(this),t);let i=dn.r,s=dn.g,r=dn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=yn){lt.workingToColorSpace(dn.copy(this),e);let t=dn.r,i=dn.g,s=dn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(bo);let i=tu(os.h,bo.h,t),s=tu(os.s,bo.s,t),r=tu(os.l,bo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new qe;qe.NAMES=Xf;var ds=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bn=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new D,zi=new D,lu=new D,Bi=new D,fr=new D,pr=new D,Hd=new D,cu=new D,uu=new D,hu=new D,du=new Lt,fu=new Lt,pu=new Lt,Gi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),zi.subVectors(i,t),lu.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(zi),l=oi.dot(lu),c=zi.dot(zi),u=zi.dot(lu),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return du.setScalar(0),fu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(du,r.x),a.addScaledVector(fu,r.y),a.addScaledVector(pu,r.z),a}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),zi.subVectors(e,t),oi.cross(zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),oi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;fr.subVectors(s,i),pr.subVectors(r,i),cu.subVectors(e,i);let l=fr.dot(cu),c=pr.dot(cu);if(l<=0&&c<=0)return t.copy(i);uu.subVectors(e,s);let u=fr.dot(uu),f=pr.dot(uu);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(fr,a);hu.subVectors(e,r);let m=fr.dot(hu),x=pr.dot(hu);if(x>=0&&m<=x)return t.copy(r);let y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(pr,o);let p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Hd.subVectors(r,s),o=(f-u)/(f-u+(m-x)),t.copy(s).addScaledVector(Hd,o);let d=1/(p+y+h);return a=y*d,o=h*d,t.copy(i).addScaledVector(fr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ti=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Eo.subVectors(this.max,ia),mr.subVectors(e.a,ia),gr.subVectors(e.b,ia),xr.subVectors(e.c,ia),ls.subVectors(gr,mr),cs.subVectors(xr,gr),ks.subVectors(mr,xr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-ks.z,ks.y,ls.z,0,-ls.x,cs.z,0,-cs.x,ks.z,0,-ks.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-ks.y,ks.x,0];return!mu(t,mr,gr,xr,Eo)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,mr,gr,xr,Eo))?!1:(To.crossVectors(ls,cs),t=[To.x,To.y,To.z],mu(t,mr,gr,xr,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new D,new D,new D,new D,new D,new D,new D,new D],li=new D,So=new Ti,mr=new D,gr=new D,xr=new D,ls=new D,cs=new D,ks=new D,ia=new D,Eo=new D,To=new D,Hs=new D;function mu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Hs.fromArray(n,r);let o=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),u=i.dot(Hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var kt=new D,wo=new He,Km=0,jn=class extends Ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=Qn,this.version=0,this._normalizationScale=e!==void 0?fc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):qf(e,this.array)}};var _a=class extends jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ya=class extends jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends jn{constructor(e,t,i){super(new Float32Array(e),t,i)}},jm=new Ti,sa=new D,gu=new D,fs=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(gu)),this.expandByPoint(sa.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qm=0,Jn=new ft,xu=new qt,_r=new D,Fn=new Ti,ra=new Ti,Qt=new D,fn=class n extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?ya:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Fn.min,ra.min),Fn.expandByPoint(Qt),Qt.addVectors(Fn.max,ra.max),Fn.expandByPoint(Qt)):(Fn.expandByPoint(ra.min),Fn.expandByPoint(ra.max))}Fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(e,c),Qt.add(_r)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let F=0;F<i.count;F++)o[F]=new D,l[F]=new D;let u=new D,f=new D,h=new D,m=new He,x=new He,y=new He,p=new D,d=new D;function g(F,I,O){c[F]=c[I]=c[O]=1,u.fromBufferAttribute(i,F),f.fromBufferAttribute(i,I),h.fromBufferAttribute(i,O),m.fromBufferAttribute(r,F),x.fromBufferAttribute(r,I),y.fromBufferAttribute(r,O),f.sub(u),h.sub(u),x.sub(m),y.sub(m);let B=1/(x.x*y.y-y.x*x.y);isFinite(B)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(h,-x.y).multiplyScalar(B),d.copy(h).multiplyScalar(x.x).addScaledVector(f,-y.x).multiplyScalar(B),o[F].add(p),o[I].add(p),o[O].add(p),l[F].add(d),l[I].add(d),l[O].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,I=E.length;F<I;++F){let O=E[F],B=O.start,q=O.count;for(let N=B,$=B+q;N<$;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new D,v=new D,w=new D,_=new D;function T(F){w.fromBufferAttribute(s,F),_.copy(w);let I=o[F];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),v.crossVectors(_,I);let B=v.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,B)}for(let F=0,I=i.count;F<I;++F)c[F]&&T(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){let x=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),m=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new jn(h,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},al=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Gd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=js()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var _n=new D,va=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?fc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):qf(e,this.data.array)}},_u=new D,e0=new D,t0=new Xe,ci=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_u.subVectors(i,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_u),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t0.getNormalMatrix(e),s=this.coplanarPoint(_u).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},n0=0,qi=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Or,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Fu,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nr=class extends qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yr,aa=new D,vr=new D,Mr=new D,br=new He,oa=new He,$f=new ft,Ao=new D,la=new D,Ro=new D,Vd=new He,yu=new He,Wd=new He,Ma=class extends qt{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new fn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new al(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new va(i,3,0,!1)),yr.setAttribute("uv",new va(i,2,3,!1))}this.geometry=yr,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),$f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-Mr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Co(Ao.set(-.5,-.5,0),Mr,a,vr,s,r),Co(la.set(.5,-.5,0),Mr,a,vr,s,r),Co(Ro.set(.5,.5,0),Mr,a,vr,s,r),Vd.set(0,0),yu.set(1,0),Wd.set(1,1);let o=e.ray.intersectTriangle(Ao,la,Ro,!1,aa);if(o===null&&(Co(la.set(-.5,.5,0),Mr,a,vr,s,r),yu.set(0,1),o=e.ray.intersectTriangle(Ao,Ro,la,!1,aa),o===null))return;let l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Gi.getInterpolation(aa,Ao,la,Ro,Vd,yu,Wd,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Co(n,e,t,i,s,r){br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(oa.x=r*br.x-s*br.y,oa.y=s*br.x+r*br.y):oa.copy(br),n.copy(e),n.x+=oa.x,n.y+=oa.y,n.applyMatrix4($f)}var Hi=new D,vu=new D,Io=new D,Po=new D,ba=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){vu.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Po.copy(this.origin).sub(vu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=Po.dot(this.direction),l=-Po.dot(Io),c=Po.lengthSq(),u=Math.abs(1-a*a),f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=r*u,f>=0)if(h>=-x)if(h<=x){let y=1/u;f*=y,h*=y,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vu).addScaledVector(Io,h),m}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,p=t.z-a.z,d=i.x-a.x,g=i.y-a.y,E=i.z-a.z,M=Math.abs(l),v=Math.abs(c),w=Math.abs(u),_,T,F,I,O,B,q,N,$,J,X,oe;if(M>=v&&M>=w?(F=l,B=f,$=x,oe=d,l>=0?(_=c,T=u,I=h,O=m,q=y,N=p,J=g,X=E):(_=u,T=c,I=m,O=h,q=p,N=y,J=E,X=g)):v>=w?(F=c,B=h,$=y,oe=g,c>=0?(_=u,T=l,I=m,O=f,q=p,N=x,J=E,X=d):(_=l,T=u,I=f,O=m,q=x,N=p,J=d,X=E)):(F=u,B=m,$=p,oe=E,u>=0?(_=l,T=c,I=f,O=h,q=x,N=y,J=d,X=g):(_=c,T=l,I=h,O=f,q=y,N=x,J=g,X=d)),F===0)return null;let Z=_/F,ie=T/F,se=1/F,Pe=I-Z*B,Ye=O-ie*B,ee=q-Z*$,be=N-ie*$,Re=J-Z*oe,Be=X-ie*oe,Se=Re*be-Be*ee,Je=Pe*Be-Ye*Re,zt=ee*Ye-be*Pe;if(s){if(Se<0||Je<0||zt<0)return null}else if((Se<0||Je<0||zt<0)&&(Se>0||Je>0||zt>0))return null;let Ge=Se+Je+zt;if(Ge===0)return null;let yt=se*(Se*B+Je*$+zt*oe);return(Ge>0?yt<0:yt>0)?null:this.at(yt/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qd=new ft,Gs=new ba,Lo=new fs,Xd=new D,Do=new D,No=new D,Uo=new D,Mu=new D,Fo=new D,$d=new D,Oo=new D,bt=class extends qt{constructor(e=new fn,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Mu.fromBufferAttribute(f,e),a?Fo.addScaledVector(Mu,u):Fo.addScaledVector(Mu.sub(t),u))}t.add(Fo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Gs.copy(e.ray).recast(e.near),!(Lo.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Lo,Xd)===null||Gs.origin.distanceToSquared(Xd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&Gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){let p=h[x],d=a[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,v=E;M<v;M+=3){let w=o.getX(M),_=o.getX(M+1),T=o.getX(M+2);s=zo(this,d,e,i,c,u,f,w,_,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=x,d=y;p<d;p+=3){let g=o.getX(p),E=o.getX(p+1),M=o.getX(p+2);s=zo(this,a,e,i,c,u,f,g,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){let p=h[x],d=a[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,v=E;M<v;M+=3){let w=M,_=M+1,T=M+2;s=zo(this,d,e,i,c,u,f,w,_,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,d=y;p<d;p+=3){let g=p,E=p+1,M=p+2;s=zo(this,a,e,i,c,u,f,g,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function i0(n,e,t,i,s,r,a,o){let l;if(e.side===Sn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ss,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:n}}function zo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Do),n.getVertexPosition(l,No),n.getVertexPosition(c,Uo);let u=i0(n,e,t,i,Do,No,Uo,$d);if(u){let f=new D;Gi.getBarycoord($d,Do,No,Uo,f),s&&(u.uv=Gi.getInterpolatedAttribute(s,o,l,c,f,new He)),r&&(u.uv1=Gi.getInterpolatedAttribute(r,o,l,c,f,new He)),a&&(u.normal=Gi.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Gi.getNormal(Do,No,Uo,h.normal),u.face=h,u.barycoord=f}return u}var Ws=class extends bn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ht,u=Ht,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sa=class extends jn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new ft,Yd=new ft,Bo=[],Zd=new Ti,s0=new ft,ca=new bt,ua=new fs,ps=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,s0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sr),Zd.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Zd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sr),ua.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),Yd.multiplyMatrices(i,Sr),ca.matrixWorld=Yd,ca.raycast(e,Bo);for(let a=0,o=Bo.length;a<o;a++){let l=Bo[a];l.instanceId=r,l.object=this,t.push(l)}Bo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(s*this.count),s,this.count,Ll,Qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new fs,r0=new He(.5,.5),ko=new D,ms=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],m=r[7],x=r[8],y=r[9],p=r[10],d=r[11],g=r[12],E=r[13],M=r[14],v=r[15];if(s[0].setComponents(c-a,m-u,d-x,v-g).normalize(),s[1].setComponents(c+a,m+u,d+x,v+g).normalize(),s[2].setComponents(c+o,m+f,d+y,v+E).normalize(),s[3].setComponents(c-o,m-f,d-y,v-E).normalize(),i)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,m-h,d-p,v-M).normalize();else if(s[4].setComponents(c-l,m-h,d-p,v-M).normalize(),t===Kn)s[5].setComponents(c+l,m+h,d+p,v+M).normalize();else if(t===Cr)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=r0.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jd=new ft,ol=class n{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Jd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ms),i[s].setFromProjectionMatrix(Jd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ms),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ea=class extends bn{constructor(e=[],t=Js,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ta=class extends bn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends bn{constructor(e,t,i=ui,s,r,a,o=Ht,l=Ht,c,u=Wi,f=1){if(u!==Wi&&u!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wa=class extends Xi{constructor(e,t=ui,i=Js,s,r,a=Ht,o=Ht,l,c=Wi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gs=class n extends fn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function x(y,p,d,g,E,M,v,w,_,T,F){let I=M/_,O=v/T,B=M/2,q=v/2,N=w/2,$=_+1,J=T+1,X=0,oe=0,Z=new D;for(let ie=0;ie<J;ie++){let se=ie*O-q;for(let Pe=0;Pe<$;Pe++){let Ye=Pe*I-B;Z[y]=Ye*g,Z[p]=se*E,Z[d]=N,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[d]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Pe/_),f.push(1-ie/T),X+=1}}for(let ie=0;ie<T;ie++)for(let se=0;se<_;se++){let Pe=h+se+$*ie,Ye=h+se+$*(ie+1),ee=h+(se+1)+$*(ie+1),be=h+(se+1)+$*ie;l.push(Pe,Ye,be),l.push(Ye,ee,be),oe+=6}o.addGroup(m,oe,F),m+=oe,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ra=class n extends fn{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,m=2*f+h,x=i*2+r,y=s+1,p=new D,d=new D;for(let g=0;g<=x;g++){let E=0,M=0,v=0,w=0;if(g<=i){let F=g/i,I=F*Math.PI/2;M=-u-e*Math.cos(I),v=e*Math.sin(I),w=-e*Math.cos(I),E=F*f}else if(g<=i+r){let F=(g-i)/r;M=-u+F*t,v=e,w=0,E=f+F*h}else{let F=(g-i-r)/i,I=F*Math.PI/2;M=u+e*Math.sin(I),v=e*Math.cos(I),w=e*Math.sin(I),E=f+h+F*f}let _=Math.max(0,Math.min(1,E/m)),T=0;g===0?T=.5/s:g===x&&(T=-.5/s);for(let F=0;F<=s;F++){let I=F/s,O=I*Math.PI*2,B=Math.sin(O),q=Math.cos(O);d.x=-v*q,d.y=M,d.z=v*B,o.push(d.x,d.y,d.z),p.set(-v*q,w,v*B),p.normalize(),l.push(p.x,p.y,p.z),c.push(I+T,_)}if(g>0){let F=(g-1)*y;for(let I=0;I<s;I++){let O=F+I,B=F+I+1,q=g*y+I,N=g*y+I+1;a.push(O,B,q),a.push(B,N,q)}}}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},xs=class n extends fn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,u=new He;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let m=i+f/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qs=class n extends fn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],m=[],x=0,y=[],p=i/2,d=0;g(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(m,2));function g(){let M=new D,v=new D,w=0,_=(t-e)/i;for(let T=0;T<=r;T++){let F=[],I=T/r,O=I*(t-e)+e;for(let B=0;B<=s;B++){let q=B/s,N=q*l+o,$=Math.sin(N),J=Math.cos(N);v.x=O*$,v.y=-I*i+p,v.z=O*J,f.push(v.x,v.y,v.z),M.set($,_,J).normalize(),h.push(M.x,M.y,M.z),m.push(q,1-I),F.push(x++)}y.push(F)}for(let T=0;T<s;T++)for(let F=0;F<r;F++){let I=y[F][T],O=y[F+1][T],B=y[F+1][T+1],q=y[F][T+1];(e>0||F!==0)&&(u.push(I,O,q),w+=3),(t>0||F!==r-1)&&(u.push(O,B,q),w+=3)}c.addGroup(d,w,0),d+=w}function E(M){let v=x,w=new He,_=new D,T=0,F=M===!0?e:t,I=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*I,0),h.push(0,I,0),m.push(.5,.5),x++;let O=x;for(let B=0;B<=s;B++){let N=B/s*l+o,$=Math.cos(N),J=Math.sin(N);_.x=F*J,_.y=p*I,_.z=F*$,f.push(_.x,_.y,_.z),h.push(0,I,0),w.x=$*.5+.5,w.y=J*.5*I+.5,m.push(w.x,w.y),x++}for(let B=0;B<s;B++){let q=v+B,N=O+B;M===!0?u.push(N,N+1,q):u.push(N+1,N,q),T+=3}c.addGroup(d,T,M===!0?1:2),d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ca=class n extends qs{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ll=class n extends fn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let E=new D,M=new D,v=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],E),m(t[w+1],M),m(t[w+2],v),l(E,M,v,g)}function l(g,E,M,v){let w=v+1,_=[];for(let T=0;T<=w;T++){_[T]=[];let F=g.clone().lerp(M,T/w),I=E.clone().lerp(M,T/w),O=w-T;for(let B=0;B<=O;B++)B===0&&T===w?_[T][B]=F:_[T][B]=F.clone().lerp(I,B/O)}for(let T=0;T<w;T++)for(let F=0;F<2*(w-T)-1;F++){let I=Math.floor(F/2);F%2===0?(h(_[T][I+1]),h(_[T+1][I]),h(_[T][I])):(h(_[T][I+1]),h(_[T+1][I+1]),h(_[T+1][I]))}}function c(g){let E=new D;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(g),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){let g=new D;for(let E=0;E<r.length;E+=3){g.x=r[E+0],g.y=r[E+1],g.z=r[E+2];let M=p(g)/2/Math.PI+.5,v=d(g)/Math.PI+.5;a.push(M,1-v)}x(),f()}function f(){for(let g=0;g<a.length;g+=6){let E=a[g+0],M=a[g+2],v=a[g+4],w=Math.max(E,M,v),_=Math.min(E,M,v);w>.9&&_<.1&&(E<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),v<.2&&(a[g+4]+=1))}}function h(g){r.push(g.x,g.y,g.z)}function m(g,E){let M=g*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function x(){let g=new D,E=new D,M=new D,v=new D,w=new He,_=new He,T=new He;for(let F=0,I=0;F<r.length;F+=9,I+=6){g.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),w.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),T.set(a[I+4],a[I+5]),v.copy(g).add(E).add(M).divideScalar(3);let O=p(v);y(w,I+0,g,O),y(_,I+2,E,O),y(T,I+4,M,O)}}function y(g,E,M,v){v<0&&g.x===1&&(a[E]=g.x-1),M.x===0&&M.z===0&&(a[E]=v/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Xs=class n extends ll{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var kn=class n extends fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,m=[],x=[],y=[],p=[];for(let d=0;d<u;d++){let g=d*h-a;for(let E=0;E<c;E++){let M=E*f-r;x.push(M,-g,0),y.push(0,0,1),p.push(E/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){let E=g+c*d,M=g+c*(d+1),v=g+1+c*(d+1),w=g+1+c*d;m.push(E,M,w),m.push(M,v,w)}this.setIndex(m),this.setAttribute("position",new pt(x,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ia=class n extends fn{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,m=new D,x=new He;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let d=r+p/i*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,u.push(x.x,x.y)}f+=h}for(let y=0;y<s;y++){let p=y*(i+1);for(let d=0;d<i;d++){let g=d+p,E=g,M=g+i+1,v=g+i+2,w=g+1;o.push(E,M,w),o.push(M,v,w)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _s=class n extends fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new D,h=new D,m=[],x=[],y=[],p=[];for(let d=0;d<=i;d++){let g=[],E=d/i,M=a+E*o,v=e*Math.cos(M),w=Math.sqrt(e*e-v*v),_=0;d===0&&a===0?_=.5/t:d===i&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let F=T/t,I=s+F*r;f.x=-w*Math.cos(I),f.y=v,f.z=w*Math.sin(I),x.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(F+_,1-E),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){let E=u[d][g+1],M=u[d][g],v=u[d+1][g],w=u[d+1][g+1];(d!==0||a>0)&&m.push(E,M,w),(d!==i-1||l<Math.PI)&&m.push(M,v,w)}this.setIndex(m),this.setAttribute("position",new pt(x,3)),this.setAttribute("normal",new pt(y,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pn=class n extends fn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new D,m=new D,x=new D;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let d=0;d<=s;d++){let g=d/s*r;m.x=(e+t*Math.cos(p))*Math.cos(g),m.y=(e+t*Math.cos(p))*Math.sin(g),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),x.subVectors(m,h).normalize(),u.push(x.x,x.y,x.z),f.push(d/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let d=(s+1)*y+p-1,g=(s+1)*(y-1)+p-1,E=(s+1)*(y-1)+p,M=(s+1)*y+p;l.push(d,g,M),l.push(g,E,M)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Kd(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Kd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Qs(n[t]);for(let s in i)e[s]=i[s]}return e}function Kd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function a0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ih(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Yf={clone:Qs,merge:mn},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cl=class extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ys=class extends qi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ul=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hl=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Er(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ho(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var vs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends vs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tu:r=e,o=2*t-i;break;case wu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:a=e,l=2*i-t;break;case wu:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),y=x*x,p=y*x,d=-h*p+2*h*y-h*x,g=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*x+1,E=(-1-m)*p+(1.5+m)*y+.5*x,M=m*p-m*y;for(let v=0;v!==o;++v)r[v]=d*a[u+v]+g*a[c+v]+E*a[l+v]+M*a[f+v];return r}},fl=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},pl=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends vs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(i-t)/(s-t),y=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*x;return r}let h=o*2,m=e-1;for(let x=0;x!==o;++x){let y=a[c+x],p=a[l+x],d=m*h+x*2,g=f[d],E=f[d+1],M=e*h+x*2,v=u[M],w=u[M+1],_=u0(i,t,g,v,s);r[x]=Zf(_,y,E,w,p)}return r}};function Zf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function c0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function u0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Zf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=c0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ho(e.settings)&&(i.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break;case Su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Wo;case this.InterpolantFactoryMethodBezier:return Su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Ho(this.settings)&&(jd(this.settings.inTangents,e),jd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ho(this.settings)&&(Qd(this.settings.inTangents,e),Qd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Bm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,h=f-i,m=f+i;for(let x=0;x!==i;++x){let y=t[f+x];if(y!==t[h+x]||y!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let m=0;m!==i;++m)t[h+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ho(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Qd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=tl;var Ms=class extends Hn{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=da;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};gl.prototype.ValueTypeName="color";var xl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};xl.prototype.ValueTypeName="number";var _l=class extends vs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)On.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pa=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Hn{constructor(e,t,i){super(e,t,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=da;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};yl.prototype.ValueTypeName="vector";var vl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new vl,Ml=class{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var La=class extends qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Da=class extends La{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bu=new ft,ef=new D,tf=new D,bl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(ef),tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){bu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Cr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Go=new D,Vo=new On,bi=new D,Na=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Vo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Go,Vo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Vo,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new D,nf=new He,sf=new He,vn=class extends Na{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,nf,sf),t.subVectors(sf,nf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(eu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ua=class extends Na{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=class extends bl{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fa=class extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Tr=-90,wr=1,Ur=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(Tr,wr,e,t);s.layers=this.layers,this.add(s);let r=new vn(Tr,wr,e,t);r.layers=this.layers,this.add(r);let a=new vn(Tr,wr,e,t);a.layers=this.layers,this.add(a);let o=new vn(Tr,wr,e,t);o.layers=this.layers,this.add(o);let l=new vn(Tr,wr,e,t);l.layers=this.layers,this.add(l);let c=new vn(Tr,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Sl=class extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Oa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=h0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function h0(){this._document.hidden===!1&&this.reset()}var sh="\\[\\]\\.:\\/",d0=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",f0="[^"+sh.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",rh),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),x0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),_0=new RegExp("^"+p0+m0+g0+x0+"$"),y0=["material","materials","bones","map"],Ru=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){let t=_0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);y0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ru;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BM=new Float32Array(1);var rf=new ft,za=class{constructor(e,t,i=0,s=1/0){this.ray=new ba(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(e,t=!0,i=[]){return Cu(e,this,i,t),i.sort(af),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Cu(e[s],this,i,t);return i.sort(af),i}};function af(n,e){return n.distance-e.distance}function Cu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Cu(r[a],e,t,!0)}}var hh=class hh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};hh.prototype.isMatrix2=!0;var Iu=hh;function ah(n,e,t,i){let s=v0(i);switch(t){case Ju:return n*e;case Ll:return n*e/s.components*s.byteLength;case Dl:return n*e/s.components*s.byteLength;case Es:return n*e*2/s.components*s.byteLength;case Nl:return n*e*2/s.components*s.byteLength;case Ku:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case Ul:return n*e*4/s.components*s.byteLength;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(n,16)*Math.max(e,8)/4;case Fl:case zl:return Math.max(n,8)*Math.max(e,8)/2;case kl:case Hl:case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wa:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qa:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(n){switch(n){case Cn:case Xu:return{byteLength:1,components:1};case Br:case $u:case hi:return{byteLength:2,components:1};case Il:case Pl:return{byteLength:2,components:4};case ui:case Cl:case Qn:return{byteLength:4,components:1};case Yu:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);function _p(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function M0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){let x=f[h],y=f[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,f[h]=y)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){let y=f[m];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:b0,alphahash_pars_fragment:S0,alphamap_fragment:E0,alphamap_pars_fragment:T0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:I0,batching_vertex:P0,begin_vertex:L0,beginnormal_vertex:D0,bsdfs:N0,iridescence_fragment:U0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:k0,color_fragment:H0,color_pars_fragment:G0,color_pars_vertex:V0,color_vertex:W0,common:q0,defaultnormal_vertex:X0,displacementmap_pars_vertex:$0,displacementmap_vertex:Y0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:K0,colorspace_pars_fragment:j0,envmap_fragment:Q0,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:ag,fog_pars_fragment:og,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:hg,lights_pars_begin:dg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:xg,lights_physical_fragment:_g,lights_physical_pars_fragment:yg,lights_fragment_begin:vg,lights_fragment_maps:Mg,lights_fragment_end:bg,lightprobes_pars_fragment:Sg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Ag,map_fragment:Rg,map_pars_fragment:Cg,map_particle_fragment:Ig,map_particle_pars_fragment:Pg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ng,morphcolor_vertex:Ug,morphnormal_vertex:Fg,morphtarget_pars_vertex:Og,morphtarget_vertex:zg,normal_fragment_begin:Bg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:Gg,normal_vertex:Vg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Yg,opaque_fragment:Zg,packing:Jg,premultiplied_alpha_fragment:Kg,project_vertex:jg,dithering_fragment:Qg,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ax,skinbase_vertex:ox,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:hx,specularmap_pars_fragment:dx,tonemapping_fragment:fx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:xx,uv_pars_vertex:_x,uv_vertex:yx,worldpos_vertex:vx,background_vert:Mx,background_frag:bx,backgroundCube_vert:Sx,backgroundCube_frag:Ex,cube_vert:Tx,cube_frag:wx,depth_vert:Ax,depth_frag:Rx,distance_vert:Cx,distance_frag:Ix,equirect_vert:Px,equirect_frag:Lx,linedashed_vert:Dx,linedashed_frag:Nx,meshbasic_vert:Ux,meshbasic_frag:Fx,meshlambert_vert:Ox,meshlambert_frag:zx,meshmatcap_vert:Bx,meshmatcap_frag:kx,meshnormal_vert:Hx,meshnormal_frag:Gx,meshphong_vert:Vx,meshphong_frag:Wx,meshphysical_vert:qx,meshphysical_frag:Xx,meshtoon_vert:$x,meshtoon_frag:Yx,points_vert:Zx,points_frag:Jx,shadow_vert:Kx,shadow_frag:jx,sprite_vert:Qx,sprite_frag:e_},Me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ci={basic:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:mn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:mn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:mn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:mn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:mn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:mn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:mn([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:mn([Me.lights,Me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ci.physical={uniforms:mn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var pc={r:0,b:0,g:0},t_=new ft,yp=new Xe;yp.set(-1,0,0,0,1,0,0,0,1);function n_(n,e,t,i,s,r){let a=new qe(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function m(g){let E=g.isScene===!0?g.background:null;if(E&&E.isTexture){let M=g.backgroundBlurriness>0;E=e.get(E,M)}return E}function x(g){let E=!1,M=m(g);M===null?p(a,o):M&&M.isColor&&(p(M,1),E=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,E){let M=m(E);M&&M.isCubeTexture?(c===void 0&&(c=new bt(new gs(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Qs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yp),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==xt,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bt(new kn(2,2),new wi({name:"BackgroundMaterial",uniforms:Qs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,E){g.getRGB(pc,ih(n)),t.buffers.color.setClear(pc.r,pc.g,pc.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,E=1){a.set(g),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:x,addToRenderList:y,dispose:d}}function i_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(O,B,q,N,$){let J=!1,X=f(O,N,q,B);r!==X&&(r=X,c(r.object)),J=m(O,N,q,$),J&&x(O,N,q,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(O,B,q,N),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function f(O,B,q,N){let $=N.wireframe===!0,J=i[B.id];J===void 0&&(J={},i[B.id]=J);let X=O.isInstancedMesh===!0?O.id:0,oe=J[X];oe===void 0&&(oe={},J[X]=oe);let Z=oe[q.id];Z===void 0&&(Z={},oe[q.id]=Z);let ie=Z[$];return ie===void 0&&(ie=h(l()),Z[$]=ie),ie}function h(O){let B=[],q=[],N=[];for(let $=0;$<t;$++)B[$]=0,q[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:N,object:O,attributes:{},index:null}}function m(O,B,q,N){let $=r.attributes,J=B.attributes,X=0,oe=q.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=$[Z],Pe=J[Z];if(Pe===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Pe=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Pe=O.instanceColor)),se===void 0||se.attribute!==Pe||Pe&&se.data!==Pe.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function x(O,B,q,N){let $={},J=B.attributes,X=0,oe=q.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=J[Z];se===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(se=O.instanceColor));let Pe={};Pe.attribute=se,se&&se.data&&(Pe.data=se.data),$[Z]=Pe,X++}r.attributes=$,r.attributesNum=X,r.index=N}function y(){let O=r.newAttributes;for(let B=0,q=O.length;B<q;B++)O[B]=0}function p(O){d(O,0)}function d(O,B){let q=r.newAttributes,N=r.enabledAttributes,$=r.attributeDivisors;q[O]=1,N[O]===0&&(n.enableVertexAttribArray(O),N[O]=1),$[O]!==B&&(n.vertexAttribDivisor(O,B),$[O]=B)}function g(){let O=r.newAttributes,B=r.enabledAttributes;for(let q=0,N=B.length;q<N;q++)B[q]!==O[q]&&(n.disableVertexAttribArray(q),B[q]=0)}function E(O,B,q,N,$,J,X){X===!0?n.vertexAttribIPointer(O,B,q,$,J):n.vertexAttribPointer(O,B,q,N,$,J)}function M(O,B,q,N){y();let $=N.attributes,J=q.getAttributes(),X=B.defaultAttributeValues;for(let oe in J){let Z=J[oe];if(Z.location>=0){let ie=$[oe];if(ie===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){let se=ie.normalized,Pe=ie.itemSize,Ye=e.get(ie);if(Ye===void 0)continue;let ee=Ye.buffer,be=Ye.type,Re=Ye.bytesPerElement,Be=be===n.INT||be===n.UNSIGNED_INT||ie.gpuType===Cl;if(ie.isInterleavedBufferAttribute){let Se=ie.data,Je=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,zt=ie.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ge=0;Ge<Z.locationSize;Ge++)d(Z.location+Ge,Se.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)p(Z.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Ge=0;Ge<Z.locationSize;Ge++)E(Z.location+Ge,Pe/Z.locationSize,be,se,Je*Re,(zt+Pe/Z.locationSize*Ge)*Re,Be)}else{if(ie.isInstancedBufferAttribute){for(let Se=0;Se<Z.locationSize;Se++)d(Z.location+Se,ie.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<Z.locationSize;Se++)p(Z.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Se=0;Se<Z.locationSize;Se++)E(Z.location+Se,Pe/Z.locationSize,be,se,Pe*Re,Pe/Z.locationSize*Se*Re,Be)}}else if(X!==void 0){let se=X[oe];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Z.location,se);break;case 3:n.vertexAttrib3fv(Z.location,se);break;case 4:n.vertexAttrib4fv(Z.location,se);break;default:n.vertexAttrib1fv(Z.location,se)}}}}g()}function v(){F();for(let O in i){let B=i[O];for(let q in B){let N=B[q];for(let $ in N){let J=N[$];for(let X in J)u(J[X].object),delete J[X];delete N[$]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let B=i[O.id];for(let q in B){let N=B[q];for(let $ in N){let J=N[$];for(let X in J)u(J[X].object),delete J[X];delete N[$]}}delete i[O.id]}function _(O){for(let B in i){let q=i[B];for(let N in q){let $=q[N];if($[O.id]===void 0)continue;let J=$[O.id];for(let X in J)u(J[X].object),delete J[X];delete $[O.id]}}}function T(O){for(let B in i){let q=i[B],N=O.isInstancedMesh===!0?O.id:0,$=q[N];if($!==void 0){for(let J in $){let X=$[J];for(let oe in X)u(X[oe].object),delete X[oe];delete $[J]}delete q[N],Object.keys(q).length===0&&delete i[B]}}}function F(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function s_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function r_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Gn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Cn&&_!==Qn&&!T&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:M,maxSamples:v,samples:w}}function a_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ci,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){let x=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let g=r?0:i,E=g*4,M=d.clippingState||null;l.value=M,M=u(x,h,E,m);for(let v=0;v!==E;++v)M[v]=t[v];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,x){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let d=m+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,M=m;E!==y;++E,M+=4)a.copy(f[E]).applyMatrix4(g,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Ya=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ea(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gs(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ys});r.uniforms.tEquirect.value=t;let a=new bt(s,r),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=Mn),new Ur(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Kf=256,o_=3,l_=20,vp=256,Mp=16,c_=3,u_=new D,h_=new qe,gc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ur(1,10,null),this._boxMesh=new bt(new gs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=u_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,m=l.autoClearDepth,x=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(h_));let p=new Ur(i,s,u);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=m,l.autoClearStencil=x,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Kf,Vf(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===zr?this._setSize(e.image.length===0?Kf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=jf(e,!1,!1),i=Math.log2(e)-o_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=jf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===zr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=d_(),this._integrationMaterial=f_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Mp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-c_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(vp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=p_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function jf(n,e,t){return new Ya(n,{minFilter:$i,generateMipmaps:e,type:hi,colorSpace:fa,depthBuffer:t})}function Za(n,e,t){return new wi({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Sn,blending:Ys,depthTest:!1,depthWrite:!1})}function d_(){return Za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function f_(){return Za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function p_(){return Za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qf(){return Za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ep(){return Za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===wl||m===Al)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let y=new Ya(x.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let m=h.mapping,x=m===wl||m===Al,y=m===Js||m===zr;if(x||y){let p=t.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new gc(n)),p=x?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let g=h.image;return x&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new gc(n)),p=x?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===wl?h.mapping=Js:m===Al&&(h.mapping=zr),h}function l(h){let m=0,x=6;for(let y=0;y<x;y++)h[y]!==void 0&&m++;return m===x}function c(h){let m=h.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function g_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ha("WebGLRenderer: "+i+" extension not supported."),s}}}function x_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(e.remove(y),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function u(x){let y=x.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function f(x){let y=x.index,p=x.attributes.position,d=0;if(p===void 0)return;let g=y!==null?y.array.length:p.array.length/3-1,E=p.count>=65535?ya:_a,M=new E(Math.ceil(g/3)*6,1),v=M.array;if(y!==null){let _=y.array;d=y.version;for(let T=0,F=0;T<g;T+=3){let I=_[T+0],O=_[T+1],B=_[T+2];v[F++]=I,v[F++]=O,v[F++]=O,v[F++]=B,v[F++]=B,v[F++]=I}}else{d=p.version;for(let _=0,T=0;_<g;_+=3){let F=_+0,I=_+1,O=_+2;v[T++]=F,v[T++]=I,v[T++]=I,v[T++]=O,v[T++]=O,v[T++]=F}}M.version=d;let w=r.get(x);w&&e.remove(w),r.set(x,M)}function h(x){let y=r.get(x);if(y){let p=x.index;p!==null&&y.version<p.version&&f(x)}else f(x);return r.get(x)}function m(){for(let x in s){let y=s[x].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:m}}function __(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,f*a,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,m);let y=0;for(let p=0;p<m;p++)y+=h[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function y_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function v_(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],E=0;m===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,v=1;M>e.maxTextureSize&&(v=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*v*4*f),_=new xa(w,M,v,f);_.type=Qn,_.needsUpdate=!0;let T=E*4;for(let I=0;I<f;I++){let O=p[I],B=d[I],q=g[I],N=M*v*4*I;for(let $=0;$<O.count;$++){let J=$*T;m===!0&&(s.fromBufferAttribute(O,$),w[N+J+0]=s.x,w[N+J+1]=s.y,w[N+J+2]=s.z,w[N+J+3]=0),x===!0&&(s.fromBufferAttribute(B,$),w[N+J+4]=s.x,w[N+J+5]=s.y,w[N+J+6]=s.z,w[N+J+7]=0),y===!0&&(s.fromBufferAttribute(q,$),w[N+J+8]=s.x,w[N+J+9]=s.y,w[N+J+10]=s.z,w[N+J+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new He(M,v)},i.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function M_(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var b_={[zu]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Hu]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Wu]:"NEUTRAL_TONE_MAPPING",[Gu]:"CUSTOM_TONE_MAPPING"};function S_(n,e,t,i,s,r){let a=new zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new fn;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));let f=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new bt(u,f),m=new Ua(-1,1,1,-1,0,1),x=null,y=null,p=!1,d,g=null,E=[],M=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),l!==null&&l.setSize(v,w);for(let _=0;_<E.length;_++){let T=E[_];T.setSize&&T.setSize(v,w)}},this.setEffects=function(v){E=v,M=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new zn(w,_,{type:hi,depthBuffer:!1,stencilBuffer:!1}),l=new zn(w,_,{type:hi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&E.some(F=>F.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Xi(w,_),r===!0&&(c.format=Yi,c.type=Ks)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let F=0;F<E.length;F++){let I=E[F];I.setSize&&I.setSize(w,_),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(v,w){if(p||v.toneMapping===Ai&&E.length===0)return!1;if(g=w,w!==null){let _=w.width,T=w.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return M===!1&&v.setRenderTarget(a),d=v.toneMapping,v.toneMapping=Ai,!0},this.hasRenderPass=function(){return M},this.end=function(v,w){v.toneMapping=d,p=!0;let _=a,T=o;for(let F=0;F<E.length;F++){let I=E[F];I.enabled!==!1&&(I.render(v,T,_,w),I.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(x!==v.outputColorSpace||y!==v.toneMapping){x=v.outputColorSpace,y=v.toneMapping,f.defines={},lt.getTransfer(x)===xt&&(f.defines.SRGB_TRANSFER="");let F=b_[y];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(g),v.render(h,m),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var bp=new bn,Sp=new Xi(1,1),Ep=new wa(1),Tp=new xa,wp=new rl,Ap=new Ea,tp=[],np=[],ip=new Float32Array(16),sp=new Float32Array(9),rp=new Float32Array(4);function Hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _c(n,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function A_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function R_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,i))return;rp.set(i),n.uniformMatrix2fv(this.addr,!1,rp),$t(t,i)}}function C_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,i))return;sp.set(i),n.uniformMatrix3fv(this.addr,!1,sp),$t(t,i)}}function I_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,i))return;ip.set(i),n.uniformMatrix4fv(this.addr,!1,ip),$t(t,i)}}function P_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function N_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function yc(n){return n.version===0&&(n.compareFunction=eh,n.needsUpdate=!0),n}function B_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=yc(Sp):r=bp,t.setTexture2D(e||r,s)}function k_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wp,s)}function H_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=yc(Ep):r=Ap,t.setTextureCube(e||r,s)}function G_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tp,s)}function V_(n){switch(n){case 5126:return E_;case 35664:return T_;case 35665:return w_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return I_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return G_}}function W_(n,e){n.uniform1fv(this.addr,e)}function q_(n,e){let t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function X_(n,e){let t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function $_(n,e){let t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function Y_(n,e){let t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Z_(n,e){let t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J_(n,e){let t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function K_(n,e){n.uniform1iv(this.addr,e)}function j_(n,e){n.uniform2iv(this.addr,e)}function Q_(n,e){n.uniform3iv(this.addr,e)}function ey(n,e){n.uniform4iv(this.addr,e)}function ty(n,e){n.uniform1uiv(this.addr,e)}function ny(n,e){n.uniform2uiv(this.addr,e)}function iy(n,e){n.uniform3uiv(this.addr,e)}function sy(n,e){n.uniform4uiv(this.addr,e)}function ry(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yc(Sp):a=bp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ay(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wp,r[a])}function oy(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=yc(Ep):a=Ap;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ly(n,e,t){let i=this.cache,s=e.length,r=_c(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tp,r[a])}function cy(n){switch(n){case 5126:return W_;case 35664:return q_;case 35665:return X_;case 35666:return $_;case 35674:return Y_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return K_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ly}}var ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V_(t.type)}},mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cy(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},dh=/(\w+)(\])?(\[|\.)?/g;function ap(n,e){n.seq.push(e),n.map[e.id]=e}function uy(n,e,t){let i=n.name,s=i.length;for(dh.lastIndex=0;;){let r=dh.exec(i),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ap(t,c===void 0?new ph(o,n,e):new mh(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new gh(o),ap(t,f)),t=f}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);uy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function op(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var hy=37297,dy=0;function fy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var lp=new Xe;function py(n){lt._getMatrix(lp,lt.workingColorSpace,n);let e=`mat3( ${lp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case pa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fy(n.getShaderSource(e),o)}else return r}function my(n,e){let t=py(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gy={[zu]:"Linear",[Bu]:"Reinhard",[ku]:"Cineon",[Hu]:"ACESFilmic",[Vu]:"AgX",[Wu]:"Neutral",[Gu]:"Custom"};function xy(n,e){let t=gy[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mc=new D;function _y(){lt.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function vy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function My(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function $a(n){return n!==""}function up(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var by=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(by,Sy)}function Sy(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xh(t)}var Ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(n){return n.replace(Ey,Ty)}function Ty(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var wy={[$s]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function Ay(n){return wy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ry={[zr]:"ENVMAP_MODE_REFRACTION"};function Cy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iy={[Ou]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Cf]:"ENVMAP_BLENDING_ADD"};function Py(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Iy[n.combine]||"ENVMAP_BLENDING_NONE"}function Ly(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ay(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Cy(t),f=Py(t),h=yy(t),m=vy(r),x=s.createProgram(),y,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($a).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($a).join(`
`),p.length>0&&(p+=`
`)):(y=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),p=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?et.tonemapping_pars_fragment:"",t.toneMapping!==Ai?xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),_y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),a=xh(a),a=up(a,t),a=hp(a,t),o=xh(o),o=up(o,t),o=hp(o,t),a=dp(a),o=dp(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=d+y+a,E=d+p+o,M=op(s,s.VERTEX_SHADER,g),v=op(s,s.FRAGMENT_SHADER,E);s.attachShader(x,M),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(M)||"",q=s.getShaderInfoLog(v)||"",N=O.trim(),$=B.trim(),J=q.trim(),X=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,v);else{let Z=cp(s,M,"vertex"),ie=cp(s,v,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Z+`
`+ie)}else N!==""?We("WebGLProgram: Program Info Log:",N):($===""||J==="")&&(oe=!1);oe&&(I.diagnostics={runnable:X,programLog:N,vertexShader:{log:$,prefix:y},fragmentShader:{log:J,prefix:p}})}s.deleteShader(M),s.deleteShader(v),_=new kr(s,x),T=My(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(x,hy)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=v,this}var Dy=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yh(e),t.set(e,i)),i}},yh=class{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}};function Ny(n){return n===Es||n===Wa||n===qa}function Uy(n,e,t,i,s,r){let a=new Lr,o=new _h,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,F,I,O,B){let q=I.fog,N=O.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||$,J),oe=h[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=ie!==void 0?ie.length:0,Pe=0;N.morphAttributes.position!==void 0&&(Pe=1),N.morphAttributes.normal!==void 0&&(Pe=2),N.morphAttributes.color!==void 0&&(Pe=3);let Ye,ee,be,Re;if(oe){let ve=Ci[oe];Ye=ve.vertexShader,ee=ve.fragmentShader}else{Ye=_.vertexShader,ee=_.fragmentShader;let ve=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,ve,vt),be=ve.id,Re=vt.id}let Be=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Je=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,Ge=!!_.map,yt=!!_.matcap,Et=!!X,rt=Et&&X.isPMREMTexture===!0,sn=!!_.aoMap,Vt=!!_.lightMap,wn=!!_.bumpMap&&_.wireframe===!1,Nt=!!_.normalMap,Mi=!!_.displacementMap,Jt=!!_.emissiveMap,Xn=!!_.metalnessMap,$n=!!_.roughnessMap,Yn=_.anisotropy>0,z=_.clearcoat>0,Zn=_.diffuseRoughness>0,It=_.dispersion>0,Pt=_.retroreflectivity>0,ye=_.iridescence>0,Wt=_.sheen>0,ke=_.transmission>0,$e=Yn&&!!_.anisotropyMap,A=z&&!!_.clearcoatMap,b=z&&!!_.clearcoatNormalMap,G=z&&!!_.clearcoatRoughnessMap,re=Zn&&!!_.diffuseRoughnessMap,ne=ye&&!!_.iridescenceMap,he=ye&&!!_.iridescenceThicknessMap,xe=Wt&&!!_.sheenColorMap,K=Wt&&!!_.sheenRoughnessMap,j=!!_.specularMap,pe=!!_.specularColorMap,L=!!_.specularIntensityMap,te=ke&&!!_.transmissionMap,Y=ke&&!!_.thicknessMap,me=!!_.gradientMap,ce=!!_.alphaMap,de=_.alphaTest>0,Ue=!!_.alphaHash,Qe=!!_.extensions,le=Ai;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(le=n.toneMapping);let Fe=rt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,je={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:ee,defines:_.defines,customVertexShaderID:be,customFragmentShaderID:Re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:zt,batchingColor:zt&&O._colorsTexture!==null,instancing:Je,instancingColor:Je&&O.instanceColor!==null,instancingMorph:Je&&O.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:yt,envMap:Et,envMapMode:Et&&X.mapping,envMapPMREM:rt,envMapMaxLod:rt?Fe.length-1:null,envMapSize:rt?Fe[0].width:null,aoMap:sn,lightMap:Vt,bumpMap:wn,normalMap:Nt,displacementMap:Mi,emissiveMap:Jt,normalMapObjectSpace:Nt&&_.normalMapType===Lf,normalMapTangentSpace:Nt&&_.normalMapType===dc,packedNormalMap:Nt&&_.normalMapType===dc&&Ny(_.normalMap.format),metalnessMap:Xn,roughnessMap:$n,anisotropy:Yn,anisotropyMap:$e,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:Zn,diffuseRoughnessMap:re,dispersion:It,retroreflection:Pt,iridescence:ye,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:Wt,sheenColorMap:xe,sheenRoughnessMap:K,specularMap:j,specularColorMap:pe,specularIntensityMap:L,transmission:ke,transmissionMap:te,thicknessMap:Y,gradientMap:me,opaque:_.transparent===!1&&_.blending===Or&&_.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ue,combine:_.combine,mapUv:Ge&&m(_.map.channel),aoMapUv:sn&&m(_.aoMap.channel),lightMapUv:Vt&&m(_.lightMap.channel),bumpMapUv:wn&&m(_.bumpMap.channel),normalMapUv:Nt&&m(_.normalMap.channel),displacementMapUv:Mi&&m(_.displacementMap.channel),emissiveMapUv:Jt&&m(_.emissiveMap.channel),metalnessMapUv:Xn&&m(_.metalnessMap.channel),roughnessMapUv:$n&&m(_.roughnessMap.channel),anisotropyMapUv:$e&&m(_.anisotropyMap.channel),clearcoatMapUv:A&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(_.sheenRoughnessMap.channel),specularMapUv:j&&m(_.specularMap.channel),specularColorMapUv:pe&&m(_.specularColorMap.channel),specularIntensityMapUv:L&&m(_.specularIntensityMap.channel),transmissionMapUv:te&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:ce&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Nt||Yn),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ge||ce),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:Jt&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||zt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function y(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)T.push(F),T.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(T,_),d(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function d(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function g(_){let T=h[_.type],F;if(T){let I=Ci[T];F=Yf.clone(I.uniforms)}else F=_.uniforms;return F}function E(_,T){let F=u.get(T);return F!==void 0?++F.usedTimes:(F=new Ly(n,T,_,s),c.push(F),u.set(T,F)),F}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:g,acquireProgram:E,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:w}}function Fy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,y,p,d){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:d},n[e]=g):(g.id=h.id,g.object=h,g.geometry=m,g.material=x,g.materialVariant=a(h),g.groupOrder=y,g.renderOrder=h.renderOrder,g.z=p,g.group=d),e++,g}function l(h,m,x,y,p,d,g){g.reversedDepth===!0&&(p=-p);let E=o(h,m,x,y,p,d);x.transmission>0?i.push(E):x.transparent===!0?s.push(E):t.push(E)}function c(h,m,x,y,p,d){let g=o(h,m,x,y,p,d);x.transmission>0?i.unshift(g):x.transparent===!0?s.unshift(g):t.unshift(g)}function u(h,m){t.length>1&&t.sort(h||Oy),i.length>1&&i.sort(m||pp),s.length>1&&s.sort(m||pp)}function f(){for(let h=e,m=n.length;h<m;h++){let x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function zy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new mp,n.set(i,[a])):s>=r.length?(a=new mp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function By(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function ky(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Hy=0;function Gy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vy(n){let e=new By,t=ky(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ft,a=new ft;function o(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,x=0,y=0,p=0,d=0,g=0,E=0,M=0,v=0,w=0,_=0,T=0,F=0,I=0;c.sort(Gy);for(let B=0,q=c.length;B<q;B++){let N=c[B],$=N.color,J=N.intensity,X=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Es?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=$.r*J,f+=$.g*J,h+=$.b*J;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],J);I++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[x]=se,i.sunShadowMap[x]=oe;let Pe=ie.getViewportCount();for(let Ye=0;Ye<Pe;Ye++)i.sunShadowMatrix[y+Ye]=ie.getMatrix(Ye),i.sunShadowCascade[y+Ye]=ie._cascadeData[Ye];y+=Pe,x++}i.sun[m]=Z,m++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=Z,p++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy($).multiplyScalar(J),Z.distance=X,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[g]=Z;let ie=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,ie.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[g]=ie.matrix,N.castShadow){let se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=oe,_++}g++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy($).multiplyScalar(J),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=Z,E++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,se.shadowCameraNear=ie.camera.near,se.shadowCameraFar=ie.camera.far,i.pointShadow[d]=se,i.pointShadowMap[d]=oe,i.pointShadowMatrix[d]=N.shadow.matrix,w++}i.point[d]=Z,d++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(J),Z.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[M]=Z,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let O=i.hash;(O.sunLength!==m||O.directionalLength!==p||O.pointLength!==d||O.spotLength!==g||O.rectAreaLength!==E||O.hemiLength!==M||O.numSunShadows!==x||O.numDirectionalShadows!==v||O.numPointShadows!==w||O.numSpotShadows!==_||O.numSpotMaps!==T||O.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=E,i.point.length=d,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-F,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=I,O.sunLength=m,O.directionalLength=p,O.pointLength=d,O.spotLength=g,O.rectAreaLength=E,O.hemiLength=M,O.numSunShadows=x,O.numDirectionalShadows=v,O.numPointShadows=w,O.numSpotShadows=_,O.numSpotMaps=T,O.numLightProbes=I,i.version=Hy++)}function l(c,u){let f=0,h=0,m=0,x=0,y=0,p=0,d=u.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){let M=c[g];if(M.isSunLight){let v=i.sun[f];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(d),f++}else if(M.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),h++}else if(M.isSpotLight){let v=i.spot[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),x++}else if(M.isRectAreaLight){let v=i.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let v=i.point[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:i}}function gp(n){let e=new Vy(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gp(n),e.set(s,[o])):r>=a.length?(o=new gp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$y=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Yy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],xp=new ft,Xa=new D,fh=new D;function Zy(n,e,t){let i=new ms,s=new He,r=new He,a=new Lt,o=new ul,l=new hl,c={},u=t.maxTextureSize,f={[Ss]:Sn,[Sn]:Ss,[Rn]:Rn},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:qy,fragmentShader:Xy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let x=new fn;x.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let d=this.type;this.render=function(w,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===cf&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);let F=n.getRenderTarget(),I=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ys),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let q=d!==this.type;q&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach($=>$.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,$=w.length;N<$;N++){let J=w[N],X=J.shadow;if(X===void 0){We("WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let oe=X.getFrameExtents();s.multiply(oe),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,X.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Fr){if(J.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new zn(s.x,s.y,{format:Es,type:hi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),X.map.texture.name=J.name+".shadowMap",X.map.depthTexture=new Xi(s.x,s.y,Qn),X.map.depthTexture.name=J.name+".shadowMapDepth",X.map.depthTexture.format=Wi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ht,X.map.depthTexture.magFilter=Ht}else J.isPointLight?(X.map=new Ya(s.x),X.map.depthTexture=new wa(s.x,ui)):(X.map=new zn(s.x,s.y),X.map.depthTexture=new Xi(s.x,s.y,ui)),X.map.depthTexture.name=J.name+".shadowMap",X.map.depthTexture.format=Wi,this.type===$s?(X.map.depthTexture.compareFunction=Z?Qu:ju,X.map.depthTexture.minFilter=Mn,X.map.depthTexture.magFilter=Mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ht,X.map.depthTexture.magFilter=Ht);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ie=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();J.isPointLight!==!0&&X.updateMatrices(J,T);let se=X.camera.layers.mask&4294967294?X.camera.layers:T.layers;for(let Pe=0;Pe<ie;Pe++){let Ye=X.getCamera(Pe);if(J.isPointLight){let ee=X.camera,be=X.matrix,Re=J.distance||ee.far;Re!==ee.far&&(ee.far=Re,ee.updateProjectionMatrix()),Xa.setFromMatrixPosition(J.matrixWorld),ee.position.copy(Xa),fh.copy(ee.position),fh.add($y[Pe]),ee.up.copy(Yy[Pe]),ee.lookAt(fh),ee.updateMatrixWorld(),be.makeTranslation(-Xa.x,-Xa.y,-Xa.z),xp.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(xp,ee.coordinateSystem,ee.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,Pe),n.clear();else{Pe===0&&(n.setRenderTarget(X.map),n.clear());let ee=X.getViewport(Pe);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),B.viewport(a)}i=X.getFrustum(Pe),M(_,T,Ye,J,se,this.type)}X.isPointLightShadow!==!0&&this.type===Fr&&g(X,T),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(F,I,O)};function g(w,_){let T=e.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new zn(s.x,s.y,{format:Es,type:hi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,T,h,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,T,m,y,null)}function E(w,_,T,F){let I=null,O=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)I=O;else if(I=T.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=I.uuid,q=_.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let $=N[q];$===void 0&&($=I.clone(),N[q]=$,_.addEventListener("dispose",v)),I=$}if(I.visible=_.visible,I.wireframe=_.wireframe,F===Fr?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:f[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=n.properties.get(I);B.light=T}return I}function M(w,_,T,F,I,O){if(w.visible===!1)return;if(w.layers.test(I)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Fr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let N=e.update(w),$=w.material;if(Array.isArray($)){let J=N.groups;for(let X=0,oe=J.length;X<oe;X++){let Z=J[X],ie=$[Z.materialIndex];if(ie&&ie.visible){let se=E(w,ie,F,O);w.onBeforeShadow(n,w,_,T,N,se,Z),n.renderBufferDirect(T,null,N,se,w,Z),w.onAfterShadow(n,w,_,T,N,se,Z)}}}else if($.visible){let J=E(w,$,F,O);w.onBeforeShadow(n,w,_,T,N,J,null),n.renderBufferDirect(T,null,N,J,w,null),w.onAfterShadow(n,w,_,T,N,J,null)}}let q=w.children;for(let N=0,$=q.length;N<$;N++)M(q[N],_,T,F,I,O)}function v(w){w.target.removeEventListener("dispose",v);for(let T in c){let F=c[T],I=w.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}}function Jy(n,e){function t(){let L=!1,te=new Lt,Y=null,me=new Lt(0,0,0,0);return{setMask:function(ce){Y!==ce&&!L&&(n.colorMask(ce,ce,ce,ce),Y=ce)},setLocked:function(ce){L=ce},setClear:function(ce,de,Ue,Qe,le){le===!0&&(ce*=Qe,de*=Qe,Ue*=Qe),te.set(ce,de,Ue,Qe),me.equals(te)===!1&&(n.clearColor(ce,de,Ue,Qe),me.copy(te))},reset:function(){L=!1,Y=null,me.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,Y=null,me=null,ce=null;return{setReversed:function(de){if(te!==de){let Ue=e.get("EXT_clip_control");de?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),te=de;let Qe=ce;ce=null,this.setClear(Qe)}},getReversed:function(){return te},setTest:function(de){de?Se(n.DEPTH_TEST):Je(n.DEPTH_TEST)},setMask:function(de){Y!==de&&!L&&(n.depthMask(de),Y=de)},setFunc:function(de){if(te&&(de=Gf[de]),me!==de){switch(de){case Xo:n.depthFunc(n.NEVER);break;case $o:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Jo:n.depthFunc(n.GEQUAL);break;case Ko:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=de}},setLocked:function(de){L=de},setClear:function(de){ce!==de&&(ce=de,te&&(de=1-de),n.clearDepth(de))},reset:function(){L=!1,Y=null,me=null,ce=null,te=!1}}}function s(){let L=!1,te=null,Y=null,me=null,ce=null,de=null,Ue=null,Qe=null,le=null;return{setTest:function(Fe){L||(Fe?Se(n.STENCIL_TEST):Je(n.STENCIL_TEST))},setMask:function(Fe){te!==Fe&&!L&&(n.stencilMask(Fe),te=Fe)},setFunc:function(Fe,je,ve){(Y!==Fe||me!==je||ce!==ve)&&(n.stencilFunc(Fe,je,ve),Y=Fe,me=je,ce=ve)},setOp:function(Fe,je,ve){(de!==Fe||Ue!==je||Qe!==ve)&&(n.stencilOp(Fe,je,ve),de=Fe,Ue=je,Qe=ve)},setLocked:function(Fe){L=Fe},setClear:function(Fe){le!==Fe&&(n.clearStencil(Fe),le=Fe)},reset:function(){L=!1,te=null,Y=null,me=null,ce=null,de=null,Ue=null,Qe=null,le=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},f={},h={},m=new WeakMap,x=[],y=null,p=!1,d=null,g=null,E=null,M=null,v=null,w=null,_=null,T=new qe(0,0,0),F=0,I=!1,O=null,B=null,q=null,N=null,$=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,oe=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=oe>=2);let ie=null,se={},Pe=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),ee=new Lt().fromArray(Pe),be=new Lt().fromArray(Ye);function Re(L,te,Y,me){let ce=new Uint8Array(4),de=n.createTexture();n.bindTexture(L,de),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<Y;Ue++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(te+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return de}let Be={};Be[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),a.setFunc(Rr),wn(!1),Nt(Pu),Se(n.CULL_FACE),sn(Ys);function Se(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Je(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function zt(L,te){return h[L]!==te?(n.bindFramebuffer(L,te),h[L]=te,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ge(L,te){let Y=x,me=!1;if(L){Y=m.get(te),Y===void 0&&(Y=[],m.set(te,Y));let ce=L.textures;if(Y.length!==ce.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ue=ce.length;de<Ue;de++)Y[de]=n.COLOR_ATTACHMENT0+de;Y.length=ce.length,me=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,me=!0);me&&n.drawBuffers(Y)}function yt(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Et={[Zs]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};Et[ff]=n.MIN,Et[pf]=n.MAX;let rt={[mf]:n.ZERO,[gf]:n.ONE,[xf]:n.SRC_COLOR,[Uu]:n.SRC_ALPHA,[Sf]:n.SRC_ALPHA_SATURATE,[Mf]:n.DST_COLOR,[yf]:n.DST_ALPHA,[_f]:n.ONE_MINUS_SRC_COLOR,[Fu]:n.ONE_MINUS_SRC_ALPHA,[bf]:n.ONE_MINUS_DST_COLOR,[vf]:n.ONE_MINUS_DST_ALPHA,[Ef]:n.CONSTANT_COLOR,[Tf]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[Af]:n.ONE_MINUS_CONSTANT_ALPHA};function sn(L,te,Y,me,ce,de,Ue,Qe,le,Fe){if(L===Ys){p===!0&&(Je(n.BLEND),p=!1);return}if(p===!1&&(Se(n.BLEND),p=!0),L!==uf){if(L!==d||Fe!==I){if((g!==Zs||v!==Zs)&&(n.blendEquation(n.FUNC_ADD),g=Zs,v=Zs),Fe)switch(L){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lu:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Du:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}E=null,M=null,w=null,_=null,T.set(0,0,0),F=0,d=L,I=Fe}return}ce=ce||te,de=de||Y,Ue=Ue||me,(te!==g||ce!==v)&&(n.blendEquationSeparate(Et[te],Et[ce]),g=te,v=ce),(Y!==E||me!==M||de!==w||Ue!==_)&&(n.blendFuncSeparate(rt[Y],rt[me],rt[de],rt[Ue]),E=Y,M=me,w=de,_=Ue),(Qe.equals(T)===!1||le!==F)&&(n.blendColor(Qe.r,Qe.g,Qe.b,le),T.copy(Qe),F=le),d=L,I=!1}function Vt(L,te){L.side===Rn?Je(n.CULL_FACE):Se(n.CULL_FACE);let Y=L.side===Sn;te&&(Y=!Y),wn(Y),L.blending===Or&&L.transparent===!1?sn(Ys):sn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Jt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):Je(n.SAMPLE_ALPHA_TO_COVERAGE)}function wn(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function Nt(L){L!==of?(Se(n.CULL_FACE),L!==B&&(L===Pu?n.cullFace(n.BACK):L===lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Je(n.CULL_FACE),B=L}function Mi(L){L!==q&&(X&&n.lineWidth(L),q=L)}function Jt(L,te,Y){L?(Se(n.POLYGON_OFFSET_FILL),(N!==te||$!==Y)&&(N=te,$=Y,a.getReversed()&&(te=-te,Y=-Y),n.polygonOffset(te,Y))):Je(n.POLYGON_OFFSET_FILL)}function Xn(L){L?Se(n.SCISSOR_TEST):Je(n.SCISSOR_TEST)}function $n(L){L===void 0&&(L=n.TEXTURE0+J-1),ie!==L&&(n.activeTexture(L),ie=L)}function Yn(L,te,Y){Y===void 0&&(ie===null?Y=n.TEXTURE0+J-1:Y=ie);let me=se[Y];me===void 0&&(me={type:void 0,texture:void 0},se[Y]=me),(me.type!==L||me.texture!==te)&&(ie!==Y&&(n.activeTexture(Y),ie=Y),n.bindTexture(L,te||Be[L]),me.type=L,me.texture=te)}function z(){let L=se[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Zn(){try{n.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function It(){try{n.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Pt(){try{n.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ye(){try{n.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Wt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function $e(){try{n.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function A(){try{n.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function b(){try{n.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function G(){try{n.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function re(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function ne(L,te){f[L]!==te&&(n.pixelStorei(L,te),f[L]=te)}function he(L){ee.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function xe(L){be.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function K(L,te){let Y=c.get(te);Y===void 0&&(Y=new WeakMap,c.set(te,Y));let me=Y.get(L);me===void 0&&(me=n.getUniformBlockIndex(te,L.name),n.uniformBlockBinding(te,me,me),Y.set(L,me))}function j(L,te,Y){let ce=c.get(te).get(L);l[ce]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ce,Y),l[ce]=Y)}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ie=null,se={},h={},l={},m=new WeakMap,x=[],y=null,p=!1,d=null,g=null,E=null,M=null,v=null,w=null,_=null,T=new qe(0,0,0),F=0,I=!1,O=null,B=null,q=null,N=null,$=null,ee.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Je,bindFramebuffer:zt,drawBuffers:Ge,useProgram:yt,setBlending:sn,setMaterial:Vt,setFlipSided:wn,setCullFace:Nt,setLineWidth:Mi,setPolygonOffset:Jt,setScissorTest:Xn,activeTexture:$n,bindTexture:Yn,unbindTexture:z,compressedTexImage2D:Zn,compressedTexImage3D:It,texImage2D:b,texImage3D:G,pixelStorei:ne,getParameter:re,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:$e,texStorage3D:A,texSubImage2D:Pt,texSubImage3D:ye,compressedTexSubImage2D:Wt,compressedTexSubImage3D:ke,scissor:he,viewport:xe,reset:pe}}function Ky(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,f=new Set,h,m=new WeakMap,x=new Set,y=new FinalizationRegistry(A=>x.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(A,b){return p?new OffscreenCanvas(A,b):ma("canvas")}function g(A,b,G){let re=1,ne=$e(A);if((ne.width>G||ne.height>G)&&(re=G/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let he=Math.floor(re*ne.width),xe=Math.floor(re*ne.height);h===void 0&&(h=d(he,xe));let K=b?d(he,xe):h;return K.width=he,K.height=xe,K.getContext("2d").drawImage(A,0,0,he,xe),We("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+xe+")."),K}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,b,G,re,ne,he=!1){if(A!==null){if(n[A]!==void 0)return n[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;re&&(xe=e.get("EXT_texture_norm16"),xe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&xe&&(K=xe.R16_EXT),G===n.SHORT&&xe&&(K=xe.R16_SNORM_EXT)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),b===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&xe&&(K=xe.RG16_EXT),G===n.SHORT&&xe&&(K=xe.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_SHORT&&xe&&(K=xe.RGB16_EXT),G===n.SHORT&&xe&&(K=xe.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){let j=he?pa:lt.getTransfer(ne);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=j===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&xe&&(K=xe.RGBA16_EXT),G===n.SHORT&&xe&&(K=xe.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,b){let G;return A?b===null||b===ui||b===Ks?G=n.DEPTH24_STENCIL8:b===Qn?G=n.DEPTH32F_STENCIL8:b===Br&&(G=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ui||b===Ks?G=n.DEPTH_COMPONENT24:b===Qn?G=n.DEPTH_COMPONENT32F:b===Br&&(G=n.DEPTH_COMPONENT16),G}function T(A,b){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function F(A){let b=new WeakRef(A);i.get(A).__ref=b,x.add(b),y.register(A,b,b)}function I(A){let b=i.get(A).__ref;b!==void 0&&(x.delete(b),y.unregister(b))}function O(A){q(A.target)}function B(A){N(A.target)}function q(A){A.removeEventListener("dispose",O),I(A),J(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function N(A){A.removeEventListener("dispose",B),I(A),oe(A)}function $(){for(let A of x){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?N(b):q(b))}x.clear(),f.clear()}function J(A){let b=i.get(A);if(b.__webglInit===void 0)return;let G=A.source,re=m.get(G);if(re){let ne=re[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&X(A),Object.keys(re).length===0&&m.delete(G)}i.remove(A)}function X(A){let b=i.get(A);n.deleteTexture(b.__webglTexture);let G=A.source,re=m.get(G);delete re[b.__cacheKey],a.memory.textures--}function oe(A){let b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&q(G),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let he=0;he<b.__webglFramebuffer[ne].length;he++)n.deleteFramebuffer(b.__webglFramebuffer[ne][he]);else n.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ne]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let re=A.textures;for(let ne=0,he=re.length;ne<he;ne++){let xe=i.get(re[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(re[ne])}i.remove(A)}let Z=0;function ie(){Z=0}function se(){return Z}function Pe(A){Z=A}function Ye(){let A=Z;return A>=s.maxTextures&&We("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}function ee(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function be(A,b){let G=i.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let re=A.image;if(re===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(G,A,b);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function Re(A,b){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Vt(G,A,b);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function Be(A,b){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Vt(G,A,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function Se(A,b){let G=i.get(A);if(A.version>0&&G.__version!==A.version){wn(G,A,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let Je={[Qo]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},zt={[Ht]:n.NEAREST,[If]:n.NEAREST_MIPMAP_NEAREST,[Ba]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Rl]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ge={[Nf]:n.NEVER,[eh]:n.ALWAYS,[Uf]:n.LESS,[ju]:n.LEQUAL,[Ff]:n.EQUAL,[Qu]:n.GEQUAL,[Of]:n.GREATER,[zf]:n.NOTEQUAL};function yt(A,b){if(b.type===Qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===Rl||b.magFilter===Ba||b.magFilter===$i||b.minFilter===Mn||b.minFilter===Rl||b.minFilter===Ba||b.minFilter===$i)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Je[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Je[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Je[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,zt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,zt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ht||b.minFilter!==Ba&&b.minFilter!==$i||b.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Et(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",O),F(b));let re=b.source,ne=m.get(re);ne===void 0&&(ne={},m.set(re,ne));let he=ee(b);if(he!==A.__cacheKey){ne[he]===void 0&&(ne[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[he].usedTimes++;let xe=ne[A.__cacheKey];xe!==void 0&&(ne[A.__cacheKey].usedTimes--,xe.usedTimes===0&&X(b)),A.__cacheKey=he,A.__webglTexture=ne[he].texture}return G}function rt(A,b,G){return Math.floor(Math.floor(A/G)/b)}function sn(A,b,G,re){let he=A.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,re,b.data);else{he.sort((L,te)=>L.start-te.start);let xe=0;for(let L=1;L<he.length;L++){let te=he[xe],Y=he[L],me=te.start+te.count,ce=rt(Y.start,b.width,4),de=rt(te.start,b.width,4);Y.start<=me+1&&ce===de&&rt(Y.start+Y.count-1,b.width,4)===ce?te.count=Math.max(te.count,Y.start+Y.count-te.start):(++xe,he[xe]=Y)}he.length=xe+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let L=0,te=he.length;L<te;L++){let Y=he[L],me=Math.floor(Y.start/4),ce=Math.ceil(Y.count/4),de=me%b.width,Ue=Math.floor(me/b.width),Qe=ce,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(n.TEXTURE_2D,0,de,Ue,Qe,le,G,re,b.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Vt(A,b,G){let re=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=n.TEXTURE_3D);let ne=Et(A,b),he=b.source;t.bindTexture(re,A.__webglTexture,n.TEXTURE0+G);let xe=i.get(he);if(he.version!==xe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=lt.getPrimaries(lt.workingColorSpace),Fe=b.colorSpace===Zi?null:lt.getPrimaries(b.colorSpace),je=b.colorSpace===Zi||le===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let j=g(b.image,!1,s.maxTextureSize);j=ke(b,j);let pe=r.convert(b.format,b.colorSpace),L=r.convert(b.type),te=w(b.internalFormat,pe,L,b.normalized,b.colorSpace,b.isVideoTexture);yt(re,b);let Y,me=b.mipmaps,ce=b.isVideoTexture!==!0,de=xe.__version===void 0||ne===!0,Ue=he.dataReady,Qe=T(b,j);if(b.isDepthTexture)te=_(b.format===Yi,b.type),de&&(ce?t.texStorage2D(n.TEXTURE_2D,1,te,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,te,j.width,j.height,0,pe,L,null));else if(b.isDataTexture)if(me.length>0){ce&&de&&t.texStorage2D(n.TEXTURE_2D,Qe,te,me[0].width,me[0].height);for(let le=0,Fe=me.length;le<Fe;le++)Y=me[le],ce?Ue&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(n.TEXTURE_2D,le,te,Y.width,Y.height,0,pe,L,Y.data);b.generateMipmaps=!1}else ce?(de&&t.texStorage2D(n.TEXTURE_2D,Qe,te,j.width,j.height),Ue&&sn(b,j,pe,L)):t.texImage2D(n.TEXTURE_2D,0,te,j.width,j.height,0,pe,L,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,te,me[0].width,me[0].height,j.depth);for(let le=0,Fe=me.length;le<Fe;le++)if(Y=me[le],b.format!==Gn)if(pe!==null)if(ce){if(Ue)if(b.layerUpdates.size>0){let je=ah(Y.width,Y.height,b.format,b.type);for(let ve of b.layerUpdates){let vt=Y.data.subarray(ve*je/Y.data.BYTES_PER_ELEMENT,(ve+1)*je/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ve,Y.width,Y.height,1,pe,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,j.depth,pe,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,te,Y.width,Y.height,j.depth,0,Y.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,j.depth,pe,L,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,te,Y.width,Y.height,j.depth,0,pe,L,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ce&&de&&t.texStorage2D(n.TEXTURE_2D,Qe,te,me[0].width,me[0].height);for(let le=0,Fe=me.length;le<Fe;le++)Y=me[le],b.format!==Gn?pe!==null?ce?Ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,pe,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,le,te,Y.width,Y.height,0,Y.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ue&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(n.TEXTURE_2D,le,te,Y.width,Y.height,0,pe,L,Y.data)}else if(b.isDataArrayTexture)if(ce){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,te,j.width,j.height,j.depth),Ue)if(b.layerUpdates.size>0){let le=ah(j.width,j.height,b.format,b.type);for(let Fe of b.layerUpdates){let je=j.data.subarray(Fe*le/j.data.BYTES_PER_ELEMENT,(Fe+1)*le/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Fe,j.width,j.height,1,pe,L,je)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,L,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,j.width,j.height,j.depth,0,pe,L,j.data);else if(b.isData3DTexture)ce?(de&&t.texStorage3D(n.TEXTURE_3D,Qe,te,j.width,j.height,j.depth),Ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,L,j.data)):t.texImage3D(n.TEXTURE_3D,0,te,j.width,j.height,j.depth,0,pe,L,j.data);else if(b.isFramebufferTexture){if(de)if(ce)t.texStorage2D(n.TEXTURE_2D,Qe,te,j.width,j.height);else{let le=j.width,Fe=j.height;for(let je=0;je<Qe;je++)t.texImage2D(n.TEXTURE_2D,je,te,le,Fe,0,pe,L,null),le>>=1,Fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),j.parentNode!==le){le.appendChild(j),f.add(b),le.onpaint=Fe=>{let je=Fe.changedElements;for(let ve of f)je.includes(ve.image)&&(ve.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let je=n.RGBA,ve=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,ve,vt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(ce&&de){let le=$e(me[0]);t.texStorage2D(n.TEXTURE_2D,Qe,te,le.width,le.height)}for(let le=0,Fe=me.length;le<Fe;le++)Y=me[le],ce?Ue&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe,L,Y):t.texImage2D(n.TEXTURE_2D,le,te,pe,L,Y);b.generateMipmaps=!1}else if(ce){if(de){let le=$e(j);t.texStorage2D(n.TEXTURE_2D,Qe,te,le.width,le.height)}Ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,L,j)}else t.texImage2D(n.TEXTURE_2D,0,te,pe,L,j);E(b)&&b.mipmapsAutoUpdate===!0&&M(re),xe.__version=he.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function wn(A,b,G){if(b.image.length!==6)return;let re=Et(A,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let he=i.get(ne);if(ne.version!==he.__version||re===!0){t.activeTexture(n.TEXTURE0+G);let xe=lt.getPrimaries(lt.workingColorSpace),K=b.colorSpace===Zi?null:lt.getPrimaries(b.colorSpace),j=b.colorSpace===Zi||xe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let pe=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,te=[];for(let ve=0;ve<6;ve++)!pe&&!L?te[ve]=g(b.image[ve],!0,s.maxCubemapSize):te[ve]=L?b.image[ve].image:b.image[ve],te[ve]=ke(b,te[ve]);let Y=te[0],me=r.convert(b.format,b.colorSpace),ce=r.convert(b.type),de=w(b.internalFormat,me,ce,b.normalized,b.colorSpace),Ue=b.isVideoTexture!==!0,Qe=he.__version===void 0||re===!0,le=ne.dataReady,Fe=T(b,Y);yt(n.TEXTURE_CUBE_MAP,b);let je;if(b.isDepthTexture){if(de=_(b.format===Yi,b.type),Qe)if(Ue)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,de,Y.width,Y.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,Y.width,Y.height,0,me,ce,null)}else if(pe){Ue&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,de,Y.width,Y.height);for(let ve=0;ve<6;ve++){je=te[ve].mipmaps;for(let vt=0;vt<je.length;vt++){let Kt=je[vt];b.format!==Gn?me!==null?Ue?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,0,0,Kt.width,Kt.height,me,Kt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,de,Kt.width,Kt.height,0,Kt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,0,0,Kt.width,Kt.height,me,ce,Kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,de,Kt.width,Kt.height,0,me,ce,Kt.data)}}}else{if(je=b.mipmaps,Ue&&Qe){je.length>0&&Fe++;let ve=$e(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,de,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(L){Ue?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,te[ve].width,te[ve].height,me,ce,te[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,te[ve].width,te[ve].height,0,me,ce,te[ve].data);for(let vt=0;vt<je.length;vt++){let ss=je[vt].image[ve].image;Ue?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,0,0,ss.width,ss.height,me,ce,ss.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,de,ss.width,ss.height,0,me,ce,ss.data)}}else{Ue?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,me,ce,te[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,me,ce,te[ve]);for(let vt=0;vt<je.length;vt++){let Kt=je[vt];Ue?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,0,0,me,ce,Kt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,de,me,ce,Kt.image[ve])}}}E(b)&&b.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),he.__version=ne.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Nt(A,b,G,re,ne,he){let xe=r.convert(G.format,G.colorSpace),K=r.convert(G.type),j=w(G.internalFormat,xe,K,G.normalized,G.colorSpace),pe=i.get(b),L=i.get(G);if(L.__renderTarget=b,!pe.__hasExternalTextures){let te=Math.max(1,b.width>>he),Y=Math.max(1,b.height>>he);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,j,te,Y,b.depth,0,xe,K,null):t.texImage2D(ne,he,j,te,Y,0,xe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ye(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,L.__webglTexture,0,Pt(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,L.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mi(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){let re=b.depthTexture,ne=re&&re.isDepthTexture?re.type:null,he=_(b.stencilBuffer,ne),xe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(b),he,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(b),he,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,he,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,A)}else{let re=b.textures;for(let ne=0;ne<re.length;ne++){let he=re[ne],xe=r.convert(he.format,he.colorSpace),K=r.convert(he.type),j=w(he.internalFormat,xe,K,he.normalized,he.colorSpace);ye(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(b),j,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(b),j,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(A,b,G){let re=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(b.depthTexture);ne.__renderTarget=b;let he=re?b.depthTexture.image[0]:b.depthTexture.image;(!ne.__webglTexture||he.width!==b.width||he.height!==b.height)&&(he.width=b.width,he.height=b.height,b.depthTexture.needsUpdate=!0),re?Se(b.depthTexture,0):be(b.depthTexture,0);let xe=ne.__webglTexture,K=Pt(b),j=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,pe=b.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Wi)ye(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,j,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,pe,j,xe,0);else if(b.depthTexture.format===Yi)ye(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,j,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,pe,j,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xn(A){let b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let re=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){let ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=re}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let re=0;re<6;re++)Jt(b.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Jt(b.__webglFramebuffer[0],A,0):Jt(b.__webglFramebuffer,A,0);else if(G){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=n.createRenderbuffer(),Mi(b.__webglDepthbuffer[re],A,!1);else{let ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,he)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Mi(b.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $n(A,b,G){let re=i.get(A);b!==void 0&&Nt(re.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Xn(A)}function Yn(A){let b=A.texture,G=i.get(A),re=i.get(b);A.addEventListener("dispose",B),F(A);let ne=A.textures,he=A.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=b.version,a.memory.textures++),he){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let j=0;j<b.mipmaps.length;j++)G.__webglFramebuffer[K][j]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(xe)for(let K=0,j=ne.length;K<j;K++){let pe=i.get(ne[K]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ye(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){let j=ne[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let pe=r.convert(j.format,j.colorSpace),L=r.convert(j.type),te=w(j.internalFormat,pe,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),Y=Pt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Mi(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),yt(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Nt(G.__webglFramebuffer[K][j],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Nt(G.__webglFramebuffer[K],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(b)?M(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let K=0,j=ne.length;K<j;K++){let pe=ne[K],L=i.get(pe),te=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),yt(te,pe),Nt(G.__webglFramebuffer,A,pe,n.COLOR_ATTACHMENT0+K,te,0),E(pe)&&M(te)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,re.__webglTexture),yt(K,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Nt(G.__webglFramebuffer[j],A,b,n.COLOR_ATTACHMENT0,K,j);else Nt(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,K,0);E(b)?M(K):b.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Xn(A)}function z(A){let b=A.textures;for(let G=0,re=b.length;G<re;G++){let ne=b[G];if(E(ne)&&ne.mipmapsAutoUpdate===!0){let he=v(A),xe=i.get(ne).__webglTexture;t.bindTexture(he,xe),M(he),t.unbindTexture()}}}let Zn=[];function It(A){if(A.samples>0){if(ye(A)===!1){let b=A.textures,G=A.width,re=A.height,ne=n.COLOR_BUFFER_BIT,he=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),K=b.length>1;if(K)for(let pe=0;pe<b.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);let L=i.get(b[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,G,re,0,0,G,re,ne,n.NEAREST),l===!0&&(Zn.length=0,Zn.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Zn.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let pe=0;pe<b.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);let L=i.get(b[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Pt(A){return Math.min(s.maxSamples,A.samples)}function ye(A){let b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(A){let b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function ke(A,b){let G=A.colorSpace,re=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==fa&&G!==Zi&&(lt.getTransfer(G)===xt?(re!==Gn||ne!==Cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",G)),b}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ye,this.resetTextureUnits=ie,this.getTextureUnits=se,this.setTextureUnits=Pe,this.setTexture2D=be,this.setTexture2DArray=Re,this.setTexture3D=Be,this.setTextureCube=Se,this.rebindTextures=$n,this.setupRenderTarget=Yn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Xn,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ye,this.dispose=$}function jy(n,e){function t(i,s=Zi){let r,a=lt.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xu)return n.BYTE;if(i===$u)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===Ju)return n.ALPHA;if(i===Ku)return n.RGB;if(i===Gn)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Ll)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===ka||i===Ha||i===Ga||i===Va)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Ol||i===zl||i===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===Hl||i===Gl||i===Vl||i===Wl||i===Wa||i===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kl||i===Hl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wa)return r.COMPRESSED_RG11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xl||i===$l||i===Yl||i===Zl||i===Jl||i===Kl||i===jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===oc||i===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===uc||i===qa||i===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wi({vertexShader:Qy,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null,y=typeof XRWebGLBinding<"u",p=new vh,d={},g=t.getContextAttributes(),E=null,M=null,v=[],w=[],_=new He,T=null,F=null,I=new vn;I.viewport=new Lt;let O=new vn;O.viewport=new Lt;let B=[I,O],q=new Sl,N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let be=v[ee];return be===void 0&&(be=new Dr,v[ee]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ee){let be=v[ee];return be===void 0&&(be=new Dr,v[ee]=be),be.getGripSpace()},this.getHand=function(ee){let be=v[ee];return be===void 0&&(be=new Dr,v[ee]=be),be.getHandSpace()};function J(ee){let be=w.indexOf(ee.inputSource);if(be===-1)return;let Re=v[be];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,c||a),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<v.length;ee++){let be=w[ee];be!==null&&(w[ee]=null,v[ee].disconnect(be))}N=null,$=null,p.reset();for(let ee in d)delete d[ee];if(e.setRenderTarget(E),m=null,h=null,f=null,s=null,M=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),F!==null){let ee=F.camera;ee.fov=F.fov,ee.zoom=F.zoom,ee.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Be=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=g.stencil?Yi:Wi,Be=g.stencil?Ks:ui);let Je={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new zn(h.textureWidth,h.textureHeight,{format:Gn,type:Cn,depthTexture:new Xi(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new zn(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(ee){for(let be=0;be<ee.removed.length;be++){let Re=ee.removed[be],Be=w.indexOf(Re);Be>=0&&(w[Be]=null,v[Be].disconnect(Re))}for(let be=0;be<ee.added.length;be++){let Re=ee.added[be],Be=w.indexOf(Re);if(Be===-1){for(let Je=0;Je<v.length;Je++)if(Je>=w.length){w.push(Re),Be=Je;break}else if(w[Je]===null){w[Je]=Re,Be=Je;break}if(Be===-1)break}let Se=v[Be];Se&&Se.connect(Re)}}function Z(ee,be){be===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(be.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let be=ee.near,Re=ee.far;p.texture!==null&&(p.depthNear>0&&(be=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),q.near=O.near=I.near=be,q.far=O.far=I.far=Re,(N!==q.near||$!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),N=q.near,$=q.far),q.layers.mask=ee.layers.mask|6,I.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;let Be=ee.parent,Se=q.cameras;Z(q,Be);for(let Je=0;Je<Se.length;Je++)Z(Se[Je],Be);q.projectionMatrix.copy(I.projectionMatrix),q.projectionMatrixInverse.copy(I.projectionMatrixInverse),F===null&&ee.isPerspectiveCamera&&(F={camera:ee,fov:ee.fov,zoom:ee.zoom}),ie(ee,q,Be)};function ie(ee,be,Re){Re===null?ee.matrix.copy(be.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(be.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=nl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(ee){return d[ee]};let se=null;function Pe(ee,be){if(u=be.getViewerPose(c||a),x=be,u!==null){let Re=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Be=!1;Re.length!==q.cameras.length&&(q.cameras.length=0,Be=!0);for(let Ge=0;Ge<Re.length;Ge++){let yt=Re[Ge],Et=null;if(m!==null)Et=m.getViewport(yt);else{let sn=f.getViewSubImage(h,yt);Et=sn.viewport,Ge===0&&(e.setRenderTargetTextures(M,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(M))}let rt=B[Ge];rt===void 0&&(rt=new vn,rt.layers.enable(Ge),rt.viewport=new Lt,B[Ge]=rt),rt.matrix.fromArray(yt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(yt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Et.x,Et.y,Et.width,Et.height),Ge===0&&(q.matrix.copy(rt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Be===!0&&q.cameras.push(rt)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let Ge=f.getDepthInformation(Re[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<Re.length;Ge++){let yt=Re[Ge].camera;if(yt){let Et=d[yt];Et||(Et=new Aa,d[yt]=Et);let rt=f.getCameraImage(yt);Et.sourceTexture=rt}}}}for(let Re=0;Re<v.length;Re++){let Be=w[Re],Se=v[Re];Be!==null&&Se!==void 0&&Se.update(Be,be,c||a)}se&&se(ee,be),be.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:be}),x=null}let Ye=new _p;Ye.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}},tv=new ft,Rp=new Xe;Rp.set(-1,0,0,0,1,0,0,0,1);function nv(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,ih(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,g,E,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),y(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,g,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Sn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Sn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g=e.get(d),E=g.envMap,M=g.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rp),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,g,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,g){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let g=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iv(n,e,t,i){let s={},r={};function a(g,E){let M=E.program;i.uniformBlockBinding(g,M,s[g.id])}function o(g,E){let M=s[g.id];M===void 0&&(x(g),M=l(g),s[g.id]=M,g.addEventListener("dispose",p));let v=E.program;i.updateUBOMapping(g,v);let w=e.render.frame;r[g.id]!==w&&(c(g),r[g.id]=w)}function l(g){let E=n.createBuffer(),M=g.__size,v=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,v),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(g){let E=s[g.id],M=g.uniforms,v=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,_=M.length;w<_;w++){let T=M[w];if(Array.isArray(T))for(let F=0,I=T.length;F<I;F++)u(T[F],w,F,v);else u(T,w,0,v)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(g,E,M,v){if(h(g,E,M,v)===!0){let w=g.__offset,_=g.value;if(Array.isArray(_)){let T=0;for(let F=0;F<_.length;F++){let I=_[F],O=y(I,!0);f(I,g.__data,T),T+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,g.__data)}}function f(g,E,M){typeof g=="number"||typeof g=="boolean"?E[M]=g:g.isMatrix3?(E[M]=g.elements[0],E[M+1]=g.elements[1],E[M+2]=g.elements[2],E[M+3]=0,E[M+4]=g.elements[3],E[M+5]=g.elements[4],E[M+6]=g.elements[5],E[M+7]=0,E[M+8]=g.elements[6],E[M+9]=g.elements[7],E[M+10]=g.elements[8],E[M+11]=0):ArrayBuffer.isView(g)?E.set(g.subarray(0,E.length-M),M):g.toArray(E,M)}function h(g,E,M,v){let w=g.value,_=E+"_"+M;if(Array.isArray(w)){v[_]===void 0&&(v[_]=[]);let T=v[_],F=!1;for(let I=0;I<w.length;I++)m(w[I],T,I)===!0&&(F=!0);return F}return m(w,v,_)}function m(g,E,M){if(E[M]===void 0)return typeof g=="number"||typeof g=="boolean"?E[M]=g:ArrayBuffer.isView(g)?E[M]=g.slice():E[M]=g.clone(),!0;{let v=E[M];if(typeof g=="number"||typeof g=="boolean"){if(v!==g)return E[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(v.equals(g)===!1)return v.copy(g),!0}}return!1}function x(g){let E=g.uniforms,M=0,v=16;for(let _=0,T=E.length;_<T;_++){let F=Array.isArray(E[_])?E[_]:[E[_]];for(let I=0,O=F.length;I<O;I++){let B=F[I],q=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(E[_])||Array.isArray(B.value),$=M;for(let X=0,oe=q.length;X<oe;X++){let Z=q[X],ie=y(Z,N),se=M%v,Pe=se%ie.boundary,Ye=se+Pe;M+=Pe,Ye!==0&&v-Ye<ie.storage&&(M+=v-Ye),X===0&&($=M),M+=ie.storage}let J=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new J((M-$)/Float32Array.BYTES_PER_ELEMENT),B.__offset=$}}let w=M%v;return w>0&&(M+=v-w),g.__size=M,g.__cache={},this}function y(g,E){let M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=16,M.storage=48):g.isMatrix4?(M.boundary=16,M.storage=64):g.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):We("WebGLRenderer: Unsupported uniform value type.",g),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(g){let E=g.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let g in s)n.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:d}}var sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function rv(){return Ri===null&&(Ri=new Ws(sv,16,16,Es,hi),Ri.name="DFG_LUT",Ri.minFilter=Mn,Ri.magFilter=Mn,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var xc=class{constructor(e={}){let{canvas:t=Bf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let y=m,p=new Set([Ul,Nl,Dl]),d=new Set([Cn,ui,Br,Ks,Il,Pl]),g=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,w=null,_=[],T=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,B=null,q=null,N=null,$=null;this._outputColorSpace=yn;let J=0,X=0,oe=null,Z=-1,ie=null,se=new Lt,Pe=new Lt,Ye=null,ee=new qe(0),be=0,Re=t.width,Be=t.height,Se=1,Je=null,zt=null,Ge=new Lt(0,0,Re,Be),yt=new Lt(0,0,Re,Be),Et=!1,rt=new ms,sn=new ol,Vt=!1,wn=!1,Nt=new ft,Mi=new D,Jt=new Lt,Xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$n=!1;function Yn(){return oe===null?Se:1}let z=i;function Zn(S,U){return t.getContext(S,U)}let It,Pt,ye,Wt,ke,$e,A,b,G,re,ne,he,xe,K,j,pe,L,te,Y,me,ce,de,Ue;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){let U="webgl2";if(z=Zn(U,S),z===null)throw Zn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(S){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ve("WebGLRenderer: "+S.message),S}function Qe(){It=new g_(z),It.init(),ce=new jy(z,It),Pt=new r_(z,It,e,ce),ye=new Jy(z,It),Pt.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),q=z.createFramebuffer(),N=z.createFramebuffer(),$=z.createFramebuffer(),Wt=new y_(z),ke=new Fy,$e=new Ky(z,It,ye,ke,Pt,ce,Wt),A=new m_(I),b=new M0(z),de=new i_(z,b),G=new x_(z,b,Wt,de),re=new M_(z,G,b,de,Wt),te=new v_(z,Pt,$e),j=new a_(ke),ne=new Uy(I,A,It,Pt,de,j),he=new nv(I,ke),xe=new zy,K=new Wy(It),L=new n_(I,A,ye,re,x,l),pe=new Zy(I,re,Pt),Ue=new iv(z,Wt,Pt,ye),Y=new s_(z,It,Wt),me=new __(z,It,Wt),Wt.programs=ne.programs,I.capabilities=Pt,I.extensions=It,I.properties=ke,I.renderLists=xe,I.shadowMap=pe,I.state=ye,I.info=Wt}y!==Cn&&(F=new S_(y,t.width,t.height,o,s,r));let le=new Mh(I,z);this.xr=le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=It.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=It.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(S){S!==void 0&&(Se=S,this.setSize(Re,Be,!1))},this.getSize=function(S){return S.set(Re,Be)},this.setSize=function(S,U,W=!0){if(le.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=S,Be=U,t.width=Math.floor(S*Se),t.height=Math.floor(U*Se),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Re*Se,Be*Se).floor()},this.setDrawingBufferSize=function(S,U,W){Re=S,Be=U,Se=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(y===Cn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(Ge)},this.setViewport=function(S,U,W,H){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,U,W,H),ye.viewport(se.copy(Ge).multiplyScalar(Yn()).round())},this.getScissor=function(S){return S.copy(yt)},this.setScissor=function(S,U,W,H){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,U,W,H),ye.scissor(Pe.copy(yt).multiplyScalar(Yn()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(S){ye.setScissorTest(Et=S)},this.setOpaqueSort=function(S){Je=S},this.setTransparentSort=function(S){zt=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let H=0;if(S){let V=!1;if(oe!==null){let _e=oe.texture.format;V=p.has(_e)}if(V){let _e=oe.texture.type,Ae=d.has(_e),ge=L.getClearColor(),Ee=L.getClearAlpha(),Le=ge.r,Ze=ge.g,at=ge.b;Ae?(g[0]=Le,g[1]=Ze,g[2]=at,g[3]=Ee,z.clearBufferuiv(z.COLOR,0,g)):(E[0]=Le,E[1]=Ze,E[2]=at,E[3]=Ee,z.clearBufferiv(z.COLOR,0,E))}else H|=z.COLOR_BUFFER_BIT}U&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),L.dispose(),xe.dispose(),K.dispose(),$e.dispose(),ke.dispose(),A.dispose(),re.dispose(),G.dispose(),de.dispose(),Ue.dispose(),ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",vd),le.removeEventListener("sessionend",Md),Os.stop()};function Fe(S){S.preventDefault(),ga("WebGLRenderer: Context Lost."),O=!0}function je(){ga("WebGLRenderer: Context Restored."),O=!1;let S=Wt.autoReset,U=pe.enabled,W=pe.autoUpdate,H=pe.needsUpdate,V=pe.type;Qe(),Wt.autoReset=S,pe.enabled=U,pe.autoUpdate=W,pe.needsUpdate=H,pe.type=V}function ve(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vt(S){let U=S.target;U.removeEventListener("dispose",vt),Kt(U)}function Kt(S){ss(S),ke.remove(S)}function ss(S){let U=ke.get(S).programs;U!==void 0&&(U.forEach(function(W){ne.releaseProgram(W)}),S.isShaderMaterial&&ne.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,H,V,_e){U===null&&(U=Xn);let Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=Um(S,U,W,H,V);ye.setMaterial(H,Ae);let Ee=W.index,Le=1;if(H.wireframe===!0){if(Ee=G.getWireframeAttribute(W),Ee===void 0)return;Le=2}let Ze=W.drawRange,at=W.attributes.position,Ce=Ze.start*Le,ot=(Ze.start+Ze.count)*Le;_e!==null&&(Ce=Math.max(Ce,_e.start*Le),ot=Math.min(ot,(_e.start+_e.count)*Le)),Ee!==null?(Ce=Math.max(Ce,0),ot=Math.min(ot,Ee.count)):at!=null&&(Ce=Math.max(Ce,0),ot=Math.min(ot,at.count));let Bt=ot-Ce;if(Bt<0||Bt===1/0)return;de.setup(V,H,ge,W,Ee);let Rt,Tt=Y;if(Ee!==null&&(Rt=b.get(Ee),Tt=me,Tt.setIndex(Rt)),V.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Yn()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(V.isLine){let cn=H.linewidth;cn===void 0&&(cn=1),ye.setLineWidth(cn*Yn()),V.isLineSegments?Tt.setMode(z.LINES):V.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else V.isPoints?Tt.setMode(z.POINTS):V.isSprite&&Tt.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let cn=V._multiDrawStarts,Ie=V._multiDrawCounts,xn=V._multiDrawCount,gt=Ee?b.get(Ee).bytesPerElement:1,zs=ke.get(H).currentProgram.getUniforms();for(let un=0;un<xn;un++)zs.setValue(z,"_gl_DrawID",un),Tt.render(cn[un]/gt,Ie[un])}else if(V.isInstancedMesh)Tt.renderInstances(Ce,Bt,V.count);else if(W.isInstancedBufferGeometry){let cn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ie=Math.min(W.instanceCount,cn);Tt.renderInstances(Ce,Bt,Ie)}else Tt.render(Ce,Bt)};function yd(S,U,W,H){B!==null&&S.isNodeMaterial&&B.setObject(H,S),Vt===!0&&j.setState(S,W,!1),S.transparent===!0&&S.side===Rn&&S.forceSinglePass===!1?(S.side=Sn,S.needsUpdate=!0,ta(S,U,H),S.side=Ss,S.needsUpdate=!0,ta(S,U,H),S.side=Rn):ta(S,U,H)}this.compile=function(S,U,W=null){W===null&&(W=S),B!==null&&B.renderStart(S,U,W),w=K.get(W),w.init(U),T.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),S!==W&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),wn=this.localClippingEnabled,Vt=j.init(this.clippingPlanes,wn),Vt===!0&&j.setGlobalState(this.clippingPlanes,U),B!==null&&pe.render(w.state.shadowsArray,W,U);let H=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _e=V.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){let ge=_e[Ae];yd(ge,W,U,V),H.add(ge)}else yd(_e,W,U,V),H.add(_e)}),w=T.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(S,U,W=null){let H=this.compile(S,U,W);return new Promise(V=>{function _e(){if(H.forEach(function(Ae){let Ee=ke.get(Ae).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(Ae)}),H.size===0){V(S);return}setTimeout(_e,10)}It.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let jc=null;function Dm(S){jc&&jc(S)}function vd(){Os.stop()}function Md(){Os.start()}let Os=new _p;Os.setAnimationLoop(Dm),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(S){jc=S,le.setAnimationLoop(S),S===null?Os.stop():Os.start()},le.addEventListener("sessionstart",vd),le.addEventListener("sessionend",Md),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(S,U);let W=le.enabled===!0&&le.isPresenting===!0,H=F!==null&&(oe===null||W)&&F.begin(I,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,U,oe),w=K.get(S,T.length),w.init(U),w.state.textureUnits=$e.getTextureUnits(),T.push(w),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?sn.setFromArrayCamera(U):rt.setFromProjectionMatrix(Nt,Kn,U.reversedDepth),wn=this.localClippingEnabled,Vt=j.init(this.clippingPlanes,wn),v=xe.get(S,_.length),v.init(),_.push(v),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&Qc(Ae,U,-1/0,I.sortObjects)}Qc(S,U,0,I.sortObjects),v.finish(),B!==null&&B.updateLights(w.state.lightsArray),I.sortObjects===!0&&v.sort(Je,zt),$n=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,$n&&L.addToRenderList(v,S),this.info.autoReset===!0&&this.info.reset(),Vt===!0&&j.beginShadows();let V=w.state.shadowsArray;if(pe.render(V,S,U),Vt===!0&&j.endShadows(),(H&&F.hasRenderPass())===!1){let Ae=v.opaque,ge=v.transmissive;if(w.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(ge.length>0)for(let Le=0,Ze=Ee.length;Le<Ze;Le++){let at=Ee[Le];Sd(Ae,ge,S,at)}$n&&L.render(S);for(let Le=0,Ze=Ee.length;Le<Ze;Le++){let at=Ee[Le];bd(v,S,at,at.viewport)}}else ge.length>0&&Sd(Ae,ge,S,U),$n&&L.render(S),bd(v,S,U)}oe!==null&&X===0&&($e.updateMultisampleRenderTarget(oe),$e.updateRenderTargetMipmap(oe)),H&&F.end(I),S.isScene===!0&&S.onAfterRender(I,S,U),de.resetDefaultState(),Z=-1,ie=null,T.pop(),T.length>0?(w=T[T.length-1],$e.setTextureUnits(w.state.textureUnits),Vt===!0&&j.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,B!==null&&B.renderEnd()};function Qc(S,U,W,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){let Ae=U.isArrayCamera?sn:rt;if(!S.frustumCulled||S.intersectsFrustum(Ae)){H&&Jt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Nt);let ge=re.update(S),Ee=S.material;Ee.visible&&v.push(S,ge,Ee,W,Jt.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let Ae=U.isArrayCamera?sn:rt;if(!S.frustumCulled||S.intersectsFrustum(Ae)){let ge=re.update(S),Ee=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Jt.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Jt.copy(ge.boundingSphere.center)),Jt.applyMatrix4(S.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ee)){let Le=ge.groups;for(let Ze=0,at=Le.length;Ze<at;Ze++){let Ce=Le[Ze],ot=Ee[Ce.materialIndex];ot&&ot.visible&&v.push(S,ge,ot,W,Jt.z,Ce,U)}}else Ee.visible&&v.push(S,ge,Ee,W,Jt.z,null,U)}}}let _e=S.children;for(let Ae=0,ge=_e.length;Ae<ge;Ae++)Qc(_e[Ae],U,W,H)}function bd(S,U,W,H){let{opaque:V,transmissive:_e,transparent:Ae}=S;w.setupLightsView(W),Vt===!0&&j.setGlobalState(I.clippingPlanes,W),H&&ye.viewport(se.copy(H)),V.length>0&&_o(V,U,W),_e.length>0&&_o(_e,U,W),Ae.length>0&&_o(Ae,U,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Sd(S,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ce=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new zn(1,1,{generateMipmaps:!0,type:Ce?hi:Cn,minFilter:$i,samples:Math.max(4,Pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let _e=w.state.transmissionRenderTarget[H.id],Ae=H.viewport||se;_e.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let ge=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(_e),I.getClearColor(ee),be=I.getClearAlpha(),be<1&&I.setClearColor(16777215,.5),I.clear(),$n&&L.render(W);let Ze=I.toneMapping;I.toneMapping=Ai;let at=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Vt===!0&&j.setGlobalState(I.clippingPlanes,H),_o(S,W,H),$e.updateMultisampleRenderTarget(_e),$e.updateRenderTargetMipmap(_e),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ot=0,Bt=U.length;ot<Bt;ot++){let Rt=U[ot],{object:Tt,geometry:cn,material:Ie,group:xn}=Rt;if(Ie.side===Rn&&Tt.layers.test(H.layers)){let gt=Ie.side;Ie.side=Sn,Ie.needsUpdate=!0,Ed(Tt,W,H,cn,Ie,xn),Ie.side=gt,Ie.needsUpdate=!0,Ce=!0}}Ce===!0&&($e.updateMultisampleRenderTarget(_e),$e.updateRenderTargetMipmap(_e))}I.setRenderTarget(ge,Ee,Le),I.setClearColor(ee,be),at!==void 0&&(H.viewport=at),I.toneMapping=Ze}function _o(S,U,W){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,_e=S.length;V<_e;V++){let Ae=S[V],{object:ge,geometry:Ee,group:Le}=Ae,Ze=Ae.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ge.layers.test(W.layers)&&Ed(ge,U,W,Ee,Ze,Le)}}function Ed(S,U,W,H,V,_e){B!==null&&V.isNodeMaterial&&B.setObject(S,V),S.onBeforeRender(I,U,W,H,V,_e),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(I,U,W,H,S,_e),V.transparent===!0&&V.side===Rn&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,I.renderBufferDirect(W,U,H,V,S,_e),V.side=Ss,V.needsUpdate=!0,I.renderBufferDirect(W,U,H,V,S,_e),V.side=Rn):I.renderBufferDirect(W,U,H,V,S,_e),S.onAfterRender(I,U,W,H,V,_e)}function Td(S){let U=0;for(let W of S)W.texture!==null&&U++;return U}function ta(S,U,W){U.isScene!==!0&&(U=Xn);let H=ke.get(S),V=w.state.lights,_e=w.state.shadowsArray,Ae=V.state.version,ge=ne.getParameters(S,V.state,_e,U,W,w.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(ge),Le=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=A.get(S.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",vt),Le=new Map,H.programs=Le,H.programVariants=new Map);let at=Le.get(Ee);if(at!==void 0){if(H.currentProgram===at&&H.lightsStateVersion===Ae)return Ad(S,ge),at}else ge.uniforms=ne.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,W,ge),S.onBeforeCompile(ge,I),at=ne.acquireProgram(ge,Ee),Le.set(Ee,at),H.uniforms=ge.uniforms;let Ce=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=j.uniform),Ad(S,ge),H.needsLights=Om(S),H.lightsStateVersion=Ae,H.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.sunLights.value=V.state.sun,Ce.sunLightShadows.value=V.state.sunShadow,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.sunShadowMatrix.value=V.state.sunShadowMatrix,Ce.sunShadowCascade.value=V.state.sunShadowCascade,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Td(w.state.lightProbeGridArray),H.currentProgram=at,H.uniformsList=null,at}function Nm(S,U,W,H,V){let _e=ke.get(S),Ae=_e.currentProgram.id+","+H+","+V,ge=_e.programVariants.get(Ae);return ge===void 0?(ge=ta(S,U,W),_e.programVariants.set(Ae,ge)):(_e.currentProgram=ge,_e.uniformsList=null,_e.outputColorSpace=H,_e.toneMapping=V),ge}function wd(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=kr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ad(S,U){let W=ke.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Um(S,U,W,H,V){U.isScene!==!0&&(U=Xn),$e.resetTextureUnits();let _e=U.fog,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ge=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:lt.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Le=A.get(H.envMap||Ae,Ee),Ze=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,at=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Bt=!!W.morphAttributes.color,Rt=Ai;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Rt=I.toneMapping);let Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,cn=Tt!==void 0?Tt.length:0,Ie=ke.get(H),xn=w.state.lights;if(Vt===!0&&(wn===!0||S!==ie)){let Ut=S===ie&&H.id===Z;j.setState(H,S,Ut)}let gt=!1,zs=!1;H.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==xn.state.version||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==Le||H.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==j.numPlanes||Ie.numIntersection!==j.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==at||Ie.morphTargets!==Ce||Ie.morphNormals!==ot||Ie.morphColors!==Bt||Ie.morphTargetsCount!==cn||Ie.numLightProbeGrids!==Td(w.state.lightProbeGridArray)?gt=!0:(Ie.outputColorSpace!==ge||Ie.toneMapping!==Rt)&&(zs=!0):(gt=!0,Ie.__version=H.version);let un=Ie.currentProgram;(gt===!0||zs===!0)&&(un=zs===!0?Nm(H,U,V,ge,Rt):ta(H,U,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,un,Ie));let yo=!1,rs=!1,Bs=!1,dt=un.getUniforms(),rn=Ie.uniforms;if(ye.useProgram(un.program)&&(yo=!0,rs=!0,Bs=!0),H.id!==Z&&(Z=H.id,rs=!0),yo||ie!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(z,"projectionMatrix",S.projectionMatrix),dt.setValue(z,"viewMatrix",S.matrixWorldInverse);let jt=dt.map.cameraPosition;jt!==void 0&&jt.setValue(z,Mi.setFromMatrixPosition(S.matrixWorld)),Pt.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),ie!==S&&(ie=S,rs=!0,Bs=!0)}if(Ie.needsLights&&(xn.state.sunShadowMap.length>0&&dt.setValue(z,"sunShadowMap",xn.state.sunShadowMap,$e),xn.state.directionalShadowMap.length>0&&dt.setValue(z,"directionalShadowMap",xn.state.directionalShadowMap,$e),xn.state.spotShadowMap.length>0&&dt.setValue(z,"spotShadowMap",xn.state.spotShadowMap,$e),xn.state.pointShadowMap.length>0&&dt.setValue(z,"pointShadowMap",xn.state.pointShadowMap,$e)),V.isSkinnedMesh){dt.setOptional(z,V,"bindMatrix"),dt.setOptional(z,V,"bindMatrixInverse");let Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),dt.setValue(z,"boneTexture",Ut.boneTexture,$e))}V.isBatchedMesh&&(dt.setOptional(z,V,"batchingTexture"),dt.setValue(z,"batchingTexture",V._matricesTexture,$e),dt.setOptional(z,V,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",V._indirectTexture,$e),dt.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",V._colorsTexture,$e));let ri=W.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&te.update(V,W,un),(rs||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,dt.setValue(z,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=rv()),rs){if(dt.setValue(z,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&Fm(rn,Bs),_e&&H.fog===!0&&he.refreshFogUniforms(rn,_e),he.refreshMaterialUniforms(rn,H,Se,Be,w.state.transmissionRenderTarget[S.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Ut=M,jt=0;for(let Fi of w.state.lightProbeGridArray)Fi.texture!==null&&(Ut.textures[jt]=Fi.texture,Ut.min[jt]=Fi.boundingBox.min,Ut.max[jt]=Fi.boundingBox.max,Ut.resolution[jt]=Fi.resolution,jt++);for(let Fi in Ut)Ut[Fi].length=jt;rn.probesSH.value=Ut.textures,rn.probesMin.value=Ut.min,rn.probesMax.value=Ut.max,rn.probesResolution.value=Ut.resolution}kr.upload(z,wd(Ie),rn,$e)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(kr.upload(z,wd(Ie),rn,$e),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(z,"center",V.center),dt.setValue(z,"modelViewMatrix",V.modelViewMatrix),dt.setValue(z,"normalMatrix",V.normalMatrix),dt.setValue(z,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Ut=H.uniformsGroups;for(let jt=0,Fi=Ut.length;jt<Fi;jt++){let Cd=Ut[jt];Ue.update(Cd,un),Ue.bind(Cd,un)}}return un}function Fm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Om(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,U,W){let H=ke.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ke.get(S.texture).__webglTexture=U,ke.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let W=ke.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){oe=S,J=U,X=W;let H=null,V=!1,_e=!1;if(S){let ge=ke.get(S);if(ge.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(z.FRAMEBUFFER,ge.__webglFramebuffer),se.copy(S.viewport),Pe.copy(S.scissor),Ye=S.scissorTest,ye.viewport(se),ye.scissor(Pe),ye.setScissorTest(Ye),Z=-1;return}else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(S);else if(ge.__hasExternalTextures)$e.rebindTextures(S,ke.get(S.texture).__webglTexture,ke.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ze=S.depthTexture;if(ge.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);let Le=ke.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?H=Le[U][W]:H=Le[U],V=!0):S.samples>0&&$e.useMultisampledRTT(S)===!1?H=ke.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[W]:H=Le,se.copy(S.viewport),Pe.copy(S.scissor),Ye=S.scissorTest}else se.copy(Ge).multiplyScalar(Se).floor(),Pe.copy(yt).multiplyScalar(Se).floor(),Ye=Et;if(W!==0&&(H=q),ye.bindFramebuffer(z.FRAMEBUFFER,H)&&ye.drawBuffers(S,H),ye.viewport(se),ye.scissor(Pe),ye.setScissorTest(Ye),V){let ge=ke.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,W)}else if(_e){let ge=U;for(let Ee=0;Ee<S.textures.length;Ee++){let Le=ke.get(S.textures[Ee]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,W,ge)}}else if(S!==null&&W!==0){let ge=ke.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,W)}Z=-1};function Rd(S){let U=ke.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=Pt.textureFormatReadable(S.format),U.__typeReadable=Pt.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,W,H,V,_e,Ae,ge=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ee=Ee[Ae],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ye.bindFramebuffer(z.FRAMEBUFFER,Ee);try{let Le=S.textures[ge],Ze=Le.format,at=Le.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ce=Rd(Le);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&W>=0&&W<=S.height-V&&z.readPixels(U,W,H,V,ce.convert(Ze),ce.convert(at),_e)}finally{let Le=oe!==null?ke.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,H,V,_e,Ae,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ke.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ee=Ee[Ae],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=S.width-H&&W>=0&&W<=S.height-V){ye.bindFramebuffer(z.FRAMEBUFFER,Ee);let Le=S.textures[ge],Ze=Le.format,at=Le.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ce=Rd(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ot),z.bufferData(z.PIXEL_PACK_BUFFER,_e.byteLength,z.STREAM_READ),z.readPixels(U,W,H,V,ce.convert(Ze),ce.convert(at),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Bt=oe!==null?ke.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Bt);let Rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Hf(z,Rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ot),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_e),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ot),z.deleteSync(Rt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){let H=Math.pow(2,-W),V=Math.floor(S.image.width*H),_e=Math.floor(S.image.height*H),Ae=U!==null?U.x:0,ge=U!==null?U.y:0;$e.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,Ae,ge,V,_e),ye.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,H=null,V=0,_e=0){let Ae,ge,Ee,Le,Ze,at,Ce,ot,Bt,Rt=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(W!==null)Ae=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ze=W.min.y,at=W.isBox3?W.min.z:0;else{let dt=Math.pow(2,-V);Ae=Math.floor(Rt.width*dt),ge=Math.floor(Rt.height*dt),S.isDataArrayTexture?Ee=Rt.depth:S.isData3DTexture?Ee=Math.floor(Rt.depth*dt):Ee=1,Le=0,Ze=0,at=0}H!==null?(Ce=H.x,ot=H.y,Bt=H.z):(Ce=0,ot=0,Bt=0);let Tt=ce.convert(U.format),cn=ce.convert(U.type),Ie;U.isData3DTexture?($e.setTexture3D(U,0),Ie=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($e.setTexture2DArray(U,0),Ie=z.TEXTURE_2D_ARRAY):($e.setTexture2D(U,0),Ie=z.TEXTURE_2D),ye.activeTexture(z.TEXTURE0),ye.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),ye.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ye.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let xn=ye.getParameter(z.UNPACK_ROW_LENGTH),gt=ye.getParameter(z.UNPACK_IMAGE_HEIGHT),zs=ye.getParameter(z.UNPACK_SKIP_PIXELS),un=ye.getParameter(z.UNPACK_SKIP_ROWS),yo=ye.getParameter(z.UNPACK_SKIP_IMAGES);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Rt.width),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt.height),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Le),ye.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,at);let rs=S.isDataArrayTexture||S.isData3DTexture,Bs=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let dt=ke.get(S),rn=ke.get(U),ri=ke.get(dt.__renderTarget),Ut=ke.get(rn.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,ri.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let jt=0;jt<Ee;jt++)rs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(S).__webglTexture,V,at+jt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,_e,Bt+jt)),z.blitFramebuffer(Le,Ze,Le+Ae,Ze+ge,Ce,ot,Ce+Ae,ot+ge,z.DEPTH_BUFFER_BIT,z.NEAREST);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||ke.has(S)){let dt=ke.get(S),rn=ke.get(U);ye.bindFramebuffer(z.READ_FRAMEBUFFER,N),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,$);for(let ri=0;ri<Ee;ri++)rs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dt.__webglTexture,V,at+ri):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dt.__webglTexture,V),Bs?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,_e,Bt+ri):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,_e),V!==0?z.blitFramebuffer(Le,Ze,Le+Ae,Ze+ge,Ce,ot,Ce+Ae,ot+ge,z.COLOR_BUFFER_BIT,z.NEAREST):Bs?z.copyTexSubImage3D(Ie,_e,Ce,ot,Bt+ri,Le,Ze,Ae,ge):z.copyTexSubImage2D(Ie,_e,Ce,ot,Le,Ze,Ae,ge);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Bs?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Ie,_e,Ce,ot,Bt,Ae,ge,Ee,Tt,cn,Rt.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Ie,_e,Ce,ot,Bt,Ae,ge,Ee,Tt,Rt.data):z.texSubImage3D(Ie,_e,Ce,ot,Bt,Ae,ge,Ee,Tt,cn,Rt):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_e,Ce,ot,Ae,ge,Tt,cn,Rt.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_e,Ce,ot,Rt.width,Rt.height,Tt,Rt.data):z.texSubImage2D(z.TEXTURE_2D,_e,Ce,ot,Ae,ge,Tt,cn,Rt);ye.pixelStorei(z.UNPACK_ROW_LENGTH,xn),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,zs),ye.pixelStorei(z.UNPACK_SKIP_ROWS,un),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,yo),_e===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Ie),ye.unbindTexture()},this.initRenderTarget=function(S){ke.get(S).__webglFramebuffer===void 0&&$e.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$e.setTextureCube(S,0):S.isData3DTexture?$e.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$e.setTexture2DArray(S,0):$e.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){J=0,X=0,oe=null,ye.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var ze=window,ue=n=>document.querySelector(n),ii=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Vh=[];ze.queueNotice=n=>Vh.push(n);ze.showToast=n=>ed(n);ze.root=loadRoot();var Ne=null,Wr=isMuted(),ht=()=>Ne?stageOf(Ne.pet.day).size:2,Cp=0;function nt(n,e=""){let t=ue("#pop");t.innerHTML=`<span class="pi">${n}</span>${e?`<span class="ps">${ii(e)}</span>`:""}`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Cp),Cp=setTimeout(()=>t.classList.remove("show"),1300)}var Ip=0;function ed(n){let e=ue("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(Ip),Ip=setTimeout(()=>e.classList.remove("show"),2200)}setInterval(()=>{if(!Vh.length||ue("#pop").classList.contains("show"))return;let n=Vh.shift();n.startsWith("\u{1F3C5}")?(nt("\u{1F3C5}","\xA1Sticker!"),speak("\xA1Sticker nuevo! "+n.slice(2))):ed(n)},1200);var Gr=null;function _t(n){if(Wr)return;try{Gr=Gr||new(ze.AudioContext||ze.webkitAudioContext)}catch{return}let e={coin:[[990,.05],[1320,.09]],step:[[300,.03]],pop:[[660,.05],[880,.07]],bark:[[520,.06],[380,.1]],quack:[[620,.07],[480,.09]]}[n];if(!e)return;let t=Gr.currentTime;for(let[i,s]of e){let r=Gr.createOscillator(),a=Gr.createGain();r.type="triangle",r.frequency.value=i,a.gain.setValueAtTime(.07,t),a.gain.exponentialRampToValueAtTime(.001,t+s),r.connect(a).connect(Gr.destination),r.start(t),r.stop(t+s+.02),t+=s*.9}}var td=ue("#c"),Pp=new URLSearchParams(location.search),$r=Pp.has("lite")||!Pp.has("hd")&&(ze.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!ze.matchMedia("(pointer: fine)").matches),Ni=new xc({canvas:td,antialias:!$r,powerPreference:$r?"low-power":"default"}),Wp=()=>$r?Math.min(1,Math.sqrt(13e5/(ze.innerWidth*ze.innerHeight))):Math.min(ze.devicePixelRatio,1.5);Ni.setPixelRatio(Wp());Ni.setSize(ze.innerWidth,ze.innerHeight);Ni.shadowMap.enabled=!$r;Ni.shadowMap.type=$s;var Mt=new vn(42,ze.innerWidth/ze.innerHeight,.1,220);ze.addEventListener("resize",()=>{Mt.aspect=ze.innerWidth/ze.innerHeight,Mt.updateProjectionMatrix(),Ni.setPixelRatio(Wp()),Ni.setSize(ze.innerWidth,ze.innerHeight)});var or=new Ws(new Uint8Array([110,110,110,255,185,185,185,255,255,255,255,255]),3,1,Gn);or.minFilter=or.magFilter=Ht;or.needsUpdate=!0;var bh=new Map;function Yr(n,e){let t=n+(e?JSON.stringify(e):"");return bh.has(t)||bh.set(t,new ys({color:n,gradientMap:or,...e||{}})),bh.get(t)}function C(n,e,t={}){let i=new bt(n,t.mat||Yr(e,t.extra));return i.castShadow=t.cast!==!1,i.receiveShadow=!!t.recv,i}var P={sph:(n,e=16,t=12)=>new _s(n,e,t),box:(n,e,t)=>new gs(n,e,t),cyl:(n,e,t,i=16)=>new qs(n,e,t,i),cap:(n,e)=>new Ra(n,e,4,10),cone:(n,e,t=12)=>new Ca(n,e,t)};function Q(n,e,t,i){return n.position.set(e,t,i),n}function yi(n){let e=n>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}var Sh=new Map;function Ds(n,e=!1){let t=n+e;if(Sh.has(t))return Sh.get(t);let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");e&&(s.fillStyle="#ffffff",s.strokeStyle="#c48ad8",s.lineWidth=8,s.beginPath(),s.arc(64,58,50,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(52,104),s.lineTo(64,124),s.lineTo(76,104),s.fill()),s.font=`${e?62:96}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,64,e?62:70);let r=new Ta(i);return r.colorSpace=yn,Sh.set(t,r),r}function Ui(n,e=1,t=!1){let i=new Ma(new Nr({map:Ds(n,t),transparent:!0,depthWrite:!1}));return i.scale.set(e,e,e),i}function jr(n){let e=new Da("#dff1ff","#a6d68a",1.7),t=new Fa("#fff4e0",2.3);return t.castShadow=!$r,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60}),t.shadow.bias=-8e-4,n.add(e,t,t.target),{hemi:e,sun:t}}var po=[.55,.68,.82,.95,1.05];function kc(n){let e=n.look||COATS[n.coat]||COATS.dorado,t=new we,i=new we;t.add(i);let s=C(P.sph(.5,22,16),e.fur);s.scale.set(.85,.75,1.2),s.position.set(0,.78,-.05),i.add(s);let r=C(P.sph(.42),e.light);if(r.scale.set(.72,.58,1),r.position.set(0,.66,0),i.add(r),e.spots)for(let[M,v,w,_]of[[.22,1,-.2,.22],[-.25,.9,.15,.16]]){let T=C(P.sph(_),e.dark);T.scale.set(1,.45,1.2),T.position.set(M,v,w),i.add(T)}let a=[];for(let[M,v]of[[-.22,.32],[.22,.32],[-.22,-.4],[.22,-.4]]){let w=new we;w.position.set(M,.62,v);let _=C(P.cap(.12,.28),e.fur);_.position.y=-.26,w.add(_);let T=C(P.sph(.14,12,8),e.light);T.scale.set(1,.6,1.25),T.position.set(0,-.52,.04),w.add(T),i.add(w),a.push(w)}let o=new we;o.position.set(0,.98,-.6);let l=C(P.cap(.08,.36),e.fur);l.position.y=.22,o.add(l);let c=C(P.sph(.09),e.light);c.position.y=.44,o.add(c),i.add(o);let u=new we;u.position.set(0,1.28,.5),i.add(u);let f=C(P.sph(.43,22,16),e.fur);if(f.scale.set(1,.95,.95),u.add(f),e.spots){let M=C(P.sph(.17),e.dark);M.scale.set(1,1,.5),M.position.set(.17,.1,.3),u.add(M)}let h=C(P.sph(.22),e.light);h.scale.set(1.1,.8,1),h.position.set(0,-.1,.33),u.add(h);let m=C(P.sph(.075),"#2a1d18");m.position.set(0,-.02,.54),u.add(m);let x=C(P.sph(.08),"#ff7c9c");x.scale.set(1,.4,1.3),x.position.set(0,-.22,.45),u.add(x);let y=[];for(let M of[-1,1]){let v=new we;v.position.set(M*.17,.08,.35),v.add(C(P.sph(.08),"#2a1d18",{cast:!1}));let w=new bt(P.sph(.028,8,6),new An({color:"#ffffff"}));w.position.set(.025,.035,.06),v.add(w),u.add(v),y.push(v);let _=C(P.sph(.08),"#ff9fb4",{cast:!1});_.scale.set(1,.6,.4),_.position.set(M*.27,-.08,.28),u.add(_)}let p=[];for(let M of[-1,1]){let v=new we;if(v.position.set(M*.3,.26,-.04),v.rotation.z=M*.35,n.ears==="up"){v.position.y=.3,v.rotation.z=-M*.25;let w=C(P.cone(.13,.36,8),e.dark);w.scale.set(1,1,.55),w.position.set(0,.16,0),v.add(w)}else{let w=C(P.sph(.2),e.dark);w.scale.set(.45,1.15,.85),w.position.set(M*.04,-.22,0),v.add(w)}u.add(v),p.push(v)}let d=new we;i.add(d);let g=new qt;g.position.set(0,1.02,.42),i.add(g);let E={root:t,body:i,legs:a,tail:o,head:u,eyes:y,ears:p,tongue:x,extras:d,collar:g,t:Math.random()*10,blink:2,key:""};return qp(E,n),E}function qp(n,e){let t=`${e.day>=8}|${e.acc.worn}`;if(n.key===t)return;if(n.key=t,n.extras.clear(),e.day>=8){let r=C(new pn(.33,.055,8,20),"#ff5c5c");r.position.set(0,1.03,.42),r.rotation.x=1.25,n.extras.add(r);let a=C(P.sph(.07),"#ffd23f");a.position.set(0,.86,.6),n.extras.add(a)}let i=n.head;i.children.filter(r=>r.userData.acc).forEach(r=>i.remove(r));let s=(r,a=i)=>{r.userData.acc=!0,a.add(r)};if(e.acc.worn==="lazo"){for(let r of[-1,1]){let a=C(P.cone(.13,.26,10),"#ff79bf");a.rotation.z=r*Math.PI/2,a.position.set(r*.13,.45,0),s(a)}s(Q(C(P.sph(.07),"#e0489a"),0,.45,0))}if(e.acc.worn==="gorro"){let r=C(P.cone(.32,.5,14),"#ff6b6b");r.position.set(0,.55,-.02),s(r);let a=C(new pn(.31,.07,8,18),"#ffffff");a.rotation.x=Math.PI/2,a.position.set(0,.32,-.02),s(a);let o=C(P.sph(.09),"#ffffff");o.position.set(0,.82,-.02),s(o)}if(e.acc.worn==="gafas")for(let r of[-1,1]){let a=C(new pn(.1,.025,6,16),"#222222");a.position.set(r*.17,.08,.42),s(a);let o=C(P.cyl(.09,.09,.02),"#333344");o.rotation.x=Math.PI/2,o.position.set(r*.17,.08,.43),s(o)}if(e.acc.worn==="panuelo"){let r=C(P.cone(.3,.35,3),"#4f7cff");r.rotation.x=Math.PI,r.position.set(0,.9,.5),n.extras.add(r)}}var ei=(n,e,t)=>n+(e-n)*t;function Fs(n,e,t){n.t+=e;let i=n.t,s=1-Math.exp(-12*e),r=t.mode==="walk",a=t.mode==="sleep",o=t.mode==="happy"||t.mode==="spin",l=t.mode==="eat",c=a||t.mode==="lie",u=t.mode==="sit"||t.mode==="paw",f=6+(t.speed||0)*2.4,h=r?Math.sin(i*f)*.75:0,m=c?[-1.35,-1.35,1.35,1.35]:u?[0,t.mode==="paw"?-1.5:0,-1.3,-1.3]:[h,-h,-h,h];n.body.rotation.x=ei(n.body.rotation.x,u?-.42:0,s),n.legs.forEach((g,E)=>{g.rotation.x=ei(g.rotation.x,m[E],s)});let x=c?-.42:u?-.12:r?Math.abs(Math.sin(i*f))*.06:o?Math.abs(Math.sin(i*9))*.4:0;n.body.position.y=ei(n.body.position.y,x,o?1:s);let y=1+Math.sin(i*(a?1.6:2.6))*(a?.035:.015);n.body.scale.set(1,y,1),n.tail.rotation.z=Math.sin(i*(o?24:r?15:a?0:5))*(t.sad?.15:.5),n.tail.rotation.x=ei(n.tail.rotation.x,t.sad||a?.9:-.55,s);let p=l?.55+Math.sin(i*13)*.12:a?.35:t.sad?.25:0;n.head.rotation.x=ei(n.head.rotation.x,p,s),n.head.rotation.z=ei(n.head.rotation.z,r||a?0:Math.sin(i*.8)*.12,s),n.head.position.y=ei(n.head.position.y,c?1.05:1.28,s),n.ears.forEach((g,E)=>{g.rotation.x=r?Math.sin(i*f+E)*.25:o?Math.sin(i*18)*.3:0}),n.tongue.visible=(o||t.mood==="feliz")&&!a,n.blink-=e;let d=1;t.eyesClosed||a?d=.12:n.blink<0&&(d=.12,n.blink<-.13&&(n.blink=2+Math.random()*3)),n.eyes.forEach(g=>{g.scale.y=d})}var Wh={"\u{1F9D2}":{skin:"#f0c090",hair:"#6a4020",style:"short",shirt:"#f0a020",pants:"#3858b8"},"\u{1F467}":{skin:"#f0c090",hair:"#8a4a20",style:"pigtails",shirt:"#f070b0",pants:"#7048b0"},"\u{1F466}":{skin:"#d8a070",hair:"#2a1a10",style:"short",shirt:"#40a0e0",pants:"#2c4070"},"\u{1F469}":{skin:"#f0c8a0",hair:"#c07030",style:"long",shirt:"#50b860",pants:"#3858b8"},"\u{1F468}":{skin:"#c88858",hair:"#2a1a10",style:"short",shirt:"#e05040",pants:"#4c4c58"},"\u{1F9D1}":{skin:"#e0b080",hair:"#503020",style:"short",shirt:"#8060d0",pants:"#384050"},"\u{1F475}":{skin:"#f0c8a0",hair:"#d8d8e0",style:"bun",shirt:"#c060a0",pants:"#6c5878"},"\u{1F474}":{skin:"#e0b088",hair:"#d8d8e0",style:"bald",shirt:"#7c9c58",pants:"#5a4838"},"\u{1F9B8}":{skin:"#f0c090",hair:"#2a1a10",style:"short",shirt:"#3060e0",pants:"#3060e0",cape:"#e03030"},"\u{1F9D1}\u200D\u{1F680}":{skin:"#f0c090",hair:"#6a4020",style:"helmet",shirt:"#f0f0f4",pants:"#c8ccd8"}},ov=Object.keys(Wh);function lv(n){let e=Wh[n]||Wh["\u{1F9D2}"],t=new we,i=new we;t.add(i);let s=[],r=[],a=null;for(let u of[-1,1]){let f=new we;f.position.set(u*.13,.72,0),f.add(Q(C(P.cap(.09,.42),e.pants),0,-.3,0)),f.add(Q(C(P.box(.2,.12,.3),"#3a2a2a"),0,-.66,.05)),i.add(f),s.push(f)}if(i.add(Q(C(P.cap(.25,.32),e.shirt),0,1.02,0)),e.cape){let u=C(P.box(.55,.85,.05),e.cape);u.position.set(0,.98,-.27),u.rotation.x=.12,i.add(u)}for(let u of[-1,1]){let f=new we;f.position.set(u*.33,1.28,0),f.rotation.z=u*.12,f.add(Q(C(P.cap(.075,.32),e.shirt),0,-.22,0));let h=Q(C(P.sph(.085,10,8),e.skin),0,-.46,0);f.add(h),i.add(f),r.push(f),u>0&&(a=h)}let o=new we;o.position.y=1.7,i.add(o),o.add(C(P.sph(.3,20,16),e.skin));for(let u of[-1,1])o.add(Q(C(P.sph(.045,8,6),"#2a1d18",{cast:!1}),u*.1,.03,.27)),o.add(Q(C(P.sph(.05,8,6),"#ff9fb4",{cast:!1}),u*.17,-.06,.24));let l=C(new pn(.07,.018,6,12,Math.PI),"#c0505a",{cast:!1});l.rotation.z=Math.PI,l.position.set(0,-.08,.28),o.add(l);let c=(u=.32)=>C(new _s(u,18,10,0,Math.PI*2,0,Math.PI/2.1),e.hair);if(e.style==="helmet"){o.add(Q(c(.31),0,.04,-.02)),o.add(new bt(P.sph(.42,20,16),new An({color:"#cfefff",transparent:!0,opacity:.28,depthWrite:!1})));let u=C(new pn(.33,.06,8,20),"#e0e4ee");u.rotation.x=Math.PI/2,u.position.y=-.3,o.add(u)}else if(e.style==="bald")for(let u of[-1,1])o.add(Q(C(P.sph(.12,10,8),e.hair),u*.26,.02,-.06));else{if(o.add(Q(c(),0,.03,-.03)),e.style==="long"&&o.add(Q(C(P.box(.56,.55,.14),e.hair),0,-.2,-.2)),e.style==="pigtails")for(let u of[-1,1])o.add(Q(C(P.sph(.12,10,8),e.hair),u*.33,-.05,-.05));e.style==="bun"&&o.add(Q(C(P.sph(.14,10,8),e.hair),0,.3,-.12))}return t.scale.setScalar(.85),{root:t,body:i,legs:s,arms:r,head:o,hand:a,t:0,mode:"idle",modeT:0,leash:!1}}function Hc(n,e,t,i){n.t+=e;let s=n.t,r=1-Math.exp(-12*e);n.modeT>0&&(n.modeT-=e,n.modeT<=0&&(n.mode="idle"));let a=5+i*1.6,o=t?Math.sin(s*a)*.7:0,l=n.mode==="cheer",c=n.mode==="throw";n.legs[0].rotation.x=ei(n.legs[0].rotation.x,o,r),n.legs[1].rotation.x=ei(n.legs[1].rotation.x,-o,r),n.arms[0].rotation.x=ei(n.arms[0].rotation.x,l?-2.8:-o,r),n.arms[1].rotation.x=c?-2.6:ei(n.arms[1].rotation.x,l?-2.8:n.leash?-.55:o,r),n.body.position.y=t?Math.abs(Math.sin(s*a))*.06:l?Math.abs(Math.sin(s*10))*.2:Math.sin(s*2)*.01,n.head.rotation.z=t?0:Math.sin(s*.9)*.06}var Rc=16,tr=new ps(P.cyl(.03,.03,1,5),Yr("#e0403c"),Rc);tr.frustumCulled=!1;tr.visible=!1;var vc=new D,Mc=new D,Eh=new D,Th=new D,wh=new D,Ah=new D,cv=new D(0,1,0),Lp=new On,Dp=new ft,Np=new D;function Gc(n,e){if(tr.parent!==n&&n.add(tr),tr.visible=!!e,!e)return;Ke.root.updateMatrixWorld(!0),Te.root.updateMatrixWorld(!0),Ke.hand.getWorldPosition(vc),Te.collar.getWorldPosition(Mc);let t=vc.distanceTo(Mc);Eh.addVectors(vc,Mc).multiplyScalar(.5),Eh.y-=Math.max(0,1.9-t)*.35+.05;let i=(s,r)=>r.set(0,0,0).addScaledVector(vc,(1-s)*(1-s)).addScaledVector(Eh,2*(1-s)*s).addScaledVector(Mc,s*s);for(let s=0;s<Rc;s++){i(s/Rc,Th),i((s+1)/Rc,wh),Ah.subVectors(wh,Th);let r=Ah.length()||.001;Lp.setFromUnitVectors(cv,Ah.divideScalar(r)),Np.set(1,r,1),Dp.compose(Th.add(wh).multiplyScalar(.5),Lp,Np),tr.setMatrixAt(s,Dp)}tr.instanceMatrix.needsUpdate=!0}function Ln(n,e){n.parent!==e&&(n.parent&&n.parent.remove(n),e.add(n))}function nd(n){for(;n.children.length;)n.remove(n.children[0])}var Cc=[];function st(n,e,t,i=5,s=.55){for(let r=0;r<i;r++){let a=Ui(e,s);a.material=a.material.clone(),a.position.set(t.x+(Math.random()-.5)*.8,t.y+Math.random()*.3,t.z+(Math.random()-.5)*.8),n.add(a),Cc.push({s:a,scene:n,life:1.2+Math.random()*.4,t:0,vy:.9+Math.random()*.6,vx:(Math.random()-.5)*.6})}}function Xp(n){for(let e=Cc.length-1;e>=0;e--){let t=Cc[e];t.t+=n,t.s.position.y+=t.vy*n,t.s.position.x+=t.vx*n,t.s.material.opacity=1-t.t/t.life,t.t>=t.life&&(t.scene.remove(t.s),t.s.material.dispose(),Cc.splice(e,1))}}var ae=new Bn,Qa=jr(ae),gn=[{id:"bosque",icon:"\u{1F332}",name:"Bosque",x:-28,z:-15,cave:!0,ready:!0,minDay:3},{id:"casa",icon:"\u{1F3E0}",name:"Casa",x:-16,z:-15,w:6,d:5,h:3,wall:"#fff1dc",roof:"#ff7b7b",door:"#b0703c",ready:!0},{id:"escuela",icon:"\u{1F393}",name:"Escuela",ready:!0,minDay:8,x:-4,z:-15,w:6,d:5,h:3.3,wall:"#ffe58a",roof:"#6f8cff",door:"#5d78e8"},{id:"tienda",icon:"\u{1F6D2}",name:"Tienda",ready:!0,x:7,z:-15,w:5,d:4,h:2.7,wall:"#ffd6e8",roof:"#ff8fc8",door:"#c0607a",stall:!0},{id:"vet",icon:"\u{1F3E5}",name:"Veterinaria",ready:!0,x:18,z:-15,w:6,d:5,h:3,wall:"#ffffff",roof:"#5fd0c4",door:"#3aa89c"},{id:"parque",icon:"\u{1F333}",name:"Parque",x:-4,z:5,park:!0,ready:!0,minDay:3},{id:"lago",icon:"\u{1F986}",name:"Lago",x:17,z:7,lake:!0,ready:!0},{id:"peluqueria",icon:"\u2702\uFE0F",name:"Peluquer\xEDa canina",spot:!0,minDay:3,x:29,z:-15,w:6,d:5,h:3,wall:"#e8f4ff",roof:"#9b7bff",door:"#7a5ce0"},{id:"heladeria",icon:"\u{1F366}",name:"Helader\xEDa",spot:!0,x:40,z:-15,w:5,d:4,h:2.7,wall:"#fff4d6",roof:"#7fd6ff",door:"#40a8d8",stall:!0},{id:"panaderia",icon:"\u{1F950}",name:"Pasteler\xEDa",spot:!0,x:51,z:-15,w:6,d:5,h:3,wall:"#ffe9cc",roof:"#d9824a",door:"#a0582c"},{id:"biblioteca",icon:"\u{1F4DA}",name:"Biblioteca",spot:!0,x:62,z:-15,w:6,d:5,h:3.4,wall:"#f0e6ff",roof:"#4f6fd8",door:"#3a4fa8"},{id:"refugio",icon:"\u{1F3E1}",name:"Refugio de perritos",spot:!0,x:-22,z:12,w:6,d:5,h:3,wall:"#fff0e0",roof:"#5cbf5a",door:"#3c8c3c"},{id:"perros",icon:"\u{1F415}",name:"Parque para perros",spot:!0,dogpark:!0,minDay:3,x:23,z:29},{id:"aventura",icon:"\u{1F5FA}\uFE0F",name:"Valle Aventura",spot:!0,valley:!0,x:46,z:22}],Ft={boxes:[],circles:[]},De={x0:-34,x1:70,z0:-24,z1:48},Dt={x0:42,x1:70,z0:13,z1:48,gateZ:19,riverZ:34.5,bridgeX:55},Lc=(n,e)=>n>Dt.x0&&e>Dt.z0,Ns=[];function uv(){ae.background=new qe("#bfe6ff"),ae.fog=new ds("#bfe6ff",45,95);let n=C(new kn(240,190),"#8fd46e",{cast:!1,recv:!0});n.rotation.x=-Math.PI/2,n.position.set(18,0,12),ae.add(n);let e=yi(424242);for(let f=0;f<70;f++){let h=C(P.cyl(1+e()*2.5,1+e()*2.5,.02,20),e()<.5?"#84cc63":"#9ade7a",{cast:!1,recv:!0});h.position.set(De.x0-4+e()*(De.x1-De.x0+8),.01,De.z0-4+e()*(De.z1-De.z0+8)),ae.add(h)}let t=[[-31,-9,67,-9],[-28,-12.5,-28,-9],[-16,-12,-16,-9],[-4,-12,-4,-9],[7,-12.5,7,-9],[18,-12,18,-9],[-4,-9,-4,-.5],[10.5,-9,10.5,19],[29,-12,29,-9],[40,-12.5,40,-9],[51,-12,51,-9],[62,-12,62,-9],[34,-9,34,19],[-22,19,44,19],[-22,15.4,-22,19],[23,19,23,22.5],[44,19,62,19],[55,19,55,42],[48,42,65,42]],i=[];for(let[f,h,m,x]of t){let y=Math.abs(m-f)+2.4,p=Math.abs(x-h)+2.4,d=C(P.box(y,.06,p),"#f2d39a",{cast:!1,recv:!0});d.position.set((f+m)/2,.03,(h+x)/2),ae.add(d),i.push([Math.min(f,m)-1.5,Math.min(h,x)-1.5,Math.max(f,m)+1.5,Math.max(h,x)+1.5])}let s=(f,h)=>i.some(([m,x,y,p])=>f>m&&f<y&&h>x&&h<p);for(let f of gn)f.w&&pv(f),f.cave&&mv(f),f.park&&gv(f),f.lake&&xv(f),f.dogpark&&_v(f),f.valley&&yv(f,e);let r=(f,h,m,x,y)=>(f-m)**2+(h-x)**2<y*y;for(let f=0;f<620;f++){let h=De.x0-4+e()*(De.x1-De.x0+8),m=De.z0-4+e()*(De.z1-De.z0+8),x=h<De.x0+1||h>De.x1-1||m<De.z0+1||m>De.z1-1,y=h<-21&&m<-17.5,p=Lc(h,m)&&!x;!x&&!y&&e()>(p?.3:.2)||s(h,m)||gn.some(d=>d.w&&Math.abs(h-d.x)<d.w/2+2&&Math.abs(m-d.z)<d.d/2+2)||r(h,m,-4,5,8)||r(h,m,17,7,7.5)||r(h,m,-28,-15,4)||r(h,m,-16,-9,3)||h>13&&h<33&&m>21&&m<37||nr.some(([d,g,E])=>r(h,m,d,g,E))||Math.abs(h-Dt.x0)<1.6&&m>Dt.z0-1||Math.abs(m-Dt.z0)<1.6&&h>Dt.x0-1||Math.abs(m-Dt.riverZ)<2.6&&h>Dt.x0||Ft.circles.some(d=>r(h,m,d.x,d.z,1.6))||hv(h,m,y||e()<.35,.8+e()*.5)}let a=$r?160:420,o=new ps(P.sph(.12,6,5),new ys({gradientMap:or}),a),l=["#ff6b8b","#ffd23f","#ffffff","#b98cff","#ff9f43"].map(f=>new qe(f)),c=new ft,u=0;for(let f=0;f<2e3&&u<a;f++){let h=De.x0+e()*(De.x1-De.x0),m=De.z0+e()*(De.z1-De.z0);s(h,m)||gn.some(x=>x.w&&Math.abs(h-x.x)<x.w/2+.8&&Math.abs(m-x.z)<x.d/2+.8)||r(h,m,17,7,5.2)||Math.abs(m-Dt.riverZ)<2&&h>Dt.x0-1||(c.makeTranslation(h,.12,m),o.setMatrixAt(u,c),o.setColorAt(u,l[Math.floor(e()*l.length)]),u++)}o.count=u,ae.add(o);for(let f=0;f<9;f++){let h=new we;for(let m=0;m<4;m++){let x=C(P.sph(1.2+e(),12,10),"#ffffff",{cast:!1});x.position.set(m*1.3,e()*.6,e()),h.add(x)}h.position.set(-40+e()*80,14+e()*5,-40+e()*30),h.userData.v=.3+e()*.4,ae.add(h),$p.push(h)}}var $p=[];function hv(n,e,t,i){let s=sd(t);s.position.set(n,0,e),s.scale.setScalar(i),s.rotation.y=Math.random()*6,ae.add(s),Ft.circles.push({x:n,z:e,r:.55*i,tree:!0}),s.traverse(r=>{r.isMesh&&(r.userData.solidMat=r.material)}),id.push({g:s,x:n,z:e,s:i,top:(t?3.4:2.9)*i,faded:!1})}var id=[],Rh=new Map;function dv(n){if(!Rh.has(n)){let e=n.clone();e.transparent=!0,e.opacity=.28,e.depthWrite=!1,Rh.set(n,e)}return Rh.get(n)}function fv(){let n=Mt.position.x,e=Mt.position.y,t=Mt.position.z,i=k.x,s=k.z,r=1,a=n-i,o=t-s,l=a*a+o*o||1;for(let c of id){let u=!1;if(c.z>s-.5){let f=((c.x-i)*a+(c.z-s)*o)/l;if(f>0&&f<1){let h=i+a*f,m=s+o*f,x=r+(e-r)*f;u=Math.hypot(c.x-h,c.z-m)<1.3*c.s+.4&&x<c.top+.5}}u!==c.faded&&(c.faded=u,c.g.traverse(f=>{f.isMesh&&(f.material=u?dv(f.userData.solidMat):f.userData.solidMat,f.castShadow=!u)}))}}function sd(n){let e=new we;if(e.add(Q(C(P.cyl(.18,.24,1,8),"#9a6236"),0,.5,0)),n)for(let t=0;t<3;t++){let i=C(P.cone(1.1-t*.28,1.3,9),t%2?"#3f9a5a":"#2f8a4e");i.position.y=1.3+t*.75,e.add(i)}else{for(let[t,i,s,r]of[[0,1.9,0,.95],[.5,1.6,.2,.65],[-.5,1.7,-.1,.7]]){let a=C(P.sph(r,14,10),"#5cbf5a");a.position.set(t,i,s),e.add(a)}if(Math.random()<.4)for(let t=0;t<3;t++){let i=C(P.sph(.11,8,6),"#ff5c5c");i.position.set(Math.cos(t*2)*.8,1.6+t*.2,Math.sin(t*2)*.8),e.add(i)}}return e}function Us(n,e=1.6){let t=new we;t.add(C(P.box(e,e*.8,.12),"#ffffff"));let i=new bt(new kn(e*.85,e*.7),new An({map:Ds(n),transparent:!0}));return i.position.z=.07,t.add(i),t}function pv(n){let e=new we,{w:t,d:i,h:s}=n;if(n.stall){e.add(Q(C(P.box(t,s*.55,i),n.wall,{recv:!0}),0,s*.275,0));for(let a of[-1,1])e.add(Q(C(P.cyl(.12,.12,s+.6,8),"#ffffff"),a*(t/2-.2),(s+.6)/2,i/2-.2));for(let a=0;a<6;a++){let o=C(P.box(t/6,.15,i+.6),a%2?"#ffffff":"#ff6b8b");o.position.set(-t/2+t/12+a*t/6,s+.5,.2),o.rotation.x=-.25,e.add(o)}for(let a=0;a<5;a++){let o=C(P.sph(.22,10,8),["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][a]);o.position.set(-t/2+.7+a*(t-1.4)/4,s*.55+.22,i/2-.4),e.add(o)}}else{e.add(Q(C(P.box(t,s,i),n.wall,{recv:!0}),0,s/2,0));let a=C(P.cone(Math.max(t,i)*.78,2.2,4),n.roof);a.rotation.y=Math.PI/4,a.scale.set(1,1,i/t),a.position.y=s+1.1,e.add(a);let o=C(P.box(1.2,1.9,.12),n.door);o.position.set(0,.95,i/2+.03),e.add(o);let l=C(P.sph(.07),"#ffd23f");l.position.set(.4,.95,i/2+.12),e.add(l);for(let c of[-1,1]){let u=C(P.box(1,.9,.1),"#bfe9ff",{extra:{emissive:"#000000"}});u.position.set(c*(t/2-1.1),s*.6,i/2+.03),e.add(u),n.wins=(n.wins||[]).concat(u);let f=C(P.box(1.15,.12,.14),"#ffffff");f.position.set(c*(t/2-1.1),s*.6-.5,i/2+.06),e.add(f)}if(n.id==="casa"){let c=C(P.box(.6,1.2,.6),"#c0605a");c.position.set(t/2-1.2,s+1.4,-.6),e.add(c)}if(n.id==="vet"){let c=new we;c.add(C(P.box(.3,.9,.1),"#ff5c5c")),c.add(C(P.box(.9,.3,.1),"#ff5c5c")),c.position.set(0,s+.4,i/2+.1),e.add(c)}if(n.id==="escuela"){let c=C(P.cyl(.05,.05,2.5,6),"#888888");c.position.set(t/2-.3,s+1.2,i/2-.3),e.add(c);let u=C(P.box(.9,.5,.05),"#ff6b6b");u.position.set(t/2+.15,s+2.2,i/2-.3),e.add(u),n.flag=u}}let r=Us(n.icon);r.position.set(n.stall?0:-t/2+.9,n.stall?s+1.4:2.2,i/2+.1),n.stall||(r.position.x=-t/2+.9),e.add(r),e.position.set(n.x,0,n.z),ae.add(e),Ft.boxes.push({x0:n.x-t/2-.2,x1:n.x+t/2+.2,z0:n.z-i/2-.2,z1:n.z+i/2+.2}),Qr(n,n.x,n.z+i/2+1.4,s+2.8)}function mv(n){let e=new we,t=yi(99);for(let r=0;r<14;r++){let a=Math.PI*(r/13),o=C(new Xs(.9+t()*.5),r%2?"#9aa0b0":"#b4b9c6");o.position.set(Math.cos(a)*2.6,Math.sin(a)*2.6,0),o.rotation.set(t()*3,t()*3,0),e.add(o)}let i=C(new xs(2,24,0,Math.PI),"#1a1420",{cast:!1});i.position.z=.1,e.add(i);let s=Us("\u{1F332}",1.4);s.position.set(3.4,1,.6),e.add(s),e.position.set(n.x,0,n.z),ae.add(e),Ft.boxes.push({x0:n.x-3.6,x1:n.x+3.6,z0:n.z-1.6,z1:n.z+1}),Qr(n,n.x,n.z+2.6,4.6)}var wt=null;function gv(n){let e=new we;e.add(C(P.cyl(1.6,1.8,.6,24),"#dfe3ee",{recv:!0}));let t=C(P.cyl(1.35,1.35,.1,24),"#6cc8ff",{cast:!1});t.position.y=.32,e.add(t),e.add(Q(C(P.cyl(.25,.35,1.6,12),"#cfd3de"),0,.8,0));let i=C(P.sph(.5,14,10),"#6cc8ff");i.position.y=1.7,e.add(i),e.position.set(n.x,0,n.z),ae.add(e),Ft.circles.push({x:n.x,z:n.z,r:1.9});for(let[r,a,o]of[[-4,1,1.57],[4,1,-1.57],[0,4.5,3.14]]){let l=new we;l.add(Q(C(P.box(2,.15,.6),"#d79b5f"),0,.5,0)),l.add(Q(C(P.box(2,.5,.12),"#d79b5f"),0,.85,-.25));for(let c of[-.8,.8])l.add(Q(C(P.box(.12,.5,.5),"#777777"),c,.25,0));l.position.set(n.x+r,0,n.z+a),l.rotation.y=o,ae.add(l)}wt={m:C(P.sph(.35,18,14),"#ffd23f"),v:new D,pushes:0,cd:0};let s=C(new pn(.35,.05,6,20),"#ff6b8b");wt.m.add(s),wt.m.position.set(n.x+2.5,.35,n.z-3),ae.add(wt.m),Qr(n,n.x,n.z-2.6,3.2)}var io=[];function xv(n){let e=C(P.cyl(5.4,5.4,.05,40),"#f6e3a8",{cast:!1,recv:!0});e.position.set(n.x,.03,n.z),ae.add(e);let t=C(P.cyl(4.6,4.6,.08,40),"#5ec2f5",{cast:!1,recv:!0});t.position.set(n.x,.07,n.z),ae.add(t);let i=C(P.box(3.4,.15,1.4),"#c98c55",{recv:!0});i.position.set(n.x-4.3,.2,n.z),ae.add(i),Ft.circles.push({x:n.x+.6,z:n.z,r:4.1});for(let s=0;s<3;s++){let r=new we;{let a=C(P.sph(.3),"#ffe066");a.scale.set(1,.7,1.3),r.add(a)}r.add(Q(C(P.sph(.18),"#ffe066"),0,.3,.3));{let a=Q(C(P.cone(.07,.18,6),"#ff9f43"),0,.28,.5);a.rotation.x=Math.PI/2,r.add(a)}r.userData={a:s*2.1,r:1.5+s*.9},ae.add(r),io.push(r)}io.forEach(s=>{s.userData.cx=n.x+.8,s.userData.cz=n.z}),Qr(n,n.x-5.4,n.z,2.4)}function Qr(n,e,t,i){let s=Ui("\u2B50",1.5,!0);s.position.set(e,i,n.w?n.z:t),s.visible=!1,ae.add(s),Ns.push({pl:n,x:e,z:t,mk:s,baseY:i,emoji:""})}var nr=[];function es(n,e,t,i,s,r="#ffffff"){let a=Math.hypot(i-e,s-t),o=Math.max(1,Math.round(a/1.5)),l=Math.atan2(i-e,s-t);for(let c=0;c<=o;c++)n.add(Q(C(P.box(.16,1,.16),r),e+(i-e)*c/o,.5,t+(s-t)*c/o));for(let c of[.4,.8]){let u=C(P.box(.08,.1,a),r);u.position.set((e+i)/2,c,(t+s)/2),u.rotation.y=l,n.add(u)}Ft.boxes.push({x0:Math.min(e,i)-.15,x1:Math.max(e,i)+.15,z0:Math.min(t,s)-.15,z1:Math.max(t,s)+.15})}var xi={x0:15,x1:31,z0:23,z1:35,gx:23},ts={};function _v(n){let e=new we,t=xi;e.add(Q(C(P.box(t.x1-t.x0,.03,t.z1-t.z0),"#a4dc78",{cast:!1,recv:!0}),(t.x0+t.x1)/2,.015,(t.z0+t.z1)/2)),es(e,t.x0,t.z0,t.gx-1.4,t.z0,"#ffb347"),es(e,t.gx+1.4,t.z0,t.x1,t.z0,"#ffb347"),es(e,t.x0,t.z1,t.x1,t.z1,"#ffb347"),es(e,t.x0,t.z0,t.x0,t.z1,"#ffb347"),es(e,t.x1,t.z0,t.x1,t.z1,"#ffb347");for(let o of[-1.5,1.5])e.add(Q(C(P.box(.3,2.2,.3),"#ff8c42"),t.gx+o,1.1,t.z0));e.add(Q(C(P.box(3.3,.35,.35),"#ff8c42"),t.gx,2.3,t.z0));let i=Us("\u{1F415}",1.1);i.position.set(t.gx,3.05,t.z0),e.add(i);let s=C(new qs(.9,.9,3.2,16,1,!0,0,Math.PI),"#ff6b8b",{extra:{side:Rn}});s.rotation.z=Math.PI/2,s.rotation.y=Math.PI/2,s.position.set(18.5,0,32),e.add(s),Ft.boxes.push({x0:16.9,x1:20.1,z0:31,z1:33});for(let o=0;o<3;o++){let l=C(new pn(.6,.07,8,20),["#6fc2ff","#ffd23f","#8be08b"][o]);l.position.set(25+o*2,.75,33),e.add(l)}for(let o=0;o<4;o++)e.add(Q(C(P.cone(.25,.6,10),"#ff9f43"),17+o*1.3,.3,26));let r=new we;r.add(Q(C(P.cyl(.25,.3,.9,10),"#b8bcc8"),0,.45,0)),r.add(Q(C(P.cyl(.55,.4,.2,14),"#dfe3ee"),0,.2,.6)),r.add(Q(C(P.cyl(.42,.42,.04,14),"#6cc8ff",{cast:!1}),0,.3,.6)),r.position.set(29.5,0,25),e.add(r),Ft.circles.push({x:29.5,z:25,r:.4}),ts.water=[29.5,26.4,Math.PI];let a=new we;a.add(Q(C(P.box(2,.15,.6),"#d79b5f"),0,.5,0)),a.add(Q(C(P.box(2,.5,.12),"#d79b5f"),0,.85,-.25)),a.position.set(28,0,34.2),e.add(a),ts.disc=C(P.cyl(.32,.32,.06,18),"#ff4fa0"),ts.disc.visible=!1,e.add(ts.disc),ae.add(e),Qr(n,t.gx,t.z0+1.6,3.8)}var nn={mirador:[65,22.6],chest:[47.2,42],cave:[65,43.4]},_i=null,mi=null;function yv(n,e){let t=Dt,i=new we;i.add(Q(C(P.box(t.x1-t.x0+4,.025,t.z1-t.z0+4),"#79c662",{cast:!1,recv:!0}),(t.x0+t.x1)/2+2,.012,(t.z0+t.z1)/2+2));let s=(y,p,d,g)=>{let E=Math.abs(d-y)||1.2,M=Math.abs(g-p)||1.2;i.add(Q(C(P.box(E,1.5,M),"#3f9a4e"),(y+d)/2,.75,(p+g)/2)),Ft.boxes.push({x0:(y+d)/2-E/2,x1:(y+d)/2+E/2,z0:(p+g)/2-M/2,z1:(p+g)/2+M/2})};s(t.x0,t.z0,t.x0,t.gateZ-1.6),s(t.x0,t.gateZ+1.6,t.x0,t.z1+2),s(t.x0,t.z0,t.x1+2,t.z0);for(let y of[-1.7,1.7])i.add(Q(C(P.box(.5,3,.5),"#9a6236"),t.x0,1.5,t.gateZ+y));i.add(Q(C(P.box(.6,.5,4),"#9a6236"),t.x0,3.1,t.gateZ));let r=Us("\u{1F5FA}\uFE0F",1.2);r.rotation.y=-Math.PI/2,r.position.set(t.x0-.35,3.9,t.gateZ),i.add(r);let a=3;i.add(Q(C(P.box(t.x1-t.x0+4,.08,a),"#5ec2f5",{cast:!1,recv:!0}),(t.x0+t.x1)/2+2,.06,t.riverZ)),Ft.boxes.push({x0:t.x0,x1:t.bridgeX-1.4,z0:t.riverZ-a/2,z1:t.riverZ+a/2},{x0:t.bridgeX+1.4,x1:t.x1+2,z0:t.riverZ-a/2,z1:t.riverZ+a/2});let o=new we;for(let y=0;y<7;y++)o.add(Q(C(P.box(2.6,.12,.6),"#c98c55",{recv:!0}),0,.22+Math.sin(y/6*Math.PI)*.25,-1.8+y*.6));for(let y of[-1.35,1.35]){o.add(Q(C(P.box(.12,.12,4.2),"#8a5a30"),y,1,0));for(let p of[-2,0,2])o.add(Q(C(P.box(.14,.9,.14),"#8a5a30"),y,.55,p))}o.position.set(t.bridgeX,0,t.riverZ),i.add(o);for(let y=0;y<10;y++){let p=C(new Xs(.25+e()*.3),"#a8adb8");p.position.set(t.x0+2+e()*(t.x1-t.x0-4),.1,t.riverZ+(e()<.5?-1:1)*(a/2+.3)),i.add(p)}let l=C(P.cone(1.8,2.4,4),"#e8a040");l.rotation.y=Math.PI/4,l.position.set(48.5,1.2,25),i.add(l),i.add(Q(C(P.box(.8,1.2,.05),"#5a3a20"),48.5,.6,26.28)),Ft.circles.push({x:48.5,z:25,r:1.6});let c=new we;for(let y=0;y<5;y++){let p=C(P.cyl(.08,.08,.8,6),"#7a4a24");p.rotation.z=Math.PI/2,p.rotation.y=y*1.25,p.position.y=.1,c.add(p)}let u=C(P.cone(.32,.8,8),"#ff8c1a",{extra:{emissive:"#ff5a00"},cast:!1});u.position.y=.45,c.add(u),c.position.set(45.5,0,25),i.add(c),ts.flame=u,Ft.circles.push({x:45.5,z:25,r:.6}),_i=xo({coat:"#5f8a3a",skin:"#d8a070",hair:"#5a3a20",extra:y=>{let p=C(P.cyl(.55,.55,.06,16),"#8a6a3a");p.position.y=2.35,y.add(p),y.add(Q(C(P.cyl(.3,.33,.3,14),"#8a6a3a"),0,2.5,0))}}),_i.position.set(47,0,22.4),_i.rotation.y=-.4,_i.scale.setScalar(.85),i.add(_i),Ft.circles.push({x:47,z:22.4,r:.5}),nr.push([47,24,4.5]);let f=new we;f.add(Q(C(P.cyl(1.2,1.4,4,12),"#c8c0b0"),0,2,0)),f.add(Q(C(P.cyl(1.6,1.6,.3,12),"#9a8a78"),0,4.15,0));for(let y=0;y<8;y++){let p=y/8*Math.PI*2;f.add(Q(C(P.box(.3,.5,.3),"#9a8a78"),Math.cos(p)*1.45,4.5,Math.sin(p)*1.45))}f.add(Q(C(P.cyl(.05,.05,2,6),"#666666"),0,5.3,0)),f.add(Q(C(P.box(.9,.5,.05),"#ff5c5c"),.45,6,0)),f.add(Q(C(P.box(.9,1.6,.1),"#6a4a2a"),0,.8,1.3)),f.position.set(65,0,20.8),i.add(f),Ft.circles.push({x:65,z:20.8,r:1.45}),nr.push([65,21,4]);for(let[y,p,d]of[[45.5,44.5,2.4],[47.5,45.5,1.4],[50,44.8,2.8],[51.5,46,1],[44.8,42.8,.9]])i.add(Q(C(P.cyl(.4,.45,d,10),"#d8d0c0"),y,d/2,p)),Ft.circles.push({x:y,z:p,r:.5});i.add(Q(C(P.box(3,.4,.8),"#c8c0b0"),48,.2,46.6)),mi=new we,mi.add(Q(C(P.box(.9,.55,.6),"#8a5a2a"),0,.28,0));let h=C(P.box(.95,.2,.65),"#d4a020");h.position.set(0,.62,0),mi.add(h),mi.userData.lid=h,mi.add(Q(C(P.box(.16,.22,.05),"#ffd23f"),0,.38,.32)),mi.position.set(nn.chest[0],0,nn.chest[1]+1.1),mi.rotation.y=0,i.add(mi),Ft.circles.push({x:nn.chest[0],z:nn.chest[1]+1.1,r:.5}),nr.push([48,44,4.5]);let m=new we,x=yi(77);for(let y=0;y<12;y++){let p=Math.PI*(y/11),d=C(new Xs(.8+x()*.4),y%2?"#8a90a8":"#a4a9bc");d.position.set(Math.cos(p)*2.2,Math.sin(p)*2.2,0),d.rotation.set(x()*3,x()*3,0),m.add(d)}m.add(Q(C(new xs(1.7,24,0,Math.PI),"#241c3a",{cast:!1}),0,0,.1));for(let y=0;y<6;y++){let p=C(P.cone(.18,.7,5),y%2?"#80f0ff":"#c0a0ff",{extra:{emissive:y%2?"#106070":"#402870"}});p.position.set(-2.6+y%3*.3+(y>2?4.9:0),.35,.6+y%2*.3),p.rotation.z=(x()-.5)*.6,m.add(p)}m.rotation.y=Math.PI,m.position.set(65,0,45),i.add(m),Ft.boxes.push({x0:61.8,x1:68.2,z0:44.8,z1:46.8}),nr.push([65,44,4.5]);for(let y=0;y<6;y++){let p=0,d=0;for(let M=0;M<40&&(p=t.x0+3+e()*(t.x1-t.x0-6),d=t.z0+3+e()*(t.z1-t.z0-6),!(Math.abs(d-t.riverZ)>3&&!nr.some(([v,w,_])=>Math.hypot(p-v,d-w)<_)));M++);let g=new we;g.add(Q(C(P.cyl(.18,.24,.9,8),"#fff4e0"),0,.45,0));let E=C(new _s(.6,14,8,0,Math.PI*2,0,Math.PI/2),y%2?"#ff5c5c":"#b98cff");E.position.y=.85,g.add(E),g.position.set(p,0,d),i.add(g),Ft.circles.push({x:p,z:d,r:.35})}ae.add(i),Qr(n,46,20.6,3.6)}var ni=[];function rd(){let n=new we,e=C(P.cyl(.09,.09,.6,8),"#fff6e0");e.rotation.z=Math.PI/2,n.add(e);for(let t of[-.32,.32])for(let i of[-.09,.09]){let s=C(P.sph(.12,10,8),"#fff6e0");s.position.set(t,0,i),n.add(s)}return n}function Yp(n){ni.forEach(i=>ae.remove(i.m)),ni.length=0,n.mapBones.day!==n.day&&(n.mapBones={day:n.day,taken:[]});let e=yi(n.bornAt%1e5+n.day*7919+3),t=0;for(let i=0;i<8&&t<3e3;t++){let s=De.x0+2+e()*(De.x1-De.x0-4),r=De.z0+2+e()*(De.z1-De.z0-4);if(!Dn(s,r,.8)){if(!n.mapBones.taken.includes(i)){let a=rd();a.position.set(s,.45,r),ae.add(a),ni.push({m:a,i})}i++}}if(Pn=null,n.day>=2&&!(n.treasure&&n.treasure.day===n.day)){let i=yi(n.bornAt%99991+n.day*104729);for(let s=0;s<800;s++){let r=De.x0+2+i()*(De.x1-De.x0-4),a=De.z0+2+i()*(De.z1-De.z0-4);if(!(Dn(r,a,1)||Math.hypot(r+16,a+9)<8)){Pn={x:r,z:a};break}}}}var Pn=null;function Dn(n,e,t){return n<De.x0||n>De.x1||e<De.z0||e>De.z1||Ft.boxes.some(i=>n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)?!0:Math.abs(e-7)<.7&&n>11&&n<15?!1:Ft.circles.some(i=>(n-i.x)**2+(e-i.z)**2<(i.r+t)**2)}var St=new Bn,Up=jr(St),Ic={},Ch=[];function vv(){St.background=new qe("#ffe9f4"),Up.sun.position.set(4,10,6),Up.sun.target.position.set(0,0,0);let n=C(P.box(12,.2,9),"#e7b98a",{cast:!1,recv:!0});n.position.y=-.1,St.add(n);for(let y=-5;y<=5;y+=1){let p=C(P.box(.03,.01,9),"#d4a274",{cast:!1});p.position.set(y,.005,0),St.add(p)}let e=C(P.box(12,5,.2),"#ffd1e6",{recv:!0});e.position.set(0,2.5,-4.5),St.add(e);let t=C(P.box(.2,5,9),"#c8f1e4",{recv:!0});t.position.set(-6,2.5,0),St.add(t);let i=C(P.box(2.6,1.8,.1),"#ffffff");i.position.set(2,2.9,-4.38),St.add(i);let s=C(P.box(2.3,1.5,.1),"#9fdcff",{cast:!1});s.position.set(2,2.9,-4.32),St.add(s);let r=Us("\u{1F43E}",1.2);r.position.set(-2.5,3,-4.35),St.add(r);let a=C(P.cyl(2.2,2.2,.04,32),"#ffb3d1",{cast:!1,recv:!0});a.position.set(0,.02,.5),St.add(a);let o=new we;o.add(Q(C(P.cyl(1.2,1.3,.35,24),"#8f6fd8",{recv:!0}),0,.18,0)),o.add(Q(C(P.cyl(1,1,.1,24),"#ffe8f4",{recv:!0}),0,.36,0));let l=C(new pn(1.15,.22,10,26),"#a78bfa");l.rotation.x=Math.PI/2,l.position.y=.4,o.add(l),o.position.set(-3.6,0,-2.6),St.add(o);let c=(y,p,d)=>{let g=new we;g.add(Q(C(P.cyl(.45,.35,.25,20),y),0,.13,0));let E=C(P.cyl(.36,.36,.05,20),d,{cast:!1});return E.position.y=.24,g.add(E),g.userData.fill=E,g.position.set(p,0,-3),St.add(g),g};Ic.food=c("#ff7b7b",.6,"#b0703c"),Ic.water=c("#6f8cff",2,"#7fd6ff");let u=C(P.box(1.4,.8,1),"#ffd23f");u.position.set(4.3,.4,-3),St.add(u);let f=C(P.sph(.28),"#6fc2ff");f.position.set(4,.95,-3),St.add(f);let h=C(P.box(.3,.3,.3),"#ff8fc8");h.position.set(4.6,.95,-2.9),St.add(h);let m=new we;m.add(Q(C(P.box(2.2,.8,1.4),"#ffffff"),0,.45,0)),m.add(Q(C(P.box(1.9,.1,1.1),"#bfe9ff",{cast:!1}),0,.82,0));for(let y of[-.9,.9])for(let p of[-.5,.5])m.add(Q(C(P.sph(.12),"#ffd23f"),y,.06,p));m.position.set(-4.3,0,1.6),St.add(m),Ic.tub=m;let x=C(P.cyl(.35,.28,.6,14),"#ff9f43");x.position.set(5.2,.3,.8),St.add(x);for(let y=0;y<3;y++){let p=C(P.sph(.35,10,8),"#5cbf5a");p.position.set(5.2+Math.cos(y*2)*.2,.9+y*.15,.8+Math.sin(y*2)*.2),St.add(p)}}var Dc={food:[.6,-2,Math.PI],water:[2,-2,Math.PI],bed:[-3.6,-2.6,.6],tub:[-4.3,1.6,.8],center:[0,.6,.3],toys:[3.6,-2.2,Math.PI*.8]};function Nc(n){Ch.forEach(t=>St.remove(t)),Ch=[];let e=[[2.6,1.6],[-1.4,2.4],[3.6,2.6]];for(let t=0;t<Math.min(n.mess,3);t++){let i=Ui("\u{1F4A9}",.8);i.position.set(e[t][0],.4,e[t][1]),St.add(i),Ch.push(i)}}var Gt=ae,Te=null,R={x:-16,z:-9,ry:0,speed:0,mode:"idle",modeT:0,path:null},fe="town",mt=!1,bc=0,Oe={up:0,down:0,left:0,right:0,a:!1,jx:0,jz:0},Ke=null,k={x:-16,z:-8.6,ry:0},gi=[];function mo(n,e,t=0){k.x=n,k.z=e,k.ry=t,R.x=n-Math.sin(t)*1.3,R.z=e-Math.cos(t)*1.3,R.ry=t,R.path=null,gi=[{x:R.x,z:R.z},{x:n,z:e}]}function Zp(n,e,t=0){k.x=n,k.z=e,k.ry=t,gi=[{x:R.x,z:R.z},{x:n,z:e}]}var Vc=()=>!!Te&&!!Ke&&Te.root.parent===Ke.root.parent;function Mv(n,e,t){let i=gi[gi.length-1];(!i||Math.hypot(k.x-i.x,k.z-i.z)>=.05)&&gi.push({x:k.x,z:k.z}),gi.length>300&&gi.shift();let s=1.15+t*.12,r=k.x,a=k.z,o=r,l=a;for(let m=gi.length-1;m>=0;m--){let x=gi[m],y=Math.hypot(r-x.x,a-x.z);if(y>=s){let p=s/y;o=r+(x.x-r)*p,l=a+(x.z-a)*p,s=0;break}s-=y,r=x.x,a=x.z,o=r,l=a}let c=o-R.x,u=l-R.z,f=Math.hypot(c,u);if(f<.03)return null;let h=Math.min(f,e*n*(f>1.5?1.7:1));return R.x+=c/f*h,R.z+=u/f*h,{dx:c/f,dz:u/f,sp:h/n}}function Wc(n){Ne=n,ze.root.activeId=n.id;let e=n.pet;simulate(e,now(e)),Te&&Te.root.parent&&Te.root.parent.remove(Te.root),Te=kc(e),Ke&&Ke.root.parent&&Ke.root.parent.remove(Ke.root),Ke=lv(n.avatar),mo(-16,-8.6,0),Gt=ae,fe="town",ae.add(Te.root,Ke.root),Yp(e),fd(e),saveRoot(),ue("#picker").hidden=!0,ue("#hud").hidden=!1,ut(),Jp(e),speak(`\xA1Hola ${n.name}! \xA1Vamos a pasear!`),setTimeout(()=>dogSound("happy",stageOf(e.day).size),2200)}function Jp(n){let e=new Date(now(n)).getHours(),t=e<7||e>=20,i=e>=18&&!t;Cm=t;let s=t?"#2d3466":i?"#ffc7a8":"#bfe6ff";ae.background.set(s),ae.fog.color.set(s),Qa.hemi.intensity=t?.7:1.7,Qa.sun.intensity=t?.5:i?1.6:2.3,Qa.sun.color.set(t?"#9fb0ff":i?"#ffc08a":"#fff4e0");for(let r of gn)for(let a of r.wins||[])a.material=Yr("#bfe9ff",{emissive:t?"#ffd27a":"#000000"})}var bv={feliz:"\u{1F604}",normal:"\u{1F642}",triste:"\u{1F622}",enferma:"\u{1F912}",dormida:"\u{1F634}"};function ut(){if(!Ne)return;let n=Ne.pet,e=STAT_INFO.map(t=>{let i=Math.round(n.stats[t.key]);return`<div class="hb ${i<25?"low":""}" title="${t.label}"><span>${t.icon}</span><i><b style="width:${i}%;background:${t.color}"></b></i></div>`}).join("");ue("#hud").innerHTML=`<div class="hud-left"><a class="hbtn" href="../index.html" aria-label="Volver al juego 2D">\u{1F579}\uFE0F</a><span class="face">${bv[moodOf(n)]}</span></div>
    <div class="hud-bars">${e}</div><div class="hud-right"><span class="chip">\u{1F9B4} ${n.bones}</span><span class="chip">${qc[stageOf(n.day).id]} ${n.day}</span><button class="hbtn" id="diary3" aria-label="Diario">\u{1F4D6}</button><button class="hbtn" id="music" aria-label="M\xFAsica">${Music.isOn()?"\u{1F3B5}":"\u{1F515}"}</button><button class="hbtn" id="mute" aria-label="Sonido">${Wr?"\u{1F507}":"\u{1F50A}"}</button></div>`,qn()}var qc={recien:"\u{1F423}",bebe:"\u{1F37C}",cachorra:"\u{1F436}",joven:"\u{1F415}",adulta:"\u{1F382}"},an=null,Li=null;function Sv(){let n=ue("#prompt"),e=Ne.pet,t="";fe==="town"&&(e.asleep&&fm()?t='<button class="go-btn" data-act="wake" aria-label="Despertar">\u{1F4A4} \u279C \u23F0</button>':an?t=e.day<(an.pl.minDay||1)?`<button class="go-btn locked" data-act="enter" aria-label="${an.pl.name}: cerrado">\u{1F512} ${an.pl.icon} <small>\u23F3${an.pl.minDay-e.day}</small></button>`:`<button class="go-btn" data-act="enter" aria-label="Entrar a ${an.pl.name}">\u24B6 ${an.pl.icon}</button>`:Li&&(t=`<button class="go-btn ${Li.warn?"locked":""}" data-act="enter" aria-label="${ii(Li.label)}">\u24B6 ${Li.icon} <small>${ii(Li.label)}</small></button>`)),n.__h!==t&&(n.innerHTML=t,n.__h=t),n.hidden=!t}function ws(){if(fe!=="home")return;let n=Ne.pet,e=n.stats,t=n.day,i=today(n),s=foodFor(t),r=(l,c)=>l?c:"",a=n.asleep?"\u{1F4A4}":"",o=[["eat",s.icon,"Comer",a||r(e.saciedad>=90,"\u{1F60B}")],t>=4?["water","\u{1F4A7}","Agua",a||r(e.hidratacion>=92,"\u{1F4A7}")]:null,["pet","\u{1F917}","Mimos",""],["memory","\u{1F0CF}","Memoria",""],n.items.premio>0?["treat","\u{1F36A}","Premio",a||r((i.treats||0)>=3,"\u23F3")]:null,n.items.mordedor&&t>=3?["toy","\u{1F9F8}","Jugar",a||r(e.energia<15,"\u{1F634}")]:null,n.asleep?["wake","\u23F0","Despertar",""]:["sleep","\u{1F6CF}\uFE0F","Dormir",""],["nap","\u{1F634}","Siesta",a||r(i.naps>=3,"\u23F3")||r(e.energia>=90,"\u26A1")],t<8?["wipe","\u{1F9FD}","Limpiar",a]:["bath","\u{1F6C1}","Ba\xF1o",a||r(n.lastDone.bano&&t-n.lastDone.bano<3,"\u23F3")],t>=3?["brush","\u{1F58C}\uFE0F","Cepillar",a]:null,n.mess?["clean","\u{1F9FB}","Recoger",""]:null,t>=3?["potty","\u{1F9FB}","Papel",a||r(n.potty>=100,"\u2714")||r((i.potty||0)>=3,"\u23F3")]:null,["ropa","\u{1F380}","Ropa",n.acc.owned.length?"":"\u{1F6D2}"],["exit","\u{1F6AA}","Salir",""],["help","\u2753","Ayuda",""]].filter(Boolean);ue("#actions").innerHTML=o.map(([l,c,u,f])=>`<button class="opt ${f?"off":""}" data-act="${l}" data-say="${u}" ${f?'aria-disabled="true"':""} aria-label="${u}"><span class="oi">${c}</span><span class="on">${u}</span>${f?`<span class="badge">${f}</span>`:""}</button>`).join(""),typeof qn=="function"&&setTimeout(qn,0)}function eo(n){let e=today(Ne.pet);n==="meal"&&e.meals++,n==="water"&&e.water++,n==="play"&&e.play++,n==="care"&&e.care++}function go(n){let e=Ne.pet;if(mt&&n!=="exit")return;n!=="exit"&&setTimeout(()=>si("do:"+n),0);let t=foodFor(e.day),i=(s,r,a,o,l,c,u,f,h,m)=>{mt=!0,Tn(Dc[s],()=>{R.mode=r,R.modeT=a,s==="food"&&(Ic.food.userData.fill.visible=!0),speak(u),_t("pop");let x=performance.now(),y=setInterval(()=>{st(St,f,new D(R.x,1.6*Te.root.scale.x+.3,R.z),1,.45),performance.now()-x>a*1e3&&clearInterval(y)},350);setTimeout(()=>{applyFx(e,o),eo(l),addEvent(e,c,h),m&&m();let p=Object.entries(o).filter(([,d])=>d>0).map(([d])=>STAT_ICON[d]).join("");nt(c,p?"+"+p:""),R.mode=r==="sleep"?"sleep":"happy",R.modeT=r==="sleep"?0:1,r!=="sleep"&&dogSound("happy",ht(),.7),mt=!1,saveRoot(),ut(),ws(),Nc(e),qn()},a*1e3)})};switch(n){case"eat":return i("food","eat",2.2,t.fx,"meal",t.icon,"\xA1\xD1am \xF1am!","\u{1F356}",t.msg);case"water":return i("water","eat",1.8,{hidratacion:40},"water","\u{1F4A7}","\xA1Glu glu!","\u{1F4A7}","Luna bebi\xF3 agua fresca.");case"pet":R.mode="happy",R.modeT=1.4,st(St,"\u{1F496}",new D(R.x,1.4,R.z),6),applyFx(e,e.asleep?{felicidad:4}:{felicidad:12,energia:-2}),eo("play"),addEvent(e,"\u{1F917}","Mimos y caricias."),nt("\u{1F917}","+\u{1F496}"),speak("\xA1Te quiero!"),setTimeout(()=>dogSound("happy",ht()),600),saveRoot(),ut();return;case"toy":return i("toys","happy",2,{felicidad:18,energia:-8},"play","\u{1F9F8}","\xA1A jugar!","\u2B50","Jug\xF3 con el mordedor.");case"sleep":mt=!0,Tn(Dc.bed,()=>{e.asleep=!0,R.mode="sleep",addEvent(e,"\u{1F6CF}\uFE0F","Se fue a dormir a su camita."),nt("\u{1F6CF}\uFE0F","\u{1F4A4}"),speak("Buenas noches, Luna"),mt=!1,saveRoot(),ut(),ws()});return;case"wake":e.asleep=!1,e.stats.energia<60&&(e.stats.felicidad=clamp(e.stats.felicidad-6,0,100)),R.mode="idle",addEvent(e,"\u23F0","Despertaste a Luna."),nt("\u23F0"),speak("\xA1Buenos d\xEDas!"),saveRoot(),ut(),ws();return;case"nap":return i("bed","sleep",2.5,{energia:25},null,"\u{1F634}","Siestita","\u{1F4A4}","Durmi\xF3 una siesta cortita.",()=>{today(e).naps++,R.mode="idle"});case"wipe":return i("center","happy",1.6,{higiene:20},"care","\u{1F9FD}","\xA1Limpita!","\u{1FAE7}","La limpiaste con un pa\xF1o tibio.");case"bath":return i("tub","happy",2.6,{higiene:60,felicidad:e.items.champu>0?8:-3},"care","\u{1F6C1}","\xA1Al agua!","\u{1FAE7}","Se dio un ba\xF1o.",()=>{e.lastDone.bano=e.day,e.items.champu>0&&e.items.champu--});case"brush":return i("center","happy",1.6,{higiene:10,felicidad:5},"care","\u{1F58C}\uFE0F","\xA1Qu\xE9 suave!","\u2728","Le cepillaste el pelo.");case"clean":e.mess=0,eo("care"),addEvent(e,"\u{1F9FB}","Limpiaste los accidentes."),st(St,"\u2728",new D(1.5,.6,2),6),nt("\u{1F9FB}","\u2714"),speak("\xA1Todo limpio!"),Nc(e),saveRoot(),ws();return;case"potty":{if(e.asleep||e.potty>=100||(today(e).potty||0)>=3)return;today(e).potty=(today(e).potty||0)+1;let s=8+Math.round(Math.random()*6);e.potty=Math.min(100,e.potty+s),today(e).train++,R.mode="sit",R.modeT=1.2,nt("\u{1F9FB}",`+${s}%`),speak("\xA1Muy bien, en el papel!"),addEvent(e,"\u{1F393}",`Practicaron usar el papel (${e.potty}%).`),e.potty>=100&&addMilestone(e,"potty","\u{1F3C6}","Luna aprendi\xF3 a hacer sus necesidades en su lugar."),saveRoot(),ws();return}case"ropa":{let s=[null,...e.acc.owned];e.acc.worn=s[(s.indexOf(e.acc.worn)+1)%s.length],R.mode="happy",R.modeT=1,nt(e.acc.worn?SHOP.find(r=>r.id===e.acc.worn).icon:"\u{1F6AB}"),speak(e.acc.worn?"\xA1Qu\xE9 guapa!":""),saveRoot();return}case"exit":return wv();case"memory":return NM();case"treat":{if(e.asleep||!e.items.premio)return;e.items.premio--,today(e).treats=(today(e).treats||0)+1,R.mode="happy",R.modeT=1.4,applyFx(e,{felicidad:10,saciedad:5}),addEvent(e,"\u{1F36A}","Le diste un premio."),st(St,"\u{1F36A}",new D(R.x,1.4,R.z),3),nt("\u{1F36A}","+\u{1F496}"),speak("\xA1Un premio!"),setTimeout(()=>dogSound("happy",ht()),400),saveRoot(),ut(),ws();return}}}var Kp=!1;function jp(){Kp=!0,fe="park",speak("Parque"),dogSound("bark",ht(),.6),Qp(),ue("#actions").hidden=!1,ue("#prompt").hidden=!0,si("open:parque")}function ir(){Kp=!1,fe="town",mt=!1,R.path=null,ue("#actions").hidden=!0}function Qp(){if(fe!=="park")return;let n=Ne.pet,e=n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":"",t=[["agility","\u{1F3C3}","Carrera",e],["hide","\u{1F648}","Escondite",n.day<5?"\u{1F512}":e],["stroll","\u{1F6B6}","Pasear",e],["kick","\u26BD","Pelota",e],["bench","\u{1FA91}","Descansar",n.asleep?"\u{1F4A4}":n.stats.energia>=95?"\u26A1":""],["closepark","\u{1F6AA}","Salir",""],["help","\u2753","Ayuda",""]];ue("#actions").innerHTML=t.map(([i,s,r,a])=>`<button class="opt ${a?"off":""}" data-act="${i}" data-say="${r}" ${a?'aria-disabled="true"':""} aria-label="${r}"><span class="oi">${s}</span><span class="on">${r}</span>${a?`<span class="badge">${a}</span>`:""}</button>`).join("")}function Ev(n){let e=Ne.pet,t=gn.find(s=>s.id==="parque");if(n==="closepark")return ir();if(mt)return;if(n==="agility")return ir(),AM();if(n==="hide")return ir(),_m();let i=(s,r,a,o)=>{applyFx(e,s),today(e).play+=r==="\u{1FA91}"?0:1,addEvent(e,r,a);let l=Object.entries(s).filter(([,c])=>c>0).map(([c])=>STAT_ICON[c]).join("");nt(r,l?"+"+l:""),speak(o),dogSound("happy",ht(),.7),R.mode="happy",R.modeT=1,mt=!1,outdoorRisk(e),saveRoot(),ut(),Qp()};if(mt=!0,n==="stroll"){let s=[0,1,2,3,4].map(a=>[t.x+Math.cos(a*Math.PI/2)*3.2,t.z+Math.sin(a*Math.PI/2)*3.2]),r=()=>{let a=s.shift();if(!a)return today(e).walk=1,i({felicidad:15,energia:-10,hidratacion:-5},"\u{1F6B6}","Paseo alrededor de la fuente.","\xA1Qu\xE9 lindo paseo!");Tn([a[0],a[1],0],r)};r()}else if(n==="kick"){let s=wt.m.position;Tn([s.x-.9,s.z,Math.PI/2],()=>{wt.v.set(6+Math.random()*3,0,(Math.random()-.5)*6),_t("pop"),dogSound("bark",ht()),R.mode="happy",R.modeT=1.5,setTimeout(()=>i({felicidad:16,energia:-9},"\u26BD","Jug\xF3 con la pelota en el parque.","\xA1Gol!"),1500)})}else n==="bench"&&Tn([t.x-3.2,t.z+1,Math.PI/2],()=>{R.mode="sleep",setTimeout(()=>i({energia:10},"\u{1FA91}","Descansaron en la banca.","Descansito"),1800)})}function Tn(n,e){R.path={x:n[0],z:n[1],ry:n[2],done:e}}function vi(n){let e=ue("#fade");e.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>e.classList.remove("on"),60)},380)}function Tv(){vi(em)}function em(){Ln(Te.root,St),Ln(Ke.root,St),Gt=St,fe="home",R.x=0,R.z=2.8,R.ry=Math.PI,R.path=null,k.x=2.4,k.z=3.4,k.ry=Math.PI,Ne.pet.asleep&&(R.x=Dc.bed[0],R.z=Dc.bed[1]),Nc(Ne.pet),ws(),ue("#actions").hidden=!1,ue("#prompt").hidden=!0,speak("Casa"),setTimeout(()=>dogSound("bark",ht(),.6),600),si("open:casa")}function wv(){mt=!1,vi(()=>{let n=Ne.pet.asleep,e=R.x,t=R.z,i=R.ry;n||Ln(Te.root,ae),Ln(Ke.root,ae),Gt=ae,fe="town",mo(-16,-9.4,0),n&&(R.x=e,R.z=t,R.ry=i,speak("Luna se queda durmiendo en su camita. \xA1Mientras, puedes pasear!")),ue("#actions").hidden=!0,si("close:casa")})}function ea(n){n=[["help","\u2753","Ayuda",""]].concat(n),ue("#actions").innerHTML=n.filter(Boolean).map(([e,t,i,s,r])=>`<button class="opt ${s?"off":""}" data-act="${e}" data-say="${i}" ${s?'aria-disabled="true"':""} aria-label="${i}"><span class="oi">${t}</span><span class="on">${i}</span>${r?`<span class="ofx">${r}</span>`:""}${s?`<span class="badge">${s}</span>`:""}</button>`).join(""),typeof qn=="function"&&setTimeout(qn,0)}function ns(n){let e=ue("#roominfo");e.innerHTML=n||"",e.hidden=!n}var Uc=null;function tn(n,e){ue("#card3-box").innerHTML=`${n}<div class="row-btns"><button class="go" data-card="ok" aria-label="Continuar">\u25B6</button></div>`,ue("#card3").hidden=!1,Uc=e||null}function ad(){if(ue("#card3").hidden)return;ue("#card3").hidden=!0;let n=Uc;Uc=null,n&&n()}var tm=n=>"\u2605".repeat(Math.round(n/20))+"\u2606".repeat(5-Math.round(n/20)),so=n=>n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":n.stats.saciedad<10?"\u{1F356}":"";function xo({coat:n="#ffffff",skin:e="#f2c9a0",hair:t="#6b4a2b",extra:i=null}){let s=new we;for(let l of[-.18,.18])s.add(Q(C(P.cyl(.11,.11,.8,8),"#4a4a6a"),l,.4,0));s.add(Q(C(P.cap(.38,.6),n),0,1.25,0));let r=Q(C(P.sph(.34,18,14),e),0,2.05,0);s.add(r),s.add(Q(C(new _s(.36,16,10,0,Math.PI*2,0,Math.PI/2.2),t),0,2.12,-.03));for(let l of[-.12,.12])s.add(Q(C(P.sph(.045),"#2a1d18",{cast:!1}),l,2.1,.3));let a=C(new pn(.09,.022,6,12,Math.PI),"#c0505a",{cast:!1});a.rotation.z=Math.PI,a.position.set(0,1.97,.31),s.add(a);for(let l of[-.2,.2])s.add(Q(C(P.sph(.05),"#ff9fb4",{cast:!1}),l,2,.27));let o=[];for(let l of[-1,1]){let c=new we;c.position.set(l*.45,1.55,0);let u=Q(C(P.cap(.09,.45),n),0,-.3,0);c.add(u),c.rotation.z=l*.15,s.add(c),o.push(c)}return i&&i(s),s.userData={arms:o,t:Math.random()*5},s}function od(n,e){if(!n)return;let t=n.userData;t.t+=e,n.position.y=Math.abs(Math.sin(t.t*2))*.04,t.arms[1].rotation.z=.15+Math.max(0,Math.sin(t.t*1.3))*.9*(t.wave>0?1:.15),t.wave>0&&(t.wave-=e)}function Xc(n,{floor:e,back:t,side:i,rug:s}){let r=jr(n);if(r.sun.position.set(4,10,6),r.sun.target.position.set(0,0,0),n.background=new qe("#ffeef8"),n.add(Q(C(P.box(12,.2,9),e,{cast:!1,recv:!0}),0,-.1,0)),n.add(Q(C(P.box(12,5,.2),t,{recv:!0}),0,2.5,-4.5)),n.add(Q(C(P.box(.2,5,9),i,{recv:!0}),-6,2.5,0)),n.add(Q(C(P.box(2.6,1.8,.1),"#ffffff"),3.2,2.9,-4.38)),n.add(Q(C(P.box(2.3,1.5,.1),"#9fdcff",{cast:!1}),3.2,2.9,-4.32)),s){let a=C(P.cyl(2,2,.04,32),s,{cast:!1,recv:!0});a.position.set(0,.02,.8),n.add(a)}}var pi=new Bn,Ki=new Bn,Ii=new Bn,ln={},Is=null;function Av(){Xc(pi,{floor:"#dff4f2",back:"#c9efe9",side:"#ffffff",rug:null});let n=C(P.box(2.4,.12,1.6),"#ff9fc8",{cast:!1,recv:!0});n.position.set(0,.06,-1.6),pi.add(n);let e=C(P.box(1.6,2.2,.8),"#ffffff");e.position.set(-4.2,1.1,-3.8),pi.add(e);let t=new we;t.add(C(P.box(.2,.7,.05),"#ff5c5c")),t.add(C(P.box(.7,.2,.05),"#ff5c5c")),t.position.set(-4.2,1.6,-3.38),pi.add(t);for(let s=0;s<3;s++)pi.add(Q(C(P.cyl(.12,.12,.35,10),["#6fc2ff","#ffd23f","#8be08b"][s]),-4.6+s*.4,2.4,-3.8));let i=new we;i.add(Q(C(P.box(1.2,.15,1),"#b8bcc8"),0,.08,0)),i.add(Q(Us("\u2696\uFE0F",.7),0,.6,-.45)),i.position.set(3.4,0,-2.6),pi.add(i),pi.add(Q(Us("\u{1F489}",1.3),-1.6,3.2,-4.35)),ln.vet=xo({coat:"#ffffff",skin:"#f6d2b0",hair:"#3b2a20",extra:s=>{let r=C(new pn(.22,.03,6,16),"#3aa89c");r.position.set(0,1.62,.3),r.rotation.x=1.2,s.add(r)}}),ln.vet.position.set(1.6,0,-2.6),ln.vet.rotation.y=-.6,pi.add(ln.vet),Is=Ui("\u{1F489}",.9),Is.visible=!1,pi.add(Is)}function nm(){if(fe!=="room"||En!=="vet")return;let n=Ne.pet,e=VACCINES.find(i=>["disponible","atrasada"].includes(vaccineStatus(n,i))),t=dewormDue(n);ea([n.sick&&!n.sick.treated?["cure","\u{1F48A}","Curar","","\u{1FA7A}"]:null,["vac","\u{1F489}","Vacuna",e?"":"\u2714","\u{1F6E1}\uFE0F"],["deworm","\u{1F41B}","Pastilla",t?"":"\u2714","\u{1F6E1}\uFE0F"],["check","\u{1FA7A}","Revisar","","\u2696\uFE0F"],["exit","\u{1F6AA}","Salir",""]]),ns(`<div class="vax">${VACCINES.map(i=>{let s=vaccineStatus(n,i);return`<span class="vx ${s}" title="${i.name}">${s==="pendiente"?"\u23F3":"\u{1F489}"}<b>${s==="aplicada"?"\u2714":s==="atrasada"?"\u2757":s==="disponible"?"\u{1F449}":""}</b></span>`}).join("")}</div>`)}function Rv(n){let e=Ne.pet,t=e.day;if(mt)return;if(n==="check")return tn(Cv(e));let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(e,s)));n==="vac"&&!i||n==="deworm"&&!dewormDue(e)||(mt=!0,Tn([0,-1.6,Math.PI*.75],()=>{ln.vet.userData.wave=2;let s=n==="vac"?"\u{1F489}":"\u{1F48A}";Is.material.map=Ds(s),Is.material.needsUpdate=!0,Is.position.set(R.x+.6,1.6,R.z+.3),Is.visible=!0,n==="vac"?(dogSound("sad",ht()),speak("\xA1Un pinchacito r\xE1pido!")):speak(n==="deworm"?"Una pastilla contra los bichitos":"Medicina para curarse"),setTimeout(()=>{Is.visible=!1,n==="vac"&&(e.vaccines[i.id]=t,applyFx(e,{felicidad:-4}),addEvent(e,"\u{1F489}",`Vacuna aplicada: ${i.name}.`),walkUnlocked(e)&&addMilestone(e,"vacunas","\u{1F6E1}\uFE0F","Luna complet\xF3 sus vacunas de cachorro."),nt("\u{1F489}","\u{1F6E1}\uFE0F"),speak("\xA1Qu\xE9 valiente! Toma un premio.")),n==="deworm"&&(e.deworm.push(t),addEvent(e,"\u{1F48A}","Luna tom\xF3 su desparasitante."),nt("\u{1F41B}","\u2714"),speak("\xA1Listo, sin bichitos!")),n==="cure"&&(e.sick.treated=!0,e.stats.salud=clamp(e.stats.salud+10,0,100),addEvent(e,"\u{1F48A}","La veterinaria le dio tratamiento a Luna."),nt("\u{1F48A}","+\u{1FA7A}"),speak("Ahora necesita descansar, comer y beber agua")),st(pi,"\u2B50",new D(R.x,1.4,R.z),5),R.mode="happy",R.modeT=1.2,setTimeout(()=>dogSound("happy",ht()),400),mt=!1,saveRoot(),ut(),nm()},1600)}))}function Cv(n){let e=targetWeight(n.day),t=(n.weight-e)/e,i=VACCINES.filter(s=>n.vaccines[s.id]).length;return speak(t<-.12?"Luna necesita comer un poco m\xE1s":t>.12?"Luna necesita m\xE1s ejercicio":"\xA1Luna est\xE1 muy sana!"),`<div class="result"><h2>\u{1FA7A}</h2>
    <div class="checkrow"><span>\u2696\uFE0F</span><b>${fmtWeight(n.weight)}</b><span>${t<-.12?"\u{1F356}\u2757":t>.12?"\u{1F3C3}":"\u{1F44D}"}</span></div>
    <div class="checkrow"><span>\u{1F489}</span><b>${"\u2714".repeat(i)}${"\xB7".repeat(VACCINES.length-i)}</b></div>
    <div class="checkrow"><span>\u{1F41B}</span><b>${dewormDue(n)?"\u2757":"\u2714"}</b></div>
    ${n.sick?`<div class="checkrow"><span>\u{1F912}</span><b>${n.sick.treated?"\u{1F48A}\u2714":"\u{1F48A}\u2757"}</b></div>`:""}</div>`}function Iv(){Xc(Ki,{floor:"#f6d7b0",back:"#ffe1ef",side:"#fff3c4",rug:"#ffd23f"});let n=C(P.box(4,1,1),"#c98c55");n.position.set(1.5,.5,-2.8),Ki.add(n),Ki.add(Q(C(P.box(4.2,.12,1.2),"#e6a96c"),1.5,1.05,-2.8));for(let e=0;e<3;e++){Ki.add(Q(C(P.box(3.6,.1,.7),"#b07840"),-3.2,.9+e*1.1,-4));for(let t=0;t<5;t++){let i=["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][(t+e)%5];Ki.add(Q(C(t%2?P.sph(.22,10,8):P.box(.4,.4,.4),i),-4.6+t*.7,1.2+e*1.1,-4))}}Ki.add(Q(Us("\u{1F6D2}",1.3),1.5,3.4,-4.35)),ln.tienda=xo({coat:"#ff8fc8",skin:"#e8b48a",hair:"#2a1d18",extra:e=>{let t=C(P.box(.6,.55,.05),"#ffffff");t.position.set(0,1.15,.36),e.add(t)}}),ln.tienda.position.set(1.5,0,-3.8),Ki.add(ln.tienda)}function im(){if(fe!=="room"||En!=="tienda")return;let n=Ne.pet;ea(SHOP.map(e=>{let t=e.acc&&n.acc.owned.includes(e.id)||e.once&&n.items[e.id];return["buy:"+e.id,e.icon,e.short,t?"\u2714":n.bones<e.price?"\u{1F9B4}":"",`\u{1F9B4}${e.price}`]}).concat([["exit","\u{1F6AA}","Salir",""]])),ns(`<div class="wallet">\u{1F9B4} ${n.bones}</div>`)}function Pv(n){let e=Ne.pet,t=SHOP.find(i=>i.id===n);if(!(!t||e.bones<t.price)){if(e.bones-=t.price,t.acc?(e.acc.owned.push(t.id),e.acc.worn=t.id):t.id==="premio"?e.items.premio+=3:t.id==="champu"?e.items.champu+=3:e.items[t.id]=!0,addEvent(e,"\u{1F6D2}",`Compraste: ${t.name}.`),ln.tienda.userData.wave=2,st(Ki,t.icon,new D(R.x,1.5,R.z),4,.7),nt(t.icon,"\u2714"),speak(t.acc?"\xA1Qu\xE9 guapa!":t.short),_t("coin"),R.mode="happy",R.modeT=1.2,dogSound("happy",ht()),Ne.pet.bones>=0){let i=Yc(e);i.seen.shop=!0}saveRoot(),ut(),im()}}function Lv(){Xc(Ii,{floor:"#c8e6a0",back:"#fff3b8",side:"#ffd6e8",rug:null});let n=C(P.box(4.4,2,.12),"#2f5d46");n.position.set(0,2.6,-4.32),Ii.add(n),Ii.add(Q(C(P.box(4.7,.15,.25),"#b07840"),0,1.55,-4.25));for(let t=0;t<4;t++)Ii.add(Q(C(P.cone(.25,.6,12),"#ff9f43"),-3.6+t*1.2,.3,2.6));let e=C(new pn(.7,.07,8,24),"#ff5c8a");e.position.set(3.6,.9,1.4),Ii.add(e),Ii.add(Q(C(P.cyl(.05,.05,1.6,6),"#888888"),2.85,.8,1.4)),Ii.add(Q(C(P.cyl(.05,.05,1.6,6),"#888888"),4.35,.8,1.4)),ln.escuela=xo({coat:"#6f8cff",skin:"#c99872",hair:"#1c1414",extra:t=>{let i=C(P.cyl(.03,.03,.4,6),"#ffffff");i.position.set(.55,1.2,.2),i.rotation.z=.8,t.add(i)}}),ln.escuela.position.set(-2.4,0,-2.8),ln.escuela.rotation.y=.5,Ii.add(ln.escuela)}function sm(){if(fe!=="room"||En!=="escuela")return;let n=Ne.pet,e=today(n),t=e.sessions>=MAX_SESSIONS?"\u23F3":so(n);ea(TRICKS.map(i=>["trick:"+i.id,i.icon,i.short,n.day<i.min?"\u{1F512}":t,tm(n.tricks[i.id]||0)]).concat([["exit","\u{1F6AA}","Salir",""]])),ns(`<div class="wallet">\u{1F393} ${"\u25CF".repeat(e.sessions)}${"\u25CB".repeat(Math.max(0,MAX_SESSIONS-e.sessions))}</div>`)}var Dv={up:"\u2B06\uFE0F",right:"\u27A1\uFE0F",down:"\u2B07\uFE0F",left:"\u2B05\uFE0F"},Wn=null;function Nv(n){let e=Ne.pet,t=TRICKS.find(s=>s.id===n),i=e.tricks[n]||0;Wn={t,len:3+Math.floor(i/34),round:0,ok:0,seq:[],idx:0,phase:"show",pt:0},ue("#actions").hidden=!0,ue("#train3").hidden=!1,speak("\xA1Mira las flechas y luego rep\xEDtelas!"),rm()}function rm(){let n=Wn;n.seq=Array.from({length:n.len},()=>["up","right","down","left"][Math.floor(Math.random()*4)]),n.idx=0,n.phase="show",n.pt=0,Fc()}function Fc(){let n=Wn;if(!n)return;let e=n.phase==="show"?Math.floor((n.pt-.5)/.75):-1;ue("#t3-seq").innerHTML=n.seq.map((t,i)=>{let s=n.phase==="show"?i===e?"on":i<e?"past":"":i<n.idx?"done":"";return`<span class="t3a ${s}">${s?Dv[t]:"\u2754"}</span>`}).join(""),ue("#t3-head").textContent=`${n.t.icon} ${"\u25CF".repeat(n.round)}${"\u25CB".repeat(3-n.round)} ${n.phase==="show"?"\u{1F440}":n.phase==="input"?"\u{1F446}":""}`}var Uv={sentarse:"sit",venir:"happy",pata:"paw",quieta:"sit",echarse:"lie",vuelta:"spin"};function am(n){let e=Wn;!e||e.phase!=="input"||(n===e.seq[e.idx]?(e.idx++,_t("pop"),e.idx>=e.seq.length&&(e.ok++,qh(!0))):qh(!1),Fc())}function qh(n){let e=Wn;e.round++,e.phase="pause",e.pt=0,n?(R.mode=Uv[e.t.id]||"sit",R.modeT=1.6,st(Ii,"\u2B50",new D(R.x,1.6,R.z),5),dogSound("happy",ht()),ln.escuela.userData.wave=1.5):(nt("\u274C"),dogSound("sad",ht()))}function Fv(n){let e=Wn;e&&(e.pt+=n,e.phase==="show"?(e.pt>.6+e.seq.length*.75&&(e.phase="input",e.pt=0),Fc()):e.phase==="input"&&e.pt>5+e.seq.length?(qh(!1),Fc()):e.phase==="pause"&&e.pt>1.7&&(e.round>=3?Ov():rm()))}function Ov(){let n=Wn,e=Ne.pet;Wn=null,ue("#train3").hidden=!0;let t=e.tricks[n.t.id]||0,i=Math.min(100,t+n.ok*9+(n.ok===3?6:0)+(e.stats.felicidad>70?4:0)+2),s=today(e);s.sessions++,s.train++,e.tricks[n.t.id]=i,e.bones+=n.ok,applyFx(e,{energia:-8,saciedad:-3,felicidad:4+n.ok*2}),i>=100&&t<100?addMilestone(e,"trick-"+n.t.id,"\u{1F3C6}",`Luna aprendi\xF3: \xAB${n.t.name}\xBB.`):addEvent(e,"\u{1F393}",`Practicaron \xAB${n.t.name}\xBB (${i}%).`),saveRoot(),ut(),$c(n.ok,n.ok,`<span>${n.t.icon} ${tm(i)}</span>`,()=>{ue("#actions").hidden=!1,sm()})}function $c(n,e,t,i){let s=["\xA1Otra vez!","\xA1Bien!","\xA1Muy bien!","\xA1Genial!"][clamp(n,0,3)];speak(s),setTimeout(()=>dogSound(n?"happy":"sad",ht()),800),tn(`<div class="result"><div class="stars">${"\u2B50".repeat(n)}<span class="dim">${"\u2B50".repeat(3-n)}</span></div><h2>${s}</h2>
    <div class="gains">${e?`<span>\u{1F9B4} +${e}</span>`:""}${t||""}</div></div>`,i)}var En=null,zv={vet:()=>pi,tienda:()=>Ki,escuela:()=>Ii};function Bv(n){let e=Ne.pet;if(e.asleep&&n!=="tienda"){speak("Luna est\xE1 durmiendo. Despi\xE9rtala primero y vengan juntas."),nt("\u{1F4A4}");return}vi(()=>{let t=Vc()&&!e.asleep;Gt=zv[n](),Ln(Ke.root,Gt),t&&(Ln(Te.root,Gt),R.x=0,R.z=2.8,R.ry=Math.PI,R.path=null),fe="room",En=n,k.x=2.4,k.z=3.4,k.ry=Math.PI,om(),ue("#actions").hidden=!1,ue("#prompt").hidden=!0,speak(gn.find(i=>i.id===n).name),setTimeout(()=>dogSound("bark",ht(),.6),600),ln[n]&&(ln[n].userData.wave=2),si("open:"+n)})}function om(){En==="vet"?nm():En==="tienda"?im():En==="escuela"&&sm()}function kv(n){if(n==="exit")return lm(En);if(En==="vet")return Rv(n);if(En==="tienda"&&n.startsWith("buy:"))return Pv(n.slice(4));if(En==="escuela"&&n.startsWith("trick:"))return Nv(n.slice(6))}function lm(n){mt=!1,Wn=null,ue("#train3").hidden=!0,vi(()=>{let e=Vc();e&&Ln(Te.root,ae),Ln(Ke.root,ae),Gt=ae,fe="town",En=null;let t=Ns.find(i=>i.pl.id===n);(e?mo:Zp)(t?t.x:-16,t?t.z+1.6:-9.4,0),ue("#actions").hidden=!0,ns(""),si("close:"+n)})}var As=null;function Hv(){let n=gn.find(e=>e.id==="lago");As=new we,As.add(Q(C(P.cyl(.35,.45,1,12),"#b8bcc8"),0,.5,0)),As.add(Q(C(P.cyl(.45,.35,.2,14),"#dfe3ee"),0,1.05,0)),As.add(Q(C(P.cyl(.3,.3,.05,14),"#6cc8ff",{cast:!1}),0,1.15,0)),As.position.set(n.x-6.5,0,n.z+3),ae.add(As),Ft.circles.push({x:n.x-6.5,z:n.z+3,r:.5})}function cm(){fe="lake",speak("Lago"),dogSound("bark",ht(),.6),um(),ue("#actions").hidden=!1,ue("#prompt").hidden=!0,si("open:lago")}function um(){if(fe!=="lake")return;let n=Ne.pet,e=today(n),t=n.stats;ea([["duckfeed","\u{1F33E}","Dar de comer","","\u{1F986}\u{1F9B4}"],["ducks","\u{1F986}","Mirar patos",n.asleep?"\u{1F4A4}":e.ducks?"\u23F3":"","\u{1F496}"],n.day>=4?["drink","\u{1F6B0}","Beber",n.asleep?"\u{1F4A4}":t.hidratacion>=92?"\u{1F4A7}":"","\u{1F4A7}"]:null,n.day>=8?["splash","\u{1F4A6}","Chapotear",so(n),"\u{1F496}"]:null,["closelake","\u{1F6AA}","Salir",""]])}function Gv(n){let e=Ne.pet,t=gn.find(r=>r.id==="lago"),i=today(e);if(n==="closelake"){fe="town",ue("#actions").hidden=!0;return}if(mt)return;if(n==="duckfeed")return fe="town",ue("#actions").hidden=!0,PM();mt=!0;let s=(r,a,o,l,c)=>{applyFx(e,r),a&&eo(a),addEvent(e,o,l);let u=Object.entries(r).filter(([,f])=>f>0).map(([f])=>STAT_ICON[f]).join("");nt(o,u?"+"+u:""),speak(c),dogSound("happy",ht(),.7),R.mode="happy",R.modeT=1,mt=!1,outdoorRisk(e),saveRoot(),ut(),um()};n==="ducks"&&Tn([t.x-3.2,t.z,Math.PI/2],()=>{io.forEach(o=>{o.userData.r=1.2});let r=0,a=setInterval(()=>{_t("quack"),++r>=3&&clearInterval(a)},450);st(ae,"\u{1F496}",new D(R.x,1.4,R.z),4),setTimeout(()=>{io.forEach((o,l)=>{o.userData.r=1.5+l*.9}),i.ducks=!0,s({felicidad:10},"play","\u{1F986}","Miraron a los patos.","\xA1Cuac cuac!")},1800)}),n==="drink"&&Tn([As.position.x+.9,As.position.z,-Math.PI/2],()=>{R.mode="eat",R.modeT=1.6,setTimeout(()=>s({hidratacion:30},"water","\u{1F6B0}","Bebi\xF3 del bebedero del lago.","\xA1Glu glu!"),1600)}),n==="splash"&&Tn([t.x-4.6,t.z+2.6,Math.PI/2],()=>{R.mode="happy",R.modeT=2;let r=setInterval(()=>st(ae,"\u{1F4A6}",new D(R.x+.5,.6,R.z),2,.5),250);setTimeout(()=>{clearInterval(r),s({felicidad:18,energia:-10,higiene:-18},"play","\u{1F4A6}","Chapote\xF3 en la orilla.","\xA1Splash!")},1800)})}var en=new Bn,Vn=null;function Vv(){fe="forestmenu";let n=Ne.pet;speak("Bosque"),dogSound("bark",ht(),.6);let e=["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"];ea(LEVEL_DEFS.map(t=>{let i=n.levels[t.id],s=t.id===1||n.levels[t.id-1]&&n.levels[t.id-1].done;return["level:"+t.id,e[t.id-1],String(t.id),n.day<t.minDay||!s?"\u{1F512}":so(n),i&&i.done?"\u2B50":""]}).concat([["closeforest","\u{1F6AA}","Salir",""]])),ue("#actions").hidden=!1,ue("#prompt").hidden=!0,si("open:bosque")}function Wv(n){if(n==="closeforest"){fe="town",ue("#actions").hidden=!0;return}n.startsWith("level:")&&qv(Number(n.slice(6)))}function qv(n){let e=LEVEL_DEFS.find(i=>i.id===n),t=buildLevel(e);vi(()=>{for(;en.children.length;)en.remove(en.children[0]);let i=jr(en);en.background=new qe(e.sky[0]),en.fog=new ds(e.sky[0],18,45),i.sun.position.set(5,12,10);let s=e.cave?"#4c3c70":"#b07840",r=e.cave?"#80f0ff":"#58b038",a=P.box(1,1,2),o=[];for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++){let M=t.grid[g][E];(M==="#"||M==="g")&&o.push([E,g,M])}let l=new ps(a,Yr(s),o.length);l.receiveShadow=!0,l.castShadow=!0;let c=new ft;o.forEach(([g,E],M)=>{c.makeTranslation(g+.5,t.h-E-.5,0),l.setMatrixAt(M,c)}),en.add(l);let u=o.filter(g=>g[2]==="g"),f=new ps(P.box(1.02,.25,2.04),Yr(r),u.length);f.receiveShadow=!0,u.forEach(([g,E],M)=>{c.makeTranslation(g+.5,t.h-E-.12,0),f.setMatrixAt(M,c)}),en.add(f);for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++)t.grid[g][E]==="="&&en.add(Q(C(P.box(1,.25,1.6),"#d8a060",{recv:!0}),E+.5,t.h-g-.13,0));let h=yi(n*77);for(let g=0;g<t.w/3;g++){let E=h()*t.w,M=-4-h()*6;if(e.cave)en.add(Q(C(P.cone(.3+h()*.4,1+h(),6),h()<.5?"#c0a0ff":"#80f0ff"),E,2+h()*2,M));else{let v=new we;v.add(Q(C(P.cyl(.2,.3,2,8),"#9a6236"),0,1,0));for(let w=0;w<3;w++)v.add(Q(C(P.cone(1.3-w*.3,1.5,9),w%2?"#3f9a5a":"#2f8a4e"),0,2.3+w*.9,0));v.position.set(E,1,M),en.add(v)}}en.add(Q(C(new kn(t.w+60,40),e.cave?"#2c2850":"#a8d890",{cast:!1}),t.w/2,8,-12));let m=t.ents.map(g=>({...g,alive:!0}));for(let g of m){if(g.t==="bone"&&(g.m=rd(),g.m.scale.setScalar(.8)),g.t==="thorn"){g.m=new we;for(let E=0;E<4;E++){let M=C(P.cone(.13,.45,6),"#2f7a3c");M.position.set(-.3+E*.2,.2,E%2*.3-.15),g.m.add(M)}g.m.add(Q(C(P.sph(.08),"#e03c3c"),0,.2,.3))}if(g.t==="hog"){g.m=new we;let E=C(P.sph(.4,14,10),"#7c5838");E.scale.set(1.1,.8,.9),E.position.y=.32,g.m.add(E);for(let M=0;M<7;M++){let v=C(P.cone(.08,.3,5),"#4a3020"),w=-1.2+M*.4;v.position.set(Math.sin(w)*.35,.32+Math.cos(w)*.32,0),v.rotation.z=-w,g.m.add(v)}g.face=Q(C(P.sph(.16),"#e8c8a0"),.42,.25,0),g.m.add(g.face)}if(g.t==="bee"){g.m=new we;let E=C(P.sph(.3,12,10),"#f8d030");E.scale.set(1.3,1,1),g.m.add(E);for(let M of[-.12,.15]){let v=C(new pn(.27,.06,6,14),"#222222");v.rotation.y=Math.PI/2,v.position.x=M,g.m.add(v)}g.wings=[];for(let M of[-1,1]){let v=new bt(new xs(.25,12),new An({color:"#ffffff",transparent:!0,opacity:.8,side:Rn}));v.position.set(0,.3,M*.15),v.rotation.x=Math.PI/2,g.m.add(v),g.wings.push(v)}}if(g.t==="goal"){g.m=new we,g.m.add(Q(C(P.box(1.6,1.2,1.4),"#f0d090"),0,.6,0));let E=C(P.cone(1.25,.8,4),"#d84838");E.rotation.y=Math.PI/4,E.position.y=1.6,g.m.add(E),g.m.add(Q(C(P.box(.6,.8,.05),"#3c2418"),0,.4,.71)),g.m.add(Q(C(P.cyl(.04,.04,1.4,6),"#555555"),.6,2.4,0)),g.flag=Q(C(P.box(.6,.35,.04),"#ffd23f"),.92,2.9,0),g.m.add(g.flag)}g.m&&en.add(g.m)}let x=(g,E)=>{if(g<0||g>=t.w)return!0;if(E<0||E>=t.h)return!1;let M=t.grid[E][g];return M==="#"||M==="g"},y=(g,E)=>E>=0&&E<t.h&&g>=0&&g<t.w&&t.grid[E][g]==="=",p=t.h-1;for(;p>0&&x(e.start,p-1);)p--;let d={x:e.start*TILE+8,y:p*TILE,vx:0,vy:0,onGround:!1,face:1,lastGround:-99,buffer:-99,hearts:3,inv:0,safe:null};d.safe={x:d.x,y:d.y},Vn={def:e,L:t,ents:m,pl:d,solidT:x,oneWay:y,tick:0,time:0,bones:0,over:!1},Te.root.parent&&Te.root.parent.remove(Te.root),en.add(Te.root),Gt=en,fe="forest",ue("#actions").hidden=!0,ue("#forestHud").hidden=!1,ja(),speak("\xA1Lleva a Luna hasta la casita! Salta con A y recoge huesos.")})}function ja(){Vn&&(ue("#forestHud").innerHTML=`<span>${"\u2764\uFE0F".repeat(Vn.pl.hearts)}${"\u{1F90D}".repeat(3-Vn.pl.hearts)}</span><span>\u{1F9B4} ${Vn.bones}</span><button class="hbtn" data-act="quitforest" aria-label="Salir">\u2716</button>`)}function Xv(n){let e=Vn;if(!e||e.over)return;let t=e.pl,i=PHYS;e.tick++,e.time+=n;let s=clamp(Oe.right-Oe.left+Oe.jx,-1,1);(Oe.a||Oe.jumpPress)&&(t.buffer=e.time),Oe.jumpPress=!1,Oe.a=!1;let r=Oe.aHeld||Oe.up,a=s*i.RUN,o=i.ACCEL*(t.onGround?1:i.AIR)*n;t.inv<1&&(t.vx+=clamp(a-t.vx,-o,o)),Math.abs(s)>.2&&(t.face=Math.sign(s)),t.onGround&&(t.lastGround=e.time),e.time-t.buffer<=i.BUFFER/60&&e.time-t.lastGround<=i.COYOTE/60&&(t.vy=-i.JUMP_V,t.buffer=-99,t.lastGround=-99,t.onGround=!1,_t("pop"));let l=t.vy<0?i.G_RISE:i.G_FALL;t.vy<0&&!r?l=i.G_FALL*1.4:r&&Math.abs(t.vy)<.4*i.JUMP_V&&(l*=i.APEX_HANG),t.vy=Math.min(t.vy+l*n,i.MAX_FALL);let c=6,u=11;t.x+=t.vx*n;for(let v of[Math.floor((t.y-u)/TILE),Math.floor((t.y-1)/TILE)])t.vx>0&&e.solidT(Math.floor((t.x+c)/TILE),v)&&(t.x=Math.floor((t.x+c)/TILE)*TILE-c-.01,t.vx=0),t.vx<0&&e.solidT(Math.floor((t.x-c)/TILE),v)&&(t.x=(Math.floor((t.x-c)/TILE)+1)*TILE+c+.01,t.vx=0);let f=t.y;t.y+=t.vy*n,t.onGround=!1;let h=[Math.floor((t.x-c+1)/TILE),Math.floor((t.x+c-1)/TILE)];if(t.vy>=0){let v=Math.floor(t.y/TILE);for(let w of h){let _=v*TILE;(e.solidT(w,v)||e.oneWay(w,v)&&f<=_+.5)&&(t.y=_,t.vy=0,t.onGround=!0)}}else{let v=Math.floor((t.y-u)/TILE);for(let w of h)e.solidT(w,v)&&(t.y=(v+1)*TILE+u,t.vy=0)}t.onGround&&t.inv<=0&&(t.safe={x:t.x,y:t.y}),t.inv>0&&(t.inv-=n);let m=v=>{t.inv>0||(t.hearts--,t.inv=1.3,t.vx=(t.x<v?-1:1)*150,t.vy=-200,dogSound("sad",ht(),.6),ja(),t.hearts<=0&&Ih(!1))};if(t.y>e.L.h*TILE+40){if(t.hearts--,ja(),t.hearts<=0)return Ih(!1);t.x=t.safe.x-t.face*24,t.y=t.safe.y-20,t.vx=t.vy=0,t.inv=1.3}let x={l:t.x-c,r:t.x+c,t:t.y-u,b:t.y},y=(v,w,_,T)=>x.r>v&&x.l<_&&x.b>w&&x.t<T;for(let v of e.ents)if(v.alive){if(v.t==="bone"&&y(v.x,v.y,v.x+9,v.y+7)&&(v.alive=!1,en.remove(v.m),e.bones++,_t("coin"),ja()),v.t==="thorn"&&y(v.x+2,v.y+2,v.x+14,v.y+10)&&m(v.x+8),v.t==="hog"){v.x+=v.dir*22*n;let w=Math.floor((v.x+(v.dir>0?14:2))/TILE),_=Math.floor((v.y+12)/TILE),T=Math.floor((v.y+4)/TILE);(e.solidT(w,T)||!e.solidT(w,_))&&(v.dir*=-1)}if(v.t==="bee"&&(v.ph+=n,v.x=v.x0+Math.sin(v.ph*1.6)*v.range/2,v.yy=v.y+Math.sin(v.ph*4)*3),v.t==="hog"||v.t==="bee"){let w=v.t==="bee"?v.yy:v.y;y(v.x+2,w+1,v.x+14,w+10)&&(t.vy>40&&x.b-w<9?(v.alive=!1,en.remove(v.m),t.vy=-i.JUMP_V*.65,e.bones++,_t("coin"),st(en,"\u2B50",v.m.position,3,.5),ja()):m(v.x+8))}if(v.t==="goal"&&y(v.x,v.y-60,v.x+28,v.y+32))return Ih(!0)}let p=e.L.h,d=v=>p-v/TILE;for(let v of e.ents)!v.alive||!v.m||(v.t==="bone"&&(v.m.position.set(v.x/TILE+.28,d(v.y+4),0),v.m.rotation.y+=n*2),v.t==="thorn"&&v.m.position.set(v.x/TILE+.5,d(v.y+10),0),v.t==="hog"&&(v.m.position.set(v.x/TILE+.5,d(v.y+10),0),v.m.rotation.y=v.dir>0?0:Math.PI),v.t==="bee"&&(v.m.position.set(v.x/TILE+.5,d((v.yy??v.y)+6),0),v.wings.forEach(w=>{w.rotation.y=Math.sin(e.tick*.9)*.6})),v.t==="goal"&&(v.m.position.set(v.x/TILE+.9,d(v.y+32),0),v.flag.position.y=2.9+Math.sin(e.tick*.1)*.05));R.x=t.x/TILE,R.z=0,Te.root.position.set(t.x/TILE,d(t.y),0),Te.root.rotation.y=t.face>0?Math.PI/2:-Math.PI/2,Te.root.visible=!(t.inv>0&&Math.floor(e.tick/4)%2);let g=stageOf(Ne.pet.day);Te.root.scale.setScalar(po[Math.max(1,g.size)]*.9),Fs(Te,n,{mode:t.onGround?Math.abs(t.vx)>10?"walk":"idle":"happy",speed:Math.abs(t.vx)/30});let E=t.x/TILE+t.face*1.5,M=Math.max(p*.45,d(t.y)+1.5);Mt.position.lerp(new D(E,M+1.2,10.5),1-Math.exp(-5*n)),Mt.lookAt(Mt.position.x,Mt.position.y-1.6,0)}function Ih(n){let e=Vn,t=Ne.pet,i=e.def;e.over=!0;let s=n&&!(t.levels[i.id]&&t.levels[i.id].done),r=n?s?10:4:0;t.bones+=e.bones+r,today(t).play++,In(t,"forest"),applyFx(t,{felicidad:n?22:10,energia:-14,saciedad:-8,hidratacion:-10,higiene:-12});let a=t.levels[i.id]||{done:!1,best:0};a.best=Math.max(a.best,e.bones),n&&(a.done=!0),t.levels[i.id]=a,addEvent(t,"\u{1F332}",n?`Exploraron \xAB${i.name}\xBB y encontraron ${e.bones} huesos.`:`Intentaron \xAB${i.name}\xBB (${e.bones} huesos).`),s&&addMilestone(t,"lvl"+i.id,"\u{1F3DE}\uFE0F",`Luna complet\xF3 \xAB${i.name}\xBB por primera vez.`),outdoorRisk(t),saveRoot(),ut();let o=n?e.pl.hearts:0;ue("#forestHud").hidden=!0,$c(o,e.bones+r,n?"<span>\u{1F3E0}\u2714</span>":"",()=>hm())}function hm(){Vn=null,Te.root.visible=!0,vi(()=>{Ln(Te.root,ae),Gt=ae,fe="town";let n=Ns.find(e=>e.pl.id==="bosque");mo(n.x,n.z+1.6,0),ue("#forestHud").hidden=!0,ue("#actions").hidden=!0})}function $v(n){let e=Ne.pet,t=n.minDay-e.day;speak(`${n.name} se abre cuando Luna sea m\xE1s grande. Faltan ${t} ${t===1?"d\xEDa":"d\xEDas"}. \xA1Cu\xEDdala mucho y vuelve ma\xF1ana!`),tn(`<div class="result"><div class="unlock"><span>\u{1F512}</span><span>${n.icon}</span></div><h2>${n.name}</h2><div class="moons">${"\u{1F319}".repeat(Math.min(t,10))}</div></div>`)}function ld(n){return Ne.pet.day<(n.minDay||1)?$v(n):n.id==="casa"?Tv():n.id==="parque"?jp():n.id==="lago"?cm():n.id==="bosque"?Vv():n.spot?xM(n.id):Bv(n.id)}function Yv(){let n=Ne.pet,e=today(n),t=stageOf(n.day),i=routineFor(n,n.day,e),s=[...Object.entries(DAY_MILESTONES).map(([a,o])=>({key:"day"+a,icon:o[0],text:o[1]})),{key:"walk1",icon:"\u{1F333}"},{key:"bath1",icon:"\u{1F6C1}"},{key:"vacunas",icon:"\u{1F6E1}\uFE0F"},{key:"allbones",icon:"\u{1F50D}"},{key:"tutorial",icon:"\u{1F426}"},{key:"treasure1",icon:"\u{1F4B0}"},{key:"squirrel",icon:"\u{1F43F}\uFE0F"},{key:"hide1",icon:"\u{1F648}"},{key:"agility",icon:"\u{1F3C3}"},{key:"ducks10",icon:"\u{1F986}"},{key:"memory",icon:"\u{1F0CF}"},...LEVEL_DEFS.map(a=>({key:"lvl"+a.id,icon:["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"][a.id-1]})),...TRICKS.map(a=>({key:"trick-"+a.id,icon:a.icon})),{key:"dogfriend",icon:"\u{1F415}"},{key:"dogs3",icon:"\u{1F43E}"},{key:"dogpark",icon:"\u{1F94F}"},{key:"shelter",icon:"\u{1F3E1}"},{key:"groom",icon:"\u2702\uFE0F"},{key:"icecream",icon:"\u{1F366}"},{key:"quiz",icon:"\u{1F9E0}"},{key:"ranger",icon:"\u{1F9ED}"},{key:"quest1",icon:"\u{1F4DC}"},{key:"mirador",icon:"\u{1F5FC}"},{key:"crystal",icon:"\u{1F48E}"},{key:"chest",icon:"\u{1F5DD}\uFE0F"},{key:"questall",icon:"\u{1F3C6}"}],r=new Set(n.milestones.map(a=>a.key));speak("Diario de Luna"),tn(`<div class="result"><h2>\u{1F4D6}</h2>
    <div class="weekbox"><span>${qc[t.id]} ${n.day}</span><span>\u2696\uFE0F ${fmtWeight(n.weight)}</span><span>\u{1F525} ${n.streak}</span>${n.rpg&&n.rpg.met?`<span>${Di[lo(n.rpg.xp)]}</span>`:""}</div>
    <div class="today">${i.map(a=>`<span class="tday ${a.have>=a.need?"ok":""}"><i>${a.icon}</i><b>${a.have>=a.need?"\u2B50":`${Math.min(a.have,a.need)}/${a.need}`}</b></span>`).join("")}</div>
    <div class="stickers">${s.map(a=>`<span class="stk ${r.has(a.key)?"":"off"}">${r.has(a.key)?a.icon:"\u2754"}</span>`).join("")}</div></div>`)}function Zv(){if(!Ne||fe!=="town"||!ue("#card3").hidden)return;let n=Ne.pet,e=Yc(n);if(e.step<2)return;if(!e.seen.v2&&e.step>=sr.length){e.seen.v2=!0;for(let s of gn)s.spot&&n.day>=(s.minDay||1)&&(e.seen["open-"+s.id]=!0);return e.focus="aventura",e.visited.aventura=!1,saveRoot(),speak("\xA1El pueblo creci\xF3! Hay perritos nuevos, un parque para perros, tiendas nuevas y el Valle Aventura para explorar. Mira los corazones: verde es amistoso, amarillo t\xEDmido y la se\xF1al roja es peligro."),tn('<div class="result"><h2>\u{1F389}</h2><div class="howto"><div><span>\u{1F415}\u{1F429}\u{1F9AE}</span></div><div><span>\u{1F49A}</span><i>\u{1F44B}</i><span>\u{1F49B}</span><i>\u{1F92B}</i><span>\u26A0\uFE0F</span><i>\u{1F6B6}\u21A9\uFE0F</i></div><div><span>\u2702\uFE0F \u{1F366} \u{1F950} \u{1F4DA} \u{1F3E1}</span></div><div><span>\u{1F5FA}\uFE0F \u{1F344} \u{1FAB6} \u{1F48E} \u{1F5DD}\uFE0F</span></div></div></div>')}for(let s of gn)if((s.minDay||1)>1&&n.day>=s.minDay&&!e.seen["open-"+s.id])return e.seen["open-"+s.id]=!0,e.focus=s.id,saveRoot(),speak(`\xA1Se abri\xF3 ${s.name}! Sigue la flecha amarilla.`),tn(`<div class="result"><h2>\u{1F389}</h2><div class="unlock"><span>\u{1F513}</span><span>${s.icon}</span></div><h2>${s.name}</h2></div>`);let t=stageOf(n.day);if(!e.seen["stage-"+t.id]&&(e.seen["stage-"+t.id]=!0,saveRoot(),n.day>1))return speak(`\xA1Luna creci\xF3! Ahora es ${t.name.toLowerCase()}.`),setTimeout(()=>dogSound("happy",ht()),600),tn(`<div class="result"><h2>\u{1F331}</h2><div class="howto"><div>${STAGES.map(s=>`<span style="opacity:${s.id===t.id?1:n.day>s.to?.55:.25}">${qc[s.id]}</span>`).join("<i>\u203A</i>")}</div></div></div>`);let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(n,s)));if(i&&!e.seen["vac-"+i.id])return e.seen["vac-"+i.id]=!0,saveRoot(),speak("Hoy le toca una vacuna a Luna. Ve a la veterinaria y toca Vacuna."),tn('<div class="result"><h2>\u{1F489}</h2><div class="howto"><div><span>\u{1F489}</span><i>\u279C</i><span>\u{1F3E5}</span></div></div></div>');if(n.sick&&!n.sick.treated&&!e.seen["sick-"+n.sick.since])return e.seen["sick-"+n.sick.since]=!0,saveRoot(),speak("Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."),tn('<div class="result"><h2>\u{1F912}</h2><div class="howto"><div><span>\u{1F912}</span><i>\u279C</i><span>\u{1F3E5} \u{1F48A}</span></div></div></div>');if(n.bones>=6&&!e.seen.shop)return e.seen.shop=!0,e.focus="tienda",e.visited.tienda=!1,saveRoot(),speak("\xA1Tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna."),tn(`<div class="result"><h2>\u{1F6D2}</h2><div class="howto"><div><span>\u{1F9B4} ${n.bones}</span><i>\u279C</i><span>\u{1F380}\u{1F9F8}\u{1F9B4}</span></div></div></div>`)}var sr=[{id:"walk",icon:"\u2B05\uFE0F\u27A1\uFE0F",say:"\xA1Hola! Soy P\xEDo, tu amigo. Camina con las flechas o con el c\xEDrculo. \xA1Luna te sigue!"},{id:"home",place:"casa",icon:"\u{1F37C}",say:"Luna tiene hambre. Ll\xE9vala a su casa: ac\xE9rcate a la puerta y toca A."},{id:"eat",place:"casa",doId:"eat",icon:"\u{1F37C}",say:"Toca el dibujo de comer para darle su comida."},{id:"pet",place:"casa",doId:"pet",icon:"\u{1F917}",say:"\xA1Muy bien! Ahora dale mimos."},{id:"exit",place:"casa",doId:"exit",icon:"\u{1F6AA}",say:"Ahora sal de la casa por la puerta."},{id:"bones",icon:"\u{1F9B4}",say:"Busca huesos que brillan por el pueblo. \xA1Con ellos compras cosas!"}];function Yc(n){if(!n.tut){let e=n.day>1||Object.values(n.log).some(t=>t.meals>0);n.tut={step:e?sr.length:0,seen:{},visited:{},focus:null,moved:0},n.tut.seen["stage-"+stageOf(n.day).id]=!0}return n.tut}var Jv={"\u{1F356}":{place:"casa",doId:"eat",say:"Luna tiene hambre. Ve a la casa y toca Comer."},"\u{1F4A7}":{place:"casa",doId:"water",say:"Luna tiene sed. Ve a la casa y toca Agua."},"\u{1F634}":{place:"casa",doId:"nap",say:"Luna tiene sue\xF1o. En la casa toca Siesta o Dormir."},"\u{1FAE7}":{place:"casa",doId:"bath",say:"Luna est\xE1 sucia. Ve a la casa para limpiarla."},"\u{1F4A9}":{place:"casa",doId:"clean",say:"Luna hizo un accidente en casa. Hay que recogerlo."},"\u{1F3BE}":{place:"parque",doId:"kick",say:"Luna est\xE1 aburrida. \xA1Vamos al parque a jugar con la pelota!"},"\u{1F912}":{place:"vet",doId:"cure",say:"Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."},"\u{1F489}":{place:"vet",doId:"vac",say:"Hoy le toca una vacuna. Ve a la veterinaria y toca Vacuna."},"\u{1F48A}":{place:"vet",doId:"deworm",say:"Luna necesita su pastilla contra los bichitos. Ve a la veterinaria."},"\u2702\uFE0F":{place:"casa",doId:"brush",say:"Hora de arreglar a Luna. Ve a la casa y cep\xEDllala."}};function Kv(n){let e=Yc(n);if(e.step<sr.length)return{...sr[e.step],key:"tut-"+e.step,fixed:!0};if(At)return{icon:"\u{1F648}",key:"hide",say:"\xBFD\xF3nde est\xE1 Luna? Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!",fixed:!0};if(n.asleep)return Op(n,!0)||{icon:"\u{1F4A4}",key:"sleep",say:"Luna est\xE1 durmiendo. D\xE9jala descansar, o despi\xE9rtala toc\xE1ndola.",fixed:!0};let t=!!(n.sick&&n.sick.treated),i=needsOf(n).filter(o=>!(o.icon==="\u{1F912}"&&t));for(let o of[...i.filter(l=>l.level==="bad"),...i.filter(l=>l.level==="warn")]){let l=Jv[o.icon];if(!l)continue;let c="need-"+o.icon,u=o.level==="bad";if(!u&&to(c))continue;if(o.icon==="\u{1F4A7}"&&n.day<4)return{icon:"\u{1F37C}",key:c,place:"casa",doId:"eat",say:"Luna tiene sed. En casa dale su lechita.",fixed:u};let f=l.doId;return f==="bath"&&(f=n.day<8?"wipe":n.lastDone.bano&&n.day-n.lastDone.bano<3?"brush":"bath"),{icon:o.icon,key:c,...l,doId:f,say:f==="brush"?"Luna est\xE1 sucia. Ve a la casa y cep\xEDllala.":l.say,fixed:u}}if(e.focus&&!e.visited[e.focus]&&!to("focus-"+e.focus)){let o=gn.find(l=>l.id===e.focus);if(o)return{icon:o.icon,place:o.id,key:"focus-"+o.id,say:`\xA1${o.name} est\xE1 abierto! Sigue la flecha.`}}let s={"\u{1F356}":["casa","eat","Hora de comer. Ve a la casa y toca Comer."],"\u{1F4A7}":["casa","water","Dale agua fresca a Luna en la casa."],"\u{1F3BE}":n.day>=3?["parque","kick","\xA1A jugar! Ve al parque a patear la pelota."]:["casa","pet","Juega con Luna: dale mimos en la casa."],"\u{1FAE7}":n.day>=3?["casa","brush","Hora de la limpieza. En casa cepilla a Luna."]:["casa","wipe","Hora de la limpieza. En casa limpia a Luna."],"\u{1F393}":["escuela","trick:","Hoy toca escuela. Ens\xE9\xF1ale un truco a Luna."],"\u{1F5FA}\uFE0F":["parque","stroll","Sal a pasear con Luna: ve al parque y toca Pasear."]},{waiting:r}=routinePending(n);for(let o of routineFor(n,n.day,today(n))){if(o.have>=o.need||!routineReady(n,o.icon)||!s[o.icon]||to("routine-"+o.icon))continue;let l=s[o.icon];return{icon:o.icon,key:"routine-"+o.icon,place:l[0],doId:l[1],say:l[2]}}let a=Op(n,!1,r)||{icon:"\u{1F344}",key:"explore",place:"aventura",say:"\xA1Vamos a explorar el Valle Aventura!"};return t?{...a,key:"rec-"+a.key,say:"Luna se est\xE1 curando: dale comida, agua y que descanse. "+a.say}:a}var dm=new Map,to=n=>(dm.get(n.replace(/^(rec-|zz-)/,""))||0)>Date.now();function jv(){let n=tt;!n||n.fixed||(dm.set(n.key.replace(/^(rec-|zz-)/,""),Date.now()+10*60*1e3),_t("pop"),Ot=null,qn(),speak("\xA1Est\xE1 bien, despu\xE9s! "+(tt&&tt!==n?tt.say:"")),clearTimeout(Xh),Xr=tt?tt.key:Xr,ue("#guide").classList.remove("new"))}var Pc=new Set,Fp=0;function Op(n,e,t){Fp!==n.day&&(Fp=n.day,Pc.clear());let i=today(n).games||{},s=n.day,r=e||!!cantExercise(n),a=!e&&!n.asleep,o=e?"Luna est\xE1 durmiendo. Mientras descansa, ":"",l=d=>d.replace(/^([¡¿]?)(.)/,(g,E,M)=>E+M.toUpperCase()),c=d=>e?o+d.replace(/^([¡¿]?)(.)/,(g,E,M)=>E+M.toLowerCase()):l(d),u=[];ni.length&&u.push({icon:"\u{1F9B4}",key:"bones",say:c("\xA1busca los huesos escondidos! Sigue la flecha amarilla.")}),Pn&&u.push({icon:"\u{1F4B0}",key:"treasure",say:c("hay un tesoro escondido. Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!")});let f=Nn(n),h=is(n);f.met?h&&u.push(Qv(n,h,c)):u.push({icon:"\u{1F5FA}\uFE0F",key:"valley",place:"aventura",doId:"sp:quest",say:c("\xA1hay un valle nuevo para explorar! Ve con el guardabosques al Valle Aventura, al sureste del pueblo.")});let m=[{id:"memory",ok:!0,icon:"\u{1F0CF}",place:"casa",doId:"memory",say:"\xBFjugamos a la memoria? Ve a la casa y toca Memoria.",again:"\xBFotra partida de memoria? Ve a la casa."},{id:"ducks",ok:!0,icon:"\u{1F986}",place:"lago",doId:"duckfeed",say:"\xA1los patos tienen hambre! Ve al lago y dales su comida.",again:"\xA1los patos quieren m\xE1s comida! Ve al lago."},{id:"story",ok:!0,icon:"\u{1F4D6}",place:"biblioteca",doId:"sp:story",say:"\xA1hora del cuento! Ve a la biblioteca a aprender cosas de perros.",again:"\xBFotro dato perruno? Ve a la biblioteca."},{id:"quiz",ok:(today(n).quiz||0)<3,icon:"\u2753",place:"biblioteca",doId:"sp:quiz",say:"\xBFcu\xE1nto sabes de perros? Juega a las preguntas en la biblioteca.",again:"\xBFm\xE1s preguntas? \xA1Vamos a la biblioteca!"},{id:"dogs",ok:a||e,icon:"\u{1F415}",key:"dogs",target:!0,say:"busca un perro con coraz\xF3n verde \u{1F49A} y sal\xFAdalo. Si tiene due\xF1o, \xA1preg\xFAntale primero!",again:"\xA1hay m\xE1s perritos en el pueblo! Busca los corazones verdes \u{1F49A}."},{id:"shelter",ok:!0,icon:"\u{1F3E1}",place:"refugio",doId:"sp:visit",say:"los perritos del refugio quieren mimos. \xA1Vamos a visitarlos!",again:""},{id:"agility",ok:s>=3&&!r,icon:"\u{1F3C3}",place:"parque",doId:"agility",say:"\xA1carrera de obst\xE1culos! Ve al parque y toca Carrera.",again:"\xBFotra carrera de obst\xE1culos? \xA1Vamos al parque!"},{id:"dogpark",ok:s>=3&&!r,icon:"\u{1F415}",place:"perros",doId:"sp:friends",say:"\xA1Luna quiere jugar con otros perritos! Ve al parque para perros.",again:"\xBFm\xE1s juegos en el parque para perros? \xA1Prueba el disco!"},{id:"frisbee",ok:s>=3&&!r,icon:"\u{1F94F}",place:"perros",doId:"sp:frisbee",say:"\xA1lanza el disco a Luna en el parque para perros!",again:"\xA1otra ronda de disco en el parque para perros!"},{id:"hide",ok:s>=5&&!r,icon:"\u{1F648}",place:"parque",doId:"hide",say:"\xA1juguemos al escondite! Ve al parque y toca Escondite.",again:"\xBFotra vez al escondite? \xA1Vamos al parque!"},{id:"forest",ok:s>=3&&!r,icon:"\u{1F332}",place:"bosque",doId:"level:",say:"\xA1aventura en el bosque! Lleva a Luna saltando hasta la casita.",again:"\xA1vamos de aventura al bosque!"},{id:"mirador",ok:f.met,icon:"\u{1F5FC}",tgt:()=>({x:nn.mirador[0],z:nn.mirador[1]}),say:"sube al mirador del Valle Aventura para ver todo el pueblo.",again:""},{id:"icecream",ok:a&&n.bones>=2,icon:"\u{1F366}",place:"heladeria",doId:"sp:icecream",say:"\xA1hace calor! Invita a Luna a un helado para perros en la helader\xEDa.",again:""},{id:"groom",ok:a&&s>=3&&n.bones>=4&&(n.stats.higiene<80||s-(n.lastDone.unas||0)>=7),icon:"\u2702\uFE0F",place:"peluqueria",doId:"sp:groom",say:"Luna necesita un buen peinado. \xA1Vamos a la peluquer\xEDa canina!",again:""},{id:"smell",ok:a,icon:"\u{1F950}",place:"panaderia",doId:"sp:smell",say:"\xA1qu\xE9 rico huele la pasteler\xEDa! Lleva a Luna a olerla.",again:""}].filter(d=>d.ok),x=(d,g,E)=>{let M={icon:d.icon,place:d.place,doId:d.doId,key:E+d.id,say:c(g)};return d.target&&(M.place=void 0,M.target=()=>{let v=dd(999,w=>w.def.mood==="friendly"&&!(today(n).dogs||{})[w.def.id]);return v&&{x:v.x,z:v.z}}),d.tgt&&(M.place=void 0,M.target=d.tgt),M};for(let d of m)!i[d.id]&&!(d.id==="dogs"&&Object.keys(today(n).dogs||{}).some(g=>!g.startsWith("ask-")))&&u.push(x(d,d.say,"fun-"));n.bones>=8&&u.push({icon:"\u{1F6D2}",key:"shop",place:"tienda",say:c("\xA1tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna. Si prefieres guardarlos, toca Ahora no.")}),!e&&t&&WAIT_SAY[t.icon]&&u.push({...WAIT_SAY[t.icon],key:"wait-"+t.icon});for(let d of m)d.again&&u.push(x(d,d.again,"again-"));u.push({icon:"\u{1F344}",key:"explore",place:"aventura",say:c("\xA1vamos a explorar el Valle Aventura! Busca setas brillantes, plumas y conejitos.")});let y=e?"zz-":"";u.forEach(d=>{d.key=y+d.key});let p=u.find(d=>!Pc.has(d.key)&&!to(d.key));return p||(Pc.clear(),p=u.find(d=>!to(d.key))||u[0]),p}function Qv(n,e,t){let i=e.def,s=Math.max(0,(i.n||1)-e.n),r={icon:i.icon,key:"quest-"+i.id,say:t(i.say.replace(/^Misión del día: /,""))},a=o=>()=>{let l=null,c=1/0;for(let u of ar){if(u.item!==o)continue;let f=Math.hypot(u.x-k.x,u.z-k.z);f<c&&(c=f,l=u)}return l&&{x:l.x,z:l.z}};return i.type==="collect"?Lc(k.x,k.z)?r.target=a(i.item):r.place="aventura":i.type==="visit"?r.target=()=>({x:nn.mirador[0],z:nn.mirador[1]}):i.type==="dog"?r.target=()=>{let o=dd(999,l=>l.def.mood!=="grumpy"&&!(today(n).dogs||{})[l.def.id]);return o&&{x:o.x,z:o.z}}:i.type==="chest"?r.target=Nn(n).key?()=>({x:nn.chest[0],z:nn.chest[1]}):Lc(k.x,k.z)?a("llave"):null:i.type==="flag"&&(n.items.premio>0?(r.place="refugio",r.doId="sp:treat"):(r.place="panaderia",r.doId="sp:cookies")),i.type==="chest"&&!r.target&&(r.place="aventura"),s>1&&(r.say+=` Te faltan ${s}.`),r}var tt=null,Xr="",Xh=0;function qn(){if(!Ne)return;let n;try{n=Kv(Ne.pet)}catch(a){console.error("P\xEDo:",a),n=null}n||(n={icon:"\u{1F344}",key:"explore",place:"aventura",say:"\xA1Vamos a explorar el Valle Aventura! Busca setas brillantes y plumas."}),tt=n;let e=n.place?gn.find(a=>a.id===n.place):null,t=ue("#guide"),i=`<span class="g-bird">\u{1F426}</span><span class="g-bub"><b>${n.icon}</b>${e?`<i>\u279C</i><b>${e.icon}</b>`:""}<small class="g-txt">${e?e.name:n.key.includes("bones")?"Huesos":n.key.includes("treasure")?"Tesoro":n.key==="sleep"?"Shh\u2026":n.key.includes("dogs")?"Perritos":n.key.includes("quest")?"Misi\xF3n":n.key.includes("mirador")?"Mirador":""}</small></span>`;if(t.__h!==i&&(t.innerHTML=i,t.__h=i),t.hidden=!1,t.setAttribute("aria-label","P\xEDo dice: "+n.say),ue("#guideSkip").hidden=!!n.fixed||!!it,n.key!==Xr){t.classList.add("new"),clearTimeout(Xh);let a=n.key;Xh=setTimeout(()=>{tt&&tt.key===a&&(Xr=a,speak(tt.say),t.classList.remove("new"))},Xr===""?3800:1500)}document.querySelectorAll("#actions .hint").forEach(a=>a.classList.remove("hint"));let s=cd();if(!ue("#actions").hidden&&n.doId&&(!n.place||n.place===s)){let a=document.querySelector(n.doId.endsWith(":")?`#actions [data-act^="${n.doId}"]:not([aria-disabled])`:`#actions [data-act="${n.doId}"]`);a&&a.classList.add("hint")}else if(!ue("#actions").hidden&&s&&n.place&&n.place!==s){let a=document.querySelector('#actions [data-act="exit"], #actions [data-act="closepark"], #actions [data-act="closelake"], #actions [data-act="closeforest"], #actions [data-act="closespot"]');a&&a.classList.add("hint")}let r=document.querySelector("#prompt .go-btn");r&&r.classList.toggle("hint",!!(an&&n.place===an.pl.id))}var eM={casa:"Esta es la casa de Luna. Aqu\xED come, bebe, duerme y se ba\xF1a. Tambi\xE9n pueden jugar a la memoria.",vet:"Esta es la veterinaria. Cuando toca vacuna, toca la jeringa. La pastilla quita los bichitos. Si Luna est\xE1 enfermita, toca Curar.",tienda:"Esta es la tienda. Con los huesos que encuentras compras premios, juguetes y ropa para Luna.",escuela:"Esta es la escuela. Elige un truco, mira las flechas y rep\xEDtelas. \xA1As\xED Luna aprende!",parque:"Este es el parque. Haz una carrera de obst\xE1culos, juega al escondite o patea la pelota.",bosque:"Este es el bosque. Elige un camino y lleva a Luna saltando hasta la casita.",lago:"Este es el lago. Dale de comer a los patos, m\xEDralos nadar o bebe agua fresca."};function fm(){return Te.root.parent===Gt&&Math.hypot(k.x-R.x,k.z-R.z)<2.6}function cd(){return fe==="home"?"casa":fe==="park"?"parque":fe==="lake"?"lago":fe==="forestmenu"?"bosque":fe==="room"?En:fe==="spot"?ti:null}function tM(){let n=cd();if(!n)return;let e=eM[n]||Bc[n]&&Bc[n].help||"";tt&&tt.place===n?e+=" "+tt.say:tt&&tt.place&&(e+=` Ahora toca ir a ${gn.find(t=>t.id===tt.place).name}. Toca Salir.`),speak(e),qn()}var Ot=null,Sc=null,Rs=.5,di=Math.ceil((De.x1-De.x0)/Rs),Ja=Math.ceil((De.z1-De.z0)/Rs);function Ph(n,e,t,i){if(!Sc){Sc=new Uint8Array((di+1)*(Ja+1));for(let d=0;d<=Ja;d++)for(let g=0;g<=di;g++)Sc[d*(di+1)+g]=Dn(De.x0+g*Rs,De.z0+d*Rs,.38)?0:1}let s=d=>clamp(Math.round((d-De.x0)/Rs),0,di),r=d=>clamp(Math.round((d-De.z0)/Rs),0,Ja),a=(d,g)=>g*(di+1)+d,o=(d,g)=>d>=0&&g>=0&&d<=di&&g<=Ja&&Sc[a(d,g)]===1,l=s(t),c=r(i),u=new Int32Array((di+1)*(Ja+1)).fill(-2),f=[a(s(n),r(e))];u[f[0]]=-1;let h=0,m=-1,x=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(;h<f.length;){let d=f[h++],g=d%(di+1),E=d/(di+1)|0;if(Math.abs(g-l)<=1&&Math.abs(E-c)<=1){m=d;break}for(let[M,v]of x){let w=g+M,_=E+v;if(!o(w,_)||M&&v&&(!o(g+M,E)||!o(g,E+v)))continue;let T=a(w,_);u[T]===-2&&(u[T]=d,f.push(T))}}if(m<0)return null;let y=[];for(let d=m;d!==-1;d=u[d])y.push([De.x0+d%(di+1)*Rs,De.z0+(d/(di+1)|0)*Rs]);y.reverse();let p=y.filter((d,g)=>g%3===2||g===y.length-1);return p.push([t,i]),p}function pm(){let n=tt;if(!n||At||it)return;if(!n.place&&!mt&&(fe==="park"?ir():fe==="spot"?ao():(fe==="lake"||fe==="forestmenu")&&(fe="town",ue("#actions").hidden=!0)),!n.place&&n.target){let i=fe==="town"&&n.target(),s=i&&Ph(k.x,k.z,i.x,i.z);s&&(Ot={pts:s,place:null,stuck:0,best:1/0},_t("pop"));return}if(!n.place){if(fe!=="town"||!/bones$/.test(n.key)||!ni.length)return;let i=null,s=1/0;for(let a of ni){let o=Math.hypot(a.m.position.x-k.x,a.m.position.z-k.z);o<s&&(s=o,i=a)}let r=Ph(k.x,k.z,i.m.position.x,i.m.position.z);r&&(Ot={pts:r,place:null,stuck:0,best:1/0},_t("pop"));return}if(cd()===n.place){qn();return}if(fe==="park"?ir():fe==="lake"||fe==="forestmenu"?(fe="town",ue("#actions").hidden=!0):fe==="spot"&&ao(),fe!=="town")return;let e=Ns.find(i=>i.pl.id===n.place);if(!e)return;if(an===e){ld(e.pl);return}let t=Ph(k.x,k.z,e.x,e.z);t&&(Ot={pts:t,place:n.place,stuck:0,best:1/0},_t("pop"))}var Zc=performance.now(),Lh=0,Dh="",Ka=0;function mm(){let n=performance.now();if(!tt||it||!ue("#card3").hidden||Ot||Wn||Vn||n-Zc<2e4||n-Lh<3e4||(tt.key!==Dh&&(Dh=tt.key,Ka=0),tt.key==="sleep"))return;let e=/^(zz-|rec-)?(bones|treasure|fun-|again-|shop|wait-|quest-|valley|explore|focus-)/.test(tt.key);if(Ka>=2)if(e)Pc.add(tt.key.replace(/^rec-/,"")),qn(),Dh=tt.key,Ka=0;else{if(n-Lh<9e4)return;Ka=0}Ka++,Lh=n,gm(),ue("#guide").classList.add("new"),nt(tt.icon,tt.place?"\u{1F446} \u{1F426}":"\u{1F426}")}ze.addEventListener("pointerdown",()=>{Zc=performance.now()},!0);ze.addEventListener("keydown",()=>{Zc=performance.now()},!0);function gm(){tt&&(Xr=tt.key,speak(tt.say),ue("#guide").classList.remove("new"))}function si(n){if(!Ne)return;let e=Ne.pet,t=Yc(e);if(n.startsWith("open:")&&(t.visited[n.slice(5)]=!0),t.step>=sr.length)return qn();let i=sr[t.step].id;(i==="walk"&&n==="walk"&&++t.moved>=3||i==="home"&&n==="open:casa"||i==="eat"&&n==="do:eat"||i==="pet"&&n==="do:pet"||i==="exit"&&n==="close:casa"||i==="bones"&&n==="bone")&&(t.step++,nt("\u2B50"),t.step>=sr.length&&(addMilestone(e,"tutorial","\u{1F426}","\xA1Terminaste las lecciones de P\xEDo!"),setTimeout(()=>speak("\xA1Lo hiciste genial! Ahora ya sabes cuidar a Luna."),1200)),saveRoot()),qn()}var Oc=new ys({color:"#ffd23f",gradientMap:or,emissive:"#5a4000"}),rr=new we;{let n=new bt(P.cone(.7,1.1,4),Oc);n.rotation.x=Math.PI,n.position.y=.55,rr.add(n);let e=new bt(P.box(.45,.9,.45),Oc);e.position.y=1.5,rr.add(e)}rr.visible=!1;ae.add(rr);var Ls=new we;{let n=new bt(P.cone(.32,.6,3),Oc);n.rotation.x=Math.PI/2,n.position.z=1.5,Ls.add(n);let e=new bt(P.box(.18,.06,.6),Oc);e.position.z=1,Ls.add(e)}Ls.visible=!1;ae.add(Ls);function nM(n){let e=tt&&tt.place&&Ns.find(r=>r.pl.id===tt.place);if(!e&&tt&&/bones$/.test(tt.key)&&ni.length){let r=null,a=1/0;for(let o of ni){let l=Math.hypot(o.m.position.x-k.x,o.m.position.z-k.z);l<a&&(a=l,r=o)}e={x:r.m.position.x,z:r.m.position.z,baseY:.6,pl:{}}}if(!e&&tt&&tt.target){let r=tt.target();r&&(e={x:r.x,z:r.z,baseY:1.2,pl:{}})}let t=fe==="town"&&e&&!(an&&an===e);if(rr.visible=Ls.visible=!!t,!t)return;rr.position.set(e.x,e.baseY+1.2+Math.abs(Math.sin(n*4))*.6,e.pl.w?e.pl.z+e.pl.d/2:e.z),rr.rotation.y=n*1.5;let i=e.x-k.x,s=e.z-k.z;Ls.position.set(k.x,.08,k.z),Ls.rotation.y=Math.atan2(i,s),Ls.children.forEach(r=>{r.position.z=(r.geometry.type==="ConeGeometry"?1.5:1)+Math.sin(n*6)*.15})}var In=(n,e)=>{let t=today(n);return t.games=t.games||{},t.games[e]=(t.games[e]||0)+1,t.games[e]},$h=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},ud=(n,e)=>`<div class="result"><h2>${n}</h2><div class="howto">${e.map(([t,i])=>`<div><span>${t}</span><i>\u279C</i><span>${i}</span></div>`).join("")}</div></div>`,Nh="";function lr(n){let e=ue("#gameHud");if(n==null){e.hidden=!0,Nh="";return}n!==Nh&&(Nh=n,e.innerHTML=`${n}<button class="hbtn" data-act="quitgame" aria-label="Salir">\u2716</button>`,e.hidden=!1)}var Ps=Ui("\u2744\uFE0F",1.1,!0);Ps.visible=!1;ae.add(Ps);var Qi=Ui("\u{1F356}",.85,!0);Qi.visible=!1;ae.add(Qi);var Ec="",zp=0,Bp={hot:["\u{1F525}","\xA1Caliente, caliente!"],warm:["\u2600\uFE0F","\xA1Tibio!"],cold:["\u2744\uFE0F","\xA1Fr\xEDo!"]};function iM(n){let e=null,t=null;if(At?(e=At.x,t=At.z):Pn&&tt&&tt.key==="treasure"&&(e=Pn.x,t=Pn.z),e==null||fe!=="town"){Ps.visible=!1,Ec="";return}let i=Math.hypot(e-k.x,t-k.z),s=i<3.5?"hot":i<8?"warm":"cold";s!==Ec&&(Ec&&n-zp>2&&(speak(Bp[s][1]),zp=n),Ec=s,Ps.material.map=Ds(Bp[s][0],!0),Ps.material.needsUpdate=!0),Ps.visible=!0,Ps.position.set(k.x,2.75+Math.sin(n*5)*.08,k.z)}function sM(){let n=new we,e=C(P.sph(.22,12,10),"#b0682c");e.scale.set(.9,.85,1.2),e.position.y=.25,n.add(e),n.add(Q(C(P.sph(.13,10,8),"#f0d0a0",{cast:!1}),0,.2,.14)),n.add(Q(C(P.sph(.15,12,10),"#b0682c"),0,.46,.2));for(let t of[-1,1])n.add(Q(C(P.cone(.05,.12,6),"#8a4a20"),t*.08,.62,.17)),n.add(Q(C(P.sph(.03,6,5),"#1c1410",{cast:!1}),t*.07,.5,.33));for(let[t,i,s]of[[.35,-.25,.14],[.6,-.33,.15],[.8,-.22,.12]])n.add(Q(C(P.sph(s,10,8),"#c87c3c"),0,t,i));return n}var Tc=null,Uh=20;function rM(n,e,t){let i=Tc;if(!i){if(e.day<3||e.asleep||At||fe!=="town"||(Uh-=n,Uh>0))return;Uh=35+Math.random()*35;for(let r=0;r<60;r++){let a=Math.random()*Math.PI*2,o=6+Math.random()*4,l=k.x+Math.cos(a)*o,c=k.z-Math.abs(Math.sin(a))*o*.8;if(Dn(l,c,.5))continue;let u=sM();u.position.set(l,0,c),u.rotation.y=Math.atan2(k.x-l,k.z-c),ae.add(u),Tc={m:u,t:0,run:0,vx:0,vz:0},speak("\xA1Mira, una ardilla! Corre con Luna a saludarla.");return}return}i.t+=n;let s=i.m.position;if(i.run>0){i.run-=n,s.x+=i.vx*n,s.z+=i.vz*n,s.y=Math.abs(Math.sin(t*18))*.25,i.run<=0&&(ae.remove(i.m),Tc=null);return}if(s.y=Math.abs(Math.sin(t*5))*.12,i.t>25){ae.remove(i.m),Tc=null;return}if(Math.hypot(R.x-s.x,R.z-s.z)<1.5||Math.hypot(k.x-s.x,k.z-s.z)<1.2){let r=Math.atan2(s.x-R.x,s.z-R.z);i.vx=Math.sin(r)*7,i.vz=Math.cos(r)*7,i.run=1.2,i.m.rotation.y=r,R.mode="happy",R.modeT=1.2,dogSound("bark",ht());let a=today(e);a.squirrels=(a.squirrels||0)+1,a.squirrels<=4&&(applyFx(e,{felicidad:6,energia:-2}),e.bones++,a.play++,st(ae,"\u{1F496}",new D(R.x,1.4,R.z),3,.5),st(ae,"\u{1F9B4}",s,1,.5),_t("coin"),addMilestone(e,"squirrel","\u{1F43F}\uFE0F","Luna persigui\xF3 a su primera ardilla."),ut()),speak("\xA1Guau! \xA1Qu\xE9 r\xE1pida!")}}var hd=[],Fh=0;function aM(){let n=yi(2468),e=["#ffffff","#ffd23f","#ff8fc8","#8fd0ff","#c9a0ff"];for(let t=0;t<12;t++){let i=0,s=0;for(let l=0;l<50&&(i=De.x0+3+n()*(De.x1-De.x0-6),s=De.z0+3+n()*(De.z1-De.z0-6),!!Dn(i,s,1));l++);let r=new we,a=[],o=new ys({color:e[t%e.length],gradientMap:or,side:Rn});for(let l of[-1,1]){let c=new we,u=new bt(new xs(.17,10),o);u.rotation.x=-Math.PI/2,u.position.x=l*.15,c.add(u),r.add(c),a.push(c)}r.add(C(P.cap(.025,.16),"#3a2a2a",{cast:!1})),r.children[2].rotation.x=Math.PI/2,ae.add(r),hd.push({g:r,wings:a,cx:i,cz:s,ph:n()*10,cd:0})}}function oM(n,e,t){Fh-=n;for(let i of hd){i.ph+=n,i.cd-=n;let s=i.cx+Math.cos(i.ph*.7)*1.4,r=i.cz+Math.sin(i.ph*1.1)*1.4,a=1.1+Math.sin(i.ph*2.3)*.35;i.g.position.set(s,a,r),i.g.rotation.y=-i.ph*.7;let o=Math.sin(t*22+i.ph)*.9;if(i.wings[0].rotation.z=o,i.wings[1].rotation.z=-o,i.cd<=0&&!At&&!e.asleep&&Math.hypot(s-R.x,r-R.z)<1.2){let l=Math.atan2(s-R.x,r-R.z),c=i.cx+Math.sin(l)*3.5,u=i.cz+Math.cos(l)*3.5;c>De.x0&&c<De.x1&&u>De.z0&&u<De.z1&&(i.cx=c,i.cz=u),i.cd=3,st(ae,"\u{1F496}",new D(R.x,1.4,R.z),1,.45),R.mode="happy",R.modeT=.8,Fh<=0&&(Fh=12,applyFx(e,{felicidad:2}),dogSound("yip",ht(),.5),ut())}}}var Ts=null;function xm(n){let e=Pn;Pn=null,n.treasure={day:n.day,found:!0};let t=Math.random(),i;if(t<.45){let a=4+Math.floor(Math.random()*4);n.bones+=a,i=`\u{1F9B4} +${a}`}else t<.7?(n.items.premio+=2,i="\u{1F36A} +2"):t<.88?(n.items.champu+=1,i="\u{1F9F4} +1"):(n.bones+=12,i="\u{1F48E} \u{1F9B4} +12");applyFx(n,{felicidad:10});let s=new we;s.add(Q(C(P.box(.9,.5,.6),"#a0642c"),0,.25,0));let r=C(P.box(.95,.18,.65),"#ffd23f");r.position.set(0,.6,-.15),r.rotation.x=-.9,s.add(r),s.add(Q(C(P.box(.15,.2,.05),"#ffd23f"),0,.35,.32)),s.add(Q(C(P.cyl(.8,.9,.08,16),"#9a6236",{cast:!1}),0,.02,0)),s.position.set(e.x,-.6,e.z),ae.add(s),Ts={g:s,t:0},st(ae,"\u2728",new D(e.x,.8,e.z),8,.6),R.mode="happy",R.modeT=1.6,Ke.mode="cheer",Ke.modeT=1.6,addEvent(n,"\u{1F4B0}",`\xA1Luna desenterr\xF3 un tesoro! (${i})`),addMilestone(n,"treasure1","\u{1F4B0}","Luna encontr\xF3 su primer tesoro escondido."),nt("\u{1F4B0}",i),speak("\xA1Luna encontr\xF3 el tesoro!"),_t("coin"),setTimeout(()=>dogSound("happy",ht()),500),saveRoot(),ut()}var At=null;function _m(){speak("\xA1Escondite! Cierra los ojos y cuenta\u2026 \xA1Luna se va a esconder!"),tn(ud("\u{1F648}",[["\u{1F436}","\u{1F333}\u2753"],["\u{1F525}","\u{1F440} \u{1F436}"],["\u2744\uFE0F","\u21A9\uFE0F"]]),()=>{let n=Ft.circles.filter(t=>t.tree),e=null;for(let t=0;t<600&&!e;t++){let i=n[Math.floor(Math.random()*n.length)],s=Math.random()*Math.PI*2,r=i.x+Math.sin(s)*(i.r+.7),a=i.z+Math.cos(s)*(i.r+.7),o=Math.hypot(r-k.x,a-k.z);o<6||o>15||Dn(r,a,.4)||(e={x:r,z:a})}if(!e){speak("Aqu\xED no hay d\xF3nde esconderse. \xA1Prueba en otro lugar!");return}vi(()=>{At={x:e.x,z:e.z,t:0,dur:60,barkT:4},R.x=e.x,R.z=e.z,R.path=null,R.ry=Math.random()*6,ue("#actions").hidden=!0,ue("#prompt").hidden=!0})})}function lM(n,e){let t=At;t.t+=n,t.barkT-=n,t.barkT<=0&&(t.barkT=5,dogSound("bark",ht(),.5));let i=Math.hypot(k.x-t.x,k.z-t.z);Te.root.visible=i<3.5,lr(`<span>\u{1F648} ${Math.max(0,Math.ceil(t.dur-t.t))}</span>`),i<1.7?zc(!0):t.t>=t.dur&&zc(!1)}function zc(n){let e=At,t=Ne.pet;if(!e)return;At=null,lr(null),Te.root.visible=!0,gi=[{x:R.x,z:R.z},{x:k.x,z:k.z}];let i=n?e.t<20?3:e.t<40?2:1:0,s=i*2;t.bones+=s,today(t).play++,In(t,"hide"),applyFx(t,{felicidad:10+i*4,energia:-6,hidratacion:-4}),addEvent(t,"\u{1F648}",n?`Jugaron al escondite: encontraste a Luna en ${Math.round(e.t)} s.`:"Jugaron al escondite: Luna sali\xF3 solita."),n&&(addMilestone(t,"hide1","\u{1F648}","\xA1Encontraste a Luna jugando al escondite!"),R.mode="happy",R.modeT=1.5,Ke.mode="cheer",Ke.modeT=1.5,st(ae,"\u{1F496}",new D(R.x,1.4,R.z),6)),saveRoot(),ut(),$c(i,s,n?`<span>\u{1F648} ${Math.round(e.t)}s</span>`:"<span>\u{1F436} \u{1F44B}</span>")}function cM(n,e,t){hd.length||aM(),oM(n,e,t),rM(n,e,t),At&&ue("#card3").hidden&&lM(n,e),Pn&&!At&&fe==="town"&&(Math.hypot(Pn.x-k.x,Pn.z-k.z)<1||Te.root.parent===ae&&Math.hypot(Pn.x-R.x,Pn.z-R.z)<.9)&&xm(e),Ts&&(Ts.t+=n,Ts.g.position.y=Math.min(0,-.6+Ts.t*1.2),Ts.t>4&&(ae.remove(Ts.g),Ts=null)),iM(t),mM(n,e,t),TM(n,e,t)}var Yh={friendly:{icon:"\u{1F49A}",word:"amistoso"},shy:{icon:"\u{1F49B}",word:"t\xEDmido"},grumpy:{icon:"\u26A0\uFE0F",word:"\xA1cuidado, est\xE1 enoj\xF3n!"}},uM=[{id:"toby",name:"Toby",size:.55,mood:"friendly",ears:"up",look:{fur:"#f4ece0",dark:"#c08040",light:"#ffffff",spots:!0},owner:{coat:"#ff8f6b",skin:"#f0c8a0",hair:"#6b4a2b"},route:[[-26,-7.4],[2,-7.4],[2,-10.6],[-26,-10.6]]},{id:"rocco",name:"Rocco",size:1.25,mood:"grumpy",ears:"up",look:{fur:"#4a3a30",dark:"#2a1e18",light:"#a08060"},owner:{coat:"#4a6aa8",skin:"#c88858",hair:"#2a1a10"},route:[[38,-7.4],[66,-7.4],[66,-10.6],[38,-10.6]]},{id:"nube",name:"Nube",size:.85,mood:"shy",look:{fur:"#f8f8f8",dark:"#d8d8e0",light:"#ffffff"},owner:{coat:"#c060a0",skin:"#f0c8a0",hair:"#d8d8e0"},route:[[-18,20.6],[8,20.6],[8,17.4],[-18,17.4]]},{id:"canela",name:"Canela",size:.9,mood:"friendly",look:{fur:"#c8803c",dark:"#8a4a20",light:"#f0c890"},home:[3,14],r:4.5},{id:"bruno",name:"Bruno",size:1.3,mood:"grumpy",ears:"up",look:{fur:"#6a6a72",dark:"#3a3a42",light:"#a8a8b0"},home:[-29,0],r:3.5},{id:"pipo",name:"Pipo",size:.5,mood:"shy",look:{fur:"#e0c090",dark:"#a07840",light:"#fff0d0"},home:[28,8],r:4},{id:"max",name:"Max",size:1,mood:"friendly",look:{fur:"#2c2c2c",dark:"#111111",light:"#d8b080"},home:[38,3],r:5},{id:"kira",name:"Kira",size:.45,mood:"grumpy",ears:"up",look:{fur:"#e8b878",dark:"#9a6a38",light:"#fff0d8"},home:[58,2],r:4},{id:"coco",name:"Coco",size:.5,mood:"friendly",ears:"up",look:{fur:"#ffffff",dark:"#e0b0b0",light:"#ffffff"},home:[21,28],r:4,park:!0},{id:"lola",name:"Lola",size:.85,mood:"friendly",look:{fur:"#a0a4b0",dark:"#646874",light:"#dcdee4",spots:!0},home:[25,30],r:4,park:!0},{id:"thor",name:"Thor",size:1.35,mood:"friendly",look:{fur:"#e0a050",dark:"#a8662c",light:"#f8d8a0"},home:[23,31],r:4,park:!0},{id:"sol",name:"Sol",size:.8,mood:"friendly",ears:"up",look:{fur:"#d89048",dark:"#5a3a20",light:"#f8e0b0"},home:[58,27],r:4}],ro=[],hM=Yr("#e0403c");function ym(){for(let n of uM){let e=kc({look:n.look,ears:n.ears,day:n.owner||n.park?10:5,acc:{worn:null}});e.root.scale.setScalar(n.size);let t=Ui(Yh[n.mood].icon,n.mood==="grumpy"?.95:.75,!0);ae.add(e.root,t);let i={def:n,d:e,ind:t,x:0,z:0,ry:0,tx:0,tz:0,wait:Math.random()*2,mode:"idle",sp:0,growlT:0,happyT:0,fleeT:0,near:!1,asked:!1};if(n.mood==="grumpy"&&(i.ring=new bt(new Ia(2.6,3,32),new An({color:"#ff1a1a",transparent:!0,opacity:.6,depthWrite:!1})),i.ring.rotation.x=-Math.PI/2,ae.add(i.ring)),n.owner){let s=xo(n.owner);s.scale.setScalar(.78),ae.add(s),i.owner={g:s,x:n.route[0][0],z:n.route[0][1],ry:0,wi:1},i.x=i.owner.x-1.2,i.z=i.owner.z,i.leash=new bt(P.cyl(.025,.025,1,5),hM),ae.add(i.leash)}else i.x=n.home[0],i.z=n.home[1],i.tx=i.x,i.tz=i.z;ro.push(i)}}var dM=(n,e)=>n>xi.x0+.6&&n<xi.x1-.6&&e>xi.z0+.6&&e<xi.z1-.6;function kp(n){let e=n.def;for(let t=0;t<20;t++){let i=Math.random()*Math.PI*2,s=Math.random()*e.r,r=e.home[0]+Math.cos(i)*s,a=e.home[1]+Math.sin(i)*s;if(!(Dn(r,a,.4)||e.park&&!dM(r,a))){n.tx=r,n.tz=a;return}}n.tx=e.home[0],n.tz=e.home[1]}var wc=new D,Ac=new D,fM=new On,pM=new D(0,1,0),Zh=0,Oh=0;function mM(n,e,t){ro.length||ym();let i=k.px!==void 0&&Math.hypot(k.x-k.px,k.z-k.pz)>.001;k.px=k.x,k.pz=k.z,Zh=i?0:Zh+n;let s=Te.root.parent===ae&&!At;Oh-=n;for(let r of ro){let a=r.def,o=null,l=null,c=1.4+a.size*1.2;if(r.growlT-=n,r.happyT-=n,r.fleeT-=n,r.owner){let h=r.owner,[m,x]=a.route[h.wi],y=m-h.x,p=x-h.z,d=Math.hypot(y,p),g=Math.hypot(k.x-h.x,k.z-h.z)<2.2||r.happyT>0;if(d<.2)h.wi=(h.wi+1)%a.route.length;else if(g)h.ry=Math.atan2(k.x-h.x,k.z-h.z);else{let E=Math.min(d,1.5*n);h.x+=y/d*E,h.z+=p/d*E,h.ry=Math.atan2(y,p)}h.g.position.set(h.x,Math.abs(Math.sin(t*6))*(g?0:.04),h.z),h.g.rotation.y=h.ry,o=h.x-Math.sin(h.ry)*1.1+Math.cos(h.ry)*.5,l=h.z-Math.cos(h.ry)*1.1-Math.sin(h.ry)*.5,c=1.8}else{let h=s?Math.hypot(R.x-r.x,R.z-r.z):99,m=Math.hypot(k.x-r.x,k.z-r.z);if(a.mood==="shy"&&m<3&&i&&r.fleeT<=0){let x=Math.atan2(r.x-k.x,r.z-k.z),y=r.x+Math.sin(x)*3,p=r.z+Math.cos(x)*3;Dn(y,p,.4)||(r.tx=y,r.tz=p,r.fleeT=2.5)}a.mood==="friendly"&&h<5&&h>1.4&&r.happyT<=0&&!a.park&&(r.tx=R.x+1,r.tz=R.z),r.wait>0?r.wait-=n:(o=r.tx,l=r.tz),r.fleeT>0&&(c*=2)}if(o!==null){let h=o-r.x,m=l-r.z,x=Math.hypot(h,m);if(x>.15){let y=Math.min(x,c*n),p=r.x+h/x*y,d=r.z+m/x*y;r.owner||!Dn(p,d,.3)?(r.x=p,r.z=d,r.sp=y/n,r.ry+=Math.atan2(Math.sin(Math.atan2(h,m)-r.ry),Math.cos(Math.atan2(h,m)-r.ry))*(1-Math.exp(-10*n))):(kp(r),r.wait=.5)}else r.sp=0,r.owner||(kp(r),r.wait=1+Math.random()*3);x<=.15&&(r.sp=0)}else r.sp=0;if(a.mood==="grumpy"){let h=Math.hypot(k.x-r.x,k.z-r.z),m=s?Math.hypot(R.x-r.x,R.z-r.z):99;if(Math.min(h,m)<2.9&&r.growlT<=0){r.growlT=4,r.mode="growl",dogSound("bark",4,.7),st(ae,"\u{1F4A2}",new D(r.x,1.6*a.size+.4,r.z),2,.5),s&&!e.asleep&&(R.mode="sit",R.modeT=1.2);let x=today(e);x.growls=(x.growls||0)+1,x.growls<=4&&applyFx(e,{felicidad:-3}),Oh<=0&&(Oh=12,speak(a.owner?`\xA1Cuidado! ${a.name} se pone nervioso. Su due\xF1o lo tiene con correa: mejor saluda de lejos.`:`\xA1Cuidado! ${a.name} est\xE1 enojado. Al\xE9jate despacio, sin correr ni gritar, y no lo mires fijo.`),nt("\u26A0\uFE0F",a.name)),ut()}r.ring.position.set(r.x,.05,r.z),r.ring.material.opacity=r.growlT>2.5?.95:.55+Math.sin(t*4)*.15}let u=r.happyT>0?"happy":r.growlT>2.8?"idle":r.sp>.2?"walk":a.mood==="shy"&&!r.owner?"sit":"idle";if(Fs(r.d,n,{mode:u,speed:r.sp,sad:a.mood==="grumpy"&&r.growlT>2.8,mood:a.mood==="friendly"?"feliz":"normal"}),r.d.root.position.set(r.x,0,r.z),r.d.root.rotation.y=r.ry,r.ind.position.set(r.x,1.85*a.size+.55+Math.sin(t*3+a.size*5)*.08,r.z),r.ind.visible=Math.hypot(k.x-r.x,k.z-r.z)<16,r.leash){r.owner.g.updateMatrixWorld(!0),r.d.root.updateMatrixWorld(!0),Ac.set(.36,.95,.2).applyMatrix4(r.owner.g.matrixWorld),r.d.collar.getWorldPosition(wc);let h=wc.distanceTo(Ac)||.01;r.leash.position.addVectors(wc,Ac).multiplyScalar(.5),r.leash.quaternion.copy(fM.setFromUnitVectors(pM,Ac.sub(wc).normalize())),r.leash.scale.set(1,h,1),od(r.owner.g,n*(Math.hypot(k.x-r.owner.x,k.z-r.owner.z)<2.2?1:.3))}let f=Math.hypot(k.x-r.x,k.z-r.z)<3.2;f&&!r.near&&ed(`${Yh[a.mood].icon} ${a.name} \xB7 ${a.owner?"con su due\xF1o":a.park?"en el parque":"suelto"} \xB7 ${Yh[a.mood].word}`),r.near=f}}function dd(n,e){let t=null,i=n;for(let s of ro){if(e&&!e(s))continue;let r=Math.hypot(k.x-s.x,k.z-s.z);r<i&&(i=r,t=s)}return t}function gM(n){let e=Ne.pet,t=today(e),i=n.def;t.dogs=t.dogs||{};let s=()=>{t.dogs["ask-"+i.id]||(t.dogs["ask-"+i.id]=1,e.bones++,nt("\u{1F64B}","\u{1F9B4} +1"),ut())};if(i.mood==="grumpy"){i.owner?(s(),speak(`\xA1Muy bien por preguntar! Su due\xF1o dice: mejor no, ${i.name} se pone nervioso con otros perros.`)):(speak(`No toques a ${i.name}: est\xE1 enojado. Al\xE9jate despacio con Luna. Si un perro est\xE1 suelto y gru\xF1e, avisa a un adulto.`),nt("\u26A0\uFE0F"));return}if(i.owner&&!n.asked){n.asked=!0,s(),n.owner.g.userData.wave=2,speak(i.mood==="shy"?`\xBFPuedo saludar a tu perrito? \xA1S\xED, pero despacito, ${i.name} es t\xEDmido! Qu\xE9date quieto y toca A otra vez.`:`\xBFPuedo saludar a tu perrito? \xA1Claro que s\xED, ${i.name} es muy bueno! Toca A otra vez.`);return}if(i.mood==="shy"&&Zh<1){speak(`${i.name} se asust\xF3 un poquito. Qu\xE9date quieto un momento y vuelve a tocar A.`),nt("\u{1F49B}","\u{1F92B}");return}let r=Te.root.parent===ae&&!e.asleep;n.happyT=2.5,n.wait=2.5,n.ry=Math.atan2(k.x-n.x,k.z-n.z),st(ae,"\u{1F496}",new D(n.x,1.4*i.size+.4,n.z),4,.5),dogSound("happy",i.size>1?4:i.size>.7?3:1,.7),r&&(R.mode="happy",R.modeT=2,st(ae,"\u{1F496}",new D(R.x,1.4,R.z),2,.5));let a=!t.dogs[i.id];t.dogs[i.id]=1,a?(applyFx(e,{felicidad:r?8:3,energia:-1}),e.bones++,addEvent(e,"\u{1F415}",`${r?"Luna jug\xF3":"Saludaste"} con ${i.name}.`),addMilestone(e,"dogfriend","\u{1F415}","\xA1Luna hizo su primer amigo perruno!"),Object.keys(t.dogs).filter(l=>!l.startsWith("ask-")).length>=3&&addMilestone(e,"dogs3","\u{1F43E}","Luna jug\xF3 con tres perritos en un d\xEDa."),uo("dog"),nt("\u{1F415}","\u{1F9B4} +1")):nt("\u{1F49A}"),speak(i.mood==="shy"?`\xA1Bien hecho! Con calma, ${i.name} se dej\xF3 acariciar.`:`\xA1${i.name} est\xE1 feliz de jugar con ${r?"Luna":"ustedes"}!`),saveRoot(),ut()}var ti=null,Hp=[["\u{1F36B}","El chocolate es malo para los perros. \xA1Nunca les des chocolate!"],["\u{1F4A7}","Los perros necesitan agua fresca todo el d\xEDa, sobre todo cuando hace calor."],["\u{1F443}","La nariz de un perro huele much\xEDsimo mejor que la nuestra."],["\u{1F634}","Los cachorros duermen muchas horas para crecer sanos y fuertes."],["\u{1F9AE}","Antes de acariciar a un perro que no conoces, pregunta siempre a su due\xF1o."],["\u{1F43E}","Cuando un perro mueve la cola suelta y relajada, suele estar contento."],["\u26A0\uFE0F","Si un perro gru\xF1e o ense\xF1a los dientes, al\xE9jate despacio y sin correr."],["\u{1F489}","Las vacunas protegen a los cachorros de enfermedades."],["\u{1F9B7}","Morder juguetes ayuda a los cachorros cuando les salen los dientes."],["\u{1F6C1}","A los perros no hay que ba\xF1arlos todos los d\xEDas: con cepillarlos basta."],["\u{1F347}","Las uvas tambi\xE9n son malas para los perros."],["\u{1F3BE}","Jugar y pasear todos los d\xEDas mantiene a los perros felices."]],Gp=[{q:"\xBFQu\xE9 comida es mala para los perros?",a:[["\u{1F36B}",!0],["\u{1F955}",!1]]},{q:"Un perro que no conoces: \xBFqu\xE9 haces primero?",a:[["\u{1F64B} Preguntar al due\xF1o",!0],["\u{1F3C3} Correr a abrazarlo",!1]]},{q:"Un perro gru\xF1e y ense\xF1a los dientes. \xBFQu\xE9 haces?",a:[["\u{1F6B6} Me alejo despacio",!0],["\u{1F44B} Lo toco",!1]]},{q:"\xBFQu\xE9 necesita Luna todo el d\xEDa?",a:[["\u{1F4A7} Agua fresca",!0],["\u{1F964} Refresco",!1]]},{q:"\xBFQu\xE9 la protege de enfermedades?",a:[["\u{1F489} Las vacunas",!0],["\u{1F36C} Los dulces",!1]]},{q:"\xBFQu\xE9 fruta es mala para los perros?",a:[["\u{1F347} Uvas",!0],["\u{1F34E} Manzana sin semillas",!1]]}],Ji=n=>n.asleep?"\u{1F4A4}":Vc()?"":"\u{1F436}",Cs=(n,e)=>(today(n).games||{})[e]||0;function fi(n,e,t,i,s,r){let a=Ne.pet;applyFx(a,n),e&&eo(e),addEvent(a,t,i);let o=Object.entries(n).filter(([,l])=>l>0).map(([l])=>STAT_ICON[l]).join("");nt(t,(o?"+"+o:"")+(r?" "+r:"")),speak(s),dogSound("happy",ht(),.7),R.mode="happy",R.modeT=1.2,mt=!1,saveRoot(),ut(),Zr()}function er(n,e,t,i){mt=!0,Tn(n,()=>{R.mode="happy",R.modeT=e;let s=performance.now(),r=setInterval(()=>{st(ae,t,new D(R.x,1.5,R.z),1,.5),performance.now()-s>e*1e3&&clearInterval(r)},300);setTimeout(i,e*1e3)})}var Bc={peluqueria:{help:"Esta es la peluquer\xEDa canina. Aqu\xED ba\xF1an a Luna, la peinan y le cortan las u\xF1as.",actions:n=>[["sp:groom","\u{1F6C1}","Ba\xF1o y peinado",Ji(n)||(Cs(n,"groom")?"\u23F3":n.bones<4?"\u{1F9B4}":""),"\u{1F9B4}4"],["sp:nails","\u{1F485}","U\xF1as",Ji(n)||(n.day-(n.lastDone.unas||0)<7?"\u2714":n.bones<1?"\u{1F9B4}":""),"\u{1F9B4}1"]],act:(n,e,t)=>{if(n==="groom")return e.bones-=4,In(e,"groom"),speak("\xA1A ponerse guapa!"),er([t.x+1,t.z+3.6,Math.PI],2.4,"\u{1FAE7}",()=>{e.lastDone.unas=e.day,addMilestone(e,"groom","\u2702\uFE0F","Luna fue a la peluquer\xEDa canina."),fi({higiene:70,felicidad:10},"care","\u2702\uFE0F","Ba\xF1o y peinado en la peluquer\xEDa canina.","\xA1Qued\xF3 preciosa!")});if(n==="nails")return e.bones-=1,er([t.x+1,t.z+3.6,Math.PI],1.4,"\u2728",()=>{e.lastDone.unas=e.day,fi({felicidad:2},"care","\u{1F485}","Le cortaron las u\xF1as a Luna.","\xA1U\xF1as listas!")})}},heladeria:{help:"Esta es la helader\xEDa. Tiene helado especial para perros: sin az\xFAcar y sin chocolate, porque el chocolate les hace da\xF1o.",actions:n=>[["sp:icecream","\u{1F366}","Helado de perro",Ji(n)||(Cs(n,"icecream")?"\u23F3":n.bones<2?"\u{1F9B4}":""),"\u{1F9B4}2"],n.day>=4?["sp:drink","\u{1F6B0}","Agua",Ji(n)||(n.stats.hidratacion>=92?"\u{1F4A7}":""),"\u{1F4A7}"]:null],act:(n,e,t)=>{if(n==="icecream")return e.bones-=2,In(e,"icecream"),speak("Un helado especial para perros. \xA1Sin chocolate!"),er([t.x,t.z+3.4,Math.PI],2,"\u{1F366}",()=>{addMilestone(e,"icecream","\u{1F366}","Luna prob\xF3 su primer helado para perros."),fi({felicidad:15,hidratacion:12},"play","\u{1F366}","Luna tom\xF3 un helado para perros.","\xA1Qu\xE9 rico y fresquito!")});if(n==="drink")return er([t.x,t.z+3.4,Math.PI],1.4,"\u{1F4A7}",()=>fi({hidratacion:30},"water","\u{1F6B0}","Bebi\xF3 agua en la helader\xEDa.","\xA1Glu glu!"))}},panaderia:{help:"Esta es la pasteler\xEDa para perros. Las galletas son premios para darle a Luna en casa o a los perritos del refugio.",actions:n=>[["sp:cookies","\u{1F36A}","Galletas",n.bones<3?"\u{1F9B4}":"","\u{1F9B4}3"],["sp:cake","\u{1F382}","Pastelito",Ji(n)||(Cs(n,"cake")?"\u23F3":n.bones<5?"\u{1F9B4}":""),"\u{1F9B4}5"],["sp:smell","\u{1F443}","Oler",Ji(n)||(Cs(n,"smell")?"\u23F3":""),"\u{1F496}"]],act:(n,e,t)=>{if(n==="cookies"){e.bones-=3,e.items.premio+=2,addEvent(e,"\u{1F36A}","Compraste galletas para perros."),nt("\u{1F36A}","+2"),speak("\xA1Dos galletas! D\xE1selas a Luna en casa o ll\xE9valas al refugio."),_t("coin"),saveRoot(),ut(),Zr();return}if(n==="cake")return e.bones-=5,In(e,"cake"),speak("\xA1Un pastelito para Luna!"),er([t.x,t.z+3.6,Math.PI],2,"\u{1F382}",()=>{today(e).treats=(today(e).treats||0)+1,fi({felicidad:20,saciedad:10},"play","\u{1F382}","Luna comi\xF3 un pastelito para perros.","\xA1\xD1am \xF1am!")});if(n==="smell")return In(e,"smell"),er([t.x-1,t.z+3.4,Math.PI],1.6,"\u{1F443}",()=>fi({felicidad:5},null,"\u{1F443}","Olieron el pan reci\xE9n hecho.","\xA1Mmm, qu\xE9 rico huele!"))}},biblioteca:{help:"Esta es la biblioteca. Escucha un cuento con datos sobre perros o juega a las preguntas.",actions:n=>[["sp:story","\u{1F4D6}","Cuento",""],["sp:quiz","\u2753","Preguntas",(today(n).quiz||0)>=3?"\u23F3":""]],act:(n,e)=>{if(n==="story"){let t=Cs(e,"story"),i=Hp[(e.day*3+t)%Hp.length];In(e,"story"),t===0&&(e.bones++,applyFx(e,{felicidad:6}),addEvent(e,"\u{1F4D6}","Escucharon un cuento en la biblioteca.")),speak("Dato perruno: "+i[1]),tn(`<div class="result"><h2>\u{1F4D6}</h2><div class="howto"><div><span>${i[0]}</span></div></div><p class="fact">${ii(i[1])}</p>${t===0?'<div class="gains"><span>\u{1F9B4} +1</span></div>':""}</div>`),saveRoot(),ut();return}if(n==="quiz")return yM()}},refugio:{help:"Este es el refugio. Aqu\xED viven perritos que buscan familia. Dales mimos o ll\xE9vales una galleta.",actions:n=>[["sp:visit","\u{1F917}","Mimos",Cs(n,"shelter")?"\u23F3":"","\u{1F496}\u{1F9B4}"],["sp:treat","\u{1F36A}","Dar galleta",n.items.premio>0?"":"\u{1F6D2}",`\u{1F36A}${n.items.premio}`]],act:(n,e)=>{if(n==="visit"){In(e,"shelter"),e.bones+=2,mt=!0,Tn([on.x,on.z-3.2,0],()=>{oo.forEach(t=>{t.happyT=2.5}),st(ae,"\u{1F496}",new D(on.x,1.2,on.z),6,.6),setTimeout(()=>{addMilestone(e,"shelter","\u{1F3E1}","Visitaron a los perritos del refugio."),fi({felicidad:12},"play","\u{1F917}","Dieron mimos a los perritos del refugio.","\xA1Los perritos est\xE1n felices!","\u{1F9B4} +2")},1500)});return}n==="treat"&&(e.items.premio--,e.bones+=2,oo.forEach(t=>{t.happyT=2.5}),st(ae,"\u{1F36A}",new D(on.x,1.2,on.z),4,.5),e.rpg=Nn(e),e.rpg.treat=e.day,uo("flag","shelterTreat"),addEvent(e,"\u{1F36A}","Llevaron una galleta a los perritos del refugio."),nt("\u{1F36A}","\u{1F9B4} +2"),speak("\xA1Gracias! Los perritos del refugio te lo agradecen."),_t("coin"),saveRoot(),ut(),Zr())}},perros:{help:"Este es el parque para perros. Luna puede jugar con otros perritos, correr tras el disco y beber agua.",actions:n=>[["sp:friends","\u{1F415}","Jugar con amigos",Ji(n)||so(n),"\u{1F496}"],["sp:frisbee","\u{1F94F}","Disco",Ji(n)||so(n),"\u{1F496}\u{1F9B4}"],n.day>=4?["sp:drink","\u{1F6B0}","Agua",Ji(n)||(n.stats.hidratacion>=92?"\u{1F4A7}":""),"\u{1F4A7}"]:null],act:(n,e)=>{if(n==="friends"){let t=ro.filter(s=>s.def.park),i=t[Math.floor(Math.random()*t.length)];mt=!0,Tn([i.x-1,i.z,Math.PI/2],()=>{i.happyT=3,i.wait=3,R.mode="spin",R.modeT=1.5,dogSound("bark",ht()),st(ae,"\u{1F496}",new D(R.x,1.4,R.z),4),setTimeout(()=>{In(e,"dogpark"),addMilestone(e,"dogpark","\u{1F415}","Luna jug\xF3 en el parque para perros."),outdoorRisk(e),fi({felicidad:18,energia:-10,hidratacion:-6},"play","\u{1F415}",`Luna jug\xF3 con ${i.def.name} en el parque para perros.`,`\xA1Luna y ${i.def.name} son amigas!`)},1800)});return}if(n==="frisbee")return vm(e,0);if(n==="drink"){let t=ts.water;return er(t,1.4,"\u{1F4A7}",()=>fi({hidratacion:30},"water","\u{1F6B0}","Bebi\xF3 agua en el parque para perros.","\xA1Glu glu!"))}}},aventura:{help:"Este es el Valle Aventura. El guardabosques te da misiones: busca setas, plumas, cristales y tesoros. Cruza el puente para llegar a las ruinas y a la cueva.",actions:n=>{let e=Nn(n);return[["sp:quest","\u{1F4DC}",e.met?"Misi\xF3n":"Hablar",""],["sp:bag","\u{1F392}","Mochila",e.met?"":"\u{1F512}"],["sp:rest","\u{1F525}","Fogata",n.stats.energia>=95?"\u26A1":"","\u26A1"]]},act:(n,e)=>{if(n==="quest")return SM(e);if(n==="bag")return EM(e);n==="rest"&&(mt=!0,Tn([45.5,23.4,0],()=>{R.mode="lie",R.modeT=2,setTimeout(()=>fi({energia:12,felicidad:3},null,"\u{1F525}","Descansaron junto a la fogata.","Qu\xE9 calentito"),2e3)}))}}};function xM(n){fe="spot",ti=n;let e=gn.find(t=>t.id===n);speak(e.name),dogSound("bark",ht(),.6),n==="aventura"&&_i&&(_i.userData.wave=2),Zr(),ue("#actions").hidden=!1,ue("#prompt").hidden=!0,si("open:"+n)}function ao(){fe="town",ti=null,mt=!1,ue("#actions").hidden=!0,ns("")}function Zr(){if(fe!=="spot"||!ti)return;let n=Ne.pet;if(ea(Bc[ti].actions(n).concat([["closespot","\u{1F6AA}","Salir",""]])),["panaderia","heladeria","peluqueria"].includes(ti))ns(`<div class="wallet">\u{1F9B4} ${n.bones}${ti==="panaderia"?` \xB7 \u{1F36A} ${n.items.premio}`:""}</div>`);else if(ti==="aventura"){let e=Nn(n),t=is(n);ns(`<div class="wallet">${Di[lo(e.xp)]} \xB7 \u2B50 ${e.xp}${t?` \xB7 ${t.def.icon} ${Math.min(t.n,t.def.n||1)}/${t.def.n||1}`:""}</div>`)}else ns("")}function _M(n){if(n==="closespot")return ao();if(mt||!ti)return;let e=Ne.pet,t=gn.find(i=>i.id===ti);setTimeout(()=>si("do:"+n),0),Bc[ti].act(n.slice(3),e,t)}function vm(n,e){let t=ts.disc;mt=!0;let i=0,s=0;for(let c=0;c<30&&(i=xi.x0+2+Math.random()*(xi.x1-xi.x0-4),s=xi.z0+2+Math.random()*(xi.z1-xi.z0-4),!!Dn(i,s,.6));c++);Ke.mode="throw",Ke.modeT=.35,_t("pop");let r=k.x,a=k.z,o=performance.now();t.visible=!0;let l=setInterval(()=>{let c=Math.min(1,(performance.now()-o)/900);t.position.set(r+(i-r)*c,1.2+Math.sin(c*Math.PI)*1.6-c*1.1,a+(s-a)*c),t.rotation.y+=.5,c>=1&&clearInterval(l)},16);setTimeout(()=>dogSound("bark",ht()),300),Tn([i,s-.6,0],()=>{t.visible=!1,R.mode="happy",R.modeT=.8,st(ae,"\u2B50",new D(i,1.2,s),2,.5),Tn([k.x+.8,k.z,-Math.PI/2],()=>{if(e<2)return mt=!1,vm(n,e+1);let c=In(n,"frisbee"),u=c<=3?1:0;n.bones+=u,outdoorRisk(n),fi({felicidad:14,energia:-8,hidratacion:-5},"play","\u{1F94F}","Jugaron al disco en el parque para perros.","\xA1Qu\xE9 buena atrapando!",u?"\u{1F9B4} +1":"")})})}var qr=null;function yM(){let n=Ne.pet,e=today(n);qr=Gp[(n.day+(e.quizN||0))%Gp.length],e.quizN=(e.quizN||0)+1;let t=$h(qr.a);speak(qr.q),ue("#card3-box").innerHTML=`<div class="result"><h2>\u2753</h2><p class="fact">${ii(qr.q)}</p><div class="quiz">${t.map(([i,s])=>`<button class="go quiz-opt" data-quiz="${s?1:0}">${ii(i)}</button>`).join("")}</div></div>`,ue("#card3").hidden=!1,Uc=null}function vM(n){let e=Ne.pet,t=today(e);if(ue("#card3").hidden=!0,n){t.quiz=(t.quiz||0)+1;let i=t.quiz<=3?1:0;e.bones+=i,applyFx(e,{felicidad:4}),_t("coin"),nt("\u2705",i?"\u{1F9B4} +1":""),speak("\xA1Correcto! Sabes mucho de perros."),addMilestone(e,"quiz","\u{1F9E0}","Respondiste bien una pregunta perruna.")}else nt("\u274C"),speak("\xA1Uy! Esa no. "+(qr?"La respuesta era: "+qr.a.find(i=>i[1])[0]:""));saveRoot(),ut(),Zr()}var on={x:-15.5,z:12};nr.push([on.x,on.z,4.2],[-22,16,2.5]);var oo=[];function Mm(){let n=new we,e=on.x-2.5,t=on.x+2.5,i=on.z-2,s=on.z+2;es(n,e,i,t,i,"#c98c55"),es(n,e,s,t,s,"#c98c55"),es(n,e,i,e,s,"#c98c55"),es(n,t,i,t,s,"#c98c55"),ae.add(n),[{fur:"#b07848",dark:"#704020",light:"#e0b890"},{fur:"#e8e0d0",dark:"#3c3434",light:"#ffffff",spots:!0},{fur:"#505050",dark:"#2a2a2a",light:"#9a9a9a"}].forEach((o,l)=>{let c=kc({look:o,ears:l===1?"up":null,day:5,acc:{worn:null}});c.root.scale.setScalar(.5+l*.12),ae.add(c.root),oo.push({d:c,x:e+1+l*1.5,z:on.z,ph:l*2,happyT:0})});let a=Ui("\u{1F3E1}",.9,!0);a.position.set(on.x,2.4,on.z),ae.add(a)}function MM(n,e){oo.length||Mm();for(let t of oo)t.ph+=n,t.happyT-=n,t.x=on.x+Math.sin(t.ph*.4)*1.8,t.z=on.z+Math.cos(t.ph*.55)*1.2,t.d.root.position.set(t.x,0,t.z),t.d.root.rotation.y=Math.atan2(Math.cos(t.ph*.4)*.72,-Math.sin(t.ph*.55)*.66),Fs(t.d,n,{mode:t.happyT>0?"happy":"walk",speed:.6,mood:"feliz"})}var Di=["\u{1F97E} Novato","\u{1F9ED} Explorador","\u{1F3D5}\uFE0F Aventurero","\u{1F5FA}\uFE0F Gran aventurero","\u{1F451} Leyenda del valle"],lo=n=>Math.min(Di.length-1,Math.floor(n/60)),co=[{id:"q-setas",icon:"\u{1F344}",type:"collect",item:"seta",n:3,xp:20,bones:4,say:"Busca 3 setas brillantes \u{1F344} en el valle. \xA1Brillan entre los \xE1rboles!"},{id:"q-mirador",icon:"\u{1F5FC}",type:"visit",poi:"mirador",n:1,xp:20,bones:3,say:"Sube al mirador: es la torre del este, al final del sendero."},{id:"q-perros",icon:"\u{1F415}",type:"dog",n:3,xp:25,bones:5,say:"Haz 3 amigos perrunos en el pueblo. Busca a los perros con coraz\xF3n verde \u{1F49A} y pregunta a su due\xF1o antes de saludar."},{id:"q-cristal",icon:"\u{1F48E}",type:"collect",item:"cristal",n:1,xp:30,bones:6,say:"Cruza el puente del r\xEDo y encuentra el cristal azul \u{1F48E} en la cueva."},{id:"q-cofre",icon:"\u{1F5DD}\uFE0F",type:"chest",n:1,xp:35,bones:10,say:"Hay una llave dorada \u{1F5DD}\uFE0F escondida al otro lado del r\xEDo. Encu\xE9ntrala y abre el cofre de las ruinas."},{id:"q-refugio",icon:"\u{1F36A}",type:"flag",flag:"shelterTreat",n:1,xp:25,bones:5,say:"Compra galletas en la pasteler\xEDa \u{1F950} y lleva una a los perritos del refugio \u{1F3E1}."},{id:"q-plumas",icon:"\u{1FAB6}",type:"collect",item:"pluma",n:3,xp:25,bones:5,say:"Junta 3 plumas de colores \u{1FAB6} en el valle."}],Vr=[{id:"d-setas",icon:"\u{1F344}",type:"collect",item:"seta",n:4,xp:15,bones:3,say:"Misi\xF3n del d\xEDa: junta 4 setas brillantes \u{1F344} en el valle."},{id:"d-plumas",icon:"\u{1FAB6}",type:"collect",item:"pluma",n:2,xp:15,bones:3,say:"Misi\xF3n del d\xEDa: encuentra 2 plumas \u{1FAB6} en el valle."},{id:"d-perros",icon:"\u{1F415}",type:"dog",n:2,xp:15,bones:3,say:"Misi\xF3n del d\xEDa: saluda a 2 perros amistosos \u{1F49A} del pueblo."},{id:"d-cofre",icon:"\u{1F5DD}\uFE0F",type:"chest",n:1,xp:20,bones:5,say:"Misi\xF3n del d\xEDa: hay otra llave \u{1F5DD}\uFE0F al otro lado del r\xEDo. \xA1Abre el cofre de las ruinas!"},{id:"d-mirador",icon:"\u{1F5FC}",type:"visit",poi:"mirador",n:1,xp:10,bones:2,say:"Misi\xF3n del d\xEDa: sube al mirador a ver el pueblo."},{id:"d-cristal",icon:"\u{1F48E}",type:"collect",item:"cristal",n:1,xp:15,bones:3,say:"Misi\xF3n del d\xEDa: trae el cristal \u{1F48E} de la cueva."}];function Nn(n){return n.rpg||(n.rpg={xp:0,met:!1,story:0,q:null,bag:{},day:0,got:[],daily:0,dailyDay:0,key:!1,chests:0,quests:0}),n.rpg}function bm(n){return co.find(e=>e.id===n)||Vr.find(e=>e.id===n)}function is(n){let e=Nn(n);if(!e.q)return null;let t=bm(e.q.id);return t?{def:t,n:e.q.n}:null}function Jh(n){let e=Nn(n);if(e.story<co.length)e.q={id:co[e.story].id,n:0};else{e.dailyDay!==n.day&&(e.dailyDay=n.day,e.daily=0),e.day!==n.day&&(e.day=n.day,e.got=[]);let t=Object.keys(today(n).dogs||{}).filter(o=>!o.startsWith("ask-")).length,i=o=>(o==="seta"?7:o==="pluma"?4:1)-e.got.filter(l=>l[0]==={seta:"s",pluma:"f",cristal:"c"}[o]).length,s=o=>o.type==="collect"?i(o.item)>=o.n:o.type==="chest"?e.chestDay!==n.day:o.type==="dog"?9-t>=o.n:!0,r=n.day*5+e.daily+n.bornAt%7,a=Vr[r%Vr.length];for(let o=0;o<Vr.length;o++){let l=Vr[(r+o)%Vr.length];if(s(l)){a=l;break}}e.q={id:a.id,n:0}}bm(e.q.id).type==="chest"&&(e.key=!1),fd(n)}function uo(n,e){if(!Ne)return;let t=Ne.pet,i=Nn(t),s=is(t);!s||s.def.type!==n||n==="collect"&&s.def.item!==e||n==="visit"&&s.def.poi!==e||n==="flag"&&s.def.flag!==e||(i.q.n++,i.q.n>=(s.def.n||1)?bM(t,s.def):(nt(s.def.icon,`${i.q.n}/${s.def.n}`),speak(`\xA1Bien! Llevas ${i.q.n} de ${s.def.n}.`)),saveRoot())}function bM(n,e){let t=Nn(n),i=lo(t.xp),s=!co.includes(e);s?(t.dailyDay!==n.day&&(t.dailyDay=n.day,t.daily=0),t.daily++):t.story++;let r=s&&t.daily>3?0:e.bones;t.xp+=e.xp,t.quests++,n.bones+=r,applyFx(n,{felicidad:10}),addEvent(n,"\u{1F4DC}",`Misi\xF3n cumplida en el Valle Aventura (${e.icon}).`),addMilestone(n,"quest1","\u{1F4DC}","\xA1Primera misi\xF3n de exploraci\xF3n cumplida!"),t.story>=co.length&&!s&&addMilestone(n,"questall","\u{1F3C6}","\xA1Completaste todas las misiones del guardabosques!"),t.q=null,Jh(n);let a=lo(t.xp),o=is(n);Ke.mode="cheer",Ke.modeT=1.6,R.mode="happy",R.modeT=1.6,_t("coin"),a>i&&addMilestone(n,"rank"+a,Di[a].split(" ")[0],`Nuevo rango de explorador: ${Di[a]}.`),speak(`\xA1Misi\xF3n cumplida! ${a>i?"\xA1Subiste de rango! ":""}${o?"Nueva misi\xF3n: "+o.def.say:""}`),tn(`<div class="result"><h2>\u{1F4DC} \u2714</h2><div class="stars">${e.icon}</div><div class="gains">${r?`<span>\u{1F9B4} +${r}</span>`:""}<span>\u2B50 +${e.xp}</span>${a>i?`<span>${Di[a]}</span>`:""}</div>${o?`<p class="fact">${o.def.icon} ${ii(o.def.say)}</p>`:""}</div>`),ut()}function SM(n){let e=Nn(n);if(_i&&(_i.userData.wave=2),e.met){e.q||Jh(n);let t=is(n);speak(`Tu misi\xF3n: ${t.def.say} Llevas ${Math.min(t.n,t.def.n||1)} de ${t.def.n||1}.`),tn(`<div class="result"><h2>\u{1F4DC}</h2><div class="stars">${t.def.icon}</div><p class="fact">${ii(t.def.say)}</p><div class="gains"><span>${Math.min(t.n,t.def.n||1)}/${t.def.n||1}</span><span>\u{1F9B4} ${t.def.bones}</span><span>\u2B50 ${t.def.xp}</span></div></div>`)}else{e.met=!0,Jh(n),addMilestone(n,"ranger","\u{1F9ED}","Conociste al guardabosques del Valle Aventura.");let t=is(n);speak(`\xA1Hola, exploradores! Soy el guardabosques. En este valle hay setas, plumas, cristales y tesoros. Primera misi\xF3n: ${t.def.say}`),tn(`<div class="result"><h2>\u{1F9ED}</h2><div class="howto"><div><span>\u{1F344}\u{1FAB6}\u{1F48E}\u{1F5DD}\uFE0F</span></div></div><p class="fact">${t.def.icon} ${ii(t.def.say)}</p></div>`)}saveRoot(),Zr()}function EM(n){let e=Nn(n),t=e.bag,i=lo(e.xp),s=e.xp%60;speak(`Eres ${Di[i].slice(Di[i].indexOf(" ")+1)}. Has cumplido ${e.quests} misiones.`),tn(`<div class="result"><h2>\u{1F392}</h2><div class="weekbox"><span>${Di[i]}</span><span>\u{1F4DC} ${e.quests}</span></div>
    <div class="xpbar"><b style="width:${i===Di.length-1?100:Math.round(s/60*100)}%"></b></div>
    <div class="stickers"><span class="stk">\u{1F344} ${t.seta||0}</span><span class="stk">\u{1FAB6} ${t.pluma||0}</span><span class="stk">\u{1F48E} ${t.cristal||0}</span><span class="stk">\u{1F5DD}\uFE0F ${e.chests}</span></div></div>`)}var ar=[],Sm={seta:"\u{1F344}",pluma:"\u{1FAB6}",cristal:"\u{1F48E}",llave:"\u{1F5DD}\uFE0F"};function no(n,e){for(let t=0;t<200;t++){let i=Dt.x0+2+n()*(Dt.x1-Dt.x0-4),s=e?Dt.riverZ+2.5+n()*(Dt.z1-Dt.riverZ-4):Dt.z0+2+n()*(Dt.z1-Dt.z0-4);if(!Dn(i,s,.7)&&Math.abs(s-Dt.riverZ)>2.4)return[i,s]}return[56,26]}function fd(n){ar.forEach(r=>ae.remove(r.m)),ar.length=0;let e=Nn(n);e.day!==n.day&&(e.day=n.day,e.got=[]);let t=yi(n.bornAt%100003+n.day*6151+11),i=[];for(let r=0;r<7;r++)i.push(["s"+r,"seta",no(t,r>=5)]);for(let r=0;r<4;r++)i.push(["f"+r,"pluma",no(t,r>=2)]);i.push(["c0","cristal",[nn.cave[0],nn.cave[1]-1.2]]);let s=is(n);s&&s.def.type==="chest"&&!e.key&&i.push(["k"+e.quests,"llave",no(t,!0)]);for(let[r,a,[o,l]]of i){if(e.got.includes(r))continue;let c=Ui(Sm[a],a==="llave"?1:.85);c.position.set(o,.6,l),ae.add(c),ar.push({id:r,item:a,m:c,x:o,z:l})}}var Kh=[];function Em(){for(let n=0;n<3;n++){let e=new we,t=C(P.sph(.25,12,10),"#f4f0ea");t.scale.set(.9,.85,1.2),t.position.y=.25,e.add(t),e.add(Q(C(P.sph(.16,10,8),"#f4f0ea"),0,.45,.22));for(let r of[-1,1]){let a=C(P.cap(.04,.22),"#f4f0ea");a.position.set(r*.07,.68,.18),a.rotation.z=r*.2,e.add(a),e.add(Q(C(P.sph(.025,6,5),"#1c1410",{cast:!1}),r*.07,.48,.36))}e.add(Q(C(P.sph(.08,8,6),"#ffffff"),0,.3,-.3));let[i,s]=no(yi(900+n),n===2);e.position.set(i,0,s),ae.add(e),Kh.push({g:e,x:i,z:s,tx:i,tz:s,hop:0,wait:1+n})}}function TM(n,e,t){if(MM(n,t),ts.flame&&ts.flame.scale.set(1+Math.sin(t*13)*.12,1+Math.sin(t*9)*.2,1+Math.cos(t*11)*.12),_i&&od(_i,n),!Lc(k.x,k.z)&&Math.hypot(k.x-Dt.x0,k.z-Dt.gateZ)>30)return;Kh.length||Em();let i=Nn(e),s=Te.root.parent===ae&&!At;for(let r=ar.length-1;r>=0;r--){let a=ar[r];a.m.position.y=.6+Math.sin(t*3+r)*.12,(Math.hypot(a.x-k.x,a.z-k.z)<1||s&&Math.hypot(a.x-R.x,a.z-R.z)<.9)&&(ae.remove(a.m),ar.splice(r,1),i.got.push(a.id),st(ae,Sm[a.item],a.m.position,3,.5),_t("coin"),a.item==="llave"?(i.key=!0,nt("\u{1F5DD}\uFE0F","\u2714"),speak("\xA1La llave dorada! Ahora abre el cofre de las ruinas.")):(i.bag[a.item]=(i.bag[a.item]||0)+1,applyFx(e,{felicidad:2}),a.item==="cristal"&&addMilestone(e,"crystal","\u{1F48E}","Encontraron un cristal en la cueva del valle."),uo("collect",a.item)),s&&(R.mode="happy",R.modeT=.8),saveRoot(),ut())}if(Math.hypot(k.x-nn.mirador[0],k.z-nn.mirador[1])<2){let r=is(e),a=r&&r.def.type==="visit"&&r.def.poi==="mirador";(!Cs(e,"mirador")||a)&&(Cs(e,"mirador")||(applyFx(e,{felicidad:6}),nt("\u{1F5FC}","\u{1F440}"),speak("\xA1Qu\xE9 vista! Desde el mirador se ve todo el pueblo.")),In(e,"mirador"),st(ae,"\u2728",new D(65,4.6,20.8),6,.6),addMilestone(e,"mirador","\u{1F5FC}","Subieron al mirador del Valle Aventura."),uo("visit","mirador"),saveRoot(),ut())}mi&&(mi.userData.lid.rotation.x=ei(mi.userData.lid.rotation.x,i.chestDay===e.day?-1.1:0,1-Math.exp(-6*n)));for(let r of Kh){r.wait-=n;let a=Math.hypot(k.x-r.x,k.z-r.z);if(r.wait<=0){let o=r.tx-r.x,l=r.tz-r.z,c=Math.hypot(o,l);if(c<.1){let[u,f]=no(Math.random,r.z>Dt.riverZ);Math.hypot(u-r.x,f-r.z)<6&&(r.tx=u,r.tz=f),r.wait=1+Math.random()*2.5}else{let u=Math.min(c,1.6*n);r.x+=o/c*u,r.z+=l/c*u,r.hop+=n*9,r.g.rotation.y=Math.atan2(o,l)}}r.g.position.set(r.x,Math.abs(Math.sin(r.hop))*.25,r.z),a<1.4&&!r.met&&(r.met=!0,st(ae,"\u{1F496}",new D(r.x,.9,r.z),2,.45),_t("pop"),s&&(R.mode="happy",R.modeT=.8)),a>4&&(r.met=!1)}}function wM(){let n=Ne.pet,e=Nn(n),t=is(n);if(e.chestDay===n.day){speak("Este cofre ya est\xE1 abierto. \xA1Vuelve ma\xF1ana!"),nt("\u{1F4E6}");return}if(!e.key||!t||t.def.type!=="chest"){speak(t&&t.def.type==="chest"?"Est\xE1 cerrado con llave. Busca la llave dorada al otro lado del r\xEDo.":"Un cofre antiguo cerrado con llave. Pregunta al guardabosques: a veces pide abrirlo."),nt("\u{1F512}");return}e.key=!1,e.chestDay=n.day,e.chests++;let i=4+Math.floor(Math.random()*5);n.bones+=i,st(ae,"\u2728",new D(nn.chest[0],1.2,nn.chest[1]+1.1),8,.6),addMilestone(n,"chest","\u{1F5DD}\uFE0F","\xA1Abrieron el cofre antiguo de las ruinas!"),nt("\u{1F4E6}",`\u{1F9B4} +${i}`),speak("\xA1El cofre se abri\xF3! Ten\xEDa huesos dorados."),uo("chest"),saveRoot(),ut()}var it=null,Jc=!1;function pd(n,e){let t=Vc();return t&&Ln(Te.root,n),Ln(Ke.root,n),Gt=n,fe=e,ue("#actions").hidden=!0,ue("#prompt").hidden=!0,ns(""),Ps.visible=!1,Qi.visible=!1,Te.root.visible=!0,t}function Kc(n){let e=Gt;it=null,lr(null),Ke.mode="idle",vi(()=>{if(n==="casa"){em();return}let t=Te.root.parent===e;t&&Ln(Te.root,ae),Ln(Ke.root,ae),Gt=ae,fe="town";let i=Ns.find(s=>s.pl.id===n);(t?mo:Zp)(i.x+1.6,i.z,Math.PI/2),n==="parque"?jp():n==="lago"&&cm()})}function md(n,e,t,i,s){let r=Ne.pet;it.over=!0,i(r),saveRoot(),ut(),lr(null),n&&(Ke.mode="cheer",Ke.modeT=2,R.mode="happy",R.modeT=2),$c(n,e,t,()=>Kc(s))}var gd=(n,e,t,i,s,r,a,o=5)=>{Mt.position.lerp(new D(n,e,t),1-Math.exp(-o*a)),Mt.lookAt(i,s,r)},Yt=new Bn;function AM(){speak("\xA1Carrera de obst\xE1culos! Toca A o la pantalla para saltar las vallas y los charcos."),tn(ud("\u{1F3C3}",[["\u24B6 \u{1F446}","\u2934\uFE0F \u{1F6A7}"],["\u{1F4A6}","\u2934\uFE0F"],["\u{1F9B4}","\u{1F60B}"]]),()=>vi(Tm))}function Tm(){nd(Yt);let n=jr(Yt);Yt.background=new qe("#bfe6ff"),Yt.fog=new ds("#bfe6ff",22,60);let e=300,t=yi(Date.now()%1e5);Yt.add(Q(C(P.box(e+60,.2,24),"#8fd46e",{cast:!1,recv:!0}),e/2,-.1,-4)),Yt.add(Q(C(P.box(e+60,.04,2.4),"#f2d39a",{cast:!1,recv:!0}),e/2,.02,0));for(let s=-10;s<e+20;s+=2.5+t()*4){let r=sd(t()<.4);if(r.position.set(s,0,-4-t()*8),r.scale.setScalar(.8+t()*.5),Yt.add(r),t()<.5){let a=C(P.sph(.3+t()*.3,10,8),"#5cbf5a");a.position.set(s+1,.2,2.6+t()*1.5),Yt.add(a)}}for(let s=0;s<e+20;s+=4)Yt.add(Q(C(P.box(.12,.6,.12),"#ffffff"),s,.3,-1.6));Yt.add(Q(C(P.box(e+20,.08,.08),"#ffffff"),e/2,.55,-1.6));let i=[];for(let s=10;s<e-10;s+=6+t()*3.5){let r=t()<.62?"fence":"puddle",a;if(r==="fence"){a=new we;for(let o of[-.85,.85])a.add(Q(C(P.box(.12,.95,.12),"#c98c55"),0,.47,o));a.add(Q(C(P.box(.1,.14,1.8),"#ff5c5c"),0,.78,0)),a.add(Q(C(P.box(.1,.12,1.8),"#ffffff"),0,.45,0))}else a=C(P.cyl(.85,.85,.04,20),"#5ec2f5",{cast:!1}),a.scale.set(1.2,1,.9),a.position.y=.04;if(a.position.x=s,Yt.add(a),i.push({kind:r,x:s,m:a,done:!1}),t()<.6){let o=t()<.6,l=rd();l.scale.setScalar(.9);let c=o?s:s+3,u=o?1.55:.6;l.position.set(c,u,0),Yt.add(l),i.push({kind:"bone",x:c,y:u,m:l,done:!1})}}pd(Yt,"agility"),Te.root.rotation.y=Math.PI/2,Ke.root.rotation.y=Math.PI/2,Ke.leash=!0,Mt.position.set(2,2.8,9),it={kind:"agility",lt:n,obs:i,time:0,dur:35,x:0,y:0,vy:0,onGround:!0,buffer:-9,lastGround:0,speed:5,hits:0,cleared:0,splash:0,bones:0,inv:0,over:!1,update:RM,tap:()=>{it.buffer=it.time},quit:()=>Kc("parque")}}function RM(n){let e=it,t=Ne.pet,i=stageOf(t.day);if(!e.over){e.time+=n,e.speed=Math.min(6.4,5+e.time*.05),(Oe.jumpPress||Oe.a)&&(e.buffer=e.time);let r=Oe.aHeld||Oe.up||Jc;e.onGround&&(e.lastGround=e.time),e.time-e.buffer<=.12&&e.time-e.lastGround<=.1&&(e.vy=7.6,e.buffer=-9,e.lastGround=-9,e.onGround=!1,_t("pop"));let a=e.vy>0?22:34;e.vy>0&&!r&&(a=40),e.vy-=a*n,e.y+=e.vy*n,e.y<=0&&(e.y=0,e.vy=0,e.onGround=!0),e.x+=e.speed*n,e.inv>0&&(e.inv-=n);for(let o of e.obs){if(o.done)continue;if(o.kind==="bone"){o.m.rotation.y+=n*3,Math.abs(o.x-e.x)<.6&&Math.abs(o.y-(e.y+.7))<.65&&(o.done=!0,Yt.remove(o.m),e.bones++,_t("coin"),st(Yt,"\u{1F9B4}",o.m.position,2,.45));continue}let l=o.kind==="puddle"?.8:.05,c=o.kind==="fence"?.7:.08;e.inv<=0&&Math.abs(o.x-e.x)<l+.2&&e.y<c?(o.done=!0,e.hits++,e.inv=.8,dogSound("sad",ht(),.5),o.kind==="puddle"?(e.splash++,st(Yt,"\u{1F4A6}",new D(e.x,.6,0),4,.5)):(o.m.rotation.z=-.7,st(Yt,"\u{1F4A5}",new D(e.x,.8,0),2,.5))):o.x<e.x-l-.3&&(o.done=!0,e.cleared++,st(Yt,"\u2B50",new D(e.x,1.8,0),1,.45))}if(lr(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F9B4} ${e.bones}</span>`),e.time>=e.dur){let o=e.hits===0?3:e.hits<=3?2:1,l=Math.floor((e.bones+e.cleared/2)/3);md(o,l,`<span>\u{1F6A7} ${e.cleared}</span>`,c=>{c.bones+=l,today(c).play++,In(c,"agility"),applyFx(c,{felicidad:14+o*3,energia:-14,saciedad:-6,hidratacion:-10,higiene:-e.splash*6}),addEvent(c,"\u{1F3C3}",`Carrera de obst\xE1culos: ${e.cleared} saltos y ${e.bones} huesos.`),o===3&&addMilestone(c,"agility","\u{1F3C3}","\xA1Luna hizo una carrera de obst\xE1culos perfecta!"),outdoorRisk(c)},"parque")}}let s=!e.over;Te.root.scale.setScalar(po[Math.max(1,i.size)]),Te.root.position.set(e.x,e.y,0),Te.root.visible=!(e.inv>0&&Math.floor(e.time*12)%2),Fs(Te,n,{mode:s&&e.onGround?"walk":"happy",speed:s?e.speed*.6:0,mood:"feliz"}),k.x=e.x-1.9,Ke.root.position.set(k.x,0,.4),Hc(Ke,n,s,e.speed*.7),Gc(Yt,!0),gd(e.x+2.2,2.8,9,e.x+2.2,.9,0,n,8),e.lt.sun.position.set(e.x+5,12,8),e.lt.sun.target.position.set(e.x,0,0)}var Zt=new Bn,CM=[-3.5,-6.5,-9.5];function IM(n){let e=new we,t=n?"#ffd23f":"#ffffff",i=C(P.sph(.42,14,10),t);i.scale.set(.9,.65,1.3),i.position.y=.2,e.add(i);for(let r of[-1,1]){let a=C(P.sph(.2,10,8),n?"#f0b820":"#e4e8f0");a.scale.set(.4,.6,1.1),a.position.set(r*.33,.28,-.05),e.add(a)}e.add(Q(C(P.sph(.24,12,10),n?t:"#3c8c4c"),0,.65,.38));let s=C(P.cone(.09,.26,8),"#ff9f43");s.rotation.x=Math.PI/2,s.position.set(0,.6,.66),e.add(s);for(let r of[-1,1])e.add(Q(C(P.sph(.035,6,5),"#1c1410",{cast:!1}),r*.12,.7,.57));if(n){let r=Ui("\u2728",.6);r.position.y=1.2,e.add(r)}return e}function PM(){speak("\xA1Los patos tienen hambre! Mu\xE9vete y l\xE1nzales su comida con A o tocando la pantalla."),tn(ud("\u{1F986}",[["\u2B05\uFE0F\u27A1\uFE0F","\u{1F9D2}"],["\u24B6 \u{1F446}","\u{1F33E} \u2B06\uFE0F"],["\u{1F33E} \u{1F986}","\u{1F60B}"],["\u{1F986}\u2728","+3"]]),()=>vi(wm))}function wm(){nd(Zt);let n=jr(Zt);n.sun.position.set(4,14,8),n.sun.target.position.set(0,0,-5),Zt.background=new qe("#bfe6ff"),Zt.fog=new ds("#bfe6ff",25,50);let e=C(new kn(70,24),"#5ec2f5",{cast:!1,recv:!0});e.rotation.x=-Math.PI/2,e.position.set(0,0,-7),Zt.add(e),Zt.add(Q(C(P.box(70,.3,8),"#f6e3a8",{cast:!1,recv:!0}),0,-.1,4.6)),Zt.add(Q(C(P.box(70,.3,12),"#8fd46e",{cast:!1,recv:!0}),0,-.1,-24));let t=yi(777);for(let s=-30;s<30;s+=2+t()*3){let r=sd(t()<.4);r.position.set(s,0,-20-t()*4),Zt.add(r)}for(let s=0;s<14;s++){let r=C(P.cyl(.35,.35,.03,12),"#58b04a",{cast:!1});r.position.set(-12+t()*24,.02,-2-t()*11),Zt.add(r)}for(let s=0;s<18;s++){let r=C(P.cyl(.04,.05,1+t()*.6,5),"#4f9a3c");r.position.set(-14+t()*28,.5,.4+t()*.3),Zt.add(r)}let i=pd(Zt,"ducksgame");k.x=0,k.z=2.2,k.ry=Math.PI,i&&(R.x=1.3,R.z=2.6,R.ry=Math.PI),Mt.position.set(0,5.5,8.5),it={kind:"ducks",lt:n,water:e,time:0,dur:30,ducks:[],spawnT:.3,pellets:[],cd:0,score:0,over:!1,update:LM,quit:()=>Kc("lago"),tap:s=>{Kr.set(s.clientX/ze.innerWidth*2-1,-(s.clientY/ze.innerHeight)*2+1),Jr.setFromCamera(Kr,Mt);let r=Jr.intersectObject(e)[0];r&&(k.x=clamp(r.point.x,-6,6)),Am()}}}function Am(){let n=it;if(!n||n.over||n.cd>0)return;n.cd=.55,Ke.mode="throw",Ke.modeT=.3,_t("pop");let e=.8,t=k.x+.25,i=1.8,s=1.3,r=null,a=.75;for(let u of n.ducks){if(u.fed)continue;let f=u.x+u.vx*e,h=Math.abs(f-k.x);h<a&&(a=h,r={x:f,z:u.z})}let o=r?r.x:k.x,l=r?r.z:-6.5,c=C(P.sph(.11,8,6),"#e8c860");c.position.set(t,s,i),Zt.add(c),n.pellets.push({s:c,t:0,T:e,vx:(o-t)/e,vz:(l-i)/e,vy:(.3-s+.5*9*e*e)/e})}function LM(n){let e=it,t=Ne.pet,i=ho.getElapsed();if(!e.over){e.time+=n,e.cd-=n;let s=clamp(Oe.right-Oe.left+Oe.jx,-1,1);if(k.x=clamp(k.x+s*5*n,-6,6),(Oe.a||Oe.jumpPress)&&Am(),e.spawnT-=n,e.spawnT<=0&&e.time<e.dur-1.5){let r=Math.random()<.5,a=Math.random()<.13,o=IM(a),l=CM[Math.floor(Math.random()*3)],c=(r?1:-1)*(1.3+Math.random()*1.3)*(1+e.time/45);o.position.set(r?-13:13,0,l),o.rotation.y=r?Math.PI/2:-Math.PI/2,Zt.add(o),e.ducks.push({m:o,x:o.position.x,z:l,vx:c,gold:a,fed:!1,ph:Math.random()*6}),e.spawnT=.7+Math.random()*.6}for(let r of e.pellets)if(r.t+=n,r.vy-=9*n,r.s.position.x+=r.vx*n,r.s.position.y+=r.vy*n,r.s.position.z+=r.vz*n,r.t>=r.T){r.dead=!0,Zt.remove(r.s);let a=e.ducks.find(o=>!o.fed&&Math.hypot(o.x-r.s.position.x,o.z-r.s.position.z)<.85);if(a){a.fed=!0;let o=a.gold?3:1;e.score+=o,_t("quack"),st(Zt,"\u{1F496}",new D(a.x,1.2,a.z),3,.5),R.mode="happy",R.modeT=.8}else st(Zt,"\u{1F4A7}",r.s.position,1,.4)}if(e.pellets=e.pellets.filter(r=>!r.dead),lr(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F986} ${e.score}</span>`),e.time>=e.dur){let r=e.score>=16?3:e.score>=8?2:e.score>=1?1:0,a=Math.min(8,Math.floor(e.score/4));md(r,a,`<span>\u{1F986} ${e.score}</span>`,o=>{o.bones+=a,today(o).play++,In(o,"ducks"),applyFx(o,{felicidad:8+Math.min(16,e.score),energia:-4}),addEvent(o,"\u{1F986}",`Le dieron de comer a los patos del lago (${e.score} puntos).`),e.score>=10&&addMilestone(o,"ducks10","\u{1F986}","\xA1Alimentaron a muchos patos en el lago!"),outdoorRisk(o)},"lago")}}for(let s of e.ducks)s.ph+=n,s.x+=s.vx*n*(s.fed?2.2:1),s.m.position.set(s.x,Math.sin(s.ph*3)*.04,s.z),s.fed&&(s.m.rotation.z=Math.sin(s.ph*12)*.15),Math.abs(s.x)>14&&(Zt.remove(s.m),s.gone=!0);e.ducks=e.ducks.filter(s=>!s.gone),Te.root.parent===Zt&&(R.x+=(k.x+1.3-R.x)*(1-Math.exp(-6*n)),Te.root.scale.setScalar(po[stageOf(t.day).size]),Te.root.position.set(R.x,0,R.z),Te.root.rotation.y=Math.PI,R.modeT>0&&(R.modeT-=n),Fs(Te,n,{mode:t.asleep?"sleep":R.modeT>0?"happy":"sit",mood:"feliz"})),Ke.root.position.set(k.x,0,k.z),Ke.root.rotation.y=Math.PI,Hc(Ke,n,!1,0),Gc(Zt,!1),gd(k.x*.35,5.5,8.5,k.x*.35,0,-5,n)}var Pi=new Bn,DM=["\u{1F436}","\u{1F9B4}","\u{1F3BE}","\u{1F9F8}","\u{1F986}","\u{1F333}","\u{1F356}","\u{1F43F}\uFE0F","\u{1F98B}","\u{1F3E0}"];function NM(){mt||(speak("\xA1Encuentra las parejas! Toca dos cartas."),vi(Rm))}function Rm(){nd(Pi),Xc(Pi,{floor:"#e7b98a",back:"#ffd1e6",side:"#c8f1e4",rug:"#ffb3d1"}),Pi.add(Q(C(P.box(7.4,.3,5.6),"#c98c55",{recv:!0}),0,.85,0));for(let[c,u]of[[-3.3,-2.4],[3.3,-2.4],[-3.3,2.4],[3.3,2.4]])Pi.add(Q(C(P.box(.3,.85,.3),"#a0642c"),c,.42,u));let n=Ne.pet,e=n.day<8?4:6,t=$h(DM).slice(0,e),i=$h([...t,...t]),s=i.length/4,r=i.map((c,u)=>{let f=u%4,h=Math.floor(u/4),m=new we;m.position.set(-2.4+f*1.6,1.06,(h-(s-1)/2)*1.85);let x=C(P.box(1.2,.06,1.55),"#c48ad8");m.add(x);let y=new bt(new kn(.75,.75),new An({map:Ds("\u{1F43E}"),transparent:!0}));y.rotation.x=-Math.PI/2,y.position.y=.035,m.add(y);let p=new bt(new kn(1.14,1.49),new An({color:"#ffffff"}));p.rotation.x=Math.PI/2,p.position.y=-.035,m.add(p);let d=new bt(new kn(.95,.95),new An({map:Ds(c),transparent:!0}));return d.rotation.x=Math.PI/2,d.rotation.z=Math.PI,d.position.y=-.04,m.add(d),m.traverse(g=>{g.userData.card=u}),Pi.add(m),{ic:c,g:m,faceBg:p,open:!1,done:!1,rot:0}}),a=C(P.box(1.42,.03,1.77),"#ffd23f",{cast:!1});Pi.add(a),pd(Pi,"memory")&&(R.x=4.4,R.z=1.2),k.x=-4.4,k.z=1.2;let l=ze.innerWidth<ze.innerHeight;Mt.position.set(0,l?12:8,l?6.5:5.4),it={kind:"memory",cards:r,cursor:a,sel:0,first:null,lock:!1,moves:0,pairs:e,found:0,over:!1,update:FM,quit:()=>Kc("casa"),tap:c=>{Kr.set(c.clientX/ze.innerWidth*2-1,-(c.clientY/ze.innerHeight)*2+1),Jr.setFromCamera(Kr,Mt);let u=Jr.intersectObjects(r.map(f=>f.g),!0)[0];u&&u.object.userData.card!=null&&(it.sel=u.object.userData.card,xd(it.sel))},key:c=>{let u=r.length,f=it.sel;it.sel=c==="left"?(f+u-1)%u:c==="right"?(f+1)%u:c==="up"?(f+u-4)%u:(f+4)%u,_t("step")}}}function xd(n){let e=it;if(!e||e.kind!=="memory"||e.over||e.lock)return;let t=e.cards[n];if(!t||t.open||t.done)return;if(t.open=!0,_t("pop"),e.first===null){e.first=n;return}e.moves++;let i=e.cards[e.first];i.ic===t.ic?(i.done=t.done=!0,e.first=null,e.found++,i.faceBg.material=t.faceBg.material=new An({color:"#c8f5e6"}),_t("coin"),dogSound("yip",ht(),.5),R.mode="happy",R.modeT=1,st(Pi,"\u2B50",t.g.position.clone().setY(1.6),2,.5),e.found===e.pairs&&setTimeout(()=>{it===e&&UM()},700)):(e.lock=!0,setTimeout(()=>{it===e&&(i.open=t.open=!1,e.first=null,e.lock=!1)},900))}function UM(){let n=it,e=n.moves<=n.pairs+2?3:n.moves<=n.pairs*2?2:1,t=((today(Ne.pet).games||{}).memory||0)<3?e:0;md(e,t,`<span>\u{1F0CF} ${n.moves}</span>`,i=>{i.bones+=t,today(i).play++,In(i,"memory"),applyFx(i,{felicidad:8+e*2}),addEvent(i,"\u{1F0CF}",`Jugaron a la memoria: ${n.pairs} parejas en ${n.moves} turnos.`),e===3&&addMilestone(i,"memory","\u{1F0CF}","\xA1Memoria perfecta!")},"casa")}function FM(n){let e=it,t=Ne.pet,i=1-Math.exp(-10*n);!e.over&&(Oe.a||Oe.jumpPress)&&xd(e.sel),e.over||lr(`<span>\u{1F0CF} ${"\u2B50".repeat(e.found)}${"\u2606".repeat(e.pairs-e.found)}</span>`);for(let a of e.cards){let o=a.open||a.done?Math.PI:0;a.rot+=(o-a.rot)*i,a.g.rotation.z=a.rot,a.g.position.y=1.06+Math.sin(a.rot)*.5}let s=e.cards[e.sel].g.position;e.cursor.position.set(s.x,1.02,s.z),e.cursor.visible=!e.over,Te.root.parent===Pi&&(Te.root.scale.setScalar(po[stageOf(t.day).size]),Te.root.position.set(R.x,0,R.z),Te.root.rotation.y=-Math.PI/2,R.modeT>0&&(R.modeT-=n),Fs(Te,n,{mode:t.asleep?"sleep":R.modeT>0?"happy":"sit",mood:"feliz"})),Ke.root.position.set(k.x,0,k.z),Ke.root.rotation.y=Math.PI/2,Hc(Ke,n,!1,0),Gc(Pi,!1);let r=ze.innerWidth<ze.innerHeight;gd(0,r?12:8,r?6.5:5.4,0,.9,.3,n)}var ho=new Oa;ho.connect(document);var zh=0,Bh=0,kh=15,Hh=0,Cm=!1;Ni.setAnimationLoop(()=>{ho.update();let n=Math.min(Math.max(ho.getDelta(),0),.1);Ne&&Im(n),Xp(n),Ni.render(Gt,Mt)});var Vp=new Set(["town","park","lake","forestmenu","spot"]);function Im(n){let e=Ne.pet;if(it){it.update(n),Music.setMode("play"),Oe.a=!1,Oe.jumpPress=!1;return}if(fe==="forest"){let p=n;for(;p>1e-4&&Vn&&!Vn.over;){let d=Math.min(p,.016666666666666666);Xv(d),p-=d}Music.setMode("play"),Oe.a=!1;return}if(zh+=n,Bh+=n,zh>5){zh=0;let p=e.day;simulate(e,now(e)),e.day!==p&&(Yp(e),fd(e)),ut(),Jp(e),fe==="home"&&(ws(),Nc(e)),fe==="room"&&!Wn&&om(),Zv()}Bh>15&&(Bh=0,saveRoot()),qp(Te,e);let t=stageOf(e.day);fe==="town"&&!e.asleep&&Te.root.parent!==ae&&(Ln(Te.root,ae),R.x=k.x-Math.sin(k.ry)*1.3,R.z=k.z-Math.cos(k.ry)*1.3,R.ry=k.ry,R.path=null,gi=[{x:R.x,z:R.z},{x:k.x,z:k.z}],st(ae,"\u{1F496}",new D(R.x,1.4,R.z),4),dogSound("happy",ht()),speak("\xA1Luna despert\xF3 y vino corriendo contigo!")),Te.root.scale.setScalar(po[t.size]);let i=Oe.right-Oe.left+Oe.jx,s=Oe.down-Oe.up+Oe.jz,r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a=Vp.has(fe),o=!1,l=!1,c=0,u=0,f=0,h=[2.4,3.2,4.2,4.8,5][t.size]*(e.stats.energia<15?.6:1),m=Math.max(3.4,h)*(e.stats.energia<15?.75:1)*(e.sick&&!e.sick.treated?.8:1);if(R.path){let p=R.path.x-R.x,d=R.path.z-R.z,g=Math.hypot(p,d);if(g<.08){R.ry=R.path.ry;let E=R.path.done;R.path=null,E&&E()}else{c=p/g,u=d/g,o=!0,f=h;let E=Math.min(h*n,g);R.x+=c*E,R.z+=u*E}}if(a){if(Math.hypot(i,s)>.15)Ot=null;else if(Ot&&fe==="town"&&!mt){let[p,d]=Ot.pts[0],g=p-k.x,E=d-k.z,M=Math.hypot(g,E);if(Ot.stuck=M<Ot.best-.05?0:Ot.stuck+n,Ot.best=Math.min(Ot.best,M),M<.35){if(Ot.pts.shift(),Ot.best=1/0,!Ot.pts.length){let v=gn.find(w=>w.id===Ot.place);Ot=null,v&&ld(v)}}else Ot.stuck>1.5?Ot=null:(i=g/M,s=E/M)}if(!mt&&Math.hypot(i,s)>.15){l=!0;let p=k.x+i*m*n,d=k.z+s*m*n;Dn(p,k.z,.35)||(k.x=p),Dn(k.x,d,.35)||(k.z=d);let g=Math.atan2(i,s)-k.ry;if(g=Math.atan2(Math.sin(g),Math.cos(g)),k.ry+=g*(1-Math.exp(-14*n)),bc+=m*n,bc>=1){let E=today(e),M=Math.floor(bc);bc-=M,si("walk"),e.day>=3&&(E.walkTiles+=M,E.walkTiles>=WALK_GOAL&&!E.walk&&(E.walk=1,e.bones+=2,addEvent(e,"\u{1F5FA}\uFE0F","\xA1Exploraci\xF3n del d\xEDa completada!"),nt("\u{1F5FA}\uFE0F","\u2B50"),speak("\xA1Paseo completado!"),ut()))}}if(!R.path&&!e.asleep&&!At){let p=Mv(n,m*1.15,t.size);p&&(o=!0,c=p.dx,u=p.dz,f=p.sp)}}else!R.path&&!e.asleep&&!mt&&Math.hypot(i,s)>.15&&(o=!0,c=i,u=s,f=h,R.x=clamp(R.x+i*h*n,-5.3,5.3),R.z=clamp(R.z+s*h*n,-2.4,3.6));if(o){let p=Math.atan2(c,u)-R.ry;p=Math.atan2(Math.sin(p),Math.cos(p)),R.ry+=p*(1-Math.exp(-14*n))}else if(a&&!e.asleep&&!At&&Math.hypot(k.x-R.x,k.z-R.z)>.5){let p=Math.atan2(k.x-R.x,k.z-R.z)-R.ry;p=Math.atan2(Math.sin(p),Math.cos(p)),R.ry+=p*(1-Math.exp(-4*n))}R.modeT>0&&(R.modeT-=n,R.mode==="spin"&&(R.ry+=n*9),R.modeT<=0&&["happy","sit","paw","lie","spin"].includes(R.mode)&&(R.mode="idle")),fe==="room"&&(od(ln[En],n),Fv(n));let x=e.asleep?"sleep":o?"walk":R.modeT>0||R.mode==="sleep"?R.mode:"idle";!e.asleep&&R.mode==="sleep"&&!mt&&R.modeT<=0&&(R.mode="idle"),Fs(Te,n,{mode:At?"lie":x,speed:o?f:0,eyesClosed:e.day<2,sad:["triste","enferma"].includes(moodOf(e)),mood:moodOf(e)}),Te.root.position.set(R.x,0,R.z),Te.root.rotation.y=R.ry,Ke.root.position.set(k.x,0,k.z),Ke.root.rotation.y=k.ry;let y=a&&e.day>=3&&!e.asleep&&!At&&!R.path&&Math.hypot(k.x-R.x,k.z-R.z)<3.5;Ke.leash=y,Hc(Ke,n,l,m),Gc(Gt,y),e.asleep&&Te.root.parent===Gt&&Math.random()<n*.8&&st(Gt,"\u{1F4A4}",new D(R.x,1.2,R.z),1,.5),Hh+=n,Hh>.5&&(Hh=0,qn(),mm()),Music.setMode(fe==="home"||fe==="room"?"home":Cm?"night":"day"),Vp.has(fe)?OM(n,e,o,l):zM(n),Oe.a=!1}function OM(n,e,t,i){let s=ho.getElapsed();cM(n,e,s);for(let l=ni.length-1;l>=0;l--){let c=ni[l];c.m.rotation.y+=n*2,c.m.position.y=.45+Math.sin(s*3+c.i)*.12,(Math.hypot(c.m.position.x-k.x,c.m.position.z-k.z)<.9||!At&&Te.root.parent===ae&&Math.hypot(c.m.position.x-R.x,c.m.position.z-R.z)<.9)&&(ae.remove(c.m),ni.splice(l,1),e.mapBones.taken.push(c.i),e.bones++,st(ae,"\u{1F9B4}",c.m.position,3,.5),_t("coin"),Math.random()<.5&&dogSound("yip",ht(),.6),ut(),si("bone"),ni.length||addMilestone(e,"allbones","\u{1F50D}","Luna encontr\xF3 todos los huesos escondidos de un d\xEDa."))}if(wt){wt.cd-=n;let l=wt.m.position.x-R.x,c=wt.m.position.z-R.z,u=Math.hypot(l,c),f=.35+.6*Te.root.scale.x;u<f&&t&&(wt.v.set(l/u,0,c/u).multiplyScalar(7),_t("pop"),wt.cd<=0&&(wt.cd=1,wt.pushes++,st(ae,"\u2B50",wt.m.position,2,.4),wt.pushes%6===0&&(applyFx(e,{felicidad:8,energia:-3}),today(e).play++,addEvent(e,"\u26BD","Jug\xF3 con la pelota en el parque."),nt("\u26BD","+\u{1F496}"),speak("\xA1Qu\xE9 divertido!"),ut())));let h=wt.m.position.clone().addScaledVector(wt.v,n);Dn(h.x,h.z,.35)?wt.v.multiplyScalar(-.6):wt.m.position.copy(h),wt.v.multiplyScalar(Math.exp(-1.6*n));let m=wt.v.length();wt.m.rotation.x+=wt.v.z*n/.35,wt.m.rotation.z-=wt.v.x*n/.35,m<.05&&wt.v.set(0,0,0)}if(kh-=n,kh<=0&&(kh=22+Math.random()*25,!e.asleep)){let l=moodOf(e),c=l==="triste"||l==="enferma";dogSound(c?"sad":"bark",ht(),.45),c||(R.mode="happy",R.modeT=.8)}for(let l of io){l.userData.a+=n*.3;let c=l.userData.a;l.position.set(l.userData.cx+Math.cos(c)*l.userData.r,.2+Math.sin(s*3+c)*.04,l.userData.cz+Math.sin(c)*l.userData.r),l.rotation.y=-c}for(let l of $p)l.position.x+=l.userData.v*n,l.position.x>50&&(l.position.x=-50);if(fe==="park"||fe==="lake"||fe==="forestmenu"||fe==="spot"){let l=fe==="park"?"parque":fe==="lake"?"lago":fe==="spot"?ti:"bosque",c=Ns.find(u=>u.pl.id===l);c&&Math.hypot(c.x-k.x,c.z-k.z)>(l==="perros"?11:7)&&!mt&&(fe==="park"?ir():fe==="spot"?ao():fe="town",ue("#actions").hidden=!0)}an=null;let r=needsOf(e);{let l=r.find(u=>u.level!=="info"),c=l&&!e.asleep&&!At&&Te.root.parent===ae&&Math.floor(s/2)%3!==0;Qi.visible=!!c,c&&(Qi.userData.icon!==l.icon&&(Qi.userData.icon=l.icon,Qi.material.map=Ds(l.icon,!0),Qi.material.needsUpdate=!0),Qi.position.set(R.x+.5,1.9*Te.root.scale.x+.6,R.z))}for(let l of Ns){let c=Math.hypot(l.x-k.x,l.z-k.z);c<2.2&&!At&&(an=l);let u="";if(e.day<(l.pl.minDay||1))u=c<9?"\u{1F512}":"";else{let f=r.find(h=>h.place===l.pl.id&&h.level!=="info");u=f?f.icon:""}u!==l.emoji&&(l.emoji=u,u&&(l.mk.material.map=Ds(u,!0)),l.mk.material.needsUpdate=!0),l.mk.visible=!!u,l.mk.position.y=l.baseY+Math.sin(s*3)*.15}if(Li=null,!an&&!At)if(Math.hypot(k.x-nn.chest[0],k.z-nn.chest[1])<1.8)Li={icon:"\u{1F5DD}\uFE0F\u{1F4E6}",label:"Cofre",run:wM};else{let l=dd(2.6);l&&(Li={icon:(l.def.mood==="grumpy"?"\u26A0\uFE0F ":l.def.owner&&!l.asked?"\u{1F64B} ":"\u{1F44B} ")+"\u{1F415}",label:l.def.name,warn:l.def.mood==="grumpy",run:()=>gM(l)})}Oe.a&&fe==="town"&&(e.asleep&&fm()?go("wake"):an?ld(an.pl):Li&&Li.run()),fe==="town"&&Sv(),nM(s),fv();let a=ze.innerWidth<ze.innerHeight?1.35:1,o=new D(k.x,9.5*a,k.z+11*a);Mt.position.lerp(o,1-Math.exp(-5*n)),Mt.lookAt(Mt.position.x,.6,Mt.position.z-11*a),Qa.sun.position.set(k.x+8,16,k.z+6),Qa.sun.target.position.set(k.x,0,k.z)}function zM(n){let e=ze.innerWidth<ze.innerHeight?1.5:1;Mt.position.lerp(new D(R.x*.3,6.5*e,8.5*e),1-Math.exp(-4*n)),Mt.lookAt(R.x*.3,.6,-.4)}var ji={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};ze.addEventListener("keydown",n=>{if(n.target.tagName!=="INPUT"){if(!ue("#card3").hidden&&["Space","Enter","Escape"].includes(n.code)){n.preventDefault(),ad();return}if(it&&!it.over&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),it.quit();return}if(At&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),zc(!1);return}if(it&&it.key&&ji[n.code]){n.preventDefault(),!n.repeat&&!it.over&&it.key(ji[n.code]);return}if(Wn&&ji[n.code]){n.preventDefault(),n.repeat||am(ji[n.code]);return}ji[n.code]&&(Oe[ji[n.code]]=1,n.preventDefault(),ji[n.code]==="up"&&!n.repeat&&(Oe.jumpPress=!0)),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(n.preventDefault(),n.repeat||(Oe.a=!0,Oe.jumpPress=!0),Oe.aHeld=!0),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="home"&&go("exit"),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="park"&&ir(),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="room"&&!Wn&&lm(En),["Escape","KeyX","Backspace"].includes(n.code)&&(fe==="lake"||fe==="forestmenu")&&(fe="town",ue("#actions").hidden=!0),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="spot"&&ao()}});ze.addEventListener("keyup",n=>{ji[n.code]&&(Oe[ji[n.code]]=0),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(Oe.aHeld=!1)});ze.addEventListener("blur",()=>{Oe.up=Oe.down=Oe.left=Oe.right=0});var fo=ue("#joy"),Pm=ue("#knob"),_d=null,jh=null;fo.addEventListener("pointerdown",n=>{_d=n.pointerId,jh={x:n.clientX,y:n.clientY},fo.setPointerCapture(n.pointerId)});fo.addEventListener("pointermove",n=>{if(n.pointerId!==_d)return;let e=n.clientX-jh.x,t=n.clientY-jh.y,i=Math.hypot(e,t),s=50;i>s&&(e*=s/i,t*=s/i),Pm.style.transform=`translate(${e}px, ${t}px)`,Oe.jx=e/s,Oe.jz=t/s});var Lm=()=>{_d=null,Oe.jx=Oe.jz=0,Pm.style.transform=""};fo.addEventListener("pointerup",Lm);fo.addEventListener("pointercancel",Lm);ue("#abtn").addEventListener("pointerdown",n=>{n.preventDefault(),Oe.a=!0,Oe.jumpPress=!0,Oe.aHeld=!0});ue("#abtn").addEventListener("pointerup",()=>{Oe.aHeld=!1});ue("#abtn").addEventListener("pointercancel",()=>{Oe.aHeld=!1});document.querySelectorAll("[data-arrow]").forEach(n=>n.addEventListener("pointerdown",e=>{e.preventDefault(),am(n.dataset.arrow)}));td.addEventListener("pointerdown",n=>{Jc=!0,it&&it.tap&&!it.over&&ue("#card3").hidden&&it.tap(n)});ze.addEventListener("pointerup",()=>{Jc=!1});ze.addEventListener("pointercancel",()=>{Jc=!1});var Jr=new za,Kr=new He;td.addEventListener("click",n=>{!Te||it||At||(Kr.set(n.clientX/ze.innerWidth*2-1,-(n.clientY/ze.innerHeight)*2+1),Jr.setFromCamera(Kr,Mt),Jr.intersectObject(Te.root,!0).length&&(fe==="home"?go("pet"):fe==="park"?(R.mode="happy",R.modeT=1.2,st(Gt,"\u{1F496}",new D(R.x,1.4,R.z),5),dogSound("happy",ht())):(R.mode="happy",R.modeT=1.2,st(Gt,"\u{1F496}",new D(R.x,1.4,R.z),5),dogSound("bark",ht()))))});document.addEventListener("click",n=>{let e=n.target.closest("button");if(!e)return;if(e.id==="mute"){Wr=!Wr;try{localStorage.setItem("luna.muted",Wr?"1":"0")}catch{}Wr&&"speechSynthesis"in ze&&speechSynthesis.cancel(),Music.refresh(),ut();return}if(e.id==="music"){Music.start(),Music.toggle(),ut();return}if(e.id==="guide"){gm(),pm();return}if(e.id==="guideSkip"){jv();return}if(e.dataset.act==="help"){tM();return}if(e.id==="diary3"){Yv();return}if(e.dataset.quiz!==void 0){vM(e.dataset.quiz==="1");return}if(e.dataset.card){ad();return}if(e.getAttribute("aria-disabled")==="true"){nt(e.querySelector(".badge")?.textContent||"\u270B"),speak(e.dataset.say);return}let t=e.dataset.act;if(t==="enter"){Oe.a=!0;return}if(t==="quitforest"){Vn&&(Vn.over=!0,ue("#forestHud").hidden=!0,hm());return}if(t==="quitgame"){it&&it.quit?it.quit():At&&zc(!1);return}if(e.dataset.avatar){document.querySelectorAll("[data-avatar]").forEach(i=>i.classList.toggle("sel",i===e));return}if(t&&["stroll","kick","bench","closepark","agility","hide"].includes(t)?Ev(t):t&&(t.startsWith("sp:")||t==="closespot")?_M(t):t&&fe==="room"?kv(t):t&&(fe==="lake"||["ducks","drink","splash","closelake","duckfeed"].includes(t))?Gv(t):t&&(t.startsWith("level:")||t==="closeforest")?Wv(t):t&&go(t),e.dataset.pick){let i=ze.root.profiles.find(s=>s.id===e.dataset.pick);e.disabled=!0,Cloud.refresh(i).finally(()=>Wc(i))}e.dataset.cloud&&Cloud.openAccount(ze.root.profiles.find(i=>i.id===e.dataset.cloud),Qh),e.dataset.cloudlogin!==void 0&&Cloud.openLogin(Qh),e.dataset.coat&&document.querySelectorAll("[data-coat]").forEach(i=>i.classList.toggle("sel",i===e))});ue("#new-form").addEventListener("submit",n=>{n.preventDefault();let e=ue("#new-name").value.trim().slice(0,16);if(!e){ue("#new-name").focus(),speak("Escribe tu nombre");return}let t=document.querySelector("[data-coat].sel")?.dataset.coat||"dorado",i=document.querySelector("[data-avatar].sel")?.dataset.avatar||"\u{1F9D2}",s={id:uid(),name:e,avatar:i,createdAt:Date.now(),pet:newPet(t)};ze.root.profiles.push(s),saveRoot(),Wc(s)});ze.addEventListener("pointerdown",()=>Music.start());ze.addEventListener("keydown",()=>Music.start());ze.addEventListener("pagehide",()=>{Ne&&saveRoot()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne&&saveRoot()});uv();vv();Av();Iv();Lv();Hv();Mm();ym();Em();Mt.position.set(-16,10,2);Mt.lookAt(-16,.6,-9);function Qh(){let n=ze.root.profiles;ue("#pick-list").innerHTML=n.map(e=>`<div class="slot-row"><button class="slot" data-pick="${e.id}">${ii(e.avatar)} ${ii(e.name)} <span>${qc[stageOf(dayAt(e.pet,now(e.pet))).id]} \u25B6</span></button><button class="slot-cloud${Cloud.linked(e)?" on":""}" data-cloud="${e.id}" aria-label="${Cloud.linked(e)?"En la nube":"Guardar en la nube"}: ${ii(e.name)}">\u2601\uFE0F</button></div>`).join(""),ue("#avatars3").innerHTML=ov.map((e,t)=>`<button type="button" class="avatar ${t===0?"sel":""}" data-avatar="${e}" aria-label="Tu cara ${t+1}">${e}</button>`).join(""),ue("#coats").innerHTML=Object.entries(COATS).map(([e,t],i)=>`<button type="button" class="coat ${i===0?"sel":""}" data-coat="${e}" style="background:${t.fur}" aria-label="${t.name}"></button>`).join(""),ue("#voice-slot").innerHTML=voiceSettingsHTML(),ue("#picker").hidden=!1,ue("#hud").hidden=!0,Te||(Te=kc({coat:"dorado",day:10,acc:{worn:"lazo"}}),ae.add(Te.root))}var Gh=ze.root.activeId&&ze.root.profiles.find(n=>n.id===ze.root.activeId);Gh?Cloud.refresh(Gh).finally(()=>Wc(Gh)):Qh();(function n(){Ne||(Te&&(Te.root.position.set(-16,0,-9),Fs(Te,1/60,{mode:"happy"}),Mt.position.set(-16,3,-3.5),Mt.lookAt(-16,1,-9)),requestAnimationFrame(n))})();Object.assign(ze,{renderer:Ni,town:ae,home:St,luna:R,kidS:k,act:go,startGame:Wc,input:Oe,dbg3:{buildAgility3:Tm,buildDucks3:wm,buildMemory3:Rm,startHide3:_m,memFlip3:xd,closeCard3:ad,digTreasure3:xm,get mini(){return it},get hide3(){return At},get treasure3(){return Pn},get where(){return fe},guideGo3:pm,idleNudge3:mm,treeList:id,get autoWalk(){return Ot},get goal3(){return tt},setIdle:n=>{Zc=n}},step3d:(n,e)=>{Im(n),Xp(n),e&&Ni.render(Gt,Mt)}});})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
