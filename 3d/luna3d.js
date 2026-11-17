/* Luna 3D: incluye three.js r187 (MIT, (c) three.js authors). Fuente: 3d/src/main3d.js */
(()=>{var Wo="187";var pd=0,ql=1,md=2;var Ss=1,gd=2,lr=3,ts=0,xn=1,In=2,bs=0,hr=1,$l=2,Yl=3,Zl=4,xd=5;var Es=100,_d=101,yd=102,vd=103,Md=104,Sd=200,bd=201,Ed=202,Td=203,Jl=204,Kl=205,wd=206,Ad=207,Rd=208,Cd=209,Id=210,Pd=211,Ld=212,Dd=213,Nd=214,ho=0,uo=1,fo=2,er=3,po=4,mo=5,go=6,xo=7,jl=0,Ud=1,Fd=2,ui=0,Ql=1,eh=2,th=3,nh=4,ih=5,sh=6,rh=7;var ah=300,Ts=301,ur=302,Xo=303,qo=304,_o=1e3,oi=1001,yo=1002,Bt=1003,Od=1004;var ha=1005;var fn=1006,$o=1007;var Ii=1008;var vn=1009,oh=1010,ch=1011,dr=1012,Yo=1013,jn=1014,Wn=1015,Qn=1016,Zo=1017,Jo=1018,ws=1020,lh=35902,hh=35899,uh=1021,dh=1022,Pn=1023,Ai=1026,Pi=1027,Ko=1028,jo=1029,ns=1030,Qo=1031;var ec=1033,ua=33776,da=33777,fa=33778,pa=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,ac=37492,oc=37496,cc=37488,lc=37489,ma=37490,hc=37491,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,_c=37815,yc=37816,vc=37817,Mc=37818,Sc=37819,bc=37820,Ec=37821,Tc=36492,wc=36494,Ac=36495,Rc=36283,Cc=36284,ga=36285,Ic=36286;var Or=2300,vo=2301,co=2302,Bl=2303,zl=2400,kl=2401,Hl=2402;var Bd=3200;var Pc=0,zd=1,Li="",un="srgb",Br="srgb-linear",zr="linear",ut="srgb";var lo=7680;var kd=519,Hd=512,Gd=513,Vd=514,fh=515,Wd=516,Xd=517,ph=518,mh=519,gh=35044;var xh="300 es",Hn=2e3,tr=2001;function Hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qd(){let n=kr("canvas");return n.style.display="block",n}var Bu={},nr=null;function Hr(...n){let e="THREE."+n.shift();nr?nr("log",e,...n):console.log(e,...n)}function $d(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=$d(n);let e="THREE."+n.shift();if(nr)nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=$d(n);let e="THREE."+n.shift();if(nr)nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fr(...n){let e=n.join(" ");e in Bu||(Bu[e]=!0,Ge(...n))}function Yd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Zd={[ho]:ho,[fo]:go,[po]:po,[er]:mo,[uo]:uo,[go]:fo,[xo]:xo,[mo]:er},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ml=Math.PI/180,Mo=180/Math.PI;function As(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Vp(n,e){return(n%e+e)%e}function gl(n,e,t){return(1-t)*n+t*e}function Jd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kd(n,e){if(e.constructor===Float32Array)return n;let t=Lc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function jd(n,e){if(e.constructor===Float32Array)return n;let t=Lc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Sh=class Sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sh.prototype.isVector2=!0;var Ve=Sh,Vn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(u!==S||c!==d||l!==f||h!==_){let m=c*d+l*f+h*_+u*S;m<0&&(d=-d,f=-f,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){let g=Math.acos(m),E=Math.sin(g);p=Math.sin(p*g)/E,o=Math.sin(o*g)/E,c=c*p+d*o,l=l*p+f*o,h=h*p+_*o,u=u*p+S*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+_*o,u=u*p+S*o;let g=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=g,l*=g,h*=g,u*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*f-l*d,e[t+1]=c*_+h*d+l*u-o*f,e[t+2]=l*_+h*f+o*d-c*u,e[t+3]=h*_-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},bh=class bh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bh.prototype.isVector3=!0;var N=bh,xl=new N,zu=new Vn,Eh=class Eh{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],S=s[0],m=s[3],p=s[6],g=s[1],E=s[4],M=s[7],y=s[2],w=s[5],x=s[8];return r[0]=a*S+o*g+c*y,r[3]=a*m+o*E+c*w,r[6]=a*p+o*M+c*x,r[1]=l*S+h*g+u*y,r[4]=l*m+h*E+u*w,r[7]=l*p+h*M+u*x,r[2]=d*S+f*g+_*y,r[5]=d*m+f*E+_*w,r[8]=d*p+f*M+_*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,_=t*u+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return e[0]=u*S,e[1]=(s*l-h*i)*S,e[2]=(o*i-s*a)*S,e[3]=d*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_l.makeScale(e,t)),this}rotate(e){return Fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return Fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;var qe=Eh,_l=new qe,ku=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:e,whitePoint:i,transfer:zr,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:ku,fromXYZ:Hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var at=Wp();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Us,So=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=kr("canvas")),Us.width=e.width,Us.height=e.height;let s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xp=0,ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yl(s[a].image)):r.push(yl(s[a]))}else r=yl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?So.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var qp=0,vl=new N,pn=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=fn,a=Ii,o=Pn,c=vn,l=n.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=As(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ah;pn.DEFAULT_ANISOTROPY=1;var Th=class Th{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,M=(f+1)/2,y=(p+1)/2,w=(h+d)/4,x=(u+S)/4,T=(_+m)/4;return E>M&&E>y?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=x/i):M>y?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=T/s):y<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),i=x/r,s=T/r),this.set(i,s,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(u-S)/g,this.z=(d-h)/g,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Th.prototype.isVector4=!0;var At=Th,bo=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends bo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gr=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vo=class Vo{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,_,S,m)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,_,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,S=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+_*l,t[5]=d-S*l,t[9]=-o*c,t[2]=S-d*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,_=l*h,S=l*u;t[0]=d+S*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,_=l*h,S=l*u;t[0]=d-S*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=S-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,S=o*u;t[0]=c*h,t[4]=_*l-f,t[8]=d*l+S,t[1]=c*u,t[5]=S*l+d,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=S-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+_,t[10]=d-S*u}else if(e.order==="XZY"){let d=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+S,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=S*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Yp)}lookAt(e,t,i){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ki.crossVectors(i,bn),ki.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ki.crossVectors(i,bn)),ki.normalize(),Ba.crossVectors(bn,ki),s[0]=ki.x,s[4]=Ba.x,s[8]=bn.x,s[1]=ki.y,s[5]=Ba.y,s[9]=bn.y,s[2]=ki.z,s[6]=Ba.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],S=i[6],m=i[10],p=i[14],g=i[3],E=i[7],M=i[11],y=i[15],w=s[0],x=s[4],T=s[8],L=s[12],R=s[1],F=s[5],z=s[9],W=s[13],I=s[2],q=s[6],Z=s[10],X=s[14],re=s[3],Y=s[7],ne=s[11],ie=s[15];return r[0]=a*w+o*R+c*I+l*re,r[4]=a*x+o*F+c*q+l*Y,r[8]=a*T+o*z+c*Z+l*ne,r[12]=a*L+o*W+c*X+l*ie,r[1]=h*w+u*R+d*I+f*re,r[5]=h*x+u*F+d*q+f*Y,r[9]=h*T+u*z+d*Z+f*ne,r[13]=h*L+u*W+d*X+f*ie,r[2]=_*w+S*R+m*I+p*re,r[6]=_*x+S*F+m*q+p*Y,r[10]=_*T+S*z+m*Z+p*ne,r[14]=_*L+S*W+m*X+p*ie,r[3]=g*w+E*R+M*I+y*re,r[7]=g*x+E*F+M*q+y*Y,r[11]=g*T+E*z+M*Z+y*ne,r[15]=g*L+E*W+M*X+y*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],S=e[7],m=e[11],p=e[15],g=c*f-l*d,E=o*f-l*u,M=o*d-c*u,y=a*f-l*h,w=a*d-c*h,x=a*u-o*h;return t*(S*g-m*E+p*M)-i*(_*g-m*y+p*w)+s*(_*E-S*y+p*x)-r*(_*M-S*w+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],S=e[13],m=e[14],p=e[15],g=t*o-i*a,E=t*c-s*a,M=t*l-r*a,y=i*c-s*o,w=i*l-r*o,x=s*l-r*c,T=h*S-u*_,L=h*m-d*_,R=h*p-f*_,F=u*m-d*S,z=u*p-f*S,W=d*p-f*m,I=g*W-E*z+M*F+y*R-w*L+x*T;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(o*W-c*z+l*F)*q,e[1]=(s*z-i*W-r*F)*q,e[2]=(S*x-m*w+p*y)*q,e[3]=(d*w-u*x-f*y)*q,e[4]=(c*R-a*W-l*L)*q,e[5]=(t*W-s*R+r*L)*q,e[6]=(m*M-_*x-p*E)*q,e[7]=(h*x-d*M+f*E)*q,e[8]=(a*z-o*R+l*T)*q,e[9]=(i*R-t*z-r*T)*q,e[10]=(_*w-S*M+p*g)*q,e[11]=(u*M-h*w-f*g)*q,e[12]=(o*L-a*F-c*T)*q,e[13]=(t*F-i*L+s*T)*q,e[14]=(S*E-_*y-m*g)*q,e[15]=(h*y-u*E+d*g)*q,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,_=r*u,S=a*h,m=a*u,p=o*u,g=c*l,E=c*h,M=c*u,y=i.x,w=i.y,x=i.z;return s[0]=(1-(S+p))*y,s[1]=(f+M)*y,s[2]=(_-E)*y,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+p))*w,s[6]=(m+g)*w,s[7]=0,s[8]=(_+E)*x,s[9]=(m-g)*x,s[10]=(1-(d+S))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),c=Fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Yn.copy(this);let l=1/a,h=1/o,u=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Hn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),_,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===Hn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===tr)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Hn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),_,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===Hn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===tr)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vo.prototype.isMatrix4=!0;var lt=Vo,Fs=new N,Yn=new lt,$p=new N(0,0,0),Yp=new N(1,1,1),ki=new N,Ba=new N,bn=new N,Gu=new lt,Vu=new Vn,Xi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zp=0,Wu=new N,Os=new Vn,vi=new lt,za=new N,Ar=new N,Jp=new N,Kp=new Vn,Xu=new N(1,0,0),qu=new N(0,1,0),$u=new N(0,0,1),Yu={type:"added"},jp={type:"removed"},Bs={type:"childadded",child:null},Ml={type:"childremoved",child:null},Vt=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new Xi,i=new Vn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?za.copy(e):za.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ar,za,this.up):vi.lookAt(za,Ar,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(vi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Vt.DEFAULT_UP=new N(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,i),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Vp(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Sl(a,r,e+1/3),this.g=Sl(a,r,e),this.b=Sl(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return at.workingToColorSpace(an.copy(this),e),Math.round(ot(an.r*255,0,255))*65536+Math.round(ot(an.g*255,0,255))*256+Math.round(ot(an.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(an.copy(this),t);let i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=un){at.workingToColorSpace(an.copy(this),e);let t=an.r,i=an.g,s=an.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(ka);let i=gl(Hi.h,ka.h,t),s=gl(Hi.s,ka.s,t),r=gl(Hi.l,ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Xe;Xe.NAMES=Qd;var qi=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wn=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new N,Mi=new N,bl=new N,Si=new N,zs=new N,ks=new N,Zu=new N,El=new N,Tl=new N,wl=new N,Al=new At,Rl=new At,Cl=new At,Ti=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),Mi.subVectors(i,t),bl.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Mi),c=Zn.dot(bl),l=Mi.dot(Mi),h=Mi.dot(bl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(o,Si.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Al.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Al,r.x),a.addScaledVector(Rl,r.y),a.addScaledVector(Cl,r.z),a}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),Mi.subVectors(e,t),Zn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Zn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,i),ks.subVectors(r,i),El.subVectors(e,i);let c=zs.dot(El),l=ks.dot(El);if(c<=0&&l<=0)return t.copy(i);Tl.subVectors(e,s);let h=zs.dot(Tl),u=ks.dot(Tl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(i).addScaledVector(zs,a);wl.subVectors(e,r);let f=zs.dot(wl),_=ks.dot(wl);if(_>=0&&f<=_)return t.copy(r);let S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(ks,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Zu.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(Zu,o);let p=1/(m+S+d);return a=S*p,o=d*p,t.copy(i).addScaledVector(zs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},li=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Ga.subVectors(this.max,Rr),Hs.subVectors(e.a,Rr),Gs.subVectors(e.b,Rr),Vs.subVectors(e.c,Rr),Gi.subVectors(Gs,Hs),Vi.subVectors(Vs,Gs),ms.subVectors(Hs,Vs);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ms.z,ms.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ms.z,0,-ms.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ms.y,ms.x,0];return!Il(t,Hs,Gs,Vs,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Hs,Gs,Vs,Ga))?!1:(Va.crossVectors(Gi,Vi),t=[Va.x,Va.y,Va.z],Il(t,Hs,Gs,Vs,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new N,new N,new N,new N,new N,new N,new N,new N],Jn=new N,Ha=new li,Hs=new N,Gs=new N,Vs=new N,Gi=new N,Vi=new N,ms=new N,Rr=new N,Ga=new N,Va=new N,gs=new N;function Il(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gs.fromArray(n,r);let o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=i.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ot=new N,Wa=new Ve,em=0,Gn=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?Lc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jd(e,this.array)}};var Vr=class extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Wr=class extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},tm=new li,Cr=new N,Pl=new N,$i=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Pl)),this.expandByPoint(Cr.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nm=0,kn=new lt,Ll=new Vt,Ws=new N,En=new li,Ir=new li,Kt=new N,mn=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?Wr:Vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(En.min,Ir.min),En.expandByPoint(Kt),Kt.addVectors(En.max,Ir.max),En.expandByPoint(Kt)):(En.expandByPoint(Ir.min),En.expandByPoint(Ir.max))}En.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(Ws.fromBufferAttribute(e,l),Kt.add(Ws)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new N,c[L]=new N;let h=new N,u=new N,d=new N,f=new Ve,_=new Ve,S=new Ve,m=new N,p=new N;function g(L,R,F){l[L]=l[R]=l[F]=1,h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,F),f.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),S.fromBufferAttribute(r,F),u.sub(h),d.sub(h),_.sub(f),S.sub(f);let z=1/(_.x*S.y-S.x*_.y);isFinite(z)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(d,-_.y).multiplyScalar(z),p.copy(d).multiplyScalar(_.x).addScaledVector(u,-S.x).multiplyScalar(z),o[L].add(m),o[R].add(m),o[F].add(m),c[L].add(p),c[R].add(p),c[F].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,R=E.length;L<R;++L){let F=E[L],z=F.start,W=F.count;for(let I=z,q=z+W;I<q;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new N,y=new N,w=new N,x=new N;function T(L){w.fromBufferAttribute(s,L),x.copy(w);let R=o[L];M.copy(R),M.sub(w.multiplyScalar(w.dot(R))).normalize(),y.crossVectors(x,R);let z=y.dot(c[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,z)}for(let L=0,R=i.count;L<R;++L)l[L]&&T(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Gn(d,h,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},To=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ju(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ju(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Ju(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=As()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var hn=new N,Xr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Lc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jd(e,this.data.array)}},Dl=new N,im=new N,sm=new qe,Kn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Dl.subVectors(i,t).cross(im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sm.getNormalMatrix(e),s=this.coplanarPoint(Dl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rm=0,Ri=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=As(),this.name="",this.type="Material",this.blending=hr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Kl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Kn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ar=class extends Ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,Pr=new N,qs=new N,$s=new N,Ys=new Ve,Lr=new Ve,ef=new lt,Xa=new N,Dr=new N,qa=new N,Ku=new Ve,Nl=new Ve,ju=new Ve,qr=class extends Vt{constructor(e=new ar){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new mn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new To(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new Xr(i,3,0,!1)),Xs.setAttribute("uv",new Xr(i,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new Ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),ef.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-$s.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;$a(Xa.set(-.5,-.5,0),$s,a,qs,s,r),$a(Dr.set(.5,-.5,0),$s,a,qs,s,r),$a(qa.set(.5,.5,0),$s,a,qs,s,r),Ku.set(0,0),Nl.set(1,0),ju.set(1,1);let o=e.ray.intersectTriangle(Xa,Dr,qa,!1,Pr);if(o===null&&($a(Dr.set(-.5,.5,0),$s,a,qs,s,r),Nl.set(0,1),o=e.ray.intersectTriangle(Xa,qa,Dr,!1,Pr),o===null))return;let c=e.ray.origin.distanceTo(Pr);c<e.near||c>e.far||t.push({distance:c,point:Pr.clone(),uv:Ti.getInterpolation(Pr,Xa,Dr,qa,Ku,Nl,ju,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function $a(n,e,t,i,s,r){Ys.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Lr.x=r*Ys.x-s*Ys.y,Lr.y=s*Ys.x+r*Ys.y):Lr.copy(Ys),n.copy(e),n.x+=Lr.x,n.y+=Lr.y,n.applyMatrix4(ef)}var Ei=new N,Ul=new N,Ya=new N,Za=new N,$r=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Ul);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Za.dot(this.direction),c=-Za.dot(Ya),l=Za.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let S=1/h;u*=S,d*=S,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ul).addScaledVector(Ya,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=i.x-a.x,g=i.y-a.y,E=i.z-a.z,M=Math.abs(c),y=Math.abs(l),w=Math.abs(h),x,T,L,R,F,z,W,I,q,Z,X,re;if(M>=y&&M>=w?(L=c,z=u,q=_,re=p,c>=0?(x=l,T=h,R=d,F=f,W=S,I=m,Z=g,X=E):(x=h,T=l,R=f,F=d,W=m,I=S,Z=E,X=g)):y>=w?(L=l,z=d,q=S,re=g,l>=0?(x=h,T=c,R=f,F=u,W=m,I=_,Z=E,X=p):(x=c,T=h,R=u,F=f,W=_,I=m,Z=p,X=E)):(L=h,z=f,q=m,re=E,h>=0?(x=c,T=l,R=u,F=d,W=_,I=S,Z=p,X=g):(x=l,T=c,R=d,F=u,W=S,I=_,Z=g,X=p)),L===0)return null;let Y=x/L,ne=T/L,ie=1/L,Ie=R-Y*z,Ye=F-ne*z,j=W-Y*q,ve=I-ne*q,Ae=Z-Y*re,Be=X-ne*re,Me=Ae*ve-Be*j,Je=Ie*Be-Ye*Ae,Ut=j*Ye-ve*Ie;if(s){if(Me<0||Je<0||Ut<0)return null}else if((Me<0||Je<0||Ut<0)&&(Me>0||Je>0||Ut>0))return null;let ke=Me+Je+Ut;if(ke===0)return null;let ft=ie*(Me*z+Je*q+Ut*re);return(ke>0?ft<0:ft>0)?null:this.at(ft/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qu=new lt,xs=new $r,Ja=new $i,ed=new N,Ka=new N,ja=new N,Qa=new N,Fl=new N,eo=new N,td=new N,to=new N,bt=class extends Vt{constructor(e=new mn,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Fl.fromBufferAttribute(u,e),a?eo.addScaledVector(Fl,h):eo.addScaledVector(Fl.sub(t),h))}t.add(eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(Ja.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Ja,ed)===null||xs.origin.distanceToSquared(ed)>(e.far-e.near)**2))&&(Qu.copy(r).invert(),xs.copy(e.ray).applyMatrix4(Qu),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){let m=d[_],p=a[m.materialIndex],g=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=g,y=E;M<y;M+=3){let w=o.getX(M),x=o.getX(M+1),T=o.getX(M+2);s=no(this,p,e,i,l,h,u,w,x,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){let g=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=no(this,a,e,i,l,h,u,g,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){let m=d[_],p=a[m.materialIndex],g=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=g,y=E;M<y;M+=3){let w=M,x=M+1,T=M+2;s=no(this,p,e,i,l,h,u,w,x,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){let g=m,E=m+1,M=m+2;s=no(this,a,e,i,l,h,u,g,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function am(n,e,t,i,s,r,a,o){let c;if(e.side===xn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ts,o),c===null)return null;to.copy(o),to.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(to);return l<t.near||l>t.far?null:{distance:l,point:to.clone(),object:n}}function no(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Ka),n.getVertexPosition(c,ja),n.getVertexPosition(l,Qa);let h=am(n,e,t,i,Ka,ja,Qa,td);if(h){let u=new N;Ti.getBarycoord(td,Ka,ja,Qa,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,o,c,l,u,new Ve)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,c,l,u,new Ve)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};Ti.getNormal(Ka,ja,Qa,d.normal),h.face=d,h.barycoord=u}return h}var ys=class extends pn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Bt,h=Bt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends Gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new lt,nd=new lt,io=[],id=new li,om=new lt,Nr=new bt,Ur=new $i,Yi=class extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,om)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),id.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),Ur.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),nd.multiplyMatrices(i,Zs),Nr.matrixWorld=nd,Nr.raycast(e,io);for(let a=0,o=io.length;a<o;a++){let c=io[a];c.instanceId=r,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ys(new Float32Array(s*this.count),s,this.count,Ko,Wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new $i,cm=new Ve(.5,.5),so=new N,Zi=class{constructor(e=new Kn,t=new Kn,i=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],S=r[9],m=r[10],p=r[11],g=r[12],E=r[13],M=r[14],y=r[15];if(s[0].setComponents(l-a,f-h,p-_,y-g).normalize(),s[1].setComponents(l+a,f+h,p+_,y+g).normalize(),s[2].setComponents(l+o,f+u,p+S,y+E).normalize(),s[3].setComponents(l-o,f-u,p-S,y-E).normalize(),i)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,p-m,y-M).normalize();else if(s[4].setComponents(l-c,f-d,p-m,y-M).normalize(),t===Hn)s[5].setComponents(l+c,f+d,p+m,y+M).normalize();else if(t===tr)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=cm.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sd=new lt,wo=class n{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];sd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Zi),i[s].setFromProjectionMatrix(sd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Zi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Zr=class extends pn{constructor(e=[],t=Ts,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jr=class extends pn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends pn{constructor(e,t,i=jn,s,r,a,o=Bt,c=Bt,l,h=Ai,u=1){if(h!==Ai&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Kr=class extends Ci{constructor(e,t=jn,i=Ts,s,r,a=Bt,o=Bt,c,l=Ai){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},jr=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ji=class n extends mn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function _(S,m,p,g,E,M,y,w,x,T,L){let R=M/x,F=y/T,z=M/2,W=y/2,I=w/2,q=x+1,Z=T+1,X=0,re=0,Y=new N;for(let ne=0;ne<Z;ne++){let ie=ne*F-W;for(let Ie=0;Ie<q;Ie++){let Ye=Ie*R-z;Y[S]=Ye*g,Y[m]=ie*E,Y[p]=I,l.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[p]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Ie/x),u.push(1-ne/T),X+=1}}for(let ne=0;ne<T;ne++)for(let ie=0;ie<x;ie++){let Ie=d+ie+q*ne,Ye=d+ie+q*(ne+1),j=d+(ie+1)+q*(ne+1),ve=d+(ie+1)+q*ne;c.push(Ie,Ye,ve),c.push(Ye,j,ve),re+=6}o.addGroup(f,re,L),f+=re,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Qr=class n extends mn{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,_=i*2+r,S=s+1,m=new N,p=new N;for(let g=0;g<=_;g++){let E=0,M=0,y=0,w=0;if(g<=i){let L=g/i,R=L*Math.PI/2;M=-h-e*Math.cos(R),y=e*Math.sin(R),w=-e*Math.cos(R),E=L*u}else if(g<=i+r){let L=(g-i)/r;M=-h+L*t,y=e,w=0,E=u+L*d}else{let L=(g-i-r)/i,R=L*Math.PI/2;M=h+e*Math.sin(R),y=e*Math.cos(R),w=e*Math.sin(R),E=u+d+L*u}let x=Math.max(0,Math.min(1,E/f)),T=0;g===0?T=.5/s:g===_&&(T=-.5/s);for(let L=0;L<=s;L++){let R=L/s,F=R*Math.PI*2,z=Math.sin(F),W=Math.cos(F);p.x=-y*W,p.y=M,p.z=y*z,o.push(p.x,p.y,p.z),m.set(-y*W,w,y*z),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+T,x)}if(g>0){let L=(g-1)*S;for(let R=0;R<s;R++){let F=L+R,z=L+R+1,W=g*S+R,I=g*S+R+1;a.push(F,z,W),a.push(z,I,W)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},vs=class n extends mn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new N,h=new Ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},or=class n extends mn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,S=[],m=i/2,p=0;g(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function g(){let M=new N,y=new N,w=0,x=(t-e)/i;for(let T=0;T<=r;T++){let L=[],R=T/r,F=R*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,I=W*c+o,q=Math.sin(I),Z=Math.cos(I);y.x=F*q,y.y=-R*i+m,y.z=F*Z,u.push(y.x,y.y,y.z),M.set(q,x,Z).normalize(),d.push(M.x,M.y,M.z),f.push(W,1-R),L.push(_++)}S.push(L)}for(let T=0;T<s;T++)for(let L=0;L<r;L++){let R=S[L][T],F=S[L+1][T],z=S[L+1][T+1],W=S[L][T+1];(e>0||L!==0)&&(h.push(R,F,W),w+=3),(t>0||L!==r-1)&&(h.push(F,z,W),w+=3)}l.addGroup(p,w,0),p+=w}function E(M){let y=_,w=new Ve,x=new N,T=0,L=M===!0?e:t,R=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),_++;let F=_;for(let z=0;z<=s;z++){let I=z/s*c+o,q=Math.cos(I),Z=Math.sin(I);x.x=L*Z,x.y=m*R,x.z=L*q,u.push(x.x,x.y,x.z),d.push(0,R,0),w.x=q*.5+.5,w.y=Z*.5*R+.5,f.push(w.x,w.y),_++}for(let z=0;z<s;z++){let W=y+z,I=F+z;M===!0?h.push(I,I+1,W):h.push(I+1,I,W),T+=3}l.addGroup(p,T,M===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ea=class n extends or{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class n extends mn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let E=new N,M=new N,y=new N;for(let w=0;w<t.length;w+=3)f(t[w+0],E),f(t[w+1],M),f(t[w+2],y),c(E,M,y,g)}function c(g,E,M,y){let w=y+1,x=[];for(let T=0;T<=w;T++){x[T]=[];let L=g.clone().lerp(M,T/w),R=E.clone().lerp(M,T/w),F=w-T;for(let z=0;z<=F;z++)z===0&&T===w?x[T][z]=L:x[T][z]=L.clone().lerp(R,z/F)}for(let T=0;T<w;T++)for(let L=0;L<2*(w-T)-1;L++){let R=Math.floor(L/2);L%2===0?(d(x[T][R+1]),d(x[T+1][R]),d(x[T][R])):(d(x[T][R+1]),d(x[T+1][R+1]),d(x[T+1][R]))}}function l(g){let E=new N;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(g),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let g=new N;for(let E=0;E<r.length;E+=3){g.x=r[E+0],g.y=r[E+1],g.z=r[E+2];let M=m(g)/2/Math.PI+.5,y=p(g)/Math.PI+.5;a.push(M,1-y)}_(),u()}function u(){for(let g=0;g<a.length;g+=6){let E=a[g+0],M=a[g+2],y=a[g+4],w=Math.max(E,M,y),x=Math.min(E,M,y);w>.9&&x<.1&&(E<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),y<.2&&(a[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function f(g,E){let M=g*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function _(){let g=new N,E=new N,M=new N,y=new N,w=new Ve,x=new Ve,T=new Ve;for(let L=0,R=0;L<r.length;L+=9,R+=6){g.set(r[L+0],r[L+1],r[L+2]),E.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),w.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),T.set(a[R+4],a[R+5]),y.copy(g).add(E).add(M).divideScalar(3);let F=m(y);S(w,R+0,g,F),S(x,R+2,E,F),S(T,R+4,M,F)}}function S(g,E,M,y){y<0&&g.x===1&&(a[E]=g.x-1),M.x===0&&M.z===0&&(a[E]=y/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},ta=class n extends Ao{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Rn=class n extends mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],_=[],S=[],m=[];for(let p=0;p<h;p++){let g=p*d-a;for(let E=0;E<l;E++){let M=E*u-r;_.push(M,-g,0),S.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<o;g++){let E=g+l*p,M=g+l*(p+1),y=g+1+l*(p+1),w=g+1+l*p;f.push(E,M,w),f.push(M,y,w)}this.setIndex(f),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(S,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ms=class n extends mn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new N,d=new N,f=[],_=[],S=[],m=[];for(let p=0;p<=i;p++){let g=[],E=p/i,M=a+E*o,y=e*Math.cos(M),w=Math.sqrt(e*e-y*y),x=0;p===0&&a===0?x=.5/t:p===i&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let L=T/t,R=s+L*r;u.x=-w*Math.cos(R),u.y=y,u.z=w*Math.sin(R),_.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(L+x,1-E),g.push(l++)}h.push(g)}for(let p=0;p<i;p++)for(let g=0;g<t;g++){let E=h[p][g+1],M=h[p][g],y=h[p+1][g],w=h[p+1][g+1];(p!==0||a>0)&&f.push(E,M,w),(p!==i-1||c<Math.PI)&&f.push(M,y,w)}this.setIndex(f),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(S,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gn=class n extends mn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new N,f=new N,_=new N;for(let S=0;S<=i;S++){let m=a+S/i*o;for(let p=0;p<=s;p++){let g=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),_.subVectors(f,d).normalize(),h.push(_.x,_.y,_.z),u.push(p/s),u.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=s;m++){let p=(s+1)*S+m-1,g=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,M=(s+1)*S+m;c.push(p,g,M),c.push(g,E,M)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(rd(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(rd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Rs(n[t]);for(let s in i)e[s]=i[s]}return e}function rd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _h(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var tf={clone:Rs,merge:on},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ki=class extends Ri{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Co=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Io=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Js(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ro(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=e,o=2*t-i;break;case Hl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,c=2*i-t;break;case Hl:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(s-t),S=_*_,m=S*_,p=-d*m+2*d*S-d*_,g=(1+d)*m+(-1.5-2*d)*S+(-.5+d)*_+1,E=(-1-f)*m+(1.5+f)*S+.5*_,M=f*m-f*S;for(let y=0;y!==o;++y)r[y]=p*a[h+y]+g*a[l+y]+E*a[c+y]+M*a[u+y];return r}},Lo=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Do=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},No=class extends ji{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let _=(i-t)/(s-t),S=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*_;return r}let d=o*2,f=e-1;for(let _=0;_!==o;++_){let S=a[l+_],m=a[c+_],p=f*d+_*2,g=u[p],E=u[p+1],M=e*d+_*2,y=h[M],w=h[M+1],x=fm(i,t,g,y,s);r[_]=nf(x,S,E,w,m)}return r}};function nf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function dm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function fm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=nf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=dm(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Cn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ro(e.settings)&&(i.settings={inTangents:Js(e.settings.inTangents,Array),outTangents:Js(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new No(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break;case Bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ro(this.settings)&&(ad(this.settings.inTangents,e),ad(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ro(this.settings)&&(od(this.settings.inTangents,e),od(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Gp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===co,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let S=t[u+_];if(S!==t[d+_]||S!==t[f+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ro(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ad(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function od(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=vo;var Qi=class extends Cn{constructor(e,t,i){super(e,t,i)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Or;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Uo.prototype.ValueTypeName="color";var Fo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Fo.prototype.ValueTypeName="number";var Oo=class extends ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},na=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Cn{constructor(e,t,i){super(e,t,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Or;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Cn{constructor(e,t,i,s){super(e,t,i,s)}};Bo.prototype.ValueTypeName="vector";var zo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sf=new zo,ko=class{constructor(e){this.manager=e!==void 0?e:sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var ia=class extends Vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sa=class extends ia{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ol=new lt,cd=new N,ld=new N,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ol,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ao=new N,oo=new Vn,ai=new N,ra=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ao,oo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ao,oo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new N,hd=new Ve,ud=new Ve,dn=class extends ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,hd,ud),t.subVectors(ud,hd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ml*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var aa=class extends ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gl=class extends Ho{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ks=-90,js=1,cr=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Ks,js,e,t);s.layers=this.layers,this.add(s);let r=new dn(Ks,js,e,t);r.layers=this.layers,this.add(r);let a=new dn(Ks,js,e,t);a.layers=this.layers,this.add(a);let o=new dn(Ks,js,e,t);o.layers=this.layers,this.add(o);let c=new dn(Ks,js,e,t);c.layers=this.layers,this.add(c);let l=new dn(Ks,js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Go=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ca=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=pm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function pm(){this._document.hidden===!1&&this.reset()}var yh="\\[\\]\\.:\\/",mm=new RegExp("["+yh+"]","g"),vh="[^"+yh+"]",gm="[^"+yh.replace("\\.","")+"]",xm=/((?:WC+[\/:])*)/.source.replace("WC",vh),_m=/(WCOD+)?/.source.replace("WCOD",gm),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),Mm=new RegExp("^"+xm+_m+ym+vm+"$"),Sm=["material","materials","bones","map"],Vl=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(e){let t=Mm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Sm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Vl;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var dd=new lt,la=class{constructor(e,t,i=0,s=1/0){this.ray=new $r(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dd),this}intersectObject(e,t=!0,i=[]){return Wl(e,this,i,t),i.sort(fd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wl(e[s],this,i,t);return i.sort(fd),i}};function fd(n,e){return n.distance-e.distance}function Wl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Wl(r[a],e,t,!0)}}var wh=class wh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};wh.prototype.isMatrix2=!0;var Xl=wh;function Mh(n,e,t,i){let s=bm(i);switch(t){case uh:return n*e;case Ko:return n*e/s.components*s.byteLength;case jo:return n*e/s.components*s.byteLength;case ns:return n*e*2/s.components*s.byteLength;case Qo:return n*e*2/s.components*s.byteLength;case dh:return n*e*3/s.components*s.byteLength;case Pn:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case ac:case cc:case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:case ma:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tc:case wc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ga:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bm(n){switch(n){case vn:case oh:return{byteLength:1,components:1};case dr:case ch:case Qn:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case jn:case Yo:case Wn:return{byteLength:4,components:1};case lh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function wf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Em(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],S=u[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,u[d]=S)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let S=u[f];n.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
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
#endif`,S0=`uniform sampler2D dfgLUT;
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
}`,b0=`
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B0=`#if defined( USE_MORPHCOLORS )
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
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform float backgroundBlurriness;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define TOON
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
}`,Kg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Tm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Im,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Nm,begin_vertex:Um,beginnormal_vertex:Fm,bsdfs:Om,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:km,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:$m,common:Ym,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Km,emissivemap_fragment:jm,emissivemap_pars_fragment:Qm,colorspace_fragment:e0,colorspace_pars_fragment:t0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:a0,fog_vertex:o0,fog_pars_vertex:c0,fog_fragment:l0,fog_pars_fragment:h0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:d0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:x0,lights_toon_pars_fragment:_0,lights_phong_fragment:y0,lights_phong_pars_fragment:v0,lights_physical_fragment:M0,lights_physical_pars_fragment:S0,lights_fragment_begin:b0,lights_fragment_maps:E0,lights_fragment_end:T0,lightprobes_pars_fragment:w0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:I0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:N0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:F0,morphinstance_vertex:O0,morphcolor_vertex:B0,morphnormal_vertex:z0,morphtarget_pars_vertex:k0,morphtarget_vertex:H0,normal_fragment_begin:G0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:K0,opaque_fragment:j0,packing:Q0,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:cg,shadowmask_pars_fragment:lg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:yg,uv_pars_fragment:vg,uv_pars_vertex:Mg,uv_vertex:Sg,worldpos_vertex:bg,background_vert:Eg,background_frag:Tg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Rg,cube_frag:Cg,depth_vert:Ig,depth_frag:Pg,distance_vert:Lg,distance_frag:Dg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Fg,linedashed_frag:Og,meshbasic_vert:Bg,meshbasic_frag:zg,meshlambert_vert:kg,meshlambert_frag:Hg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:$g,meshphysical_vert:Yg,meshphysical_frag:Zg,meshtoon_vert:Jg,meshtoon_frag:Kg,points_vert:jg,points_frag:Qg,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},ye={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fi={basic:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:on([ye.common,ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:on([ye.lights,ye.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};fi.physical={uniforms:on([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Dc={r:0,b:0,g:0},sx=new lt,Af=new qe;Af.set(-1,0,0,0,1,0,0,0,1);function rx(n,e,t,i,s,r){let a=new Xe(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(g){let E=g.isScene===!0?g.background:null;if(E&&E.isTexture){let M=g.backgroundBlurriness>0;E=e.get(E,M)}return E}function _(g){let E=!1,M=f(g);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(g,E){let M=f(E);M&&M.isCubeTexture?(l===void 0&&(l=new bt(new Ji(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Rs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Af),l.material.toneMapped=at.getTransfer(M.colorSpace)!==ut,(h!==M||u!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new bt(new Rn(2,2),new hi({name:"BackgroundMaterial",uniforms:Rs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,E){g.getRGB(Dc,_h(n)),t.buffers.color.setClear(Dc.r,Dc.g,Dc.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,E=1){a.set(g),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:S,dispose:p}}function ax(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(F,z,W,I,q){let Z=!1,X=u(F,I,W,z);r!==X&&(r=X,l(r.object)),Z=f(F,I,W,q),Z&&_(F,I,W,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(F,z,W,I),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function u(F,z,W,I){let q=I.wireframe===!0,Z=i[z.id];Z===void 0&&(Z={},i[z.id]=Z);let X=F.isInstancedMesh===!0?F.id:0,re=Z[X];re===void 0&&(re={},Z[X]=re);let Y=re[W.id];Y===void 0&&(Y={},re[W.id]=Y);let ne=Y[q];return ne===void 0&&(ne=d(c()),Y[q]=ne),ne}function d(F){let z=[],W=[],I=[];for(let q=0;q<t;q++)z[q]=0,W[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:I,object:F,attributes:{},index:null}}function f(F,z,W,I){let q=r.attributes,Z=z.attributes,X=0,re=W.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=q[Y],Ie=Z[Y];if(Ie===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),ie===void 0||ie.attribute!==Ie||Ie&&ie.data!==Ie.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function _(F,z,W,I){let q={},Z=z.attributes,X=0,re=W.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=Z[Y];ie===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));let Ie={};Ie.attribute=ie,ie&&ie.data&&(Ie.data=ie.data),q[Y]=Ie,X++}r.attributes=q,r.attributesNum=X,r.index=I}function S(){let F=r.newAttributes;for(let z=0,W=F.length;z<W;z++)F[z]=0}function m(F){p(F,0)}function p(F,z){let W=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;W[F]=1,I[F]===0&&(n.enableVertexAttribArray(F),I[F]=1),q[F]!==z&&(n.vertexAttribDivisor(F,z),q[F]=z)}function g(){let F=r.newAttributes,z=r.enabledAttributes;for(let W=0,I=z.length;W<I;W++)z[W]!==F[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function E(F,z,W,I,q,Z,X){X===!0?n.vertexAttribIPointer(F,z,W,q,Z):n.vertexAttribPointer(F,z,W,I,q,Z)}function M(F,z,W,I){S();let q=I.attributes,Z=W.getAttributes(),X=z.defaultAttributeValues;for(let re in Z){let Y=Z[re];if(Y.location>=0){let ne=q[re];if(ne===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){let ie=ne.normalized,Ie=ne.itemSize,Ye=e.get(ne);if(Ye===void 0)continue;let j=Ye.buffer,ve=Ye.type,Ae=Ye.bytesPerElement,Be=ve===n.INT||ve===n.UNSIGNED_INT||ne.gpuType===Yo;if(ne.isInterleavedBufferAttribute){let Me=ne.data,Je=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Ut=ne.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let ke=0;ke<Y.locationSize;ke++)p(Y.location+ke,Me.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ke=0;ke<Y.locationSize;ke++)m(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ke=0;ke<Y.locationSize;ke++)E(Y.location+ke,Ie/Y.locationSize,ve,ie,Je*Ae,(Ut+Ie/Y.locationSize*ke)*Ae,Be)}else{if(ne.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me,ne.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Me=0;Me<Y.locationSize;Me++)E(Y.location+Me,Ie/Y.locationSize,ve,ie,Ie*Ae,Ie/Y.locationSize*Me*Ae,Be)}}else if(X!==void 0){let ie=X[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}g()}function y(){L();for(let F in i){let z=i[F];for(let W in z){let I=z[W];for(let q in I){let Z=I[q];for(let X in Z)h(Z[X].object),delete Z[X];delete I[q]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let z=i[F.id];for(let W in z){let I=z[W];for(let q in I){let Z=I[q];for(let X in Z)h(Z[X].object),delete Z[X];delete I[q]}}delete i[F.id]}function x(F){for(let z in i){let W=i[z];for(let I in W){let q=W[I];if(q[F.id]===void 0)continue;let Z=q[F.id];for(let X in Z)h(Z[X].object),delete Z[X];delete q[F.id]}}}function T(F){for(let z in i){let W=i[z],I=F.isInstancedMesh===!0?F.id:0,q=W[I];if(q!==void 0){for(let Z in q){let X=q[Z];for(let re in X)h(X[re].object),delete X[re];delete q[Z]}delete W[I],Object.keys(W).length===0&&delete i[z]}}}function L(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function ox(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Pn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let T=x===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==vn&&x!==Wn&&!T&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ge("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:M,maxSamples:y,samples:w}}function lx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Kn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let g=r?0:i,E=g*4,M=p.clippingState||null;c.value=M,M=h(_,d,E,f);for(let y=0;y!==E;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){let S=u!==null?u.length:0,m=null;if(S!==0){if(m=c.value,_!==!0||m===null){let p=f+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==S;++E,M+=4)a.copy(u[E]).applyMatrix4(g,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var ya=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:bs});r.uniforms.tEquirect.value=t;let a=new bt(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=fn),new cr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},rf=256,hx=3,ux=20,Rf=256,Cf=16,dx=3,fx=new N,px=new Xe,Uc=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cr(1,10,null),this._boxMesh=new bt(new Ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=fx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(px));let m=new cr(i,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=_,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(rf,Jd(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===ur?this._setSize(e.image.length===0?rf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=af(e,!1,!1),i=Math.log2(e)-hx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=af(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=of()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mx(),this._integrationMaterial=gx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Cf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-dx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Rf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function af(n,e,t){return new ya(n,{minFilter:Ii,generateMipmaps:e,type:Qn,colorSpace:Br,depthBuffer:t})}function va(n,e,t){return new hi({name:n,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:xn,blending:bs,depthTest:!1,depthWrite:!1})}function mx(){return va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rf}u

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
	`)}function gx(){return va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Cf}},`

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
	`)}function xx(){return va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ux}
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
	`)}function of(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function cf(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _x(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Xo||f===qo)if(e.has(d)){let _=e.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let S=new ya(_.height);return S.fromEquirectangularTexture(n,d),e.set(d,S),d.addEventListener("dispose",l),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,_=f===Xo||f===qo,S=f===Ts||f===ur;if(_||S){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Uc(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let g=d.image;return _&&g&&g.height>0||S&&g&&c(g)?(i===null&&(i=new Uc(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Xo?d.mapping=Ts:f===qo&&(d.mapping=ur),d}function c(d){let f=0,_=6;for(let S=0;S<_;S++)d[S]!==void 0&&f++;return f===_}function l(d){let f=d.target;f.removeEventListener("dispose",l);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function yx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Fr("WebGLRenderer: "+i+" extension not supported."),s}}}function vx(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(e.remove(S),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(_){let S=_.attributes;for(let m in S)e.update(S[m],n.ARRAY_BUFFER)}function u(_){let S=_.index,m=_.attributes.position,p=0;if(m===void 0)return;let g=S!==null?S.array.length:m.array.length/3-1,E=m.count>=65535?Wr:Vr,M=new E(Math.ceil(g/3)*6,1),y=M.array;if(S!==null){let x=S.array;p=S.version;for(let T=0,L=0;T<g;T+=3){let R=x[T+0],F=x[T+1],z=x[T+2];y[L++]=R,y[L++]=F,y[L++]=F,y[L++]=z,y[L++]=z,y[L++]=R}}else{p=m.version;for(let x=0,T=0;x<g;x+=3){let L=x+0,R=x+1,F=x+2;y[T++]=L,y[T++]=R,y[T++]=R,y[T++]=F,y[T++]=F,y[T++]=L}}M.version=p;let w=r.get(_);w&&e.remove(w),r.set(_,M)}function d(_){let S=r.get(_);if(S){let m=_.index;m!==null&&S.version<m.version&&u(_)}else u(_);return r.get(_)}function f(){for(let _ in s){let S=s[_].deref();S!==void 0&&c(S)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function Mx(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let S=0;for(let m=0;m<f;m++)S+=d[m];t.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Sx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function bx(n,e,t){let i=new WeakMap,s=new At;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),S===!0&&(E=3);let M=o.attributes.position.count*E,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*y*4*u),x=new Gr(w,M,y,u);x.type=Wn,x.needsUpdate=!0;let T=E*4;for(let R=0;R<u;R++){let F=m[R],z=p[R],W=g[R],I=M*y*4*R;for(let q=0;q<F.count;q++){let Z=q*T;f===!0&&(s.fromBufferAttribute(F,q),w[I+Z+0]=s.x,w[I+Z+1]=s.y,w[I+Z+2]=s.z,w[I+Z+3]=0),_===!0&&(s.fromBufferAttribute(z,q),w[I+Z+4]=s.x,w[I+Z+5]=s.y,w[I+Z+6]=s.z,w[I+Z+7]=0),S===!0&&(s.fromBufferAttribute(W,q),w[I+Z+8]=s.x,w[I+Z+9]=s.y,w[I+Z+10]=s.z,w[I+Z+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Ve(M,y)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ex(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Tx={[Ql]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function wx(n,e,t,i,s,r){let a=new Tn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new mn;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bt(h,u),f=new aa(-1,1,1,-1,0,1),_=null,S=null,m=!1,p,g=null,E=[],M=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),c!==null&&c.setSize(y,w);for(let x=0;x<E.length;x++){let T=E[x];T.setSize&&T.setSize(y,w)}},this.setEffects=function(y){E=y,M=E.length>0&&E[0].isRenderPass===!0;let w=a.width,x=a.height;E.length>0&&o===null&&(o=new Tn(w,x,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new Tn(w,x,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&E.some(L=>L.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&l===null&&(l=new Ci(w,x),r===!0&&(l.format=Pi,l.type=ws)),a.dispose(),a.depthTexture=T?l:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let L=0;L<E.length;L++){let R=E[L];R.setSize&&R.setSize(w,x),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(y,w){if(m||y.toneMapping===ui&&E.length===0)return!1;if(g=w,w!==null){let x=w.width,T=w.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return M===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=ui,!0},this.hasRenderPass=function(){return M},this.end=function(y,w){y.toneMapping=p,m=!0;let x=a,T=o;for(let L=0;L<E.length;L++){let R=E[L];R.enabled!==!1&&(R.render(y,T,x,w),R.needsSwap!==!1&&(x=T,T=T===o?c:o))}if(_!==y.outputColorSpace||S!==y.toneMapping){_=y.outputColorSpace,S=y.toneMapping,u.defines={},at.getTransfer(_)===ut&&(u.defines.SRGB_TRANSFER="");let L=Tx[S];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,y.setRenderTarget(g),y.render(d,f),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var If=new pn,Pf=new Ci(1,1),Lf=new Kr(1),Df=new Gr,Nf=new Eo,Uf=new Zr,lf=[],hf=[],uf=new Float32Array(16),df=new Float32Array(9),ff=new Float32Array(4);function pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oc(n,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function Px(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;ff.set(i),n.uniformMatrix2fv(this.addr,!1,ff),Xt(t,i)}}function Lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),Xt(t,i)}}function Dx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),Xt(t,i)}}function Nx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function Bx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function Bc(n){return n.version===0&&(n.compareFunction=mh,n.needsUpdate=!0),n}function Gx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Bc(Pf):r=If,t.setTexture2D(e||r,s)}function Vx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nf,s)}function Wx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Bc(Lf):r=Uf,t.setTextureCube(e||r,s)}function Xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Df,s)}function qx(n){switch(n){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Ix;case 35674:return Px;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return kx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function $x(n,e){n.uniform1fv(this.addr,e)}function Yx(n,e){let t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zx(n,e){let t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function Jx(n,e){let t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Kx(n,e){let t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jx(n,e){let t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){let t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function s_(n,e){n.uniform1uiv(this.addr,e)}function r_(n,e){n.uniform2uiv(this.addr,e)}function a_(n,e){n.uniform3uiv(this.addr,e)}function o_(n,e){n.uniform4uiv(this.addr,e)}function c_(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Bc(Pf):a=If;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function l_(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nf,r[a])}function h_(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Bc(Lf):a=Uf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function u_(n,e,t){let i=this.cache,s=e.length,r=Oc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Df,r[a])}function d_(n){switch(n){case 5126:return $x;case 35664:return Yx;case 35665:return Zx;case 35666:return Jx;case 35674:return Kx;case 35675:return jx;case 35676:return Qx;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var Ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qx(t.type)}},Ih=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function pf(n,e){n.seq.push(e),n.map[e.id]=e}function f_(n,e,t){let i=n.name,s=i.length;for(Ah.lastIndex=0;;){let r=Ah.exec(i),a=Ah.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){pf(t,l===void 0?new Ch(o,n,e):new Ih(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ph(o),pf(t,u)),t=u}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);f_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function mf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var p_=37297,m_=0;function g_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var gf=new qe;function x_(n){at._getMatrix(gf,at.workingColorSpace,n);let e=`mat3( ${gf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case zr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g_(n.getShaderSource(e),o)}else return r}function __(n,e){let t=x_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var y_={[Ql]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[nh]:"ACESFilmic",[sh]:"AgX",[rh]:"Neutral",[ih]:"Custom"};function v_(n,e){let t=y_[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new N;function M_(){at.getLuminanceCoefficients(Nc);let n=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function b_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _a(n){return n!==""}function _f(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(n){return n.replace(T_,w_)}function w_(n,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lh(t)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(n){return n.replace(A_,R_)}function R_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var C_={[Ss]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function I_(n){return C_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[ur]:"ENVMAP_MODE_REFRACTION"};function L_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":P_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D_={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function N_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":D_[n.combine]||"ENVMAP_BLENDING_NONE"}function U_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=I_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=L_(t),u=N_(t),d=S_(t),f=b_(r),_=s.createProgram(),S,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(S=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ui?v_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),a=Lh(a),a=_f(a,t),a=yf(a,t),o=Lh(o),o=_f(o,t),o=yf(o,t),a=vf(a),o=vf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=p+S+a,E=p+m+o,M=mf(s,s.VERTEX_SHADER,g),y=mf(s,s.FRAGMENT_SHADER,E);s.attachShader(_,M),s.attachShader(_,y),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(y)||"",I=F.trim(),q=z.trim(),Z=W.trim(),X=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,y);else{let Y=xf(s,M,"vertex"),ne=xf(s,y,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Y+`
`+ne)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):(q===""||Z==="")&&(re=!1);re&&(R.diagnostics={runnable:X,programLog:I,vertexShader:{log:q,prefix:S},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(M),s.deleteShader(y),x=new fr(s,_),T=E_(s,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,p_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=y,this}var F_=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nh(e),t.set(e,i)),i}},Nh=class{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}};function O_(n){return n===ns||n===ma||n===ga}function B_(n,e,t,i,s,r){let a=new sr,o=new Dh,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,L,R,F,z){let W=R.fog,I=F.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||q,Z),re=d[x.type],Y=i.precision;x.precision!==null&&(Y=i.getMaxPrecision(x.precision),Y!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));let ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=ne!==void 0?ne.length:0,Ie=0;I.morphAttributes.position!==void 0&&(Ie=1),I.morphAttributes.normal!==void 0&&(Ie=2),I.morphAttributes.color!==void 0&&(Ie=3);let Ye,j,ve,Ae;if(re){let _e=fi[re];Ye=_e.vertexShader,j=_e.fragmentShader}else{Ye=x.vertexShader,j=x.fragmentShader;let _e=o.getVertexShaderStage(x),pt=o.getFragmentShaderStage(x);o.update(x,_e,pt),ve=_e.id,Ae=pt.id}let Be=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Je=F.isInstancedMesh===!0,Ut=F.isBatchedMesh===!0,ke=!!x.map,ft=!!x.matcap,xt=!!X,it=xt&&X.isPMREMTexture===!0,Qt=!!x.aoMap,Ht=!!x.lightMap,yn=!!x.bumpMap&&x.wireframe===!1,Ct=!!x.normalMap,ri=!!x.displacementMap,Yt=!!x.emissiveMap,Fn=!!x.metalnessMap,On=!!x.roughnessMap,Bn=x.anisotropy>0,O=x.clearcoat>0,zn=x.diffuseRoughness>0,Tt=x.dispersion>0,wt=x.retroreflectivity>0,xe=x.iridescence>0,Gt=x.sheen>0,ze=x.transmission>0,$e=Bn&&!!x.anisotropyMap,A=O&&!!x.clearcoatMap,v=O&&!!x.clearcoatNormalMap,H=O&&!!x.clearcoatRoughnessMap,se=zn&&!!x.diffuseRoughnessMap,ee=xe&&!!x.iridescenceMap,le=xe&&!!x.iridescenceThicknessMap,pe=Gt&&!!x.sheenColorMap,J=Gt&&!!x.sheenRoughnessMap,K=!!x.specularMap,ue=!!x.specularColorMap,C=!!x.specularIntensityMap,Q=ze&&!!x.transmissionMap,$=ze&&!!x.thicknessMap,de=!!x.gradientMap,ce=!!x.alphaMap,he=x.alphaTest>0,Le=!!x.alphaHash,je=!!x.extensions,ae=ui;x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ae=n.toneMapping);let De=it?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ke={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:j,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:Ut,batchingColor:Ut&&F._colorsTexture!==null,instancing:Je,instancingColor:Je&&F.instanceColor!==null,instancingMorph:Je&&F.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:ft,envMap:xt,envMapMode:xt&&X.mapping,envMapPMREM:it,envMapMaxLod:it?De.length-1:null,envMapSize:it?De[0].width:null,aoMap:Qt,lightMap:Ht,bumpMap:yn,normalMap:Ct,displacementMap:ri,emissiveMap:Yt,normalMapObjectSpace:Ct&&x.normalMapType===zd,normalMapTangentSpace:Ct&&x.normalMapType===Pc,packedNormalMap:Ct&&x.normalMapType===Pc&&O_(x.normalMap.format),metalnessMap:Fn,roughnessMap:On,anisotropy:Bn,anisotropyMap:$e,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:H,diffuseRoughness:zn,diffuseRoughnessMap:se,dispersion:Tt,retroreflection:wt,iridescence:xe,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:Gt,sheenColorMap:pe,sheenRoughnessMap:J,specularMap:K,specularColorMap:ue,specularIntensityMap:C,transmission:ze,transmissionMap:Q,thicknessMap:$,gradientMap:de,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:he,alphaHash:Le,combine:x.combine,mapUv:ke&&f(x.map.channel),aoMapUv:Qt&&f(x.aoMap.channel),lightMapUv:Ht&&f(x.lightMap.channel),bumpMapUv:yn&&f(x.bumpMap.channel),normalMapUv:Ct&&f(x.normalMap.channel),displacementMapUv:ri&&f(x.displacementMap.channel),emissiveMapUv:Yt&&f(x.emissiveMap.channel),metalnessMapUv:Fn&&f(x.metalnessMap.channel),roughnessMapUv:On&&f(x.roughnessMap.channel),anisotropyMapUv:$e&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(x.sheenRoughnessMap.channel),specularMapUv:K&&f(x.specularMap.channel),specularColorMapUv:ue&&f(x.specularColorMap.channel),specularIntensityMapUv:C&&f(x.specularIntensityMap.channel),transmissionMapUv:Q&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:ce&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ct||Bn),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(ke||ce),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ie,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:Yt&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||Ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function S(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(T,x),p(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function p(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function g(x){let T=d[x.type],L;if(T){let R=fi[T];L=tf.clone(R.uniforms)}else L=x.uniforms;return L}function E(x,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new U_(n,T,x,s),l.push(L),h.set(T,L)),L}function M(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:g,acquireProgram:E,releaseProgram:M,releaseShaderCache:y,programs:l,dispose:w}}function z_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function k_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,_,S,m,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:_,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=_,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=m,g.group=p),e++,g}function c(d,f,_,S,m,p,g){g.reversedDepth===!0&&(m=-m);let E=o(d,f,_,S,m,p);_.transmission>0?i.push(E):_.transparent===!0?s.push(E):t.push(E)}function l(d,f,_,S,m,p){let g=o(d,f,_,S,m,p);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):t.unshift(g)}function h(d,f){t.length>1&&t.sort(d||k_),i.length>1&&i.sort(f||Sf),s.length>1&&s.sort(f||Sf)}function u(){for(let d=e,f=n.length;d<f;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function H_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new bf,n.set(i,[a])):s>=r.length?(a=new bf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function G_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Xe};break;case"SpotLight":t={position:new N,direction:new N,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function V_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var W_=0;function X_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function q_(n){let e=new G_,t=V_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new lt,a=new lt;function o(l){let h=0,u=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,_=0,S=0,m=0,p=0,g=0,E=0,M=0,y=0,w=0,x=0,T=0,L=0,R=0;l.sort(X_);for(let z=0,W=l.length;z<W;z++){let I=l[z],q=I.color,Z=I.intensity,X=I.distance,re=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ns?re=I.shadow.map.texture:re=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*Z,u+=q.g*Z,d+=q.b*Z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],Z);R++}else if(I.isSunLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[_]=ie,i.sunShadowMap[_]=re;let Ie=ne.getViewportCount();for(let Ye=0;Ye<Ie;Ye++)i.sunShadowMatrix[S+Ye]=ne.getMatrix(Ye),i.sunShadowCascade[S+Ye]=ne._cascadeData[Ye];S+=Ie,_++}i.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=I.shadow.matrix,y++}i.directional[m]=Y,m++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(q).multiplyScalar(Z),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[g]=Y;let ne=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,ne.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[g]=ne.matrix,I.castShadow){let ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,i.spotShadow[g]=ie,i.spotShadowMap[g]=re,x++}g++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(q).multiplyScalar(Z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=Y,E++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let ne=I.shadow,ie=t.get(I);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=re,i.pointShadowMatrix[p]=I.shadow.matrix,w++}i.point[p]=Y,p++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(Z),Y.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[M]=Y,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==g||F.rectAreaLength!==E||F.hemiLength!==M||F.numSunShadows!==_||F.numDirectionalShadows!==y||F.numPointShadows!==w||F.numSpotShadows!==x||F.numSpotMaps!==T||F.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=g,i.rectArea.length=E,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=g,F.rectAreaLength=E,F.hemiLength=M,F.numSunShadows=_,F.numDirectionalShadows=y,F.numPointShadows=w,F.numSpotShadows=x,F.numSpotMaps=T,F.numLightProbes=R,i.version=W_++)}function c(l,h){let u=0,d=0,f=0,_=0,S=0,m=0,p=h.matrixWorldInverse;for(let g=0,E=l.length;g<E;g++){let M=l[g];if(M.isSunLight){let y=i.sun[u];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(M.isSpotLight){let y=i.spot[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),_++}else if(M.isRectAreaLight){let y=i.rectArea[S];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Ef(n){let e=new q_(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function $_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ef(n),e.set(s,[o])):r>=a.length?(o=new Ef(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`,J_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],K_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Tf=new lt,xa=new N,Rh=new N;function j_(n,e,t){let i=new Zi,s=new Ve,r=new Ve,a=new At,o=new Co,c=new Io,l={},h=t.maxTextureSize,u={[ts]:xn,[xn]:ts,[In]:In},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Y_,fragmentShader:Z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new mn;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new bt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(w,x,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===gd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let L=n.getRenderTarget(),R=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(bs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=p!==this.type;W&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=w.length;I<q;I++){let Z=w[I],X=Z.shadow;if(X===void 0){Ge("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let re=X.getFrameExtents();s.multiply(re),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,X.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||W===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===lr){if(Z.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Tn(s.x,s.y,{format:ns,type:Qn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new Ci(s.x,s.y,Wn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=Ai,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Bt,X.map.depthTexture.magFilter=Bt}else Z.isPointLight?(X.map=new ya(s.x),X.map.depthTexture=new Kr(s.x,jn)):(X.map=new Tn(s.x,s.y),X.map.depthTexture=new Ci(s.x,s.y,jn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=Ai,this.type===Ss?(X.map.depthTexture.compareFunction=Y?ph:fh,X.map.depthTexture.minFilter=fn,X.map.depthTexture.magFilter=fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Bt,X.map.depthTexture.magFilter=Bt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ne=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,T);let ie=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:T.layers;for(let Ie=0;Ie<ne;Ie++){let Ye=X.getCamera(Ie);if(Z.isPointLight){let j=X.camera,ve=X.matrix,Ae=Z.distance||j.far;Ae!==j.far&&(j.far=Ae,j.updateProjectionMatrix()),xa.setFromMatrixPosition(Z.matrixWorld),j.position.copy(xa),Rh.copy(j.position),Rh.add(J_[Ie]),j.up.copy(K_[Ie]),j.lookAt(Rh),j.updateMatrixWorld(),ve.makeTranslation(-xa.x,-xa.y,-xa.z),Tf.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Tf,j.coordinateSystem,j.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(X.map),n.clear());let j=X.getViewport(Ie);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),z.viewport(a)}i=X.getFrustum(Ie),M(x,T,Ye,Z,ie,this.type)}X.isPointLightShadow!==!0&&this.type===lr&&g(X,T),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,R,F)};function g(w,x){let T=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Tn(s.x,s.y,{format:ns,type:Qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,T,d,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,T,f,S,null)}function E(w,x,T,L){let R=null,F=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)R=F;else if(R=T.isPointLight===!0?c:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=R.uuid,W=x.uuid,I=l[z];I===void 0&&(I={},l[z]=I);let q=I[W];q===void 0&&(q=R.clone(),I[W]=q,x.addEventListener("dispose",y)),R=q}if(R.visible=x.visible,R.wireframe=x.wireframe,L===lr?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=n.properties.get(R);z.light=T}return R}function M(w,x,T,L,R,F){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===lr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let I=e.update(w),q=w.material;if(Array.isArray(q)){let Z=I.groups;for(let X=0,re=Z.length;X<re;X++){let Y=Z[X],ne=q[Y.materialIndex];if(ne&&ne.visible){let ie=E(w,ne,L,F);w.onBeforeShadow(n,w,x,T,I,ie,Y),n.renderBufferDirect(T,null,I,ie,w,Y),w.onAfterShadow(n,w,x,T,I,ie,Y)}}}else if(q.visible){let Z=E(w,q,L,F);w.onBeforeShadow(n,w,x,T,I,Z,null),n.renderBufferDirect(T,null,I,Z,w,null),w.onAfterShadow(n,w,x,T,I,Z,null)}}let W=w.children;for(let I=0,q=W.length;I<q;I++)M(W[I],x,T,L,R,F)}function y(w){w.target.removeEventListener("dispose",y);for(let T in l){let L=l[T],R=w.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function Q_(n,e){function t(){let C=!1,Q=new At,$=null,de=new At(0,0,0,0);return{setMask:function(ce){$!==ce&&!C&&(n.colorMask(ce,ce,ce,ce),$=ce)},setLocked:function(ce){C=ce},setClear:function(ce,he,Le,je,ae){ae===!0&&(ce*=je,he*=je,Le*=je),Q.set(ce,he,Le,je),de.equals(Q)===!1&&(n.clearColor(ce,he,Le,je),de.copy(Q))},reset:function(){C=!1,$=null,de.set(-1,0,0,0)}}}function i(){let C=!1,Q=!1,$=null,de=null,ce=null;return{setReversed:function(he){if(Q!==he){let Le=e.get("EXT_clip_control");he?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Q=he;let je=ce;ce=null,this.setClear(je)}},getReversed:function(){return Q},setTest:function(he){he?Me(n.DEPTH_TEST):Je(n.DEPTH_TEST)},setMask:function(he){$!==he&&!C&&(n.depthMask(he),$=he)},setFunc:function(he){if(Q&&(he=Zd[he]),de!==he){switch(he){case ho:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=he}},setLocked:function(he){C=he},setClear:function(he){ce!==he&&(ce=he,Q&&(he=1-he),n.clearDepth(he))},reset:function(){C=!1,$=null,de=null,ce=null,Q=!1}}}function s(){let C=!1,Q=null,$=null,de=null,ce=null,he=null,Le=null,je=null,ae=null;return{setTest:function(De){C||(De?Me(n.STENCIL_TEST):Je(n.STENCIL_TEST))},setMask:function(De){Q!==De&&!C&&(n.stencilMask(De),Q=De)},setFunc:function(De,Ke,_e){($!==De||de!==Ke||ce!==_e)&&(n.stencilFunc(De,Ke,_e),$=De,de=Ke,ce=_e)},setOp:function(De,Ke,_e){(he!==De||Le!==Ke||je!==_e)&&(n.stencilOp(De,Ke,_e),he=De,Le=Ke,je=_e)},setLocked:function(De){C=De},setClear:function(De){ae!==De&&(n.clearStencil(De),ae=De)},reset:function(){C=!1,Q=null,$=null,de=null,ce=null,he=null,Le=null,je=null,ae=null}}}let r=new t,a=new i,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,_=[],S=null,m=!1,p=null,g=null,E=null,M=null,y=null,w=null,x=null,T=new Xe(0,0,0),L=0,R=!1,F=null,z=null,W=null,I=null,q=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,re=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=re>=2);let ne=null,ie={},Ie=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),j=new At().fromArray(Ie),ve=new At().fromArray(Ye);function Ae(C,Q,$,de){let ce=new Uint8Array(4),he=n.createTexture();n.bindTexture(C,he),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<$;Le++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(Q+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return he}let Be={};Be[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),a.setFunc(er),yn(!1),Ct(ql),Me(n.CULL_FACE),Qt(bs);function Me(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function Je(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function Ut(C,Q){return d[C]!==Q?(n.bindFramebuffer(C,Q),d[C]=Q,C===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Q),C===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ke(C,Q){let $=_,de=!1;if(C){$=f.get(Q),$===void 0&&($=[],f.set(Q,$));let ce=C.textures;if($.length!==ce.length||$[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Le=ce.length;he<Le;he++)$[he]=n.COLOR_ATTACHMENT0+he;$.length=ce.length,de=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,de=!0);de&&n.drawBuffers($)}function ft(C){return S!==C?(n.useProgram(C),S=C,!0):!1}let xt={[Es]:n.FUNC_ADD,[_d]:n.FUNC_SUBTRACT,[yd]:n.FUNC_REVERSE_SUBTRACT};xt[vd]=n.MIN,xt[Md]=n.MAX;let it={[Sd]:n.ZERO,[bd]:n.ONE,[Ed]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[Id]:n.SRC_ALPHA_SATURATE,[Rd]:n.DST_COLOR,[wd]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[Kl]:n.ONE_MINUS_SRC_ALPHA,[Cd]:n.ONE_MINUS_DST_COLOR,[Ad]:n.ONE_MINUS_DST_ALPHA,[Pd]:n.CONSTANT_COLOR,[Ld]:n.ONE_MINUS_CONSTANT_COLOR,[Dd]:n.CONSTANT_ALPHA,[Nd]:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(C,Q,$,de,ce,he,Le,je,ae,De){if(C===bs){m===!0&&(Je(n.BLEND),m=!1);return}if(m===!1&&(Me(n.BLEND),m=!0),C!==xd){if(C!==p||De!==R){if((g!==Es||y!==Es)&&(n.blendEquation(n.FUNC_ADD),g=Es,y=Es),De)switch(C){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFunc(n.ONE,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",C);break}else switch(C){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $l:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yl:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",C);break}E=null,M=null,w=null,x=null,T.set(0,0,0),L=0,p=C,R=De}return}ce=ce||Q,he=he||$,Le=Le||de,(Q!==g||ce!==y)&&(n.blendEquationSeparate(xt[Q],xt[ce]),g=Q,y=ce),($!==E||de!==M||he!==w||Le!==x)&&(n.blendFuncSeparate(it[$],it[de],it[he],it[Le]),E=$,M=de,w=he,x=Le),(je.equals(T)===!1||ae!==L)&&(n.blendColor(je.r,je.g,je.b,ae),T.copy(je),L=ae),p=C,R=!1}function Ht(C,Q){C.side===In?Je(n.CULL_FACE):Me(n.CULL_FACE);let $=C.side===xn;Q&&($=!$),yn($),C.blending===hr&&C.transparent===!1?Qt(bs):Qt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let de=C.stencilWrite;o.setTest(de),de&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Yt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Je(n.SAMPLE_ALPHA_TO_COVERAGE)}function yn(C){F!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),F=C)}function Ct(C){C!==pd?(Me(n.CULL_FACE),C!==z&&(C===ql?n.cullFace(n.BACK):C===md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Je(n.CULL_FACE),z=C}function ri(C){C!==W&&(X&&n.lineWidth(C),W=C)}function Yt(C,Q,$){C?(Me(n.POLYGON_OFFSET_FILL),(I!==Q||q!==$)&&(I=Q,q=$,a.getReversed()&&(Q=-Q,$=-$),n.polygonOffset(Q,$))):Je(n.POLYGON_OFFSET_FILL)}function Fn(C){C?Me(n.SCISSOR_TEST):Je(n.SCISSOR_TEST)}function On(C){C===void 0&&(C=n.TEXTURE0+Z-1),ne!==C&&(n.activeTexture(C),ne=C)}function Bn(C,Q,$){$===void 0&&(ne===null?$=n.TEXTURE0+Z-1:$=ne);let de=ie[$];de===void 0&&(de={type:void 0,texture:void 0},ie[$]=de),(de.type!==C||de.texture!==Q)&&(ne!==$&&(n.activeTexture($),ne=$),n.bindTexture(C,Q||Be[C]),de.type=C,de.texture=Q)}function O(){let C=ie[ne];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function zn(){try{n.compressedTexImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function Tt(){try{n.compressedTexImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function wt(){try{n.texSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function xe(){try{n.texSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function Gt(){try{n.compressedTexSubImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function $e(){try{n.texStorage2D(...arguments)}catch(C){He("WebGLState:",C)}}function A(){try{n.texStorage3D(...arguments)}catch(C){He("WebGLState:",C)}}function v(){try{n.texImage2D(...arguments)}catch(C){He("WebGLState:",C)}}function H(){try{n.texImage3D(...arguments)}catch(C){He("WebGLState:",C)}}function se(C){return u[C]!==void 0?u[C]:n.getParameter(C)}function ee(C,Q){u[C]!==Q&&(n.pixelStorei(C,Q),u[C]=Q)}function le(C){j.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function pe(C){ve.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function J(C,Q){let $=l.get(Q);$===void 0&&($=new WeakMap,l.set(Q,$));let de=$.get(C);de===void 0&&(de=n.getUniformBlockIndex(Q,C.name),n.uniformBlockBinding(Q,de,de),$.set(C,de))}function K(C,Q,$){let ce=l.get(Q).get(C);c[ce]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,ce,$),c[ce]=$)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,ie={},d={},c={},f=new WeakMap,_=[],S=null,m=!1,p=null,g=null,E=null,M=null,y=null,w=null,x=null,T=new Xe(0,0,0),L=0,R=!1,F=null,z=null,W=null,I=null,q=null,j.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Me,disable:Je,bindFramebuffer:Ut,drawBuffers:ke,useProgram:ft,setBlending:Qt,setMaterial:Ht,setFlipSided:yn,setCullFace:Ct,setLineWidth:ri,setPolygonOffset:Yt,setScissorTest:Fn,activeTexture:On,bindTexture:Bn,unbindTexture:O,compressedTexImage2D:zn,compressedTexImage3D:Tt,texImage2D:v,texImage3D:H,pixelStorei:ee,getParameter:se,updateUBOMapping:J,uniformBlockBinding:K,texStorage2D:$e,texStorage3D:A,texSubImage2D:wt,texSubImage3D:xe,compressedTexSubImage2D:Gt,compressedTexSubImage3D:ze,scissor:le,viewport:pe,reset:ue}}function ey(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap,u=new Set,d,f=new WeakMap,_=new Set,S=new FinalizationRegistry(A=>_.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return m?new OffscreenCanvas(A,v):kr("canvas")}function g(A,v,H){let se=1,ee=$e(A);if((ee.width>H||ee.height>H)&&(se=H/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let le=Math.floor(se*ee.width),pe=Math.floor(se*ee.height);d===void 0&&(d=p(le,pe));let J=v?p(le,pe):d;return J.width=le,J.height=pe,J.getContext("2d").drawImage(A,0,0,le,pe),Ge("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+pe+")."),J}else return"data"in A&&Ge("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,v,H,se,ee,le=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8),H===n.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),H===n.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),v===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8),H===n.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),H===n.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGB8UI),H===n.UNSIGNED_SHORT&&(J=n.RGB16UI),H===n.UNSIGNED_INT&&(J=n.RGB32UI),H===n.BYTE&&(J=n.RGB8I),H===n.SHORT&&(J=n.RGB16I),H===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),H===n.UNSIGNED_INT&&(J=n.RGBA32UI),H===n.BYTE&&(J=n.RGBA8I),H===n.SHORT&&(J=n.RGBA16I),H===n.INT&&(J=n.RGBA32I)),v===n.RGB&&(H===n.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),H===n.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),v===n.RGBA){let K=le?zr:at.getTransfer(ee);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=K===ut?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),H===n.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(A,v){let H;return A?v===null||v===jn||v===ws?H=n.DEPTH24_STENCIL8:v===Wn?H=n.DEPTH32F_STENCIL8:v===dr&&(H=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===ws?H=n.DEPTH_COMPONENT24:v===Wn?H=n.DEPTH_COMPONENT32F:v===dr&&(H=n.DEPTH_COMPONENT16),H}function T(A,v){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function L(A){let v=new WeakRef(A);i.get(A).__ref=v,_.add(v),S.register(A,v,v)}function R(A){let v=i.get(A).__ref;v!==void 0&&(_.delete(v),S.unregister(v))}function F(A){W(A.target)}function z(A){I(A.target)}function W(A){A.removeEventListener("dispose",F),R(A),Z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function I(A){A.removeEventListener("dispose",z),R(A),re(A)}function q(){for(let A of _){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):W(v))}_.clear(),u.clear()}function Z(A){let v=i.get(A);if(v.__webglInit===void 0)return;let H=A.source,se=f.get(H);if(se){let ee=se[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&X(A),Object.keys(se).length===0&&f.delete(H)}i.remove(A)}function X(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let H=A.source,se=f.get(H);delete se[v.__cacheKey],a.memory.textures--}function re(A){let v=i.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let H=A.depthTexture;if(H&&H.renderTarget===A&&W(H),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let le=0;le<v.__webglFramebuffer[ee].length;le++)n.deleteFramebuffer(v.__webglFramebuffer[ee][le]);else n.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[ee]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let se=A.textures;for(let ee=0,le=se.length;ee<le;ee++){let pe=i.get(se[ee]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(se[ee])}i.remove(A)}let Y=0;function ne(){Y=0}function ie(){return Y}function Ie(A){Y=A}function Ye(){let A=Y;return A>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function j(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ve(A,v){let H=i.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let se=A.image;if(se===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(H,A,v);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function Ae(A,v){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ht(H,A,v);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function Be(A,v){let H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ht(H,A,v);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function Me(A,v){let H=i.get(A);if(A.version>0&&H.__version!==A.version){yn(H,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}let Je={[_o]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},Ut={[Bt]:n.NEAREST,[Od]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},ke={[Hd]:n.NEVER,[mh]:n.ALWAYS,[Gd]:n.LESS,[fh]:n.LEQUAL,[Vd]:n.EQUAL,[ph]:n.GEQUAL,[Wd]:n.GREATER,[Xd]:n.NOTEQUAL};function ft(A,v){if(v.type===Wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===$o||v.magFilter===ha||v.magFilter===Ii||v.minFilter===fn||v.minFilter===$o||v.minFilter===ha||v.minFilter===Ii)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Je[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Je[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Je[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ut[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ut[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==ha&&v.minFilter!==Ii||v.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function xt(A,v){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",F),L(v));let se=v.source,ee=f.get(se);ee===void 0&&(ee={},f.set(se,ee));let le=j(v);if(le!==A.__cacheKey){ee[le]===void 0&&(ee[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[le].usedTimes++;let pe=ee[A.__cacheKey];pe!==void 0&&(ee[A.__cacheKey].usedTimes--,pe.usedTimes===0&&X(v)),A.__cacheKey=le,A.__webglTexture=ee[le].texture}return H}function it(A,v,H){return Math.floor(Math.floor(A/H)/v)}function Qt(A,v,H,se){let le=A.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,H,se,v.data);else{le.sort((C,Q)=>C.start-Q.start);let pe=0;for(let C=1;C<le.length;C++){let Q=le[pe],$=le[C],de=Q.start+Q.count,ce=it($.start,v.width,4),he=it(Q.start,v.width,4);$.start<=de+1&&ce===he&&it($.start+$.count-1,v.width,4)===ce?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++pe,le[pe]=$)}le.length=pe+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let C=0,Q=le.length;C<Q;C++){let $=le[C],de=Math.floor($.start/4),ce=Math.ceil($.count/4),he=de%v.width,Le=Math.floor(de/v.width),je=ce,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(n.TEXTURE_2D,0,he,Le,je,ae,H,se,v.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function Ht(A,v,H){let se=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=n.TEXTURE_3D);let ee=xt(A,v),le=v.source;t.bindTexture(se,A.__webglTexture,n.TEXTURE0+H);let pe=i.get(le);if(le.version!==pe.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ae=at.getPrimaries(at.workingColorSpace),De=v.colorSpace===Li?null:at.getPrimaries(v.colorSpace),Ke=v.colorSpace===Li||ae===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let K=g(v.image,!1,s.maxTextureSize);K=ze(v,K);let ue=r.convert(v.format,v.colorSpace),C=r.convert(v.type),Q=w(v.internalFormat,ue,C,v.normalized,v.colorSpace,v.isVideoTexture);ft(se,v);let $,de=v.mipmaps,ce=v.isVideoTexture!==!0,he=pe.__version===void 0||ee===!0,Le=le.dataReady,je=T(v,K);if(v.isDepthTexture)Q=x(v.format===Pi,v.type),he&&(ce?t.texStorage2D(n.TEXTURE_2D,1,Q,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Q,K.width,K.height,0,ue,C,null));else if(v.isDataTexture)if(de.length>0){ce&&he&&t.texStorage2D(n.TEXTURE_2D,je,Q,de[0].width,de[0].height);for(let ae=0,De=de.length;ae<De;ae++)$=de[ae],ce?Le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,$.width,$.height,ue,C,$.data):t.texImage2D(n.TEXTURE_2D,ae,Q,$.width,$.height,0,ue,C,$.data);v.generateMipmaps=!1}else ce?(he&&t.texStorage2D(n.TEXTURE_2D,je,Q,K.width,K.height),Le&&Qt(v,K,ue,C)):t.texImage2D(n.TEXTURE_2D,0,Q,K.width,K.height,0,ue,C,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ce&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Q,de[0].width,de[0].height,K.depth);for(let ae=0,De=de.length;ae<De;ae++)if($=de[ae],v.format!==Pn)if(ue!==null)if(ce){if(Le)if(v.layerUpdates.size>0){let Ke=Mh($.width,$.height,v.format,v.type);for(let _e of v.layerUpdates){let pt=$.data.subarray(_e*Ke/$.data.BYTES_PER_ELEMENT,(_e+1)*Ke/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,_e,$.width,$.height,1,ue,pt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,K.depth,ue,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Q,$.width,$.height,K.depth,0,$.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,K.depth,ue,C,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Q,$.width,$.height,K.depth,0,ue,C,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ce&&he&&t.texStorage2D(n.TEXTURE_2D,je,Q,de[0].width,de[0].height);for(let ae=0,De=de.length;ae<De;ae++)$=de[ae],v.format!==Pn?ue!==null?ce?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,$.width,$.height,ue,$.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Q,$.width,$.height,0,$.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,$.width,$.height,ue,C,$.data):t.texImage2D(n.TEXTURE_2D,ae,Q,$.width,$.height,0,ue,C,$.data)}else if(v.isDataArrayTexture)if(ce){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Q,K.width,K.height,K.depth),Le)if(v.layerUpdates.size>0){let ae=Mh(K.width,K.height,v.format,v.type);for(let De of v.layerUpdates){let Ke=K.data.subarray(De*ae/K.data.BYTES_PER_ELEMENT,(De+1)*ae/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,K.width,K.height,1,ue,C,Ke)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,C,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,ue,C,K.data);else if(v.isData3DTexture)ce?(he&&t.texStorage3D(n.TEXTURE_3D,je,Q,K.width,K.height,K.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,C,K.data)):t.texImage3D(n.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,ue,C,K.data);else if(v.isFramebufferTexture){if(he)if(ce)t.texStorage2D(n.TEXTURE_2D,je,Q,K.width,K.height);else{let ae=K.width,De=K.height;for(let Ke=0;Ke<je;Ke++)t.texImage2D(n.TEXTURE_2D,Ke,Q,ae,De,0,ue,C,null),ae>>=1,De>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),K.parentNode!==ae){ae.appendChild(K),u.add(v),ae.onpaint=De=>{let Ke=De.changedElements;for(let _e of u)Ke.includes(_e.image)&&(_e.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let Ke=n.RGBA,_e=n.RGBA,pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ke,_e,pt,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ce&&he){let ae=$e(de[0]);t.texStorage2D(n.TEXTURE_2D,je,Q,ae.width,ae.height)}for(let ae=0,De=de.length;ae<De;ae++)$=de[ae],ce?Le&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue,C,$):t.texImage2D(n.TEXTURE_2D,ae,Q,ue,C,$);v.generateMipmaps=!1}else if(ce){if(he){let ae=$e(K);t.texStorage2D(n.TEXTURE_2D,je,Q,ae.width,ae.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,C,K)}else t.texImage2D(n.TEXTURE_2D,0,Q,ue,C,K);E(v)&&v.mipmapsAutoUpdate===!0&&M(se),pe.__version=le.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function yn(A,v,H){if(v.image.length!==6)return;let se=xt(A,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);let le=i.get(ee);if(ee.version!==le.__version||se===!0){t.activeTexture(n.TEXTURE0+H);let pe=at.getPrimaries(at.workingColorSpace),J=v.colorSpace===Li?null:at.getPrimaries(v.colorSpace),K=v.colorSpace===Li||pe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!ue&&!C?Q[_e]=g(v.image[_e],!0,s.maxCubemapSize):Q[_e]=C?v.image[_e].image:v.image[_e],Q[_e]=ze(v,Q[_e]);let $=Q[0],de=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),he=w(v.internalFormat,de,ce,v.normalized,v.colorSpace),Le=v.isVideoTexture!==!0,je=le.__version===void 0||se===!0,ae=ee.dataReady,De=T(v,$);ft(n.TEXTURE_CUBE_MAP,v);let Ke;if(v.isDepthTexture){if(he=x(v.format===Pi,v.type),je)if(Le)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,$.width,$.height);else for(let _e=0;_e<6;_e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,$.width,$.height,0,de,ce,null)}else if(ue){Le&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,he,$.width,$.height);for(let _e=0;_e<6;_e++){Ke=Q[_e].mipmaps;for(let pt=0;pt<Ke.length;pt++){let Zt=Ke[pt];v.format!==Pn?de!==null?Le?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt,0,0,Zt.width,Zt.height,de,Zt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt,he,Zt.width,Zt.height,0,Zt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt,0,0,Zt.width,Zt.height,de,ce,Zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt,he,Zt.width,Zt.height,0,de,ce,Zt.data)}}}else{if(Ke=v.mipmaps,Le&&je){Ke.length>0&&De++;let _e=$e(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,he,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(C){Le?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,de,ce,Q[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,Q[_e].width,Q[_e].height,0,de,ce,Q[_e].data);for(let pt=0;pt<Ke.length;pt++){let Bi=Ke[pt].image[_e].image;Le?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt+1,0,0,Bi.width,Bi.height,de,ce,Bi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt+1,he,Bi.width,Bi.height,0,de,ce,Bi.data)}}else{Le?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,ce,Q[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,de,ce,Q[_e]);for(let pt=0;pt<Ke.length;pt++){let Zt=Ke[pt];Le?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt+1,0,0,de,ce,Zt.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,pt+1,he,de,ce,Zt.image[_e])}}}E(v)&&v.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),le.__version=ee.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ct(A,v,H,se,ee,le){let pe=r.convert(H.format,H.colorSpace),J=r.convert(H.type),K=w(H.internalFormat,pe,J,H.normalized,H.colorSpace),ue=i.get(v),C=i.get(H);if(C.__renderTarget=v,!ue.__hasExternalTextures){let Q=Math.max(1,v.width>>le),$=Math.max(1,v.height>>le);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,le,K,Q,$,v.depth,0,pe,J,null):t.texImage2D(ee,le,K,Q,$,0,pe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,C.__webglTexture,0,wt(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,C.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ri(A,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let se=v.depthTexture,ee=se&&se.isDepthTexture?se.type:null,le=x(v.stencilBuffer,ee),pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(v),le,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(v),le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,A)}else{let se=v.textures;for(let ee=0;ee<se.length;ee++){let le=se[ee],pe=r.convert(le.format,le.colorSpace),J=r.convert(le.type),K=w(le.internalFormat,pe,J,le.normalized,le.colorSpace);xe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt(v),K,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt(v),K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Yt(A,v,H){let se=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(v.depthTexture);ee.__renderTarget=v;let le=se?v.depthTexture.image[0]:v.depthTexture.image;(!ee.__webglTexture||le.width!==v.width||le.height!==v.height)&&(le.width=v.width,le.height=v.height,v.depthTexture.needsUpdate=!0),se?Me(v.depthTexture,0):ve(v.depthTexture,0);let pe=ee.__webglTexture,J=wt(v),K=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ue=v.depthTexture.format===Pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ai)xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,K,pe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ue,K,pe,0);else if(v.depthTexture.format===Pi)xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,K,pe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ue,K,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fn(A){let v=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let se=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=se}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let se=0;se<6;se++)Yt(v.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?Yt(v.__webglFramebuffer[0],A,0):Yt(v.__webglFramebuffer,A,0);else if(H){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=n.createRenderbuffer(),ri(v.__webglDepthbuffer[se],A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,le)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ri(v.__webglDepthbuffer,A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function On(A,v,H){let se=i.get(A);v!==void 0&&Ct(se.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Fn(A)}function Bn(A){let v=A.texture,H=i.get(A),se=i.get(v);A.addEventListener("dispose",z),L(A);let ee=A.textures,le=A.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=v.version,a.memory.textures++),le){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let K=0;K<v.mipmaps.length;K++)H.__webglFramebuffer[J][K]=n.createFramebuffer()}else H.__webglFramebuffer[J]=n.createFramebuffer()}else{if(v.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)H.__webglFramebuffer[J]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(pe)for(let J=0,K=ee.length;J<K;J++){let ue=i.get(ee[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&xe(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<ee.length;J++){let K=ee[J];H.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let ue=r.convert(K.format,K.colorSpace),C=r.convert(K.type),Q=w(K.internalFormat,ue,C,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),$=wt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,H.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ri(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ft(n.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ct(H.__webglFramebuffer[J][K],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else Ct(H.__webglFramebuffer[J],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(v)?M(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let J=0,K=ee.length;J<K;J++){let ue=ee[J],C=i.get(ue),Q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,C.__webglTexture),ft(Q,ue),Ct(H.__webglFramebuffer,A,ue,n.COLOR_ATTACHMENT0+J,Q,0),E(ue)&&M(Q)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,se.__webglTexture),ft(J,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ct(H.__webglFramebuffer[K],A,v,n.COLOR_ATTACHMENT0,J,K);else Ct(H.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,J,0);E(v)?M(J):v.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Fn(A)}function O(A){let v=A.textures;for(let H=0,se=v.length;H<se;H++){let ee=v[H];if(E(ee)&&ee.mipmapsAutoUpdate===!0){let le=y(A),pe=i.get(ee).__webglTexture;t.bindTexture(le,pe),M(le),t.unbindTexture()}}}let zn=[];function Tt(A){if(A.samples>0){if(xe(A)===!1){let v=A.textures,H=A.width,se=A.height,ee=n.COLOR_BUFFER_BIT,le=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(A),J=v.length>1;if(J)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let C=i.get(v[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,H,se,0,0,H,se,ee,n.NEAREST),c===!0&&(zn.length=0,zn.push(n.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&zn.push(le),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,zn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let C=i.get(v[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,C,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function wt(A){return Math.min(s.maxSamples,A.samples)}function xe(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Gt(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ze(A,v){let H=A.colorSpace,se=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Br&&H!==Li&&(at.getTransfer(H)===ut?(se!==Pn||ee!==vn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),v}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ye,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=Ie,this.setTexture2D=ve,this.setTexture2DArray=Ae,this.setTexture3D=Be,this.setTextureCube=Me,this.rebindTextures=On,this.setupRenderTarget=Bn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Fn,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=xe,this.dispose=q}function ty(n,e){function t(i,s=Li){let r,a=at.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Zo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===ch)return n.SHORT;if(i===dr)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===dh)return n.RGB;if(i===Pn)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===Ko)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===ua||i===da||i===fa||i===pa)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===ac||i===oc||i===cc||i===lc||i===ma||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===ac)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cc)return r.COMPRESSED_R11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ma)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===Mc||i===Sc||i===bc||i===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===wc||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tc)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===Cc||i===ga||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`,Uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hi({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fh=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null,S=typeof XRWebGLBinding<"u",m=new Uh,p={},g=t.getContextAttributes(),E=null,M=null,y=[],w=[],x=new Ve,T=null,L=null,R=new dn;R.viewport=new At;let F=new dn;F.viewport=new At;let z=[R,F],W=new Go,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ve=y[j];return ve===void 0&&(ve=new rr,y[j]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(j){let ve=y[j];return ve===void 0&&(ve=new rr,y[j]=ve),ve.getGripSpace()},this.getHand=function(j){let ve=y[j];return ve===void 0&&(ve=new rr,y[j]=ve),ve.getHandSpace()};function Z(j){let ve=w.indexOf(j.inputSource);if(ve===-1)return;let Ae=y[ve];Ae!==void 0&&(Ae.update(j.inputSource,j.frame,l||a),Ae.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",re);for(let j=0;j<y.length;j++){let ve=w[j];ve!==null&&(w[j]=null,y[j].disconnect(ve))}I=null,q=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,M=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),L!==null){let j=L.camera;j.fov=L.fov,j.zoom=L.zoom,j.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Be=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=g.stencil?Pi:Ai,Be=g.stencil?ws:jn);let Je={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Tn(d.textureWidth,d.textureHeight,{format:Pn,type:vn,depthTexture:new Ci(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Tn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(j){for(let ve=0;ve<j.removed.length;ve++){let Ae=j.removed[ve],Be=w.indexOf(Ae);Be>=0&&(w[Be]=null,y[Be].disconnect(Ae))}for(let ve=0;ve<j.added.length;ve++){let Ae=j.added[ve],Be=w.indexOf(Ae);if(Be===-1){for(let Je=0;Je<y.length;Je++)if(Je>=w.length){w.push(Ae),Be=Je;break}else if(w[Je]===null){w[Je]=Ae,Be=Je;break}if(Be===-1)break}let Me=y[Be];Me&&Me.connect(Ae)}}function Y(j,ve){ve===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ve.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ve=j.near,Ae=j.far;m.texture!==null&&(m.depthNear>0&&(ve=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),W.near=F.near=R.near=ve,W.far=F.far=R.far=Ae,(I!==W.near||q!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,q=W.far),W.layers.mask=j.layers.mask|6,R.layers.mask=W.layers.mask&-5,F.layers.mask=W.layers.mask&-3;let Be=j.parent,Me=W.cameras;Y(W,Be);for(let Je=0;Je<Me.length;Je++)Y(Me[Je],Be);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&j.isPerspectiveCamera&&(L={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,W,Be)};function ne(j,ve,Ae){Ae===null?j.matrix.copy(ve.matrixWorld):(j.matrix.copy(Ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(ve.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ve.projectionMatrix),j.projectionMatrixInverse.copy(ve.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(j){return p[j]};let ie=null;function Ie(j,ve){if(h=ve.getViewerPose(l||a),_=ve,h!==null){let Ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Be=!1;Ae.length!==W.cameras.length&&(W.cameras.length=0,Be=!0);for(let ke=0;ke<Ae.length;ke++){let ft=Ae[ke],xt=null;if(f!==null)xt=f.getViewport(ft);else{let Qt=u.getViewSubImage(d,ft);xt=Qt.viewport,ke===0&&(e.setRenderTargetTextures(M,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(M))}let it=z[ke];it===void 0&&(it=new dn,it.layers.enable(ke),it.viewport=new At,z[ke]=it),it.matrix.fromArray(ft.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ft.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(xt.x,xt.y,xt.width,xt.height),ke===0&&(W.matrix.copy(it.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Be===!0&&W.cameras.push(it)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=i.getBinding();let ke=u.getDepthInformation(Ae[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,s.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),u=i.getBinding();for(let ke=0;ke<Ae.length;ke++){let ft=Ae[ke].camera;if(ft){let xt=p[ft];xt||(xt=new jr,p[ft]=xt);let it=u.getCameraImage(ft);xt.sourceTexture=it}}}}for(let Ae=0;Ae<y.length;Ae++){let Be=w[Ae],Me=y[Ae];Be!==null&&Me!==void 0&&Me.update(Be,ve,l||a)}ie&&ie(j,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),_=null}let Ye=new wf;Ye.setAnimationLoop(Ie),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}},sy=new lt,Ff=new qe;Ff.set(-1,0,0,0,1,0,0,0,1);function ry(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_h(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,g,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,g,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let g=e.get(p),E=g.envMap,M=g.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ff),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,g,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,g){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let g=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ay(n,e,t,i){let s={},r={};function a(g,E){let M=E.program;i.uniformBlockBinding(g,M,s[g.id])}function o(g,E){let M=s[g.id];M===void 0&&(_(g),M=c(g),s[g.id]=M,g.addEventListener("dispose",m));let y=E.program;i.updateUBOMapping(g,y);let w=e.render.frame;r[g.id]!==w&&(l(g),r[g.id]=w)}function c(g){let E=n.createBuffer(),M=g.__size,y=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,y),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function l(g){let E=s[g.id],M=g.uniforms,y=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,x=M.length;w<x;w++){let T=M[w];if(Array.isArray(T))for(let L=0,R=T.length;L<R;L++)h(T[L],w,L,y);else h(T,w,0,y)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,E,M,y){if(d(g,E,M,y)===!0){let w=g.__offset,x=g.value;if(Array.isArray(x)){let T=0;for(let L=0;L<x.length;L++){let R=x[L],F=S(R,!0);u(R,g.__data,T),T+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,g.__data)}}function u(g,E,M){typeof g=="number"||typeof g=="boolean"?E[M]=g:g.isMatrix3?(E[M]=g.elements[0],E[M+1]=g.elements[1],E[M+2]=g.elements[2],E[M+3]=0,E[M+4]=g.elements[3],E[M+5]=g.elements[4],E[M+6]=g.elements[5],E[M+7]=0,E[M+8]=g.elements[6],E[M+9]=g.elements[7],E[M+10]=g.elements[8],E[M+11]=0):ArrayBuffer.isView(g)?E.set(g.subarray(0,E.length-M),M):g.toArray(E,M)}function d(g,E,M,y){let w=g.value,x=E+"_"+M;if(Array.isArray(w)){y[x]===void 0&&(y[x]=[]);let T=y[x],L=!1;for(let R=0;R<w.length;R++)f(w[R],T,R)===!0&&(L=!0);return L}return f(w,y,x)}function f(g,E,M){if(E[M]===void 0)return typeof g=="number"||typeof g=="boolean"?E[M]=g:ArrayBuffer.isView(g)?E[M]=g.slice():E[M]=g.clone(),!0;{let y=E[M];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return E[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(y.equals(g)===!1)return y.copy(g),!0}}return!1}function _(g){let E=g.uniforms,M=0,y=16;for(let x=0,T=E.length;x<T;x++){let L=Array.isArray(E[x])?E[x]:[E[x]];for(let R=0,F=L.length;R<F;R++){let z=L[R],W=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(E[x])||Array.isArray(z.value),q=M;for(let X=0,re=W.length;X<re;X++){let Y=W[X],ne=S(Y,I),ie=M%y,Ie=ie%ne.boundary,Ye=ie+Ie;M+=Ie,Ye!==0&&y-Ye<ne.storage&&(M+=y-Ye),X===0&&(q=M),M+=ne.storage}let Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((M-q)/Float32Array.BYTES_PER_ELEMENT),z.__offset=q}}let w=M%y;return w>0&&(M+=y-w),g.__size=M,g.__cache={},this}function S(g,E){let M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=16,M.storage=48):g.isMatrix4?(M.boundary=16,M.storage=64):g.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",g),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(g){let E=g.target;E.removeEventListener("dispose",m),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let g in s)n.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:p}}var oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function cy(){return di===null&&(di=new ys(oy,16,16,ns,Qn),di.name="DFG_LUT",di.minFilter=fn,di.magFilter=fn,di.wrapS=oi,di.wrapT=oi,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Fc=class{constructor(e={}){let{canvas:t=qd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let S=f,m=new Set([ec,Qo,jo]),p=new Set([vn,jn,dr,ws,Zo,Jo]),g=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},y=null,w=null,x=[],T=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,z=null,W=null,I=null,q=null;this._outputColorSpace=un;let Z=0,X=0,re=null,Y=-1,ne=null,ie=new At,Ie=new At,Ye=null,j=new Xe(0),ve=0,Ae=t.width,Be=t.height,Me=1,Je=null,Ut=null,ke=new At(0,0,Ae,Be),ft=new At(0,0,Ae,Be),xt=!1,it=new Zi,Qt=new wo,Ht=!1,yn=!1,Ct=new lt,ri=new N,Yt=new At,Fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},On=!1;function Bn(){return re===null?Me:1}let O=i;function zn(b,P){return t.getContext(b,P)}let Tt,wt,xe,Gt,ze,$e,A,v,H,se,ee,le,pe,J,K,ue,C,Q,$,de,ce,he,Le;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){let P="webgl2";if(O=zn(P,b),O===null)throw zn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(b){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),He("WebGLRenderer: "+b.message),b}function je(){Tt=new yx(O),Tt.init(),ce=new ty(O,Tt),wt=new cx(O,Tt,e,ce),xe=new Q_(O,Tt),wt.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),W=O.createFramebuffer(),I=O.createFramebuffer(),q=O.createFramebuffer(),Gt=new Sx(O),ze=new z_,$e=new ey(O,Tt,xe,ze,wt,ce,Gt),A=new _x(R),v=new Em(O),he=new ax(O,v),H=new vx(O,v,Gt,he),se=new Ex(O,H,v,he,Gt),Q=new bx(O,wt,$e),K=new lx(ze),ee=new B_(R,A,Tt,wt,he,K),le=new ry(R,ze),pe=new H_,J=new $_(Tt),C=new rx(R,A,xe,se,_,c),ue=new j_(R,se,wt),Le=new ay(O,Gt,wt,xe),$=new ox(O,Tt,Gt),de=new Mx(O,Tt,Gt),Gt.programs=ee.programs,R.capabilities=wt,R.extensions=Tt,R.properties=ze,R.renderLists=pe,R.shadowMap=ue,R.state=xe,R.info=Gt}S!==vn&&(L=new wx(S,t.width,t.height,o,s,r));let ae=new Fh(R,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=Tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(Ae,Be,!1))},this.getSize=function(b){return b.set(Ae,Be)},this.setSize=function(b,P,V=!0){if(ae.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=b,Be=P,t.width=Math.floor(b*Me),t.height=Math.floor(P*Me),V===!0&&(t.style.width=b+"px",t.style.height=P+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(Ae*Me,Be*Me).floor()},this.setDrawingBufferSize=function(b,P,V){Ae=b,Be=P,Me=V,t.width=Math.floor(b*V),t.height=Math.floor(P*V),this.setViewport(0,0,b,P)},this.setEffects=function(b){if(S===vn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let P=0;P<b.length;P++)if(b[P].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(ke)},this.setViewport=function(b,P,V,k){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,P,V,k),xe.viewport(ie.copy(ke).multiplyScalar(Bn()).round())},this.getScissor=function(b){return b.copy(ft)},this.setScissor=function(b,P,V,k){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,P,V,k),xe.scissor(Ie.copy(ft).multiplyScalar(Bn()).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){xe.setScissorTest(xt=b)},this.setOpaqueSort=function(b){Je=b},this.setTransparentSort=function(b){Ut=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,P=!0,V=!0){let k=0;if(b){let G=!1;if(re!==null){let me=re.texture.format;G=m.has(me)}if(G){let me=re.texture.type,we=p.has(me),fe=C.getClearColor(),Se=C.getClearAlpha(),Pe=fe.r,Ze=fe.g,st=fe.b;we?(g[0]=Pe,g[1]=Ze,g[2]=st,g[3]=Se,O.clearBufferuiv(O.COLOR,0,g)):(E[0]=Pe,E[1]=Ze,E[2]=st,E[3]=Se,O.clearBufferiv(O.COLOR,0,E))}else k|=O.COLOR_BUFFER_BIT}P&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),C.dispose(),pe.dispose(),J.dispose(),$e.dispose(),ze.dispose(),A.dispose(),se.dispose(),H.dispose(),he.dispose(),Le.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ru),ae.removeEventListener("sessionend",Cu),ds.stop()};function De(b){b.preventDefault(),Hr("WebGLRenderer: Context Lost."),F=!0}function Ke(){Hr("WebGLRenderer: Context Restored."),F=!1;let b=Gt.autoReset,P=ue.enabled,V=ue.autoUpdate,k=ue.needsUpdate,G=ue.type;je(),Gt.autoReset=b,ue.enabled=P,ue.autoUpdate=V,ue.needsUpdate=k,ue.type=G}function _e(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pt(b){let P=b.target;P.removeEventListener("dispose",pt),Zt(P)}function Zt(b){Bi(b),ze.remove(b)}function Bi(b){let P=ze.get(b).programs;P!==void 0&&(P.forEach(function(V){ee.releaseProgram(V)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,V,k,G,me){P===null&&(P=Fn);let we=G.isMesh&&G.matrixWorld.determinantAffine()<0,fe=Bp(b,P,V,k,G);xe.setMaterial(k,we);let Se=V.index,Pe=1;if(k.wireframe===!0){if(Se=H.getWireframeAttribute(V),Se===void 0)return;Pe=2}let Ze=V.drawRange,st=V.attributes.position,Re=Ze.start*Pe,rt=(Ze.start+Ze.count)*Pe;me!==null&&(Re=Math.max(Re,me.start*Pe),rt=Math.min(rt,(me.start+me.count)*Pe)),Se!==null?(Re=Math.max(Re,0),rt=Math.min(rt,Se.count)):st!=null&&(Re=Math.max(Re,0),rt=Math.min(rt,st.count));let Ft=rt-Re;if(Ft<0||Ft===1/0)return;he.setup(G,k,fe,V,Se);let St,_t=$;if(Se!==null&&(St=v.get(Se),_t=de,_t.setIndex(St)),G.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*Bn()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(G.isLine){let nn=k.linewidth;nn===void 0&&(nn=1),xe.setLineWidth(nn*Bn()),G.isLineSegments?_t.setMode(O.LINES):G.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else G.isPoints?_t.setMode(O.POINTS):G.isSprite&&_t.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,Ce=G._multiDrawCounts,ln=G._multiDrawCount,ht=Se?v.get(Se).bytesPerElement:1,fs=ze.get(k).currentProgram.getUniforms();for(let sn=0;sn<ln;sn++)fs.setValue(O,"_gl_DrawID",sn),_t.render(nn[sn]/ht,Ce[sn])}else if(G.isInstancedMesh)_t.renderInstances(Re,Ft,G.count);else if(V.isInstancedBufferGeometry){let nn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ce=Math.min(V.instanceCount,nn);_t.renderInstances(Re,Ft,Ce)}else _t.render(Re,Ft)};function Au(b,P,V,k){z!==null&&b.isNodeMaterial&&z.setObject(k,b),Ht===!0&&K.setState(b,V,!1),b.transparent===!0&&b.side===In&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,wr(b,P,k),b.side=ts,b.needsUpdate=!0,wr(b,P,k),b.side=In):wr(b,P,k)}this.compile=function(b,P,V=null){V===null&&(V=b),z!==null&&z.renderStart(b,P,V),w=J.get(V),w.init(P),T.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==V&&b.traverseVisible(function(G){G.isLight&&G.layers.test(P.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),yn=this.localClippingEnabled,Ht=K.init(this.clippingPlanes,yn),Ht===!0&&K.setGlobalState(this.clippingPlanes,P),z!==null&&ue.render(w.state.shadowsArray,V,P);let k=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){let fe=me[we];Au(fe,V,P,G),k.add(fe)}else Au(me,V,P,G),k.add(me)}),w=T.pop(),z!==null&&z.renderEnd(),k},this.compileAsync=function(b,P,V=null){let k=this.compile(b,P,V);return new Promise(G=>{function me(){if(k.forEach(function(we){let Se=ze.get(we).currentProgram;(Se===void 0||Se.isReady())&&k.delete(we)}),k.size===0){G(b);return}setTimeout(me,10)}Tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let fl=null;function Fp(b){fl&&fl(b)}function Ru(){ds.stop()}function Cu(){ds.start()}let ds=new wf;ds.setAnimationLoop(Fp),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(b){fl=b,ae.setAnimationLoop(b),b===null?ds.stop():ds.start()},ae.addEventListener("sessionstart",Ru),ae.addEventListener("sessionend",Cu),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(b,P);let V=ae.enabled===!0&&ae.isPresenting===!0,k=L!==null&&(re===null||V)&&L.begin(R,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(P),P=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,P,re),w=J.get(b,T.length),w.init(P),w.state.textureUnits=$e.getTextureUnits(),T.push(w),Ct.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Qt.setFromArrayCamera(P):it.setFromProjectionMatrix(Ct,Hn,P.reversedDepth),yn=this.localClippingEnabled,Ht=K.init(this.clippingPlanes,yn),y=pe.get(b,x.length),y.init(),x.push(y),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let we=R.xr.getDepthSensingMesh();we!==null&&pl(we,P,-1/0,R.sortObjects)}pl(b,P,0,R.sortObjects),y.finish(),z!==null&&z.updateLights(w.state.lightsArray),R.sortObjects===!0&&y.sort(Je,Ut),On=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,On&&C.addToRenderList(y,b),this.info.autoReset===!0&&this.info.reset(),Ht===!0&&K.beginShadows();let G=w.state.shadowsArray;if(ue.render(G,b,P),Ht===!0&&K.endShadows(),(k&&L.hasRenderPass())===!1){let we=y.opaque,fe=y.transmissive;if(w.setupLights(),P.isArrayCamera){let Se=P.cameras;if(fe.length>0)for(let Pe=0,Ze=Se.length;Pe<Ze;Pe++){let st=Se[Pe];Pu(we,fe,b,st)}On&&C.render(b);for(let Pe=0,Ze=Se.length;Pe<Ze;Pe++){let st=Se[Pe];Iu(y,b,st,st.viewport)}}else fe.length>0&&Pu(we,fe,b,P),On&&C.render(b),Iu(y,b,P)}re!==null&&X===0&&($e.updateMultisampleRenderTarget(re),$e.updateRenderTargetMipmap(re)),k&&L.end(R),b.isScene===!0&&b.onAfterRender(R,b,P),he.resetDefaultState(),Y=-1,ne=null,T.pop(),T.length>0?(w=T[T.length-1],$e.setTextureUnits(w.state.textureUnits),Ht===!0&&K.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?y=x[x.length-1]:y=null,z!==null&&z.renderEnd()};function pl(b,P,V,k){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let we=P.isArrayCamera?Qt:it;if(!b.frustumCulled||b.intersectsFrustum(we)){k&&Yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);let fe=se.update(b),Se=b.material;Se.visible&&y.push(b,fe,Se,V,Yt.z,null,P)}}else if(b.isMesh||b.isLine||b.isPoints){let we=P.isArrayCamera?Qt:it;if(!b.frustumCulled||b.intersectsFrustum(we)){let fe=se.update(b),Se=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Yt.copy(b.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Yt.copy(fe.boundingSphere.center)),Yt.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Se)){let Pe=fe.groups;for(let Ze=0,st=Pe.length;Ze<st;Ze++){let Re=Pe[Ze],rt=Se[Re.materialIndex];rt&&rt.visible&&y.push(b,fe,rt,V,Yt.z,Re,P)}}else Se.visible&&y.push(b,fe,Se,V,Yt.z,null,P)}}}let me=b.children;for(let we=0,fe=me.length;we<fe;we++)pl(me[we],P,V,k)}function Iu(b,P,V,k){let{opaque:G,transmissive:me,transparent:we}=b;w.setupLightsView(V),Ht===!0&&K.setGlobalState(R.clippingPlanes,V),k&&xe.viewport(ie.copy(k)),G.length>0&&Fa(G,P,V),me.length>0&&Fa(me,P,V),we.length>0&&Fa(we,P,V),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Pu(b,P,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Re=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Tn(1,1,{generateMipmaps:!0,type:Re?Qn:vn,minFilter:Ii,samples:Math.max(4,wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let me=w.state.transmissionRenderTarget[k.id],we=k.viewport||ie;me.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),Se=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(j),ve=R.getClearAlpha(),ve<1&&R.setClearColor(16777215,.5),R.clear(),On&&C.render(V);let Ze=R.toneMapping;R.toneMapping=ui;let st=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Ht===!0&&K.setGlobalState(R.clippingPlanes,k),Fa(b,V,k),$e.updateMultisampleRenderTarget(me),$e.updateRenderTargetMipmap(me),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let rt=0,Ft=P.length;rt<Ft;rt++){let St=P[rt],{object:_t,geometry:nn,material:Ce,group:ln}=St;if(Ce.side===In&&_t.layers.test(k.layers)){let ht=Ce.side;Ce.side=xn,Ce.needsUpdate=!0,Lu(_t,V,k,nn,Ce,ln),Ce.side=ht,Ce.needsUpdate=!0,Re=!0}}Re===!0&&($e.updateMultisampleRenderTarget(me),$e.updateRenderTargetMipmap(me))}R.setRenderTarget(fe,Se,Pe),R.setClearColor(j,ve),st!==void 0&&(k.viewport=st),R.toneMapping=Ze}function Fa(b,P,V){let k=P.isScene===!0?P.overrideMaterial:null;for(let G=0,me=b.length;G<me;G++){let we=b[G],{object:fe,geometry:Se,group:Pe}=we,Ze=we.material;Ze.allowOverride===!0&&k!==null&&(Ze=k),fe.layers.test(V.layers)&&Lu(fe,P,V,Se,Ze,Pe)}}function Lu(b,P,V,k,G,me){z!==null&&G.isNodeMaterial&&z.setObject(b,G),b.onBeforeRender(R,P,V,k,G,me),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(R,P,V,k,b,me),G.transparent===!0&&G.side===In&&G.forceSinglePass===!1?(G.side=xn,G.needsUpdate=!0,R.renderBufferDirect(V,P,k,G,b,me),G.side=ts,G.needsUpdate=!0,R.renderBufferDirect(V,P,k,G,b,me),G.side=In):R.renderBufferDirect(V,P,k,G,b,me),b.onAfterRender(R,P,V,k,G,me)}function Du(b){let P=0;for(let V of b)V.texture!==null&&P++;return P}function wr(b,P,V){P.isScene!==!0&&(P=Fn);let k=ze.get(b),G=w.state.lights,me=w.state.shadowsArray,we=G.state.version,fe=ee.getParameters(b,G.state,me,P,V,w.state.lightProbeGridArray),Se=ee.getProgramCacheKey(fe),Pe=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,k.fog=P.fog;let Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Ze),k.envMapRotation=k.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",pt),Pe=new Map,k.programs=Pe,k.programVariants=new Map);let st=Pe.get(Se);if(st!==void 0){if(k.currentProgram===st&&k.lightsStateVersion===we)return Uu(b,fe),st}else fe.uniforms=ee.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,V,fe),b.onBeforeCompile(fe,R),st=ee.acquireProgram(fe,Se),Pe.set(Se,st),k.uniforms=fe.uniforms;let Re=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=K.uniform),Uu(b,fe),k.needsLights=kp(b),k.lightsStateVersion=we,k.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.sunLights.value=G.state.sun,Re.sunLightShadows.value=G.state.sunShadow,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.sunShadowMatrix.value=G.state.sunShadowMatrix,Re.sunShadowCascade.value=G.state.sunShadowCascade,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Du(w.state.lightProbeGridArray),k.currentProgram=st,k.uniformsList=null,st}function Op(b,P,V,k,G){let me=ze.get(b),we=me.currentProgram.id+","+k+","+G,fe=me.programVariants.get(we);return fe===void 0?(fe=wr(b,P,V),me.programVariants.set(we,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=k,me.toneMapping=G),fe}function Nu(b){if(b.uniformsList===null){let P=b.currentProgram.getUniforms();b.uniformsList=fr.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Uu(b,P){let V=ze.get(b);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Bp(b,P,V,k,G){P.isScene!==!0&&(P=Fn),$e.resetTextureUnits();let me=P.fog,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?P.environment:null,fe=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:at.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=A.get(k.envMap||we,Se),Ze=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,st=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,Ft=!!V.morphAttributes.color,St=ui;k.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=R.toneMapping);let _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nn=_t!==void 0?_t.length:0,Ce=ze.get(k),ln=w.state.lights;if(Ht===!0&&(yn===!0||b!==ne)){let It=b===ne&&k.id===Y;K.setState(k,b,It)}let ht=!1,fs=!1;k.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==ln.state.version||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==Pe||k.fog===!0&&Ce.fog!==me||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==K.numPlanes||Ce.numIntersection!==K.numIntersection)||Ce.vertexAlphas!==Ze||Ce.vertexTangents!==st||Ce.morphTargets!==Re||Ce.morphNormals!==rt||Ce.morphColors!==Ft||Ce.morphTargetsCount!==nn||Ce.numLightProbeGrids!==Du(w.state.lightProbeGridArray)?ht=!0:(Ce.outputColorSpace!==fe||Ce.toneMapping!==St)&&(fs=!0):(ht=!0,Ce.__version=k.version);let sn=Ce.currentProgram;(ht===!0||fs===!0)&&(sn=fs===!0?Op(k,P,G,fe,St):wr(k,P,G),z&&k.isNodeMaterial&&z.onUpdateProgram(k,sn,Ce));let Oa=!1,zi=!1,ps=!1,ct=sn.getUniforms(),en=Ce.uniforms;if(xe.useProgram(sn.program)&&(Oa=!0,zi=!0,ps=!0),k.id!==Y&&(Y=k.id,zi=!0),Oa||ne!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",b.projectionMatrix),ct.setValue(O,"viewMatrix",b.matrixWorldInverse);let Jt=ct.map.cameraPosition;Jt!==void 0&&Jt.setValue(O,ri.setFromMatrixPosition(b.matrixWorld)),wt.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,zi=!0,ps=!0)}if(Ce.needsLights&&(ln.state.sunShadowMap.length>0&&ct.setValue(O,"sunShadowMap",ln.state.sunShadowMap,$e),ln.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,$e),ln.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",ln.state.spotShadowMap,$e),ln.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",ln.state.pointShadowMap,$e)),G.isSkinnedMesh){ct.setOptional(O,G,"bindMatrix"),ct.setOptional(O,G,"bindMatrixInverse");let It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ct.setValue(O,"boneTexture",It.boneTexture,$e))}G.isBatchedMesh&&(ct.setOptional(O,G,"batchingTexture"),ct.setValue(O,"batchingTexture",G._matricesTexture,$e),ct.setOptional(O,G,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",G._indirectTexture,$e),ct.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",G._colorsTexture,$e));let $n=V.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Q.update(G,V,sn),(zi||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,ct.setValue(O,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&P.environment!==null&&(en.envMapIntensity.value=P.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=cy()),zi){if(ct.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&zp(en,ps),me&&k.fog===!0&&le.refreshFogUniforms(en,me),le.refreshMaterialUniforms(en,k,Me,Be,w.state.transmissionRenderTarget[b.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let It=M,Jt=0;for(let yi of w.state.lightProbeGridArray)yi.texture!==null&&(It.textures[Jt]=yi.texture,It.min[Jt]=yi.boundingBox.min,It.max[Jt]=yi.boundingBox.max,It.resolution[Jt]=yi.resolution,Jt++);for(let yi in It)It[yi].length=Jt;en.probesSH.value=It.textures,en.probesMin.value=It.min,en.probesMax.value=It.max,en.probesResolution.value=It.resolution}fr.upload(O,Nu(Ce),en,$e)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fr.upload(O,Nu(Ce),en,$e),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(O,"center",G.center),ct.setValue(O,"modelViewMatrix",G.modelViewMatrix),ct.setValue(O,"normalMatrix",G.normalMatrix),ct.setValue(O,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let It=k.uniformsGroups;for(let Jt=0,yi=It.length;Jt<yi;Jt++){let Ou=It[Jt];Le.update(Ou,sn),Le.bind(Ou,sn)}}return sn}function zp(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.sunLights.needsUpdate=P,b.sunLightShadows.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function kp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,P,V){let k=ze.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ze.get(b.texture).__webglTexture=P,ze.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,P){let V=ze.get(b);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,V=0){re=b,Z=P,X=V;let k=null,G=!1,me=!1;if(b){let fe=ze.get(b);if(fe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),ie.copy(b.viewport),Ie.copy(b.scissor),Ye=b.scissorTest,xe.viewport(ie),xe.scissor(Ie),xe.setScissorTest(Ye),Y=-1;return}else if(fe.__webglFramebuffer===void 0)$e.setupRenderTarget(b);else if(fe.__hasExternalTextures)$e.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ze=b.depthTexture;if(fe.__boundDepthTexture!==Ze){if(Ze!==null&&ze.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(b)}}let Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let Pe=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?k=Pe[P][V]:k=Pe[P],G=!0):b.samples>0&&$e.useMultisampledRTT(b)===!1?k=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[V]:k=Pe,ie.copy(b.viewport),Ie.copy(b.scissor),Ye=b.scissorTest}else ie.copy(ke).multiplyScalar(Me).floor(),Ie.copy(ft).multiplyScalar(Me).floor(),Ye=xt;if(V!==0&&(k=W),xe.bindFramebuffer(O.FRAMEBUFFER,k)&&xe.drawBuffers(b,k),xe.viewport(ie),xe.scissor(Ie),xe.setScissorTest(Ye),G){let fe=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,V)}else if(me){let fe=P;for(let Se=0;Se<b.textures.length;Se++){let Pe=ze.get(b.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,V,fe)}}else if(b!==null&&V!==0){let fe=ze.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,V)}Y=-1};function Fu(b){let P=ze.get(b);return(P.__readFormat!==b.format||P.__readType!==b.type)&&(P.__readFormat=b.format,P.__readType=b.type,P.__formatReadable=wt.textureFormatReadable(b.format),P.__typeReadable=wt.textureTypeReadable(b.type)),P}this.readRenderTargetPixels=function(b,P,V,k,G,me,we,fe=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Se=Se[we],Array.isArray(Se)&&(Se=Se[0])),Se){xe.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Pe=b.textures[fe],Ze=Pe.format,st=Pe.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let Re=Fu(Pe);if(Re.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-k&&V>=0&&V<=b.height-G&&O.readPixels(P,V,k,G,ce.convert(Ze),ce.convert(st),me)}finally{let Pe=re!==null?ze.get(re).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,P,V,k,G,me,we,fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(Se=Se[we],Array.isArray(Se)&&(Se=Se[0])),Se)if(P>=0&&P<=b.width-k&&V>=0&&V<=b.height-G){xe.bindFramebuffer(O.FRAMEBUFFER,Se);let Pe=b.textures[fe],Ze=Pe.format,st=Pe.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let Re=Fu(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(P,V,k,G,ce.convert(Ze),ce.convert(st),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ft=re!==null?ze.get(re).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ft);let St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yd(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(rt),O.deleteSync(St),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,P=null,V=0){let k=Math.pow(2,-V),G=Math.floor(b.image.width*k),me=Math.floor(b.image.height*k),we=P!==null?P.x:0,fe=P!==null?P.y:0;$e.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,we,fe,G,me),xe.unbindTexture()},this.copyTextureToTexture=function(b,P,V=null,k=null,G=0,me=0){let we,fe,Se,Pe,Ze,st,Re,rt,Ft,St=b.isCompressedTexture?b.mipmaps[me]:b.image;if(V!==null)we=V.max.x-V.min.x,fe=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Pe=V.min.x,Ze=V.min.y,st=V.isBox3?V.min.z:0;else{let ct=Math.pow(2,-G);we=Math.floor(St.width*ct),fe=Math.floor(St.height*ct),b.isDataArrayTexture?Se=St.depth:b.isData3DTexture?Se=Math.floor(St.depth*ct):Se=1,Pe=0,Ze=0,st=0}k!==null?(Re=k.x,rt=k.y,Ft=k.z):(Re=0,rt=0,Ft=0);let _t=ce.convert(P.format),nn=ce.convert(P.type),Ce;P.isData3DTexture?($e.setTexture3D(P,0),Ce=O.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?($e.setTexture2DArray(P,0),Ce=O.TEXTURE_2D_ARRAY):($e.setTexture2D(P,0),Ce=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,P.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,P.unpackAlignment);let ln=xe.getParameter(O.UNPACK_ROW_LENGTH),ht=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),fs=xe.getParameter(O.UNPACK_SKIP_PIXELS),sn=xe.getParameter(O.UNPACK_SKIP_ROWS),Oa=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,st);let zi=b.isDataArrayTexture||b.isData3DTexture,ps=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){let ct=ze.get(b),en=ze.get(P),$n=ze.get(ct.__renderTarget),It=ze.get(en.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,$n.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Jt=0;Jt<Se;Jt++)zi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,G,st+Jt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(P).__webglTexture,me,Ft+Jt)),O.blitFramebuffer(Pe,Ze,Pe+we,Ze+fe,Re,rt,Re+we,rt+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||ze.has(b)){let ct=ze.get(b),en=ze.get(P);xe.bindFramebuffer(O.READ_FRAMEBUFFER,I),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,q);for(let $n=0;$n<Se;$n++)zi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ct.__webglTexture,G,st+$n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ct.__webglTexture,G),ps?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,me,Ft+$n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,me),G!==0?O.blitFramebuffer(Pe,Ze,Pe+we,Ze+fe,Re,rt,Re+we,rt+fe,O.COLOR_BUFFER_BIT,O.NEAREST):ps?O.copyTexSubImage3D(Ce,me,Re,rt,Ft+$n,Pe,Ze,we,fe):O.copyTexSubImage2D(Ce,me,Re,rt,Pe,Ze,we,fe);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ps?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ce,me,Re,rt,Ft,we,fe,Se,_t,nn,St.data):P.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,me,Re,rt,Ft,we,fe,Se,_t,St.data):O.texSubImage3D(Ce,me,Re,rt,Ft,we,fe,Se,_t,nn,St):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Re,rt,we,fe,_t,nn,St.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Re,rt,St.width,St.height,_t,St.data):O.texSubImage2D(O.TEXTURE_2D,me,Re,rt,we,fe,_t,nn,St);xe.pixelStorei(O.UNPACK_ROW_LENGTH,ln),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,fs),xe.pixelStorei(O.UNPACK_SKIP_ROWS,sn),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,Oa),me===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&O.generateMipmap(Ce),xe.unbindTexture()},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&$e.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$e.setTextureCube(b,0):b.isData3DTexture?$e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$e.setTexture2DArray(b,0):$e.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){Z=0,X=0,re=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Fe=window,ge=n=>document.querySelector(n),Xc=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),nu=[];Fe.queueNotice=n=>nu.push(n);Fe.showToast=n=>Kf(n);Fe.root=loadRoot();var We=null,gr=isMuted(),gt=()=>We?stageOf(We.pet.day).size:2,Of=0;function Lt(n,e=""){let t=ge("#pop");t.innerHTML=`<span class="pi">${n}</span>${e?`<span class="ps">${Xc(e)}</span>`:""}`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Of),Of=setTimeout(()=>t.classList.remove("show"),1300)}var Bf=0;function Kf(n){let e=ge("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(Bf),Bf=setTimeout(()=>e.classList.remove("show"),2200)}setInterval(()=>{if(!nu.length||ge("#pop").classList.contains("show"))return;let n=nu.shift();n.startsWith("\u{1F3C5}")?(Lt("\u{1F3C5}","\xA1Sticker!"),speak("\xA1Sticker nuevo! "+n.slice(2))):Kf(n)},1200);var mr=null;function Nt(n){if(gr)return;try{mr=mr||new(Fe.AudioContext||Fe.webkitAudioContext)}catch{return}let e={coin:[[990,.05],[1320,.09]],step:[[300,.03]],pop:[[660,.05],[880,.07]],bark:[[520,.06],[380,.1]],quack:[[620,.07],[480,.09]]}[n];if(!e)return;let t=mr.currentTime;for(let[i,s]of e){let r=mr.createOscillator(),a=mr.createGain();r.type="triangle",r.frequency.value=i,a.gain.setValueAtTime(.07,t),a.gain.exponentialRampToValueAtTime(.001,t+s),r.connect(a).connect(mr.destination),r.start(t),r.stop(t+s+.02),t+=s*.9}}var lu=ge("#c"),zf=new URLSearchParams(location.search),vr=zf.has("lite")||!zf.has("hd")&&(Fe.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!Fe.matchMedia("(pointer: fine)").matches),gi=new Fc({canvas:lu,antialias:!vr,powerPreference:vr?"low-power":"default"}),jf=()=>vr?Math.min(1,Math.sqrt(13e5/(Fe.innerWidth*Fe.innerHeight))):Math.min(Fe.devicePixelRatio,1.5);gi.setPixelRatio(jf());gi.setSize(Fe.innerWidth,Fe.innerHeight);gi.shadowMap.enabled=!vr;gi.shadowMap.type=Ss;var mt=new dn(42,Fe.innerWidth/Fe.innerHeight,.1,220);Fe.addEventListener("resize",()=>{mt.aspect=Fe.innerWidth/Fe.innerHeight,mt.updateProjectionMatrix(),gi.setPixelRatio(jf()),gi.setSize(Fe.innerWidth,Fe.innerHeight)});var Ls=new ys(new Uint8Array([110,110,110,255,185,185,185,255,255,255,255,255]),3,1,Pn);Ls.minFilter=Ls.magFilter=Bt;Ls.needsUpdate=!0;var Oh=new Map;function wa(n,e){let t=n+(e?JSON.stringify(e):"");return Oh.has(t)||Oh.set(t,new Ki({color:n,gradientMap:Ls,...e||{}})),Oh.get(t)}function U(n,e,t={}){let i=new bt(n,t.mat||wa(e,t.extra));return i.castShadow=t.cast!==!1,i.receiveShadow=!!t.recv,i}var B={sph:(n,e=16,t=12)=>new Ms(n,e,t),box:(n,e,t)=>new Ji(n,e,t),cyl:(n,e,t,i=16)=>new or(n,e,t,i),cap:(n,e)=>new Qr(n,e,4,10),cone:(n,e,t=12)=>new ea(n,e,t)};function oe(n,e,t,i){return n.position.set(e,t,i),n}function ls(n){let e=n>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}var Bh=new Map;function hs(n,e=!1){let t=n+e;if(Bh.has(t))return Bh.get(t);let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");e&&(s.fillStyle="#ffffff",s.strokeStyle="#c48ad8",s.lineWidth=8,s.beginPath(),s.arc(64,58,50,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(52,104),s.lineTo(64,124),s.lineTo(76,104),s.fill()),s.font=`${e?62:96}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,64,e?62:70);let r=new Jr(i);return r.colorSpace=un,Bh.set(t,r),r}function Ds(n,e=1,t=!1){let i=new qr(new ar({map:hs(n,t),transparent:!0,depthWrite:!1}));return i.scale.set(e,e,e),i}function Er(n){let e=new sa("#dff1ff","#a6d68a",1.7),t=new oa("#fff4e0",2.3);return t.castShadow=!vr,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60}),t.shadow.bias=-8e-4,n.add(e,t,t.target),{hemi:e,sun:t}}var Ia=[.55,.68,.82,.95,1.05];function Qf(n){let e=COATS[n.coat]||COATS.dorado,t=new Ne,i=new Ne;t.add(i);let s=U(B.sph(.5,22,16),e.fur);s.scale.set(.85,.75,1.2),s.position.set(0,.78,-.05),i.add(s);let r=U(B.sph(.42),e.light);if(r.scale.set(.72,.58,1),r.position.set(0,.66,0),i.add(r),e.spots)for(let[M,y,w,x]of[[.22,1,-.2,.22],[-.25,.9,.15,.16]]){let T=U(B.sph(x),e.dark);T.scale.set(1,.45,1.2),T.position.set(M,y,w),i.add(T)}let a=[];for(let[M,y]of[[-.22,.32],[.22,.32],[-.22,-.4],[.22,-.4]]){let w=new Ne;w.position.set(M,.62,y);let x=U(B.cap(.12,.28),e.fur);x.position.y=-.26,w.add(x);let T=U(B.sph(.14,12,8),e.light);T.scale.set(1,.6,1.25),T.position.set(0,-.52,.04),w.add(T),i.add(w),a.push(w)}let o=new Ne;o.position.set(0,.98,-.6);let c=U(B.cap(.08,.36),e.fur);c.position.y=.22,o.add(c);let l=U(B.sph(.09),e.light);l.position.y=.44,o.add(l),i.add(o);let h=new Ne;h.position.set(0,1.28,.5),i.add(h);let u=U(B.sph(.43,22,16),e.fur);if(u.scale.set(1,.95,.95),h.add(u),e.spots){let M=U(B.sph(.17),e.dark);M.scale.set(1,1,.5),M.position.set(.17,.1,.3),h.add(M)}let d=U(B.sph(.22),e.light);d.scale.set(1.1,.8,1),d.position.set(0,-.1,.33),h.add(d);let f=U(B.sph(.075),"#2a1d18");f.position.set(0,-.02,.54),h.add(f);let _=U(B.sph(.08),"#ff7c9c");_.scale.set(1,.4,1.3),_.position.set(0,-.22,.45),h.add(_);let S=[];for(let M of[-1,1]){let y=new Ne;y.position.set(M*.17,.08,.35),y.add(U(B.sph(.08),"#2a1d18",{cast:!1}));let w=new bt(B.sph(.028,8,6),new An({color:"#ffffff"}));w.position.set(.025,.035,.06),y.add(w),h.add(y),S.push(y);let x=U(B.sph(.08),"#ff9fb4",{cast:!1});x.scale.set(1,.6,.4),x.position.set(M*.27,-.08,.28),h.add(x)}let m=[];for(let M of[-1,1]){let y=new Ne;y.position.set(M*.3,.26,-.04),y.rotation.z=M*.35;let w=U(B.sph(.2),e.dark);w.scale.set(.45,1.15,.85),w.position.set(M*.04,-.22,0),y.add(w),h.add(y),m.push(y)}let p=new Ne;i.add(p);let g=new Vt;g.position.set(0,1.02,.42),i.add(g);let E={root:t,body:i,legs:a,tail:o,head:h,eyes:S,ears:m,tongue:_,extras:p,collar:g,t:Math.random()*10,blink:2,key:""};return ep(E,n),E}function ep(n,e){let t=`${e.day>=8}|${e.acc.worn}`;if(n.key===t)return;if(n.key=t,n.extras.clear(),e.day>=8){let r=U(new gn(.33,.055,8,20),"#ff5c5c");r.position.set(0,1.03,.42),r.rotation.x=1.25,n.extras.add(r);let a=U(B.sph(.07),"#ffd23f");a.position.set(0,.86,.6),n.extras.add(a)}let i=n.head;i.children.filter(r=>r.userData.acc).forEach(r=>i.remove(r));let s=(r,a=i)=>{r.userData.acc=!0,a.add(r)};if(e.acc.worn==="lazo"){for(let r of[-1,1]){let a=U(B.cone(.13,.26,10),"#ff79bf");a.rotation.z=r*Math.PI/2,a.position.set(r*.13,.45,0),s(a)}s(oe(U(B.sph(.07),"#e0489a"),0,.45,0))}if(e.acc.worn==="gorro"){let r=U(B.cone(.32,.5,14),"#ff6b6b");r.position.set(0,.55,-.02),s(r);let a=U(new gn(.31,.07,8,18),"#ffffff");a.rotation.x=Math.PI/2,a.position.set(0,.32,-.02),s(a);let o=U(B.sph(.09),"#ffffff");o.position.set(0,.82,-.02),s(o)}if(e.acc.worn==="gafas")for(let r of[-1,1]){let a=U(new gn(.1,.025,6,16),"#222222");a.position.set(r*.17,.08,.42),s(a);let o=U(B.cyl(.09,.09,.02),"#333344");o.rotation.x=Math.PI/2,o.position.set(r*.17,.08,.43),s(o)}if(e.acc.worn==="panuelo"){let r=U(B.cone(.3,.35,3),"#4f7cff");r.rotation.x=Math.PI,r.position.set(0,.9,.5),n.extras.add(r)}}var ni=(n,e,t)=>n+(e-n)*t;function Tr(n,e,t){n.t+=e;let i=n.t,s=1-Math.exp(-12*e),r=t.mode==="walk",a=t.mode==="sleep",o=t.mode==="happy"||t.mode==="spin",c=t.mode==="eat",l=a||t.mode==="lie",h=t.mode==="sit"||t.mode==="paw",u=6+(t.speed||0)*2.4,d=r?Math.sin(i*u)*.75:0,f=l?[-1.35,-1.35,1.35,1.35]:h?[0,t.mode==="paw"?-1.5:0,-1.3,-1.3]:[d,-d,-d,d];n.body.rotation.x=ni(n.body.rotation.x,h?-.42:0,s),n.legs.forEach((g,E)=>{g.rotation.x=ni(g.rotation.x,f[E],s)});let _=l?-.42:h?-.12:r?Math.abs(Math.sin(i*u))*.06:o?Math.abs(Math.sin(i*9))*.4:0;n.body.position.y=ni(n.body.position.y,_,o?1:s);let S=1+Math.sin(i*(a?1.6:2.6))*(a?.035:.015);n.body.scale.set(1,S,1),n.tail.rotation.z=Math.sin(i*(o?24:r?15:a?0:5))*(t.sad?.15:.5),n.tail.rotation.x=ni(n.tail.rotation.x,t.sad||a?.9:-.55,s);let m=c?.55+Math.sin(i*13)*.12:a?.35:t.sad?.25:0;n.head.rotation.x=ni(n.head.rotation.x,m,s),n.head.rotation.z=ni(n.head.rotation.z,r||a?0:Math.sin(i*.8)*.12,s),n.head.position.y=ni(n.head.position.y,l?1.05:1.28,s),n.ears.forEach((g,E)=>{g.rotation.x=r?Math.sin(i*u+E)*.25:o?Math.sin(i*18)*.3:0}),n.tongue.visible=(o||t.mood==="feliz")&&!a,n.blink-=e;let p=1;t.eyesClosed||a?p=.12:n.blink<0&&(p=.12,n.blink<-.13&&(n.blink=2+Math.random()*3)),n.eyes.forEach(g=>{g.scale.y=p})}var iu={"\u{1F9D2}":{skin:"#f0c090",hair:"#6a4020",style:"short",shirt:"#f0a020",pants:"#3858b8"},"\u{1F467}":{skin:"#f0c090",hair:"#8a4a20",style:"pigtails",shirt:"#f070b0",pants:"#7048b0"},"\u{1F466}":{skin:"#d8a070",hair:"#2a1a10",style:"short",shirt:"#40a0e0",pants:"#2c4070"},"\u{1F469}":{skin:"#f0c8a0",hair:"#c07030",style:"long",shirt:"#50b860",pants:"#3858b8"},"\u{1F468}":{skin:"#c88858",hair:"#2a1a10",style:"short",shirt:"#e05040",pants:"#4c4c58"},"\u{1F9D1}":{skin:"#e0b080",hair:"#503020",style:"short",shirt:"#8060d0",pants:"#384050"},"\u{1F475}":{skin:"#f0c8a0",hair:"#d8d8e0",style:"bun",shirt:"#c060a0",pants:"#6c5878"},"\u{1F474}":{skin:"#e0b088",hair:"#d8d8e0",style:"bald",shirt:"#7c9c58",pants:"#5a4838"},"\u{1F9B8}":{skin:"#f0c090",hair:"#2a1a10",style:"short",shirt:"#3060e0",pants:"#3060e0",cape:"#e03030"},"\u{1F9D1}\u200D\u{1F680}":{skin:"#f0c090",hair:"#6a4020",style:"helmet",shirt:"#f0f0f4",pants:"#c8ccd8"}},hy=Object.keys(iu);function uy(n){let e=iu[n]||iu["\u{1F9D2}"],t=new Ne,i=new Ne;t.add(i);let s=[],r=[],a=null;for(let h of[-1,1]){let u=new Ne;u.position.set(h*.13,.72,0),u.add(oe(U(B.cap(.09,.42),e.pants),0,-.3,0)),u.add(oe(U(B.box(.2,.12,.3),"#3a2a2a"),0,-.66,.05)),i.add(u),s.push(u)}if(i.add(oe(U(B.cap(.25,.32),e.shirt),0,1.02,0)),e.cape){let h=U(B.box(.55,.85,.05),e.cape);h.position.set(0,.98,-.27),h.rotation.x=.12,i.add(h)}for(let h of[-1,1]){let u=new Ne;u.position.set(h*.33,1.28,0),u.rotation.z=h*.12,u.add(oe(U(B.cap(.075,.32),e.shirt),0,-.22,0));let d=oe(U(B.sph(.085,10,8),e.skin),0,-.46,0);u.add(d),i.add(u),r.push(u),h>0&&(a=d)}let o=new Ne;o.position.y=1.7,i.add(o),o.add(U(B.sph(.3,20,16),e.skin));for(let h of[-1,1])o.add(oe(U(B.sph(.045,8,6),"#2a1d18",{cast:!1}),h*.1,.03,.27)),o.add(oe(U(B.sph(.05,8,6),"#ff9fb4",{cast:!1}),h*.17,-.06,.24));let c=U(new gn(.07,.018,6,12,Math.PI),"#c0505a",{cast:!1});c.rotation.z=Math.PI,c.position.set(0,-.08,.28),o.add(c);let l=(h=.32)=>U(new Ms(h,18,10,0,Math.PI*2,0,Math.PI/2.1),e.hair);if(e.style==="helmet"){o.add(oe(l(.31),0,.04,-.02)),o.add(new bt(B.sph(.42,20,16),new An({color:"#cfefff",transparent:!0,opacity:.28,depthWrite:!1})));let h=U(new gn(.33,.06,8,20),"#e0e4ee");h.rotation.x=Math.PI/2,h.position.y=-.3,o.add(h)}else if(e.style==="bald")for(let h of[-1,1])o.add(oe(U(B.sph(.12,10,8),e.hair),h*.26,.02,-.06));else{if(o.add(oe(l(),0,.03,-.03)),e.style==="long"&&o.add(oe(U(B.box(.56,.55,.14),e.hair),0,-.2,-.2)),e.style==="pigtails")for(let h of[-1,1])o.add(oe(U(B.sph(.12,10,8),e.hair),h*.33,-.05,-.05));e.style==="bun"&&o.add(oe(U(B.sph(.14,10,8),e.hair),0,.3,-.12))}return t.scale.setScalar(.85),{root:t,body:i,legs:s,arms:r,head:o,hand:a,t:0,mode:"idle",modeT:0,leash:!1}}function nl(n,e,t,i){n.t+=e;let s=n.t,r=1-Math.exp(-12*e);n.modeT>0&&(n.modeT-=e,n.modeT<=0&&(n.mode="idle"));let a=5+i*1.6,o=t?Math.sin(s*a)*.7:0,c=n.mode==="cheer",l=n.mode==="throw";n.legs[0].rotation.x=ni(n.legs[0].rotation.x,o,r),n.legs[1].rotation.x=ni(n.legs[1].rotation.x,-o,r),n.arms[0].rotation.x=ni(n.arms[0].rotation.x,c?-2.8:-o,r),n.arms[1].rotation.x=l?-2.6:ni(n.arms[1].rotation.x,c?-2.8:n.leash?-.55:o,r),n.body.position.y=t?Math.abs(Math.sin(s*a))*.06:c?Math.abs(Math.sin(s*10))*.2:Math.sin(s*2)*.01,n.head.rotation.z=t?0:Math.sin(s*.9)*.06}var qc=16,Cs=new Yi(B.cyl(.03,.03,1,5),wa("#e0403c"),qc);Cs.frustumCulled=!1;Cs.visible=!1;var zc=new N,kc=new N,zh=new N,kh=new N,Hh=new N,Gh=new N,dy=new N(0,1,0),kf=new Vn,Hf=new lt,Gf=new N;function il(n,e){if(Cs.parent!==n&&n.add(Cs),Cs.visible=!!e,!e)return;tt.root.updateMatrixWorld(!0),Ee.root.updateMatrixWorld(!0),tt.hand.getWorldPosition(zc),Ee.collar.getWorldPosition(kc);let t=zc.distanceTo(kc);zh.addVectors(zc,kc).multiplyScalar(.5),zh.y-=Math.max(0,1.9-t)*.35+.05;let i=(s,r)=>r.set(0,0,0).addScaledVector(zc,(1-s)*(1-s)).addScaledVector(zh,2*(1-s)*s).addScaledVector(kc,s*s);for(let s=0;s<qc;s++){i(s/qc,kh),i((s+1)/qc,Hh),Gh.subVectors(Hh,kh);let r=Gh.length()||.001;kf.setFromUnitVectors(dy,Gh.divideScalar(r)),Gf.set(1,r,1),Hf.compose(kh.add(Hh).multiplyScalar(.5),kf,Gf),Cs.setMatrixAt(s,Hf)}Cs.instanceMatrix.needsUpdate=!0}function Sn(n,e){n.parent!==e&&(n.parent&&n.parent.remove(n),e.add(n))}function hu(n){for(;n.children.length;)n.remove(n.children[0])}var $c=[];function Mt(n,e,t,i=5,s=.55){for(let r=0;r<i;r++){let a=Ds(e,s);a.material=a.material.clone(),a.position.set(t.x+(Math.random()-.5)*.8,t.y+Math.random()*.3,t.z+(Math.random()-.5)*.8),n.add(a),$c.push({s:a,scene:n,life:1.2+Math.random()*.4,t:0,vy:.9+Math.random()*.6,vx:(Math.random()-.5)*.6})}}function tp(n){for(let e=$c.length-1;e>=0;e--){let t=$c[e];t.t+=n,t.s.position.y+=t.vy*n,t.s.position.x+=t.vx*n,t.s.material.opacity=1-t.t/t.life,t.t>=t.life&&(t.scene.remove(t.s),t.s.material.dispose(),$c.splice(e,1))}}var Te=new wn,Ea=Er(Te),Dn=[{id:"bosque",icon:"\u{1F332}",name:"Bosque",x:-28,z:-15,cave:!0,ready:!0,minDay:3},{id:"casa",icon:"\u{1F3E0}",name:"Casa",x:-16,z:-15,w:6,d:5,h:3,wall:"#fff1dc",roof:"#ff7b7b",door:"#b0703c",ready:!0},{id:"escuela",icon:"\u{1F393}",name:"Escuela",ready:!0,minDay:8,x:-4,z:-15,w:6,d:5,h:3.3,wall:"#ffe58a",roof:"#6f8cff",door:"#5d78e8"},{id:"tienda",icon:"\u{1F6D2}",name:"Tienda",ready:!0,x:7,z:-15,w:5,d:4,h:2.7,wall:"#ffd6e8",roof:"#ff8fc8",door:"#c0607a",stall:!0},{id:"vet",icon:"\u{1F3E5}",name:"Veterinaria",ready:!0,x:18,z:-15,w:6,d:5,h:3,wall:"#ffffff",roof:"#5fd0c4",door:"#3aa89c"},{id:"parque",icon:"\u{1F333}",name:"Parque",x:-4,z:5,park:!0,ready:!0,minDay:3},{id:"lago",icon:"\u{1F986}",name:"Lago",x:17,z:7,lake:!0,ready:!0}],xi={boxes:[],circles:[]},Oe={x0:-34,x1:28,z0:-24,z1:16},us=[];function fy(){Te.background=new Xe("#bfe6ff"),Te.fog=new qi("#bfe6ff",45,95);let n=U(new Rn(160,120),"#8fd46e",{cast:!1,recv:!0});n.rotation.x=-Math.PI/2,Te.add(n);let e=ls(424242);for(let u=0;u<40;u++){let d=U(B.cyl(1+e()*2.5,1+e()*2.5,.02,20),e()<.5?"#84cc63":"#9ade7a",{cast:!1,recv:!0});d.position.set(-40+e()*80,.01,-30+e()*55),Te.add(d)}let t=[[-31,-9,26,-9],[-28,-12.5,-28,-9],[-16,-12,-16,-9],[-4,-12,-4,-9],[7,-12.5,7,-9],[18,-12,18,-9],[-4,-9,-4,-.5],[10.5,-9,10.5,7]],i=[];for(let[u,d,f,_]of t){let S=Math.abs(f-u)+2.4,m=Math.abs(_-d)+2.4,p=U(B.box(S,.06,m),"#f2d39a",{cast:!1,recv:!0});p.position.set((u+f)/2,.03,(d+_)/2),Te.add(p),i.push([Math.min(u,f)-1.5,Math.min(d,_)-1.5,Math.max(u,f)+1.5,Math.max(d,_)+1.5])}let s=(u,d)=>i.some(([f,_,S,m])=>u>f&&u<S&&d>_&&d<m);for(let u of Dn)u.w&&xy(u),u.cave&&_y(u),u.park&&yy(u),u.lake&&vy(u);let r=(u,d,f,_,S)=>(u-f)**2+(d-_)**2<S*S;for(let u=0;u<260;u++){let d=Oe.x0-4+e()*(Oe.x1-Oe.x0+8),f=Oe.z0-4+e()*(Oe.z1-Oe.z0+8),_=d<Oe.x0+1||d>Oe.x1-1||f<Oe.z0+1||f>Oe.z1-1,S=d<-21&&f<-17.5;!_&&!S&&e()>.32||s(d,f)||Dn.some(m=>m.w&&Math.abs(d-m.x)<m.w/2+2&&Math.abs(f-m.z)<m.d/2+2)||r(d,f,-4,5,8)||r(d,f,17,7,7.5)||r(d,f,-28,-15,4)||r(d,f,-16,-9,3)||xi.circles.some(m=>r(d,f,m.x,m.z,1.6))||py(d,f,S||e()<.35,.8+e()*.5)}let a=vr?160:420,o=new Yi(B.sph(.12,6,5),new Ki({gradientMap:Ls}),a),c=["#ff6b8b","#ffd23f","#ffffff","#b98cff","#ff9f43"].map(u=>new Xe(u)),l=new lt,h=0;for(let u=0;u<2e3&&h<a;u++){let d=Oe.x0+e()*(Oe.x1-Oe.x0),f=Oe.z0+e()*(Oe.z1-Oe.z0);s(d,f)||Dn.some(_=>_.w&&Math.abs(d-_.x)<_.w/2+.8&&Math.abs(f-_.z)<_.d/2+.8)||r(d,f,17,7,5.2)||(l.makeTranslation(d,.12,f),o.setMatrixAt(h,l),o.setColorAt(h,c[Math.floor(e()*c.length)]),h++)}o.count=h,Te.add(o);for(let u=0;u<9;u++){let d=new Ne;for(let f=0;f<4;f++){let _=U(B.sph(1.2+e(),12,10),"#ffffff",{cast:!1});_.position.set(f*1.3,e()*.6,e()),d.add(_)}d.position.set(-40+e()*80,14+e()*5,-40+e()*30),d.userData.v=.3+e()*.4,Te.add(d),np.push(d)}}var np=[];function py(n,e,t,i){let s=du(t);s.position.set(n,0,e),s.scale.setScalar(i),s.rotation.y=Math.random()*6,Te.add(s),xi.circles.push({x:n,z:e,r:.55*i,tree:!0}),s.traverse(r=>{r.isMesh&&(r.userData.solidMat=r.material)}),uu.push({g:s,x:n,z:e,s:i,top:(t?3.4:2.9)*i,faded:!1})}var uu=[],Vh=new Map;function my(n){if(!Vh.has(n)){let e=n.clone();e.transparent=!0,e.opacity=.28,e.depthWrite=!1,Vh.set(n,e)}return Vh.get(n)}function gy(){let n=mt.position.x,e=mt.position.y,t=mt.position.z,i=te.x,s=te.z,r=1,a=n-i,o=t-s,c=a*a+o*o||1;for(let l of uu){let h=!1;if(l.z>s-.5){let u=((l.x-i)*a+(l.z-s)*o)/c;if(u>0&&u<1){let d=i+a*u,f=s+o*u,_=r+(e-r)*u;h=Math.hypot(l.x-d,l.z-f)<1.3*l.s+.4&&_<l.top+.5}}h!==l.faded&&(l.faded=h,l.g.traverse(u=>{u.isMesh&&(u.material=h?my(u.userData.solidMat):u.userData.solidMat,u.castShadow=!h)}))}}function du(n){let e=new Ne;if(e.add(oe(U(B.cyl(.18,.24,1,8),"#9a6236"),0,.5,0)),n)for(let t=0;t<3;t++){let i=U(B.cone(1.1-t*.28,1.3,9),t%2?"#3f9a5a":"#2f8a4e");i.position.y=1.3+t*.75,e.add(i)}else{for(let[t,i,s,r]of[[0,1.9,0,.95],[.5,1.6,.2,.65],[-.5,1.7,-.1,.7]]){let a=U(B.sph(r,14,10),"#5cbf5a");a.position.set(t,i,s),e.add(a)}if(Math.random()<.4)for(let t=0;t<3;t++){let i=U(B.sph(.11,8,6),"#ff5c5c");i.position.set(Math.cos(t*2)*.8,1.6+t*.2,Math.sin(t*2)*.8),e.add(i)}}return e}function Mr(n,e=1.6){let t=new Ne;t.add(U(B.box(e,e*.8,.12),"#ffffff"));let i=new bt(new Rn(e*.85,e*.7),new An({map:hs(n),transparent:!0}));return i.position.z=.07,t.add(i),t}function xy(n){let e=new Ne,{w:t,d:i,h:s}=n;if(n.stall){e.add(oe(U(B.box(t,s*.55,i),n.wall,{recv:!0}),0,s*.275,0));for(let a of[-1,1])e.add(oe(U(B.cyl(.12,.12,s+.6,8),"#ffffff"),a*(t/2-.2),(s+.6)/2,i/2-.2));for(let a=0;a<6;a++){let o=U(B.box(t/6,.15,i+.6),a%2?"#ffffff":"#ff6b8b");o.position.set(-t/2+t/12+a*t/6,s+.5,.2),o.rotation.x=-.25,e.add(o)}for(let a=0;a<5;a++){let o=U(B.sph(.22,10,8),["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][a]);o.position.set(-t/2+.7+a*(t-1.4)/4,s*.55+.22,i/2-.4),e.add(o)}}else{e.add(oe(U(B.box(t,s,i),n.wall,{recv:!0}),0,s/2,0));let a=U(B.cone(Math.max(t,i)*.78,2.2,4),n.roof);a.rotation.y=Math.PI/4,a.scale.set(1,1,i/t),a.position.y=s+1.1,e.add(a);let o=U(B.box(1.2,1.9,.12),n.door);o.position.set(0,.95,i/2+.03),e.add(o);let c=U(B.sph(.07),"#ffd23f");c.position.set(.4,.95,i/2+.12),e.add(c);for(let l of[-1,1]){let h=U(B.box(1,.9,.1),"#bfe9ff",{extra:{emissive:"#000000"}});h.position.set(l*(t/2-1.1),s*.6,i/2+.03),e.add(h),n.wins=(n.wins||[]).concat(h);let u=U(B.box(1.15,.12,.14),"#ffffff");u.position.set(l*(t/2-1.1),s*.6-.5,i/2+.06),e.add(u)}if(n.id==="casa"){let l=U(B.box(.6,1.2,.6),"#c0605a");l.position.set(t/2-1.2,s+1.4,-.6),e.add(l)}if(n.id==="vet"){let l=new Ne;l.add(U(B.box(.3,.9,.1),"#ff5c5c")),l.add(U(B.box(.9,.3,.1),"#ff5c5c")),l.position.set(0,s+.4,i/2+.1),e.add(l)}if(n.id==="escuela"){let l=U(B.cyl(.05,.05,2.5,6),"#888888");l.position.set(t/2-.3,s+1.2,i/2-.3),e.add(l);let h=U(B.box(.9,.5,.05),"#ff6b6b");h.position.set(t/2+.15,s+2.2,i/2-.3),e.add(h),n.flag=h}}let r=Mr(n.icon);r.position.set(n.stall?0:-t/2+.9,n.stall?s+1.4:2.2,i/2+.1),n.stall||(r.position.x=-t/2+.9),e.add(r),e.position.set(n.x,0,n.z),Te.add(e),xi.boxes.push({x0:n.x-t/2-.2,x1:n.x+t/2+.2,z0:n.z-i/2-.2,z1:n.z+i/2+.2}),sl(n,n.x,n.z+i/2+1.4,s+2.8)}function _y(n){let e=new Ne,t=ls(99);for(let r=0;r<14;r++){let a=Math.PI*(r/13),o=U(new ta(.9+t()*.5),r%2?"#9aa0b0":"#b4b9c6");o.position.set(Math.cos(a)*2.6,Math.sin(a)*2.6,0),o.rotation.set(t()*3,t()*3,0),e.add(o)}let i=U(new vs(2,24,0,Math.PI),"#1a1420",{cast:!1});i.position.z=.1,e.add(i);let s=Mr("\u{1F332}",1.4);s.position.set(3.4,1,.6),e.add(s),e.position.set(n.x,0,n.z),Te.add(e),xi.boxes.push({x0:n.x-3.6,x1:n.x+3.6,z0:n.z-1.6,z1:n.z+1}),sl(n,n.x,n.z+2.6,4.6)}var yt=null;function yy(n){let e=new Ne;e.add(U(B.cyl(1.6,1.8,.6,24),"#dfe3ee",{recv:!0}));let t=U(B.cyl(1.35,1.35,.1,24),"#6cc8ff",{cast:!1});t.position.y=.32,e.add(t),e.add(oe(U(B.cyl(.25,.35,1.6,12),"#cfd3de"),0,.8,0));let i=U(B.sph(.5,14,10),"#6cc8ff");i.position.y=1.7,e.add(i),e.position.set(n.x,0,n.z),Te.add(e),xi.circles.push({x:n.x,z:n.z,r:1.9});for(let[r,a,o]of[[-4,1,1.57],[4,1,-1.57],[0,4.5,3.14]]){let c=new Ne;c.add(oe(U(B.box(2,.15,.6),"#d79b5f"),0,.5,0)),c.add(oe(U(B.box(2,.5,.12),"#d79b5f"),0,.85,-.25));for(let l of[-.8,.8])c.add(oe(U(B.box(.12,.5,.5),"#777777"),l,.25,0));c.position.set(n.x+r,0,n.z+a),c.rotation.y=o,Te.add(c)}yt={m:U(B.sph(.35,18,14),"#ffd23f"),v:new N,pushes:0,cd:0};let s=U(new gn(.35,.05,6,20),"#ff6b8b");yt.m.add(s),yt.m.position.set(n.x+2.5,.35,n.z-3),Te.add(yt.m),sl(n,n.x,n.z-2.6,3.2)}var Aa=[];function vy(n){let e=U(B.cyl(5.4,5.4,.05,40),"#f6e3a8",{cast:!1,recv:!0});e.position.set(n.x,.03,n.z),Te.add(e);let t=U(B.cyl(4.6,4.6,.08,40),"#5ec2f5",{cast:!1,recv:!0});t.position.set(n.x,.07,n.z),Te.add(t);let i=U(B.box(3.4,.15,1.4),"#c98c55",{recv:!0});i.position.set(n.x-4.3,.2,n.z),Te.add(i),xi.circles.push({x:n.x+.6,z:n.z,r:4.1});for(let s=0;s<3;s++){let r=new Ne;{let a=U(B.sph(.3),"#ffe066");a.scale.set(1,.7,1.3),r.add(a)}r.add(oe(U(B.sph(.18),"#ffe066"),0,.3,.3));{let a=oe(U(B.cone(.07,.18,6),"#ff9f43"),0,.28,.5);a.rotation.x=Math.PI/2,r.add(a)}r.userData={a:s*2.1,r:1.5+s*.9},Te.add(r),Aa.push(r)}Aa.forEach(s=>{s.userData.cx=n.x+.8,s.userData.cz=n.z}),sl(n,n.x-5.4,n.z,2.4)}function sl(n,e,t,i){let s=Ds("\u2B50",1.5,!0);s.position.set(e,i,n.w?n.z:t),s.visible=!1,Te.add(s),us.push({pl:n,x:e,z:t,mk:s,baseY:i,emoji:""})}var qn=[];function fu(){let n=new Ne,e=U(B.cyl(.09,.09,.6,8),"#fff6e0");e.rotation.z=Math.PI/2,n.add(e);for(let t of[-.32,.32])for(let i of[-.09,.09]){let s=U(B.sph(.12,10,8),"#fff6e0");s.position.set(t,0,i),n.add(s)}return n}function ip(n){qn.forEach(i=>Te.remove(i.m)),qn.length=0,n.mapBones.day!==n.day&&(n.mapBones={day:n.day,taken:[]});let e=ls(n.bornAt%1e5+n.day*7919+3),t=0;for(let i=0;i<8&&t<3e3;t++){let s=Oe.x0+2+e()*(Oe.x1-Oe.x0-4),r=Oe.z0+2+e()*(Oe.z1-Oe.z0-4);if(!Oi(s,r,.8)){if(!n.mapBones.taken.includes(i)){let a=fu();a.position.set(s,.45,r),Te.add(a),qn.push({m:a,i})}i++}}if(Mn=null,n.day>=2&&!(n.treasure&&n.treasure.day===n.day)){let i=ls(n.bornAt%99991+n.day*104729);for(let s=0;s<800;s++){let r=Oe.x0+2+i()*(Oe.x1-Oe.x0-4),a=Oe.z0+2+i()*(Oe.z1-Oe.z0-4);if(!(Oi(r,a,1)||Math.hypot(r+16,a+9)<8)){Mn={x:r,z:a};break}}}}var Mn=null;function Oi(n,e,t){return n<Oe.x0||n>Oe.x1||e<Oe.z0||e>Oe.z1||xi.boxes.some(i=>n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)?!0:Math.abs(e-7)<.7&&n>11&&n<15?!1:xi.circles.some(i=>(n-i.x)**2+(e-i.z)**2<(i.r+t)**2)}var vt=new wn,Vf=Er(vt),Yc={},Wh=[];function My(){vt.background=new Xe("#ffe9f4"),Vf.sun.position.set(4,10,6),Vf.sun.target.position.set(0,0,0);let n=U(B.box(12,.2,9),"#e7b98a",{cast:!1,recv:!0});n.position.y=-.1,vt.add(n);for(let S=-5;S<=5;S+=1){let m=U(B.box(.03,.01,9),"#d4a274",{cast:!1});m.position.set(S,.005,0),vt.add(m)}let e=U(B.box(12,5,.2),"#ffd1e6",{recv:!0});e.position.set(0,2.5,-4.5),vt.add(e);let t=U(B.box(.2,5,9),"#c8f1e4",{recv:!0});t.position.set(-6,2.5,0),vt.add(t);let i=U(B.box(2.6,1.8,.1),"#ffffff");i.position.set(2,2.9,-4.38),vt.add(i);let s=U(B.box(2.3,1.5,.1),"#9fdcff",{cast:!1});s.position.set(2,2.9,-4.32),vt.add(s);let r=Mr("\u{1F43E}",1.2);r.position.set(-2.5,3,-4.35),vt.add(r);let a=U(B.cyl(2.2,2.2,.04,32),"#ffb3d1",{cast:!1,recv:!0});a.position.set(0,.02,.5),vt.add(a);let o=new Ne;o.add(oe(U(B.cyl(1.2,1.3,.35,24),"#8f6fd8",{recv:!0}),0,.18,0)),o.add(oe(U(B.cyl(1,1,.1,24),"#ffe8f4",{recv:!0}),0,.36,0));let c=U(new gn(1.15,.22,10,26),"#a78bfa");c.rotation.x=Math.PI/2,c.position.y=.4,o.add(c),o.position.set(-3.6,0,-2.6),vt.add(o);let l=(S,m,p)=>{let g=new Ne;g.add(oe(U(B.cyl(.45,.35,.25,20),S),0,.13,0));let E=U(B.cyl(.36,.36,.05,20),p,{cast:!1});return E.position.y=.24,g.add(E),g.userData.fill=E,g.position.set(m,0,-3),vt.add(g),g};Yc.food=l("#ff7b7b",.6,"#b0703c"),Yc.water=l("#6f8cff",2,"#7fd6ff");let h=U(B.box(1.4,.8,1),"#ffd23f");h.position.set(4.3,.4,-3),vt.add(h);let u=U(B.sph(.28),"#6fc2ff");u.position.set(4,.95,-3),vt.add(u);let d=U(B.box(.3,.3,.3),"#ff8fc8");d.position.set(4.6,.95,-2.9),vt.add(d);let f=new Ne;f.add(oe(U(B.box(2.2,.8,1.4),"#ffffff"),0,.45,0)),f.add(oe(U(B.box(1.9,.1,1.1),"#bfe9ff",{cast:!1}),0,.82,0));for(let S of[-.9,.9])for(let m of[-.5,.5])f.add(oe(U(B.sph(.12),"#ffd23f"),S,.06,m));f.position.set(-4.3,0,1.6),vt.add(f),Yc.tub=f;let _=U(B.cyl(.35,.28,.6,14),"#ff9f43");_.position.set(5.2,.3,.8),vt.add(_);for(let S=0;S<3;S++){let m=U(B.sph(.35,10,8),"#5cbf5a");m.position.set(5.2+Math.cos(S*2)*.2,.9+S*.15,.8+Math.sin(S*2)*.2),vt.add(m)}}var Kc={food:[.6,-2,Math.PI],water:[2,-2,Math.PI],bed:[-3.6,-2.6,.6],tub:[-4.3,1.6,.8],center:[0,.6,.3],toys:[3.6,-2.2,Math.PI*.8]};function jc(n){Wh.forEach(t=>vt.remove(t)),Wh=[];let e=[[2.6,1.6],[-1.4,2.4],[3.6,2.6]];for(let t=0;t<Math.min(n.mess,3);t++){let i=Ds("\u{1F4A9}",.8);i.position.set(e[t][0],.4,e[t][1]),vt.add(i),Wh.push(i)}}var kt=Te,Ee=null,D={x:-16,z:-9,ry:0,speed:0,mode:"idle",modeT:0,path:null},be="town",Pt=!1,Hc=0,Ue={up:0,down:0,left:0,right:0,a:!1,jx:0,jz:0},tt=null,te={x:-16,z:-8.6,ry:0},ii=[];function Pa(n,e,t=0){te.x=n,te.z=e,te.ry=t,D.x=n-Math.sin(t)*1.3,D.z=e-Math.cos(t)*1.3,D.ry=t,D.path=null,ii=[{x:D.x,z:D.z},{x:n,z:e}]}function sp(n,e,t=0){te.x=n,te.z=e,te.ry=t,ii=[{x:D.x,z:D.z},{x:n,z:e}]}var pu=()=>!!Ee&&!!tt&&Ee.root.parent===tt.root.parent;function Sy(n,e,t){let i=ii[ii.length-1];(!i||Math.hypot(te.x-i.x,te.z-i.z)>=.05)&&ii.push({x:te.x,z:te.z}),ii.length>300&&ii.shift();let s=1.15+t*.12,r=te.x,a=te.z,o=r,c=a;for(let f=ii.length-1;f>=0;f--){let _=ii[f],S=Math.hypot(r-_.x,a-_.z);if(S>=s){let m=s/S;o=r+(_.x-r)*m,c=a+(_.z-a)*m,s=0;break}s-=S,r=_.x,a=_.z,o=r,c=a}let l=o-D.x,h=c-D.z,u=Math.hypot(l,h);if(u<.03)return null;let d=Math.min(u,e*n*(u>1.5?1.7:1));return D.x+=l/u*d,D.z+=h/u*d,{dx:l/u,dz:h/u,sp:d/n}}function rl(n){We=n,Fe.root.activeId=n.id;let e=n.pet;simulate(e,now(e)),Ee&&Ee.root.parent&&Ee.root.parent.remove(Ee.root),Ee=Qf(e),tt&&tt.root.parent&&tt.root.parent.remove(tt.root),tt=uy(n.avatar),Pa(-16,-8.6,0),kt=Te,be="town",Te.add(Ee.root,tt.root),ip(e),saveRoot(),ge("#picker").hidden=!0,ge("#hud").hidden=!1,Dt(),rp(e),speak(`\xA1Hola ${n.name}! \xA1Vamos a pasear!`),setTimeout(()=>dogSound("happy",stageOf(e.day).size),2200)}function rp(n){let e=new Date(now(n)).getHours(),t=e<7||e>=20,i=e>=18&&!t;Lp=t;let s=t?"#2d3466":i?"#ffc7a8":"#bfe6ff";Te.background.set(s),Te.fog.color.set(s),Ea.hemi.intensity=t?.7:1.7,Ea.sun.intensity=t?.5:i?1.6:2.3,Ea.sun.color.set(t?"#9fb0ff":i?"#ffc08a":"#fff4e0");for(let r of Dn)for(let a of r.wins||[])a.material=wa("#bfe9ff",{emissive:t?"#ffd27a":"#000000"})}var by={feliz:"\u{1F604}",normal:"\u{1F642}",triste:"\u{1F622}",enferma:"\u{1F912}",dormida:"\u{1F634}"};function Dt(){if(!We)return;let n=We.pet,e=STAT_INFO.map(t=>{let i=Math.round(n.stats[t.key]);return`<div class="hb ${i<25?"low":""}" title="${t.label}"><span>${t.icon}</span><i><b style="width:${i}%;background:${t.color}"></b></i></div>`}).join("");ge("#hud").innerHTML=`<div class="hud-left"><a class="hbtn" href="../index.html" aria-label="Volver al juego 2D">\u{1F579}\uFE0F</a><span class="face">${by[moodOf(n)]}</span></div>
    <div class="hud-bars">${e}</div><div class="hud-right"><span class="chip">\u{1F9B4} ${n.bones}</span><span class="chip">${al[stageOf(n.day).id]} ${n.day}</span><button class="hbtn" id="diary3" aria-label="Diario">\u{1F4D6}</button><button class="hbtn" id="music" aria-label="M\xFAsica">${Music.isOn()?"\u{1F3B5}":"\u{1F515}"}</button><button class="hbtn" id="mute" aria-label="Sonido">${gr?"\u{1F507}":"\u{1F50A}"}</button></div>`,Un()}var al={recien:"\u{1F423}",bebe:"\u{1F37C}",cachorra:"\u{1F436}",joven:"\u{1F415}",adulta:"\u{1F382}"},cn=null;function Ey(){let n=ge("#prompt"),e=We.pet,t="";be==="town"&&(e.asleep&&Sp()?t='<button class="go-btn" data-act="wake" aria-label="Despertar">\u{1F4A4} \u279C \u23F0</button>':cn&&(t=e.day<(cn.pl.minDay||1)?`<button class="go-btn locked" data-act="enter" aria-label="${cn.pl.name}: cerrado">\u{1F512} ${cn.pl.icon} <small>\u23F3${cn.pl.minDay-e.day}</small></button>`:`<button class="go-btn" data-act="enter" aria-label="Entrar a ${cn.pl.name}">\u24B6 ${cn.pl.icon}</button>`)),n.__h!==t&&(n.innerHTML=t,n.__h=t),n.hidden=!t}function Is(){if(be!=="home")return;let n=We.pet,e=n.stats,t=n.day,i=today(n),s=foodFor(t),r=(c,l)=>c?l:"",a=n.asleep?"\u{1F4A4}":"",o=[["eat",s.icon,"Comer",a||r(e.saciedad>=90,"\u{1F60B}")],t>=4?["water","\u{1F4A7}","Agua",a||r(e.hidratacion>=92,"\u{1F4A7}")]:null,["pet","\u{1F917}","Mimos",""],["memory","\u{1F0CF}","Memoria",""],n.items.mordedor&&t>=3?["toy","\u{1F9F8}","Jugar",a||r(e.energia<15,"\u{1F634}")]:null,n.asleep?["wake","\u23F0","Despertar",""]:["sleep","\u{1F6CF}\uFE0F","Dormir",""],["nap","\u{1F634}","Siesta",a||r(i.naps>=3,"\u23F3")||r(e.energia>=90,"\u26A1")],t<8?["wipe","\u{1F9FD}","Limpiar",a]:["bath","\u{1F6C1}","Ba\xF1o",a||r(n.lastDone.bano&&t-n.lastDone.bano<3,"\u23F3")],t>=3?["brush","\u{1F58C}\uFE0F","Cepillar",a]:null,n.mess?["clean","\u{1F9FB}","Recoger",""]:null,t>=3?["potty","\u{1F9FB}","Papel",a||r(n.potty>=100,"\u2714")||r((i.potty||0)>=3,"\u23F3")]:null,["ropa","\u{1F380}","Ropa",n.acc.owned.length?"":"\u{1F6D2}"],["exit","\u{1F6AA}","Salir",""],["help","\u2753","Ayuda",""]].filter(Boolean);ge("#actions").innerHTML=o.map(([c,l,h,u])=>`<button class="opt ${u?"off":""}" data-act="${c}" data-say="${h}" ${u?'aria-disabled="true"':""} aria-label="${h}"><span class="oi">${l}</span><span class="on">${h}</span>${u?`<span class="badge">${u}</span>`:""}</button>`).join(""),typeof Un=="function"&&setTimeout(Un,0)}function Zc(n){let e=today(We.pet);n==="meal"&&e.meals++,n==="water"&&e.water++,n==="play"&&e.play++,n==="care"&&e.care++}function La(n){let e=We.pet;if(Pt&&n!=="exit")return;n!=="exit"&&setTimeout(()=>_i("do:"+n),0);let t=foodFor(e.day),i=(s,r,a,o,c,l,h,u,d,f)=>{Pt=!0,Fi(Kc[s],()=>{D.mode=r,D.modeT=a,s==="food"&&(Yc.food.userData.fill.visible=!0),speak(h),Nt("pop");let _=performance.now(),S=setInterval(()=>{Mt(vt,u,new N(D.x,1.6*Ee.root.scale.x+.3,D.z),1,.45),performance.now()-_>a*1e3&&clearInterval(S)},350);setTimeout(()=>{applyFx(e,o),Zc(c),addEvent(e,l,d),f&&f();let m=Object.entries(o).filter(([,p])=>p>0).map(([p])=>STAT_ICON[p]).join("");Lt(l,m?"+"+m:""),D.mode=r==="sleep"?"sleep":"happy",D.modeT=r==="sleep"?0:1,r!=="sleep"&&dogSound("happy",gt(),.7),Pt=!1,saveRoot(),Dt(),Is(),jc(e),Un()},a*1e3)})};switch(n){case"eat":return i("food","eat",2.2,t.fx,"meal",t.icon,"\xA1\xD1am \xF1am!","\u{1F356}",t.msg);case"water":return i("water","eat",1.8,{hidratacion:40},"water","\u{1F4A7}","\xA1Glu glu!","\u{1F4A7}","Luna bebi\xF3 agua fresca.");case"pet":D.mode="happy",D.modeT=1.4,Mt(vt,"\u{1F496}",new N(D.x,1.4,D.z),6),applyFx(e,e.asleep?{felicidad:4}:{felicidad:12,energia:-2}),Zc("play"),addEvent(e,"\u{1F917}","Mimos y caricias."),Lt("\u{1F917}","+\u{1F496}"),speak("\xA1Te quiero!"),setTimeout(()=>dogSound("happy",gt()),600),saveRoot(),Dt();return;case"toy":return i("toys","happy",2,{felicidad:18,energia:-8},"play","\u{1F9F8}","\xA1A jugar!","\u2B50","Jug\xF3 con el mordedor.");case"sleep":Pt=!0,Fi(Kc.bed,()=>{e.asleep=!0,D.mode="sleep",addEvent(e,"\u{1F6CF}\uFE0F","Se fue a dormir a su camita."),Lt("\u{1F6CF}\uFE0F","\u{1F4A4}"),speak("Buenas noches, Luna"),Pt=!1,saveRoot(),Dt(),Is()});return;case"wake":e.asleep=!1,e.stats.energia<60&&(e.stats.felicidad=clamp(e.stats.felicidad-6,0,100)),D.mode="idle",addEvent(e,"\u23F0","Despertaste a Luna."),Lt("\u23F0"),speak("\xA1Buenos d\xEDas!"),saveRoot(),Dt(),Is();return;case"nap":return i("bed","sleep",2.5,{energia:25},null,"\u{1F634}","Siestita","\u{1F4A4}","Durmi\xF3 una siesta cortita.",()=>{today(e).naps++,D.mode="idle"});case"wipe":return i("center","happy",1.6,{higiene:20},"care","\u{1F9FD}","\xA1Limpita!","\u{1FAE7}","La limpiaste con un pa\xF1o tibio.");case"bath":return i("tub","happy",2.6,{higiene:60,felicidad:e.items.champu>0?8:-3},"care","\u{1F6C1}","\xA1Al agua!","\u{1FAE7}","Se dio un ba\xF1o.",()=>{e.lastDone.bano=e.day,e.items.champu>0&&e.items.champu--});case"brush":return i("center","happy",1.6,{higiene:10,felicidad:5},"care","\u{1F58C}\uFE0F","\xA1Qu\xE9 suave!","\u2728","Le cepillaste el pelo.");case"clean":e.mess=0,Zc("care"),addEvent(e,"\u{1F9FB}","Limpiaste los accidentes."),Mt(vt,"\u2728",new N(1.5,.6,2),6),Lt("\u{1F9FB}","\u2714"),speak("\xA1Todo limpio!"),jc(e),saveRoot(),Is();return;case"potty":{if(e.asleep||e.potty>=100||(today(e).potty||0)>=3)return;today(e).potty=(today(e).potty||0)+1;let s=8+Math.round(Math.random()*6);e.potty=Math.min(100,e.potty+s),today(e).train++,D.mode="sit",D.modeT=1.2,Lt("\u{1F9FB}",`+${s}%`),speak("\xA1Muy bien, en el papel!"),addEvent(e,"\u{1F393}",`Practicaron usar el papel (${e.potty}%).`),e.potty>=100&&addMilestone(e,"potty","\u{1F3C6}","Luna aprendi\xF3 a hacer sus necesidades en su lugar."),saveRoot(),Is();return}case"ropa":{let s=[null,...e.acc.owned];e.acc.worn=s[(s.indexOf(e.acc.worn)+1)%s.length],D.mode="happy",D.modeT=1,Lt(e.acc.worn?SHOP.find(r=>r.id===e.acc.worn).icon:"\u{1F6AB}"),speak(e.acc.worn?"\xA1Qu\xE9 guapa!":""),saveRoot();return}case"exit":return Ay();case"memory":return _v()}}var ap=!1;function op(){ap=!0,be="park",speak("Parque"),dogSound("bark",gt(),.6),cp(),ge("#actions").hidden=!1,ge("#prompt").hidden=!0,_i("open:parque")}function xr(){ap=!1,be="town",Pt=!1,D.path=null,ge("#actions").hidden=!0}function cp(){if(be!=="park")return;let n=We.pet,e=n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":"",t=[["agility","\u{1F3C3}","Carrera",e],["hide","\u{1F648}","Escondite",n.day<5?"\u{1F512}":e],["stroll","\u{1F6B6}","Pasear",e],["kick","\u26BD","Pelota",e],["bench","\u{1FA91}","Descansar",n.asleep?"\u{1F4A4}":n.stats.energia>=95?"\u26A1":""],["closepark","\u{1F6AA}","Salir",""],["help","\u2753","Ayuda",""]];ge("#actions").innerHTML=t.map(([i,s,r,a])=>`<button class="opt ${a?"off":""}" data-act="${i}" data-say="${r}" ${a?'aria-disabled="true"':""} aria-label="${r}"><span class="oi">${s}</span><span class="on">${r}</span>${a?`<span class="badge">${a}</span>`:""}</button>`).join("")}function Ty(n){let e=We.pet,t=Dn.find(s=>s.id==="parque");if(n==="closepark")return xr();if(Pt)return;if(n==="agility")return xr(),uv();if(n==="hide")return xr(),Ap();let i=(s,r,a,o)=>{applyFx(e,s),today(e).play+=r==="\u{1FA91}"?0:1,addEvent(e,r,a);let c=Object.entries(s).filter(([,l])=>l>0).map(([l])=>STAT_ICON[l]).join("");Lt(r,c?"+"+c:""),speak(o),dogSound("happy",gt(),.7),D.mode="happy",D.modeT=1,Pt=!1,outdoorRisk(e),saveRoot(),Dt(),cp()};if(Pt=!0,n==="stroll"){let s=[0,1,2,3,4].map(a=>[t.x+Math.cos(a*Math.PI/2)*3.2,t.z+Math.sin(a*Math.PI/2)*3.2]),r=()=>{let a=s.shift();if(!a)return today(e).walk=1,i({felicidad:15,energia:-10,hidratacion:-5},"\u{1F6B6}","Paseo alrededor de la fuente.","\xA1Qu\xE9 lindo paseo!");Fi([a[0],a[1],0],r)};r()}else if(n==="kick"){let s=yt.m.position;Fi([s.x-.9,s.z,Math.PI/2],()=>{yt.v.set(6+Math.random()*3,0,(Math.random()-.5)*6),Nt("pop"),dogSound("bark",gt()),D.mode="happy",D.modeT=1.5,setTimeout(()=>i({felicidad:16,energia:-9},"\u26BD","Jug\xF3 con la pelota en el parque.","\xA1Gol!"),1500)})}else n==="bench"&&Fi([t.x-3.2,t.z+1,Math.PI/2],()=>{D.mode="sleep",setTimeout(()=>i({energia:10},"\u{1FA91}","Descansaron en la banca.","Descansito"),1800)})}function Fi(n,e){D.path={x:n[0],z:n[1],ry:n[2],done:e}}function si(n){let e=ge("#fade");e.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>e.classList.remove("on"),60)},380)}function wy(){si(lp)}function lp(){Sn(Ee.root,vt),Sn(tt.root,vt),kt=vt,be="home",D.x=0,D.z=2.8,D.ry=Math.PI,D.path=null,te.x=2.4,te.z=3.4,te.ry=Math.PI,We.pet.asleep&&(D.x=Kc.bed[0],D.z=Kc.bed[1]),jc(We.pet),Is(),ge("#actions").hidden=!1,ge("#prompt").hidden=!0,speak("Casa"),setTimeout(()=>dogSound("bark",gt(),.6),600),_i("open:casa")}function Ay(){Pt=!1,si(()=>{let n=We.pet.asleep,e=D.x,t=D.z,i=D.ry;n||Sn(Ee.root,Te),Sn(tt.root,Te),kt=Te,be="town",Pa(-16,-9.4,0),n&&(D.x=e,D.z=t,D.ry=i,speak("Luna se queda durmiendo en su camita. \xA1Mientras, puedes pasear!")),ge("#actions").hidden=!0,_i("close:casa")})}function Da(n){n=[["help","\u2753","Ayuda",""]].concat(n),ge("#actions").innerHTML=n.filter(Boolean).map(([e,t,i,s,r])=>`<button class="opt ${s?"off":""}" data-act="${e}" data-say="${i}" ${s?'aria-disabled="true"':""} aria-label="${i}"><span class="oi">${t}</span><span class="on">${i}</span>${r?`<span class="ofx">${r}</span>`:""}${s?`<span class="badge">${s}</span>`:""}</button>`).join(""),typeof Un=="function"&&setTimeout(Un,0)}function Na(n){let e=ge("#roominfo");e.innerHTML=n||"",e.hidden=!n}var su=null;function Xn(n,e){ge("#card3-box").innerHTML=`${n}<div class="row-btns"><button class="go" data-card="ok" aria-label="Continuar">\u25B6</button></div>`,ge("#card3").hidden=!1,su=e||null}function mu(){if(ge("#card3").hidden)return;ge("#card3").hidden=!0;let n=su;su=null,n&&n()}var hp=n=>"\u2605".repeat(Math.round(n/20))+"\u2606".repeat(5-Math.round(n/20)),gu=n=>n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":n.stats.saciedad<10?"\u{1F356}":"";function xu({coat:n="#ffffff",skin:e="#f2c9a0",hair:t="#6b4a2b",extra:i=null}){let s=new Ne;for(let c of[-.18,.18])s.add(oe(U(B.cyl(.11,.11,.8,8),"#4a4a6a"),c,.4,0));s.add(oe(U(B.cap(.38,.6),n),0,1.25,0));let r=oe(U(B.sph(.34,18,14),e),0,2.05,0);s.add(r),s.add(oe(U(new Ms(.36,16,10,0,Math.PI*2,0,Math.PI/2.2),t),0,2.12,-.03));for(let c of[-.12,.12])s.add(oe(U(B.sph(.045),"#2a1d18",{cast:!1}),c,2.1,.3));let a=U(new gn(.09,.022,6,12,Math.PI),"#c0505a",{cast:!1});a.rotation.z=Math.PI,a.position.set(0,1.97,.31),s.add(a);for(let c of[-.2,.2])s.add(oe(U(B.sph(.05),"#ff9fb4",{cast:!1}),c,2,.27));let o=[];for(let c of[-1,1]){let l=new Ne;l.position.set(c*.45,1.55,0);let h=oe(U(B.cap(.09,.45),n),0,-.3,0);l.add(h),l.rotation.z=c*.15,s.add(l),o.push(l)}return i&&i(s),s.userData={arms:o,t:Math.random()*5},s}function Ry(n,e){if(!n)return;let t=n.userData;t.t+=e,n.position.y=Math.abs(Math.sin(t.t*2))*.04,t.arms[1].rotation.z=.15+Math.max(0,Math.sin(t.t*1.3))*.9*(t.wave>0?1:.15),t.wave>0&&(t.wave-=e)}function ol(n,{floor:e,back:t,side:i,rug:s}){let r=Er(n);if(r.sun.position.set(4,10,6),r.sun.target.position.set(0,0,0),n.background=new Xe("#ffeef8"),n.add(oe(U(B.box(12,.2,9),e,{cast:!1,recv:!0}),0,-.1,0)),n.add(oe(U(B.box(12,5,.2),t,{recv:!0}),0,2.5,-4.5)),n.add(oe(U(B.box(.2,5,9),i,{recv:!0}),-6,2.5,0)),n.add(oe(U(B.box(2.6,1.8,.1),"#ffffff"),3.2,2.9,-4.38)),n.add(oe(U(B.box(2.3,1.5,.1),"#9fdcff",{cast:!1}),3.2,2.9,-4.32)),s){let a=U(B.cyl(2,2,.04,32),s,{cast:!1,recv:!0});a.position.set(0,.02,.8),n.add(a)}}var ti=new wn,Di=new wn,pi=new wn,tn={},as=null;function Cy(){ol(ti,{floor:"#dff4f2",back:"#c9efe9",side:"#ffffff",rug:null});let n=U(B.box(2.4,.12,1.6),"#ff9fc8",{cast:!1,recv:!0});n.position.set(0,.06,-1.6),ti.add(n);let e=U(B.box(1.6,2.2,.8),"#ffffff");e.position.set(-4.2,1.1,-3.8),ti.add(e);let t=new Ne;t.add(U(B.box(.2,.7,.05),"#ff5c5c")),t.add(U(B.box(.7,.2,.05),"#ff5c5c")),t.position.set(-4.2,1.6,-3.38),ti.add(t);for(let s=0;s<3;s++)ti.add(oe(U(B.cyl(.12,.12,.35,10),["#6fc2ff","#ffd23f","#8be08b"][s]),-4.6+s*.4,2.4,-3.8));let i=new Ne;i.add(oe(U(B.box(1.2,.15,1),"#b8bcc8"),0,.08,0)),i.add(oe(Mr("\u2696\uFE0F",.7),0,.6,-.45)),i.position.set(3.4,0,-2.6),ti.add(i),ti.add(oe(Mr("\u{1F489}",1.3),-1.6,3.2,-4.35)),tn.vet=xu({coat:"#ffffff",skin:"#f6d2b0",hair:"#3b2a20",extra:s=>{let r=U(new gn(.22,.03,6,16),"#3aa89c");r.position.set(0,1.62,.3),r.rotation.x=1.2,s.add(r)}}),tn.vet.position.set(1.6,0,-2.6),tn.vet.rotation.y=-.6,ti.add(tn.vet),as=Ds("\u{1F489}",.9),as.visible=!1,ti.add(as)}function up(){if(be!=="room"||_n!=="vet")return;let n=We.pet,e=VACCINES.find(i=>["disponible","atrasada"].includes(vaccineStatus(n,i))),t=dewormDue(n);Da([n.sick&&!n.sick.treated?["cure","\u{1F48A}","Curar","","\u{1FA7A}"]:null,["vac","\u{1F489}","Vacuna",e?"":"\u2714","\u{1F6E1}\uFE0F"],["deworm","\u{1F41B}","Pastilla",t?"":"\u2714","\u{1F6E1}\uFE0F"],["check","\u{1FA7A}","Revisar","","\u2696\uFE0F"],["exit","\u{1F6AA}","Salir",""]]),Na(`<div class="vax">${VACCINES.map(i=>{let s=vaccineStatus(n,i);return`<span class="vx ${s}" title="${i.name}">${s==="pendiente"?"\u23F3":"\u{1F489}"}<b>${s==="aplicada"?"\u2714":s==="atrasada"?"\u2757":s==="disponible"?"\u{1F449}":""}</b></span>`}).join("")}</div>`)}function Iy(n){let e=We.pet,t=e.day;if(Pt)return;if(n==="check")return Xn(Py(e));let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(e,s)));n==="vac"&&!i||n==="deworm"&&!dewormDue(e)||(Pt=!0,Fi([0,-1.6,Math.PI*.75],()=>{tn.vet.userData.wave=2;let s=n==="vac"?"\u{1F489}":"\u{1F48A}";as.material.map=hs(s),as.material.needsUpdate=!0,as.position.set(D.x+.6,1.6,D.z+.3),as.visible=!0,n==="vac"?(dogSound("sad",gt()),speak("\xA1Un pinchacito r\xE1pido!")):speak(n==="deworm"?"Una pastilla contra los bichitos":"Medicina para curarse"),setTimeout(()=>{as.visible=!1,n==="vac"&&(e.vaccines[i.id]=t,applyFx(e,{felicidad:-4}),addEvent(e,"\u{1F489}",`Vacuna aplicada: ${i.name}.`),walkUnlocked(e)&&addMilestone(e,"vacunas","\u{1F6E1}\uFE0F","Luna complet\xF3 sus vacunas de cachorro."),Lt("\u{1F489}","\u{1F6E1}\uFE0F"),speak("\xA1Qu\xE9 valiente! Toma un premio.")),n==="deworm"&&(e.deworm.push(t),addEvent(e,"\u{1F48A}","Luna tom\xF3 su desparasitante."),Lt("\u{1F41B}","\u2714"),speak("\xA1Listo, sin bichitos!")),n==="cure"&&(e.sick.treated=!0,e.stats.salud=clamp(e.stats.salud+10,0,100),addEvent(e,"\u{1F48A}","La veterinaria le dio tratamiento a Luna."),Lt("\u{1F48A}","+\u{1FA7A}"),speak("Ahora necesita descansar, comer y beber agua")),Mt(ti,"\u2B50",new N(D.x,1.4,D.z),5),D.mode="happy",D.modeT=1.2,setTimeout(()=>dogSound("happy",gt()),400),Pt=!1,saveRoot(),Dt(),up()},1600)}))}function Py(n){let e=targetWeight(n.day),t=(n.weight-e)/e,i=VACCINES.filter(s=>n.vaccines[s.id]).length;return speak(t<-.12?"Luna necesita comer un poco m\xE1s":t>.12?"Luna necesita m\xE1s ejercicio":"\xA1Luna est\xE1 muy sana!"),`<div class="result"><h2>\u{1FA7A}</h2>
    <div class="checkrow"><span>\u2696\uFE0F</span><b>${fmtWeight(n.weight)}</b><span>${t<-.12?"\u{1F356}\u2757":t>.12?"\u{1F3C3}":"\u{1F44D}"}</span></div>
    <div class="checkrow"><span>\u{1F489}</span><b>${"\u2714".repeat(i)}${"\xB7".repeat(VACCINES.length-i)}</b></div>
    <div class="checkrow"><span>\u{1F41B}</span><b>${dewormDue(n)?"\u2757":"\u2714"}</b></div>
    ${n.sick?`<div class="checkrow"><span>\u{1F912}</span><b>${n.sick.treated?"\u{1F48A}\u2714":"\u{1F48A}\u2757"}</b></div>`:""}</div>`}function Ly(){ol(Di,{floor:"#f6d7b0",back:"#ffe1ef",side:"#fff3c4",rug:"#ffd23f"});let n=U(B.box(4,1,1),"#c98c55");n.position.set(1.5,.5,-2.8),Di.add(n),Di.add(oe(U(B.box(4.2,.12,1.2),"#e6a96c"),1.5,1.05,-2.8));for(let e=0;e<3;e++){Di.add(oe(U(B.box(3.6,.1,.7),"#b07840"),-3.2,.9+e*1.1,-4));for(let t=0;t<5;t++){let i=["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][(t+e)%5];Di.add(oe(U(t%2?B.sph(.22,10,8):B.box(.4,.4,.4),i),-4.6+t*.7,1.2+e*1.1,-4))}}Di.add(oe(Mr("\u{1F6D2}",1.3),1.5,3.4,-4.35)),tn.tienda=xu({coat:"#ff8fc8",skin:"#e8b48a",hair:"#2a1d18",extra:e=>{let t=U(B.box(.6,.55,.05),"#ffffff");t.position.set(0,1.15,.36),e.add(t)}}),tn.tienda.position.set(1.5,0,-3.8),Di.add(tn.tienda)}function dp(){if(be!=="room"||_n!=="tienda")return;let n=We.pet;Da(SHOP.map(e=>{let t=e.acc&&n.acc.owned.includes(e.id)||e.once&&n.items[e.id];return["buy:"+e.id,e.icon,e.short,t?"\u2714":n.bones<e.price?"\u{1F9B4}":"",`\u{1F9B4}${e.price}`]}).concat([["exit","\u{1F6AA}","Salir",""]])),Na(`<div class="wallet">\u{1F9B4} ${n.bones}</div>`)}function Dy(n){let e=We.pet,t=SHOP.find(i=>i.id===n);if(!(!t||e.bones<t.price)){if(e.bones-=t.price,t.acc?(e.acc.owned.push(t.id),e.acc.worn=t.id):t.id==="premio"?e.items.premio+=3:t.id==="champu"?e.items.champu+=3:e.items[t.id]=!0,addEvent(e,"\u{1F6D2}",`Compraste: ${t.name}.`),tn.tienda.userData.wave=2,Mt(Di,t.icon,new N(D.x,1.5,D.z),4,.7),Lt(t.icon,"\u2714"),speak(t.acc?"\xA1Qu\xE9 guapa!":t.short),Nt("coin"),D.mode="happy",D.modeT=1.2,dogSound("happy",gt()),We.pet.bones>=0){let i=ll(e);i.seen.shop=!0}saveRoot(),Dt(),dp()}}function Ny(){ol(pi,{floor:"#c8e6a0",back:"#fff3b8",side:"#ffd6e8",rug:null});let n=U(B.box(4.4,2,.12),"#2f5d46");n.position.set(0,2.6,-4.32),pi.add(n),pi.add(oe(U(B.box(4.7,.15,.25),"#b07840"),0,1.55,-4.25));for(let t=0;t<4;t++)pi.add(oe(U(B.cone(.25,.6,12),"#ff9f43"),-3.6+t*1.2,.3,2.6));let e=U(new gn(.7,.07,8,24),"#ff5c8a");e.position.set(3.6,.9,1.4),pi.add(e),pi.add(oe(U(B.cyl(.05,.05,1.6,6),"#888888"),2.85,.8,1.4)),pi.add(oe(U(B.cyl(.05,.05,1.6,6),"#888888"),4.35,.8,1.4)),tn.escuela=xu({coat:"#6f8cff",skin:"#c99872",hair:"#1c1414",extra:t=>{let i=U(B.cyl(.03,.03,.4,6),"#ffffff");i.position.set(.55,1.2,.2),i.rotation.z=.8,t.add(i)}}),tn.escuela.position.set(-2.4,0,-2.8),tn.escuela.rotation.y=.5,pi.add(tn.escuela)}function fp(){if(be!=="room"||_n!=="escuela")return;let n=We.pet,e=today(n),t=e.sessions>=MAX_SESSIONS?"\u23F3":gu(n);Da(TRICKS.map(i=>["trick:"+i.id,i.icon,i.short,n.day<i.min?"\u{1F512}":t,hp(n.tricks[i.id]||0)]).concat([["exit","\u{1F6AA}","Salir",""]])),Na(`<div class="wallet">\u{1F393} ${"\u25CF".repeat(e.sessions)}${"\u25CB".repeat(Math.max(0,MAX_SESSIONS-e.sessions))}</div>`)}var Uy={up:"\u2B06\uFE0F",right:"\u27A1\uFE0F",down:"\u2B07\uFE0F",left:"\u2B05\uFE0F"},Nn=null;function Fy(n){let e=We.pet,t=TRICKS.find(s=>s.id===n),i=e.tricks[n]||0;Nn={t,len:3+Math.floor(i/34),round:0,ok:0,seq:[],idx:0,phase:"show",pt:0},ge("#actions").hidden=!0,ge("#train3").hidden=!1,speak("\xA1Mira las flechas y luego rep\xEDtelas!"),pp()}function pp(){let n=Nn;n.seq=Array.from({length:n.len},()=>["up","right","down","left"][Math.floor(Math.random()*4)]),n.idx=0,n.phase="show",n.pt=0,Qc()}function Qc(){let n=Nn;if(!n)return;let e=n.phase==="show"?Math.floor((n.pt-.5)/.75):-1;ge("#t3-seq").innerHTML=n.seq.map((t,i)=>{let s=n.phase==="show"?i===e?"on":i<e?"past":"":i<n.idx?"done":"";return`<span class="t3a ${s}">${s?Uy[t]:"\u2754"}</span>`}).join(""),ge("#t3-head").textContent=`${n.t.icon} ${"\u25CF".repeat(n.round)}${"\u25CB".repeat(3-n.round)} ${n.phase==="show"?"\u{1F440}":n.phase==="input"?"\u{1F446}":""}`}var Oy={sentarse:"sit",venir:"happy",pata:"paw",quieta:"sit",echarse:"lie",vuelta:"spin"};function mp(n){let e=Nn;!e||e.phase!=="input"||(n===e.seq[e.idx]?(e.idx++,Nt("pop"),e.idx>=e.seq.length&&(e.ok++,ru(!0))):ru(!1),Qc())}function ru(n){let e=Nn;e.round++,e.phase="pause",e.pt=0,n?(D.mode=Oy[e.t.id]||"sit",D.modeT=1.6,Mt(pi,"\u2B50",new N(D.x,1.6,D.z),5),dogSound("happy",gt()),tn.escuela.userData.wave=1.5):(Lt("\u274C"),dogSound("sad",gt()))}function By(n){let e=Nn;e&&(e.pt+=n,e.phase==="show"?(e.pt>.6+e.seq.length*.75&&(e.phase="input",e.pt=0),Qc()):e.phase==="input"&&e.pt>5+e.seq.length?(ru(!1),Qc()):e.phase==="pause"&&e.pt>1.7&&(e.round>=3?zy():pp()))}function zy(){let n=Nn,e=We.pet;Nn=null,ge("#train3").hidden=!0;let t=e.tricks[n.t.id]||0,i=Math.min(100,t+n.ok*9+(n.ok===3?6:0)+(e.stats.felicidad>70?4:0)+2),s=today(e);s.sessions++,s.train++,e.tricks[n.t.id]=i,e.bones+=n.ok,applyFx(e,{energia:-8,saciedad:-3,felicidad:4+n.ok*2}),i>=100&&t<100?addMilestone(e,"trick-"+n.t.id,"\u{1F3C6}",`Luna aprendi\xF3: \xAB${n.t.name}\xBB.`):addEvent(e,"\u{1F393}",`Practicaron \xAB${n.t.name}\xBB (${i}%).`),saveRoot(),Dt(),cl(n.ok,n.ok,`<span>${n.t.icon} ${hp(i)}</span>`,()=>{ge("#actions").hidden=!1,fp()})}function cl(n,e,t,i){let s=["\xA1Otra vez!","\xA1Bien!","\xA1Muy bien!","\xA1Genial!"][clamp(n,0,3)];speak(s),setTimeout(()=>dogSound(n?"happy":"sad",gt()),800),Xn(`<div class="result"><div class="stars">${"\u2B50".repeat(n)}<span class="dim">${"\u2B50".repeat(3-n)}</span></div><h2>${s}</h2>
    <div class="gains">${e?`<span>\u{1F9B4} +${e}</span>`:""}${t||""}</div></div>`,i)}var _n=null,ky={vet:()=>ti,tienda:()=>Di,escuela:()=>pi};function Hy(n){let e=We.pet;if(e.asleep&&n!=="tienda"){speak("Luna est\xE1 durmiendo. Despi\xE9rtala primero y vengan juntas."),Lt("\u{1F4A4}");return}si(()=>{let t=pu()&&!e.asleep;kt=ky[n](),Sn(tt.root,kt),t&&(Sn(Ee.root,kt),D.x=0,D.z=2.8,D.ry=Math.PI,D.path=null),be="room",_n=n,te.x=2.4,te.z=3.4,te.ry=Math.PI,gp(),ge("#actions").hidden=!1,ge("#prompt").hidden=!0,speak(Dn.find(i=>i.id===n).name),setTimeout(()=>dogSound("bark",gt(),.6),600),tn[n]&&(tn[n].userData.wave=2),_i("open:"+n)})}function gp(){_n==="vet"?up():_n==="tienda"?dp():_n==="escuela"&&fp()}function Gy(n){if(n==="exit")return xp(_n);if(_n==="vet")return Iy(n);if(_n==="tienda"&&n.startsWith("buy:"))return Dy(n.slice(4));if(_n==="escuela"&&n.startsWith("trick:"))return Fy(n.slice(6))}function xp(n){Pt=!1,Nn=null,ge("#train3").hidden=!0,si(()=>{let e=pu();e&&Sn(Ee.root,Te),Sn(tt.root,Te),kt=Te,be="town",_n=null;let t=us.find(i=>i.pl.id===n);(e?Pa:sp)(t?t.x:-16,t?t.z+1.6:-9.4,0),ge("#actions").hidden=!0,Na(""),_i("close:"+n)})}var ss=null;function Vy(){let n=Dn.find(e=>e.id==="lago");ss=new Ne,ss.add(oe(U(B.cyl(.35,.45,1,12),"#b8bcc8"),0,.5,0)),ss.add(oe(U(B.cyl(.45,.35,.2,14),"#dfe3ee"),0,1.05,0)),ss.add(oe(U(B.cyl(.3,.3,.05,14),"#6cc8ff",{cast:!1}),0,1.15,0)),ss.position.set(n.x-6.5,0,n.z+3),Te.add(ss),xi.circles.push({x:n.x-6.5,z:n.z+3,r:.5})}function _p(){be="lake",speak("Lago"),dogSound("bark",gt(),.6),yp(),ge("#actions").hidden=!1,ge("#prompt").hidden=!0,_i("open:lago")}function yp(){if(be!=="lake")return;let n=We.pet,e=today(n),t=n.stats;Da([["duckfeed","\u{1F33E}","Dar de comer","","\u{1F986}\u{1F9B4}"],["ducks","\u{1F986}","Mirar patos",n.asleep?"\u{1F4A4}":e.ducks?"\u23F3":"","\u{1F496}"],n.day>=4?["drink","\u{1F6B0}","Beber",n.asleep?"\u{1F4A4}":t.hidratacion>=92?"\u{1F4A7}":"","\u{1F4A7}"]:null,n.day>=8?["splash","\u{1F4A6}","Chapotear",gu(n),"\u{1F496}"]:null,["closelake","\u{1F6AA}","Salir",""]])}function Wy(n){let e=We.pet,t=Dn.find(r=>r.id==="lago"),i=today(e);if(n==="closelake"){be="town",ge("#actions").hidden=!0;return}if(Pt)return;if(n==="duckfeed")return be="town",ge("#actions").hidden=!0,mv();Pt=!0;let s=(r,a,o,c,l)=>{applyFx(e,r),a&&Zc(a),addEvent(e,o,c);let h=Object.entries(r).filter(([,u])=>u>0).map(([u])=>STAT_ICON[u]).join("");Lt(o,h?"+"+h:""),speak(l),dogSound("happy",gt(),.7),D.mode="happy",D.modeT=1,Pt=!1,outdoorRisk(e),saveRoot(),Dt(),yp()};n==="ducks"&&Fi([t.x-3.2,t.z,Math.PI/2],()=>{Aa.forEach(o=>{o.userData.r=1.2});let r=0,a=setInterval(()=>{Nt("quack"),++r>=3&&clearInterval(a)},450);Mt(Te,"\u{1F496}",new N(D.x,1.4,D.z),4),setTimeout(()=>{Aa.forEach((o,c)=>{o.userData.r=1.5+c*.9}),i.ducks=!0,s({felicidad:10},"play","\u{1F986}","Miraron a los patos.","\xA1Cuac cuac!")},1800)}),n==="drink"&&Fi([ss.position.x+.9,ss.position.z,-Math.PI/2],()=>{D.mode="eat",D.modeT=1.6,setTimeout(()=>s({hidratacion:30},"water","\u{1F6B0}","Bebi\xF3 del bebedero del lago.","\xA1Glu glu!"),1600)}),n==="splash"&&Fi([t.x-4.6,t.z+2.6,Math.PI/2],()=>{D.mode="happy",D.modeT=2;let r=setInterval(()=>Mt(Te,"\u{1F4A6}",new N(D.x+.5,.6,D.z),2,.5),250);setTimeout(()=>{clearInterval(r),s({felicidad:18,energia:-10,higiene:-18},"play","\u{1F4A6}","Chapote\xF3 en la orilla.","\xA1Splash!")},1800)})}var jt=new wn,Ln=null;function Xy(){be="forestmenu";let n=We.pet;speak("Bosque"),dogSound("bark",gt(),.6);let e=["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"];Da(LEVEL_DEFS.map(t=>{let i=n.levels[t.id],s=t.id===1||n.levels[t.id-1]&&n.levels[t.id-1].done;return["level:"+t.id,e[t.id-1],String(t.id),n.day<t.minDay||!s?"\u{1F512}":gu(n),i&&i.done?"\u2B50":""]}).concat([["closeforest","\u{1F6AA}","Salir",""]])),ge("#actions").hidden=!1,ge("#prompt").hidden=!0,_i("open:bosque")}function qy(n){if(n==="closeforest"){be="town",ge("#actions").hidden=!0;return}n.startsWith("level:")&&$y(Number(n.slice(6)))}function $y(n){let e=LEVEL_DEFS.find(i=>i.id===n),t=buildLevel(e);si(()=>{for(;jt.children.length;)jt.remove(jt.children[0]);let i=Er(jt);jt.background=new Xe(e.sky[0]),jt.fog=new qi(e.sky[0],18,45),i.sun.position.set(5,12,10);let s=e.cave?"#4c3c70":"#b07840",r=e.cave?"#80f0ff":"#58b038",a=B.box(1,1,2),o=[];for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++){let M=t.grid[g][E];(M==="#"||M==="g")&&o.push([E,g,M])}let c=new Yi(a,wa(s),o.length);c.receiveShadow=!0,c.castShadow=!0;let l=new lt;o.forEach(([g,E],M)=>{l.makeTranslation(g+.5,t.h-E-.5,0),c.setMatrixAt(M,l)}),jt.add(c);let h=o.filter(g=>g[2]==="g"),u=new Yi(B.box(1.02,.25,2.04),wa(r),h.length);u.receiveShadow=!0,h.forEach(([g,E],M)=>{l.makeTranslation(g+.5,t.h-E-.12,0),u.setMatrixAt(M,l)}),jt.add(u);for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++)t.grid[g][E]==="="&&jt.add(oe(U(B.box(1,.25,1.6),"#d8a060",{recv:!0}),E+.5,t.h-g-.13,0));let d=ls(n*77);for(let g=0;g<t.w/3;g++){let E=d()*t.w,M=-4-d()*6;if(e.cave)jt.add(oe(U(B.cone(.3+d()*.4,1+d(),6),d()<.5?"#c0a0ff":"#80f0ff"),E,2+d()*2,M));else{let y=new Ne;y.add(oe(U(B.cyl(.2,.3,2,8),"#9a6236"),0,1,0));for(let w=0;w<3;w++)y.add(oe(U(B.cone(1.3-w*.3,1.5,9),w%2?"#3f9a5a":"#2f8a4e"),0,2.3+w*.9,0));y.position.set(E,1,M),jt.add(y)}}jt.add(oe(U(new Rn(t.w+60,40),e.cave?"#2c2850":"#a8d890",{cast:!1}),t.w/2,8,-12));let f=t.ents.map(g=>({...g,alive:!0}));for(let g of f){if(g.t==="bone"&&(g.m=fu(),g.m.scale.setScalar(.8)),g.t==="thorn"){g.m=new Ne;for(let E=0;E<4;E++){let M=U(B.cone(.13,.45,6),"#2f7a3c");M.position.set(-.3+E*.2,.2,E%2*.3-.15),g.m.add(M)}g.m.add(oe(U(B.sph(.08),"#e03c3c"),0,.2,.3))}if(g.t==="hog"){g.m=new Ne;let E=U(B.sph(.4,14,10),"#7c5838");E.scale.set(1.1,.8,.9),E.position.y=.32,g.m.add(E);for(let M=0;M<7;M++){let y=U(B.cone(.08,.3,5),"#4a3020"),w=-1.2+M*.4;y.position.set(Math.sin(w)*.35,.32+Math.cos(w)*.32,0),y.rotation.z=-w,g.m.add(y)}g.face=oe(U(B.sph(.16),"#e8c8a0"),.42,.25,0),g.m.add(g.face)}if(g.t==="bee"){g.m=new Ne;let E=U(B.sph(.3,12,10),"#f8d030");E.scale.set(1.3,1,1),g.m.add(E);for(let M of[-.12,.15]){let y=U(new gn(.27,.06,6,14),"#222222");y.rotation.y=Math.PI/2,y.position.x=M,g.m.add(y)}g.wings=[];for(let M of[-1,1]){let y=new bt(new vs(.25,12),new An({color:"#ffffff",transparent:!0,opacity:.8,side:In}));y.position.set(0,.3,M*.15),y.rotation.x=Math.PI/2,g.m.add(y),g.wings.push(y)}}if(g.t==="goal"){g.m=new Ne,g.m.add(oe(U(B.box(1.6,1.2,1.4),"#f0d090"),0,.6,0));let E=U(B.cone(1.25,.8,4),"#d84838");E.rotation.y=Math.PI/4,E.position.y=1.6,g.m.add(E),g.m.add(oe(U(B.box(.6,.8,.05),"#3c2418"),0,.4,.71)),g.m.add(oe(U(B.cyl(.04,.04,1.4,6),"#555555"),.6,2.4,0)),g.flag=oe(U(B.box(.6,.35,.04),"#ffd23f"),.92,2.9,0),g.m.add(g.flag)}g.m&&jt.add(g.m)}let _=(g,E)=>{if(g<0||g>=t.w)return!0;if(E<0||E>=t.h)return!1;let M=t.grid[E][g];return M==="#"||M==="g"},S=(g,E)=>E>=0&&E<t.h&&g>=0&&g<t.w&&t.grid[E][g]==="=",m=t.h-1;for(;m>0&&_(e.start,m-1);)m--;let p={x:e.start*TILE+8,y:m*TILE,vx:0,vy:0,onGround:!1,face:1,lastGround:-99,buffer:-99,hearts:3,inv:0,safe:null};p.safe={x:p.x,y:p.y},Ln={def:e,L:t,ents:f,pl:p,solidT:_,oneWay:S,tick:0,time:0,bones:0,over:!1},Ee.root.parent&&Ee.root.parent.remove(Ee.root),jt.add(Ee.root),kt=jt,be="forest",ge("#actions").hidden=!0,ge("#forestHud").hidden=!1,ba(),speak("\xA1Lleva a Luna hasta la casita! Salta con A y recoge huesos.")})}function ba(){Ln&&(ge("#forestHud").innerHTML=`<span>${"\u2764\uFE0F".repeat(Ln.pl.hearts)}${"\u{1F90D}".repeat(3-Ln.pl.hearts)}</span><span>\u{1F9B4} ${Ln.bones}</span><button class="hbtn" data-act="quitforest" aria-label="Salir">\u2716</button>`)}function Yy(n){let e=Ln;if(!e||e.over)return;let t=e.pl,i=PHYS;e.tick++,e.time+=n;let s=clamp(Ue.right-Ue.left+Ue.jx,-1,1);(Ue.a||Ue.jumpPress)&&(t.buffer=e.time),Ue.jumpPress=!1,Ue.a=!1;let r=Ue.aHeld||Ue.up,a=s*i.RUN,o=i.ACCEL*(t.onGround?1:i.AIR)*n;t.inv<1&&(t.vx+=clamp(a-t.vx,-o,o)),Math.abs(s)>.2&&(t.face=Math.sign(s)),t.onGround&&(t.lastGround=e.time),e.time-t.buffer<=i.BUFFER/60&&e.time-t.lastGround<=i.COYOTE/60&&(t.vy=-i.JUMP_V,t.buffer=-99,t.lastGround=-99,t.onGround=!1,Nt("pop"));let c=t.vy<0?i.G_RISE:i.G_FALL;t.vy<0&&!r?c=i.G_FALL*1.4:r&&Math.abs(t.vy)<.4*i.JUMP_V&&(c*=i.APEX_HANG),t.vy=Math.min(t.vy+c*n,i.MAX_FALL);let l=6,h=11;t.x+=t.vx*n;for(let y of[Math.floor((t.y-h)/TILE),Math.floor((t.y-1)/TILE)])t.vx>0&&e.solidT(Math.floor((t.x+l)/TILE),y)&&(t.x=Math.floor((t.x+l)/TILE)*TILE-l-.01,t.vx=0),t.vx<0&&e.solidT(Math.floor((t.x-l)/TILE),y)&&(t.x=(Math.floor((t.x-l)/TILE)+1)*TILE+l+.01,t.vx=0);let u=t.y;t.y+=t.vy*n,t.onGround=!1;let d=[Math.floor((t.x-l+1)/TILE),Math.floor((t.x+l-1)/TILE)];if(t.vy>=0){let y=Math.floor(t.y/TILE);for(let w of d){let x=y*TILE;(e.solidT(w,y)||e.oneWay(w,y)&&u<=x+.5)&&(t.y=x,t.vy=0,t.onGround=!0)}}else{let y=Math.floor((t.y-h)/TILE);for(let w of d)e.solidT(w,y)&&(t.y=(y+1)*TILE+h,t.vy=0)}t.onGround&&t.inv<=0&&(t.safe={x:t.x,y:t.y}),t.inv>0&&(t.inv-=n);let f=y=>{t.inv>0||(t.hearts--,t.inv=1.3,t.vx=(t.x<y?-1:1)*150,t.vy=-200,dogSound("sad",gt(),.6),ba(),t.hearts<=0&&Xh(!1))};if(t.y>e.L.h*TILE+40){if(t.hearts--,ba(),t.hearts<=0)return Xh(!1);t.x=t.safe.x-t.face*24,t.y=t.safe.y-20,t.vx=t.vy=0,t.inv=1.3}let _={l:t.x-l,r:t.x+l,t:t.y-h,b:t.y},S=(y,w,x,T)=>_.r>y&&_.l<x&&_.b>w&&_.t<T;for(let y of e.ents)if(y.alive){if(y.t==="bone"&&S(y.x,y.y,y.x+9,y.y+7)&&(y.alive=!1,jt.remove(y.m),e.bones++,Nt("coin"),ba()),y.t==="thorn"&&S(y.x+2,y.y+2,y.x+14,y.y+10)&&f(y.x+8),y.t==="hog"){y.x+=y.dir*22*n;let w=Math.floor((y.x+(y.dir>0?14:2))/TILE),x=Math.floor((y.y+12)/TILE),T=Math.floor((y.y+4)/TILE);(e.solidT(w,T)||!e.solidT(w,x))&&(y.dir*=-1)}if(y.t==="bee"&&(y.ph+=n,y.x=y.x0+Math.sin(y.ph*1.6)*y.range/2,y.yy=y.y+Math.sin(y.ph*4)*3),y.t==="hog"||y.t==="bee"){let w=y.t==="bee"?y.yy:y.y;S(y.x+2,w+1,y.x+14,w+10)&&(t.vy>40&&_.b-w<9?(y.alive=!1,jt.remove(y.m),t.vy=-i.JUMP_V*.65,e.bones++,Nt("coin"),Mt(jt,"\u2B50",y.m.position,3,.5),ba()):f(y.x+8))}if(y.t==="goal"&&S(y.x,y.y-60,y.x+28,y.y+32))return Xh(!0)}let m=e.L.h,p=y=>m-y/TILE;for(let y of e.ents)!y.alive||!y.m||(y.t==="bone"&&(y.m.position.set(y.x/TILE+.28,p(y.y+4),0),y.m.rotation.y+=n*2),y.t==="thorn"&&y.m.position.set(y.x/TILE+.5,p(y.y+10),0),y.t==="hog"&&(y.m.position.set(y.x/TILE+.5,p(y.y+10),0),y.m.rotation.y=y.dir>0?0:Math.PI),y.t==="bee"&&(y.m.position.set(y.x/TILE+.5,p((y.yy??y.y)+6),0),y.wings.forEach(w=>{w.rotation.y=Math.sin(e.tick*.9)*.6})),y.t==="goal"&&(y.m.position.set(y.x/TILE+.9,p(y.y+32),0),y.flag.position.y=2.9+Math.sin(e.tick*.1)*.05));D.x=t.x/TILE,D.z=0,Ee.root.position.set(t.x/TILE,p(t.y),0),Ee.root.rotation.y=t.face>0?Math.PI/2:-Math.PI/2,Ee.root.visible=!(t.inv>0&&Math.floor(e.tick/4)%2);let g=stageOf(We.pet.day);Ee.root.scale.setScalar(Ia[Math.max(1,g.size)]*.9),Tr(Ee,n,{mode:t.onGround?Math.abs(t.vx)>10?"walk":"idle":"happy",speed:Math.abs(t.vx)/30});let E=t.x/TILE+t.face*1.5,M=Math.max(m*.45,p(t.y)+1.5);mt.position.lerp(new N(E,M+1.2,10.5),1-Math.exp(-5*n)),mt.lookAt(mt.position.x,mt.position.y-1.6,0)}function Xh(n){let e=Ln,t=We.pet,i=e.def;e.over=!0;let s=n&&!(t.levels[i.id]&&t.levels[i.id].done),r=n?s?10:4:0;t.bones+=e.bones+r,today(t).play++,Ua(t,"forest"),applyFx(t,{felicidad:n?22:10,energia:-14,saciedad:-8,hidratacion:-10,higiene:-12});let a=t.levels[i.id]||{done:!1,best:0};a.best=Math.max(a.best,e.bones),n&&(a.done=!0),t.levels[i.id]=a,addEvent(t,"\u{1F332}",n?`Exploraron \xAB${i.name}\xBB y encontraron ${e.bones} huesos.`:`Intentaron \xAB${i.name}\xBB (${e.bones} huesos).`),s&&addMilestone(t,"lvl"+i.id,"\u{1F3DE}\uFE0F",`Luna complet\xF3 \xAB${i.name}\xBB por primera vez.`),outdoorRisk(t),saveRoot(),Dt();let o=n?e.pl.hearts:0;ge("#forestHud").hidden=!0,cl(o,e.bones+r,n?"<span>\u{1F3E0}\u2714</span>":"",()=>vp())}function vp(){Ln=null,Ee.root.visible=!0,si(()=>{Sn(Ee.root,Te),kt=Te,be="town";let n=us.find(e=>e.pl.id==="bosque");Pa(n.x,n.z+1.6,0),ge("#forestHud").hidden=!0,ge("#actions").hidden=!0})}function Zy(n){let e=We.pet,t=n.minDay-e.day;speak(`${n.name} se abre cuando Luna sea m\xE1s grande. Faltan ${t} ${t===1?"d\xEDa":"d\xEDas"}. \xA1Cu\xEDdala mucho y vuelve ma\xF1ana!`),Xn(`<div class="result"><div class="unlock"><span>\u{1F512}</span><span>${n.icon}</span></div><h2>${n.name}</h2><div class="moons">${"\u{1F319}".repeat(Math.min(t,10))}</div></div>`)}function _u(n){return We.pet.day<(n.minDay||1)?Zy(n):n.id==="casa"?wy():n.id==="parque"?op():n.id==="lago"?_p():n.id==="bosque"?Xy():Hy(n.id)}function Jy(){let n=We.pet,e=today(n),t=stageOf(n.day),i=routineFor(n,n.day,e),s=[...Object.entries(DAY_MILESTONES).map(([a,o])=>({key:"day"+a,icon:o[0],text:o[1]})),{key:"walk1",icon:"\u{1F333}"},{key:"bath1",icon:"\u{1F6C1}"},{key:"vacunas",icon:"\u{1F6E1}\uFE0F"},{key:"allbones",icon:"\u{1F50D}"},{key:"tutorial",icon:"\u{1F426}"},{key:"treasure1",icon:"\u{1F4B0}"},{key:"squirrel",icon:"\u{1F43F}\uFE0F"},{key:"hide1",icon:"\u{1F648}"},{key:"agility",icon:"\u{1F3C3}"},{key:"ducks10",icon:"\u{1F986}"},{key:"memory",icon:"\u{1F0CF}"},...LEVEL_DEFS.map(a=>({key:"lvl"+a.id,icon:["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"][a.id-1]})),...TRICKS.map(a=>({key:"trick-"+a.id,icon:a.icon}))],r=new Set(n.milestones.map(a=>a.key));speak("Diario de Luna"),Xn(`<div class="result"><h2>\u{1F4D6}</h2>
    <div class="weekbox"><span>${al[t.id]} ${n.day}</span><span>\u2696\uFE0F ${fmtWeight(n.weight)}</span><span>\u{1F525} ${n.streak}</span></div>
    <div class="today">${i.map(a=>`<span class="tday ${a.have>=a.need?"ok":""}"><i>${a.icon}</i><b>${a.have>=a.need?"\u2B50":`${Math.min(a.have,a.need)}/${a.need}`}</b></span>`).join("")}</div>
    <div class="stickers">${s.map(a=>`<span class="stk ${r.has(a.key)?"":"off"}">${r.has(a.key)?a.icon:"\u2754"}</span>`).join("")}</div></div>`)}function Ky(){if(!We||be!=="town"||!ge("#card3").hidden)return;let n=We.pet,e=ll(n);if(e.step<2)return;for(let s of Dn)if((s.minDay||1)>1&&n.day>=s.minDay&&!e.seen["open-"+s.id])return e.seen["open-"+s.id]=!0,e.focus=s.id,saveRoot(),speak(`\xA1Se abri\xF3 ${s.name}! Sigue la flecha amarilla.`),Xn(`<div class="result"><h2>\u{1F389}</h2><div class="unlock"><span>\u{1F513}</span><span>${s.icon}</span></div><h2>${s.name}</h2></div>`);let t=stageOf(n.day);if(!e.seen["stage-"+t.id]&&(e.seen["stage-"+t.id]=!0,saveRoot(),n.day>1))return speak(`\xA1Luna creci\xF3! Ahora es ${t.name.toLowerCase()}.`),setTimeout(()=>dogSound("happy",gt()),600),Xn(`<div class="result"><h2>\u{1F331}</h2><div class="howto"><div>${STAGES.map(s=>`<span style="opacity:${s.id===t.id?1:n.day>s.to?.55:.25}">${al[s.id]}</span>`).join("<i>\u203A</i>")}</div></div></div>`);let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(n,s)));if(i&&!e.seen["vac-"+i.id])return e.seen["vac-"+i.id]=!0,saveRoot(),speak("Hoy le toca una vacuna a Luna. Ve a la veterinaria y toca Vacuna."),Xn('<div class="result"><h2>\u{1F489}</h2><div class="howto"><div><span>\u{1F489}</span><i>\u279C</i><span>\u{1F3E5}</span></div></div></div>');if(n.sick&&!n.sick.treated&&!e.seen["sick-"+n.sick.since])return e.seen["sick-"+n.sick.since]=!0,saveRoot(),speak("Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."),Xn('<div class="result"><h2>\u{1F912}</h2><div class="howto"><div><span>\u{1F912}</span><i>\u279C</i><span>\u{1F3E5} \u{1F48A}</span></div></div></div>');if(n.bones>=6&&!e.seen.shop)return e.seen.shop=!0,e.focus="tienda",e.visited.tienda=!1,saveRoot(),speak("\xA1Tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna."),Xn(`<div class="result"><h2>\u{1F6D2}</h2><div class="howto"><div><span>\u{1F9B4} ${n.bones}</span><i>\u279C</i><span>\u{1F380}\u{1F9F8}\u{1F9B4}</span></div></div></div>`)}var _r=[{id:"walk",icon:"\u2B05\uFE0F\u27A1\uFE0F",say:"\xA1Hola! Soy P\xEDo, tu amigo. Camina con las flechas o con el c\xEDrculo. \xA1Luna te sigue!"},{id:"home",place:"casa",icon:"\u{1F37C}",say:"Luna tiene hambre. Ll\xE9vala a su casa: ac\xE9rcate a la puerta y toca A."},{id:"eat",place:"casa",doId:"eat",icon:"\u{1F37C}",say:"Toca el dibujo de comer para darle su comida."},{id:"pet",place:"casa",doId:"pet",icon:"\u{1F917}",say:"\xA1Muy bien! Ahora dale mimos."},{id:"exit",place:"casa",doId:"exit",icon:"\u{1F6AA}",say:"Ahora sal de la casa por la puerta."},{id:"bones",icon:"\u{1F9B4}",say:"Busca huesos que brillan por el pueblo. \xA1Con ellos compras cosas!"}];function ll(n){if(!n.tut){let e=n.day>1||Object.values(n.log).some(t=>t.meals>0);n.tut={step:e?_r.length:0,seen:{},visited:{},focus:null,moved:0},n.tut.seen["stage-"+stageOf(n.day).id]=!0}return n.tut}var jy={"\u{1F356}":{place:"casa",doId:"eat",say:"Luna tiene hambre. Ve a la casa y toca Comer."},"\u{1F4A7}":{place:"casa",doId:"water",say:"Luna tiene sed. Ve a la casa y toca Agua."},"\u{1F634}":{place:"casa",doId:"nap",say:"Luna tiene sue\xF1o. En la casa toca Siesta o Dormir."},"\u{1FAE7}":{place:"casa",doId:"bath",say:"Luna est\xE1 sucia. Ve a la casa para limpiarla."},"\u{1F4A9}":{place:"casa",doId:"clean",say:"Luna hizo un accidente en casa. Hay que recogerlo."},"\u{1F3BE}":{place:"parque",doId:"kick",say:"Luna est\xE1 aburrida. \xA1Vamos al parque a jugar con la pelota!"},"\u{1F912}":{place:"vet",doId:"cure",say:"Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."},"\u{1F489}":{place:"vet",doId:"vac",say:"Hoy le toca una vacuna. Ve a la veterinaria y toca Vacuna."},"\u{1F48A}":{place:"vet",doId:"deworm",say:"Luna necesita su pastilla contra los bichitos. Ve a la veterinaria."},"\u2702\uFE0F":{place:"casa",doId:"brush",say:"Hora de arreglar a Luna. Ve a la casa y cep\xEDllala."}};function Qy(n){let e=ll(n);if(e.step<_r.length)return{..._r[e.step],key:"tut-"+e.step,fixed:!0};if(Rt)return{icon:"\u{1F648}",key:"hide",say:"\xBFD\xF3nde est\xE1 Luna? Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!",fixed:!0};if(n.asleep)return Xf(n,!0)||{icon:"\u{1F4A4}",key:"sleep",say:"Luna est\xE1 durmiendo. D\xE9jala descansar, o despi\xE9rtala toc\xE1ndola.",fixed:!0};let t=!!(n.sick&&n.sick.treated),i=needsOf(n).filter(o=>!(o.icon==="\u{1F912}"&&t));for(let o of[...i.filter(c=>c.level==="bad"),...i.filter(c=>c.level==="warn")]){let c=jy[o.icon];if(!c)continue;let l="need-"+o.icon,h=o.level==="bad";if(!h&&Ta(l))continue;if(o.icon==="\u{1F4A7}"&&n.day<4)return{icon:"\u{1F37C}",key:l,place:"casa",doId:"eat",say:"Luna tiene sed. En casa dale su lechita.",fixed:h};let u=c.doId;return u==="bath"&&(u=n.day<8?"wipe":n.lastDone.bano&&n.day-n.lastDone.bano<3?"brush":"bath"),{icon:o.icon,key:l,...c,doId:u,say:u==="brush"?"Luna est\xE1 sucia. Ve a la casa y cep\xEDllala.":c.say,fixed:h}}if(e.focus&&!e.visited[e.focus]&&!Ta("focus-"+e.focus)){let o=Dn.find(c=>c.id===e.focus);if(o)return{icon:o.icon,place:o.id,key:"focus-"+o.id,say:`\xA1${o.name} est\xE1 abierto! Sigue la flecha.`}}let s={"\u{1F356}":["casa","eat","Hora de comer. Ve a la casa y toca Comer."],"\u{1F4A7}":["casa","water","Dale agua fresca a Luna en la casa."],"\u{1F3BE}":n.day>=3?["parque","kick","\xA1A jugar! Ve al parque a patear la pelota."]:["casa","pet","Juega con Luna: dale mimos en la casa."],"\u{1FAE7}":n.day>=3?["casa","brush","Hora de la limpieza. En casa cepilla a Luna."]:["casa","wipe","Hora de la limpieza. En casa limpia a Luna."],"\u{1F393}":["escuela","trick:","Hoy toca escuela. Ens\xE9\xF1ale un truco a Luna."],"\u{1F5FA}\uFE0F":["parque","stroll","Sal a pasear con Luna: ve al parque y toca Pasear."]},{waiting:r}=routinePending(n);for(let o of routineFor(n,n.day,today(n))){if(o.have>=o.need||!routineReady(n,o.icon)||!s[o.icon]||Ta("routine-"+o.icon))continue;let c=s[o.icon];return{icon:o.icon,key:"routine-"+o.icon,place:c[0],doId:c[1],say:c[2]}}let a=Xf(n,!1,r);return a&&t?{...a,key:"rec-"+a.key,say:"Luna se est\xE1 curando: dale comida, agua y que descanse. "+a.say}:a}var Mp=new Map,Ta=n=>(Mp.get(n.replace(/^(rec-|zz-)/,""))||0)>Date.now();function ev(){let n=nt;!n||n.fixed||(Mp.set(n.key.replace(/^(rec-|zz-)/,""),Date.now()+10*60*1e3),Nt("pop"),zt=null,Un(),speak("\xA1Est\xE1 bien, despu\xE9s! "+(nt&&nt!==n?nt.say:"")),clearTimeout(au),yr=nt?nt.key:yr,ge("#guide").classList.remove("new"))}var Jc=new Set,Wf=0;function Xf(n,e,t){Wf!==n.day&&(Wf=n.day,Jc.clear());let i=today(n).games||{},s=n.day,r=e||!!cantExercise(n),a=e?"Luna est\xE1 durmiendo. Mientras descansa, ":"",o=f=>e?a+f:f.replace(/^([¡¿]?)(.)/,(_,S,m)=>S+m.toUpperCase()),c=[];qn.length&&c.push({icon:"\u{1F9B4}",key:"bones",say:o("\xA1busca los huesos escondidos! Sigue la flecha amarilla.")}),Mn&&c.push({icon:"\u{1F4B0}",key:"treasure",say:o("hay un tesoro escondido. Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!")});let l=[{id:"memory",ok:!0,icon:"\u{1F0CF}",place:"casa",doId:"memory",say:"\xBFjugamos a la memoria? Ve a la casa y toca Memoria.",again:"\xBFOtra partida de memoria? Ve a la casa."},{id:"ducks",ok:!0,icon:"\u{1F986}",place:"lago",doId:"duckfeed",say:"\xA1los patos tienen hambre! Ve al lago y dales su comida.",again:"\xA1Los patos quieren m\xE1s comida! Ve al lago."},{id:"agility",ok:s>=3&&!r,icon:"\u{1F3C3}",place:"parque",doId:"agility",say:"\xA1carrera de obst\xE1culos! Ve al parque y toca Carrera.",again:"\xBFOtra carrera de obst\xE1culos? \xA1Vamos al parque!"},{id:"hide",ok:s>=5&&!r,icon:"\u{1F648}",place:"parque",doId:"hide",say:"\xA1juguemos al escondite! Ve al parque y toca Escondite.",again:"\xBFOtra vez al escondite? \xA1Vamos al parque!"},{id:"forest",ok:s>=3&&!r,icon:"\u{1F332}",place:"bosque",doId:"level:",say:"\xA1aventura en el bosque! Lleva a Luna saltando hasta la casita.",again:"\xA1Vamos de aventura al bosque!"}].filter(f=>f.ok),h=f=>f.replace(/^([¡¿]?)(.)/,(_,S,m)=>S+m.toUpperCase());for(let f of l)i[f.id]||c.push({icon:f.icon,place:f.place,doId:f.doId,key:"fun-"+f.id,say:e?a+f.say:h(f.say)});n.bones>=8&&c.push({icon:"\u{1F6D2}",key:"shop",place:"tienda",say:o("\xA1tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna. Si prefieres guardarlos, toca Ahora no.")}),!e&&t&&WAIT_SAY[t.icon]&&c.push({...WAIT_SAY[t.icon],key:"wait-"+t.icon});for(let f of l)c.push({icon:f.icon,place:f.place,doId:f.doId,key:"again-"+f.id,say:e?a+f.again.charAt(0).toLowerCase()+f.again.slice(1):f.again});if(!c.length)return null;let u=e?"zz-":"";c.forEach(f=>{f.key=u+f.key});let d=c.find(f=>!Jc.has(f.key)&&!Ta(f.key));return d||(Jc.clear(),d=c.find(f=>!Ta(f.key))||c[0]),d}var nt=null,yr="",au=0;function Un(){if(!We)return;let n;try{n=Qy(We.pet)}catch(a){console.error("P\xEDo:",a),n={icon:"\u2B50",key:"oops",say:"\xA1Vamos a pasear con Luna por el pueblo!"}}nt=n;let e=n.place?Dn.find(a=>a.id===n.place):null,t=ge("#guide"),i=`<span class="g-bird">\u{1F426}</span><span class="g-bub"><b>${n.icon}</b>${e?`<i>\u279C</i><b>${e.icon}</b>`:""}<small class="g-txt">${e?e.name:n.key.includes("bones")?"Huesos":n.key.includes("treasure")?"Tesoro":n.key==="sleep"?"Shh\u2026":""}</small></span>`;if(t.__h!==i&&(t.innerHTML=i,t.__h=i),t.hidden=!1,t.setAttribute("aria-label","P\xEDo dice: "+n.say),ge("#guideSkip").hidden=!!n.fixed||!!et,n.key!==yr){t.classList.add("new"),clearTimeout(au);let a=n.key;au=setTimeout(()=>{nt&&nt.key===a&&(yr=a,speak(nt.say),t.classList.remove("new"))},yr===""?3800:1500)}document.querySelectorAll("#actions .hint").forEach(a=>a.classList.remove("hint"));let s=yu();if(!ge("#actions").hidden&&n.doId&&(!n.place||n.place===s)){let a=document.querySelector(n.doId.endsWith(":")?`#actions [data-act^="${n.doId}"]:not([aria-disabled])`:`#actions [data-act="${n.doId}"]`);a&&a.classList.add("hint")}else if(!ge("#actions").hidden&&s&&n.place&&n.place!==s){let a=document.querySelector('#actions [data-act="exit"], #actions [data-act="closepark"], #actions [data-act="closelake"], #actions [data-act="closeforest"]');a&&a.classList.add("hint")}let r=document.querySelector("#prompt .go-btn");r&&r.classList.toggle("hint",!!(cn&&n.place===cn.pl.id))}var tv={casa:"Esta es la casa de Luna. Aqu\xED come, bebe, duerme y se ba\xF1a. Tambi\xE9n pueden jugar a la memoria.",vet:"Esta es la veterinaria. Cuando toca vacuna, toca la jeringa. La pastilla quita los bichitos. Si Luna est\xE1 enfermita, toca Curar.",tienda:"Esta es la tienda. Con los huesos que encuentras compras premios, juguetes y ropa para Luna.",escuela:"Esta es la escuela. Elige un truco, mira las flechas y rep\xEDtelas. \xA1As\xED Luna aprende!",parque:"Este es el parque. Haz una carrera de obst\xE1culos, juega al escondite o patea la pelota.",bosque:"Este es el bosque. Elige un camino y lleva a Luna saltando hasta la casita.",lago:"Este es el lago. Dale de comer a los patos, m\xEDralos nadar o bebe agua fresca."};function Sp(){return Ee.root.parent===kt&&Math.hypot(te.x-D.x,te.z-D.z)<2.6}function yu(){return be==="home"?"casa":be==="park"?"parque":be==="lake"?"lago":be==="forestmenu"?"bosque":be==="room"?_n:null}function nv(){let n=yu();if(!n)return;let e=tv[n];nt&&nt.place===n?e+=" "+nt.say:nt&&nt.place&&(e+=` Ahora toca ir a ${Dn.find(t=>t.id===nt.place).name}. Toca Salir.`),speak(e),Un()}var zt=null,Gc=null,rs=.5,ei=Math.ceil((Oe.x1-Oe.x0)/rs),Ma=Math.ceil((Oe.z1-Oe.z0)/rs);function qf(n,e,t,i){if(!Gc){Gc=new Uint8Array((ei+1)*(Ma+1));for(let p=0;p<=Ma;p++)for(let g=0;g<=ei;g++)Gc[p*(ei+1)+g]=Oi(Oe.x0+g*rs,Oe.z0+p*rs,.38)?0:1}let s=p=>clamp(Math.round((p-Oe.x0)/rs),0,ei),r=p=>clamp(Math.round((p-Oe.z0)/rs),0,Ma),a=(p,g)=>g*(ei+1)+p,o=(p,g)=>p>=0&&g>=0&&p<=ei&&g<=Ma&&Gc[a(p,g)]===1,c=s(t),l=r(i),h=new Int32Array((ei+1)*(Ma+1)).fill(-2),u=[a(s(n),r(e))];h[u[0]]=-1;let d=0,f=-1,_=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(;d<u.length;){let p=u[d++],g=p%(ei+1),E=p/(ei+1)|0;if(Math.abs(g-c)<=1&&Math.abs(E-l)<=1){f=p;break}for(let[M,y]of _){let w=g+M,x=E+y;if(!o(w,x)||M&&y&&(!o(g+M,E)||!o(g,E+y)))continue;let T=a(w,x);h[T]===-2&&(h[T]=p,u.push(T))}}if(f<0)return null;let S=[];for(let p=f;p!==-1;p=h[p])S.push([Oe.x0+p%(ei+1)*rs,Oe.z0+(p/(ei+1)|0)*rs]);S.reverse();let m=S.filter((p,g)=>g%3===2||g===S.length-1);return m.push([t,i]),m}function bp(){let n=nt;if(!n||Rt||et)return;if(!n.place){if(be!=="town"||!/bones$/.test(n.key)||!qn.length)return;let i=null,s=1/0;for(let a of qn){let o=Math.hypot(a.m.position.x-te.x,a.m.position.z-te.z);o<s&&(s=o,i=a)}let r=qf(te.x,te.z,i.m.position.x,i.m.position.z);r&&(zt={pts:r,place:null,stuck:0,best:1/0},Nt("pop"));return}if(yu()===n.place){Un();return}if(be==="park"?xr():(be==="lake"||be==="forestmenu")&&(be="town",ge("#actions").hidden=!0),be!=="town")return;let e=us.find(i=>i.pl.id===n.place);if(!e)return;if(cn===e){_u(e.pl);return}let t=qf(te.x,te.z,e.x,e.z);t&&(zt={pts:t,place:n.place,stuck:0,best:1/0},Nt("pop"))}var hl=performance.now(),qh=0,$h="",Sa=0;function Ep(){let n=performance.now();if(!nt||et||!ge("#card3").hidden||zt||Nn||Ln||n-hl<2e4||n-qh<3e4||(nt.key!==$h&&($h=nt.key,Sa=0),nt.key==="sleep"))return;let e=/^(zz-|rec-)?(bones|treasure|fun-|again-|shop|wait-)/.test(nt.key);if(Sa>=2)if(e)Jc.add(nt.key.replace(/^rec-/,"")),Un(),$h=nt.key,Sa=0;else{if(n-qh<9e4)return;Sa=0}Sa++,qh=n,Tp(),ge("#guide").classList.add("new"),Lt(nt.icon,nt.place?"\u{1F446} \u{1F426}":"\u{1F426}")}Fe.addEventListener("pointerdown",()=>{hl=performance.now()},!0);Fe.addEventListener("keydown",()=>{hl=performance.now()},!0);function Tp(){nt&&(yr=nt.key,speak(nt.say),ge("#guide").classList.remove("new"))}function _i(n){if(!We)return;let e=We.pet,t=ll(e);if(t.step>=_r.length)return Un();let i=_r[t.step].id;n.startsWith("open:")&&(t.visited[n.slice(5)]=!0),(i==="walk"&&n==="walk"&&++t.moved>=3||i==="home"&&n==="open:casa"||i==="eat"&&n==="do:eat"||i==="pet"&&n==="do:pet"||i==="exit"&&n==="close:casa"||i==="bones"&&n==="bone")&&(t.step++,Lt("\u2B50"),t.step>=_r.length&&(addMilestone(e,"tutorial","\u{1F426}","\xA1Terminaste las lecciones de P\xEDo!"),setTimeout(()=>speak("\xA1Lo hiciste genial! Ahora ya sabes cuidar a Luna."),1200)),saveRoot()),Un()}var el=new Ki({color:"#ffd23f",gradientMap:Ls,emissive:"#5a4000"}),Ps=new Ne;{let n=new bt(B.cone(.7,1.1,4),el);n.rotation.x=Math.PI,n.position.y=.55,Ps.add(n);let e=new bt(B.box(.45,.9,.45),el);e.position.y=1.5,Ps.add(e)}Ps.visible=!1;Te.add(Ps);var cs=new Ne;{let n=new bt(B.cone(.32,.6,3),el);n.rotation.x=Math.PI/2,n.position.z=1.5,cs.add(n);let e=new bt(B.box(.18,.06,.6),el);e.position.z=1,cs.add(e)}cs.visible=!1;Te.add(cs);function iv(n){let e=nt&&nt.place&&us.find(r=>r.pl.id===nt.place);if(!e&&nt&&/bones$/.test(nt.key)&&qn.length){let r=null,a=1/0;for(let o of qn){let c=Math.hypot(o.m.position.x-te.x,o.m.position.z-te.z);c<a&&(a=c,r=o)}e={x:r.m.position.x,z:r.m.position.z,baseY:.6,pl:{}}}let t=be==="town"&&e&&!(cn&&cn===e);if(Ps.visible=cs.visible=!!t,!t)return;Ps.position.set(e.x,e.baseY+1.2+Math.abs(Math.sin(n*4))*.6,e.pl.w?e.pl.z+e.pl.d/2:e.z),Ps.rotation.y=n*1.5;let i=e.x-te.x,s=e.z-te.z;cs.position.set(te.x,.08,te.z),cs.rotation.y=Math.atan2(i,s),cs.children.forEach(r=>{r.position.z=(r.geometry.type==="ConeGeometry"?1.5:1)+Math.sin(n*6)*.15})}var Ua=(n,e)=>{let t=today(n);return t.games=t.games||{},t.games[e]=(t.games[e]||0)+1,t.games[e]},$f=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},vu=(n,e)=>`<div class="result"><h2>${n}</h2><div class="howto">${e.map(([t,i])=>`<div><span>${t}</span><i>\u279C</i><span>${i}</span></div>`).join("")}</div></div>`,Yh="";function Ns(n){let e=ge("#gameHud");if(n==null){e.hidden=!0,Yh="";return}n!==Yh&&(Yh=n,e.innerHTML=`${n}<button class="hbtn" data-act="quitgame" aria-label="Salir">\u2716</button>`,e.hidden=!1)}var os=Ds("\u2744\uFE0F",1.1,!0);os.visible=!1;Te.add(os);var Ui=Ds("\u{1F356}",.85,!0);Ui.visible=!1;Te.add(Ui);var Vc="",Yf=0,Zf={hot:["\u{1F525}","\xA1Caliente, caliente!"],warm:["\u2600\uFE0F","\xA1Tibio!"],cold:["\u2744\uFE0F","\xA1Fr\xEDo!"]};function sv(n){let e=null,t=null;if(Rt?(e=Rt.x,t=Rt.z):Mn&&nt&&nt.key==="treasure"&&(e=Mn.x,t=Mn.z),e==null||be!=="town"){os.visible=!1,Vc="";return}let i=Math.hypot(e-te.x,t-te.z),s=i<3.5?"hot":i<8?"warm":"cold";s!==Vc&&(Vc&&n-Yf>2&&(speak(Zf[s][1]),Yf=n),Vc=s,os.material.map=hs(Zf[s][0],!0),os.material.needsUpdate=!0),os.visible=!0,os.position.set(te.x,2.75+Math.sin(n*5)*.08,te.z)}function rv(){let n=new Ne,e=U(B.sph(.22,12,10),"#b0682c");e.scale.set(.9,.85,1.2),e.position.y=.25,n.add(e),n.add(oe(U(B.sph(.13,10,8),"#f0d0a0",{cast:!1}),0,.2,.14)),n.add(oe(U(B.sph(.15,12,10),"#b0682c"),0,.46,.2));for(let t of[-1,1])n.add(oe(U(B.cone(.05,.12,6),"#8a4a20"),t*.08,.62,.17)),n.add(oe(U(B.sph(.03,6,5),"#1c1410",{cast:!1}),t*.07,.5,.33));for(let[t,i,s]of[[.35,-.25,.14],[.6,-.33,.15],[.8,-.22,.12]])n.add(oe(U(B.sph(s,10,8),"#c87c3c"),0,t,i));return n}var Wc=null,Zh=20;function av(n,e,t){let i=Wc;if(!i){if(e.day<3||e.asleep||Rt||be!=="town"||(Zh-=n,Zh>0))return;Zh=35+Math.random()*35;for(let r=0;r<60;r++){let a=Math.random()*Math.PI*2,o=6+Math.random()*4,c=te.x+Math.cos(a)*o,l=te.z-Math.abs(Math.sin(a))*o*.8;if(Oi(c,l,.5))continue;let h=rv();h.position.set(c,0,l),h.rotation.y=Math.atan2(te.x-c,te.z-l),Te.add(h),Wc={m:h,t:0,run:0,vx:0,vz:0},speak("\xA1Mira, una ardilla! Corre con Luna a saludarla.");return}return}i.t+=n;let s=i.m.position;if(i.run>0){i.run-=n,s.x+=i.vx*n,s.z+=i.vz*n,s.y=Math.abs(Math.sin(t*18))*.25,i.run<=0&&(Te.remove(i.m),Wc=null);return}if(s.y=Math.abs(Math.sin(t*5))*.12,i.t>25){Te.remove(i.m),Wc=null;return}if(Math.hypot(D.x-s.x,D.z-s.z)<1.5||Math.hypot(te.x-s.x,te.z-s.z)<1.2){let r=Math.atan2(s.x-D.x,s.z-D.z);i.vx=Math.sin(r)*7,i.vz=Math.cos(r)*7,i.run=1.2,i.m.rotation.y=r,D.mode="happy",D.modeT=1.2,dogSound("bark",gt());let a=today(e);a.squirrels=(a.squirrels||0)+1,a.squirrels<=4&&(applyFx(e,{felicidad:6,energia:-2}),e.bones++,a.play++,Mt(Te,"\u{1F496}",new N(D.x,1.4,D.z),3,.5),Mt(Te,"\u{1F9B4}",s,1,.5),Nt("coin"),addMilestone(e,"squirrel","\u{1F43F}\uFE0F","Luna persigui\xF3 a su primera ardilla."),Dt()),speak("\xA1Guau! \xA1Qu\xE9 r\xE1pida!")}}var Mu=[],Jh=0;function ov(){let n=ls(2468),e=["#ffffff","#ffd23f","#ff8fc8","#8fd0ff","#c9a0ff"];for(let t=0;t<12;t++){let i=0,s=0;for(let c=0;c<50&&(i=Oe.x0+3+n()*(Oe.x1-Oe.x0-6),s=Oe.z0+3+n()*(Oe.z1-Oe.z0-6),!!Oi(i,s,1));c++);let r=new Ne,a=[],o=new Ki({color:e[t%e.length],gradientMap:Ls,side:In});for(let c of[-1,1]){let l=new Ne,h=new bt(new vs(.17,10),o);h.rotation.x=-Math.PI/2,h.position.x=c*.15,l.add(h),r.add(l),a.push(l)}r.add(U(B.cap(.025,.16),"#3a2a2a",{cast:!1})),r.children[2].rotation.x=Math.PI/2,Te.add(r),Mu.push({g:r,wings:a,cx:i,cz:s,ph:n()*10,cd:0})}}function cv(n,e,t){Jh-=n;for(let i of Mu){i.ph+=n,i.cd-=n;let s=i.cx+Math.cos(i.ph*.7)*1.4,r=i.cz+Math.sin(i.ph*1.1)*1.4,a=1.1+Math.sin(i.ph*2.3)*.35;i.g.position.set(s,a,r),i.g.rotation.y=-i.ph*.7;let o=Math.sin(t*22+i.ph)*.9;if(i.wings[0].rotation.z=o,i.wings[1].rotation.z=-o,i.cd<=0&&!Rt&&!e.asleep&&Math.hypot(s-D.x,r-D.z)<1.2){let c=Math.atan2(s-D.x,r-D.z),l=i.cx+Math.sin(c)*3.5,h=i.cz+Math.cos(c)*3.5;l>Oe.x0&&l<Oe.x1&&h>Oe.z0&&h<Oe.z1&&(i.cx=l,i.cz=h),i.cd=3,Mt(Te,"\u{1F496}",new N(D.x,1.4,D.z),1,.45),D.mode="happy",D.modeT=.8,Jh<=0&&(Jh=12,applyFx(e,{felicidad:2}),dogSound("yip",gt(),.5),Dt())}}}var is=null;function wp(n){let e=Mn;Mn=null,n.treasure={day:n.day,found:!0};let t=Math.random(),i;if(t<.45){let a=4+Math.floor(Math.random()*4);n.bones+=a,i=`\u{1F9B4} +${a}`}else t<.7?(n.items.premio+=2,i="\u{1F36A} +2"):t<.88?(n.items.champu+=1,i="\u{1F9F4} +1"):(n.bones+=12,i="\u{1F48E} \u{1F9B4} +12");applyFx(n,{felicidad:10});let s=new Ne;s.add(oe(U(B.box(.9,.5,.6),"#a0642c"),0,.25,0));let r=U(B.box(.95,.18,.65),"#ffd23f");r.position.set(0,.6,-.15),r.rotation.x=-.9,s.add(r),s.add(oe(U(B.box(.15,.2,.05),"#ffd23f"),0,.35,.32)),s.add(oe(U(B.cyl(.8,.9,.08,16),"#9a6236",{cast:!1}),0,.02,0)),s.position.set(e.x,-.6,e.z),Te.add(s),is={g:s,t:0},Mt(Te,"\u2728",new N(e.x,.8,e.z),8,.6),D.mode="happy",D.modeT=1.6,tt.mode="cheer",tt.modeT=1.6,addEvent(n,"\u{1F4B0}",`\xA1Luna desenterr\xF3 un tesoro! (${i})`),addMilestone(n,"treasure1","\u{1F4B0}","Luna encontr\xF3 su primer tesoro escondido."),Lt("\u{1F4B0}",i),speak("\xA1Luna encontr\xF3 el tesoro!"),Nt("coin"),setTimeout(()=>dogSound("happy",gt()),500),saveRoot(),Dt()}var Rt=null;function Ap(){speak("\xA1Escondite! Cierra los ojos y cuenta\u2026 \xA1Luna se va a esconder!"),Xn(vu("\u{1F648}",[["\u{1F436}","\u{1F333}\u2753"],["\u{1F525}","\u{1F440} \u{1F436}"],["\u2744\uFE0F","\u21A9\uFE0F"]]),()=>{let n=xi.circles.filter(t=>t.tree),e=null;for(let t=0;t<600&&!e;t++){let i=n[Math.floor(Math.random()*n.length)],s=Math.random()*Math.PI*2,r=i.x+Math.sin(s)*(i.r+.7),a=i.z+Math.cos(s)*(i.r+.7),o=Math.hypot(r-te.x,a-te.z);o<6||o>15||Oi(r,a,.4)||(e={x:r,z:a})}if(!e){speak("Aqu\xED no hay d\xF3nde esconderse. \xA1Prueba en otro lugar!");return}si(()=>{Rt={x:e.x,z:e.z,t:0,dur:60,barkT:4},D.x=e.x,D.z=e.z,D.path=null,D.ry=Math.random()*6,ge("#actions").hidden=!0,ge("#prompt").hidden=!0})})}function lv(n,e){let t=Rt;t.t+=n,t.barkT-=n,t.barkT<=0&&(t.barkT=5,dogSound("bark",gt(),.5));let i=Math.hypot(te.x-t.x,te.z-t.z);Ee.root.visible=i<3.5,Ns(`<span>\u{1F648} ${Math.max(0,Math.ceil(t.dur-t.t))}</span>`),i<1.7?tl(!0):t.t>=t.dur&&tl(!1)}function tl(n){let e=Rt,t=We.pet;if(!e)return;Rt=null,Ns(null),Ee.root.visible=!0,ii=[{x:D.x,z:D.z},{x:te.x,z:te.z}];let i=n?e.t<20?3:e.t<40?2:1:0,s=i*2;t.bones+=s,today(t).play++,Ua(t,"hide"),applyFx(t,{felicidad:10+i*4,energia:-6,hidratacion:-4}),addEvent(t,"\u{1F648}",n?`Jugaron al escondite: encontraste a Luna en ${Math.round(e.t)} s.`:"Jugaron al escondite: Luna sali\xF3 solita."),n&&(addMilestone(t,"hide1","\u{1F648}","\xA1Encontraste a Luna jugando al escondite!"),D.mode="happy",D.modeT=1.5,tt.mode="cheer",tt.modeT=1.5,Mt(Te,"\u{1F496}",new N(D.x,1.4,D.z),6)),saveRoot(),Dt(),cl(i,s,n?`<span>\u{1F648} ${Math.round(e.t)}s</span>`:"<span>\u{1F436} \u{1F44B}</span>")}function hv(n,e,t){Mu.length||ov(),cv(n,e,t),av(n,e,t),Rt&&ge("#card3").hidden&&lv(n,e),Mn&&!Rt&&be==="town"&&(Math.hypot(Mn.x-te.x,Mn.z-te.z)<1||Ee.root.parent===Te&&Math.hypot(Mn.x-D.x,Mn.z-D.z)<.9)&&wp(e),is&&(is.t+=n,is.g.position.y=Math.min(0,-.6+is.t*1.2),is.t>4&&(Te.remove(is.g),is=null)),sv(t)}var et=null,ul=!1;function Su(n,e){let t=pu();return t&&Sn(Ee.root,n),Sn(tt.root,n),kt=n,be=e,ge("#actions").hidden=!0,ge("#prompt").hidden=!0,Na(""),os.visible=!1,Ui.visible=!1,Ee.root.visible=!0,t}function dl(n){let e=kt;et=null,Ns(null),tt.mode="idle",si(()=>{if(n==="casa"){lp();return}let t=Ee.root.parent===e;t&&Sn(Ee.root,Te),Sn(tt.root,Te),kt=Te,be="town";let i=us.find(s=>s.pl.id===n);(t?Pa:sp)(i.x+1.6,i.z,Math.PI/2),n==="parque"?op():n==="lago"&&_p()})}function bu(n,e,t,i,s){let r=We.pet;et.over=!0,i(r),saveRoot(),Dt(),Ns(null),n&&(tt.mode="cheer",tt.modeT=2,D.mode="happy",D.modeT=2),cl(n,e,t,()=>dl(s))}var Eu=(n,e,t,i,s,r,a,o=5)=>{mt.position.lerp(new N(n,e,t),1-Math.exp(-o*a)),mt.lookAt(i,s,r)},qt=new wn;function uv(){speak("\xA1Carrera de obst\xE1culos! Toca A o la pantalla para saltar las vallas y los charcos."),Xn(vu("\u{1F3C3}",[["\u24B6 \u{1F446}","\u2934\uFE0F \u{1F6A7}"],["\u{1F4A6}","\u2934\uFE0F"],["\u{1F9B4}","\u{1F60B}"]]),()=>si(Rp))}function Rp(){hu(qt);let n=Er(qt);qt.background=new Xe("#bfe6ff"),qt.fog=new qi("#bfe6ff",22,60);let e=300,t=ls(Date.now()%1e5);qt.add(oe(U(B.box(e+60,.2,24),"#8fd46e",{cast:!1,recv:!0}),e/2,-.1,-4)),qt.add(oe(U(B.box(e+60,.04,2.4),"#f2d39a",{cast:!1,recv:!0}),e/2,.02,0));for(let s=-10;s<e+20;s+=2.5+t()*4){let r=du(t()<.4);if(r.position.set(s,0,-4-t()*8),r.scale.setScalar(.8+t()*.5),qt.add(r),t()<.5){let a=U(B.sph(.3+t()*.3,10,8),"#5cbf5a");a.position.set(s+1,.2,2.6+t()*1.5),qt.add(a)}}for(let s=0;s<e+20;s+=4)qt.add(oe(U(B.box(.12,.6,.12),"#ffffff"),s,.3,-1.6));qt.add(oe(U(B.box(e+20,.08,.08),"#ffffff"),e/2,.55,-1.6));let i=[];for(let s=10;s<e-10;s+=6+t()*3.5){let r=t()<.62?"fence":"puddle",a;if(r==="fence"){a=new Ne;for(let o of[-.85,.85])a.add(oe(U(B.box(.12,.95,.12),"#c98c55"),0,.47,o));a.add(oe(U(B.box(.1,.14,1.8),"#ff5c5c"),0,.78,0)),a.add(oe(U(B.box(.1,.12,1.8),"#ffffff"),0,.45,0))}else a=U(B.cyl(.85,.85,.04,20),"#5ec2f5",{cast:!1}),a.scale.set(1.2,1,.9),a.position.y=.04;if(a.position.x=s,qt.add(a),i.push({kind:r,x:s,m:a,done:!1}),t()<.6){let o=t()<.6,c=fu();c.scale.setScalar(.9);let l=o?s:s+3,h=o?1.55:.6;c.position.set(l,h,0),qt.add(c),i.push({kind:"bone",x:l,y:h,m:c,done:!1})}}Su(qt,"agility"),Ee.root.rotation.y=Math.PI/2,tt.root.rotation.y=Math.PI/2,tt.leash=!0,mt.position.set(2,2.8,9),et={kind:"agility",lt:n,obs:i,time:0,dur:35,x:0,y:0,vy:0,onGround:!0,buffer:-9,lastGround:0,speed:5,hits:0,cleared:0,splash:0,bones:0,inv:0,over:!1,update:dv,tap:()=>{et.buffer=et.time},quit:()=>dl("parque")}}function dv(n){let e=et,t=We.pet,i=stageOf(t.day);if(!e.over){e.time+=n,e.speed=Math.min(6.4,5+e.time*.05),(Ue.jumpPress||Ue.a)&&(e.buffer=e.time);let r=Ue.aHeld||Ue.up||ul;e.onGround&&(e.lastGround=e.time),e.time-e.buffer<=.12&&e.time-e.lastGround<=.1&&(e.vy=7.6,e.buffer=-9,e.lastGround=-9,e.onGround=!1,Nt("pop"));let a=e.vy>0?22:34;e.vy>0&&!r&&(a=40),e.vy-=a*n,e.y+=e.vy*n,e.y<=0&&(e.y=0,e.vy=0,e.onGround=!0),e.x+=e.speed*n,e.inv>0&&(e.inv-=n);for(let o of e.obs){if(o.done)continue;if(o.kind==="bone"){o.m.rotation.y+=n*3,Math.abs(o.x-e.x)<.6&&Math.abs(o.y-(e.y+.7))<.65&&(o.done=!0,qt.remove(o.m),e.bones++,Nt("coin"),Mt(qt,"\u{1F9B4}",o.m.position,2,.45));continue}let c=o.kind==="puddle"?.8:.05,l=o.kind==="fence"?.7:.08;e.inv<=0&&Math.abs(o.x-e.x)<c+.2&&e.y<l?(o.done=!0,e.hits++,e.inv=.8,dogSound("sad",gt(),.5),o.kind==="puddle"?(e.splash++,Mt(qt,"\u{1F4A6}",new N(e.x,.6,0),4,.5)):(o.m.rotation.z=-.7,Mt(qt,"\u{1F4A5}",new N(e.x,.8,0),2,.5))):o.x<e.x-c-.3&&(o.done=!0,e.cleared++,Mt(qt,"\u2B50",new N(e.x,1.8,0),1,.45))}if(Ns(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F9B4} ${e.bones}</span>`),e.time>=e.dur){let o=e.hits===0?3:e.hits<=3?2:1,c=Math.floor((e.bones+e.cleared/2)/3);bu(o,c,`<span>\u{1F6A7} ${e.cleared}</span>`,l=>{l.bones+=c,today(l).play++,Ua(l,"agility"),applyFx(l,{felicidad:14+o*3,energia:-14,saciedad:-6,hidratacion:-10,higiene:-e.splash*6}),addEvent(l,"\u{1F3C3}",`Carrera de obst\xE1culos: ${e.cleared} saltos y ${e.bones} huesos.`),o===3&&addMilestone(l,"agility","\u{1F3C3}","\xA1Luna hizo una carrera de obst\xE1culos perfecta!"),outdoorRisk(l)},"parque")}}let s=!e.over;Ee.root.scale.setScalar(Ia[Math.max(1,i.size)]),Ee.root.position.set(e.x,e.y,0),Ee.root.visible=!(e.inv>0&&Math.floor(e.time*12)%2),Tr(Ee,n,{mode:s&&e.onGround?"walk":"happy",speed:s?e.speed*.6:0,mood:"feliz"}),te.x=e.x-1.9,tt.root.position.set(te.x,0,.4),nl(tt,n,s,e.speed*.7),il(qt,!0),Eu(e.x+2.2,2.8,9,e.x+2.2,.9,0,n,8),e.lt.sun.position.set(e.x+5,12,8),e.lt.sun.target.position.set(e.x,0,0)}var $t=new wn,fv=[-3.5,-6.5,-9.5];function pv(n){let e=new Ne,t=n?"#ffd23f":"#ffffff",i=U(B.sph(.42,14,10),t);i.scale.set(.9,.65,1.3),i.position.y=.2,e.add(i);for(let r of[-1,1]){let a=U(B.sph(.2,10,8),n?"#f0b820":"#e4e8f0");a.scale.set(.4,.6,1.1),a.position.set(r*.33,.28,-.05),e.add(a)}e.add(oe(U(B.sph(.24,12,10),n?t:"#3c8c4c"),0,.65,.38));let s=U(B.cone(.09,.26,8),"#ff9f43");s.rotation.x=Math.PI/2,s.position.set(0,.6,.66),e.add(s);for(let r of[-1,1])e.add(oe(U(B.sph(.035,6,5),"#1c1410",{cast:!1}),r*.12,.7,.57));if(n){let r=Ds("\u2728",.6);r.position.y=1.2,e.add(r)}return e}function mv(){speak("\xA1Los patos tienen hambre! Mu\xE9vete y l\xE1nzales su comida con A o tocando la pantalla."),Xn(vu("\u{1F986}",[["\u2B05\uFE0F\u27A1\uFE0F","\u{1F9D2}"],["\u24B6 \u{1F446}","\u{1F33E} \u2B06\uFE0F"],["\u{1F33E} \u{1F986}","\u{1F60B}"],["\u{1F986}\u2728","+3"]]),()=>si(Cp))}function Cp(){hu($t);let n=Er($t);n.sun.position.set(4,14,8),n.sun.target.position.set(0,0,-5),$t.background=new Xe("#bfe6ff"),$t.fog=new qi("#bfe6ff",25,50);let e=U(new Rn(70,24),"#5ec2f5",{cast:!1,recv:!0});e.rotation.x=-Math.PI/2,e.position.set(0,0,-7),$t.add(e),$t.add(oe(U(B.box(70,.3,8),"#f6e3a8",{cast:!1,recv:!0}),0,-.1,4.6)),$t.add(oe(U(B.box(70,.3,12),"#8fd46e",{cast:!1,recv:!0}),0,-.1,-24));let t=ls(777);for(let s=-30;s<30;s+=2+t()*3){let r=du(t()<.4);r.position.set(s,0,-20-t()*4),$t.add(r)}for(let s=0;s<14;s++){let r=U(B.cyl(.35,.35,.03,12),"#58b04a",{cast:!1});r.position.set(-12+t()*24,.02,-2-t()*11),$t.add(r)}for(let s=0;s<18;s++){let r=U(B.cyl(.04,.05,1+t()*.6,5),"#4f9a3c");r.position.set(-14+t()*28,.5,.4+t()*.3),$t.add(r)}let i=Su($t,"ducksgame");te.x=0,te.z=2.2,te.ry=Math.PI,i&&(D.x=1.3,D.z=2.6,D.ry=Math.PI),mt.position.set(0,5.5,8.5),et={kind:"ducks",lt:n,water:e,time:0,dur:30,ducks:[],spawnT:.3,pellets:[],cd:0,score:0,over:!1,update:gv,quit:()=>dl("lago"),tap:s=>{br.set(s.clientX/Fe.innerWidth*2-1,-(s.clientY/Fe.innerHeight)*2+1),Sr.setFromCamera(br,mt);let r=Sr.intersectObject(e)[0];r&&(te.x=clamp(r.point.x,-6,6)),Ip()}}}function Ip(){let n=et;if(!n||n.over||n.cd>0)return;n.cd=.55,tt.mode="throw",tt.modeT=.3,Nt("pop");let e=.8,t=te.x+.25,i=1.8,s=1.3,r=null,a=.75;for(let h of n.ducks){if(h.fed)continue;let u=h.x+h.vx*e,d=Math.abs(u-te.x);d<a&&(a=d,r={x:u,z:h.z})}let o=r?r.x:te.x,c=r?r.z:-6.5,l=U(B.sph(.11,8,6),"#e8c860");l.position.set(t,s,i),$t.add(l),n.pellets.push({s:l,t:0,T:e,vx:(o-t)/e,vz:(c-i)/e,vy:(.3-s+.5*9*e*e)/e})}function gv(n){let e=et,t=We.pet,i=Ra.getElapsed();if(!e.over){e.time+=n,e.cd-=n;let s=clamp(Ue.right-Ue.left+Ue.jx,-1,1);if(te.x=clamp(te.x+s*5*n,-6,6),(Ue.a||Ue.jumpPress)&&Ip(),e.spawnT-=n,e.spawnT<=0&&e.time<e.dur-1.5){let r=Math.random()<.5,a=Math.random()<.13,o=pv(a),c=fv[Math.floor(Math.random()*3)],l=(r?1:-1)*(1.3+Math.random()*1.3)*(1+e.time/45);o.position.set(r?-13:13,0,c),o.rotation.y=r?Math.PI/2:-Math.PI/2,$t.add(o),e.ducks.push({m:o,x:o.position.x,z:c,vx:l,gold:a,fed:!1,ph:Math.random()*6}),e.spawnT=.7+Math.random()*.6}for(let r of e.pellets)if(r.t+=n,r.vy-=9*n,r.s.position.x+=r.vx*n,r.s.position.y+=r.vy*n,r.s.position.z+=r.vz*n,r.t>=r.T){r.dead=!0,$t.remove(r.s);let a=e.ducks.find(o=>!o.fed&&Math.hypot(o.x-r.s.position.x,o.z-r.s.position.z)<.85);if(a){a.fed=!0;let o=a.gold?3:1;e.score+=o,Nt("quack"),Mt($t,"\u{1F496}",new N(a.x,1.2,a.z),3,.5),D.mode="happy",D.modeT=.8}else Mt($t,"\u{1F4A7}",r.s.position,1,.4)}if(e.pellets=e.pellets.filter(r=>!r.dead),Ns(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F986} ${e.score}</span>`),e.time>=e.dur){let r=e.score>=16?3:e.score>=8?2:e.score>=1?1:0,a=Math.min(8,Math.floor(e.score/4));bu(r,a,`<span>\u{1F986} ${e.score}</span>`,o=>{o.bones+=a,today(o).play++,Ua(o,"ducks"),applyFx(o,{felicidad:8+Math.min(16,e.score),energia:-4}),addEvent(o,"\u{1F986}",`Le dieron de comer a los patos del lago (${e.score} puntos).`),e.score>=10&&addMilestone(o,"ducks10","\u{1F986}","\xA1Alimentaron a muchos patos en el lago!"),outdoorRisk(o)},"lago")}}for(let s of e.ducks)s.ph+=n,s.x+=s.vx*n*(s.fed?2.2:1),s.m.position.set(s.x,Math.sin(s.ph*3)*.04,s.z),s.fed&&(s.m.rotation.z=Math.sin(s.ph*12)*.15),Math.abs(s.x)>14&&($t.remove(s.m),s.gone=!0);e.ducks=e.ducks.filter(s=>!s.gone),Ee.root.parent===$t&&(D.x+=(te.x+1.3-D.x)*(1-Math.exp(-6*n)),Ee.root.scale.setScalar(Ia[stageOf(t.day).size]),Ee.root.position.set(D.x,0,D.z),Ee.root.rotation.y=Math.PI,D.modeT>0&&(D.modeT-=n),Tr(Ee,n,{mode:t.asleep?"sleep":D.modeT>0?"happy":"sit",mood:"feliz"})),tt.root.position.set(te.x,0,te.z),tt.root.rotation.y=Math.PI,nl(tt,n,!1,0),il($t,!1),Eu(te.x*.35,5.5,8.5,te.x*.35,0,-5,n)}var mi=new wn,xv=["\u{1F436}","\u{1F9B4}","\u{1F3BE}","\u{1F9F8}","\u{1F986}","\u{1F333}","\u{1F356}","\u{1F43F}\uFE0F","\u{1F98B}","\u{1F3E0}"];function _v(){Pt||(speak("\xA1Encuentra las parejas! Toca dos cartas."),si(Pp))}function Pp(){hu(mi),ol(mi,{floor:"#e7b98a",back:"#ffd1e6",side:"#c8f1e4",rug:"#ffb3d1"}),mi.add(oe(U(B.box(7.4,.3,5.6),"#c98c55",{recv:!0}),0,.85,0));for(let[l,h]of[[-3.3,-2.4],[3.3,-2.4],[-3.3,2.4],[3.3,2.4]])mi.add(oe(U(B.box(.3,.85,.3),"#a0642c"),l,.42,h));let n=We.pet,e=n.day<8?4:6,t=$f(xv).slice(0,e),i=$f([...t,...t]),s=i.length/4,r=i.map((l,h)=>{let u=h%4,d=Math.floor(h/4),f=new Ne;f.position.set(-2.4+u*1.6,1.06,(d-(s-1)/2)*1.85);let _=U(B.box(1.2,.06,1.55),"#c48ad8");f.add(_);let S=new bt(new Rn(.75,.75),new An({map:hs("\u{1F43E}"),transparent:!0}));S.rotation.x=-Math.PI/2,S.position.y=.035,f.add(S);let m=new bt(new Rn(1.14,1.49),new An({color:"#ffffff"}));m.rotation.x=Math.PI/2,m.position.y=-.035,f.add(m);let p=new bt(new Rn(.95,.95),new An({map:hs(l),transparent:!0}));return p.rotation.x=Math.PI/2,p.rotation.z=Math.PI,p.position.y=-.04,f.add(p),f.traverse(g=>{g.userData.card=h}),mi.add(f),{ic:l,g:f,faceBg:m,open:!1,done:!1,rot:0}}),a=U(B.box(1.42,.03,1.77),"#ffd23f",{cast:!1});mi.add(a),Su(mi,"memory")&&(D.x=4.4,D.z=1.2),te.x=-4.4,te.z=1.2;let c=Fe.innerWidth<Fe.innerHeight;mt.position.set(0,c?12:8,c?6.5:5.4),et={kind:"memory",cards:r,cursor:a,sel:0,first:null,lock:!1,moves:0,pairs:e,found:0,over:!1,update:vv,quit:()=>dl("casa"),tap:l=>{br.set(l.clientX/Fe.innerWidth*2-1,-(l.clientY/Fe.innerHeight)*2+1),Sr.setFromCamera(br,mt);let h=Sr.intersectObjects(r.map(u=>u.g),!0)[0];h&&h.object.userData.card!=null&&(et.sel=h.object.userData.card,Tu(et.sel))},key:l=>{let h=r.length,u=et.sel;et.sel=l==="left"?(u+h-1)%h:l==="right"?(u+1)%h:l==="up"?(u+h-4)%h:(u+4)%h,Nt("step")}}}function Tu(n){let e=et;if(!e||e.kind!=="memory"||e.over||e.lock)return;let t=e.cards[n];if(!t||t.open||t.done)return;if(t.open=!0,Nt("pop"),e.first===null){e.first=n;return}e.moves++;let i=e.cards[e.first];i.ic===t.ic?(i.done=t.done=!0,e.first=null,e.found++,i.faceBg.material=t.faceBg.material=new An({color:"#c8f5e6"}),Nt("coin"),dogSound("yip",gt(),.5),D.mode="happy",D.modeT=1,Mt(mi,"\u2B50",t.g.position.clone().setY(1.6),2,.5),e.found===e.pairs&&setTimeout(()=>{et===e&&yv()},700)):(e.lock=!0,setTimeout(()=>{et===e&&(i.open=t.open=!1,e.first=null,e.lock=!1)},900))}function yv(){let n=et,e=n.moves<=n.pairs+2?3:n.moves<=n.pairs*2?2:1,t=((today(We.pet).games||{}).memory||0)<3?e:0;bu(e,t,`<span>\u{1F0CF} ${n.moves}</span>`,i=>{i.bones+=t,today(i).play++,Ua(i,"memory"),applyFx(i,{felicidad:8+e*2}),addEvent(i,"\u{1F0CF}",`Jugaron a la memoria: ${n.pairs} parejas en ${n.moves} turnos.`),e===3&&addMilestone(i,"memory","\u{1F0CF}","\xA1Memoria perfecta!")},"casa")}function vv(n){let e=et,t=We.pet,i=1-Math.exp(-10*n);!e.over&&(Ue.a||Ue.jumpPress)&&Tu(e.sel),e.over||Ns(`<span>\u{1F0CF} ${"\u2B50".repeat(e.found)}${"\u2606".repeat(e.pairs-e.found)}</span>`);for(let a of e.cards){let o=a.open||a.done?Math.PI:0;a.rot+=(o-a.rot)*i,a.g.rotation.z=a.rot,a.g.position.y=1.06+Math.sin(a.rot)*.5}let s=e.cards[e.sel].g.position;e.cursor.position.set(s.x,1.02,s.z),e.cursor.visible=!e.over,Ee.root.parent===mi&&(Ee.root.scale.setScalar(Ia[stageOf(t.day).size]),Ee.root.position.set(D.x,0,D.z),Ee.root.rotation.y=-Math.PI/2,D.modeT>0&&(D.modeT-=n),Tr(Ee,n,{mode:t.asleep?"sleep":D.modeT>0?"happy":"sit",mood:"feliz"})),tt.root.position.set(te.x,0,te.z),tt.root.rotation.y=Math.PI/2,nl(tt,n,!1,0),il(mi,!1);let r=Fe.innerWidth<Fe.innerHeight;Eu(0,r?12:8,r?6.5:5.4,0,.9,.3,n)}var Ra=new ca;Ra.connect(document);var Kh=0,jh=0,Qh=15,eu=0,Lp=!1;gi.setAnimationLoop(()=>{Ra.update();let n=Math.min(Math.max(Ra.getDelta(),0),.1);We&&Dp(n),tp(n),gi.render(kt,mt)});var Jf=new Set(["town","park","lake","forestmenu"]);function Dp(n){let e=We.pet;if(et){et.update(n),Music.setMode("play"),Ue.a=!1,Ue.jumpPress=!1;return}if(be==="forest"){let m=n;for(;m>1e-4&&Ln&&!Ln.over;){let p=Math.min(m,.016666666666666666);Yy(p),m-=p}Music.setMode("play"),Ue.a=!1;return}if(Kh+=n,jh+=n,Kh>5){Kh=0;let m=e.day;simulate(e,now(e)),e.day!==m&&ip(e),Dt(),rp(e),be==="home"&&(Is(),jc(e)),be==="room"&&!Nn&&gp(),Ky()}jh>15&&(jh=0,saveRoot()),ep(Ee,e);let t=stageOf(e.day);be==="town"&&!e.asleep&&Ee.root.parent!==Te&&(Sn(Ee.root,Te),D.x=te.x-Math.sin(te.ry)*1.3,D.z=te.z-Math.cos(te.ry)*1.3,D.ry=te.ry,D.path=null,ii=[{x:D.x,z:D.z},{x:te.x,z:te.z}],Mt(Te,"\u{1F496}",new N(D.x,1.4,D.z),4),dogSound("happy",gt()),speak("\xA1Luna despert\xF3 y vino corriendo contigo!")),Ee.root.scale.setScalar(Ia[t.size]);let i=Ue.right-Ue.left+Ue.jx,s=Ue.down-Ue.up+Ue.jz,r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a=Jf.has(be),o=!1,c=!1,l=0,h=0,u=0,d=[2.4,3.2,4.2,4.8,5][t.size]*(e.stats.energia<15?.6:1),f=Math.max(3.4,d)*(e.stats.energia<15?.75:1)*(e.sick&&!e.sick.treated?.8:1);if(D.path){let m=D.path.x-D.x,p=D.path.z-D.z,g=Math.hypot(m,p);if(g<.08){D.ry=D.path.ry;let E=D.path.done;D.path=null,E&&E()}else{l=m/g,h=p/g,o=!0,u=d;let E=Math.min(d*n,g);D.x+=l*E,D.z+=h*E}}if(a){if(Math.hypot(i,s)>.15)zt=null;else if(zt&&be==="town"&&!Pt){let[m,p]=zt.pts[0],g=m-te.x,E=p-te.z,M=Math.hypot(g,E);if(zt.stuck=M<zt.best-.05?0:zt.stuck+n,zt.best=Math.min(zt.best,M),M<.35){if(zt.pts.shift(),zt.best=1/0,!zt.pts.length){let y=Dn.find(w=>w.id===zt.place);zt=null,y&&_u(y)}}else zt.stuck>1.5?zt=null:(i=g/M,s=E/M)}if(!Pt&&Math.hypot(i,s)>.15){c=!0;let m=te.x+i*f*n,p=te.z+s*f*n;Oi(m,te.z,.35)||(te.x=m),Oi(te.x,p,.35)||(te.z=p);let g=Math.atan2(i,s)-te.ry;if(g=Math.atan2(Math.sin(g),Math.cos(g)),te.ry+=g*(1-Math.exp(-14*n)),Hc+=f*n,Hc>=1){let E=today(e),M=Math.floor(Hc);Hc-=M,_i("walk"),e.day>=3&&(E.walkTiles+=M,E.walkTiles>=WALK_GOAL&&!E.walk&&(E.walk=1,e.bones+=2,addEvent(e,"\u{1F5FA}\uFE0F","\xA1Exploraci\xF3n del d\xEDa completada!"),Lt("\u{1F5FA}\uFE0F","\u2B50"),speak("\xA1Paseo completado!"),Dt()))}}if(!D.path&&!e.asleep&&!Rt){let m=Sy(n,f*1.15,t.size);m&&(o=!0,l=m.dx,h=m.dz,u=m.sp)}}else!D.path&&!e.asleep&&!Pt&&Math.hypot(i,s)>.15&&(o=!0,l=i,h=s,u=d,D.x=clamp(D.x+i*d*n,-5.3,5.3),D.z=clamp(D.z+s*d*n,-2.4,3.6));if(o){let m=Math.atan2(l,h)-D.ry;m=Math.atan2(Math.sin(m),Math.cos(m)),D.ry+=m*(1-Math.exp(-14*n))}else if(a&&!e.asleep&&!Rt&&Math.hypot(te.x-D.x,te.z-D.z)>.5){let m=Math.atan2(te.x-D.x,te.z-D.z)-D.ry;m=Math.atan2(Math.sin(m),Math.cos(m)),D.ry+=m*(1-Math.exp(-4*n))}D.modeT>0&&(D.modeT-=n,D.mode==="spin"&&(D.ry+=n*9),D.modeT<=0&&["happy","sit","paw","lie","spin"].includes(D.mode)&&(D.mode="idle")),be==="room"&&(Ry(tn[_n],n),By(n));let _=e.asleep?"sleep":o?"walk":D.modeT>0||D.mode==="sleep"?D.mode:"idle";!e.asleep&&D.mode==="sleep"&&!Pt&&D.modeT<=0&&(D.mode="idle"),Tr(Ee,n,{mode:Rt?"lie":_,speed:o?u:0,eyesClosed:e.day<2,sad:["triste","enferma"].includes(moodOf(e)),mood:moodOf(e)}),Ee.root.position.set(D.x,0,D.z),Ee.root.rotation.y=D.ry,tt.root.position.set(te.x,0,te.z),tt.root.rotation.y=te.ry;let S=a&&e.day>=3&&!e.asleep&&!Rt&&!D.path&&Math.hypot(te.x-D.x,te.z-D.z)<3.5;tt.leash=S,nl(tt,n,c,f),il(kt,S),e.asleep&&Ee.root.parent===kt&&Math.random()<n*.8&&Mt(kt,"\u{1F4A4}",new N(D.x,1.2,D.z),1,.5),eu+=n,eu>.5&&(eu=0,Un(),Ep()),Music.setMode(be==="home"||be==="room"?"home":Lp?"night":"day"),Jf.has(be)?Mv(n,e,o,c):Sv(n),Ue.a=!1}function Mv(n,e,t,i){let s=Ra.getElapsed();hv(n,e,s);for(let c=qn.length-1;c>=0;c--){let l=qn[c];l.m.rotation.y+=n*2,l.m.position.y=.45+Math.sin(s*3+l.i)*.12,(Math.hypot(l.m.position.x-te.x,l.m.position.z-te.z)<.9||!Rt&&Ee.root.parent===Te&&Math.hypot(l.m.position.x-D.x,l.m.position.z-D.z)<.9)&&(Te.remove(l.m),qn.splice(c,1),e.mapBones.taken.push(l.i),e.bones++,Mt(Te,"\u{1F9B4}",l.m.position,3,.5),Nt("coin"),Math.random()<.5&&dogSound("yip",gt(),.6),Dt(),_i("bone"),qn.length||addMilestone(e,"allbones","\u{1F50D}","Luna encontr\xF3 todos los huesos escondidos de un d\xEDa."))}if(yt){yt.cd-=n;let c=yt.m.position.x-D.x,l=yt.m.position.z-D.z,h=Math.hypot(c,l),u=.35+.6*Ee.root.scale.x;h<u&&t&&(yt.v.set(c/h,0,l/h).multiplyScalar(7),Nt("pop"),yt.cd<=0&&(yt.cd=1,yt.pushes++,Mt(Te,"\u2B50",yt.m.position,2,.4),yt.pushes%6===0&&(applyFx(e,{felicidad:8,energia:-3}),today(e).play++,addEvent(e,"\u26BD","Jug\xF3 con la pelota en el parque."),Lt("\u26BD","+\u{1F496}"),speak("\xA1Qu\xE9 divertido!"),Dt())));let d=yt.m.position.clone().addScaledVector(yt.v,n);Oi(d.x,d.z,.35)?yt.v.multiplyScalar(-.6):yt.m.position.copy(d),yt.v.multiplyScalar(Math.exp(-1.6*n));let f=yt.v.length();yt.m.rotation.x+=yt.v.z*n/.35,yt.m.rotation.z-=yt.v.x*n/.35,f<.05&&yt.v.set(0,0,0)}if(Qh-=n,Qh<=0&&(Qh=22+Math.random()*25,!e.asleep)){let c=moodOf(e),l=c==="triste"||c==="enferma";dogSound(l?"sad":"bark",gt(),.45),l||(D.mode="happy",D.modeT=.8)}for(let c of Aa){c.userData.a+=n*.3;let l=c.userData.a;c.position.set(c.userData.cx+Math.cos(l)*c.userData.r,.2+Math.sin(s*3+l)*.04,c.userData.cz+Math.sin(l)*c.userData.r),c.rotation.y=-l}for(let c of np)c.position.x+=c.userData.v*n,c.position.x>50&&(c.position.x=-50);if(be==="park"||be==="lake"||be==="forestmenu"){let c=be==="park"?"parque":be==="lake"?"lago":"bosque",l=us.find(h=>h.pl.id===c);l&&Math.hypot(l.x-te.x,l.z-te.z)>7&&!Pt&&(be==="park"?xr():be="town",ge("#actions").hidden=!0)}cn=null;let r=needsOf(e);{let c=r.find(h=>h.level!=="info"),l=c&&!e.asleep&&!Rt&&Ee.root.parent===Te&&Math.floor(s/2)%3!==0;Ui.visible=!!l,l&&(Ui.userData.icon!==c.icon&&(Ui.userData.icon=c.icon,Ui.material.map=hs(c.icon,!0),Ui.material.needsUpdate=!0),Ui.position.set(D.x+.5,1.9*Ee.root.scale.x+.6,D.z))}for(let c of us){let l=Math.hypot(c.x-te.x,c.z-te.z);l<2.2&&!Rt&&(cn=c);let h="";if(e.day<(c.pl.minDay||1))h=l<9?"\u{1F512}":"";else{let u=r.find(d=>d.place===c.pl.id&&d.level!=="info");h=u?u.icon:""}h!==c.emoji&&(c.emoji=h,h&&(c.mk.material.map=hs(h,!0)),c.mk.material.needsUpdate=!0),c.mk.visible=!!h,c.mk.position.y=c.baseY+Math.sin(s*3)*.15}Ue.a&&be==="town"&&(e.asleep&&Sp()?La("wake"):cn&&_u(cn.pl)),be==="town"&&Ey(),iv(s),gy();let a=Fe.innerWidth<Fe.innerHeight?1.35:1,o=new N(te.x,9.5*a,te.z+11*a);mt.position.lerp(o,1-Math.exp(-5*n)),mt.lookAt(mt.position.x,.6,mt.position.z-11*a),Ea.sun.position.set(te.x+8,16,te.z+6),Ea.sun.target.position.set(te.x,0,te.z)}function Sv(n){let e=Fe.innerWidth<Fe.innerHeight?1.5:1;mt.position.lerp(new N(D.x*.3,6.5*e,8.5*e),1-Math.exp(-4*n)),mt.lookAt(D.x*.3,.6,-.4)}var Ni={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};Fe.addEventListener("keydown",n=>{if(n.target.tagName!=="INPUT"){if(!ge("#card3").hidden&&["Space","Enter","Escape"].includes(n.code)){n.preventDefault(),mu();return}if(et&&!et.over&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),et.quit();return}if(Rt&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),tl(!1);return}if(et&&et.key&&Ni[n.code]){n.preventDefault(),!n.repeat&&!et.over&&et.key(Ni[n.code]);return}if(Nn&&Ni[n.code]){n.preventDefault(),n.repeat||mp(Ni[n.code]);return}Ni[n.code]&&(Ue[Ni[n.code]]=1,n.preventDefault(),Ni[n.code]==="up"&&!n.repeat&&(Ue.jumpPress=!0)),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(n.preventDefault(),n.repeat||(Ue.a=!0,Ue.jumpPress=!0),Ue.aHeld=!0),["Escape","KeyX","Backspace"].includes(n.code)&&be==="home"&&La("exit"),["Escape","KeyX","Backspace"].includes(n.code)&&be==="park"&&xr(),["Escape","KeyX","Backspace"].includes(n.code)&&be==="room"&&!Nn&&xp(_n),["Escape","KeyX","Backspace"].includes(n.code)&&(be==="lake"||be==="forestmenu")&&(be="town",ge("#actions").hidden=!0)}});Fe.addEventListener("keyup",n=>{Ni[n.code]&&(Ue[Ni[n.code]]=0),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(Ue.aHeld=!1)});Fe.addEventListener("blur",()=>{Ue.up=Ue.down=Ue.left=Ue.right=0});var Ca=ge("#joy"),Np=ge("#knob"),wu=null,ou=null;Ca.addEventListener("pointerdown",n=>{wu=n.pointerId,ou={x:n.clientX,y:n.clientY},Ca.setPointerCapture(n.pointerId)});Ca.addEventListener("pointermove",n=>{if(n.pointerId!==wu)return;let e=n.clientX-ou.x,t=n.clientY-ou.y,i=Math.hypot(e,t),s=50;i>s&&(e*=s/i,t*=s/i),Np.style.transform=`translate(${e}px, ${t}px)`,Ue.jx=e/s,Ue.jz=t/s});var Up=()=>{wu=null,Ue.jx=Ue.jz=0,Np.style.transform=""};Ca.addEventListener("pointerup",Up);Ca.addEventListener("pointercancel",Up);ge("#abtn").addEventListener("pointerdown",n=>{n.preventDefault(),Ue.a=!0,Ue.jumpPress=!0,Ue.aHeld=!0});ge("#abtn").addEventListener("pointerup",()=>{Ue.aHeld=!1});ge("#abtn").addEventListener("pointercancel",()=>{Ue.aHeld=!1});document.querySelectorAll("[data-arrow]").forEach(n=>n.addEventListener("pointerdown",e=>{e.preventDefault(),mp(n.dataset.arrow)}));lu.addEventListener("pointerdown",n=>{ul=!0,et&&et.tap&&!et.over&&ge("#card3").hidden&&et.tap(n)});Fe.addEventListener("pointerup",()=>{ul=!1});Fe.addEventListener("pointercancel",()=>{ul=!1});var Sr=new la,br=new Ve;lu.addEventListener("click",n=>{!Ee||et||Rt||(br.set(n.clientX/Fe.innerWidth*2-1,-(n.clientY/Fe.innerHeight)*2+1),Sr.setFromCamera(br,mt),Sr.intersectObject(Ee.root,!0).length&&(be==="home"?La("pet"):be==="park"?(D.mode="happy",D.modeT=1.2,Mt(kt,"\u{1F496}",new N(D.x,1.4,D.z),5),dogSound("happy",gt())):(D.mode="happy",D.modeT=1.2,Mt(kt,"\u{1F496}",new N(D.x,1.4,D.z),5),dogSound("bark",gt()))))});document.addEventListener("click",n=>{let e=n.target.closest("button");if(!e)return;if(e.id==="mute"){gr=!gr;try{localStorage.setItem("luna.muted",gr?"1":"0")}catch{}gr&&"speechSynthesis"in Fe&&speechSynthesis.cancel(),Music.refresh(),Dt();return}if(e.id==="music"){Music.start(),Music.toggle(),Dt();return}if(e.id==="guide"){Tp(),bp();return}if(e.id==="guideSkip"){ev();return}if(e.dataset.act==="help"){nv();return}if(e.id==="diary3"){Jy();return}if(e.dataset.card){mu();return}if(e.getAttribute("aria-disabled")==="true"){Lt(e.querySelector(".badge")?.textContent||"\u270B"),speak(e.dataset.say);return}let t=e.dataset.act;if(t==="enter"){Ue.a=!0;return}if(t==="quitforest"){Ln&&(Ln.over=!0,ge("#forestHud").hidden=!0,vp());return}if(t==="quitgame"){et&&et.quit?et.quit():Rt&&tl(!1);return}if(e.dataset.avatar){document.querySelectorAll("[data-avatar]").forEach(i=>i.classList.toggle("sel",i===e));return}if(t&&["stroll","kick","bench","closepark","agility","hide"].includes(t)?Ty(t):t&&be==="room"?Gy(t):t&&(be==="lake"||["ducks","drink","splash","closelake","duckfeed"].includes(t))?Wy(t):t&&(t.startsWith("level:")||t==="closeforest")?qy(t):t&&La(t),e.dataset.pick){let i=Fe.root.profiles.find(s=>s.id===e.dataset.pick);e.disabled=!0,Cloud.refresh(i).finally(()=>rl(i))}e.dataset.cloud&&Cloud.openAccount(Fe.root.profiles.find(i=>i.id===e.dataset.cloud),cu),e.dataset.cloudlogin!==void 0&&Cloud.openLogin(cu),e.dataset.coat&&document.querySelectorAll("[data-coat]").forEach(i=>i.classList.toggle("sel",i===e))});ge("#new-form").addEventListener("submit",n=>{n.preventDefault();let e=ge("#new-name").value.trim().slice(0,16);if(!e){ge("#new-name").focus(),speak("Escribe tu nombre");return}let t=document.querySelector("[data-coat].sel")?.dataset.coat||"dorado",i=document.querySelector("[data-avatar].sel")?.dataset.avatar||"\u{1F9D2}",s={id:uid(),name:e,avatar:i,createdAt:Date.now(),pet:newPet(t)};Fe.root.profiles.push(s),saveRoot(),rl(s)});Fe.addEventListener("pointerdown",()=>Music.start());Fe.addEventListener("keydown",()=>Music.start());Fe.addEventListener("pagehide",()=>{We&&saveRoot()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&We&&saveRoot()});fy();My();Cy();Ly();Ny();Vy();mt.position.set(-16,10,2);mt.lookAt(-16,.6,-9);function cu(){let n=Fe.root.profiles;ge("#pick-list").innerHTML=n.map(e=>`<div class="slot-row"><button class="slot" data-pick="${e.id}">${Xc(e.avatar)} ${Xc(e.name)} <span>${al[stageOf(dayAt(e.pet,now(e.pet))).id]} \u25B6</span></button><button class="slot-cloud${Cloud.linked(e)?" on":""}" data-cloud="${e.id}" aria-label="${Cloud.linked(e)?"En la nube":"Guardar en la nube"}: ${Xc(e.name)}">\u2601\uFE0F</button></div>`).join(""),ge("#avatars3").innerHTML=hy.map((e,t)=>`<button type="button" class="avatar ${t===0?"sel":""}" data-avatar="${e}" aria-label="Tu cara ${t+1}">${e}</button>`).join(""),ge("#coats").innerHTML=Object.entries(COATS).map(([e,t],i)=>`<button type="button" class="coat ${i===0?"sel":""}" data-coat="${e}" style="background:${t.fur}" aria-label="${t.name}"></button>`).join(""),ge("#voice-slot").innerHTML=voiceSettingsHTML(),ge("#picker").hidden=!1,ge("#hud").hidden=!0,Ee||(Ee=Qf({coat:"dorado",day:10,acc:{worn:"lazo"}}),Te.add(Ee.root))}var tu=Fe.root.activeId&&Fe.root.profiles.find(n=>n.id===Fe.root.activeId);tu?Cloud.refresh(tu).finally(()=>rl(tu)):cu();(function n(){We||(Ee&&(Ee.root.position.set(-16,0,-9),Tr(Ee,1/60,{mode:"happy"}),mt.position.set(-16,3,-3.5),mt.lookAt(-16,1,-9)),requestAnimationFrame(n))})();Object.assign(Fe,{renderer:gi,town:Te,home:vt,luna:D,kidS:te,act:La,startGame:rl,input:Ue,dbg3:{buildAgility3:Rp,buildDucks3:Cp,buildMemory3:Pp,startHide3:Ap,memFlip3:Tu,closeCard3:mu,digTreasure3:wp,get mini(){return et},get hide3(){return Rt},get treasure3(){return Mn},get where(){return be},guideGo3:bp,idleNudge3:Ep,treeList:uu,get autoWalk(){return zt},get goal3(){return nt},setIdle:n=>{hl=n}},step3d:(n,e)=>{Dp(n),tp(n),e&&gi.render(kt,mt)}});})();
