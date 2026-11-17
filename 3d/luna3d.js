/* Luna 3D: incluye three.js r187 (MIT, (c) three.js authors). Fuente: 3d/src/main3d.js */
(()=>{var Rc="187";var Kd=0,Nh=1,jd=2;var Gs=1,Qd=2,Pr=3,Ms=0,Tn=1,Ln=2,Vs=0,Lr=1,Uh=2,Fh=3,Oh=4,ef=5;var Ws=100,tf=101,nf=102,sf=103,rf=104,af=200,of=201,cf=202,lf=203,zh=204,Bh=205,hf=206,uf=207,df=208,ff=209,pf=210,mf=211,gf=212,xf=213,_f=214,Zo=0,Jo=1,Ko=2,br=3,jo=4,Qo=5,ec=6,tc=7,kh=0,yf=1,vf=2,wi=0,Hh=1,Gh=2,Vh=3,Wh=4,Xh=5,qh=6,$h=7;var Yh=300,Xs=301,Dr=302,Cc=303,Ic=304,nc=1e3,Si=1001,ic=1002,Vt=1003,Mf=1004;var Fa=1005;var Sn=1006,Pc=1007;var Xi=1008;var Dn=1009,Zh=1010,Jh=1011,Nr=1012,Lc=1013,di=1014,ni=1015,fi=1016,Dc=1017,Nc=1018,qs=1020,Kh=35902,jh=35899,Qh=1021,eu=1022,Wn=1023,Hi=1026,qi=1027,Uc=1028,Fc=1029,Ss=1030,Oc=1031;var zc=1033,Oa=33776,za=33777,Ba=33778,ka=33779,Bc=35840,kc=35841,Hc=35842,Gc=35843,Vc=36196,Wc=37492,Xc=37496,qc=37488,$c=37489,Ha=37490,Yc=37491,Zc=37808,Jc=37809,Kc=37810,jc=37811,Qc=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,cl=37821,ll=36492,hl=36494,ul=36495,dl=36283,fl=36284,Ga=36285,pl=36286;var la=2300,sc=2301,$o=2302,wh=2303,Ah=2400,Rh=2401,Ch=2402;var Sf=3200;var ml=0,bf=1,$i="",vn="srgb",ha="srgb-linear",ua="linear",gt="srgb";var Yo=7680;var Ef=519,Tf=512,wf=513,Af=514,tu=515,Rf=516,Cf=517,nu=518,iu=519,su=35044;var ru="300 es",ei=2e3,Er=2001;function Im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function If(){let n=da("canvas");return n.style.display="block",n}var Md={},Tr=null;function fa(...n){let e="THREE."+n.shift();Tr?Tr("log",e,...n):console.log(e,...n)}function Pf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=Pf(n);let e="THREE."+n.shift();if(Tr)Tr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=Pf(n);let e="THREE."+n.shift();if(Tr)Tr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ca(...n){let e=n.join(" ");e in Md||(Md[e]=!0,Xe(...n))}function Lf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Df={[Zo]:Zo,[Ko]:ec,[jo]:jo,[br]:Qo,[Jo]:Jo,[ec]:Ko,[tc]:tc,[Qo]:br},bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ih=Math.PI/180,rc=180/Math.PI;function $s(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function Lm(n,e){return(n%e+e)%e}function sh(n,e,t){return(1-t)*n+t*e}function Nf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uf(n,e){if(e.constructor===Float32Array)return n;let t=gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ff(n,e){if(e.constructor===Float32Array)return n;let t=gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var hu=class hu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hu.prototype.isVector2=!0;var Ge=hu,kn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],m=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==m||h!==x){let p=l*u+c*m+h*x+d*y;p<0&&(u=-u,m=-m,x=-x,y=-y,p=-p);let f=1-o;if(p<.9995){let g=Math.acos(p),E=Math.sin(g);f=Math.sin(f*g)/E,o=Math.sin(o*g)/E,l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+y*o}else{l=l*f+u*o,c=c*f+m*o,h=h*f+x*o,d=d*f+y*o;let g=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=g,c*=g,h*=g,d*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*d+l*m-c*u,e[t+1]=l*x+h*u+c*d-o*m,e[t+2]=c*x+h*m+o*u-l*d,e[t+3]=h*x-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"YZX":this._x=u*h*d+c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d-u*m*x;break;case"XZY":this._x=u*h*d-c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d+u*m*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uu=class uu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uu.prototype.isVector3=!0;var D=uu,rh=new D,Sd=new kn,du=class du{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],x=i[8],y=s[0],p=s[3],f=s[6],g=s[1],E=s[4],M=s[7],v=s[2],w=s[5],_=s[8];return r[0]=a*y+o*g+l*v,r[3]=a*p+o*E+l*w,r[6]=a*f+o*M+l*_,r[1]=c*y+h*g+d*v,r[4]=c*p+h*E+d*w,r[7]=c*f+h*M+d*_,r[2]=u*y+m*g+x*v,r[5]=u*p+m*E+x*w,r[8]=u*f+m*M+x*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,x=t*d+i*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ca("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ah.makeScale(e,t)),this}rotate(e){return ca("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ah.makeRotation(-e)),this}translate(e,t){return ca("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};du.prototype.isMatrix3=!0;var Ye=du,ah=new Ye,bd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ed=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dm(){let n={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ha]:{primaries:e,whitePoint:i,transfer:ua,toXYZ:bd,fromXYZ:Ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:bd,fromXYZ:Ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}var ot=Dm();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sr,ac=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=da("canvas")),sr.width=e.width,sr.height=e.height;let s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=da("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oh(s[a].image)):r.push(oh(s[a]))}else r=oh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function oh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ac.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Um=0,ch=new D,bn=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Si,s=Si,r=Sn,a=Xi,o=Wn,l=Dn,c=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=$s(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Yh;bn.DEFAULT_ANISOTROPY=1;var fu=class fu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],x=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(m+1)/2,v=(f+1)/2,w=(h+u)/4,_=(d+y)/4,T=(x+p)/4;return E>M&&E>v?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=_/i):M>v?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=T/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=_/r,s=T/r),this.set(i,s,r,t),this}let g=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-y)/g,this.z=(u-h)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fu.prototype.isVector4=!0;var Dt=fu,oc=class extends bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new bn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends oc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pa=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cc=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ac=class Ac{constructor(e,t,i,s,r,a,o,l,c,h,d,u,m,x,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,m,x,y,p)}set(e,t,i,s,r,a,o,l,c,h,d,u,m,x,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=x,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*d,x=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,x=c*h,y=c*d;t[0]=u+y*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,x=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*d,x=o*h,y=o*d;t[0]=l*h,t[4]=x*c-m,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=x*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+x,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,m=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,Om)}lookAt(e,t,i){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),rs.crossVectors(i,zn),rs.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),rs.crossVectors(i,zn)),rs.normalize(),bo.crossVectors(zn,rs),s[0]=rs.x,s[4]=bo.x,s[8]=zn.x,s[1]=rs.y,s[5]=bo.y,s[9]=zn.y,s[2]=rs.z,s[6]=bo.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],x=i[2],y=i[6],p=i[10],f=i[14],g=i[3],E=i[7],M=i[11],v=i[15],w=s[0],_=s[4],T=s[8],F=s[12],C=s[1],O=s[5],B=s[9],X=s[13],N=s[2],$=s[6],J=s[10],q=s[14],ce=s[3],Z=s[7],ie=s[11],se=s[15];return r[0]=a*w+o*C+l*N+c*ce,r[4]=a*_+o*O+l*$+c*Z,r[8]=a*T+o*B+l*J+c*ie,r[12]=a*F+o*X+l*q+c*se,r[1]=h*w+d*C+u*N+m*ce,r[5]=h*_+d*O+u*$+m*Z,r[9]=h*T+d*B+u*J+m*ie,r[13]=h*F+d*X+u*q+m*se,r[2]=x*w+y*C+p*N+f*ce,r[6]=x*_+y*O+p*$+f*Z,r[10]=x*T+y*B+p*J+f*ie,r[14]=x*F+y*X+p*q+f*se,r[3]=g*w+E*C+M*N+v*ce,r[7]=g*_+E*O+M*$+v*Z,r[11]=g*T+E*B+M*J+v*ie,r[15]=g*F+E*X+M*q+v*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],x=e[3],y=e[7],p=e[11],f=e[15],g=l*m-c*u,E=o*m-c*d,M=o*u-l*d,v=a*m-c*h,w=a*u-l*h,_=a*d-o*h;return t*(y*g-p*E+f*M)-i*(x*g-p*v+f*w)+s*(x*E-y*v+f*_)-r*(x*M-y*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],x=e[12],y=e[13],p=e[14],f=e[15],g=t*o-i*a,E=t*l-s*a,M=t*c-r*a,v=i*l-s*o,w=i*c-r*o,_=s*c-r*l,T=h*y-d*x,F=h*p-u*x,C=h*f-m*x,O=d*p-u*y,B=d*f-m*y,X=u*f-m*p,N=g*X-E*B+M*O+v*C-w*F+_*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/N;return e[0]=(o*X-l*B+c*O)*$,e[1]=(s*B-i*X-r*O)*$,e[2]=(y*_-p*w+f*v)*$,e[3]=(u*w-d*_-m*v)*$,e[4]=(l*C-a*X-c*F)*$,e[5]=(t*X-s*C+r*F)*$,e[6]=(p*M-x*_-f*E)*$,e[7]=(h*_-u*M+m*E)*$,e[8]=(a*B-o*C+c*T)*$,e[9]=(i*C-t*B-r*T)*$,e[10]=(x*w-y*M+f*g)*$,e[11]=(d*M-h*w-m*g)*$,e[12]=(o*F-a*O-l*T)*$,e[13]=(t*O-i*F+s*T)*$,e[14]=(y*E-x*v-p*g)*$,e[15]=(h*v-d*E+u*g)*$,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,x=r*d,y=a*h,p=a*d,f=o*d,g=l*c,E=l*h,M=l*d,v=i.x,w=i.y,_=i.z;return s[0]=(1-(y+f))*v,s[1]=(m+M)*v,s[2]=(x-E)*v,s[3]=0,s[4]=(m-M)*w,s[5]=(1-(u+f))*w,s[6]=(p+g)*w,s[7]=0,s[8]=(x+E)*_,s[9]=(p-g)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=rr.set(s[0],s[1],s[2]).length(),o=rr.set(s[4],s[5],s[6]).length(),l=rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ci.copy(this);let c=1/a,h=1/o,d=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ei,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),m=(i+s)/(i-s),x,y;if(l)x=r/(a-r),y=a*r/(a-r);else if(o===ei)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Er)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ei,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),m=-(i+s)/(i-s),x,y;if(l)x=1/(a-r),y=a/(a-r);else if(o===ei)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===Er)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ac.prototype.isMatrix4=!0;var ut=Ac,rr=new D,ci=new ut,Fm=new D(0,0,0),Om=new D(1,1,1),rs=new D,bo=new D,zn=new D,Td=new ut,wd=new kn,hs=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Td,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hs.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zm=0,Ad=new D,ar=new kn,Ni=new ut,Eo=new D,Qr=new D,Bm=new D,km=new kn,Rd=new D(1,0,0),Cd=new D(0,1,0),Id=new D(0,0,1),Pd={type:"added"},Hm={type:"removed"},or={type:"childadded",child:null},lh={type:"childremoved",child:null},qt=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new hs,i=new kn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ye}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Eo.copy(e):Eo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Qr,Eo,this.up):Ni.lookAt(Eo,Qr,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Ni),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),or.child=e,this.dispatchEvent(or),or.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new D(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gm={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},To={h:0,s:0,l:0};function hh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Lm(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=hh(a,r,e+1/3),this.g=hh(a,r,e),this.b=hh(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=vn){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let i=Of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ot.workingToColorSpace(un.copy(this),e),Math.round(ct(un.r*255,0,255))*65536+Math.round(ct(un.g*255,0,255))*256+Math.round(ct(un.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(un.copy(this),t);let i=un.r,s=un.g,r=un.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=vn){ot.workingToColorSpace(un.copy(this),e);let t=un.r,i=un.g,s=un.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(To);let i=sh(as.h,To.h,t),s=sh(as.s,To.s,t),r=sh(as.l,To.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new $e;$e.NAMES=Of;var Gi=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},En=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new D,Ui=new D,uh=new D,Fi=new D,cr=new D,lr=new D,Ld=new D,dh=new D,fh=new D,ph=new D,mh=new Dt,gh=new Dt,xh=new Dt,Bi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){li.subVectors(s,t),Ui.subVectors(i,t),uh.subVectors(e,t);let a=li.dot(li),o=li.dot(Ui),l=li.dot(uh),c=Ui.dot(Ui),h=Ui.dot(uh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return mh.setScalar(0),gh.setScalar(0),xh.setScalar(0),mh.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mh,r.x),a.addScaledVector(gh,r.y),a.addScaledVector(xh,r.z),a}static isFrontFacing(e,t,i,s){return li.subVectors(i,t),Ui.subVectors(e,t),li.cross(Ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),li.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,i),lr.subVectors(r,i),dh.subVectors(e,i);let l=cr.dot(dh),c=lr.dot(dh);if(l<=0&&c<=0)return t.copy(i);fh.subVectors(e,s);let h=cr.dot(fh),d=lr.dot(fh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(cr,a);ph.subVectors(e,r);let m=cr.dot(ph),x=lr.dot(ph);if(x>=0&&m<=x)return t.copy(r);let y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(lr,o);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return Ld.subVectors(r,s),o=(d-h)/(d-h+(m-x)),t.copy(s).addScaledVector(Ld,o);let f=1/(p+y+u);return a=y*f,o=u*f,t.copy(i).addScaledVector(cr,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Ao.subVectors(this.max,ea),hr.subVectors(e.a,ea),ur.subVectors(e.b,ea),dr.subVectors(e.c,ea),os.subVectors(ur,hr),cs.subVectors(dr,ur),Us.subVectors(hr,dr);let t=[0,-os.z,os.y,0,-cs.z,cs.y,0,-Us.z,Us.y,os.z,0,-os.x,cs.z,0,-cs.x,Us.z,0,-Us.x,-os.y,os.x,0,-cs.y,cs.x,0,-Us.y,Us.x,0];return!_h(t,hr,ur,dr,Ao)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,hr,ur,dr,Ao))?!1:(Ro.crossVectors(os,cs),t=[Ro.x,Ro.y,Ro.z],_h(t,hr,ur,dr,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new D,new D,new D,new D,new D,new D,new D,new D],hi=new D,wo=new Ei,hr=new D,ur=new D,dr=new D,os=new D,cs=new D,Us=new D,ea=new D,Ao=new D,Ro=new D,Fs=new D;function _h(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fs.fromArray(n,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),h=i.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gt=new D,Co=new Ge,Vm=0,ti=class extends bi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=ni,this.version=0,this._normalizationScale=e!==void 0?gl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ff(e,this.array)}};var ma=class extends ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ga=class extends ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends ti{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wm=new Ei,ta=new D,yh=new D,us=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ta,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(yh)),this.expandByPoint(ta.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xm=0,Qn=new ut,vh=new qt,fr=new D,Bn=new Ei,na=new Ei,en=new D,dn=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?ga:ma)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Bn.min,na.min),Bn.expandByPoint(en),en.addVectors(Bn.max,na.max),Bn.expandByPoint(en)):(Bn.expandByPoint(na.min),Bn.expandByPoint(na.max))}Bn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),en.add(fr)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let F=0;F<i.count;F++)o[F]=new D,l[F]=new D;let h=new D,d=new D,u=new D,m=new Ge,x=new Ge,y=new Ge,p=new D,f=new D;function g(F,C,O){c[F]=c[C]=c[O]=1,h.fromBufferAttribute(i,F),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,O),m.fromBufferAttribute(r,F),x.fromBufferAttribute(r,C),y.fromBufferAttribute(r,O),d.sub(h),u.sub(h),x.sub(m),y.sub(m);let B=1/(x.x*y.y-y.x*x.y);isFinite(B)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(u,-x.y).multiplyScalar(B),f.copy(u).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(B),o[F].add(p),o[C].add(p),o[O].add(p),l[F].add(f),l[C].add(f),l[O].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,C=E.length;F<C;++F){let O=E[F],B=O.start,X=O.count;for(let N=B,$=B+X;N<$;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new D,v=new D,w=new D,_=new D;function T(F){w.fromBufferAttribute(s,F),_.copy(w);let C=o[F];M.copy(C),M.sub(w.multiplyScalar(w.dot(C))).normalize(),v.crossVectors(_,C);let B=v.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,B)}for(let F=0,C=i.count;F<C;++F)c[F]&&T(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let f=0;f<h;f++)u[x++]=c[m++]}return new ti(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this.updateRanges=[],this.version=0,this.uuid=$s()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Dd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=$s()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var yn=new D,xa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?gl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ti(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Uf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ff(e,this.data.array)}},Mh=new D,qm=new D,$m=new Ye,ui=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Mh.subVectors(i,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$m.getNormalMatrix(e),s=this.coplanarPoint(Mh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ym=0,Vi=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Lr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ui().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cr=class extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,ia=new D,mr=new D,gr=new D,xr=new Ge,sa=new Ge,zf=new ut,Io=new D,ra=new D,Po=new D,Nd=new Ge,Sh=new Ge,Ud=new Ge,_a=class extends qt{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new dn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lc(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new xa(i,3,0,!1)),pr.setAttribute("uv",new xa(i,2,3,!1))}this.geometry=pr,this.material=e,this.center=new Ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Lo(Io.set(-.5,-.5,0),gr,a,mr,s,r),Lo(ra.set(.5,-.5,0),gr,a,mr,s,r),Lo(Po.set(.5,.5,0),gr,a,mr,s,r),Nd.set(0,0),Sh.set(1,0),Ud.set(1,1);let o=e.ray.intersectTriangle(Io,ra,Po,!1,ia);if(o===null&&(Lo(ra.set(-.5,.5,0),gr,a,mr,s,r),Sh.set(0,1),o=e.ray.intersectTriangle(Io,Po,ra,!1,ia),o===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Bi.getInterpolation(ia,Io,ra,Po,Nd,Sh,Ud,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Lo(n,e,t,i,s,r){xr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(sa.x=r*xr.x-s*xr.y,sa.y=s*xr.x+r*xr.y):sa.copy(xr),n.copy(e),n.x+=sa.x,n.y+=sa.y,n.applyMatrix4(zf)}var zi=new D,bh=new D,Do=new D,No=new D,ya=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bh.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),No.copy(this.origin).sub(bh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=No.dot(this.direction),l=-No.dot(Do),c=No.lengthSq(),h=Math.abs(1-a*a),d,u,m,x;if(h>0)if(d=a*l-o,u=a*o-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let y=1/h;d*=y,u*=y,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bh).addScaledVector(Do,u),m}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,p=t.z-a.z,f=i.x-a.x,g=i.y-a.y,E=i.z-a.z,M=Math.abs(l),v=Math.abs(c),w=Math.abs(h),_,T,F,C,O,B,X,N,$,J,q,ce;if(M>=v&&M>=w?(F=l,B=d,$=x,ce=f,l>=0?(_=c,T=h,C=u,O=m,X=y,N=p,J=g,q=E):(_=h,T=c,C=m,O=u,X=p,N=y,J=E,q=g)):v>=w?(F=c,B=u,$=y,ce=g,c>=0?(_=h,T=l,C=m,O=d,X=p,N=x,J=E,q=f):(_=l,T=h,C=d,O=m,X=x,N=p,J=f,q=E)):(F=h,B=m,$=p,ce=E,h>=0?(_=l,T=c,C=d,O=u,X=x,N=y,J=f,q=g):(_=c,T=l,C=u,O=d,X=y,N=x,J=g,q=f)),F===0)return null;let Z=_/F,ie=T/F,se=1/F,Ue=C-Z*B,Je=O-ie*B,ee=X-Z*$,be=N-ie*$,Pe=J-Z*ce,Be=q-ie*ce,Ee=Pe*be-Be*ee,je=Ue*Be-Je*Pe,kt=ee*Je-be*Ue;if(s){if(Ee<0||je<0||kt<0)return null}else if((Ee<0||je<0||kt<0)&&(Ee>0||je>0||kt>0))return null;let Ve=Ee+je+kt;if(Ve===0)return null;let _t=se*(Ee*B+je*$+kt*ce);return(Ve>0?_t<0:_t>0)?null:this.at(_t/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fd=new ut,Os=new ya,Uo=new us,Od=new D,Fo=new D,Oo=new D,zo=new D,Eh=new D,Bo=new D,zd=new D,ko=new D,Mt=class extends qt{constructor(e=new dn,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Eh.fromBufferAttribute(d,e),a?Bo.addScaledVector(Eh,h):Bo.addScaledVector(Eh.sub(t),h))}t.add(Bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(Uo.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Uo,Od)===null||Os.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Fd.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Fd),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let p=u[x],f=a[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,v=E;M<v;M+=3){let w=o.getX(M),_=o.getX(M+1),T=o.getX(M+2);s=Ho(this,f,e,i,c,h,d,w,_,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){let g=o.getX(p),E=o.getX(p+1),M=o.getX(p+2);s=Ho(this,a,e,i,c,h,d,g,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=u.length;x<y;x++){let p=u[x],f=a[p.materialIndex],g=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,v=E;M<v;M+=3){let w=M,_=M+1,T=M+2;s=Ho(this,f,e,i,c,h,d,w,_,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){let g=p,E=p+1,M=p+2;s=Ho(this,a,e,i,c,h,d,g,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Zm(n,e,t,i,s,r,a,o){let l;if(e.side===Tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ms,o),l===null)return null;ko.copy(o),ko.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function Ho(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Fo),n.getVertexPosition(l,Oo),n.getVertexPosition(c,zo);let h=Zm(n,e,t,i,Fo,Oo,zo,zd);if(h){let d=new D;Bi.getBarycoord(zd,Fo,Oo,zo,d),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,l,c,d,new Ge)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,l,c,d,new Ge)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Bi.getNormal(Fo,Oo,zo,u.normal),h.face=u,h.barycoord=d}return h}var Bs=class extends bn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Vt,h=Vt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var va=class extends ti{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new ut,Bd=new ut,Go=[],kd=new Ei,Jm=new ut,aa=new Mt,oa=new us,ds=class extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new va(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),kd.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),oa.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Bd.multiplyMatrices(i,_r),aa.matrixWorld=Bd,aa.raycast(e,Go);for(let a=0,o=Go.length;a<o;a++){let l=Go[a];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Uc,ni));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zs=new us,Km=new Ge(.5,.5),Vo=new D,fs=class{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],x=r[8],y=r[9],p=r[10],f=r[11],g=r[12],E=r[13],M=r[14],v=r[15];if(s[0].setComponents(c-a,m-h,f-x,v-g).normalize(),s[1].setComponents(c+a,m+h,f+x,v+g).normalize(),s[2].setComponents(c+o,m+d,f+y,v+E).normalize(),s[3].setComponents(c-o,m-d,f-y,v-E).normalize(),i)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,m-u,f-p,v-M).normalize();else if(s[4].setComponents(c-l,m-u,f-p,v-M).normalize(),t===ei)s[5].setComponents(c+l,m+u,f+p,v+M).normalize();else if(t===Er)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=Km.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hd=new ut,hc=class n{constructor(){this.coordinateSystem=ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Hd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new fs),i[s].setFromProjectionMatrix(Hd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ma=class extends bn{constructor(e=[],t=Xs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sa=class extends bn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends bn{constructor(e,t,i=di,s,r,a,o=Vt,l=Vt,c,h=Hi,d=1){if(h!==Hi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends Wi{constructor(e,t=di,i=Xs,s,r,a=Vt,o=Vt,l,c=Hi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ea=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ps=class n extends dn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function x(y,p,f,g,E,M,v,w,_,T,F){let C=M/_,O=v/T,B=M/2,X=v/2,N=w/2,$=_+1,J=T+1,q=0,ce=0,Z=new D;for(let ie=0;ie<J;ie++){let se=ie*O-X;for(let Ue=0;Ue<$;Ue++){let Je=Ue*C-B;Z[y]=Je*g,Z[p]=se*E,Z[f]=N,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[f]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ue/_),d.push(1-ie/T),q+=1}}for(let ie=0;ie<T;ie++)for(let se=0;se<_;se++){let Ue=u+se+$*ie,Je=u+se+$*(ie+1),ee=u+(se+1)+$*(ie+1),be=u+(se+1)+$*ie;l.push(Ue,Je,be),l.push(Je,ee,be),ce+=6}o.addGroup(m,ce,F),m+=ce,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ta=class n extends dn{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,m=2*d+u,x=i*2+r,y=s+1,p=new D,f=new D;for(let g=0;g<=x;g++){let E=0,M=0,v=0,w=0;if(g<=i){let F=g/i,C=F*Math.PI/2;M=-h-e*Math.cos(C),v=e*Math.sin(C),w=-e*Math.cos(C),E=F*d}else if(g<=i+r){let F=(g-i)/r;M=-h+F*t,v=e,w=0,E=d+F*u}else{let F=(g-i-r)/i,C=F*Math.PI/2;M=h+e*Math.sin(C),v=e*Math.cos(C),w=e*Math.sin(C),E=d+u+F*d}let _=Math.max(0,Math.min(1,E/m)),T=0;g===0?T=.5/s:g===x&&(T=-.5/s);for(let F=0;F<=s;F++){let C=F/s,O=C*Math.PI*2,B=Math.sin(O),X=Math.cos(O);f.x=-v*X,f.y=M,f.z=v*B,o.push(f.x,f.y,f.z),p.set(-v*X,w,v*B),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+T,_)}if(g>0){let F=(g-1)*y;for(let C=0;C<s;C++){let O=F+C,B=F+C+1,X=g*y+C,N=g*y+C+1;a.push(O,B,X),a.push(B,N,X)}}}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ms=class n extends dn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new Ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let m=i+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ks=class n extends dn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],x=0,y=[],p=i/2,f=0;g(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(m,2));function g(){let M=new D,v=new D,w=0,_=(t-e)/i;for(let T=0;T<=r;T++){let F=[],C=T/r,O=C*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,N=X*l+o,$=Math.sin(N),J=Math.cos(N);v.x=O*$,v.y=-C*i+p,v.z=O*J,d.push(v.x,v.y,v.z),M.set($,_,J).normalize(),u.push(M.x,M.y,M.z),m.push(X,1-C),F.push(x++)}y.push(F)}for(let T=0;T<s;T++)for(let F=0;F<r;F++){let C=y[F][T],O=y[F+1][T],B=y[F+1][T+1],X=y[F][T+1];(e>0||F!==0)&&(h.push(C,O,X),w+=3),(t>0||F!==r-1)&&(h.push(O,B,X),w+=3)}c.addGroup(f,w,0),f+=w}function E(M){let v=x,w=new Ge,_=new D,T=0,F=M===!0?e:t,C=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*C,0),u.push(0,C,0),m.push(.5,.5),x++;let O=x;for(let B=0;B<=s;B++){let N=B/s*l+o,$=Math.cos(N),J=Math.sin(N);_.x=F*J,_.y=p*C,_.z=F*$,d.push(_.x,_.y,_.z),u.push(0,C,0),w.x=$*.5+.5,w.y=J*.5*C+.5,m.push(w.x,w.y),x++}for(let B=0;B<s;B++){let X=v+B,N=O+B;M===!0?h.push(N,N+1,X):h.push(N+1,N,X),T+=3}c.addGroup(f,T,M===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wa=class n extends ks{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},uc=class n extends dn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let E=new D,M=new D,v=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],E),m(t[w+1],M),m(t[w+2],v),l(E,M,v,g)}function l(g,E,M,v){let w=v+1,_=[];for(let T=0;T<=w;T++){_[T]=[];let F=g.clone().lerp(M,T/w),C=E.clone().lerp(M,T/w),O=w-T;for(let B=0;B<=O;B++)B===0&&T===w?_[T][B]=F:_[T][B]=F.clone().lerp(C,B/O)}for(let T=0;T<w;T++)for(let F=0;F<2*(w-T)-1;F++){let C=Math.floor(F/2);F%2===0?(u(_[T][C+1]),u(_[T+1][C]),u(_[T][C])):(u(_[T][C+1]),u(_[T+1][C+1]),u(_[T+1][C]))}}function c(g){let E=new D;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(g),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let g=new D;for(let E=0;E<r.length;E+=3){g.x=r[E+0],g.y=r[E+1],g.z=r[E+2];let M=p(g)/2/Math.PI+.5,v=f(g)/Math.PI+.5;a.push(M,1-v)}x(),d()}function d(){for(let g=0;g<a.length;g+=6){let E=a[g+0],M=a[g+2],v=a[g+4],w=Math.max(E,M,v),_=Math.min(E,M,v);w>.9&&_<.1&&(E<.2&&(a[g+0]+=1),M<.2&&(a[g+2]+=1),v<.2&&(a[g+4]+=1))}}function u(g){r.push(g.x,g.y,g.z)}function m(g,E){let M=g*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function x(){let g=new D,E=new D,M=new D,v=new D,w=new Ge,_=new Ge,T=new Ge;for(let F=0,C=0;F<r.length;F+=9,C+=6){g.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),w.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),T.set(a[C+4],a[C+5]),v.copy(g).add(E).add(M).divideScalar(3);let O=p(v);y(w,C+0,g,O),y(_,C+2,E,O),y(T,C+4,M,O)}}function y(g,E,M,v){v<0&&g.x===1&&(a[E]=g.x-1),M.x===0&&M.z===0&&(a[E]=v/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Hs=class n extends uc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Gn=class n extends dn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,m=[],x=[],y=[],p=[];for(let f=0;f<h;f++){let g=f*u-a;for(let E=0;E<c;E++){let M=E*d-r;x.push(M,-g,0),y.push(0,0,1),p.push(E/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){let E=g+c*f,M=g+c*(f+1),v=g+1+c*(f+1),w=g+1+c*f;m.push(E,M,w),m.push(M,v,w)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Aa=class n extends dn{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,m=new D,x=new Ge;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let f=r+p/i*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let y=0;y<s;y++){let p=y*(i+1);for(let f=0;f<i;f++){let g=f+p,E=g,M=g+i+1,v=g+i+2,w=g+1;o.push(E,M,w),o.push(M,v,w)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gs=class n extends dn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new D,u=new D,m=[],x=[],y=[],p=[];for(let f=0;f<=i;f++){let g=[],E=f/i,M=a+E*o,v=e*Math.cos(M),w=Math.sqrt(e*e-v*v),_=0;f===0&&a===0?_=.5/t:f===i&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let F=T/t,C=s+F*r;d.x=-w*Math.cos(C),d.y=v,d.z=w*Math.sin(C),x.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(F+_,1-E),g.push(c++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){let E=h[f][g+1],M=h[f][g],v=h[f+1][g],w=h[f+1][g+1];(f!==0||a>0)&&m.push(E,M,w),(f!==i-1||l<Math.PI)&&m.push(M,v,w)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fn=class n extends dn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new D,m=new D,x=new D;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let f=0;f<=s;f++){let g=f/s*r;m.x=(e+t*Math.cos(p))*Math.cos(g),m.y=(e+t*Math.cos(p))*Math.sin(g),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),x.subVectors(m,u).normalize(),h.push(x.x,x.y,x.z),d.push(f/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let f=(s+1)*y+p-1,g=(s+1)*(y-1)+p-1,E=(s+1)*(y-1)+p,M=(s+1)*y+p;l.push(f,g,M),l.push(g,E,M)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Gd(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Gd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=Ys(n[t]);for(let s in i)e[s]=i[s]}return e}function Gd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function au(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Bf={clone:Ys,merge:pn},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dc=class extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var xs=class extends Vi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new $e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fc=class extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mc=class extends _s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=e,o=2*t-i;break;case Ch:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=e,l=2*i-t;break;case Ch:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),y=x*x,p=y*x,f=-u*p+2*u*y-u*x,g=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*x+1,E=(-1-m)*p+(1.5+m)*y+.5*x,M=m*p-m*y;for(let v=0;v!==o;++v)r[v]=f*a[h+v]+g*a[c+v]+E*a[l+v]+M*a[d+v];return r}},gc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},xc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_c=class extends _s{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(i-t)/(s-t),y=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*x;return r}let u=o*2,m=e-1;for(let x=0;x!==o;++x){let y=a[c+x],p=a[l+x],f=m*u+x*2,g=d[f],E=d[f+1],M=e*u+x*2,v=h[M],w=h[M+1],_=n0(i,t,g,v,s);r[x]=kf(_,y,E,w,p)}return r}};function kf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function t0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function n0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=kf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=t0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Wo(e.settings)&&(i.settings={inTangents:yr(e.settings.inTangents,Array),outTangents:yr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _c(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case sc:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break;case wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return sc;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Wo(this.settings)&&(Vd(this.settings.inTangents,e),Vd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Wo(this.settings)&&(Wd(this.settings.inTangents,e),Wd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Pm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$o,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,m=d+i;for(let x=0;x!==i;++x){let y=t[d+x];if(y!==t[u+x]||y!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Wd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=sc;var ys=class extends Vn{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=la;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};yc.prototype.ValueTypeName="color";var vc=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="number";var Mc=class extends _s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ra=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Vn{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=la;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Sc.prototype.ValueTypeName="vector";var bc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hf=new bc,Ec=class{constructor(e){this.manager=e!==void 0?e:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ca=class extends qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ia=class extends Ca{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Th=new ut,Xd=new D,qd=new D,Tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Er||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xo=new D,qo=new kn,Mi=new D,Pa=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,qo,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xo,qo,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new D,$d=new Ge,Yd=new Ge,Mn=class extends Pa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Yd),t.subVectors(Yd,$d)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ih*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var La=class extends Pa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ih=class extends Tc{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vr=-90,Mr=1,Ir=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(vr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new Mn(vr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new Mn(vr,Mr,e,t);a.layers=this.layers,this.add(a);let o=new Mn(vr,Mr,e,t);o.layers=this.layers,this.add(o);let l=new Mn(vr,Mr,e,t);l.layers=this.layers,this.add(l);let c=new Mn(vr,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},wc=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Na=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=i0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function i0(){this._document.hidden===!1&&this.reset()}var ou="\\[\\]\\.:\\/",s0=new RegExp("["+ou+"]","g"),cu="[^"+ou+"]",r0="[^"+ou.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",cu),o0=/(WCOD+)?/.source.replace("WCOD",r0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),h0=new RegExp("^"+a0+o0+c0+l0+"$"),u0=["material","materials","bones","map"],Ph=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(e){let t=h0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);u0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Ph;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kM=new Float32Array(1);var Zd=new ut,Ua=class{constructor(e,t,i=0,s=1/0){this.ray=new ya(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zd),this}intersectObject(e,t=!0,i=[]){return Lh(e,this,i,t),i.sort(Jd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lh(e[s],this,i,t);return i.sort(Jd),i}};function Jd(n,e){return n.distance-e.distance}function Lh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Lh(r[a],e,t,!0)}}var pu=class pu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};pu.prototype.isMatrix2=!0;var Dh=pu;function lu(n,e,t,i){let s=d0(i);switch(t){case Qh:return n*e;case Uc:return n*e/s.components*s.byteLength;case Fc:return n*e/s.components*s.byteLength;case Ss:return n*e*2/s.components*s.byteLength;case Oc:return n*e*2/s.components*s.byteLength;case eu:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case zc:return n*e*4/s.components*s.byteLength;case Oa:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case Bc:case Hc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case Wc:case qc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Ha:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ga:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(n){switch(n){case Dn:case Zh:return{byteLength:1,components:1};case Nr:case Jh:case fi:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case di:case Lc:case ni:return{byteLength:4,components:1};case Kh:case jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);function lp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function f0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],y=d[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,d[u]=y)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let y=d[m];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,ug=`uniform sampler2D dfgLUT;
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
}`,dg=`
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
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
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform float backgroundBlurriness;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Px=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define PHONG
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
}`,Fx=`#define PHONG
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
}`,Ox=`#define STANDARD
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
}`,zx=`#define STANDARD
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
}`,Bx=`#define TOON
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
}`,kx=`#define TOON
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
}`,Hx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:y0,aomap_fragment:v0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:b0,begin_vertex:E0,beginnormal_vertex:T0,bsdfs:w0,iridescence_fragment:A0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:N0,color_pars_vertex:U0,color_vertex:F0,common:O0,defaultnormal_vertex:z0,displacementmap_pars_vertex:B0,displacementmap_vertex:k0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:$0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:rg,envmap_vertex:Z0,fog_vertex:J0,fog_pars_vertex:K0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:cg,lights_phong_pars_fragment:lg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,lightprobes_pars_fragment:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:yg,map_fragment:vg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:bg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:wg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Ig,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:kg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Kg,shadowmask_pars_fragment:jg,skinbase_vertex:Qg,skinning_pars_vertex:ex,skinning_vertex:tx,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ax,transmission_fragment:ox,transmission_pars_fragment:cx,uv_pars_fragment:lx,uv_pars_vertex:hx,uv_vertex:ux,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:xx,cube_frag:_x,depth_vert:yx,depth_frag:vx,distance_vert:Mx,distance_frag:Sx,equirect_vert:bx,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:wx,meshbasic_vert:Ax,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Ix,meshmatcap_vert:Px,meshmatcap_frag:Lx,meshnormal_vert:Dx,meshnormal_frag:Nx,meshphong_vert:Ux,meshphong_frag:Fx,meshphysical_vert:Ox,meshphysical_frag:zx,meshtoon_vert:Bx,meshtoon_frag:kx,points_vert:Hx,points_frag:Gx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ri={basic:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:pn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:pn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:pn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:pn([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:pn([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ri.physical={uniforms:pn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var xl={r:0,b:0,g:0},$x=new ut,hp=new Ye;hp.set(-1,0,0,0,1,0,0,0,1);function Yx(n,e,t,i,s,r){let a=new $e(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function m(g){let E=g.isScene===!0?g.background:null;if(E&&E.isTexture){let M=g.backgroundBlurriness>0;E=e.get(E,M)}return E}function x(g){let E=!1,M=m(g);M===null?p(a,o):M&&M.isColor&&(p(M,1),E=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,E){let M=m(E);M&&M.isCubeTexture?(c===void 0&&(c=new Mt(new ps(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Ys(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hp),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Mt(new Gn(2,2),new Ti({name:"BackgroundMaterial",uniforms:Ys(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function p(g,E){g.getRGB(xl,au(n)),t.buffers.color.setClear(xl.r,xl.g,xl.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,E=1){a.set(g),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,p(a,o)},render:x,addToRenderList:y,dispose:f}}function Zx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(O,B,X,N,$){let J=!1,q=d(O,N,X,B);r!==q&&(r=q,c(r.object)),J=m(O,N,X,$),J&&x(O,N,X,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(O,B,X,N),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function d(O,B,X,N){let $=N.wireframe===!0,J=i[B.id];J===void 0&&(J={},i[B.id]=J);let q=O.isInstancedMesh===!0?O.id:0,ce=J[q];ce===void 0&&(ce={},J[q]=ce);let Z=ce[X.id];Z===void 0&&(Z={},ce[X.id]=Z);let ie=Z[$];return ie===void 0&&(ie=u(l()),Z[$]=ie),ie}function u(O){let B=[],X=[],N=[];for(let $=0;$<t;$++)B[$]=0,X[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:N,object:O,attributes:{},index:null}}function m(O,B,X,N){let $=r.attributes,J=B.attributes,q=0,ce=X.getAttributes();for(let Z in ce)if(ce[Z].location>=0){let se=$[Z],Ue=J[Z];if(Ue===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(Ue=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(Ue=O.instanceColor)),se===void 0||se.attribute!==Ue||Ue&&se.data!==Ue.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function x(O,B,X,N){let $={},J=B.attributes,q=0,ce=X.getAttributes();for(let Z in ce)if(ce[Z].location>=0){let se=J[Z];se===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(se=O.instanceColor));let Ue={};Ue.attribute=se,se&&se.data&&(Ue.data=se.data),$[Z]=Ue,q++}r.attributes=$,r.attributesNum=q,r.index=N}function y(){let O=r.newAttributes;for(let B=0,X=O.length;B<X;B++)O[B]=0}function p(O){f(O,0)}function f(O,B){let X=r.newAttributes,N=r.enabledAttributes,$=r.attributeDivisors;X[O]=1,N[O]===0&&(n.enableVertexAttribArray(O),N[O]=1),$[O]!==B&&(n.vertexAttribDivisor(O,B),$[O]=B)}function g(){let O=r.newAttributes,B=r.enabledAttributes;for(let X=0,N=B.length;X<N;X++)B[X]!==O[X]&&(n.disableVertexAttribArray(X),B[X]=0)}function E(O,B,X,N,$,J,q){q===!0?n.vertexAttribIPointer(O,B,X,$,J):n.vertexAttribPointer(O,B,X,N,$,J)}function M(O,B,X,N){y();let $=N.attributes,J=X.getAttributes(),q=B.defaultAttributeValues;for(let ce in J){let Z=J[ce];if(Z.location>=0){let ie=$[ce];if(ie===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){let se=ie.normalized,Ue=ie.itemSize,Je=e.get(ie);if(Je===void 0)continue;let ee=Je.buffer,be=Je.type,Pe=Je.bytesPerElement,Be=be===n.INT||be===n.UNSIGNED_INT||ie.gpuType===Lc;if(ie.isInterleavedBufferAttribute){let Ee=ie.data,je=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,kt=ie.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let Ve=0;Ve<Z.locationSize;Ve++)f(Z.location+Ve,Ee.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)p(Z.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Ve=0;Ve<Z.locationSize;Ve++)E(Z.location+Ve,Ue/Z.locationSize,be,se,je*Pe,(kt+Ue/Z.locationSize*Ve)*Pe,Be)}else{if(ie.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)f(Z.location+Ee,ie.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)p(Z.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Ee=0;Ee<Z.locationSize;Ee++)E(Z.location+Ee,Ue/Z.locationSize,be,se,Ue*Pe,Ue/Z.locationSize*Ee*Pe,Be)}}else if(q!==void 0){let se=q[ce];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Z.location,se);break;case 3:n.vertexAttrib3fv(Z.location,se);break;case 4:n.vertexAttrib4fv(Z.location,se);break;default:n.vertexAttrib1fv(Z.location,se)}}}}g()}function v(){F();for(let O in i){let B=i[O];for(let X in B){let N=B[X];for(let $ in N){let J=N[$];for(let q in J)h(J[q].object),delete J[q];delete N[$]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;let B=i[O.id];for(let X in B){let N=B[X];for(let $ in N){let J=N[$];for(let q in J)h(J[q].object),delete J[q];delete N[$]}}delete i[O.id]}function _(O){for(let B in i){let X=i[B];for(let N in X){let $=X[N];if($[O.id]===void 0)continue;let J=$[O.id];for(let q in J)h(J[q].object),delete J[q];delete $[O.id]}}}function T(O){for(let B in i){let X=i[B],N=O.isInstancedMesh===!0?O.id:0,$=X[N];if($!==void 0){for(let J in $){let q=$[J];for(let ce in q)h(q[ce].object),delete q[ce];delete $[J]}delete X[N],Object.keys(X).length===0&&delete i[B]}}}function F(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function Jx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Kx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Wn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Dn&&_!==ni&&!T&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:M,maxSamples:v,samples:w}}function jx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ui,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||s;return s=u,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let g=r?0:i,E=g*4,M=f.clippingState||null;l.value=M,M=h(x,u,E,m);for(let v=0;v!==E;++v)M[v]=t[v];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,x){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,x!==!0||p===null){let f=m+y*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,M=m;E!==y;++E,M+=4)a.copy(d[E]).applyMatrix4(g,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var Xa=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ps(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Vs});r.uniforms.tEquirect.value=t;let a=new Mt(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Sn),new Ir(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Gf=256,Qx=3,e_=20,up=256,dp=16,t_=3,n_=new D,i_=new $e,yl=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ir(1,10,null),this._boxMesh=new Mt(new ps(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=n_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,x=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(i_));let p=new Ir(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=x,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gf,Nf(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===Dr?this._setSize(e.image.length===0?Gf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Vf(e,!1,!1),i=Math.log2(e)-Qx;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Vf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=s_(),this._integrationMaterial=r_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/dp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-t_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(up*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=a_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Vf(n,e,t){return new Xa(n,{minFilter:Xi,generateMipmaps:e,type:fi,colorSpace:ha,depthBuffer:t})}function qa(n,e,t){return new Ti({name:n,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:Tn,blending:Vs,depthTest:!1,depthWrite:!1})}function s_(){return qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${up}u

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
	`)}function r_(){return qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dp}},`

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
	`)}function a_(){return qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${e_}
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
	`)}function Wf(){return qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xf(){return qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Cc||m===Ic)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new Xa(x.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,x=m===Cc||m===Ic,y=m===Xs||m===Dr;if(x||y){let p=t.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new yl(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let g=u.image;return x&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new yl(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Cc?u.mapping=Xs:m===Ic&&(u.mapping=Dr),u}function l(u){let m=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function c_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ca("WebGLRenderer: "+i+" extension not supported."),s}}}function l_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let y=r.get(x);y&&(e.remove(y),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(x){let y=x.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function d(x){let y=x.index,p=x.attributes.position,f=0;if(p===void 0)return;let g=y!==null?y.array.length:p.array.length/3-1,E=p.count>=65535?ga:ma,M=new E(Math.ceil(g/3)*6,1),v=M.array;if(y!==null){let _=y.array;f=y.version;for(let T=0,F=0;T<g;T+=3){let C=_[T+0],O=_[T+1],B=_[T+2];v[F++]=C,v[F++]=O,v[F++]=O,v[F++]=B,v[F++]=B,v[F++]=C}}else{f=p.version;for(let _=0,T=0;_<g;_+=3){let F=_+0,C=_+1,O=_+2;v[T++]=F,v[T++]=C,v[T++]=C,v[T++]=O,v[T++]=O,v[T++]=F}}M.version=f;let w=r.get(x);w&&e.remove(w),r.set(x,M)}function u(x){let y=r.get(x);if(y){let p=x.index;p!==null&&y.version<p.version&&d(x)}else d(x);return r.get(x)}function m(){for(let x in s){let y=s[x].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function h_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,d*a,m),t.update(u,i,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,m);let y=0;for(let p=0;p<m;p++)y+=u[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d_(n,e,t){let i=new WeakMap,s=new Dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let F=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],E=0;m===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,v=1;M>e.maxTextureSize&&(v=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*v*4*d),_=new pa(w,M,v,d);_.type=ni,_.needsUpdate=!0;let T=E*4;for(let C=0;C<d;C++){let O=p[C],B=f[C],X=g[C],N=M*v*4*C;for(let $=0;$<O.count;$++){let J=$*T;m===!0&&(s.fromBufferAttribute(O,$),w[N+J+0]=s.x,w[N+J+1]=s.y,w[N+J+2]=s.z,w[N+J+3]=0),x===!0&&(s.fromBufferAttribute(B,$),w[N+J+4]=s.x,w[N+J+5]=s.y,w[N+J+6]=s.z,w[N+J+7]=0),y===!0&&(s.fromBufferAttribute(X,$),w[N+J+8]=s.x,w[N+J+9]=s.y,w[N+J+10]=s.z,w[N+J+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Ge(M,v)},i.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function f_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var p_={[Hh]:"LINEAR_TONE_MAPPING",[Gh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[Wh]:"ACES_FILMIC_TONE_MAPPING",[qh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function m_(n,e,t,i,s,r){let a=new Hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new dn;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));let d=new dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Mt(h,d),m=new La(-1,1,1,-1,0,1),x=null,y=null,p=!1,f,g=null,E=[],M=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),l!==null&&l.setSize(v,w);for(let _=0;_<E.length;_++){let T=E[_];T.setSize&&T.setSize(v,w)}},this.setEffects=function(v){E=v,M=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new Hn(w,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(w,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&E.some(F=>F.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Wi(w,_),r===!0&&(c.format=qi,c.type=qs)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let F=0;F<E.length;F++){let C=E[F];C.setSize&&C.setSize(w,_),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(v,w){if(p||v.toneMapping===wi&&E.length===0)return!1;if(g=w,w!==null){let _=w.width,T=w.height;(a.width!==_||a.height!==T)&&this.setSize(_,T)}return M===!1&&v.setRenderTarget(a),f=v.toneMapping,v.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(v,w){v.toneMapping=f,p=!0;let _=a,T=o;for(let F=0;F<E.length;F++){let C=E[F];C.enabled!==!1&&(C.render(v,T,_,w),C.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(x!==v.outputColorSpace||y!==v.toneMapping){x=v.outputColorSpace,y=v.toneMapping,d.defines={},ot.getTransfer(x)===gt&&(d.defines.SRGB_TRANSFER="");let F=p_[y];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(g),v.render(u,m),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var fp=new bn,pp=new Wi(1,1),mp=new ba(1),gp=new pa,xp=new cc,_p=new Ma,qf=[],$f=[],Yf=new Float32Array(16),Zf=new Float32Array(9),Jf=new Float32Array(4);function Fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=qf[s];if(r===void 0&&(r=new Float32Array(s),qf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ml(n,e){let t=$f[e];t===void 0&&(t=new Int32Array(e),$f[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function v_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;Jf.set(i),n.uniformMatrix2fv(this.addr,!1,Jf),Yt(t,i)}}function M_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;Zf.set(i),n.uniformMatrix3fv(this.addr,!1,Zf),Yt(t,i)}}function S_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;Yf.set(i),n.uniformMatrix4fv(this.addr,!1,Yf),Yt(t,i)}}function b_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function A_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function Sl(n){return n.version===0&&(n.compareFunction=iu,n.needsUpdate=!0),n}function P_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Sl(pp):r=fp,t.setTexture2D(e||r,s)}function L_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xp,s)}function D_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Sl(mp):r=_p,t.setTextureCube(e||r,s)}function N_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gp,s)}function U_(n){switch(n){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return w_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(n,e){n.uniform1fv(this.addr,e)}function O_(n,e){let t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function z_(n,e){let t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function B_(n,e){let t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function k_(n,e){let t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H_(n,e){let t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G_(n,e){let t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function X_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function $_(n,e){n.uniform1uiv(this.addr,e)}function Y_(n,e){n.uniform2uiv(this.addr,e)}function Z_(n,e){n.uniform3uiv(this.addr,e)}function J_(n,e){n.uniform4uiv(this.addr,e)}function K_(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Sl(pp):a=fp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function j_(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xp,r[a])}function Q_(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Sl(mp):a=_p;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ey(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gp,r[a])}function ty(n){switch(n){case 5126:return F_;case 35664:return O_;case 35665:return z_;case 35666:return B_;case 35674:return k_;case 35675:return H_;case 35676:return G_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return $_;case 36294:return Y_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ey}}var xu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},_u=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},mu=/(\w+)(\])?(\[|\.)?/g;function Kf(n,e){n.seq.push(e),n.map[e.id]=e}function ny(n,e,t){let i=n.name,s=i.length;for(mu.lastIndex=0;;){let r=mu.exec(i),a=mu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kf(t,c===void 0?new xu(o,n,e):new _u(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new yu(o),Kf(t,d)),t=d}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ny(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function jf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iy=37297,sy=0;function ry(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Qf=new Ye;function ay(n){ot._getMatrix(Qf,ot.workingColorSpace,n);let e=`mat3( ${Qf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case ua:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ep(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ry(n.getShaderSource(e),o)}else return r}function oy(n,e){let t=ay(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var cy={[Hh]:"Linear",[Gh]:"Reinhard",[Vh]:"Cineon",[Wh]:"ACESFilmic",[qh]:"AgX",[$h]:"Neutral",[Xh]:"Custom"};function ly(n,e){let t=cy[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new D;function hy(){ot.getLuminanceCoefficients(_l);let n=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function dy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wa(n){return n!==""}function tp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function np(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(n){return n.replace(py,my)}function my(n,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return vu(t)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(n){return n.replace(gy,xy)}function xy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var _y={[Gs]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function yy(n){return _y[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vy={[Dr]:"ENVMAP_MODE_REFRACTION"};function My(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sy={[kh]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[vf]:"ENVMAP_BLENDING_ADD"};function by(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[n.combine]||"ENVMAP_BLENDING_NONE"}function Ey(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=yy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=My(t),d=by(t),u=uy(t),m=dy(r),x=s.createProgram(),y,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wa).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wa).join(`
`),p.length>0&&(p+=`
`)):(y=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),p=[sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?nt.tonemapping_pars_fragment:"",t.toneMapping!==wi?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),a=vu(a),a=tp(a,t),a=np(a,t),o=vu(o),o=tp(o,t),o=np(o,t),a=ip(a),o=ip(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=f+y+a,E=f+p+o,M=jf(s,s.VERTEX_SHADER,g),v=jf(s,s.FRAGMENT_SHADER,E);s.attachShader(x,M),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(v)||"",N=O.trim(),$=B.trim(),J=X.trim(),q=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,M,v);else{let Z=ep(s,M,"vertex"),ie=ep(s,v,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Z+`
`+ie)}else N!==""?Xe("WebGLProgram: Program Info Log:",N):($===""||J==="")&&(ce=!1);ce&&(C.diagnostics={runnable:q,programLog:N,vertexShader:{log:$,prefix:y},fragmentShader:{log:J,prefix:p}})}s.deleteShader(M),s.deleteShader(v),_=new Ur(s,x),T=fy(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(x,iy)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=v,this}var Ty=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Su(e),t.set(e,i)),i}},Su=class{constructor(e){this.id=Ty++,this.code=e,this.usedTimes=0}};function wy(n){return n===Ss||n===Ha||n===Ga}function Ay(n,e,t,i,s,r){let a=new Ar,o=new Mu,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,F,C,O,B){let X=C.fog,N=O.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||$,J),ce=u[_.type],Z=i.precision;_.precision!==null&&(Z=i.getMaxPrecision(_.precision),Z!==_.precision&&Xe("WebGLProgram.getParameters:",_.precision,"not supported, using",Z,"instead."));let ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=ie!==void 0?ie.length:0,Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let Je,ee,be,Pe;if(ce){let Me=Ri[ce];Je=Me.vertexShader,ee=Me.fragmentShader}else{Je=_.vertexShader,ee=_.fragmentShader;let Me=o.getVertexShaderStage(_),yt=o.getFragmentShaderStage(_);o.update(_,Me,yt),be=Me.id,Pe=yt.id}let Be=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),je=O.isInstancedMesh===!0,kt=O.isBatchedMesh===!0,Ve=!!_.map,_t=!!_.matcap,Tt=!!q,st=Tt&&q.isPMREMTexture===!0,sn=!!_.aoMap,Wt=!!_.lightMap,In=!!_.bumpMap&&_.wireframe===!1,Nt=!!_.normalMap,vi=!!_.displacementMap,Kt=!!_.emissiveMap,Zn=!!_.metalnessMap,Jn=!!_.roughnessMap,Kn=_.anisotropy>0,z=_.clearcoat>0,jn=_.diffuseRoughness>0,Pt=_.dispersion>0,Lt=_.retroreflectivity>0,ve=_.iridescence>0,Xt=_.sheen>0,ke=_.transmission>0,Ze=Kn&&!!_.anisotropyMap,A=z&&!!_.clearcoatMap,S=z&&!!_.clearcoatNormalMap,G=z&&!!_.clearcoatRoughnessMap,oe=jn&&!!_.diffuseRoughnessMap,ne=ve&&!!_.iridescenceMap,de=ve&&!!_.iridescenceThicknessMap,_e=Xt&&!!_.sheenColorMap,K=Xt&&!!_.sheenRoughnessMap,Q=!!_.specularMap,pe=!!_.specularColorMap,L=!!_.specularIntensityMap,te=ke&&!!_.transmissionMap,Y=ke&&!!_.thicknessMap,me=!!_.gradientMap,ue=!!_.alphaMap,fe=_.alphaTest>0,Oe=!!_.alphaHash,tt=!!_.extensions,le=wi;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(le=n.toneMapping);let ze=st?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Qe={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:Je,fragmentShader:ee,defines:_.defines,customVertexShaderID:be,customFragmentShaderID:Pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Z,batching:kt,batchingColor:kt&&O._colorsTexture!==null,instancing:je,instancingColor:je&&O.instanceColor!==null,instancingMorph:je&&O.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:_t,envMap:Tt,envMapMode:Tt&&q.mapping,envMapPMREM:st,envMapMaxLod:st?ze.length-1:null,envMapSize:st?ze[0].width:null,aoMap:sn,lightMap:Wt,bumpMap:In,normalMap:Nt,displacementMap:vi,emissiveMap:Kt,normalMapObjectSpace:Nt&&_.normalMapType===bf,normalMapTangentSpace:Nt&&_.normalMapType===ml,packedNormalMap:Nt&&_.normalMapType===ml&&wy(_.normalMap.format),metalnessMap:Zn,roughnessMap:Jn,anisotropy:Kn,anisotropyMap:Ze,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:jn,diffuseRoughnessMap:oe,dispersion:Pt,retroreflection:Lt,iridescence:ve,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:Xt,sheenColorMap:_e,sheenRoughnessMap:K,specularMap:Q,specularColorMap:pe,specularIntensityMap:L,transmission:ke,transmissionMap:te,thicknessMap:Y,gradientMap:me,opaque:_.transparent===!1&&_.blending===Lr&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:fe,alphaHash:Oe,combine:_.combine,mapUv:Ve&&m(_.map.channel),aoMapUv:sn&&m(_.aoMap.channel),lightMapUv:Wt&&m(_.lightMap.channel),bumpMapUv:In&&m(_.bumpMap.channel),normalMapUv:Nt&&m(_.normalMap.channel),displacementMapUv:vi&&m(_.displacementMap.channel),emissiveMapUv:Kt&&m(_.emissiveMap.channel),metalnessMapUv:Zn&&m(_.metalnessMap.channel),roughnessMapUv:Jn&&m(_.roughnessMap.channel),anisotropyMapUv:Ze&&m(_.anisotropyMap.channel),clearcoatMapUv:A&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&m(_.sheenRoughnessMap.channel),specularMapUv:Q&&m(_.specularMap.channel),specularColorMapUv:pe&&m(_.specularColorMap.channel),specularIntensityMapUv:L&&m(_.specularIntensityMap.channel),transmissionMapUv:te&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:ue&&m(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Nt||Kn),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ve||ue),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Kt&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:tt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&_.extensions.multiDraw===!0||kt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function y(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)T.push(F),T.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(T,_),f(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function f(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function g(_){let T=u[_.type],F;if(T){let C=Ri[T];F=Bf.clone(C.uniforms)}else F=_.uniforms;return F}function E(_,T){let F=h.get(T);return F!==void 0?++F.usedTimes:(F=new Ey(n,T,_,s),c.push(F),h.set(T,F)),F}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:g,acquireProgram:E,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:w}}function Ry(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ap(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,y,p,f){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:f},n[e]=g):(g.id=u.id,g.object=u,g.geometry=m,g.material=x,g.materialVariant=a(u),g.groupOrder=y,g.renderOrder=u.renderOrder,g.z=p,g.group=f),e++,g}function l(u,m,x,y,p,f,g){g.reversedDepth===!0&&(p=-p);let E=o(u,m,x,y,p,f);x.transmission>0?i.push(E):x.transparent===!0?s.push(E):t.push(E)}function c(u,m,x,y,p,f){let g=o(u,m,x,y,p,f);x.transmission>0?i.unshift(g):x.transparent===!0?s.unshift(g):t.unshift(g)}function h(u,m){t.length>1&&t.sort(u||Cy),i.length>1&&i.sort(m||rp),s.length>1&&s.sort(m||rp)}function d(){for(let u=e,m=n.length;u<m;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Iy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ap,n.set(i,[a])):s>=r.length?(a=new ap,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Py(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Ly(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Dy=0;function Ny(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uy(n){let e=new Py,t=Ly(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ut,a=new ut;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,x=0,y=0,p=0,f=0,g=0,E=0,M=0,v=0,w=0,_=0,T=0,F=0,C=0;c.sort(Ny);for(let B=0,X=c.length;B<X;B++){let N=c[B],$=N.color,J=N.intensity,q=N.distance,ce=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ss?ce=N.shadow.map.texture:ce=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=$.r*J,d+=$.g*J,u+=$.b*J;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],J);C++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[x]=se,i.sunShadowMap[x]=ce;let Ue=ie.getViewportCount();for(let Je=0;Je<Ue;Je++)i.sunShadowMatrix[y+Je]=ie.getMatrix(Je),i.sunShadowCascade[y+Je]=ie._cascadeData[Je];y+=Ue,x++}i.sun[m]=Z,m++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=ce,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=Z,p++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy($).multiplyScalar(J),Z.distance=q,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[g]=Z;let ie=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,ie.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[g]=ie.matrix,N.castShadow){let se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=ce,_++}g++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy($).multiplyScalar(J),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=Z,E++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let ie=N.shadow,se=t.get(N);se.shadowIntensity=ie.intensity,se.shadowBias=ie.bias,se.shadowNormalBias=ie.normalBias,se.shadowRadius=ie.radius,se.shadowMapSize=ie.mapSize,se.shadowCameraNear=ie.camera.near,se.shadowCameraFar=ie.camera.far,i.pointShadow[f]=se,i.pointShadowMap[f]=ce,i.pointShadowMatrix[f]=N.shadow.matrix,w++}i.point[f]=Z,f++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(J),Z.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[M]=Z,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let O=i.hash;(O.sunLength!==m||O.directionalLength!==p||O.pointLength!==f||O.spotLength!==g||O.rectAreaLength!==E||O.hemiLength!==M||O.numSunShadows!==x||O.numDirectionalShadows!==v||O.numPointShadows!==w||O.numSpotShadows!==_||O.numSpotMaps!==T||O.numLightProbes!==C)&&(i.sun.length=m,i.directional.length=p,i.spot.length=g,i.rectArea.length=E,i.point.length=f,i.hemi.length=M,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-F,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=C,O.sunLength=m,O.directionalLength=p,O.pointLength=f,O.spotLength=g,O.rectAreaLength=E,O.hemiLength=M,O.numSunShadows=x,O.numDirectionalShadows=v,O.numPointShadows=w,O.numSpotShadows=_,O.numSpotMaps=T,O.numLightProbes=C,i.version=Dy++)}function l(c,h){let d=0,u=0,m=0,x=0,y=0,p=0,f=h.matrixWorldInverse;for(let g=0,E=c.length;g<E;g++){let M=c[g];if(M.isSunLight){let v=i.sun[d];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(M.isSpotLight){let v=i.spot[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let v=i.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let v=i.point[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:i}}function op(n){let e=new Uy(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Fy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new op(n),e.set(s,[o])):r>=a.length?(o=new op(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
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
}`,By=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ky=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],cp=new ut,Va=new D,gu=new D;function Hy(n,e,t){let i=new fs,s=new Ge,r=new Ge,a=new Dt,o=new fc,l=new pc,c={},h=t.maxTextureSize,d={[Ms]:Tn,[Tn]:Ms,[Ln]:Ln},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Oy,fragmentShader:zy}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new dn;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Mt(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let f=this.type;this.render=function(w,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Qd&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);let F=n.getRenderTarget(),C=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Vs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=f!==this.type;X&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach($=>$.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,$=w.length;N<$;N++){let J=w[N],q=J.shadow;if(q===void 0){Xe("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ce=q.getFrameExtents();s.multiply(ce),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||X===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Pr){if(J.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Hn(s.x,s.y,{format:Ss,type:fi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new Wi(s.x,s.y,ni),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=Hi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Vt,q.map.depthTexture.magFilter=Vt}else J.isPointLight?(q.map=new Xa(s.x),q.map.depthTexture=new ba(s.x,di)):(q.map=new Hn(s.x,s.y),q.map.depthTexture=new Wi(s.x,s.y,di)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=Hi,this.type===Gs?(q.map.depthTexture.compareFunction=Z?nu:tu,q.map.depthTexture.minFilter=Sn,q.map.depthTexture.magFilter=Sn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Vt,q.map.depthTexture.magFilter=Vt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ie=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,T);let se=q.camera.layers.mask&4294967294?q.camera.layers:T.layers;for(let Ue=0;Ue<ie;Ue++){let Je=q.getCamera(Ue);if(J.isPointLight){let ee=q.camera,be=q.matrix,Pe=J.distance||ee.far;Pe!==ee.far&&(ee.far=Pe,ee.updateProjectionMatrix()),Va.setFromMatrixPosition(J.matrixWorld),ee.position.copy(Va),gu.copy(ee.position),gu.add(By[Ue]),ee.up.copy(ky[Ue]),ee.lookAt(gu),ee.updateMatrixWorld(),be.makeTranslation(-Va.x,-Va.y,-Va.z),cp.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(cp,ee.coordinateSystem,ee.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,Ue),n.clear();else{Ue===0&&(n.setRenderTarget(q.map),n.clear());let ee=q.getViewport(Ue);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),B.viewport(a)}i=q.getFrustum(Ue),M(_,T,Je,J,se,this.type)}q.isPointLightShadow!==!0&&this.type===Pr&&g(q,T),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(F,C,O)};function g(w,_){let T=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Hn(s.x,s.y,{format:Ss,type:fi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,T,u,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,T,m,y,null)}function E(w,_,T,F){let C=null,O=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)C=O;else if(C=T.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=C.uuid,X=_.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let $=N[X];$===void 0&&($=C.clone(),N[X]=$,_.addEventListener("dispose",v)),C=$}if(C.visible=_.visible,C.wireframe=_.wireframe,F===Pr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=n.properties.get(C);B.light=T}return C}function M(w,_,T,F,C,O){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Pr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let N=e.update(w),$=w.material;if(Array.isArray($)){let J=N.groups;for(let q=0,ce=J.length;q<ce;q++){let Z=J[q],ie=$[Z.materialIndex];if(ie&&ie.visible){let se=E(w,ie,F,O);w.onBeforeShadow(n,w,_,T,N,se,Z),n.renderBufferDirect(T,null,N,se,w,Z),w.onAfterShadow(n,w,_,T,N,se,Z)}}}else if($.visible){let J=E(w,$,F,O);w.onBeforeShadow(n,w,_,T,N,J,null),n.renderBufferDirect(T,null,N,J,w,null),w.onAfterShadow(n,w,_,T,N,J,null)}}let X=w.children;for(let N=0,$=X.length;N<$;N++)M(X[N],_,T,F,C,O)}function v(w){w.target.removeEventListener("dispose",v);for(let T in c){let F=c[T],C=w.target.uuid;C in F&&(F[C].dispose(),delete F[C])}}}function Gy(n,e){function t(){let L=!1,te=new Dt,Y=null,me=new Dt(0,0,0,0);return{setMask:function(ue){Y!==ue&&!L&&(n.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){L=ue},setClear:function(ue,fe,Oe,tt,le){le===!0&&(ue*=tt,fe*=tt,Oe*=tt),te.set(ue,fe,Oe,tt),me.equals(te)===!1&&(n.clearColor(ue,fe,Oe,tt),me.copy(te))},reset:function(){L=!1,Y=null,me.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,Y=null,me=null,ue=null;return{setReversed:function(fe){if(te!==fe){let Oe=e.get("EXT_clip_control");fe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),te=fe;let tt=ue;ue=null,this.setClear(tt)}},getReversed:function(){return te},setTest:function(fe){fe?Ee(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!L&&(n.depthMask(fe),Y=fe)},setFunc:function(fe){if(te&&(fe=Df[fe]),me!==fe){switch(fe){case Zo:n.depthFunc(n.NEVER);break;case Jo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case jo:n.depthFunc(n.EQUAL);break;case Qo:n.depthFunc(n.GEQUAL);break;case ec:n.depthFunc(n.GREATER);break;case tc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ue!==fe&&(ue=fe,te&&(fe=1-fe),n.clearDepth(fe))},reset:function(){L=!1,Y=null,me=null,ue=null,te=!1}}}function s(){let L=!1,te=null,Y=null,me=null,ue=null,fe=null,Oe=null,tt=null,le=null;return{setTest:function(ze){L||(ze?Ee(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(ze){te!==ze&&!L&&(n.stencilMask(ze),te=ze)},setFunc:function(ze,Qe,Me){(Y!==ze||me!==Qe||ue!==Me)&&(n.stencilFunc(ze,Qe,Me),Y=ze,me=Qe,ue=Me)},setOp:function(ze,Qe,Me){(fe!==ze||Oe!==Qe||tt!==Me)&&(n.stencilOp(ze,Qe,Me),fe=ze,Oe=Qe,tt=Me)},setLocked:function(ze){L=ze},setClear:function(ze){le!==ze&&(n.clearStencil(ze),le=ze)},reset:function(){L=!1,te=null,Y=null,me=null,ue=null,fe=null,Oe=null,tt=null,le=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],y=null,p=!1,f=null,g=null,E=null,M=null,v=null,w=null,_=null,T=new $e(0,0,0),F=0,C=!1,O=null,B=null,X=null,N=null,$=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ce=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ce>=1):Z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ce>=2);let ie=null,se={},Ue=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),ee=new Dt().fromArray(Ue),be=new Dt().fromArray(Je);function Pe(L,te,Y,me){let ue=new Uint8Array(4),fe=n.createTexture();n.bindTexture(L,fe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<Y;Oe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(te+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return fe}let Be={};Be[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),a.setFunc(br),In(!1),Nt(Nh),Ee(n.CULL_FACE),sn(Vs);function Ee(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function je(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function kt(L,te){return u[L]!==te?(n.bindFramebuffer(L,te),u[L]=te,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ve(L,te){let Y=x,me=!1;if(L){Y=m.get(te),Y===void 0&&(Y=[],m.set(te,Y));let ue=L.textures;if(Y.length!==ue.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Oe=ue.length;fe<Oe;fe++)Y[fe]=n.COLOR_ATTACHMENT0+fe;Y.length=ue.length,me=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,me=!0);me&&n.drawBuffers(Y)}function _t(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let Tt={[Ws]:n.FUNC_ADD,[tf]:n.FUNC_SUBTRACT,[nf]:n.FUNC_REVERSE_SUBTRACT};Tt[sf]=n.MIN,Tt[rf]=n.MAX;let st={[af]:n.ZERO,[of]:n.ONE,[cf]:n.SRC_COLOR,[zh]:n.SRC_ALPHA,[pf]:n.SRC_ALPHA_SATURATE,[df]:n.DST_COLOR,[hf]:n.DST_ALPHA,[lf]:n.ONE_MINUS_SRC_COLOR,[Bh]:n.ONE_MINUS_SRC_ALPHA,[ff]:n.ONE_MINUS_DST_COLOR,[uf]:n.ONE_MINUS_DST_ALPHA,[mf]:n.CONSTANT_COLOR,[gf]:n.ONE_MINUS_CONSTANT_COLOR,[xf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function sn(L,te,Y,me,ue,fe,Oe,tt,le,ze){if(L===Vs){p===!0&&(je(n.BLEND),p=!1);return}if(p===!1&&(Ee(n.BLEND),p=!0),L!==ef){if(L!==f||ze!==C){if((g!==Ws||v!==Ws)&&(n.blendEquation(n.FUNC_ADD),g=Ws,v=Ws),ze)switch(L){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uh:n.blendFunc(n.ONE,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",L);break}else switch(L){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",L);break}E=null,M=null,w=null,_=null,T.set(0,0,0),F=0,f=L,C=ze}return}ue=ue||te,fe=fe||Y,Oe=Oe||me,(te!==g||ue!==v)&&(n.blendEquationSeparate(Tt[te],Tt[ue]),g=te,v=ue),(Y!==E||me!==M||fe!==w||Oe!==_)&&(n.blendFuncSeparate(st[Y],st[me],st[fe],st[Oe]),E=Y,M=me,w=fe,_=Oe),(tt.equals(T)===!1||le!==F)&&(n.blendColor(tt.r,tt.g,tt.b,le),T.copy(tt),F=le),f=L,C=!1}function Wt(L,te){L.side===Ln?je(n.CULL_FACE):Ee(n.CULL_FACE);let Y=L.side===Tn;te&&(Y=!Y),In(Y),L.blending===Lr&&L.transparent===!1?sn(Vs):sn(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function In(L){O!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),O=L)}function Nt(L){L!==Kd?(Ee(n.CULL_FACE),L!==B&&(L===Nh?n.cullFace(n.BACK):L===jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),B=L}function vi(L){L!==X&&(q&&n.lineWidth(L),X=L)}function Kt(L,te,Y){L?(Ee(n.POLYGON_OFFSET_FILL),(N!==te||$!==Y)&&(N=te,$=Y,a.getReversed()&&(te=-te,Y=-Y),n.polygonOffset(te,Y))):je(n.POLYGON_OFFSET_FILL)}function Zn(L){L?Ee(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function Jn(L){L===void 0&&(L=n.TEXTURE0+J-1),ie!==L&&(n.activeTexture(L),ie=L)}function Kn(L,te,Y){Y===void 0&&(ie===null?Y=n.TEXTURE0+J-1:Y=ie);let me=se[Y];me===void 0&&(me={type:void 0,texture:void 0},se[Y]=me),(me.type!==L||me.texture!==te)&&(ie!==Y&&(n.activeTexture(Y),ie=Y),n.bindTexture(L,te||Be[L]),me.type=L,me.texture=te)}function z(){let L=se[ie];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function jn(){try{n.compressedTexImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function Pt(){try{n.compressedTexImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Lt(){try{n.texSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function ve(){try{n.texSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Xt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function Ze(){try{n.texStorage2D(...arguments)}catch(L){We("WebGLState:",L)}}function A(){try{n.texStorage3D(...arguments)}catch(L){We("WebGLState:",L)}}function S(){try{n.texImage2D(...arguments)}catch(L){We("WebGLState:",L)}}function G(){try{n.texImage3D(...arguments)}catch(L){We("WebGLState:",L)}}function oe(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function ne(L,te){d[L]!==te&&(n.pixelStorei(L,te),d[L]=te)}function de(L){ee.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function _e(L){be.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function K(L,te){let Y=c.get(te);Y===void 0&&(Y=new WeakMap,c.set(te,Y));let me=Y.get(L);me===void 0&&(me=n.getUniformBlockIndex(te,L.name),n.uniformBlockBinding(te,me,me),Y.set(L,me))}function Q(L,te,Y){let ue=c.get(te).get(L);l[ue]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ue,Y),l[ue]=Y)}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ie=null,se={},u={},l={},m=new WeakMap,x=[],y=null,p=!1,f=null,g=null,E=null,M=null,v=null,w=null,_=null,T=new $e(0,0,0),F=0,C=!1,O=null,B=null,X=null,N=null,$=null,ee.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:je,bindFramebuffer:kt,drawBuffers:Ve,useProgram:_t,setBlending:sn,setMaterial:Wt,setFlipSided:In,setCullFace:Nt,setLineWidth:vi,setPolygonOffset:Kt,setScissorTest:Zn,activeTexture:Jn,bindTexture:Kn,unbindTexture:z,compressedTexImage2D:jn,compressedTexImage3D:Pt,texImage2D:S,texImage3D:G,pixelStorei:ne,getParameter:oe,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Ze,texStorage3D:A,texSubImage2D:Lt,texSubImage3D:ve,compressedTexSubImage2D:Xt,compressedTexSubImage3D:ke,scissor:de,viewport:_e,reset:pe}}function Vy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,d=new Set,u,m=new WeakMap,x=new Set,y=new FinalizationRegistry(A=>x.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,S){return p?new OffscreenCanvas(A,S):da("canvas")}function g(A,S,G){let oe=1,ne=Ze(A);if((ne.width>G||ne.height>G)&&(oe=G/Math.max(ne.width,ne.height)),oe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let de=Math.floor(oe*ne.width),_e=Math.floor(oe*ne.height);u===void 0&&(u=f(de,_e));let K=S?f(de,_e):u;return K.width=de,K.height=_e,K.getContext("2d").drawImage(A,0,0,de,_e),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+de+"x"+_e+")."),K}else return"data"in A&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,S,G,oe,ne,de=!1){if(A!==null){if(n[A]!==void 0)return n[A];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.R16_EXT),G===n.SHORT&&_e&&(K=_e.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),S===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.RG16_EXT),G===n.SHORT&&_e&&(K=_e.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&_e&&(K=_e.RGB16_EXT),G===n.SHORT&&_e&&(K=_e.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){let Q=de?ua:ot.getTransfer(ne);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=Q===gt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.RGBA16_EXT),G===n.SHORT&&_e&&(K=_e.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,S){let G;return A?S===null||S===di||S===qs?G=n.DEPTH24_STENCIL8:S===ni?G=n.DEPTH32F_STENCIL8:S===Nr&&(G=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===qs?G=n.DEPTH_COMPONENT24:S===ni?G=n.DEPTH_COMPONENT32F:S===Nr&&(G=n.DEPTH_COMPONENT16),G}function T(A,S){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function F(A){let S=new WeakRef(A);i.get(A).__ref=S,x.add(S),y.register(A,S,S)}function C(A){let S=i.get(A).__ref;S!==void 0&&(x.delete(S),y.unregister(S))}function O(A){X(A.target)}function B(A){N(A.target)}function X(A){A.removeEventListener("dispose",O),C(A),J(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function N(A){A.removeEventListener("dispose",B),C(A),ce(A)}function $(){for(let A of x){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):X(S))}x.clear(),d.clear()}function J(A){let S=i.get(A);if(S.__webglInit===void 0)return;let G=A.source,oe=m.get(G);if(oe){let ne=oe[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&q(A),Object.keys(oe).length===0&&m.delete(G)}i.remove(A)}function q(A){let S=i.get(A);n.deleteTexture(S.__webglTexture);let G=A.source,oe=m.get(G);delete oe[S.__cacheKey],a.memory.textures--}function ce(A){let S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&X(G),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let de=0;de<S.__webglFramebuffer[ne].length;de++)n.deleteFramebuffer(S.__webglFramebuffer[ne][de]);else n.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)n.deleteFramebuffer(S.__webglFramebuffer[ne]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let oe=A.textures;for(let ne=0,de=oe.length;ne<de;ne++){let _e=i.get(oe[ne]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(oe[ne])}i.remove(A)}let Z=0;function ie(){Z=0}function se(){return Z}function Ue(A){Z=A}function Je(){let A=Z;return A>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}function ee(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function be(A,S){let G=i.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let oe=A.image;if(oe===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(G,A,S);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function Pe(A,S){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Wt(G,A,S);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function Be(A,S){let G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Wt(G,A,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Ee(A,S){let G=i.get(A);if(A.version>0&&G.__version!==A.version){In(G,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let je={[nc]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[ic]:n.MIRRORED_REPEAT},kt={[Vt]:n.NEAREST,[Mf]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},Ve={[Tf]:n.NEVER,[iu]:n.ALWAYS,[wf]:n.LESS,[tu]:n.LEQUAL,[Af]:n.EQUAL,[nu]:n.GEQUAL,[Rf]:n.GREATER,[Cf]:n.NOTEQUAL};function _t(A,S){if(S.type===ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===Pc||S.magFilter===Fa||S.magFilter===Xi||S.minFilter===Sn||S.minFilter===Pc||S.minFilter===Fa||S.minFilter===Xi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,je[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,je[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,je[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,kt[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,kt[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==Fa&&S.minFilter!==Xi||S.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Tt(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",O),F(S));let oe=S.source,ne=m.get(oe);ne===void 0&&(ne={},m.set(oe,ne));let de=ee(S);if(de!==A.__cacheKey){ne[de]===void 0&&(ne[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[de].usedTimes++;let _e=ne[A.__cacheKey];_e!==void 0&&(ne[A.__cacheKey].usedTimes--,_e.usedTimes===0&&q(S)),A.__cacheKey=de,A.__webglTexture=ne[de].texture}return G}function st(A,S,G){return Math.floor(Math.floor(A/G)/S)}function sn(A,S,G,oe){let de=A.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,oe,S.data);else{de.sort((L,te)=>L.start-te.start);let _e=0;for(let L=1;L<de.length;L++){let te=de[_e],Y=de[L],me=te.start+te.count,ue=st(Y.start,S.width,4),fe=st(te.start,S.width,4);Y.start<=me+1&&ue===fe&&st(Y.start+Y.count-1,S.width,4)===ue?te.count=Math.max(te.count,Y.start+Y.count-te.start):(++_e,de[_e]=Y)}de.length=_e+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let L=0,te=de.length;L<te;L++){let Y=de[L],me=Math.floor(Y.start/4),ue=Math.ceil(Y.count/4),fe=me%S.width,Oe=Math.floor(me/S.width),tt=ue,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,fe,Oe,tt,le,G,oe,S.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function Wt(A,S,G){let oe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=n.TEXTURE_3D);let ne=Tt(A,S),de=S.source;t.bindTexture(oe,A.__webglTexture,n.TEXTURE0+G);let _e=i.get(de);if(de.version!==_e.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let le=ot.getPrimaries(ot.workingColorSpace),ze=S.colorSpace===$i?null:ot.getPrimaries(S.colorSpace),Qe=S.colorSpace===$i||le===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=g(S.image,!1,s.maxTextureSize);Q=ke(S,Q);let pe=r.convert(S.format,S.colorSpace),L=r.convert(S.type),te=w(S.internalFormat,pe,L,S.normalized,S.colorSpace,S.isVideoTexture);_t(oe,S);let Y,me=S.mipmaps,ue=S.isVideoTexture!==!0,fe=_e.__version===void 0||ne===!0,Oe=de.dataReady,tt=T(S,Q);if(S.isDepthTexture)te=_(S.format===qi,S.type),fe&&(ue?t.texStorage2D(n.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,te,Q.width,Q.height,0,pe,L,null));else if(S.isDataTexture)if(me.length>0){ue&&fe&&t.texStorage2D(n.TEXTURE_2D,tt,te,me[0].width,me[0].height);for(let le=0,ze=me.length;le<ze;le++)Y=me[le],ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(n.TEXTURE_2D,le,te,Y.width,Y.height,0,pe,L,Y.data);S.generateMipmaps=!1}else ue?(fe&&t.texStorage2D(n.TEXTURE_2D,tt,te,Q.width,Q.height),Oe&&sn(S,Q,pe,L)):t.texImage2D(n.TEXTURE_2D,0,te,Q.width,Q.height,0,pe,L,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ue&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,te,me[0].width,me[0].height,Q.depth);for(let le=0,ze=me.length;le<ze;le++)if(Y=me[le],S.format!==Wn)if(pe!==null)if(ue){if(Oe)if(S.layerUpdates.size>0){let Qe=lu(Y.width,Y.height,S.format,S.type);for(let Me of S.layerUpdates){let yt=Y.data.subarray(Me*Qe/Y.data.BYTES_PER_ELEMENT,(Me+1)*Qe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Me,Y.width,Y.height,1,pe,yt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,Q.depth,pe,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,te,Y.width,Y.height,Q.depth,0,Y.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Y.width,Y.height,Q.depth,pe,L,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,te,Y.width,Y.height,Q.depth,0,pe,L,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ue&&fe&&t.texStorage2D(n.TEXTURE_2D,tt,te,me[0].width,me[0].height);for(let le=0,ze=me.length;le<ze;le++)Y=me[le],S.format!==Wn?pe!==null?ue?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,pe,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,le,te,Y.width,Y.height,0,Y.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Y.width,Y.height,pe,L,Y.data):t.texImage2D(n.TEXTURE_2D,le,te,Y.width,Y.height,0,pe,L,Y.data)}else if(S.isDataArrayTexture)if(ue){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,te,Q.width,Q.height,Q.depth),Oe)if(S.layerUpdates.size>0){let le=lu(Q.width,Q.height,S.format,S.type);for(let ze of S.layerUpdates){let Qe=Q.data.subarray(ze*le/Q.data.BYTES_PER_ELEMENT,(ze+1)*le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ze,Q.width,Q.height,1,pe,L,Qe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,L,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,pe,L,Q.data);else if(S.isData3DTexture)ue?(fe&&t.texStorage3D(n.TEXTURE_3D,tt,te,Q.width,Q.height,Q.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,L,Q.data)):t.texImage3D(n.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,pe,L,Q.data);else if(S.isFramebufferTexture){if(fe)if(ue)t.texStorage2D(n.TEXTURE_2D,tt,te,Q.width,Q.height);else{let le=Q.width,ze=Q.height;for(let Qe=0;Qe<tt;Qe++)t.texImage2D(n.TEXTURE_2D,Qe,te,le,ze,0,pe,L,null),le>>=1,ze>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),d.add(S),le.onpaint=ze=>{let Qe=ze.changedElements;for(let Me of d)Qe.includes(Me.image)&&(Me.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Qe=n.RGBA,Me=n.RGBA,yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Qe,Me,yt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(ue&&fe){let le=Ze(me[0]);t.texStorage2D(n.TEXTURE_2D,tt,te,le.width,le.height)}for(let le=0,ze=me.length;le<ze;le++)Y=me[le],ue?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe,L,Y):t.texImage2D(n.TEXTURE_2D,le,te,pe,L,Y);S.generateMipmaps=!1}else if(ue){if(fe){let le=Ze(Q);t.texStorage2D(n.TEXTURE_2D,tt,te,le.width,le.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,L,Q)}else t.texImage2D(n.TEXTURE_2D,0,te,pe,L,Q);E(S)&&S.mipmapsAutoUpdate===!0&&M(oe),_e.__version=de.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function In(A,S,G){if(S.image.length!==6)return;let oe=Tt(A,S),ne=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let de=i.get(ne);if(ne.version!==de.__version||oe===!0){t.activeTexture(n.TEXTURE0+G);let _e=ot.getPrimaries(ot.workingColorSpace),K=S.colorSpace===$i?null:ot.getPrimaries(S.colorSpace),Q=S.colorSpace===$i||_e===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pe=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,te=[];for(let Me=0;Me<6;Me++)!pe&&!L?te[Me]=g(S.image[Me],!0,s.maxCubemapSize):te[Me]=L?S.image[Me].image:S.image[Me],te[Me]=ke(S,te[Me]);let Y=te[0],me=r.convert(S.format,S.colorSpace),ue=r.convert(S.type),fe=w(S.internalFormat,me,ue,S.normalized,S.colorSpace),Oe=S.isVideoTexture!==!0,tt=de.__version===void 0||oe===!0,le=ne.dataReady,ze=T(S,Y);_t(n.TEXTURE_CUBE_MAP,S);let Qe;if(S.isDepthTexture){if(fe=_(S.format===qi,S.type),tt)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,fe,Y.width,Y.height);else for(let Me=0;Me<6;Me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,fe,Y.width,Y.height,0,me,ue,null)}else if(pe){Oe&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,fe,Y.width,Y.height);for(let Me=0;Me<6;Me++){Qe=te[Me].mipmaps;for(let yt=0;yt<Qe.length;yt++){let jt=Qe[yt];S.format!==Wn?me!==null?Oe?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt,0,0,jt.width,jt.height,me,jt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt,fe,jt.width,jt.height,0,jt.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt,0,0,jt.width,jt.height,me,ue,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt,fe,jt.width,jt.height,0,me,ue,jt.data)}}}else{if(Qe=S.mipmaps,Oe&&tt){Qe.length>0&&ze++;let Me=Ze(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,fe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,te[Me].width,te[Me].height,me,ue,te[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,fe,te[Me].width,te[Me].height,0,me,ue,te[Me].data);for(let yt=0;yt<Qe.length;yt++){let is=Qe[yt].image[Me].image;Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt+1,0,0,is.width,is.height,me,ue,is.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt+1,fe,is.width,is.height,0,me,ue,is.data)}}else{Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me,ue,te[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,fe,me,ue,te[Me]);for(let yt=0;yt<Qe.length;yt++){let jt=Qe[yt];Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt+1,0,0,me,ue,jt.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,yt+1,fe,me,ue,jt.image[Me])}}}E(S)&&S.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),de.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Nt(A,S,G,oe,ne,de){let _e=r.convert(G.format,G.colorSpace),K=r.convert(G.type),Q=w(G.internalFormat,_e,K,G.normalized,G.colorSpace),pe=i.get(S),L=i.get(G);if(L.__renderTarget=S,!pe.__hasExternalTextures){let te=Math.max(1,S.width>>de),Y=Math.max(1,S.height>>de);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,de,Q,te,Y,S.depth,0,_e,K,null):t.texImage2D(ne,de,Q,te,Y,0,_e,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ve(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,L.__webglTexture,0,Lt(S)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,L.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vi(A,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){let oe=S.depthTexture,ne=oe&&oe.isDepthTexture?oe.type:null,de=_(S.stencilBuffer,ne),_e=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(S),de,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(S),de,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,de,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,A)}else{let oe=S.textures;for(let ne=0;ne<oe.length;ne++){let de=oe[ne],_e=r.convert(de.format,de.colorSpace),K=r.convert(de.type),Q=w(de.internalFormat,_e,K,de.normalized,de.colorSpace);ve(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(S),Q,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(S),Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Kt(A,S,G){let oe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(S.depthTexture);ne.__renderTarget=S;let de=oe?S.depthTexture.image[0]:S.depthTexture.image;(!ne.__webglTexture||de.width!==S.width||de.height!==S.height)&&(de.width=S.width,de.height=S.height,S.depthTexture.needsUpdate=!0),oe?Ee(S.depthTexture,0):be(S.depthTexture,0);let _e=ne.__webglTexture,K=Lt(S),Q=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,pe=S.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Hi)ve(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,Q,_e,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,pe,Q,_e,0);else if(S.depthTexture.format===qi)ve(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,Q,_e,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,pe,Q,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zn(A){let S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let oe=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",ne)};oe.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=oe}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let oe=0;oe<6;oe++)Kt(S.__webglFramebuffer[oe],A,oe);else A.texture.mipmaps.length>0?Kt(S.__webglFramebuffer[0],A,0):Kt(S.__webglFramebuffer,A,0);else if(G){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=n.createRenderbuffer(),vi(S.__webglDepthbuffer[oe],A,!1);else{let ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,de)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),vi(S.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,de)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Jn(A,S,G){let oe=i.get(A);S!==void 0&&Nt(oe.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Zn(A)}function Kn(A){let S=A.texture,G=i.get(A),oe=i.get(S);A.addEventListener("dispose",B),F(A);let ne=A.textures,de=A.isWebGLCubeRenderTarget===!0,_e=ne.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=S.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let Q=0;Q<S.mipmaps.length;Q++)G.__webglFramebuffer[K][Q]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(_e)for(let K=0,Q=ne.length;K<Q;K++){let pe=i.get(ne[K]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){let Q=ne[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let pe=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),te=w(Q.internalFormat,pe,L,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),Y=Lt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,te,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),vi(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),_t(n.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Nt(G.__webglFramebuffer[K][Q],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Nt(G.__webglFramebuffer[K],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(S)?M(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let K=0,Q=ne.length;K<Q;K++){let pe=ne[K],L=i.get(pe),te=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),_t(te,pe),Nt(G.__webglFramebuffer,A,pe,n.COLOR_ATTACHMENT0+K,te,0),E(pe)&&M(te)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,oe.__webglTexture),_t(K,S),S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Nt(G.__webglFramebuffer[Q],A,S,n.COLOR_ATTACHMENT0,K,Q);else Nt(G.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,K,0);E(S)?M(K):S.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Zn(A)}function z(A){let S=A.textures;for(let G=0,oe=S.length;G<oe;G++){let ne=S[G];if(E(ne)&&ne.mipmapsAutoUpdate===!0){let de=v(A),_e=i.get(ne).__webglTexture;t.bindTexture(de,_e),M(de),t.unbindTexture()}}}let jn=[];function Pt(A){if(A.samples>0){if(ve(A)===!1){let S=A.textures,G=A.width,oe=A.height,ne=n.COLOR_BUFFER_BIT,de=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(A),K=S.length>1;if(K)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let L=i.get(S[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,G,oe,0,0,G,oe,ne,n.NEAREST),l===!0&&(jn.length=0,jn.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&jn.push(de),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let L=i.get(S[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Lt(A){return Math.min(s.maxSamples,A.samples)}function ve(A){let S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xt(A){let S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ke(A,S){let G=A.colorSpace,oe=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==ha&&G!==$i&&(ot.getTransfer(G)===gt?(oe!==Wn||ne!==Dn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",G)),S}function Ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Je,this.resetTextureUnits=ie,this.getTextureUnits=se,this.setTextureUnits=Ue,this.setTexture2D=be,this.setTexture2DArray=Pe,this.setTexture3D=Be,this.setTextureCube=Ee,this.rebindTextures=Jn,this.setupRenderTarget=Kn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Zn,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=ve,this.dispose=$}function Wy(n,e){function t(i,s=$i){let r,a=ot.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zh)return n.BYTE;if(i===Jh)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Qh)return n.ALPHA;if(i===eu)return n.RGB;if(i===Wn)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===Uc)return n.RED;if(i===Fc)return n.RED_INTEGER;if(i===Ss)return n.RG;if(i===Oc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===Oa||i===za||i===Ba||i===ka)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===kc||i===Hc||i===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Wc||i===Xc||i===qc||i===$c||i===Ha||i===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Wc)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qc)return r.COMPRESSED_R11_EAC;if(i===$c)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ha)return r.COMPRESSED_RG11_EAC;if(i===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zc||i===Jc||i===Kc||i===jc||i===Qc||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qc)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===il)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===hl||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ll)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===Ga||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ti({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends bi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,x=null,y=typeof XRWebGLBinding<"u",p=new bu,f={},g=t.getContextAttributes(),E=null,M=null,v=[],w=[],_=new Ge,T=null,F=null,C=new Mn;C.viewport=new Dt;let O=new Mn;O.viewport=new Dt;let B=[C,O],X=new wc,N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let be=v[ee];return be===void 0&&(be=new Rr,v[ee]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ee){let be=v[ee];return be===void 0&&(be=new Rr,v[ee]=be),be.getGripSpace()},this.getHand=function(ee){let be=v[ee];return be===void 0&&(be=new Rr,v[ee]=be),be.getHandSpace()};function J(ee){let be=w.indexOf(ee.inputSource);if(be===-1)return;let Pe=v[be];Pe!==void 0&&(Pe.update(ee.inputSource,ee.frame,c||a),Pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<v.length;ee++){let be=w[ee];be!==null&&(w[ee]=null,v[ee].disconnect(be))}N=null,$=null,p.reset();for(let ee in f)delete f[ee];if(e.setRenderTarget(E),m=null,u=null,d=null,s=null,M=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(_.width,_.height,!1),F!==null){let ee=F.camera;ee.fov=F.fov,ee.zoom=F.zoom,ee.updateProjectionMatrix(),F=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Be=null,Ee=null;g.depth&&(Ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=g.stencil?qi:Hi,Be=g.stencil?qs:di);let je={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Hn(u.textureWidth,u.textureHeight,{format:Wn,type:Dn,depthTexture:new Wi(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ce(ee){for(let be=0;be<ee.removed.length;be++){let Pe=ee.removed[be],Be=w.indexOf(Pe);Be>=0&&(w[Be]=null,v[Be].disconnect(Pe))}for(let be=0;be<ee.added.length;be++){let Pe=ee.added[be],Be=w.indexOf(Pe);if(Be===-1){for(let je=0;je<v.length;je++)if(je>=w.length){w.push(Pe),Be=je;break}else if(w[je]===null){w[je]=Pe,Be=je;break}if(Be===-1)break}let Ee=v[Be];Ee&&Ee.connect(Pe)}}function Z(ee,be){be===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(be.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let be=ee.near,Pe=ee.far;p.texture!==null&&(p.depthNear>0&&(be=p.depthNear),p.depthFar>0&&(Pe=p.depthFar)),X.near=O.near=C.near=be,X.far=O.far=C.far=Pe,(N!==X.near||$!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,$=X.far),X.layers.mask=ee.layers.mask|6,C.layers.mask=X.layers.mask&-5,O.layers.mask=X.layers.mask&-3;let Be=ee.parent,Ee=X.cameras;Z(X,Be);for(let je=0;je<Ee.length;je++)Z(Ee[je],Be);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),F===null&&ee.isPerspectiveCamera&&(F={camera:ee,fov:ee.fov,zoom:ee.zoom}),ie(ee,X,Be)};function ie(ee,be,Pe){Pe===null?ee.matrix.copy(be.matrixWorld):(ee.matrix.copy(Pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(be.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(be.projectionMatrix),ee.projectionMatrixInverse.copy(be.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=rc*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(ee){return f[ee]};let se=null;function Ue(ee,be){if(h=be.getViewerPose(c||a),x=be,h!==null){let Pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Be=!1;Pe.length!==X.cameras.length&&(X.cameras.length=0,Be=!0);for(let Ve=0;Ve<Pe.length;Ve++){let _t=Pe[Ve],Tt=null;if(m!==null)Tt=m.getViewport(_t);else{let sn=d.getViewSubImage(u,_t);Tt=sn.viewport,Ve===0&&(e.setRenderTargetTextures(M,sn.colorTexture,sn.depthStencilTexture),e.setRenderTarget(M))}let st=B[Ve];st===void 0&&(st=new Mn,st.layers.enable(Ve),st.viewport=new Dt,B[Ve]=st),st.matrix.fromArray(_t.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(_t.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Ve===0&&(X.matrix.copy(st.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Be===!0&&X.cameras.push(st)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ve=d.getDepthInformation(Pe[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,s.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<Pe.length;Ve++){let _t=Pe[Ve].camera;if(_t){let Tt=f[_t];Tt||(Tt=new Ea,f[_t]=Tt);let st=d.getCameraImage(_t);Tt.sourceTexture=st}}}}for(let Pe=0;Pe<v.length;Pe++){let Be=w[Pe],Ee=v[Pe];Be!==null&&Ee!==void 0&&Ee.update(Be,be,c||a)}se&&se(ee,be),be.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:be}),x=null}let Je=new lp;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}},$y=new ut,yp=new Ye;yp.set(-1,0,0,0,1,0,0,0,1);function Yy(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,au(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,g,E,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,g,E):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Tn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Tn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g=e.get(f),E=g.envMap,M=g.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yp),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,g,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zy(n,e,t,i){let s={},r={};function a(g,E){let M=E.program;i.uniformBlockBinding(g,M,s[g.id])}function o(g,E){let M=s[g.id];M===void 0&&(x(g),M=l(g),s[g.id]=M,g.addEventListener("dispose",p));let v=E.program;i.updateUBOMapping(g,v);let w=e.render.frame;r[g.id]!==w&&(c(g),r[g.id]=w)}function l(g){let E=n.createBuffer(),M=g.__size,v=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,v),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(g){let E=s[g.id],M=g.uniforms,v=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,_=M.length;w<_;w++){let T=M[w];if(Array.isArray(T))for(let F=0,C=T.length;F<C;F++)h(T[F],w,F,v);else h(T,w,0,v)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(g,E,M,v){if(u(g,E,M,v)===!0){let w=g.__offset,_=g.value;if(Array.isArray(_)){let T=0;for(let F=0;F<_.length;F++){let C=_[F],O=y(C,!0);d(C,g.__data,T),T+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,g.__data)}}function d(g,E,M){typeof g=="number"||typeof g=="boolean"?E[M]=g:g.isMatrix3?(E[M]=g.elements[0],E[M+1]=g.elements[1],E[M+2]=g.elements[2],E[M+3]=0,E[M+4]=g.elements[3],E[M+5]=g.elements[4],E[M+6]=g.elements[5],E[M+7]=0,E[M+8]=g.elements[6],E[M+9]=g.elements[7],E[M+10]=g.elements[8],E[M+11]=0):ArrayBuffer.isView(g)?E.set(g.subarray(0,E.length-M),M):g.toArray(E,M)}function u(g,E,M,v){let w=g.value,_=E+"_"+M;if(Array.isArray(w)){v[_]===void 0&&(v[_]=[]);let T=v[_],F=!1;for(let C=0;C<w.length;C++)m(w[C],T,C)===!0&&(F=!0);return F}return m(w,v,_)}function m(g,E,M){if(E[M]===void 0)return typeof g=="number"||typeof g=="boolean"?E[M]=g:ArrayBuffer.isView(g)?E[M]=g.slice():E[M]=g.clone(),!0;{let v=E[M];if(typeof g=="number"||typeof g=="boolean"){if(v!==g)return E[M]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(v.equals(g)===!1)return v.copy(g),!0}}return!1}function x(g){let E=g.uniforms,M=0,v=16;for(let _=0,T=E.length;_<T;_++){let F=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,O=F.length;C<O;C++){let B=F[C],X=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(E[_])||Array.isArray(B.value),$=M;for(let q=0,ce=X.length;q<ce;q++){let Z=X[q],ie=y(Z,N),se=M%v,Ue=se%ie.boundary,Je=se+Ue;M+=Ue,Je!==0&&v-Je<ie.storage&&(M+=v-Je),q===0&&($=M),M+=ie.storage}let J=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new J((M-$)/Float32Array.BYTES_PER_ELEMENT),B.__offset=$}}let w=M%v;return w>0&&(M+=v-w),g.__size=M,g.__cache={},this}function y(g,E){let M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=16,M.storage=48):g.isMatrix4?(M.boundary=16,M.storage=64):g.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",g),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(g){let E=g.target;E.removeEventListener("dispose",p),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let g in s)n.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:f}}var Jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Ky(){return Ai===null&&(Ai=new Bs(Jy,16,16,Ss,fi),Ai.name="DFG_LUT",Ai.minFilter=Sn,Ai.magFilter=Sn,Ai.wrapS=Si,Ai.wrapT=Si,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var vl=class{constructor(e={}){let{canvas:t=If(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Dn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let y=m,p=new Set([zc,Oc,Fc]),f=new Set([Dn,di,Nr,qs,Dc,Nc]),g=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,w=null,_=[],T=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,B=null,X=null,N=null,$=null;this._outputColorSpace=vn;let J=0,q=0,ce=null,Z=-1,ie=null,se=new Dt,Ue=new Dt,Je=null,ee=new $e(0),be=0,Pe=t.width,Be=t.height,Ee=1,je=null,kt=null,Ve=new Dt(0,0,Pe,Be),_t=new Dt(0,0,Pe,Be),Tt=!1,st=new fs,sn=new hc,Wt=!1,In=!1,Nt=new ut,vi=new D,Kt=new Dt,Zn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jn=!1;function Kn(){return ce===null?Ee:1}let z=i;function jn(b,U){return t.getContext(b,U)}let Pt,Lt,ve,Xt,ke,Ze,A,S,G,oe,ne,de,_e,K,Q,pe,L,te,Y,me,ue,fe,Oe;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),z===null){let U="webgl2";if(z=jn(U,b),z===null)throw jn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(b){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),We("WebGLRenderer: "+b.message),b}function tt(){Pt=new c_(z),Pt.init(),ue=new Wy(z,Pt),Lt=new Kx(z,Pt,e,ue),ve=new Gy(z,Pt),Lt.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),X=z.createFramebuffer(),N=z.createFramebuffer(),$=z.createFramebuffer(),Xt=new u_(z),ke=new Ry,Ze=new Vy(z,Pt,ve,ke,Lt,ue,Xt),A=new o_(C),S=new f0(z),fe=new Zx(z,S),G=new l_(z,S,Xt,fe),oe=new f_(z,G,S,fe,Xt),te=new d_(z,Lt,Ze),Q=new jx(ke),ne=new Ay(C,A,Pt,Lt,fe,Q),de=new Yy(C,ke),_e=new Iy,K=new Fy(Pt),L=new Yx(C,A,ve,oe,x,l),pe=new Hy(C,oe,Lt),Oe=new Zy(z,Xt,Lt,ve),Y=new Jx(z,Pt,Xt),me=new h_(z,Pt,Xt),Xt.programs=ne.programs,C.capabilities=Lt,C.extensions=Pt,C.properties=ke,C.renderLists=_e,C.shadowMap=pe,C.state=ve,C.info=Xt}y!==Dn&&(F=new m_(y,t.width,t.height,o,s,r));let le=new Eu(C,z);this.xr=le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=Pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(b){b!==void 0&&(Ee=b,this.setSize(Pe,Be,!1))},this.getSize=function(b){return b.set(Pe,Be)},this.setSize=function(b,U,W=!0){if(le.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=b,Be=U,t.width=Math.floor(b*Ee),t.height=Math.floor(U*Ee),W===!0&&(t.style.width=b+"px",t.style.height=U+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Pe*Ee,Be*Ee).floor()},this.setDrawingBufferSize=function(b,U,W){Pe=b,Be=U,Ee=W,t.width=Math.floor(b*W),t.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(y===Dn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ve)},this.setViewport=function(b,U,W,H){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,U,W,H),ve.viewport(se.copy(Ve).multiplyScalar(Kn()).round())},this.getScissor=function(b){return b.copy(_t)},this.setScissor=function(b,U,W,H){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,U,W,H),ve.scissor(Ue.copy(_t).multiplyScalar(Kn()).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(b){ve.setScissorTest(Tt=b)},this.setOpaqueSort=function(b){je=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let H=0;if(b){let V=!1;if(ce!==null){let ye=ce.texture.format;V=p.has(ye)}if(V){let ye=ce.texture.type,Ie=f.has(ye),xe=L.getClearColor(),Te=L.getClearAlpha(),Fe=xe.r,Ke=xe.g,rt=xe.b;Ie?(g[0]=Fe,g[1]=Ke,g[2]=rt,g[3]=Te,z.clearBufferuiv(z.COLOR,0,g)):(E[0]=Fe,E[1]=Ke,E[2]=rt,E[3]=Te,z.clearBufferiv(z.COLOR,0,E))}else H|=z.COLOR_BUFFER_BIT}U&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),L.dispose(),_e.dispose(),K.dispose(),Ze.dispose(),ke.dispose(),A.dispose(),oe.dispose(),G.dispose(),fe.dispose(),Oe.dispose(),ne.dispose(),le.dispose(),le.removeEventListener("sessionstart",ud),le.removeEventListener("sessionend",dd),Ls.stop()};function ze(b){b.preventDefault(),fa("WebGLRenderer: Context Lost."),O=!0}function Qe(){fa("WebGLRenderer: Context Restored."),O=!1;let b=Xt.autoReset,U=pe.enabled,W=pe.autoUpdate,H=pe.needsUpdate,V=pe.type;tt(),Xt.autoReset=b,pe.enabled=U,pe.autoUpdate=W,pe.needsUpdate=H,pe.type=V}function Me(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function yt(b){let U=b.target;U.removeEventListener("dispose",yt),jt(U)}function jt(b){is(b),ke.remove(b)}function is(b){let U=ke.get(b).programs;U!==void 0&&(U.forEach(function(W){ne.releaseProgram(W)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,W,H,V,ye){U===null&&(U=Zn);let Ie=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=Am(b,U,W,H,V);ve.setMaterial(H,Ie);let Te=W.index,Fe=1;if(H.wireframe===!0){if(Te=G.getWireframeAttribute(W),Te===void 0)return;Fe=2}let Ke=W.drawRange,rt=W.attributes.position,Le=Ke.start*Fe,at=(Ke.start+Ke.count)*Fe;ye!==null&&(Le=Math.max(Le,ye.start*Fe),at=Math.min(at,(ye.start+ye.count)*Fe)),Te!==null?(Le=Math.max(Le,0),at=Math.min(at,Te.count)):rt!=null&&(Le=Math.max(Le,0),at=Math.min(at,rt.count));let Ht=at-Le;if(Ht<0||Ht===1/0)return;fe.setup(V,H,xe,W,Te);let Ct,wt=Y;if(Te!==null&&(Ct=S.get(Te),wt=me,wt.setIndex(Ct)),V.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Kn()),wt.setMode(z.LINES)):wt.setMode(z.TRIANGLES);else if(V.isLine){let cn=H.linewidth;cn===void 0&&(cn=1),ve.setLineWidth(cn*Kn()),V.isLineSegments?wt.setMode(z.LINES):V.isLineLoop?wt.setMode(z.LINE_LOOP):wt.setMode(z.LINE_STRIP)}else V.isPoints?wt.setMode(z.POINTS):V.isSprite&&wt.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))wt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let cn=V._multiDrawStarts,De=V._multiDrawCounts,_n=V._multiDrawCount,pt=Te?S.get(Te).bytesPerElement:1,Ds=ke.get(H).currentProgram.getUniforms();for(let ln=0;ln<_n;ln++)Ds.setValue(z,"_gl_DrawID",ln),wt.render(cn[ln]/pt,De[ln])}else if(V.isInstancedMesh)wt.renderInstances(Le,Ht,V.count);else if(W.isInstancedBufferGeometry){let cn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,De=Math.min(W.instanceCount,cn);wt.renderInstances(Le,Ht,De)}else wt.render(Le,Ht)};function hd(b,U,W,H){B!==null&&b.isNodeMaterial&&B.setObject(H,b),Wt===!0&&Q.setState(b,W,!1),b.transparent===!0&&b.side===Ln&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,jr(b,U,H),b.side=Ms,b.needsUpdate=!0,jr(b,U,H),b.side=Ln):jr(b,U,H)}this.compile=function(b,U,W=null){W===null&&(W=b),B!==null&&B.renderStart(b,U,W),w=K.get(W),w.init(U),T.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),In=this.localClippingEnabled,Wt=Q.init(this.clippingPlanes,In),Wt===!0&&Q.setGlobalState(this.clippingPlanes,U),B!==null&&pe.render(w.state.shadowsArray,W,U);let H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ye=V.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){let xe=ye[Ie];hd(xe,W,U,V),H.add(xe)}else hd(ye,W,U,V),H.add(ye)}),w=T.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(b,U,W=null){let H=this.compile(b,U,W);return new Promise(V=>{function ye(){if(H.forEach(function(Ie){let Te=ke.get(Ie).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Ie)}),H.size===0){V(b);return}setTimeout(ye,10)}Pt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let th=null;function Tm(b){th&&th(b)}function ud(){Ls.stop()}function dd(){Ls.start()}let Ls=new lp;Ls.setAnimationLoop(Tm),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(b){th=b,le.setAnimationLoop(b),b===null?Ls.stop():Ls.start()},le.addEventListener("sessionstart",ud),le.addEventListener("sessionend",dd),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(b,U);let W=le.enabled===!0&&le.isPresenting===!0,H=F!==null&&(ce===null||W)&&F.begin(C,ce);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,ce),w=K.get(b,T.length),w.init(U),w.state.textureUnits=Ze.getTextureUnits(),T.push(w),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?sn.setFromArrayCamera(U):st.setFromProjectionMatrix(Nt,ei,U.reversedDepth),In=this.localClippingEnabled,Wt=Q.init(this.clippingPlanes,In),v=_e.get(b,_.length),v.init(),_.push(v),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ie=C.xr.getDepthSensingMesh();Ie!==null&&nh(Ie,U,-1/0,C.sortObjects)}nh(b,U,0,C.sortObjects),v.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&v.sort(je,kt),Jn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Jn&&L.addToRenderList(v,b),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Q.beginShadows();let V=w.state.shadowsArray;if(pe.render(V,b,U),Wt===!0&&Q.endShadows(),(H&&F.hasRenderPass())===!1){let Ie=v.opaque,xe=v.transmissive;if(w.setupLights(),U.isArrayCamera){let Te=U.cameras;if(xe.length>0)for(let Fe=0,Ke=Te.length;Fe<Ke;Fe++){let rt=Te[Fe];pd(Ie,xe,b,rt)}Jn&&L.render(b);for(let Fe=0,Ke=Te.length;Fe<Ke;Fe++){let rt=Te[Fe];fd(v,b,rt,rt.viewport)}}else xe.length>0&&pd(Ie,xe,b,U),Jn&&L.render(b),fd(v,b,U)}ce!==null&&q===0&&(Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce)),H&&F.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),fe.resetDefaultState(),Z=-1,ie=null,T.pop(),T.length>0?(w=T[T.length-1],Ze.setTextureUnits(w.state.textureUnits),Wt===!0&&Q.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,B!==null&&B.renderEnd()};function nh(b,U,W,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ie=U.isArrayCamera?sn:st;if(!b.frustumCulled||b.intersectsFrustum(Ie)){H&&Kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);let xe=oe.update(b),Te=b.material;Te.visible&&v.push(b,xe,Te,W,Kt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Ie=U.isArrayCamera?sn:st;if(!b.frustumCulled||b.intersectsFrustum(Ie)){let xe=oe.update(b),Te=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Kt.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Kt.copy(xe.boundingSphere.center)),Kt.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray(Te)){let Fe=xe.groups;for(let Ke=0,rt=Fe.length;Ke<rt;Ke++){let Le=Fe[Ke],at=Te[Le.materialIndex];at&&at.visible&&v.push(b,xe,at,W,Kt.z,Le,U)}}else Te.visible&&v.push(b,xe,Te,W,Kt.z,null,U)}}}let ye=b.children;for(let Ie=0,xe=ye.length;Ie<xe;Ie++)nh(ye[Ie],U,W,H)}function fd(b,U,W,H){let{opaque:V,transmissive:ye,transparent:Ie}=b;w.setupLightsView(W),Wt===!0&&Q.setGlobalState(C.clippingPlanes,W),H&&ve.viewport(se.copy(H)),V.length>0&&Mo(V,U,W),ye.length>0&&Mo(ye,U,W),Ie.length>0&&Mo(Ie,U,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function pd(b,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Le=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Hn(1,1,{generateMipmaps:!0,type:Le?fi:Dn,minFilter:Xi,samples:Math.max(4,Lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let ye=w.state.transmissionRenderTarget[H.id],Ie=H.viewport||se;ye.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);let xe=C.getRenderTarget(),Te=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(ee),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),Jn&&L.render(W);let Ke=C.toneMapping;C.toneMapping=wi;let rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Wt===!0&&Q.setGlobalState(C.clippingPlanes,H),Mo(b,W,H),Ze.updateMultisampleRenderTarget(ye),Ze.updateRenderTargetMipmap(ye),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let at=0,Ht=U.length;at<Ht;at++){let Ct=U[at],{object:wt,geometry:cn,material:De,group:_n}=Ct;if(De.side===Ln&&wt.layers.test(H.layers)){let pt=De.side;De.side=Tn,De.needsUpdate=!0,md(wt,W,H,cn,De,_n),De.side=pt,De.needsUpdate=!0,Le=!0}}Le===!0&&(Ze.updateMultisampleRenderTarget(ye),Ze.updateRenderTargetMipmap(ye))}C.setRenderTarget(xe,Te,Fe),C.setClearColor(ee,be),rt!==void 0&&(H.viewport=rt),C.toneMapping=Ke}function Mo(b,U,W){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ye=b.length;V<ye;V++){let Ie=b[V],{object:xe,geometry:Te,group:Fe}=Ie,Ke=Ie.material;Ke.allowOverride===!0&&H!==null&&(Ke=H),xe.layers.test(W.layers)&&md(xe,U,W,Te,Ke,Fe)}}function md(b,U,W,H,V,ye){B!==null&&V.isNodeMaterial&&B.setObject(b,V),b.onBeforeRender(C,U,W,H,V,ye),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(C,U,W,H,b,ye),V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,C.renderBufferDirect(W,U,H,V,b,ye),V.side=Ms,V.needsUpdate=!0,C.renderBufferDirect(W,U,H,V,b,ye),V.side=Ln):C.renderBufferDirect(W,U,H,V,b,ye),b.onAfterRender(C,U,W,H,V,ye)}function gd(b){let U=0;for(let W of b)W.texture!==null&&U++;return U}function jr(b,U,W){U.isScene!==!0&&(U=Zn);let H=ke.get(b),V=w.state.lights,ye=w.state.shadowsArray,Ie=V.state.version,xe=ne.getParameters(b,V.state,ye,U,W,w.state.lightProbeGridArray),Te=ne.getProgramCacheKey(xe),Fe=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=A.get(b.envMap||H.environment,Ke),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",yt),Fe=new Map,H.programs=Fe,H.programVariants=new Map);let rt=Fe.get(Te);if(rt!==void 0){if(H.currentProgram===rt&&H.lightsStateVersion===Ie)return _d(b,xe),rt}else xe.uniforms=ne.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,W,xe),b.onBeforeCompile(xe,C),rt=ne.acquireProgram(xe,Te),Fe.set(Te,rt),H.uniforms=xe.uniforms;let Le=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Q.uniform),_d(b,xe),H.needsLights=Cm(b),H.lightsStateVersion=Ie,H.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.sunLights.value=V.state.sun,Le.sunLightShadows.value=V.state.sunShadow,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.sunShadowMatrix.value=V.state.sunShadowMatrix,Le.sunShadowCascade.value=V.state.sunShadowCascade,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=gd(w.state.lightProbeGridArray),H.currentProgram=rt,H.uniformsList=null,rt}function wm(b,U,W,H,V){let ye=ke.get(b),Ie=ye.currentProgram.id+","+H+","+V,xe=ye.programVariants.get(Ie);return xe===void 0?(xe=jr(b,U,W),ye.programVariants.set(Ie,xe)):(ye.currentProgram=xe,ye.uniformsList=null,ye.outputColorSpace=H,ye.toneMapping=V),xe}function xd(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ur.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function _d(b,U){let W=ke.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Am(b,U,W,H,V){U.isScene!==!0&&(U=Zn),Ze.resetTextureUnits();let ye=U.fog,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,xe=ce===null?C.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ot.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Fe=A.get(H.envMap||Ie,Te),Ke=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Ht=!!W.morphAttributes.color,Ct=wi;H.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ct=C.toneMapping);let wt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,cn=wt!==void 0?wt.length:0,De=ke.get(H),_n=w.state.lights;if(Wt===!0&&(In===!0||b!==ie)){let Ut=b===ie&&H.id===Z;Q.setState(H,b,Ut)}let pt=!1,Ds=!1;H.version===De.__version?De.needsLights&&De.lightsStateVersion!==_n.state.version||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==Fe||H.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Q.numPlanes||De.numIntersection!==Q.numIntersection)||De.vertexAlphas!==Ke||De.vertexTangents!==rt||De.morphTargets!==Le||De.morphNormals!==at||De.morphColors!==Ht||De.morphTargetsCount!==cn||De.numLightProbeGrids!==gd(w.state.lightProbeGridArray)?pt=!0:(De.outputColorSpace!==xe||De.toneMapping!==Ct)&&(Ds=!0):(pt=!0,De.__version=H.version);let ln=De.currentProgram;(pt===!0||Ds===!0)&&(ln=Ds===!0?wm(H,U,V,xe,Ct):jr(H,U,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,ln,De));let So=!1,ss=!1,Ns=!1,ht=ln.getUniforms(),rn=De.uniforms;if(ve.useProgram(ln.program)&&(So=!0,ss=!0,Ns=!0),H.id!==Z&&(Z=H.id,ss=!0),So||ie!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(z,"projectionMatrix",b.projectionMatrix),ht.setValue(z,"viewMatrix",b.matrixWorldInverse);let Qt=ht.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,vi.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),ie!==b&&(ie=b,ss=!0,Ns=!0)}if(De.needsLights&&(_n.state.sunShadowMap.length>0&&ht.setValue(z,"sunShadowMap",_n.state.sunShadowMap,Ze),_n.state.directionalShadowMap.length>0&&ht.setValue(z,"directionalShadowMap",_n.state.directionalShadowMap,Ze),_n.state.spotShadowMap.length>0&&ht.setValue(z,"spotShadowMap",_n.state.spotShadowMap,Ze),_n.state.pointShadowMap.length>0&&ht.setValue(z,"pointShadowMap",_n.state.pointShadowMap,Ze)),V.isSkinnedMesh){ht.setOptional(z,V,"bindMatrix"),ht.setOptional(z,V,"bindMatrixInverse");let Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ht.setValue(z,"boneTexture",Ut.boneTexture,Ze))}V.isBatchedMesh&&(ht.setOptional(z,V,"batchingTexture"),ht.setValue(z,"batchingTexture",V._matricesTexture,Ze),ht.setOptional(z,V,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",V._indirectTexture,Ze),ht.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",V._colorsTexture,Ze));let oi=W.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&te.update(V,W,ln),(ss||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,ht.setValue(z,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Ky()),ss){if(ht.setValue(z,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&Rm(rn,Ns),ye&&H.fog===!0&&de.refreshFogUniforms(rn,ye),de.refreshMaterialUniforms(rn,H,Ee,Be,w.state.transmissionRenderTarget[b.id]),De.needsLights&&De.numLightProbeGrids>0){let Ut=M,Qt=0;for(let Di of w.state.lightProbeGridArray)Di.texture!==null&&(Ut.textures[Qt]=Di.texture,Ut.min[Qt]=Di.boundingBox.min,Ut.max[Qt]=Di.boundingBox.max,Ut.resolution[Qt]=Di.resolution,Qt++);for(let Di in Ut)Ut[Di].length=Qt;rn.probesSH.value=Ut.textures,rn.probesMin.value=Ut.min,rn.probesMax.value=Ut.max,rn.probesResolution.value=Ut.resolution}Ur.upload(z,xd(De),rn,Ze)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ur.upload(z,xd(De),rn,Ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(z,"center",V.center),ht.setValue(z,"modelViewMatrix",V.modelViewMatrix),ht.setValue(z,"normalMatrix",V.normalMatrix),ht.setValue(z,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Ut=H.uniformsGroups;for(let Qt=0,Di=Ut.length;Qt<Di;Qt++){let vd=Ut[Qt];Oe.update(vd,ln),Oe.bind(vd,ln)}}return ln}function Rm(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Cm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(b,U,W){let H=ke.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ke.get(b.texture).__webglTexture=U,ke.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let W=ke.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,W=0){ce=b,J=U,q=W;let H=null,V=!1,ye=!1;if(b){let xe=ke.get(b);if(xe.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(z.FRAMEBUFFER,xe.__webglFramebuffer),se.copy(b.viewport),Ue.copy(b.scissor),Je=b.scissorTest,ve.viewport(se),ve.scissor(Ue),ve.setScissorTest(Je),Z=-1;return}else if(xe.__webglFramebuffer===void 0)Ze.setupRenderTarget(b);else if(xe.__hasExternalTextures)Ze.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ke=b.depthTexture;if(xe.__boundDepthTexture!==Ke){if(Ke!==null&&ke.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ye=!0);let Fe=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?H=Fe[U][W]:H=Fe[U],V=!0):b.samples>0&&Ze.useMultisampledRTT(b)===!1?H=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[W]:H=Fe,se.copy(b.viewport),Ue.copy(b.scissor),Je=b.scissorTest}else se.copy(Ve).multiplyScalar(Ee).floor(),Ue.copy(_t).multiplyScalar(Ee).floor(),Je=Tt;if(W!==0&&(H=X),ve.bindFramebuffer(z.FRAMEBUFFER,H)&&ve.drawBuffers(b,H),ve.viewport(se),ve.scissor(Ue),ve.setScissorTest(Je),V){let xe=ke.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,W)}else if(ye){let xe=U;for(let Te=0;Te<b.textures.length;Te++){let Fe=ke.get(b.textures[Te]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Te,Fe.__webglTexture,W,xe)}}else if(b!==null&&W!==0){let xe=ke.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xe.__webglTexture,W)}Z=-1};function yd(b){let U=ke.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=Lt.textureFormatReadable(b.format),U.__typeReadable=Lt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,W,H,V,ye,Ie,xe=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te){ve.bindFramebuffer(z.FRAMEBUFFER,Te);try{let Fe=b.textures[xe],Ke=Fe.format,rt=Fe.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xe);let Le=yd(Fe);if(Le.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&W>=0&&W<=b.height-V&&z.readPixels(U,W,H,V,ue.convert(Ke),ue.convert(rt),ye)}finally{let Fe=ce!==null?ke.get(ce).__webglFramebuffer:null;ve.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,H,V,ye,Ie,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Te=Te[Ie],Array.isArray(Te)&&(Te=Te[0])),Te)if(U>=0&&U<=b.width-H&&W>=0&&W<=b.height-V){ve.bindFramebuffer(z.FRAMEBUFFER,Te);let Fe=b.textures[xe],Ke=Fe.format,rt=Fe.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xe);let Le=yd(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,at),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),z.readPixels(U,W,H,V,ue.convert(Ke),ue.convert(rt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ht=ce!==null?ke.get(ce).__webglFramebuffer:null;ve.bindFramebuffer(z.FRAMEBUFFER,Ht);let Ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Lf(z,Ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,at),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(at),z.deleteSync(Ct),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){let H=Math.pow(2,-W),V=Math.floor(b.image.width*H),ye=Math.floor(b.image.height*H),Ie=U!==null?U.x:0,xe=U!==null?U.y:0;Ze.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,Ie,xe,V,ye),ve.unbindTexture()},this.copyTextureToTexture=function(b,U,W=null,H=null,V=0,ye=0){let Ie,xe,Te,Fe,Ke,rt,Le,at,Ht,Ct=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(W!==null)Ie=W.max.x-W.min.x,xe=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,Ke=W.min.y,rt=W.isBox3?W.min.z:0;else{let ht=Math.pow(2,-V);Ie=Math.floor(Ct.width*ht),xe=Math.floor(Ct.height*ht),b.isDataArrayTexture?Te=Ct.depth:b.isData3DTexture?Te=Math.floor(Ct.depth*ht):Te=1,Fe=0,Ke=0,rt=0}H!==null?(Le=H.x,at=H.y,Ht=H.z):(Le=0,at=0,Ht=0);let wt=ue.convert(U.format),cn=ue.convert(U.type),De;U.isData3DTexture?(Ze.setTexture3D(U,0),De=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ze.setTexture2DArray(U,0),De=z.TEXTURE_2D_ARRAY):(Ze.setTexture2D(U,0),De=z.TEXTURE_2D),ve.activeTexture(z.TEXTURE0),ve.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),ve.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ve.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let _n=ve.getParameter(z.UNPACK_ROW_LENGTH),pt=ve.getParameter(z.UNPACK_IMAGE_HEIGHT),Ds=ve.getParameter(z.UNPACK_SKIP_PIXELS),ln=ve.getParameter(z.UNPACK_SKIP_ROWS),So=ve.getParameter(z.UNPACK_SKIP_IMAGES);ve.pixelStorei(z.UNPACK_ROW_LENGTH,Ct.width),ve.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ct.height),ve.pixelStorei(z.UNPACK_SKIP_PIXELS,Fe),ve.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),ve.pixelStorei(z.UNPACK_SKIP_IMAGES,rt);let ss=b.isDataArrayTexture||b.isData3DTexture,Ns=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ht=ke.get(b),rn=ke.get(U),oi=ke.get(ht.__renderTarget),Ut=ke.get(rn.__renderTarget);ve.bindFramebuffer(z.READ_FRAMEBUFFER,oi.__webglFramebuffer),ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Qt=0;Qt<Te;Qt++)ss&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(b).__webglTexture,V,rt+Qt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,ye,Ht+Qt)),z.blitFramebuffer(Fe,Ke,Fe+Ie,Ke+xe,Le,at,Le+Ie,at+xe,z.DEPTH_BUFFER_BIT,z.NEAREST);ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||ke.has(b)){let ht=ke.get(b),rn=ke.get(U);ve.bindFramebuffer(z.READ_FRAMEBUFFER,N),ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,$);for(let oi=0;oi<Te;oi++)ss?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ht.__webglTexture,V,rt+oi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ht.__webglTexture,V),Ns?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,ye,Ht+oi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,ye),V!==0?z.blitFramebuffer(Fe,Ke,Fe+Ie,Ke+xe,Le,at,Le+Ie,at+xe,z.COLOR_BUFFER_BIT,z.NEAREST):Ns?z.copyTexSubImage3D(De,ye,Le,at,Ht+oi,Fe,Ke,Ie,xe):z.copyTexSubImage2D(De,ye,Le,at,Fe,Ke,Ie,xe);ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ns?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(De,ye,Le,at,Ht,Ie,xe,Te,wt,cn,Ct.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(De,ye,Le,at,Ht,Ie,xe,Te,wt,Ct.data):z.texSubImage3D(De,ye,Le,at,Ht,Ie,xe,Te,wt,cn,Ct):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ye,Le,at,Ie,xe,wt,cn,Ct.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ye,Le,at,Ct.width,Ct.height,wt,Ct.data):z.texSubImage2D(z.TEXTURE_2D,ye,Le,at,Ie,xe,wt,cn,Ct);ve.pixelStorei(z.UNPACK_ROW_LENGTH,_n),ve.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt),ve.pixelStorei(z.UNPACK_SKIP_PIXELS,Ds),ve.pixelStorei(z.UNPACK_SKIP_ROWS,ln),ve.pixelStorei(z.UNPACK_SKIP_IMAGES,So),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(De),ve.unbindTexture()},this.initRenderTarget=function(b){ke.get(b).__webglFramebuffer===void 0&&Ze.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ze.setTextureCube(b,0):b.isData3DTexture?Ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ze.setTexture2DArray(b,0):Ze.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){J=0,q=0,ce=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Ce=window,ae=n=>document.querySelector(n),mn=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Xu=[];Ce.queueNotice=n=>Xu.push(n);Ce.showToast=n=>Qu(n);Ce.root=loadRoot();var Ne=null,zr=isMuted(),mt=()=>Ne?stageOf(Ne.pet.day).size:2,vp=0;function bt(n,e=""){let t=ae("#pop");t.innerHTML=`<span class="pi">${n}</span>${e?`<span class="ps">${mn(e)}</span>`:""}`,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(vp),vp=setTimeout(()=>t.classList.remove("show"),1300)}var Mp=0;function Qu(n){let e=ae("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(Mp),Mp=setTimeout(()=>e.classList.remove("show"),2200)}setInterval(()=>{if(!Xu.length||ae("#pop").classList.contains("show"))return;let n=Xu.shift();n.startsWith("\u{1F3C5}")?(bt("\u{1F3C5}","\xA1Sticker!"),speak("\xA1Sticker nuevo! "+n.slice(2))):Qu(n)},1200);var Or=null;function lt(n){if(zr)return;try{Or=Or||new(Ce.AudioContext||Ce.webkitAudioContext)}catch{return}let e={coin:[[990,.05],[1320,.09]],step:[[300,.03]],pop:[[660,.05],[880,.07]],bark:[[520,.06],[380,.1]],quack:[[620,.07],[480,.09]]}[n];if(!e)return;let t=Or.currentTime;for(let[i,s]of e){let r=Or.createOscillator(),a=Or.createGain();r.type="triangle",r.frequency.value=i,a.gain.setValueAtTime(.07,t),a.gain.exponentialRampToValueAtTime(.001,t+s),r.connect(a).connect(Or.destination),r.start(t),r.stop(t+s+.02),t+=s*.9}}var ed=ae("#c"),Sp=new URLSearchParams(location.search),Gr=Sp.has("lite")||!Sp.has("hd")&&(Ce.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!Ce.matchMedia("(pointer: fine)").matches),Pi=new vl({canvas:ed,antialias:!Gr,powerPreference:Gr?"low-power":"default"}),Np=()=>Gr?Math.min(1,Math.sqrt(13e5/(Ce.innerWidth*Ce.innerHeight))):Math.min(Ce.devicePixelRatio,1.5);Pi.setPixelRatio(Np());Pi.setSize(Ce.innerWidth,Ce.innerHeight);Pi.shadowMap.enabled=!Gr;Pi.shadowMap.type=Gs;var ft=new Mn(42,Ce.innerWidth/Ce.innerHeight,.1,220);Ce.addEventListener("resize",()=>{ft.aspect=Ce.innerWidth/Ce.innerHeight,ft.updateProjectionMatrix(),Pi.setPixelRatio(Np()),Pi.setSize(Ce.innerWidth,Ce.innerHeight)});var er=new Bs(new Uint8Array([110,110,110,255,185,185,185,255,255,255,255,255]),3,1,Wn);er.minFilter=er.magFilter=Vt;er.needsUpdate=!0;var Tu=new Map;function Vr(n,e){let t=n+(e?JSON.stringify(e):"");return Tu.has(t)||Tu.set(t,new xs({color:n,gradientMap:er,...e||{}})),Tu.get(t)}function R(n,e,t={}){let i=new Mt(n,t.mat||Vr(e,t.extra));return i.castShadow=t.cast!==!1,i.receiveShadow=!!t.recv,i}var P={sph:(n,e=16,t=12)=>new gs(n,e,t),box:(n,e,t)=>new ps(n,e,t),cyl:(n,e,t,i=16)=>new ks(n,e,t,i),cap:(n,e)=>new Ta(n,e,4,10),cone:(n,e,t=12)=>new wa(n,e,t)};function j(n,e,t,i){return n.position.set(e,t,i),n}function ai(n){let e=n>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}var wu=new Map;function Is(n,e=!1){let t=n+e;if(wu.has(t))return wu.get(t);let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d");e&&(s.fillStyle="#ffffff",s.strokeStyle="#c48ad8",s.lineWidth=8,s.beginPath(),s.arc(64,58,50,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(52,104),s.lineTo(64,124),s.lineTo(76,104),s.fill()),s.font=`${e?62:96}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(n,64,e?62:70);let r=new Sa(i);return r.colorSpace=vn,wu.set(t,r),r}function yi(n,e=1,t=!1){let i=new _a(new Cr({map:Is(n,t),transparent:!0,depthWrite:!1}));return i.scale.set(e,e,e),i}function tr(n){let e=new Ia("#dff1ff","#a6d68a",1.7),t=new Da("#fff4e0",2.3);return t.castShadow=!Gr,t.shadow.mapSize.set(2048,2048),Object.assign(t.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60}),t.shadow.bias=-8e-4,n.add(e,t,t.target),{hemi:e,sun:t}}var nr=[.55,.68,.82,.95,1.05];function Vl(n){let e=n.look||COATS[n.coat]||COATS.dorado,t=new Re,i=new Re;t.add(i);let s=R(P.sph(.5,22,16),e.fur);s.scale.set(.85,.75,1.2),s.position.set(0,.78,-.05),i.add(s);let r=R(P.sph(.42),e.light);if(r.scale.set(.72,.58,1),r.position.set(0,.66,0),i.add(r),e.spots)for(let[M,v,w,_]of[[.22,1,-.2,.22],[-.25,.9,.15,.16]]){let T=R(P.sph(_),e.dark);T.scale.set(1,.45,1.2),T.position.set(M,v,w),i.add(T)}let a=[];for(let[M,v]of[[-.22,.32],[.22,.32],[-.22,-.4],[.22,-.4]]){let w=new Re;w.position.set(M,.62,v);let _=R(P.cap(.12,.28),e.fur);_.position.y=-.26,w.add(_);let T=R(P.sph(.14,12,8),e.light);T.scale.set(1,.6,1.25),T.position.set(0,-.52,.04),w.add(T),i.add(w),a.push(w)}let o=new Re;o.position.set(0,.98,-.6);let l=R(P.cap(.08,.36),e.fur);l.position.y=.22,o.add(l);let c=R(P.sph(.09),e.light);c.position.y=.44,o.add(c),i.add(o);let h=new Re;h.position.set(0,1.28,.5),i.add(h);let d=R(P.sph(.43,22,16),e.fur);if(d.scale.set(1,.95,.95),h.add(d),e.spots){let M=R(P.sph(.17),e.dark);M.scale.set(1,1,.5),M.position.set(.17,.1,.3),h.add(M)}let u=R(P.sph(.22),e.light);u.scale.set(1.1,.8,1),u.position.set(0,-.1,.33),h.add(u);let m=R(P.sph(.075),"#2a1d18");m.position.set(0,-.02,.54),h.add(m);let x=R(P.sph(.08),"#ff7c9c");x.scale.set(1,.4,1.3),x.position.set(0,-.22,.45),h.add(x);let y=[];for(let M of[-1,1]){let v=new Re;v.position.set(M*.17,.08,.35),v.add(R(P.sph(.08),"#2a1d18",{cast:!1}));let w=new Mt(P.sph(.028,8,6),new Pn({color:"#ffffff"}));w.position.set(.025,.035,.06),v.add(w),h.add(v),y.push(v);let _=R(P.sph(.08),"#ff9fb4",{cast:!1});_.scale.set(1,.6,.4),_.position.set(M*.27,-.08,.28),h.add(_)}let p=[];for(let M of[-1,1]){let v=new Re;if(v.position.set(M*.3,.26,-.04),v.rotation.z=M*.35,n.ears==="up"){v.position.y=.3,v.rotation.z=-M*.25;let w=R(P.cone(.13,.36,8),e.dark);w.scale.set(1,1,.55),w.position.set(0,.16,0),v.add(w)}else{let w=R(P.sph(.2),e.dark);w.scale.set(.45,1.15,.85),w.position.set(M*.04,-.22,0),v.add(w)}h.add(v),p.push(v)}let f=new Re;i.add(f);let g=new qt;g.position.set(0,1.02,.42),i.add(g);let E={root:t,body:i,legs:a,tail:o,head:h,eyes:y,ears:p,tongue:x,extras:f,collar:g,t:Math.random()*10,blink:2,key:""};return Up(E,n),E}function Up(n,e){let t=`${e.day>=8}|${e.acc.worn}`;if(n.key===t)return;if(n.key=t,n.extras.clear(),e.day>=8){let r=R(new fn(.33,.055,8,20),"#ff5c5c");r.position.set(0,1.03,.42),r.rotation.x=1.25,n.extras.add(r);let a=R(P.sph(.07),"#ffd23f");a.position.set(0,.86,.6),n.extras.add(a)}let i=n.head;i.children.filter(r=>r.userData.acc).forEach(r=>i.remove(r));let s=(r,a=i)=>{r.userData.acc=!0,a.add(r)};if(e.acc.worn==="lazo"){for(let r of[-1,1]){let a=R(P.cone(.13,.26,10),"#ff79bf");a.rotation.z=r*Math.PI/2,a.position.set(r*.13,.45,0),s(a)}s(j(R(P.sph(.07),"#e0489a"),0,.45,0))}if(e.acc.worn==="gorro"){let r=R(P.cone(.32,.5,14),"#ff6b6b");r.position.set(0,.55,-.02),s(r);let a=R(new fn(.31,.07,8,18),"#ffffff");a.rotation.x=Math.PI/2,a.position.set(0,.32,-.02),s(a);let o=R(P.sph(.09),"#ffffff");o.position.set(0,.82,-.02),s(o)}if(e.acc.worn==="gafas")for(let r of[-1,1]){let a=R(new fn(.1,.025,6,16),"#222222");a.position.set(r*.17,.08,.42),s(a);let o=R(P.cyl(.09,.09,.02),"#333344");o.rotation.x=Math.PI/2,o.position.set(r*.17,.08,.43),s(o)}if(e.acc.worn==="panuelo"){let r=R(P.cone(.3,.35,3),"#4f7cff");r.rotation.x=Math.PI,r.position.set(0,.9,.5),n.extras.add(r)}}var si=(n,e,t)=>n+(e-n)*t;function Li(n,e,t){n.t+=e;let i=n.t,s=1-Math.exp(-12*e),r=t.mode==="walk",a=t.mode==="sleep",o=t.mode==="happy"||t.mode==="spin",l=t.mode==="eat",c=a||t.mode==="lie",h=t.mode==="sit"||t.mode==="paw",d=6+(t.speed||0)*2.4,u=r?Math.sin(i*d)*.75:0,m=c?[-1.35,-1.35,1.35,1.35]:h?[0,t.mode==="paw"?-1.5:0,-1.3,-1.3]:[u,-u,-u,u];n.body.rotation.x=si(n.body.rotation.x,h?-.42:0,s),n.legs.forEach((g,E)=>{g.rotation.x=si(g.rotation.x,m[E],s)});let x=c?-.42:h?-.12:r?Math.abs(Math.sin(i*d))*.06:o?Math.abs(Math.sin(i*9))*.4:0;n.body.position.y=si(n.body.position.y,x,o?1:s);let y=1+Math.sin(i*(a?1.6:2.6))*(a?.035:.015);n.body.scale.set(1,y,1),n.tail.rotation.z=Math.sin(i*(o?24:r?15:a?0:5))*(t.sad?.15:.5),n.tail.rotation.x=si(n.tail.rotation.x,t.sad||a?.9:-.55,s);let p=l?.55+Math.sin(i*13)*.12:a?.35:t.sad?.25:0;n.head.rotation.x=si(n.head.rotation.x,p,s),n.head.rotation.z=si(n.head.rotation.z,r||a?0:Math.sin(i*.8)*.12,s),n.head.position.y=si(n.head.position.y,c?1.05:1.28,s),n.ears.forEach((g,E)=>{g.rotation.x=r?Math.sin(i*d+E)*.25:o?Math.sin(i*18)*.3:0}),n.tongue.visible=(o||t.mood==="feliz")&&!a,n.blink-=e;let f=1;t.eyesClosed||a?f=.12:n.blink<0&&(f=.12,n.blink<-.13&&(n.blink=2+Math.random()*3)),n.eyes.forEach(g=>{g.scale.y=f})}var qu={"\u{1F9D2}":{skin:"#f0c090",hair:"#6a4020",style:"short",shirt:"#f0a020",pants:"#3858b8"},"\u{1F467}":{skin:"#f0c090",hair:"#8a4a20",style:"pigtails",shirt:"#f070b0",pants:"#7048b0"},"\u{1F466}":{skin:"#d8a070",hair:"#2a1a10",style:"short",shirt:"#40a0e0",pants:"#2c4070"},"\u{1F469}":{skin:"#f0c8a0",hair:"#c07030",style:"long",shirt:"#50b860",pants:"#3858b8"},"\u{1F468}":{skin:"#c88858",hair:"#2a1a10",style:"short",shirt:"#e05040",pants:"#4c4c58"},"\u{1F9D1}":{skin:"#e0b080",hair:"#503020",style:"short",shirt:"#8060d0",pants:"#384050"},"\u{1F475}":{skin:"#f0c8a0",hair:"#d8d8e0",style:"bun",shirt:"#c060a0",pants:"#6c5878"},"\u{1F474}":{skin:"#e0b088",hair:"#d8d8e0",style:"bald",shirt:"#7c9c58",pants:"#5a4838"},"\u{1F9B8}":{skin:"#f0c090",hair:"#2a1a10",style:"short",shirt:"#3060e0",pants:"#3060e0",cape:"#e03030"},"\u{1F9D1}\u200D\u{1F680}":{skin:"#f0c090",hair:"#6a4020",style:"helmet",shirt:"#f0f0f4",pants:"#c8ccd8"}},Qy=Object.keys(qu);function ev(n){let e=qu[n]||qu["\u{1F9D2}"],t=new Re,i=new Re;t.add(i);let s=[],r=[],a=null;for(let h of[-1,1]){let d=new Re;d.position.set(h*.13,.72,0),d.add(j(R(P.cap(.09,.42),e.pants),0,-.3,0)),d.add(j(R(P.box(.2,.12,.3),"#3a2a2a"),0,-.66,.05)),i.add(d),s.push(d)}if(i.add(j(R(P.cap(.25,.32),e.shirt),0,1.02,0)),e.cape){let h=R(P.box(.55,.85,.05),e.cape);h.position.set(0,.98,-.27),h.rotation.x=.12,i.add(h)}for(let h of[-1,1]){let d=new Re;d.position.set(h*.33,1.28,0),d.rotation.z=h*.12,d.add(j(R(P.cap(.075,.32),e.shirt),0,-.22,0));let u=j(R(P.sph(.085,10,8),e.skin),0,-.46,0);d.add(u),i.add(d),r.push(d),h>0&&(a=u)}let o=new Re;o.position.y=1.7,i.add(o),o.add(R(P.sph(.3,20,16),e.skin));for(let h of[-1,1])o.add(j(R(P.sph(.045,8,6),"#2a1d18",{cast:!1}),h*.1,.03,.27)),o.add(j(R(P.sph(.05,8,6),"#ff9fb4",{cast:!1}),h*.17,-.06,.24));let l=R(new fn(.07,.018,6,12,Math.PI),"#c0505a",{cast:!1});l.rotation.z=Math.PI,l.position.set(0,-.08,.28),o.add(l);let c=(h=.32)=>R(new gs(h,18,10,0,Math.PI*2,0,Math.PI/2.1),e.hair);if(e.style==="helmet"){o.add(j(c(.31),0,.04,-.02)),o.add(new Mt(P.sph(.42,20,16),new Pn({color:"#cfefff",transparent:!0,opacity:.28,depthWrite:!1})));let h=R(new fn(.33,.06,8,20),"#e0e4ee");h.rotation.x=Math.PI/2,h.position.y=-.3,o.add(h)}else if(e.style==="bald")for(let h of[-1,1])o.add(j(R(P.sph(.12,10,8),e.hair),h*.26,.02,-.06));else{if(o.add(j(c(),0,.03,-.03)),e.style==="long"&&o.add(j(R(P.box(.56,.55,.14),e.hair),0,-.2,-.2)),e.style==="pigtails")for(let h of[-1,1])o.add(j(R(P.sph(.12,10,8),e.hair),h*.33,-.05,-.05));e.style==="bun"&&o.add(j(R(P.sph(.14,10,8),e.hair),0,.3,-.12))}return t.scale.setScalar(.85),{root:t,body:i,legs:s,arms:r,head:o,hand:a,t:0,mode:"idle",modeT:0,leash:!1}}function Yr(n,e,t,i){n.t+=e;let s=n.t,r=1-Math.exp(-12*e);n.modeT>0&&(n.modeT-=e,n.modeT<=0&&(n.mode="idle"));let a=5+i*1.6,o=t?Math.sin(s*a)*.7:0,l=n.mode==="cheer",c=n.mode==="throw";n.legs[0].rotation.x=si(n.legs[0].rotation.x,o,r),n.legs[1].rotation.x=si(n.legs[1].rotation.x,-o,r),n.arms[0].rotation.x=si(n.arms[0].rotation.x,l?-2.8:-o,r),n.arms[1].rotation.x=c?-2.6:si(n.arms[1].rotation.x,l?-2.8:n.leash?-.55:o,r),n.body.position.y=t?Math.abs(Math.sin(s*a))*.06:l?Math.abs(Math.sin(s*10))*.2:Math.sin(s*2)*.01,n.head.rotation.z=t?0:Math.sin(s*.9)*.06}var Ll=16,Zs=new ds(P.cyl(.03,.03,1,5),Vr("#e0403c"),Ll);Zs.frustumCulled=!1;Zs.visible=!1;var bl=new D,El=new D,Au=new D,Ru=new D,Cu=new D,Iu=new D,tv=new D(0,1,0),bp=new kn,Ep=new ut,Tp=new D;function Zr(n,e){if(Zs.parent!==n&&n.add(Zs),Zs.visible=!!e,!e)return;qe.root.updateMatrixWorld(!0),ge.root.updateMatrixWorld(!0),qe.hand.getWorldPosition(bl),ge.collar.getWorldPosition(El);let t=bl.distanceTo(El);Au.addVectors(bl,El).multiplyScalar(.5),Au.y-=Math.max(0,1.9-t)*.35+.05;let i=(s,r)=>r.set(0,0,0).addScaledVector(bl,(1-s)*(1-s)).addScaledVector(Au,2*(1-s)*s).addScaledVector(El,s*s);for(let s=0;s<Ll;s++){i(s/Ll,Ru),i((s+1)/Ll,Cu),Iu.subVectors(Cu,Ru);let r=Iu.length()||.001;bp.setFromUnitVectors(tv,Iu.divideScalar(r)),Tp.set(1,r,1),Ep.compose(Ru.add(Cu).multiplyScalar(.5),bp,Tp),Zs.setMatrixAt(s,Ep)}Zs.instanceMatrix.needsUpdate=!0}function Un(n,e){n.parent!==e&&(n.parent&&n.parent.remove(n),e.add(n))}function co(n){for(;n.children.length;)n.remove(n.children[0])}var Dl=[];function it(n,e,t,i=5,s=.55){for(let r=0;r<i;r++){let a=yi(e,s);a.material=a.material.clone(),a.position.set(t.x+(Math.random()-.5)*.8,t.y+Math.random()*.3,t.z+(Math.random()-.5)*.8),n.add(a),Dl.push({s:a,scene:n,life:1.2+Math.random()*.4,t:0,vy:.9+Math.random()*.6,vx:(Math.random()-.5)*.6})}}function Fp(n){for(let e=Dl.length-1;e>=0;e--){let t=Dl[e];t.t+=n,t.s.position.y+=t.vy*n,t.s.position.x+=t.vx*n,t.s.material.opacity=1-t.t/t.life,t.t>=t.life&&(t.scene.remove(t.s),t.s.material.dispose(),Dl.splice(e,1))}}var re=new En,Qa=tr(re),xn=[{id:"bosque",icon:"\u{1F332}",name:"Bosque",x:-28,z:-15,cave:!0,ready:!0,minDay:3},{id:"casa",icon:"\u{1F3E0}",name:"Casa",x:-16,z:-15,w:6,d:5,h:3,wall:"#fff1dc",roof:"#ff7b7b",door:"#b0703c",ready:!0},{id:"escuela",icon:"\u{1F393}",name:"Escuela",ready:!0,minDay:8,x:-4,z:-15,w:6,d:5,h:3.3,wall:"#ffe58a",roof:"#6f8cff",door:"#5d78e8"},{id:"tienda",icon:"\u{1F6D2}",name:"Tienda",ready:!0,x:7,z:-15,w:5,d:4,h:2.7,wall:"#ffd6e8",roof:"#ff8fc8",door:"#c0607a",stall:!0},{id:"vet",icon:"\u{1F3E5}",name:"Veterinaria",ready:!0,x:18,z:-15,w:6,d:5,h:3,wall:"#ffffff",roof:"#5fd0c4",door:"#3aa89c"},{id:"parque",icon:"\u{1F333}",name:"Parque",x:-4,z:5,park:!0,ready:!0,minDay:3},{id:"lago",icon:"\u{1F986}",name:"Lago",x:17,z:7,lake:!0,ready:!0},{id:"peluqueria",icon:"\u2702\uFE0F",name:"Peluquer\xEDa canina",spot:!0,minDay:3,x:29,z:-15,w:6,d:5,h:3,wall:"#e8f4ff",roof:"#9b7bff",door:"#7a5ce0"},{id:"heladeria",icon:"\u{1F366}",name:"Helader\xEDa",spot:!0,x:40,z:-15,w:5,d:4,h:2.7,wall:"#fff4d6",roof:"#7fd6ff",door:"#40a8d8",stall:!0},{id:"panaderia",icon:"\u{1F950}",name:"Pasteler\xEDa",spot:!0,x:51,z:-15,w:6,d:5,h:3,wall:"#ffe9cc",roof:"#d9824a",door:"#a0582c"},{id:"biblioteca",icon:"\u{1F4DA}",name:"Biblioteca",spot:!0,x:62,z:-15,w:6,d:5,h:3.4,wall:"#f0e6ff",roof:"#4f6fd8",door:"#3a4fa8"},{id:"refugio",icon:"\u{1F3E1}",name:"Refugio de perritos",spot:!0,x:-22,z:12,w:6,d:5,h:3,wall:"#fff0e0",roof:"#5cbf5a",door:"#3c8c3c"},{id:"perros",icon:"\u{1F415}",name:"Parque para perros",spot:!0,dogpark:!0,minDay:3,x:23,z:29},{id:"aventura",icon:"\u{1F5FA}\uFE0F",name:"Valle Aventura",spot:!0,valley:!0,x:46,z:22}],Ft={boxes:[],circles:[]},Ae={x0:-34,x1:70,z0:-24,z1:48},vt={x0:42,x1:70,z0:13,z1:48,gateZ:19,riverZ:34.5,bridgeX:55},td=(n,e)=>n>vt.x0&&e>vt.z0,ts=[],Op=[[-31,-9,67,-9],[-28,-12.5,-28,-9],[-16,-12,-16,-9],[-4,-12,-4,-9],[7,-12.5,7,-9],[18,-12,18,-9],[-4,-9,-4,-.5],[10.5,-9,10.5,19],[29,-12,29,-9],[40,-12.5,40,-9],[51,-12,51,-9],[62,-12,62,-9],[34,-9,34,19],[-22,19,44,19],[-22,15.4,-22,19],[23,19,23,22.5],[44,19,62,19],[55,19,55,42],[48,42,65,42]];function nv(){re.background=new $e("#bfe6ff"),re.fog=new Gi("#bfe6ff",45,95);let n=R(new Gn(240,190),"#8fd46e",{cast:!1,recv:!0});n.rotation.x=-Math.PI/2,n.position.set(18,0,12),re.add(n);let e=ai(424242);for(let d=0;d<70;d++){let u=R(P.cyl(1+e()*2.5,1+e()*2.5,.02,20),e()<.5?"#84cc63":"#9ade7a",{cast:!1,recv:!0});u.position.set(Ae.x0-4+e()*(Ae.x1-Ae.x0+8),.01,Ae.z0-4+e()*(Ae.z1-Ae.z0+8)),re.add(u)}let t=Op,i=[];for(let[d,u,m,x]of t){let y=Math.abs(m-d)+2.4,p=Math.abs(x-u)+2.4,f=R(P.box(y,.06,p),"#f2d39a",{cast:!1,recv:!0});f.position.set((d+m)/2,.03,(u+x)/2),re.add(f),i.push([Math.min(d,m)-1.5,Math.min(u,x)-1.5,Math.max(d,m)+1.5,Math.max(u,x)+1.5])}let s=(d,u)=>i.some(([m,x,y,p])=>d>m&&d<y&&u>x&&u<p);for(let d of xn)d.w&&av(d),d.cave&&ov(d),d.park&&cv(d),d.lake&&lv(d),d.dogpark&&hv(d),d.valley&&uv(d,e);let r=(d,u,m,x,y)=>(d-m)**2+(u-x)**2<y*y;for(let d=0;d<620;d++){let u=Ae.x0-4+e()*(Ae.x1-Ae.x0+8),m=Ae.z0-4+e()*(Ae.z1-Ae.z0+8),x=u<Ae.x0+1||u>Ae.x1-1||m<Ae.z0+1||m>Ae.z1-1,y=u<-21&&m<-17.5,p=td(u,m)&&!x;!x&&!y&&e()>(p?.3:.2)||s(u,m)||xn.some(f=>f.w&&Math.abs(u-f.x)<f.w/2+2&&Math.abs(m-f.z)<f.d/2+2)||r(u,m,-4,5,8)||r(u,m,17,7,7.5)||r(u,m,-28,-15,4)||r(u,m,-16,-9,3)||u>13&&u<33&&m>21&&m<37||Js.some(([f,g,E])=>r(u,m,f,g,E))||Math.abs(u-vt.x0)<1.6&&m>vt.z0-1||Math.abs(m-vt.z0)<1.6&&u>vt.x0-1||Math.abs(m-vt.riverZ)<2.6&&u>vt.x0||Ft.circles.some(f=>r(u,m,f.x,f.z,1.6))||iv(u,m,y||e()<.35,.8+e()*.5)}let a=Gr?160:420,o=new ds(P.sph(.12,6,5),new xs({gradientMap:er}),a),l=["#ff6b8b","#ffd23f","#ffffff","#b98cff","#ff9f43"].map(d=>new $e(d)),c=new ut,h=0;for(let d=0;d<2e3&&h<a;d++){let u=Ae.x0+e()*(Ae.x1-Ae.x0),m=Ae.z0+e()*(Ae.z1-Ae.z0);s(u,m)||xn.some(x=>x.w&&Math.abs(u-x.x)<x.w/2+.8&&Math.abs(m-x.z)<x.d/2+.8)||r(u,m,17,7,5.2)||Math.abs(m-vt.riverZ)<2&&u>vt.x0-1||(c.makeTranslation(u,.12,m),o.setMatrixAt(h,c),o.setColorAt(h,l[Math.floor(e()*l.length)]),h++)}o.count=h,re.add(o);for(let d=0;d<9;d++){let u=new Re;for(let m=0;m<4;m++){let x=R(P.sph(1.2+e(),12,10),"#ffffff",{cast:!1});x.position.set(m*1.3,e()*.6,e()),u.add(x)}u.position.set(-40+e()*80,14+e()*5,-40+e()*30),u.userData.v=.3+e()*.4,re.add(u),zp.push(u)}}var zp=[];function iv(n,e,t,i){let s=Wl(t);s.position.set(n,0,e),s.scale.setScalar(i),s.rotation.y=Math.random()*6,re.add(s),Ft.circles.push({x:n,z:e,r:.55*i,tree:!0}),s.traverse(r=>{r.isMesh&&(r.userData.solidMat=r.material)}),nd.push({g:s,x:n,z:e,s:i,top:(t?3.4:2.9)*i,faded:!1})}var nd=[],Pu=new Map;function sv(n){if(!Pu.has(n)){let e=n.clone();e.transparent=!0,e.opacity=.28,e.depthWrite=!1,Pu.set(n,e)}return Pu.get(n)}function rv(){let n=ft.position.x,e=ft.position.y,t=ft.position.z,i=k.x,s=k.z,r=1,a=n-i,o=t-s,l=a*a+o*o||1;for(let c of nd){let h=!1;if(c.z>s-.5){let d=((c.x-i)*a+(c.z-s)*o)/l;if(d>0&&d<1){let u=i+a*d,m=s+o*d,x=r+(e-r)*d;h=Math.hypot(c.x-u,c.z-m)<1.3*c.s+.4&&x<c.top+.5}}h!==c.faded&&(c.faded=h,c.g.traverse(d=>{d.isMesh&&(d.material=h?sv(d.userData.solidMat):d.userData.solidMat,d.castShadow=!h)}))}}function Wl(n){let e=new Re;if(e.add(j(R(P.cyl(.18,.24,1,8),"#9a6236"),0,.5,0)),n)for(let t=0;t<3;t++){let i=R(P.cone(1.1-t*.28,1.3,9),t%2?"#3f9a5a":"#2f8a4e");i.position.y=1.3+t*.75,e.add(i)}else{for(let[t,i,s,r]of[[0,1.9,0,.95],[.5,1.6,.2,.65],[-.5,1.7,-.1,.7]]){let a=R(P.sph(r,14,10),"#5cbf5a");a.position.set(t,i,s),e.add(a)}if(Math.random()<.4)for(let t=0;t<3;t++){let i=R(P.sph(.11,8,6),"#ff5c5c");i.position.set(Math.cos(t*2)*.8,1.6+t*.2,Math.sin(t*2)*.8),e.add(i)}}return e}function Ps(n,e=1.6){let t=new Re;t.add(R(P.box(e,e*.8,.12),"#ffffff"));let i=new Mt(new Gn(e*.85,e*.7),new Pn({map:Is(n),transparent:!0}));return i.position.z=.07,t.add(i),t}function av(n){let e=new Re,{w:t,d:i,h:s}=n;if(n.stall){e.add(j(R(P.box(t,s*.55,i),n.wall,{recv:!0}),0,s*.275,0));for(let a of[-1,1])e.add(j(R(P.cyl(.12,.12,s+.6,8),"#ffffff"),a*(t/2-.2),(s+.6)/2,i/2-.2));for(let a=0;a<6;a++){let o=R(P.box(t/6,.15,i+.6),a%2?"#ffffff":"#ff6b8b");o.position.set(-t/2+t/12+a*t/6,s+.5,.2),o.rotation.x=-.25,e.add(o)}for(let a=0;a<5;a++){let o=R(P.sph(.22,10,8),["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][a]);o.position.set(-t/2+.7+a*(t-1.4)/4,s*.55+.22,i/2-.4),e.add(o)}}else{e.add(j(R(P.box(t,s,i),n.wall,{recv:!0}),0,s/2,0));let a=R(P.cone(Math.max(t,i)*.78,2.2,4),n.roof);a.rotation.y=Math.PI/4,a.scale.set(1,1,i/t),a.position.y=s+1.1,e.add(a);let o=R(P.box(1.2,1.9,.12),n.door);o.position.set(0,.95,i/2+.03),e.add(o);let l=R(P.sph(.07),"#ffd23f");l.position.set(.4,.95,i/2+.12),e.add(l);for(let c of[-1,1]){let h=R(P.box(1,.9,.1),"#bfe9ff",{extra:{emissive:"#000000"}});h.position.set(c*(t/2-1.1),s*.6,i/2+.03),e.add(h),n.wins=(n.wins||[]).concat(h);let d=R(P.box(1.15,.12,.14),"#ffffff");d.position.set(c*(t/2-1.1),s*.6-.5,i/2+.06),e.add(d)}if(n.id==="casa"){let c=R(P.box(.6,1.2,.6),"#c0605a");c.position.set(t/2-1.2,s+1.4,-.6),e.add(c)}if(n.id==="vet"){let c=new Re;c.add(R(P.box(.3,.9,.1),"#ff5c5c")),c.add(R(P.box(.9,.3,.1),"#ff5c5c")),c.position.set(0,s+.4,i/2+.1),e.add(c)}if(n.id==="escuela"){let c=R(P.cyl(.05,.05,2.5,6),"#888888");c.position.set(t/2-.3,s+1.2,i/2-.3),e.add(c);let h=R(P.box(.9,.5,.05),"#ff6b6b");h.position.set(t/2+.15,s+2.2,i/2-.3),e.add(h),n.flag=h}}let r=Ps(n.icon);r.position.set(n.stall?0:-t/2+.9,n.stall?s+1.4:2.2,i/2+.1),n.stall||(r.position.x=-t/2+.9),e.add(r),e.position.set(n.x,0,n.z),re.add(e),Ft.boxes.push({x0:n.x-t/2-.2,x1:n.x+t/2+.2,z0:n.z-i/2-.2,z1:n.z+i/2+.2}),Jr(n,n.x,n.z+i/2+1.4,s+2.8)}function ov(n){let e=new Re,t=ai(99);for(let r=0;r<14;r++){let a=Math.PI*(r/13),o=R(new Hs(.9+t()*.5),r%2?"#9aa0b0":"#b4b9c6");o.position.set(Math.cos(a)*2.6,Math.sin(a)*2.6,0),o.rotation.set(t()*3,t()*3,0),e.add(o)}let i=R(new ms(2,24,0,Math.PI),"#1a1420",{cast:!1});i.position.z=.1,e.add(i);let s=Ps("\u{1F332}",1.4);s.position.set(3.4,1,.6),e.add(s),e.position.set(n.x,0,n.z),re.add(e),Ft.boxes.push({x0:n.x-3.6,x1:n.x+3.6,z0:n.z-1.6,z1:n.z+1}),Jr(n,n.x,n.z+2.6,4.6)}var At=null;function cv(n){let e=new Re;e.add(R(P.cyl(1.6,1.8,.6,24),"#dfe3ee",{recv:!0}));let t=R(P.cyl(1.35,1.35,.1,24),"#6cc8ff",{cast:!1});t.position.y=.32,e.add(t),e.add(j(R(P.cyl(.25,.35,1.6,12),"#cfd3de"),0,.8,0));let i=R(P.sph(.5,14,10),"#6cc8ff");i.position.y=1.7,e.add(i),e.position.set(n.x,0,n.z),re.add(e),Ft.circles.push({x:n.x,z:n.z,r:1.9});for(let[r,a,o]of[[-4,1,1.57],[4,1,-1.57],[0,4.5,3.14]]){let l=new Re;l.add(j(R(P.box(2,.15,.6),"#d79b5f"),0,.5,0)),l.add(j(R(P.box(2,.5,.12),"#d79b5f"),0,.85,-.25));for(let c of[-.8,.8])l.add(j(R(P.box(.12,.5,.5),"#777777"),c,.25,0));l.position.set(n.x+r,0,n.z+a),l.rotation.y=o,re.add(l)}At={m:R(P.sph(.35,18,14),"#ffd23f"),v:new D,pushes:0,cd:0};let s=R(new fn(.35,.05,6,20),"#ff6b8b");At.m.add(s),At.m.position.set(n.x+2.5,.35,n.z-3),re.add(At.m),Jr(n,n.x,n.z-2.6,3.2)}var no=[];function lv(n){let e=R(P.cyl(5.4,5.4,.05,40),"#f6e3a8",{cast:!1,recv:!0});e.position.set(n.x,.03,n.z),re.add(e);let t=R(P.cyl(4.6,4.6,.08,40),"#5ec2f5",{cast:!1,recv:!0});t.position.set(n.x,.07,n.z),re.add(t);let i=R(P.box(3.4,.15,1.4),"#c98c55",{recv:!0});i.position.set(n.x-4.3,.2,n.z),re.add(i),Ft.circles.push({x:n.x+.6,z:n.z,r:4.1});for(let s=0;s<3;s++){let r=new Re;{let a=R(P.sph(.3),"#ffe066");a.scale.set(1,.7,1.3),r.add(a)}r.add(j(R(P.sph(.18),"#ffe066"),0,.3,.3));{let a=j(R(P.cone(.07,.18,6),"#ff9f43"),0,.28,.5);a.rotation.x=Math.PI/2,r.add(a)}r.userData={a:s*2.1,r:1.5+s*.9},re.add(r),no.push(r)}no.forEach(s=>{s.userData.cx=n.x+.8,s.userData.cz=n.z}),Jr(n,n.x-5.4,n.z,2.4)}function Jr(n,e,t,i){let s=yi("\u2B50",1.5,!0);s.position.set(e,i,n.w?n.z:t),s.visible=!1,re.add(s),ts.push({pl:n,x:e,z:t,mk:s,baseY:i,emoji:""})}var Js=[];function ji(n,e,t,i,s,r="#ffffff"){let a=Math.hypot(i-e,s-t),o=Math.max(1,Math.round(a/1.5)),l=Math.atan2(i-e,s-t);for(let c=0;c<=o;c++)n.add(j(R(P.box(.16,1,.16),r),e+(i-e)*c/o,.5,t+(s-t)*c/o));for(let c of[.4,.8]){let h=R(P.box(.08,.1,a),r);h.position.set((e+i)/2,c,(t+s)/2),h.rotation.y=l,n.add(h)}Ft.boxes.push({x0:Math.min(e,i)-.15,x1:Math.max(e,i)+.15,z0:Math.min(t,s)-.15,z1:Math.max(t,s)+.15})}var wn={x0:15,x1:31,z0:23,z1:35,gx:23},Qi={};function hv(n){let e=new Re,t=wn;e.add(j(R(P.box(t.x1-t.x0,.03,t.z1-t.z0),"#a4dc78",{cast:!1,recv:!0}),(t.x0+t.x1)/2,.015,(t.z0+t.z1)/2)),ji(e,t.x0,t.z0,t.gx-1.4,t.z0,"#ffb347"),ji(e,t.gx+1.4,t.z0,t.x1,t.z0,"#ffb347"),ji(e,t.x0,t.z1,t.x1,t.z1,"#ffb347"),ji(e,t.x0,t.z0,t.x0,t.z1,"#ffb347"),ji(e,t.x1,t.z0,t.x1,t.z1,"#ffb347");for(let o of[-1.5,1.5])e.add(j(R(P.box(.3,2.2,.3),"#ff8c42"),t.gx+o,1.1,t.z0));e.add(j(R(P.box(3.3,.35,.35),"#ff8c42"),t.gx,2.3,t.z0));let i=Ps("\u{1F415}",1.1);i.position.set(t.gx,3.05,t.z0),e.add(i);let s=R(new ks(.9,.9,3.2,16,1,!0,0,Math.PI),"#ff6b8b",{extra:{side:Ln}});s.rotation.z=Math.PI/2,s.rotation.y=Math.PI/2,s.position.set(18.5,0,32),e.add(s),Ft.boxes.push({x0:16.9,x1:20.1,z0:31,z1:33});for(let o=0;o<3;o++){let l=R(new fn(.6,.07,8,20),["#6fc2ff","#ffd23f","#8be08b"][o]);l.position.set(25+o*2,.75,33),e.add(l)}for(let o=0;o<4;o++)e.add(j(R(P.cone(.25,.6,10),"#ff9f43"),17+o*1.3,.3,26));let r=new Re;r.add(j(R(P.cyl(.25,.3,.9,10),"#b8bcc8"),0,.45,0)),r.add(j(R(P.cyl(.55,.4,.2,14),"#dfe3ee"),0,.2,.6)),r.add(j(R(P.cyl(.42,.42,.04,14),"#6cc8ff",{cast:!1}),0,.3,.6)),r.position.set(29.5,0,25),e.add(r),Ft.circles.push({x:29.5,z:25,r:.4}),Qi.water=[29.5,26.4,Math.PI];let a=new Re;a.add(j(R(P.box(2,.15,.6),"#d79b5f"),0,.5,0)),a.add(j(R(P.box(2,.5,.12),"#d79b5f"),0,.85,-.25)),a.position.set(28,0,34.2),e.add(a),Qi.disc=R(P.cyl(.32,.32,.06,18),"#ff4fa0"),Qi.disc.visible=!1,e.add(Qi.disc),re.add(e),Jr(n,t.gx,t.z0+1.6,3.8)}var gn={mirador:[65,22.6],chest:[47.2,42],cave:[65,43.4]},_i=null,mi=null;function uv(n,e){let t=vt,i=new Re;i.add(j(R(P.box(t.x1-t.x0+4,.025,t.z1-t.z0+4),"#79c662",{cast:!1,recv:!0}),(t.x0+t.x1)/2+2,.012,(t.z0+t.z1)/2+2));let s=(y,p,f,g)=>{let E=Math.abs(f-y)||1.2,M=Math.abs(g-p)||1.2;i.add(j(R(P.box(E,1.5,M),"#3f9a4e"),(y+f)/2,.75,(p+g)/2)),Ft.boxes.push({x0:(y+f)/2-E/2,x1:(y+f)/2+E/2,z0:(p+g)/2-M/2,z1:(p+g)/2+M/2})};s(t.x0,t.z0,t.x0,t.gateZ-1.6),s(t.x0,t.gateZ+1.6,t.x0,t.z1+2),s(t.x0,t.z0,t.x1+2,t.z0);for(let y of[-1.7,1.7])i.add(j(R(P.box(.5,3,.5),"#9a6236"),t.x0,1.5,t.gateZ+y));i.add(j(R(P.box(.6,.5,4),"#9a6236"),t.x0,3.1,t.gateZ));let r=Ps("\u{1F5FA}\uFE0F",1.2);r.rotation.y=-Math.PI/2,r.position.set(t.x0-.35,3.9,t.gateZ),i.add(r);let a=3;i.add(j(R(P.box(t.x1-t.x0+4,.08,a),"#5ec2f5",{cast:!1,recv:!0}),(t.x0+t.x1)/2+2,.06,t.riverZ)),Ft.boxes.push({x0:t.x0,x1:t.bridgeX-1.4,z0:t.riverZ-a/2,z1:t.riverZ+a/2},{x0:t.bridgeX+1.4,x1:t.x1+2,z0:t.riverZ-a/2,z1:t.riverZ+a/2});let o=new Re;for(let y=0;y<7;y++)o.add(j(R(P.box(2.6,.12,.6),"#c98c55",{recv:!0}),0,.22+Math.sin(y/6*Math.PI)*.25,-1.8+y*.6));for(let y of[-1.35,1.35]){o.add(j(R(P.box(.12,.12,4.2),"#8a5a30"),y,1,0));for(let p of[-2,0,2])o.add(j(R(P.box(.14,.9,.14),"#8a5a30"),y,.55,p))}o.position.set(t.bridgeX,0,t.riverZ),i.add(o);for(let y=0;y<10;y++){let p=R(new Hs(.25+e()*.3),"#a8adb8");p.position.set(t.x0+2+e()*(t.x1-t.x0-4),.1,t.riverZ+(e()<.5?-1:1)*(a/2+.3)),i.add(p)}let l=R(P.cone(1.8,2.4,4),"#e8a040");l.rotation.y=Math.PI/4,l.position.set(48.5,1.2,25),i.add(l),i.add(j(R(P.box(.8,1.2,.05),"#5a3a20"),48.5,.6,26.28)),Ft.circles.push({x:48.5,z:25,r:1.6});let c=new Re;for(let y=0;y<5;y++){let p=R(P.cyl(.08,.08,.8,6),"#7a4a24");p.rotation.z=Math.PI/2,p.rotation.y=y*1.25,p.position.y=.1,c.add(p)}let h=R(P.cone(.32,.8,8),"#ff8c1a",{extra:{emissive:"#ff5a00"},cast:!1});h.position.y=.45,c.add(h),c.position.set(45.5,0,25),i.add(c),Qi.flame=h,Ft.circles.push({x:45.5,z:25,r:.6}),_i=uo({coat:"#5f8a3a",skin:"#d8a070",hair:"#5a3a20",extra:y=>{let p=R(P.cyl(.55,.55,.06,16),"#8a6a3a");p.position.y=2.35,y.add(p),y.add(j(R(P.cyl(.3,.33,.3,14),"#8a6a3a"),0,2.5,0))}}),_i.position.set(47,0,22.4),_i.rotation.y=-.4,_i.scale.setScalar(.85),i.add(_i),Ft.circles.push({x:47,z:22.4,r:.5}),Js.push([47,24,4.5]);let d=new Re;d.add(j(R(P.cyl(1.2,1.4,4,12),"#c8c0b0"),0,2,0)),d.add(j(R(P.cyl(1.6,1.6,.3,12),"#9a8a78"),0,4.15,0));for(let y=0;y<8;y++){let p=y/8*Math.PI*2;d.add(j(R(P.box(.3,.5,.3),"#9a8a78"),Math.cos(p)*1.45,4.5,Math.sin(p)*1.45))}d.add(j(R(P.cyl(.05,.05,2,6),"#666666"),0,5.3,0)),d.add(j(R(P.box(.9,.5,.05),"#ff5c5c"),.45,6,0)),d.add(j(R(P.box(.9,1.6,.1),"#6a4a2a"),0,.8,1.3)),d.position.set(65,0,20.8),i.add(d),Ft.circles.push({x:65,z:20.8,r:1.45}),Js.push([65,21,4]);for(let[y,p,f]of[[45.5,44.5,2.4],[47.5,45.5,1.4],[50,44.8,2.8],[51.5,46,1],[44.8,42.8,.9]])i.add(j(R(P.cyl(.4,.45,f,10),"#d8d0c0"),y,f/2,p)),Ft.circles.push({x:y,z:p,r:.5});i.add(j(R(P.box(3,.4,.8),"#c8c0b0"),48,.2,46.6)),mi=new Re,mi.add(j(R(P.box(.9,.55,.6),"#8a5a2a"),0,.28,0));let u=R(P.box(.95,.2,.65),"#d4a020");u.position.set(0,.62,0),mi.add(u),mi.userData.lid=u,mi.add(j(R(P.box(.16,.22,.05),"#ffd23f"),0,.38,.32)),mi.position.set(gn.chest[0],0,gn.chest[1]+1.1),mi.rotation.y=0,i.add(mi),Ft.circles.push({x:gn.chest[0],z:gn.chest[1]+1.1,r:.5}),Js.push([48,44,4.5]);let m=new Re,x=ai(77);for(let y=0;y<12;y++){let p=Math.PI*(y/11),f=R(new Hs(.8+x()*.4),y%2?"#8a90a8":"#a4a9bc");f.position.set(Math.cos(p)*2.2,Math.sin(p)*2.2,0),f.rotation.set(x()*3,x()*3,0),m.add(f)}m.add(j(R(new ms(1.7,24,0,Math.PI),"#241c3a",{cast:!1}),0,0,.1));for(let y=0;y<6;y++){let p=R(P.cone(.18,.7,5),y%2?"#80f0ff":"#c0a0ff",{extra:{emissive:y%2?"#106070":"#402870"}});p.position.set(-2.6+y%3*.3+(y>2?4.9:0),.35,.6+y%2*.3),p.rotation.z=(x()-.5)*.6,m.add(p)}m.rotation.y=Math.PI,m.position.set(65,0,45),i.add(m),Ft.boxes.push({x0:61.8,x1:68.2,z0:44.8,z1:46.8}),Js.push([65,44,4.5]);for(let y=0;y<6;y++){let p=0,f=0;for(let M=0;M<40&&(p=t.x0+3+e()*(t.x1-t.x0-6),f=t.z0+3+e()*(t.z1-t.z0-6),!(Math.abs(f-t.riverZ)>3&&!Js.some(([v,w,_])=>Math.hypot(p-v,f-w)<_)));M++);let g=new Re;g.add(j(R(P.cyl(.18,.24,.9,8),"#fff4e0"),0,.45,0));let E=R(new gs(.6,14,8,0,Math.PI*2,0,Math.PI/2),y%2?"#ff5c5c":"#b98cff");E.position.y=.85,g.add(E),g.position.set(p,0,f),i.add(g),Ft.circles.push({x:p,z:f,r:.35})}re.add(i),Jr(n,46,20.6,3.6)}var ri=[];function id(){let n=new Re,e=R(P.cyl(.09,.09,.6,8),"#fff6e0");e.rotation.z=Math.PI/2,n.add(e);for(let t of[-.32,.32])for(let i of[-.09,.09]){let s=R(P.sph(.12,10,8),"#fff6e0");s.position.set(t,0,i),n.add(s)}return n}function Bp(n){ri.forEach(i=>re.remove(i.m)),ri.length=0,n.mapBones.day!==n.day&&(n.mapBones={day:n.day,taken:[]});let e=ai(n.bornAt%1e5+n.day*7919+3),t=0;for(let i=0;i<8&&t<3e3;t++){let s=Ae.x0+2+e()*(Ae.x1-Ae.x0-4),r=Ae.z0+2+e()*(Ae.z1-Ae.z0-4);if(!Fn(s,r,.8)){if(!n.mapBones.taken.includes(i)){let a=id();a.position.set(s,.45,r),re.add(a),ri.push({m:a,i})}i++}}if(Nn=null,n.day>=2&&!(n.treasure&&n.treasure.day===n.day)){let i=ai(n.bornAt%99991+n.day*104729);for(let s=0;s<800;s++){let r=Ae.x0+2+i()*(Ae.x1-Ae.x0-4),a=Ae.z0+2+i()*(Ae.z1-Ae.z0-4);if(!(Fn(r,a,1)||Math.hypot(r+16,a+9)<8)){Nn={x:r,z:a};break}}}}var Nn=null;function Fn(n,e,t){return n<Ae.x0||n>Ae.x1||e<Ae.z0||e>Ae.z1||Ft.boxes.some(i=>n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)?!0:Math.abs(e-7)<.7&&n>11&&n<15?!1:Ft.circles.some(i=>(n-i.x)**2+(e-i.z)**2<(i.r+t)**2)}var St=new En,wp=tr(St),Nl={},Lu=[];function dv(){St.background=new $e("#ffe9f4"),wp.sun.position.set(4,10,6),wp.sun.target.position.set(0,0,0);let n=R(P.box(12,.2,9),"#e7b98a",{cast:!1,recv:!0});n.position.y=-.1,St.add(n);for(let y=-5;y<=5;y+=1){let p=R(P.box(.03,.01,9),"#d4a274",{cast:!1});p.position.set(y,.005,0),St.add(p)}let e=R(P.box(12,5,.2),"#ffd1e6",{recv:!0});e.position.set(0,2.5,-4.5),St.add(e);let t=R(P.box(.2,5,9),"#c8f1e4",{recv:!0});t.position.set(-6,2.5,0),St.add(t);let i=R(P.box(2.6,1.8,.1),"#ffffff");i.position.set(2,2.9,-4.38),St.add(i);let s=R(P.box(2.3,1.5,.1),"#9fdcff",{cast:!1});s.position.set(2,2.9,-4.32),St.add(s);let r=Ps("\u{1F43E}",1.2);r.position.set(-2.5,3,-4.35),St.add(r);let a=R(P.cyl(2.2,2.2,.04,32),"#ffb3d1",{cast:!1,recv:!0});a.position.set(0,.02,.5),St.add(a);let o=new Re;o.add(j(R(P.cyl(1.2,1.3,.35,24),"#8f6fd8",{recv:!0}),0,.18,0)),o.add(j(R(P.cyl(1,1,.1,24),"#ffe8f4",{recv:!0}),0,.36,0));let l=R(new fn(1.15,.22,10,26),"#a78bfa");l.rotation.x=Math.PI/2,l.position.y=.4,o.add(l),o.position.set(-3.6,0,-2.6),St.add(o);let c=(y,p,f)=>{let g=new Re;g.add(j(R(P.cyl(.45,.35,.25,20),y),0,.13,0));let E=R(P.cyl(.36,.36,.05,20),f,{cast:!1});return E.position.y=.24,g.add(E),g.userData.fill=E,g.position.set(p,0,-3),St.add(g),g};Nl.food=c("#ff7b7b",.6,"#b0703c"),Nl.water=c("#6f8cff",2,"#7fd6ff");let h=R(P.box(1.4,.8,1),"#ffd23f");h.position.set(4.3,.4,-3),St.add(h);let d=R(P.sph(.28),"#6fc2ff");d.position.set(4,.95,-3),St.add(d);let u=R(P.box(.3,.3,.3),"#ff8fc8");u.position.set(4.6,.95,-2.9),St.add(u);let m=new Re;m.add(j(R(P.box(2.2,.8,1.4),"#ffffff"),0,.45,0)),m.add(j(R(P.box(1.9,.1,1.1),"#bfe9ff",{cast:!1}),0,.82,0));for(let y of[-.9,.9])for(let p of[-.5,.5])m.add(j(R(P.sph(.12),"#ffd23f"),y,.06,p));m.position.set(-4.3,0,1.6),St.add(m),Nl.tub=m;let x=R(P.cyl(.35,.28,.6,14),"#ff9f43");x.position.set(5.2,.3,.8),St.add(x);for(let y=0;y<3;y++){let p=R(P.sph(.35,10,8),"#5cbf5a");p.position.set(5.2+Math.cos(y*2)*.2,.9+y*.15,.8+Math.sin(y*2)*.2),St.add(p)}}var zl={food:[.6,-2,Math.PI],water:[2,-2,Math.PI],bed:[-3.6,-2.6,.6],tub:[-4.3,1.6,.8],center:[0,.6,.3],toys:[3.6,-2.2,Math.PI*.8]};function sd(n){Lu.forEach(t=>St.remove(t)),Lu=[];let e=[[2.6,1.6],[-1.4,2.4],[3.6,2.6]];for(let t=0;t<Math.min(n.mess,3);t++){let i=yi("\u{1F4A9}",.8);i.position.set(e[t][0],.4,e[t][1]),St.add(i),Lu.push(i)}}var Bt=re,ge=null,I={x:-16,z:-9,ry:0,speed:0,mode:"idle",modeT:0,path:null},he="town",xt=!1,Tl=0,we={up:0,down:0,left:0,right:0,a:!1,jx:0,jz:0},qe=null,k={x:-16,z:-8.6,ry:0},gi=[];function lo(n,e,t=0){k.x=n,k.z=e,k.ry=t,I.x=n-Math.sin(t)*1.3,I.z=e-Math.cos(t)*1.3,I.ry=t,I.path=null,gi=[{x:I.x,z:I.z},{x:n,z:e}]}function kp(n,e,t=0){k.x=n,k.z=e,k.ry=t,gi=[{x:I.x,z:I.z},{x:n,z:e}]}var Xl=()=>!!ge&&!!qe&&ge.root.parent===qe.root.parent;function fv(n,e,t){let i=gi[gi.length-1];(!i||Math.hypot(k.x-i.x,k.z-i.z)>=.05)&&gi.push({x:k.x,z:k.z}),gi.length>300&&gi.shift();let s=1.15+t*.12,r=k.x,a=k.z,o=r,l=a;for(let m=gi.length-1;m>=0;m--){let x=gi[m],y=Math.hypot(r-x.x,a-x.z);if(y>=s){let p=s/y;o=r+(x.x-r)*p,l=a+(x.z-a)*p,s=0;break}s-=y,r=x.x,a=x.z,o=r,l=a}let c=o-I.x,h=l-I.z,d=Math.hypot(c,h);if(d<.03)return null;let u=Math.min(d,e*n*(d>1.5?1.7:1));return I.x+=c/d*u,I.z+=h/d*u,{dx:c/d,dz:h/d,sp:u/n}}function ql(n){Ne=n,Ce.root.activeId=n.id;let e=n.pet;simulate(e,now(e)),ge&&ge.root.parent&&ge.root.parent.remove(ge.root),ge=Vl(e),qe&&qe.root.parent&&qe.root.parent.remove(qe.root),qe=ev(n.avatar),lo(-16,-8.6,0),Bt=re,he="town",re.add(ge.root,qe.root),Bp(e),go(e),saveRoot(),ae("#picker").hidden=!0,ae("#hud").hidden=!1,Rt(),Hp(e),speak(`\xA1Hola ${n.name}! \xA1Vamos a pasear!`),setTimeout(()=>dogSound("happy",stageOf(e.day).size),2200)}function Hp(n){let e=new Date(now(n)).getHours(),t=e<7||e>=20,i=e>=18&&!t;Mm=t;let s=t?"#2d3466":i?"#ffc7a8":"#bfe6ff";re.background.set(s),re.fog.color.set(s),Qa.hemi.intensity=t?.7:1.7,Qa.sun.intensity=t?.5:i?1.6:2.3,Qa.sun.color.set(t?"#9fb0ff":i?"#ffc08a":"#fff4e0");for(let r of xn)for(let a of r.wins||[])a.material=Vr("#bfe9ff",{emissive:t?"#ffd27a":"#000000"})}var pv={feliz:"\u{1F604}",normal:"\u{1F642}",triste:"\u{1F622}",enferma:"\u{1F912}",dormida:"\u{1F634}"};function Rt(){if(!Ne)return;let n=Ne.pet,e=STAT_INFO.map(t=>{let i=Math.round(n.stats[t.key]);return`<div class="hb ${i<25?"low":""}" title="${t.label}"><span>${t.icon}</span><i><b style="width:${i}%;background:${t.color}"></b></i></div>`}).join("");ae("#hud").innerHTML=`<div class="hud-left"><a class="hbtn" href="../index.html" aria-label="Volver al juego 2D">\u{1F579}\uFE0F</a><span class="face">${pv[moodOf(n)]}</span></div>
    <div class="hud-bars">${e}</div><div class="hud-right"><span class="chip">\u{1F9B4} ${n.bones}</span><span class="chip">${$l[stageOf(n.day).id]} ${n.day}</span><span class="chip">\u{1F525} ${n.streak}</span><button class="hbtn" id="map3" aria-label="Mapa">\u{1F5FA}\uFE0F</button><button class="hbtn" id="diary3" aria-label="Diario">\u{1F4D6}</button><button class="hbtn" id="music" aria-label="M\xFAsica">${Music.isOn()?"\u{1F3B5}":"\u{1F515}"}</button><button class="hbtn" id="mute" aria-label="Sonido">${zr?"\u{1F507}":"\u{1F50A}"}</button></div>`,Cn()}var $l={recien:"\u{1F423}",bebe:"\u{1F37C}",cachorra:"\u{1F436}",joven:"\u{1F415}",adulta:"\u{1F382}"},nn=null,Ii=null;function mv(){let n=ae("#prompt"),e=Ne.pet,t="";he==="town"&&(e.asleep&&am()?t='<button class="go-btn" data-act="wake" aria-label="Despertar">\u{1F4A4} \u279C \u23F0</button>':nn?t=e.day<(nn.pl.minDay||1)?`<button class="go-btn locked" data-act="enter" aria-label="${nn.pl.name}: cerrado">\u{1F512} ${nn.pl.icon} <small>\u23F3${nn.pl.minDay-e.day}</small></button>`:`<button class="go-btn" data-act="enter" aria-label="Entrar a ${nn.pl.name}">\u24B6 ${nn.pl.icon}</button>`:Ii&&(t=`<button class="go-btn ${Ii.warn?"locked":""}" data-act="enter" aria-label="${mn(Ii.label)}">\u24B6 ${Ii.icon} <small>${mn(Ii.label)}</small></button>`)),n.__h!==t&&(n.innerHTML=t,n.__h=t),n.hidden=!t}function Yl(n,e=[]){return[{id:"help",icon:"\u2753",label:"Ayuda"},...n,...e].map(i=>{let s=i.badge?`${i.label}. ${i.why||""}`:i.label;return`<button class="opt ${i.badge?"off":""}" data-act="${i.id}" data-say="${mn(s)}" ${i.badge?'aria-disabled="true"':""} aria-label="${mn(s)}"><span class="oi">${i.icon}</span><span class="on">${mn(i.label)}</span>${i.fx?`<span class="ofx">${i.fx}</span>`:""}${i.badge?`<span class="badge">${i.badge}</span>`:i.count!=null?`<span class="badge cnt">${i.count}</span>`:""}</button>`}).join("")}function Ks(){he==="home"&&(ae("#actions").innerHTML=Yl(placeActions("casa",Ne.pet),[{id:"exit",icon:"\u{1F6AA}",label:"Salir"}]),typeof Cn=="function"&&setTimeout(Cn,0))}function gv(n){countKind(Ne.pet,n)}function io(n,e,t){let i=Ne.pet;applyFx(i,n.fx),countKind(i,n.kind),addEvent(i,n.icon,n.msg);let s=Object.entries(n.fx).filter(([,r])=>r>0).map(([r])=>STAT_ICON[r]).join("");bt(n.icon,s?"+"+s:""),n.word&&speak(n.word),n.sad?dogSound("sad",mt()):dogSound("happy",mt(),.7),I.mode="happy",I.modeT=1,xt=!1,saveRoot(),Rt(),t&&t(),Cn()}function ho(n){let e=Ne.pet;if(xt&&n!=="exit")return;if(n==="exit")return yv();n==="ropa"&&(n="wear:"),setTimeout(()=>On("do:"+n.split(":")[0]),0);let t=placeEffect(n,e),i=()=>{Ks(),sd(e)};if(t.fx){let s={food:["food","eat",2.2,"\u{1F356}"],water:["water","eat",1.8,"\u{1F4A7}"],toys:["toys","happy",2,"\u2B50"],bed:["bed","sleep",2.5,"\u{1F4A4}"],center:["center","happy",1.6,t.icon==="\u{1F9FD}"?"\u{1FAE7}":"\u2728"]}[t.anim];if(!s)return I.mode="happy",I.modeT=1.4,it(St,t.icon==="\u{1F917}"?"\u{1F496}":t.icon,new D(t.icon==="\u{1F9FB}"?1.5:I.x,1.4,t.icon==="\u{1F9FB}"?2:I.z),5),io(t,St,i);let[r,a,o,l]=s;return xt=!0,Rn(zl[r],()=>{I.mode=a,I.modeT=o,r==="food"&&(Nl.food.userData.fill.visible=!0),lt("pop");let c=performance.now(),h=setInterval(()=>{it(St,l,new D(I.x,1.6*ge.root.scale.x+.3,I.z),1,.45),performance.now()-c>o*1e3&&clearInterval(h)},350);setTimeout(()=>{io(t,St,i),a==="sleep"&&(I.mode="idle")},o*1e3)})}switch(t.special){case"wear":return I.mode="happy",I.modeT=1,bt(t.icon),speak(t.word),saveRoot(),Ks();case"sleep":xt=!0,Rn(zl.bed,()=>{e.asleep=!0,I.mode="sleep",addEvent(e,"\u{1F6CF}\uFE0F","Acostaste a Luna en su camita."),bt("\u{1F6CF}\uFE0F","\u{1F4A4}"),speak("Buenas noches, Luna"),xt=!1,saveRoot(),Rt(),Ks()});return;case"wake":e.asleep=!1,I.mode="idle",e.stats.energia<60?(e.stats.felicidad=clamp(e.stats.felicidad-6,0,100),addEvent(e,"\u23F0","Despertaste a Luna antes de tiempo."),bt("\u{1F62B}"),speak("\xA1Uy, ten\xEDa sue\xF1o!"),dogSound("sad",mt())):(addEvent(e,"\u23F0","Luna despert\xF3 con energ\xEDa."),bt("\u23F0"),speak("\xA1Buenos d\xEDas!")),saveRoot(),Rt(),Ks();return;case"memory":return EM();case"potty":return Kp("potty");case"bath":return IM()}}var Gp=!1;function Vp(){Gp=!0,he="park",speak("Parque"),dogSound("bark",mt(),.6),Wp(),ae("#actions").hidden=!1,ae("#prompt").hidden=!0,On("open:parque")}function es(){Gp=!1,he="town",xt=!1,I.path=null,ae("#actions").hidden=!0}function Wp(){he==="park"&&(ae("#actions").innerHTML=Yl(placeActions("parque",Ne.pet),[{id:"closepark",icon:"\u{1F6AA}",label:"Salir"}]))}function xv(n){let e=Ne.pet,t=xn.find(r=>r.id==="parque");if(n==="closepark")return es();if(xt)return;if(setTimeout(()=>On("do:"+n),0),n==="agility")return es(),xM();if(n==="hide")return es(),um();if(n==="fetch")return es(),AM();let i=placeEffect(n,e);if(!i.fx)return;let s=()=>io(i,re,Wp);if(xt=!0,n==="stroll"){let r=[0,1,2,3,4].map(o=>[t.x+Math.cos(o*Math.PI/2)*3.2,t.z+Math.sin(o*Math.PI/2)*3.2]),a=()=>{let o=r.shift();if(!o)return s();Rn([o[0],o[1],0],a)};a()}else if(n==="kick"){let r=At.m.position;Rn([r.x-.9,r.z,Math.PI/2],()=>{At.v.set(6+Math.random()*3,0,(Math.random()-.5)*6),lt("pop"),dogSound("bark",mt()),I.mode="happy",I.modeT=1.5,setTimeout(s,1500)})}else n==="bench"?Rn([t.x-3.2,t.z+1,Math.PI/2],()=>{I.mode="sleep",setTimeout(s,1800)}):s()}function Rn(n,e){I.path={x:n[0],z:n[1],ry:n[2],done:e}}function Yn(n){let e=ae("#fade");e.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>e.classList.remove("on"),60)},380)}function _v(){Yn(Xp)}function Xp(){Un(ge.root,St),Un(qe.root,St),Bt=St,he="home",I.x=0,I.z=2.8,I.ry=Math.PI,I.path=null,k.x=2.4,k.z=3.4,k.ry=Math.PI,Ne.pet.asleep&&(I.x=zl.bed[0],I.z=zl.bed[1]),sd(Ne.pet),Ks(),ae("#actions").hidden=!1,ae("#prompt").hidden=!0,speak("Casa"),setTimeout(()=>dogSound("bark",mt(),.6),600),On("open:casa")}function yv(){xt=!1,Yn(()=>{let n=Ne.pet.asleep,e=I.x,t=I.z,i=I.ry;n||Un(ge.root,re),Un(qe.root,re),Bt=re,he="town",lo(-16,-9.4,0),n&&(I.x=e,I.z=t,I.ry=i,speak("Luna se queda durmiendo en su camita. \xA1Mientras, puedes pasear!")),ae("#actions").hidden=!0,On("close:casa")})}function Zl(n){n=[["help","\u2753","Ayuda",""]].concat(n),ae("#actions").innerHTML=n.filter(Boolean).map(([e,t,i,s,r])=>`<button class="opt ${s?"off":""}" data-act="${e}" data-say="${i}" ${s?'aria-disabled="true"':""} aria-label="${i}"><span class="oi">${t}</span><span class="on">${i}</span>${r?`<span class="ofx">${r}</span>`:""}${s?`<span class="badge">${s}</span>`:""}</button>`).join(""),typeof Cn=="function"&&setTimeout(Cn,0)}function ir(n){let e=ae("#roominfo");e.innerHTML=n||"",e.hidden=!n}var Bl=null;function zt(n,e){ae("#card3-box").innerHTML=`${n}<div class="row-btns"><button class="go" data-card="ok" aria-label="Continuar">\u25B6</button></div>`,ae("#card3").hidden=!1,Bl=e||null}function Jl(){if(ae("#card3").hidden)return;ae("#card3").hidden=!0;let n=Bl;Bl=null,n&&n()}var qp=n=>"\u2605".repeat(Math.round(n/20))+"\u2606".repeat(5-Math.round(n/20)),$p=n=>n.asleep?"\u{1F4A4}":n.sick&&!n.sick.treated?"\u{1F912}":n.stats.energia<15?"\u{1F634}":n.stats.saciedad<10?"\u{1F356}":"";function uo({coat:n="#ffffff",skin:e="#f2c9a0",hair:t="#6b4a2b",extra:i=null}){let s=new Re;for(let l of[-.18,.18])s.add(j(R(P.cyl(.11,.11,.8,8),"#4a4a6a"),l,.4,0));s.add(j(R(P.cap(.38,.6),n),0,1.25,0));let r=j(R(P.sph(.34,18,14),e),0,2.05,0);s.add(r),s.add(j(R(new gs(.36,16,10,0,Math.PI*2,0,Math.PI/2.2),t),0,2.12,-.03));for(let l of[-.12,.12])s.add(j(R(P.sph(.045),"#2a1d18",{cast:!1}),l,2.1,.3));let a=R(new fn(.09,.022,6,12,Math.PI),"#c0505a",{cast:!1});a.rotation.z=Math.PI,a.position.set(0,1.97,.31),s.add(a);for(let l of[-.2,.2])s.add(j(R(P.sph(.05),"#ff9fb4",{cast:!1}),l,2,.27));let o=[];for(let l of[-1,1]){let c=new Re;c.position.set(l*.45,1.55,0);let h=j(R(P.cap(.09,.45),n),0,-.3,0);c.add(h),c.rotation.z=l*.15,s.add(c),o.push(c)}return i&&i(s),s.userData={arms:o,t:Math.random()*5},s}function rd(n,e){if(!n)return;let t=n.userData;t.t+=e,n.position.y=Math.abs(Math.sin(t.t*2))*.04,t.arms[1].rotation.z=.15+Math.max(0,Math.sin(t.t*1.3))*.9*(t.wave>0?1:.15),t.wave>0&&(t.wave-=e)}function fo(n,{floor:e,back:t,side:i,rug:s}){let r=tr(n);if(r.sun.position.set(4,10,6),r.sun.target.position.set(0,0,0),n.background=new $e("#ffeef8"),n.add(j(R(P.box(12,.2,9),e,{cast:!1,recv:!0}),0,-.1,0)),n.add(j(R(P.box(12,5,.2),t,{recv:!0}),0,2.5,-4.5)),n.add(j(R(P.box(.2,5,9),i,{recv:!0}),-6,2.5,0)),n.add(j(R(P.box(2.6,1.8,.1),"#ffffff"),3.2,2.9,-4.38)),n.add(j(R(P.box(2.3,1.5,.1),"#9fdcff",{cast:!1}),3.2,2.9,-4.32)),s){let a=R(P.cyl(2,2,.04,32),s,{cast:!1,recv:!0});a.position.set(0,.02,.8),n.add(a)}}var ii=new En,Zi=new En,Yi=new En,on={},ws=null;function vv(){fo(ii,{floor:"#dff4f2",back:"#c9efe9",side:"#ffffff",rug:null});let n=R(P.box(2.4,.12,1.6),"#ff9fc8",{cast:!1,recv:!0});n.position.set(0,.06,-1.6),ii.add(n);let e=R(P.box(1.6,2.2,.8),"#ffffff");e.position.set(-4.2,1.1,-3.8),ii.add(e);let t=new Re;t.add(R(P.box(.2,.7,.05),"#ff5c5c")),t.add(R(P.box(.7,.2,.05),"#ff5c5c")),t.position.set(-4.2,1.6,-3.38),ii.add(t);for(let s=0;s<3;s++)ii.add(j(R(P.cyl(.12,.12,.35,10),["#6fc2ff","#ffd23f","#8be08b"][s]),-4.6+s*.4,2.4,-3.8));let i=new Re;i.add(j(R(P.box(1.2,.15,1),"#b8bcc8"),0,.08,0)),i.add(j(Ps("\u2696\uFE0F",.7),0,.6,-.45)),i.position.set(3.4,0,-2.6),ii.add(i),ii.add(j(Ps("\u{1F489}",1.3),-1.6,3.2,-4.35)),on.vet=uo({coat:"#ffffff",skin:"#f6d2b0",hair:"#3b2a20",extra:s=>{let r=R(new fn(.22,.03,6,16),"#3aa89c");r.position.set(0,1.62,.3),r.rotation.x=1.2,s.add(r)}}),on.vet.position.set(1.6,0,-2.6),on.vet.rotation.y=-.6,ii.add(on.vet),ws=yi("\u{1F489}",.9),ws.visible=!1,ii.add(ws)}function Yp(){if(he!=="room"||An!=="vet")return;let n=Ne.pet;ae("#actions").innerHTML=Yl(placeActions("vet",n),[{id:"exit",icon:"\u{1F6AA}",label:"Salir"}]),setTimeout(Cn,0),ir(`<div class="vax">${VACCINES.map(e=>{let t=vaccineStatus(n,e);return`<span class="vx ${t}" title="${e.name}">${t==="pendiente"?"\u23F3":"\u{1F489}"}<b>${t==="aplicada"?"\u2714":t==="atrasada"?"\u2757":t==="disponible"?"\u{1F449}":""}</b></span>`}).join("")}</div>`)}function Mv(n){let e=Ne.pet,t=today(e);if(xt||n==="none")return;if(n==="checkup")return t.checkup||(t.checkup=!0,addEvent(e,"\u{1FA7A}","Revisi\xF3n general en la veterinaria."),saveRoot()),zt(Sv(e));let i=placeEffect(n,e);i.fx&&(xt=!0,Rn([0,-1.6,Math.PI*.75],()=>{on.vet.userData.wave=2,ws.material.map=Is(i.icon),ws.material.needsUpdate=!0,ws.position.set(I.x+.6,1.6,I.z+.3),ws.visible=!0,i.sad&&(dogSound("sad",mt()),speak("\xA1Un pinchacito r\xE1pido!")),setTimeout(()=>{ws.visible=!1,it(ii,"\u2B50",new D(I.x,1.4,I.z),5),io(i,ii,Yp)},1600)}))}function Sv(n){let e=targetWeight(n.day),t=(n.weight-e)/e,i=VACCINES.filter(s=>n.vaccines[s.id]).length;return speak(t<-.12?"Luna necesita comer un poco m\xE1s":t>.12?"Luna necesita m\xE1s ejercicio":"\xA1Luna est\xE1 muy sana!"),`<div class="result"><h2>\u{1FA7A}</h2>
    <div class="checkrow"><span>\u2696\uFE0F</span><b>${fmtWeight(n.weight)}</b><span>${t<-.12?"\u{1F356}\u2757":t>.12?"\u{1F3C3}":"\u{1F44D}"}</span></div>
    <div class="checkrow"><span>\u{1F489}</span><b>${"\u2714".repeat(i)}${"\xB7".repeat(VACCINES.length-i)}</b></div>
    <div class="checkrow"><span>\u{1F41B}</span><b>${dewormDue(n)?"\u2757":"\u2714"}</b></div>
    ${n.sick?`<div class="checkrow"><span>\u{1F912}</span><b>${n.sick.treated?"\u{1F48A}\u2714":"\u{1F48A}\u2757"}</b></div>`:""}</div>`}function bv(){fo(Zi,{floor:"#f6d7b0",back:"#ffe1ef",side:"#fff3c4",rug:"#ffd23f"});let n=R(P.box(4,1,1),"#c98c55");n.position.set(1.5,.5,-2.8),Zi.add(n),Zi.add(j(R(P.box(4.2,.12,1.2),"#e6a96c"),1.5,1.05,-2.8));for(let e=0;e<3;e++){Zi.add(j(R(P.box(3.6,.1,.7),"#b07840"),-3.2,.9+e*1.1,-4));for(let t=0;t<5;t++){let i=["#ff6b6b","#ffd23f","#6fc2ff","#8be08b","#ff9fd0"][(t+e)%5];Zi.add(j(R(t%2?P.sph(.22,10,8):P.box(.4,.4,.4),i),-4.6+t*.7,1.2+e*1.1,-4))}}Zi.add(j(Ps("\u{1F6D2}",1.3),1.5,3.4,-4.35)),on.tienda=uo({coat:"#ff8fc8",skin:"#e8b48a",hair:"#2a1d18",extra:e=>{let t=R(P.box(.6,.55,.05),"#ffffff");t.position.set(0,1.15,.36),e.add(t)}}),on.tienda.position.set(1.5,0,-3.8),Zi.add(on.tienda)}function Zp(){if(he!=="room"||An!=="tienda")return;let n=Ne.pet;Zl(SHOP.map(e=>{let t=e.acc&&n.acc.owned.includes(e.id)||e.once&&n.items[e.id];return["buy:"+e.id,e.icon,e.short,t?"\u2714":n.bones<e.price?"\u{1F9B4}":"",`\u{1F9B4}${e.price}`]}).concat([["exit","\u{1F6AA}","Salir",""]])),ir(`<div class="wallet">\u{1F9B4} ${n.bones}</div>`)}function Ev(n){let e=Ne.pet,t=SHOP.find(i=>i.id===n);if(!(!t||e.bones<t.price)){if(e.bones-=t.price,t.acc?(e.acc.owned.push(t.id),e.acc.worn=t.id):t.id==="premio"?e.items.premio+=3:t.id==="champu"?e.items.champu+=3:e.items[t.id]=!0,addEvent(e,"\u{1F6D2}",`Compraste: ${t.name}.`),on.tienda.userData.wave=2,it(Zi,t.icon,new D(I.x,1.5,I.z),4,.7),bt(t.icon,"\u2714"),speak(t.acc?"\xA1Qu\xE9 guapa!":t.short),lt("coin"),I.mode="happy",I.modeT=1.2,dogSound("happy",mt()),Ne.pet.bones>=0){let i=Ql(e);i.seen.shop=!0}saveRoot(),Rt(),Zp()}}function Tv(){fo(Yi,{floor:"#c8e6a0",back:"#fff3b8",side:"#ffd6e8",rug:null});let n=R(P.box(4.4,2,.12),"#2f5d46");n.position.set(0,2.6,-4.32),Yi.add(n),Yi.add(j(R(P.box(4.7,.15,.25),"#b07840"),0,1.55,-4.25));for(let t=0;t<4;t++)Yi.add(j(R(P.cone(.25,.6,12),"#ff9f43"),-3.6+t*1.2,.3,2.6));let e=R(new fn(.7,.07,8,24),"#ff5c8a");e.position.set(3.6,.9,1.4),Yi.add(e),Yi.add(j(R(P.cyl(.05,.05,1.6,6),"#888888"),2.85,.8,1.4)),Yi.add(j(R(P.cyl(.05,.05,1.6,6),"#888888"),4.35,.8,1.4)),on.escuela=uo({coat:"#6f8cff",skin:"#c99872",hair:"#1c1414",extra:t=>{let i=R(P.cyl(.03,.03,.4,6),"#ffffff");i.position.set(.55,1.2,.2),i.rotation.z=.8,t.add(i)}}),on.escuela.position.set(-2.4,0,-2.8),on.escuela.rotation.y=.5,Yi.add(on.escuela)}function Jp(){if(he!=="room"||An!=="escuela")return;let n=Ne.pet,e=today(n),t=e.sessions>=MAX_SESSIONS?"\u23F3":$p(n);Zl(TRICKS.map(i=>["trick:"+i.id,i.icon,i.short,n.day<i.min?"\u{1F512}":t,qp(n.tricks[i.id]||0)]).concat([["exit","\u{1F6AA}","Salir",""]])),ir(`<div class="wallet">\u{1F393} ${"\u25CF".repeat(e.sessions)}${"\u25CB".repeat(Math.max(0,MAX_SESSIONS-e.sessions))}</div>`)}var wv={up:"\u2B06\uFE0F",right:"\u27A1\uFE0F",down:"\u2B07\uFE0F",left:"\u2B05\uFE0F"},$n=null;function Kp(n){let e=Ne.pet,t=trainTrick(n),i=trainLevel(e,n);$n={t,len:3+Math.floor(i/34),round:0,ok:0,seq:[],idx:0,phase:"show",pt:0,home:n==="potty"},ae("#actions").hidden=!0,ae("#train3").hidden=!1,speak("\xA1Mira las flechas y luego rep\xEDtelas!"),jp()}function jp(){let n=$n;n.seq=Array.from({length:n.len},()=>["up","right","down","left"][Math.floor(Math.random()*4)]),n.idx=0,n.phase="show",n.pt=0,kl()}function kl(){let n=$n;if(!n)return;let e=n.phase==="show"?Math.floor((n.pt-.5)/.75):-1;ae("#t3-seq").innerHTML=n.seq.map((t,i)=>{let s=n.phase==="show"?i===e?"on":i<e?"past":"":i<n.idx?"done":"";return`<span class="t3a ${s}">${s?wv[t]:"\u2754"}</span>`}).join(""),ae("#t3-head").textContent=`${n.t.icon} ${"\u25CF".repeat(n.round)}${"\u25CB".repeat(3-n.round)} ${n.phase==="show"?"\u{1F440}":n.phase==="input"?"\u{1F446}":""}`}var Av={sentarse:"sit",venir:"happy",pata:"paw",quieta:"sit",echarse:"lie",vuelta:"spin"};function Qp(n){let e=$n;!e||e.phase!=="input"||(n===e.seq[e.idx]?(e.idx++,lt("pop"),e.idx>=e.seq.length&&(e.ok++,$u(!0))):$u(!1),kl())}function $u(n){let e=$n;e.round++,e.phase="pause",e.pt=0,n?(I.mode=Av[e.t.id]||"sit",I.modeT=1.6,it(Bt,"\u2B50",new D(I.x,1.6,I.z),5),dogSound("happy",mt()),e.home||(on.escuela.userData.wave=1.5)):(bt("\u274C"),dogSound("sad",mt()))}function Ap(n){let e=$n;e&&(e.pt+=n,e.phase==="show"?(e.pt>.6+e.seq.length*.75&&(e.phase="input",e.pt=0),kl()):e.phase==="input"&&e.pt>5+e.seq.length?($u(!1),kl()):e.phase==="pause"&&e.pt>1.7&&(e.round>=3?Rv():jp()))}function Rv(){let n=$n,e=Ne.pet;$n=null,ae("#train3").hidden=!0;let t=trainAfter(e,n.t.id,n.ok);trainRewards(e,n.t.id,n.ok,t),saveRoot(),Rt(),Kl(n.ok,n.ok,`<span>${n.t.icon} ${qp(t)}</span>${t>=100?"<span>\u{1F3C6}</span>":""}`,()=>{ae("#actions").hidden=!1,n.home?Ks():Jp()})}function Kl(n,e,t,i){let s=["\xA1Otra vez!","\xA1Bien!","\xA1Muy bien!","\xA1Genial!"][clamp(n,0,3)];speak(s),setTimeout(()=>dogSound(n?"happy":"sad",mt()),800),zt(`<div class="result"><div class="stars">${"\u2B50".repeat(n)}<span class="dim">${"\u2B50".repeat(3-n)}</span></div><h2>${s}</h2>
    <div class="gains">${e?`<span>\u{1F9B4} +${e}</span>`:""}${t||""}</div></div>`,i)}var An=null,Cv={vet:()=>ii,tienda:()=>Zi,escuela:()=>Yi};function Iv(n){let e=Ne.pet;if(e.asleep&&n!=="tienda"){speak("Luna est\xE1 durmiendo. Despi\xE9rtala primero y vengan juntas."),bt("\u{1F4A4}");return}Yn(()=>{let t=Xl()&&!e.asleep;Bt=Cv[n](),Un(qe.root,Bt),t&&(Un(ge.root,Bt),I.x=0,I.z=2.8,I.ry=Math.PI,I.path=null),he="room",An=n,k.x=2.4,k.z=3.4,k.ry=Math.PI,em(),ae("#actions").hidden=!1,ae("#prompt").hidden=!0,speak(xn.find(i=>i.id===n).name),setTimeout(()=>dogSound("bark",mt(),.6),600),on[n]&&(on[n].userData.wave=2),On("open:"+n)})}function em(){An==="vet"?Yp():An==="tienda"?Zp():An==="escuela"&&Jp()}function Pv(n){if(n==="exit")return tm(An);if(An==="vet")return Mv(n);if(An==="tienda"&&n.startsWith("buy:"))return Ev(n.slice(4));if(An==="escuela"&&n.startsWith("trick:"))return Kp(n.slice(6))}function tm(n){xt=!1,$n=null,ae("#train3").hidden=!0,Yn(()=>{let e=Xl();e&&Un(ge.root,re),Un(qe.root,re),Bt=re,he="town",An=null;let t=ts.find(i=>i.pl.id===n);(e?lo:kp)(t?t.x:-16,t?t.z+1.6:-9.4,0),ae("#actions").hidden=!0,ir(""),On("close:"+n)})}var Es=null;function Lv(){let n=xn.find(e=>e.id==="lago");Es=new Re,Es.add(j(R(P.cyl(.35,.45,1,12),"#b8bcc8"),0,.5,0)),Es.add(j(R(P.cyl(.45,.35,.2,14),"#dfe3ee"),0,1.05,0)),Es.add(j(R(P.cyl(.3,.3,.05,14),"#6cc8ff",{cast:!1}),0,1.15,0)),Es.position.set(n.x-6.5,0,n.z+3),re.add(Es),Ft.circles.push({x:n.x-6.5,z:n.z+3,r:.5})}function nm(){he="lake",speak("Lago"),dogSound("bark",mt(),.6),im(),ae("#actions").hidden=!1,ae("#prompt").hidden=!0,On("open:lago")}function im(){he==="lake"&&(ae("#actions").innerHTML=Yl(placeActions("lago",Ne.pet),[{id:"closelake",icon:"\u{1F6AA}",label:"Salir"}]),setTimeout(Cn,0))}function Dv(n){let e=Ne.pet,t=xn.find(r=>r.id==="lago");if(n==="closelake"){he="town",ae("#actions").hidden=!0;return}if(xt)return;if(setTimeout(()=>On("do:"+n),0),n==="duckfeed")return he="town",ae("#actions").hidden=!0,MM();let i=placeEffect(n,e);if(!i.fx)return;let s=()=>io(i,re,im);xt=!0,n==="ducks"?Rn([t.x-3.2,t.z,Math.PI/2],()=>{no.forEach(o=>{o.userData.r=1.2});let r=0,a=setInterval(()=>{lt("quack"),++r>=3&&clearInterval(a)},450);it(re,"\u{1F496}",new D(I.x,1.4,I.z),4),setTimeout(()=>{no.forEach((o,l)=>{o.userData.r=1.5+l*.9}),s()},1800)}):n==="fountain"?Rn([Es.position.x+.9,Es.position.z,-Math.PI/2],()=>{I.mode="eat",I.modeT=1.6,setTimeout(s,1600)}):n==="splash"?Rn([t.x-4.6,t.z+2.6,Math.PI/2],()=>{I.mode="happy",I.modeT=2;let r=setInterval(()=>it(re,"\u{1F4A6}",new D(I.x+.5,.6,I.z),2,.5),250);setTimeout(()=>{clearInterval(r),s()},1800)}):s()}var tn=new En,qn=null;function Nv(){he="forestmenu";let n=Ne.pet;speak("Bosque"),dogSound("bark",mt(),.6);let e=["\u{1F332}","\u26F0\uFE0F","\u{1F48E}"];Zl(LEVEL_DEFS.map(t=>{let i=n.levels[t.id],s=t.id===1||n.levels[t.id-1]&&n.levels[t.id-1].done;return["level:"+t.id,e[t.id-1],String(t.id),n.day<t.minDay||!s?"\u{1F512}":$p(n),i&&i.done?"\u2B50":""]}).concat([["closeforest","\u{1F6AA}","Salir",""]])),ae("#actions").hidden=!1,ae("#prompt").hidden=!0,On("open:bosque")}function Uv(n){if(n==="closeforest"){he="town",ae("#actions").hidden=!0;return}n.startsWith("level:")&&Fv(Number(n.slice(6)))}function Fv(n){let e=LEVEL_DEFS.find(i=>i.id===n),t=buildLevel(e);Yn(()=>{for(;tn.children.length;)tn.remove(tn.children[0]);let i=tr(tn);tn.background=new $e(e.sky[0]),tn.fog=new Gi(e.sky[0],18,45),i.sun.position.set(5,12,10);let s=e.cave?"#4c3c70":"#b07840",r=e.cave?"#80f0ff":"#58b038",a=P.box(1,1,2),o=[];for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++){let M=t.grid[g][E];(M==="#"||M==="g")&&o.push([E,g,M])}let l=new ds(a,Vr(s),o.length);l.receiveShadow=!0,l.castShadow=!0;let c=new ut;o.forEach(([g,E],M)=>{c.makeTranslation(g+.5,t.h-E-.5,0),l.setMatrixAt(M,c)}),tn.add(l);let h=o.filter(g=>g[2]==="g"),d=new ds(P.box(1.02,.25,2.04),Vr(r),h.length);d.receiveShadow=!0,h.forEach(([g,E],M)=>{c.makeTranslation(g+.5,t.h-E-.12,0),d.setMatrixAt(M,c)}),tn.add(d);for(let g=0;g<t.h;g++)for(let E=0;E<t.w;E++)t.grid[g][E]==="="&&tn.add(j(R(P.box(1,.25,1.6),"#d8a060",{recv:!0}),E+.5,t.h-g-.13,0));let u=ai(n*77);for(let g=0;g<t.w/3;g++){let E=u()*t.w,M=-4-u()*6;if(e.cave)tn.add(j(R(P.cone(.3+u()*.4,1+u(),6),u()<.5?"#c0a0ff":"#80f0ff"),E,2+u()*2,M));else{let v=new Re;v.add(j(R(P.cyl(.2,.3,2,8),"#9a6236"),0,1,0));for(let w=0;w<3;w++)v.add(j(R(P.cone(1.3-w*.3,1.5,9),w%2?"#3f9a5a":"#2f8a4e"),0,2.3+w*.9,0));v.position.set(E,1,M),tn.add(v)}}tn.add(j(R(new Gn(t.w+60,40),e.cave?"#2c2850":"#a8d890",{cast:!1}),t.w/2,8,-12));let m=t.ents.map(g=>({...g,alive:!0}));for(let g of m){if(g.t==="bone"&&(g.m=id(),g.m.scale.setScalar(.8)),g.t==="thorn"){g.m=new Re;for(let E=0;E<4;E++){let M=R(P.cone(.13,.45,6),"#2f7a3c");M.position.set(-.3+E*.2,.2,E%2*.3-.15),g.m.add(M)}g.m.add(j(R(P.sph(.08),"#e03c3c"),0,.2,.3))}if(g.t==="hog"){g.m=new Re;let E=R(P.sph(.4,14,10),"#7c5838");E.scale.set(1.1,.8,.9),E.position.y=.32,g.m.add(E);for(let M=0;M<7;M++){let v=R(P.cone(.08,.3,5),"#4a3020"),w=-1.2+M*.4;v.position.set(Math.sin(w)*.35,.32+Math.cos(w)*.32,0),v.rotation.z=-w,g.m.add(v)}g.face=j(R(P.sph(.16),"#e8c8a0"),.42,.25,0),g.m.add(g.face)}if(g.t==="bee"){g.m=new Re;let E=R(P.sph(.3,12,10),"#f8d030");E.scale.set(1.3,1,1),g.m.add(E);for(let M of[-.12,.15]){let v=R(new fn(.27,.06,6,14),"#222222");v.rotation.y=Math.PI/2,v.position.x=M,g.m.add(v)}g.wings=[];for(let M of[-1,1]){let v=new Mt(new ms(.25,12),new Pn({color:"#ffffff",transparent:!0,opacity:.8,side:Ln}));v.position.set(0,.3,M*.15),v.rotation.x=Math.PI/2,g.m.add(v),g.wings.push(v)}}if(g.t==="goal"){g.m=new Re,g.m.add(j(R(P.box(1.6,1.2,1.4),"#f0d090"),0,.6,0));let E=R(P.cone(1.25,.8,4),"#d84838");E.rotation.y=Math.PI/4,E.position.y=1.6,g.m.add(E),g.m.add(j(R(P.box(.6,.8,.05),"#3c2418"),0,.4,.71)),g.m.add(j(R(P.cyl(.04,.04,1.4,6),"#555555"),.6,2.4,0)),g.flag=j(R(P.box(.6,.35,.04),"#ffd23f"),.92,2.9,0),g.m.add(g.flag)}g.m&&tn.add(g.m)}let x=(g,E)=>{if(g<0||g>=t.w)return!0;if(E<0||E>=t.h)return!1;let M=t.grid[E][g];return M==="#"||M==="g"},y=(g,E)=>E>=0&&E<t.h&&g>=0&&g<t.w&&t.grid[E][g]==="=",p=t.h-1;for(;p>0&&x(e.start,p-1);)p--;let f={x:e.start*TILE+8,y:p*TILE,vx:0,vy:0,onGround:!1,face:1,lastGround:-99,buffer:-99,hearts:3,inv:0,safe:null};f.safe={x:f.x,y:f.y},qn={def:e,L:t,ents:m,pl:f,solidT:x,oneWay:y,tick:0,time:0,bones:0,over:!1},ge.root.parent&&ge.root.parent.remove(ge.root),tn.add(ge.root),Bt=tn,he="forest",ae("#actions").hidden=!0,ae("#forestHud").hidden=!1,Ja(),speak("\xA1Lleva a Luna hasta la casita! Salta con A y recoge huesos.")})}function Ja(){qn&&(ae("#forestHud").innerHTML=`<span>${"\u2764\uFE0F".repeat(qn.pl.hearts)}${"\u{1F90D}".repeat(3-qn.pl.hearts)}</span><span>\u{1F9B4} ${qn.bones}</span><button class="hbtn" data-act="quitforest" aria-label="Salir">\u2716</button>`)}function Ov(n){let e=qn;if(!e||e.over)return;let t=e.pl,i=PHYS;e.tick++,e.time+=n;let s=clamp(we.right-we.left+we.jx,-1,1);(we.a||we.jumpPress)&&(t.buffer=e.time),we.jumpPress=!1,we.a=!1;let r=we.aHeld||we.up,a=s*i.RUN,o=i.ACCEL*(t.onGround?1:i.AIR)*n;t.inv<1&&(t.vx+=clamp(a-t.vx,-o,o)),Math.abs(s)>.2&&(t.face=Math.sign(s)),t.onGround&&(t.lastGround=e.time),e.time-t.buffer<=i.BUFFER/60&&e.time-t.lastGround<=i.COYOTE/60&&(t.vy=-i.JUMP_V,t.buffer=-99,t.lastGround=-99,t.onGround=!1,lt("pop"));let l=t.vy<0?i.G_RISE:i.G_FALL;t.vy<0&&!r?l=i.G_FALL*1.4:r&&Math.abs(t.vy)<.4*i.JUMP_V&&(l*=i.APEX_HANG),t.vy=Math.min(t.vy+l*n,i.MAX_FALL);let c=6,h=11;t.x+=t.vx*n;for(let v of[Math.floor((t.y-h)/TILE),Math.floor((t.y-1)/TILE)])t.vx>0&&e.solidT(Math.floor((t.x+c)/TILE),v)&&(t.x=Math.floor((t.x+c)/TILE)*TILE-c-.01,t.vx=0),t.vx<0&&e.solidT(Math.floor((t.x-c)/TILE),v)&&(t.x=(Math.floor((t.x-c)/TILE)+1)*TILE+c+.01,t.vx=0);let d=t.y;t.y+=t.vy*n,t.onGround=!1;let u=[Math.floor((t.x-c+1)/TILE),Math.floor((t.x+c-1)/TILE)];if(t.vy>=0){let v=Math.floor(t.y/TILE);for(let w of u){let _=v*TILE;(e.solidT(w,v)||e.oneWay(w,v)&&d<=_+.5)&&(t.y=_,t.vy=0,t.onGround=!0)}}else{let v=Math.floor((t.y-h)/TILE);for(let w of u)e.solidT(w,v)&&(t.y=(v+1)*TILE+h,t.vy=0)}t.onGround&&t.inv<=0&&(t.safe={x:t.x,y:t.y}),t.inv>0&&(t.inv-=n);let m=v=>{t.inv>0||(t.hearts--,t.inv=1.3,t.vx=(t.x<v?-1:1)*150,t.vy=-200,dogSound("sad",mt(),.6),Ja(),t.hearts<=0&&Du(!1))};if(t.y>e.L.h*TILE+40){if(t.hearts--,Ja(),t.hearts<=0)return Du(!1);t.x=t.safe.x-t.face*24,t.y=t.safe.y-20,t.vx=t.vy=0,t.inv=1.3}let x={l:t.x-c,r:t.x+c,t:t.y-h,b:t.y},y=(v,w,_,T)=>x.r>v&&x.l<_&&x.b>w&&x.t<T;for(let v of e.ents)if(v.alive){if(v.t==="bone"&&y(v.x,v.y,v.x+9,v.y+7)&&(v.alive=!1,tn.remove(v.m),e.bones++,lt("coin"),Ja()),v.t==="thorn"&&y(v.x+2,v.y+2,v.x+14,v.y+10)&&m(v.x+8),v.t==="hog"){v.x+=v.dir*22*n;let w=Math.floor((v.x+(v.dir>0?14:2))/TILE),_=Math.floor((v.y+12)/TILE),T=Math.floor((v.y+4)/TILE);(e.solidT(w,T)||!e.solidT(w,_))&&(v.dir*=-1)}if(v.t==="bee"&&(v.ph+=n,v.x=v.x0+Math.sin(v.ph*1.6)*v.range/2,v.yy=v.y+Math.sin(v.ph*4)*3),v.t==="hog"||v.t==="bee"){let w=v.t==="bee"?v.yy:v.y;y(v.x+2,w+1,v.x+14,w+10)&&(t.vy>40&&x.b-w<9?(v.alive=!1,tn.remove(v.m),t.vy=-i.JUMP_V*.65,e.bones++,lt("coin"),it(tn,"\u2B50",v.m.position,3,.5),Ja()):m(v.x+8))}if(v.t==="goal"&&y(v.x,v.y-60,v.x+28,v.y+32))return Du(!0)}let p=e.L.h,f=v=>p-v/TILE;for(let v of e.ents)!v.alive||!v.m||(v.t==="bone"&&(v.m.position.set(v.x/TILE+.28,f(v.y+4),0),v.m.rotation.y+=n*2),v.t==="thorn"&&v.m.position.set(v.x/TILE+.5,f(v.y+10),0),v.t==="hog"&&(v.m.position.set(v.x/TILE+.5,f(v.y+10),0),v.m.rotation.y=v.dir>0?0:Math.PI),v.t==="bee"&&(v.m.position.set(v.x/TILE+.5,f((v.yy??v.y)+6),0),v.wings.forEach(w=>{w.rotation.y=Math.sin(e.tick*.9)*.6})),v.t==="goal"&&(v.m.position.set(v.x/TILE+.9,f(v.y+32),0),v.flag.position.y=2.9+Math.sin(e.tick*.1)*.05));I.x=t.x/TILE,I.z=0,ge.root.position.set(t.x/TILE,f(t.y),0),ge.root.rotation.y=t.face>0?Math.PI/2:-Math.PI/2,ge.root.visible=!(t.inv>0&&Math.floor(e.tick/4)%2);let g=stageOf(Ne.pet.day);ge.root.scale.setScalar(nr[Math.max(1,g.size)]*.9),Li(ge,n,{mode:t.onGround?Math.abs(t.vx)>10?"walk":"idle":"happy",speed:Math.abs(t.vx)/30});let E=t.x/TILE+t.face*1.5,M=Math.max(p*.45,f(t.y)+1.5);ft.position.lerp(new D(E,M+1.2,10.5),1-Math.exp(-5*n)),ft.lookAt(ft.position.x,ft.position.y-1.6,0)}function Du(n){let e=qn,t=Ne.pet,i=e.def;e.over=!0;let s=n&&!(t.levels[i.id]&&t.levels[i.id].done),r=n?s?10:4:0;t.bones+=e.bones+r,today(t).play++,po(t,"forest"),applyFx(t,{felicidad:n?22:10,energia:-14,saciedad:-8,hidratacion:-10,higiene:-12});let a=t.levels[i.id]||{done:!1,best:0};a.best=Math.max(a.best,e.bones),n&&(a.done=!0),t.levels[i.id]=a,addEvent(t,"\u{1F332}",n?`Exploraron \xAB${i.name}\xBB y encontraron ${e.bones} huesos.`:`Intentaron \xAB${i.name}\xBB (${e.bones} huesos).`),s&&addMilestone(t,"lvl"+i.id,"\u{1F3DE}\uFE0F",`Luna complet\xF3 \xAB${i.name}\xBB por primera vez.`),outdoorRisk(t),saveRoot(),Rt();let o=n?e.pl.hearts:0;ae("#forestHud").hidden=!0,Kl(o,e.bones+r,n?"<span>\u{1F3E0}\u2714</span>":"",()=>sm())}function sm(){qn=null,ge.root.visible=!0,Yn(()=>{Un(ge.root,re),Bt=re,he="town";let n=ts.find(e=>e.pl.id==="bosque");lo(n.x,n.z+1.6,0),ae("#forestHud").hidden=!0,ae("#actions").hidden=!0})}function zv(n){let e=Ne.pet,t=n.minDay-e.day;speak(`${n.name} se abre cuando Luna sea m\xE1s grande. Faltan ${t} ${t===1?"d\xEDa":"d\xEDas"}. \xA1Cu\xEDdala mucho y vuelve ma\xF1ana!`),zt(`<div class="result"><div class="unlock"><span>\u{1F512}</span><span>${n.icon}</span></div><h2>${n.name}</h2><div class="moons">${"\u{1F319}".repeat(Math.min(t,10))}</div></div>`)}function jl(n){return Ne.pet.day<(n.minDay||1)?zv(n):n.id==="casa"?_v():n.id==="parque"?Vp():n.id==="lago"?nm():n.id==="bosque"?Nv():n.spot?cM(n.id):Iv(n.id)}function Bv(){let n=Ne.pet,e=today(n),t=stageOf(n.day),i=routineFor(n,n.day,e),s=allStickers(),r=new Set(n.milestones.map(a=>a.key));speak("Diario de Luna"),zt(`<div class="result"><h2>\u{1F4D6}</h2>
    <div class="weekbox"><span>${$l[t.id]} ${n.day}</span><span>\u2696\uFE0F ${fmtWeight(n.weight)}</span><span>\u{1F525} ${n.streak}</span>${n.rpg&&n.rpg.met?`<span>${RANKS[rankOf(n.rpg.xp)]}</span>`:""}</div>
    <div class="today">${i.map(a=>`<span class="tday ${a.have>=a.need?"ok":""}"><i>${a.icon}</i><b>${a.have>=a.need?"\u2B50":`${Math.min(a.have,a.need)}/${a.need}`}</b></span>`).join("")}</div>
    <div class="stickers">${s.map(a=>r.has(a.key)?`<button class="stk" data-say="${mn(a.text)}" aria-label="${mn(a.text)}">${a.icon}</button>`:'<span class="stk off">\u2754</span>').join("")}</div>${parentsHTML(n,e,Ne.name)}</div>`)}function kv(){if(!Ne||he!=="town"||!ae("#card3").hidden)return;let n=Ne.pet,e=Ql(n);if(e.step<2)return;if(!e.seen.v2&&e.step>=js.length){e.seen.v2=!0;for(let s of xn)s.spot&&n.day>=(s.minDay||1)&&(e.seen["open-"+s.id]=!0);return e.focus="aventura",e.visited.aventura=!1,saveRoot(),speak(NEWS_SAY),zt(NEWS_HTML)}for(let s of xn)if((s.minDay||1)>1&&n.day>=s.minDay&&!e.seen["open-"+s.id])return e.seen["open-"+s.id]=!0,e.focus=s.id,saveRoot(),speak(`\xA1Se abri\xF3 ${s.name}! Sigue la flecha amarilla.`),zt(`<div class="result"><h2>\u{1F389}</h2><div class="unlock"><span>\u{1F513}</span><span>${s.icon}</span></div><h2>${s.name}</h2></div>`);let t=stageOf(n.day);if(!e.seen["stage-"+t.id]&&(e.seen["stage-"+t.id]=!0,saveRoot(),n.day>1))return speak(`\xA1Luna creci\xF3! Ahora es ${t.name.toLowerCase()}.`),setTimeout(()=>dogSound("happy",mt()),600),zt(`<div class="result"><h2>\u{1F331}</h2><div class="howto"><div>${STAGES.map(s=>`<span style="opacity:${s.id===t.id?1:n.day>s.to?.55:.25}">${$l[s.id]}</span>`).join("<i>\u203A</i>")}</div></div></div>`);let i=VACCINES.find(s=>["disponible","atrasada"].includes(vaccineStatus(n,s)));if(i&&!e.seen["vac-"+i.id])return e.seen["vac-"+i.id]=!0,saveRoot(),speak("Hoy le toca una vacuna a Luna. Ve a la veterinaria y toca Vacuna."),zt('<div class="result"><h2>\u{1F489}</h2><div class="howto"><div><span>\u{1F489}</span><i>\u279C</i><span>\u{1F3E5}</span></div></div></div>');if(n.sick&&!n.sick.treated&&!e.seen["sick-"+n.sick.since])return e.seen["sick-"+n.sick.since]=!0,saveRoot(),speak("Luna est\xE1 enfermita. Ll\xE9vala a la veterinaria y toca Curar."),zt('<div class="result"><h2>\u{1F912}</h2><div class="howto"><div><span>\u{1F912}</span><i>\u279C</i><span>\u{1F3E5} \u{1F48A}</span></div></div></div>');if(n.bones>=6&&!e.seen.shop)return e.seen.shop=!0,e.focus="tienda",e.visited.tienda=!1,saveRoot(),speak("\xA1Tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna."),zt(`<div class="result"><h2>\u{1F6D2}</h2><div class="howto"><div><span>\u{1F9B4} ${n.bones}</span><i>\u279C</i><span>\u{1F380}\u{1F9F8}\u{1F9B4}</span></div></div></div>`)}var js=[{id:"walk",icon:"\u2B05\uFE0F\u27A1\uFE0F",say:"\xA1Hola! Soy P\xEDo, tu amigo. Camina con las flechas o con el c\xEDrculo. \xA1Luna te sigue!"},{id:"home",place:"casa",icon:"\u{1F37C}",say:"Luna tiene hambre. Ll\xE9vala a su casa: ac\xE9rcate a la puerta y toca A."},{id:"eat",place:"casa",doId:"eat",icon:"\u{1F37C}",say:"Toca el dibujo de comer para darle su comida."},{id:"pet",place:"casa",doId:"pet",icon:"\u{1F917}",say:"\xA1Muy bien! Ahora dale mimos."},{id:"exit",place:"casa",doId:"exit",icon:"\u{1F6AA}",say:"Ahora sal de la casa por la puerta."},{id:"bones",icon:"\u{1F9B4}",say:"Busca huesos que brillan por el pueblo. \xA1Con ellos compras cosas!"}];function Ql(n){if(!n.tut){let e=n.day>1||Object.values(n.log).some(t=>t.meals>0);n.tut={step:e?js.length:0,seen:{},visited:{},focus:null,moved:0},n.tut.seen["stage-"+stageOf(n.day).id]=!0}return n.tut}function Hv(n){let e=Ql(n);if(e.step<js.length)return{...js[e.step],key:"tut-"+e.step,fixed:!0};if(Et)return{icon:"\u{1F648}",key:"hide",say:"\xBFD\xF3nde est\xE1 Luna? Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!",fixed:!0};if(n.asleep)return Cp(n,!0)||{icon:"\u{1F4A4}",key:"sleep",say:"Luna est\xE1 durmiendo. D\xE9jala descansar, o despi\xE9rtala toc\xE1ndola.",fixed:!0};let t=careGoal(n,eo);if(t)return t;if(e.focus&&!e.visited[e.focus]&&!eo("focus-"+e.focus)){let s=xn.find(r=>r.id===e.focus);if(s)return{icon:s.icon,place:s.id,key:"focus-"+s.id,say:`\xA1${s.name} est\xE1 abierto! Sigue la flecha.`}}let i=routineNext(n,eo);return i||recoverSay(n,Cp(n,!1)||{icon:"\u{1F344}",key:"explore",place:"aventura",say:"\xA1Vamos a explorar el Valle Aventura!"})}var rm=new Map,eo=n=>(rm.get(n.replace(/^(rec-|zz-)/,""))||0)>Date.now();function Gv(){let n=et;!n||n.fixed||(rm.set(n.key.replace(/^(rec-|zz-)/,""),Date.now()+10*60*1e3),lt("pop"),Ot=null,Cn(),speak("\xA1Est\xE1 bien, despu\xE9s! "+(et&&et!==n?et.say:"")),clearTimeout(Yu),kr=et?et.key:kr,ae("#guide").classList.remove("new"))}var Ul=new Set,Rp=0;function Cp(n,e){Rp!==n.day&&(Rp=n.day,Ul.clear());let t=[];ri.length&&t.push({icon:"\u{1F9B4}",key:"bones",say:"\xA1busca los huesos escondidos! Sigue la flecha amarilla."}),Nn&&t.push({icon:"\u{1F4B0}",key:"treasure",say:"hay un tesoro escondido. Camina y mira el globito: si sale fuego, \xA1est\xE1s muy cerca!"}),t.push(...funIdeas(n,e,td(k.x,k.z))),n.rpg&&n.rpg.respawn&&(n.rpg.respawn=!1,go(n));let i=e?"zz-":"";for(let r of t)r.key=i+r.key,r.say=ideaSay(r.say,e),typeof r.target=="string"&&(r.target=Vv(n,r.target));let s=t.find(r=>!Ul.has(r.key)&&!eo(r.key));return s||(Ul.clear(),s=t.find(r=>!eo(r.key))||t[0]),s}function Vv(n,e){let t=()=>today(n).dogs||{};if(e==="dog")return()=>{let s=fm(999,r=>r.def.mood!=="grumpy"&&!t()[r.def.id]);return s&&{x:s.x,z:s.z}};if(e==="mirador")return()=>({x:gn.mirador[0],z:gn.mirador[1]});if(e==="chest")return()=>({x:gn.chest[0],z:gn.chest[1]});let i=e.slice(5);return()=>{let s=null,r=1/0;for(let a of Cs){if(a.item!==i)continue;let o=Math.hypot(a.x-k.x,a.z-k.z);o<r&&(r=o,s=a)}return s&&{x:s.x,z:s.z}}}var et=null,kr="",Yu=0;function Cn(){if(!Ne)return;let n;try{n=Hv(Ne.pet)}catch(a){console.error("P\xEDo:",a),n=null}n||(n={icon:"\u{1F344}",key:"explore",place:"aventura",say:"\xA1Vamos a explorar el Valle Aventura! Busca setas brillantes y plumas."}),et=n;let e=n.place?xn.find(a=>a.id===n.place):null,t=ae("#guide"),i=`<span class="g-bird">\u{1F426}</span><span class="g-bub"><b>${n.icon}</b>${e?`<i>\u279C</i><b>${e.icon}</b>`:""}<small class="g-txt">${e?e.name:n.key.includes("bones")?"Huesos":n.key.includes("treasure")?"Tesoro":n.key==="sleep"?"Shh\u2026":n.key.includes("dogs")?"Perritos":n.key.includes("quest")?"Misi\xF3n":n.key.includes("mirador")?"Mirador":""}</small></span>`;if(t.__h!==i&&(t.innerHTML=i,t.__h=i),t.hidden=!1,t.setAttribute("aria-label","P\xEDo dice: "+n.say),ae("#guideSkip").hidden=!!n.fixed||!!He,n.key!==kr){t.classList.add("new"),clearTimeout(Yu);let a=n.key;Yu=setTimeout(()=>{et&&et.key===a&&(kr=a,speak(et.say),t.classList.remove("new"))},kr===""?3800:1500)}document.querySelectorAll("#actions .hint").forEach(a=>a.classList.remove("hint"));let s=ad();if(!ae("#actions").hidden&&n.doId&&(!n.place||n.place===s)){let a=document.querySelector(n.doId.endsWith(":")?`#actions [data-act^="${n.doId}"]:not([aria-disabled])`:`#actions [data-act="${n.doId}"]`);a&&a.classList.add("hint")}else if(!ae("#actions").hidden&&s&&n.place&&n.place!==s){let a=document.querySelector('#actions [data-act="exit"], #actions [data-act="closepark"], #actions [data-act="closelake"], #actions [data-act="closeforest"], #actions [data-act="closespot"]');a&&a.classList.add("hint")}let r=document.querySelector("#prompt .go-btn");r&&r.classList.toggle("hint",!!(nn&&n.place===nn.pl.id))}var Wv={casa:"Esta es la casa de Luna. Aqu\xED come, bebe, duerme y se ba\xF1a. Tambi\xE9n pueden jugar a la memoria.",vet:"Esta es la veterinaria. Cuando toca vacuna, toca la jeringa. La pastilla quita los bichitos. Si Luna est\xE1 enfermita, toca Curar.",tienda:"Esta es la tienda. Con los huesos que encuentras compras premios, juguetes y ropa para Luna.",escuela:"Esta es la escuela. Elige un truco, mira las flechas y rep\xEDtelas. \xA1As\xED Luna aprende!",parque:"Este es el parque. Haz una carrera de obst\xE1culos, juega al escondite o patea la pelota.",bosque:"Este es el bosque. Elige un camino y lleva a Luna saltando hasta la casita.",lago:"Este es el lago. Dale de comer a los patos, m\xEDralos nadar o bebe agua fresca."};function am(){return ge.root.parent===Bt&&Math.hypot(k.x-I.x,k.z-I.z)<2.6}function ad(){return he==="home"?"casa":he==="park"?"parque":he==="lake"?"lago":he==="forestmenu"?"bosque":he==="room"?An:he==="spot"?Xn:null}function Xv(){let n=ad();if(!n)return;let e=Wv[n]||SPOT_UI[n]&&SPOT_UI[n].help||"";et&&et.place===n?e+=" "+et.say:et&&et.place&&(e+=` Ahora toca ir a ${xn.find(t=>t.id===et.place).name}. Toca Salir.`),speak(e),Cn()}var Ot=null,wl=null,Ts=.5,pi=Math.ceil((Ae.x1-Ae.x0)/Ts),$a=Math.ceil((Ae.z1-Ae.z0)/Ts);function Fl(n,e,t,i){if(!wl){wl=new Uint8Array((pi+1)*($a+1));for(let f=0;f<=$a;f++)for(let g=0;g<=pi;g++)wl[f*(pi+1)+g]=Fn(Ae.x0+g*Ts,Ae.z0+f*Ts,.38)?0:1}let s=f=>clamp(Math.round((f-Ae.x0)/Ts),0,pi),r=f=>clamp(Math.round((f-Ae.z0)/Ts),0,$a),a=(f,g)=>g*(pi+1)+f,o=(f,g)=>f>=0&&g>=0&&f<=pi&&g<=$a&&wl[a(f,g)]===1,l=s(t),c=r(i),h=new Int32Array((pi+1)*($a+1)).fill(-2),d=[a(s(n),r(e))];h[d[0]]=-1;let u=0,m=-1,x=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(;u<d.length;){let f=d[u++],g=f%(pi+1),E=f/(pi+1)|0;if(Math.abs(g-l)<=1&&Math.abs(E-c)<=1){m=f;break}for(let[M,v]of x){let w=g+M,_=E+v;if(!o(w,_)||M&&v&&(!o(g+M,E)||!o(g,E+v)))continue;let T=a(w,_);h[T]===-2&&(h[T]=f,d.push(T))}}if(m<0)return null;let y=[];for(let f=m;f!==-1;f=h[f])y.push([Ae.x0+f%(pi+1)*Ts,Ae.z0+(f/(pi+1)|0)*Ts]);y.reverse();let p=y.filter((f,g)=>g%3===2||g===y.length-1);return p.push([t,i]),p}function om(){let n=et;if(!n||Et||He)return;if(!n.place&&!xt&&(he==="park"?es():he==="spot"?Xr():(he==="lake"||he==="forestmenu")&&(he="town",ae("#actions").hidden=!0)),!n.place&&n.target){let i=he==="town"&&n.target(),s=i&&Fl(k.x,k.z,i.x,i.z);s&&(Ot={pts:s,place:null,stuck:0,best:1/0},lt("pop"));return}if(!n.place){if(he!=="town"||!/bones$/.test(n.key)||!ri.length)return;let i=null,s=1/0;for(let a of ri){let o=Math.hypot(a.m.position.x-k.x,a.m.position.z-k.z);o<s&&(s=o,i=a)}let r=Fl(k.x,k.z,i.m.position.x,i.m.position.z);r&&(Ot={pts:r,place:null,stuck:0,best:1/0},lt("pop"));return}if(ad()===n.place){Cn();return}if(he==="park"?es():he==="lake"||he==="forestmenu"?(he="town",ae("#actions").hidden=!0):he==="spot"&&Xr(),he!=="town")return;let e=ts.find(i=>i.pl.id===n.place);if(!e)return;if(nn===e){jl(e.pl);return}let t=Fl(k.x,k.z,e.x,e.z);t&&(Ot={pts:t,place:n.place,stuck:0,best:1/0},lt("pop"))}var eh=performance.now(),Nu=0,Uu="",Ya=0;function cm(){let n=performance.now();if(!et||He||!ae("#card3").hidden||Ot||$n||qn||n-eh<2e4||n-Nu<3e4||(et.key!==Uu&&(Uu=et.key,Ya=0),et.key==="sleep"))return;let e=/^(zz-|rec-)?(bones|treasure|fun-|again-|shop|wait-|quest-|valley|explore|focus-)/.test(et.key);if(Ya>=2)if(e)Ul.add(et.key.replace(/^rec-/,"")),Cn(),Uu=et.key,Ya=0;else{if(n-Nu<9e4)return;Ya=0}Ya++,Nu=n,lm(),ae("#guide").classList.add("new"),bt(et.icon,et.place?"\u{1F446} \u{1F426}":"\u{1F426}")}Ce.addEventListener("pointerdown",()=>{eh=performance.now()},!0);Ce.addEventListener("keydown",()=>{eh=performance.now()},!0);function lm(){et&&(kr=et.key,speak(et.say),ae("#guide").classList.remove("new"))}function On(n){if(!Ne)return;let e=Ne.pet,t=Ql(e);if(n.startsWith("open:")&&(t.visited[n.slice(5)]=!0),t.step>=js.length)return Cn();let i=js[t.step].id;(i==="walk"&&n==="walk"&&++t.moved>=3||i==="home"&&n==="open:casa"||i==="eat"&&n==="do:eat"||i==="pet"&&n==="do:pet"||i==="exit"&&n==="close:casa"||i==="bones"&&n==="bone")&&(t.step++,bt("\u2B50"),t.step>=js.length&&(addMilestone(e,"tutorial","\u{1F426}","\xA1Terminaste las lecciones de P\xEDo!"),setTimeout(()=>speak("\xA1Lo hiciste genial! Ahora ya sabes cuidar a Luna."),1200)),saveRoot()),Cn()}var Hl=new xs({color:"#ffd23f",gradientMap:er,emissive:"#5a4000"}),Qs=new Re;{let n=new Mt(P.cone(.7,1.1,4),Hl);n.rotation.x=Math.PI,n.position.y=.55,Qs.add(n);let e=new Mt(P.box(.45,.9,.45),Hl);e.position.y=1.5,Qs.add(e)}Qs.visible=!1;re.add(Qs);var Rs=new Re;{let n=new Mt(P.cone(.32,.6,3),Hl);n.rotation.x=Math.PI/2,n.position.z=1.5,Rs.add(n);let e=new Mt(P.box(.18,.06,.6),Hl);e.position.z=1,Rs.add(e)}Rs.visible=!1;re.add(Rs);function qv(n){let e=et&&et.place&&ts.find(r=>r.pl.id===et.place);if(!e&&et&&/bones$/.test(et.key)&&ri.length){let r=null,a=1/0;for(let o of ri){let l=Math.hypot(o.m.position.x-k.x,o.m.position.z-k.z);l<a&&(a=l,r=o)}e={x:r.m.position.x,z:r.m.position.z,baseY:.6,pl:{}}}if(!e&&et&&et.target){let r=et.target();r&&(e={x:r.x,z:r.z,baseY:1.2,pl:{}})}let t=he==="town"&&e&&!(nn&&nn===e);if(Qs.visible=Rs.visible=!!t,!t)return;Qs.position.set(e.x,e.baseY+1.2+Math.abs(Math.sin(n*4))*.6,e.pl.w?e.pl.z+e.pl.d/2:e.z),Qs.rotation.y=n*1.5;let i=e.x-k.x,s=e.z-k.z;Rs.position.set(k.x,.08,k.z),Rs.rotation.y=Math.atan2(i,s),Rs.children.forEach(r=>{r.position.z=(r.geometry.type==="ConeGeometry"?1.5:1)+Math.sin(n*6)*.15})}var po=(n,e)=>{let t=today(n);return t.games=t.games||{},t.games[e]=(t.games[e]||0)+1,t.games[e]},Zu=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},mo=(n,e)=>`<div class="result"><h2>${n}</h2><div class="howto">${e.map(([t,i])=>`<div><span>${t}</span><i>\u279C</i><span>${i}</span></div>`).join("")}</div></div>`,Fu="";function ns(n){let e=ae("#gameHud");if(n==null){e.hidden=!0,Fu="";return}n!==Fu&&(Fu=n,e.innerHTML=`${n}<button class="hbtn" data-act="quitgame" aria-label="Salir">\u2716</button>`,e.hidden=!1)}var As=yi("\u2744\uFE0F",1.1,!0);As.visible=!1;re.add(As);var Ki=yi("\u{1F356}",.85,!0);Ki.visible=!1;re.add(Ki);var Al="",Ip=0,Pp={hot:["\u{1F525}","\xA1Caliente, caliente!"],warm:["\u2600\uFE0F","\xA1Tibio!"],cold:["\u2744\uFE0F","\xA1Fr\xEDo!"]};function $v(n){let e=null,t=null;if(Et?(e=Et.x,t=Et.z):Nn&&et&&et.key==="treasure"&&(e=Nn.x,t=Nn.z),e==null||he!=="town"){As.visible=!1,Al="";return}let i=Math.hypot(e-k.x,t-k.z),s=i<3.5?"hot":i<8?"warm":"cold";s!==Al&&(Al&&n-Ip>2&&(speak(Pp[s][1]),Ip=n),Al=s,As.material.map=Is(Pp[s][0],!0),As.material.needsUpdate=!0),As.visible=!0,As.position.set(k.x,2.75+Math.sin(n*5)*.08,k.z)}function Yv(){let n=new Re,e=R(P.sph(.22,12,10),"#b0682c");e.scale.set(.9,.85,1.2),e.position.y=.25,n.add(e),n.add(j(R(P.sph(.13,10,8),"#f0d0a0",{cast:!1}),0,.2,.14)),n.add(j(R(P.sph(.15,12,10),"#b0682c"),0,.46,.2));for(let t of[-1,1])n.add(j(R(P.cone(.05,.12,6),"#8a4a20"),t*.08,.62,.17)),n.add(j(R(P.sph(.03,6,5),"#1c1410",{cast:!1}),t*.07,.5,.33));for(let[t,i,s]of[[.35,-.25,.14],[.6,-.33,.15],[.8,-.22,.12]])n.add(j(R(P.sph(s,10,8),"#c87c3c"),0,t,i));return n}var Rl=null,Ou=20;function Zv(n,e,t){let i=Rl;if(!i){if(e.day<3||e.asleep||Et||he!=="town"||(Ou-=n,Ou>0))return;Ou=35+Math.random()*35;for(let r=0;r<60;r++){let a=Math.random()*Math.PI*2,o=6+Math.random()*4,l=k.x+Math.cos(a)*o,c=k.z-Math.abs(Math.sin(a))*o*.8;if(Fn(l,c,.5))continue;let h=Yv();h.position.set(l,0,c),h.rotation.y=Math.atan2(k.x-l,k.z-c),re.add(h),Rl={m:h,t:0,run:0,vx:0,vz:0},speak("\xA1Mira, una ardilla! Corre con Luna a saludarla.");return}return}i.t+=n;let s=i.m.position;if(i.run>0){i.run-=n,s.x+=i.vx*n,s.z+=i.vz*n,s.y=Math.abs(Math.sin(t*18))*.25,i.run<=0&&(re.remove(i.m),Rl=null);return}if(s.y=Math.abs(Math.sin(t*5))*.12,i.t>25){re.remove(i.m),Rl=null;return}if(Math.hypot(I.x-s.x,I.z-s.z)<1.5||Math.hypot(k.x-s.x,k.z-s.z)<1.2){let r=Math.atan2(s.x-I.x,s.z-I.z);i.vx=Math.sin(r)*7,i.vz=Math.cos(r)*7,i.run=1.2,i.m.rotation.y=r,I.mode="happy",I.modeT=1.2,dogSound("bark",mt());let a=today(e);a.squirrels=(a.squirrels||0)+1,a.squirrels<=4&&(applyFx(e,{felicidad:6,energia:-2}),e.bones++,a.play++,it(re,"\u{1F496}",new D(I.x,1.4,I.z),3,.5),it(re,"\u{1F9B4}",s,1,.5),lt("coin"),addMilestone(e,"squirrel","\u{1F43F}\uFE0F","Luna persigui\xF3 a su primera ardilla."),Rt()),speak("\xA1Guau! \xA1Qu\xE9 r\xE1pida!")}}var od=[],zu=0;function Jv(){let n=ai(2468),e=["#ffffff","#ffd23f","#ff8fc8","#8fd0ff","#c9a0ff"];for(let t=0;t<12;t++){let i=0,s=0;for(let l=0;l<50&&(i=Ae.x0+3+n()*(Ae.x1-Ae.x0-6),s=Ae.z0+3+n()*(Ae.z1-Ae.z0-6),!!Fn(i,s,1));l++);let r=new Re,a=[],o=new xs({color:e[t%e.length],gradientMap:er,side:Ln});for(let l of[-1,1]){let c=new Re,h=new Mt(new ms(.17,10),o);h.rotation.x=-Math.PI/2,h.position.x=l*.15,c.add(h),r.add(c),a.push(c)}r.add(R(P.cap(.025,.16),"#3a2a2a",{cast:!1})),r.children[2].rotation.x=Math.PI/2,re.add(r),od.push({g:r,wings:a,cx:i,cz:s,ph:n()*10,cd:0})}}function Kv(n,e,t){zu-=n;for(let i of od){i.ph+=n,i.cd-=n;let s=i.cx+Math.cos(i.ph*.7)*1.4,r=i.cz+Math.sin(i.ph*1.1)*1.4,a=1.1+Math.sin(i.ph*2.3)*.35;i.g.position.set(s,a,r),i.g.rotation.y=-i.ph*.7;let o=Math.sin(t*22+i.ph)*.9;if(i.wings[0].rotation.z=o,i.wings[1].rotation.z=-o,i.cd<=0&&!Et&&!e.asleep&&Math.hypot(s-I.x,r-I.z)<1.2){let l=Math.atan2(s-I.x,r-I.z),c=i.cx+Math.sin(l)*3.5,h=i.cz+Math.cos(l)*3.5;c>Ae.x0&&c<Ae.x1&&h>Ae.z0&&h<Ae.z1&&(i.cx=c,i.cz=h),i.cd=3,it(re,"\u{1F496}",new D(I.x,1.4,I.z),1,.45),I.mode="happy",I.modeT=.8,zu<=0&&(zu=12,applyFx(e,{felicidad:2}),dogSound("yip",mt(),.5),Rt())}}}var bs=null;function hm(n){let e=Nn;Nn=null,n.treasure={day:n.day,found:!0};let t=Math.random(),i;if(t<.45){let a=4+Math.floor(Math.random()*4);n.bones+=a,i=`\u{1F9B4} +${a}`}else t<.7?(n.items.premio+=2,i="\u{1F36A} +2"):t<.88?(n.items.champu+=1,i="\u{1F9F4} +1"):(n.bones+=12,i="\u{1F48E} \u{1F9B4} +12");applyFx(n,{felicidad:10});let s=new Re;s.add(j(R(P.box(.9,.5,.6),"#a0642c"),0,.25,0));let r=R(P.box(.95,.18,.65),"#ffd23f");r.position.set(0,.6,-.15),r.rotation.x=-.9,s.add(r),s.add(j(R(P.box(.15,.2,.05),"#ffd23f"),0,.35,.32)),s.add(j(R(P.cyl(.8,.9,.08,16),"#9a6236",{cast:!1}),0,.02,0)),s.position.set(e.x,-.6,e.z),re.add(s),bs={g:s,t:0},it(re,"\u2728",new D(e.x,.8,e.z),8,.6),I.mode="happy",I.modeT=1.6,qe.mode="cheer",qe.modeT=1.6,addEvent(n,"\u{1F4B0}",`\xA1Luna desenterr\xF3 un tesoro! (${i})`),addMilestone(n,"treasure1","\u{1F4B0}","Luna encontr\xF3 su primer tesoro escondido."),bt("\u{1F4B0}",i),speak("\xA1Luna encontr\xF3 el tesoro!"),lt("coin"),setTimeout(()=>dogSound("happy",mt()),500),saveRoot(),Rt()}var Et=null;function um(){speak("\xA1Escondite! Cierra los ojos y cuenta\u2026 \xA1Luna se va a esconder!"),zt(mo("\u{1F648}",[["\u{1F436}","\u{1F333}\u2753"],["\u{1F525}","\u{1F440} \u{1F436}"],["\u2744\uFE0F","\u21A9\uFE0F"]]),()=>{let n=Ft.circles.filter(t=>t.tree),e=null;for(let t=0;t<600&&!e;t++){let i=n[Math.floor(Math.random()*n.length)],s=Math.random()*Math.PI*2,r=i.x+Math.sin(s)*(i.r+.7),a=i.z+Math.cos(s)*(i.r+.7),o=Math.hypot(r-k.x,a-k.z);o<6||o>15||Fn(r,a,.4)||(e={x:r,z:a})}if(!e){speak("Aqu\xED no hay d\xF3nde esconderse. \xA1Prueba en otro lugar!");return}Yn(()=>{Et={x:e.x,z:e.z,t:0,dur:60,barkT:4},I.x=e.x,I.z=e.z,I.path=null,I.ry=Math.random()*6,ae("#actions").hidden=!0,ae("#prompt").hidden=!0})})}function jv(n,e){let t=Et;t.t+=n,t.barkT-=n,t.barkT<=0&&(t.barkT=5,dogSound("bark",mt(),.5));let i=Math.hypot(k.x-t.x,k.z-t.z);ge.root.visible=i<3.5,ns(`<span>\u{1F648} ${Math.max(0,Math.ceil(t.dur-t.t))}</span>`),i<1.7?Gl(!0):t.t>=t.dur&&Gl(!1)}function Gl(n){let e=Et,t=Ne.pet;if(!e)return;Et=null,ns(null),ge.root.visible=!0,gi=[{x:I.x,z:I.z},{x:k.x,z:k.z}];let i=n?e.t<20?3:e.t<40?2:1:0,s=i*2;t.bones+=s,today(t).play++,po(t,"hide"),applyFx(t,{felicidad:10+i*4,energia:-6,hidratacion:-4}),addEvent(t,"\u{1F648}",n?`Jugaron al escondite: encontraste a Luna en ${Math.round(e.t)} s.`:"Jugaron al escondite: Luna sali\xF3 solita."),n&&(addMilestone(t,"hide1","\u{1F648}","\xA1Encontraste a Luna jugando al escondite!"),I.mode="happy",I.modeT=1.5,qe.mode="cheer",qe.modeT=1.5,it(re,"\u{1F496}",new D(I.x,1.4,I.z),6)),saveRoot(),Rt(),Kl(i,s,n?`<span>\u{1F648} ${Math.round(e.t)}s</span>`:"<span>\u{1F436} \u{1F44B}</span>")}function Qv(n,e,t){od.length||Jv(),Kv(n,e,t),Zv(n,e,t),Et&&ae("#card3").hidden&&jv(n,e),Nn&&!Et&&he==="town"&&(Math.hypot(Nn.x-k.x,Nn.z-k.z)<1||ge.root.parent===re&&Math.hypot(Nn.x-I.x,Nn.z-I.z)<.9)&&hm(e),bs&&(bs.t+=n,bs.g.position.y=Math.min(0,-.6+bs.t*1.2),bs.t>4&&(re.remove(bs.g),bs=null)),$v(t),rM(n,e,t),mM(n,e,t)}var eM={toby:{route:[[-26,-7.4],[2,-7.4],[2,-10.6],[-26,-10.6]]},rocco:{route:[[38,-7.4],[66,-7.4],[66,-10.6],[38,-10.6]]},nube:{route:[[-18,20.6],[8,20.6],[8,17.4],[-18,17.4]]},canela:{home:[3,14],r:4.5},bruno:{home:[-29,0],r:3.5},pipo:{home:[28,8],r:4},max:{home:[38,3],r:5},kira:{home:[58,2],r:4},coco:{home:[21,28],r:4},lola:{home:[25,30],r:4},thor:{home:[23,31],r:4},sol:{home:[58,27],r:4}},Wr=[],tM=Vr("#e0403c");function dm(){if(!Wr.length)for(let n of DOG_DEFS){let e=eM[n.id],t=Vl({look:n.look,ears:n.ears,day:n.owner||n.park?10:5,acc:{worn:null}});t.root.scale.setScalar(n.size);let i=yi(DOG_MOOD[n.mood].icon,n.mood==="grumpy"?.95:.75,!0);re.add(t.root,i);let s={def:n,P:e,d:t,ind:i,x:0,z:0,ry:0,tx:0,tz:0,wait:Math.random()*2,sp:0,growlT:0,happyT:0,fleeT:0,near:!1,asked:!1};if(n.mood==="grumpy"&&(s.ring=new Mt(new Aa(2.6,3,32),new Pn({color:"#ff1a1a",transparent:!0,opacity:.6,depthWrite:!1})),s.ring.rotation.x=-Math.PI/2,re.add(s.ring)),n.owner){let r=uo(n.owner);r.scale.setScalar(.78),re.add(r),s.owner={g:r,x:e.route[0][0],z:e.route[0][1],ry:0,wi:1},s.x=s.owner.x-1.2,s.z=s.owner.z,s.leash=new Mt(P.cyl(.025,.025,1,5),tM),re.add(s.leash)}else s.x=e.home[0],s.z=e.home[1],s.tx=s.x,s.tz=s.z;Wr.push(s)}}var nM=(n,e)=>n>wn.x0+.6&&n<wn.x1-.6&&e>wn.z0+.6&&e<wn.z1-.6;function Lp(n){let e=n.P;for(let t=0;t<20;t++){let i=Math.random()*Math.PI*2,s=Math.random()*e.r,r=e.home[0]+Math.cos(i)*s,a=e.home[1]+Math.sin(i)*s;if(!(Fn(r,a,.4)||n.def.park&&!nM(r,a))){n.tx=r,n.tz=a;return}}n.tx=e.home[0],n.tz=e.home[1]}var Cl=new D,Il=new D,iM=new kn,sM=new D(0,1,0),Ju=0,Bu=0;function rM(n,e,t){dm();let i=k.px!==void 0&&Math.hypot(k.x-k.px,k.z-k.pz)>.001;k.px=k.x,k.pz=k.z,Ju=i?0:Ju+n;let s=ge.root.parent===re&&!Et;Bu-=n;for(let r of Wr){let a=r.def,o=null,l=null,c=1.4+a.size*1.2;if(r.growlT-=n,r.happyT-=n,r.fleeT-=n,r.owner){let u=r.owner,[m,x]=r.P.route[u.wi],y=m-u.x,p=x-u.z,f=Math.hypot(y,p),g=Math.hypot(k.x-u.x,k.z-u.z)<2.2||r.happyT>0;if(f<.2)u.wi=(u.wi+1)%r.P.route.length;else if(g)u.ry=Math.atan2(k.x-u.x,k.z-u.z);else{let E=Math.min(f,1.5*n);u.x+=y/f*E,u.z+=p/f*E,u.ry=Math.atan2(y,p)}u.g.position.set(u.x,Math.abs(Math.sin(t*6))*(g?0:.04),u.z),u.g.rotation.y=u.ry,o=u.x-Math.sin(u.ry)*1.1+Math.cos(u.ry)*.5,l=u.z-Math.cos(u.ry)*1.1-Math.sin(u.ry)*.5,c=1.8}else{let u=s?Math.hypot(I.x-r.x,I.z-r.z):99,m=Math.hypot(k.x-r.x,k.z-r.z);if(a.mood==="shy"&&m<3&&i&&r.fleeT<=0){let x=Math.atan2(r.x-k.x,r.z-k.z),y=r.x+Math.sin(x)*3,p=r.z+Math.cos(x)*3;Fn(y,p,.4)||(r.tx=y,r.tz=p,r.fleeT=2.5)}a.mood==="friendly"&&u<5&&u>1.4&&r.happyT<=0&&!a.park&&(r.tx=I.x+1,r.tz=I.z),r.wait>0?r.wait-=n:(o=r.tx,l=r.tz),r.fleeT>0&&(c*=2)}if(r.sp=0,o!==null){let u=o-r.x,m=l-r.z,x=Math.hypot(u,m);if(x>.15){let y=Math.min(x,c*n),p=r.x+u/x*y,f=r.z+m/x*y;if(r.owner||!Fn(p,f,.3)){r.x=p,r.z=f,r.sp=y/n;let g=Math.atan2(u,m);r.ry+=Math.atan2(Math.sin(g-r.ry),Math.cos(g-r.ry))*(1-Math.exp(-10*n))}else Lp(r),r.wait=.5}else r.owner||(Lp(r),r.wait=1+Math.random()*3)}if(a.mood==="grumpy"){let u=Math.hypot(k.x-r.x,k.z-r.z),m=s?Math.hypot(I.x-r.x,I.z-r.z):99;if(Math.min(u,m)<2.9&&r.growlT<=0){r.growlT=4,dogSound("bark",4,.7),it(re,"\u{1F4A2}",new D(r.x,1.6*a.size+.4,r.z),2,.5),s&&!e.asleep&&(I.mode="sit",I.modeT=1.2);let x=dogGrowl(e,a,Bu<=0);x&&(Bu=12,speak(x),bt("\u26A0\uFE0F",a.name)),Rt()}r.ring.position.set(r.x,.05,r.z),r.ring.material.opacity=r.growlT>2.5?.95:.55+Math.sin(t*4)*.15}let h=r.happyT>0?"happy":r.sp>.2?"walk":a.mood==="shy"&&!r.owner?"sit":"idle";if(Li(r.d,n,{mode:h,speed:r.sp,sad:a.mood==="grumpy"&&r.growlT>2.8,mood:a.mood==="friendly"?"feliz":"normal"}),r.d.root.position.set(r.x,0,r.z),r.d.root.rotation.y=r.ry,r.ind.position.set(r.x,1.85*a.size+.55+Math.sin(t*3+a.size*5)*.08,r.z),r.ind.visible=Math.hypot(k.x-r.x,k.z-r.z)<16,r.leash){r.owner.g.updateMatrixWorld(!0),r.d.root.updateMatrixWorld(!0),Il.set(.36,.95,.2).applyMatrix4(r.owner.g.matrixWorld),r.d.collar.getWorldPosition(Cl);let u=Cl.distanceTo(Il)||.01;r.leash.position.addVectors(Cl,Il).multiplyScalar(.5),r.leash.quaternion.copy(iM.setFromUnitVectors(sM,Il.sub(Cl).normalize())),r.leash.scale.set(1,u,1),rd(r.owner.g,n*(Math.hypot(k.x-r.owner.x,k.z-r.owner.z)<2.2?1:.3))}let d=Math.hypot(k.x-r.x,k.z-r.z)<3.2;d&&!r.near&&Qu(dogLabel(a)),r.near=d}}function fm(n,e){let t=null,i=n;for(let s of Wr){if(e&&!e(s))continue;let r=Math.hypot(k.x-s.x,k.z-s.z);r<i&&(i=r,t=s)}return t}function so(n){n&&(n.done?(qe.mode="cheer",qe.modeT=1.6,I.mode="happy",I.modeT=1.6,lt("coin"),speak(n.done.say),zt(questDoneHTML(n.done)),go(Ne.pet)):(bt(n.def.icon,`${n.n}/${n.need}`),speak(`\xA1Bien! Llevas ${n.n} de ${n.need}.`)),Rt())}function aM(n){let e=Ne.pet,t=n.def,i=ge.root.parent===re&&!e.asleep,s=greetDog(e,t,{asked:n.asked,kidStill:Ju,lunaThere:i});n.asked=s.asked,t.owner&&s.icon==="\u{1F64B}"&&(n.owner.g.userData.wave=2),s.happy&&(n.happyT=2.5,n.wait=2.5,n.ry=Math.atan2(k.x-n.x,k.z-n.z),it(re,"\u{1F496}",new D(n.x,1.4*t.size+.4,n.z),4,.5),dogSound("happy",t.size>1?4:t.size>.7?3:1,.7),i&&(I.mode="happy",I.modeT=2,it(re,"\u{1F496}",new D(I.x,1.4,I.z),2,.5))),bt(s.icon,s.sub),speak(s.say),saveRoot(),Rt(),s.quest&&setTimeout(()=>so(s.quest),1200)}var Xn=null;function Za(n){let e=Ne.pet;applyFx(e,n.fx),n.kind&&gv(n.kind),addEvent(e,n.icon,n.msg);let t=Object.entries(n.fx).filter(([,i])=>i>0).map(([i])=>STAT_ICON[i]).join("");bt(n.icon,(t?"+"+t:"")+(n.extra?" "+n.extra:"")),speak(n.word),dogSound("happy",mt(),.7),I.mode="happy",I.modeT=1.2,xt=!1,saveRoot(),Rt(),Hr()}function oM(n,e,t,i){xt=!0,Rn(n,()=>{I.mode="happy",I.modeT=e;let s=performance.now(),r=setInterval(()=>{it(re,t,new D(I.x,1.5,I.z),1,.5),performance.now()-s>e*1e3&&clearInterval(r)},300);setTimeout(i,e*1e3)})}function cM(n){he="spot",Xn=n,speak(SPOT_UI[n].name),dogSound("bark",mt(),.6),n==="aventura"&&_i&&(_i.userData.wave=2),Hr(),ae("#actions").hidden=!1,ae("#prompt").hidden=!0,On("open:"+n)}function Xr(){he="town",Xn=null,xt=!1,ae("#actions").hidden=!0,ir("")}function Hr(){if(he!=="spot"||!Xn)return;let n=Ne.pet;Zl(spotActions(Xn,n,Xl()&&!n.asleep).concat([["closespot","\u{1F6AA}","Salir",""]]));let e=spotInfo(Xn,n);ir(e?`<div class="wallet">${e}</div>`:"")}function lM(n){if(n==="closespot")return Xr();if(xt||!Xn)return;let e=Ne.pet,t=xn.find(a=>a.id===Xn),i=n.slice(3);setTimeout(()=>On("do:"+n),0);let s=spotDo(Xn,i,e);if(!s)return;if(saveRoot(),Rt(),s.special==="story"){speak("Dato perruno: "+s.text),zt(`<div class="result"><h2>\u{1F4D6}</h2><div class="howto"><div><span>${s.icon}</span></div></div><p class="fact">${mn(s.text)}</p>${s.bone?'<div class="gains"><span>\u{1F9B4} +1</span></div>':""}</div>`);return}if(s.special==="quiz")return hM(s.q);if(s.special==="talk"||s.special==="bag"){_i&&(_i.userData.wave=2),speak(s.say),zt(s.html),go(e),Hr();return}if(s.special==="cookies"){bt(s.icon,s.sub),speak(s.say),lt("coin"),Hr();return}if(s.special==="treatShelter"){ro.forEach(a=>{a.happyT=2.5}),it(re,"\u{1F36A}",new D(an.x,1.2,an.z),4,.5),bt(s.icon,s.sub),speak(s.say),lt("coin"),Hr(),s.quest&&setTimeout(()=>so(s.quest),1200);return}if(s.start&&speak(s.start),Xn==="refugio")return xt=!0,Rn([an.x,an.z-3.2,0],()=>{ro.forEach(a=>{a.happyT=2.5}),it(re,"\u{1F496}",new D(an.x,1.2,an.z),6,.6),setTimeout(()=>Za(s),1500)});if(s.special2==="friends"){let a=Wr.filter(l=>l.def.park),o=a[Math.floor(Math.random()*a.length)];return xt=!0,Rn([o.x-1,o.z,Math.PI/2],()=>{o.happyT=3,o.wait=3,I.mode="spin",I.modeT=1.5,dogSound("bark",mt()),it(re,"\u{1F496}",new D(I.x,1.4,I.z),4),setTimeout(()=>Za({...s,msg:`Luna jug\xF3 con ${o.def.name} en el parque para perros.`,word:`\xA1Luna y ${o.def.name} son amigas!`}),1800)})}if(s.special2==="frisbee")return pm(0,()=>Za(s));if(Xn==="aventura")return xt=!0,Rn([45.5,23.4,0],()=>{I.mode="lie",I.modeT=2,setTimeout(()=>Za(s),2e3)});let r=Xn==="perros"?Qi.water:[t.x+(i==="smell"?-1:.6),t.z+(t.d||0)/2+1.2,Math.PI];oM(r,i==="groom"?2.4:1.6,s.anim||"\u2728",()=>Za(s))}function pm(n,e){let t=Qi.disc;xt=!0;let i=0,s=0;for(let c=0;c<30&&(i=wn.x0+2+Math.random()*(wn.x1-wn.x0-4),s=wn.z0+2+Math.random()*(wn.z1-wn.z0-4),!!Fn(i,s,.6));c++);qe.mode="throw",qe.modeT=.35,lt("pop");let r=k.x,a=k.z,o=performance.now();t.visible=!0;let l=setInterval(()=>{let c=Math.min(1,(performance.now()-o)/900);t.position.set(r+(i-r)*c,1.2+Math.sin(c*Math.PI)*1.6-c*1.1,a+(s-a)*c),t.rotation.y+=.5,c>=1&&clearInterval(l)},16);setTimeout(()=>dogSound("bark",mt()),300),Rn([i,s-.6,0],()=>{t.visible=!1,I.mode="happy",I.modeT=.8,it(re,"\u2B50",new D(i,1.2,s),2,.5),Rn([k.x+.8,k.z,-Math.PI/2],()=>{n<2?pm(n+1,e):e()})})}var mm=null;function hM(n){mm=n,speak(n.q),ae("#card3-box").innerHTML=`<div class="result"><h2>\u2753</h2><p class="fact">${mn(n.q)}</p><div class="quiz">${Zu(n.a).map(([e,t])=>`<button class="go quiz-opt" data-quiz="${t?1:0}">${mn(e)}</button>`).join("")}</div></div>`,ae("#card3").hidden=!1,Bl=null}function uM(n){let e=Ne.pet;ae("#card3").hidden=!0;let t=answerQuiz(e,mm,n);bt(t.icon,t.sub),speak(t.say),n&&lt("coin"),saveRoot(),Rt(),Hr()}var an={x:-15.5,z:12};Js.push([an.x,an.z,4.2],[-22,16,2.5]);var ro=[];function dM(){if(ro.length)return;let n=new Re,e=an.x-2.5,t=an.x+2.5,i=an.z-2,s=an.z+2;ji(n,e,i,t,i,"#c98c55"),ji(n,e,s,t,s,"#c98c55"),ji(n,e,i,e,s,"#c98c55"),ji(n,t,i,t,s,"#c98c55"),re.add(n),SHELTER_LOOKS.forEach((a,o)=>{let l=Vl({look:a,ears:o===1?"up":null,day:5,acc:{worn:null}});l.root.scale.setScalar(.5+o*.12),re.add(l.root),ro.push({d:l,x:e+1+o*1.5,z:an.z,ph:o*2,happyT:0})});let r=yi("\u{1F3E1}",.9,!0);r.position.set(an.x,2.4,an.z),re.add(r)}function fM(n){for(let e of ro)e.ph+=n,e.happyT-=n,e.x=an.x+Math.sin(e.ph*.4)*1.8,e.z=an.z+Math.cos(e.ph*.55)*1.2,e.d.root.position.set(e.x,0,e.z),e.d.root.rotation.y=Math.atan2(Math.cos(e.ph*.4)*.72,-Math.sin(e.ph*.55)*.66),Li(e.d,n,{mode:e.happyT>0?"happy":"walk",speed:.6,mood:"feliz"})}var Cs=[];function to(n,e){for(let t=0;t<200;t++){let i=vt.x0+2+n()*(vt.x1-vt.x0-4),s=e?vt.riverZ+2.5+n()*(vt.z1-vt.riverZ-4):vt.z0+2+n()*(vt.z1-vt.z0-4);if(!Fn(i,s,.7)&&Math.abs(s-vt.riverZ)>2.4)return[i,s]}return[56,26]}function go(n){Cs.forEach(s=>re.remove(s.m)),Cs.length=0;let e=ai(n.bornAt%100003+n.day*6151+11),t={};for(let s=0;s<7;s++)t["s"+s]=to(e,s>=5);for(let s=0;s<4;s++)t["f"+s]=to(e,s>=2);let i=to(e,!0);for(let[s,r]of valleyItemList(n)){let[a,o]=r==="cristal"?[gn.cave[0],gn.cave[1]-1.2]:r==="llave"?i:t[s],l=yi(VALLEY_ITEMS[r].icon,r==="llave"?1:.85);l.position.set(a,.6,o),re.add(l),Cs.push({id:s,item:r,m:l,x:a,z:o})}}var Ku=[];function pM(){if(!Ku.length)for(let n=0;n<3;n++){let e=new Re,t=R(P.sph(.25,12,10),"#f4f0ea");t.scale.set(.9,.85,1.2),t.position.y=.25,e.add(t),e.add(j(R(P.sph(.16,10,8),"#f4f0ea"),0,.45,.22));for(let r of[-1,1]){let a=R(P.cap(.04,.22),"#f4f0ea");a.position.set(r*.07,.68,.18),a.rotation.z=r*.2,e.add(a),e.add(j(R(P.sph(.025,6,5),"#1c1410",{cast:!1}),r*.07,.48,.36))}e.add(j(R(P.sph(.08,8,6),"#ffffff"),0,.3,-.3));let[i,s]=to(ai(900+n),n===2);e.position.set(i,0,s),re.add(e),Ku.push({g:e,x:i,z:s,tx:i,tz:s,hop:0,wait:1+n})}}function mM(n,e,t){if(fM(n),Qi.flame&&Qi.flame.scale.set(1+Math.sin(t*13)*.12,1+Math.sin(t*9)*.2,1+Math.cos(t*11)*.12),_i&&rd(_i,n),!td(k.x,k.z)&&Math.hypot(k.x-vt.x0,k.z-vt.gateZ)>30)return;let i=rpgOf(e),s=ge.root.parent===re&&!Et;for(let r=Cs.length-1;r>=0;r--){let a=Cs[r];if(a.m.position.y=.6+Math.sin(t*3+r)*.12,Math.hypot(a.x-k.x,a.z-k.z)<1||s&&Math.hypot(a.x-I.x,a.z-I.z)<.9){re.remove(a.m),Cs.splice(r,1),it(re,VALLEY_ITEMS[a.item].icon,a.m.position,3,.5),lt("coin");let o=pickValleyItem(e,a.id,a.item);o.say&&(bt(o.icon,o.sub),speak(o.say)),s&&(I.mode="happy",I.modeT=.8),saveRoot(),Rt(),so(o.quest)}}if(Math.hypot(k.x-gn.mirador[0],k.z-gn.mirador[1])<2){let r=visitMirador(e);r&&(it(re,"\u2728",new D(65,4.6,20.8),6,.6),r.first&&(bt("\u{1F5FC}","\u{1F440}"),speak(r.say)),saveRoot(),Rt(),so(r.quest))}mi&&(mi.userData.lid.rotation.x=si(mi.userData.lid.rotation.x,i.chestDay===e.day?-1.1:0,1-Math.exp(-6*n)));for(let r of Ku){r.wait-=n;let a=Math.hypot(k.x-r.x,k.z-r.z);if(r.wait<=0){let o=r.tx-r.x,l=r.tz-r.z,c=Math.hypot(o,l);if(c<.1){let[h,d]=to(Math.random,r.z>vt.riverZ);Math.hypot(h-r.x,d-r.z)<6&&(r.tx=h,r.tz=d),r.wait=1+Math.random()*2.5}else{let h=Math.min(c,1.6*n);r.x+=o/c*h,r.z+=l/c*h,r.hop+=n*9,r.g.rotation.y=Math.atan2(o,l)}}r.g.position.set(r.x,Math.abs(Math.sin(r.hop))*.25,r.z),a<1.4&&!r.met&&(r.met=!0,it(re,"\u{1F496}",new D(r.x,.9,r.z),2,.45),lt("pop"),s&&(I.mode="happy",I.modeT=.8)),a>4&&(r.met=!1)}}function gM(){let n=Ne.pet,e=openChest(n);e.opened&&it(re,"\u2728",new D(gn.chest[0],1.2,gn.chest[1]+1.1),8,.6),bt(e.icon,e.sub),speak(e.say),e.opened&&lt("coin"),saveRoot(),Rt(),e.quest&&setTimeout(()=>so(e.quest),1200)}var He=null,xo=!1;function _o(n,e){let t=Xl();return t&&Un(ge.root,n),Un(qe.root,n),Bt=n,he=e,ae("#actions").hidden=!0,ae("#prompt").hidden=!0,ir(""),As.visible=!1,Ki.visible=!1,ge.root.visible=!0,t}function Kr(n){let e=Bt;He=null,ns(null),qe.mode="idle",Yn(()=>{if(n==="casa"){Xp();return}let t=ge.root.parent===e;t&&Un(ge.root,re),Un(qe.root,re),Bt=re,he="town";let i=ts.find(s=>s.pl.id===n);(t?lo:kp)(i.x+1.6,i.z,Math.PI/2),n==="parque"?Vp():n==="lago"&&nm()})}function yo(n,e,t,i,s){let r=Ne.pet;He.over=!0,i(r),saveRoot(),Rt(),ns(null),n&&(qe.mode="cheer",qe.modeT=2,I.mode="happy",I.modeT=2),Kl(n,e,t,()=>Kr(s))}var vo=(n,e,t,i,s,r,a,o=5)=>{ft.position.lerp(new D(n,e,t),1-Math.exp(-o*a)),ft.lookAt(i,s,r)},Zt=new En;function xM(){speak("\xA1Carrera de obst\xE1culos! Toca A o la pantalla para saltar las vallas y los charcos."),zt(mo("\u{1F3C3}",[["\u24B6 \u{1F446}","\u2934\uFE0F \u{1F6A7}"],["\u{1F4A6}","\u2934\uFE0F"],["\u{1F9B4}","\u{1F60B}"]]),()=>Yn(gm))}function gm(){co(Zt);let n=tr(Zt);Zt.background=new $e("#bfe6ff"),Zt.fog=new Gi("#bfe6ff",22,60);let e=300,t=ai(Date.now()%1e5);Zt.add(j(R(P.box(e+60,.2,24),"#8fd46e",{cast:!1,recv:!0}),e/2,-.1,-4)),Zt.add(j(R(P.box(e+60,.04,2.4),"#f2d39a",{cast:!1,recv:!0}),e/2,.02,0));for(let s=-10;s<e+20;s+=2.5+t()*4){let r=Wl(t()<.4);if(r.position.set(s,0,-4-t()*8),r.scale.setScalar(.8+t()*.5),Zt.add(r),t()<.5){let a=R(P.sph(.3+t()*.3,10,8),"#5cbf5a");a.position.set(s+1,.2,2.6+t()*1.5),Zt.add(a)}}for(let s=0;s<e+20;s+=4)Zt.add(j(R(P.box(.12,.6,.12),"#ffffff"),s,.3,-1.6));Zt.add(j(R(P.box(e+20,.08,.08),"#ffffff"),e/2,.55,-1.6));let i=[];for(let s=10;s<e-10;s+=6+t()*3.5){let r=t()<.62?"fence":"puddle",a;if(r==="fence"){a=new Re;for(let o of[-.85,.85])a.add(j(R(P.box(.12,.95,.12),"#c98c55"),0,.47,o));a.add(j(R(P.box(.1,.14,1.8),"#ff5c5c"),0,.78,0)),a.add(j(R(P.box(.1,.12,1.8),"#ffffff"),0,.45,0))}else a=R(P.cyl(.85,.85,.04,20),"#5ec2f5",{cast:!1}),a.scale.set(1.2,1,.9),a.position.y=.04;if(a.position.x=s,Zt.add(a),i.push({kind:r,x:s,m:a,done:!1}),t()<.6){let o=t()<.6,l=id();l.scale.setScalar(.9);let c=o?s:s+3,h=o?1.55:.6;l.position.set(c,h,0),Zt.add(l),i.push({kind:"bone",x:c,y:h,m:l,done:!1})}}_o(Zt,"agility"),ge.root.rotation.y=Math.PI/2,qe.root.rotation.y=Math.PI/2,qe.leash=!0,ft.position.set(2,2.8,9),He={kind:"agility",lt:n,obs:i,time:0,dur:35,x:0,y:0,vy:0,onGround:!0,buffer:-9,lastGround:0,speed:5,hits:0,cleared:0,splash:0,bones:0,inv:0,over:!1,update:_M,tap:()=>{He.buffer=He.time},quit:()=>Kr("parque")}}function _M(n){let e=He,t=Ne.pet,i=stageOf(t.day);if(!e.over){e.time+=n,e.speed=Math.min(6.4,5+e.time*.05),(we.jumpPress||we.a)&&(e.buffer=e.time);let r=we.aHeld||we.up||xo;e.onGround&&(e.lastGround=e.time),e.time-e.buffer<=.12&&e.time-e.lastGround<=.1&&(e.vy=7.6,e.buffer=-9,e.lastGround=-9,e.onGround=!1,lt("pop"));let a=e.vy>0?22:34;e.vy>0&&!r&&(a=40),e.vy-=a*n,e.y+=e.vy*n,e.y<=0&&(e.y=0,e.vy=0,e.onGround=!0),e.x+=e.speed*n,e.inv>0&&(e.inv-=n);for(let o of e.obs){if(o.done)continue;if(o.kind==="bone"){o.m.rotation.y+=n*3,Math.abs(o.x-e.x)<.6&&Math.abs(o.y-(e.y+.7))<.65&&(o.done=!0,Zt.remove(o.m),e.bones++,lt("coin"),it(Zt,"\u{1F9B4}",o.m.position,2,.45));continue}let l=o.kind==="puddle"?.8:.05,c=o.kind==="fence"?.7:.08;e.inv<=0&&Math.abs(o.x-e.x)<l+.2&&e.y<c?(o.done=!0,e.hits++,e.inv=.8,dogSound("sad",mt(),.5),o.kind==="puddle"?(e.splash++,it(Zt,"\u{1F4A6}",new D(e.x,.6,0),4,.5)):(o.m.rotation.z=-.7,it(Zt,"\u{1F4A5}",new D(e.x,.8,0),2,.5))):o.x<e.x-l-.3&&(o.done=!0,e.cleared++,it(Zt,"\u2B50",new D(e.x,1.8,0),1,.45))}if(ns(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F9B4} ${e.bones}</span>`),e.time>=e.dur){let o=e.hits===0?3:e.hits<=3?2:1,l=Math.floor((e.bones+e.cleared/2)/3);yo(o,l,`<span>\u{1F6A7} ${e.cleared}</span>`,c=>{c.bones+=l,today(c).play++,po(c,"agility"),applyFx(c,{felicidad:14+o*3,energia:-14,saciedad:-6,hidratacion:-10,higiene:-e.splash*6}),addEvent(c,"\u{1F3C3}",`Carrera de obst\xE1culos: ${e.cleared} saltos y ${e.bones} huesos.`),o===3&&addMilestone(c,"agility","\u{1F3C3}","\xA1Luna hizo una carrera de obst\xE1culos perfecta!"),outdoorRisk(c)},"parque")}}let s=!e.over;ge.root.scale.setScalar(nr[Math.max(1,i.size)]),ge.root.position.set(e.x,e.y,0),ge.root.visible=!(e.inv>0&&Math.floor(e.time*12)%2),Li(ge,n,{mode:s&&e.onGround?"walk":"happy",speed:s?e.speed*.6:0,mood:"feliz"}),k.x=e.x-1.9,qe.root.position.set(k.x,0,.4),Yr(qe,n,s,e.speed*.7),Zr(Zt,!0),vo(e.x+2.2,2.8,9,e.x+2.2,.9,0,n,8),e.lt.sun.position.set(e.x+5,12,8),e.lt.sun.target.position.set(e.x,0,0)}var Jt=new En,yM=[-3.5,-6.5,-9.5];function vM(n){let e=new Re,t=n?"#ffd23f":"#ffffff",i=R(P.sph(.42,14,10),t);i.scale.set(.9,.65,1.3),i.position.y=.2,e.add(i);for(let r of[-1,1]){let a=R(P.sph(.2,10,8),n?"#f0b820":"#e4e8f0");a.scale.set(.4,.6,1.1),a.position.set(r*.33,.28,-.05),e.add(a)}e.add(j(R(P.sph(.24,12,10),n?t:"#3c8c4c"),0,.65,.38));let s=R(P.cone(.09,.26,8),"#ff9f43");s.rotation.x=Math.PI/2,s.position.set(0,.6,.66),e.add(s);for(let r of[-1,1])e.add(j(R(P.sph(.035,6,5),"#1c1410",{cast:!1}),r*.12,.7,.57));if(n){let r=yi("\u2728",.6);r.position.y=1.2,e.add(r)}return e}function MM(){speak("\xA1Los patos tienen hambre! Mu\xE9vete y l\xE1nzales su comida con A o tocando la pantalla."),zt(mo("\u{1F986}",[["\u2B05\uFE0F\u27A1\uFE0F","\u{1F9D2}"],["\u24B6 \u{1F446}","\u{1F33E} \u2B06\uFE0F"],["\u{1F33E} \u{1F986}","\u{1F60B}"],["\u{1F986}\u2728","+3"]]),()=>Yn(xm))}function xm(){co(Jt);let n=tr(Jt);n.sun.position.set(4,14,8),n.sun.target.position.set(0,0,-5),Jt.background=new $e("#bfe6ff"),Jt.fog=new Gi("#bfe6ff",25,50);let e=R(new Gn(70,24),"#5ec2f5",{cast:!1,recv:!0});e.rotation.x=-Math.PI/2,e.position.set(0,0,-7),Jt.add(e),Jt.add(j(R(P.box(70,.3,8),"#f6e3a8",{cast:!1,recv:!0}),0,-.1,4.6)),Jt.add(j(R(P.box(70,.3,12),"#8fd46e",{cast:!1,recv:!0}),0,-.1,-24));let t=ai(777);for(let s=-30;s<30;s+=2+t()*3){let r=Wl(t()<.4);r.position.set(s,0,-20-t()*4),Jt.add(r)}for(let s=0;s<14;s++){let r=R(P.cyl(.35,.35,.03,12),"#58b04a",{cast:!1});r.position.set(-12+t()*24,.02,-2-t()*11),Jt.add(r)}for(let s=0;s<18;s++){let r=R(P.cyl(.04,.05,1+t()*.6,5),"#4f9a3c");r.position.set(-14+t()*28,.5,.4+t()*.3),Jt.add(r)}let i=_o(Jt,"ducksgame");k.x=0,k.z=2.2,k.ry=Math.PI,i&&(I.x=1.3,I.z=2.6,I.ry=Math.PI),ft.position.set(0,5.5,8.5),He={kind:"ducks",lt:n,water:e,time:0,dur:30,ducks:[],spawnT:.3,pellets:[],cd:0,score:0,over:!1,update:SM,quit:()=>Kr("lago"),tap:s=>{$r.set(s.clientX/Ce.innerWidth*2-1,-(s.clientY/Ce.innerHeight)*2+1),qr.setFromCamera($r,ft);let r=qr.intersectObject(e)[0];r&&(k.x=clamp(r.point.x,-6,6)),_m()}}}function _m(){let n=He;if(!n||n.over||n.cd>0)return;n.cd=.55,qe.mode="throw",qe.modeT=.3,lt("pop");let e=.8,t=k.x+.25,i=1.8,s=1.3,r=null,a=.75;for(let h of n.ducks){if(h.fed)continue;let d=h.x+h.vx*e,u=Math.abs(d-k.x);u<a&&(a=u,r={x:d,z:h.z})}let o=r?r.x:k.x,l=r?r.z:-6.5,c=R(P.sph(.11,8,6),"#e8c860");c.position.set(t,s,i),Jt.add(c),n.pellets.push({s:c,t:0,T:e,vx:(o-t)/e,vz:(l-i)/e,vy:(.3-s+.5*9*e*e)/e})}function SM(n){let e=He,t=Ne.pet,i=ao.getElapsed();if(!e.over){e.time+=n,e.cd-=n;let s=clamp(we.right-we.left+we.jx,-1,1);if(k.x=clamp(k.x+s*5*n,-6,6),(we.a||we.jumpPress)&&_m(),e.spawnT-=n,e.spawnT<=0&&e.time<e.dur-1.5){let r=Math.random()<.5,a=Math.random()<.13,o=vM(a),l=yM[Math.floor(Math.random()*3)],c=(r?1:-1)*(1.3+Math.random()*1.3)*(1+e.time/45);o.position.set(r?-13:13,0,l),o.rotation.y=r?Math.PI/2:-Math.PI/2,Jt.add(o),e.ducks.push({m:o,x:o.position.x,z:l,vx:c,gold:a,fed:!1,ph:Math.random()*6}),e.spawnT=.7+Math.random()*.6}for(let r of e.pellets)if(r.t+=n,r.vy-=9*n,r.s.position.x+=r.vx*n,r.s.position.y+=r.vy*n,r.s.position.z+=r.vz*n,r.t>=r.T){r.dead=!0,Jt.remove(r.s);let a=e.ducks.find(o=>!o.fed&&Math.hypot(o.x-r.s.position.x,o.z-r.s.position.z)<.85);if(a){a.fed=!0;let o=a.gold?3:1;e.score+=o,lt("quack"),it(Jt,"\u{1F496}",new D(a.x,1.2,a.z),3,.5),I.mode="happy",I.modeT=.8}else it(Jt,"\u{1F4A7}",r.s.position,1,.4)}if(e.pellets=e.pellets.filter(r=>!r.dead),ns(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F986} ${e.score}</span>`),e.time>=e.dur){let r=e.score>=16?3:e.score>=8?2:e.score>=1?1:0,a=Math.min(8,Math.floor(e.score/4));yo(r,a,`<span>\u{1F986} ${e.score}</span>`,o=>{o.bones+=a,today(o).play++,po(o,"ducks"),applyFx(o,{felicidad:8+Math.min(16,e.score),energia:-4}),addEvent(o,"\u{1F986}",`Le dieron de comer a los patos del lago (${e.score} puntos).`),e.score>=10&&addMilestone(o,"ducks10","\u{1F986}","\xA1Alimentaron a muchos patos en el lago!"),outdoorRisk(o)},"lago")}}for(let s of e.ducks)s.ph+=n,s.x+=s.vx*n*(s.fed?2.2:1),s.m.position.set(s.x,Math.sin(s.ph*3)*.04,s.z),s.fed&&(s.m.rotation.z=Math.sin(s.ph*12)*.15),Math.abs(s.x)>14&&(Jt.remove(s.m),s.gone=!0);e.ducks=e.ducks.filter(s=>!s.gone),ge.root.parent===Jt&&(I.x+=(k.x+1.3-I.x)*(1-Math.exp(-6*n)),ge.root.scale.setScalar(nr[stageOf(t.day).size]),ge.root.position.set(I.x,0,I.z),ge.root.rotation.y=Math.PI,I.modeT>0&&(I.modeT-=n),Li(ge,n,{mode:t.asleep?"sleep":I.modeT>0?"happy":"sit",mood:"feliz"})),qe.root.position.set(k.x,0,k.z),qe.root.rotation.y=Math.PI,Yr(qe,n,!1,0),Zr(Jt,!1),vo(k.x*.35,5.5,8.5,k.x*.35,0,-5,n)}var Ci=new En,bM=["\u{1F436}","\u{1F9B4}","\u{1F3BE}","\u{1F9F8}","\u{1F986}","\u{1F333}","\u{1F356}","\u{1F43F}\uFE0F","\u{1F98B}","\u{1F3E0}"];function EM(){xt||(speak("\xA1Encuentra las parejas! Toca dos cartas."),Yn(ym))}function ym(){co(Ci),fo(Ci,{floor:"#e7b98a",back:"#ffd1e6",side:"#c8f1e4",rug:"#ffb3d1"}),Ci.add(j(R(P.box(7.4,.3,5.6),"#c98c55",{recv:!0}),0,.85,0));for(let[c,h]of[[-3.3,-2.4],[3.3,-2.4],[-3.3,2.4],[3.3,2.4]])Ci.add(j(R(P.box(.3,.85,.3),"#a0642c"),c,.42,h));let n=Ne.pet,e=n.day<8?4:6,t=Zu(bM).slice(0,e),i=Zu([...t,...t]),s=i.length/4,r=i.map((c,h)=>{let d=h%4,u=Math.floor(h/4),m=new Re;m.position.set(-2.4+d*1.6,1.06,(u-(s-1)/2)*1.85);let x=R(P.box(1.2,.06,1.55),"#c48ad8");m.add(x);let y=new Mt(new Gn(.75,.75),new Pn({map:Is("\u{1F43E}"),transparent:!0}));y.rotation.x=-Math.PI/2,y.position.y=.035,m.add(y);let p=new Mt(new Gn(1.14,1.49),new Pn({color:"#ffffff"}));p.rotation.x=Math.PI/2,p.position.y=-.035,m.add(p);let f=new Mt(new Gn(.95,.95),new Pn({map:Is(c),transparent:!0}));return f.rotation.x=Math.PI/2,f.rotation.z=Math.PI,f.position.y=-.04,m.add(f),m.traverse(g=>{g.userData.card=h}),Ci.add(m),{ic:c,g:m,faceBg:p,open:!1,done:!1,rot:0}}),a=R(P.box(1.42,.03,1.77),"#ffd23f",{cast:!1});Ci.add(a),_o(Ci,"memory")&&(I.x=4.4,I.z=1.2),k.x=-4.4,k.z=1.2;let l=Ce.innerWidth<Ce.innerHeight;ft.position.set(0,l?12:8,l?6.5:5.4),He={kind:"memory",cards:r,cursor:a,sel:0,first:null,lock:!1,moves:0,pairs:e,found:0,over:!1,update:wM,quit:()=>Kr("casa"),tap:c=>{$r.set(c.clientX/Ce.innerWidth*2-1,-(c.clientY/Ce.innerHeight)*2+1),qr.setFromCamera($r,ft);let h=qr.intersectObjects(r.map(d=>d.g),!0)[0];h&&h.object.userData.card!=null&&(He.sel=h.object.userData.card,cd(He.sel))},key:c=>{let h=r.length,d=He.sel;He.sel=c==="left"?(d+h-1)%h:c==="right"?(d+1)%h:c==="up"?(d+h-4)%h:(d+4)%h,lt("step")}}}function cd(n){let e=He;if(!e||e.kind!=="memory"||e.over||e.lock)return;let t=e.cards[n];if(!t||t.open||t.done)return;if(t.open=!0,lt("pop"),e.first===null){e.first=n;return}e.moves++;let i=e.cards[e.first];i.ic===t.ic?(i.done=t.done=!0,e.first=null,e.found++,i.faceBg.material=t.faceBg.material=new Pn({color:"#c8f5e6"}),lt("coin"),dogSound("yip",mt(),.5),I.mode="happy",I.modeT=1,it(Ci,"\u2B50",t.g.position.clone().setY(1.6),2,.5),e.found===e.pairs&&setTimeout(()=>{He===e&&TM()},700)):(e.lock=!0,setTimeout(()=>{He===e&&(i.open=t.open=!1,e.first=null,e.lock=!1)},900))}function TM(){let n=He,e=n.moves<=n.pairs+2?3:n.moves<=n.pairs*2?2:1,t=((today(Ne.pet).games||{}).memory||0)<3?e:0;yo(e,t,`<span>\u{1F0CF} ${n.moves}</span>`,i=>{i.bones+=t,today(i).play++,po(i,"memory"),applyFx(i,{felicidad:8+e*2}),addEvent(i,"\u{1F0CF}",`Jugaron a la memoria: ${n.pairs} parejas en ${n.moves} turnos.`),e===3&&addMilestone(i,"memory","\u{1F0CF}","\xA1Memoria perfecta!")},"casa")}function wM(n){let e=He,t=Ne.pet,i=1-Math.exp(-10*n);!e.over&&(we.a||we.jumpPress)&&cd(e.sel),e.over||ns(`<span>\u{1F0CF} ${"\u2B50".repeat(e.found)}${"\u2606".repeat(e.pairs-e.found)}</span>`);for(let a of e.cards){let o=a.open||a.done?Math.PI:0;a.rot+=(o-a.rot)*i,a.g.rotation.z=a.rot,a.g.position.y=1.06+Math.sin(a.rot)*.5}let s=e.cards[e.sel].g.position;e.cursor.position.set(s.x,1.02,s.z),e.cursor.visible=!e.over,ge.root.parent===Ci&&(ge.root.scale.setScalar(nr[stageOf(t.day).size]),ge.root.position.set(I.x,0,I.z),ge.root.rotation.y=-Math.PI/2,I.modeT>0&&(I.modeT-=n),Li(ge,n,{mode:t.asleep?"sleep":I.modeT>0?"happy":"sit",mood:"feliz"})),qe.root.position.set(k.x,0,k.z),qe.root.rotation.y=Math.PI/2,Yr(qe,n,!1,0),Zr(Ci,!1);let r=Ce.innerWidth<Ce.innerHeight;vo(0,r?12:8,r?6.5:5.4,0,.9,.3,n)}var xi=new En;function AM(){speak("\xA1Atrapa las pelotas antes de que caigan!"),zt(mo("\u{1F3BE}",[["\u2B05\uFE0F\u27A1\uFE0F","\u{1F436}"],["\u24B6 \u{1F446}","\u2934\uFE0F"],["\u{1F3BE}","\u{1F60B}"],["\u{1F7E1}","+3"]]),()=>Yn(RM))}function RM(){co(xi);let n=tr(xi);n.sun.position.set(3,12,8),n.sun.target.position.set(0,0,0),xi.background=new $e("#bfe6ff"),xi.fog=new Gi("#bfe6ff",25,60),xi.add(j(R(P.box(60,.2,30),"#8fd46e",{cast:!1,recv:!0}),0,-.1,-6));let e=ai(321);for(let t=-20;t<20;t+=2.5+e()*2){let i=Wl(e()<.4);i.position.set(t,0,-8-e()*6),xi.add(i)}_o(xi,"fetch"),qe.root.position.set(-8,0,-1.5),qe.root.rotation.y=.4,ft.position.set(0,3.2,11),He={kind:"fetch",lt:n,time:0,dur:30,score:0,balls:[],spawnT:1,x:0,y:0,vy:0,onGround:!0,buffer:-9,lastGround:0,face:1,over:!1,update:CM,tap:t=>{let i=t.clientX/Ce.innerWidth*2-1;He.target=i*7,He.buffer=He.time},quit:()=>Kr("parque")}}function CM(n){let e=He,t=Ne.pet,i=stageOf(t.day);if(!e.over){e.time+=n;let s=clamp(we.right-we.left+we.jx,-1,1);if(e.target!=null){let a=e.target-e.x;s=Math.abs(a)<.2?0:Math.sign(a),s||(e.target=null)}s&&(e.face=s),e.x=clamp(e.x+s*6.5*n,-7,7),(we.jumpPress||we.a)&&(e.buffer=e.time),e.onGround&&(e.lastGround=e.time),e.time-e.buffer<=.12&&e.time-e.lastGround<=.1&&(e.vy=7.4,e.buffer=-9,e.onGround=!1,lt("pop"));let r=we.aHeld||we.up||xo;if(e.vy-=(e.vy>0&&!r?34:22)*n,e.y+=e.vy*n,e.y<=0&&(e.y=0,e.vy=0,e.onGround=!0),e.spawnT-=n,e.spawnT<=0&&e.time<e.dur-1){let a=Math.random()<.5,o=Math.random()<.12,l=R(P.sph(.28,14,10),o?"#ffd23f":"#c8f040");xi.add(l),e.balls.push({m:l,x:a?-10:10,y:1.5+Math.random()*2,vx:(a?1:-1)*(2.2+Math.random()*3.5),vy:2.5+Math.random()*3,gold:o,bounced:!1}),e.spawnT=Math.max(.65,1.5-e.time/30)}for(let a of e.balls){if(a.vy-=7*n,a.x+=a.vx*n,a.y+=a.vy*n,!a.dead&&Math.abs(a.x-e.x)<.75&&a.y>e.y&&a.y<e.y+1.6){a.dead=!0;let o=a.gold?3:1;e.score+=o,lt("coin"),it(xi,a.gold?"\u2B50":"\u{1F3BE}",a.m.position,2,.45)}!a.dead&&a.y<=.28&&(a.bounced?a.dead=!0:(a.bounced=!0,a.vy=2,a.vx*=.5,a.y=.28)),Math.abs(a.x)>12&&(a.dead=!0),a.m.position.set(a.x,a.y,0),a.dead&&xi.remove(a.m)}if(e.balls=e.balls.filter(a=>!a.dead),ns(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F3BE} ${e.score}</span>`),e.time>=e.dur){let a=fetchOutcome(e.score);yo(a.stars,a.bones,a.extra,o=>fetchRewards(o,e.score),"parque")}}ge.root.scale.setScalar(nr[Math.max(1,i.size)]),ge.root.position.set(e.x,e.y,0),ge.root.rotation.y=e.face>0?Math.PI/2:-Math.PI/2,Li(ge,n,{mode:e.over?"happy":e.onGround?Math.abs(we.right-we.left)+Math.abs(we.jx)>.1||e.target!=null?"walk":"idle":"happy",speed:4,mood:"feliz"}),Yr(qe,n,!1,0),Zr(xi,!1),vo(e.x*.25,3.2,11,e.x*.25,1.2,0,n)}var Br=new En;function IM(){xt||(speak("\xA1Pasa la esponja por las manchas!"),zt(mo("\u{1F6C1}",[["\u{1F446}\u{1F9FD}","\u{1F7E4}"],["\u{1F7E4}","\u2728"]]),()=>Yn(PM)))}function PM(){co(Br),fo(Br,{floor:"#dff4f2",back:"#c9efe9",side:"#ffffff",rug:null});let n=new Re;n.add(j(R(P.box(3.2,.9,2),"#ffffff"),0,.45,0)),n.add(j(R(P.box(2.9,.1,1.7),"#bfe9ff",{cast:!1}),0,.88,0)),Br.add(n),_o(Br,"bath"),I.x=0,I.z=0,k.x=-2.6,k.z=1.8;let e=[];for(let i=0;i<8;i++){let s=yi("\u{1F7E4}",.32);s.position.set((Math.random()-.5)*.9,.7+Math.random()*.75,(Math.random()-.3)*1.2),ge.root.add(s),e.push({s,hp:1})}let t=document.createElement("div");t.className="sponge3",t.textContent="\u{1F9FD}",document.body.appendChild(t),ft.position.set(0,3.2,5.2),He={kind:"bath",time:0,dur:20,spots:e,total:e.length,cur:{x:Ce.innerWidth/2,y:Ce.innerHeight*.75},el:t,over:!1,update:LM,tap:i=>{He.cur.x=i.clientX,He.cur.y=i.clientY},quit:()=>{vm(),Kr("casa")}}}function vm(){let n=He;!n||n.kind!=="bath"||(n.el.remove(),n.spots.forEach(e=>ge.root.remove(e.s)))}var Pl=new D;function LM(n){let e=He,t=Ne.pet;if(!e.over){e.time+=n;let i=clamp(we.right-we.left+we.jx,-1,1),s=clamp(we.down-we.up+we.jz,-1,1);e.cur.x=clamp(e.cur.x+i*420*n,0,Ce.innerWidth),e.cur.y=clamp(e.cur.y+s*420*n,0,Ce.innerHeight),e.el.style.transform=`translate(${e.cur.x-24}px, ${e.cur.y-24}px)`;let r=!1;for(let o of e.spots){if(o.hp<=0)continue;o.s.getWorldPosition(Pl),Pl.project(ft);let l=(Pl.x+1)/2*Ce.innerWidth,c=(1-Pl.y)/2*Ce.innerHeight;Math.hypot(l-e.cur.x,c-e.cur.y)<46&&(o.hp-=n*1.6,r=!0,o.s.material.opacity=Math.max(.15,o.hp),o.hp<=0&&(o.s.visible=!1,lt("pop")))}r&&Math.random()<.3&&it(Br,"\u{1FAE7}",new D(I.x+(Math.random()-.5),1.3,I.z+.6),1,.4);let a=e.spots.filter(o=>o.hp>0).length;if(ns(`<span>\u23F1\uFE0F ${Math.max(0,Math.ceil(e.dur-e.time))}</span><span>\u{1F7E4} ${a}</span>`),a===0||e.time>=e.dur){let o=(e.total-a)/e.total,l=bathOutcome(t,o);vm(),yo(l.stars,l.bones,l.extra,c=>bathRewards(c,o),"casa")}}ge.root.scale.setScalar(nr[stageOf(t.day).size]),ge.root.position.set(I.x,.55,I.z),ge.root.rotation.y=0,Li(ge,n,{mode:e.over?"happy":"sit",mood:"feliz"}),qe.root.position.set(k.x,0,k.z),qe.root.rotation.y=.9,Yr(qe,n,!1,0),Zr(Br,!1),vo(0,3.2,5.2,0,1,0,n)}function DM(){if(!Ne)return;let n=Ne.pet,e=et,t=e&&e.target?e.target():null;zt(mapCardHTML());let i={b:{x0:Ae.x0,y0:Ae.z0,x1:Ae.x1,y1:Ae.z1},roads:Op,water:[{x:17,y:7,rx:4.6,ry:4.6},{x0:vt.x0,y0:vt.riverZ-1.5,x1:Ae.x1,y1:vt.riverZ+1.5},{x:-4,y:5,rx:1.4,ry:1.4}],zones:[{x0:Ae.x0,y0:Ae.z0,x1:-21,y1:-17.5,c:"#6fb35a"},{x0:-12,y0:-3,x1:4,y1:13,c:"#b6e39a"},{x0:wn.x0,y0:wn.z0,x1:wn.x1,y1:wn.z1,c:"#c8eea8"},{x0:vt.x0,y0:vt.z0,x1:Ae.x1,y1:Ae.z1,c:"#7fc46a"}],places:xn.map(a=>({id:a.id,x:a.x,y:a.z})),me:{x:k.x,y:k.z},luna:ge.root.parent===re?{x:I.x,y:I.z}:null,dogs:Wr.map(a=>({x:a.x,y:a.z,mood:a.def.mood})),items:Cs.map(a=>({x:a.x,y:a.z,icon:VALLEY_ITEMS[a.item].icon})),goal:t?{x:t.x,y:t.z}:null,goalPlace:e&&e.place},s=ae("#townmap"),r=drawTownMap(s,i,n);speak(MAP_SAY),s.addEventListener("click",a=>{let o=s.getBoundingClientRect(),l=(a.clientX-o.left)*s.width/o.width,c=(a.clientY-o.top)*s.height/o.height,h=r.find(d=>Math.hypot(d.x-l,d.y-c)<d.r);h&&(Jl(),NM(h.id))})}function NM(n){if(Et||He)return;he==="park"?es():he==="spot"?Xr():(he==="lake"||he==="forestmenu")&&(he="town",ae("#actions").hidden=!0);let e=ts.find(i=>i.pl.id===n);if(!e)return;if(he!=="town"){speak("Primero sal de aqu\xED y luego te llevo.");return}if(nn===e)return jl(e.pl);let t=Fl(k.x,k.z,e.x,e.z);t&&(Ot={pts:t,place:n,stuck:0,best:1/0},lt("pop"),speak(PLACE_UI_ALL[n].name))}function UM(){saveRoot();let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([Cloud.exportJSON(Ce.root)],{type:"application/json"})),n.download=`luna-partidas-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),1e3),bt("\u{1F4BE}","\u2714")}function FM(n){n.text().then(e=>{let t=migrate(JSON.parse(e));if(!validRoot(t))throw new Error("formato");zt(`<div class="result"><h2>\u{1F4BE} \xBFImportar?</h2><p class="fact">${t.profiles.length} partida(s). Reemplaza las de este navegador.</p><div class="quiz"><button class="go" data-imp="yes">\u{1F4BE} Importar</button><button class="go" data-imp="no">\u2716</button></div></div>`),Ka=t}).catch(()=>bt("\u26A0\uFE0F"))}var Ka=null,Ol=null;function OM(n){let e=Ce.root.profiles.find(i=>i.id===n);if(!e)return;Ol=n;let t=Cloud.linked(e)?`${e.name}: se quita de este aparato. Sigue guardada en la nube (\u2601\uFE0F ${e.cloud.user}).`:`${e.name}: se borrar\xE1 su Luna para siempre.`;zt(`<div class="result"><h2>\u{1F5D1}\uFE0F \xBFBorrar?</h2><p class="fact">${mn(t)}</p><div class="quiz"><button class="go danger" data-del3="yes">\u{1F5D1}\uFE0F Borrar</button><button class="go" data-del3="no">\u2716</button></div></div>`)}var ao=new Na;ao.connect(document);var ku=0,Hu=0,Gu=15,Vu=0,Mm=!1;Pi.setAnimationLoop(()=>{ao.update();let n=Math.min(Math.max(ao.getDelta(),0),.1);Ne&&Sm(n),Fp(n),Pi.render(Bt,ft)});var Dp=new Set(["town","park","lake","forestmenu","spot"]);function Sm(n){let e=Ne.pet;if(He){He.update(n),Music.setMode("play"),we.a=!1,we.jumpPress=!1;return}if(he==="forest"){let p=n;for(;p>1e-4&&qn&&!qn.over;){let f=Math.min(p,.016666666666666666);Ov(f),p-=f}Music.setMode("play"),we.a=!1;return}if(ku+=n,Hu+=n,ku>5){ku=0;let p=e.day;simulate(e,now(e)),e.day!==p&&(Bp(e),go(e)),Rt(),Hp(e),he==="home"&&(Ks(),sd(e)),he==="room"&&!$n&&em(),kv()}Hu>15&&(Hu=0,saveRoot()),Up(ge,e);let t=stageOf(e.day);he==="town"&&!e.asleep&&ge.root.parent!==re&&(Un(ge.root,re),I.x=k.x-Math.sin(k.ry)*1.3,I.z=k.z-Math.cos(k.ry)*1.3,I.ry=k.ry,I.path=null,gi=[{x:I.x,z:I.z},{x:k.x,z:k.z}],it(re,"\u{1F496}",new D(I.x,1.4,I.z),4),dogSound("happy",mt()),speak("\xA1Luna despert\xF3 y vino corriendo contigo!")),ge.root.scale.setScalar(nr[t.size]);let i=we.right-we.left+we.jx,s=we.down-we.up+we.jz,r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a=Dp.has(he),o=!1,l=!1,c=0,h=0,d=0,u=[2.4,3.2,4.2,4.8,5][t.size]*(e.stats.energia<15?.6:1),m=Math.max(3.4,u)*(e.stats.energia<15?.75:1)*(e.sick&&!e.sick.treated?.8:1);if(I.path){let p=I.path.x-I.x,f=I.path.z-I.z,g=Math.hypot(p,f);if(g<.08){I.ry=I.path.ry;let E=I.path.done;I.path=null,E&&E()}else{c=p/g,h=f/g,o=!0,d=u;let E=Math.min(u*n,g);I.x+=c*E,I.z+=h*E}}if(a){if(Math.hypot(i,s)>.15)Ot=null;else if(Ot&&he==="town"&&!xt){let[p,f]=Ot.pts[0],g=p-k.x,E=f-k.z,M=Math.hypot(g,E);if(Ot.stuck=M<Ot.best-.05?0:Ot.stuck+n,Ot.best=Math.min(Ot.best,M),M<.35){if(Ot.pts.shift(),Ot.best=1/0,!Ot.pts.length){let v=xn.find(w=>w.id===Ot.place);Ot=null,v&&jl(v)}}else Ot.stuck>1.5?Ot=null:(i=g/M,s=E/M)}if(!xt&&Math.hypot(i,s)>.15){l=!0;let p=k.x+i*m*n,f=k.z+s*m*n;Fn(p,k.z,.35)||(k.x=p),Fn(k.x,f,.35)||(k.z=f);let g=Math.atan2(i,s)-k.ry;if(g=Math.atan2(Math.sin(g),Math.cos(g)),k.ry+=g*(1-Math.exp(-14*n)),Tl+=m*n,Tl>=1){let E=today(e),M=Math.floor(Tl);Tl-=M,On("walk"),e.day>=3&&(E.walkTiles+=M,E.walkTiles>=WALK_GOAL&&!E.walk&&(E.walk=1,e.bones+=2,addEvent(e,"\u{1F5FA}\uFE0F","\xA1Exploraci\xF3n del d\xEDa completada!"),bt("\u{1F5FA}\uFE0F","\u2B50"),speak("\xA1Paseo completado!"),Rt()))}}if(!I.path&&!e.asleep&&!Et){let p=fv(n,m*1.15,t.size);p&&(o=!0,c=p.dx,h=p.dz,d=p.sp)}}else!I.path&&!e.asleep&&!xt&&Math.hypot(i,s)>.15&&(o=!0,c=i,h=s,d=u,I.x=clamp(I.x+i*u*n,-5.3,5.3),I.z=clamp(I.z+s*u*n,-2.4,3.6));if(o){let p=Math.atan2(c,h)-I.ry;p=Math.atan2(Math.sin(p),Math.cos(p)),I.ry+=p*(1-Math.exp(-14*n))}else if(a&&!e.asleep&&!Et&&Math.hypot(k.x-I.x,k.z-I.z)>.5){let p=Math.atan2(k.x-I.x,k.z-I.z)-I.ry;p=Math.atan2(Math.sin(p),Math.cos(p)),I.ry+=p*(1-Math.exp(-4*n))}I.modeT>0&&(I.modeT-=n,I.mode==="spin"&&(I.ry+=n*9),I.modeT<=0&&["happy","sit","paw","lie","spin"].includes(I.mode)&&(I.mode="idle")),he==="room"&&(rd(on[An],n),Ap(n)),he==="home"&&Ap(n);let x=e.asleep?"sleep":o?"walk":I.modeT>0||I.mode==="sleep"?I.mode:"idle";!e.asleep&&I.mode==="sleep"&&!xt&&I.modeT<=0&&(I.mode="idle"),Li(ge,n,{mode:Et?"lie":x,speed:o?d:0,eyesClosed:e.day<2,sad:["triste","enferma"].includes(moodOf(e)),mood:moodOf(e)}),ge.root.position.set(I.x,0,I.z),ge.root.rotation.y=I.ry,qe.root.position.set(k.x,0,k.z),qe.root.rotation.y=k.ry;let y=a&&e.day>=3&&!e.asleep&&!Et&&!I.path&&Math.hypot(k.x-I.x,k.z-I.z)<3.5;qe.leash=y,Yr(qe,n,l,m),Zr(Bt,y),e.asleep&&ge.root.parent===Bt&&Math.random()<n*.8&&it(Bt,"\u{1F4A4}",new D(I.x,1.2,I.z),1,.5),Vu+=n,Vu>.5&&(Vu=0,Cn(),cm()),Music.setMode(he==="home"||he==="room"?"home":Mm?"night":"day"),Dp.has(he)?zM(n,e,o,l):BM(n),we.a=!1}function zM(n,e,t,i){let s=ao.getElapsed();Qv(n,e,s);for(let l=ri.length-1;l>=0;l--){let c=ri[l];c.m.rotation.y+=n*2,c.m.position.y=.45+Math.sin(s*3+c.i)*.12,(Math.hypot(c.m.position.x-k.x,c.m.position.z-k.z)<.9||!Et&&ge.root.parent===re&&Math.hypot(c.m.position.x-I.x,c.m.position.z-I.z)<.9)&&(re.remove(c.m),ri.splice(l,1),e.mapBones.taken.push(c.i),e.bones++,it(re,"\u{1F9B4}",c.m.position,3,.5),lt("coin"),Math.random()<.5&&dogSound("yip",mt(),.6),Rt(),On("bone"),ri.length||addMilestone(e,"allbones","\u{1F50D}","Luna encontr\xF3 todos los huesos escondidos de un d\xEDa."))}if(At){At.cd-=n;let l=At.m.position.x-I.x,c=At.m.position.z-I.z,h=Math.hypot(l,c),d=.35+.6*ge.root.scale.x;h<d&&t&&(At.v.set(l/h,0,c/h).multiplyScalar(7),lt("pop"),At.cd<=0&&(At.cd=1,At.pushes++,it(re,"\u2B50",At.m.position,2,.4),At.pushes%6===0&&(applyFx(e,{felicidad:8,energia:-3}),today(e).play++,addEvent(e,"\u26BD","Jug\xF3 con la pelota en el parque."),bt("\u26BD","+\u{1F496}"),speak("\xA1Qu\xE9 divertido!"),Rt())));let u=At.m.position.clone().addScaledVector(At.v,n);Fn(u.x,u.z,.35)?At.v.multiplyScalar(-.6):At.m.position.copy(u),At.v.multiplyScalar(Math.exp(-1.6*n));let m=At.v.length();At.m.rotation.x+=At.v.z*n/.35,At.m.rotation.z-=At.v.x*n/.35,m<.05&&At.v.set(0,0,0)}if(Gu-=n,Gu<=0&&(Gu=22+Math.random()*25,!e.asleep)){let l=moodOf(e),c=l==="triste"||l==="enferma";dogSound(c?"sad":"bark",mt(),.45),c||(I.mode="happy",I.modeT=.8)}for(let l of no){l.userData.a+=n*.3;let c=l.userData.a;l.position.set(l.userData.cx+Math.cos(c)*l.userData.r,.2+Math.sin(s*3+c)*.04,l.userData.cz+Math.sin(c)*l.userData.r),l.rotation.y=-c}for(let l of zp)l.position.x+=l.userData.v*n,l.position.x>50&&(l.position.x=-50);if(he==="park"||he==="lake"||he==="forestmenu"||he==="spot"){let l=he==="park"?"parque":he==="lake"?"lago":he==="spot"?Xn:"bosque",c=ts.find(h=>h.pl.id===l);c&&Math.hypot(c.x-k.x,c.z-k.z)>(l==="perros"?11:7)&&!xt&&(he==="park"?es():he==="spot"?Xr():he="town",ae("#actions").hidden=!0)}nn=null;let r=needsOf(e);{let l=r.find(h=>h.level!=="info"),c=l&&!e.asleep&&!Et&&ge.root.parent===re&&Math.floor(s/2)%3!==0;Ki.visible=!!c,c&&(Ki.userData.icon!==l.icon&&(Ki.userData.icon=l.icon,Ki.material.map=Is(l.icon,!0),Ki.material.needsUpdate=!0),Ki.position.set(I.x+.5,1.9*ge.root.scale.x+.6,I.z))}for(let l of ts){let c=Math.hypot(l.x-k.x,l.z-k.z);c<2.2&&!Et&&(nn=l);let h="";if(e.day<(l.pl.minDay||1))h=c<9?"\u{1F512}":"";else{let d=r.find(u=>u.place===l.pl.id&&u.level!=="info");h=d?d.icon:""}h!==l.emoji&&(l.emoji=h,h&&(l.mk.material.map=Is(h,!0)),l.mk.material.needsUpdate=!0),l.mk.visible=!!h,l.mk.position.y=l.baseY+Math.sin(s*3)*.15}if(Ii=null,!nn&&!Et)if(Math.hypot(k.x-gn.chest[0],k.z-gn.chest[1])<1.8)Ii={icon:"\u{1F5DD}\uFE0F\u{1F4E6}",label:"Cofre",run:gM};else{let l=fm(2.6);l&&(Ii={icon:(l.def.mood==="grumpy"?"\u26A0\uFE0F ":l.def.owner&&!l.asked?"\u{1F64B} ":"\u{1F44B} ")+"\u{1F415}",label:l.def.name,warn:l.def.mood==="grumpy",run:()=>aM(l)})}we.a&&he==="town"&&(e.asleep&&am()?ho("wake"):nn?jl(nn.pl):Ii&&Ii.run()),he==="town"&&mv(),qv(s),rv();let a=Ce.innerWidth<Ce.innerHeight?1.35:1,o=new D(k.x,9.5*a,k.z+11*a);ft.position.lerp(o,1-Math.exp(-5*n)),ft.lookAt(ft.position.x,.6,ft.position.z-11*a),Qa.sun.position.set(k.x+8,16,k.z+6),Qa.sun.target.position.set(k.x,0,k.z)}function BM(n){let e=Ce.innerWidth<Ce.innerHeight?1.5:1;ft.position.lerp(new D(I.x*.3,6.5*e,8.5*e),1-Math.exp(-4*n)),ft.lookAt(I.x*.3,.6,-.4)}var Ji={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};Ce.addEventListener("keydown",n=>{if(n.target.tagName!=="INPUT"){if(!ae("#card3").hidden&&["Space","Enter","Escape"].includes(n.code)){n.preventDefault(),Jl();return}if(He&&!He.over&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),He.quit();return}if(Et&&["Escape","KeyX","Backspace"].includes(n.code)){n.preventDefault(),Gl(!1);return}if(He&&He.key&&Ji[n.code]){n.preventDefault(),!n.repeat&&!He.over&&He.key(Ji[n.code]);return}if($n&&Ji[n.code]){n.preventDefault(),n.repeat||Qp(Ji[n.code]);return}Ji[n.code]&&(we[Ji[n.code]]=1,n.preventDefault(),Ji[n.code]==="up"&&!n.repeat&&(we.jumpPress=!0)),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(n.preventDefault(),n.repeat||(we.a=!0,we.jumpPress=!0),we.aHeld=!0),["Escape","KeyX","Backspace"].includes(n.code)&&he==="home"&&ho("exit"),["Escape","KeyX","Backspace"].includes(n.code)&&he==="park"&&es(),["Escape","KeyX","Backspace"].includes(n.code)&&he==="room"&&!$n&&tm(An),["Escape","KeyX","Backspace"].includes(n.code)&&(he==="lake"||he==="forestmenu")&&(he="town",ae("#actions").hidden=!0),["Escape","KeyX","Backspace"].includes(n.code)&&he==="spot"&&Xr()}});Ce.addEventListener("keyup",n=>{Ji[n.code]&&(we[Ji[n.code]]=0),["Space","Enter","KeyE","KeyZ"].includes(n.code)&&(we.aHeld=!1)});Ce.addEventListener("blur",()=>{we.up=we.down=we.left=we.right=0});var oo=ae("#joy"),bm=ae("#knob"),ld=null,ju=null;oo.addEventListener("pointerdown",n=>{ld=n.pointerId,ju={x:n.clientX,y:n.clientY},oo.setPointerCapture(n.pointerId)});oo.addEventListener("pointermove",n=>{if(n.pointerId!==ld)return;let e=n.clientX-ju.x,t=n.clientY-ju.y,i=Math.hypot(e,t),s=50;i>s&&(e*=s/i,t*=s/i),bm.style.transform=`translate(${e}px, ${t}px)`,we.jx=e/s,we.jz=t/s});var Em=()=>{ld=null,we.jx=we.jz=0,bm.style.transform=""};oo.addEventListener("pointerup",Em);oo.addEventListener("pointercancel",Em);ae("#abtn").addEventListener("pointerdown",n=>{n.preventDefault(),we.a=!0,we.jumpPress=!0,we.aHeld=!0});ae("#abtn").addEventListener("pointerup",()=>{we.aHeld=!1});ae("#abtn").addEventListener("pointercancel",()=>{we.aHeld=!1});document.querySelectorAll("[data-arrow]").forEach(n=>n.addEventListener("pointerdown",e=>{e.preventDefault(),Qp(n.dataset.arrow)}));ed.addEventListener("pointerdown",n=>{xo=!0,He&&He.tap&&!He.over&&ae("#card3").hidden&&He.tap(n)});Ce.addEventListener("pointerup",()=>{xo=!1});Ce.addEventListener("pointercancel",()=>{xo=!1});var qr=new Ua,$r=new Ge;ed.addEventListener("click",n=>{!ge||He||Et||($r.set(n.clientX/Ce.innerWidth*2-1,-(n.clientY/Ce.innerHeight)*2+1),qr.setFromCamera($r,ft),qr.intersectObject(ge.root,!0).length&&(he==="home"?ho("pet"):he==="park"?(I.mode="happy",I.modeT=1.2,it(Bt,"\u{1F496}",new D(I.x,1.4,I.z),5),dogSound("happy",mt())):(I.mode="happy",I.modeT=1.2,it(Bt,"\u{1F496}",new D(I.x,1.4,I.z),5),dogSound("bark",mt()))))});document.addEventListener("click",n=>{let e=n.target.closest("button");if(!e)return;if(e.id==="mute"){zr=!zr;try{localStorage.setItem("luna.muted",zr?"1":"0")}catch{}zr&&"speechSynthesis"in Ce&&speechSynthesis.cancel(),Music.refresh(),Rt();return}if(e.id==="music"){Music.start(),Music.toggle(),Rt();return}if(e.id==="guide"){lm(),om();return}if(e.id==="guideSkip"){Gv();return}if(e.dataset.act==="help"){Xv();return}if(e.id==="diary3"){Bv();return}if(e.id==="map3"){DM();return}if(e.dataset.say!==void 0&&e.classList.contains("stk")){speak(e.dataset.say);return}if(e.dataset.imp){ae("#card3").hidden=!0,e.dataset.imp==="yes"&&Ka&&(Ka.profiles.forEach(i=>normalizePet(i.pet)),Ce.root=Ka,Ce.root.activeId=null,saveRoot(),ja(),bt("\u{1F4BE}","\u2714")),Ka=null;return}if(e.dataset.del3){ae("#card3").hidden=!0,e.dataset.del3==="yes"&&Ol&&(Ce.root.profiles=Ce.root.profiles.filter(i=>i.id!==Ol),saveRoot(),ja()),Ol=null;return}if(e.dataset.delslot){OM(e.dataset.delslot);return}if(e.dataset.export!==void 0){UM();return}if(e.dataset.import!==void 0){ae("#import3").click();return}if(e.dataset.quiz!==void 0){uM(e.dataset.quiz==="1");return}if(e.dataset.card){Jl();return}if(e.getAttribute("aria-disabled")==="true"){bt(e.querySelector(".badge")?.textContent||"\u270B"),speak(e.dataset.say);return}let t=e.dataset.act;if(t==="enter"){we.a=!0;return}if(t==="quitforest"){qn&&(qn.over=!0,ae("#forestHud").hidden=!0,sm());return}if(t==="quitgame"){He&&He.quit?He.quit():Et&&Gl(!1);return}if(e.dataset.avatar){document.querySelectorAll("[data-avatar]").forEach(i=>i.classList.toggle("sel",i===e));return}if(t&&(he==="park"||["stroll","kick","bench","closepark","agility","hide","fetch"].includes(t))?xv(t):t&&(t.startsWith("sp:")||t==="closespot")?lM(t):t&&he==="room"?Pv(t):t&&(he==="lake"||["ducks","fountain","splash","closelake","duckfeed"].includes(t))?Dv(t):t&&(t.startsWith("level:")||t==="closeforest")?Uv(t):t&&ho(t),e.dataset.pick){let i=Ce.root.profiles.find(s=>s.id===e.dataset.pick);e.disabled=!0,Cloud.refresh(i).finally(()=>ql(i))}e.dataset.cloud&&Cloud.openAccount(Ce.root.profiles.find(i=>i.id===e.dataset.cloud),ja),e.dataset.cloudlogin!==void 0&&Cloud.openLogin(ja),e.dataset.coat&&document.querySelectorAll("[data-coat]").forEach(i=>i.classList.toggle("sel",i===e))});ae("#new-form").addEventListener("submit",n=>{n.preventDefault();let e=ae("#new-name").value.trim().slice(0,16);if(!e){ae("#new-name").focus(),speak("Escribe tu nombre");return}let t=document.querySelector("[data-coat].sel")?.dataset.coat||"dorado",i=document.querySelector("[data-avatar].sel")?.dataset.avatar||"\u{1F9D2}",s={id:uid(),name:e,avatar:i,createdAt:Date.now(),pet:newPet(t)};Ce.root.profiles.push(s),saveRoot(),ql(s)});Ce.addEventListener("pointerdown",()=>Music.start());Ce.addEventListener("keydown",()=>Music.start());Ce.addEventListener("pagehide",()=>{Ne&&saveRoot()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne&&saveRoot()});nv();dv();vv();bv();Tv();Lv();dM();dm();pM();ft.position.set(-16,10,2);ft.lookAt(-16,.6,-9);function ja(){let n=Ce.root.profiles;ae("#pick-list").innerHTML=n.map(e=>`<div class="slot-row"><button class="slot" data-pick="${e.id}">${mn(e.avatar)} ${mn(e.name)} <span>${$l[stageOf(dayAt(e.pet,now(e.pet))).id]} \u25B6</span></button><button class="slot-cloud${Cloud.linked(e)?" on":""}" data-cloud="${e.id}" aria-label="${Cloud.linked(e)?"En la nube":"Guardar en la nube"}: ${mn(e.name)}">\u2601\uFE0F</button><button class="slot-cloud" data-delslot="${e.id}" aria-label="Borrar partida de ${mn(e.name)}">\u{1F5D1}\uFE0F</button></div>`).join(""),ae("#avatars3").innerHTML=Qy.map((e,t)=>`<button type="button" class="avatar ${t===0?"sel":""}" data-avatar="${e}" aria-label="Tu cara ${t+1}">${e}</button>`).join(""),ae("#coats").innerHTML=Object.entries(COATS).map(([e,t],i)=>`<button type="button" class="coat ${i===0?"sel":""}" data-coat="${e}" style="background:${t.fur}" aria-label="${t.name}"></button>`).join(""),ae("#voice-slot").innerHTML=voiceSettingsHTML()+'<p>Copia de seguridad de las partidas:</p><div class="row-btns3"><button class="slot" data-export>\u{1F4BE} Exportar</button><button class="slot" data-import>\u{1F4C2} Importar</button></div><input type="file" id="import3" accept="application/json,.json" hidden>',ae("#import3").addEventListener("change",e=>{let t=e.target.files[0];e.target.value="",t&&FM(t)}),ae("#picker").hidden=!1,ae("#hud").hidden=!0,ge||(ge=Vl({coat:"dorado",day:10,acc:{worn:"lazo"}}),re.add(ge.root))}var Wu=Ce.root.activeId&&Ce.root.profiles.find(n=>n.id===Ce.root.activeId);Wu?Cloud.refresh(Wu).finally(()=>ql(Wu)):ja();(function n(){Ne||(ge&&(ge.root.position.set(-16,0,-9),Li(ge,1/60,{mode:"happy"}),ft.position.set(-16,3,-3.5),ft.lookAt(-16,1,-9)),requestAnimationFrame(n))})();Object.assign(Ce,{renderer:Pi,town:re,home:St,luna:I,kidS:k,act:ho,startGame:ql,input:we,dbg3:{buildAgility3:gm,buildDucks3:xm,buildMemory3:ym,startHide3:um,memFlip3:cd,closeCard3:Jl,digTreasure3:hm,get mini(){return He},get hide3(){return Et},get treasure3(){return Nn},get where(){return he},guideGo3:om,idleNudge3:cm,treeList:nd,get autoWalk(){return Ot},get goal3(){return et},setIdle:n=>{eh=n}},step3d:(n,e)=>{Sm(n),Fp(n),e&&Pi.render(Bt,ft)}});})();
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
