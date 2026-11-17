/* Luna 3D: incluye three.js r187 (MIT, (c) three.js authors). Fuente: 3d/src/main3d.js */
(()=>{var mc="187";var qd=0,yh=1,$d=2;var Bs=1,Yd=2,Rr=3,gs=0,Sn=1,Rn=2,ks=0,Cr=1,vh=2,Mh=3,Sh=4,Zd=5;var Hs=100,Jd=101,Kd=102,jd=103,Qd=104,ef=200,tf=201,nf=202,sf=203,bh=204,Eh=205,rf=206,af=207,of=208,cf=209,lf=210,hf=211,uf=212,df=213,ff=214,Fo=0,Oo=1,zo=2,vr=3,Bo=4,ko=5,Ho=6,Go=7,Th=0,pf=1,mf=2,bi=0,wh=1,Ah=2,Rh=3,Ch=4,Ih=5,Ph=6,Lh=7;var Dh=300,Gs=301,Ir=302,gc=303,xc=304,Vo=1e3,yi=1001,Wo=1002,Ht=1003,gf=1004;var Ca=1005;var vn=1006,_c=1007;var Gi=1008;var Cn=1009,Nh=1010,Uh=1011,Pr=1012,yc=1013,oi=1014,jn=1015,ci=1016,vc=1017,Mc=1018,Vs=1020,Fh=35902,Oh=35899,zh=1021,Bh=1022,kn=1023,Bi=1026,Vi=1027,Sc=1028,bc=1029,xs=1030,Ec=1031;var Tc=1033,Ia=33776,Pa=33777,La=33778,Da=33779,wc=35840,Ac=35841,Rc=35842,Cc=35843,Ic=36196,Pc=37492,Lc=37496,Dc=37488,Nc=37489,Na=37490,Uc=37491,Fc=37808,Oc=37809,zc=37810,Bc=37811,kc=37812,Hc=37813,Gc=37814,Vc=37815,Wc=37816,Xc=37817,qc=37818,$c=37819,Yc=37820,Zc=37821,Jc=36492,Kc=36494,jc=36495,Qc=36283,el=36284,Ua=36285,tl=36286;var na=2300,Xo=2301,No=2302,uh=2303,dh=2400,fh=2401,ph=2402;var xf=3200;var nl=0,_f=1,Wi="",_n="srgb",ia="srgb-linear",sa="linear",_t="srgb";var Uo=7680;var yf=519,vf=512,Mf=513,Sf=514,kh=515,bf=516,Ef=517,Hh=518,Gh=519,Vh=35044;var Wh="300 es",Jn=2e3,Mr=2001;function vm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tf(){let n=ra("canvas");return n.style.display="block",n}var gd={},Sr=null;function aa(...n){let e="THREE."+n.shift();Sr?Sr("log",e,...n):console.log(e,...n)}function wf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=wf(n);let e="THREE."+n.shift();if(Sr)Sr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ve(...n){n=wf(n);let e="THREE."+n.shift();if(Sr)Sr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ta(...n){let e=n.join(" ");e in gd||(gd[e]=!0,We(...n))}function Af(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Rf={[Fo]:Fo,[zo]:Ho,[Bo]:Bo,[vr]:ko,[Oo]:Oo,[Ho]:zo,[Go]:Go,[ko]:vr},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gl=Math.PI/180,qo=180/Math.PI;function Ws(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function Sm(n,e){return(n%e+e)%e}function Vl(n,e,t){return(1-t)*n+t*e}function Cf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function il(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function If(n,e){if(e.constructor===Float32Array)return n;let t=il(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Pf(n,e){if(e.constructor===Float32Array)return n;let t=il(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Zh=class Zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zh.prototype.isVector2=!0;var He=Zh,Un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||c!==u||l!==m||h!==x){let p=c*u+l*m+h*x+d*y;p<0&&(u=-u,m=-m,x=-x,y=-y,p=-p);let f=1-o;if(p<.9995){let g=Math.acos(p),E=Math.sin(g);f=Math.sin(f*g)/E,o=Math.sin(o*g)/E,c=c*f+u*o,l=l*f+m*o,h=h*f+x*o,d=d*f+y*o}else{c=c*f+u*o,l=l*f+m*o,h=h*f+x*o,d=d*f+y*o;let g=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=g,l*=g,h*=g,d*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*d+c*m-l*u,e[t+1]=c*x+h*u+l*d-o*m,e[t+2]=l*x+h*m+o*u-c*d,e[t+3]=h*x-o*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*m*x,this._y=l*m*d-u*h*x,this._z=l*h*x+u*m*d,this._w=l*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+l*m*x,this._y=l*m*d-u*h*x,this._z=l*h*x-u*m*d,this._w=l*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-l*m*x,this._y=l*m*d+u*h*x,this._z=l*h*x+u*m*d,this._w=l*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-l*m*x,this._y=l*m*d+u*h*x,this._z=l*h*x-u*m*d,this._w=l*h*d+u*m*x;break;case"YZX":this._x=u*h*d+l*m*x,this._y=l*m*d+u*h*x,this._z=l*h*x-u*m*d,this._w=l*h*d-u*m*x;break;case"XZY":this._x=u*h*d-l*m*x,this._y=l*m*d-u*h*x,this._z=l*h*x+u*m*d,this._w=l*h*d+u*m*x;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jh=class Jh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jh.prototype.isVector3=!0;var D=Jh,Wl=new D,xd=new Un,Kh=class Kh{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],m=i[5],x=i[8],y=s[0],p=s[3],f=s[6],g=s[1],E=s[4],M=s[7],v=s[2],w=s[5],_=s[8];return r[0]=a*y+o*g+c*v,r[3]=a*p+o*E+c*w,r[6]=a*f+o*M+c*_,r[1]=l*y+h*g+d*v,r[4]=l*p+h*E+d*w,r[7]=l*f+h*M+d*_,r[2]=u*y+m*g+x*v,r[5]=u*p+m*E+x*w,r[8]=u*f+m*M+x*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,m=l*r-a*c,x=t*d+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=d*y,e[1]=(s*l-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kh.prototype.isMatrix3=!0;var qe=Kh,Xl=new qe,_d=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bm(){let n={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ia]:{primaries:e,whitePoint:i,transfer:sa,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:_d,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}var ot=bm();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var tr,$o=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{tr===void 0&&(tr=ra("canvas")),tr.width=e.width,tr.height=e.height;let s=tr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=tr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$o.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var Tm=0,$l=new D,Mn=class n extends vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yi,s=yi,r=vn,a=Gi,o=kn,c=Cn,l=n.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ws(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Dh;Mn.DEFAULT_ANISOTROPY=1;var jh=class jh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],x=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(m+1)/2,v=(f+1)/2,w=(h+u)/4,_=(d+y)/4,T=(x+p)/4;return E>M&&E>v?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=_/i):M>v?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=T/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=_/r,s=T/r),this.set(i,s,r,t),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(u-h)/g,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jh.prototype.isVector4=!0;var Lt=jh,Yo=class extends vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Mn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Yo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oa=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pc=class pc{constructor(e,t,i,s,r,a,o,c,l,h,d,u,m,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,d,u,m,x,y,p)}set(e,t,i,s,r,a,o,c,l,h,d,u,m,x,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=x,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,x=o*h,y=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+x*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,m=c*d,x=l*h,y=l*d;t[0]=u+y*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,m=c*d,x=l*h,y=l*d;t[0]=u-y*o,t[4]=-a*d,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,m=a*d,x=o*h,y=o*d;t[0]=c*h,t[4]=x*l-m,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*h,t[4]=y-u*d,t[8]=x*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+x,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=a*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wm,e,Am)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Qi.crossVectors(i,Dn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Qi.crossVectors(i,Dn)),Qi.normalize(),lo.crossVectors(Dn,Qi),s[0]=Qi.x,s[4]=lo.x,s[8]=Dn.x,s[1]=Qi.y,s[5]=lo.y,s[9]=Dn.y,s[2]=Qi.z,s[6]=lo.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],m=i[13],x=i[2],y=i[6],p=i[10],f=i[14],g=i[3],E=i[7],M=i[11],v=i[15],w=s[0],_=s[4],T=s[8],F=s[12],I=s[1],O=s[5],B=s[9],X=s[13],N=s[2],$=s[6],J=s[10],q=s[14],oe=s[3],Z=s[7],ie=s[11],se=s[15];return r[0]=a*w+o*I+c*N+l*oe,r[4]=a*_+o*O+c*$+l*Z,r[8]=a*T+o*B+c*J+l*ie,r[12]=a*F+o*X+c*q+l*se,r[1]=h*w+d*I+u*N+m*oe,r[5]=h*_+d*O+u*$+m*Z,r[9]=h*T+d*B+u*J+m*ie,r[13]=h*F+d*X+u*q+m*se,r[2]=x*w+y*I+p*N+f*oe,r[6]=x*_+y*O+p*$+f*Z,r[10]=x*T+y*B+p*J+f*ie,r[14]=x*F+y*X+p*q+f*se,r[3]=g*w+E*I+M*N+v*oe,r[7]=g*_+E*O+M*$+v*Z,r[11]=g*T+E*B+M*J+v*ie,r[15]=g*F+E*X+M*q+v*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],x=e[3],y=e[7],p=e[11],f=e[15],g=c*m-l*u,E=o*m-l*d,M=o*u-c*d,v=a*m-l*h,w=a*u-c*h,_=a*d-o*h;return t*(y*g-p*E+f*M)-i*(x*g-p*v+f*w)+s*(x*E-y*v+f*_)-r*(x*M-y*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],x=e[12],y=e[13],p=e[14],f=e[15],g=t*o-i*a,E=t*c-s*a,M=t*l-r*a,v=i*c-s*o,w=i*l-r*o,_=s*l-r*c,T=h*y-d*x,F=h*p-u*x,I=h*f-m*x,O=d*p-u*y,B=d*f-m*y,X=u*f-m*p,N=g*X-E*B+M*O+v*I-w*F+_*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/N;return e[0]=(o*X-c*B+l*O)*$,e[1]=(s*B-i*X-r*O)*$,e[2]=(y*_-p*w+f*v)*$,e[3]=(u*w-d*_-m*v)*$,e[4]=(c*I-a*X-l*F)*$,e[5]=(t*X-s*I+r*F)*$,e[6]=(p*M-x*_-f*E)*$,e[7]=(h*_-u*M+m*E)*$,e[8]=(a*B-o*I+l*T)*$,e[9]=(i*I-t*B-r*T)*$,e[10]=(x*w-y*M+f*g)*$,e[11]=(d*M-h*w-m*g)*$,e[12]=(o*F-a*O-c*T)*$,e[13]=(t*O-i*F+s*T)*$,e[14]=(y*E-x*v-p*g)*$,e[15]=(h*v-d*E+u*g)*$,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,m=r*h,x=r*d,y=a*h,p=a*d,f=o*d,g=c*l,E=c*h,M=c*d,v=i.x,w=i.y,_=i.z;return s[0]=(1-(y+f))*v,s[1]=(m+M)*v,s[2]=(x-E)*v,s[3]=0,s[4]=(m-M)*w,s[5]=(1-(u+f))*w,s[6]=(p+g)*w,s[7]=0,s[8]=(x+E)*_,s[9]=(p-g)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=nr.set(s[0],s[1],s[2]).length(),o=nr.set(s[4],s[5],s[6]).length(),c=nr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ii.copy(this);let l=1/a,h=1/o,d=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Jn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),m=(i+s)/(i-s),x,y;if(c)x=r/(a-r),y=a*r/(a-r);else if(o===Jn)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Mr)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Jn,c=!1){let l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),m=-(i+s)/(i-s),x,y;if(c)x=1/(a-r),y=a/(a-r);else if(o===Jn)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Mr)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};pc.prototype.isMatrix4=!0;var ut=pc,nr=new D,ii=new ut,wm=new D(0,0,0),Am=new D(1,1,1),Qi=new D,lo=new D,Dn=new D,vd=new ut,Md=new Un,ss=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rm=0,Sd=new D,ir=new Un,Li=new ut,ho=new D,qr=new D,Cm=new D,Im=new Un,bd=new D(1,0,0),Ed=new D(0,1,0),Td=new D(0,0,1),wd={type:"added"},Pm={type:"removed"},sr={type:"childadded",child:null},Yl={type:"childremoved",child:null},Xt=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ss,i=new Un,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new qe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(Td,e)}translateOnAxis(e,t){return Sd.copy(e).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(Td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ho.copy(e):ho.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(qr,ho,this.up):Li.lookAt(ho,qr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Li),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),sr.child=e,this.dispatchEvent(sr),sr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pm),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new D(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lm={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;l.inputState.pinching&&u>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new we;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Sm(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Zl(a,r,e+1/3),this.g=Zl(a,r,e),this.b=Zl(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let i=Lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ot.workingToColorSpace(hn.copy(this),e),Math.round(ct(hn.r*255,0,255))*65536+Math.round(ct(hn.g*255,0,255))*256+Math.round(ct(hn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=_n){ot.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(uo);let i=Vl(es.h,uo.h,t),s=Vl(es.s,uo.s,t),r=Vl(es.l,uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Xe;Xe.NAMES=Lf;var rs=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},On=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new D,Di=new D,Jl=new D,Ni=new D,rr=new D,ar=new D,Ad=new D,Kl=new D,jl=new D,Ql=new D,eh=new Lt,th=new Lt,nh=new Lt,Oi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){si.subVectors(s,t),Di.subVectors(i,t),Jl.subVectors(e,t);let a=si.dot(si),o=si.dot(Di),c=si.dot(Jl),l=Di.dot(Di),h=Di.dot(Jl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(a,Ni.y),c.addScaledVector(o,Ni.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return eh.setScalar(0),th.setScalar(0),nh.setScalar(0),eh.fromBufferAttribute(e,t),th.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(eh,r.x),a.addScaledVector(th,r.y),a.addScaledVector(nh,r.z),a}static isFrontFacing(e,t,i,s){return si.subVectors(i,t),Di.subVectors(e,t),si.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;rr.subVectors(s,i),ar.subVectors(r,i),Kl.subVectors(e,i);let c=rr.dot(Kl),l=ar.dot(Kl);if(c<=0&&l<=0)return t.copy(i);jl.subVectors(e,s);let h=rr.dot(jl),d=ar.dot(jl);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(rr,a);Ql.subVectors(e,r);let m=rr.dot(Ql),x=ar.dot(Ql);if(x>=0&&m<=x)return t.copy(r);let y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(ar,o);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return Ad.subVectors(r,s),o=(d-h)/(d-h+(m-x)),t.copy(s).addScaledVector(Ad,o);let f=1/(p+y+u);return a=y*f,o=u*f,t.copy(i).addScaledVector(rr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),po.subVectors(this.max,$r),or.subVectors(e.a,$r),cr.subVectors(e.b,$r),lr.subVectors(e.c,$r),ts.subVectors(cr,or),ns.subVectors(lr,cr),Ls.subVectors(or,lr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ls.z,Ls.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ls.z,0,-Ls.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ls.y,Ls.x,0];return!ih(t,or,cr,lr,po)||(t=[1,0,0,0,1,0,0,0,1],!ih(t,or,cr,lr,po))?!1:(mo.crossVectors(ts,ns),t=[mo.x,mo.y,mo.z],ih(t,or,cr,lr,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new D,new D,new D,new D,new D,new D,new D,new D],ri=new D,fo=new Mi,or=new D,cr=new D,lr=new D,ts=new D,ns=new D,Ls=new D,$r=new D,po=new D,mo=new D,Ds=new D;function ih(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),c=e.dot(Ds),l=t.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var kt=new D,go=new He,Dm=0,Kn=class extends vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vh,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?il(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):If(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pf(e,this.array)}};var ca=class extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var la=class extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Nm=new Mi,Yr=new D,sh=new D,as=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(sh)),this.expandByPoint(Yr.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Um=0,Zn=new ut,rh=new Xt,hr=new D,Nn=new Mi,Zr=new Mi,Qt=new D,un=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?la:ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Nn.min,Zr.min),Nn.expandByPoint(Qt),Qt.addVectors(Nn.max,Zr.max),Nn.expandByPoint(Qt)):(Nn.expandByPoint(Zr.min),Nn.expandByPoint(Zr.max))}Nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qt.fromBufferAttribute(o,l),c&&(hr.fromBufferAttribute(e,l),Qt.add(hr)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Kn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let F=0;F<i.count;F++)o[F]=new D,c[F]=new D;let h=new D,d=new D,u=new D,m=new He,x=new He,y=new He,p=new D,f=new D;function g(F,I,O){l[F]=l[I]=l[O]=1,h.fromBufferAttribute(i,F),d.fromBufferAttribute(i,I),u.fromBufferAttribute(i,O),m.fromBufferAttribute(r,F),x.fromBufferAttribute(r,I),y.fromBufferAttribute(r,O),d.sub(h),u.sub(h),x.sub(m),y.sub(m);let B=1/(x.x*y.y-y.x*x.y);isFinite(B)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(B),f.copy(u).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(B),o[F].add(p),o[I].add(p),o[O].add(p),c[F].add(f),c[I].add(f),c[O].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,I=E.length;F<I;++F){let O=E[F],B=O.start,X=O.count;for(let N=B,$=B+X;N<$;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new D,v=new D,w=new D,_=new D;function T(F){w.fromBufferAttribute(s,F),_.copy(w);let I=o[F];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),v.crossVectors(_,I);let B=v.dot(c[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,B)}for(let F=0,I=i.count;F<I;++F)l[F]&&T(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),m=0,x=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let f=0;f<h;f++)u[x++]=l[m++]}return new Kn(u,h,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],m=e(u,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vh,this.updateRanges=[],this.version=0,this.uuid=Ws()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Rd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Rd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ws()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var xn=new D,ha=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?il(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):If(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pf(e,this.data.array)}},ah=new D,Fm=new D,Om=new qe,ai=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ah.subVectors(i,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ah),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Om.getNormalMatrix(e),s=this.coplanarPoint(ah).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zm=0,ki=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Cr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Eh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wr=class extends ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,Jr=new D,dr=new D,fr=new D,pr=new He,Kr=new He,Df=new ut,xo=new D,jr=new D,_o=new D,Cd=new He,oh=new He,Id=new He,ua=class extends Xt{constructor(e=new wr){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new un;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jo(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new ha(i,3,0,!1)),ur.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=ur,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;yo(xo.set(-.5,-.5,0),fr,a,dr,s,r),yo(jr.set(.5,-.5,0),fr,a,dr,s,r),yo(_o.set(.5,.5,0),fr,a,dr,s,r),Cd.set(0,0),oh.set(1,0),Id.set(1,1);let o=e.ray.intersectTriangle(xo,jr,_o,!1,Jr);if(o===null&&(yo(jr.set(-.5,.5,0),fr,a,dr,s,r),oh.set(0,1),o=e.ray.intersectTriangle(xo,_o,jr,!1,Jr),o===null))return;let c=e.ray.origin.distanceTo(Jr);c<e.near||c>e.far||t.push({distance:c,point:Jr.clone(),uv:Oi.getInterpolation(Jr,xo,jr,_o,Cd,oh,Id,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function yo(n,e,t,i,s,r){pr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Kr.x=r*pr.x-s*pr.y,Kr.y=s*pr.x+r*pr.y):Kr.copy(pr),n.copy(e),n.x+=Kr.x,n.y+=Kr.y,n.applyMatrix4(Df)}var Fi=new D,ch=new D,vo=new D,Mo=new D,da=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ch.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),Mo.copy(this.origin).sub(ch);let r=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=Mo.dot(this.direction),c=-Mo.dot(vo),l=Mo.lengthSq(),h=Math.abs(1-a*a),d,u,m,x;if(h>0)if(d=a*c-o,u=a*o-c,x=r*h,d>=0)if(u>=-x)if(u<=x){let y=1/h;d*=y,u*=y,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ch).addScaledVector(vo,u),m}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,p=t.z-a.z,f=i.x-a.x,g=i.y-a.y,E=i.z-a.z,M=Math.abs(c),v=Math.abs(l),w=Math.abs(h),_,T,F,I,O,B,X,N,$,J,q,oe;if(M>=v&&M>=w?(F=c,B=d,$=x,oe=f,c>=0?(_=l,T=h,I=u,O=m,X=y,N=p,J=g,q=E):(_=h,T=l,I=m,O=u,X=p,N=y,J=E,q=g)):v>=w?(F=l,B=u,$=y,oe=g,l>=0?(_=h,T=c,I=m,O=d,X=p,N=x,J=E,q=f):(_=c,T=h,I=d,O=m,X=x,N=p,J=f,q=E)):(F=h,B=m,$=p,oe=E,h>=0?(_=c,T=l,I=d,O=u,X=x,N=y,J=f,q=g):(_=l,T=c,I=u,O=d,X=y,N=x,J=g,q=f)),F===0)return null;let Z=_/F,ie=T/F,se=1/F,Pe=I-Z*B,Ye=O-ie*B,ee=X-Z*$,Se=N-ie*$,Re=J-Z*oe,Be=q-ie*oe,be=Re*Se-Be*ee,Je=Pe*Be-Ye*Re,zt=ee*Ye-Se*Pe;if(s){if(be<0||Je<0||zt<0)return null}else if((be<0||Je<0||zt<0)&&(be>0||Je>0||zt>0))return null;let Ge=be+Je+zt;if(Ge===0)return null;let yt=se*(be*B+Je*$+zt*oe);return(Ge>0?yt<0:yt>0)?null:this.at(yt/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pd=new ut,Ns=new da,So=new as,Ld=new D,bo=new D,Eo=new D,To=new D,lh=new D,wo=new D,Dd=new D,Ao=new D,St=class extends Xt{constructor(e=new un,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(lh.fromBufferAttribute(d,e),a?wo.addScaledVector(lh,h):wo.addScaledVector(lh.sub(t),h))}t.add(wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(So.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(So,Ld)===null||Ns.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Pd.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Pd),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let p=u[x],f=a[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,v=E;M<v;M+=3){let w=o.getX(M),_=o.getX(M+1),T=o.getX(M+2);s=Ro(this,f,e,i,l,h,d,w,_,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){let g=o.getX(p),E=o.getX(p+1),M=o.getX(p+2);s=Ro(this,a,e,i,l,h,d,g,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let p=u[x],f=a[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,v=E;M<v;M+=3){let w=M,_=M+1,T=M+2;s=Ro(this,f,e,i,l,h,d,w,_,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){let g=p,E=p+1,M=p+2;s=Ro(this,a,e,i,l,h,d,g,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Bm(n,e,t,i,s,r,a,o){let c;if(e.side===Sn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===gs,o),c===null)return null;Ao.copy(o),Ao.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ao);return l<t.near||l>t.far?null:{distance:l,point:Ao.clone(),object:n}}function Ro(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,bo),n.getVertexPosition(c,Eo),n.getVertexPosition(l,To);let h=Bm(n,e,t,i,bo,Eo,To,Dd);if(h){let d=new D;Oi.getBarycoord(Dd,bo,Eo,To,d),s&&(h.uv=Oi.getInterpolatedAttribute(s,o,c,l,d,new He)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,o,c,l,d,new He)),a&&(h.normal=Oi.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};Oi.getNormal(bo,Eo,To,u.normal),h.face=u,h.barycoord=d}return h}var Fs=class extends Mn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ht,h=Ht,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends Kn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new ut,Nd=new ut,Co=[],Ud=new Mi,km=new ut,Qr=new St,ea=new as,os=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,km)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),Ud.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),ea.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),Nd.multiplyMatrices(i,mr),Qr.matrixWorld=Nd,Qr.raycast(e,Co);for(let a=0,o=Co.length;a<o;a++){let c=Co[a];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fs(new Float32Array(s*this.count),s,this.count,Sc,jn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Us=new as,Hm=new He(.5,.5),Io=new D,cs=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],m=r[7],x=r[8],y=r[9],p=r[10],f=r[11],g=r[12],E=r[13],M=r[14],v=r[15];if(s[0].setComponents(l-a,m-h,f-x,v-g).normalize(),s[1].setComponents(l+a,m+h,f+x,v+g).normalize(),s[2].setComponents(l+o,m+d,f+y,v+E).normalize(),s[3].setComponents(l-o,m-d,f-y,v-E).normalize(),i)s[4].setComponents(c,u,p,M).normalize(),s[5].setComponents(l-c,m-u,f-p,v-M).normalize();else if(s[4].setComponents(l-c,m-u,f-p,v-M).normalize(),t===Jn)s[5].setComponents(l+c,m+u,f+p,v+M).normalize();else if(t===Mr)s[5].setComponents(c,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=Hm.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fd=new ut,Ko=class n{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new cs),i[s].setFromProjectionMatrix(Fd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new cs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var pa=class extends Mn{constructor(e=[],t=Gs,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ma=class extends Mn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends Mn{constructor(e,t,i=oi,s,r,a,o=Ht,c=Ht,l,h=Bi,d=1){if(h!==Bi&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ga=class extends Hi{constructor(e,t=oi,i=Gs,s,r,a=Ht,o=Ht,c,l=Bi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xa=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ls=class n extends un{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function x(y,p,f,g,E,M,v,w,_,T,F){let I=M/_,O=v/T,B=M/2,X=v/2,N=w/2,$=_+1,J=T+1,q=0,oe=0,Z=new D;for(let ie=0;ie<J;ie++){let se=ie*O-X;for(let Pe=0;Pe<$;Pe++){let Ye=Pe*I-B;Z[y]=Ye*g,Z[p]=se*E,Z[f]=N,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[f]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Pe/_),d.push(1-ie/T),q+=1}}for(let ie=0;ie<T;ie++)for(let se=0;se<_;se++){let Pe=u+se+$*ie,Ye=u+se+$*(ie+1),ee=u+(se+1)+$*(ie+1),Se=u+(se+1)+$*ie;c.push(Pe,Ye,Se),c.push(Ye,ee,Se),oe+=6}o.addGroup(m,oe,F),m+=oe,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},_a=class n extends un{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,u=t,m=2*d+u,x=i*2+r,y=s+1,p=new D,f=new D;for(let g=0;g<=x;g++){let E=0,M=0,v=0,w=0;if(g<=i){let F=g/i,I=F*Math.PI/2;M=-h-e*Math.cos(I),v=e*Math.sin(I),w=-e*Math.cos(I),E=F*d}else if(g<=i+r){let F=(g-i)/r;M=-h+F*t,v=e,w=0,E=d+F*u}else{let F=(g-i-r)/i,I=F*Math.PI/2;M=h+e*Math.sin(I),v=e*Math.cos(I),w=e*Math.sin(I),E=d+u+F*d}let _=Math.max(0,Math.min(1,E/m)),T=0;g===0?T=.5/s:g===x&&(T=-.5/s);for(let F=0;F<=s;F++){let I=F/s,O=I*Math.PI*2,B=Math.sin(O),X=Math.cos(O);f.x=-v*X,f.y=M,f.z=v*B,o.push(f.x,f.y,f.z),p.set(-v*X,w,v*B),p.normalize(),c.push(p.x,p.y,p.z),l.push(I+T,_)}if(g>0){let F=(g-1)*y;for(let I=0;I<s;I++){let O=F+I,B=F+I+1,X=g*y+I,N=g*y+I+1;a.push(O,B,X),a.push(B,N,X)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},hs=class n extends un{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new D,h=new He;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let m=i+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Os=class n extends un{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],x=0,y=[],p=i/2,f=0;g(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(m,2));function g(){let M=new D,v=new D,w=0,_=(t-e)/i;for(let T=0;T<=r;T++){let F=[],I=T/r,O=I*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,N=X*c+o,$=Math.sin(N),J=Math.cos(N);v.x=O*$,v.y=-I*i+p,v.z=O*J,d.push(v.x,v.y,v.z),M.set($,_,J).normalize(),u.push(M.x,M.y,M.z),m.push(X,1-I),F.push(x++)}y.push(F)}for(let T=0;T<s;T++)for(let F=0;F<r;F++){let I=y[F][T],O=y[F+1][T],B=y[F+1][T+1],X=y[F][T+1];(e>0||F!==0)&&(h.push(I,O,X),w+=3),(t>0||F!==r-1)&&(h.push(O,B,X),w+=3)}l.addGroup(f,w,0),f+=w}function E(M){let v=x,w=new He,_=new D,T=0,F=M===!0?e:t,I=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*I,0),u.push(0,I,0),m.push(.5,.5),x++;let O=x;for(let B=0;B<=s;B++){let N=B/s*c+o,$=Math.cos(N),J=Math.sin(N);_.x=F*J,_.y=p*I,_.z=F*$,d.push(_.x,_.y,_.z),u.push(0,I,0),w.x=$*.5+.5,w.y=J*.5*I+.5,m.push(w.x,w.y),x++}for(let B=0;B<s;B++){let X=v+B,N=O+B;M===!0?h.push(N,N+1,X):h.push(N+1,N,X),T+=3}l.addGroup(f,T,M===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class n extends Os{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class n extends un{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let E=new D,M=new D,v=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],E),m(t[w+1],M),m(t[w+2],v),c(E,M,v,g)}function c(g,E,M,v){let w=v+1,_=[];for(let T=0;T<=w;T++){_[T]=[];let F=g.clone().lerp(M,T/w),I=E.clone().lerp(M,T/w),O=w-T;for(let B=0;B<=O;B++)B===0&&T===w?_[T][B]=F:_[T][B]=F.clone().lerp(I,B/O)}for(let T=0;T<w;T++)for(let F=0;F<2*(w-T)-1;F++){let I=Math.floor(F/2);F%2===0?(u(_[T][I+1]),u(_[T+1][I]),u(_[T][I])):(u(_[T][I+1]),u(_[T+1][I+1]),u(_[T+1][I]))}}function l(g){let E=new D;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(g),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let g=new D;for(let E=0;E<r.length;E+=3){g.x=r[E+0],g.y=r[E+1],g.z=r[E+2];let M=p(g)/2/Math.PI+.5,v=f(g)/Math.PI+.5;a.push(M,1-v)}x(),d()}function d(){for(let g=0;g<a.length;g+=6){let E=a[g+0],M=a[g+2],v=a[g+4],w=Math.max(E,M,v),_=Math.min(E,M,v);w>.9&&_<.1&&(E<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),v<.2&&(a[g+4]+=1))}}function u(g){r.push(g.x,g.y,g.z)}function m(g,E){let M=g*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function x(){let g=new D,E=new D,M=new D,v=new D,w=new He,_=new He,T=new He;for(let F=0,I=0;F<r.length;F+=9,I+=6){g.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),w.set(a[I+0],a[I+1]),_.set(a[I+2],a[I+3]),T.set(a[I+4],a[I+5]),v.copy(g).add(E).add(M).divideScalar(3);let O=p(v);y(w,I+0,g,O),y(_,I+2,E,O),y(T,I+4,M,O)}}function y(g,E,M,v){v<0&&g.x===1&&(a[E]=g.x-1),M.x===0&&M.z===0&&(a[E]=v/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},zs=class n extends jo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var zn=class n extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,m=[],x=[],y=[],p=[];for(let f=0;f<h;f++){let g=f*u-a;for(let E=0;E<l;E++){let M=E*d-r;x.push(M,-g,0),y.push(0,0,1),p.push(E/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let g=0;g<o;g++){let E=g+l*f,M=g+l*(f+1),v=g+1+l*(f+1),w=g+1+l*f;m.push(E,M,w),m.push(M,v,w)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},va=class n extends un{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/s,m=new D,x=new He;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let f=r+p/i*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let y=0;y<s;y++){let p=y*(i+1);for(let f=0;f<i;f++){let g=f+p,E=g,M=g+i+1,v=g+i+2,w=g+1;o.push(E,M,w),o.push(M,v,w)}}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var us=class n extends un{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new D,u=new D,m=[],x=[],y=[],p=[];for(let f=0;f<=i;f++){let g=[],E=f/i,M=a+E*o,v=e*Math.cos(M),w=Math.sqrt(e*e-v*v),_=0;f===0&&a===0?_=.5/t:f===i&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let F=T/t,I=s+F*r;d.x=-w*Math.cos(I),d.y=v,d.z=w*Math.sin(I),x.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(F+_,1-E),g.push(l++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){let E=h[f][g+1],M=h[f][g],v=h[f+1][g],w=h[f+1][g+1];(f!==0||a>0)&&m.push(E,M,w),(f!==i-1||c<Math.PI)&&m.push(M,v,w)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var dn=class n extends un{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new D,m=new D,x=new D;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let f=0;f<=s;f++){let g=f/s*r;m.x=(e+t*Math.cos(p))*Math.cos(g),m.y=(e+t*Math.cos(p))*Math.sin(g),m.z=t*Math.sin(p),l.push(m.x,m.y,m.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),x.subVectors(m,u).normalize(),h.push(x.x,x.y,x.z),d.push(f/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let f=(s+1)*y+p-1,g=(s+1)*(y-1)+p-1,E=(s+1)*(y-1)+p,M=(s+1)*y+p;c.push(f,g,M),c.push(g,E,M)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Od(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Od(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Xs(n[t]);for(let s in i)e[s]=i[s]}return e}function Od(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Gm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Nf={clone:Xs,merge:fn},Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qo=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ds=class extends ki{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ec=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Po(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var fs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},nc=class extends fs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:r=e,o=2*t-i;break;case ph:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fh:a=e,c=2*i-t;break;case ph:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),y=x*x,p=y*x,f=-u*p+2*u*y-u*x,g=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*x+1,E=(-1-m)*p+(1.5+m)*y+.5*x,M=m*p-m*y;for(let v=0;v!==o;++v)r[v]=f*a[h+v]+g*a[l+v]+E*a[c+v]+M*a[d+v];return r}},ic=class extends fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},sc=class extends fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rc=class extends fs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(i-t)/(s-t),y=1-x;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*x;return r}let u=o*2,m=e-1;for(let x=0;x!==o;++x){let y=a[l+x],p=a[c+x],f=m*u+x*2,g=d[f],E=d[f+1],M=e*u+x*2,v=h[M],w=h[M+1],_=qm(i,t,g,v,s);r[x]=Uf(_,y,E,w,p)}return r}};function Uf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Xm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function qm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Uf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Xm(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Po(e.settings)&&(i.settings={inTangents:gr(e.settings.inTangents,Array),outTangents:gr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break;case uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Po(this.settings)&&(zd(this.settings.inTangents,e),zd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Po(this.settings)&&(Bd(this.settings.inTangents,e),Bd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Mm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,u=d-i,m=d+i;for(let x=0;x!==i;++x){let y=t[d+x];if(y!==t[u+x]||y!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Po(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Bd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Xo;var ps=class extends Bn{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=na;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};ac.prototype.ValueTypeName="color";var oc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};oc.prototype.ValueTypeName="number";var cc=class extends fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Un.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ma=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Bn{constructor(e,t,i){super(e,t,i)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=na;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Bn{constructor(e,t,i,s){super(e,t,i,s)}};lc.prototype.ValueTypeName="vector";var hc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let m=l[d],x=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new hc,uc=class{constructor(e){this.manager=e!==void 0?e:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sa=class extends Xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ba=class extends Sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hh=new ut,kd=new D,Hd=new D,dc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),Hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Mr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lo=new D,Do=new Un,_i=new D,Ea=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,Do,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lo,Do,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Do,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new D,Gd=new He,Vd=new He,yn=class extends Ea{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,Vd),t.subVectors(Vd,Gd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ta=class extends Ea{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mh=class extends dc{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wa=class extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new mh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xr=-90,_r=1,Ar=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new yn(xr,_r,e,t);r.layers=this.layers,this.add(r);let a=new yn(xr,_r,e,t);a.layers=this.layers,this.add(a);let o=new yn(xr,_r,e,t);o.layers=this.layers,this.add(o);let c=new yn(xr,_r,e,t);c.layers=this.layers,this.add(c);let l=new yn(xr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},fc=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Aa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$m.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $m(){this._document.hidden===!1&&this.reset()}var qh="\\[\\]\\.:\\/",Ym=new RegExp("["+qh+"]","g"),$h="[^"+qh+"]",Zm="[^"+qh.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",$h),Km=/(WCOD+)?/.source.replace("WCOD",Zm),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),e0=new RegExp("^"+Jm+Km+jm+Qm+"$"),t0=["material","materials","bones","map"],gh=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ym,"")}static parseTrackName(e){let t=e0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);t0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=gh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);var Wd=new ut,Ra=class{constructor(e,t,i=0,s=1/0){this.ray=new da(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wd),this}intersectObject(e,t=!0,i=[]){return xh(e,this,i,t),i.sort(Xd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xh(e[s],this,i,t);return i.sort(Xd),i}};function Xd(n,e){return n.distance-e.distance}function xh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)xh(r[a],e,t,!0)}}var Qh=class Qh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Qh.prototype.isMatrix2=!0;var _h=Qh;function Yh(n,e,t,i){let s=n0(i);switch(t){case zh:return n*e;case Sc:return n*e/s.components*s.byteLength;case bc:return n*e/s.components*s.byteLength;case xs:return n*e*2/s.components*s.byteLength;case Ec:return n*e*2/s.components*s.byteLength;case Bh:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case Tc:return n*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(n,16)*Math.max(e,8)/4;case wc:case Rc:return Math.max(n,8)*Math.max(e,8)/2;case Ic:case Pc:case Dc:case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Na:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jc:case Kc:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qc:case el:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ua:case tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n0(n){switch(n){case Cn:case Nh:return{byteLength:1,components:1};case Pr:case Uh:case ci:return{byteLength:2,components:1};case vc:case Mc:return{byteLength:2,components:4};case oi:case yc:case jn:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function sp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function i0(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],y=d[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,d[u]=y)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let y=d[m];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,tg=`uniform sampler2D dfgLUT;
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xg=`#if defined( USE_MORPHCOLORS )
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
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,$g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform float backgroundBlurriness;
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,dx=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:a0,alphamap_pars_fragment:o0,alphatest_fragment:c0,alphatest_pars_fragment:l0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:d0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:x0,bumpmap_pars_fragment:_0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:b0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:w0,common:A0,defaultnormal_vertex:R0,displacementmap_pars_vertex:C0,displacementmap_vertex:I0,emissivemap_fragment:P0,emissivemap_pars_fragment:L0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:U0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:Z0,envmap_vertex:B0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:$0,lights_pars_begin:Y0,lights_toon_fragment:J0,lights_toon_pars_fragment:K0,lights_phong_fragment:j0,lights_phong_pars_fragment:Q0,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,lightprobes_pars_fragment:rg,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:lg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:xg,morphnormal_vertex:_g,morphtarget_pars_vertex:yg,morphtarget_vertex:vg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:bg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Ig,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Dg,project_vertex:Ng,dithering_fragment:Ug,dithering_pars_fragment:Fg,roughnessmap_fragment:Og,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:kg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Gg,skinbase_vertex:Vg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:qg,specularmap_fragment:$g,specularmap_pars_fragment:Yg,tonemapping_fragment:Zg,tonemapping_pars_fragment:Jg,transmission_fragment:Kg,transmission_pars_fragment:jg,uv_pars_fragment:Qg,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ax,cube_vert:ox,cube_frag:cx,depth_vert:lx,depth_frag:hx,distance_vert:ux,distance_frag:dx,equirect_vert:fx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:xx,meshbasic_frag:_x,meshlambert_vert:yx,meshlambert_frag:vx,meshmatcap_vert:Mx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:Tx,meshphong_frag:wx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Ix,points_vert:Px,points_frag:Lx,shadow_vert:Dx,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Fx},Me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ti={basic:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:fn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:fn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:fn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:fn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:fn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:fn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:fn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:fn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:fn([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:fn([Me.lights,Me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ti.physical={uniforms:fn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var sl={r:0,b:0,g:0},Ox=new ut,rp=new qe;rp.set(-1,0,0,0,1,0,0,0,1);function zx(n,e,t,i,s,r){let a=new Xe(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function m(g){let E=g.isScene===!0?g.background:null;if(E&&E.isTexture){let M=g.backgroundBlurriness>0;E=e.get(E,M)}return E}function x(g){let E=!1,M=m(g);M===null?p(a,o):M&&M.isColor&&(p(M,1),E=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,E){let M=m(E);M&&M.isCubeTexture?(l===void 0&&(l=new St(new ls(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Xs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rp),l.material.toneMapped=ot.getTransfer(M.colorSpace)!==_t,(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new St(new zn(2,2),new Si({name:"BackgroundMaterial",uniforms:Xs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function p(g,E){g.getRGB(sl,Xh(n)),t.buffers.color.setClear(sl.r,sl.g,sl.b,E,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,E=1){a.set(g),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:x,addToRenderList:y,dispose:f}}function Bx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(O,B,X,N,$){let J=!1,q=d(O,N,X,B);r!==q&&(r=q,l(r.object)),J=m(O,N,X,$),J&&x(O,N,X,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(O,B,X,N),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function d(O,B,X,N){let $=N.wireframe===!0,J=i[B.id];J===void 0&&(J={},i[B.id]=J);let q=O.isInstancedMesh===!0?O.id:0,oe=J[q];oe===void 0&&(oe={},J[q]=oe);let Z=oe[X.id];Z===void 0&&(Z={},oe[X.id]=Z);let ie=Z[$];return ie===void 0&&(ie=u(c()),Z[$]=ie),ie}function u(O){let B=[],X=[],N=[];for(let $=0;$<t;$++)B[$]=0,X[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:N,object:O,attributes:{},index:null}}function m(O,B,X,N){let $=r.attributes,J=B.attributes,q=0,oe=X.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=$[Z],Pe=J[Z];if(Pe===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Pe=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Pe=O.instanceColor)),se===void 0||se.attribute!==Pe||Pe&&se.data!==Pe.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function x(O,B,X,N){let $={},J=B.attributes,q=0,oe=X.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=J[Z];se===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(se=O.instanceColor));let Pe={};Pe.attribute=se,se&&se.data&&(Pe.data=se.data),$[Z]=Pe,q++}r.attributes=$,r.attributesNum=q,r.index=N}function y(){let O=r.newAttributes;for(let B=0,X=O.length;B<X;B++)O[B]=0}function p(O){f(O,0)}function f(O,B){let X=r.newAttributes,N=r.enabledAttributes,$=r.attributeDivisors;X[O]=1,N[O]===0&&(n.enableVertexAttribArray(O),N[O]=1),$[O]!==B&&(n.vertexAttribDivisor(O,B),$[O]=B)}function g(){let O=r.newAttributes,B=r.enabledAttributes;for(let X=0,N=B.length;X<N;X++)B[X]!==O[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function E(O,B,X,N,$,J,q){q===!0?n.vertexAttribIPointer(O,B,X,$,J):n.vertexAttribPointer(O,B,X,N,$,J)}function M(O,B,X,N){y();let $=N.attributes,J=X.getAttributes(),q=B.defaultAttributeValues;for(let oe in J){let Z=J[oe];if(Z.location>=0){let ie=$[oe];if(ie===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){let se=ie.normalized,Pe=ie.itemSize,Ye=e.get(ie);if(Ye===void 0)continue;let ee=Ye.buffer,Se=Ye.type,Re=Ye.bytesPerElement,Be=Se===n.INT||Se===n.UNSIGNED_INT||ie.gpuType===yc;if(ie.isInterleavedBufferAttribute){let be=ie.data,Je=be.isInterleavedBuffer===!0?be.stride:be.itemSize,zt=ie.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let Ge=0;Ge<Z.locationSize;Ge++)f(Z.location+Ge,be.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)p(Z.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Ge=0;Ge<Z.locationSize;Ge++)E(Z.location+Ge,Pe/Z.locationSize,Se,se,Je*Re,(zt+Pe/Z.locationSize*Ge)*Re,Be)}else{if(ie.isInstancedBufferAttribute){for(let be=0;be<Z.locationSize;be++)f(Z.location+be,ie.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let be=0;be<Z.locationSize;be++)p(Z.location+be);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let be=0;be<Z.locationSize;be++)E(Z.location+be,Pe/Z.locationSize,Se,se,Pe*Re,Pe/Z.locationSize*be*Re,Be)}}else if(q!==void 0){let se=q[oe];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Z.location,se);break;case 3:n.vertexAttrib3fv(Z.location,se);break;case 4:n.vertexAttrib4fv(Z.location,se);break;default:n.vertexAttrib1fv(Z.location,se)}}}}g()}function v(){F();for(let O in i){let B=i[O];for(let X in B){let N=B[X];for(let $ in N){let J=N[$];for(let q in J)h(J[q].object),delete J[q];delete N[$]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let B=i[O.id];for(let X in B){let N=B[X];for(let $ in N){let J=N[$];for(let q in J)h(J[q].object),delete J[q];delete N[$]}}delete i[O.id]}function _(O){for(let B in i){let X=i[B];for(let N in X){let $=X[N];if($[O.id]===void 0)continue;let J=$[O.id];for(let q in J)h(J[q].object),delete J[q];delete $[O.id]}}}function T(O){for(let B in i){let X=i[B],N=O.isInstancedMesh===!0?O.id:0,$=X[N];if($!==void 0){for(let J in $){let q=$[J];for(let oe in q)h(q[oe].object),delete q[oe];delete $[J]}delete X[N],Object.keys(X).length===0&&delete i[B]}}}function F(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function kx(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Cn&&_!==jn&&!T&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(We("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:M,maxSamples:v,samples:w}}function Gx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ai,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let g=r?0:i,E=g*4,M=f.clippingState||null;c.value=M,M=h(x,u,E,m);for(let v=0;v!==E;++v)M[v]=t[v];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,x){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,x!==!0||p===null){let f=m+y*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,M=m;E!==y;++E,M+=4)a.copy(d[E]).applyMatrix4(g,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var za=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ls(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:ks});r.uniforms.tEquirect.value=t;let a=new St(s,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=vn),new Ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Of=256,Vx=3,Wx=20,ap=256,op=16,Xx=3,qx=new D,$x=new Xe,al=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ar(1,10,null),this._boxMesh=new St(new ls(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=qx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor($x));let p=new Ar(i,s,h);return p.position.copy(o),p.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Of,Cf(e))}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ir?this._setSize(e.image.length===0?Of:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=zf(e,!1,!1),i=Math.log2(e)-Vx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Gs||e.mapping===Ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yx(),this._integrationMaterial=Zx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/op);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Xx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(ap*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function zf(n,e,t){return new za(n,{minFilter:Gi,generateMipmaps:e,type:ci,colorSpace:ia,depthBuffer:t})}function Ba(n,e,t){return new Si({name:n,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:Sn,blending:ks,depthTest:!1,depthWrite:!1})}function Yx(){return Ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ap}u

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
	`)}function Zx(){return Ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:op}},`

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
	`)}function Jx(){return Ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wx}
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
	`)}function Bf(){return Ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function kf(){return Ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===gc||m===xc)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new za(x.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,x=m===gc||m===xc,y=m===Gs||m===Ir;if(x||y){let p=t.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new al(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let g=u.image;return x&&g&&g.height>0||y&&g&&c(g)?(i===null&&(i=new al(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===gc?u.mapping=Gs:m===xc&&(u.mapping=Ir),u}function c(u){let m=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&m++;return m===x}function l(u){let m=u.target;m.removeEventListener("dispose",l);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function jx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ta("WebGLRenderer: "+i+" extension not supported."),s}}}function Qx(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(e.remove(y),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(x){let y=x.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function d(x){let y=x.index,p=x.attributes.position,f=0;if(p===void 0)return;let g=y!==null?y.array.length:p.array.length/3-1,E=p.count>=65535?la:ca,M=new E(Math.ceil(g/3)*6,1),v=M.array;if(y!==null){let _=y.array;f=y.version;for(let T=0,F=0;T<g;T+=3){let I=_[T+0],O=_[T+1],B=_[T+2];v[F++]=I,v[F++]=O,v[F++]=O,v[F++]=B,v[F++]=B,v[F++]=I}}else{f=p.version;for(let _=0,T=0;_<g;_+=3){let F=_+0,I=_+1,O=_+2;v[T++]=F,v[T++]=I,v[T++]=I,v[T++]=O,v[T++]=O,v[T++]=F}}M.version=f;let w=r.get(x);w&&e.remove(w),r.set(x,M)}function u(x){let y=r.get(x);if(y){let p=x.index;p!==null&&y.version<p.version&&d(x)}else d(x);return r.get(x)}function m(){for(let x in s){let y=s[x].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function e_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function l(d,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,d*a,m),t.update(u,i,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,m);let y=0;for(let p=0;p<m;p++)y+=u[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function t_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function n_(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],E=0;m===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,v=1;M>e.maxTextureSize&&(v=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*v*4*d),_=new oa(w,M,v,d);_.type=jn,_.needsUpdate=!0;let T=E*4;for(let I=0;I<d;I++){let O=p[I],B=f[I],X=g[I],N=M*v*4*I;for(let $=0;$<O.count;$++){let J=$*T;m===!0&&(s.fromBufferAttribute(O,$),w[N+J+0]=s.x,w[N+J+1]=s.y,w[N+J+2]=s.z,w[N+J+3]=0),x===!0&&(s.fromBufferAttribute(B,$),w[N+J+4]=s.x,w[N+J+5]=s.y,w[N+J+6]=s.z,w[N+J+7]=0),y===!0&&(s.fromBufferAttribute(X,$),w[N+J+8]=s.x,w[N+J+9]=s.y,w[N+J+10]=s.z,w[N+J+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new He(M,v)},i.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function i_(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var s_={[wh]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Rh]:"CINEON_TONE_MAPPING",[Ch]:"ACES_FILMIC_TONE_MAPPING",[Ph]:"AGX_TONE_MAPPING",[Lh]:"NEUTRAL_TONE_MAPPING",[Ih]:"CUSTOM_TONE_MAPPING"};function r_(n,e,t,i,s,r){let a=new Fn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new un;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let d=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new St(h,d),m=new Ta(-1,1,1,-1,0,1),x=null,y=null,p=!1,f,g=null,E=[],M=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),c!==null&&c.setSize(v,w);for(let _=0;_<E.length;_++){let T=E[_];T.setSize&&T.setSize(v,w)}},this.setEffects=function(v){E=v,M=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new Fn(w,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(w,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&E.some(F=>F.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&l===null&&(l=new Hi(w,_),r===!0&&(l.format=Vi,l.type=Vs)),a.dispose(),a.depthTexture=T?l:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let F=0;F<E.length;F++){let I=E[F];I.setSize&&I.setSize(w,_),T&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(v,w){if(p||v.toneMapping===bi&&E.length===0)return!1;if(g=w,w!==null){let _=w.width,T=w.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return M===!1&&v.setRenderTarget(a),f=v.toneMapping,v.toneMapping=bi,!0},this.hasRenderPass=function(){return M},this.end=function(v,w){v.toneMapping=f,p=!0;let _=a,T=o;for(let F=0;F<E.length;F++){let I=E[F];I.enabled!==!1&&(I.render(v,T,_,w),I.needsSwap!==!1&&(_=T,T=T===o?c:o))}if(x!==v.outputColorSpace||y!==v.toneMapping){x=v.outputColorSpace,y=v.toneMapping,d.defines={},ot.getTransfer(x)===_t&&(d.defines.SRGB_TRANSFER="");let F=s_[y];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(g),v.render(u,m),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var cp=new Mn,lp=new Hi(1,1),hp=new ga(1),up=new oa,dp=new Zo,fp=new pa,Hf=[],Gf=[],Vf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cl(n,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function c_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function h_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),$t(t,i)}}function u_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),$t(t,i)}}function d_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(qt(t,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),$t(t,i)}}function f_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function g_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function x_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function ll(n){return n.version===0&&(n.compareFunction=Gh,n.needsUpdate=!0),n}function M_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ll(lp):r=cp,t.setTexture2D(e||r,s)}function S_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||dp,s)}function b_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ll(hp):r=fp,t.setTextureCube(e||r,s)}function E_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||up,s)}function T_(n){switch(n){case 5126:return a_;case 35664:return o_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return y_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return E_}}function w_(n,e){n.uniform1fv(this.addr,e)}function A_(n,e){let t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function R_(n,e){let t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function C_(n,e){let t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function I_(n,e){let t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P_(n,e){let t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L_(n,e){let t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D_(n,e){n.uniform1iv(this.addr,e)}function N_(n,e){n.uniform2iv(this.addr,e)}function U_(n,e){n.uniform3iv(this.addr,e)}function F_(n,e){n.uniform4iv(this.addr,e)}function O_(n,e){n.uniform1uiv(this.addr,e)}function z_(n,e){n.uniform2uiv(this.addr,e)}function B_(n,e){n.uniform3uiv(this.addr,e)}function k_(n,e){n.uniform4uiv(this.addr,e)}function H_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ll(lp):a=cp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function G_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dp,r[a])}function V_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ll(hp):a=fp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function W_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||up,r[a])}function X_(n){switch(n){case 5126:return w_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return I_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return z_;case 36295:return B_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}var nu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}},iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}},su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},eu=/(\w+)(\])?(\[|\.)?/g;function qf(n,e){n.seq.push(e),n.map[e.id]=e}function q_(n,e,t){let i=n.name,s=i.length;for(eu.lastIndex=0;;){let r=eu.exec(i),a=eu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qf(t,l===void 0?new nu(o,n,e):new iu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new su(o),qf(t,d)),t=d}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);q_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function $f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var $_=37297,Y_=0;function Z_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Yf=new qe;function J_(n){ot._getMatrix(Yf,ot.workingColorSpace,n);let e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case sa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Z_(n.getShaderSource(e),o)}else return r}function K_(n,e){let t=J_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var j_={[wh]:"Linear",[Ah]:"Reinhard",[Rh]:"Cineon",[Ch]:"ACESFilmic",[Ph]:"AgX",[Lh]:"Neutral",[Ih]:"Custom"};function Q_(n,e){let t=j_[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rl=new D;function ey(){ot.getLuminanceCoefficients(rl);let n=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function ny(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Oa(n){return n!==""}function Jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(n){return n.replace(sy,ry)}function ry(n,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ru(t)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(n){return n.replace(ay,oy)}function oy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var cy={[Bs]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function ly(n){return cy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hy={[Ir]:"ENVMAP_MODE_REFRACTION"};function uy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dy={[Th]:"ENVMAP_BLENDING_MULTIPLY",[pf]:"ENVMAP_BLENDING_MIX",[mf]:"ENVMAP_BLENDING_ADD"};function fy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dy[n.combine]||"ENVMAP_BLENDING_NONE"}function py(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ly(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=uy(t),d=fy(t),u=ty(t),m=ny(r),x=s.createProgram(),y,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Oa).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Oa).join(`
`),p.length>0&&(p+=`
`)):(y=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),p=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?et.tonemapping_pars_fragment:"",t.toneMapping!==bi?Q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),a=ru(a),a=Jf(a,t),a=Kf(a,t),o=ru(o),o=Jf(o,t),o=Kf(o,t),a=jf(a),o=jf(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=f+y+a,E=f+p+o,M=$f(s,s.VERTEX_SHADER,g),v=$f(s,s.FRAGMENT_SHADER,E);s.attachShader(x,M),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(I){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(v)||"",N=O.trim(),$=B.trim(),J=X.trim(),q=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,v);else{let Z=Zf(s,M,"vertex"),ie=Zf(s,v,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Z+`
`+ie)}else N!==""?We("WebGLProgram: Program Info Log:",N):($===""||J==="")&&(oe=!1);oe&&(I.diagnostics={runnable:q,programLog:N,vertexShader:{log:$,prefix:y},fragmentShader:{log:J,prefix:p}})}s.deleteShader(M),s.deleteShader(v),_=new Lr(s,x),T=iy(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(x,$_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=v,this}var my=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ou(e),t.set(e,i)),i}},ou=class{constructor(e){this.id=my++,this.code=e,this.usedTimes=0}};function gy(n){return n===xs||n===Na||n===Ua}function xy(n,e,t,i,s,r){let a=new Er,o=new au,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,F,I,O,B){let X=I.fog,N=O.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||$,J),oe=u[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&We("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=ie!==void 0?ie.length:0,Pe=0;N.morphAttributes.position!==void 0&&(Pe=1),N.morphAttributes.normal!==void 0&&(Pe=2),N.morphAttributes.color!==void 0&&(Pe=3);let Ye,ee,Se,Re;if(oe){let ve=Ti[oe];Ye=ve.vertexShader,ee=ve.fragmentShader}else{Ye=_.vertexShader,ee=_.fragmentShader;let ve=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,ve,vt),Se=ve.id,Re=vt.id}let Be=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Je=O.isInstancedMesh===!0,zt=O.isBatchedMesh===!0,Ge=!!_.map,yt=!!_.matcap,Et=!!q,st=Et&&q.isPMREMTexture===!0,tn=!!_.aoMap,Vt=!!_.lightMap,wn=!!_.bumpMap&&_.wireframe===!1,Nt=!!_.normalMap,xi=!!_.displacementMap,Jt=!!_.emissiveMap,Xn=!!_.metalnessMap,qn=!!_.roughnessMap,$n=_.anisotropy>0,z=_.clearcoat>0,Yn=_.diffuseRoughness>0,It=_.dispersion>0,Pt=_.retroreflectivity>0,ye=_.iridescence>0,Wt=_.sheen>0,ke=_.transmission>0,$e=$n&&!!_.anisotropyMap,A=z&&!!_.clearcoatMap,S=z&&!!_.clearcoatNormalMap,G=z&&!!_.clearcoatRoughnessMap,re=Yn&&!!_.diffuseRoughnessMap,ne=ye&&!!_.iridescenceMap,ue=ye&&!!_.iridescenceThicknessMap,xe=Wt&&!!_.sheenColorMap,K=Wt&&!!_.sheenRoughnessMap,j=!!_.specularMap,pe=!!_.specularColorMap,L=!!_.specularIntensityMap,te=ke&&!!_.transmissionMap,Y=ke&&!!_.thicknessMap,me=!!_.gradientMap,le=!!_.alphaMap,de=_.alphaTest>0,Ne=!!_.alphaHash,Qe=!!_.extensions,ce=bi;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Fe=st?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,je={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:Ye,fragmentShader:ee,defines:_.defines,customVertexShaderID:Se,customFragmentShaderID:Re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:zt,batchingColor:zt&&O._colorsTexture!==null,instancing:Je,instancingColor:Je&&O.instanceColor!==null,instancingMorph:Je&&O.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:yt,envMap:Et,envMapMode:Et&&q.mapping,envMapPMREM:st,envMapMaxLod:st?Fe.length-1:null,envMapSize:st?Fe[0].width:null,aoMap:tn,lightMap:Vt,bumpMap:wn,normalMap:Nt,displacementMap:xi,emissiveMap:Jt,normalMapObjectSpace:Nt&&_.normalMapType===_f,normalMapTangentSpace:Nt&&_.normalMapType===nl,packedNormalMap:Nt&&_.normalMapType===nl&&gy(_.normalMap.format),metalnessMap:Xn,roughnessMap:qn,anisotropy:$n,anisotropyMap:$e,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:Yn,diffuseRoughnessMap:re,dispersion:It,retroreflection:Pt,iridescence:ye,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:Wt,sheenColorMap:xe,sheenRoughnessMap:K,specularMap:j,specularColorMap:pe,specularIntensityMap:L,transmission:ke,transmissionMap:te,thicknessMap:Y,gradientMap:me,opaque:_.transparent===!1&&_.blending===Cr&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Ne,combine:_.combine,mapUv:Ge&&m(_.map.channel),aoMapUv:tn&&m(_.aoMap.channel),lightMapUv:Vt&&m(_.lightMap.channel),bumpMapUv:wn&&m(_.bumpMap.channel),normalMapUv:Nt&&m(_.normalMap.channel),displacementMapUv:xi&&m(_.displacementMap.channel),emissiveMapUv:Jt&&m(_.emissiveMap.channel),metalnessMapUv:Xn&&m(_.metalnessMap.channel),roughnessMapUv:qn&&m(_.roughnessMap.channel),anisotropyMapUv:$e&&m(_.anisotropyMap.channel),clearcoatMapUv:A&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(_.sheenRoughnessMap.channel),specularMapUv:j&&m(_.specularMap.channel),specularColorMapUv:pe&&m(_.specularColorMap.channel),specularIntensityMapUv:L&&m(_.specularIntensityMap.channel),transmissionMapUv:te&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:le&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Nt||$n),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ge||le),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:Jt&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||zt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function y(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)T.push(F),T.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(T,_),f(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function f(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function g(_){let T=u[_.type],F;if(T){let I=Ti[T];F=Nf.clone(I.uniforms)}else F=_.uniforms;return F}function E(_,T){let F=h.get(T);return F!==void 0?++F.usedTimes:(F=new py(n,T,_,s),l.push(F),h.set(T,F)),F}function M(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:g,acquireProgram:E,releaseProgram:M,releaseShaderCache:v,programs:l,dispose:w}}function _y(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,y,p,f){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:f},n[e]=g):(g.id=u.id,g.object=u,g.geometry=m,g.material=x,g.materialVariant=a(u),g.groupOrder=y,g.renderOrder=u.renderOrder,g.z=p,g.group=f),e++,g}function c(u,m,x,y,p,f,g){g.reversedDepth===!0&&(p=-p);let E=o(u,m,x,y,p,f);x.transmission>0?i.push(E):x.transparent===!0?s.push(E):t.push(E)}function l(u,m,x,y,p,f){let g=o(u,m,x,y,p,f);x.transmission>0?i.unshift(g):x.transparent===!0?s.unshift(g):t.unshift(g)}function h(u,m){t.length>1&&t.sort(u||yy),i.length>1&&i.sort(m||ep),s.length>1&&s.sort(m||ep)}function d(){for(let u=e,m=n.length;u<m;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function vy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new tp,n.set(i,[a])):s>=r.length?(a=new tp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function My(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Sy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var by=0;function Ey(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ty(n){let e=new My,t=Sy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let s=new D,r=new ut,a=new ut;function o(l){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,x=0,y=0,p=0,f=0,g=0,E=0,M=0,v=0,w=0,_=0,T=0,F=0,I=0;l.sort(Ey);for(let B=0,X=l.length;B<X;B++){let N=l[B],$=N.color,J=N.intensity,q=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===xs?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=$.r*J,d+=$.g*J,u+=$.b*J;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],J);I++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[x]=se,i.sunShadowMap[x]=oe;let Pe=ie.getViewportCount();for(let Ye=0;Ye<Pe;Ye++)i.sunShadowMatrix[y+Ye]=ie.getMatrix(Ye),i.sunShadowCascade[y+Ye]=ie._cascadeData[Ye];y+=Pe,x++}i.sun[m]=Z,m++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=Z,p++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy($).multiplyScalar(J),Z.distance=q,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[g]=Z;let ie=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,ie.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[g]=ie.matrix,N.castShadow){let se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=oe,_++}g++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy($).multiplyScalar(J),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=Z,E++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,se.shadowCameraNear=ie.camera.near,se.shadowCameraFar=ie.camera.far,i.pointShadow[f]=se,i.pointShadowMap[f]=oe,i.pointShadowMatrix[f]=N.shadow.matrix,w++}i.point[f]=Z,f++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(J),Z.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[M]=Z,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let O=i.hash;(O.sunLength!==m||O.directionalLength!==p||O.pointLength!==f||O.spotLength!==g||O.rectAreaLength!==E||O.hemiLength!==M||O.numSunShadows!==x||O.numDirectionalShadows!==v||O.numPointShadows!==w||O.numSpotShadows!==_||O.numSpotMaps!==T||O.numLightProbes!==I)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=E,i.point.length=f,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-F,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=I,O.sunLength=m,O.directionalLength=p,O.pointLength=f,O.spotLength=g,O.rectAreaLength=E,O.hemiLength=M,O.numSunShadows=x,O.numDirectionalShadows=v,O.numPointShadows=w,O.numSpotShadows=_,O.numSpotMaps=T,O.numLightProbes=I,i.version=by++)}function c(l,h){let d=0,u=0,m=0,x=0,y=0,p=0,f=h.matrixWorldInverse;for(let g=0,E=l.length;g<E;g++){let M=l[g];if(M.isSunLight){let v=i.sun[d];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(M.isSpotLight){let v=i.spot[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let v=i.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let v=i.point[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),p++}}}return{setup:o,setupView:c,state:i}}function np(n){let e=new Ty(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function wy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new np(n),e.set(s,[o])):r>=a.length?(o=new np(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
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
}`,Cy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Iy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ip=new ut,Fa=new D,tu=new D;function Py(n,e,t){let i=new cs,s=new He,r=new He,a=new Lt,o=new ec,c=new tc,l={},h=t.maxTextureSize,d={[gs]:Sn,[Sn]:gs,[Rn]:Rn},u=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Ay,fragmentShader:Ry}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new un;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let f=this.type;this.render=function(w,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Yd&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let F=n.getRenderTarget(),I=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ks),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=f!==this.type;X&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach($=>$.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,$=w.length;N<$;N++){let J=w[N],q=J.shadow;if(q===void 0){We("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let oe=q.getFrameExtents();s.multiply(oe),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||X===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Rr){if(J.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Fn(s.x,s.y,{format:xs,type:ci,minFilter:vn,magFilter:vn,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new Hi(s.x,s.y,jn),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=Bi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ht,q.map.depthTexture.magFilter=Ht}else J.isPointLight?(q.map=new za(s.x),q.map.depthTexture=new ga(s.x,oi)):(q.map=new Fn(s.x,s.y),q.map.depthTexture=new Hi(s.x,s.y,oi)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=Bi,this.type===Bs?(q.map.depthTexture.compareFunction=Z?Hh:kh,q.map.depthTexture.minFilter=vn,q.map.depthTexture.magFilter=vn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ht,q.map.depthTexture.magFilter=Ht);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ie=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,T);let se=q.camera.layers.mask&4294967294?q.camera.layers:T.layers;for(let Pe=0;Pe<ie;Pe++){let Ye=q.getCamera(Pe);if(J.isPointLight){let ee=q.camera,Se=q.matrix,Re=J.distance||ee.far;Re!==ee.far&&(ee.far=Re,ee.updateProjectionMatrix()),Fa.setFromMatrixPosition(J.matrixWorld),ee.position.copy(Fa),tu.copy(ee.position),tu.add(Cy[Pe]),ee.up.copy(Iy[Pe]),ee.lookAt(tu),ee.updateMatrixWorld(),Se.makeTranslation(-Fa.x,-Fa.y,-Fa.z),ip.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ip,ee.coordinateSystem,ee.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,Pe),n.clear();else{Pe===0&&(n.setRenderTarget(q.map),n.clear());let ee=q.getViewport(Pe);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),B.viewport(a)}i=q.getFrustum(Pe),M(_,T,Ye,J,se,this.type)}q.isPointLightShadow!==!0&&this.type===Rr&&g(q,T),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(F,I,O)};function g(w,_){let T=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Fn(s.x,s.y,{format:xs,type:ci}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,T,u,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,T,m,y,null)}function E(w,_,T,F){let I=null,O=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)I=O;else if(I=T.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=I.uuid,X=_.uuid,N=l[B];N===void 0&&(N={},l[B]=N);let $=N[X];$===void 0&&($=I.clone(),N[X]=$,_.addEventListener("dispose",v)),I=$}if(I.visible=_.visible,I.wireframe=_.wireframe,F===Rr?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:d[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=n.properties.get(I);B.light=T}return I}function M(w,_,T,F,I,O){if(w.visible===!1)return;if(w.layers.test(I)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Rr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let N=e.update(w),$=w.material;if(Array.isArray($)){let J=N.groups;for(let q=0,oe=J.length;q<oe;q++){let Z=J[q],ie=$[Z.materialIndex];if(ie&&ie.visible){let se=E(w,ie,F,O);w.onBeforeShadow(n,w,_,T,N,se,Z),n.renderBufferDirect(T,null,N,se,w,Z),w.onAfterShadow(n,w,_,T,N,se,Z)}}}else if($.visible){let J=E(w,$,F,O);w.onBeforeShadow(n,w,_,T,N,J,null),n.renderBufferDirect(T,null,N,J,w,null),w.onAfterShadow(n,w,_,T,N,J,null)}}let X=w.children;for(let N=0,$=X.length;N<$;N++)M(X[N],_,T,F,I,O)}function v(w){w.target.removeEventListener("dispose",v);for(let T in l){let F=l[T],I=w.target.uuid;I in F&&(F[I].dispose(),delete F[I])}}}function Ly(n,e){function t(){let L=!1,te=new Lt,Y=null,me=new Lt(0,0,0,0);return{setMask:function(le){Y!==le&&!L&&(n.colorMask(le,le,le,le),Y=le)},setLocked:function(le){L=le},setClear:function(le,de,Ne,Qe,ce){ce===!0&&(le*=Qe,de*=Qe,Ne*=Qe),te.set(le,de,Ne,Qe),me.equals(te)===!1&&(n.clearColor(le,de,Ne,Qe),me.copy(te))},reset:function(){L=!1,Y=null,me.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,Y=null,me=null,le=null;return{setReversed:function(de){if(te!==de){let Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),te=de;let Qe=le;le=null,this.setClear(Qe)}},getReversed:function(){return te},setTest:function(de){de?be(n.DEPTH_TEST):Je(n.DEPTH_TEST)},setMask:function(de){Y!==de&&!L&&(n.depthMask(de),Y=de)},setFunc:function(de){if(te&&(de=Rf[de]),me!==de){switch(de){case Fo:n.depthFunc(n.NEVER);break;case Oo:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Bo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Ho:n.depthFunc(n.GREATER);break;case Go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=de}},setLocked:function(de){L=de},setClear:function(de){le!==de&&(le=de,te&&(de=1-de),n.clearDepth(de))},reset:function(){L=!1,Y=null,me=null,le=null,te=!1}}}function s(){let L=!1,te=null,Y=null,me=null,le=null,de=null,Ne=null,Qe=null,ce=null;return{setTest:function(Fe){L||(Fe?be(n.STENCIL_TEST):Je(n.STENCIL_TEST))},setMask:function(Fe){te!==Fe&&!L&&(n.stencilMask(Fe),te=Fe)},setFunc:function(Fe,je,ve){(Y!==Fe||me!==je||le!==ve)&&(n.stencilFunc(Fe,je,ve),Y=Fe,me=je,le=ve)},setOp:function(Fe,je,ve){(de!==Fe||Ne!==je||Qe!==ve)&&(n.stencilOp(Fe,je,ve),de=Fe,Ne=je,Qe=ve)},setLocked:function(Fe){L=Fe},setClear:function(Fe){ce!==Fe&&(n.clearStencil(Fe),ce=Fe)},reset:function(){L=!1,te=null,Y=null,me=null,le=null,de=null,Ne=null,Qe=null,ce=null}}}let r=new t,a=new i,o=new s,c={},l=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],y=null,p=!1,f=null,g=null,E=null,M=null,v=null,w=null,_=null,T=new Xe(0,0,0),F=0,I=!1,O=null,B=null,X=null,N=null,$=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,oe=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=oe>=2);let ie=null,se={},Pe=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),ee=new Lt().fromArray(Pe),Se=new Lt().fromArray(Ye);function Re(L,te,Y,me){let le=new Uint8Array(4),de=n.createTexture();n.bindTexture(L,de),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<Y;Ne++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(te+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return de}let Be={};Be[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),be(n.DEPTH_TEST),a.setFunc(vr),wn(!1),Nt(yh),be(n.CULL_FACE),tn(ks);function be(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Je(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function zt(L,te){return u[L]!==te?(n.bindFramebuffer(L,te),u[L]=te,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ge(L,te){let Y=x,me=!1;if(L){Y=m.get(te),Y===void 0&&(Y=[],m.set(te,Y));let le=L.textures;if(Y.length!==le.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ne=le.length;de<Ne;de++)Y[de]=n.COLOR_ATTACHMENT0+de;Y.length=le.length,me=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,me=!0);me&&n.drawBuffers(Y)}function yt(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Et={[Hs]:n.FUNC_ADD,[Jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};Et[jd]=n.MIN,Et[Qd]=n.MAX;let st={[ef]:n.ZERO,[tf]:n.ONE,[nf]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[rf]:n.DST_ALPHA,[sf]:n.ONE_MINUS_SRC_COLOR,[Eh]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[hf]:n.CONSTANT_COLOR,[uf]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[ff]:n.ONE_MINUS_CONSTANT_ALPHA};function tn(L,te,Y,me,le,de,Ne,Qe,ce,Fe){if(L===ks){p===!0&&(Je(n.BLEND),p=!1);return}if(p===!1&&(be(n.BLEND),p=!0),L!==Zd){if(L!==f||Fe!==I){if((g!==Hs||v!==Hs)&&(n.blendEquation(n.FUNC_ADD),g=Hs,v=Hs),Fe)switch(L){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ve("WebGLState: Invalid blending: ",L);break}else switch(L){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",L);break}E=null,M=null,w=null,_=null,T.set(0,0,0),F=0,f=L,I=Fe}return}le=le||te,de=de||Y,Ne=Ne||me,(te!==g||le!==v)&&(n.blendEquationSeparate(Et[te],Et[le]),g=te,v=le),(Y!==E||me!==M||de!==w||Ne!==_)&&(n.blendFuncSeparate(st[Y],st[me],st[de],st[Ne]),E=Y,M=me,w=de,_=Ne),(Qe.equals(T)===!1||ce!==F)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ce),T.copy(Qe),F=ce),f=L,I=!1}function Vt(L,te){L.side===Rn?Je(n.CULL_FACE):be(n.CULL_FACE);let Y=L.side===Sn;te&&(Y=!Y),wn(Y),L.blending===Cr&&L.transparent===!1?tn(ks):tn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Jt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Je(n.SAMPLE_ALPHA_TO_COVERAGE)}function wn(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function Nt(L){L!==qd?(be(n.CULL_FACE),L!==B&&(L===yh?n.cullFace(n.BACK):L===$d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Je(n.CULL_FACE),B=L}function xi(L){L!==X&&(q&&n.lineWidth(L),X=L)}function Jt(L,te,Y){L?(be(n.POLYGON_OFFSET_FILL),(N!==te||$!==Y)&&(N=te,$=Y,a.getReversed()&&(te=-te,Y=-Y),n.polygonOffset(te,Y))):Je(n.POLYGON_OFFSET_FILL)}function Xn(L){L?be(n.SCISSOR_TEST):Je(n.SCISSOR_TEST)}function qn(L){L===void 0&&(L=n.TEXTURE0+J-1),ie!==L&&(n.activeTexture(L),ie=L)}function $n(L,te,Y){Y===void 0&&(ie===null?Y=n.TEXTURE0+J-1:Y=ie);let me=se[Y];me===void 0&&(me={type:void 0,texture:void 0},se[Y]=me),(me.type!==L||me.texture!==te)&&(ie!==Y&&(n.activeTexture(Y),ie=Y),n.bindTexture(L,te||Be[L]),me.type=L,me.texture=te)}function z(){let L=se[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Yn(){try{n.compressedTexImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function It(){try{n.compressedTexImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Pt(){try{n.texSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ye(){try{n.texSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function Wt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function $e(){try{n.texStorage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function A(){try{n.texStorage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function S(){try{n.texImage2D(...arguments)}catch(L){Ve("WebGLState:",L)}}function G(){try{n.texImage3D(...arguments)}catch(L){Ve("WebGLState:",L)}}function re(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function ne(L,te){d[L]!==te&&(n.pixelStorei(L,te),d[L]=te)}function ue(L){ee.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function xe(L){Se.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Se.copy(L))}function K(L,te){let Y=l.get(te);Y===void 0&&(Y=new WeakMap,l.set(te,Y));let me=Y.get(L);me===void 0&&(me=n.getUniformBlockIndex(te,L.name),n.uniformBlockBinding(te,me,me),Y.set(L,me))}function j(L,te,Y){let le=l.get(te).get(L);c[le]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,Y),c[le]=Y)}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,se={},u={},c={},m=new WeakMap,x=[],y=null,p=!1,f=null,g=null,E=null,M=null,v=null,w=null,_=null,T=new Xe(0,0,0),F=0,I=!1,O=null,B=null,X=null,N=null,$=null,ee.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:be,disable:Je,bindFramebuffer:zt,drawBuffers:Ge,useProgram:yt,setBlending:tn,setMaterial:Vt,setFlipSided:wn,setCullFace:Nt,setLineWidth:xi,setPolygonOffset:Jt,setScissorTest:Xn,activeTexture:qn,bindTexture:$n,unbindTexture:z,compressedTexImage2D:Yn,compressedTexImage3D:It,texImage2D:S,texImage3D:G,pixelStorei:ne,getParameter:re,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:$e,texStorage3D:A,texSubImage2D:Pt,texSubImage3D:ye,compressedTexSubImage2D:Wt,compressedTexSubImage3D:ke,scissor:ue,viewport:xe,reset:pe}}function Dy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,d=new Set,u,m=new WeakMap,x=new Set,y=new FinalizationRegistry(A=>x.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return p?new OffscreenCanvas(A,S):ra("canvas")}function g(A,S,G){let re=1,ne=$e(A);if((ne.width>G||ne.height>G)&&(re=G/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ue=Math.floor(re*ne.width),xe=Math.floor(re*ne.height);u===void 0&&(u=f(ue,xe));let K=S?f(ue,xe):u;return K.width=ue,K.height=xe,K.getContext("2d").drawImage(A,0,0,ue,xe),We("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+xe+")."),K}else return"data"in A&&We("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,S,G,re,ne,ue=!1){if(A!==null){if(n[A]!==void 0)return n[A];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe;re&&(xe=e.get("EXT_texture_norm16"),xe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&xe&&(K=xe.R16_EXT),G===n.SHORT&&xe&&(K=xe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),S===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&xe&&(K=xe.RG16_EXT),G===n.SHORT&&xe&&(K=xe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&xe&&(K=xe.RGB16_EXT),G===n.SHORT&&xe&&(K=xe.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){let j=ue?sa:ot.getTransfer(ne);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=j===_t?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&xe&&(K=xe.RGBA16_EXT),G===n.SHORT&&xe&&(K=xe.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,S){let G;return A?S===null||S===oi||S===Vs?G=n.DEPTH24_STENCIL8:S===jn?G=n.DEPTH32F_STENCIL8:S===Pr&&(G=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===Vs?G=n.DEPTH_COMPONENT24:S===jn?G=n.DEPTH_COMPONENT32F:S===Pr&&(G=n.DEPTH_COMPONENT16),G}function T(A,S){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function F(A){let S=new WeakRef(A);i.get(A).__ref=S,x.add(S),y.register(A,S,S)}function I(A){let S=i.get(A).__ref;S!==void 0&&(x.delete(S),y.unregister(S))}function O(A){X(A.target)}function B(A){N(A.target)}function X(A){A.removeEventListener("dispose",O),I(A),J(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function N(A){A.removeEventListener("dispose",B),I(A),oe(A)}function $(){for(let A of x){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):X(S))}x.clear(),d.clear()}function J(A){let S=i.get(A);if(S.__webglInit===void 0)return;let G=A.source,re=m.get(G);if(re){let ne=re[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&q(A),Object.keys(re).length===0&&m.delete(G)}i.remove(A)}function q(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let G=A.source,re=m.get(G);delete re[S.__cacheKey],a.memory.textures--}function oe(A){let S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&X(G),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ue=0;ue<S.__webglFramebuffer[ne].length;ue++)n.deleteFramebuffer(S.__webglFramebuffer[ne][ue]);else n.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)n.deleteFramebuffer(S.__webglFramebuffer[ne]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let re=A.textures;for(let ne=0,ue=re.length;ne<ue;ne++){let xe=i.get(re[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(re[ne])}i.remove(A)}let Z=0;function ie(){Z=0}function se(){return Z}function Pe(A){Z=A}function Ye(){let A=Z;return A>=s.maxTextures&&We("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}function ee(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Se(A,S){let G=i.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let re=A.image;if(re===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(G,A,S);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function Re(A,S){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Vt(G,A,S);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function Be(A,S){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Vt(G,A,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function be(A,S){let G=i.get(A);if(A.version>0&&G.__version!==A.version){wn(G,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let Je={[Vo]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},zt={[Ht]:n.NEAREST,[gf]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[_c]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Ge={[vf]:n.NEVER,[Gh]:n.ALWAYS,[Mf]:n.LESS,[kh]:n.LEQUAL,[Sf]:n.EQUAL,[Hh]:n.GEQUAL,[bf]:n.GREATER,[Ef]:n.NOTEQUAL};function yt(A,S){if(S.type===jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===_c||S.magFilter===Ca||S.magFilter===Gi||S.minFilter===vn||S.minFilter===_c||S.minFilter===Ca||S.minFilter===Gi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Je[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Je[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Je[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,zt[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,zt[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==Ca&&S.minFilter!==Gi||S.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Et(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O),F(S));let re=S.source,ne=m.get(re);ne===void 0&&(ne={},m.set(re,ne));let ue=ee(S);if(ue!==A.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[ue].usedTimes++;let xe=ne[A.__cacheKey];xe!==void 0&&(ne[A.__cacheKey].usedTimes--,xe.usedTimes===0&&q(S)),A.__cacheKey=ue,A.__webglTexture=ne[ue].texture}return G}function st(A,S,G){return Math.floor(Math.floor(A/G)/S)}function tn(A,S,G,re){let ue=A.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,re,S.data);else{ue.sort((L,te)=>L.start-te.start);let xe=0;for(let L=1;L<ue.length;L++){let te=ue[xe],Y=ue[L],me=te.start+te.count,le=st(Y.start,S.width,4),de=st(te.start,S.width,4);Y.start<=me+1&&le===de&&st(Y.start+Y.count-1,S.width,4)===le?te.count=Math.max(te.count,Y.start+Y.count-te.start):(++xe,ue[xe]=Y)}ue.length=xe+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let L=0,te=ue.length;L<te;L++){let Y=ue[L],me=Math.floor(Y.start/4),le=Math.ceil(Y.count/4),de=me%S.width,Ne=Math.floor(me/S.width),Qe=le,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(n.TEXTURE_2D,0,de,Ne,Qe,ce,G,re,S.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Vt(A,S,G){let re=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=n.TEXTURE_3D);let ne=Et(A,S),ue=S.source;t.bindTexture(re,A.__webglTexture,n.TEXTURE0+G);let xe=i.get(ue);if(ue.version!==xe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ce=ot.getPrimaries(ot.workingColorSpace),Fe=S.colorSpace===Wi?null:ot.getPrimaries(S.colorSpace),je=S.colorSpace===Wi||ce===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let j=g(S.image,!1,s.maxTextureSize);j=ke(S,j);let pe=r.convert(S.format,S.colorSpace),L=r.convert(S.type),te=w(S.internalFormat,pe,L,S.normalized,S.colorSpace,S.isVideoTexture);yt(re,S);let Y,me=S.mipmaps,le=S.isVideoTexture!==!0,de=xe.__version===void 0||ne===!0,Ne=ue.dataReady,Qe=T(S,j);if(S.isDepthTexture)te=_(S.format===Vi,S.type),de&&(le?t.texStorage2D(n.TEXTURE_2D,1,te,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,te,j.width,j.height,0,pe,L,null));else if(S.isDataTexture)if(me.length>0){le&&de&&t.texStorage2D(n.TEXTURE_2D,Qe,te,me[0].width,me[0].height);for(let ce=0,Fe=me.length;ce<Fe;ce++)Y=me[ce],le?Ne&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(n.TEXTURE_2D,ce,te,Y.width,Y.height,0,pe,L,Y.data);S.generateMipmaps=!1}else le?(de&&t.texStorage2D(n.TEXTURE_2D,Qe,te,j.width,j.height),Ne&&tn(S,j,pe,L)):t.texImage2D(n.TEXTURE_2D,0,te,j.width,j.height,0,pe,L,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,te,me[0].width,me[0].height,j.depth);for(let ce=0,Fe=me.length;ce<Fe;ce++)if(Y=me[ce],S.format!==kn)if(pe!==null)if(le){if(Ne)if(S.layerUpdates.size>0){let je=Yh(Y.width,Y.height,S.format,S.type);for(let ve of S.layerUpdates){let vt=Y.data.subarray(ve*je/Y.data.BYTES_PER_ELEMENT,(ve+1)*je/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,ve,Y.width,Y.height,1,pe,vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Y.width,Y.height,j.depth,pe,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,te,Y.width,Y.height,j.depth,0,Y.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Y.width,Y.height,j.depth,pe,L,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,te,Y.width,Y.height,j.depth,0,pe,L,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{le&&de&&t.texStorage2D(n.TEXTURE_2D,Qe,te,me[0].width,me[0].height);for(let ce=0,Fe=me.length;ce<Fe;ce++)Y=me[ce],S.format!==kn?pe!==null?le?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Y.width,Y.height,pe,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,te,Y.width,Y.height,0,Y.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Ne&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(n.TEXTURE_2D,ce,te,Y.width,Y.height,0,pe,L,Y.data)}else if(S.isDataArrayTexture)if(le){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,te,j.width,j.height,j.depth),Ne)if(S.layerUpdates.size>0){let ce=Yh(j.width,j.height,S.format,S.type);for(let Fe of S.layerUpdates){let je=j.data.subarray(Fe*ce/j.data.BYTES_PER_ELEMENT,(Fe+1)*ce/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Fe,j.width,j.height,1,pe,L,je)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,L,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,j.width,j.height,j.depth,0,pe,L,j.data);else if(S.isData3DTexture)le?(de&&t.texStorage3D(n.TEXTURE_3D,Qe,te,j.width,j.height,j.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,L,j.data)):t.texImage3D(n.TEXTURE_3D,0,te,j.width,j.height,j.depth,0,pe,L,j.data);else if(S.isFramebufferTexture){if(de)if(le)t.texStorage2D(n.TEXTURE_2D,Qe,te,j.width,j.height);else{let ce=j.width,Fe=j.height;for(let je=0;je<Qe;je++)t.texImage2D(n.TEXTURE_2D,je,te,ce,Fe,0,pe,L,null),ce>>=1,Fe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),j.parentNode!==ce){ce.appendChild(j),d.add(S),ce.onpaint=Fe=>{let je=Fe.changedElements;for(let ve of d)je.includes(ve.image)&&(ve.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let je=n.RGBA,ve=n.RGBA,vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,ve,vt,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(le&&de){let ce=$e(me[0]);t.texStorage2D(n.TEXTURE_2D,Qe,te,ce.width,ce.height)}for(let ce=0,Fe=me.length;ce<Fe;ce++)Y=me[ce],le?Ne&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,pe,L,Y):t.texImage2D(n.TEXTURE_2D,ce,te,pe,L,Y);S.generateMipmaps=!1}else if(le){if(de){let ce=$e(j);t.texStorage2D(n.TEXTURE_2D,Qe,te,ce.width,ce.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,L,j)}else t.texImage2D(n.TEXTURE_2D,0,te,pe,L,j);E(S)&&S.mipmapsAutoUpdate===!0&&M(re),xe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function wn(A,S,G){if(S.image.length!==6)return;let re=Et(A,S),ne=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let ue=i.get(ne);if(ne.version!==ue.__version||re===!0){t.activeTexture(n.TEXTURE0+G);let xe=ot.getPrimaries(ot.workingColorSpace),K=S.colorSpace===Wi?null:ot.getPrimaries(S.colorSpace),j=S.colorSpace===Wi||xe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let pe=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,te=[];for(let ve=0;ve<6;ve++)!pe&&!L?te[ve]=g(S.image[ve],!0,s.maxCubemapSize):te[ve]=L?S.image[ve].image:S.image[ve],te[ve]=ke(S,te[ve]);let Y=te[0],me=r.convert(S.format,S.colorSpace),le=r.convert(S.type),de=w(S.internalFormat,me,le,S.normalized,S.colorSpace),Ne=S.isVideoTexture!==!0,Qe=ue.__version===void 0||re===!0,ce=ne.dataReady,Fe=T(S,Y);yt(n.TEXTURE_CUBE_MAP,S);let je;if(S.isDepthTexture){if(de=_(S.format===Vi,S.type),Qe)if(Ne)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,de,Y.width,Y.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,Y.width,Y.height,0,me,le,null)}else if(pe){Ne&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,de,Y.width,Y.height);for(let ve=0;ve<6;ve++){je=te[ve].mipmaps;for(let vt=0;vt<je.length;vt++){let Kt=je[vt];S.format!==kn?me!==null?Ne?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,0,0,Kt.width,Kt.height,me,Kt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,de,Kt.width,Kt.height,0,Kt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,0,0,Kt.width,Kt.height,me,le,Kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt,de,Kt.width,Kt.height,0,me,le,Kt.data)}}}else{if(je=S.mipmaps,Ne&&Qe){je.length>0&&Fe++;let ve=$e(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,de,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(L){Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,te[ve].width,te[ve].height,me,le,te[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,te[ve].width,te[ve].height,0,me,le,te[ve].data);for(let vt=0;vt<je.length;vt++){let Ki=je[vt].image[ve].image;Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,0,0,Ki.width,Ki.height,me,le,Ki.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,de,Ki.width,Ki.height,0,me,le,Ki.data)}}else{Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,me,le,te[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,de,me,le,te[ve]);for(let vt=0;vt<je.length;vt++){let Kt=je[vt];Ne?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,0,0,me,le,Kt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,vt+1,de,me,le,Kt.image[ve])}}}E(S)&&S.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ue.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Nt(A,S,G,re,ne,ue){let xe=r.convert(G.format,G.colorSpace),K=r.convert(G.type),j=w(G.internalFormat,xe,K,G.normalized,G.colorSpace),pe=i.get(S),L=i.get(G);if(L.__renderTarget=S,!pe.__hasExternalTextures){let te=Math.max(1,S.width>>ue),Y=Math.max(1,S.height>>ue);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ue,j,te,Y,S.depth,0,xe,K,null):t.texImage2D(ne,ue,j,te,Y,0,xe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,L.__webglTexture,0,Pt(S)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,L.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xi(A,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){let re=S.depthTexture,ne=re&&re.isDepthTexture?re.type:null,ue=_(S.stencilBuffer,ne),xe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(S),ue,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(S),ue,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ue,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,A)}else{let re=S.textures;for(let ne=0;ne<re.length;ne++){let ue=re[ne],xe=r.convert(ue.format,ue.colorSpace),K=r.convert(ue.type),j=w(ue.internalFormat,xe,K,ue.normalized,ue.colorSpace);ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(S),j,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(S),j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(A,S,G){let re=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(S.depthTexture);ne.__renderTarget=S;let ue=re?S.depthTexture.image[0]:S.depthTexture.image;(!ne.__webglTexture||ue.width!==S.width||ue.height!==S.height)&&(ue.width=S.width,ue.height=S.height,S.depthTexture.needsUpdate=!0),re?be(S.depthTexture,0):Se(S.depthTexture,0);let xe=ne.__webglTexture,K=Pt(S),j=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,pe=S.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Bi)ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,j,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,pe,j,xe,0);else if(S.depthTexture.format===Vi)ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,j,xe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,pe,j,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xn(A){let S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let re=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=re}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let re=0;re<6;re++)Jt(S.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Jt(S.__webglFramebuffer[0],A,0):Jt(S.__webglFramebuffer,A,0);else if(G){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=n.createRenderbuffer(),xi(S.__webglDepthbuffer[re],A,!1);else{let ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ue)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),xi(S.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qn(A,S,G){let re=i.get(A);S!==void 0&&Nt(re.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Xn(A)}function $n(A){let S=A.texture,G=i.get(A),re=i.get(S);A.addEventListener("dispose",B),F(A);let ne=A.textures,ue=A.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=S.version,a.memory.textures++),ue){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let j=0;j<S.mipmaps.length;j++)G.__webglFramebuffer[K][j]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(xe)for(let K=0,j=ne.length;K<j;K++){let pe=i.get(ne[K]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ye(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){let j=ne[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let pe=r.convert(j.format,j.colorSpace),L=r.convert(j.type),te=w(j.internalFormat,pe,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),Y=Pt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),xi(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),yt(n.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Nt(G.__webglFramebuffer[K][j],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Nt(G.__webglFramebuffer[K],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(S)?M(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let K=0,j=ne.length;K<j;K++){let pe=ne[K],L=i.get(pe),te=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),yt(te,pe),Nt(G.__webglFramebuffer,A,pe,n.COLOR_ATTACHMENT0+K,te,0),E(pe)&&M(te)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,re.__webglTexture),yt(K,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Nt(G.__webglFramebuffer[j],A,S,n.COLOR_ATTACHMENT0,K,j);else Nt(G.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,K,0);E(S)?M(K):S.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Xn(A)}function z(A){let S=A.textures;for(let G=0,re=S.length;G<re;G++){let ne=S[G];if(E(ne)&&ne.mipmapsAutoUpdate===!0){let ue=v(A),xe=i.get(ne).__webglTexture;t.bindTexture(ue,xe),M(ue),t.unbindTexture()}}}let Yn=[];function It(A){if(A.samples>0){if(ye(A)===!1){let S=A.textures,G=A.width,re=A.height,ne=n.COLOR_BUFFER_BIT,ue=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),K=S.length>1;if(K)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);let L=i.get(S[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,G,re,0,0,G,re,ne,n.NEAREST),c===!0&&(Yn.length=0,Yn.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Yn.push(ue),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Yn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);let L=i.get(S[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Pt(A){return Math.min(s.maxSamples,A.samples)}function ye(A){let S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ke(A,S){let G=A.colorSpace,re=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ia&&G!==Wi&&(ot.getTransfer(G)===_t?(re!==kn||ne!==Cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",G)),S}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ye,this.resetTextureUnits=ie,this.getTextureUnits=se,this.setTextureUnits=Pe,this.setTexture2D=Se,this.setTexture2DArray=Re,this.setTexture3D=Be,this.setTextureCube=be,this.rebindTextures=qn,this.setupRenderTarget=$n,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Xn,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ye,this.dispose=$}function Ny(n,e){function t(i,s=Wi){let r,a=ot.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Oh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nh)return n.BYTE;if(i===Uh)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===yc)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===zh)return n.ALPHA;if(i===Bh)return n.RGB;if(i===kn)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Sc)return n.RED;if(i===bc)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===Ec)return n.RG_INTEGER;if(i===Tc)return n.RGBA_INTEGER;if(i===Ia||i===Pa||i===La||i===Da)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Ac||i===Rc||i===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Pc||i===Lc||i===Dc||i===Nc||i===Na||i===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===Pc)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dc)return r.COMPRESSED_R11_EAC;if(i===Nc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===Uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fc||i===Oc||i===zc||i===Bc||i===kc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===qc||i===$c||i===Yc||i===Zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jc||i===Kc||i===jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qc||i===el||i===Ua||i===tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
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

}`,cu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Si({vertexShader:Uy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends vi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,x=null,y=typeof XRWebGLBinding<"u",p=new cu,f={},g=t.getContextAttributes(),E=null,M=null,v=[],w=[],_=new He,T=null,F=null,I=new yn;I.viewport=new Lt;let O=new yn;O.viewport=new Lt;let B=[I,O],X=new fc,N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Se=v[ee];return Se===void 0&&(Se=new Tr,v[ee]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ee){let Se=v[ee];return Se===void 0&&(Se=new Tr,v[ee]=Se),Se.getGripSpace()},this.getHand=function(ee){let Se=v[ee];return Se===void 0&&(Se=new Tr,v[ee]=Se),Se.getHandSpace()};function J(ee){let Se=w.indexOf(ee.inputSource);if(Se===-1)return;let Re=v[Se];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,l||a),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<v.length;ee++){let Se=w[ee];Se!==null&&(w[ee]=null,v[ee].disconnect(Se))}N=null,$=null,p.reset();for(let ee in f)delete f[ee];if(e.setRenderTarget(E),m=null,u=null,d=null,s=null,M=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),F!==null){let ee=F.camera;ee.fov=F.fov,ee.zoom=F.zoom,ee.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Be=null,be=null;g.depth&&(be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=g.stencil?Vi:Bi,Be=g.stencil?Vs:oi);let Je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Fn(u.textureWidth,u.textureHeight,{format:kn,type:Cn,depthTexture:new Hi(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Fn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(ee){for(let Se=0;Se<ee.removed.length;Se++){let Re=ee.removed[Se],Be=w.indexOf(Re);Be>=0&&(w[Be]=null,v[Be].disconnect(Re))}for(let Se=0;Se<ee.added.length;Se++){let Re=ee.added[Se],Be=w.indexOf(Re);if(Be===-1){for(let Je=0;Je<v.length;Je++)if(Je>=w.length){w.push(Re),Be=Je;break}else if(w[Je]===null){w[Je]=Re,Be=Je;break}if(Be===-1)break}let be=v[Be];be&&be.connect(Re)}}function Z(ee,Se){Se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let Se=ee.near,Re=ee.far;p.texture!==null&&(p.depthNear>0&&(Se=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),X.near=O.near=I.near=Se,X.far=O.far=I.far=Re,(N!==X.near||$!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,$=X.far),X.layers.mask=ee.layers.mask|6,I.layers.mask=X.layers.mask&-5,O.layers.mask=X.layers.mask&-3;let Be=ee.parent,be=X.cameras;Z(X,Be);for(let Je=0;Je<be.length;Je++)Z(be[Je],Be);X.projectionMatrix.copy(I.projectionMatrix),X.projectionMatrixInverse.copy(I.projectionMatrixInverse),F===null&&ee.isPerspectiveCamera&&(F={camera:ee,fov:ee.fov,zoom:ee.zoom}),ie(ee,X,Be)};function ie(ee,Se,Re){Re===null?ee.matrix.copy(Se.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Se.projectionMatrix),ee.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=qo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(ee){c=ee,u!==null&&(u.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(ee){return f[ee]};let se=null;function Pe(ee,Se){if(h=Se.getViewerPose(l||a),x=Se,h!==null){let Re=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Be=!1;Re.length!==X.cameras.length&&(X.cameras.length=0,Be=!0);for(let Ge=0;Ge<Re.length;Ge++){let yt=Re[Ge],Et=null;if(m!==null)Et=m.getViewport(yt);else{let tn=d.getViewSubImage(u,yt);Et=tn.viewport,Ge===0&&(e.setRenderTargetTextures(M,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(M))}let st=B[Ge];st===void 0&&(st=new yn,st.layers.enable(Ge),st.viewport=new Lt,B[Ge]=st),st.matrix.fromArray(yt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(yt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Et.x,Et.y,Et.width,Et.height),Ge===0&&(X.matrix.copy(st.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Be===!0&&X.cameras.push(st)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ge=d.getDepthInformation(Re[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,s.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<Re.length;Ge++){let yt=Re[Ge].camera;if(yt){let Et=f[yt];Et||(Et=new xa,f[yt]=Et);let st=d.getCameraImage(yt);Et.sourceTexture=st}}}}for(let Re=0;Re<v.length;Re++){let Be=w[Re],be=v[Re];Be!==null&&be!==void 0&&be.update(Be,Se,l||a)}se&&se(ee,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),x=null}let Ye=new sp;Ye.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}},Oy=new ut,pp=new qe;pp.set(-1,0,0,0,1,0,0,0,1);function zy(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Xh(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,g,E,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,g,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Sn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Sn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g=e.get(f),E=g.envMap,M=g.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pp),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,g,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function By(n,e,t,i){let s={},r={};function a(g,E){let M=E.program;i.uniformBlockBinding(g,M,s[g.id])}function o(g,E){let M=s[g.id];M===void 0&&(x(g),M=c(g),s[g.id]=M,g.addEventListener("dispose",p));let v=E.program;i.updateUBOMapping(g,v);let w=e.render.frame;r[g.id]!==w&&(l(g),r[g.id]=w)}function c(g){let E=n.createBuffer(),M=g.__size,v=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,v),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function l(g){let E=s[g.id],M=g.uniforms,v=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,_=M.length;w<_;w++){let T=M[w];if(Array.isArray(T))for(let F=0,I=T.length;F<I;F++)h(T[F],w,F,v);else h(T,w,0,v)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,E,M,v){if(u(g,E,M,v)===!0){let w=g.__offset,_=g.value;if(Array.isArray(_)){let T=0;for(let F=0;F<_.length;F++){let I=_[F],O=y(I,!0);d(I,g.__data,T),T+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,g.__data)}}function d(g,E,M){typeof g=="number"||typeof g=="boolean"?E[M]=g:g.isMatrix3?(E[M]=g.elements[0],E[M+1]=g.elements[1],E[M+2]=g.elements[2],E[M+3]=0,E[M+4]=g.elements[3],E[M+5]=g.elements[4],E[M+6]=g.elements[5],E[M+7]=0,E[M+8]=g.elements[6],E[M+9]=g.elements[7],E[M+10]=g.elements[8],E[M+11]=0):ArrayBuffer.isView(g)?E.set(g.subarray(0,E.length-M),M):g.toArray(E,M)}function u(g,E,M,v){let w=g.value,_=E+"_"+M;if(Array.isArray(w)){v[_]===void 0&&(v[_]=[]);let T=v[_],F=!1;for(let I=0;I<w.length;I++)m(w[I],T,I)===!0&&(F=!0);return F}return m(w,v,_)}function m(g,E,M){if(E[M]===void 0)return typeof g=="number"||typeof g=="boolean"?E[M]=g:ArrayBuffer.isView(g)?E[M]=g.slice():E[M]=g.clone(),!0;{let v=E[M];if(typeof g=="number"||typeof g=="boolean"){if(v!==g)return E[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(v.equals(g)===!1)return v.copy(g),!0}}return!1}function x(g){let E=g.uniforms,M=0,v=16;for(let _=0,T=E.length;_<T;_++){let F=Array.isArray(E[_])?E[_]:[E[_]];for(let I=0,O=F.length;I<O;I++){let B=F[I],X=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(E[_])||Array.isArray(B.value),$=M;for(let q=0,oe=X.length;q<oe;q++){let Z=X[q],ie=y(Z,N),se=M%v,Pe=se%ie.boundary,Ye=se+Pe;M+=Pe,Ye!==0&&v-Ye<ie.storage&&(M+=v-Ye),q===0&&($=M),M+=ie.storage}let J=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new J((M-$)/Float32Array.BYTES_PER_ELEMENT),B.__offset=$}}let w=M%v;return w>0&&(M+=v-w),g.__size=M,g.__cache={},this}function y(g,E){let M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=16,M.storage=48):g.isMatrix4?(M.boundary=16,M.storage=64):g.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):We("WebGLRenderer: Unsupported uniform value type.",g),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(g){let E=g.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let g in s)n.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:f}}var ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Hy(){return Ei===null&&(Ei=new Fs(ky,16,16,xs,ci),Ei.name="DFG_LUT",Ei.minFilter=vn,Ei.magFilter=vn,Ei.wrapS=yi,Ei.wrapT=yi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var ol=class{constructor(e={}){let{canvas:t=Tf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let y=m,p=new Set([Tc,Ec,bc]),f=new Set([Cn,oi,Pr,Vs,vc,Mc]),g=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,w=null,_=[],T=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,B=null,X=null,N=null,$=null;this._outputColorSpace=_n;let J=0,q=0,oe=null,Z=-1,ie=null,se=new Lt,Pe=new Lt,Ye=null,ee=new Xe(0),Se=0,Re=t.width,Be=t.height,be=1,Je=null,zt=null,Ge=new Lt(0,0,Re,Be),yt=new Lt(0,0,Re,Be),Et=!1,st=new cs,tn=new Ko,Vt=!1,wn=!1,Nt=new ut,xi=new D,Jt=new Lt,Xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qn=!1;function $n(){return oe===null?be:1}let z=i;function Yn(b,U){return t.getContext(b,U)}let It,Pt,ye,Wt,ke,$e,A,S,G,re,ne,ue,xe,K,j,pe,L,te,Y,me,le,de,Ne;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){let U="webgl2";if(z=Yn(U,b),z===null)throw Yn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(b){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ve("WebGLRenderer: "+b.message),b}function Qe(){It=new jx(z),It.init(),le=new Ny(z,It),Pt=new Hx(z,It,e,le),ye=new Ly(z,It),Pt.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),X=z.createFramebuffer(),N=z.createFramebuffer(),$=z.createFramebuffer(),Wt=new t_(z),ke=new _y,$e=new Dy(z,It,ye,ke,Pt,le,Wt),A=new Kx(I),S=new i0(z),de=new Bx(z,S),G=new Qx(z,S,Wt,de),re=new i_(z,G,S,de,Wt),te=new n_(z,Pt,$e),j=new Gx(ke),ne=new xy(I,A,It,Pt,de,j),ue=new zy(I,ke),xe=new vy,K=new wy(It),L=new zx(I,A,ye,re,x,c),pe=new Py(I,re,Pt),Ne=new By(z,Wt,Pt,ye),Y=new kx(z,It,Wt),me=new e_(z,It,Wt),Wt.programs=ne.programs,I.capabilities=Pt,I.extensions=It,I.properties=ke,I.renderLists=xe,I.shadowMap=pe,I.state=ye,I.info=Wt}y!==Cn&&(F=new r_(y,t.width,t.height,o,s,r));let ce=new lu(I,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=It.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=It.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(Re,Be,!1))},this.getSize=function(b){return b.set(Re,Be)},this.setSize=function(b,U,W=!0){if(ce.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=b,Be=U,t.width=Math.floor(b*be),t.height=Math.floor(U*be),W===!0&&(t.style.width=b+"px",t.style.height=U+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Re*be,Be*be).floor()},this.setDrawingBufferSize=function(b,U,W){Re=b,Be=U,be=W,t.width=Math.floor(b*W),t.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(y===Cn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ge)},this.setViewport=function(b,U,W,k){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,U,W,k),ye.viewport(se.copy(Ge).multiplyScalar($n()).round())},this.getScissor=function(b){return b.copy(yt)},this.setScissor=function(b,U,W,k){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,U,W,k),ye.scissor(Pe.copy(yt).multiplyScalar($n()).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(b){ye.setScissorTest(Et=b)},this.setOpaqueSort=function(b){Je=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let k=0;if(b){let V=!1;if(oe!==null){let _e=oe.texture.format;V=p.has(_e)}if(V){let _e=oe.texture.type,Ae=f.has(_e),ge=L.getClearColor(),Ee=L.getClearAlpha(),Le=ge.r,Ze=ge.g,rt=ge.b;Ae?(g[0]=Le,g[1]=Ze,g[2]=rt,g[3]=Ee,z.clearBufferuiv(z.COLOR,0,g)):(E[0]=Le,E[1]=Ze,E[2]=rt,E[3]=Ee,z.clearBufferiv(z.COLOR,0,E))}else k|=z.COLOR_BUFFER_BIT}U&&(k|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),L.dispose(),xe.dispose(),K.dispose(),$e.dispose(),ke.dispose(),A.dispose(),re.dispose(),G.dispose(),de.dispose(),Ne.dispose(),ne.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ad),ce.removeEventListener("sessionend",od),Cs.stop()};function Fe(b){b.preventDefault(),aa("WebGLRenderer: Context Lost."),O=!0}function je(){aa("WebGLRenderer: Context Restored."),O=!1;let b=Wt.autoReset,U=pe.enabled,W=pe.autoUpdate,k=pe.needsUpdate,V=pe.type;Qe(),Wt.autoReset=b,pe.enabled=U,pe.autoUpdate=W,pe.needsUpdate=k,pe.type=V}function ve(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){let U=b.target;U.removeEventListener("dispose",vt),Kt(U)}function Kt(b){Ki(b),ke.remove(b)}function Ki(b){let U=ke.get(b).programs;U!==void 0&&(U.forEach(function(W){ne.releaseProgram(W)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,W,k,V,_e){U===null&&(U=Xn);let Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=xm(b,U,W,k,V);ye.setMaterial(k,Ae);let Ee=W.index,Le=1;if(k.wireframe===!0){if(Ee=G.getWireframeAttribute(W),Ee===void 0)return;Le=2}let Ze=W.drawRange,rt=W.attributes.position,Ce=Ze.start*Le,at=(Ze.start+Ze.count)*Le;_e!==null&&(Ce=Math.max(Ce,_e.start*Le),at=Math.min(at,(_e.start+_e.count)*Le)),Ee!==null?(Ce=Math.max(Ce,0),at=Math.min(at,Ee.count)):rt!=null&&(Ce=Math.max(Ce,0),at=Math.min(at,rt.count));let Bt=at-Ce;if(Bt<0||Bt===1/0)return;de.setup(V,k,ge,W,Ee);let Rt,Tt=Y;if(Ee!==null&&(Rt=S.get(Ee),Tt=me,Tt.setIndex(Rt)),V.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*$n()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(V.isLine){let on=k.linewidth;on===void 0&&(on=1),ye.setLineWidth(on*$n()),V.isLineSegments?Tt.setMode(z.LINES):V.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else V.isPoints?Tt.setMode(z.POINTS):V.isSprite&&Tt.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let on=V._multiDrawStarts,Ie=V._multiDrawCounts,gn=V._multiDrawCount,gt=Ee?S.get(Ee).bytesPerElement:1,Is=ke.get(k).currentProgram.getUniforms();for(let cn=0;cn<gn;cn++)Is.setValue(z,"_gl_DrawID",cn),Tt.render(on[cn]/gt,Ie[cn])}else if(V.isInstancedMesh)Tt.renderInstances(Ce,Bt,V.count);else if(W.isInstancedBufferGeometry){let on=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ie=Math.min(W.instanceCount,on);Tt.renderInstances(Ce,Bt,Ie)}else Tt.render(Ce,Bt)};function rd(b,U,W,k){B!==null&&b.isNodeMaterial&&B.setObject(k,b),Vt===!0&&j.setState(b,W,!1),b.transparent===!0&&b.side===Rn&&b.forceSinglePass===!1?(b.side=Sn,b.needsUpdate=!0,Xr(b,U,k),b.side=gs,b.needsUpdate=!0,Xr(b,U,k),b.side=Rn):Xr(b,U,k)}this.compile=function(b,U,W=null){W===null&&(W=b),B!==null&&B.renderStart(b,U,W),w=K.get(W),w.init(U),T.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),wn=this.localClippingEnabled,Vt=j.init(this.clippingPlanes,wn),Vt===!0&&j.setGlobalState(this.clippingPlanes,U),B!==null&&pe.render(w.state.shadowsArray,W,U);let k=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _e=V.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){let ge=_e[Ae];rd(ge,W,U,V),k.add(ge)}else rd(_e,W,U,V),k.add(_e)}),w=T.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(b,U,W=null){let k=this.compile(b,U,W);return new Promise(V=>{function _e(){if(k.forEach(function(Ae){let Ee=ke.get(Ae).currentProgram;(Ee===void 0||Ee.isReady())&&k.delete(Ae)}),k.size===0){V(b);return}setTimeout(_e,10)}It.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let kl=null;function mm(b){kl&&kl(b)}function ad(){Cs.stop()}function od(){Cs.start()}let Cs=new sp;Cs.setAnimationLoop(mm),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(b){kl=b,ce.setAnimationLoop(b),b===null?Cs.stop():Cs.start()},ce.addEventListener("sessionstart",ad),ce.addEventListener("sessionend",od),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(b,U);let W=ce.enabled===!0&&ce.isPresenting===!0,k=F!==null&&(oe===null||W)&&F.begin(I,oe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,U,oe),w=K.get(b,T.length),w.init(U),w.state.textureUnits=$e.getTextureUnits(),T.push(w),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?tn.setFromArrayCamera(U):st.setFromProjectionMatrix(Nt,Jn,U.reversedDepth),wn=this.localClippingEnabled,Vt=j.init(this.clippingPlanes,wn),v=xe.get(b,_.length),v.init(),_.push(v),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&Hl(Ae,U,-1/0,I.sortObjects)}Hl(b,U,0,I.sortObjects),v.finish(),B!==null&&B.updateLights(w.state.lightsArray),I.sortObjects===!0&&v.sort(Je,zt),qn=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,qn&&L.addToRenderList(v,b),this.info.autoReset===!0&&this.info.reset(),Vt===!0&&j.beginShadows();let V=w.state.shadowsArray;if(pe.render(V,b,U),Vt===!0&&j.endShadows(),(k&&F.hasRenderPass())===!1){let Ae=v.opaque,ge=v.transmissive;if(w.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(ge.length>0)for(let Le=0,Ze=Ee.length;Le<Ze;Le++){let rt=Ee[Le];ld(Ae,ge,b,rt)}qn&&L.render(b);for(let Le=0,Ze=Ee.length;Le<Ze;Le++){let rt=Ee[Le];cd(v,b,rt,rt.viewport)}}else ge.length>0&&ld(Ae,ge,b,U),qn&&L.render(b),cd(v,b,U)}oe!==null&&q===0&&($e.updateMultisampleRenderTarget(oe),$e.updateRenderTargetMipmap(oe)),k&&F.end(I),b.isScene===!0&&b.onAfterRender(I,b,U),de.resetDefaultState(),Z=-1,ie=null,T.pop(),T.length>0?(w=T[T.length-1],$e.setTextureUnits(w.state.textureUnits),Vt===!0&&j.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,B!==null&&B.renderEnd()};function Hl(b,U,W,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ae=U.isArrayCamera?tn:st;if(!b.frustumCulled||b.intersectsFrustum(Ae)){k&&Jt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);let ge=re.update(b),Ee=b.material;Ee.visible&&v.push(b,ge,Ee,W,Jt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Ae=U.isArrayCamera?tn:st;if(!b.frustumCulled||b.intersectsFrustum(Ae)){let ge=re.update(b),Ee=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Jt.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Jt.copy(ge.boundingSphere.center)),Jt.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ee)){let Le=ge.groups;for(let Ze=0,rt=Le.length;Ze<rt;Ze++){let Ce=Le[Ze],at=Ee[Ce.materialIndex];at&&at.visible&&v.push(b,ge,at,W,Jt.z,Ce,U)}}else Ee.visible&&v.push(b,ge,Ee,W,Jt.z,null,U)}}}let _e=b.children;for(let Ae=0,ge=_e.length;Ae<ge;Ae++)Hl(_e[Ae],U,W,k)}function cd(b,U,W,k){let{opaque:V,transmissive:_e,transparent:Ae}=b;w.setupLightsView(W),Vt===!0&&j.setGlobalState(I.clippingPlanes,W),k&&ye.viewport(se.copy(k)),V.length>0&&oo(V,U,W),_e.length>0&&oo(_e,U,W),Ae.length>0&&oo(Ae,U,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ld(b,U,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ce=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Fn(1,1,{generateMipmaps:!0,type:Ce?ci:Cn,minFilter:Gi,samples:Math.max(4,Pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let _e=w.state.transmissionRenderTarget[k.id],Ae=k.viewport||se;_e.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let ge=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(_e),I.getClearColor(ee),Se=I.getClearAlpha(),Se<1&&I.setClearColor(16777215,.5),I.clear(),qn&&L.render(W);let Ze=I.toneMapping;I.toneMapping=bi;let rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Vt===!0&&j.setGlobalState(I.clippingPlanes,k),oo(b,W,k),$e.updateMultisampleRenderTarget(_e),$e.updateRenderTargetMipmap(_e),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let at=0,Bt=U.length;at<Bt;at++){let Rt=U[at],{object:Tt,geometry:on,material:Ie,group:gn}=Rt;if(Ie.side===Rn&&Tt.layers.test(k.layers)){let gt=Ie.side;Ie.side=Sn,Ie.needsUpdate=!0,hd(Tt,W,k,on,Ie,gn),Ie.side=gt,Ie.needsUpdate=!0,Ce=!0}}Ce===!0&&($e.updateMultisampleRenderTarget(_e),$e.updateRenderTargetMipmap(_e))}I.setRenderTarget(ge,Ee,Le),I.setClearColor(ee,Se),rt!==void 0&&(k.viewport=rt),I.toneMapping=Ze}function oo(b,U,W){let k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,_e=b.length;V<_e;V++){let Ae=b[V],{object:ge,geometry:Ee,group:Le}=Ae,Ze=Ae.material;Ze.allowOverride===!0&&k!==null&&(Ze=k),ge.layers.test(W.layers)&&hd(ge,U,W,Ee,Ze,Le)}}function hd(b,U,W,k,V,_e){B!==null&&V.isNodeMaterial&&B.setObject(b,V),b.onBeforeRender(I,U,W,k,V,_e),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,U,W,k,b,_e),V.transparent===!0&&V.side===Rn&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,I.renderBufferDirect(W,U,k,V,b,_e),V.side=gs,V.needsUpdate=!0,I.renderBufferDirect(W,U,k,V,b,_e),V.side=Rn):I.renderBufferDirect(W,U,k,V,b,_e),b.onAfterRender(I,U,W,k,V,_e)}function ud(b){let U=0;for(let W of b)W.texture!==null&&U++;return U}function Xr(b,U,W){U.isScene!==!0&&(U=Xn);let k=ke.get(b),V=w.state.lights,_e=w.state.shadowsArray,Ae=V.state.version,ge=ne.getParameters(b,V.state,_e,U,W,w.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(ge),Le=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Ze),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",vt),Le=new Map,k.programs=Le,k.programVariants=new Map);let rt=Le.get(Ee);if(rt!==void 0){if(k.currentProgram===rt&&k.lightsStateVersion===Ae)return fd(b,ge),rt}else ge.uniforms=ne.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,W,ge),b.onBeforeCompile(ge,I),rt=ne.acquireProgram(ge,Ee),Le.set(Ee,rt),k.uniforms=ge.uniforms;let Ce=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=j.uniform),fd(b,ge),k.needsLights=ym(b),k.lightsStateVersion=Ae,k.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.sunLights.value=V.state.sun,Ce.sunLightShadows.value=V.state.sunShadow,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.sunShadowMatrix.value=V.state.sunShadowMatrix,Ce.sunShadowCascade.value=V.state.sunShadowCascade,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=ud(w.state.lightProbeGridArray),k.currentProgram=rt,k.uniformsList=null,rt}function gm(b,U,W,k,V){let _e=ke.get(b),Ae=_e.currentProgram.id+","+k+","+V,ge=_e.programVariants.get(Ae);return ge===void 0?(ge=Xr(b,U,W),_e.programVariants.set(Ae,ge)):(_e.currentProgram=ge,_e.uniformsList=null,_e.outputColorSpace=k,_e.toneMapping=V),ge}function dd(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Lr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function fd(b,U){let W=ke.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function xm(b,U,W,k,V){U.isScene!==!0&&(U=Xn),$e.resetTextureUnits();let _e=U.fog,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ge=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ot.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Le=A.get(k.envMap||Ae,Ee),Ze=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Bt=!!W.morphAttributes.color,Rt=bi;k.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Rt=I.toneMapping);let Tt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,on=Tt!==void 0?Tt.length:0,Ie=ke.get(k),gn=w.state.lights;if(Vt===!0&&(wn===!0||b!==ie)){let Ut=b===ie&&k.id===Z;j.setState(k,b,Ut)}let gt=!1,Is=!1;k.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==gn.state.version||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==Le||k.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==j.numPlanes||Ie.numIntersection!==j.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==rt||Ie.morphTargets!==Ce||Ie.morphNormals!==at||Ie.morphColors!==Bt||Ie.morphTargetsCount!==on||Ie.numLightProbeGrids!==ud(w.state.lightProbeGridArray)?gt=!0:(Ie.outputColorSpace!==ge||Ie.toneMapping!==Rt)&&(Is=!0):(gt=!0,Ie.__version=k.version);let cn=Ie.currentProgram;(gt===!0||Is===!0)&&(cn=Is===!0?gm(k,U,V,ge,Rt):Xr(k,U,V),B&&k.isNodeMaterial&&B.onUpdateProgram(k,cn,Ie));let co=!1,ji=!1,Ps=!1,ht=cn.getUniforms(),nn=Ie.uniforms;if(ye.useProgram(cn.program)&&(co=!0,ji=!0,Ps=!0),k.id!==Z&&(Z=k.id,ji=!0),co||ie!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(z,"projectionMatrix",b.projectionMatrix),ht.setValue(z,"viewMatrix",b.matrixWorldInverse);let jt=ht.map.cameraPosition;jt!==void 0&&jt.setValue(z,xi.setFromMatrixPosition(b.matrixWorld)),Pt.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),ie!==b&&(ie=b,ji=!0,Ps=!0)}if(Ie.needsLights&&(gn.state.sunShadowMap.length>0&&ht.setValue(z,"sunShadowMap",gn.state.sunShadowMap,$e),gn.state.directionalShadowMap.length>0&&ht.setValue(z,"directionalShadowMap",gn.state.directionalShadowMap,$e),gn.state.spotShadowMap.length>0&&ht.setValue(z,"spotShadowMap",gn.state.spotShadowMap,$e),gn.state.pointShadowMap.length>0&&ht.setValue(z,"pointShadowMap",gn.state.pointShadowMap,$e)),V.isSkinnedMesh){ht.setOptional(z,V,"bindMatrix"),ht.setOptional(z,V,"bindMatrixInverse");let Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ht.setValue(z,"boneTexture",Ut.boneTexture,$e))}V.isBatchedMesh&&(ht.setOptional(z,V,"batchingTexture"),ht.setValue(z,"batchingTexture",V._matricesTexture,$e),ht.setOptional(z,V,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",V._indirectTexture,$e),ht.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",V._colorsTexture,$e));let ni=W.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&te.update(V,W,cn),(ji||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,ht.setValue(z,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Hy()),ji){if(ht.setValue(z,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&_m(nn,Ps),_e&&k.fog===!0&&ue.refreshFogUniforms(nn,_e),ue.refreshMaterialUniforms(nn,k,be,Be,w.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Ut=M,jt=0;for(let Pi of w.state.lightProbeGridArray)Pi.texture!==null&&(Ut.textures[jt]=Pi.texture,Ut.min[jt]=Pi.boundingBox.min,Ut.max[jt]=Pi.boundingBox.max,Ut.resolution[jt]=Pi.resolution,jt++);for(let Pi in Ut)Ut[Pi].length=jt;nn.probesSH.value=Ut.textures,nn.probesMin.value=Ut.min,nn.probesMax.value=Ut.max,nn.probesResolution.value=Ut.resolution}Lr.upload(z,dd(Ie),nn,$e)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Lr.upload(z,dd(Ie),nn,$e),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(z,"center",V.center),ht.setValue(z,"modelViewMatrix",V.modelViewMatrix),ht.setValue(z,"normalMatrix",V.normalMatrix),ht.setValue(z,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Ut=k.uniformsGroups;for(let jt=0,Pi=Ut.length;jt<Pi;jt++){let md=Ut[jt];Ne.update(md,cn),Ne.bind(md,cn)}}return cn}function _m(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ym(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(b,U,W){let k=ke.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ke.get(b.texture).__webglTexture=U,ke.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let W=ke.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,W=0){oe=b,J=U,q=W;let k=null,V=!1,_e=!1;if(b){let ge=ke.get(b);if(ge.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(z.FRAMEBUFFER,ge.__webglFramebuffer),se.copy(b.viewport),Pe.copy(b.scissor),Ye=b.scissorTest,ye.viewport(se),ye.scissor(Pe),ye.setScissorTest(Ye),Z=-1;return}else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(b);else if(ge.__hasExternalTextures)$e.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ze=b.depthTexture;if(ge.__boundDepthTexture!==Ze){if(Ze!==null&&ke.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);let Le=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?k=Le[U][W]:k=Le[U],V=!0):b.samples>0&&$e.useMultisampledRTT(b)===!1?k=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[W]:k=Le,se.copy(b.viewport),Pe.copy(b.scissor),Ye=b.scissorTest}else se.copy(Ge).multiplyScalar(be).floor(),Pe.copy(yt).multiplyScalar(be).floor(),Ye=Et;if(W!==0&&(k=X),ye.bindFramebuffer(z.FRAMEBUFFER,k)&&ye.drawBuffers(b,k),ye.viewport(se),ye.scissor(Pe),ye.setScissorTest(Ye),V){let ge=ke.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,W)}else if(_e){let ge=U;for(let Ee=0;Ee<b.textures.length;Ee++){let Le=ke.get(b.textures[Ee]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,W,ge)}}else if(b!==null&&W!==0){let ge=ke.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,W)}Z=-1};function pd(b){let U=ke.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Pt.textureFormatReadable(b.format),U.__typeReadable=Pt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,W,k,V,_e,Ae,ge=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ee=Ee[Ae],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ye.bindFramebuffer(z.FRAMEBUFFER,Ee);try{let Le=b.textures[ge],Ze=Le.format,rt=Le.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ce=pd(Le);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&W>=0&&W<=b.height-V&&z.readPixels(U,W,k,V,le.convert(Ze),le.convert(rt),_e)}finally{let Le=oe!==null?ke.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,k,V,_e,Ae,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ee=Ee[Ae],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=b.width-k&&W>=0&&W<=b.height-V){ye.bindFramebuffer(z.FRAMEBUFFER,Ee);let Le=b.textures[ge],Ze=Le.format,rt=Le.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ce=pd(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,at),z.bufferData(z.PIXEL_PACK_BUFFER,_e.byteLength,z.STREAM_READ),z.readPixels(U,W,k,V,le.convert(Ze),le.convert(rt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Bt=oe!==null?ke.get(oe).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Bt);let Rt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Af(z,Rt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,at),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_e),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(at),z.deleteSync(Rt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){let k=Math.pow(2,-W),V=Math.floor(b.image.width*k),_e=Math.floor(b.image.height*k),Ae=U!==null?U.x:0,ge=U!==null?U.y:0;$e.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,Ae,ge,V,_e),ye.unbindTexture()},this.copyTextureToTexture=function(b,U,W=null,k=null,V=0,_e=0){let Ae,ge,Ee,Le,Ze,rt,Ce,at,Bt,Rt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(W!==null)Ae=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ze=W.min.y,rt=W.isBox3?W.min.z:0;else{let ht=Math.pow(2,-V);Ae=Math.floor(Rt.width*ht),ge=Math.floor(Rt.height*ht),b.isDataArrayTexture?Ee=Rt.depth:b.isData3DTexture?Ee=Math.floor(Rt.depth*ht):Ee=1,Le=0,Ze=0,rt=0}k!==null?(Ce=k.x,at=k.y,Bt=k.z):(Ce=0,at=0,Bt=0);let Tt=le.convert(U.format),on=le.convert(U.type),Ie;U.isData3DTexture?($e.setTexture3D(U,0),Ie=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($e.setTexture2DArray(U,0),Ie=z.TEXTURE_2D_ARRAY):($e.setTexture2D(U,0),Ie=z.TEXTURE_2D),ye.activeTexture(z.TEXTURE0),ye.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),ye.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ye.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let gn=ye.getParameter(z.UNPACK_ROW_LENGTH),gt=ye.getParameter(z.UNPACK_IMAGE_HEIGHT),Is=ye.getParameter(z.UNPACK_SKIP_PIXELS),cn=ye.getParameter(z.UNPACK_SKIP_ROWS),co=ye.getParameter(z.UNPACK_SKIP_IMAGES);ye.pixelStorei(z.UNPACK_ROW_LENGTH,Rt.width),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt.height),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Le),ye.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,rt);let ji=b.isDataArrayTexture||b.isData3DTexture,Ps=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ht=ke.get(b),nn=ke.get(U),ni=ke.get(ht.__renderTarget),Ut=ke.get(nn.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,ni.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let jt=0;jt<Ee;jt++)ji&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(b).__webglTexture,V,rt+jt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,_e,Bt+jt)),z.blitFramebuffer(Le,Ze,Le+Ae,Ze+ge,Ce,at,Ce+Ae,at+ge,z.DEPTH_BUFFER_BIT,z.NEAREST);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||ke.has(b)){let ht=ke.get(b),nn=ke.get(U);ye.bindFramebuffer(z.READ_FRAMEBUFFER,N),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,$);for(let ni=0;ni<Ee;ni++)ji?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.__webglTexture,V,rt+ni):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ht.__webglTexture,V),Ps?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,_e,Bt+ni):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,_e),V!==0?z.blitFramebuffer(Le,Ze,Le+Ae,Ze+ge,Ce,at,Ce+Ae,at+ge,z.COLOR_BUFFER_BIT,z.NEAREST):Ps?z.copyTexSubImage3D(Ie,_e,Ce,at,Bt+ni,Le,Ze,Ae,ge):z.copyTexSubImage2D(Ie,_e,Ce,at,Le,Ze,Ae,ge);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ps?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Ie,_e,Ce,at,Bt,Ae,ge,Ee,Tt,on,Rt.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Ie,_e,Ce,at,Bt,Ae,ge,Ee,Tt,Rt.data):z.texSubImage3D(Ie,_e,Ce,at,Bt,Ae,ge,Ee,Tt,on,Rt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_e,Ce,at,Ae,ge,Tt,on,Rt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_e,Ce,at,Rt.width,Rt.height,Tt,Rt.data):z.texSubImage2D(z.TEXTURE_2D,_e,Ce,at,Ae,ge,Tt,on,Rt);ye.pixelStorei(z.UNPACK_ROW_LENGTH,gn),ye.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt),ye.pixelStorei(z.UNPACK_SKIP_PIXELS,Is),ye.pixelStorei(z.UNPACK_SKIP_ROWS,cn),ye.pixelStorei(z.UNPACK_SKIP_IMAGES,co),_e===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Ie),ye.unbindTexture()},this.initRenderTarget=function(b){ke.get(b).__webglFramebuffer===void 0&&$e.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$e.setTextureCube(b,0):b.isData3DTexture?$e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$e.setTexture2DArray(b,0):$e.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){J=0,q=0,oe=null,ye.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var ze=window,he=n=>document.querySelector(n),Ji=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Pu=[];ze.queueNotice=n=>Pu.push(n);ze.showToast=n=>ku(n);ze.root=loadRoot();var Ue=null,Ur=isMuted(),lt=()=>Ue?stageOf(Ue.pet.day).size:2,mp=0;function ft(n,e=""){let t=he("#pop");t.innerHTML=`<span class="pi">${n}</span>${e?`<span class="ps">${Ji(e)}</span>`:""}`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(mp),mp=setTimeout(()=>t.classList.remove("show"),1300)}var gp=0;function ku(n){let e=he("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(gp),gp=setTimeout(()=>e.classList.remove("show"),2200)}setInterval(()=>{if(!Pu.length||he("#pop").classList.contains("show"))return;let n=Pu.shift();n.startsWith("\u{1F3C5}")?(ft("\u{1F3C5}","\xA1Sticker!"),speak("\xA1Sticker nuevo! "+n.slice(2))):ku(n)},1200);var Nr=null;function xt(n){if(Ur)return;try{Nr=Nr||new(ze.AudioContext||ze.webkitAudioContext)}catch{return}let e={coin:[[990,.05],[1320,.09]],step:[[300,.03]],pop:[[660,.05],[880,.07]],bark:[[520,.06],[380,.1]],quack:[[620,.07],[480,.09]]}[n];if(!e)return;let t=Nr.currentTime;for(let[i,s]of e){let r=Nr.createOscillator(),a=Nr.createGain();r.type="triangle",r.frequency.value=i,a.gain.setValueAtTime(.07,t),a.gain.exponentialRampToValueAtTime(.001,t+s),r.connect(a).connect(Nr.destination),r.start(t),r.stop(t+s+.02),t+=s*.9}}var Hu=he("#c"),xp=new URLSearchParams(location.search),zr=xp.has("lite")||!xp.has("hd")&&(ze.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!ze.matchMedia("(pointer: fine)").matches),Ci=new ol({canvas:Hu,antialias:!zr,powerPreference:zr?"low-power":"default"}),Rp=()=>zr?Math.min(1,Math.sqrt(13e5/(ze.innerWidth*ze.innerHeight))):Math.min(ze.devicePixelRatio,1.5);Ci.setPixelRatio(Rp());Ci.setSize(ze.innerWidth,ze.innerHeight);Ci.shadowMap.enabled=!zr;Ci.shadowMap.type=Bs;var Mt=new yn(42,ze.innerWidth/ze.innerHeight,.1,220);ze.addEventListener("resize",()=>{Mt.aspect=ze.innerWidth/ze.innerHeight,Mt.updateProjectionMatrix(),Ci.setPixelRatio(Rp()),Ci.setSize(ze.innerWidth,ze.innerHeight)});var js=new Fs(new Uint8Array([110,110,110,255,185,185,185,255,255,255,255,255]),3,1,kn);js.minFilter=js.magFilter=Ht;js.needsUpdate=!0;var hu=new Map;function Br(n,e){let t=n+(e?JSON.stringify(e):"");return hu.has(t)||hu.set(t,new ds({color:n,gradientMap:js,...e||{}})),hu.get(t)}function C(n,e,t={}){let i=new St(n,t.mat||Br(e,t.extra));return i.castShadow=t.cast!==!1,i.receiveShadow=!!t.recv,i}var P={sph:(n,e=16,t=12)=>new us(n,e,t),box:(n,e,t)=>new ls(n,e,t),cyl:(n,e,t,i=16)=>new Os(n,e,t,i),cap:(n,e)=>new _a(n,e,4,10),cone:(n,e,t=12)=>new ya(n,e,t)};function Q(n,e,t,i){return n.position.set(e,t,i),n}function mi(n){let e=n>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}var uu=new Map;function Ts(n,e=!1){let t=n+e;if(uu.has(t))return uu.get(t);let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");e&&(s.fillStyle="#ffffff",s.strokeStyle="#c48ad8",s.lineWidth=8,s.beginPath(),s.arc(64,58,50,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(52,104),s.lineTo(64,124),s.lineTo(76,104),s.fill()),s.font=`${e?62:96}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,64,e?62:70);let r=new ma(i);return r.colorSpace=_n,uu.set(t,r),r}function Ii(n,e=1,t=!1){let i=new ua(new wr({map:Ts(n,t),transparent:!0,depthWrite:!1}));return i.scale.set(e,e,e),i}function Gr(n){let e=new ba("#dff1ff","#a6d68a",1.7),t=new wa("#fff4e0",2.3);return t.castShadow=!zr,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60}),t.shadow.bias=-8e-4,n.add(e,t,t.target),{hemi:e,sun:t}}var to=[.55,.68,.82,.95,1.05];function Rl(n){let e=n.look||COATS[n.coat]||COATS.dorado,t=new we,i=new we;t.add(i);let s=C(P.sph(.5,22,16),e.fur);s.scale.set(.85,.75,1.2),s.position.set(0,.78,-.05),i.add(s);let r=C(P.sph(.42),e.light);if(r.scale.set(.72,.58,1),r.position.set(0,.66,0),i.add(r),e.spots)for(let[M,v,w,_]of[[.22,1,-.2,.22],[-.25,.9,.15,.16]]){let T=C(P.sph(_),e.dark);T.scale.set(1,.45,1.2),T.position.set(M,v,w),i.add(T)}let a=[];for(let[M,v]of[[-.22,.32],[.22,.32],[-.22,-.4],[.22,-.4]]){let w=new we;w.position.set(M,.62,v);let _=C(P.cap(.12,.28),e.fur);_.position.y=-.26,w.add(_);let T=C(P.sph(.14,12,8),e.light);T.scale.set(1,.6,1.25),T.position.set(0,-.52,.04),w.add(T),i.add(w),a.push(w)}let o=new we;o.position.set(0,.98,-.6);let c=C(P.cap(.08,.36),e.fur);c.position.y=.22,o.add(c);let l=C(P.sph(.09),e.light);l.position.y=.44,o.add(l),i.add(o);let h=new we;h.position.set(0,1.28,.5),i.add(h);let d=C(P.sph(.43,22,16),e.fur);if(d.scale.set(1,.95,.95),h.add(d),e.spots){let M=C(P.sph(.17),e.dark);M.scale.set(1,1,.5),M.position.set(.17,.1,.3),h.add(M)}let u=C(P.sph(.22),e.light);u.scale.set(1.1,.8,1),u.position.set(0,-.1,.33),h.add(u);let m=C(P.sph(.075),"#2a1d18");m.position.set(0,-.02,.54),h.add(m);let x=C(P.sph(.08),"#ff7c9c");x.scale.set(1,.4,1.3),x.position.set(0,-.22,.45),h.add(x);let y=[];for(let M of[-1,1]){let v=new we;v.position.set(M*.17,.08,.35),v.add(C(P.sph(.08),"#2a1d18",{cast:!1}));let w=new St(P.sph(.028,8,6),new An({color:"#ffffff"}));w.position.set(.025,.035,.06),v.add(w),h.add(v),y.push(v);let _=C(P.sph(.08),"#ff9fb4",{cast:!1});_.scale.set(1,.6,.4),_.position.set(M*.27,-.08,.28),h.add(_)}let p=[];for(let M of[-1,1]){let v=new we;if(v.position.set(M*.3,.26,-.04),v.rotation.z=M*.35,n.ears==="up"){v.position.y=.3,v.rotation.z=-M*.25;let w=C(P.cone(.13,.36,8),e.dark);w.scale.set(1,1,.55),w.position.set(0,.16,0),v.add(w)}else{let w=C(P.sph(.2),e.dark);w.scale.set(.45,1.15,.85),w.position.set(M*.04,-.22,0),v.add(w)}h.add(v),p.push(v)}let f=new we;i.add(f);let g=new Xt;g.position.set(0,1.02,.42),i.add(g);let E={root:t,body:i,legs:a,tail:o,head:h,eyes:y,ears:p,tongue:x,extras:f,collar:g,t:Math.random()*10,blink:2,key:""};return Cp(E,n),E}function Cp(n,e){let t=`${e.day>=8}|${e.acc.worn}`;if(n.key===t)return;if(n.key=t,n.extras.clear(),e.day>=8){let r=C(new dn(.33,.055,8,20),"#ff5c5c");r.position.set(0,1.03,.42),r.rotation.x=1.25,n.extras.add(r);let a=C(P.sph(.07),"#ffd23f");a.position.set(0,.86,.6),n.extras.add(a)}let i=n.head;i.children.filter(r=>r.userData.acc).forEach(r=>i.remove(r));let s=(r,a=i)=>{r.userData.acc=!0,a.add(r)};if(e.acc.worn==="lazo"){for(let r of[-1,1]){let a=C(P.cone(.13,.26,10),"#ff79bf");a.rotation.z=r*Math.PI/2,a.position.set(r*.13,.45,0),s(a)}s(Q(C(P.sph(.07),"#e0489a"),0,.45,0))}if(e.acc.worn==="gorro"){let r=C(P.cone(.32,.5,14),"#ff6b6b");r.position.set(0,.55,-.02),s(r);let a=C(new dn(.31,.07,8,18),"#ffffff");a.rotation.x=Math.PI/2,a.position.set(0,.32,-.02),s(a);let o=C(P.sph(.09),"#ffffff");o.position.set(0,.82,-.02),s(o)}if(e.acc.worn==="gafas")for(let r of[-1,1]){let a=C(new dn(.1,.025,6,16),"#222222");a.position.set(r*.17,.08,.42),s(a);let o=C(P.cyl(.09,.09,.02),"#333344");o.rotation.x=Math.PI/2,o.position.set(r*.17,.08,.43),s(o)}if(e.acc.worn==="panuelo"){let r=C(P.cone(.3,.35,3),"#4f7cff");r.rotation.x=Math.PI,r.position.set(0,.9,.5),n.extras.add(r)}}var Qn=(n,e,t)=>n+(e-n)*t;function Rs(n,e,t){n.t+=e;let i=n.t,s=1-Math.exp(-12*e),r=t.mode==="walk",a=t.mode==="sleep",o=t.mode==="happy"||t.mode==="spin",c=t.mode==="eat",l=a||t.mode==="lie",h=t.mode==="sit"||t.mode==="paw",d=6+(t.speed||0)*2.4,u=r?Math.sin(i*d)*.75:0,m=l?[-1.35,-1.35,1.35,1.35]:h?[0,t.mode==="paw"?-1.5:0,-1.3,-1.3]:[u,-u,-u,u];n.body.rotation.x=Qn(n.body.rotation.x,h?-.42:0,s),n.legs.forEach((g,E)=>{g.rotation.x=Qn(g.rotation.x,m[E],s)});let x=l?-.42:h?-.12:r?Math.abs(Math.sin(i*d))*.06:o?Math.abs(Math.sin(i*9))*.4:0;n.body.position.y=Qn(n.body.position.y,x,o?1:s);let y=1+Math.sin(i*(a?1.6:2.6))*(a?.035:.015);n.body.scale.set(1,y,1),n.tail.rotation.z=Math.sin(i*(o?24:r?15:a?0:5))*(t.sad?.15:.5),n.tail.rotation.x=Qn(n.tail.rotation.x,t.sad||a?.9:-.55,s);let p=c?.55+Math.sin(i*13)*.12:a?.35:t.sad?.25:0;n.head.rotation.x=Qn(n.head.rotation.x,p,s),n.head.rotation.z=Qn(n.head.rotation.z,r||a?0:Math.sin(i*.8)*.12,s),n.head.position.y=Qn(n.head.position.y,l?1.05:1.28,s),n.ears.forEach((g,E)=>{g.rotation.x=r?Math.sin(i*d+E)*.25:o?Math.sin(i*18)*.3:0}),n.tongue.visible=(o||t.mood==="feliz")&&!a,n.blink-=e;let f=1;t.eyesClosed||a?f=.12:n.blink<0&&(f=.12,n.blink<-.13&&(n.blink=2+Math.random()*3)),n.eyes.forEach(g=>{g.scale.y=f})}var Lu={"\u{1F9D2}":{skin:"#f0c090",hair:"#6a4020",style:"short",shirt:"#f0a020",pants:"#3858b8"},"\u{1F467}":{skin:"#f0c090",hair:"#8a4a20",style:"pigtails",shirt:"#f070b0",pants:"#7048b0"},"\u{1F466}":{skin:"#d8a070",hair:"#2a1a10",style:"short",shirt:"#40a0e0",pants:"#2c4070"},"\u{1F469}":{skin:"#f0c8a0",hair:"#c07030",style:"long",shirt:"#50b860",pants:"#3858b8"},"\u{1F468}":{skin:"#c88858",hair:"#2a1a10",style:"short",shirt:"#e05040",pants:"#4c4c58"},"\u{1F9D1}":{skin:"#e0b080",hair:"#503020",style:"short",shirt:"#8060d0",pants:"#384050"},"\u{1F475}":{skin:"#f0c8a0",hair:"#d8d8e0",style:"bun",shirt:"#c060a0",pants:"#6c5878"},"\u{1F474}":{skin:"#e0b088",hair:"#d8d8e0",style:"bald",shirt:"#7c9c58",pants:"#5a4838"},"\u{1F9B8}":{skin:"#f0c090",hair:"#2a1a10",style:"short",shirt:"#3060e0",pants:"#3060e0",cape:"#e03030"},"\u{1F9D1}\u200D\u{1F680}":{skin:"#f0c090",hair:"#6a4020",style:"helmet",shirt:"#f0f0f4",pants:"#c8ccd8"}},Vy=Object.keys(Lu);function Wy(n){let e=Lu[n]||Lu["\u{1F9D2}"],t=new we,i=new we;t.add(i);let s=[],r=[],a=null;for(let h of[-1,1]){let d=new we;d.position.set(h*.13,.72,0),d.add(Q(C(P.cap(.09,.42),e.pants),0,-.3,0)),d.add(Q(C(P.box(.2,.12,.3),"#3a2a2a"),0,-.66,.05)),i.add(d),s.push(d)}if(i.add(Q(C(P.cap(.25,.32),e.shirt),0,1.02,0)),e.cape){let h=C(P.box(.55,.85,.05),e.cape);h.position.set(0,.98,-.27),h.rotation.x=.12,i.add(h)}for(let h of[-1,1]){let d=new we;d.position.set(h*.33,1.28,0),d.rotation.z=h*.12,d.add(Q(C(P.cap(.075,.32),e.shirt),0,-.22,0));let u=Q(C(P.sph(.085,10,8),e.skin),0,-.46,0);d.add(u),i.add(d),r.push(d),h>0&&(a=u)}let o=new we;o.position.y=1.7,i.add(o),o.add(C(P.sph(.3,20,16),e.skin));for(let h of[-1,1])o.add(Q(C(P.sph(.045,8,6),"#2a1d18",{cast:!1}),h*.1,.03,.27)),o.add(Q(C(P.sph(.05,8,6),"#ff9fb4",{cast:!1}),h*.17,-.06,.24));let c=C(new dn(.07,.018,6,12,Math.PI),"#c0505a",{cast:!1});c.rotation.z=Math.PI,c.position.set(0,-.08,.28),o.add(c);let l=(h=.32)=>C(new us(h,18,10,0,Math.PI*2,0,Math.PI/2.1),e.hair);if(e.style==="helmet"){o.add(Q(l(.31),0,.04,-.02)),o.add(new St(P.sph(.42,20,16),new An({color:"#cfefff",transparent:!0,opacity:.28,depthWrite:!1})));let h=C(new dn(.33,.06,8,20),"#e0e4ee");h.rotation.x=Math.PI/2,h.position.y=-.3,o.add(h)}else if(e.style==="bald")for(let h of[-1,1])o.add(Q(C(P.sph(.12,10,8),e.hair),h*.26,.02,-.06));else{if(o.add(Q(l(),0,.03,-.03)),e.style==="long"&&o.add(Q(C(P.box(.56,.55,.14),e.hair),0,-.2,-.2)),e.style==="pigtails")for(let h of[-1,1])o.add(Q(C(P.sph(.12,10,8),e.hair),h*.33,-.05,-.05));e.style==="bun"&&o.add(Q(C(P.sph(.14,10,8),e.hair),0,.3,-.12))}return t.scale.setScalar(.85),{root:t,body:i,legs:s,arms:r,head:o,hand:a,t:0,mode:"idle",modeT:0,leash:!1}}function Cl(n,e,t,i){n.t+=e;let s=n.t,r=1-Math.exp(-12*e);n.modeT>0&&(n.modeT-=e,n.modeT<=0&&(n.mode="idle"));let a=5+i*1.6,o=t?Math.sin(s*a)*.7:0,c=n.mode==="cheer",l=n.mode==="throw";n.legs[0].rotation.x=Qn(n.legs[0].rotation.x,o,r),n.legs[1].rotation.x=Qn(n.legs[1].rotation.x,-o,r),n.arms[0].rotation.x=Qn(n.arms[0].rotation.x,c?-2.8:-o,r),n.arms[1].rotation.x=l?-2.6:Qn(n.arms[1].rotation.x,c?-2.8:n.leash?-.55:o,r),n.body.position.y=t?Math.abs(Math.sin(s*a))*.06:c?Math.abs(Math.sin(s*10))*.2:Math.sin(s*2)*.01,n.head.rotation.z=t?0:Math.sin(s*.9)*.06}var _l=16,qs=new os(P.cyl(.03,.03,1,5),Br("#e0403c"),_l);qs.frustumCulled=!1;qs.visible=!1;var hl=new D,ul=new D,du=new D,fu=new D,pu=new D,mu=new D,Xy=new D(0,1,0),_p=new Un,yp=new ut,vp=new D;function Il(n,e){if(qs.parent!==n&&n.add(qs),qs.visible=!!e,!e)return;Ke.root.updateMatrixWorld(!0),Te.root.updateMatrixWorld(!0),Ke.hand.getWorldPosition(hl),Te.collar.getWorldPosition(ul);let t=hl.distanceTo(ul);du.addVectors(hl,ul).multiplyScalar(.5),du.y-=Math.max(0,1.9-t)*.35+.05;let i=(s,r)=>r.set(0,0,0).addScaledVector(hl,(1-s)*(1-s)).addScaledVector(du,2*(1-s)*s).addScaledVector(ul,s*s);for(let s=0;s<_l;s++){i(s/_l,fu),i((s+1)/_l,pu),mu.subVectors(pu,fu);let r=mu.length()||.001;_p.setFromUnitVectors(Xy,mu.divideScalar(r)),vp.set(1,r,1),yp.compose(fu.add(pu).multiplyScalar(.5),_p,vp),qs.setMatrixAt(s,yp)}qs.instanceMatrix.needsUpdate=!0}function Pn(n,e){n.parent!==e&&(n.parent&&n.parent.remove(n),e.add(n))}function Gu(n){for(;n.children.length;)n.remove(n.children[0])}var yl=[];function it(n,e,t,i=5,s=.55){for(let r=0;r<i;r++){let a=Ii(e,s);a.material=a.material.clone(),a.position.set(t.x+(Math.random()-.5)*.8,t.y+Math.random()*.3,t.z+(Math.random()-.5)*.8),n.add(a),yl.push({s:a,scene:n,life:1.2+Math.random()*.4,t:0,vy:.9+Math.random()*.6,vx:(Math.random()-.5)*.6})}}function Ip(n){for(let e=yl.length-1;e>=0;e--){let t=yl[e];t.t+=n,t.s.position.y+=t.vy*n,t.s.position.x+=t.vx*n,t.s.material.opacity=1-t.t/t.life,t.t>=t.life&&(t.scene.remove(t.s),t.s.material.dispose(),yl.splice(e,1))}}var ae=new On,Wa=Gr(ae),En=[{id:"bosque",icon:"\u{1F332}",name:"Bosque",x:-28,z:-15,cave:!0,ready:!0,minDay:3},{id:"casa",icon:"\u{1F3E0}",name:"Casa",x:-16,z:-15,w:6,d:5,h:3,wall:"#fff1dc",roof:"#ff7b7b",door:"#b0703c",ready:!0},{id:"escuela",icon:"\u{1F393}",name:"Escuela",ready:!0,minDay:8,x:-4,z:-15,w:6,d:5,h:3.3,wall:"#ffe58a",roof:"#6f8cff",door:"#5d78e8"},{id:"tienda",icon:"\u{1F6D2}",name:"Tienda",ready:!0,x:7,z:-15,w:5,d:4,h:2.7,wall:"#ffd6e8",roof:"#ff8fc8",door:"#c0607a",stall:!0},{id:"vet",icon:"\u{1F3E5}",name:"Veterinaria",ready:!0,x:18,z:-15,w:6,d:5,h:3,wall:"#ffffff",roof:"#5fd0c4",door:"#3aa89c"},{id:"parque",icon:"\u{1F333}",name:"Parque",x:-4,z:5,park:!0,ready:!0,minDay:3},{id:"lago",icon:"\u{1F986}",name:"Lago",x:17,z:7,lake:!0,ready:!0},{id:"peluqueria",icon:"\u2702\uFE0F",name:"Peluquer\xEDa canina",spot:!0,minDay:3,x:29,z:-15,w:6,d:5,h:3,wall:"#e8f4ff",roof:"#9b7bff",door:"#7a5ce0"},{id:"heladeria",icon:"\u{1F366}",name:"Helader\xEDa",spot:!0,x:40,z:-15,w:5,d:4,h:2.7,wall:"#fff4d6",roof:"#7fd6ff",door:"#40a8d8",stall:!0},{id:"panaderia",icon:"\u{1F950}",name:"Pasteler\xEDa",spot:!0,x:51,z:-15,w:6,d:5,h:3,wall:"#ffe9cc",roof:"#d9824a",door:"#a0582c"},{id:"biblioteca",icon:"\u{1F4DA}",name:"Biblioteca",spot:!0,x:62,z:-15,w:6,d:5,h:3.4,wall:"#f0e6ff",roof:"#4f6fd8",door:"#3a4fa8"},{id:"refugio",icon:"\u{1F3E1}",name:"Refugio de perritos",spot:!0,x:-22,z:12,w:6,d:5,h:3,wall:"#fff0e0",roof:"#5cbf5a",door:"#3c8c3c"},{id:"perros",icon:"\u{1F415}",name:"Parque para perros",spot:!0,dogpark:!0,minDay:3,x:23,z:29},{id:"aventura",icon:"\u{1F5FA}\uFE0F",name:"Valle Aventura",spot:!0,valley:!0,x:46,z:22}],Ft={boxes:[],circles:[]},De={x0:-34,x1:70,z0:-24,z1:48},Dt={x0:42,x1:70,z0:13,z1:48,gateZ:19,riverZ:34.5,bridgeX:55},Vu=(n,e)=>n>Dt.x0&&e>Dt.z0,ws=[];function qy(){ae.background=new Xe("#bfe6ff"),ae.fog=new rs("#bfe6ff",45,95);let n=C(new zn(240,190),"#8fd46e",{cast:!1,recv:!0});n.rotation.x=-Math.PI/2,n.position.set(18,0,12),ae.add(n);let e=mi(424242);for(let d=0;d<70;d++){let u=C(P.cyl(1+e()*2.5,1+e()*2.5,.02,20),e()<.5?"#84cc63":"#9ade7a",{cast:!1,recv:!0});u.position.set(De.x0-4+e()*(De.x1-De.x0+8),.01,De.z0-4+e()*(De.z1-De.z0+8)),ae.add(u)}let t=[[-31,-9,67,-9],[-28,-12.5,-28,-9],[-16,-12,-16,-9],[-4,-12,-4,-9],[7,-12.5,7,-9],[18,-12,18,-9],[-4,-9,-4,-.5],[10.5,-9,10.5,19],[29,-12,29,-9],[40,-12.5,40,-9],[51,-12,51,-9],[62,-12,62,-9],[34,-9,34,19],[-22,19,44,19],[-22,15.4,-22,19],[23,19,23,22.5],[44,19,62,19],[55,19,55,42],[48,42,65,42]],i=[];for(let[d,u,m,x]of t){let y=Math.abs(m-d)+2.4,p=Math.abs(x-u)+2.4,f=C(P.box(y,.06,p),"#f2d39a",{cast:!1,recv:!0});f.position.set((d+m)/2,.03,(u+x)/2),ae.add(f),i.push([Math.min(d,m)-1.5,Math.min(u,x)-1.5,Math.max(d,m)+1.5,Math.max(u,x)+1.5])}let s=(d,u)=>i.some(([m,x,y,p])=>d>m&&d<y&&u>x&&u<p);for(let d of En)d.w&&Jy(d),d.cave&&Ky(d),d.park&&jy(d),d.lake&&Qy(d),d.dogpark&&ev(d),d.valley&&tv(d,e);let r=(d,u,m,x,y)=>(d-m)**2+(u-x)**2<y*y;for(let d=0;d<620;d++){let u=De.x0-4+e()*(De.x1-De.x0+8),m=De.z0-4+e()*(De.z1-De.z0+8),x=u<De.x0+1||u>De.x1-1||m<De.z0+1||m>De.z1-1,y=u<-21&&m<-17.5,p=Vu(u,m)&&!x;!x&&!y&&e()>(p?.3:.2)||s(u,m)||En.some(f=>f.w&&Math.abs(u-f.x)<f.w/2+2&&Math.abs(m-f.z)<f.d/2+2)||r(u,m,-4,5,8)||r(u,m,17,7,7.5)||r(u,m,-28,-15,4)||r(u,m,-16,-9,3)||u>13&&u<33&&m>21&&m<37||$s.some(([f,g,E])=>r(u,m,f,g,E))||Math.abs(u-Dt.x0)<1.6&&m>Dt.z0-1||Math.abs(m-Dt.z0)<1.6&&u>Dt.x0-1||Math.abs(m-Dt.riverZ)<2.6&&u>Dt.x0||Ft.circles.some(f=>r(u,m,f.x,f.z,1.6))||$y(u,m,y||e()<.35,.8+e()*.5)}let a=zr?160:420,o=new os(P.sph(.12,6,5),new ds({gradientMap:js}),a),c=["#ff6b8b","#ffd23f","#ffffff","#b98cff","#ff9f43"].map(d=>new Xe(d)),l=new ut,h=0;for(let d=0;d<2e3&&h<a;d++){let u=De.x0+e()*(De.x1-De.x0),m=De.z0+e()*(De.z1-De.z0);s(u,m)||En.some(x=>x.w&&Math.abs(u-x.x)<x.w/2+.8&&Math.abs(m-x.z)<x.d/2+.8)||r(u,m,17,7,5.2)||Math.abs(m-Dt.riverZ)<2&&u>Dt.x0-1||(l.makeTranslation(u,.12,m),o.setMatrixAt(h,l),o.setColorAt(h,c[Math.floor(e()*c.length)]),h++)}o.count=h,ae.add(o);for(let d=0;d<9;d++){let u=new we;for(let m=0;m<4;m++){let x=C(P.sph(1.2+e(),12,10),"#ffffff",{cast:!1});x.position.set(m*1.3,e()*.6,e()),u.add(x)}u.position.set(-40+e()*80,14+e()*5,-40+e()*30),u.userData.v=.3+e()*.4,ae.add(u),Pp.push(u)}}var Pp=[];function $y(n,e,t,i){let s=Xu(t);s.position.set(n,0,e),s.scale.setScalar(i),s.rotation.y=Math.random()*6,ae.add(s),Ft.circles.push({x:n,z:e,r:.55*i,tree:!0}),s.traverse(r=>{r.isMesh&&(r.userData.solidMat=r.material)}),Wu.push({g:s,x:n,z:e,s:i,top:(t?3.4:2.9)*i,faded:!1})}var Wu=[],gu=new Map;function Yy(n){if(!gu.has(n)){let e=n.clone();e.transparent=!0,e.opacity=.28,e.depthWrite=!1,gu.set(n,e)}return gu.get(n)}function Zy(){let n=Mt.position.x,e=Mt.position.y,t=Mt.position.z,i=H.x,s=H.z,r=1,a=n-i,o=t-s,c=a*a+o*o||1;for(let l of Wu){let h=!1;if(l.z>s-.5){let d=((l.x-i)*a+(l.z-s)*o)/c;if(d>0&&d<1){let u=i+a*d,m=s+o*d,x=r+(e-r)*d;h=Math.hypot(l.x-u,l.z-m)<1.3*l.s+.4&&x<l.top+.5}}h!==l.faded&&(l.faded=h,l.g.traverse(d=>{d.isMesh&&(d.material=h?Yy(d.userData.solidMat):d.userData.solidMat,d.castShadow=!h)}))}}function Xu(n){let e=new we;if(e.add(Q(C(P.cyl(.18,.24,1,8),"#9a6236"),0,.5,0)),n)for(let t=0;t<3;t++){let i=C(P.cone(1.1-t*.28,1.3,9),t%2?"#3f9a5a":"#2f8a4e");i.position.y=1.3+t*.75,e.add(i)}else{for(let[t,i,s,r]of[[0,1.9,0,.95],[.5,1.6,.2,.65],[-.5,1.7,-.1,.7]]){let a=C(P.sph(r,14,10),"#5cbf5a");a.position.set(t,i,s),e.add(a)}if(Math.random()<.4)for(let t=0;t<3;t++){let i=C(P.sph(.11,8,6),"#ff5c5c");i.position.set(Math.cos(t*2)*.8,1.6+t*.2,Math.sin(t*2)*.8),e.add(i)}}return e}function As(n,e=1.6){let t=new we;t.add(C(P.box(e,e*.8,.12),"#ffffff"));let i=new St(new zn(e*.85,e*.7),new An({map:Ts(n),transparent:!0}));return i.position.z=.07,t.add(i),t}function Jy(n){let e=new we,{w:t,d:i,h:s}=n;if(n.stall){e.add(Q(C(P.box(t,s*.55,i),n.wall,{recv:!0}),0,s*.275,0));for(let a of[-1,1])e.add(Q(C(P.cyl(.12,.12,s+.6,8),"#ffffff"),a*(t/2-.2),(s+.6)/2,i/2-.2));for(let a=0;a<6;a++){let o=C(P.box(t/6,.15,i+.6),a%2?"#ffffff":"#ff6b8b");o.position.set(-t/2+t/12+a*t/6,s+.5,.2),o.rotation.x=-.25,e.add(o)}for(let a=0;a<5;a++){let o=C(P.sph(.22,10,8),["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][a]);o.position.set(-t/2+.7+a*(t-1.4)/4,s*.55+.22,i/2-.4),e.add(o)}}else{e.add(Q(C(P.box(t,s,i),n.wall,{recv:!0}),0,s/2,0));let a=C(P.cone(Math.max(t,i)*.78,2.2,4),n.roof);a.rotation.y=Math.PI/4,a.scale.set(1,1,i/t),a.position.y=s+1.1,e.add(a);let o=C(P.box(1.2,1.9,.12),n.door);o.position.set(0,.95,i/2+.03),e.add(o);let c=C(P.sph(.07),"#ffd23f");c.position.set(.4,.95,i/2+.12),e.add(c);for(let l of[-1,1]){let h=C(P.box(1,.9,.1),"#bfe9ff",{extra:{emissive:"#000000"}});h.position.set(l*(t/2-1.1),s*.6,i/2+.03),e.add(h),n.wins=(n.wins||[]).concat(h);let d=C(P.box(1.15,.12,.14),"#ffffff");d.position.set(l*(t/2-1.1),s*.6-.5,i/2+.06),e.add(d)}if(n.id==="casa"){let l=C(P.box(.6,1.2,.6),"#c0605a");l.position.set(t/2-1.2,s+1.4,-.6),e.add(l)}if(n.id==="vet"){let l=new we;l.add(C(P.box(.3,.9,.1),"#ff5c5c")),l.add(C(P.box(.9,.3,.1),"#ff5c5c")),l.position.set(0,s+.4,i/2+.1),e.add(l)}if(n.id==="escuela"){let l=C(P.cyl(.05,.05,2.5,6),"#888888");l.position.set(t/2-.3,s+1.2,i/2-.3),e.add(l);let h=C(P.box(.9,.5,.05),"#ff6b6b");h.position.set(t/2+.15,s+2.2,i/2-.3),e.add(h),n.flag=h}}let r=As(n.icon);r.position.set(n.stall?0:-t/2+.9,n.stall?s+1.4:2.2,i/2+.1),n.stall||(r.position.x=-t/2+.9),e.add(r),e.position.set(n.x,0,n.z),ae.add(e),Ft.boxes.push({x0:n.x-t/2-.2,x1:n.x+t/2+.2,z0:n.z-i/2-.2,z1:n.z+i/2+.2}),Vr(n,n.x,n.z+i/2+1.4,s+2.8)}function Ky(n){let e=new we,t=mi(99);for(let r=0;r<14;r++){let a=Math.PI*(r/13),o=C(new zs(.9+t()*.5),r%2?"#9aa0b0":"#b4b9c6");o.position.set(Math.cos(a)*2.6,Math.sin(a)*2.6,0),o.rotation.set(t()*3,t()*3,0),e.add(o)}let i=C(new hs(2,24,0,Math.PI),"#1a1420",{cast:!1});i.position.z=.1,e.add(i);let s=As("\u{1F332}",1.4);s.position.set(3.4,1,.6),e.add(s),e.position.set(n.x,0,n.z),ae.add(e),Ft.boxes.push({x0:n.x-3.6,x1:n.x+3.6,z0:n.z-1.6,z1:n.z+1}),Vr(n,n.x,n.z+2.6,4.6)}var wt=null;function jy(n){let e=new we;e.add(C(P.cyl(1.6,1.8,.6,24),"#dfe3ee",{recv:!0}));let t=C(P.cyl(1.35,1.35,.1,24),"#6cc8ff",{cast:!1});t.position.y=.32,e.add(t),e.add(Q(C(P.cyl(.25,.35,1.6,12),"#cfd3de"),0,.8,0));let i=C(P.sph(.5,14,10),"#6cc8ff");i.position.y=1.7,e.add(i),e.position.set(n.x,0,n.z),ae.add(e),Ft.circles.push({x:n.x,z:n.z,r:1.9});for(let[r,a,o]of[[-4,1,1.57],[4,1,-1.57],[0,4.5,3.14]]){let c=new we;c.add(Q(C(P.box(2,.15,.6),"#d79b5f"),0,.5,0)),c.add(Q(C(P.box(2,.5,.12),"#d79b5f"),0,.85,-.25));for(let l of[-.8,.8])c.add(Q(C(P.box(.12,.5,.5),"#777777"),l,.25,0));c.position.set(n.x+r,0,n.z+a),c.rotation.y=o,ae.add(c)}wt={m:C(P.sph(.35,18,14),"#ffd23f"),v:new D,pushes:0,cd:0};let s=C(new dn(.35,.05,6,20),"#ff6b8b");wt.m.add(s),wt.m.position.set(n.x+2.5,.35,n.z-3),ae.add(wt.m),Vr(n,n.x,n.z-2.6,3.2)}var Ya=[];function Qy(n){let e=C(P.cyl(5.4,5.4,.05,40),"#f6e3a8",{cast:!1,recv:!0});e.position.set(n.x,.03,n.z),ae.add(e);let t=C(P.cyl(4.6,4.6,.08,40),"#5ec2f5",{cast:!1,recv:!0});t.position.set(n.x,.07,n.z),ae.add(t);let i=C(P.box(3.4,.15,1.4),"#c98c55",{recv:!0});i.position.set(n.x-4.3,.2,n.z),ae.add(i),Ft.circles.push({x:n.x+.6,z:n.z,r:4.1});for(let s=0;s<3;s++){let r=new we;{let a=C(P.sph(.3),"#ffe066");a.scale.set(1,.7,1.3),r.add(a)}r.add(Q(C(P.sph(.18),"#ffe066"),0,.3,.3));{let a=Q(C(P.cone(.07,.18,6),"#ff9f43"),0,.28,.5);a.rotation.x=Math.PI/2,r.add(a)}r.userData={a:s*2.1,r:1.5+s*.9},ae.add(r),Ya.push(r)}Ya.forEach(s=>{s.userData.cx=n.x+.8,s.userData.cz=n.z}),Vr(n,n.x-5.4,n.z,2.4)}function Vr(n,e,t,i){let s=Ii("\u2B50",1.5,!0);s.position.set(e,i,n.w?n.z:t),s.visible=!1,ae.add(s),ws.push({pl:n,x:e,z:t,mk:s,baseY:i,emoji:""})}var $s=[];function Yi(n,e,t,i,s,r="#ffffff"){let a=Math.hypot(i-e,s-t),o=Math.max(1,Math.round(a/1.5)),c=Math.atan2(i-e,s-t);for(let l=0;l<=o;l++)n.add(Q(C(P.box(.16,1,.16),r),e+(i-e)*l/o,.5,t+(s-t)*l/o));for(let l of[.4,.8]){let h=C(P.box(.08,.1,a),r);h.position.set((e+i)/2,l,(t+s)/2),h.rotation.y=c,n.add(h)}Ft.boxes.push({x0:Math.min(e,i)-.15,x1:Math.max(e,i)+.15,z0:Math.min(t,s)-.15,z1:Math.max(t,s)+.15})}var fi={x0:15,x1:31,z0:23,z1:35,gx:23},Zi={};function ev(n){let e=new we,t=fi;e.add(Q(C(P.box(t.x1-t.x0,.03,t.z1-t.z0),"#a4dc78",{cast:!1,recv:!0}),(t.x0+t.x1)/2,.015,(t.z0+t.z1)/2)),Yi(e,t.x0,t.z0,t.gx-1.4,t.z0,"#ffb347"),Yi(e,t.gx+1.4,t.z0,t.x1,t.z0,"#ffb347"),Yi(e,t.x0,t.z1,t.x1,t.z1,"#ffb347"),Yi(e,t.x0,t.z0,t.x0,t.z1,"#ffb347"),Yi(e,t.x1,t.z0,t.x1,t.z1,"#ffb347");for(let o of[-1.5,1.5])e.add(Q(C(P.box(.3,2.2,.3),"#ff8c42"),t.gx+o,1.1,t.z0));e.add(Q(C(P.box(3.3,.35,.35),"#ff8c42"),t.gx,2.3,t.z0));let i=As("\u{1F415}",1.1);i.position.set(t.gx,3.05,t.z0),e.add(i);let s=C(new Os(.9,.9,3.2,16,1,!0,0,Math.PI),"#ff6b8b",{extra:{side:Rn}});s.rotation.z=Math.PI/2,s.rotation.y=Math.PI/2,s.position.set(18.5,0,32),e.add(s),Ft.boxes.push({x0:16.9,x1:20.1,z0:31,z1:33});for(let o=0;o<3;o++){let c=C(new dn(.6,.07,8,20),["#6fc2ff","#ffd23f","#8be08b"][o]);c.position.set(25+o*2,.75,33),e.add(c)}for(let o=0;o<4;o++)e.add(Q(C(P.cone(.25,.6,10),"#ff9f43"),17+o*1.3,.3,26));let r=new we;r.add(Q(C(P.cyl(.25,.3,.9,10),"#b8bcc8"),0,.45,0)),r.add(Q(C(P.cyl(.55,.4,.2,14),"#dfe3ee"),0,.2,.6)),r.add(Q(C(P.cyl(.42,.42,.04,14),"#6cc8ff",{cast:!1}),0,.3,.6)),r.position.set(29.5,0,25),e.add(r),Ft.circles.push({x:29.5,z:25,r:.4}),Zi.water=[29.5,26.4,Math.PI];let a=new we;a.add(Q(C(P.box(2,.15,.6),"#d79b5f"),0,.5,0)),a.add(Q(C(P.box(2,.5,.12),"#d79b5f"),0,.85,-.25)),a.position.set(28,0,34.2),e.add(a),Zi.disc=C(P.cyl(.32,.32,.06,18),"#ff4fa0"),Zi.disc.visible=!1,e.add(Zi.disc),ae.add(e),Vr(n,t.gx,t.z0+1.6,3.8)}var mn={mirador:[65,22.6],chest:[47.2,42],cave:[65,43.4]},pi=null,ui=null;function tv(n,e){let t=Dt,i=new we;i.add(Q(C(P.box(t.x1-t.x0+4,.025,t.z1-t.z0+4),"#79c662",{cast:!1,recv:!0}),(t.x0+t.x1)/2+2,.012,(t.z0+t.z1)/2+2));let s=(y,p,f,g)=>{let E=Math.abs(f-y)||1.2,M=Math.abs(g-p)||1.2;i.add(Q(C(P.box(E,1.5,M),"#3f9a4e"),(y+f)/2,.75,(p+g)/2)),Ft.boxes.push({x0:(y+f)/2-E/2,x1:(y+f)/2+E/2,z0:(p+g)/2-M/2,z1:(p+g)/2+M/2})};s(t.x0,t.z0,t.x0,t.gateZ-1.6),s(t.x0,t.gateZ+1.6,t.x0,t.z1+2),s(t.x0,t.z0,t.x1+2,t.z0);for(let y of[-1.7,1.7])i.add(Q(C(P.box(.5,3,.5),"#9a6236"),t.x0,1.5,t.gateZ+y));i.add(Q(C(P.box(.6,.5,4),"#9a6236"),t.x0,3.1,t.gateZ));let r=As("\u{1F5FA}\uFE0F",1.2);r.rotation.y=-Math.PI/2,r.position.set(t.x0-.35,3.9,t.gateZ),i.add(r);let a=3;i.add(Q(C(P.box(t.x1-t.x0+4,.08,a),"#5ec2f5",{cast:!1,recv:!0}),(t.x0+t.x1)/2+2,.06,t.riverZ)),Ft.boxes.push({x0:t.x0,x1:t.bridgeX-1.4,z0:t.riverZ-a/2,z1:t.riverZ+a/2},{x0:t.bridgeX+1.4,x1:t.x1+2,z0:t.riverZ-a/2,z1:t.riverZ+a/2});let o=new we;for(let y=0;y<7;y++)o.add(Q(C(P.box(2.6,.12,.6),"#c98c55",{recv:!0}),0,.22+Math.sin(y/6*Math.PI)*.25,-1.8+y*.6));for(let y of[-1.35,1.35]){o.add(Q(C(P.box(.12,.12,4.2),"#8a5a30"),y,1,0));for(let p of[-2,0,2])o.add(Q(C(P.box(.14,.9,.14),"#8a5a30"),y,.55,p))}o.position.set(t.bridgeX,0,t.riverZ),i.add(o);for(let y=0;y<10;y++){let p=C(new zs(.25+e()*.3),"#a8adb8");p.position.set(t.x0+2+e()*(t.x1-t.x0-4),.1,t.riverZ+(e()<.5?-1:1)*(a/2+.3)),i.add(p)}let c=C(P.cone(1.8,2.4,4),"#e8a040");c.rotation.y=Math.PI/4,c.position.set(48.5,1.2,25),i.add(c),i.add(Q(C(P.box(.8,1.2,.05),"#5a3a20"),48.5,.6,26.28)),Ft.circles.push({x:48.5,z:25,r:1.6});let l=new we;for(let y=0;y<5;y++){let p=C(P.cyl(.08,.08,.8,6),"#7a4a24");p.rotation.z=Math.PI/2,p.rotation.y=y*1.25,p.position.y=.1,l.add(p)}let h=C(P.cone(.32,.8,8),"#ff8c1a",{extra:{emissive:"#ff5a00"},cast:!1});h.position.y=.45,l.add(h),l.position.set(45.5,0,25),i.add(l),Zi.flame=h,Ft.circles.push({x:45.5,z:25,r:.6}),pi=so({coat:"#5f8a3a",skin:"#d8a070",hair:"#5a3a20",extra:y=>{let p=C(P.cyl(.55,.55,.06,16),"#8a6a3a");p.position.y=2.35,y.add(p),y.add(Q(C(P.cyl(.3,.33,.3,14),"#8a6a3a"),0,2.5,0))}}),pi.position.set(47,0,22.4),pi.rotation.y=-.4,pi.scale.setScalar(.85),i.add(pi),Ft.circles.push({x:47,z:22.4,r:.5}),$s.push([47,24,4.5]);let d=new we;d.add(Q(C(P.cyl(1.2,1.4,4,12),"#c8c0b0"),0,2,0)),d.add(Q(C(P.cyl(1.6,1.6,.3,12),"#9a8a78"),0,4.15,0));for(let y=0;y<8;y++){let p=y/8*Math.PI*2;d.add(Q(C(P.box(.3,.5,.3),"#9a8a78"),Math.cos(p)*1.45,4.5,Math.sin(p)*1.45))}d.add(Q(C(P.cyl(.05,.05,2,6),"#666666"),0,5.3,0)),d.add(Q(C(P.box(.9,.5,.05),"#ff5c5c"),.45,6,0)),d.add(Q(C(P.box(.9,1.6,.1),"#6a4a2a"),0,.8,1.3)),d.position.set(65,0,20.8),i.add(d),Ft.circles.push({x:65,z:20.8,r:1.45}),$s.push([65,21,4]);for(let[y,p,f]of[[45.5,44.5,2.4],[47.5,45.5,1.4],[50,44.8,2.8],[51.5,46,1],[44.8,42.8,.9]])i.add(Q(C(P.cyl(.4,.45,f,10),"#d8d0c0"),y,f/2,p)),Ft.circles.push({x:y,z:p,r:.5});i.add(Q(C(P.box(3,.4,.8),"#c8c0b0"),48,.2,46.6)),ui=new we,ui.add(Q(C(P.box(.9,.55,.6),"#8a5a2a"),0,.28,0));let u=C(P.box(.95,.2,.65),"#d4a020");u.position.set(0,.62,0),ui.add(u),ui.userData.lid=u,ui.add(Q(C(P.box(.16,.22,.05),"#ffd23f"),0,.38,.32)),ui.position.set(mn.chest[0],0,mn.chest[1]+1.1),ui.rotation.y=0,i.add(ui),Ft.circles.push({x:mn.chest[0],z:mn.chest[1]+1.1,r:.5}),$s.push([48,44,4.5]);let m=new we,x=mi(77);for(let y=0;y<12;y++){let p=Math.PI*(y/11),f=C(new zs(.8+x()*.4),y%2?"#8a90a8":"#a4a9bc");f.position.set(Math.cos(p)*2.2,Math.sin(p)*2.2,0),f.rotation.set(x()*3,x()*3,0),m.add(f)}m.add(Q(C(new hs(1.7,24,0,Math.PI),"#241c3a",{cast:!1}),0,0,.1));for(let y=0;y<6;y++){let p=C(P.cone(.18,.7,5),y%2?"#80f0ff":"#c0a0ff",{extra:{emissive:y%2?"#106070":"#402870"}});p.position.set(-2.6+y%3*.3+(y>2?4.9:0),.35,.6+y%2*.3),p.rotation.z=(x()-.5)*.6,m.add(p)}m.rotation.y=Math.PI,m.position.set(65,0,45),i.add(m),Ft.boxes.push({x0:61.8,x1:68.2,z0:44.8,z1:46.8}),$s.push([65,44,4.5]);for(let y=0;y<6;y++){let p=0,f=0;for(let M=0;M<40&&(p=t.x0+3+e()*(t.x1-t.x0-6),f=t.z0+3+e()*(t.z1-t.z0-6),!(Math.abs(f-t.riverZ)>3&&!$s.some(([v,w,_])=>Math.hypot(p-v,f-w)<_)));M++);let g=new we;g.add(Q(C(P.cyl(.18,.24,.9,8),"#fff4e0"),0,.45,0));let E=C(new us(.6,14,8,0,Math.PI*2,0,Math.PI/2),y%2?"#ff5c5c":"#b98cff");E.position.y=.85,g.add(E),g.position.set(p,0,f),i.add(g),Ft.circles.push({x:p,z:f,r:.35})}ae.add(i),Vr(n,46,20.6,3.6)}var ei=[];function qu(){let n=new we,e=C(P.cyl(.09,.09,.6,8),"#fff6e0");e.rotation.z=Math.PI/2,n.add(e);for(let t of[-.32,.32])for(let i of[-.09,.09]){let s=C(P.sph(.12,10,8),"#fff6e0");s.position.set(t,0,i),n.add(s)}return n}function Lp(n){ei.forEach(i=>ae.remove(i.m)),ei.length=0,n.mapBones.day!==n.day&&(n.mapBones={day:n.day,taken:[]});let e=mi(n.bornAt%1e5+n.day*7919+3),t=0;for(let i=0;i<8&&t<3e3;t++){let s=De.x0+2+e()*(De.x1-De.x0-4),r=De.z0+2+e()*(De.z1-De.z0-4);if(!Ln(s,r,.8)){if(!n.mapBones.taken.includes(i)){let a=qu();a.position.set(s,.45,r),ae.add(a),ei.push({m:a,i})}i++}}if(In=null,n.day>=2&&!(n.treasure&&n.treasure.day===n.day)){let i=mi(n.bornAt%99991+n.day*104729);for(let s=0;s<800;s++){let r=De.x0+2+i()*(De.x1-De.x0-4),a=De.z0+2+i()*(De.z1-De.z0-4);if(!(Ln(r,a,1)||Math.hypot(r+16,a+9)<8)){In={x:r,z:a};break}}}}var In=null;function Ln(n,e,t){return n<De.x0||n>De.x1||e<De.z0||e>De.z1||Ft.boxes.some(i=>n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)?!0:Math.abs(e-7)<.7&&n>11&&n<15?!1:Ft.circles.some(i=>(n-i.x)**2+(e-i.z)**2<(i.r+t)**2)}var bt=new On,Mp=Gr(bt),vl={},xu=[];function nv(){bt.background=new Xe("#ffe9f4"),Mp.sun.position.set(4,10,6),Mp.sun.target.position.set(0,0,0);let n=C(P.box(12,.2,9),"#e7b98a",{cast:!1,recv:!0});n.position.y=-.1,bt.add(n);for(let y=-5;y<=5;y+=1){let p=C(P.box(.03,.01,9),"#d4a274",{cast:!1});p.position.set(y,.005,0),bt.add(p)}let e=C(P.box(12,5,.2),"#ffd1e6",{recv:!0});e.position.set(0,2.5,-4.5),bt.add(e);let t=C(P.box(.2,5,9),"#c8f1e4",{recv:!0});t.position.set(-6,2.5,0),bt.add(t);let i=C(P.box(2.6,1.8,.1),"#ffffff");i.position.set(2,2.9,-4.38),bt.add(i);let s=C(P.box(2.3,1.5,.1),"#9fdcff",{cast:!1});s.position.set(2,2.9,-4.32),bt.add(s);let r=As("\u{1F43E}",1.2);r.position.set(-2.5,3,-4.35),bt.add(r);let a=C(P.cyl(2.2,2.2,.04,32),"#ffb3d1",{cast:!1,recv:!0});a.position.set(0,.02,.5),bt.add(a);let o=new we;o.add(Q(C(P.cyl(1.2,1.3,.35,24),"#8f6fd8",{recv:!0}),0,.18,0)),o.add(Q(C(P.cyl(1,1,.1,24),"#ffe8f4",{recv:!0}),0,.36,0));let c=C(new dn(1.15,.22,10,26),"#a78bfa");c.rotation.x=Math.PI/2,c.position.y=.4,o.add(c),o.position.set(-3.6,0,-2.6),bt.add(o);let l=(y,p,f)=>{let g=new we;g.add(Q(C(P.cyl(.45,.35,.25,20),y),0,.13,0));let E=C(P.cyl(.36,.36,.05,20),f,{cast:!1});return E.position.y=.24,g.add(E),g.userData.fill=E,g.position.set(p,0,-3),bt.add(g),g};vl.food=l("#ff7b7b",.6,"#b0703c"),vl.water=l("#6f8cff",2,"#7fd6ff");let h=C(P.box(1.4,.8,1),"#ffd23f");h.position.set(4.3,.4,-3),bt.add(h);let d=C(P.sph(.28),"#6fc2ff");d.position.set(4,.95,-3),bt.add(d);let u=C(P.box(.3,.3,.3),"#ff8fc8");u.position.set(4.6,.95,-2.9),bt.add(u);let m=new we;m.add(Q(C(P.box(2.2,.8,1.4),"#ffffff"),0,.45,0)),m.add(Q(C(P.box(1.9,.1,1.1),"#bfe9ff",{cast:!1}),0,.82,0));for(let y of[-.9,.9])for(let p of[-.5,.5])m.add(Q(C(P.sph(.12),"#ffd23f"),y,.06,p));m.position.set(-4.3,0,1.6),bt.add(m),vl.tub=m;let x=C(P.cyl(.35,.28,.6,14),"#ff9f43");x.position.set(5.2,.3,.8),bt.add(x);for(let y=0;y<3;y++){let p=C(P.sph(.35,10,8),"#5cbf5a");p.position.set(5.2+Math.cos(y*2)*.2,.9+y*.15,.8+Math.sin(y*2)*.2),bt.add(p)}}var Sl={food:[.6,-2,Math.PI],water:[2,-2,Math.PI],bed:[-3.6,-2.6,.6],tub:[-4.3,1.6,.8],center:[0,.6,.3],toys:[3.6,-2.2,Math.PI*.8]};function bl(n){xu.forEach(t=>bt.remove(t)),xu=[];let e=[[2.6,1.6],[-1.4,2.4],[3.6,2.6]];for(let t=0;t<Math.min(n.mess,3);t++){let i=Ii("\u{1F4A9}",.8);i.position.set(e[t][0],.4,e[t][1]),bt.add(i),xu.push(i)}}var Gt=ae,Te=null,R={x:-16,z:-9,ry:0,speed:0,mode:"idle",modeT:0,path:null},fe="town",pt=!1,dl=0,Oe={up:0,down:0,left:0,right:0,a:!1,jx:0,jz:0},Ke=null,H={x:-16,z:-8.6,ry:0},di=[];function no(n,e,t=0){H.x=n,H.z=e,H.ry=t,R.x=n-Math.sin(t)*1.3,R.z=e-Math.cos(t)*1.3,R.ry=t,R.path=null,di=[{x:R.x,z:R.z},{x:n,z:e}]}function Dp(n,e,t=0){H.x=n,H.z=e,H.ry=t,di=[{x:R.x,z:R.z},{x:n,z:e}]}var Pl=()=>!!Te&&!!Ke&&Te.root.parent===Ke.root.parent;function iv(n,e,t){let i=di[di.length-1];(!i||Math.hypot(H.x-i.x,H.z-i.z)>=.05)&&di.push({x:H.x,z:H.z}),di.length>300&&di.shift();let s=1.15+t*.12,r=H.x,a=H.z,o=r,c=a;for(let m=di.length-1;m>=0;m--){let x=di[m],y=Math.hypot(r-x.x,a-x.z);if(y>=s){let p=s/y;o=r+(x.x-r)*p,c=a+(x.z-a)*p,s=0;break}s-=y,r=x.x,a=x.z,o=r,c=a}let l=o-R.x,h=c-R.z,d=Math.hypot(l,h);if(d<.03)return null;let u=Math.min(d,e*n*(d>1.5?1.7:1));return R.x+=l/d*u,R.z+=h/d*u,{dx:l/d,dz:h/d,sp:u/n}}function Ll(n){Ue=n,ze.root.activeId=n.id;let e=n.pet;simulate(e,now(e)),Te&&Te.root.parent&&Te.root.parent.remove(Te.root),Te=Rl(e),Ke&&Ke.root.parent&&Ke.root.parent.remove(Ke.root),Ke=Wy(n.avatar),no(-16,-8.6,0),Gt=ae,fe="town",ae.add(Te.root,Ke.root),Lp(e),ao(e),saveRoot(),he("#picker").hidden=!0,he("#hud").hidden=!1,mt(),Np(e),speak(`\xA1Hola ${n.name}! \xA1Vamos a pasear!`),setTimeout(()=>dogSound("happy",stageOf(e.day).size),2200)}function Np(n){let e=new Date(now(n)).getHours(),t=e<7||e>=20,i=e>=18&&!t;um=t;let s=t?"#2d3466":i?"#ffc7a8":"#bfe6ff";ae.background.set(s),ae.fog.color.set(s),Wa.hemi.intensity=t?.7:1.7,Wa.sun.intensity=t?.5:i?1.6:2.3,Wa.sun.color.set(t?"#9fb0ff":i?"#ffc08a":"#fff4e0");for(let r of En)for(let a of r.wins||[])a.material=Br("#bfe9ff",{emissive:t?"#ffd27a":"#000000"})}var sv={feliz:"\u{1F604}",normal:"\u{1F642}",triste:"\u{1F622}",enferma:"\u{1F912}",dormida:"\u{1F634}"};function mt(){if(!Ue)return;let n=Ue.pet,e=STAT_INFO.map(t=>{let i=Math.round(n.stats[t.key]);return`<div class="hb ${i<25?"low":""}" title="${t.label}"><span>${t.icon}</span><i><b style="width:${i}%;background:${t.color}"></b></i></div>`}).join("");he("#hud").innerHTML=`<div class="hud-left"><a class="hbtn" href="../index.html" aria-label="Volver al juego 2D">\u{1F579}\uFE0F</a><span class="face">${sv[moodOf(n)]}</span></div>
    <div class="hud-bars">${e}</div><div class="hud-right"><span class="chip">\u{1F9B4} ${n.bones}</span><span class="chip">${Dl[stageOf(n.day).id]} ${n.day}</span><button class="hbtn" id="diary3" aria-label="Diario">\u{1F4D6}</button><button class="hbtn" id="music" aria-label="M\xFAsica">${Music.isOn()?"\u{1F3B5}":"\u{1F515}"}</button><button class="hbtn" id="mute" aria-label="Sonido">${Ur?"\u{1F507}":"\u{1F50A}"}</button></div>`,Wn()}var Dl={recien:"\u{1F423}",bebe:"\u{1F37C}",cachorra:"\u{1F436}",joven:"\u{1F415}",adulta:"\u{1F382}"},sn=null,Ri=null;function rv(){let n=he("#prompt"),e=Ue.pet,t="";fe==="town"&&(e.asleep&&Kp()?t='<button class="go-btn" data-act="wake" aria-label="Despertar">\u{1F4A4} \u279C \u23F0</button>':sn?t=e.day<(sn.pl.minDay||1)?`<button class="go-btn locked" data-act="enter" aria-label="${sn.pl.name}: cerrado">\u{1F512} ${sn.pl.icon} <small>\u23F3${sn.pl.minDay-e.day}</small></button>`:`<button class="go-btn" data-act="enter" aria-label="Entrar a ${sn.pl.name}">\u24B6 ${sn.pl.icon}</button>`:Ri&&(t=`<button class="go-btn ${Ri.warn?"locked":""}" data-act="enter" aria-label="${Ji(Ri.label)}">\u24B6 ${Ri.icon} <small>${Ji(Ri.label)}</small></button>`)),n.__h!==t&&(n.innerHTML=t,n.__h=t),n.hidden=!t}function ys(){if(fe!=="home")return;let n=Ue.pet,e=n.stats,t=n.day,i=today(n),s=foodFor(t),r=(c,l)=>c?l:"",a=n.asleep?"\u{1F4A4}":"",o=[["eat",s.icon,"Comer",a||r(e.saciedad>=90,"\u{1F60B}")],t>=4?["water","\u{1F4A7}","Agua",a||r(e.hidratacion>=92,"\u{1F4A7}")]:null,["pet","\u{1F917}","Mimos",""],["memory","\u{1F0CF}","Memoria",""],n.items.premio>0?["treat","\u{1F36A}","Premio",a||r((i.treats||0)>=3,"\u23F3")]:null,n.items.mordedor&&t>=3?["toy","\u{1F9F8}","Jugar",a||r(e.energia<15,"\u{1F634}")]:null,n.asleep?["wake","\u23F0","Despertar",""]:["sleep","\u{1F6CF}\uFE0F","Dormir",""],["nap","\u{1F634}","Siesta",a||r(i.naps>=3,"\u23F3")||r(e.energia>=90,"\u26A1")],t<8?["wipe","\u{1F9FD}","Limpiar",a]:["bath","\u{1F6C1}","Ba\xF1o",a||r(n.lastDone.bano&&t-n.lastDone.bano<3,"\u23F3")],t>=3?["brush","\u{1F58C}\uFE0F","Cepillar",a]:null,n.mess?["clean","\u{1F9FB}","Recoger",""]:null,t>=3?["potty","\u{1F9FB}","Papel",a||r(n.potty>=100,"\u2714")||r((i.potty||0)>=3,"\u23F3")]:null,["ropa","\u{1F380}","Ropa",n.acc.owned.length?"":"\u{1F6D2}"],["exit","\u{1F6AA}","Salir",""],["help","\u2753","Ayuda",""]].filter(Boolean);he("#actions").innerHTML=o.map(([c,l,h,d])=>`<button class="opt ${d?"off":""}" data-act="${c}" data-say="${h}" ${d?'aria-disabled="true"':""} aria-label="${h}"><span class="oi">${l}</span><span class="on">${h}</span>${d?`<span class="badge">${d}</span>`:""}</button>`).join(""),typeof Wn=="function"&&setTimeout(Wn,0)}function Xa(n){let e=today(Ue.pet);n==="meal"&&e.meals++,n==="water"&&e.water++,n==="play"&&e.play++,n==="care"&&e.care++}function io(n){let e=Ue.pet;if(pt&&n!=="exit")return;n!=="exit"&&setTimeout(()=>ti("do:"+n),0);let t=foodFor(e.day),i=(s,r,a,o,c,l,h,d,u,m)=>{pt=!0,Tn(Sl[s],()=>{R.mode=r,R.modeT=a,s==="food"&&(vl.food.userData.fill.visible=!0),speak(h),xt("pop");let x=performance.now(),y=setInterval(()=>{it(bt,d,new D(R.x,1.6*Te.root.scale.x+.3,R.z),1,.45),performance.now()-x>a*1e3&&clearInterval(y)},350);setTimeout(()=>{applyFx(e,o),Xa(c),addEvent(e,l,u),m&&m();let p=Object.entries(o).filter(([,f])=>f>0).map(([f])=>STAT_ICON[f]).join("");ft(l,p?"+"+p:""),R.mode=r==="sleep"?"sleep":"happy",R.modeT=r==="sleep"?0:1,r!=="sleep"&&dogSound("happy",lt(),.7),pt=!1,saveRoot(),mt(),ys(),bl(e),Wn()},a*1e3)})};switch(n){case"eat":return i("food","eat",2.2,t.fx,"meal",t.icon,"\xA1\xD1am \xF1am!","\u{1F356}",t.msg);case"water":return i("water","eat",1.8,{hidratacion:40},"water","\u{1F4A7}","\xA1Glu glu!","\u{1F4A7}","Luna bebi\xF3 agua fresca.");case"pet":R.mode="happy",R.modeT=1.4,it(bt,"\u{1F496}",new D(R.x,1.4,R.z),6),applyFx(e,e.asleep?{felicidad:4}:{felicidad:12,energia:-2}),Xa("play"),addEvent(e,"\u{1F917}","Mimos y caricias."),ft("\u{1F917}","+\u{1F496}"),speak("\xA1Te quiero!"),setTimeout(()=>dogSound("happy",lt()),600),saveRoot(),mt();return;case"toy":return i("toys","happy",2,{felicidad:18,energia:-8},"play","\u{1F9F8}","\xA1A jugar!","\u2B50","Jug\xF3 con el mordedor.");case"sleep":pt=!0,Tn(Sl.bed,()=>{e.asleep=!0,R.mode="sleep",addEvent(e,"\u{1F6CF}\uFE0F","Se fue a dormir a su camita."),ft("\u{1F6CF}\uFE0F","\u{1F4A4}"),speak("Buenas noches, Luna"),pt=!1,saveRoot(),mt(),ys()});return;case"wake":e.asleep=!1,e.stats.energia<60&&(e.stats.felicidad=clamp(e.stats.felicidad-6,0,100)),R.mode="idle",addEvent(e,"\u23F0","Despertaste a Luna."),ft("\u23F0"),speak("\xA1Buenos d\xEDas!"),saveRoot(),mt(),ys();return;case"nap":return i("bed","sleep",2.5,{energia:25},null,"\u{1F634}","Siestita","\u{1F4A4}","Durmi\xF3 una siesta cortita.",()=>{today(e).naps++,R.mode="idle"});case"wipe":return i("center","happy",1.6,{higiene:20},"care","\u{1F9FD}","\xA1Limpita!","\u{1FAE7}","La limpiaste con un pa\xF1o tibio.");case"bath":return i("tub","happy",2.6,{higiene:60,felicidad:e.items.champu>0?8:-3},"care","\u{1F6C1}","\xA1Al agua!","\u{1FAE7}","Se dio un ba\xF1o.",()=>{e.lastDone.bano=e.day,e.items.champu>0&&e.items.champu--});case"brush":return i("center","happy",1.6,{higiene:10,felicidad:5},"care","\u{1F58C}\uFE0F","\xA1Qu\xE9 suave!","\u2728","Le cepillaste el pelo.");case"clean":e.mess=0,Xa("care"),addEvent(e,"\u{1F9FB}","Limpiaste los accidentes."),it(bt,"\u2728",new D(1.5,.6,2),6),ft("\u{1F9FB}","\u2714"),speak("\xA1Todo limpio!"),bl(e),saveRoot(),ys();return;case"potty":{if(e.asleep||e.potty>=100||(today(e).potty||0)>=3)return;today(e).potty=(today(e).potty||0)+1;let s=8+Math.round(Math.random()*6);e.potty=Math.min(100,e.potty+s),today(e).train++,R.mode="sit",R.modeT=1.2,ft("\u{1F9FB}",`+${s}%`),speak("\xA1Muy bien, en el papel!"),addEvent(e,"\u{1F393}",`Practicaron usar el papel (${e.potty}%).`),e.potty>=100&&addMilestone(e,"potty","\u{1F3C6}","Luna aprendi\xF3 a hacer sus necesidades en su lugar."),saveRoot(),ys();return}case"ropa":{let s=[null,...e.acc.owned];e.acc.worn=s[(s.indexOf(e.acc.worn)+1)%s.length],R.mode="happy",R.modeT=1,ft(e.acc.worn?SHOP.find(r=>r.id===e.acc.worn).icon:"\u{1F6AB}"),speak(e.acc.worn?"\xA1Qu\xE9 guapa!":""),saveRoot();return}case"exit":return cv();case"memory":return gM();case"treat":{if(e.asleep||!e.items.premio)return;e.items.premio--,today(e).treats=(today(e).treats||0)+1,R.mode="happy",R.modeT=1.4,applyFx(e,{felicidad:10,saciedad:5}),addEvent(e,"\u{1F36A}","Le diste un premio."),it(bt,"\u{1F36A}",new D(R.x,1.4,R.z),3),ft("\u{1F36A}","+\u{1F496}"),speak("\xA1Un premio!"),setTimeout(()=>dogSound("happy",lt()),400),saveRoot(),mt(),ys();return}}}var Up=!1;function Fp(){Up=!0,fe="park",speak("Parque"),dogSound("bark",lt(),.6),Op(),he("#actions").hidden=!1,he("#prompt").hidden=!0,ti("open:parque")}function Ys(){Up=!1,fe="town",pt=!1,R.path=null,he("#actions").hidden=!0}function Op(){if(fe!=="park")return;let n=Ue.pet,e=n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":"",t=[["agility","\u{1F3C3}","Carrera",e],["hide","\u{1F648}","Escondite",n.day<5?"\u{1F512}":e],["stroll","\u{1F6B6}","Pasear",e],["kick","\u26BD","Pelota",e],["bench","\u{1FA91}","Descansar",n.asleep?"\u{1F4A4}":n.stats.energia>=95?"\u26A1":""],["closepark","\u{1F6AA}","Salir",""],["help","\u2753","Ayuda",""]];he("#actions").innerHTML=t.map(([i,s,r,a])=>`<button class="opt ${a?"off":""}" data-act="${i}" data-say="${r}" ${a?'aria-disabled="true"':""} aria-label="${r}"><span class="oi">${s}</span><span class="on">${r}</span>${a?`<span class="badge">${a}</span>`:""}</button>`).join("")}function av(n){let e=Ue.pet,t=En.find(s=>s.id==="parque");if(n==="closepark")return Ys();if(pt)return;if(n==="agility")return Ys(),lM();if(n==="hide")return Ys(),nm();let i=(s,r,a,o)=>{applyFx(e,s),today(e).play+=r==="\u{1FA91}"?0:1,addEvent(e,r,a);let c=Object.entries(s).filter(([,l])=>l>0).map(([l])=>STAT_ICON[l]).join("");ft(r,c?"+"+c:""),speak(o),dogSound("happy",lt(),.7),R.mode="happy",R.modeT=1,pt=!1,outdoorRisk(e),saveRoot(),mt(),Op()};if(pt=!0,n==="stroll"){let s=[0,1,2,3,4].map(a=>[t.x+Math.cos(a*Math.PI/2)*3.2,t.z+Math.sin(a*Math.PI/2)*3.2]),r=()=>{let a=s.shift();if(!a)return today(e).walk=1,i({felicidad:15,energia:-10,hidratacion:-5},"\u{1F6B6}","Paseo alrededor de la fuente.","\xA1Qu\xE9 lindo paseo!");Tn([a[0],a[1],0],r)};r()}else if(n==="kick"){let s=wt.m.position;Tn([s.x-.9,s.z,Math.PI/2],()=>{wt.v.set(6+Math.random()*3,0,(Math.random()-.5)*6),xt("pop"),dogSound("bark",lt()),R.mode="happy",R.modeT=1.5,setTimeout(()=>i({felicidad:16,energia:-9},"\u26BD","Jug\xF3 con la pelota en el parque.","\xA1Gol!"),1500)})}else n==="bench"&&Tn([t.x-3.2,t.z+1,Math.PI/2],()=>{R.mode="sleep",setTimeout(()=>i({energia:10},"\u{1FA91}","Descansaron en la banca.","Descansito"),1800)})}function Tn(n,e){R.path={x:n[0],z:n[1],ry:n[2],done:e}}function gi(n){let e=he("#fade");e.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>e.classList.remove("on"),60)},380)}function ov(){gi(zp)}function zp(){Pn(Te.root,bt),Pn(Ke.root,bt),Gt=bt,fe="home",R.x=0,R.z=2.8,R.ry=Math.PI,R.path=null,H.x=2.4,H.z=3.4,H.ry=Math.PI,Ue.pet.asleep&&(R.x=Sl.bed[0],R.z=Sl.bed[1]),bl(Ue.pet),ys(),he("#actions").hidden=!1,he("#prompt").hidden=!0,speak("Casa"),setTimeout(()=>dogSound("bark",lt(),.6),600),ti("open:casa")}function cv(){pt=!1,gi(()=>{let n=Ue.pet.asleep,e=R.x,t=R.z,i=R.ry;n||Pn(Te.root,ae),Pn(Ke.root,ae),Gt=ae,fe="town",no(-16,-9.4,0),n&&(R.x=e,R.z=t,R.ry=i,speak("Luna se queda durmiendo en su camita. \xA1Mientras, puedes pasear!")),he("#actions").hidden=!0,ti("close:casa")})}function Wr(n){n=[["help","\u2753","Ayuda",""]].concat(n),he("#actions").innerHTML=n.filter(Boolean).map(([e,t,i,s,r])=>`<button class="opt ${s?"off":""}" data-act="${e}" data-say="${i}" ${s?'aria-disabled="true"':""} aria-label="${i}"><span class="oi">${t}</span><span class="on">${i}</span>${r?`<span class="ofx">${r}</span>`:""}${s?`<span class="badge">${s}</span>`:""}</button>`).join(""),typeof Wn=="function"&&setTimeout(Wn,0)}function Qs(n){let e=he("#roominfo");e.innerHTML=n||"",e.hidden=!n}var El=null;function pn(n,e){he("#card3-box").innerHTML=`${n}<div class="row-btns"><button class="go" data-card="ok" aria-label="Continuar">\u25B6</button></div>`,he("#card3").hidden=!1,El=e||null}function $u(){if(he("#card3").hidden)return;he("#card3").hidden=!0;let n=El;El=null,n&&n()}var Bp=n=>"\u2605".repeat(Math.round(n/20))+"\u2606".repeat(5-Math.round(n/20)),Yu=n=>n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":n.stats.saciedad<10?"\u{1F356}":"";function so({coat:n="#ffffff",skin:e="#f2c9a0",hair:t="#6b4a2b",extra:i=null}){let s=new we;for(let c of[-.18,.18])s.add(Q(C(P.cyl(.11,.11,.8,8),"#4a4a6a"),c,.4,0));s.add(Q(C(P.cap(.38,.6),n),0,1.25,0));let r=Q(C(P.sph(.34,18,14),e),0,2.05,0);s.add(r),s.add(Q(C(new us(.36,16,10,0,Math.PI*2,0,Math.PI/2.2),t),0,2.12,-.03));for(let c of[-.12,.12])s.add(Q(C(P.sph(.045),"#2a1d18",{cast:!1}),c,2.1,.3));let a=C(new dn(.09,.022,6,12,Math.PI),"#c0505a",{cast:!1});a.rotation.z=Math.PI,a.position.set(0,1.97,.31),s.add(a);for(let c of[-.2,.2])s.add(Q(C(P.sph(.05),"#ff9fb4",{cast:!1}),c,2,.27));let o=[];for(let c of[-1,1]){let l=new we;l.position.set(c*.45,1.55,0);let h=Q(C(P.cap(.09,.45),n),0,-.3,0);l.add(h),l.rotation.z=c*.15,s.add(l),o.push(l)}return i&&i(s),s.userData={arms:o,t:Math.random()*5},s}function Zu(n,e){if(!n)return;let t=n.userData;t.t+=e,n.position.y=Math.abs(Math.sin(t.t*2))*.04,t.arms[1].rotation.z=.15+Math.max(0,Math.sin(t.t*1.3))*.9*(t.wave>0?1:.15),t.wave>0&&(t.wave-=e)}function Nl(n,{floor:e,back:t,side:i,rug:s}){let r=Gr(n);if(r.sun.position.set(4,10,6),r.sun.target.position.set(0,0,0),n.background=new Xe("#ffeef8"),n.add(Q(C(P.box(12,.2,9),e,{cast:!1,recv:!0}),0,-.1,0)),n.add(Q(C(P.box(12,5,.2),t,{recv:!0}),0,2.5,-4.5)),n.add(Q(C(P.box(.2,5,9),i,{recv:!0}),-6,2.5,0)),n.add(Q(C(P.box(2.6,1.8,.1),"#ffffff"),3.2,2.9,-4.38)),n.add(Q(C(P.box(2.3,1.5,.1),"#9fdcff",{cast:!1}),3.2,2.9,-4.32)),s){let a=C(P.cyl(2,2,.04,32),s,{cast:!1,recv:!0});a.position.set(0,.02,.8),n.add(a)}}var hi=new On,Xi=new On,wi=new On,an={},Ss=null;function lv(){Nl(hi,{floor:"#dff4f2",back:"#c9efe9",side:"#ffffff",rug:null});let n=C(P.box(2.4,.12,1.6),"#ff9fc8",{cast:!1,recv:!0});n.position.set(0,.06,-1.6),hi.add(n);let e=C(P.box(1.6,2.2,.8),"#ffffff");e.position.set(-4.2,1.1,-3.8),hi.add(e);let t=new we;t.add(C(P.box(.2,.7,.05),"#ff5c5c")),t.add(C(P.box(.7,.2,.05),"#ff5c5c")),t.position.set(-4.2,1.6,-3.38),hi.add(t);for(let s=0;s<3;s++)hi.add(Q(C(P.cyl(.12,.12,.35,10),["#6fc2ff","#ffd23f","#8be08b"][s]),-4.6+s*.4,2.4,-3.8));let i=new we;i.add(Q(C(P.box(1.2,.15,1),"#b8bcc8"),0,.08,0)),i.add(Q(As("\u2696\uFE0F",.7),0,.6,-.45)),i.position.set(3.4,0,-2.6),hi.add(i),hi.add(Q(As("\u{1F489}",1.3),-1.6,3.2,-4.35)),an.vet=so({coat:"#ffffff",skin:"#f6d2b0",hair:"#3b2a20",extra:s=>{let r=C(new dn(.22,.03,6,16),"#3aa89c");r.position.set(0,1.62,.3),r.rotation.x=1.2,s.add(r)}}),an.vet.position.set(1.6,0,-2.6),an.vet.rotation.y=-.6,hi.add(an.vet),Ss=Ii("\u{1F489}",.9),Ss.visible=!1,hi.add(Ss)}function kp(){if(fe!=="room"||bn!=="vet")return;let n=Ue.pet,e=VACCINES.find(i=>["disponible","atrasada"].includes(vaccineStatus(n,i))),t=dewormDue(n);Wr([n.sick&&!n.sick.treated?["cure","\u{1F48A}","Curar","","\u{1FA7A}"]:null,["vac","\u{1F489}","Vacuna",e?"":"\u2714","\u{1F6E1}\uFE0F"],["deworm","\u{1F41B}","Pastilla",t?"":"\u2714","\u{1F6E1}\uFE0F"],["check","\u{1FA7A}","Revisar","","\u2696\uFE0F"],["exit","\u{1F6AA}","Salir",""]]),Qs(`<div class="vax">${VACCINES.map(i=>{let s=vaccineStatus(n,i);return`<span class="vx ${s}" title="${i.name}">${s==="pendiente"?"\u23F3":"\u{1F489}"}<b>${s==="aplicada"?"\u2714":s==="atrasada"?"\u2757":s==="disponible"?"\u{1F449}":""}</b></span>`}).join("")}</div>`)}function hv(n){let e=Ue.pet,t=e.day;if(pt)return;if(n==="check")return pn(uv(e));let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(e,s)));n==="vac"&&!i||n==="deworm"&&!dewormDue(e)||(pt=!0,Tn([0,-1.6,Math.PI*.75],()=>{an.vet.userData.wave=2;let s=n==="vac"?"\u{1F489}":"\u{1F48A}";Ss.material.map=Ts(s),Ss.material.needsUpdate=!0,Ss.position.set(R.x+.6,1.6,R.z+.3),Ss.visible=!0,n==="vac"?(dogSound("sad",lt()),speak("\xA1Un pinchacito r\xE1pido!")):speak(n==="deworm"?"Una pastilla contra los bichitos":"Medicina para curarse"),setTimeout(()=>{Ss.visible=!1,n==="vac"&&(e.vaccines[i.id]=t,applyFx(e,{felicidad:-4}),addEvent(e,"\u{1F489}",`Vacuna aplicada: ${i.name}.`),walkUnlocked(e)&&addMilestone(e,"vacunas","\u{1F6E1}\uFE0F","Luna complet\xF3 sus vacunas de cachorro."),ft("\u{1F489}","\u{1F6E1}\uFE0F"),speak("\xA1Qu\xE9 valiente! Toma un premio.")),n==="deworm"&&(e.deworm.push(t),addEvent(e,"\u{1F48A}","Luna tom\xF3 su desparasitante."),ft("\u{1F41B}","\u2714"),speak("\xA1Listo, sin bichitos!")),n==="cure"&&(e.sick.treated=!0,e.stats.salud=clamp(e.stats.salud+10,0,100),addEvent(e,"\u{1F48A}","La veterinaria le dio tratamiento a Luna."),ft("\u{1F48A}","+\u{1FA7A}"),speak("Ahora necesita descansar, comer y beber agua")),it(hi,"\u2B50",new D(R.x,1.4,R.z),5),R.mode="happy",R.modeT=1.2,setTimeout(()=>dogSound("happy",lt()),400),pt=!1,saveRoot(),mt(),kp()},1600)}))}function uv(n){let e=targetWeight(n.day),t=(n.weight-e)/e,i=VACCINES.filter(s=>n.vaccines[s.id]).length;return speak(t<-.12?"Luna necesita comer un poco m\xE1s":t>.12?"Luna necesita m\xE1s ejercicio":"\xA1Luna est\xE1 muy sana!"),`<div class="result"><h2>\u{1FA7A}</h2>
    <div class="checkrow"><span>\u2696\uFE0F</span><b>${fmtWeight(n.weight)}</b><span>${t<-.12?"\u{1F356}\u2757":t>.12?"\u{1F3C3}":"\u{1F44D}"}</span></div>
    <div class="checkrow"><span>\u{1F489}</span><b>${"\u2714".repeat(i)}${"\xB7".repeat(VACCINES.length-i)}</b></div>
    <div class="checkrow"><span>\u{1F41B}</span><b>${dewormDue(n)?"\u2757":"\u2714"}</b></div>
    ${n.sick?`<div class="checkrow"><span>\u{1F912}</span><b>${n.sick.treated?"\u{1F48A}\u2714":"\u{1F48A}\u2757"}</b></div>`:""}</div>`}function dv(){Nl(Xi,{floor:"#f6d7b0",back:"#ffe1ef",side:"#fff3c4",rug:"#ffd23f"});let n=C(P.box(4,1,1),"#c98c55");n.position.set(1.5,.5,-2.8),Xi.add(n),Xi.add(Q(C(P.box(4.2,.12,1.2),"#e6a96c"),1.5,1.05,-2.8));for(let e=0;e<3;e++){Xi.add(Q(C(P.box(3.6,.1,.7),"#b07840"),-3.2,.9+e*1.1,-4));for(let t=0;t<5;t++){let i=["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][(t+e)%5];Xi.add(Q(C(t%2?P.sph(.22,10,8):P.box(.4,.4,.4),i),-4.6+t*.7,1.2+e*1.1,-4))}}Xi.add(Q(As("\u{1F6D2}",1.3),1.5,3.4,-4.35)),an.tienda=so({coat:"#ff8fc8",skin:"#e8b48a",hair:"#2a1d18",extra:e=>{let t=C(P.box(.6,.55,.05),"#ffffff");t.position.set(0,1.15,.36),e.add(t)}}),an.tienda.position.set(1.5,0,-3.8),Xi.add(an.tienda)}function Hp(){if(fe!=="room"||bn!=="tienda")return;let n=Ue.pet;Wr(SHOP.map(e=>{let t=e.acc&&n.acc.owned.includes(e.id)||e.once&&n.items[e.id];return["buy:"+e.id,e.icon,e.short,t?"\u2714":n.bones<e.price?"\u{1F9B4}":"",`\u{1F9B4}${e.price}`]}).concat([["exit","\u{1F6AA}","Salir",""]])),Qs(`<div class="wallet">\u{1F9B4} ${n.bones}</div>`)}function fv(n){let e=Ue.pet,t=SHOP.find(i=>i.id===n);if(!(!t||e.bones<t.price)){if(e.bones-=t.price,t.acc?(e.acc.owned.push(t.id),e.acc.worn=t.id):t.id==="premio"?e.items.premio+=3:t.id==="champu"?e.items.champu+=3:e.items[t.id]=!0,addEvent(e,"\u{1F6D2}",`Compraste: ${t.name}.`),an.tienda.userData.wave=2,it(Xi,t.icon,new D(R.x,1.5,R.z),4,.7),ft(t.icon,"\u2714"),speak(t.acc?"\xA1Qu\xE9 guapa!":t.short),xt("coin"),R.mode="happy",R.modeT=1.2,dogSound("happy",lt()),Ue.pet.bones>=0){let i=Fl(e);i.seen.shop=!0}saveRoot(),mt(),Hp()}}function pv(){Nl(wi,{floor:"#c8e6a0",back:"#fff3b8",side:"#ffd6e8",rug:null});let n=C(P.box(4.4,2,.12),"#2f5d46");n.position.set(0,2.6,-4.32),wi.add(n),wi.add(Q(C(P.box(4.7,.15,.25),"#b07840"),0,1.55,-4.25));for(let t=0;t<4;t++)wi.add(Q(C(P.cone(.25,.6,12),"#ff9f43"),-3.6+t*1.2,.3,2.6));let e=C(new dn(.7,.07,8,24),"#ff5c8a");e.position.set(3.6,.9,1.4),wi.add(e),wi.add(Q(C(P.cyl(.05,.05,1.6,6),"#888888"),2.85,.8,1.4)),wi.add(Q(C(P.cyl(.05,.05,1.6,6),"#888888"),4.35,.8,1.4)),an.escuela=so({coat:"#6f8cff",skin:"#c99872",hair:"#1c1414",extra:t=>{let i=C(P.cyl(.03,.03,.4,6),"#ffffff");i.position.set(.55,1.2,.2),i.rotation.z=.8,t.add(i)}}),an.escuela.position.set(-2.4,0,-2.8),an.escuela.rotation.y=.5,wi.add(an.escuela)}function Gp(){if(fe!=="room"||bn!=="escuela")return;let n=Ue.pet,e=today(n),t=e.sessions>=MAX_SESSIONS?"\u23F3":Yu(n);Wr(TRICKS.map(i=>["trick:"+i.id,i.icon,i.short,n.day<i.min?"\u{1F512}":t,Bp(n.tricks[i.id]||0)]).concat([["exit","\u{1F6AA}","Salir",""]])),Qs(`<div class="wallet">\u{1F393} ${"\u25CF".repeat(e.sessions)}${"\u25CB".repeat(Math.max(0,MAX_SESSIONS-e.sessions))}</div>`)}var mv={up:"\u2B06\uFE0F",right:"\u27A1\uFE0F",down:"\u2B07\uFE0F",left:"\u2B05\uFE0F"},Vn=null;function gv(n){let e=Ue.pet,t=TRICKS.find(s=>s.id===n),i=e.tricks[n]||0;Vn={t,len:3+Math.floor(i/34),round:0,ok:0,seq:[],idx:0,phase:"show",pt:0},he("#actions").hidden=!0,he("#train3").hidden=!1,speak("\xA1Mira las flechas y luego rep\xEDtelas!"),Vp()}function Vp(){let n=Vn;n.seq=Array.from({length:n.len},()=>["up","right","down","left"][Math.floor(Math.random()*4)]),n.idx=0,n.phase="show",n.pt=0,Tl()}function Tl(){let n=Vn;if(!n)return;let e=n.phase==="show"?Math.floor((n.pt-.5)/.75):-1;he("#t3-seq").innerHTML=n.seq.map((t,i)=>{let s=n.phase==="show"?i===e?"on":i<e?"past":"":i<n.idx?"done":"";return`<span class="t3a ${s}">${s?mv[t]:"\u2754"}</span>`}).join(""),he("#t3-head").textContent=`${n.t.icon} ${"\u25CF".repeat(n.round)}${"\u25CB".repeat(3-n.round)} ${n.phase==="show"?"\u{1F440}":n.phase==="input"?"\u{1F446}":""}`}var xv={sentarse:"sit",venir:"happy",pata:"paw",quieta:"sit",echarse:"lie",vuelta:"spin"};function Wp(n){let e=Vn;!e||e.phase!=="input"||(n===e.seq[e.idx]?(e.idx++,xt("pop"),e.idx>=e.seq.length&&(e.ok++,Du(!0))):Du(!1),Tl())}function Du(n){let e=Vn;e.round++,e.phase="pause",e.pt=0,n?(R.mode=xv[e.t.id]||"sit",R.modeT=1.6,it(wi,"\u2B50",new D(R.x,1.6,R.z),5),dogSound("happy",lt()),an.escuela.userData.wave=1.5):(ft("\u274C"),dogSound("sad",lt()))}function _v(n){let e=Vn;e&&(e.pt+=n,e.phase==="show"?(e.pt>.6+e.seq.length*.75&&(e.phase="input",e.pt=0),Tl()):e.phase==="input"&&e.pt>5+e.seq.length?(Du(!1),Tl()):e.phase==="pause"&&e.pt>1.7&&(e.round>=3?yv():Vp()))}function yv(){let n=Vn,e=Ue.pet;Vn=null,he("#train3").hidden=!0;let t=e.tricks[n.t.id]||0,i=Math.min(100,t+n.ok*9+(n.ok===3?6:0)+(e.stats.felicidad>70?4:0)+2),s=today(e);s.sessions++,s.train++,e.tricks[n.t.id]=i,e.bones+=n.ok,applyFx(e,{energia:-8,saciedad:-3,felicidad:4+n.ok*2}),i>=100&&t<100?addMilestone(e,"trick-"+n.t.id,"\u{1F3C6}",`Luna aprendi\xF3: \xAB${n.t.name}\xBB.`):addEvent(e,"\u{1F393}",`Practicaron \xAB${n.t.name}\xBB (${i}%).`),saveRoot(),mt(),Ul(n.ok,n.ok,`<span>${n.t.icon} ${Bp(i)}</span>`,()=>{he("#actions").hidden=!1,Gp()})}function Ul(n,e,t,i){let s=["\xA1Otra vez!","\xA1Bien!","\xA1Muy bien!","\xA1Genial!"][clamp(n,0,3)];speak(s),setTimeout(()=>dogSound(n?"happy":"sad",lt()),800),pn(`<div class="result"><div class="stars">${"\u2B50".repeat(n)}<span class="dim">${"\u2B50".repeat(3-n)}</span></div><h2>${s}</h2>
    <div class="gains">${e?`<span>\u{1F9B4} +${e}</span>`:""}${t||""}</div></div>`,i)}var bn=null,vv={vet:()=>hi,tienda:()=>Xi,escuela:()=>wi};function Mv(n){let e=Ue.pet;if(e.asleep&&n!=="tienda"){speak("Luna est\xE1 durmiendo. Despi\xE9rtala primero y vengan juntas."),ft("\u{1F4A4}");return}gi(()=>{let t=Pl()&&!e.asleep;Gt=vv[n](),Pn(Ke.root,Gt),t&&(Pn(Te.root,Gt),R.x=0,R.z=2.8,R.ry=Math.PI,R.path=null),fe="room",bn=n,H.x=2.4,H.z=3.4,H.ry=Math.PI,Xp(),he("#actions").hidden=!1,he("#prompt").hidden=!0,speak(En.find(i=>i.id===n).name),setTimeout(()=>dogSound("bark",lt(),.6),600),an[n]&&(an[n].userData.wave=2),ti("open:"+n)})}function Xp(){bn==="vet"?kp():bn==="tienda"?Hp():bn==="escuela"&&Gp()}function Sv(n){if(n==="exit")return qp(bn);if(bn==="vet")return hv(n);if(bn==="tienda"&&n.startsWith("buy:"))return fv(n.slice(4));if(bn==="escuela"&&n.startsWith("trick:"))return gv(n.slice(6))}function qp(n){pt=!1,Vn=null,he("#train3").hidden=!0,gi(()=>{let e=Pl();e&&Pn(Te.root,ae),Pn(Ke.root,ae),Gt=ae,fe="town",bn=null;let t=ws.find(i=>i.pl.id===n);(e?no:Dp)(t?t.x:-16,t?t.z+1.6:-9.4,0),he("#actions").hidden=!0,Qs(""),ti("close:"+n)})}var vs=null;function bv(){let n=En.find(e=>e.id==="lago");vs=new we,vs.add(Q(C(P.cyl(.35,.45,1,12),"#b8bcc8"),0,.5,0)),vs.add(Q(C(P.cyl(.45,.35,.2,14),"#dfe3ee"),0,1.05,0)),vs.add(Q(C(P.cyl(.3,.3,.05,14),"#6cc8ff",{cast:!1}),0,1.15,0)),vs.position.set(n.x-6.5,0,n.z+3),ae.add(vs),Ft.circles.push({x:n.x-6.5,z:n.z+3,r:.5})}function $p(){fe="lake",speak("Lago"),dogSound("bark",lt(),.6),Yp(),he("#actions").hidden=!1,he("#prompt").hidden=!0,ti("open:lago")}function Yp(){if(fe!=="lake")return;let n=Ue.pet,e=today(n),t=n.stats;Wr([["duckfeed","\u{1F33E}","Dar de comer","","\u{1F986}\u{1F9B4}"],["ducks","\u{1F986}","Mirar patos",n.asleep?"\u{1F4A4}":e.ducks?"\u23F3":"","\u{1F496}"],n.day>=4?["drink","\u{1F6B0}","Beber",n.asleep?"\u{1F4A4}":t.hidratacion>=92?"\u{1F4A7}":"","\u{1F4A7}"]:null,n.day>=8?["splash","\u{1F4A6}","Chapotear",Yu(n),"\u{1F496}"]:null,["closelake","\u{1F6AA}","Salir",""]])}function Ev(n){let e=Ue.pet,t=En.find(r=>r.id==="lago"),i=today(e);if(n==="closelake"){fe="town",he("#actions").hidden=!0;return}if(pt)return;if(n==="duckfeed")return fe="town",he("#actions").hidden=!0,fM();pt=!0;let s=(r,a,o,c,l)=>{applyFx(e,r),a&&Xa(a),addEvent(e,o,c);let h=Object.entries(r).filter(([,d])=>d>0).map(([d])=>STAT_ICON[d]).join("");ft(o,h?"+"+h:""),speak(l),dogSound("happy",lt(),.7),R.mode="happy",R.modeT=1,pt=!1,outdoorRisk(e),saveRoot(),mt(),Yp()};n==="ducks"&&Tn([t.x-3.2,t.z,Math.PI/2],()=>{Ya.forEach(o=>{o.userData.r=1.2});let r=0,a=setInterval(()=>{xt("quack"),++r>=3&&clearInterval(a)},450);it(ae,"\u{1F496}",new D(R.x,1.4,R.z),4),setTimeout(()=>{Ya.forEach((o,c)=>{o.userData.r=1.5+c*.9}),i.ducks=!0,s({felicidad:10},"play","\u{1F986}","Miraron a los patos.","\xA1Cuac cuac!")},1800)}),n==="drink"&&Tn([vs.position.x+.9,vs.position.z,-Math.PI/2],()=>{R.mode="eat",R.modeT=1.6,setTimeout(()=>s({hidratacion:30},"water","\u{1F6B0}","Bebi\xF3 del bebedero del lago.","\xA1Glu glu!"),1600)}),n==="splash"&&Tn([t.x-4.6,t.z+2.6,Math.PI/2],()=>{R.mode="happy",R.modeT=2;let r=setInterval(()=>it(ae,"\u{1F4A6}",new D(R.x+.5,.6,R.z),2,.5),250);setTimeout(()=>{clearInterval(r),s({felicidad:18,energia:-10,higiene:-18},"play","\u{1F4A6}","Chapote\xF3 en la orilla.","\xA1Splash!")},1800)})}var en=new On,Gn=null;function Tv(){fe="forestmenu";let n=Ue.pet;speak("Bosque"),dogSound("bark",lt(),.6);let e=["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"];Wr(LEVEL_DEFS.map(t=>{let i=n.levels[t.id],s=t.id===1||n.levels[t.id-1]&&n.levels[t.id-1].done;return["level:"+t.id,e[t.id-1],String(t.id),n.day<t.minDay||!s?"\u{1F512}":Yu(n),i&&i.done?"\u2B50":""]}).concat([["closeforest","\u{1F6AA}","Salir",""]])),he("#actions").hidden=!1,he("#prompt").hidden=!0,ti("open:bosque")}function wv(n){if(n==="closeforest"){fe="town",he("#actions").hidden=!0;return}n.startsWith("level:")&&Av(Number(n.slice(6)))}function Av(n){let e=LEVEL_DEFS.find(i=>i.id===n),t=buildLevel(e);gi(()=>{for(;en.children.length;)en.remove(en.children[0]);let i=Gr(en);en.background=new Xe(e.sky[0]),en.fog=new rs(e.sky[0],18,45),i.sun.position.set(5,12,10);let s=e.cave?"#4c3c70":"#b07840",r=e.cave?"#80f0ff":"#58b038",a=P.box(1,1,2),o=[];for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++){let M=t.grid[g][E];(M==="#"||M==="g")&&o.push([E,g,M])}let c=new os(a,Br(s),o.length);c.receiveShadow=!0,c.castShadow=!0;let l=new ut;o.forEach(([g,E],M)=>{l.makeTranslation(g+.5,t.h-E-.5,0),c.setMatrixAt(M,l)}),en.add(c);let h=o.filter(g=>g[2]==="g"),d=new os(P.box(1.02,.25,2.04),Br(r),h.length);d.receiveShadow=!0,h.forEach(([g,E],M)=>{l.makeTranslation(g+.5,t.h-E-.12,0),d.setMatrixAt(M,l)}),en.add(d);for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++)t.grid[g][E]==="="&&en.add(Q(C(P.box(1,.25,1.6),"#d8a060",{recv:!0}),E+.5,t.h-g-.13,0));let u=mi(n*77);for(let g=0;g<t.w/3;g++){let E=u()*t.w,M=-4-u()*6;if(e.cave)en.add(Q(C(P.cone(.3+u()*.4,1+u(),6),u()<.5?"#c0a0ff":"#80f0ff"),E,2+u()*2,M));else{let v=new we;v.add(Q(C(P.cyl(.2,.3,2,8),"#9a6236"),0,1,0));for(let w=0;w<3;w++)v.add(Q(C(P.cone(1.3-w*.3,1.5,9),w%2?"#3f9a5a":"#2f8a4e"),0,2.3+w*.9,0));v.position.set(E,1,M),en.add(v)}}en.add(Q(C(new zn(t.w+60,40),e.cave?"#2c2850":"#a8d890",{cast:!1}),t.w/2,8,-12));let m=t.ents.map(g=>({...g,alive:!0}));for(let g of m){if(g.t==="bone"&&(g.m=qu(),g.m.scale.setScalar(.8)),g.t==="thorn"){g.m=new we;for(let E=0;E<4;E++){let M=C(P.cone(.13,.45,6),"#2f7a3c");M.position.set(-.3+E*.2,.2,E%2*.3-.15),g.m.add(M)}g.m.add(Q(C(P.sph(.08),"#e03c3c"),0,.2,.3))}if(g.t==="hog"){g.m=new we;let E=C(P.sph(.4,14,10),"#7c5838");E.scale.set(1.1,.8,.9),E.position.y=.32,g.m.add(E);for(let M=0;M<7;M++){let v=C(P.cone(.08,.3,5),"#4a3020"),w=-1.2+M*.4;v.position.set(Math.sin(w)*.35,.32+Math.cos(w)*.32,0),v.rotation.z=-w,g.m.add(v)}g.face=Q(C(P.sph(.16),"#e8c8a0"),.42,.25,0),g.m.add(g.face)}if(g.t==="bee"){g.m=new we;let E=C(P.sph(.3,12,10),"#f8d030");E.scale.set(1.3,1,1),g.m.add(E);for(let M of[-.12,.15]){let v=C(new dn(.27,.06,6,14),"#222222");v.rotation.y=Math.PI/2,v.position.x=M,g.m.add(v)}g.wings=[];for(let M of[-1,1]){let v=new St(new hs(.25,12),new An({color:"#ffffff",transparent:!0,opacity:.8,side:Rn}));v.position.set(0,.3,M*.15),v.rotation.x=Math.PI/2,g.m.add(v),g.wings.push(v)}}if(g.t==="goal"){g.m=new we,g.m.add(Q(C(P.box(1.6,1.2,1.4),"#f0d090"),0,.6,0));let E=C(P.cone(1.25,.8,4),"#d84838");E.rotation.y=Math.PI/4,E.position.y=1.6,g.m.add(E),g.m.add(Q(C(P.box(.6,.8,.05),"#3c2418"),0,.4,.71)),g.m.add(Q(C(P.cyl(.04,.04,1.4,6),"#555555"),.6,2.4,0)),g.flag=Q(C(P.box(.6,.35,.04),"#ffd23f"),.92,2.9,0),g.m.add(g.flag)}g.m&&en.add(g.m)}let x=(g,E)=>{if(g<0||g>=t.w)return!0;if(E<0||E>=t.h)return!1;let M=t.grid[E][g];return M==="#"||M==="g"},y=(g,E)=>E>=0&&E<t.h&&g>=0&&g<t.w&&t.grid[E][g]==="=",p=t.h-1;for(;p>0&&x(e.start,p-1);)p--;let f={x:e.start*TILE+8,y:p*TILE,vx:0,vy:0,onGround:!1,face:1,lastGround:-99,buffer:-99,hearts:3,inv:0,safe:null};f.safe={x:f.x,y:f.y},Gn={def:e,L:t,ents:m,pl:f,solidT:x,oneWay:y,tick:0,time:0,bones:0,over:!1},Te.root.parent&&Te.root.parent.remove(Te.root),en.add(Te.root),Gt=en,fe="forest",he("#actions").hidden=!0,he("#forestHud").hidden=!1,Va(),speak("\xA1Lleva a Luna hasta la casita! Salta con A y recoge huesos.")})}function Va(){Gn&&(he("#forestHud").innerHTML=`<span>${"\u2764\uFE0F".repeat(Gn.pl.hearts)}${"\u{1F90D}".repeat(3-Gn.pl.hearts)}</span><span>\u{1F9B4} ${Gn.bones}</span><button class="hbtn" data-act="quitforest" aria-label="Salir">\u2716</button>`)}function Rv(n){let e=Gn;if(!e||e.over)return;let t=e.pl,i=PHYS;e.tick++,e.time+=n;let s=clamp(Oe.right-Oe.left+Oe.jx,-1,1);(Oe.a||Oe.jumpPress)&&(t.buffer=e.time),Oe.jumpPress=!1,Oe.a=!1;let r=Oe.aHeld||Oe.up,a=s*i.RUN,o=i.ACCEL*(t.onGround?1:i.AIR)*n;t.inv<1&&(t.vx+=clamp(a-t.vx,-o,o)),Math.abs(s)>.2&&(t.face=Math.sign(s)),t.onGround&&(t.lastGround=e.time),e.time-t.buffer<=i.BUFFER/60&&e.time-t.lastGround<=i.COYOTE/60&&(t.vy=-i.JUMP_V,t.buffer=-99,t.lastGround=-99,t.onGround=!1,xt("pop"));let c=t.vy<0?i.G_RISE:i.G_FALL;t.vy<0&&!r?c=i.G_FALL*1.4:r&&Math.abs(t.vy)<.4*i.JUMP_V&&(c*=i.APEX_HANG),t.vy=Math.min(t.vy+c*n,i.MAX_FALL);let l=6,h=11;t.x+=t.vx*n;for(let v of[Math.floor((t.y-h)/TILE),Math.floor((t.y-1)/TILE)])t.vx>0&&e.solidT(Math.floor((t.x+l)/TILE),v)&&(t.x=Math.floor((t.x+l)/TILE)*TILE-l-.01,t.vx=0),t.vx<0&&e.solidT(Math.floor((t.x-l)/TILE),v)&&(t.x=(Math.floor((t.x-l)/TILE)+1)*TILE+l+.01,t.vx=0);let d=t.y;t.y+=t.vy*n,t.onGround=!1;let u=[Math.floor((t.x-l+1)/TILE),Math.floor((t.x+l-1)/TILE)];if(t.vy>=0){let v=Math.floor(t.y/TILE);for(let w of u){let _=v*TILE;(e.solidT(w,v)||e.oneWay(w,v)&&d<=_+.5)&&(t.y=_,t.vy=0,t.onGround=!0)}}else{let v=Math.floor((t.y-h)/TILE);for(let w of u)e.solidT(w,v)&&(t.y=(v+1)*TILE+h,t.vy=0)}t.onGround&&t.inv<=0&&(t.safe={x:t.x,y:t.y}),t.inv>0&&(t.inv-=n);let m=v=>{t.inv>0||(t.hearts--,t.inv=1.3,t.vx=(t.x<v?-1:1)*150,t.vy=-200,dogSound("sad",lt(),.6),Va(),t.hearts<=0&&_u(!1))};if(t.y>e.L.h*TILE+40){if(t.hearts--,Va(),t.hearts<=0)return _u(!1);t.x=t.safe.x-t.face*24,t.y=t.safe.y-20,t.vx=t.vy=0,t.inv=1.3}let x={l:t.x-l,r:t.x+l,t:t.y-h,b:t.y},y=(v,w,_,T)=>x.r>v&&x.l<_&&x.b>w&&x.t<T;for(let v of e.ents)if(v.alive){if(v.t==="bone"&&y(v.x,v.y,v.x+9,v.y+7)&&(v.alive=!1,en.remove(v.m),e.bones++,xt("coin"),Va()),v.t==="thorn"&&y(v.x+2,v.y+2,v.x+14,v.y+10)&&m(v.x+8),v.t==="hog"){v.x+=v.dir*22*n;let w=Math.floor((v.x+(v.dir>0?14:2))/TILE),_=Math.floor((v.y+12)/TILE),T=Math.floor((v.y+4)/TILE);(e.solidT(w,T)||!e.solidT(w,_))&&(v.dir*=-1)}if(v.t==="bee"&&(v.ph+=n,v.x=v.x0+Math.sin(v.ph*1.6)*v.range/2,v.yy=v.y+Math.sin(v.ph*4)*3),v.t==="hog"||v.t==="bee"){let w=v.t==="bee"?v.yy:v.y;y(v.x+2,w+1,v.x+14,w+10)&&(t.vy>40&&x.b-w<9?(v.alive=!1,en.remove(v.m),t.vy=-i.JUMP_V*.65,e.bones++,xt("coin"),it(en,"\u2B50",v.m.position,3,.5),Va()):m(v.x+8))}if(v.t==="goal"&&y(v.x,v.y-60,v.x+28,v.y+32))return _u(!0)}let p=e.L.h,f=v=>p-v/TILE;for(let v of e.ents)!v.alive||!v.m||(v.t==="bone"&&(v.m.position.set(v.x/TILE+.28,f(v.y+4),0),v.m.rotation.y+=n*2),v.t==="thorn"&&v.m.position.set(v.x/TILE+.5,f(v.y+10),0),v.t==="hog"&&(v.m.position.set(v.x/TILE+.5,f(v.y+10),0),v.m.rotation.y=v.dir>0?0:Math.PI),v.t==="bee"&&(v.m.position.set(v.x/TILE+.5,f((v.yy??v.y)+6),0),v.wings.forEach(w=>{w.rotation.y=Math.sin(e.tick*.9)*.6})),v.t==="goal"&&(v.m.position.set(v.x/TILE+.9,f(v.y+32),0),v.flag.position.y=2.9+Math.sin(e.tick*.1)*.05));R.x=t.x/TILE,R.z=0,Te.root.position.set(t.x/TILE,f(t.y),0),Te.root.rotation.y=t.face>0?Math.PI/2:-Math.PI/2,Te.root.visible=!(t.inv>0&&Math.floor(e.tick/4)%2);let g=stageOf(Ue.pet.day);Te.root.scale.setScalar(to[Math.max(1,g.size)]*.9),Rs(Te,n,{mode:t.onGround?Math.abs(t.vx)>10?"walk":"idle":"happy",speed:Math.abs(t.vx)/30});let E=t.x/TILE+t.face*1.5,M=Math.max(p*.45,f(t.y)+1.5);Mt.position.lerp(new D(E,M+1.2,10.5),1-Math.exp(-5*n)),Mt.lookAt(Mt.position.x,Mt.position.y-1.6,0)}function _u(n){let e=Gn,t=Ue.pet,i=e.def;e.over=!0;let s=n&&!(t.levels[i.id]&&t.levels[i.id].done),r=n?s?10:4:0;t.bones+=e.bones+r,today(t).play++,ro(t,"forest"),applyFx(t,{felicidad:n?22:10,energia:-14,saciedad:-8,hidratacion:-10,higiene:-12});let a=t.levels[i.id]||{done:!1,best:0};a.best=Math.max(a.best,e.bones),n&&(a.done=!0),t.levels[i.id]=a,addEvent(t,"\u{1F332}",n?`Exploraron \xAB${i.name}\xBB y encontraron ${e.bones} huesos.`:`Intentaron \xAB${i.name}\xBB (${e.bones} huesos).`),s&&addMilestone(t,"lvl"+i.id,"\u{1F3DE}\uFE0F",`Luna complet\xF3 \xAB${i.name}\xBB por primera vez.`),outdoorRisk(t),saveRoot(),mt();let o=n?e.pl.hearts:0;he("#forestHud").hidden=!0,Ul(o,e.bones+r,n?"<span>\u{1F3E0}\u2714</span>":"",()=>Zp())}function Zp(){Gn=null,Te.root.visible=!0,gi(()=>{Pn(Te.root,ae),Gt=ae,fe="town";let n=ws.find(e=>e.pl.id==="bosque");no(n.x,n.z+1.6,0),he("#forestHud").hidden=!0,he("#actions").hidden=!0})}function Cv(n){let e=Ue.pet,t=n.minDay-e.day;speak(`${n.name} se abre cuando Luna sea m\xE1s grande. Faltan ${t} ${t===1?"d\xEDa":"d\xEDas"}. \xA1Cu\xEDdala mucho y vuelve ma\xF1ana!`),pn(`<div class="result"><div class="unlock"><span>\u{1F512}</span><span>${n.icon}</span></div><h2>${n.name}</h2><div class="moons">${"\u{1F319}".repeat(Math.min(t,10))}</div></div>`)}function Ju(n){return Ue.pet.day<(n.minDay||1)?Cv(n):n.id==="casa"?ov():n.id==="parque"?Fp():n.id==="lago"?$p():n.id==="bosque"?Tv():n.spot?eM(n.id):Mv(n.id)}function Iv(){let n=Ue.pet,e=today(n),t=stageOf(n.day),i=routineFor(n,n.day,e),s=[...Object.entries(DAY_MILESTONES).map(([a,o])=>({key:"day"+a,icon:o[0],text:o[1]})),{key:"walk1",icon:"\u{1F333}"},{key:"bath1",icon:"\u{1F6C1}"},{key:"vacunas",icon:"\u{1F6E1}\uFE0F"},{key:"allbones",icon:"\u{1F50D}"},{key:"tutorial",icon:"\u{1F426}"},{key:"treasure1",icon:"\u{1F4B0}"},{key:"squirrel",icon:"\u{1F43F}\uFE0F"},{key:"hide1",icon:"\u{1F648}"},{key:"agility",icon:"\u{1F3C3}"},{key:"ducks10",icon:"\u{1F986}"},{key:"memory",icon:"\u{1F0CF}"},...LEVEL_DEFS.map(a=>({key:"lvl"+a.id,icon:["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"][a.id-1]})),...TRICKS.map(a=>({key:"trick-"+a.id,icon:a.icon})),...EXTRA_STICKERS],r=new Set(n.milestones.map(a=>a.key));speak("Diario de Luna"),pn(`<div class="result"><h2>\u{1F4D6}</h2>
    <div class="weekbox"><span>${Dl[t.id]} ${n.day}</span><span>\u2696\uFE0F ${fmtWeight(n.weight)}</span><span>\u{1F525} ${n.streak}</span>${n.rpg&&n.rpg.met?`<span>${RANKS[rankOf(n.rpg.xp)]}</span>`:""}</div>
    <div class="today">${i.map(a=>`<span class="tday ${a.have>=a.need?"ok":""}"><i>${a.icon}</i><b>${a.have>=a.need?"\u2B50":`${Math.min(a.have,a.need)}/${a.need}`}</b></span>`).join("")}</div>
    <div class="stickers">${s.map(a=>`<span class="stk ${r.has(a.key)?"":"off"}">${r.has(a.key)?a.icon:"\u2754"}</span>`).join("")}</div></div>`)}function Pv(){if(!Ue||fe!=="town"||!he("#card3").hidden)return;let n=Ue.pet,e=Fl(n);if(e.step<2)return;if(!e.seen.v2&&e.step>=Zs.length){e.seen.v2=!0;for(let s of En)s.spot&&n.day>=(s.minDay||1)&&(e.seen["open-"+s.id]=!0);return e.focus="aventura",e.visited.aventura=!1,saveRoot(),speak(NEWS_SAY),pn(NEWS_HTML)}for(let s of En)if((s.minDay||1)>1&&n.day>=s.minDay&&!e.seen["open-"+s.id])return e.seen["open-"+s.id]=!0,e.focus=s.id,saveRoot(),speak(`\xA1Se abri\xF3 ${s.name}! Sigue la flecha amarilla.`),pn(`<div class="result"><h2>\u{1F389}</h2><div class="unlock"><span>\u{1F513}</span><span>${s.icon}</span></div><h2>${s.name}</h2></div>`);let t=stageOf(n.day);if(!e.seen["stage-"+t.id]&&(e.seen["stage-"+t.id]=!0,saveRoot(),n.day>1))return speak(`\xA1Luna creci\xF3! Ahora es ${t.name.toLowerCase()}.`),setTimeout(()=>dogSound("happy",lt()),600),pn(`<div class="result"><h2>\u{1F331}</h2><div class="howto"><div>${STAGES.map(s=>`<span style="opacity:${s.id===t.id?1:n.day>s.to?.55:.25}">${Dl[s.id]}</span>`).join("<i>\u203A</i>")}</div></div></div>`);let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(n,s)));if(i&&!e.seen["vac-"+i.id])return e.seen["vac-"+i.id]=!0,saveRoot(),speak("Hoy le toca una vacuna a Luna. Ve a la veterinaria y toca Vacuna."),pn('<div class="result"><h2>\u{1F489}</h2><div class="howto"><div><span>\u{1F489}</span><i>\u279C</i><span>\u{1F3E5}</span></div></div></div>');if(n.sick&&!n.sick.treated&&!e.seen["sick-"+n.sick.since])return e.seen["sick-"+n.sick.since]=!0,saveRoot(),speak("Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."),pn('<div class="result"><h2>\u{1F912}</h2><div class="howto"><div><span>\u{1F912}</span><i>\u279C</i><span>\u{1F3E5} \u{1F48A}</span></div></div></div>');if(n.bones>=6&&!e.seen.shop)return e.seen.shop=!0,e.focus="tienda",e.visited.tienda=!1,saveRoot(),speak("\xA1Tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna."),pn(`<div class="result"><h2>\u{1F6D2}</h2><div class="howto"><div><span>\u{1F9B4} ${n.bones}</span><i>\u279C</i><span>\u{1F380}\u{1F9F8}\u{1F9B4}</span></div></div></div>`)}var Zs=[{id:"walk",icon:"\u2B05\uFE0F\u27A1\uFE0F",say:"\xA1Hola! Soy P\xEDo, tu amigo. Camina con las flechas o con el c\xEDrculo. \xA1Luna te sigue!"},{id:"home",place:"casa",icon:"\u{1F37C}",say:"Luna tiene hambre. Ll\xE9vala a su casa: ac\xE9rcate a la puerta y toca A."},{id:"eat",place:"casa",doId:"eat",icon:"\u{1F37C}",say:"Toca el dibujo de comer para darle su comida."},{id:"pet",place:"casa",doId:"pet",icon:"\u{1F917}",say:"\xA1Muy bien! Ahora dale mimos."},{id:"exit",place:"casa",doId:"exit",icon:"\u{1F6AA}",say:"Ahora sal de la casa por la puerta."},{id:"bones",icon:"\u{1F9B4}",say:"Busca huesos que brillan por el pueblo. \xA1Con ellos compras cosas!"}];function Fl(n){if(!n.tut){let e=n.day>1||Object.values(n.log).some(t=>t.meals>0);n.tut={step:e?Zs.length:0,seen:{},visited:{},focus:null,moved:0},n.tut.seen["stage-"+stageOf(n.day).id]=!0}return n.tut}var Lv={"\u{1F356}":{place:"casa",doId:"eat",say:"Luna tiene hambre. Ve a la casa y toca Comer."},"\u{1F4A7}":{place:"casa",doId:"water",say:"Luna tiene sed. Ve a la casa y toca Agua."},"\u{1F634}":{place:"casa",doId:"nap",say:"Luna tiene sue\xF1o. En la casa toca Siesta o Dormir."},"\u{1FAE7}":{place:"casa",doId:"bath",say:"Luna est\xE1 sucia. Ve a la casa para limpiarla."},"\u{1F4A9}":{place:"casa",doId:"clean",say:"Luna hizo un accidente en casa. Hay que recogerlo."},"\u{1F3BE}":{place:"parque",doId:"kick",say:"Luna est\xE1 aburrida. \xA1Vamos al parque a jugar con la pelota!"},"\u{1F912}":{place:"vet",doId:"cure",say:"Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."},"\u{1F489}":{place:"vet",doId:"vac",say:"Hoy le toca una vacuna. Ve a la veterinaria y toca Vacuna."},"\u{1F48A}":{place:"vet",doId:"deworm",say:"Luna necesita su pastilla contra los bichitos. Ve a la veterinaria."},"\u2702\uFE0F":{place:"casa",doId:"brush",say:"Hora de arreglar a Luna. Ve a la casa y cep\xEDllala."}};function Dv(n){let e=Fl(n);if(e.step<Zs.length)return{...Zs[e.step],key:"tut-"+e.step,fixed:!0};if(At)return{icon:"\u{1F648}",key:"hide",say:"\xBFD\xF3nde est\xE1 Luna? Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!",fixed:!0};if(n.asleep)return bp(n,!0)||{icon:"\u{1F4A4}",key:"sleep",say:"Luna est\xE1 durmiendo. D\xE9jala descansar, o despi\xE9rtala toc\xE1ndola.",fixed:!0};let t=!!(n.sick&&n.sick.treated),i=needsOf(n).filter(o=>!(o.icon==="\u{1F912}"&&t));for(let o of[...i.filter(c=>c.level==="bad"),...i.filter(c=>c.level==="warn")]){let c=Lv[o.icon];if(!c)continue;let l="need-"+o.icon,h=o.level==="bad";if(!h&&qa(l))continue;if(o.icon==="\u{1F4A7}"&&n.day<4)return{icon:"\u{1F37C}",key:l,place:"casa",doId:"eat",say:"Luna tiene sed. En casa dale su lechita.",fixed:h};let d=c.doId;return d==="bath"&&(d=n.day<8?"wipe":n.lastDone.bano&&n.day-n.lastDone.bano<3?"brush":"bath"),{icon:o.icon,key:l,...c,doId:d,say:d==="brush"?"Luna est\xE1 sucia. Ve a la casa y cep\xEDllala.":c.say,fixed:h}}if(e.focus&&!e.visited[e.focus]&&!qa("focus-"+e.focus)){let o=En.find(c=>c.id===e.focus);if(o)return{icon:o.icon,place:o.id,key:"focus-"+o.id,say:`\xA1${o.name} est\xE1 abierto! Sigue la flecha.`}}let s={"\u{1F356}":["casa","eat","Hora de comer. Ve a la casa y toca Comer."],"\u{1F4A7}":["casa","water","Dale agua fresca a Luna en la casa."],"\u{1F3BE}":n.day>=3?["parque","kick","\xA1A jugar! Ve al parque a patear la pelota."]:["casa","pet","Juega con Luna: dale mimos en la casa."],"\u{1FAE7}":n.day>=3?["casa","brush","Hora de la limpieza. En casa cepilla a Luna."]:["casa","wipe","Hora de la limpieza. En casa limpia a Luna."],"\u{1F393}":["escuela","trick:","Hoy toca escuela. Ens\xE9\xF1ale un truco a Luna."],"\u{1F5FA}\uFE0F":["parque","stroll","Sal a pasear con Luna: ve al parque y toca Pasear."]},{waiting:r}=routinePending(n);for(let o of routineFor(n,n.day,today(n))){if(o.have>=o.need||!routineReady(n,o.icon)||!s[o.icon]||qa("routine-"+o.icon))continue;let c=s[o.icon];return{icon:o.icon,key:"routine-"+o.icon,place:c[0],doId:c[1],say:c[2]}}let a=bp(n,!1,r)||{icon:"\u{1F344}",key:"explore",place:"aventura",say:"\xA1Vamos a explorar el Valle Aventura!"};return t?{...a,key:"rec-"+a.key,say:"Luna se est\xE1 curando: dale comida, agua y que descanse. "+a.say}:a}var Jp=new Map,qa=n=>(Jp.get(n.replace(/^(rec-|zz-)/,""))||0)>Date.now();function Nv(){let n=tt;!n||n.fixed||(Jp.set(n.key.replace(/^(rec-|zz-)/,""),Date.now()+10*60*1e3),xt("pop"),Ot=null,Wn(),speak("\xA1Est\xE1 bien, despu\xE9s! "+(tt&&tt!==n?tt.say:"")),clearTimeout(Nu),Fr=tt?tt.key:Fr,he("#guide").classList.remove("new"))}var Ml=new Set,Sp=0;function bp(n,e){Sp!==n.day&&(Sp=n.day,Ml.clear());let t=[];ei.length&&t.push({icon:"\u{1F9B4}",key:"bones",say:"\xA1busca los huesos escondidos! Sigue la flecha amarilla."}),In&&t.push({icon:"\u{1F4B0}",key:"treasure",say:"hay un tesoro escondido. Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!"}),t.push(...funIdeas(n,e,Vu(H.x,H.z))),n.rpg&&n.rpg.respawn&&(n.rpg.respawn=!1,ao(n));let i=e?"zz-":"";for(let r of t)r.key=i+r.key,r.say=ideaSay(r.say,e),typeof r.target=="string"&&(r.target=Uv(n,r.target));let s=t.find(r=>!Ml.has(r.key)&&!qa(r.key));return s||(Ml.clear(),s=t.find(r=>!qa(r.key))||t[0]),s}function Uv(n,e){let t=()=>today(n).dogs||{};if(e==="dog")return()=>{let s=sm(999,r=>r.def.mood!=="grumpy"&&!t()[r.def.id]);return s&&{x:s.x,z:s.z}};if(e==="mirador")return()=>({x:mn.mirador[0],z:mn.mirador[1]});if(e==="chest")return()=>({x:mn.chest[0],z:mn.chest[1]});let i=e.slice(5);return()=>{let s=null,r=1/0;for(let a of Ks){if(a.item!==i)continue;let o=Math.hypot(a.x-H.x,a.z-H.z);o<r&&(r=o,s=a)}return s&&{x:s.x,z:s.z}}}var tt=null,Fr="",Nu=0;function Wn(){if(!Ue)return;let n;try{n=Dv(Ue.pet)}catch(a){console.error("P\xEDo:",a),n=null}n||(n={icon:"\u{1F344}",key:"explore",place:"aventura",say:"\xA1Vamos a explorar el Valle Aventura! Busca setas brillantes y plumas."}),tt=n;let e=n.place?En.find(a=>a.id===n.place):null,t=he("#guide"),i=`<span class="g-bird">\u{1F426}</span><span class="g-bub"><b>${n.icon}</b>${e?`<i>\u279C</i><b>${e.icon}</b>`:""}<small class="g-txt">${e?e.name:n.key.includes("bones")?"Huesos":n.key.includes("treasure")?"Tesoro":n.key==="sleep"?"Shh\u2026":n.key.includes("dogs")?"Perritos":n.key.includes("quest")?"Misi\xF3n":n.key.includes("mirador")?"Mirador":""}</small></span>`;if(t.__h!==i&&(t.innerHTML=i,t.__h=i),t.hidden=!1,t.setAttribute("aria-label","P\xEDo dice: "+n.say),he("#guideSkip").hidden=!!n.fixed||!!nt,n.key!==Fr){t.classList.add("new"),clearTimeout(Nu);let a=n.key;Nu=setTimeout(()=>{tt&&tt.key===a&&(Fr=a,speak(tt.say),t.classList.remove("new"))},Fr===""?3800:1500)}document.querySelectorAll("#actions .hint").forEach(a=>a.classList.remove("hint"));let s=Ku();if(!he("#actions").hidden&&n.doId&&(!n.place||n.place===s)){let a=document.querySelector(n.doId.endsWith(":")?`#actions [data-act^="${n.doId}"]:not([aria-disabled])`:`#actions [data-act="${n.doId}"]`);a&&a.classList.add("hint")}else if(!he("#actions").hidden&&s&&n.place&&n.place!==s){let a=document.querySelector('#actions [data-act="exit"], #actions [data-act="closepark"], #actions [data-act="closelake"], #actions [data-act="closeforest"], #actions [data-act="closespot"]');a&&a.classList.add("hint")}let r=document.querySelector("#prompt .go-btn");r&&r.classList.toggle("hint",!!(sn&&n.place===sn.pl.id))}var Fv={casa:"Esta es la casa de Luna. Aqu\xED come, bebe, duerme y se ba\xF1a. Tambi\xE9n pueden jugar a la memoria.",vet:"Esta es la veterinaria. Cuando toca vacuna, toca la jeringa. La pastilla quita los bichitos. Si Luna est\xE1 enfermita, toca Curar.",tienda:"Esta es la tienda. Con los huesos que encuentras compras premios, juguetes y ropa para Luna.",escuela:"Esta es la escuela. Elige un truco, mira las flechas y rep\xEDtelas. \xA1As\xED Luna aprende!",parque:"Este es el parque. Haz una carrera de obst\xE1culos, juega al escondite o patea la pelota.",bosque:"Este es el bosque. Elige un camino y lleva a Luna saltando hasta la casita.",lago:"Este es el lago. Dale de comer a los patos, m\xEDralos nadar o bebe agua fresca."};function Kp(){return Te.root.parent===Gt&&Math.hypot(H.x-R.x,H.z-R.z)<2.6}function Ku(){return fe==="home"?"casa":fe==="park"?"parque":fe==="lake"?"lago":fe==="forestmenu"?"bosque":fe==="room"?bn:fe==="spot"?Hn:null}function Ov(){let n=Ku();if(!n)return;let e=Fv[n]||SPOT_UI[n]&&SPOT_UI[n].help||"";tt&&tt.place===n?e+=" "+tt.say:tt&&tt.place&&(e+=` Ahora toca ir a ${En.find(t=>t.id===tt.place).name}. Toca Salir.`),speak(e),Wn()}var Ot=null,fl=null,Ms=.5,li=Math.ceil((De.x1-De.x0)/Ms),ka=Math.ceil((De.z1-De.z0)/Ms);function yu(n,e,t,i){if(!fl){fl=new Uint8Array((li+1)*(ka+1));for(let f=0;f<=ka;f++)for(let g=0;g<=li;g++)fl[f*(li+1)+g]=Ln(De.x0+g*Ms,De.z0+f*Ms,.38)?0:1}let s=f=>clamp(Math.round((f-De.x0)/Ms),0,li),r=f=>clamp(Math.round((f-De.z0)/Ms),0,ka),a=(f,g)=>g*(li+1)+f,o=(f,g)=>f>=0&&g>=0&&f<=li&&g<=ka&&fl[a(f,g)]===1,c=s(t),l=r(i),h=new Int32Array((li+1)*(ka+1)).fill(-2),d=[a(s(n),r(e))];h[d[0]]=-1;let u=0,m=-1,x=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(;u<d.length;){let f=d[u++],g=f%(li+1),E=f/(li+1)|0;if(Math.abs(g-c)<=1&&Math.abs(E-l)<=1){m=f;break}for(let[M,v]of x){let w=g+M,_=E+v;if(!o(w,_)||M&&v&&(!o(g+M,E)||!o(g,E+v)))continue;let T=a(w,_);h[T]===-2&&(h[T]=f,d.push(T))}}if(m<0)return null;let y=[];for(let f=m;f!==-1;f=h[f])y.push([De.x0+f%(li+1)*Ms,De.z0+(f/(li+1)|0)*Ms]);y.reverse();let p=y.filter((f,g)=>g%3===2||g===y.length-1);return p.push([t,i]),p}function jp(){let n=tt;if(!n||At||nt)return;if(!n.place&&!pt&&(fe==="park"?Ys():fe==="spot"?Ka():(fe==="lake"||fe==="forestmenu")&&(fe="town",he("#actions").hidden=!0)),!n.place&&n.target){let i=fe==="town"&&n.target(),s=i&&yu(H.x,H.z,i.x,i.z);s&&(Ot={pts:s,place:null,stuck:0,best:1/0},xt("pop"));return}if(!n.place){if(fe!=="town"||!/bones$/.test(n.key)||!ei.length)return;let i=null,s=1/0;for(let a of ei){let o=Math.hypot(a.m.position.x-H.x,a.m.position.z-H.z);o<s&&(s=o,i=a)}let r=yu(H.x,H.z,i.m.position.x,i.m.position.z);r&&(Ot={pts:r,place:null,stuck:0,best:1/0},xt("pop"));return}if(Ku()===n.place){Wn();return}if(fe==="park"?Ys():fe==="lake"||fe==="forestmenu"?(fe="town",he("#actions").hidden=!0):fe==="spot"&&Ka(),fe!=="town")return;let e=ws.find(i=>i.pl.id===n.place);if(!e)return;if(sn===e){Ju(e.pl);return}let t=yu(H.x,H.z,e.x,e.z);t&&(Ot={pts:t,place:n.place,stuck:0,best:1/0},xt("pop"))}var Ol=performance.now(),vu=0,Mu="",Ha=0;function Qp(){let n=performance.now();if(!tt||nt||!he("#card3").hidden||Ot||Vn||Gn||n-Ol<2e4||n-vu<3e4||(tt.key!==Mu&&(Mu=tt.key,Ha=0),tt.key==="sleep"))return;let e=/^(zz-|rec-)?(bones|treasure|fun-|again-|shop|wait-|quest-|valley|explore|focus-)/.test(tt.key);if(Ha>=2)if(e)Ml.add(tt.key.replace(/^rec-/,"")),Wn(),Mu=tt.key,Ha=0;else{if(n-vu<9e4)return;Ha=0}Ha++,vu=n,em(),he("#guide").classList.add("new"),ft(tt.icon,tt.place?"\u{1F446} \u{1F426}":"\u{1F426}")}ze.addEventListener("pointerdown",()=>{Ol=performance.now()},!0);ze.addEventListener("keydown",()=>{Ol=performance.now()},!0);function em(){tt&&(Fr=tt.key,speak(tt.say),he("#guide").classList.remove("new"))}function ti(n){if(!Ue)return;let e=Ue.pet,t=Fl(e);if(n.startsWith("open:")&&(t.visited[n.slice(5)]=!0),t.step>=Zs.length)return Wn();let i=Zs[t.step].id;(i==="walk"&&n==="walk"&&++t.moved>=3||i==="home"&&n==="open:casa"||i==="eat"&&n==="do:eat"||i==="pet"&&n==="do:pet"||i==="exit"&&n==="close:casa"||i==="bones"&&n==="bone")&&(t.step++,ft("\u2B50"),t.step>=Zs.length&&(addMilestone(e,"tutorial","\u{1F426}","\xA1Terminaste las lecciones de P\xEDo!"),setTimeout(()=>speak("\xA1Lo hiciste genial! Ahora ya sabes cuidar a Luna."),1200)),saveRoot()),Wn()}var wl=new ds({color:"#ffd23f",gradientMap:js,emissive:"#5a4000"}),Js=new we;{let n=new St(P.cone(.7,1.1,4),wl);n.rotation.x=Math.PI,n.position.y=.55,Js.add(n);let e=new St(P.box(.45,.9,.45),wl);e.position.y=1.5,Js.add(e)}Js.visible=!1;ae.add(Js);var Es=new we;{let n=new St(P.cone(.32,.6,3),wl);n.rotation.x=Math.PI/2,n.position.z=1.5,Es.add(n);let e=new St(P.box(.18,.06,.6),wl);e.position.z=1,Es.add(e)}Es.visible=!1;ae.add(Es);function zv(n){let e=tt&&tt.place&&ws.find(r=>r.pl.id===tt.place);if(!e&&tt&&/bones$/.test(tt.key)&&ei.length){let r=null,a=1/0;for(let o of ei){let c=Math.hypot(o.m.position.x-H.x,o.m.position.z-H.z);c<a&&(a=c,r=o)}e={x:r.m.position.x,z:r.m.position.z,baseY:.6,pl:{}}}if(!e&&tt&&tt.target){let r=tt.target();r&&(e={x:r.x,z:r.z,baseY:1.2,pl:{}})}let t=fe==="town"&&e&&!(sn&&sn===e);if(Js.visible=Es.visible=!!t,!t)return;Js.position.set(e.x,e.baseY+1.2+Math.abs(Math.sin(n*4))*.6,e.pl.w?e.pl.z+e.pl.d/2:e.z),Js.rotation.y=n*1.5;let i=e.x-H.x,s=e.z-H.z;Es.position.set(H.x,.08,H.z),Es.rotation.y=Math.atan2(i,s),Es.children.forEach(r=>{r.position.z=(r.geometry.type==="ConeGeometry"?1.5:1)+Math.sin(n*6)*.15})}var ro=(n,e)=>{let t=today(n);return t.games=t.games||{},t.games[e]=(t.games[e]||0)+1,t.games[e]},Uu=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},ju=(n,e)=>`<div class="result"><h2>${n}</h2><div class="howto">${e.map(([t,i])=>`<div><span>${t}</span><i>\u279C</i><span>${i}</span></div>`).join("")}</div></div>`,Su="";function er(n){let e=he("#gameHud");if(n==null){e.hidden=!0,Su="";return}n!==Su&&(Su=n,e.innerHTML=`${n}<button class="hbtn" data-act="quitgame" aria-label="Salir">\u2716</button>`,e.hidden=!1)}var bs=Ii("\u2744\uFE0F",1.1,!0);bs.visible=!1;ae.add(bs);var $i=Ii("\u{1F356}",.85,!0);$i.visible=!1;ae.add($i);var pl="",Ep=0,Tp={hot:["\u{1F525}","\xA1Caliente, caliente!"],warm:["\u2600\uFE0F","\xA1Tibio!"],cold:["\u2744\uFE0F","\xA1Fr\xEDo!"]};function Bv(n){let e=null,t=null;if(At?(e=At.x,t=At.z):In&&tt&&tt.key==="treasure"&&(e=In.x,t=In.z),e==null||fe!=="town"){bs.visible=!1,pl="";return}let i=Math.hypot(e-H.x,t-H.z),s=i<3.5?"hot":i<8?"warm":"cold";s!==pl&&(pl&&n-Ep>2&&(speak(Tp[s][1]),Ep=n),pl=s,bs.material.map=Ts(Tp[s][0],!0),bs.material.needsUpdate=!0),bs.visible=!0,bs.position.set(H.x,2.75+Math.sin(n*5)*.08,H.z)}function kv(){let n=new we,e=C(P.sph(.22,12,10),"#b0682c");e.scale.set(.9,.85,1.2),e.position.y=.25,n.add(e),n.add(Q(C(P.sph(.13,10,8),"#f0d0a0",{cast:!1}),0,.2,.14)),n.add(Q(C(P.sph(.15,12,10),"#b0682c"),0,.46,.2));for(let t of[-1,1])n.add(Q(C(P.cone(.05,.12,6),"#8a4a20"),t*.08,.62,.17)),n.add(Q(C(P.sph(.03,6,5),"#1c1410",{cast:!1}),t*.07,.5,.33));for(let[t,i,s]of[[.35,-.25,.14],[.6,-.33,.15],[.8,-.22,.12]])n.add(Q(C(P.sph(s,10,8),"#c87c3c"),0,t,i));return n}var ml=null,bu=20;function Hv(n,e,t){let i=ml;if(!i){if(e.day<3||e.asleep||At||fe!=="town"||(bu-=n,bu>0))return;bu=35+Math.random()*35;for(let r=0;r<60;r++){let a=Math.random()*Math.PI*2,o=6+Math.random()*4,c=H.x+Math.cos(a)*o,l=H.z-Math.abs(Math.sin(a))*o*.8;if(Ln(c,l,.5))continue;let h=kv();h.position.set(c,0,l),h.rotation.y=Math.atan2(H.x-c,H.z-l),ae.add(h),ml={m:h,t:0,run:0,vx:0,vz:0},speak("\xA1Mira, una ardilla! Corre con Luna a saludarla.");return}return}i.t+=n;let s=i.m.position;if(i.run>0){i.run-=n,s.x+=i.vx*n,s.z+=i.vz*n,s.y=Math.abs(Math.sin(t*18))*.25,i.run<=0&&(ae.remove(i.m),ml=null);return}if(s.y=Math.abs(Math.sin(t*5))*.12,i.t>25){ae.remove(i.m),ml=null;return}if(Math.hypot(R.x-s.x,R.z-s.z)<1.5||Math.hypot(H.x-s.x,H.z-s.z)<1.2){let r=Math.atan2(s.x-R.x,s.z-R.z);i.vx=Math.sin(r)*7,i.vz=Math.cos(r)*7,i.run=1.2,i.m.rotation.y=r,R.mode="happy",R.modeT=1.2,dogSound("bark",lt());let a=today(e);a.squirrels=(a.squirrels||0)+1,a.squirrels<=4&&(applyFx(e,{felicidad:6,energia:-2}),e.bones++,a.play++,it(ae,"\u{1F496}",new D(R.x,1.4,R.z),3,.5),it(ae,"\u{1F9B4}",s,1,.5),xt("coin"),addMilestone(e,"squirrel","\u{1F43F}\uFE0F","Luna persigui\xF3 a su primera ardilla."),mt()),speak("\xA1Guau! \xA1Qu\xE9 r\xE1pida!")}}var Qu=[],Eu=0;function Gv(){let n=mi(2468),e=["#ffffff","#ffd23f","#ff8fc8","#8fd0ff","#c9a0ff"];for(let t=0;t<12;t++){let i=0,s=0;for(let c=0;c<50&&(i=De.x0+3+n()*(De.x1-De.x0-6),s=De.z0+3+n()*(De.z1-De.z0-6),!!Ln(i,s,1));c++);let r=new we,a=[],o=new ds({color:e[t%e.length],gradientMap:js,side:Rn});for(let c of[-1,1]){let l=new we,h=new St(new hs(.17,10),o);h.rotation.x=-Math.PI/2,h.position.x=c*.15,l.add(h),r.add(l),a.push(l)}r.add(C(P.cap(.025,.16),"#3a2a2a",{cast:!1})),r.children[2].rotation.x=Math.PI/2,ae.add(r),Qu.push({g:r,wings:a,cx:i,cz:s,ph:n()*10,cd:0})}}function Vv(n,e,t){Eu-=n;for(let i of Qu){i.ph+=n,i.cd-=n;let s=i.cx+Math.cos(i.ph*.7)*1.4,r=i.cz+Math.sin(i.ph*1.1)*1.4,a=1.1+Math.sin(i.ph*2.3)*.35;i.g.position.set(s,a,r),i.g.rotation.y=-i.ph*.7;let o=Math.sin(t*22+i.ph)*.9;if(i.wings[0].rotation.z=o,i.wings[1].rotation.z=-o,i.cd<=0&&!At&&!e.asleep&&Math.hypot(s-R.x,r-R.z)<1.2){let c=Math.atan2(s-R.x,r-R.z),l=i.cx+Math.sin(c)*3.5,h=i.cz+Math.cos(c)*3.5;l>De.x0&&l<De.x1&&h>De.z0&&h<De.z1&&(i.cx=l,i.cz=h),i.cd=3,it(ae,"\u{1F496}",new D(R.x,1.4,R.z),1,.45),R.mode="happy",R.modeT=.8,Eu<=0&&(Eu=12,applyFx(e,{felicidad:2}),dogSound("yip",lt(),.5),mt())}}}var _s=null;function tm(n){let e=In;In=null,n.treasure={day:n.day,found:!0};let t=Math.random(),i;if(t<.45){let a=4+Math.floor(Math.random()*4);n.bones+=a,i=`\u{1F9B4} +${a}`}else t<.7?(n.items.premio+=2,i="\u{1F36A} +2"):t<.88?(n.items.champu+=1,i="\u{1F9F4} +1"):(n.bones+=12,i="\u{1F48E} \u{1F9B4} +12");applyFx(n,{felicidad:10});let s=new we;s.add(Q(C(P.box(.9,.5,.6),"#a0642c"),0,.25,0));let r=C(P.box(.95,.18,.65),"#ffd23f");r.position.set(0,.6,-.15),r.rotation.x=-.9,s.add(r),s.add(Q(C(P.box(.15,.2,.05),"#ffd23f"),0,.35,.32)),s.add(Q(C(P.cyl(.8,.9,.08,16),"#9a6236",{cast:!1}),0,.02,0)),s.position.set(e.x,-.6,e.z),ae.add(s),_s={g:s,t:0},it(ae,"\u2728",new D(e.x,.8,e.z),8,.6),R.mode="happy",R.modeT=1.6,Ke.mode="cheer",Ke.modeT=1.6,addEvent(n,"\u{1F4B0}",`\xA1Luna desenterr\xF3 un tesoro! (${i})`),addMilestone(n,"treasure1","\u{1F4B0}","Luna encontr\xF3 su primer tesoro escondido."),ft("\u{1F4B0}",i),speak("\xA1Luna encontr\xF3 el tesoro!"),xt("coin"),setTimeout(()=>dogSound("happy",lt()),500),saveRoot(),mt()}var At=null;function nm(){speak("\xA1Escondite! Cierra los ojos y cuenta\u2026 \xA1Luna se va a esconder!"),pn(ju("\u{1F648}",[["\u{1F436}","\u{1F333}\u2753"],["\u{1F525}","\u{1F440} \u{1F436}"],["\u2744\uFE0F","\u21A9\uFE0F"]]),()=>{let n=Ft.circles.filter(t=>t.tree),e=null;for(let t=0;t<600&&!e;t++){let i=n[Math.floor(Math.random()*n.length)],s=Math.random()*Math.PI*2,r=i.x+Math.sin(s)*(i.r+.7),a=i.z+Math.cos(s)*(i.r+.7),o=Math.hypot(r-H.x,a-H.z);o<6||o>15||Ln(r,a,.4)||(e={x:r,z:a})}if(!e){speak("Aqu\xED no hay d\xF3nde esconderse. \xA1Prueba en otro lugar!");return}gi(()=>{At={x:e.x,z:e.z,t:0,dur:60,barkT:4},R.x=e.x,R.z=e.z,R.path=null,R.ry=Math.random()*6,he("#actions").hidden=!0,he("#prompt").hidden=!0})})}function Wv(n,e){let t=At;t.t+=n,t.barkT-=n,t.barkT<=0&&(t.barkT=5,dogSound("bark",lt(),.5));let i=Math.hypot(H.x-t.x,H.z-t.z);Te.root.visible=i<3.5,er(`<span>\u{1F648} ${Math.max(0,Math.ceil(t.dur-t.t))}</span>`),i<1.7?Al(!0):t.t>=t.dur&&Al(!1)}function Al(n){let e=At,t=Ue.pet;if(!e)return;At=null,er(null),Te.root.visible=!0,di=[{x:R.x,z:R.z},{x:H.x,z:H.z}];let i=n?e.t<20?3:e.t<40?2:1:0,s=i*2;t.bones+=s,today(t).play++,ro(t,"hide"),applyFx(t,{felicidad:10+i*4,energia:-6,hidratacion:-4}),addEvent(t,"\u{1F648}",n?`Jugaron al escondite: encontraste a Luna en ${Math.round(e.t)} s.`:"Jugaron al escondite: Luna sali\xF3 solita."),n&&(addMilestone(t,"hide1","\u{1F648}","\xA1Encontraste a Luna jugando al escondite!"),R.mode="happy",R.modeT=1.5,Ke.mode="cheer",Ke.modeT=1.5,it(ae,"\u{1F496}",new D(R.x,1.4,R.z),6)),saveRoot(),mt(),Ul(i,s,n?`<span>\u{1F648} ${Math.round(e.t)}s</span>`:"<span>\u{1F436} \u{1F44B}</span>")}function Xv(n,e,t){Qu.length||Gv(),Vv(n,e,t),Hv(n,e,t),At&&he("#card3").hidden&&Wv(n,e),In&&!At&&fe==="town"&&(Math.hypot(In.x-H.x,In.z-H.z)<1||Te.root.parent===ae&&Math.hypot(In.x-R.x,In.z-R.z)<.9)&&tm(e),_s&&(_s.t+=n,_s.g.position.y=Math.min(0,-.6+_s.t*1.2),_s.t>4&&(ae.remove(_s.g),_s=null)),Bv(t),Kv(n,e,t),oM(n,e,t)}var qv={toby:{route:[[-26,-7.4],[2,-7.4],[2,-10.6],[-26,-10.6]]},rocco:{route:[[38,-7.4],[66,-7.4],[66,-10.6],[38,-10.6]]},nube:{route:[[-18,20.6],[8,20.6],[8,17.4],[-18,17.4]]},canela:{home:[3,14],r:4.5},bruno:{home:[-29,0],r:3.5},pipo:{home:[28,8],r:4},max:{home:[38,3],r:5},kira:{home:[58,2],r:4},coco:{home:[21,28],r:4},lola:{home:[25,30],r:4},thor:{home:[23,31],r:4},sol:{home:[58,27],r:4}},Za=[],$v=Br("#e0403c");function im(){if(!Za.length)for(let n of DOG_DEFS){let e=qv[n.id],t=Rl({look:n.look,ears:n.ears,day:n.owner||n.park?10:5,acc:{worn:null}});t.root.scale.setScalar(n.size);let i=Ii(DOG_MOOD[n.mood].icon,n.mood==="grumpy"?.95:.75,!0);ae.add(t.root,i);let s={def:n,P:e,d:t,ind:i,x:0,z:0,ry:0,tx:0,tz:0,wait:Math.random()*2,sp:0,growlT:0,happyT:0,fleeT:0,near:!1,asked:!1};if(n.mood==="grumpy"&&(s.ring=new St(new va(2.6,3,32),new An({color:"#ff1a1a",transparent:!0,opacity:.6,depthWrite:!1})),s.ring.rotation.x=-Math.PI/2,ae.add(s.ring)),n.owner){let r=so(n.owner);r.scale.setScalar(.78),ae.add(r),s.owner={g:r,x:e.route[0][0],z:e.route[0][1],ry:0,wi:1},s.x=s.owner.x-1.2,s.z=s.owner.z,s.leash=new St(P.cyl(.025,.025,1,5),$v),ae.add(s.leash)}else s.x=e.home[0],s.z=e.home[1],s.tx=s.x,s.tz=s.z;Za.push(s)}}var Yv=(n,e)=>n>fi.x0+.6&&n<fi.x1-.6&&e>fi.z0+.6&&e<fi.z1-.6;function wp(n){let e=n.P;for(let t=0;t<20;t++){let i=Math.random()*Math.PI*2,s=Math.random()*e.r,r=e.home[0]+Math.cos(i)*s,a=e.home[1]+Math.sin(i)*s;if(!(Ln(r,a,.4)||n.def.park&&!Yv(r,a))){n.tx=r,n.tz=a;return}}n.tx=e.home[0],n.tz=e.home[1]}var gl=new D,xl=new D,Zv=new Un,Jv=new D(0,1,0),Fu=0,Tu=0;function Kv(n,e,t){im();let i=H.px!==void 0&&Math.hypot(H.x-H.px,H.z-H.pz)>.001;H.px=H.x,H.pz=H.z,Fu=i?0:Fu+n;let s=Te.root.parent===ae&&!At;Tu-=n;for(let r of Za){let a=r.def,o=null,c=null,l=1.4+a.size*1.2;if(r.growlT-=n,r.happyT-=n,r.fleeT-=n,r.owner){let u=r.owner,[m,x]=r.P.route[u.wi],y=m-u.x,p=x-u.z,f=Math.hypot(y,p),g=Math.hypot(H.x-u.x,H.z-u.z)<2.2||r.happyT>0;if(f<.2)u.wi=(u.wi+1)%r.P.route.length;else if(g)u.ry=Math.atan2(H.x-u.x,H.z-u.z);else{let E=Math.min(f,1.5*n);u.x+=y/f*E,u.z+=p/f*E,u.ry=Math.atan2(y,p)}u.g.position.set(u.x,Math.abs(Math.sin(t*6))*(g?0:.04),u.z),u.g.rotation.y=u.ry,o=u.x-Math.sin(u.ry)*1.1+Math.cos(u.ry)*.5,c=u.z-Math.cos(u.ry)*1.1-Math.sin(u.ry)*.5,l=1.8}else{let u=s?Math.hypot(R.x-r.x,R.z-r.z):99,m=Math.hypot(H.x-r.x,H.z-r.z);if(a.mood==="shy"&&m<3&&i&&r.fleeT<=0){let x=Math.atan2(r.x-H.x,r.z-H.z),y=r.x+Math.sin(x)*3,p=r.z+Math.cos(x)*3;Ln(y,p,.4)||(r.tx=y,r.tz=p,r.fleeT=2.5)}a.mood==="friendly"&&u<5&&u>1.4&&r.happyT<=0&&!a.park&&(r.tx=R.x+1,r.tz=R.z),r.wait>0?r.wait-=n:(o=r.tx,c=r.tz),r.fleeT>0&&(l*=2)}if(r.sp=0,o!==null){let u=o-r.x,m=c-r.z,x=Math.hypot(u,m);if(x>.15){let y=Math.min(x,l*n),p=r.x+u/x*y,f=r.z+m/x*y;if(r.owner||!Ln(p,f,.3)){r.x=p,r.z=f,r.sp=y/n;let g=Math.atan2(u,m);r.ry+=Math.atan2(Math.sin(g-r.ry),Math.cos(g-r.ry))*(1-Math.exp(-10*n))}else wp(r),r.wait=.5}else r.owner||(wp(r),r.wait=1+Math.random()*3)}if(a.mood==="grumpy"){let u=Math.hypot(H.x-r.x,H.z-r.z),m=s?Math.hypot(R.x-r.x,R.z-r.z):99;if(Math.min(u,m)<2.9&&r.growlT<=0){r.growlT=4,dogSound("bark",4,.7),it(ae,"\u{1F4A2}",new D(r.x,1.6*a.size+.4,r.z),2,.5),s&&!e.asleep&&(R.mode="sit",R.modeT=1.2);let x=dogGrowl(e,a,Tu<=0);x&&(Tu=12,speak(x),ft("\u26A0\uFE0F",a.name)),mt()}r.ring.position.set(r.x,.05,r.z),r.ring.material.opacity=r.growlT>2.5?.95:.55+Math.sin(t*4)*.15}let h=r.happyT>0?"happy":r.sp>.2?"walk":a.mood==="shy"&&!r.owner?"sit":"idle";if(Rs(r.d,n,{mode:h,speed:r.sp,sad:a.mood==="grumpy"&&r.growlT>2.8,mood:a.mood==="friendly"?"feliz":"normal"}),r.d.root.position.set(r.x,0,r.z),r.d.root.rotation.y=r.ry,r.ind.position.set(r.x,1.85*a.size+.55+Math.sin(t*3+a.size*5)*.08,r.z),r.ind.visible=Math.hypot(H.x-r.x,H.z-r.z)<16,r.leash){r.owner.g.updateMatrixWorld(!0),r.d.root.updateMatrixWorld(!0),xl.set(.36,.95,.2).applyMatrix4(r.owner.g.matrixWorld),r.d.collar.getWorldPosition(gl);let u=gl.distanceTo(xl)||.01;r.leash.position.addVectors(gl,xl).multiplyScalar(.5),r.leash.quaternion.copy(Zv.setFromUnitVectors(Jv,xl.sub(gl).normalize())),r.leash.scale.set(1,u,1),Zu(r.owner.g,n*(Math.hypot(H.x-r.owner.x,H.z-r.owner.z)<2.2?1:.3))}let d=Math.hypot(H.x-r.x,H.z-r.z)<3.2;d&&!r.near&&ku(dogLabel(a)),r.near=d}}function sm(n,e){let t=null,i=n;for(let s of Za){if(e&&!e(s))continue;let r=Math.hypot(H.x-s.x,H.z-s.z);r<i&&(i=r,t=s)}return t}function Ja(n){n&&(n.done?(Ke.mode="cheer",Ke.modeT=1.6,R.mode="happy",R.modeT=1.6,xt("coin"),speak(n.done.say),pn(questDoneHTML(n.done)),ao(Ue.pet)):(ft(n.def.icon,`${n.n}/${n.need}`),speak(`\xA1Bien! Llevas ${n.n} de ${n.need}.`)),mt())}function jv(n){let e=Ue.pet,t=n.def,i=Te.root.parent===ae&&!e.asleep,s=greetDog(e,t,{asked:n.asked,kidStill:Fu,lunaThere:i});n.asked=s.asked,t.owner&&s.icon==="\u{1F64B}"&&(n.owner.g.userData.wave=2),s.happy&&(n.happyT=2.5,n.wait=2.5,n.ry=Math.atan2(H.x-n.x,H.z-n.z),it(ae,"\u{1F496}",new D(n.x,1.4*t.size+.4,n.z),4,.5),dogSound("happy",t.size>1?4:t.size>.7?3:1,.7),i&&(R.mode="happy",R.modeT=2,it(ae,"\u{1F496}",new D(R.x,1.4,R.z),2,.5))),ft(s.icon,s.sub),speak(s.say),saveRoot(),mt(),s.quest&&setTimeout(()=>Ja(s.quest),1200)}var Hn=null;function Ga(n){let e=Ue.pet;applyFx(e,n.fx),n.kind&&Xa(n.kind),addEvent(e,n.icon,n.msg);let t=Object.entries(n.fx).filter(([,i])=>i>0).map(([i])=>STAT_ICON[i]).join("");ft(n.icon,(t?"+"+t:"")+(n.extra?" "+n.extra:"")),speak(n.word),dogSound("happy",lt(),.7),R.mode="happy",R.modeT=1.2,pt=!1,saveRoot(),mt(),Or()}function Qv(n,e,t,i){pt=!0,Tn(n,()=>{R.mode="happy",R.modeT=e;let s=performance.now(),r=setInterval(()=>{it(ae,t,new D(R.x,1.5,R.z),1,.5),performance.now()-s>e*1e3&&clearInterval(r)},300);setTimeout(i,e*1e3)})}function eM(n){fe="spot",Hn=n,speak(SPOT_UI[n].name),dogSound("bark",lt(),.6),n==="aventura"&&pi&&(pi.userData.wave=2),Or(),he("#actions").hidden=!1,he("#prompt").hidden=!0,ti("open:"+n)}function Ka(){fe="town",Hn=null,pt=!1,he("#actions").hidden=!0,Qs("")}function Or(){if(fe!=="spot"||!Hn)return;let n=Ue.pet;Wr(spotActions(Hn,n,Pl()&&!n.asleep).concat([["closespot","\u{1F6AA}","Salir",""]]));let e=spotInfo(Hn,n);Qs(e?`<div class="wallet">${e}</div>`:"")}function tM(n){if(n==="closespot")return Ka();if(pt||!Hn)return;let e=Ue.pet,t=En.find(a=>a.id===Hn),i=n.slice(3);setTimeout(()=>ti("do:"+n),0);let s=spotDo(Hn,i,e);if(!s)return;if(saveRoot(),mt(),s.special==="story"){speak("Dato perruno: "+s.text),pn(`<div class="result"><h2>\u{1F4D6}</h2><div class="howto"><div><span>${s.icon}</span></div></div><p class="fact">${Ji(s.text)}</p>${s.bone?'<div class="gains"><span>\u{1F9B4} +1</span></div>':""}</div>`);return}if(s.special==="quiz")return nM(s.q);if(s.special==="talk"||s.special==="bag"){pi&&(pi.userData.wave=2),speak(s.say),pn(s.html),ao(e),Or();return}if(s.special==="cookies"){ft(s.icon,s.sub),speak(s.say),xt("coin"),Or();return}if(s.special==="treatShelter"){ja.forEach(a=>{a.happyT=2.5}),it(ae,"\u{1F36A}",new D(rn.x,1.2,rn.z),4,.5),ft(s.icon,s.sub),speak(s.say),xt("coin"),Or(),s.quest&&setTimeout(()=>Ja(s.quest),1200);return}if(s.start&&speak(s.start),Hn==="refugio")return pt=!0,Tn([rn.x,rn.z-3.2,0],()=>{ja.forEach(a=>{a.happyT=2.5}),it(ae,"\u{1F496}",new D(rn.x,1.2,rn.z),6,.6),setTimeout(()=>Ga(s),1500)});if(s.special2==="friends"){let a=Za.filter(c=>c.def.park),o=a[Math.floor(Math.random()*a.length)];return pt=!0,Tn([o.x-1,o.z,Math.PI/2],()=>{o.happyT=3,o.wait=3,R.mode="spin",R.modeT=1.5,dogSound("bark",lt()),it(ae,"\u{1F496}",new D(R.x,1.4,R.z),4),setTimeout(()=>Ga({...s,msg:`Luna jug\xF3 con ${o.def.name} en el parque para perros.`,word:`\xA1Luna y ${o.def.name} son amigas!`}),1800)})}if(s.special2==="frisbee")return rm(0,()=>Ga(s));if(Hn==="aventura")return pt=!0,Tn([45.5,23.4,0],()=>{R.mode="lie",R.modeT=2,setTimeout(()=>Ga(s),2e3)});let r=Hn==="perros"?Zi.water:[t.x+(i==="smell"?-1:.6),t.z+(t.d||0)/2+1.2,Math.PI];Qv(r,i==="groom"?2.4:1.6,s.anim||"\u2728",()=>Ga(s))}function rm(n,e){let t=Zi.disc;pt=!0;let i=0,s=0;for(let l=0;l<30&&(i=fi.x0+2+Math.random()*(fi.x1-fi.x0-4),s=fi.z0+2+Math.random()*(fi.z1-fi.z0-4),!!Ln(i,s,.6));l++);Ke.mode="throw",Ke.modeT=.35,xt("pop");let r=H.x,a=H.z,o=performance.now();t.visible=!0;let c=setInterval(()=>{let l=Math.min(1,(performance.now()-o)/900);t.position.set(r+(i-r)*l,1.2+Math.sin(l*Math.PI)*1.6-l*1.1,a+(s-a)*l),t.rotation.y+=.5,l>=1&&clearInterval(c)},16);setTimeout(()=>dogSound("bark",lt()),300),Tn([i,s-.6,0],()=>{t.visible=!1,R.mode="happy",R.modeT=.8,it(ae,"\u2B50",new D(i,1.2,s),2,.5),Tn([H.x+.8,H.z,-Math.PI/2],()=>{n<2?rm(n+1,e):e()})})}var am=null;function nM(n){am=n,speak(n.q),he("#card3-box").innerHTML=`<div class="result"><h2>\u2753</h2><p class="fact">${Ji(n.q)}</p><div class="quiz">${Uu(n.a).map(([e,t])=>`<button class="go quiz-opt" data-quiz="${t?1:0}">${Ji(e)}</button>`).join("")}</div></div>`,he("#card3").hidden=!1,El=null}function iM(n){let e=Ue.pet;he("#card3").hidden=!0;let t=answerQuiz(e,am,n);ft(t.icon,t.sub),speak(t.say),n&&xt("coin"),saveRoot(),mt(),Or()}var rn={x:-15.5,z:12};$s.push([rn.x,rn.z,4.2],[-22,16,2.5]);var ja=[];function sM(){if(ja.length)return;let n=new we,e=rn.x-2.5,t=rn.x+2.5,i=rn.z-2,s=rn.z+2;Yi(n,e,i,t,i,"#c98c55"),Yi(n,e,s,t,s,"#c98c55"),Yi(n,e,i,e,s,"#c98c55"),Yi(n,t,i,t,s,"#c98c55"),ae.add(n),SHELTER_LOOKS.forEach((a,o)=>{let c=Rl({look:a,ears:o===1?"up":null,day:5,acc:{worn:null}});c.root.scale.setScalar(.5+o*.12),ae.add(c.root),ja.push({d:c,x:e+1+o*1.5,z:rn.z,ph:o*2,happyT:0})});let r=Ii("\u{1F3E1}",.9,!0);r.position.set(rn.x,2.4,rn.z),ae.add(r)}function rM(n){for(let e of ja)e.ph+=n,e.happyT-=n,e.x=rn.x+Math.sin(e.ph*.4)*1.8,e.z=rn.z+Math.cos(e.ph*.55)*1.2,e.d.root.position.set(e.x,0,e.z),e.d.root.rotation.y=Math.atan2(Math.cos(e.ph*.4)*.72,-Math.sin(e.ph*.55)*.66),Rs(e.d,n,{mode:e.happyT>0?"happy":"walk",speed:.6,mood:"feliz"})}var Ks=[];function $a(n,e){for(let t=0;t<200;t++){let i=Dt.x0+2+n()*(Dt.x1-Dt.x0-4),s=e?Dt.riverZ+2.5+n()*(Dt.z1-Dt.riverZ-4):Dt.z0+2+n()*(Dt.z1-Dt.z0-4);if(!Ln(i,s,.7)&&Math.abs(s-Dt.riverZ)>2.4)return[i,s]}return[56,26]}function ao(n){Ks.forEach(s=>ae.remove(s.m)),Ks.length=0;let e=mi(n.bornAt%100003+n.day*6151+11),t={};for(let s=0;s<7;s++)t["s"+s]=$a(e,s>=5);for(let s=0;s<4;s++)t["f"+s]=$a(e,s>=2);let i=$a(e,!0);for(let[s,r]of valleyItemList(n)){let[a,o]=r==="cristal"?[mn.cave[0],mn.cave[1]-1.2]:r==="llave"?i:t[s],c=Ii(VALLEY_ITEMS[r].icon,r==="llave"?1:.85);c.position.set(a,.6,o),ae.add(c),Ks.push({id:s,item:r,m:c,x:a,z:o})}}var Ou=[];function aM(){if(!Ou.length)for(let n=0;n<3;n++){let e=new we,t=C(P.sph(.25,12,10),"#f4f0ea");t.scale.set(.9,.85,1.2),t.position.y=.25,e.add(t),e.add(Q(C(P.sph(.16,10,8),"#f4f0ea"),0,.45,.22));for(let r of[-1,1]){let a=C(P.cap(.04,.22),"#f4f0ea");a.position.set(r*.07,.68,.18),a.rotation.z=r*.2,e.add(a),e.add(Q(C(P.sph(.025,6,5),"#1c1410",{cast:!1}),r*.07,.48,.36))}e.add(Q(C(P.sph(.08,8,6),"#ffffff"),0,.3,-.3));let[i,s]=$a(mi(900+n),n===2);e.position.set(i,0,s),ae.add(e),Ou.push({g:e,x:i,z:s,tx:i,tz:s,hop:0,wait:1+n})}}function oM(n,e,t){if(rM(n),Zi.flame&&Zi.flame.scale.set(1+Math.sin(t*13)*.12,1+Math.sin(t*9)*.2,1+Math.cos(t*11)*.12),pi&&Zu(pi,n),!Vu(H.x,H.z)&&Math.hypot(H.x-Dt.x0,H.z-Dt.gateZ)>30)return;let i=rpgOf(e),s=Te.root.parent===ae&&!At;for(let r=Ks.length-1;r>=0;r--){let a=Ks[r];if(a.m.position.y=.6+Math.sin(t*3+r)*.12,Math.hypot(a.x-H.x,a.z-H.z)<1||s&&Math.hypot(a.x-R.x,a.z-R.z)<.9){ae.remove(a.m),Ks.splice(r,1),it(ae,VALLEY_ITEMS[a.item].icon,a.m.position,3,.5),xt("coin");let o=pickValleyItem(e,a.id,a.item);o.say&&(ft(o.icon,o.sub),speak(o.say)),s&&(R.mode="happy",R.modeT=.8),saveRoot(),mt(),Ja(o.quest)}}if(Math.hypot(H.x-mn.mirador[0],H.z-mn.mirador[1])<2){let r=visitMirador(e);r&&(it(ae,"\u2728",new D(65,4.6,20.8),6,.6),r.first&&(ft("\u{1F5FC}","\u{1F440}"),speak(r.say)),saveRoot(),mt(),Ja(r.quest))}ui&&(ui.userData.lid.rotation.x=Qn(ui.userData.lid.rotation.x,i.chestDay===e.day?-1.1:0,1-Math.exp(-6*n)));for(let r of Ou){r.wait-=n;let a=Math.hypot(H.x-r.x,H.z-r.z);if(r.wait<=0){let o=r.tx-r.x,c=r.tz-r.z,l=Math.hypot(o,c);if(l<.1){let[h,d]=$a(Math.random,r.z>Dt.riverZ);Math.hypot(h-r.x,d-r.z)<6&&(r.tx=h,r.tz=d),r.wait=1+Math.random()*2.5}else{let h=Math.min(l,1.6*n);r.x+=o/l*h,r.z+=c/l*h,r.hop+=n*9,r.g.rotation.y=Math.atan2(o,c)}}r.g.position.set(r.x,Math.abs(Math.sin(r.hop))*.25,r.z),a<1.4&&!r.met&&(r.met=!0,it(ae,"\u{1F496}",new D(r.x,.9,r.z),2,.45),xt("pop"),s&&(R.mode="happy",R.modeT=.8)),a>4&&(r.met=!1)}}function cM(){let n=Ue.pet,e=openChest(n);e.opened&&it(ae,"\u2728",new D(mn.chest[0],1.2,mn.chest[1]+1.1),8,.6),ft(e.icon,e.sub),speak(e.say),e.opened&&xt("coin"),saveRoot(),mt(),e.quest&&setTimeout(()=>Ja(e.quest),1200)}var nt=null,zl=!1;function ed(n,e){let t=Pl();return t&&Pn(Te.root,n),Pn(Ke.root,n),Gt=n,fe=e,he("#actions").hidden=!0,he("#prompt").hidden=!0,Qs(""),bs.visible=!1,$i.visible=!1,Te.root.visible=!0,t}function Bl(n){let e=Gt;nt=null,er(null),Ke.mode="idle",gi(()=>{if(n==="casa"){zp();return}let t=Te.root.parent===e;t&&Pn(Te.root,ae),Pn(Ke.root,ae),Gt=ae,fe="town";let i=ws.find(s=>s.pl.id===n);(t?no:Dp)(i.x+1.6,i.z,Math.PI/2),n==="parque"?Fp():n==="lago"&&$p()})}function td(n,e,t,i,s){let r=Ue.pet;nt.over=!0,i(r),saveRoot(),mt(),er(null),n&&(Ke.mode="cheer",Ke.modeT=2,R.mode="happy",R.modeT=2),Ul(n,e,t,()=>Bl(s))}var nd=(n,e,t,i,s,r,a,o=5)=>{Mt.position.lerp(new D(n,e,t),1-Math.exp(-o*a)),Mt.lookAt(i,s,r)},Yt=new On;function lM(){speak("\xA1Carrera de obst\xE1culos! Toca A o la pantalla para saltar las vallas y los charcos."),pn(ju("\u{1F3C3}",[["\u24B6 \u{1F446}","\u2934\uFE0F \u{1F6A7}"],["\u{1F4A6}","\u2934\uFE0F"],["\u{1F9B4}","\u{1F60B}"]]),()=>gi(om))}function om(){Gu(Yt);let n=Gr(Yt);Yt.background=new Xe("#bfe6ff"),Yt.fog=new rs("#bfe6ff",22,60);let e=300,t=mi(Date.now()%1e5);Yt.add(Q(C(P.box(e+60,.2,24),"#8fd46e",{cast:!1,recv:!0}),e/2,-.1,-4)),Yt.add(Q(C(P.box(e+60,.04,2.4),"#f2d39a",{cast:!1,recv:!0}),e/2,.02,0));for(let s=-10;s<e+20;s+=2.5+t()*4){let r=Xu(t()<.4);if(r.position.set(s,0,-4-t()*8),r.scale.setScalar(.8+t()*.5),Yt.add(r),t()<.5){let a=C(P.sph(.3+t()*.3,10,8),"#5cbf5a");a.position.set(s+1,.2,2.6+t()*1.5),Yt.add(a)}}for(let s=0;s<e+20;s+=4)Yt.add(Q(C(P.box(.12,.6,.12),"#ffffff"),s,.3,-1.6));Yt.add(Q(C(P.box(e+20,.08,.08),"#ffffff"),e/2,.55,-1.6));let i=[];for(let s=10;s<e-10;s+=6+t()*3.5){let r=t()<.62?"fence":"puddle",a;if(r==="fence"){a=new we;for(let o of[-.85,.85])a.add(Q(C(P.box(.12,.95,.12),"#c98c55"),0,.47,o));a.add(Q(C(P.box(.1,.14,1.8),"#ff5c5c"),0,.78,0)),a.add(Q(C(P.box(.1,.12,1.8),"#ffffff"),0,.45,0))}else a=C(P.cyl(.85,.85,.04,20),"#5ec2f5",{cast:!1}),a.scale.set(1.2,1,.9),a.position.y=.04;if(a.position.x=s,Yt.add(a),i.push({kind:r,x:s,m:a,done:!1}),t()<.6){let o=t()<.6,c=qu();c.scale.setScalar(.9);let l=o?s:s+3,h=o?1.55:.6;c.position.set(l,h,0),Yt.add(c),i.push({kind:"bone",x:l,y:h,m:c,done:!1})}}ed(Yt,"agility"),Te.root.rotation.y=Math.PI/2,Ke.root.rotation.y=Math.PI/2,Ke.leash=!0,Mt.position.set(2,2.8,9),nt={kind:"agility",lt:n,obs:i,time:0,dur:35,x:0,y:0,vy:0,onGround:!0,buffer:-9,lastGround:0,speed:5,hits:0,cleared:0,splash:0,bones:0,inv:0,over:!1,update:hM,tap:()=>{nt.buffer=nt.time},quit:()=>Bl("parque")}}function hM(n){let e=nt,t=Ue.pet,i=stageOf(t.day);if(!e.over){e.time+=n,e.speed=Math.min(6.4,5+e.time*.05),(Oe.jumpPress||Oe.a)&&(e.buffer=e.time);let r=Oe.aHeld||Oe.up||zl;e.onGround&&(e.lastGround=e.time),e.time-e.buffer<=.12&&e.time-e.lastGround<=.1&&(e.vy=7.6,e.buffer=-9,e.lastGround=-9,e.onGround=!1,xt("pop"));let a=e.vy>0?22:34;e.vy>0&&!r&&(a=40),e.vy-=a*n,e.y+=e.vy*n,e.y<=0&&(e.y=0,e.vy=0,e.onGround=!0),e.x+=e.speed*n,e.inv>0&&(e.inv-=n);for(let o of e.obs){if(o.done)continue;if(o.kind==="bone"){o.m.rotation.y+=n*3,Math.abs(o.x-e.x)<.6&&Math.abs(o.y-(e.y+.7))<.65&&(o.done=!0,Yt.remove(o.m),e.bones++,xt("coin"),it(Yt,"\u{1F9B4}",o.m.position,2,.45));continue}let c=o.kind==="puddle"?.8:.05,l=o.kind==="fence"?.7:.08;e.inv<=0&&Math.abs(o.x-e.x)<c+.2&&e.y<l?(o.done=!0,e.hits++,e.inv=.8,dogSound("sad",lt(),.5),o.kind==="puddle"?(e.splash++,it(Yt,"\u{1F4A6}",new D(e.x,.6,0),4,.5)):(o.m.rotation.z=-.7,it(Yt,"\u{1F4A5}",new D(e.x,.8,0),2,.5))):o.x<e.x-c-.3&&(o.done=!0,e.cleared++,it(Yt,"\u2B50",new D(e.x,1.8,0),1,.45))}if(er(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F9B4} ${e.bones}</span>`),e.time>=e.dur){let o=e.hits===0?3:e.hits<=3?2:1,c=Math.floor((e.bones+e.cleared/2)/3);td(o,c,`<span>\u{1F6A7} ${e.cleared}</span>`,l=>{l.bones+=c,today(l).play++,ro(l,"agility"),applyFx(l,{felicidad:14+o*3,energia:-14,saciedad:-6,hidratacion:-10,higiene:-e.splash*6}),addEvent(l,"\u{1F3C3}",`Carrera de obst\xE1culos: ${e.cleared} saltos y ${e.bones} huesos.`),o===3&&addMilestone(l,"agility","\u{1F3C3}","\xA1Luna hizo una carrera de obst\xE1culos perfecta!"),outdoorRisk(l)},"parque")}}let s=!e.over;Te.root.scale.setScalar(to[Math.max(1,i.size)]),Te.root.position.set(e.x,e.y,0),Te.root.visible=!(e.inv>0&&Math.floor(e.time*12)%2),Rs(Te,n,{mode:s&&e.onGround?"walk":"happy",speed:s?e.speed*.6:0,mood:"feliz"}),H.x=e.x-1.9,Ke.root.position.set(H.x,0,.4),Cl(Ke,n,s,e.speed*.7),Il(Yt,!0),nd(e.x+2.2,2.8,9,e.x+2.2,.9,0,n,8),e.lt.sun.position.set(e.x+5,12,8),e.lt.sun.target.position.set(e.x,0,0)}var Zt=new On,uM=[-3.5,-6.5,-9.5];function dM(n){let e=new we,t=n?"#ffd23f":"#ffffff",i=C(P.sph(.42,14,10),t);i.scale.set(.9,.65,1.3),i.position.y=.2,e.add(i);for(let r of[-1,1]){let a=C(P.sph(.2,10,8),n?"#f0b820":"#e4e8f0");a.scale.set(.4,.6,1.1),a.position.set(r*.33,.28,-.05),e.add(a)}e.add(Q(C(P.sph(.24,12,10),n?t:"#3c8c4c"),0,.65,.38));let s=C(P.cone(.09,.26,8),"#ff9f43");s.rotation.x=Math.PI/2,s.position.set(0,.6,.66),e.add(s);for(let r of[-1,1])e.add(Q(C(P.sph(.035,6,5),"#1c1410",{cast:!1}),r*.12,.7,.57));if(n){let r=Ii("\u2728",.6);r.position.y=1.2,e.add(r)}return e}function fM(){speak("\xA1Los patos tienen hambre! Mu\xE9vete y l\xE1nzales su comida con A o tocando la pantalla."),pn(ju("\u{1F986}",[["\u2B05\uFE0F\u27A1\uFE0F","\u{1F9D2}"],["\u24B6 \u{1F446}","\u{1F33E} \u2B06\uFE0F"],["\u{1F33E} \u{1F986}","\u{1F60B}"],["\u{1F986}\u2728","+3"]]),()=>gi(cm))}function cm(){Gu(Zt);let n=Gr(Zt);n.sun.position.set(4,14,8),n.sun.target.position.set(0,0,-5),Zt.background=new Xe("#bfe6ff"),Zt.fog=new rs("#bfe6ff",25,50);let e=C(new zn(70,24),"#5ec2f5",{cast:!1,recv:!0});e.rotation.x=-Math.PI/2,e.position.set(0,0,-7),Zt.add(e),Zt.add(Q(C(P.box(70,.3,8),"#f6e3a8",{cast:!1,recv:!0}),0,-.1,4.6)),Zt.add(Q(C(P.box(70,.3,12),"#8fd46e",{cast:!1,recv:!0}),0,-.1,-24));let t=mi(777);for(let s=-30;s<30;s+=2+t()*3){let r=Xu(t()<.4);r.position.set(s,0,-20-t()*4),Zt.add(r)}for(let s=0;s<14;s++){let r=C(P.cyl(.35,.35,.03,12),"#58b04a",{cast:!1});r.position.set(-12+t()*24,.02,-2-t()*11),Zt.add(r)}for(let s=0;s<18;s++){let r=C(P.cyl(.04,.05,1+t()*.6,5),"#4f9a3c");r.position.set(-14+t()*28,.5,.4+t()*.3),Zt.add(r)}let i=ed(Zt,"ducksgame");H.x=0,H.z=2.2,H.ry=Math.PI,i&&(R.x=1.3,R.z=2.6,R.ry=Math.PI),Mt.position.set(0,5.5,8.5),nt={kind:"ducks",lt:n,water:e,time:0,dur:30,ducks:[],spawnT:.3,pellets:[],cd:0,score:0,over:!1,update:pM,quit:()=>Bl("lago"),tap:s=>{Hr.set(s.clientX/ze.innerWidth*2-1,-(s.clientY/ze.innerHeight)*2+1),kr.setFromCamera(Hr,Mt);let r=kr.intersectObject(e)[0];r&&(H.x=clamp(r.point.x,-6,6)),lm()}}}function lm(){let n=nt;if(!n||n.over||n.cd>0)return;n.cd=.55,Ke.mode="throw",Ke.modeT=.3,xt("pop");let e=.8,t=H.x+.25,i=1.8,s=1.3,r=null,a=.75;for(let h of n.ducks){if(h.fed)continue;let d=h.x+h.vx*e,u=Math.abs(d-H.x);u<a&&(a=u,r={x:d,z:h.z})}let o=r?r.x:H.x,c=r?r.z:-6.5,l=C(P.sph(.11,8,6),"#e8c860");l.position.set(t,s,i),Zt.add(l),n.pellets.push({s:l,t:0,T:e,vx:(o-t)/e,vz:(c-i)/e,vy:(.3-s+.5*9*e*e)/e})}function pM(n){let e=nt,t=Ue.pet,i=Qa.getElapsed();if(!e.over){e.time+=n,e.cd-=n;let s=clamp(Oe.right-Oe.left+Oe.jx,-1,1);if(H.x=clamp(H.x+s*5*n,-6,6),(Oe.a||Oe.jumpPress)&&lm(),e.spawnT-=n,e.spawnT<=0&&e.time<e.dur-1.5){let r=Math.random()<.5,a=Math.random()<.13,o=dM(a),c=uM[Math.floor(Math.random()*3)],l=(r?1:-1)*(1.3+Math.random()*1.3)*(1+e.time/45);o.position.set(r?-13:13,0,c),o.rotation.y=r?Math.PI/2:-Math.PI/2,Zt.add(o),e.ducks.push({m:o,x:o.position.x,z:c,vx:l,gold:a,fed:!1,ph:Math.random()*6}),e.spawnT=.7+Math.random()*.6}for(let r of e.pellets)if(r.t+=n,r.vy-=9*n,r.s.position.x+=r.vx*n,r.s.position.y+=r.vy*n,r.s.position.z+=r.vz*n,r.t>=r.T){r.dead=!0,Zt.remove(r.s);let a=e.ducks.find(o=>!o.fed&&Math.hypot(o.x-r.s.position.x,o.z-r.s.position.z)<.85);if(a){a.fed=!0;let o=a.gold?3:1;e.score+=o,xt("quack"),it(Zt,"\u{1F496}",new D(a.x,1.2,a.z),3,.5),R.mode="happy",R.modeT=.8}else it(Zt,"\u{1F4A7}",r.s.position,1,.4)}if(e.pellets=e.pellets.filter(r=>!r.dead),er(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F986} ${e.score}</span>`),e.time>=e.dur){let r=e.score>=16?3:e.score>=8?2:e.score>=1?1:0,a=Math.min(8,Math.floor(e.score/4));td(r,a,`<span>\u{1F986} ${e.score}</span>`,o=>{o.bones+=a,today(o).play++,ro(o,"ducks"),applyFx(o,{felicidad:8+Math.min(16,e.score),energia:-4}),addEvent(o,"\u{1F986}",`Le dieron de comer a los patos del lago (${e.score} puntos).`),e.score>=10&&addMilestone(o,"ducks10","\u{1F986}","\xA1Alimentaron a muchos patos en el lago!"),outdoorRisk(o)},"lago")}}for(let s of e.ducks)s.ph+=n,s.x+=s.vx*n*(s.fed?2.2:1),s.m.position.set(s.x,Math.sin(s.ph*3)*.04,s.z),s.fed&&(s.m.rotation.z=Math.sin(s.ph*12)*.15),Math.abs(s.x)>14&&(Zt.remove(s.m),s.gone=!0);e.ducks=e.ducks.filter(s=>!s.gone),Te.root.parent===Zt&&(R.x+=(H.x+1.3-R.x)*(1-Math.exp(-6*n)),Te.root.scale.setScalar(to[stageOf(t.day).size]),Te.root.position.set(R.x,0,R.z),Te.root.rotation.y=Math.PI,R.modeT>0&&(R.modeT-=n),Rs(Te,n,{mode:t.asleep?"sleep":R.modeT>0?"happy":"sit",mood:"feliz"})),Ke.root.position.set(H.x,0,H.z),Ke.root.rotation.y=Math.PI,Cl(Ke,n,!1,0),Il(Zt,!1),nd(H.x*.35,5.5,8.5,H.x*.35,0,-5,n)}var Ai=new On,mM=["\u{1F436}","\u{1F9B4}","\u{1F3BE}","\u{1F9F8}","\u{1F986}","\u{1F333}","\u{1F356}","\u{1F43F}\uFE0F","\u{1F98B}","\u{1F3E0}"];function gM(){pt||(speak("\xA1Encuentra las parejas! Toca dos cartas."),gi(hm))}function hm(){Gu(Ai),Nl(Ai,{floor:"#e7b98a",back:"#ffd1e6",side:"#c8f1e4",rug:"#ffb3d1"}),Ai.add(Q(C(P.box(7.4,.3,5.6),"#c98c55",{recv:!0}),0,.85,0));for(let[l,h]of[[-3.3,-2.4],[3.3,-2.4],[-3.3,2.4],[3.3,2.4]])Ai.add(Q(C(P.box(.3,.85,.3),"#a0642c"),l,.42,h));let n=Ue.pet,e=n.day<8?4:6,t=Uu(mM).slice(0,e),i=Uu([...t,...t]),s=i.length/4,r=i.map((l,h)=>{let d=h%4,u=Math.floor(h/4),m=new we;m.position.set(-2.4+d*1.6,1.06,(u-(s-1)/2)*1.85);let x=C(P.box(1.2,.06,1.55),"#c48ad8");m.add(x);let y=new St(new zn(.75,.75),new An({map:Ts("\u{1F43E}"),transparent:!0}));y.rotation.x=-Math.PI/2,y.position.y=.035,m.add(y);let p=new St(new zn(1.14,1.49),new An({color:"#ffffff"}));p.rotation.x=Math.PI/2,p.position.y=-.035,m.add(p);let f=new St(new zn(.95,.95),new An({map:Ts(l),transparent:!0}));return f.rotation.x=Math.PI/2,f.rotation.z=Math.PI,f.position.y=-.04,m.add(f),m.traverse(g=>{g.userData.card=h}),Ai.add(m),{ic:l,g:m,faceBg:p,open:!1,done:!1,rot:0}}),a=C(P.box(1.42,.03,1.77),"#ffd23f",{cast:!1});Ai.add(a),ed(Ai,"memory")&&(R.x=4.4,R.z=1.2),H.x=-4.4,H.z=1.2;let c=ze.innerWidth<ze.innerHeight;Mt.position.set(0,c?12:8,c?6.5:5.4),nt={kind:"memory",cards:r,cursor:a,sel:0,first:null,lock:!1,moves:0,pairs:e,found:0,over:!1,update:_M,quit:()=>Bl("casa"),tap:l=>{Hr.set(l.clientX/ze.innerWidth*2-1,-(l.clientY/ze.innerHeight)*2+1),kr.setFromCamera(Hr,Mt);let h=kr.intersectObjects(r.map(d=>d.g),!0)[0];h&&h.object.userData.card!=null&&(nt.sel=h.object.userData.card,id(nt.sel))},key:l=>{let h=r.length,d=nt.sel;nt.sel=l==="left"?(d+h-1)%h:l==="right"?(d+1)%h:l==="up"?(d+h-4)%h:(d+4)%h,xt("step")}}}function id(n){let e=nt;if(!e||e.kind!=="memory"||e.over||e.lock)return;let t=e.cards[n];if(!t||t.open||t.done)return;if(t.open=!0,xt("pop"),e.first===null){e.first=n;return}e.moves++;let i=e.cards[e.first];i.ic===t.ic?(i.done=t.done=!0,e.first=null,e.found++,i.faceBg.material=t.faceBg.material=new An({color:"#c8f5e6"}),xt("coin"),dogSound("yip",lt(),.5),R.mode="happy",R.modeT=1,it(Ai,"\u2B50",t.g.position.clone().setY(1.6),2,.5),e.found===e.pairs&&setTimeout(()=>{nt===e&&xM()},700)):(e.lock=!0,setTimeout(()=>{nt===e&&(i.open=t.open=!1,e.first=null,e.lock=!1)},900))}function xM(){let n=nt,e=n.moves<=n.pairs+2?3:n.moves<=n.pairs*2?2:1,t=((today(Ue.pet).games||{}).memory||0)<3?e:0;td(e,t,`<span>\u{1F0CF} ${n.moves}</span>`,i=>{i.bones+=t,today(i).play++,ro(i,"memory"),applyFx(i,{felicidad:8+e*2}),addEvent(i,"\u{1F0CF}",`Jugaron a la memoria: ${n.pairs} parejas en ${n.moves} turnos.`),e===3&&addMilestone(i,"memory","\u{1F0CF}","\xA1Memoria perfecta!")},"casa")}function _M(n){let e=nt,t=Ue.pet,i=1-Math.exp(-10*n);!e.over&&(Oe.a||Oe.jumpPress)&&id(e.sel),e.over||er(`<span>\u{1F0CF} ${"\u2B50".repeat(e.found)}${"\u2606".repeat(e.pairs-e.found)}</span>`);for(let a of e.cards){let o=a.open||a.done?Math.PI:0;a.rot+=(o-a.rot)*i,a.g.rotation.z=a.rot,a.g.position.y=1.06+Math.sin(a.rot)*.5}let s=e.cards[e.sel].g.position;e.cursor.position.set(s.x,1.02,s.z),e.cursor.visible=!e.over,Te.root.parent===Ai&&(Te.root.scale.setScalar(to[stageOf(t.day).size]),Te.root.position.set(R.x,0,R.z),Te.root.rotation.y=-Math.PI/2,R.modeT>0&&(R.modeT-=n),Rs(Te,n,{mode:t.asleep?"sleep":R.modeT>0?"happy":"sit",mood:"feliz"})),Ke.root.position.set(H.x,0,H.z),Ke.root.rotation.y=Math.PI/2,Cl(Ke,n,!1,0),Il(Ai,!1);let r=ze.innerWidth<ze.innerHeight;nd(0,r?12:8,r?6.5:5.4,0,.9,.3,n)}var Qa=new Aa;Qa.connect(document);var wu=0,Au=0,Ru=15,Cu=0,um=!1;Ci.setAnimationLoop(()=>{Qa.update();let n=Math.min(Math.max(Qa.getDelta(),0),.1);Ue&&dm(n),Ip(n),Ci.render(Gt,Mt)});var Ap=new Set(["town","park","lake","forestmenu","spot"]);function dm(n){let e=Ue.pet;if(nt){nt.update(n),Music.setMode("play"),Oe.a=!1,Oe.jumpPress=!1;return}if(fe==="forest"){let p=n;for(;p>1e-4&&Gn&&!Gn.over;){let f=Math.min(p,.016666666666666666);Rv(f),p-=f}Music.setMode("play"),Oe.a=!1;return}if(wu+=n,Au+=n,wu>5){wu=0;let p=e.day;simulate(e,now(e)),e.day!==p&&(Lp(e),ao(e)),mt(),Np(e),fe==="home"&&(ys(),bl(e)),fe==="room"&&!Vn&&Xp(),Pv()}Au>15&&(Au=0,saveRoot()),Cp(Te,e);let t=stageOf(e.day);fe==="town"&&!e.asleep&&Te.root.parent!==ae&&(Pn(Te.root,ae),R.x=H.x-Math.sin(H.ry)*1.3,R.z=H.z-Math.cos(H.ry)*1.3,R.ry=H.ry,R.path=null,di=[{x:R.x,z:R.z},{x:H.x,z:H.z}],it(ae,"\u{1F496}",new D(R.x,1.4,R.z),4),dogSound("happy",lt()),speak("\xA1Luna despert\xF3 y vino corriendo contigo!")),Te.root.scale.setScalar(to[t.size]);let i=Oe.right-Oe.left+Oe.jx,s=Oe.down-Oe.up+Oe.jz,r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a=Ap.has(fe),o=!1,c=!1,l=0,h=0,d=0,u=[2.4,3.2,4.2,4.8,5][t.size]*(e.stats.energia<15?.6:1),m=Math.max(3.4,u)*(e.stats.energia<15?.75:1)*(e.sick&&!e.sick.treated?.8:1);if(R.path){let p=R.path.x-R.x,f=R.path.z-R.z,g=Math.hypot(p,f);if(g<.08){R.ry=R.path.ry;let E=R.path.done;R.path=null,E&&E()}else{l=p/g,h=f/g,o=!0,d=u;let E=Math.min(u*n,g);R.x+=l*E,R.z+=h*E}}if(a){if(Math.hypot(i,s)>.15)Ot=null;else if(Ot&&fe==="town"&&!pt){let[p,f]=Ot.pts[0],g=p-H.x,E=f-H.z,M=Math.hypot(g,E);if(Ot.stuck=M<Ot.best-.05?0:Ot.stuck+n,Ot.best=Math.min(Ot.best,M),M<.35){if(Ot.pts.shift(),Ot.best=1/0,!Ot.pts.length){let v=En.find(w=>w.id===Ot.place);Ot=null,v&&Ju(v)}}else Ot.stuck>1.5?Ot=null:(i=g/M,s=E/M)}if(!pt&&Math.hypot(i,s)>.15){c=!0;let p=H.x+i*m*n,f=H.z+s*m*n;Ln(p,H.z,.35)||(H.x=p),Ln(H.x,f,.35)||(H.z=f);let g=Math.atan2(i,s)-H.ry;if(g=Math.atan2(Math.sin(g),Math.cos(g)),H.ry+=g*(1-Math.exp(-14*n)),dl+=m*n,dl>=1){let E=today(e),M=Math.floor(dl);dl-=M,ti("walk"),e.day>=3&&(E.walkTiles+=M,E.walkTiles>=WALK_GOAL&&!E.walk&&(E.walk=1,e.bones+=2,addEvent(e,"\u{1F5FA}\uFE0F","\xA1Exploraci\xF3n del d\xEDa completada!"),ft("\u{1F5FA}\uFE0F","\u2B50"),speak("\xA1Paseo completado!"),mt()))}}if(!R.path&&!e.asleep&&!At){let p=iv(n,m*1.15,t.size);p&&(o=!0,l=p.dx,h=p.dz,d=p.sp)}}else!R.path&&!e.asleep&&!pt&&Math.hypot(i,s)>.15&&(o=!0,l=i,h=s,d=u,R.x=clamp(R.x+i*u*n,-5.3,5.3),R.z=clamp(R.z+s*u*n,-2.4,3.6));if(o){let p=Math.atan2(l,h)-R.ry;p=Math.atan2(Math.sin(p),Math.cos(p)),R.ry+=p*(1-Math.exp(-14*n))}else if(a&&!e.asleep&&!At&&Math.hypot(H.x-R.x,H.z-R.z)>.5){let p=Math.atan2(H.x-R.x,H.z-R.z)-R.ry;p=Math.atan2(Math.sin(p),Math.cos(p)),R.ry+=p*(1-Math.exp(-4*n))}R.modeT>0&&(R.modeT-=n,R.mode==="spin"&&(R.ry+=n*9),R.modeT<=0&&["happy","sit","paw","lie","spin"].includes(R.mode)&&(R.mode="idle")),fe==="room"&&(Zu(an[bn],n),_v(n));let x=e.asleep?"sleep":o?"walk":R.modeT>0||R.mode==="sleep"?R.mode:"idle";!e.asleep&&R.mode==="sleep"&&!pt&&R.modeT<=0&&(R.mode="idle"),Rs(Te,n,{mode:At?"lie":x,speed:o?d:0,eyesClosed:e.day<2,sad:["triste","enferma"].includes(moodOf(e)),mood:moodOf(e)}),Te.root.position.set(R.x,0,R.z),Te.root.rotation.y=R.ry,Ke.root.position.set(H.x,0,H.z),Ke.root.rotation.y=H.ry;let y=a&&e.day>=3&&!e.asleep&&!At&&!R.path&&Math.hypot(H.x-R.x,H.z-R.z)<3.5;Ke.leash=y,Cl(Ke,n,c,m),Il(Gt,y),e.asleep&&Te.root.parent===Gt&&Math.random()<n*.8&&it(Gt,"\u{1F4A4}",new D(R.x,1.2,R.z),1,.5),Cu+=n,Cu>.5&&(Cu=0,Wn(),Qp()),Music.setMode(fe==="home"||fe==="room"?"home":um?"night":"day"),Ap.has(fe)?yM(n,e,o,c):vM(n),Oe.a=!1}function yM(n,e,t,i){let s=Qa.getElapsed();Xv(n,e,s);for(let c=ei.length-1;c>=0;c--){let l=ei[c];l.m.rotation.y+=n*2,l.m.position.y=.45+Math.sin(s*3+l.i)*.12,(Math.hypot(l.m.position.x-H.x,l.m.position.z-H.z)<.9||!At&&Te.root.parent===ae&&Math.hypot(l.m.position.x-R.x,l.m.position.z-R.z)<.9)&&(ae.remove(l.m),ei.splice(c,1),e.mapBones.taken.push(l.i),e.bones++,it(ae,"\u{1F9B4}",l.m.position,3,.5),xt("coin"),Math.random()<.5&&dogSound("yip",lt(),.6),mt(),ti("bone"),ei.length||addMilestone(e,"allbones","\u{1F50D}","Luna encontr\xF3 todos los huesos escondidos de un d\xEDa."))}if(wt){wt.cd-=n;let c=wt.m.position.x-R.x,l=wt.m.position.z-R.z,h=Math.hypot(c,l),d=.35+.6*Te.root.scale.x;h<d&&t&&(wt.v.set(c/h,0,l/h).multiplyScalar(7),xt("pop"),wt.cd<=0&&(wt.cd=1,wt.pushes++,it(ae,"\u2B50",wt.m.position,2,.4),wt.pushes%6===0&&(applyFx(e,{felicidad:8,energia:-3}),today(e).play++,addEvent(e,"\u26BD","Jug\xF3 con la pelota en el parque."),ft("\u26BD","+\u{1F496}"),speak("\xA1Qu\xE9 divertido!"),mt())));let u=wt.m.position.clone().addScaledVector(wt.v,n);Ln(u.x,u.z,.35)?wt.v.multiplyScalar(-.6):wt.m.position.copy(u),wt.v.multiplyScalar(Math.exp(-1.6*n));let m=wt.v.length();wt.m.rotation.x+=wt.v.z*n/.35,wt.m.rotation.z-=wt.v.x*n/.35,m<.05&&wt.v.set(0,0,0)}if(Ru-=n,Ru<=0&&(Ru=22+Math.random()*25,!e.asleep)){let c=moodOf(e),l=c==="triste"||c==="enferma";dogSound(l?"sad":"bark",lt(),.45),l||(R.mode="happy",R.modeT=.8)}for(let c of Ya){c.userData.a+=n*.3;let l=c.userData.a;c.position.set(c.userData.cx+Math.cos(l)*c.userData.r,.2+Math.sin(s*3+l)*.04,c.userData.cz+Math.sin(l)*c.userData.r),c.rotation.y=-l}for(let c of Pp)c.position.x+=c.userData.v*n,c.position.x>50&&(c.position.x=-50);if(fe==="park"||fe==="lake"||fe==="forestmenu"||fe==="spot"){let c=fe==="park"?"parque":fe==="lake"?"lago":fe==="spot"?Hn:"bosque",l=ws.find(h=>h.pl.id===c);l&&Math.hypot(l.x-H.x,l.z-H.z)>(c==="perros"?11:7)&&!pt&&(fe==="park"?Ys():fe==="spot"?Ka():fe="town",he("#actions").hidden=!0)}sn=null;let r=needsOf(e);{let c=r.find(h=>h.level!=="info"),l=c&&!e.asleep&&!At&&Te.root.parent===ae&&Math.floor(s/2)%3!==0;$i.visible=!!l,l&&($i.userData.icon!==c.icon&&($i.userData.icon=c.icon,$i.material.map=Ts(c.icon,!0),$i.material.needsUpdate=!0),$i.position.set(R.x+.5,1.9*Te.root.scale.x+.6,R.z))}for(let c of ws){let l=Math.hypot(c.x-H.x,c.z-H.z);l<2.2&&!At&&(sn=c);let h="";if(e.day<(c.pl.minDay||1))h=l<9?"\u{1F512}":"";else{let d=r.find(u=>u.place===c.pl.id&&u.level!=="info");h=d?d.icon:""}h!==c.emoji&&(c.emoji=h,h&&(c.mk.material.map=Ts(h,!0)),c.mk.material.needsUpdate=!0),c.mk.visible=!!h,c.mk.position.y=c.baseY+Math.sin(s*3)*.15}if(Ri=null,!sn&&!At)if(Math.hypot(H.x-mn.chest[0],H.z-mn.chest[1])<1.8)Ri={icon:"\u{1F5DD}\uFE0F\u{1F4E6}",label:"Cofre",run:cM};else{let c=sm(2.6);c&&(Ri={icon:(c.def.mood==="grumpy"?"\u26A0\uFE0F ":c.def.owner&&!c.asked?"\u{1F64B} ":"\u{1F44B} ")+"\u{1F415}",label:c.def.name,warn:c.def.mood==="grumpy",run:()=>jv(c)})}Oe.a&&fe==="town"&&(e.asleep&&Kp()?io("wake"):sn?Ju(sn.pl):Ri&&Ri.run()),fe==="town"&&rv(),zv(s),Zy();let a=ze.innerWidth<ze.innerHeight?1.35:1,o=new D(H.x,9.5*a,H.z+11*a);Mt.position.lerp(o,1-Math.exp(-5*n)),Mt.lookAt(Mt.position.x,.6,Mt.position.z-11*a),Wa.sun.position.set(H.x+8,16,H.z+6),Wa.sun.target.position.set(H.x,0,H.z)}function vM(n){let e=ze.innerWidth<ze.innerHeight?1.5:1;Mt.position.lerp(new D(R.x*.3,6.5*e,8.5*e),1-Math.exp(-4*n)),Mt.lookAt(R.x*.3,.6,-.4)}var qi={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};ze.addEventListener("keydown",n=>{if(n.target.tagName!=="INPUT"){if(!he("#card3").hidden&&["Space","Enter","Escape"].includes(n.code)){n.preventDefault(),$u();return}if(nt&&!nt.over&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),nt.quit();return}if(At&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),Al(!1);return}if(nt&&nt.key&&qi[n.code]){n.preventDefault(),!n.repeat&&!nt.over&&nt.key(qi[n.code]);return}if(Vn&&qi[n.code]){n.preventDefault(),n.repeat||Wp(qi[n.code]);return}qi[n.code]&&(Oe[qi[n.code]]=1,n.preventDefault(),qi[n.code]==="up"&&!n.repeat&&(Oe.jumpPress=!0)),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(n.preventDefault(),n.repeat||(Oe.a=!0,Oe.jumpPress=!0),Oe.aHeld=!0),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="home"&&io("exit"),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="park"&&Ys(),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="room"&&!Vn&&qp(bn),["Escape","KeyX","Backspace"].includes(n.code)&&(fe==="lake"||fe==="forestmenu")&&(fe="town",he("#actions").hidden=!0),["Escape","KeyX","Backspace"].includes(n.code)&&fe==="spot"&&Ka()}});ze.addEventListener("keyup",n=>{qi[n.code]&&(Oe[qi[n.code]]=0),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(Oe.aHeld=!1)});ze.addEventListener("blur",()=>{Oe.up=Oe.down=Oe.left=Oe.right=0});var eo=he("#joy"),fm=he("#knob"),sd=null,zu=null;eo.addEventListener("pointerdown",n=>{sd=n.pointerId,zu={x:n.clientX,y:n.clientY},eo.setPointerCapture(n.pointerId)});eo.addEventListener("pointermove",n=>{if(n.pointerId!==sd)return;let e=n.clientX-zu.x,t=n.clientY-zu.y,i=Math.hypot(e,t),s=50;i>s&&(e*=s/i,t*=s/i),fm.style.transform=`translate(${e}px, ${t}px)`,Oe.jx=e/s,Oe.jz=t/s});var pm=()=>{sd=null,Oe.jx=Oe.jz=0,fm.style.transform=""};eo.addEventListener("pointerup",pm);eo.addEventListener("pointercancel",pm);he("#abtn").addEventListener("pointerdown",n=>{n.preventDefault(),Oe.a=!0,Oe.jumpPress=!0,Oe.aHeld=!0});he("#abtn").addEventListener("pointerup",()=>{Oe.aHeld=!1});he("#abtn").addEventListener("pointercancel",()=>{Oe.aHeld=!1});document.querySelectorAll("[data-arrow]").forEach(n=>n.addEventListener("pointerdown",e=>{e.preventDefault(),Wp(n.dataset.arrow)}));Hu.addEventListener("pointerdown",n=>{zl=!0,nt&&nt.tap&&!nt.over&&he("#card3").hidden&&nt.tap(n)});ze.addEventListener("pointerup",()=>{zl=!1});ze.addEventListener("pointercancel",()=>{zl=!1});var kr=new Ra,Hr=new He;Hu.addEventListener("click",n=>{!Te||nt||At||(Hr.set(n.clientX/ze.innerWidth*2-1,-(n.clientY/ze.innerHeight)*2+1),kr.setFromCamera(Hr,Mt),kr.intersectObject(Te.root,!0).length&&(fe==="home"?io("pet"):fe==="park"?(R.mode="happy",R.modeT=1.2,it(Gt,"\u{1F496}",new D(R.x,1.4,R.z),5),dogSound("happy",lt())):(R.mode="happy",R.modeT=1.2,it(Gt,"\u{1F496}",new D(R.x,1.4,R.z),5),dogSound("bark",lt()))))});document.addEventListener("click",n=>{let e=n.target.closest("button");if(!e)return;if(e.id==="mute"){Ur=!Ur;try{localStorage.setItem("luna.muted",Ur?"1":"0")}catch{}Ur&&"speechSynthesis"in ze&&speechSynthesis.cancel(),Music.refresh(),mt();return}if(e.id==="music"){Music.start(),Music.toggle(),mt();return}if(e.id==="guide"){em(),jp();return}if(e.id==="guideSkip"){Nv();return}if(e.dataset.act==="help"){Ov();return}if(e.id==="diary3"){Iv();return}if(e.dataset.quiz!==void 0){iM(e.dataset.quiz==="1");return}if(e.dataset.card){$u();return}if(e.getAttribute("aria-disabled")==="true"){ft(e.querySelector(".badge")?.textContent||"\u270B"),speak(e.dataset.say);return}let t=e.dataset.act;if(t==="enter"){Oe.a=!0;return}if(t==="quitforest"){Gn&&(Gn.over=!0,he("#forestHud").hidden=!0,Zp());return}if(t==="quitgame"){nt&&nt.quit?nt.quit():At&&Al(!1);return}if(e.dataset.avatar){document.querySelectorAll("[data-avatar]").forEach(i=>i.classList.toggle("sel",i===e));return}if(t&&["stroll","kick","bench","closepark","agility","hide"].includes(t)?av(t):t&&(t.startsWith("sp:")||t==="closespot")?tM(t):t&&fe==="room"?Sv(t):t&&(fe==="lake"||["ducks","drink","splash","closelake","duckfeed"].includes(t))?Ev(t):t&&(t.startsWith("level:")||t==="closeforest")?wv(t):t&&io(t),e.dataset.pick){let i=ze.root.profiles.find(s=>s.id===e.dataset.pick);e.disabled=!0,Cloud.refresh(i).finally(()=>Ll(i))}e.dataset.cloud&&Cloud.openAccount(ze.root.profiles.find(i=>i.id===e.dataset.cloud),Bu),e.dataset.cloudlogin!==void 0&&Cloud.openLogin(Bu),e.dataset.coat&&document.querySelectorAll("[data-coat]").forEach(i=>i.classList.toggle("sel",i===e))});he("#new-form").addEventListener("submit",n=>{n.preventDefault();let e=he("#new-name").value.trim().slice(0,16);if(!e){he("#new-name").focus(),speak("Escribe tu nombre");return}let t=document.querySelector("[data-coat].sel")?.dataset.coat||"dorado",i=document.querySelector("[data-avatar].sel")?.dataset.avatar||"\u{1F9D2}",s={id:uid(),name:e,avatar:i,createdAt:Date.now(),pet:newPet(t)};ze.root.profiles.push(s),saveRoot(),Ll(s)});ze.addEventListener("pointerdown",()=>Music.start());ze.addEventListener("keydown",()=>Music.start());ze.addEventListener("pagehide",()=>{Ue&&saveRoot()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue&&saveRoot()});qy();nv();lv();dv();pv();bv();sM();im();aM();Mt.position.set(-16,10,2);Mt.lookAt(-16,.6,-9);function Bu(){let n=ze.root.profiles;he("#pick-list").innerHTML=n.map(e=>`<div class="slot-row"><button class="slot" data-pick="${e.id}">${Ji(e.avatar)} ${Ji(e.name)} <span>${Dl[stageOf(dayAt(e.pet,now(e.pet))).id]} \u25B6</span></button><button class="slot-cloud${Cloud.linked(e)?" on":""}" data-cloud="${e.id}" aria-label="${Cloud.linked(e)?"En la nube":"Guardar en la nube"}: ${Ji(e.name)}">\u2601\uFE0F</button></div>`).join(""),he("#avatars3").innerHTML=Vy.map((e,t)=>`<button type="button" class="avatar ${t===0?"sel":""}" data-avatar="${e}" aria-label="Tu cara ${t+1}">${e}</button>`).join(""),he("#coats").innerHTML=Object.entries(COATS).map(([e,t],i)=>`<button type="button" class="coat ${i===0?"sel":""}" data-coat="${e}" style="background:${t.fur}" aria-label="${t.name}"></button>`).join(""),he("#voice-slot").innerHTML=voiceSettingsHTML(),he("#picker").hidden=!1,he("#hud").hidden=!0,Te||(Te=Rl({coat:"dorado",day:10,acc:{worn:"lazo"}}),ae.add(Te.root))}var Iu=ze.root.activeId&&ze.root.profiles.find(n=>n.id===ze.root.activeId);Iu?Cloud.refresh(Iu).finally(()=>Ll(Iu)):Bu();(function n(){Ue||(Te&&(Te.root.position.set(-16,0,-9),Rs(Te,1/60,{mode:"happy"}),Mt.position.set(-16,3,-3.5),Mt.lookAt(-16,1,-9)),requestAnimationFrame(n))})();Object.assign(ze,{renderer:Ci,town:ae,home:bt,luna:R,kidS:H,act:io,startGame:Ll,input:Oe,dbg3:{buildAgility3:om,buildDucks3:cm,buildMemory3:hm,startHide3:nm,memFlip3:id,closeCard3:$u,digTreasure3:tm,get mini(){return nt},get hide3(){return At},get treasure3(){return In},get where(){return fe},guideGo3:jp,idleNudge3:Qp,treeList:Wu,get autoWalk(){return Ot},get goal3(){return tt},setIdle:n=>{Ol=n}},step3d:(n,e)=>{dm(n),Ip(n),e&&Ci.render(Gt,Mt)}});})();
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
