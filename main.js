var nc="129",dh=0,ic=1,fh=2,rc=1,ph=2,mr=3,Qr=0,rt=1,Jr=2,sc=1,gr=0,_r=1,oc=2,ac=3,cc=4,mh=5,_i=100,gh=101,_h=102,lc=103,uc=104,vh=200,xh=201,yh=202,wh=203,hc=204,dc=205,bh=206,Mh=207,Sh=208,Th=209,Eh=210,Ah=0,Ch=1,Lh=2,so=3,Rh=4,Dh=5,Ph=6,Nh=7,fc=0,Ih=1,Fh=2,vr=0,Oh=1,kh=2,Vh=3,Bh=4,Uh=5,pc=300,oo=301,ao=302,mc=303,gc=304,co=306,lo=307,uo=1e3,Lt=1001,ho=1002,Ot=1003,_c=1004,vc=1005,rn=1006,zh=1007,Kr=1008,fo=1009,Gh=1010,Wh=1011,po=1012,Hh=1013,es=1014,Qn=1015,ts=1016,qh=1017,Xh=1018,jh=1019,ns=1020,Yh=1021,vi=1022,sn=1023,Zh=1024,$h=1025,mo=1026,go=1027,Qh=1028,Jh=1029,Kh=1030,ed=1031,td=1032,nd=1033,xc=33776,yc=33777,wc=33778,bc=33779,Mc=35840,Sc=35841,Tc=35842,Ec=35843,id=36196,Ac=37492,Cc=37496,rd=37808,sd=37809,od=37810,ad=37811,cd=37812,ld=37813,ud=37814,hd=37815,dd=37816,fd=37817,pd=37818,md=37819,gd=37820,_d=37821,vd=36492,xd=37840,yd=37841,wd=37842,bd=37843,Md=37844,Sd=37845,Td=37846,Ed=37847,Ad=37848,Cd=37849,Ld=37850,Rd=37851,Dd=37852,Pd=37853,Nd=0,xr=3e3,Lc=3001,Id=3007,Fd=3002,Od=3003,kd=3004,Vd=3005,Bd=3006,Ud=3200,zd=3201,Gd=0,Wd=1,_o=7680,Hd=519,vo=35044,xo=35048,Rc="300 es",Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},ct=[];for(let i=0;i<256;i++)ct[i]=(i<16?"0":"")+i.toString(16);var yo=Math.PI/180,Dc=180/Math.PI;function yr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toUpperCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function qd(i,e){return(i%e+e)%e}function wo(i,e,t){return(1-t)*i+t*e}function Pc(i){return(i&i-1)==0&&i!==0}function Xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}var Le=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};Le.prototype.isVector2=!0;var st=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=r[0],v=r[3],p=r[6],g=r[1],b=r[4],T=r[7],y=r[2],x=r[5],M=r[8];return s[0]=o*_+a*g+c*y,s[3]=o*v+a*b+c*x,s[6]=o*p+a*T+c*M,s[1]=l*_+u*g+h*y,s[4]=l*v+u*b+h*x,s[7]=l*p+u*T+h*M,s[2]=d*_+f*g+m*y,s[5]=d*v+f*b+m*x,s[8]=d*p+f*T+m*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,m=t*h+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+n*c,r[3]=t*o+n*l,r[6]=t*a+n*u,r[1]=-n*s+t*c,r[4]=-n*o+t*l,r[7]=-n*a+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};st.prototype.isMatrix3=!0;var xi,Kn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),xi.width=e.width,xi.height=e.height;let n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},jd=0,Rt=class extends Jn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Lt,r=Lt,s=rn,o=Kr,a=sn,c=fo,l=1,u=xr){super();Object.defineProperty(this,"id",{value:jd++}),this.uuid=yr(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=yr()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bo(r[o].image)):s.push(bo(r[o]))}else s=bo(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};Rt.DEFAULT_IMAGE=void 0;Rt.DEFAULT_MAPPING=pc;Rt.prototype.isTexture=!0;function bo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Kn.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var et=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,o=.01,a=.1,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],v=c[6],p=c[10];if(Math.abs(u-d)<o&&Math.abs(h-_)<o&&Math.abs(m-v)<o){if(Math.abs(u+d)<a&&Math.abs(h+_)<a&&Math.abs(m+v)<a&&Math.abs(l+f+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,T=(f+1)/2,y=(p+1)/2,x=(u+d)/4,M=(h+_)/4,A=(m+v)/4;return b>T&&b>y?b<o?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=x/n,s=M/n):T>y?T<o?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=x/r,s=A/r):y<o?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=M/s,r=A/s),this.set(n,r,s,t),this}let g=Math.sqrt((v-m)*(v-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(v-m)/g,this.y=(h-_)/g,this.z=(d-u)/g,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};et.prototype.isVector4=!0;var Cn=class extends Jn{constructor(e,t,n){super();this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t),n=n||{},this.texture=new Rt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.prototype.isWebGLRenderTarget=!0;var an=class{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let v=1-a,p=c*d+l*f+u*m+h*_,g=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let y=Math.sqrt(b),x=Math.atan2(y,p*g);v=Math.sin(v*x)/y,a=Math.sin(a*x)/y}let T=a*g;if(c=c*v+d*T,l=l*v+f*T,u=u*v+m*T,h=h*v+_*T,v===1-a){let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};an.prototype.isQuaternion=!0;var O=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,h=c*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};O.prototype.isVector3=!0;var Mo=new O,Nc=new an,Dt=class{constructor(e=new O(Infinity,Infinity,Infinity),t=new O(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new O),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new O),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox),So.applyMatrix4(e.matrixWorld),this.union(So));let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new O),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),is.subVectors(this.max,br),yi.subVectors(e.a,br),wi.subVectors(e.b,br),bi.subVectors(e.c,br),Ln.subVectors(wi,yi),Rn.subVectors(bi,wi),ei.subVectors(yi,bi);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-ei.z,ei.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,ei.z,0,-ei.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-ei.y,ei.x,0];return!To(t,yi,wi,bi,is)||(t=[1,0,0,0,1,0,0,0,1],!To(t,yi,wi,bi,is))?!1:(rs.crossVectors(Ln,Rn),t=[rs.x,rs.y,rs.z],To(t,yi,wi,bi,is))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new O),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Dt.prototype.isBox3=!0;var vn=[new O,new O,new O,new O,new O,new O,new O,new O],wr=new O,So=new Dt,yi=new O,wi=new O,bi=new O,Ln=new O,Rn=new O,ei=new O,br=new O,is=new O,rs=new O,ti=new O;function To(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ti.fromArray(i,s);let a=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),u=n.dot(ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Yd=new Dt,Ic=new O,Eo=new O,Ao=new O,Mr=class{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new O),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Dt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ao.subVectors(e,this.center);let t=Ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Ao.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return Eo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ic.copy(e.center).add(Eo)),this.expandByPoint(Ic.copy(e.center).sub(Eo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new O,Co=new O,ss=new O,Dn=new O,Lo=new O,os=new O,Ro=new O,Mi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new O),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new O),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Co.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Co);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=Dn.dot(this.direction),c=-Dn.dot(ss),l=Dn.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=s*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ss).multiplyScalar(d).add(Co),f}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,s){Lo.subVectors(t,e),os.subVectors(n,e),Ro.crossVectors(Lo,os);let o=this.direction.dot(Ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);let c=a*this.direction.dot(os.crossVectors(Dn,os));if(c<0)return null;let l=a*this.direction.dot(Lo.cross(Dn));if(l<0||c+l>o)return null;let u=-a*Dn.dot(Ro);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,c,l,u,h,d,f,m,_,v){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zd,e,$d)}lookAt(e,t,n){let r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Pn.crossVectors(n,Pt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Pn.crossVectors(n,Pt)),Pn.normalize(),as.crossVectors(Pt,Pn),r[0]=Pn.x,r[4]=as.x,r[8]=Pt.x,r[1]=Pn.y,r[5]=as.y,r[9]=Pt.y,r[2]=Pn.z,r[6]=as.z,r[10]=Pt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],v=n[10],p=n[14],g=n[3],b=n[7],T=n[11],y=n[15],x=r[0],M=r[4],A=r[8],E=r[12],k=r[1],V=r[5],R=r[9],C=r[13],P=r[2],N=r[6],D=r[10],U=r[14],H=r[3],j=r[7],Y=r[11],J=r[15];return s[0]=o*x+a*k+c*P+l*H,s[4]=o*M+a*V+c*N+l*j,s[8]=o*A+a*R+c*D+l*Y,s[12]=o*E+a*C+c*U+l*J,s[1]=u*x+h*k+d*P+f*H,s[5]=u*M+h*V+d*N+f*j,s[9]=u*A+h*R+d*D+f*Y,s[13]=u*E+h*C+d*U+f*J,s[2]=m*x+_*k+v*P+p*H,s[6]=m*M+_*V+v*N+p*j,s[10]=m*A+_*R+v*D+p*Y,s[14]=m*E+_*C+v*U+p*J,s[3]=g*x+b*k+T*P+y*H,s[7]=g*M+b*V+T*N+y*j,s[11]=g*A+b*R+T*D+y*Y,s[15]=g*E+b*C+T*U+y*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],v=e[11],p=e[15];return m*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+v*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],v=e[14],p=e[15],g=h*v*l-_*d*l+_*c*f-a*v*f-h*c*p+a*d*p,b=m*d*l-u*v*l-m*c*f+o*v*f+u*c*p-o*d*p,T=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,y=m*h*c-u*_*c-m*a*d+o*_*d+u*a*v-o*h*v,x=t*g+n*b+r*T+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=g*M,e[1]=(_*d*s-h*v*s-_*r*f+n*v*f+h*r*p-n*d*p)*M,e[2]=(a*v*s-_*c*s+_*r*l-n*v*l-a*r*p+n*c*p)*M,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*f-n*c*f)*M,e[4]=b*M,e[5]=(u*v*s-m*d*s+m*r*f-t*v*f-u*r*p+t*d*p)*M,e[6]=(m*c*s-o*v*s-m*r*l+t*v*l+o*r*p-t*c*p)*M,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*M,e[8]=T*M,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*M,e[10]=(o*_*s-m*a*s+m*n*l-t*_*l-o*n*p+t*a*p)*M,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*M,e[12]=y*M,e[13]=(u*_*r-m*h*r+m*n*d-t*_*d-u*n*v+t*h*v)*M,e[14]=(m*a*r-o*_*r-m*n*c+t*_*c+o*n*v-t*a*v)*M,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*M,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,m=s*h,_=o*u,v=o*h,p=a*h,g=c*l,b=c*u,T=c*h,y=n.x,x=n.y,M=n.z;return r[0]=(1-(_+p))*y,r[1]=(f+T)*y,r[2]=(m-b)*y,r[3]=0,r[4]=(f-T)*x,r[5]=(1-(d+p))*x,r[6]=(v+g)*x,r[7]=0,r[8]=(m+b)*M,r[9]=(v-g)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Si.set(r[0],r[1],r[2]).length(),o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);let l=1/s,u=1/o,h=1/a;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){let a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),h=(t+e)*c,d=(n+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Me.prototype.isMatrix4=!0;var Si=new O,Wt=new Me,Zd=new O(0,0,0),$d=new O(1,1,1),Pn=new O,as=new O,Pt=new O,Fc=new Me,Oc=new an,ni=class{constructor(e=0,t=0,n=0,r=ni.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new O(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ni.prototype.isEuler=!0;ni.DefaultOrder="XYZ";ni.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Do=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Qd=0,kc=new O,Ti=new an,yn=new Me,cs=new O,Sr=new O,Jd=new O,Kd=new an,Vc=new O(1,0,0),Bc=new O(0,1,0),Uc=new O(0,0,1),ef={type:"added"},zc={type:"removed"},$e=class extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:Qd++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DefaultUp.clone();let e=new O,t=new ni,n=new an,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new st}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=$e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Sr,cs,this.up):yn.lookAt(cs,Sr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(yn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ef)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(zc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new O),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new an),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Jd),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new O),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Kd,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new O),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};$e.DefaultUp=new O(0,1,0);$e.DefaultMatrixAutoUpdate=!0;$e.prototype.isObject3D=!0;var Po=new O,tf=new O,nf=new st,Ht=class{constructor(e=new O(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Po.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new O),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new O);let n=e.delta(Po),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new O),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nf.getNormalMatrix(e),r=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Ht.prototype.isPlane=!0;var qt=new O,wn=new O,No=new O,bn=new O,Ei=new O,Ai=new O,Gc=new O,Io=new O,Fo=new O,Oo=new O,tt=class{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new O),r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),wn.subVectors(n,t),No.subVectors(e,t);let o=qt.dot(qt),a=qt.dot(wn),c=qt.dot(No),l=wn.dot(wn),u=wn.dot(No),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new O),h===0)return s.set(-2,-1,-1);let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,bn),c.set(0,0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),wn.subVectors(e,t),qt.cross(wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),qt.cross(wn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new O),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ht),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return tt.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return tt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new O);let n=this.a,r=this.b,s=this.c,o,a;Ei.subVectors(r,n),Ai.subVectors(s,n),Io.subVectors(e,n);let c=Ei.dot(Io),l=Ai.dot(Io);if(c<=0&&l<=0)return t.copy(n);Fo.subVectors(e,r);let u=Ei.dot(Fo),h=Ai.dot(Fo);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ei,o);Oo.subVectors(e,s);let f=Ei.dot(Oo),m=Ai.dot(Oo);if(m>=0&&f<=m)return t.copy(s);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ai,a);let v=u*m-f*h;if(v<=0&&h-u>=0&&f-m>=0)return Gc.subVectors(s,r),a=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(Gc,a);let p=1/(v+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ei,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rf=0,ii=class extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:rf++}),this.uuid=yr(),this.name="",this.type="Material",this.fog=!0,this.blending=_r,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===sc;continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==Qr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ii.prototype.isMaterial=!0;var Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={h:0,s:0,l:0},ls={h:0,s:0,l:0};function ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Vo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Re=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=qd(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ko(s,r,e+1/3),this.g=ko(s,r,e),this.b=ko(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Wc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(ls);let n=wo(Xt.h,ls.h,t),r=wo(Xt.s,ls.s,t),s=wo(Xt.l,ls.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};Re.NAMES=Wc;Re.prototype.isColor=!0;Re.prototype.r=1;Re.prototype.g=1;Re.prototype.b=1;var ri=class extends ii{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this}};ri.prototype.isMeshBasicMaterial=!0;var Be=new O,us=new Le,Mt=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=vo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Re),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Le),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new O),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new et),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};Mt.prototype.isBufferAttribute=!0;var Uo=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},zo=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Nn=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};function Hc(i){if(i.length===0)return-Infinity;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}var sf=0,kt=new Me,Go=new $e,Ci=new O,Nt=new Dt,Tr=new Dt,ot=new O,lt=class extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:sf++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)>65535?zo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-Infinity,-Infinity,-Infinity),new O(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,Infinity);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Nt.min,Tr.min),Nt.expandByPoint(ot),ot.addVectors(Nt.max,Tr.max),Nt.expandByPoint(ot)):(Nt.expandByPoint(Tr.min),Nt.expandByPoint(Tr.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ot.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(e,l),ot.add(Ci)),r=Math.max(r,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Mt(new Float32Array(4*a),4));let c=t.tangent.array,l=[],u=[];for(let k=0;k<a;k++)l[k]=new O,u[k]=new O;let h=new O,d=new O,f=new O,m=new Le,_=new Le,v=new Le,p=new O,g=new O;function b(k,V,R){h.fromArray(r,k*3),d.fromArray(r,V*3),f.fromArray(r,R*3),m.fromArray(o,k*2),_.fromArray(o,V*2),v.fromArray(o,R*2),d.sub(h),f.sub(h),_.sub(m),v.sub(m);let C=1/(_.x*v.y-v.x*_.y);!isFinite(C)||(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(C),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(C),l[k].add(p),l[V].add(p),l[R].add(p),u[k].add(g),u[V].add(g),u[R].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let k=0,V=T.length;k<V;++k){let R=T[k],C=R.start,P=R.count;for(let N=C,D=C+P;N<D;N+=3)b(n[N+0],n[N+1],n[N+2])}let y=new O,x=new O,M=new O,A=new O;function E(k){M.fromArray(s,k*3),A.copy(M);let V=l[k];y.copy(V),y.sub(M.multiplyScalar(M.dot(V))).normalize(),x.crossVectors(A,V);let C=x.dot(u[k])<0?-1:1;c[k*4]=y.x,c[k*4+1]=y.y,c[k*4+2]=y.z,c[k*4+3]=C}for(let k=0,V=T.length;k<V;++k){let R=T[k],C=R.start,P=R.count;for(let N=C,D=C+P;N<D;N+=3)E(n[N+0]),E(n[N+1]),E(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let r in n){if(e.attributes[r]===void 0)continue;let o=n[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let h=0,d=l;h<u;h++,d++)o[d]=c[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let _=0,v=c.length;_<v;_++){f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new lt,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new lt().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};lt.prototype.isBufferGeometry=!0;var qc=new Me,Li=new Mi,Wo=new Mr,In=new O,Fn=new O,On=new O,Ho=new O,qo=new O,Xo=new O,hs=new O,ds=new O,fs=new O,ps=new Le,ms=new Le,gs=new Le,jo=new O,_s=new O,Vt=class extends $e{constructor(e=new lt,t=new ri){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),e.ray.intersectsSphere(Wo)===!1)||(qc.copy(s).invert(),Li.copy(e.ray).applyMatrix4(qc),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){let p=f[_],g=r[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(p.start+p.count,m.start+m.count);for(let y=b,x=T;y<x;y+=3){let M=a.getX(y),A=a.getX(y+1),E=a.getX(y+2);o=vs(this,g,e,Li,c,l,u,h,d,M,A,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,g=v;p<g;p+=3){let b=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);o=vs(this,r,e,Li,c,l,u,h,d,b,T,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){let p=f[_],g=r[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(p.start+p.count,m.start+m.count);for(let y=b,x=T;y<x;y+=3){let M=y,A=y+1,E=y+2;o=vs(this,g,e,Li,c,l,u,h,d,M,A,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,g=v;p<g;p+=3){let b=p,T=p+1,y=p+2;o=vs(this,r,e,Li,c,l,u,h,d,b,T,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Vt.prototype.isMesh=!0;function of(i,e,t,n,r,s,o,a){let c;if(e.side===rt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side!==Jr,a),c===null)return null;_s.copy(a),_s.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_s);return l<t.near||l>t.far?null:{distance:l,point:_s.clone(),object:i}}function vs(i,e,t,n,r,s,o,a,c,l,u,h){In.fromBufferAttribute(r,l),Fn.fromBufferAttribute(r,u),On.fromBufferAttribute(r,h);let d=i.morphTargetInfluences;if(e.morphTargets&&s&&d){hs.set(0,0,0),ds.set(0,0,0),fs.set(0,0,0);for(let m=0,_=s.length;m<_;m++){let v=d[m],p=s[m];v!==0&&(Ho.fromBufferAttribute(p,l),qo.fromBufferAttribute(p,u),Xo.fromBufferAttribute(p,h),o?(hs.addScaledVector(Ho,v),ds.addScaledVector(qo,v),fs.addScaledVector(Xo,v)):(hs.addScaledVector(Ho.sub(In),v),ds.addScaledVector(qo.sub(Fn),v),fs.addScaledVector(Xo.sub(On),v)))}In.add(hs),Fn.add(ds),On.add(fs)}i.isSkinnedMesh&&(i.boneTransform(l,In),i.boneTransform(u,Fn),i.boneTransform(h,On));let f=of(i,e,t,n,In,Fn,On,jo);if(f){a&&(ps.fromBufferAttribute(a,l),ms.fromBufferAttribute(a,u),gs.fromBufferAttribute(a,h),f.uv=tt.getUV(jo,In,Fn,On,ps,ms,gs,new Le)),c&&(ps.fromBufferAttribute(c,l),ms.fromBufferAttribute(c,u),gs.fromBufferAttribute(c,h),f.uv2=tt.getUV(jo,In,Fn,On,ps,ms,gs,new Le));let m={a:l,b:u,c:h,normal:new O,materialIndex:0};tt.getNormal(In,Fn,On,m.normal),f.face=m}return f}var xs=class extends lt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(h,2));function m(_,v,p,g,b,T,y,x,M,A,E){let k=T/M,V=y/A,R=T/2,C=y/2,P=x/2,N=M+1,D=A+1,U=0,H=0,j=new O;for(let Y=0;Y<D;Y++){let J=Y*V-C;for(let ae=0;ae<N;ae++){let $=ae*k-R;j[_]=$*g,j[v]=J*b,j[p]=P,l.push(j.x,j.y,j.z),j[_]=0,j[v]=0,j[p]=x>0?1:-1,u.push(j.x,j.y,j.z),h.push(ae/M),h.push(1-Y/A),U+=1}}for(let Y=0;Y<A;Y++)for(let J=0;J<M;J++){let ae=d+J+N*Y,$=d+J+N*(Y+1),_e=d+(J+1)+N*(Y+1),ve=d+(J+1)+N*Y;c.push(ae,$,ve),c.push($,_e,ve),H+=6}a.addGroup(f,H,E),f+=H,d+=U}}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pt(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let r in n)e[r]=n[r]}return e}var af={clone:Ri,merge:pt},cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends ii{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=cf,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};si.prototype.isShaderMaterial=!0;var Yo=class extends $e{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new O),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Yo.prototype.isCamera=!0;var St=class extends Yo{constructor(e=50,t=1,n=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};St.prototype.isPerspectiveCamera=!0;var Di=90,Pi=1,ys=class extends $e{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let r=new St(Di,Pi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(1,0,0)),this.add(r);let s=new St(Di,Pi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);let o=new St(Di,Pi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);let a=new St(Di,Pi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);let c=new St(Di,Pi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,1)),this.add(c);let l=new St(Di,Pi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u}},Er=class extends Rt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:oo,a=a!==void 0?a:vi,super(e,t,n,r,s,o,a,c,l,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Er.prototype.isCubeTexture=!0;var Zo=class extends Cn{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Er(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=sn,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xs(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rt,blending:gr});s.uniforms.tEquirect.value=t;let o=new Vt(r,s),a=t.minFilter;return t.minFilter===Kr&&(t.minFilter=rn),new ys(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};Zo.prototype.isWebGLCubeRenderTarget=!0;var Ni=new Mr,ws=new O,bs=class{constructor(e=new Ht,t=new Ht,n=new Ht,r=new Ht,s=new Ht,o=new Ht){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],f=n[9],m=n[10],_=n[11],v=n[12],p=n[13],g=n[14],b=n[15];return t[0].setComponents(a-r,h-c,_-d,b-v).normalize(),t[1].setComponents(a+r,h+c,_+d,b+v).normalize(),t[2].setComponents(a+s,h+l,_+f,b+p).normalize(),t[3].setComponents(a-s,h-l,_-f,b-p).normalize(),t[4].setComponents(a-o,h-u,_-m,b-g).normalize(),t[5].setComponents(a+o,h+u,_+m,b+g).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ws.x=r.normal.x>0?e.max.x:e.min.x,ws.y=r.normal.y>0?e.max.y:e.min.y,ws.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function uf(i,e){let t=e.isWebGL2,n=new WeakMap;function r(l,u){let h=l.array,d=l.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,d),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(m=5121),{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let d=u.array,f=u.updateRange;i.bindBuffer(h,l),f.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var Ar=class extends lt{constructor(e=1,t=1,n=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],v=[];for(let p=0;p<u;p++){let g=p*d-o;for(let b=0;b<l;b++){let T=b*h-s;m.push(T,-g,0),_.push(0,0,1),v.push(b/a),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<a;g++){let b=g+l*p,T=g+l*(p+1),y=g+1+l*(p+1),x=g+1+l*p;f.push(b,T,x),f.push(T,y,x)}this.setIndex(f),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(v,2))}},hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf="vec3 transformed = vec3( position );",_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Qf=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), rawDiffuseColor, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), rawDiffuseColor, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Mp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ip=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	#ifdef USE_TRANSMISSIONMAP
		totalTransmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSNMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;
	vec3 v = normalize( cameraPosition - pos );
	vec3 viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );
	vec3 f0 = vec3( pow( ior - 1.0, 2.0 ) / pow( ior + 1.0, 2.0 ) );
	vec3 f90 = vec3( 1.0 );
	vec3 f_transmission = totalTransmission * getIBLVolumeRefraction(
		normal, v, viewDir, roughnessFactor, diffuseColor.rgb, f0, f90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance);
	diffuseColor.rgb = mix( diffuseColor.rgb, f_transmission, totalTransmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
	varying vec4 vWorldPosition;
	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {
		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
		vec3 modelScale;
		modelScale.x = length(vec3(modelMatrix[0].xyz));
		modelScale.y = length(vec3(modelMatrix[1].xyz));
		modelScale.z = length(vec3(modelMatrix[2].xyz));
		return normalize(refractionVector) * thickness * modelScale;
	}
	float applyIorToRoughness(float roughness, float ior) {
		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
	}
	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {
		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);
		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;
	}
	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {
		if (attenuationDistance == 0.0) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;
			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;
		}
	}
	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, vec3 viewDir, float perceptualRoughness, vec3 baseColor, vec3 f0, vec3 f90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec3 attenuationColor, float attenuationDistance) {
		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);
		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);
		float NdotV = saturate(dot(n, viewDir));
		vec2 brdf = integrateSpecularBRDF(NdotV, perceptualRoughness);
		vec3 specularColor = f0 * brdf.x + f90 * brdf.y;
		return (1.0 - specularColor) * attenuatedColor * baseColor;
	}
#endif`,jp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,bm=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform vec3 attenuationColor;
	uniform float attenuationDistance;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <transmission_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef USE_TRANSMISSION
		float totalTransmission = transmission;
		float thicknessFactor = thickness;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	vec3 rawDiffuseColor = diffuseColor.rgb;
	#include <transmission_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_TRANSMISSION
	varying vec4 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
	vWorldPosition = worldPosition;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lm=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Se={alphamap_fragment:hf,alphamap_pars_fragment:df,alphatest_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:Tf,color_pars_vertex:Ef,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Df,displacementmap_vertex:Pf,emissivemap_fragment:Nf,emissivemap_pars_fragment:If,encodings_fragment:Ff,encodings_pars_fragment:Of,envmap_fragment:kf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Bf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Qf,envmap_vertex:zf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Hf,fog_pars_fragment:qf,gradientmap_pars_fragment:Xf,lightmap_fragment:jf,lightmap_pars_fragment:Yf,lights_lambert_vertex:Zf,lights_pars_begin:$f,lights_toon_fragment:Jf,lights_toon_pars_fragment:Kf,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:vp,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:wp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Tp,packing:Ep,premultiplied_alpha_fragment:Ap,project_vertex:Cp,dithering_fragment:Lp,dithering_pars_fragment:Rp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Ip,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:kp,skinning_pars_vertex:Vp,skinning_vertex:Bp,skinnormal_vertex:Up,specularmap_fragment:zp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Hp,transmission_fragment:qp,transmission_pars_fragment:Xp,uv_pars_fragment:jp,uv_pars_vertex:Yp,uv_vertex:Zp,uv2_pars_fragment:$p,uv2_pars_vertex:Qp,uv2_vertex:Jp,worldpos_vertex:Kp,background_frag:em,background_vert:tm,cube_frag:nm,cube_vert:im,depth_frag:rm,depth_vert:sm,distanceRGBA_frag:om,distanceRGBA_vert:am,equirect_frag:cm,equirect_vert:lm,linedashed_frag:um,linedashed_vert:hm,meshbasic_frag:dm,meshbasic_vert:fm,meshlambert_frag:pm,meshlambert_vert:mm,meshmatcap_frag:gm,meshmatcap_vert:_m,meshtoon_frag:vm,meshtoon_vert:xm,meshphong_frag:ym,meshphong_vert:wm,meshphysical_frag:bm,meshphysical_vert:Mm,normal_frag:Sm,normal_vert:Tm,points_frag:Em,points_vert:Am,shadow_frag:Cm,shadow_vert:Lm,sprite_frag:Rm,sprite_vert:Dm},ee={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new st},uv2Transform:{value:new st},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new st}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new st}}},cn={basic:{uniforms:pt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:pt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.fog,ee.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:pt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:pt([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:pt([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Re(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:pt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:pt([ee.points,ee.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:pt([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:pt([ee.common,ee.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:pt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Se.normal_vert,fragmentShader:Se.normal_frag},sprite:{uniforms:pt([ee.sprite,ee.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},cube:{uniforms:pt([ee.envmap,{opacity:{value:1}}]),vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:pt([ee.common,ee.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:pt([ee.lights,ee.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};cn.physical={uniforms:pt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Re(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};function Pm(i,e,t,n,r){let s=new Re(0),o=0,a,c,l=null,u=0,h=null;function d(m,_){let v=!1,p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));let g=i.xr,b=g.getSession&&g.getSession();b&&b.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===co)?(c===void 0&&(c=new Vt(new xs(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ri(cn.cube.uniforms),vertexShader:cn.cube.vertexShader,fragmentShader:cn.cube.fragmentShader,side:rt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||u!==p.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,l=p,u=p.version,h=i.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Vt(new Ar(2,2),new si({name:"BackgroundMaterial",uniforms:Ri(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||u!==p.version||h!==i.toneMapping)&&(a.material.needsUpdate=!0,l=p,u=p.version,h=i.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,_){t.buffers.color.setClear(m.r,m.g,m.b,_,r)}return{getClearColor:function(){return s},setClearColor:function(m,_=1){s.set(m),o=_,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:d}}function Nm(i,e,t,n){let r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=_(null),l=c;function u(C,P,N,D,U){let H=!1;if(o){let j=m(D,N,P);l!==j&&(l=j,d(l.object)),H=v(D,U),H&&p(D,U)}else{let j=P.wireframe===!0;(l.geometry!==D.id||l.program!==N.id||l.wireframe!==j)&&(l.geometry=D.id,l.program=N.id,l.wireframe=j,H=!0)}C.isInstancedMesh===!0&&(H=!0),U!==null&&t.update(U,34963),H&&(M(C,P,N,D),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function f(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C,P,N){let D=N.wireframe===!0,U=a[C.id];U===void 0&&(U={},a[C.id]=U);let H=U[P.id];H===void 0&&(H={},U[P.id]=H);let j=H[D];return j===void 0&&(j=_(h()),H[D]=j),j}function _(C){let P=[],N=[],D=[];for(let U=0;U<r;U++)P[U]=0,N[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:C,attributes:{},index:null}}function v(C,P){let N=l.attributes,D=C.attributes,U=0;for(let H in D){let j=N[H],Y=D[H];if(j===void 0||j.attribute!==Y||j.data!==Y.data)return!0;U++}return l.attributesNum!==U||l.index!==P}function p(C,P){let N={},D=C.attributes,U=0;for(let H in D){let j=D[H],Y={};Y.attribute=j,j.data&&(Y.data=j.data),N[H]=Y,U++}l.attributes=N,l.attributesNum=U,l.index=P}function g(){let C=l.newAttributes;for(let P=0,N=C.length;P<N;P++)C[P]=0}function b(C){T(C,0)}function T(C,P){let N=l.newAttributes,D=l.enabledAttributes,U=l.attributeDivisors;N[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),U[C]!==P&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,P),U[C]=P)}function y(){let C=l.newAttributes,P=l.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==C[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function x(C,P,N,D,U,H){n.isWebGL2===!0&&(N===5124||N===5125)?i.vertexAttribIPointer(C,P,N,U,H):i.vertexAttribPointer(C,P,N,D,U,H)}function M(C,P,N,D){if(n.isWebGL2===!1&&(C.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let U=D.attributes,H=N.getAttributes(),j=P.defaultAttributeValues;for(let Y in H){let J=H[Y];if(J>=0){let ae=U[Y];if(ae!==void 0){let $=ae.normalized,_e=ae.itemSize,ve=t.get(ae);if(ve===void 0)continue;let F=ve.buffer,be=ve.type,ce=ve.bytesPerElement;if(ae.isInterleavedBufferAttribute){let de=ae.data,pe=de.stride,Pe=ae.offset;de&&de.isInstancedInterleavedBuffer?(T(J,de.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=de.meshPerAttribute*de.count)):b(J),i.bindBuffer(34962,F),x(J,_e,be,$,pe*ce,Pe*ce)}else ae.isInstancedBufferAttribute?(T(J,ae.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)):b(J),i.bindBuffer(34962,F),x(J,_e,be,$,0,0)}else if(Y==="instanceMatrix"){let $=t.get(C.instanceMatrix);if($===void 0)continue;let _e=$.buffer,ve=$.type;T(J+0,1),T(J+1,1),T(J+2,1),T(J+3,1),i.bindBuffer(34962,_e),i.vertexAttribPointer(J+0,4,ve,!1,64,0),i.vertexAttribPointer(J+1,4,ve,!1,64,16),i.vertexAttribPointer(J+2,4,ve,!1,64,32),i.vertexAttribPointer(J+3,4,ve,!1,64,48)}else if(Y==="instanceColor"){let $=t.get(C.instanceColor);if($===void 0)continue;let _e=$.buffer,ve=$.type;T(J,1),i.bindBuffer(34962,_e),i.vertexAttribPointer(J,3,ve,!1,12,0)}else if(j!==void 0){let $=j[Y];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(J,$);break;case 3:i.vertexAttrib3fv(J,$);break;case 4:i.vertexAttrib4fv(J,$);break;default:i.vertexAttrib1fv(J,$)}}}}y()}function A(){V();for(let C in a){let P=a[C];for(let N in P){let D=P[N];for(let U in D)f(D[U].object),delete D[U];delete P[N]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;let P=a[C.id];for(let N in P){let D=P[N];for(let U in D)f(D[U].object),delete D[U];delete P[N]}delete a[C.id]}function k(C){for(let P in a){let N=a[P];if(N[C.id]===void 0)continue;let D=N[C.id];for(let U in D)f(D[U].object),delete D[U];delete N[C.id]}}function V(){R(),l!==c&&(l=c,d(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:b,disableUnusedAttributes:y}}function Im(i,e,t,n){let r=n.isWebGL2,s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Fm(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),f=i.getParameter(3379),m=i.getParameter(34076),_=i.getParameter(34921),v=i.getParameter(36347),p=i.getParameter(36348),g=i.getParameter(36349),b=d>0,T=o||e.has("OES_texture_float"),y=b&&T,x=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:y,maxSamples:x}}function Om(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Ht,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){let m=h.length!==0||d||n!==0||r;return r=d,t=u(h,f,0),n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!v)s?u(null):l();else{let g=s?0:n,b=g*4,T=p.clippingState||null;c.value=T,T=u(m,d,b,f);for(let y=0;y!==b;++y)T[y]=t[y];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,v=null;if(_!==0){if(v=c.value,m!==!0||v===null){let p=f+_*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<p)&&(v=new Float32Array(p));for(let b=0,T=f;b!==_;++b,T+=4)o.copy(h[b]).applyMatrix4(g,a),o.normal.toArray(v,T),v[T+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function km(i){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=oo:a===gc&&(o.mapping=ao),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===mc||a===gc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=i.getRenderTarget(),u=new Zo(c.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),i.setRenderTarget(l),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function Vm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bm(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let m in d)e.update(d[m],34962);let f=h.morphAttributes;for(let m in f){let _=f[m];for(let v=0,p=_.length;v<p;v++)e.update(_[v],34962)}}function l(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(f!==null){let g=f.array;_=f.version;for(let b=0,T=g.length;b<T;b+=3){let y=g[b+0],x=g[b+1],M=g[b+2];d.push(y,x,x,M,M,y)}}else{let g=m.array;_=m.version;for(let b=0,T=g.length/3-1;b<T;b+=3){let y=b+0,x=b+1,M=b+2;d.push(y,x,x,M,M,y)}}let v=new(Hc(d)>65535?zo:Uo)(d,1);v.version=_;let p=s.get(h);p&&e.remove(p),s.set(h,v)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Um(i,e,t,n){let r=n.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){i.drawElements(s,f,a,d*c),t.update(f,s,1)}function h(d,f,m){if(m===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,f,a,d*c,m),t.update(f,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gm(i,e){return i[0]-e[0]}function Wm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Hm(i){let e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,u=l===void 0?0:l.length,h=e[o.id];if(h===void 0){h=[];for(let v=0;v<u;v++)h[v]=[v,0];e[o.id]=h}for(let v=0;v<u;v++){let p=h[v];p[0]=v,p[1]=l[v]}h.sort(Wm);for(let v=0;v<8;v++)v<u&&h[v][1]?(n[v][0]=h[v][0],n[v][1]=h[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(Gm);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let p=n[v],g=p[0],b=p[1];g!==Number.MAX_SAFE_INTEGER&&b?(d&&o.getAttribute("morphTarget"+v)!==d[g]&&o.setAttribute("morphTarget"+v,d[g]),f&&o.getAttribute("morphNormal"+v)!==f[g]&&o.setAttribute("morphNormal"+v,f[g]),t[v]=b,m+=b):(d&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),f&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),t[v]=0)}let _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",t)}return{update:r}}function qm(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var $o=class extends Rt{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};$o.prototype.isDataTexture2DArray=!0;var Qo=class extends Rt{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Qo.prototype.isDataTexture3D=!0;var jc=new Rt,Xm=new $o,jm=new Qo,Yc=new Er,Zc=[],$c=[],Qc=new Float32Array(16),Jc=new Float32Array(9),Kc=new Float32Array(4);function Ii(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(vt(t,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),mt(t,n)}}function Km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(vt(t,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),mt(t,n)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(vt(t,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),mt(t,n)}}function tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ng(i,e){let t=this.cache;vt(t,e)||(i.uniform2iv(this.addr,e),mt(t,e))}function ig(i,e){let t=this.cache;vt(t,e)||(i.uniform3iv(this.addr,e),mt(t,e))}function rg(i,e){let t=this.cache;vt(t,e)||(i.uniform4iv(this.addr,e),mt(t,e))}function sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;vt(t,e)||(i.uniform2uiv(this.addr,e),mt(t,e))}function ag(i,e){let t=this.cache;vt(t,e)||(i.uniform3uiv(this.addr,e),mt(t,e))}function cg(i,e){let t=this.cache;vt(t,e)||(i.uniform4uiv(this.addr,e),mt(t,e))}function lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||jc,r)}function ug(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jm,r)}function hg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||Yc,r)}function dg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xm,r)}function fg(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return $m;case 35666:return Qm;case 35674:return Jm;case 35675:return Km;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,e){i.uniform1fv(this.addr,e)}function mg(i,e){let t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function gg(i,e){let t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function _g(i,e){let t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){let t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xg(i,e){let t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yg(i,e){let t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wg(i,e){i.uniform1iv(this.addr,e)}function bg(i,e){i.uniform2iv(this.addr,e)}function Mg(i,e){i.uniform3iv(this.addr,e)}function Sg(i,e){i.uniform4iv(this.addr,e)}function Tg(i,e){i.uniform1uiv(this.addr,e)}function Eg(i,e){i.uniform2uiv(this.addr,e)}function Ag(i,e){i.uniform3uiv(this.addr,e)}function Cg(i,e){i.uniform4uiv(this.addr,e)}function Lg(i,e,t){let n=e.length,r=el(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||jc,r[s])}function Rg(i,e,t){let n=e.length,r=el(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Yc,r[s])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return wg;case 35667:case 35671:return bg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Tg;case 36294:return Eg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35680:case 36300:case 36308:case 36293:return Rg}}function Pg(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=fg(e.type)}function tl(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Dg(e.type)}tl.prototype.updateCache=function(i){let e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),mt(e,i)};function nl(i){this.id=i,this.seq=[],this.map={}}nl.prototype.setValue=function(i,e,t){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(i,e[o.id],t)}};var Jo=/(\w+)(\])?(\[|\.)?/g;function il(i,e){i.seq.push(e),i.map[e.id]=e}function Ng(i,e,t){let n=i.name,r=n.length;for(Jo.lastIndex=0;;){let s=Jo.exec(n),o=Jo.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){il(t,l===void 0?new Pg(a,i,e):new tl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new nl(a),il(t,h)),t=h}}}function kn(i,e){this.seq=[],this.map={};let t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){let r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);Ng(r,s,this)}}kn.prototype.setValue=function(i,e,t,n){let r=this.map[e];r!==void 0&&r.setValue(i,t,n)};kn.prototype.setOptional=function(i,e,t){let n=e[t];n!==void 0&&this.setValue(i,t,n)};kn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};kn.seqWithValue=function(i,e){let t=[];for(let n=0,r=i.length;n!==r;++n){let s=i[n];s.id in e&&t.push(s)}return t};function rl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ig=0;function Fg(i){let e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function sl(i){switch(i){case xr:return["Linear","( value )"];case Lc:return["sRGB","( value )"];case Fd:return["RGBE","( value )"];case kd:return["RGBM","( value, 7.0 )"];case Vd:return["RGBM","( value, 16.0 )"];case Bd:return["RGBD","( value, 256.0 )"];case Id:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Od:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ol(i,e,t){let n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=i.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+Fg(s)}function Cr(i,e){let t=sl(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Og(i,e){let t=sl(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kg(i,e){let t;switch(e){case Oh:t="Linear";break;case kh:t="Reinhard";break;case Vh:t="OptimizedCineon";break;case Bh:t="ACESFilmic";break;case Uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vg(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission>0)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function Bg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){let t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r).name;t[o]=i.getAttribLocation(e,o)}return t}function Lr(i){return i!==""}function al(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(zg,Gg)}function Gg(i,e){let t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ko(t)}var Wg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Hg,ll).replace(Wg,qg)}function qg(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ll(i,e,t,n)}function ll(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case co:case lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ao:case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function Zg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Fh:e="ENVMAP_BLENDING_ADD";break}return e}function $g(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Xg(t),l=jg(t),u=Yg(t),h=Zg(t),d=i.gammaFactor>0?i.gammaFactor:1,f=t.isWebGL2?"":Vg(t),m=Bg(s),_=r.createProgram(),v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[m].filter(Lr).join(`
`),v.length>0&&(v+=`
`),p=[f,m].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(v=[hl(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[f,hl(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vr?"#define TONE_MAPPING":"",t.toneMapping!==vr?Se.tonemapping_pars_fragment:"",t.toneMapping!==vr?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Se.encodings_pars_fragment,t.map?Cr("mapTexelToLinear",t.mapEncoding):"",t.matcap?Cr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Cr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Cr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Cr("lightMapTexelToLinear",t.lightMapEncoding):"",Og("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ko(o),o=al(o,t),o=cl(o,t),a=Ko(a),a=al(a,t),a=cl(a,t),o=ul(o),a=ul(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Rc?"":"out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=g+v+o,T=g+p+a,y=rl(r,35633,b),x=rl(r,35632,T);if(r.attachShader(_,y),r.attachShader(_,x),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){let E=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(y).trim(),V=r.getShaderInfoLog(x).trim(),R=!0,C=!0;if(r.getProgramParameter(_,35714)===!1){R=!1;let P=ol(r,y,"vertex"),N=ol(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(_,35715),"gl.getProgramInfoLog",E,P,N)}else E!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",E):(k===""||V==="")&&(C=!1);C&&(this.diagnostics={runnable:R,programLog:E,vertexShader:{log:k,prefix:v},fragmentShader:{log:V,prefix:p}})}r.deleteShader(y),r.deleteShader(x);let M;this.getUniforms=function(){return M===void 0&&(M=new kn(r,_)),M};let A;return this.getAttributes=function(){return A===void 0&&(A=Ug(r,_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Ig++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=x,this}function Qg(i,e,t,n,r,s){let o=[],a=n.isWebGL2,c=n.logarithmicDepthBuffer,l=n.floatVertexTextures,u=n.maxVertexUniforms,h=n.vertexTextures,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function _(x){let A=x.skeleton.bones;if(l)return 1024;{let k=Math.floor((u-20)/4),V=Math.min(k,A.length);return V<A.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+A.length+" bones. This GPU supports "+V+"."),0):V}}function v(x){let M;return x&&x.isTexture?M=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),M=x.texture.encoding):M=xr,M}function p(x,M,A,E,k){let V=E.fog,R=x.isMeshStandardMaterial?E.environment:null,C=e.get(x.envMap||R),P=f[x.type],N=k.isSkinnedMesh?_(k):0;x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let D,U;if(P){let Y=cn[P];D=Y.vertexShader,U=Y.fragmentShader}else D=x.vertexShader,U=x.fragmentShader;let H=i.getRenderTarget();return{isWebGL2:a,shaderID:P,shaderName:x.type,vertexShader:D,fragmentShader:U,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:h,outputEncoding:H!==null?v(H.texture):i.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!C,envMapMode:C&&C.mapping,envMapEncoding:v(C),envMapCubeUV:!!C&&(C.mapping===co||C.mapping===lo),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Wd,tangentSpaceNormalMap:x.normalMapType===Gd,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmission:!!x.transmission,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&k.geometry&&k.geometry.attributes.color&&k.geometry.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmission||!!x.transmissionMap||!!x.thicknessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmission||!!x.transmissionMap||!!x.thicknessMap)&&!!x.displacementMap,fog:!!V,useFog:x.fog,fogExp2:V&&V.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:k.isSkinnedMesh===!0&&N>0,maxBones:N,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:vr,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===Jr,flipSided:x.side===rt,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function g(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.fragmentShader),M.push(x.vertexShader)),x.defines!==void 0)for(let A in x.defines)M.push(A),M.push(x.defines[A]);if(x.isRawShaderMaterial===!1){for(let A=0;A<m.length;A++)M.push(x[m[A]]);M.push(i.outputEncoding),M.push(i.gammaFactor)}return M.push(x.customProgramCacheKey),M.join()}function b(x){let M=f[x.type],A;if(M){let E=cn[M];A=af.clone(E.uniforms)}else A=x.uniforms;return A}function T(x,M){let A;for(let E=0,k=o.length;E<k;E++){let V=o[E];if(V.cacheKey===M){A=V,++A.usedTimes;break}}return A===void 0&&(A=new $g(i,M,x,r),o.push(A)),A}function y(x){if(--x.usedTimes==0){let M=o.indexOf(x);o[M]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:p,getProgramCacheKey:g,getUniforms:b,acquireProgram:T,releaseProgram:y,programs:o}}function Jg(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.program!==e.program?i.program.id-e.program.id:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fl(i){let e=[],t=0,n=[],r=[],s=[],o={id:-1};function a(){t=0,n.length=0,r.length=0,s.length=0}function c(f,m,_,v,p,g){let b=e[t],T=i.get(_);return b===void 0?(b={id:f.id,object:f,geometry:m,material:_,program:T.program||o,groupOrder:v,renderOrder:f.renderOrder,z:p,group:g},e[t]=b):(b.id=f.id,b.object=f,b.geometry=m,b.material=_,b.program=T.program||o,b.groupOrder=v,b.renderOrder=f.renderOrder,b.z=p,b.group=g),t++,b}function l(f,m,_,v,p,g){let b=c(f,m,_,v,p,g);_.transmission>0?r.push(b):_.transparent===!0?s.push(b):n.push(b)}function u(f,m,_,v,p,g){let b=c(f,m,_,v,p,g);_.transmission>0?r.unshift(b):_.transparent===!0?s.unshift(b):n.unshift(b)}function h(f,m){n.length>1&&n.sort(f||Kg),r.length>1&&r.sort(m||dl),s.length>1&&s.sort(m||dl)}function d(){for(let f=t,m=e.length;f<m;f++){let _=e[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:n,transmissive:r,transparent:s,init:a,push:l,unshift:u,finish:d,sort:h}}function e_(i){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new fl(i),e.set(r,[o])):s>=e.get(r).length?(o=new fl(i),e.get(r).push(o)):o=e.get(r)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function t_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function n_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var i_=0;function r_(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function s_(i,e){let t=new t_,n=n_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new O);let s=new O,o=new Me,a=new Me;function c(u){let h=0,d=0,f=0;for(let M=0;M<9;M++)r.probe[M].set(0,0,0);let m=0,_=0,v=0,p=0,g=0,b=0,T=0,y=0;u.sort(r_);for(let M=0,A=u.length;M<A;M++){let E=u[M],k=E.color,V=E.intensity,R=E.distance,C=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(E.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(E.sh.coefficients[P],V);else if(E.isDirectionalLight){let P=t.get(E);if(P.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let N=E.shadow,D=n.get(E);D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,r.directionalShadow[m]=D,r.directionalShadowMap[m]=C,r.directionalShadowMatrix[m]=E.shadow.matrix,b++}r.directional[m]=P,m++}else if(E.isSpotLight){let P=t.get(E);if(P.position.setFromMatrixPosition(E.matrixWorld),P.color.copy(k).multiplyScalar(V),P.distance=R,P.coneCos=Math.cos(E.angle),P.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),P.decay=E.decay,E.castShadow){let N=E.shadow,D=n.get(E);D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,r.spotShadow[v]=D,r.spotShadowMap[v]=C,r.spotShadowMatrix[v]=E.shadow.matrix,y++}r.spot[v]=P,v++}else if(E.isRectAreaLight){let P=t.get(E);P.color.copy(k).multiplyScalar(V),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),r.rectArea[p]=P,p++}else if(E.isPointLight){let P=t.get(E);if(P.color.copy(E.color).multiplyScalar(E.intensity),P.distance=E.distance,P.decay=E.decay,E.castShadow){let N=E.shadow,D=n.get(E);D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=C,r.pointShadowMatrix[_]=E.shadow.matrix,T++}r.point[_]=P,_++}else if(E.isHemisphereLight){let P=t.get(E);P.skyColor.copy(E.color).multiplyScalar(V),P.groundColor.copy(E.groundColor).multiplyScalar(V),r.hemi[g]=P,g++}}p>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ee.LTC_FLOAT_1,r.rectAreaLTC2=ee.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ee.LTC_HALF_1,r.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;let x=r.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==b||x.numPointShadows!==T||x.numSpotShadows!==y)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=p,r.point.length=_,r.hemi.length=g,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=y,x.directionalLength=m,x.pointLength=_,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=b,x.numPointShadows=T,x.numSpotShadows=y,r.version=i_++)}function l(u,h){let d=0,f=0,m=0,_=0,v=0,p=h.matrixWorldInverse;for(let g=0,b=u.length;g<b;g++){let T=u[g];if(T.isDirectionalLight){let y=r.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(T.isSpotLight){let y=r.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){let y=r.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(T.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let y=r.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let y=r.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),v++}}}return{setup:c,setupView:l,state:r}}function pl(i,e){let t=new s_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(){t.setup(n)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function o_(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new pl(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new pl(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ea=class extends ii{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Ud,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};ea.prototype.isMeshDepthMaterial=!0;var ta=class extends ii{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ta.prototype.isMeshDistanceMaterial=!0;var a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function ml(i,e,t){let n=new bs,r=new Le,s=new Le,o=new et,a=[],c=[],l={},u=t.maxTextureSize,h={0:rt,1:Qr,2:Jr},d=new si({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:c_,fragmentShader:a_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new lt;m.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Vt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc,this.render=function(x,M,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||x.length===0)return;let E=i.getRenderTarget(),k=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),R=i.state;R.setBlending(gr),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let C=0,P=x.length;C<P;C++){let N=x[C],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let U=D.getFrameExtents();if(r.multiply(U),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===mr){let j={minFilter:rn,magFilter:rn,format:sn};D.map=new Cn(r.x,r.y,j),D.map.texture.name=N.name+".shadowMap",D.mapPass=new Cn(r.x,r.y,j),D.camera.updateProjectionMatrix()}if(D.map===null){let j={minFilter:Ot,magFilter:Ot,format:sn};D.map=new Cn(r.x,r.y,j),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let H=D.getViewportCount();for(let j=0;j<H;j++){let Y=D.getViewport(j);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),R.viewport(o),D.updateMatrices(N,j),n=D.getFrustum(),y(M,A,D.camera,N,this.type)}!D.isPointLightShadow&&this.type===mr&&p(D,A),D.needsUpdate=!1}v.needsUpdate=!1,i.setRenderTarget(E,k,V)};function p(x,M){let A=e.update(_);d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(M,null,A,d,_,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(M,null,A,f,_,null)}function g(x){let M=x<<0,A=a[M];return A===void 0&&(A=new ea({depthPacking:zd,morphTargets:x}),a[M]=A),A}function b(x){let M=x<<0,A=c[M];return A===void 0&&(A=new ta({morphTargets:x}),c[M]=A),A}function T(x,M,A,E,k,V,R){let C=null,P=g,N=x.customDepthMaterial;if(E.isPointLight===!0&&(P=b,N=x.customDistanceMaterial),N===void 0){let D=!1;A.morphTargets===!0&&(D=M.morphAttributes&&M.morphAttributes.position&&M.morphAttributes.position.length>0),C=P(D)}else C=N;if(i.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){let D=C.uuid,U=A.uuid,H=l[D];H===void 0&&(H={},l[D]=H);let j=H[U];j===void 0&&(j=C.clone(),H[U]=j),C=j}return C.visible=A.visible,C.wireframe=A.wireframe,R===mr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(E.matrixWorld),C.nearDistance=k,C.farDistance=V),C}function y(x,M,A,E,k){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&k===mr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);let C=e.update(x),P=x.material;if(Array.isArray(P)){let N=C.groups;for(let D=0,U=N.length;D<U;D++){let H=N[D],j=P[H.materialIndex];if(j&&j.visible){let Y=T(x,C,j,E,A.near,A.far,k);i.renderBufferDirect(A,null,C,Y,x,H)}}}else if(P.visible){let N=T(x,C,P,E,A.near,A.far,k);i.renderBufferDirect(A,null,C,N,x,null)}}let R=x.children;for(let C=0,P=R.length;C<P;C++)y(R[C],M,A,E,k)}}function l_(i,e,t){let n=t.isWebGL2;function r(){let I=!1,Q=new et,q=null,fe=new et(0,0,0,0);return{setMask:function(ne){q!==ne&&!I&&(i.colorMask(ne,ne,ne,ne),q=ne)},setLocked:function(ne){I=ne},setClear:function(ne,We,ht,dt,jn){jn===!0&&(ne*=dt,We*=dt,ht*=dt),Q.set(ne,We,ht,dt),fe.equals(Q)===!1&&(i.clearColor(ne,We,ht,dt),fe.copy(Q))},reset:function(){I=!1,q=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,Q=null,q=null,fe=null;return{setTest:function(ne){ne?_e(2929):ve(2929)},setMask:function(ne){Q!==ne&&!I&&(i.depthMask(ne),Q=ne)},setFunc:function(ne){if(q!==ne){if(ne)switch(ne){case Ah:i.depthFunc(512);break;case Ch:i.depthFunc(519);break;case Lh:i.depthFunc(513);break;case so:i.depthFunc(515);break;case Rh:i.depthFunc(514);break;case Dh:i.depthFunc(518);break;case Ph:i.depthFunc(516);break;case Nh:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);q=ne}},setLocked:function(ne){I=ne},setClear:function(ne){fe!==ne&&(i.clearDepth(ne),fe=ne)},reset:function(){I=!1,Q=null,q=null,fe=null}}}function o(){let I=!1,Q=null,q=null,fe=null,ne=null,We=null,ht=null,dt=null,jn=null;return{setTest:function(Ye){I||(Ye?_e(2960):ve(2960))},setMask:function(Ye){Q!==Ye&&!I&&(i.stencilMask(Ye),Q=Ye)},setFunc:function(Ye,_n,Gt){(q!==Ye||fe!==_n||ne!==Gt)&&(i.stencilFunc(Ye,_n,Gt),q=Ye,fe=_n,ne=Gt)},setOp:function(Ye,_n,Gt){(We!==Ye||ht!==_n||dt!==Gt)&&(i.stencilOp(Ye,_n,Gt),We=Ye,ht=_n,dt=Gt)},setLocked:function(Ye){I=Ye},setClear:function(Ye){jn!==Ye&&(i.clearStencil(Ye),jn=Ye)},reset:function(){I=!1,Q=null,q=null,fe=null,ne=null,We=null,ht=null,dt=null,jn=null}}}let a=new r,c=new s,l=new o,u={},h=null,d={},f=null,m=!1,_=null,v=null,p=null,g=null,b=null,T=null,y=null,x=!1,M=null,A=null,E=null,k=null,V=null,R=i.getParameter(35661),C=!1,P=0,N=i.getParameter(7938);N.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(N)[1]),C=P>=1):N.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),C=P>=2);let D=null,U={},H=i.getParameter(3088),j=i.getParameter(2978),Y=new et().fromArray(H),J=new et().fromArray(j);function ae(I,Q,q){let fe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(I,ne),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let We=0;We<q;We++)i.texImage2D(Q+We,0,6408,1,1,0,6408,5121,fe);return ne}let $={};$[3553]=ae(3553,3553,1),$[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_e(2929),c.setFunc(so),ze(!1),bt(ic),_e(2884),Pe(gr);function _e(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ve(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function F(I){I!==h&&(i.bindFramebuffer(36160,I),h=I)}function be(I,Q){return Q===null&&h!==null&&(Q=h),d[I]!==Q?(i.bindFramebuffer(I,Q),d[I]=Q,n&&(I===36009&&(d[36160]=Q),I===36160&&(d[36009]=Q)),!0):!1}function ce(I){return f!==I?(i.useProgram(I),f=I,!0):!1}let de={[_i]:32774,[gh]:32778,[_h]:32779};if(n)de[lc]=32775,de[uc]=32776;else{let I=e.get("EXT_blend_minmax");I!==null&&(de[lc]=I.MIN_EXT,de[uc]=I.MAX_EXT)}let pe={[vh]:0,[xh]:1,[yh]:768,[hc]:770,[Eh]:776,[Sh]:774,[bh]:772,[wh]:769,[dc]:771,[Th]:775,[Mh]:773};function Pe(I,Q,q,fe,ne,We,ht,dt){if(I===gr){m===!0&&(ve(3042),m=!1);return}if(m===!1&&(_e(3042),m=!0),I!==mh){if(I!==_||dt!==x){if((v!==_i||b!==_i)&&(i.blendEquation(32774),v=_i,b=_i),dt)switch(I){case _r:i.blendFuncSeparate(1,771,1,771);break;case oc:i.blendFunc(1,1);break;case ac:i.blendFuncSeparate(0,0,769,771);break;case cc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _r:i.blendFuncSeparate(770,771,1,771);break;case oc:i.blendFunc(770,1);break;case ac:i.blendFunc(0,769);break;case cc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,g=null,T=null,y=null,_=I,x=dt}return}ne=ne||Q,We=We||q,ht=ht||fe,(Q!==v||ne!==b)&&(i.blendEquationSeparate(de[Q],de[ne]),v=Q,b=ne),(q!==p||fe!==g||We!==T||ht!==y)&&(i.blendFuncSeparate(pe[q],pe[fe],pe[We],pe[ht]),p=q,g=fe,T=We,y=ht),_=I,x=null}function Ne(I,Q){I.side===Jr?ve(2884):_e(2884);let q=I.side===rt;Q&&(q=!q),ze(q),I.blending===_r&&I.transparent===!1?Pe(gr):Pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let fe=I.stencilWrite;l.setTest(fe),fe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(32926):ve(32926)}function ze(I){M!==I&&(I?i.frontFace(2304):i.frontFace(2305),M=I)}function bt(I){I!==dh?(_e(2884),I!==A&&(I===ic?i.cullFace(1029):I===fh?i.cullFace(1028):i.cullFace(1032))):ve(2884),A=I}function Z(I){I!==E&&(C&&i.lineWidth(I),E=I)}function se(I,Q,q){I?(_e(32823),(k!==Q||V!==q)&&(i.polygonOffset(Q,q),k=Q,V=q)):ve(32823)}function L(I){I?_e(3089):ve(3089)}function S(I){I===void 0&&(I=33984+R-1),D!==I&&(i.activeTexture(I),D=I)}function W(I,Q){D===null&&S();let q=U[D];q===void 0&&(q={type:void 0,texture:void 0},U[D]=q),(q.type!==I||q.texture!==Q)&&(i.bindTexture(I,Q||$[I]),q.type=I,q.texture=Q)}function X(){let I=U[D];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){Y.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function we(I){J.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function oe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},D=null,U={},h=null,d={},f=null,m=!1,_=null,v=null,p=null,g=null,b=null,T=null,y=null,x=!1,M=null,A=null,E=null,k=null,V=null,Y.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:_e,disable:ve,bindFramebuffer:be,bindXRFramebuffer:F,useProgram:ce,setBlending:Pe,setMaterial:Ne,setFlipSided:ze,setCullFace:bt,setLineWidth:Z,setPolygonOffset:se,setScissorTest:L,activeTexture:S,bindTexture:W,unbindTexture:X,compressedTexImage2D:re,texImage2D:te,texImage3D:le,scissor:ge,viewport:we,reset:oe}}function u_(i,e,t,n,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap,f,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(L){}function _(L,S){return m?new OffscreenCanvas(L,S):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(L,S,W,X){let re=1;if((L.width>X||L.height>X)&&(re=X/Math.max(L.width,L.height)),re<1||S===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){let te=S?Xd:Math.floor,le=te(re*L.width),ge=te(re*L.height);f===void 0&&(f=_(le,ge));let we=W?_(le,ge):f;return we.width=le,we.height=ge,we.getContext("2d").drawImage(L,0,0,le,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+le+"x"+ge+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function p(L){return Pc(L.width)&&Pc(L.height)}function g(L){return a?!1:L.wrapS!==Lt||L.wrapT!==Lt||L.minFilter!==Ot&&L.minFilter!==rn}function b(L,S){return L.generateMipmaps&&S&&L.minFilter!==Ot&&L.minFilter!==rn}function T(L,S,W,X){i.generateMipmap(L);let re=n.get(S);re.__maxMipLevel=Math.log2(Math.max(W,X))}function y(L,S,W){if(a===!1)return S;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=S;return S===6403&&(W===5126&&(X=33326),W===5131&&(X=33325),W===5121&&(X=33321)),S===6407&&(W===5126&&(X=34837),W===5131&&(X=34843),W===5121&&(X=32849)),S===6408&&(W===5126&&(X=34836),W===5131&&(X=34842),W===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function x(L){return L===Ot||L===_c||L===vc?9728:9729}function M(L){let S=L.target;S.removeEventListener("dispose",M),E(S),S.isVideoTexture&&d.delete(S),o.memory.textures--}function A(L){let S=L.target;S.removeEventListener("dispose",A),k(S)}function E(L){let S=n.get(L);S.__webglInit!==void 0&&(i.deleteTexture(S.__webglTexture),n.remove(L))}function k(L){let S=L.texture,W=n.get(L),X=n.get(S);if(!!L){if(X.__webglTexture!==void 0&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)i.deleteFramebuffer(W.__webglFramebuffer[re]),W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[re]);else i.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer&&i.deleteRenderbuffer(W.__webglColorRenderbuffer),W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer);if(L.isWebGLMultipleRenderTargets)for(let re=0,te=S.length;re<te;re++){let le=n.get(S[re]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(S[re])}n.remove(S),n.remove(L)}}let V=0;function R(){V=0}function C(){let L=V;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),V+=1,L}function P(L,S){let W=n.get(L);if(L.isVideoTexture&&Ne(L),L.version>0&&W.__version!==L.version){let X=L.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(W,L,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,W.__webglTexture)}function N(L,S){let W=n.get(L);if(L.version>0&&W.__version!==L.version){ae(W,L,S);return}t.activeTexture(33984+S),t.bindTexture(35866,W.__webglTexture)}function D(L,S){let W=n.get(L);if(L.version>0&&W.__version!==L.version){ae(W,L,S);return}t.activeTexture(33984+S),t.bindTexture(32879,W.__webglTexture)}function U(L,S){let W=n.get(L);if(L.version>0&&W.__version!==L.version){$(W,L,S);return}t.activeTexture(33984+S),t.bindTexture(34067,W.__webglTexture)}let H={[uo]:10497,[Lt]:33071,[ho]:33648},j={[Ot]:9728,[_c]:9984,[vc]:9986,[rn]:9729,[zh]:9985,[Kr]:9987};function Y(L,S,W){if(W?(i.texParameteri(L,10242,H[S.wrapS]),i.texParameteri(L,10243,H[S.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,H[S.wrapR]),i.texParameteri(L,10240,j[S.magFilter]),i.texParameteri(L,10241,j[S.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(S.wrapS!==Lt||S.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,x(S.magFilter)),i.texParameteri(L,10241,x(S.minFilter)),S.minFilter!==Ot&&S.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let X=e.get("EXT_texture_filter_anisotropic");if(S.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function J(L,S){L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",M),L.__webglTexture=i.createTexture(),o.memory.textures++)}function ae(L,S,W){let X=3553;S.isDataTexture2DArray&&(X=35866),S.isDataTexture3D&&(X=32879),J(L,S),t.activeTexture(33984+W),t.bindTexture(X,L.__webglTexture),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);let re=g(S)&&p(S.image)===!1,te=v(S.image,re,!1,u),le=p(te)||a,ge=s.convert(S.format),we=s.convert(S.type),oe=y(S.internalFormat,ge,we);Y(X,S,le);let I,Q=S.mipmaps;if(S.isDepthTexture)oe=6402,a?S.type===Qn?oe=36012:S.type===es?oe=33190:S.type===ns?oe=35056:oe=33189:S.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===mo&&oe===6402&&S.type!==po&&S.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=po,we=s.convert(S.type)),S.format===go&&oe===6402&&(oe=34041,S.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ns,we=s.convert(S.type))),t.texImage2D(3553,0,oe,te.width,te.height,0,ge,we,null);else if(S.isDataTexture)if(Q.length>0&&le){for(let q=0,fe=Q.length;q<fe;q++)I=Q[q],t.texImage2D(3553,q,oe,I.width,I.height,0,ge,we,I.data);S.generateMipmaps=!1,L.__maxMipLevel=Q.length-1}else t.texImage2D(3553,0,oe,te.width,te.height,0,ge,we,te.data),L.__maxMipLevel=0;else if(S.isCompressedTexture){for(let q=0,fe=Q.length;q<fe;q++)I=Q[q],S.format!==sn&&S.format!==vi?ge!==null?t.compressedTexImage2D(3553,q,oe,I.width,I.height,0,I.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,oe,I.width,I.height,0,ge,we,I.data);L.__maxMipLevel=Q.length-1}else if(S.isDataTexture2DArray)t.texImage3D(35866,0,oe,te.width,te.height,te.depth,0,ge,we,te.data),L.__maxMipLevel=0;else if(S.isDataTexture3D)t.texImage3D(32879,0,oe,te.width,te.height,te.depth,0,ge,we,te.data),L.__maxMipLevel=0;else if(Q.length>0&&le){for(let q=0,fe=Q.length;q<fe;q++)I=Q[q],t.texImage2D(3553,q,oe,ge,we,I);S.generateMipmaps=!1,L.__maxMipLevel=Q.length-1}else t.texImage2D(3553,0,oe,ge,we,te),L.__maxMipLevel=0;b(S,le)&&T(X,S,te.width,te.height),L.__version=S.version,S.onUpdate&&S.onUpdate(S)}function $(L,S,W){if(S.image.length!==6)return;J(L,S),t.activeTexture(33984+W),t.bindTexture(34067,L.__webglTexture),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);let X=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),re=S.image[0]&&S.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!X&&!re?te[q]=v(S.image[q],!1,!0,l):te[q]=re?S.image[q].image:S.image[q];let le=te[0],ge=p(le)||a,we=s.convert(S.format),oe=s.convert(S.type),I=y(S.internalFormat,we,oe);Y(34067,S,ge);let Q;if(X){for(let q=0;q<6;q++){Q=te[q].mipmaps;for(let fe=0;fe<Q.length;fe++){let ne=Q[fe];S.format!==sn&&S.format!==vi?we!==null?t.compressedTexImage2D(34069+q,fe,I,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,fe,I,ne.width,ne.height,0,we,oe,ne.data)}}L.__maxMipLevel=Q.length-1}else{Q=S.mipmaps;for(let q=0;q<6;q++)if(re){t.texImage2D(34069+q,0,I,te[q].width,te[q].height,0,we,oe,te[q].data);for(let fe=0;fe<Q.length;fe++){let We=Q[fe].image[q].image;t.texImage2D(34069+q,fe+1,I,We.width,We.height,0,we,oe,We.data)}}else{t.texImage2D(34069+q,0,I,we,oe,te[q]);for(let fe=0;fe<Q.length;fe++){let ne=Q[fe];t.texImage2D(34069+q,fe+1,I,we,oe,ne.image[q])}}L.__maxMipLevel=Q.length}b(S,ge)&&T(34067,S,le.width,le.height),L.__version=S.version,S.onUpdate&&S.onUpdate(S)}function _e(L,S,W,X,re){let te=s.convert(W.format),le=s.convert(W.type),ge=y(W.internalFormat,te,le);re===32879||re===35866?t.texImage3D(re,0,ge,S.width,S.height,S.depth,0,te,le,null):t.texImage2D(re,0,ge,S.width,S.height,0,te,le,null),t.bindFramebuffer(36160,L),i.framebufferTexture2D(36160,X,re,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(L,S,W){if(i.bindRenderbuffer(36161,L),S.depthBuffer&&!S.stencilBuffer){let X=33189;if(W){let re=S.depthTexture;re&&re.isDepthTexture&&(re.type===Qn?X=36012:re.type===es&&(X=33190));let te=Pe(S);i.renderbufferStorageMultisample(36161,te,X,S.width,S.height)}else i.renderbufferStorage(36161,X,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(S.depthBuffer&&S.stencilBuffer){if(W){let X=Pe(S);i.renderbufferStorageMultisample(36161,X,35056,S.width,S.height)}else i.renderbufferStorage(36161,34041,S.width,S.height);i.framebufferRenderbuffer(36160,33306,36161,L)}else{let X=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,re=s.convert(X.format),te=s.convert(X.type),le=y(X.internalFormat,re,te);if(W){let ge=Pe(S);i.renderbufferStorageMultisample(36161,ge,le,S.width,S.height)}else i.renderbufferStorage(36161,le,S.width,S.height)}i.bindRenderbuffer(36161,null)}function F(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);let X=n.get(S.depthTexture).__webglTexture;if(S.depthTexture.format===mo)i.framebufferTexture2D(36160,36096,3553,X,0);else if(S.depthTexture.format===go)i.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function be(L){let S=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture){if(W)throw new Error("target.depthTexture not supported in Cube render targets");F(S.__webglFramebuffer,L)}else if(W){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]=i.createRenderbuffer(),ve(S.__webglDepthbuffer[X],L,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ve(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function ce(L){let S=L.texture,W=n.get(L),X=n.get(S);L.addEventListener("dispose",A),L.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture=i.createTexture(),X.__version=S.version,o.memory.textures++);let re=L.isWebGLCubeRenderTarget===!0,te=L.isWebGLMultipleRenderTargets===!0,le=L.isWebGLMultisampleRenderTarget===!0,ge=S.isDataTexture3D||S.isDataTexture2DArray,we=p(L)||a;if(a&&S.format===vi&&(S.type===Qn||S.type===ts)&&(S.format=sn,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),re){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)W.__webglFramebuffer[oe]=i.createFramebuffer()}else if(W.__webglFramebuffer=i.createFramebuffer(),te)if(r.drawBuffers){let oe=L.texture;for(let I=0,Q=oe.length;I<Q;I++){let q=n.get(oe[I]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(le)if(a){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,W.__webglColorRenderbuffer);let oe=s.convert(S.format),I=s.convert(S.type),Q=y(S.internalFormat,oe,I),q=Pe(L);i.renderbufferStorageMultisample(36161,q,Q,L.width,L.height),t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,W.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(re){t.bindTexture(34067,X.__webglTexture),Y(34067,S,we);for(let oe=0;oe<6;oe++)_e(W.__webglFramebuffer[oe],L,S,36064,34069+oe);b(S,we)&&T(34067,S,L.width,L.height),t.bindTexture(34067,null)}else if(te){let oe=L.texture;for(let I=0,Q=oe.length;I<Q;I++){let q=oe[I],fe=n.get(q);t.bindTexture(3553,fe.__webglTexture),Y(3553,q,we),_e(W.__webglFramebuffer,L,q,36064+I,3553),b(q,we)&&T(3553,q,L.width,L.height)}t.bindTexture(3553,null)}else{let oe=3553;ge&&(a?oe=S.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(oe,X.__webglTexture),Y(oe,S,we),_e(W.__webglFramebuffer,L,S,36064,oe),b(S,we)&&T(3553,S,L.width,L.height),t.bindTexture(3553,null)}L.depthBuffer&&be(L)}function de(L){let S=p(L)||a,W=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let X=0,re=W.length;X<re;X++){let te=W[X];if(b(te,S)){let le=L.isWebGLCubeRenderTarget?34067:3553,ge=n.get(te).__webglTexture;t.bindTexture(le,ge),T(le,te,L.width,L.height),t.bindTexture(le,null)}}}function pe(L){if(L.isWebGLMultisampleRenderTarget)if(a){let S=L.width,W=L.height,X=16384;L.depthBuffer&&(X|=256),L.stencilBuffer&&(X|=1024);let re=n.get(L);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer),i.blitFramebuffer(0,0,S,W,0,0,S,W,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Pe(L){return a&&L.isWebGLMultisampleRenderTarget?Math.min(h,L.samples):0}function Ne(L){let S=o.render.frame;d.get(L)!==S&&(d.set(L,S),L.update())}let ze=!1,bt=!1;function Z(L,S){L&&L.isWebGLRenderTarget&&(ze===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ze=!0),L=L.texture),P(L,S)}function se(L,S){L&&L.isWebGLCubeRenderTarget&&(bt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),bt=!0),L=L.texture),U(L,S)}this.allocateTextureUnit=C,this.resetTextureUnits=R,this.setTexture2D=P,this.setTexture2DArray=N,this.setTexture3D=D,this.setTextureCube=U,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=pe,this.safeSetTexture2D=Z,this.safeSetTextureCube=se}function h_(i,e,t){let n=t.isWebGL2;function r(s){let o;if(s===fo)return 5121;if(s===qh)return 32819;if(s===Xh)return 32820;if(s===jh)return 33635;if(s===Gh)return 5120;if(s===Wh)return 5122;if(s===po)return 5123;if(s===Hh)return 5124;if(s===es)return 5125;if(s===Qn)return 5126;if(s===ts)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yh)return 6406;if(s===vi)return 6407;if(s===sn)return 6408;if(s===Zh)return 6409;if(s===$h)return 6410;if(s===mo)return 6402;if(s===go)return 34041;if(s===Qh)return 6403;if(s===Jh)return 36244;if(s===Kh)return 33319;if(s===ed)return 33320;if(s===td)return 36248;if(s===nd)return 36249;if(s===xc||s===yc||s===wc||s===bc)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mc||s===Sc||s===Tc||s===Ec)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ec)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ac||s===Cc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Ac)return o.COMPRESSED_RGB8_ETC2;if(s===Cc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===rd||s===sd||s===od||s===ad||s===cd||s===ld||s===ud||s===hd||s===dd||s===fd||s===pd||s===md||s===gd||s===_d||s===xd||s===yd||s===wd||s===bd||s===Md||s===Sd||s===Td||s===Ed||s===Ad||s===Cd||s===Ld||s===Rd||s===Dd||s===Pd)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===vd)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===ns)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}var na=class extends St{constructor(e=[]){super();this.cameras=e}};na.prototype.isArrayCamera=!0;var Fi=class extends $e{constructor(){super();this.type="Group"}};Fi.prototype.isGroup=!0;var d_={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_))),l&&e.hand){o=!0;for(let _ of e.hand.values()){let v=t.getJointPose(_,n);if(l.joints[_.jointName]===void 0){let g=new Fi;g.matrixAutoUpdate=!1,g.visible=!1,l.joints[_.jointName]=g,l.add(g)}let p=l.joints[_.jointName];v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=v.radius),p.visible=v!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}},gl=class extends Jn{constructor(e,t){super();let n=this,r=e.state,s=null,o=1,a=null,c="local-floor",l=null,u=[],h=new Map,d=new St;d.layers.enable(1),d.viewport=new et;let f=new St;f.layers.enable(2),f.viewport=new et;let m=[d,f],_=new na;_.layers.enable(1),_.layers.enable(2);let v=null,p=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let C=u[R];return C===void 0&&(C=new Ms,u[R]=C),C.getTargetRaySpace()},this.getControllerGrip=function(R){let C=u[R];return C===void 0&&(C=new Ms,u[R]=C),C.getGripSpace()},this.getHand=function(R){let C=u[R];return C===void 0&&(C=new Ms,u[R]=C),C.getHandSpace()};function g(R){let C=h.get(R.inputSource);C&&C.dispatchEvent({type:R.type,data:R.inputSource})}function b(){h.forEach(function(R,C){R.disconnect(C)}),h.clear(),v=null,p=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){o=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){c=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){s.addEventListener("select",g),s.addEventListener("selectstart",g),s.addEventListener("selectend",g),s.addEventListener("squeeze",g),s.addEventListener("squeezestart",g),s.addEventListener("squeezeend",g),s.addEventListener("end",b),s.addEventListener("inputsourceschange",T);let C=t.getContextAttributes();C.xrCompatible!==!0&&await t.makeXRCompatible();let P={antialias:C.antialias,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:o},N=new XRWebGLLayer(s,t,P);s.updateRenderState({baseLayer:N}),a=await s.requestReferenceSpace(c),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function T(R){let C=s.inputSources;for(let P=0;P<u.length;P++)h.set(C[P],u[P]);for(let P=0;P<R.removed.length;P++){let N=R.removed[P],D=h.get(N);D&&(D.dispatchEvent({type:"disconnected",data:N}),h.delete(N))}for(let P=0;P<R.added.length;P++){let N=R.added[P],D=h.get(N);D&&D.dispatchEvent({type:"connected",data:N})}}let y=new O,x=new O;function M(R,C,P){y.setFromMatrixPosition(C.matrixWorld),x.setFromMatrixPosition(P.matrixWorld);let N=y.distanceTo(x),D=C.projectionMatrix.elements,U=P.projectionMatrix.elements,H=D[14]/(D[10]-1),j=D[14]/(D[10]+1),Y=(D[9]+1)/D[5],J=(D[9]-1)/D[5],ae=(D[8]-1)/D[0],$=(U[8]+1)/U[0],_e=H*ae,ve=H*$,F=N/(-ae+$),be=F*-ae;C.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(be),R.translateZ(F),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();let ce=H+F,de=j+F,pe=_e-be,Pe=ve+(N-be),Ne=Y*j/de*ce,ze=J*j/de*ce;R.projectionMatrix.makePerspective(pe,Pe,Ne,ze,ce,de)}function A(R,C){C===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(C.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;_.near=f.near=d.near=R.near,_.far=f.far=d.far=R.far,(v!==_.near||p!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,p=_.far);let C=R.parent,P=_.cameras;A(_,C);for(let D=0;D<P.length;D++)A(P[D],C);R.matrixWorld.copy(_.matrixWorld),R.matrix.copy(_.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale);let N=R.children;for(let D=0,U=N.length;D<U;D++)N[D].updateMatrixWorld(!0);P.length===2?M(_,d,f):_.projectionMatrix.copy(d.projectionMatrix)},this.getCamera=function(){return _};let E=null;function k(R,C){if(l=C.getViewerPose(a),l!==null){let N=l.views,D=s.renderState.baseLayer;r.bindXRFramebuffer(D.framebuffer);let U=!1;N.length!==_.cameras.length&&(_.cameras.length=0,U=!0);for(let H=0;H<N.length;H++){let j=N[H],Y=D.getViewport(j),J=m[H];J.matrix.fromArray(j.transform.matrix),J.projectionMatrix.fromArray(j.projectionMatrix),J.viewport.set(Y.x,Y.y,Y.width,Y.height),H===0&&_.matrix.copy(J.matrix),U===!0&&_.cameras.push(J)}}let P=s.inputSources;for(let N=0;N<u.length;N++){let D=u[N],U=P[N];D.update(U,C,a)}E&&E(R,C)}let V=new Xc;V.setAnimationLoop(k),this.setAnimationLoop=function(R){E=R},this.dispose=function(){}}};function f_(i){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,b,T,y){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),c(p,g)):g.isMeshToonMaterial?(n(p,g),u(p,g)):g.isMeshPhongMaterial?(n(p,g),l(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?d(p,g,y):h(p,g)):g.isMeshMatcapMaterial?(n(p,g),f(p,g)):g.isMeshDepthMaterial?(n(p,g),m(p,g)):g.isMeshDistanceMaterial?(n(p,g),_(p,g)):g.isMeshNormalMaterial?(n(p,g),v(p,g)):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&s(p,g)):g.isPointsMaterial?o(p,g,b,T):g.isSpriteMaterial?a(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap);let b=i.get(g).envMap;if(b){p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b._needsFlipEnvMap?-1:1,p.reflectivity.value=g.reflectivity,p.refractionRatio.value=g.refractionRatio;let x=i.get(b).__maxMipLevel;x!==void 0&&(p.maxMipLevel.value=x)}g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let T;g.map?T=g.map:g.specularMap?T=g.specularMap:g.displacementMap?T=g.displacementMap:g.normalMap?T=g.normalMap:g.bumpMap?T=g.bumpMap:g.roughnessMap?T=g.roughnessMap:g.metalnessMap?T=g.metalnessMap:g.alphaMap?T=g.alphaMap:g.emissiveMap?T=g.emissiveMap:g.clearcoatMap?T=g.clearcoatMap:g.clearcoatNormalMap?T=g.clearcoatNormalMap:g.clearcoatRoughnessMap&&(T=g.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let y;g.aoMap?y=g.aoMap:g.lightMap&&(y=g.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function s(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,b,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=T*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap);let y;g.map?y=g.map:g.alphaMap&&(y=g.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function c(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function l(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===rt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===rt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===rt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===rt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===rt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===rt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),i.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){h(p,g),p.reflectivity.value=g.reflectivity,p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&p.sheen.value.copy(g.sheen),g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===rt&&p.clearcoatNormalScale.value.negate()),p.transmission.value=g.transmission,g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),g.transmission>0&&(p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)}function f(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===rt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===rt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function _(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function v(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===rt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===rt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function p_(){let i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return i.style.display="block",i}function Fe(i){i=i||{};let e=i.canvas!==void 0?i.canvas:p_(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,c=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1,h=null,d=null,f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=xr,this.physicallyCorrectLights=!1,this.toneMapping=vr,this.toneMappingExposure=1;let _=this,v=!1,p=0,g=0,b=null,T=-1,y=null,x=new et,M=new et,A=null,E=e.width,k=e.height,V=1,R=null,C=null,P=new et(0,0,E,k),N=new et(0,0,E,k),D=!1,U=[],H=new bs,j=!1,Y=!1,J=null,ae=new Me,$=new O,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return b===null?V:1}let F=t;function be(w,z){for(let B=0;B<w.length;B++){let G=w[B],K=e.getContext(G,z);if(K!==null)return K}return null}try{let w={alpha:n,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",We,!1),e.addEventListener("webglcontextrestored",ht,!1),F===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),F=be(z,w),F===null)throw be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ce,de,pe,Pe,Ne,ze,bt,Z,se,L,S,W,X,re,te,le,ge,we,oe,I,Q,q;function fe(){ce=new Vm(F),de=new Fm(F,ce,i),ce.init(de),Q=new h_(F,ce,de),pe=new l_(F,ce,de),U[0]=1029,Pe=new zm(F),Ne=new Jg,ze=new u_(F,ce,pe,Ne,de,Q,Pe),bt=new km(_),Z=new uf(F,de),q=new Nm(F,ce,Z,de),se=new Bm(F,Z,Pe,q),L=new qm(F,se,Z,Pe),we=new Hm(F),te=new Om(Ne),S=new Qg(_,bt,ce,de,q,te),W=new f_(Ne),X=new e_(Ne),re=new o_(ce,de),ge=new Pm(_,bt,pe,L,a),le=new ml(_,L,de),oe=new Im(F,ce,Pe,de),I=new Um(F,ce,Pe,de),Pe.programs=S.programs,_.capabilities=de,_.extensions=ce,_.properties=Ne,_.renderLists=X,_.shadowMap=le,_.state=pe,_.info=Pe}fe();let ne=new gl(_,F);this.xr=ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(E,k,!1))},this.getSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),w=new Le),w.set(E,k)},this.setSize=function(w,z,B){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,k=z,e.width=Math.floor(w*V),e.height=Math.floor(z*V),B!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),w=new Le),w.set(E*V,k*V).floor()},this.setDrawingBufferSize=function(w,z,B){E=w,k=z,V=B,e.width=Math.floor(w*B),e.height=Math.floor(z*B),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),w=new et),w.copy(x)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,z,B,G){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,z,B,G),pe.viewport(x.copy(P).multiplyScalar(V).floor())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,z,B,G){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,z,B,G),pe.scissor(M.copy(N).multiplyScalar(V).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(w){pe.setScissorTest(D=w)},this.setOpaqueSort=function(w){R=w},this.setTransparentSort=function(w){C=w},this.getClearColor=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),w=new Re),w.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(w,z,B){let G=0;(w===void 0||w)&&(G|=16384),(z===void 0||z)&&(G|=256),(B===void 0||B)&&(G|=1024),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",We,!1),e.removeEventListener("webglcontextrestored",ht,!1),X.dispose(),re.dispose(),Ne.dispose(),bt.dispose(),L.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",$a),ne.removeEventListener("sessionend",Qa),J&&(J.dispose(),J=null),Yn.stop()};function We(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let w=Pe.autoReset,z=le.enabled,B=le.autoUpdate,G=le.needsUpdate,K=le.type;fe(),Pe.autoReset=w,le.enabled=z,le.autoUpdate=B,le.needsUpdate=G,le.type=K}function dt(w){let z=w.target;z.removeEventListener("dispose",dt),jn(z)}function jn(w){Ye(w),Ne.remove(w)}function Ye(w){let z=Ne.get(w).programs;z!==void 0&&z.forEach(function(B){S.releaseProgram(B)})}function _n(w,z){w.render(function(B){_.renderBufferImmediate(B,z)})}this.renderBufferImmediate=function(w,z){q.initAttributes();let B=Ne.get(w);w.hasPositions&&!B.position&&(B.position=F.createBuffer()),w.hasNormals&&!B.normal&&(B.normal=F.createBuffer()),w.hasUvs&&!B.uv&&(B.uv=F.createBuffer()),w.hasColors&&!B.color&&(B.color=F.createBuffer());let G=z.getAttributes();w.hasPositions&&(F.bindBuffer(34962,B.position),F.bufferData(34962,w.positionArray,35048),q.enableAttribute(G.position),F.vertexAttribPointer(G.position,3,5126,!1,0,0)),w.hasNormals&&(F.bindBuffer(34962,B.normal),F.bufferData(34962,w.normalArray,35048),q.enableAttribute(G.normal),F.vertexAttribPointer(G.normal,3,5126,!1,0,0)),w.hasUvs&&(F.bindBuffer(34962,B.uv),F.bufferData(34962,w.uvArray,35048),q.enableAttribute(G.uv),F.vertexAttribPointer(G.uv,2,5126,!1,0,0)),w.hasColors&&(F.bindBuffer(34962,B.color),F.bufferData(34962,w.colorArray,35048),q.enableAttribute(G.color),F.vertexAttribPointer(G.color,3,5126,!1,0,0)),q.disableUnusedAttributes(),F.drawArrays(4,0,w.count),w.count=0},this.renderBufferDirect=function(w,z,B,G,K,Ce){z===null&&(z=_e);let ye=K.isMesh&&K.matrixWorld.determinant()<0,he=tc(w,z,G,K);pe.setMaterial(G,ye);let Te=B.index,ue=B.attributes.position;if(Te===null){if(ue===void 0||ue.count===0)return}else if(Te.count===0)return;let Ae=1;G.wireframe===!0&&(Te=se.getWireframeAttribute(B),Ae=2),(G.morphTargets||G.morphNormals)&&we.update(K,B,G,he),q.setup(K,G,he,B,Te);let me,Ie=oe;Te!==null&&(me=Z.get(Te),Ie=I,Ie.setIndex(me));let nn=Te!==null?Te.count:ue.count,_t=B.drawRange.start*Ae,Zn=B.drawRange.count*Ae,Ke=Ce!==null?Ce.start*Ae:0,$n=Ce!==null?Ce.count*Ae:Infinity,ft=Math.max(_t,Ke),hh=Math.min(nn,_t+Zn,Ke+$n)-1,$r=Math.max(0,hh-ft+1);if($r!==0){if(K.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*ve()),Ie.setMode(1)):Ie.setMode(4);else if(K.isLine){let pr=G.linewidth;pr===void 0&&(pr=1),pe.setLineWidth(pr*ve()),K.isLineSegments?Ie.setMode(1):K.isLineLoop?Ie.setMode(2):Ie.setMode(3)}else K.isPoints?Ie.setMode(0):K.isSprite&&Ie.setMode(4);if(K.isInstancedMesh)Ie.renderInstances(ft,$r,K.count);else if(B.isInstancedBufferGeometry){let pr=Math.min(B.instanceCount,B._maxInstanceCount);Ie.renderInstances(ft,$r,pr)}else Ie.render(ft,$r)}},this.compile=function(w,z){d=re.get(w),d.init(),w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(),w.traverse(function(B){let G=B.material;if(G)if(Array.isArray(G))for(let K=0;K<G.length;K++){let Ce=G[K];ro(Ce,w,B)}else ro(G,w,B)})};let Gt=null;function ah(w){Gt&&Gt(w)}function $a(){Yn.stop()}function Qa(){Yn.start()}let Yn=new Xc;Yn.setAnimationLoop(ah),typeof window!="undefined"&&Yn.setContext(window),this.setAnimationLoop=function(w){Gt=w,ne.setAnimationLoop(w),w===null?Yn.stop():Yn.start()},ne.addEventListener("sessionstart",$a),ne.addEventListener("sessionend",Qa),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(z),z=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,z,b),d=re.get(w,m.length),d.init(),m.push(d),ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H.setFromProjectionMatrix(ae),Y=this.localClippingEnabled,j=te.init(this.clippingPlanes,Y,z),h=X.get(w,f.length),h.init(),f.push(h),Ja(w,z,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(R,C),j===!0&&te.beginShadows();let B=d.state.shadowsArray;le.render(B,w,z),d.setupLights(),d.setupLightsView(z),j===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(h,w);let G=h.opaque,K=h.transmissive,Ce=h.transparent;G.length>0&&Zr(G,w,z),K.length>0&&ch(G,K,w,z),Ce.length>0&&Zr(Ce,w,z),b!==null&&(ze.updateRenderTargetMipmap(b),ze.updateMultisampleRenderTarget(b)),w.isScene===!0&&w.onAfterRender(_,w,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1),q.resetDefaultState(),T=-1,y=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Ja(w,z,B,G){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){G&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let ye=L.update(w),he=w.material;he.visible&&h.push(w,ye,he,B,$.z,null)}}else if(w.isImmediateRenderObject)G&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae),h.push(w,null,w.material,B,$.z,null);else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Pe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Pe.render.frame),!w.frustumCulled||H.intersectsObject(w))){G&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let ye=L.update(w),he=w.material;if(Array.isArray(he)){let Te=ye.groups;for(let ue=0,Ae=Te.length;ue<Ae;ue++){let me=Te[ue],Ie=he[me.materialIndex];Ie&&Ie.visible&&h.push(w,ye,Ie,B,$.z,me)}}else he.visible&&h.push(w,ye,he,B,$.z,null)}}let Ce=w.children;for(let ye=0,he=Ce.length;ye<he;ye++)Ja(Ce[ye],z,B,G)}function ch(w,z,B,G){J===null&&(J=new Cn(1024,1024,{generateMipmaps:!0,minFilter:Kr,magFilter:Ot,wrapS:Lt,wrapT:Lt}));let K=_.getRenderTarget();_.setRenderTarget(J),_.clear(),Zr(w,B,G),ze.updateRenderTargetMipmap(J),_.setRenderTarget(K),Zr(z,B,G)}function Zr(w,z,B){let G=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Ce=w.length;K<Ce;K++){let ye=w[K],he=ye.object,Te=ye.geometry,ue=G===null?ye.material:G,Ae=ye.group;if(B.isArrayCamera){let me=B.cameras;for(let Ie=0,nn=me.length;Ie<nn;Ie++){let _t=me[Ie];he.layers.test(_t.layers)&&(pe.viewport(x.copy(_t.viewport)),d.setupLightsView(_t),Ka(he,z,_t,Te,ue,Ae))}}else Ka(he,z,B,Te,ue,Ae)}}function Ka(w,z,B,G,K,Ce){if(w.onBeforeRender(_,z,B,G,K,Ce),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),w.isImmediateRenderObject){let ye=tc(B,z,K,w);pe.setMaterial(K),q.reset(),_n(w,ye)}else _.renderBufferDirect(B,z,G,K,w,Ce);w.onAfterRender(_,z,B,G,K,Ce)}function ro(w,z,B){z.isScene!==!0&&(z=_e);let G=Ne.get(w),K=d.state.lights,Ce=d.state.shadowsArray,ye=K.state.version,he=S.getParameters(w,K.state,Ce,z,B),Te=S.getProgramCacheKey(he),ue=G.programs;G.environment=w.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=bt.get(w.envMap||G.environment),ue===void 0&&(w.addEventListener("dispose",dt),ue=new Map,G.programs=ue);let Ae=ue.get(Te);if(Ae!==void 0){if(G.currentProgram===Ae&&G.lightsStateVersion===ye)return ec(w,he),Ae}else he.uniforms=S.getUniforms(w),w.onBuild(he,_),w.onBeforeCompile(he,_),Ae=S.acquireProgram(he,Te),ue.set(Te,Ae),G.uniforms=he.uniforms;let me=G.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(me.clippingPlanes=te.uniform),ec(w,he),G.needsLights=uh(w),G.lightsStateVersion=ye,G.needsLights&&(me.ambientLightColor.value=K.state.ambient,me.lightProbe.value=K.state.probe,me.directionalLights.value=K.state.directional,me.directionalLightShadows.value=K.state.directionalShadow,me.spotLights.value=K.state.spot,me.spotLightShadows.value=K.state.spotShadow,me.rectAreaLights.value=K.state.rectArea,me.ltc_1.value=K.state.rectAreaLTC1,me.ltc_2.value=K.state.rectAreaLTC2,me.pointLights.value=K.state.point,me.pointLightShadows.value=K.state.pointShadow,me.hemisphereLights.value=K.state.hemi,me.directionalShadowMap.value=K.state.directionalShadowMap,me.directionalShadowMatrix.value=K.state.directionalShadowMatrix,me.spotShadowMap.value=K.state.spotShadowMap,me.spotShadowMatrix.value=K.state.spotShadowMatrix,me.pointShadowMap.value=K.state.pointShadowMap,me.pointShadowMatrix.value=K.state.pointShadowMatrix);let Ie=Ae.getUniforms(),nn=kn.seqWithValue(Ie.seq,me);return G.currentProgram=Ae,G.uniformsList=nn,Ae}function ec(w,z){let B=Ne.get(w);B.outputEncoding=z.outputEncoding,B.instancing=z.instancing,B.skinning=z.skinning,B.numClippingPlanes=z.numClippingPlanes,B.numIntersection=z.numClipIntersection,B.vertexAlphas=z.vertexAlphas}function tc(w,z,B,G){z.isScene!==!0&&(z=_e),ze.resetTextureUnits();let K=z.fog,Ce=B.isMeshStandardMaterial?z.environment:null,ye=b===null?_.outputEncoding:b.texture.encoding,he=bt.get(B.envMap||Ce),Te=B.vertexColors===!0&&G.geometry&&G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,ue=Ne.get(B),Ae=d.state.lights;if(j===!0&&(Y===!0||w!==y)){let ft=w===y&&B.id===T;te.setState(B,w,ft)}let me=!1;B.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Ae.state.version||ue.outputEncoding!==ye||G.isInstancedMesh&&ue.instancing===!1||!G.isInstancedMesh&&ue.instancing===!0||G.isSkinnedMesh&&ue.skinning===!1||!G.isSkinnedMesh&&ue.skinning===!0||ue.envMap!==he||B.fog&&ue.fog!==K||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==te.numPlanes||ue.numIntersection!==te.numIntersection)||ue.vertexAlphas!==Te)&&(me=!0):(me=!0,ue.__version=B.version);let Ie=ue.currentProgram;me===!0&&(Ie=ro(B,z,G));let nn=!1,_t=!1,Zn=!1,Ke=Ie.getUniforms(),$n=ue.uniforms;if(pe.useProgram(Ie.program)&&(nn=!0,_t=!0,Zn=!0),B.id!==T&&(T=B.id,_t=!0),nn||y!==w){if(Ke.setValue(F,"projectionMatrix",w.projectionMatrix),de.logarithmicDepthBuffer&&Ke.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,_t=!0,Zn=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){let ft=Ke.map.cameraPosition;ft!==void 0&&ft.setValue(F,$.setFromMatrixPosition(w.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ke.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||G.isSkinnedMesh)&&Ke.setValue(F,"viewMatrix",w.matrixWorldInverse)}if(G.isSkinnedMesh){Ke.setOptional(F,G,"bindMatrix"),Ke.setOptional(F,G,"bindMatrixInverse");let ft=G.skeleton;ft&&(de.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),Ke.setValue(F,"boneTexture",ft.boneTexture,ze),Ke.setValue(F,"boneTextureSize",ft.boneTextureSize)):Ke.setOptional(F,ft,"boneMatrices"))}return(_t||ue.receiveShadow!==G.receiveShadow)&&(ue.receiveShadow=G.receiveShadow,Ke.setValue(F,"receiveShadow",G.receiveShadow)),_t&&(Ke.setValue(F,"toneMappingExposure",_.toneMappingExposure),ue.needsLights&&lh($n,Zn),K&&B.fog&&W.refreshFogUniforms($n,K),W.refreshMaterialUniforms($n,B,V,k,J),kn.upload(F,ue.uniformsList,$n,ze)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(kn.upload(F,ue.uniformsList,$n,ze),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ke.setValue(F,"center",G.center),Ke.setValue(F,"modelViewMatrix",G.modelViewMatrix),Ke.setValue(F,"normalMatrix",G.normalMatrix),Ke.setValue(F,"modelMatrix",G.matrixWorld),Ie}function lh(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function uh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return b},this.setRenderTarget=function(w,z=0,B=0){b=w,p=z,g=B,w&&Ne.get(w).__webglFramebuffer===void 0&&ze.setupRenderTarget(w);let G=null,K=!1,Ce=!1;if(w){let he=w.texture;(he.isDataTexture3D||he.isDataTexture2DArray)&&(Ce=!0);let Te=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(G=Te[z],K=!0):w.isWebGLMultisampleRenderTarget?G=Ne.get(w).__webglMultisampledFramebuffer:G=Te,x.copy(w.viewport),M.copy(w.scissor),A=w.scissorTest}else x.copy(P).multiplyScalar(V).floor(),M.copy(N).multiplyScalar(V).floor(),A=D;if(pe.bindFramebuffer(36160,G)&&de.drawBuffers){let he=!1;if(w)if(w.isWebGLMultipleRenderTargets){let Te=w.texture;if(U.length!==Te.length||U[0]!==36064){for(let ue=0,Ae=Te.length;ue<Ae;ue++)U[ue]=36064+ue;U.length=Te.length,he=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,he=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,he=!0);he&&(de.isWebGL2?F.drawBuffers(U):ce.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(pe.viewport(x),pe.scissor(M),pe.setScissorTest(A),K){let he=Ne.get(w.texture);F.framebufferTexture2D(36160,36064,34069+z,he.__webglTexture,B)}else if(Ce){let he=Ne.get(w.texture),Te=z||0;F.framebufferTextureLayer(36160,36064,he.__webglTexture,B||0,Te)}},this.readRenderTargetPixels=function(w,z,B,G,K,Ce,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(he=he[ye]),he){pe.bindFramebuffer(36160,he);try{let Te=w.texture,ue=Te.format,Ae=Te.type;if(ue!==sn&&Q.convert(ue)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let me=Ae===ts&&(ce.has("EXT_color_buffer_half_float")||de.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Ae!==fo&&Q.convert(Ae)!==F.getParameter(35738)&&!(Ae===Qn&&(de.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F.checkFramebufferStatus(36160)===36053?z>=0&&z<=w.width-G&&B>=0&&B<=w.height-K&&F.readPixels(z,B,G,K,Q.convert(ue),Q.convert(Ae),Ce):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Te=b!==null?Ne.get(b).__webglFramebuffer:null;pe.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(w,z,B=0){let G=Math.pow(2,-B),K=Math.floor(z.image.width*G),Ce=Math.floor(z.image.height*G),ye=Q.convert(z.format);de.isWebGL2&&(ye===6407&&(ye=32849),ye===6408&&(ye=32856)),ze.setTexture2D(z,0),F.copyTexImage2D(3553,B,ye,w.x,w.y,K,Ce,0),pe.unbindTexture()},this.copyTextureToTexture=function(w,z,B,G=0){let K=z.image.width,Ce=z.image.height,ye=Q.convert(B.format),he=Q.convert(B.type);ze.setTexture2D(B,0),F.pixelStorei(37440,B.flipY),F.pixelStorei(37441,B.premultiplyAlpha),F.pixelStorei(3317,B.unpackAlignment),z.isDataTexture?F.texSubImage2D(3553,G,w.x,w.y,K,Ce,ye,he,z.image.data):z.isCompressedTexture?F.compressedTexSubImage2D(3553,G,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,ye,z.mipmaps[0].data):F.texSubImage2D(3553,G,w.x,w.y,ye,he,z.image),G===0&&B.generateMipmaps&&F.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(w,z,B,G,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Ce,height:ye,data:he}=B.image,Te=Q.convert(G.format),ue=Q.convert(G.type),Ae;if(G.isDataTexture3D)ze.setTexture3D(G,0),Ae=32879;else if(G.isDataTexture2DArray)ze.setTexture2DArray(G,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,G.flipY),F.pixelStorei(37441,G.premultiplyAlpha),F.pixelStorei(3317,G.unpackAlignment);let me=F.getParameter(3314),Ie=F.getParameter(32878),nn=F.getParameter(3316),_t=F.getParameter(3315),Zn=F.getParameter(32877);F.pixelStorei(3314,Ce),F.pixelStorei(32878,ye),F.pixelStorei(3316,w.min.x),F.pixelStorei(3315,w.min.y),F.pixelStorei(32877,w.min.z),F.texSubImage3D(Ae,K,z.x,z.y,z.z,w.max.x-w.min.x+1,w.max.y-w.min.y+1,w.max.z-w.min.z+1,Te,ue,he),F.pixelStorei(3314,me),F.pixelStorei(32878,Ie),F.pixelStorei(3316,nn),F.pixelStorei(3315,_t),F.pixelStorei(32877,Zn),K===0&&G.generateMipmaps&&F.generateMipmap(Ae),pe.unbindTexture()},this.initTexture=function(w){ze.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){p=0,g=0,b=null,pe.reset(),q.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Rr=class extends $e{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Rr.prototype.isScene=!0;var _l={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},m_=new vl,Oi=class{constructor(e){this.manager=e!==void 0?e:m_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},ia=class extends Oi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=_l.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),_l.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},xl=class extends Oi{constructor(e){super(e)}load(e,t,n,r){let s=new Er,o=new ia(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}},yl=class extends Oi{constructor(e){super(e)}load(e,t,n,r){let s=new Rt,o=new ia(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a;let c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=c?vi:sn,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ra=class extends $e{constructor(e,t=1){super();this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};ra.prototype.isLight=!0;var wl=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},bl="\\[\\]\\.:\\/",sa="[^"+bl+"]",g_="[^"+bl.replace("\\.","")+"]",hb=/((?:WC+[\/:])*)/.source.replace("WC",sa),db=/(WCOD+)?/.source.replace("WCOD",g_),fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sa),pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sa),oa=class{constructor(e,t,n=0,r=Infinity){this.ray=new Mi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return aa(e,this,n,t),n.sort(Ml),n}intersectObjects(e,t=!1,n=[]){for(let r=0,s=e.length;r<s;r++)aa(e[r],this,n,t);return n.sort(Ml),n}};function Ml(i,e){return i.distance-e.distance}function aa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,o=r.length;s<o;s++)aa(r[s],e,t,!0)}}var __=new ri({side:rt,depthWrite:!1,depthTest:!1}),mb=new Vt(new xs,__);Oi.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),wl.extractUrlBase(i)};Oi.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Dt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Dt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Dt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Dt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Dt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Mr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};bs.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};st.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};st.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};st.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};st.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};st.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};st.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Me.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Me.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new O().setFromMatrixColumn(this,3)};Me.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Me.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Me.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Me.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Me.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Me.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Me.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Ht.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};an.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};an.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Mi.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Mi.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Mi.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};tt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};tt.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};tt.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};tt.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};tt.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};tt.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),tt.getBarycoord(i,e,t,n,r)};tt.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),tt.getNormal(i,e,t,n)};Le.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Le.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};Le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};O.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};O.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};O.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};O.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};O.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};O.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};O.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};O.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};O.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};et.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};et.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};$e.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};$e.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};$e.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};$e.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};$e.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties($e.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Vt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Vt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Nd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});St.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(ra.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(Mt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===xo},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(xo)}}});Mt.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?xo:vo),this};Mt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Mt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};lt.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};lt.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new Mt(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};lt.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};lt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};lt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};lt.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};lt.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(lt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Rr.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ii.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Re}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===sc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}}});Object.defineProperties(si.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Fe.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Fe.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Fe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Fe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Fe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Fe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Fe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Fe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Fe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Fe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Fe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Fe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Fe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Fe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Fe.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Fe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Fe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Fe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Fe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Fe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Fe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Fe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Fe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Fe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Fe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Fe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Lc:xr}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(ml.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Cn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});ys.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};ys.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Kn.crossOrigin=void 0;Kn.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new yl;r.setCrossOrigin(this.crossOrigin);let s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Kn.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new xl;r.setCrossOrigin(this.crossOrigin);let s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Kn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Kn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var Sl="14.7.77",Tl=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),El=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),ca=(i,e)=>({startTime:e,type:"setValue",value:i}),Al=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),Cl=(i,e,{startTime:t,target:n,timeConstant:r})=>n+(e-n)*Math.exp((t-i)/r),ki=i=>i.type==="exponentialRampToValue",Ss=i=>i.type==="linearRampToValue",Vn=i=>ki(i)||Ss(i),la=i=>i.type==="setValue",Mn=i=>i.type==="setValueCurve",Ts=(i,e,t,n)=>{let r=i[e];return r===void 0?n:Vn(r)||la(r)?r.value:Mn(r)?r.values[r.values.length-1]:Cl(t,Ts(i,e-1,r.startTime,n),r)},Ll=(i,e,t,n,r)=>t===void 0?[n.insertTime,r]:Vn(t)?[t.endTime,t.value]:la(t)?[t.startTime,t.value]:Mn(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,Ts(i,e-1,t.startTime,r)],ua=i=>i.type==="cancelAndHold",ha=i=>i.type==="cancelScheduledValues",Bn=i=>ua(i)||ha(i)?i.cancelTime:ki(i)||Ss(i)?i.endTime:i.startTime,Rl=(i,e,t,{endTime:n,value:r})=>t===r?r:0<t&&0<r||t<0&&r<0?t*(r/t)**((i-e)/(n-e)):0,Dl=(i,e,t,{endTime:n,value:r})=>t+(i-e)/(n-e)*(r-t),v_=(i,e)=>{let t=Math.floor(e),n=Math.ceil(e);return t===n?i[t]:(1-(e-t))*i[t]+(1-(n-e))*i[n]},x_=(i,{duration:e,startTime:t,values:n})=>{let r=(i-t)/e*(n.length-1);return v_(n,r)},Es=i=>i.type==="setTarget",Pl=class{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){let t=Bn(e);if(ua(e)||ha(e)){let n=this._automationEvents.findIndex(s=>ha(e)&&Mn(s)?s.startTime+s.duration>=t:Bn(s)>=t),r=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),ua(e)){let s=this._automationEvents[this._automationEvents.length-1];if(r!==void 0&&Vn(r)){if(Es(s))throw new Error("The internal list is malformed.");let o=Mn(s)?s.startTime+s.duration:Bn(s),a=Mn(s)?s.values[s.values.length-1]:s.value,c=ki(r)?Rl(t,o,a,r):Dl(t,o,a,r),l=ki(r)?Tl(c,t,this._currenTime):El(c,t,this._currenTime);this._automationEvents.push(l)}s!==void 0&&Es(s)&&this._automationEvents.push(ca(this.getValue(t),t)),s!==void 0&&Mn(s)&&s.startTime+s.duration>t&&(this._automationEvents[this._automationEvents.length-1]=Al(new Float32Array([6,7]),s.startTime,t-s.startTime))}}else{let n=this._automationEvents.findIndex(o=>Bn(o)>t),r=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(r!==void 0&&Mn(r)&&Bn(r)+r.duration>t)return!1;let s=ki(e)?Tl(e.value,e.endTime,this._currenTime):Ss(e)?El(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(s);else{if(Mn(e)&&t+e.duration>Bn(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,s)}}return!0}flush(e){let t=this._automationEvents.findIndex(n=>Bn(n)>e);if(t>1){let n=this._automationEvents.slice(t-1),r=n[0];Es(r)&&n.unshift(ca(Ts(this._automationEvents,t-2,r.startTime,this._defaultValue),r.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;let t=this._automationEvents.findIndex(o=>Bn(o)>e),n=this._automationEvents[t],r=(t===-1?this._automationEvents.length:t)-1,s=this._automationEvents[r];if(s!==void 0&&Es(s)&&(n===void 0||!Vn(n)||n.insertTime>e))return Cl(e,Ts(this._automationEvents,r-1,s.startTime,this._defaultValue),s);if(s!==void 0&&la(s)&&(n===void 0||!Vn(n)))return s.value;if(s!==void 0&&Mn(s)&&(n===void 0||!Vn(n)||s.startTime+s.duration>e))return e<s.startTime+s.duration?x_(e,s):s.values[s.values.length-1];if(s!==void 0&&Vn(s)&&(n===void 0||!Vn(n)))return s.value;if(n!==void 0&&ki(n)){let[o,a]=Ll(this._automationEvents,r,s,n,this._defaultValue);return Rl(e,o,a,n)}if(n!==void 0&&Ss(n)){let[o,a]=Ll(this._automationEvents,r,s,n,this._defaultValue);return Dl(e,o,a,n)}return this._defaultValue}},y_=i=>({cancelTime:i,type:"cancelAndHold"}),w_=i=>({cancelTime:i,type:"cancelScheduledValues"}),b_=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),M_=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),S_=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),T_=()=>new DOMException("","AbortError"),E_=i=>(e,t,[n,r,s],o)=>{i(e[r],[t,n,s],a=>a[0]===t&&a[1]===n,o)},A_=i=>(e,t,n)=>{let r=[];for(let s=0;s<n.numberOfInputs;s+=1)r.push(new Set);i.set(e,{activeInputs:r,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},C_=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Vi=new WeakSet,Nl=new WeakMap,da=new WeakMap,Il=new WeakMap,fa=new WeakMap,As=new WeakMap,Fl=new WeakMap,pa=new WeakMap,ma=new WeakMap,ga=new WeakMap,Ol={construct(){return Ol}},L_=i=>{try{let e=new Proxy(i,Ol);new e}catch{return!1}return!0},kl=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Vl=(i,e)=>{let t=[],n=i.replace(/^[\s]+/,""),r=n.match(kl);for(;r!==null;){let s=r[1].slice(1,-1),o=r[0].replace(/([\s]+)?;?$/,"").replace(s,new URL(s,e).toString());t.push(o),n=n.slice(r[0].length).replace(/^[\s]+/,""),r=n.match(kl)}return[t.join(";"),n]},Bl=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Ul=i=>{if(!L_(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},R_=(i,e,t,n,r,s,o,a,c,l,u,h)=>(d,f,m={credentials:"omit"})=>{let _=s(d);if(_.audioWorklet!==void 0)return Promise.all([r(f),Promise.resolve(i(u,u))]).then(([[b,T],y])=>{let[x,M]=Vl(b,T),V=`${x};((AudioWorkletProcessor,registerProcessor)=>{${M}
})(${y?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${y?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${y?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac',class extends AudioWorkletProcessor{process(){return !1}})`,R=new Blob([V],{type:"application/javascript; charset=utf-8"}),C=URL.createObjectURL(R);return _.audioWorklet.addModule(C,m).then(()=>{if(a(_))return _;let P=o(_);return P.audioWorklet.addModule(C,m).then(()=>P)}).then(P=>{try{new AudioWorkletNode(P,"__sac")}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(C))});let v=l.get(d);if(v!==void 0&&v.has(f))return Promise.resolve();let p=c.get(d);if(p!==void 0){let b=p.get(f);if(b!==void 0)return b}let g=r(f).then(([b,T])=>{let[y,x]=Vl(b,T),M=`${y};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${x}
})})(window,'_AWGS')`;return t(M)}).then(()=>{let b=h._AWGS.pop();if(b===void 0)throw new SyntaxError;n(_.currentTime,_.sampleRate,()=>b(class{},void 0,(T,y)=>{if(T.trim()==="")throw e();let x=ma.get(_);if(x!==void 0){if(x.has(T))throw e();Ul(y),Bl(y.parameterDescriptors),x.set(T,y)}else Ul(y),Bl(y.parameterDescriptors),ma.set(_,new Map([[T,y]]))},_.sampleRate,void 0,void 0))});return p===void 0?c.set(d,new Map([[f,g]])):p.set(f,g),g.then(()=>{let b=l.get(d);b===void 0?l.set(d,new Set([f])):b.add(f)}).finally(()=>{let b=c.get(d);b!==void 0&&b.delete(f)}),g},jt=(i,e)=>{let t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Cs=(i,e)=>{let t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");let[n]=t;return i.delete(n),n},zl=(i,e,t,n)=>{let r=jt(i,e),s=Cs(r,o=>o[0]===t&&o[1]===n);return r.size===0&&i.delete(e),s},Dr=i=>jt(Fl,i),Bi=i=>{if(Vi.has(i))throw new Error("The AudioNode is already stored.");Vi.add(i),Dr(i).forEach(e=>e(!0))},Gl=i=>"port"in i,Pr=i=>{if(!Vi.has(i))throw new Error("The AudioNode is not stored.");Vi.delete(i),Dr(i).forEach(e=>e(!1))},_a=(i,e)=>{!Gl(i)&&e.every(t=>t.size===0)&&Pr(i)},D_=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>{let f=new WeakMap;return(m,_,v,p,g)=>{let{activeInputs:b,passiveInputs:T}=s(_),{outputs:y}=s(m),x=a(m),M=A=>{let E=c(_),k=c(m);if(A){let V=zl(T,m,v,p);i(b,m,V,!1),!g&&!h(m)&&t(k,E,v,p),d(_)&&Bi(_)}else{let V=n(b,m,v,p);e(T,p,V,!1),!g&&!h(m)&&r(k,E,v,p);let R=o(_);if(R===0)u(_)&&_a(_,b);else{let C=f.get(_);C!==void 0&&clearTimeout(C),f.set(_,setTimeout(()=>{u(_)&&_a(_,b)},R*1e3))}}};return l(y,[_,v,p],A=>A[0]===_&&A[1]===v&&A[2]===p,!0)?(x.add(M),u(m)?i(b,m,[v,p,M],!0):e(T,p,[m,v,M],!0),!0):!1}},P_=i=>(e,t,[n,r,s],o)=>{let a=e.get(n);a===void 0?e.set(n,new Set([[r,t,s]])):i(a,[r,t,s],c=>c[0]===r&&c[1]===t,o)},N_=i=>(e,t)=>{let n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);let r=()=>{t.removeEventListener("ended",r),t.disconnect(n),n.disconnect()};t.addEventListener("ended",r)},I_=i=>(e,t)=>{i(e).add(t)},F_={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},O_=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=r(a),u={...F_,...c},h=n(l,u),d=s(l)?e():null;super(a,!1,h,d);this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){let c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){let c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},gt=(i,e)=>i.context===e,k_=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!gt(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,fftSize:c.fftSize,maxDecibels:c.maxDecibels,minDecibels:c.minDecibels,smoothingTimeConstant:c.smoothingTimeConstant};c=i(o,u)}return n.set(o,c),await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Ls=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},ln=()=>new DOMException("","IndexSizeError"),va=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?ln():n}})(i.getChannelData)},V_={numberOfChannels:1},B_=(i,e,t,n,r,s,o,a)=>{let c=null;return class Wl{constructor(u){if(r===null)throw new Error("Missing the native OfflineAudioContext constructor.");let{length:h,numberOfChannels:d,sampleRate:f}={...V_,...u};c===null&&(c=new r(1,1,44100));let m=n!==null&&e(s,s)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(m.numberOfChannels===0)throw t();return typeof m.copyFromChannel!="function"?(o(m),va(m)):e(Ls,()=>Ls(m))||a(m),i.add(m),m}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===Wl.prototype||i.has(u)}}},Tt=-34028234663852886e22,xt=-Tt,Sn=i=>Vi.has(i),U_={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},z_=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d={...U_,...u},f=r(h,d),m=o(h),_=m?e():null;super(l,!1,f,_);this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,m,f.playbackRate,xt,Tt)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){let u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;let h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Bi(this);let d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Sn(this)&&Pr(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},G_=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=null,a=null,c=async(l,u,h)=>{let d=t(l),f=gt(d,u);if(!f){let m={buffer:d.buffer,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,loop:d.loop,loopEnd:d.loopEnd,loopStart:d.loopStart,playbackRate:d.playbackRate.value};d=e(u,m),o!==null&&d.start(...o),a!==null&&d.stop(a)}return s.set(u,d),f?await i(u,l.playbackRate,d.playbackRate,h):await n(u,l.playbackRate,d.playbackRate,h),await r(l,u,d,h),d};return{set start(l){o=l},set stop(l){a=l},render(l,u,h){let d=s.get(u);return d!==void 0?Promise.resolve(d):c(l,u,h)}}},W_=i=>"playbackRate"in i,H_=i=>"frequency"in i&&"gain"in i,q_=i=>"offset"in i,X_=i=>!("frequency"in i)&&"gain"in i,j_=i=>"detune"in i&&"frequency"in i,Y_=i=>"pan"in i,yt=i=>jt(Nl,i),Nr=i=>jt(Il,i),xa=(i,e)=>{let{activeInputs:t}=yt(i);t.forEach(r=>r.forEach(([s])=>{e.includes(i)||xa(s,[...e,i])}));let n=W_(i)?[i.playbackRate]:Gl(i)?Array.from(i.parameters.values()):H_(i)?[i.Q,i.detune,i.frequency,i.gain]:q_(i)?[i.offset]:X_(i)?[i.gain]:j_(i)?[i.detune,i.frequency]:Y_(i)?[i.pan]:[];for(let r of n){let s=Nr(r);s!==void 0&&s.activeInputs.forEach(([o])=>xa(o,e))}Sn(i)&&Pr(i)},Hl=i=>{xa(i.destination,[])},Z_=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),$_=(i,e,t,n,r,s,o,a,c)=>class extends i{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(m){throw m.code===12&&m.message==="sampleRate is not in range"?t():m}if(h===null)throw n();if(!Z_(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);let{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";let m=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",m)};h.addEventListener("statechange",m)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Hl(this)}))}createMediaElementSource(u){return new r(this,{mediaElement:u})}createMediaStreamDestination(){return new s(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{let d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},Q_=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d=o(h),f=r(h,u,d),m=d?e(a):null;super(l,!1,f,m);this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},J_=i=>{let e=null,t=async(n,r,s)=>{let o=r.destination;return await i(n,r,o,s),o};return{render(n,r,s){return e===null&&(e=t(n,r,s)),e}}},K_=(i,e,t,n,r)=>(s,o)=>{let a=o.listener,c=()=>{let g=e(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),b=r(o),T=n(o,256,9,0),y=(A,E)=>{let k=t(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:E});return k.connect(g,0,A),k.start(),Object.defineProperty(k.offset,"defaultValue",{get(){return E}}),i({context:s},b,k.offset,xt,Tt)},x=[0,0,-1,0,1,0],M=[0,0,0];return T.onaudioprocess=({inputBuffer:A})=>{let E=[A.getChannelData(0)[0],A.getChannelData(1)[0],A.getChannelData(2)[0],A.getChannelData(3)[0],A.getChannelData(4)[0],A.getChannelData(5)[0]];E.some((V,R)=>V!==x[R])&&(a.setOrientation(...E),x=E);let k=[A.getChannelData(6)[0],A.getChannelData(7)[0],A.getChannelData(8)[0]];k.some((V,R)=>V!==M[R])&&(a.setPosition(...k),M=k)},g.connect(T),{forwardX:y(0,0),forwardY:y(1,0),forwardZ:y(2,-1),positionX:y(6,0),positionY:y(7,0),positionZ:y(8,0),upX:y(3,0),upY:y(4,1),upZ:y(5,0)}},{forwardX:l,forwardY:u,forwardZ:h,positionX:d,positionY:f,positionZ:m,upX:_,upY:v,upZ:p}=a.forwardX===void 0?c():a;return{get forwardX(){return l},get forwardY(){return u},get forwardZ(){return h},get positionX(){return d},get positionY(){return f},get positionZ(){return m},get upX(){return _},get upY(){return v},get upZ(){return p}}},Rs=i=>"context"in i,Ir=i=>Rs(i[0]),oi=(i,e,t,n)=>{for(let r of i)if(t(r)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},ql=(i,e,[t,n],r)=>{oi(i,[e,t,n],s=>s[0]===e&&s[1]===t,r)},Xl=(i,[e,t,n],r)=>{let s=i.get(e);s===void 0?i.set(e,new Set([[t,n]])):oi(s,[t,n],o=>o[0]===t,r)},Ui=i=>"inputs"in i,Ds=(i,e,t,n)=>{if(Ui(e)){let r=e.inputs[n];return i.connect(r,t,0),[r,t,0]}return i.connect(e,t,n),[e,t,n]},jl=(i,e,t)=>{for(let n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},ev=(i,e,t)=>Cs(i,n=>n[0]===e&&n[1]===t),Yl=(i,e)=>{if(!Dr(i).delete(e))throw new Error("Missing the expected event listener.")},Zl=(i,e,t)=>{let n=jt(i,e),r=Cs(n,s=>s[0]===t);return n.size===0&&i.delete(e),r},Ps=(i,e,t,n)=>{Ui(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},Ge=i=>jt(da,i),Fr=i=>jt(fa,i),ai=i=>pa.has(i),Ns=i=>!Vi.has(i),$l=i=>new Promise(e=>{let t=i.createScriptProcessor(256,1,1),n=i.createGain(),r=i.createBuffer(1,2,44100),s=r.getChannelData(0);s[0]=1,s[1]=1;let o=i.createBufferSource();o.buffer=r,o.loop=!0,o.connect(t).connect(i.destination),o.connect(n),o.disconnect(n),t.onaudioprocess=a=>{let c=a.inputBuffer.getChannelData(0);Array.prototype.some.call(c,l=>l===1)?e(!0):e(!1),o.stop(),t.onaudioprocess=null,o.disconnect(t),t.disconnect(i.destination)},o.start()}),ya=(i,e)=>{let t=new Map;for(let n of i)for(let r of n){let s=t.get(r);t.set(r,s===void 0?1:s+1)}t.forEach((n,r)=>e(r,n))},Is=i=>"context"in i,tv=i=>{let e=new Map;i.connect=(t=>(n,r=0,s=0)=>{let o=Is(n)?t(n,r,s):t(n,r),a=e.get(n);return a===void 0?e.set(n,[{input:s,output:r}]):a.every(c=>c.input!==s||c.output!==r)&&a.push({input:s,output:r}),o})(i.connect.bind(i)),i.disconnect=(t=>(n,r,s)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(let[o,a]of e){let c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(r===void 0)e.delete(n);else{let o=e.get(n);if(o!==void 0){let a=o.filter(c=>c.output!==r&&(c.input!==s||s===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(let[o,a]of e)a.forEach(c=>{Is(o)?i.connect(o,c.output,c.input):i.connect(o,c.output)})})(i.disconnect)},nv=(i,e,t,n)=>{let{activeInputs:r,passiveInputs:s}=Nr(e),{outputs:o}=yt(i),a=Dr(i),c=l=>{let u=Ge(i),h=Fr(e);if(l){let d=Zl(s,i,t);ql(r,i,d,!1),!n&&!ai(i)&&u.connect(h,t)}else{let d=ev(r,i,t);Xl(s,d,!1),!n&&!ai(i)&&u.disconnect(h,t)}};return oi(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),Sn(i)?ql(r,i,[t,c],!0):Xl(s,[i,t,c],!0),!0):!1},iv=(i,e,t,n)=>{let{activeInputs:r,passiveInputs:s}=yt(e),o=jl(r[n],i,t);return o===null?[zl(s,i,t,n)[2],!1]:[o[2],!0]},rv=(i,e,t)=>{let{activeInputs:n,passiveInputs:r}=Nr(e),s=jl(n,i,t);return s===null?[Zl(r,i,t)[1],!1]:[s[2],!0]},wa=(i,e,t,n,r)=>{let[s,o]=iv(i,t,n,r);if(s!==null&&(Yl(i,s),o&&!e&&!ai(i)&&Ps(Ge(i),Ge(t),n,r)),Sn(t)){let{activeInputs:a}=yt(t);_a(t,a)}},ba=(i,e,t,n)=>{let[r,s]=rv(i,t,n);r!==null&&(Yl(i,r),s&&!e&&!ai(i)&&Ge(i).disconnect(Fr(t),n))},sv=(i,e)=>{let t=yt(i),n=[];for(let r of t.outputs)Ir(r)?wa(i,e,...r):ba(i,e,...r),n.push(r[0]);return t.outputs.clear(),n},ov=(i,e,t)=>{let n=yt(i),r=[];for(let s of n.outputs)s[1]===t&&(Ir(s)?wa(i,e,...s):ba(i,e,...s),r.push(s[0]),n.outputs.delete(s));return r},av=(i,e,t,n,r)=>{let s=yt(i);return Array.from(s.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(r===void 0||o[2]===r)).map(o=>(Ir(o)?wa(i,e,...o):ba(i,e,...o),s.outputs.delete(o),o[0]))},cv=(i,e,t,n,r,s,o,a,c,l,u,h,d,f,m)=>class extends l{constructor(v,p,g,b){super(g);this._context=v,this._nativeAudioNode=g;let T=u(v);h(T)&&t($l,()=>$l(T))!==!0&&tv(g),da.set(this,g),Fl.set(this,new Set),v.state!=="closed"&&p&&Bi(this),i(this,b,g)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(v){this._nativeAudioNode.channelCount=v}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(v){this._nativeAudioNode.channelCountMode=v}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(v){this._nativeAudioNode.channelInterpretation=v}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(v,p=0,g=0){if(p<0||p>=this._nativeAudioNode.numberOfOutputs)throw r();let b=u(this._context),T=m(b);if(d(v)||f(v))throw s();if(Rs(v)){let M=Ge(v);try{let E=Ds(this._nativeAudioNode,M,p,g),k=Ns(this);(T||k)&&this._nativeAudioNode.disconnect(...E),this.context.state!=="closed"&&!k&&Ns(v)&&Bi(v)}catch(E){throw E.code===12?s():E}if(e(this,v,p,g,T)){let E=c([this],v);ya(E,n(T))}return v}let y=Fr(v);if(y.name==="playbackRate"&&y.maxValue===1024)throw o();try{this._nativeAudioNode.connect(y,p),(T||Ns(this))&&this._nativeAudioNode.disconnect(y,p)}catch(M){throw M.code===12?s():M}if(nv(this,v,p,T)){let M=c([this],v);ya(M,n(T))}}disconnect(v,p,g){let b,T=u(this._context),y=m(T);if(v===void 0)b=sv(this,y);else if(typeof v=="number"){if(v<0||v>=this.numberOfOutputs)throw r();b=ov(this,y,v)}else{if(p!==void 0&&(p<0||p>=this.numberOfOutputs)||Rs(v)&&g!==void 0&&(g<0||g>=v.numberOfInputs))throw r();if(b=av(this,y,v,p,g),b.length===0)throw s()}for(let x of b){let M=c([this],x);ya(M,a)}}},lv=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>(f,m,_,v=null,p=null)=>{let g=new Pl(_.defaultValue),b=m?n(g):null,T={get defaultValue(){return _.defaultValue},get maxValue(){return v===null?_.maxValue:v},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(y){_.value=y,T.setValueAtTime(y,f.context.currentTime)},cancelAndHoldAtTime(y){if(typeof _.cancelAndHoldAtTime=="function")b===null&&g.flush(f.context.currentTime),g.add(r(y)),_.cancelAndHoldAtTime(y);else{let x=Array.from(g).pop();b===null&&g.flush(f.context.currentTime),g.add(r(y));let M=Array.from(g).pop();_.cancelScheduledValues(y),x!==M&&M!==void 0&&(M.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(M.value,M.endTime):M.type==="linearRampToValue"?_.linearRampToValueAtTime(M.value,M.endTime):M.type==="setValue"?_.setValueAtTime(M.value,M.startTime):M.type==="setValueCurve"&&_.setValueCurveAtTime(M.values,M.startTime,M.duration))}return T},cancelScheduledValues(y){return b===null&&g.flush(f.context.currentTime),g.add(s(y)),_.cancelScheduledValues(y),T},exponentialRampToValueAtTime(y,x){if(y===0)throw new RangeError;if(!Number.isFinite(x)||x<0)throw new RangeError;return b===null&&g.flush(f.context.currentTime),g.add(o(y,x)),_.exponentialRampToValueAtTime(y,x),T},linearRampToValueAtTime(y,x){return b===null&&g.flush(f.context.currentTime),g.add(a(y,x)),_.linearRampToValueAtTime(y,x),T},setTargetAtTime(y,x,M){return b===null&&g.flush(f.context.currentTime),g.add(c(y,x,M)),_.setTargetAtTime(y,x,M),T},setValueAtTime(y,x){return b===null&&g.flush(f.context.currentTime),g.add(l(y,x)),_.setValueAtTime(y,x),T},setValueCurveAtTime(y,x,M){let A=y instanceof Float32Array?y:new Float32Array(y);if(h!==null&&h.name==="webkitAudioContext"){let E=x+M,k=f.context.sampleRate,V=Math.ceil(x*k),R=Math.floor(E*k),C=R-V,P=new Float32Array(C);for(let D=0;D<C;D+=1){let U=(A.length-1)/M*((V+D)/k-x),H=Math.floor(U),j=Math.ceil(U);P[D]=H===j?A[H]:(1-(U-H))*A[H]+(1-(j-U))*A[j]}b===null&&g.flush(f.context.currentTime),g.add(u(P,x,M)),_.setValueCurveAtTime(P,x,M);let N=R/k;N<E&&d(T,P[P.length-1],N),d(T,A[A.length-1],E)}else b===null&&g.flush(f.context.currentTime),g.add(u(A,x,M)),_.setValueCurveAtTime(A,x,M);return T}};return t.set(T,_),e.set(T,f),i(T,b),T},uv=i=>({replay(e){for(let t of i)if(t.type==="exponentialRampToValue"){let{endTime:n,value:r}=t;e.exponentialRampToValueAtTime(r,n)}else if(t.type==="linearRampToValue"){let{endTime:n,value:r}=t;e.linearRampToValueAtTime(r,n)}else if(t.type==="setTarget"){let{startTime:n,target:r,timeConstant:s}=t;e.setTargetAtTime(r,n,s)}else if(t.type==="setValue"){let{startTime:n,value:r}=t;e.setValueAtTime(r,n)}else if(t.type==="setValueCurve"){let{duration:n,startTime:r,values:s}=t;e.setValueCurveAtTime(s,r,n)}else throw new Error("Can't apply an unknown automation.")}}),Ma=class{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,r)=>e.call(t,n,r,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}},hv={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},dv=(i,e,t,n,r,s,o,a,c,l,u,h,d,f)=>class extends e{constructor(_,v,p){var g;let b=a(_),T=c(b),y=u({...hv,...p});d(y);let x=ma.get(b),M=x==null?void 0:x.get(v),A=T||b.state!=="closed"?b:(g=o(b))!==null&&g!==void 0?g:b,E=r(A,T?null:_.baseLatency,l,v,M,y),k=T?n(v,y,M):null;super(_,!0,E,k);let V=[];E.parameters.forEach((C,P)=>{let N=t(this,T,C);V.push([P,N])}),this._nativeAudioWorkletNode=E,this._onprocessorerror=null,this._parameters=new Ma(V),T&&i(b,this);let{activeInputs:R}=s(this);h(E,R)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){let v=typeof _=="function"?f(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=v;let p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===v?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Fs(i,e,t,n,r){if(typeof i.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),i.copyFromChannel(e[t],n,r);else{let s=i.getChannelData(n);if(e[t].byteLength===0)e[t]=s.slice(r,r+128);else{let o=new Float32Array(s.buffer,r*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}var Ql=(i,e,t,n,r)=>{typeof i.copyToChannel=="function"?e[t].byteLength!==0&&i.copyToChannel(e[t],n,r):e[t].byteLength!==0&&i.getChannelData(n).set(e[t],r)},Os=(i,e)=>{let t=[];for(let n=0;n<i;n+=1){let r=[],s=typeof e=="number"?e:e[n];for(let o=0;o<s;o+=1)r.push(new Float32Array(128));t.push(r)}return t},fv=(i,e)=>{let t=jt(ga,i),n=Ge(e);return jt(t,n)},pv=async(i,e,t,n,r,s,o)=>{let a=e===null?Math.ceil(i.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=r.reduce((v,p)=>v+p,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(s===void 0)throw new Error("Missing the processor constructor.");let h=yt(i),d=await fv(t,i),f=Os(n.numberOfInputs,n.channelCount),m=Os(n.numberOfOutputs,r),_=Array.from(i.parameters.keys()).reduce((v,p)=>({...v,[p]:new Float32Array(128)}),{});for(let v=0;v<a;v+=128){if(n.numberOfInputs>0&&e!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let g=0;g<n.channelCount;g+=1)Fs(e,f[p],g,g,v);s.parameterDescriptors!==void 0&&e!==null&&s.parameterDescriptors.forEach(({name:p},g)=>{Fs(e,_,p,c+g,v)});for(let p=0;p<n.numberOfInputs;p+=1)for(let g=0;g<r[p];g+=1)m[p][g].byteLength===0&&(m[p][g]=new Float32Array(128));try{let p=f.map((b,T)=>h.activeInputs[T].size===0?[]:b),g=o(v/t.sampleRate,t.sampleRate,()=>d.process(p,m,_));if(u!==null)for(let b=0,T=0;b<n.numberOfOutputs;b+=1){for(let y=0;y<r[b];y+=1)Ql(u,m[b],y,T+y,v);T+=r[b]}if(!g)break}catch(p){i.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},mv=(i,e,t,n,r,s,o,a,c,l,u,h,d,f,m,_)=>(v,p,g)=>{let b=new WeakMap,T=null,y=async(x,M,A)=>{let E=u(x),k=null,V=gt(E,M),R=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){let C=R.reduce((U,H)=>U+H,0),P=r(M,{channelCount:Math.max(1,C),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,C)}),N=[];for(let U=0;U<x.numberOfOutputs;U+=1)N.push(n(M,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:R[U]}));let D=o(M,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});D.connect=e.bind(null,N),D.disconnect=c.bind(null,N),k=[P,N,D]}else V||(E=new h(M,v));if(b.set(M,k===null?E:k[2]),k!==null){if(T===null){if(g===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");let H=x.channelCount*x.numberOfInputs,j=g.parameterDescriptors===void 0?0:g.parameterDescriptors.length,Y=H+j;T=pv(x,Y===0?null:await(async()=>{let ae=new d(Y,Math.ceil(x.context.length/128)*128,M.sampleRate),$=[],_e=[];for(let be=0;be<p.numberOfInputs;be+=1)$.push(o(ae,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),_e.push(r(ae,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));let ve=await Promise.all(Array.from(x.parameters.values()).map(async be=>{let ce=s(ae,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:be.value});return await f(ae,be,ce.offset,A),ce})),F=n(ae,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,H+j)});for(let be=0;be<p.numberOfInputs;be+=1){$[be].connect(_e[be]);for(let ce=0;ce<p.channelCount;ce+=1)_e[be].connect(F,ce,be*p.channelCount+ce)}for(let[be,ce]of ve.entries())ce.connect(F,0,H+be),ce.start(0);return F.connect(ae.destination),await Promise.all($.map(be=>m(x,ae,be,A))),_(ae)})(),M,p,R,g,l)}let C=await T,P=t(M,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[N,D,U]=k;C!==null&&(P.buffer=C,P.start(0)),P.connect(N);for(let H=0,j=0;H<x.numberOfOutputs;H+=1){let Y=D[H];for(let J=0;J<R[H];J+=1)N.connect(Y,j+J,J);j+=R[H]}return U}if(V)for(let[C,P]of x.parameters.entries())await i(M,P,E.parameters.get(C),A);else for(let[C,P]of x.parameters.entries())await f(M,P,E.parameters.get(C),A);return await m(x,M,E,A),E};return{render(x,M,A){a(M,x);let E=b.get(M);return E!==void 0?Promise.resolve(E):y(x,M,A)}}},gv=(i,e,t,n,r,s,o,a,c,l,u,h,d,f,m,_,v,p,g,b)=>class extends m{constructor(y,x){super(y,x);this._nativeContext=y,this._audioWorklet=i===void 0?void 0:{addModule:(M,A)=>i(this,M,A)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new r(this)}createBuffer(y,x,M){return new t({length:x,numberOfChannels:y,sampleRate:M})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new s(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new u(this,{maxDelayTime:y})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(y,x){return new f(this,{feedback:x,feedforward:y})}createOscillator(){return new _(this)}createPanner(){return new v(this)}createPeriodicWave(y,x,M={disableNormalization:!1}){return new p(this,{...M,imag:x,real:y})}createStereoPanner(){return new g(this)}createWaveShaper(){return new b(this)}decodeAudioData(y,x,M){return l(this._nativeContext,y).then(A=>(typeof x=="function"&&x(A),A)).catch(A=>{throw typeof M=="function"&&M(A),A})}},_v={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},vv=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d={..._v,...u},f=r(h,d),m=o(h),_=m?t():null;super(l,!1,f,_);this._Q=e(this,m,f.Q,xt,Tt),this._detune=e(this,m,f.detune,1200*Math.log2(xt),-1200*Math.log2(xt)),this._frequency=e(this,m,f.frequency,l.sampleRate/2,0),this._gain=e(this,m,f.gain,40*Math.log10(xt),Tt),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},xv=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=gt(u,c);if(!h){let d={Q:u.Q.value,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,detune:u.detune.value,frequency:u.frequency.value,gain:u.gain.value,type:u.type};u=e(c,d)}return s.set(c,u),h?(await i(c,a.Q,u.Q,l),await i(c,a.detune,u.detune,l),await i(c,a.frequency,u.frequency,l),await i(c,a.gain,u.gain,l)):(await n(c,a.Q,u.Q,l),await n(c,a.detune,u.detune,l),await n(c,a.frequency,u.frequency,l),await n(c,a.gain,u.gain,l)),await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},yv=(i,e)=>(t,n)=>{let r=e.get(t);if(r!==void 0)return r;let s=i.get(t);if(s!==void 0)return s;try{let o=n();return o instanceof Promise?(i.set(t,o),o.catch(()=>!1).then(a=>(i.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},wv={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},bv=(i,e,t,n,r)=>class extends i{constructor(o,a){let c=n(o),l={...wv,...a},u=t(c,l),h=r(c)?e():null;super(o,!1,u,h)}},Mv=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!gt(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfInputs:c.numberOfInputs};c=i(o,u)}return n.set(o,c),await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Sv={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Tv=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=n(a),u=s({...Sv,...c}),h=t(l,u),d=r(l)?e():null;super(a,!1,h,d)}},Ev=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!gt(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfOutputs:c.numberOfOutputs};c=i(o,u)}return n.set(o,c),await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Av=i=>(e,t,n,r)=>i(t,e,n,r),Cv=i=>(e,t,n=0,r=0)=>{let s=e[n];if(s===void 0)throw i();return Is(t)?s.connect(t,0,r):s.connect(t,0)},Lv=i=>(e,t)=>{let n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),r=e.createBuffer(1,2,44100);return n.buffer=r,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Rv={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Dv=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...Rv,...l},d=n(u,h),f=s(u),m=f?t():null;super(c,!1,d,m);this._constantSourceNodeRenderer=m,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,xt,Tt),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){let l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;let u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Bi(this);let l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Sn(this)&&Pr(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},Pv=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=null,a=null,c=async(l,u,h)=>{let d=t(l),f=gt(d,u);if(!f){let m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,offset:d.offset.value};d=e(u,m),o!==null&&d.start(o),a!==null&&d.stop(a)}return s.set(u,d),f?await i(u,l.offset,d.offset,h):await n(u,l.offset,d.offset,h),await r(l,u,d,h),d};return{set start(l){o=l},set stop(l){a=l},render(l,u,h){let d=s.get(u);return d!==void 0?Promise.resolve(d):c(l,u,h)}}},Nv=i=>e=>(i[0]=e,i[0]),Iv={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Fv=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=n(a),u={...Iv,...c},h=t(l,u),f=r(l)?e():null;super(a,!1,h,f);this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&s(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){let c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,44100),this._isBufferNullified=!0,s(this,0)}else this._isBufferNullified=!1,s(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},Ov=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!gt(c,o)){let u={buffer:c.buffer,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,disableNormalization:!c.normalize};c=i(o,u)}return n.set(o,c),Ui(c)?await t(s,o,c.inputs[0],a):await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},kv=(i,e)=>(t,n,r)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,r)}catch(s){throw s.name==="SyntaxError"?i():s}},Vv=()=>new DOMException("","DataCloneError"),Jl=i=>{let{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{t.onmessage=()=>{e.close(),t.close(),n()},e.postMessage(i,[i])})},Bv=(i,e,t,n,r,s,o,a,c,l,u)=>(h,d)=>{let f=o(h)?h:s(h);if(r.has(d)){let m=t();return Promise.reject(m)}try{r.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(m=>((async()=>{try{await Jl(d)}catch{}})(),e(a,()=>a(m))||u(m),i.add(m),m)):new Promise((m,_)=>{let v=async()=>{try{await Jl(d)}catch{}},p=g=>{_(g),v()};try{f.decodeAudioData(d,g=>{typeof g.copyFromChannel!="function"&&(l(g),va(g)),i.add(g),v().then(()=>m(g))},g=>{p(g===null?n():g)})}catch(g){p(g)}})},Uv=(i,e,t,n,r,s,o,a)=>(c,l)=>{let u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");let h=s(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){let f=n(c),{outputs:m}=t(c);for(let _ of m)if(Ir(_)){let v=n(_[0]);i(f,v,_[1],_[2])}else{let v=r(_[0]);f.connect(v,_[1])}}}else e.set(c,u-l)},zv={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},Gv=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...zv,...l},d=n(u,h),f=s(u),m=f?t(h.maxDelayTime):null;super(c,!1,d,m);this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},Wv=(i,e,t,n,r)=>s=>{let o=new WeakMap,a=async(c,l,u)=>{let h=t(c),d=gt(h,l);if(!d){let f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:s};h=e(l,f)}return o.set(l,h),d?await i(l,c.delayTime,h.delayTime,u):await n(l,c.delayTime,h.delayTime,u),await r(c,l,h,u),h};return{render(c,l,u){let h=o.get(l);return h!==void 0?Promise.resolve(h):a(c,l,u)}}},Hv=i=>(e,t,n,r)=>i(e[r],s=>s[0]===t&&s[1]===n),qv=i=>(e,t)=>{i(e).delete(t)},Xv=i=>"delayTime"in i,jv=(i,e,t)=>function n(r,s){let o=Rs(s)?s:t(i,s);if(Xv(o))return[];if(r[0]===o)return[r];if(r.includes(o))return[];let{outputs:a}=e(o);return Array.from(a).map(c=>n([...r,o],c[0])).reduce((c,l)=>c.concat(l),[])},ks=(i,e,t)=>{let n=e[t];if(n===void 0)throw i();return n},Yv=i=>(e,t=void 0,n=void 0,r=0)=>t===void 0?e.forEach(s=>s.disconnect()):typeof t=="number"?ks(i,e,t).disconnect():Is(t)?n===void 0?e.forEach(s=>s.disconnect(t)):r===void 0?ks(i,e,n).disconnect(t,0):ks(i,e,n).disconnect(t,0,r):n===void 0?e.forEach(s=>s.disconnect(t)):ks(i,e,n).disconnect(t,0),Zv={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},$v=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d={...Zv,...u},f=n(h,d),m=o(h),_=m?t():null;super(l,!1,f,_);this._attack=e(this,m,f.attack),this._knee=e(this,m,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,m,f.ratio),this._release=e(this,m,f.release),this._threshold=e(this,m,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){let u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,r()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){let u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,r()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Qv=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=gt(u,c);if(!h){let d={attack:u.attack.value,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,knee:u.knee.value,ratio:u.ratio.value,release:u.release.value,threshold:u.threshold.value};u=e(c,d)}return s.set(c,u),h?(await i(c,a.attack,u.attack,l),await i(c,a.knee,u.knee,l),await i(c,a.ratio,u.ratio,l),await i(c,a.release,u.release,l),await i(c,a.threshold,u.threshold,l)):(await n(c,a.attack,u.attack,l),await n(c,a.knee,u.knee,l),await n(c,a.ratio,u.ratio,l),await n(c,a.release,u.release,l),await n(c,a.threshold,u.threshold,l)),await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},Jv=()=>new DOMException("","EncodingError"),Kv=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}let r=i.document.head;if(r===null)n(new SyntaxError);else{let s=i.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(a)};i.onerror=(u,h,d,f,m)=>{if(h===a||h===i.location.href&&d===1&&f===1)return l(),n(m),!1;if(c!==null)return c(u,h,d,f,m)},s.onerror=()=>{l(),n(new SyntaxError)},s.onload=()=>{l(),t()},s.src=a,s.type="module",r.appendChild(s)}}),ex=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,r){if(n!==null){let s=this._listeners.get(n);s===void 0&&(s=i(this,n),typeof n=="function"&&this._listeners.set(n,s)),this._nativeEventTarget.addEventListener(t,s,r)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,r){let s=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,s===void 0?null:s,r)}},tx=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},nx=i=>async e=>{try{let t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},ix={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},rx=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=r(a),u={...ix,...c},h=n(l,u),d=s(l),f=d?t():null;super(a,!1,h,f);this._gain=e(this,d,h.gain,xt,Tt)}get gain(){return this._gain}},sx=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=gt(u,c);if(!h){let d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,gain:u.gain.value};u=e(c,d)}return s.set(c,u),h?await i(c,a.gain,u.gain,l):await n(c,a.gain,u.gain,l),await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},ox=(i,e)=>t=>e(i,t),ax=i=>e=>{let t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},cx=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},lx=i=>e=>{let t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},ux=i=>e=>i.get(e),at=()=>new DOMException("","InvalidStateError"),hx=i=>e=>{let t=i.get(e);if(t===void 0)throw at();return t},dx=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),i.set(t,n),n},fx=i=>e=>{let t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Vs=()=>new DOMException("","InvalidAccessError"),px=i=>{i.getFrequencyResponse=(e=>(t,n,r)=>{if(t.length!==n.length||n.length!==r.length)throw Vs();return e.call(i,t,n,r)})(i.getFrequencyResponse)},mx={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},gx=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=n(a),u=r(l),h={...mx,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f);px(d),this._nativeIIRFilterNode=d,s(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},Kl=(i,e,t,n,r,s,o,a,c,l,u)=>{let h=l.length,d=a;for(let f=0;f<h;f+=1){let m=t[0]*l[f];for(let _=1;_<r;_+=1){let v=d-_&c-1;m+=t[_]*s[v],m-=i[_]*o[v]}for(let _=r;_<n;_+=1)m+=t[_]*s[d-_&c-1];for(let _=r;_<e;_+=1)m-=i[_]*o[d-_&c-1];s[d]=l[f],o[d]=m,d=d+1&c-1,u[f]=m}return d},_x=(i,e,t,n)=>{let r=t instanceof Float64Array?t:new Float64Array(t),s=n instanceof Float64Array?n:new Float64Array(n),o=r.length,a=s.length,c=Math.min(o,a);if(r[0]!==1){for(let m=0;m<o;m+=1)s[m]/=r[0];for(let m=1;m<a;m+=1)r[m]/=r[0]}let l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),f=i.numberOfChannels;for(let m=0;m<f;m+=1){let _=i.getChannelData(m),v=d.getChannelData(m);u.fill(0),h.fill(0),Kl(r,o,s,a,c,u,h,0,l,_,v)}return d},vx=(i,e,t,n,r)=>(s,o)=>{let a=new WeakMap,c=null,l=async(u,h,d)=>{let f=null,m=e(u),_=gt(m,h);if(h.createIIRFilter===void 0?f=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):_||(m=h.createIIRFilter(o,s)),a.set(h,f===null?m:f),f!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");let p=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,p,p.destination,d);let g=await r(p);return _x(g,h,s,o)})()}let v=await c;return f.buffer=v,f.start(0),f}return await n(u,h,m,d),m};return{render(u,h,d){let f=a.get(h);return f!==void 0?Promise.resolve(f):l(u,h,d)}}},xx=(i,e,t,n,r,s)=>o=>(a,c)=>{let l=i.get(a);if(l===void 0){if(!o&&s(a)){let u=n(a),{outputs:h}=t(a);for(let d of h)if(Ir(d)){let f=n(d[0]);e(u,f,d[1],d[2])}else{let f=r(d[0]);u.disconnect(f,d[1])}}i.set(a,c)}else i.set(a,l+c)},yx=(i,e)=>t=>{let n=i.get(t);return e(n)||e(t)},wx=(i,e)=>t=>i.has(t)||e(t),bx=(i,e)=>t=>i.has(t)||e(t),Mx=(i,e)=>t=>{let n=i.get(t);return e(n)||e(t)},Sx=i=>e=>i!==null&&e instanceof i,Tx=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,Ex=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,Ax=(i,e)=>t=>i(t)||e(t),Cx=i=>e=>i!==null&&e instanceof i,Lx=i=>i!==null&&i.isSecureContext,Rx=(i,e,t,n)=>class extends i{constructor(s,o){let a=t(s),c=e(a,o);if(n(a))throw TypeError();super(s,!0,c,null);this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Dx={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Px=(i,e,t,n)=>class extends i{constructor(s,o){let a=t(s);if(n(a))throw new TypeError;let c={...Dx,...o},l=e(a,c);super(s,!1,l,null);this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Nx=(i,e,t,n)=>class extends i{constructor(s,o){let a=t(s),c=e(a,o);if(n(a))throw new TypeError;super(s,!0,c,null);this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Ix=(i,e,t)=>class extends i{constructor(r,s){let o=t(r),a=e(o,s);super(r,!0,a,null)}},Fx=(i,e,t,n,r,s)=>class extends t{constructor(a,c){super(a);this._nativeContext=a,As.set(this,a),n(a)&&r.set(a,new Set),this._destination=new i(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){let c=typeof a=="function"?s(this,a):null;this._nativeContext.onstatechange=c;let l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Or=i=>{let e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{let t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Ox=(i,e)=>(t,n,r)=>{let s=new Set;return t.connect=(o=>(a,c=0,l=0)=>{let u=s.size===0;if(e(a))return o.call(t,a,c,l),i(s,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),i(s,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{let u=s.size>0;if(a===void 0)o.apply(t),s.clear();else if(typeof a=="number"){o.call(t,a);for(let d of s)d[1]===a&&s.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(let d of s)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&s.delete(d)}let h=s.size===0;u&&h&&r()})(t.disconnect),t},He=(i,e,t)=>{let n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},nt=(i,e)=>{He(i,e,"channelCount"),He(i,e,"channelCountMode"),He(i,e,"channelInterpretation")},eu=i=>typeof i.getFloatTimeDomainData=="function",kx=i=>{i.getFloatTimeDomainData=e=>{let t=new Uint8Array(e.length);i.getByteTimeDomainData(t);let n=Math.max(t.length,i.fftSize);for(let r=0;r<n;r+=1)e[r]=(t[r]-128)*.0078125;return e}},Vx=(i,e)=>(t,n)=>{let r=t.createAnalyser();if(nt(r,n),!(n.maxDecibels>n.minDecibels))throw e();return He(r,n,"fftSize"),He(r,n,"maxDecibels"),He(r,n,"minDecibels"),He(r,n,"smoothingTimeConstant"),i(eu,()=>eu(r))||kx(r),r},Bx=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,je=(i,e,t)=>{let n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},Ux=i=>{i.start=(e=>{let t=!1;return(n=0,r=0,s)=>{if(t)throw at();e.call(i,n,r,s),t=!0}})(i.start)},Sa=i=>{i.start=(e=>(t=0,n=0,r)=>{if(typeof r=="number"&&r<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,r)})(i.start)},Ta=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},zx=(i,e,t,n,r,s,o,a,c,l,u)=>(h,d)=>{let f=h.createBufferSource();return nt(f,d),je(f,d,"playbackRate"),He(f,d,"buffer"),He(f,d,"loop"),He(f,d,"loopEnd"),He(f,d,"loopStart"),e(t,()=>t(h))||Ux(f),e(n,()=>n(h))||c(f),e(r,()=>r(h))||l(f,h),e(s,()=>s(h))||Sa(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||Ta(f),i(h,f),f},Gx=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,Wx=(i,e)=>(t,n,r)=>{let s=t.destination;if(s.channelCount!==n)try{s.channelCount=n}catch{}r&&s.channelCountMode!=="explicit"&&(s.channelCountMode="explicit"),s.maxChannelCount===0&&Object.defineProperty(s,"maxChannelCount",{value:n});let o=i(t,{channelCount:n,channelCountMode:s.channelCountMode,channelInterpretation:s.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{s.channelCount=c}catch(l){if(c>s.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),s.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),s.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>s.maxChannelCount}),o.connect(s),o},Hx=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,qx=i=>{let{port1:e}=new MessageChannel;try{e.postMessage(i)}finally{e.close()}},Xx=(i,e,t,n,r)=>(s,o,a,c,l,u)=>{if(a!==null)try{let h=new a(s,c,u),d=new Map,f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>f,set:m=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof m=="function"?m:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){let v=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(v!==null){let p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=g=>{g.type==="error"?(Object.defineProperties(g,{type:{value:"processorerror"}}),v(g)):v(new ErrorEvent(_[0],{...g}))},d.set(v,_[1]))}}return m.call(h,"error",_[1],_[2]),m.call(h,..._)})(h.addEventListener),h.removeEventListener=(m=>(..._)=>{if(_[0]==="processorerror"){let v=d.get(_[1]);v!==void 0&&(d.delete(_[1]),_[1]=v)}return m.call(h,"error",_[1],_[2]),m.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){let m=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(m).connect(s.destination),r(h,()=>m.disconnect(),()=>m.connect(s.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return qx(u),e(s,o,l,u)},tu=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),jx=i=>new Promise((e,t)=>{let{port1:n,port2:r}=new MessageChannel;n.onmessage=({data:s})=>{n.close(),r.close(),e(s)},n.onmessageerror=({data:s})=>{n.close(),r.close(),t(s)},r.postMessage(i)}),Yx=async(i,e)=>{let t=await jx(e);return new i(t)},Zx=(i,e,t,n)=>{let r=ga.get(i);r===void 0&&(r=new WeakMap,ga.set(i,r));let s=Yx(t,n);return r.set(e,s),s},$x=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>(f,m,_,v)=>{if(v.numberOfInputs===0&&v.numberOfOutputs===0)throw c();let p=Array.isArray(v.outputChannelCount)?v.outputChannelCount:Array.from(v.outputChannelCount);if(p.some(Z=>Z<1))throw c();if(p.length!==v.numberOfOutputs)throw e();if(v.channelCountMode!=="explicit")throw c();let g=v.channelCount*v.numberOfInputs,b=p.reduce((Z,se)=>Z+se,0),T=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(g+T>6||b>6)throw c();let y=new MessageChannel,x=[],M=[];for(let Z=0;Z<v.numberOfInputs;Z+=1)x.push(o(f,{channelCount:v.channelCount,channelCountMode:v.channelCountMode,channelInterpretation:v.channelInterpretation,gain:1})),M.push(r(f,{channelCount:v.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:v.channelCount}));let A=[];if(_.parameterDescriptors!==void 0)for(let{defaultValue:Z,maxValue:se,minValue:L,name:S}of _.parameterDescriptors){let W=s(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:v.parameterData[S]!==void 0?v.parameterData[S]:Z===void 0?0:Z});Object.defineProperties(W.offset,{defaultValue:{get:()=>Z===void 0?0:Z},maxValue:{get:()=>se===void 0?xt:se},minValue:{get:()=>L===void 0?Tt:L}}),A.push(W)}let E=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,g+T)}),k=tu(m,f.sampleRate),V=a(f,k,g+T,Math.max(1,b)),R=r(f,{channelCount:Math.max(1,b),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,b)}),C=[];for(let Z=0;Z<v.numberOfOutputs;Z+=1)C.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[Z]}));for(let Z=0;Z<v.numberOfInputs;Z+=1){x[Z].connect(M[Z]);for(let se=0;se<v.channelCount;se+=1)M[Z].connect(E,se,Z*v.channelCount+se)}let P=new Ma(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:Z},se)=>{let L=A[se];return L.connect(E,0,g+se),L.start(0),[Z,L.offset]}));E.connect(V);let N=v.channelInterpretation,D=null,U=v.numberOfOutputs===0?[V]:C,H={get bufferSize(){return k},get channelCount(){return v.channelCount},set channelCount(Z){throw t()},get channelCountMode(){return v.channelCountMode},set channelCountMode(Z){throw t()},get channelInterpretation(){return N},set channelInterpretation(Z){for(let se of x)se.channelInterpretation=Z;N=Z},get context(){return V.context},get inputs(){return x},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},get onprocessorerror(){return D},set onprocessorerror(Z){typeof D=="function"&&H.removeEventListener("processorerror",D),D=typeof Z=="function"?Z:null,typeof D=="function"&&H.addEventListener("processorerror",D)},get parameters(){return P},get port(){return y.port2},addEventListener(...Z){return V.addEventListener(Z[0],Z[1],Z[2])},connect:i.bind(null,U),disconnect:l.bind(null,U),dispatchEvent(...Z){return V.dispatchEvent(Z[0])},removeEventListener(...Z){return V.removeEventListener(Z[0],Z[1],Z[2])}},j=new Map;y.port1.addEventListener=(Z=>(...se)=>{if(se[0]==="message"){let L=typeof se[1]=="function"?se[1]:typeof se[1]=="object"&&se[1]!==null&&typeof se[1].handleEvent=="function"?se[1].handleEvent:null;if(L!==null){let S=j.get(se[1]);S!==void 0?se[1]=S:(se[1]=W=>{u(f.currentTime,f.sampleRate,()=>L(W))},j.set(L,se[1]))}}return Z.call(y.port1,se[0],se[1],se[2])})(y.port1.addEventListener),y.port1.removeEventListener=(Z=>(...se)=>{if(se[0]==="message"){let L=j.get(se[1]);L!==void 0&&(j.delete(se[1]),se[1]=L)}return Z.call(y.port1,se[0],se[1],se[2])})(y.port1.removeEventListener);let Y=null;Object.defineProperty(y.port1,"onmessage",{get:()=>Y,set:Z=>{typeof Y=="function"&&y.port1.removeEventListener("message",Y),Y=typeof Z=="function"?Z:null,typeof Y=="function"&&(y.port1.addEventListener("message",Y),y.port1.start())}}),_.prototype.port=y.port1;let J=null;Zx(f,H,_,v).then(Z=>J=Z);let $=Os(v.numberOfInputs,v.channelCount),_e=Os(v.numberOfOutputs,p),ve=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((Z,{name:se})=>({...Z,[se]:new Float32Array(128)}),{}),F=!0,be=()=>{v.numberOfOutputs>0&&V.disconnect(R);for(let Z=0,se=0;Z<v.numberOfOutputs;Z+=1){let L=C[Z];for(let S=0;S<p[Z];S+=1)R.disconnect(L,se+S,S);se+=p[Z]}},ce=new Map;V.onaudioprocess=({inputBuffer:Z,outputBuffer:se})=>{if(J!==null){let L=h(H);for(let S=0;S<k;S+=128){for(let W=0;W<v.numberOfInputs;W+=1)for(let X=0;X<v.channelCount;X+=1)Fs(Z,$[W],X,X,S);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:W},X)=>{Fs(Z,ve,W,g+X,S)});for(let W=0;W<v.numberOfInputs;W+=1)for(let X=0;X<p[W];X+=1)_e[W][X].byteLength===0&&(_e[W][X]=new Float32Array(128));try{let W=$.map((re,te)=>{if(L[te].size>0)return ce.set(te,k/128),re;let ge=ce.get(te);return ge===void 0?[]:(re.every(we=>we.every(oe=>oe===0))&&(ge===1?ce.delete(te):ce.set(te,ge-1)),re)});F=u(f.currentTime+S/f.sampleRate,f.sampleRate,()=>J.process(W,_e,ve));for(let re=0,te=0;re<v.numberOfOutputs;re+=1){for(let le=0;le<p[re];le+=1)Ql(se,_e[re],le,te+le,S);te+=p[re]}}catch(W){F=!1,H.dispatchEvent(new ErrorEvent("processorerror",{colno:W.colno,filename:W.filename,lineno:W.lineno,message:W.message}))}if(!F){for(let W=0;W<v.numberOfInputs;W+=1){x[W].disconnect(M[W]);for(let X=0;X<v.channelCount;X+=1)M[S].disconnect(E,X,W*v.channelCount+X)}if(_.parameterDescriptors!==void 0){let W=_.parameterDescriptors.length;for(let X=0;X<W;X+=1){let re=A[X];re.disconnect(E,0,g+X),re.stop()}}E.disconnect(V),V.onaudioprocess=null,de?be():Ne();break}}}};let de=!1,pe=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Pe=()=>V.connect(pe).connect(f.destination),Ne=()=>{V.disconnect(pe),pe.disconnect()},ze=()=>{if(F){Ne(),v.numberOfOutputs>0&&V.connect(R);for(let Z=0,se=0;Z<v.numberOfOutputs;Z+=1){let L=C[Z];for(let S=0;S<p[Z];S+=1)R.connect(L,se+S,S);se+=p[Z]}}de=!0},bt=()=>{F&&(Pe(),be()),de=!1};return Pe(),d(H,ze,bt)},nu=(i,e)=>{let t=i.createBiquadFilter();return nt(t,e),je(t,e,"Q"),je(t,e,"detune"),je(t,e,"frequency"),je(t,e,"gain"),He(t,e,"type"),t},Qx=(i,e)=>(t,n)=>{let r=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,r),nt(r,n),r},Jx=i=>{let e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw at()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw at()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw at()}})},kr=(i,e)=>{let t=i.createChannelSplitter(e.numberOfOutputs);return nt(t,e),Jx(t),t},Kx=(i,e,t,n,r)=>(s,o)=>{if(s.createConstantSource===void 0)return t(s,o);let a=s.createConstantSource();return nt(a,o),je(a,o,"offset"),e(n,()=>n(s))||Sa(a),e(r,()=>r(s))||Ta(a),i(s,a),a},zi=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),e0=(i,e,t,n)=>(r,{offset:s,...o})=>{let a=r.createBuffer(1,2,44100),c=e(r,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(r,{...o,gain:s}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;let h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(m){l.channelCount=m},get channelCountMode(){return l.channelCountMode},set channelCountMode(m){l.channelCountMode=m},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(m){l.channelInterpretation=m},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(m){c.onended=m},addEventListener(...m){return c.addEventListener(m[0],m[1],m[2])},dispatchEvent(...m){return c.dispatchEvent(m[0])},removeEventListener(...m){return c.removeEventListener(m[0],m[1],m[2])},start(m=0){c.start.call(c,m)},stop(m=0){c.stop.call(c,m)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return i(r,c),n(zi(h,l),d,f)},t0=(i,e)=>(t,n)=>{let r=t.createConvolver();if(nt(r,n),n.disableNormalization===r.normalize&&(r.normalize=!n.disableNormalization),He(r,n,"buffer"),n.channelCount>2||(e(r,"channelCount",s=>()=>s.call(r),s=>o=>{if(o>2)throw i();return s.call(r,o)}),n.channelCountMode==="max"))throw i();return e(r,"channelCountMode",s=>()=>s.call(r),s=>o=>{if(o==="max")throw i();return s.call(r,o)}),r},iu=(i,e)=>{let t=i.createDelay(e.maxDelayTime);return nt(t,e),je(t,e,"delayTime"),t},n0=i=>(e,t)=>{let n=e.createDynamicsCompressor();if(nt(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return je(n,t,"attack"),je(n,t,"knee"),je(n,t,"ratio"),je(n,t,"release"),je(n,t,"threshold"),n},Et=(i,e)=>{let t=i.createGain();return nt(t,e),je(t,e,"gain"),t},i0=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);let r=e.createIIRFilter(n.feedforward,n.feedback);return nt(r,n),r};function r0(i,e){let t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function s0(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function ru(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=s0(t,e),t[0]+=i[n];return t}var o0=(i,e,t,n)=>(r,s,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{let h=tu(s,r.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),m=d.length,_=f.length,v=Math.min(m,_);if(m===0||m>20)throw n();if(d[0]===0)throw e();if(_===0||_>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let A=0;A<_;A+=1)f[A]/=d[0];for(let A=1;A<m;A+=1)d[A]/=d[0]}let p=t(r,h,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;let g=32,b=[],T=[],y=[];for(let A=0;A<o;A+=1){b.push(0);let E=new Float32Array(g),k=new Float32Array(g);E.fill(0),k.fill(0),T.push(E),y.push(k)}p.onaudioprocess=A=>{let E=A.inputBuffer,k=A.outputBuffer,V=E.numberOfChannels;for(let R=0;R<V;R+=1){let C=E.getChannelData(R),P=k.getChannelData(R);b[R]=Kl(d,m,f,_,v,T[R],y[R],b[R],g,C,P)}};let x=r.sampleRate/2;return zi({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(A){p.channelCount=A},get channelCountMode(){return p.channelCountMode},set channelCountMode(A){p.channelCountMode=A},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(A){p.channelInterpretation=A},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...A){return p.addEventListener(A[0],A[1],A[2])},dispatchEvent(...A){return p.dispatchEvent(A[0])},getFrequencyResponse(A,E,k){if(A.length!==E.length||E.length!==k.length)throw i();let V=A.length;for(let R=0;R<V;R+=1){let C=-Math.PI*(A[R]/x),P=[Math.cos(C),Math.sin(C)],N=ru(f,P),D=ru(d,P),U=r0(N,D);E[R]=Math.sqrt(U[0]*U[0]+U[1]*U[1]),k[R]=Math.atan2(U[1],U[0])}},removeEventListener(...A){return p.removeEventListener(A[0],A[1],A[2])}},p)},a0=(i,e)=>i.createMediaElementSource(e.mediaElement),c0=(i,e)=>{let t=i.createMediaStreamDestination();return nt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},l0=(i,{mediaStream:e})=>{let t=e.getAudioTracks();t.sort((s,o)=>s.id<o.id?-1:s.id>o.id?1:0);let n=t.slice(0,1),r=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(r,"mediaStream",{value:e}),r},u0=(i,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);let r=new MediaStream([n]),s=t.createMediaStreamSource(r);if(n.kind!=="audio")throw i();if(e(t))throw new TypeError;return s},h0=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,d0=(i,e,t,n,r,s)=>(o,a)=>{let c=o.createOscillator();return nt(c,a),je(c,a,"detune"),je(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):He(c,a,"type"),e(t,()=>t(o))||Sa(c),e(n,()=>n(o))||s(c,o),e(r,()=>r(o))||Ta(c),i(o,c),c},f0=i=>(e,t)=>{let n=e.createPanner();return n.orientationX===void 0?i(e,t):(nt(n,t),je(n,t,"orientationX"),je(n,t,"orientationY"),je(n,t,"orientationZ"),je(n,t,"positionX"),je(n,t,"positionY"),je(n,t,"positionZ"),He(n,t,"coneInnerAngle"),He(n,t,"coneOuterAngle"),He(n,t,"coneOuterGain"),He(n,t,"distanceModel"),He(n,t,"maxDistance"),He(n,t,"panningModel"),He(n,t,"refDistance"),He(n,t,"rolloffFactor"),n)},p0=(i,e,t,n,r,s,o,a,c)=>(l,{coneInnerAngle:u,coneOuterAngle:h,coneOuterGain:d,distanceModel:f,maxDistance:m,orientationX:_,orientationY:v,orientationZ:p,panningModel:g,positionX:b,positionY:T,positionZ:y,refDistance:x,rolloffFactor:M,...A})=>{let E=l.createPanner();if(A.channelCount>2||A.channelCountMode==="max")throw o();nt(E,A);let k={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},V=t(l,{...k,channelInterpretation:"speakers",numberOfInputs:6}),R=n(l,{...A,gain:1}),C=n(l,{...k,gain:1}),P=n(l,{...k,gain:0}),N=n(l,{...k,gain:0}),D=n(l,{...k,gain:0}),U=n(l,{...k,gain:0}),H=n(l,{...k,gain:0}),j=r(l,256,6,1),Y=s(l,{...k,curve:new Float32Array([1,1]),oversample:"none"}),J=[_,v,p],ae=[b,T,y];j.onaudioprocess=({inputBuffer:F})=>{let be=[F.getChannelData(0)[0],F.getChannelData(1)[0],F.getChannelData(2)[0]];be.some((de,pe)=>de!==J[pe])&&(E.setOrientation(...be),J=be);let ce=[F.getChannelData(3)[0],F.getChannelData(4)[0],F.getChannelData(5)[0]];ce.some((de,pe)=>de!==ae[pe])&&(E.setPosition(...ce),ae=ce)},Object.defineProperty(P.gain,"defaultValue",{get:()=>0}),Object.defineProperty(N.gain,"defaultValue",{get:()=>0}),Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(H.gain,"defaultValue",{get:()=>0});let $={get bufferSize(){},get channelCount(){return E.channelCount},set channelCount(F){if(F>2)throw o();R.channelCount=F,E.channelCount=F},get channelCountMode(){return E.channelCountMode},set channelCountMode(F){if(F==="max")throw o();R.channelCountMode=F,E.channelCountMode=F},get channelInterpretation(){return E.channelInterpretation},set channelInterpretation(F){R.channelInterpretation=F,E.channelInterpretation=F},get coneInnerAngle(){return E.coneInnerAngle},set coneInnerAngle(F){E.coneInnerAngle=F},get coneOuterAngle(){return E.coneOuterAngle},set coneOuterAngle(F){E.coneOuterAngle=F},get coneOuterGain(){return E.coneOuterGain},set coneOuterGain(F){if(F<0||F>1)throw e();E.coneOuterGain=F},get context(){return E.context},get distanceModel(){return E.distanceModel},set distanceModel(F){E.distanceModel=F},get inputs(){return[R]},get maxDistance(){return E.maxDistance},set maxDistance(F){if(F<0)throw new RangeError;E.maxDistance=F},get numberOfInputs(){return E.numberOfInputs},get numberOfOutputs(){return E.numberOfOutputs},get orientationX(){return C.gain},get orientationY(){return P.gain},get orientationZ(){return N.gain},get panningModel(){return E.panningModel},set panningModel(F){E.panningModel=F},get positionX(){return D.gain},get positionY(){return U.gain},get positionZ(){return H.gain},get refDistance(){return E.refDistance},set refDistance(F){if(F<0)throw new RangeError;E.refDistance=F},get rolloffFactor(){return E.rolloffFactor},set rolloffFactor(F){if(F<0)throw new RangeError;E.rolloffFactor=F},addEventListener(...F){return R.addEventListener(F[0],F[1],F[2])},dispatchEvent(...F){return R.dispatchEvent(F[0])},removeEventListener(...F){return R.removeEventListener(F[0],F[1],F[2])}};u!==$.coneInnerAngle&&($.coneInnerAngle=u),h!==$.coneOuterAngle&&($.coneOuterAngle=h),d!==$.coneOuterGain&&($.coneOuterGain=d),f!==$.distanceModel&&($.distanceModel=f),m!==$.maxDistance&&($.maxDistance=m),_!==$.orientationX.value&&($.orientationX.value=_),v!==$.orientationY.value&&($.orientationY.value=v),p!==$.orientationZ.value&&($.orientationZ.value=p),g!==$.panningModel&&($.panningModel=g),b!==$.positionX.value&&($.positionX.value=b),T!==$.positionY.value&&($.positionY.value=T),y!==$.positionZ.value&&($.positionZ.value=y),x!==$.refDistance&&($.refDistance=x),M!==$.rolloffFactor&&($.rolloffFactor=M),(J[0]!==1||J[1]!==0||J[2]!==0)&&E.setOrientation(...J),(ae[0]!==0||ae[1]!==0||ae[2]!==0)&&E.setPosition(...ae);let _e=()=>{R.connect(E),i(R,Y,0,0),Y.connect(C).connect(V,0,0),Y.connect(P).connect(V,0,1),Y.connect(N).connect(V,0,2),Y.connect(D).connect(V,0,3),Y.connect(U).connect(V,0,4),Y.connect(H).connect(V,0,5),V.connect(j).connect(l.destination)},ve=()=>{R.disconnect(E),a(R,Y,0,0),Y.disconnect(C),C.disconnect(V),Y.disconnect(P),P.disconnect(V),Y.disconnect(N),N.disconnect(V),Y.disconnect(D),D.disconnect(V),Y.disconnect(U),U.disconnect(V),Y.disconnect(H),H.disconnect(V),V.disconnect(j),j.disconnect(l.destination)};return c(zi($,E),_e,ve)},m0=i=>(e,{disableNormalization:t,imag:n,real:r})=>{let s=n instanceof Float32Array?n:new Float32Array(n),o=r instanceof Float32Array?r:new Float32Array(r),a=e.createPeriodicWave(o,s,{disableNormalization:t});if(Array.from(n).length<2)throw i();return a},Vr=(i,e,t,n)=>i.createScriptProcessor(e,t,n),g0=(i,e)=>(t,n)=>{let r=n.channelCountMode;if(r==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);let s=t.createStereoPanner();return nt(s,n),je(s,n,"pan"),Object.defineProperty(s,"channelCountMode",{get:()=>r,set:o=>{if(o!==r)throw e()}}),s},_0=(i,e,t,n,r,s)=>{let o=16385,a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(m,_,v,p)=>{let g=new Float32Array(o),b=new Float32Array(o);for(let E=0;E<o;E+=1){let k=E/(o-1)*c;g[E]=Math.cos(k),b[E]=Math.sin(k)}let T=t(m,{...l,gain:0}),y=n(m,{...u,curve:g}),x=n(m,{...u,curve:a}),M=t(m,{...l,gain:0}),A=n(m,{...u,curve:b});return{connectGraph(){_.connect(T),_.connect(x.inputs===void 0?x:x.inputs[0]),_.connect(M),x.connect(v),v.connect(y.inputs===void 0?y:y.inputs[0]),v.connect(A.inputs===void 0?A:A.inputs[0]),y.connect(T.gain),A.connect(M.gain),T.connect(p,0,0),M.connect(p,0,1)},disconnectGraph(){_.disconnect(T),_.disconnect(x.inputs===void 0?x:x.inputs[0]),_.disconnect(M),x.disconnect(v),v.disconnect(y.inputs===void 0?y:y.inputs[0]),v.disconnect(A.inputs===void 0?A:A.inputs[0]),y.disconnect(T.gain),A.disconnect(M.gain),T.disconnect(p,0,0),M.disconnect(p,0,1)}}},d=(m,_,v,p)=>{let g=new Float32Array(o),b=new Float32Array(o),T=new Float32Array(o),y=new Float32Array(o),x=Math.floor(o/2);for(let U=0;U<o;U+=1)if(U>x){let H=(U-x)/(o-1-x)*c;g[U]=Math.cos(H),b[U]=Math.sin(H),T[U]=0,y[U]=1}else{let H=U/(o-1-x)*c;g[U]=1,b[U]=0,T[U]=Math.cos(H),y[U]=Math.sin(H)}let M=e(m,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),A=t(m,{...l,gain:0}),E=n(m,{...u,curve:g}),k=t(m,{...l,gain:0}),V=n(m,{...u,curve:b}),R=n(m,{...u,curve:a}),C=t(m,{...l,gain:0}),P=n(m,{...u,curve:T}),N=t(m,{...l,gain:0}),D=n(m,{...u,curve:y});return{connectGraph(){_.connect(M),_.connect(R.inputs===void 0?R:R.inputs[0]),M.connect(A,0),M.connect(k,0),M.connect(C,1),M.connect(N,1),R.connect(v),v.connect(E.inputs===void 0?E:E.inputs[0]),v.connect(V.inputs===void 0?V:V.inputs[0]),v.connect(P.inputs===void 0?P:P.inputs[0]),v.connect(D.inputs===void 0?D:D.inputs[0]),E.connect(A.gain),V.connect(k.gain),P.connect(C.gain),D.connect(N.gain),A.connect(p,0,0),C.connect(p,0,0),k.connect(p,0,1),N.connect(p,0,1)},disconnectGraph(){_.disconnect(M),_.disconnect(R.inputs===void 0?R:R.inputs[0]),M.disconnect(A,0),M.disconnect(k,0),M.disconnect(C,1),M.disconnect(N,1),R.disconnect(v),v.disconnect(E.inputs===void 0?E:E.inputs[0]),v.disconnect(V.inputs===void 0?V:V.inputs[0]),v.disconnect(P.inputs===void 0?P:P.inputs[0]),v.disconnect(D.inputs===void 0?D:D.inputs[0]),E.disconnect(A.gain),V.disconnect(k.gain),P.disconnect(C.gain),D.disconnect(N.gain),A.disconnect(p,0,0),C.disconnect(p,0,0),k.disconnect(p,0,1),N.disconnect(p,0,1)}}},f=(m,_,v,p,g)=>{if(_===1)return h(m,v,p,g);if(_===2)return d(m,v,p,g);throw r()};return(m,{channelCount:_,channelCountMode:v,pan:p,...g})=>{if(v==="max")throw r();let b=i(m,{...g,channelCount:1,channelCountMode:v,numberOfInputs:2}),T=t(m,{...g,channelCount:_,channelCountMode:v,gain:1}),y=t(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p}),{connectGraph:x,disconnectGraph:M}=f(m,_,T,y,b);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});let A={get bufferSize(){},get channelCount(){return T.channelCount},set channelCount(R){T.channelCount!==R&&(E&&M(),{connectGraph:x,disconnectGraph:M}=f(m,R,T,y,b),E&&x()),T.channelCount=R},get channelCountMode(){return T.channelCountMode},set channelCountMode(R){if(R==="clamped-max"||R==="max")throw r();T.channelCountMode=R},get channelInterpretation(){return T.channelInterpretation},set channelInterpretation(R){T.channelInterpretation=R},get context(){return T.context},get inputs(){return[T]},get numberOfInputs(){return T.numberOfInputs},get numberOfOutputs(){return T.numberOfOutputs},get pan(){return y.gain},addEventListener(...R){return T.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return T.dispatchEvent(R[0])},removeEventListener(...R){return T.removeEventListener(R[0],R[1],R[2])}},E=!1,k=()=>{x(),E=!0},V=()=>{M(),E=!1};return s(zi(A,b),k,V)}},v0=(i,e,t,n,r,s,o)=>(a,c)=>{let l=a.createWaveShaper();if(s!==null&&s.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);nt(l,c);let u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();He(l,{curve:u},"curve"),He(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>v=>(_.call(l,v),d&&(n(v)&&h===null?h=i(a,l):!n(v)&&h!==null&&(h(),h=null)),v)),r(l,()=>{d=!0,n(l.curve)&&(h=i(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},x0=(i,e,t,n,r)=>(s,{curve:o,oversample:a,...c})=>{let l=s.createWaveShaper(),u=s.createWaveShaper();nt(l,c),nt(u,c);let h=t(s,{...c,gain:1}),d=t(s,{...c,gain:-1}),f=t(s,{...c,gain:1}),m=t(s,{...c,gain:-1}),_=null,v=!1,p=null,g={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){h.channelCount=y,d.channelCount=y,l.channelCount=y,f.channelCount=y,u.channelCount=y,m.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){h.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,f.channelCountMode=y,u.channelCountMode=y,m.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){h.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,f.channelInterpretation=y,u.channelInterpretation=y,m.channelInterpretation=y},get context(){return l.context},get curve(){return p},set curve(y){if(y!==null&&y.length<2)throw e();if(y===null)l.curve=y,u.curve=y;else{let x=y.length,M=new Float32Array(x+2-x%2),A=new Float32Array(x+2-x%2);M[0]=y[0],A[0]=-y[x-1];let E=Math.ceil((x+1)/2),k=(x+1)/2-1;for(let V=1;V<E;V+=1){let R=V/E*k,C=Math.floor(R),P=Math.ceil(R);M[V]=C===P?y[C]:(1-(R-C))*y[C]+(1-(P-R))*y[P],A[V]=C===P?-y[x-1-C]:-((1-(R-C))*y[x-1-C])-(1-(P-R))*y[x-1-P]}M[E]=x%2==1?y[E-1]:(y[E-2]+y[E-1])/2,l.curve=M,u.curve=A}p=y,v&&(n(p)&&_===null?_=i(s,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,u.oversample=y},addEventListener(...y){return h.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return h.dispatchEvent(y[0])},removeEventListener(...y){return h.removeEventListener(y[0],y[1],y[2])}};o!==null&&(g.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==g.oversample&&(g.oversample=a);let b=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(m).connect(f),v=!0,n(p)&&(_=i(s,h))},T=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(m),m.disconnect(f),v=!1,_!==null&&(_(),_=null)};return r(zi(g,f),b,T)},At=()=>new DOMException("","NotSupportedError"),y0={numberOfChannels:1},w0=(i,e,t,n,r)=>class extends i{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");let{length:u,numberOfChannels:h,sampleRate:d}={...y0,...l},f=n(h,u,d);e(Or,()=>Or(f))||f.addEventListener("statechange",(()=>{let m=0,_=v=>{this._state==="running"&&(m>0?(f.removeEventListener("statechange",_),v.stopImmediatePropagation(),this._waitForThePromiseToSettle(v)):m+=1)};return _})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",r(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Hl(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},b0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},M0=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...b0,...l},d=t(u,h),f=s(u),m=f?n():null,_=c.sampleRate/2;super(c,!1,d,m);this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=m,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){let l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;let u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Bi(this);let l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Sn(this)&&Pr(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},S0=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=null,a=null,c=null,l=async(u,h,d)=>{let f=t(u),m=gt(f,h);if(!m){let _={channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,detune:f.detune.value,frequency:f.frequency.value,periodicWave:o===null?void 0:o,type:f.type};f=e(h,_),a!==null&&f.start(a),c!==null&&f.stop(c)}return s.set(h,f),m?(await i(h,u.detune,f.detune,d),await i(h,u.frequency,f.frequency,d)):(await n(h,u.detune,f.detune,d),await n(h,u.frequency,f.frequency,d)),await r(u,h,f,d),f};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h,d){let f=s.get(h);return f!==void 0?Promise.resolve(f):l(u,h,d)}}},T0={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},E0=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...T0,...l},d=t(u,h),f=s(u),m=f?n():null;super(c,!1,d,m);this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,xt,Tt),this._orientationY=e(this,f,d.orientationY,xt,Tt),this._orientationZ=e(this,f,d.orientationZ,xt,Tt),this._positionX=e(this,f,d.positionX,xt,Tt),this._positionY=e(this,f,d.positionY,xt,Tt),this._positionZ=e(this,f,d.positionZ,xt,Tt),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},A0=(i,e,t,n,r,s,o,a,c,l)=>()=>{let u=new WeakMap,h=null,d=async(f,m,_)=>{let v=null,p=s(f),g={channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation},b={...g,coneInnerAngle:p.coneInnerAngle,coneOuterAngle:p.coneOuterAngle,coneOuterGain:p.coneOuterGain,distanceModel:p.distanceModel,maxDistance:p.maxDistance,panningModel:p.panningModel,refDistance:p.refDistance,rolloffFactor:p.rolloffFactor},T=gt(p,m);if("bufferSize"in p)v=n(m,{...g,gain:1});else if(!T){let y={...b,orientationX:p.orientationX.value,orientationY:p.orientationY.value,orientationZ:p.orientationZ.value,positionX:p.positionX.value,positionY:p.positionY.value,positionZ:p.positionZ.value};p=r(m,y)}if(u.set(m,v===null?p:v),v!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");let R=new o(6,f.context.length,m.sampleRate),C=e(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});C.connect(R.destination),h=(async()=>{let P=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(N,D)=>{let U=t(R,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:D===0?1:0});return await a(R,N,U.offset,_),U}));for(let N=0;N<6;N+=1)P[N].connect(C,0,N),P[N].start(0);return l(R)})()}let y=await h,x=n(m,{...g,gain:1});await c(f,m,x,_);let M=[];for(let R=0;R<y.numberOfChannels;R+=1)M.push(y.getChannelData(R));let A=[M[0][0],M[1][0],M[2][0]],E=[M[3][0],M[4][0],M[5][0]],k=n(m,{...g,gain:1}),V=r(m,{...b,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:E[0],positionY:E[1],positionZ:E[2]});x.connect(k).connect(V.inputs[0]),V.connect(v);for(let R=128;R<y.length;R+=128){let C=[M[0][R],M[1][R],M[2][R]],P=[M[3][R],M[4][R],M[5][R]];if(C.some((N,D)=>N!==A[D])||P.some((N,D)=>N!==E[D])){A=C,E=P;let N=R/m.sampleRate;k.gain.setValueAtTime(0,N),k=n(m,{...g,gain:0}),V=r(m,{...b,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:E[0],positionY:E[1],positionZ:E[2]}),k.gain.setValueAtTime(1,N),x.connect(k).connect(V.inputs[0]),V.connect(v)}}return v}return T?(await i(m,f.orientationX,p.orientationX,_),await i(m,f.orientationY,p.orientationY,_),await i(m,f.orientationZ,p.orientationZ,_),await i(m,f.positionX,p.positionX,_),await i(m,f.positionY,p.positionY,_),await i(m,f.positionZ,p.positionZ,_)):(await a(m,f.orientationX,p.orientationX,_),await a(m,f.orientationY,p.orientationY,_),await a(m,f.orientationZ,p.orientationZ,_),await a(m,f.positionX,p.positionX,_),await a(m,f.positionY,p.positionY,_),await a(m,f.positionZ,p.positionZ,_)),Ui(p)?await c(f,m,p.inputs[0],_):await c(f,m,p,_),p};return{render(f,m,_){let v=u.get(m);return v!==void 0?Promise.resolve(v):d(f,m,_)}}},C0={disableNormalization:!1},L0=(i,e,t,n)=>class su{constructor(s,o){let a=e(s),c=n({...C0,...o}),l=i(a,c);return t.add(l),l}static[Symbol.hasInstance](s){return s!==null&&typeof s=="object"&&Object.getPrototypeOf(s)===su.prototype||t.has(s)}},R0=(i,e)=>(t,n,r,s)=>(i(n).replay(r),e(n,t,r,s)),D0=(i,e,t)=>async(n,r,s,o)=>{let a=i(n),c=[...o,n];await Promise.all(a.activeInputs.map((l,u)=>Array.from(l).filter(([h])=>!c.includes(h)).map(async([h,d])=>{let m=await e(h).render(h,r,c),_=n.context.destination;!t(h)&&(n!==_||!t(n))&&m.connect(s,d,u)})).reduce((l,u)=>[...l,...u],[]))},P0=(i,e,t)=>async(n,r,s,o)=>{let a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([c,l])=>{let h=await i(c).render(c,r,o);t(c)||h.connect(s,l)}))},N0=(i,e,t,n)=>r=>i(Or,()=>Or(r))?Promise.resolve(i(n,n)).then(s=>{if(!s){let o=t(r,512,0,1);r.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>r.currentTime,o.connect(r.destination)}return r.startRendering()}):new Promise(s=>{let o=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});r.oncomplete=a=>{o.disconnect(),s(a.renderedBuffer)},o.connect(r.destination),r.startRendering()}),I0=i=>(e,t)=>{i.set(e,t)},F0=i=>(e,t)=>i.set(e,t),O0=(i,e,t,n,r,s,o,a)=>{let c=[];return(l,u)=>t(l).render(l,u,c).then(()=>Promise.all(Array.from(n(u)).map(h=>t(h).render(h,u,c)))).then(()=>r(u)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),va(h)):e(s,()=>s(h))||a(h),i.add(h),h))},k0={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},V0=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=r(a),u={...k0,...c},h=t(l,u),d=s(l),f=d?n():null;super(a,!1,h,f);this._pan=e(this,d,h.pan)}get pan(){return this._pan}},B0=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=gt(u,c);if(!h){let d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,pan:u.pan.value};u=e(c,d)}return s.set(c,u),h?await i(c,a.pan,u.pan,l):await n(c,a.pan,u.pan,l),Ui(u)?await r(a,c,u.inputs[0],l):await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},U0=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},z0=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;let t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),r=URL.createObjectURL(t),s=!1,o=!1;try{await n.audioWorklet.addModule(r);let a=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>s=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering()}catch{}finally{URL.revokeObjectURL(r)}return s&&!o},G0=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);let t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(r=>{t.oncomplete=()=>{n.disconnect(),r(t.currentTime!==0)},t.startRendering()})},W0=()=>new DOMException("","UnknownError"),H0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},q0=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...H0,...l},d=t(u,h),m=s(u)?n():null;super(c,!0,d,m);this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},X0=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!gt(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,curve:c.curve,oversample:c.oversample};c=i(o,u)}return n.set(o,c),Ui(c)?await t(s,o,c.inputs[0],a):await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},j0=()=>typeof window=="undefined"?null:window,Y0=(i,e)=>t=>{t.copyFromChannel=(n,r,s=0)=>{let o=i(s),a=i(r);if(a>=t.numberOfChannels)throw e();let c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,r,s=0)=>{let o=i(s),a=i(r);if(a>=t.numberOfChannels)throw e();let c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},Z0=i=>e=>{e.copyFromChannel=(t=>(n,r,s=0)=>{let o=i(s),a=i(r);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,r,s=0)=>{let o=i(s),a=i(r);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},$0=i=>(e,t)=>{let n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",r=>()=>{let s=r.call(e);return s===n?null:s},r=>s=>r.call(e,s===null?n:s))},Q0=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});let r=t.createBufferSource();e(n,()=>{let a=n.numberOfInputs;for(let c=0;c<a;c+=1)r.connect(n,0,c)},()=>r.disconnect(n))},ou=i=>{if(i===null)return!1;let e=i.length;return e%2!=0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},Bs=(i,e,t,n)=>{let r=Object.getPrototypeOf(i);for(;!r.hasOwnProperty(e);)r=Object.getPrototypeOf(r);let{get:s,set:o}=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(i,e,{get:t(s),set:n(o)})},J0=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),K0=i=>({...i,channelCount:i.numberOfOutputs}),ey=i=>{let{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},au=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;au(i,e,t+1e-7)}},ty=i=>{let e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},ny=i=>{let e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},iy=i=>{let e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Ea=i=>{let e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},cu=i=>{let e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Aa=i=>{let e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},ry=i=>{let{port1:e,port2:t}=new MessageChannel;try{e.postMessage(i)}finally{e.close(),t.close()}},sy=i=>{i.start=(e=>(t=0,n=0,r)=>{let s=i.buffer,o=s===null?n:Math.min(s.duration,n);s!==null&&o>s.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,o,r)})(i.start)},lu=(i,e)=>{let t=e.createGain();i.connect(t);let n=(r=>()=>{r.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),zi(i,t),i.stop=(r=>{let s=!1;return(o=0)=>{if(s)try{r.call(i,o)}catch{t.gain.setValueAtTime(0,o)}else r.call(i,o),s=!0}})(i.stop)},Gi=(i,e)=>t=>{let n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},oy=E_(oi),ay=P_(oi),cy=Hv(Cs),uu=new WeakMap,ly=cx(uu),Yt=yv(new Map,new WeakMap),un=j0(),hu=Vx(Yt,ln),Ca=ax(yt),ut=D0(yt,Ca,ai),uy=k_(hu,Ge,ut),Ue=hx(As),Tn=h0(un),Oe=Cx(Tn),du=new WeakMap,fu=ex(Gi),Br=Gx(un),La=Sx(Br),Ra=Tx(un),pu=Ex(un),Ze=cv(A_(Nl),D_(oy,ay,Ds,cy,Ps,yt,ly,Dr,Ge,oi,Sn,ai,Ns),Yt,xx(pa,Ps,yt,Ge,Fr,Sn),ln,Vs,At,Uv(Ds,pa,yt,Ge,Fr,Ue,Sn,Oe),jv(du,yt,jt),fu,Ue,La,Ra,pu,Oe),hy=O_(Ze,uy,ln,hu,Ue,Oe),Da=new WeakSet,mu=Bx(un),gu=Nv(new Uint32Array(1)),Pa=Y0(gu,ln),Na=Z0(gu),dy=B_(Da,Yt,At,mu,Tn,U0(mu),Pa,Na),Us=N_(Et),_u=P0(Ca,Nr,ai),hn=Av(_u),Wi=zx(Us,Yt,ty,ny,iy,Ea,cu,Aa,sy,$0(Bs),lu),dn=R0(lx(Nr),_u),fy=G_(hn,Wi,Ge,dn,ut),Zt=lv(C_(Il),du,fa,uv,y_,w_,b_,M_,S_,ca,Al,Br,au),py=z_(Ze,fy,Zt,at,Wi,Ue,Oe,Gi),my=Q_(Ze,J_,ln,at,Wx(Et,Bs),Ue,Oe,ut),gy=xv(hn,nu,Ge,dn,ut),ci=F0(uu),_y=vv(Ze,Zt,gy,Vs,nu,Ue,Oe,ci),Un=Ox(oi,Ra),vy=Q0(at,Un),zn=Qx(Br,vy),xy=Mv(zn,Ge,ut),yy=bv(Ze,xy,zn,Ue,Oe),wy=Ev(kr,Ge,ut),by=Tv(Ze,wy,kr,Ue,Oe,K0),My=e0(Us,Wi,Et,Un),Hi=Kx(Us,Yt,My,Ea,Aa),Sy=Pv(hn,Hi,Ge,dn,ut),Ty=Dv(Ze,Zt,Sy,Hi,Ue,Oe,Gi),vu=t0(At,Bs),Ey=Ov(vu,Ge,ut),Ay=Fv(Ze,Ey,vu,Ue,Oe,ci),Cy=Wv(hn,iu,Ge,dn,ut),Ly=Gv(Ze,Zt,Cy,iu,Ue,Oe,ci),xu=n0(At),Ry=Qv(hn,xu,Ge,dn,ut),Dy=$v(Ze,Zt,Ry,xu,At,Ue,Oe,ci),Py=sx(hn,Et,Ge,dn,ut),Ny=rx(Ze,Zt,Py,Et,Ue,Oe),Iy=o0(Vs,at,Vr,At),zs=N0(Yt,Et,Vr,G0(Et,Tn)),Fy=vx(Wi,Ge,Tn,ut,zs),Oy=i0(Iy),ky=gx(Ze,Oy,Fy,Ue,Oe,ci),Vy=K_(Zt,zn,Hi,Vr,Oe),yu=new WeakMap,By=Fx(my,Vy,fu,Oe,yu,Gi),wu=d0(Us,Yt,Ea,cu,Aa,lu),Uy=S0(hn,wu,Ge,dn,ut),zy=M0(Ze,Zt,wu,Uy,Ue,Oe,Gi),bu=Lv(Wi),Gy=x0(bu,at,Et,ou,Un),Gs=v0(bu,at,Gy,ou,Un,Br,Bs),Wy=p0(Ds,at,zn,Et,Vr,Gs,At,Ps,Un),Mu=f0(Wy),Hy=A0(hn,zn,Hi,Et,Mu,Ge,Tn,dn,ut,zs),qy=E0(Ze,Zt,Mu,Hy,Ue,Oe,ci),Xy=m0(ln),jy=L0(Xy,Ue,new WeakSet,ey),Yy=_0(zn,kr,Et,Gs,At,Un),Su=g0(Yy,At),Zy=B0(hn,Su,Ge,dn,ut),$y=V0(Ze,Zt,Su,Zy,Ue,Oe),Qy=X0(Gs,Ge,ut),Jy=q0(Ze,at,Gs,Qy,Ue,Oe,ci),Tu=Lx(un),Ia=tx(un),Eu=new WeakMap,Ky=dx(Eu,Tn),Fa=Hx(un),ew=Tu?R_(Yt,At,Kv(un),Ia,nx(T_),Ue,Ky,Oe,new WeakMap,new WeakMap,z0(Fa,Tn),un):void 0,tw=Ax(La,Oe),nw=Bv(Da,Yt,Vv,Jv,new WeakSet,Ue,tw,Ls,Or,Pa,Na),Au=gv(ew,hy,dy,py,_y,yy,by,Ty,Ay,nw,Ly,Dy,Ny,ky,By,zy,qy,jy,$y,Jy),iw=Rx(Ze,a0,Ue,Oe),rw=Px(Ze,c0,Ue,Oe),sw=Nx(Ze,l0,Ue,Oe),ow=u0(at,Oe),aw=Ix(Ze,ow,Ue),cw=$_(Au,at,At,W0,iw,rw,sw,aw,Br),Oa=fx(yu),lw=I_(Oa),Cu=Cv(ln),uw=qv(Oa),Lu=Yv(ln),Ru=new WeakMap,hw=ox(Ru,jt),dw=$x(Cu,ln,at,zn,kr,Hi,Et,Vr,At,Lu,Ia,hw,Un),fw=Xx(at,dw,Et,At,Un),pw=mv(hn,Cu,Wi,zn,kr,Hi,Et,uw,Lu,Ia,Ge,Fa,Tn,dn,ut,zs),mw=ux(Eu),gw=I0(Ru),Du=Tu?dv(lw,Ze,Zt,pw,fw,yt,mw,Ue,Oe,Fa,J0,gw,ry,Gi):void 0,_w=kv(At,Tn),vw=O0(Da,Yt,Ca,Oa,zs,Ls,Pa,Na),xw=w0(Au,Yt,at,_w,vw),yw=yx(As,La),ww=wx(da,Ra),bw=bx(fa,pu),Mw=Mx(As,Oe);function xe(i,e){if(!i)throw new Error(e)}function Gn(i,e,t=Infinity){if(!(e<=i&&i<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${i}`)}function Nu(i){!i.isOffline&&i.state!=="running"&&Pu('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}var Iu=console;function Sw(...i){Iu.log(...i)}function Pu(...i){Iu.warn(...i)}function Bt(i){return typeof i=="undefined"}function Ee(i){return!Bt(i)}function Tw(i){return typeof i=="function"}function li(i){return typeof i=="number"}function ui(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function Ew(i){return typeof i=="boolean"}function $t(i){return Array.isArray(i)}function fn(i){return typeof i=="string"}function Ws(i){return fn(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Aw(i){return new cw(i)}function Cw(i,e,t){return new xw(i,e,t)}var hi=typeof self=="object"?self:null,Lw=hi&&(hi.hasOwnProperty("AudioContext")||hi.hasOwnProperty("webkitAudioContext"));function Rw(i,e,t){return xe(Ee(Du),"This node only works in a secure context (https or localhost)"),new Du(i,e,t)}function Qt(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Qe(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((n=n.apply(i,e||[])).next())})}var Fu=class{constructor(e,t,n){this._callback=e,this._type=t,this._updateInterval=n,this._createClock()}_createWorker(){let e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch(e){this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}};function di(i){return bw(i)}function Wn(i){return ww(i)}function Hs(i){return Mw(i)}function qi(i){return yw(i)}function Ou(i){return i instanceof AudioBuffer}function Dw(i,e){return i==="value"||di(e)||Wn(e)||Ou(e)}function Xi(i,...e){if(!e.length)return i;let t=e.shift();if(ui(i)&&ui(t))for(let n in t)Dw(n,t[n])?i[n]=t[n]:ui(t[n])?(i[n]||Object.assign(i,{[n]:{}}),Xi(i[n],t[n])):Object.assign(i,{[n]:t[n]});return Xi(i,...e)}function Pw(i,e){return i.length===e.length&&i.every((t,n)=>e[n]===t)}function ie(i,e,t=[],n){let r={},s=Array.from(e);if(ui(s[0])&&n&&!Reflect.has(s[0],n)&&(Object.keys(s[0]).some(a=>Reflect.has(i,a))||(Xi(r,{[n]:s[0]}),t.splice(t.indexOf(n),1),s.shift())),s.length===1&&ui(s[0]))Xi(r,s[0]);else for(let o=0;o<t.length;o++)Ee(s[o])&&(r[t[o]]=s[o]);return Xi(i,r)}function Nw(i){return i.constructor.getDefaults()}function ji(i,e){return Bt(i)?e:i}function ku(i,e){return e.forEach(t=>{Reflect.has(i,t)&&delete i[t]}),i}var pn=class{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||hi&&this.toString()===hi.TONE_DEBUG_CLASS)&&Sw(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}};pn.version=Sl;var ka=1e-6;function qs(i,e){return i>e+ka}function Va(i,e){return qs(i,e)||Jt(i,e)}function Vu(i,e){return i+ka<e}function Jt(i,e){return Math.abs(i-e)<ka}function Iw(i,e,t){return Math.max(Math.min(i,t),e)}var Kt=class extends pn{constructor(){super();this.name="Timeline",this._timeline=[];let e=ie(Kt.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:Infinity,increasing:!1}}get length(){return this._timeline.length}add(e){if(xe(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){let t=this._timeline[this.length-1];xe(Va(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{let t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){let t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){let t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){let n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){let n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){let t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];let n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Jt(this._timeline[t].time,e)){for(let n=t;n>=0&&Jt(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&Va(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){let t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){let t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0,r=this._timeline.length,s=r;if(r>0&&this._timeline[r-1][t]<=e)return r-1;for(;n<s;){let o=Math.floor(n+(s-n)/2),a=this._timeline[o],c=this._timeline[o+1];if(Jt(a[t],e)){for(let l=o;l<this._timeline.length;l++){let u=this._timeline[l];if(Jt(u[t],e))o=l;else break}return o}else{if(Vu(a[t],e)&&qs(c[t],e))return o;qs(a[t],e)?s=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){let n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){let n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let r=this._search(e),s=this._search(t);return r!==-1&&s!==-1?(this._timeline[r].time!==e&&(r+=1),this._timeline[s].time===t&&(s-=1),this._iterate(n,r,s)):r===-1&&this._iterate(n,0,s),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){let n=this._search(e);if(n!==-1&&Jt(this._timeline[n].time,e)){let r=n;for(let s=n;s>=0&&Jt(this._timeline[s].time,e);s--)r=s;this._iterate(s=>{t(s)},r,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}},Bu=[];function Xs(i){Bu.push(i)}function Fw(i){Bu.forEach(e=>e(i))}var Uu=[];function js(i){Uu.push(i)}function Ow(i){Uu.forEach(e=>e(i))}var Yi=class extends pn{constructor(){super(...arguments);this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(r=>{Bt(this._events)&&(this._events={}),this._events.hasOwnProperty(r)||(this._events[r]=[]),this._events[r].push(t)}),this}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(r=>{if(Bt(this._events)&&(this._events={}),this._events.hasOwnProperty(e))if(Bt(t))this._events[e]=[];else{let s=this._events[e];for(let o=s.length-1;o>=0;o--)s[o]===t&&s.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){let n=this._events[e].slice(0);for(let r=0,s=n.length;r<s;r++)n[r].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{let n=Object.getOwnPropertyDescriptor(Yi.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}},Ba=class extends Yi{constructor(){super(...arguments);this.isOffline=!1}toJSON(){return{}}},Zi=class extends Ba{constructor(){super();this.name="Context",this._constants=new Map,this._timeouts=new Kt,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;let e=ie(Zi.getDefaults(),arguments,["context"]);e.context?this._context=e.context:this._context=Aw({latencyHint:e.latencyHint}),this._ticker=new Fu(this.emit.bind(this,"tick"),e.clockSource,e.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(e.latencyHint),this.lookAhead=e.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Fw(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return xe(qi(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return xe(qi(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return xe(qi(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){xe(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){xe(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){xe(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){xe(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return Rw(this.rawContext,e,t)}addAudioWorkletModule(e,t){return Qe(this,void 0,void 0,function*(){xe(Ee(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(t)||this._workletModules.set(t,this.rawContext.audioWorklet.addModule(e)),yield this._workletModules.get(t)})}workletsAreReady(){return Qe(this,void 0,void 0,function*(){let e=[];this._workletModules.forEach(t=>e.push(t)),yield Promise.all(e)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get latencyHint(){return this._latencyHint}_setLatencyHint(e){let t=0;if(this._latencyHint=e,fn(e))switch(e){case"interactive":t=.1;break;case"playback":t=.5;break;case"balanced":t=.25;break}this.lookAhead=t,this.updateInterval=t/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return qi(this._context)?this._context.resume():Promise.resolve()}close(){return Qe(this,void 0,void 0,function*(){qi(this._context)&&(yield this._context.close()),this._initialized&&Ow(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{let t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=e;let r=this._context.createBufferSource();return r.channelCount=1,r.channelCountMode="explicit",r.buffer=t,r.loop=!0,r.start(0),this._constants.set(e,r),r}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this}_timeoutLoop(){let e=this.now(),t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;let n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){let n=++this._timeoutIds,r=()=>{let s=this.now();this._timeouts.add({callback:()=>{e(),r()},id:n,time:s+t})};return r(),n}},zu=class extends Ba{constructor(){super(...arguments);this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e,t){return Qe(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}};function it(i,e){$t(e)?e.forEach(t=>it(i,t)):Object.defineProperty(i,e,{enumerable:!0,writable:!1})}function Gu(i,e){$t(e)?e.forEach(t=>Gu(i,t)):Object.defineProperty(i,e,{writable:!0})}var ke=()=>{},Ve=class extends pn{constructor(){super();this.name="ToneAudioBuffer",this.onload=ke;let e=ie(Ve.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,e.url&&Ou(e.url)||e.url instanceof Ve?this.set(e.url):fn(e.url)&&this.load(e.url).catch(e.onerror)}static getDefaults(){return{onerror:ke,onload:ke,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:en().sampleRate}set(e){return e instanceof Ve?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return Qe(this,void 0,void 0,function*(){let t=Ve.load(e).then(n=>{this.set(n),this.onload(this)});Ve.downloads.push(t);try{yield t}finally{let n=Ve.downloads.indexOf(t);Ve.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){let t=$t(e)&&e[0].length>0,n=t?e.length:1,r=t?e[0].length:e.length,s=en(),o=s.createBuffer(n,r,s.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(li(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length),n=this.numberOfChannels;for(let r=0;r<n;r++){let s=this.toArray(r);for(let o=0;o<s.length;o++)t[o]+=s[o]}t=t.map(r=>r/n),this.fromArray(t)}return this}toArray(e){if(li(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{let t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){let n=Math.floor(e*this.sampleRate),r=Math.floor(t*this.sampleRate);xe(n<r,"The start time must be less than the end time");let s=r-n,o=en().createBuffer(this.numberOfChannels,s,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,r),a);return new Ve(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new Ve().fromArray(e)}static fromUrl(e){return Qe(this,void 0,void 0,function*(){return yield new Ve().load(e)})}static load(e){return Qe(this,void 0,void 0,function*(){let t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){let a=t[1].split("|"),c=a[0];for(let l of a)if(Ve.supportsType(l)){c=l;break}e=e.replace(t[0],c)}let n=Ve.baseUrl===""||Ve.baseUrl.endsWith("/")?Ve.baseUrl:Ve.baseUrl+"/",r=yield fetch(n+e);if(!r.ok)throw new Error(`could not load url: ${e}`);let s=yield r.arrayBuffer();return yield en().decodeAudioData(s)})}static supportsType(e){let t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Qe(this,void 0,void 0,function*(){for(yield Promise.resolve();Ve.downloads.length;)yield Ve.downloads[0]})}};Ve.baseUrl="";Ve.downloads=[];var Ys=class extends Zi{constructor(){super({clockSource:"offline",context:Hs(arguments[0])?arguments[0]:Cw(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Hs(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]});this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Hs(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return Qe(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;let n=Math.floor(this.sampleRate/128);e&&t%n==0&&(yield new Promise(r=>setTimeout(r,1)))}})}render(e=!0){return Qe(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(e);let t=yield this._context.startRendering();return new Ve(t)})}close(){return Promise.resolve()}},Wu=new zu,Ur=Wu;function en(){return Ur===Wu&&Lw&&kw(new Zi),Ur}function kw(i){qi(i)?Ur=new Zi(i):Hs(i)?Ur=new Ys(i):Ur=i}if(hi&&!hi.TONE_SILENCE_LOGGING){let e=` * Tone.js v${Sl} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function Vw(i){return Math.pow(10,i/20)}function Bw(i){return 20*(Math.log(i)/Math.LN10)}function Hu(i){return Math.pow(2,i/12)}var Zs=440;function Uw(){return Zs}function zw(i){Zs=i}function Ua(i){return Math.round(qu(i))}function qu(i){return 69+12*Math.log2(i/Zs)}function Gw(i){return Zs*Math.pow(2,(i-69)/12)}var $s=class extends pn{constructor(e,t,n){super();this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{let n=parseInt(e,10),r=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*r:this._beatsToUnits(4/n)*r},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{let t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let r=0;return e&&e!=="0"&&(r+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(r+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(r+=this._beatsToUnits(parseFloat(n)/4)),r},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof $s&&this.fromType(this._val),Bt(this._val))return this._noArg();if(fn(this._val)&&Bt(this._units)){for(let e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(ui(this._val)){let e=0;for(let t in this._val)if(Ee(this._val[t])){let n=this._val[t];e+=new this.constructor(this.context,t).valueOf()*n}return e}if(Ee(this._units)){let e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return fn(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}},Ut=class extends $s{constructor(){super(...arguments);this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{let t=new Ut(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){let n=new this.constructor(this.context,e).valueOf(),r=this.valueOf(),a=Math.round(r/n)*n-r;return r+a*t}toNotation(){let e=this.toSeconds(),t=["1m"];for(let s=1;s<9;s++){let o=Math.pow(2,s);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],r=new Ut(this.context,t[0]).toSeconds();return t.forEach(s=>{let o=new Ut(this.context,s).toSeconds();Math.abs(o-e)<Math.abs(r-e)&&(n=s,r=o)}),n}toBarsBeatsSixteenths(){let e=this._beatsToUnits(1),t=this.valueOf()/e;t=parseFloat(t.toFixed(4));let n=Math.floor(t/this._getTimeSignature()),r=t%1*4;t=Math.floor(t)%this._getTimeSignature();let s=r.toString();return s.length>3&&(r=parseFloat(parseFloat(s).toFixed(3))),[n,t,r].join(":")}toTicks(){let e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.round(t*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return Ua(this.toFrequency())}_now(){return this.context.now()}},It=class extends Ut{constructor(){super(...arguments);this.name="Frequency",this.defaultUnits="hz"}static get A4(){return Uw()}static set A4(e){zw(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:It.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(e,t){let r=Ww[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?r:It.mtof(r)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let r=1;return e&&e!=="0"&&(r*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(r*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(r*=this._beatsToUnits(parseFloat(n)/4)),r}}})}transpose(e){return new It(this.context,this.valueOf()*Hu(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Ua(this.valueOf())}toNote(){let e=this.toFrequency(),t=Math.log2(e/It.A4),n=Math.round(12*t)+57,r=Math.floor(n/12);return r<0&&(n+=-12*r),Hw[n%12]+r.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){let e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return Gw(e)}static ftom(e){return Ua(e)}},Ww={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},Hw=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],$i=class extends Ut{constructor(){super(...arguments);this.name="TransportTime"}_now(){return this.context.transport.seconds}},wt=class extends pn{constructor(){super();let e=ie(wt.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:en()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return new Ut(this.context,e).toSeconds()}toFrequency(e){return new It(this.context,e).toFrequency()}toTicks(e){return new $i(this.context,e).toTicks()}_getPartialProperties(e){let t=this.get();return Object.keys(t).forEach(n=>{Bt(e[n])&&delete t[n]}),t}get(){let e=Nw(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){let n=this[t];Ee(n)&&Ee(n.value)&&Ee(n.setValueAtTime)?e[t]=n.value:n instanceof wt?e[t]=n._getPartialProperties(e[t]):$t(n)||li(n)||fn(n)||Ew(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&Ee(this[t])&&(this[t]&&Ee(this[t].value)&&Ee(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof wt?this[t].set(e[t]):this[t]=e[t])}),this}},Qs=class extends Kt{constructor(e="stopped"){super();this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){let t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return Gn(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){let n=this._search(t);for(let r=n;r>=0;r--){let s=this._timeline[r];if(s.state===e)return s}}getNextState(e,t){let n=this._search(t);if(n!==-1)for(let r=n;r<this._timeline.length;r++){let s=this._timeline[r];if(s.state===e)return s}}},qe=class extends wt{constructor(){super(ie(qe.getDefaults(),arguments,["param","units","convert"]));this.name="Param",this.overridden=!1,this._minOutput=1e-7;let e=ie(qe.getDefaults(),arguments,["param","units","convert"]);for(xe(Ee(e.param)&&(di(e.param)||e.param instanceof qe),"param must be an AudioParam");!di(e.param);)e.param=e.param._param;this._swappable=Ee(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new Kt(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,Ee(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(wt.getDefaults(),{convert:!0,units:"number"})}get value(){let e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return Ee(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-Infinity:this._param.minValue}get maxValue(){return Ee(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return Ee(this.maxValue)&&Ee(this.minValue)&&Gn(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?Vw(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?Bw(e):e}setValueAtTime(e,t){let n=this.toSeconds(t),r=this._fromType(e);return xe(isFinite(r)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(r),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:r}),this._param.setValueAtTime(r,n),this}getValueAtTime(e){let t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),r=this._events.get(t),s=this._initialValue;if(r===null)s=this._initialValue;else if(r.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){let o=this._events.getBefore(r.time),a;o===null?a=this._initialValue:a=o.value,r.type==="setTargetAtTime"&&(s=this._exponentialApproach(r.time,a,r.value,r.constant,t))}else if(n===null)s=r.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=r.value;if(r.type==="setTargetAtTime"){let a=this._events.getBefore(r.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?s=this._linearInterpolate(r.time,o,n.time,n.value,t):s=this._exponentialInterpolate(r.time,o,n.time,n.value,t)}else s=r.value;return this._toType(s)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){let n=this._fromType(e),r=this.toSeconds(t);return xe(isFinite(n)&&isFinite(r),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:r,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,r),this._param.linearRampToValueAtTime(n,r),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Jt(n,0)?this._minOutput:n,this._assertRange(n);let r=this.toSeconds(t);return xe(isFinite(n)&&isFinite(r),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:r,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,r),this._param.exponentialRampToValueAtTime(n,r),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);let r=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,r),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){let r=this._fromType(e);xe(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");let s=this.toSeconds(t);return this._assertRange(r),xe(isFinite(r)&&isFinite(s),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:s,type:"setTargetAtTime",value:r}),this.log(this.units,"setTargetAtTime",e,s,n),this._param.setTargetAtTime(r,s,n),this}setValueCurveAtTime(e,t,n,r=1){n=this.toSeconds(n),t=this.toSeconds(t);let s=this._fromType(e[0])*r;this.setValueAtTime(this._toType(s),t);let o=n/(e.length-1);for(let a=1;a<e.length;a++){let c=this._fromType(e[a])*r;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){let t=this.toSeconds(e);return xe(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){let t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));xe(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);let r=this._events.get(t),s=this._events.getAfter(t);return r&&Jt(r.time,t)?s?(this._param.cancelScheduledValues(s.time),this._events.cancel(s.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):s&&(this._param.cancelScheduledValues(s.time),this._events.cancel(s.time),s.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):s.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){let t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);let n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){let r=this._events.getAfter(n.time),s=r?r.time:t+2,o=(s-t)/10;for(let a=t;a<s;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,r=>{r.type==="cancelScheduledValues"?e.cancelScheduledValues(r.time):r.type==="setTargetAtTime"?e.setTargetAtTime(r.value,r.time,r.constant):e[r.type](r.value,r.time)}),this}setParam(e){xe(this._swappable,"The Param must be assigned as 'swappable' in the constructor");let t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,r,s){return n+(t-n)*Math.exp(-(s-e)/r)}_linearInterpolate(e,t,n,r,s){return t+(r-t)*((s-e)/(n-e))}_exponentialInterpolate(e,t,n,r,s){return t*Math.pow(r/t,(s-e)/(n-e))}},De=class extends wt{constructor(){super(...arguments);this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return Ee(this.input)?di(this.input)||this.input instanceof qe?1:this.input.numberOfInputs:0}get numberOfOutputs(){return Ee(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return Ee(e)&&(e instanceof De||Wn(e))}_getInternalNodes(){let e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){let e=this._getInternalNodes();xe(e.length>0,"ToneAudioNode does not have any internal nodes");let t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return Qi(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Pu("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return qw(this,e,t,n),this}chain(...e){return za(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),Ee(this.input)&&(this.input instanceof De?this.input.dispose():Wn(this.input)&&this.input.disconnect()),Ee(this.output)&&(this.output instanceof De?this.output.dispose():Wn(this.output)&&this.output.disconnect()),this._internalChannels=[],this}};function za(...i){let e=i.shift();i.reduce((t,n)=>(t instanceof De?t.connect(n):Wn(t)&&Qi(t,n),n),e)}function Qi(i,e,t=0,n=0){for(xe(Ee(i),"Cannot connect from undefined node"),xe(Ee(e),"Cannot connect to undefined node"),(e instanceof De||Wn(e))&&xe(e.numberOfInputs>0,"Cannot connect to node with no inputs"),xe(i.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof De||e instanceof qe;)Ee(e.input)&&(e=e.input);for(;i instanceof De;)Ee(i.output)&&(i=i.output);di(e)?i.connect(e,t):i.connect(e,t,n)}function qw(i,e,t=0,n=0){if(Ee(e))for(;e instanceof De;)e=e.input;for(;!Wn(i);)Ee(i.output)&&(i=i.output);di(e)?i.disconnect(e,t):Wn(e)?i.disconnect(e,t,n):i.disconnect()}var Ft=class extends De{constructor(){super(ie(Ft.getDefaults(),arguments,["gain","units"]));this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;let e=ie(Ft.getDefaults(),arguments,["gain","units"]);this.gain=new qe({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),it(this,"gain")}static getDefaults(){return Object.assign(De.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}},fi=class extends De{constructor(e){super(e);this.onended=ke,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new Ft({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){let n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(De.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ke})}_startGain(e,t=1){xe(this._startTime===-1,"Source cannot be started more than once");let n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){xe(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();let t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.context.currentTime),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{let n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ke&&(this.onended(this),this.onended=ke,!this.context.isOffline)){let e=()=>this.dispose();typeof window.requestIdleCallback!="undefined"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),xe(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}},zr=class extends fi{constructor(){super(ie(zr.getDefaults(),arguments,["offset"]));this.name="ToneConstantSource",this._source=this.context.createConstantSource();let e=ie(zr.getDefaults(),arguments,["offset"]);Qi(this._source,this._gainNode),this.offset=new qe({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(fi.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){let t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}},Je=class extends De{constructor(){super(ie(Je.getDefaults(),arguments,["value","units"]));this.name="Signal",this.override=!0;let e=ie(Je.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new zr({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(De.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return Ga(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,r){return this._param.setValueCurveAtTime(e,t,n,r),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}};function Ga(i,e,t,n){(e instanceof qe||di(e)||e instanceof Je&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof Je&&(e.overridden=!0)),Qi(i,e,t,n)}var Gr=class extends qe{constructor(){super(ie(Gr.getDefaults(),arguments,["value"]));this.name="TickParam",this._events=new Kt(Infinity),this._multiplier=1;let e=ie(Gr.getDefaults(),arguments,["value"]);this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(qe.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);let r=this._fromType(e),s=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){let c=n*a+t,l=this._exponentialApproach(s.time,s.value,r,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){let n=this.toSeconds(t);super.setValueAtTime(e,t);let r=this._events.get(n),s=this._events.previousEvent(r),o=this._getTicksUntilEvent(s,n);return r.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){let n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);let r=this._events.get(n),s=this._events.previousEvent(r),o=this._getTicksUntilEvent(s,n);return r.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);let n=this._fromType(e),r=this._events.get(t),s=Math.round(Math.max((t-r.time)*10,1)),o=(t-r.time)/s;for(let a=0;a<=s;a++){let c=o*a+r.time,l=this._exponentialInterpolate(r.time,r.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Bt(e.ticks)){let o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}let n=this._fromType(this.getValueAtTime(e.time)),r=this._fromType(this.getValueAtTime(t)),s=this._events.get(t);return s&&s.time===t&&s.type==="setValueAtTime"&&(r=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+r)+e.ticks}getTicksAtTime(e){let t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(t);return this.getTimeOfTick(r+e)-n}getTimeOfTick(e){let t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){let r=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-r)/(n.time-t.time),a=Math.sqrt(Math.pow(r,2)-2*o*(t.ticks-e)),c=(-r+a)/o,l=(-r-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?Infinity:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){let n=this.toSeconds(t),r=this.toSeconds(e),s=this.getTicksAtTime(n);return this.getTicksAtTime(n+r)-s}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){let t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}},Wr=class extends Je{constructor(){super(ie(Wr.getDefaults(),arguments,["value"]));this.name="TickSignal";let e=ie(Wr.getDefaults(),arguments,["value"]);this.input=this._param=new Gr({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(Je.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}},Hr=class extends wt{constructor(){super(ie(Hr.getDefaults(),arguments,["frequency"]));this.name="TickSource",this._state=new Qs,this._tickOffset=new Kt;let e=ie(Hr.getDefaults(),arguments,["frequency"]);this.frequency=new Wr({context:this.context,units:e.units,value:e.frequency}),it(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},wt.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){let n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),Ee(t)&&this.setTicksAtTime(t,n)),this}stop(e){let t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){let n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&this._state.setStateAtTime("paused",t),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this}getTicksAtTime(e){let t=this.toSeconds(e),n=this._state.getLastState("stopped",t),r={state:"paused",time:t};this._state.add(r);let s=n,o=0;return this._state.forEachBetween(n.time,t+this.sampleTime,a=>{let c=s.time,l=this._tickOffset.get(a.time);l&&l.time>=s.time&&(o=l.ticks,c=l.time),s.state==="started"&&a.state!=="started"&&(o+=this.frequency.getTicksAtTime(a.time)-this.frequency.getTicksAtTime(c)),s=a}),this._state.remove(r),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){let t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);let t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);let r=t,s=0;return this._state.forEachBetween(t.time,e+this.sampleTime,o=>{let a=r.time,c=this._tickOffset.get(o.time);c&&c.time>=r.time&&(s=c.seconds,a=c.time),r.state==="started"&&o.state!=="started"&&(s+=o.time-a),r=o}),this._state.remove(n),s}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){let n=this._tickOffset.get(t),r=this._state.get(t),s=Math.max(n.time,r.time),o=this.frequency.getTicksAtTime(s)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let r=this._state.get(e);this._state.forEachBetween(e,t,o=>{r&&r.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(r.time,e),o.time-this.sampleTime,n),r=o});let s=null;if(r&&r.state==="started"){let o=Math.max(r.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(r.time),l=a-c,u=Math.ceil(l)-l;u=Jt(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){s=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(s)throw s;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}},Ji=class extends wt{constructor(){super(ie(Ji.getDefaults(),arguments,["callback","frequency"]));this.name="Clock",this.callback=ke,this._lastUpdate=0,this._state=new Qs("stopped"),this._boundLoop=this._loop.bind(this);let e=ie(Ji.getDefaults(),arguments,["callback","frequency"]);this.callback=e.callback,this._tickSource=new Hr({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,it(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(wt.getDefaults(),{callback:ke,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Nu(this.context);let n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){let t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(r+e,n)}_loop(){let e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":let r=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,r);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,r)=>{this.callback(n,r)}))}getStateAtTime(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};Yi.mixin(Ji);var Js=class extends pn{constructor(){super();this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;let e=ie(Js.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;let n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ke,onload:ke,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return xe(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=ke,r=ke){return fn(t)?this._buffers.set(e.toString(),new Ve(this.baseUrl+t,n,r)):this._buffers.set(e.toString(),new Ve(t,n,r)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}},mn=class extends $i{constructor(){super(...arguments);this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}},Xu=class extends wt{constructor(){super(...arguments);this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Kt,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){let e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){let t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}};Xs(i=>{i.draw=new Xu({context:i})});js(i=>{i.draw.dispose()});var ju=class extends pn{constructor(){super(...arguments);this.name="IntervalTimeline",this._root=null,this._length=0}add(e){xe(Ee(e.time),"Events must have a time property"),xe(Ee(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new Yu(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){let t=[];this._root.search(e.time,t);for(let n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{let t=e.getBalance(),n,r=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,r=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,r=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,r=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,r=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),r&&this._rebalance(r)}e.dispose()}_rotateLeft(e){let t=e.parent,n=e.isLeftChild(),r=e.right;r&&(e.right=r.left,r.left=e),t!==null?n?t.left=r:t.right=r:this._setRoot(r)}_rotateRight(e){let t=e.parent,n=e.isLeftChild(),r=e.left;r&&(e.left=r.right,r.right=e),t!==null?n?t.left=r:t.right=r:this._setRoot(r)}_rebalance(e){let t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){let t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let r=1;r<t.length;r++)t[r].low>n.low&&(n=t[r]);return n.event}}return null}forEach(e){if(this._root!==null){let t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){let n=[];this._root.search(e,n),n.forEach(r=>{r.event&&t(r.event)})}return this}forEachFrom(e,t){if(this._root!==null){let n=[];this._root.searchAfter(e,n),n.forEach(r=>{r.event&&t(r.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}},Yu=class{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}},pi=class extends De{constructor(){super(ie(pi.getDefaults(),arguments,["volume"]));this.name="Volume";let e=ie(pi.getDefaults(),arguments,["volume"]);this.input=this.output=new Ft({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,it(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(De.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-Infinity}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-Infinity):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}},qr=class extends De{constructor(){super(ie(qr.getDefaults(),arguments));this.name="Destination",this.input=new pi({context:this.context}),this.output=new Ft({context:this.context}),this.volume=this.input.volume;let e=ie(qr.getDefaults(),arguments);za(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(De.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),za(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}};Xs(i=>{i.destination=new qr({context:i})});js(i=>{i.destination.dispose()});var Zu=class extends pn{constructor(e){super();this.name="TimelineValue",this._timeline=new Kt({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){let t=this._timeline.get(e);return t?t.value:this._initialValue}},En=class{constructor(e,t){this.id=En._eventId++;let n=Object.assign(En.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:ke,once:!1,time:0}}invoke(e){this.callback&&(this.callback(e),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}};En._eventId=0;var Ks=class extends En{constructor(e,t){super(e,t);this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);let n=Object.assign(Ks.getDefaults(),t);this.duration=new mn(e.context,n.duration).valueOf(),this._interval=new mn(e.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},En.getDefaults(),{duration:Infinity,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvents(e){let t=this.transport.getTicksAtTime(e);t>=this.time&&t>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new mn(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;let t=this.transport.getTicksAtTime(e);t>this.time&&(this._nextTick=this.time+Math.ceil((t-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new mn(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new mn(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}},Ki=class extends wt{constructor(){super(ie(Ki.getDefaults(),arguments));this.name="Transport",this._loop=new Zu(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Kt,this._repeatedEvents=new ju,this._syncedSignals=[],this._swingAmount=0;let e=ie(Ki.getDefaults(),arguments);this._ppq=e.ppq,this._clock=new Ji({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),it(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(wt.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!=0&&t%(this._swingTicks*2)!=0){let n=t%(this._swingTicks*2)/(this._swingTicks*2),r=Math.sin(n*Math.PI)*this._swingAmount;e+=new mn(this.context,this._swingTicks*2/3).toSeconds()*r}this._timeline.forEachAtTime(t,n=>n.invoke(e))}schedule(e,t){let n=new En(this,{callback:e,time:new $i(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,r=Infinity){let s=new Ks(this,{callback:e,duration:new Ut(this.context,r).toTicks(),interval:new Ut(this.context,t).toTicks(),time:new $i(this.context,n).toTicks()});return this._addEvent(s,this._repeatedEvents)}scheduleOnce(e,t){let n=new En(this,{callback:e,once:!0,time:new $i(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){let t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){let t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new mn(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){let n;return Ee(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){$t(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new Ut(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new Ut(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new mn(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){let e=this.now(),t=this._clock.getTicksAtTime(e);return new mn(this.context,t).toBarsBeatsSixteenths()}set position(e){let t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){let t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){let e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){let t=this.now();if(this.state==="started"){let n=this._clock.getTicksAtTime(t),r=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),s=t+r;this.emit("stop",s),this._clock.setTicksAtTime(e,s),this.emit("start",s,this._clock.getSecondsAtTime(s))}else this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return Math.round(this._clock.getTicksAtTime(e))}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{let t=this.now(),n=this.getTicksAtTime(t),r=e-n%e;return this._clock.nextTickTime(r,t)}}syncSignal(e,t){if(!t){let r=this.now();if(e.getValueAtTime(r)!==0){let s=this.bpm.getValueAtTime(r),o=1/(60/s/this.PPQ);t=e.getValueAtTime(r)/o}else t=0}let n=new Ft(t);return this.bpm.connect(n),n.connect(e._param),this._syncedSignals.push({initial:e.value,ratio:n,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){let n=this._syncedSignals[t];n.signal===e&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Gu(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}};Yi.mixin(Ki);Xs(i=>{i.transport=new Ki({context:i})});js(i=>{i.transport.dispose()});var Ct=class extends De{constructor(e){super(e);this.input=void 0,this._state=new Qs("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ke,this._syncedStop=ke,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new pi({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,it(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(De.getDefaults(),{mute:!1,onstop:ke,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let r=Bt(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(r=this._clampToCurrentTime(r),!this._synced&&this._state.getValueAtTime(r)==="started")xe(qs(r,this._state.get(r).time),"Start time must be strictly greater than previous start time"),this._state.cancel(r),this._state.setStateAtTime("started",r),this.log("restart",r),this.restart(r,t,n);else if(this.log("start",r),this._state.setStateAtTime("started",r),this._synced){let s=this._state.get(r);s&&(s.offset=this.toSeconds(ji(t,0)),s.duration=n?this.toSeconds(n):void 0);let o=this.context.transport.schedule(a=>{this._start(a,t,n)},r);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>r&&this._syncedStart(this.now(),this.context.transport.seconds)}else Nu(this.context),this._start(r,t,n);return this}stop(e){let t=Bt(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||Ee(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{let n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(t>0){let n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){let r=t-this.toSeconds(n.time),s;n.duration&&(s=this.toSeconds(n.duration)-r),this._start(e,this.toSeconds(n.offset)+r,s)}}},this._syncedStop=e=>{let t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ke,this.unsync(),this._volume.dispose(),this._state.dispose(),this}},er=class extends fi{constructor(){super(ie(er.getDefaults(),arguments,["url","onload"]));this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;let e=ie(er.getDefaults(),arguments,["url","onload"]);Qi(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new qe({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new Ve(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(fi.getDefaults(),{url:new Ve,loop:!1,loopEnd:0,loopStart:0,onload:ke,onerror:ke,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,r=1){xe(this.buffer.loaded,"buffer is either not set or not loaded");let s=this.toSeconds(e);this._startGain(s,r),this.loop?t=ji(t,this.loopStart):t=ji(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){let a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;Va(o,a)&&(o=(o-c)%l+c),Jt(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Vu(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(s,o)),Ee(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(s+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}};function mi(i,e){return Qe(this,void 0,void 0,function*(){let t=e/i.context.sampleRate,n=new Ys(1,t,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}var Xr=class extends fi{constructor(){super(ie(Xr.getDefaults(),arguments,["frequency","type"]));this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];let e=ie(Xr.getDefaults(),arguments,["frequency","type"]);Qi(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new qe({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new qe({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),it(this,["frequency","detune"])}static getDefaults(){return Object.assign(fi.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){let t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}},Xe=class extends Ct{constructor(){super(ie(Xe.getDefaults(),arguments,["frequency","type"]));this.name="Oscillator",this._oscillator=null;let e=ie(Xe.getDefaults(),arguments,["frequency","type"]);this.frequency=new Je({context:this.context,units:"frequency",value:e.frequency}),it(this,"frequency"),this.detune=new Je({context:this.context,units:"cents",value:e.detune}),it(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Ct.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){let t=this.toSeconds(e),n=new Xr({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){let t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){let t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Xe._periodicWaveCache.find(t=>t.phase===this._phase&&Pw(t.partials,this._partials));{let e=Xe._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;let t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{let n=this._getCachedPeriodicWave();if(Ee(n)){let{partials:r,wave:s}=n;this._wave=s,this._partials=r,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{let[r,s]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(r,s);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Xe._periodicWaveCache.push({imag:s,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:r,type:this._type,wave:this._wave}),Xe._periodicWaveCache.length>100&&Xe._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){Gn(e,0);let t=this._type,n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{let r=new Float32Array(e);this._partials.forEach((s,o)=>r[o]=s),this._partials=Array.from(r),this.type=this._type}}_getRealImaginary(e,t){let r=4096/2,s=new Float32Array(r),o=new Float32Array(r),a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,r=a,this._partials.length===0)return[s,o]}else{let c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),r=a):this._partialCount=0,this._partials=[]}for(let c=1;c<r;++c){let l=2/(c*Math.PI),u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(s[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(s[c]=0,o[c]=0)}return[s,o]}_inverseFFT(e,t,n){let r=0,s=e.length;for(let o=0;o<s;o++)r+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return r}getInitialValue(){let[e,t]=this._getRealImaginary(this._type,0),n=0,r=Math.PI*2,s=32;for(let o=0;o<s;o++)n=Math.max(this._inverseFFT(e,t,o/s*r),n);return Iw(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}};Xe._periodicWaveCache=[];var jr=class extends De{constructor(){super(Object.assign(ie(jr.getDefaults(),arguments,["context"])))}connect(e,t=0,n=0){return Ga(this,e,t,n),this}},tr=class extends jr{constructor(){super(Object.assign(ie(tr.getDefaults(),arguments,["mapping","length"])));this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;let e=ie(tr.getDefaults(),arguments,["mapping","length"]);$t(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):Tw(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(Je.getDefaults(),{length:1024})}setMap(e,t=1024){let n=new Float32Array(t);for(let r=0,s=t;r<s;r++){let o=r/(s-1)*2-1;n[r]=e(o,r)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){let t=["none","2x","4x"].some(n=>n.includes(e));xe(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}},$u=class extends jr{constructor(){super(...arguments);this.name="AudioToGain",this._norm=new tr({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}},Hn=class extends Je{constructor(){super(Object.assign(ie(Hn.getDefaults(),arguments,["value"])));this.name="Multiply",this.override=!1;let e=ie(Hn.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new Ft({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Je.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}},nr=class extends Ct{constructor(){super(ie(nr.getDefaults(),arguments,["frequency","type","modulationType"]));this.name="AMOscillator",this._modulationScale=new $u({context:this.context}),this._modulationNode=new Ft({context:this.context});let e=ie(nr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Xe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Xe({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new Hn({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),it(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Xe.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}},ir=class extends Ct{constructor(){super(ie(ir.getDefaults(),arguments,["frequency","type","modulationType"]));this.name="FMOscillator",this._modulationNode=new Ft({context:this.context,gain:0});let e=ie(ir.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new Xe({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new Je({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new Xe({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new Hn({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new Hn({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),it(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Xe.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}},gi=class extends Ct{constructor(){super(ie(gi.getDefaults(),arguments,["frequency","width"]));this.name="PulseOscillator",this._widthGate=new Ft({context:this.context,gain:0}),this._thresh=new tr({context:this.context,mapping:t=>t<=0?-1:1});let e=ie(gi.getDefaults(),arguments,["frequency","width"]);this.width=new Je({context:this.context,units:"audioRange",value:e.width}),this._triangle=new Xe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),it(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Ct.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}},rr=class extends Ct{constructor(){super(ie(rr.getDefaults(),arguments,["frequency","type","spread"]));this.name="FatOscillator",this._oscillators=[];let e=ie(rr.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new Je({context:this.context,units:"frequency",value:e.frequency}),this.detune=new Je({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,it(this,["frequency","detune"])}static getDefaults(){return Object.assign(Xe.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){let t=-e/2,n=e/(this._oscillators.length-1);this._forEach((r,s)=>r.detune.value=t+n*s)}}get count(){return this._oscillators.length}set count(e){if(Gn(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){let n=new Xe({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):ke});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}},sr=class extends Ct{constructor(){super(ie(sr.getDefaults(),arguments,["frequency","modulationFrequency"]));this.name="PWMOscillator",this.sourceType="pwm",this._scale=new Hn({context:this.context,value:2});let e=ie(sr.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new gi({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Xe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),it(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Ct.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}},Qu={am:nr,fat:rr,fm:ir,oscillator:Xe,pulse:gi,pwm:sr},or=class extends Ct{constructor(){super(ie(or.getDefaults(),arguments,["frequency","type"]));this.name="OmniOscillator";let e=ie(or.getDefaults(),arguments,["frequency","type"]);this.frequency=new Je({context:this.context,units:"frequency",value:e.frequency}),this.detune=new Je({context:this.context,units:"cents",value:e.detune}),it(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(Xe.getDefaults(),ir.getDefaults(),nr.getDefaults(),rr.getDefaults(),gi.getDefaults(),sr.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;let t=Qu[e],n=this.now();if(this._oscillator){let r=this._oscillator;r.stop(n),this.context.setTimeout(()=>r.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Qu[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&li(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&li(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&fn(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(e=1024){return Qe(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}};function Ju(i,e=Infinity){let t=new WeakMap;return function(n,r){Reflect.defineProperty(n,r,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(s){Gn(s,i,e),t.set(this,s)}})}}function An(i,e=Infinity){let t=new WeakMap;return function(n,r){Reflect.defineProperty(n,r,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(s){Gn(this.toSeconds(s),i,e),t.set(this,s)}})}}var ar=class extends Ct{constructor(){super(ie(ar.getDefaults(),arguments,["url","onload"]));this.name="Player",this._activeSources=new Set;let e=ie(ar.getDefaults(),arguments,["url","onload"]);this._buffer=new Ve({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Ct.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ke,onerror:ke,playbackRate:1,reverse:!1})}load(e){return Qe(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=ke){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=ji(t,this._loopStart):t=ji(t,0);let r=this.toSeconds(t),s=n;n=ji(n,Math.max(this._buffer.duration-r,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);let a=new er({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Bt(s)?a.start(e,r):a.start(e,r,o-this.toSeconds(this.fadeOut))}_stop(e){let t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){this._stop(e),this._start(e,t,n)}seek(e,t){let n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){let r=this.toSeconds(e);this._stop(n),this._start(n,r)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&Gn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&Gn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){let t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;let t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(r=>r.cancelStop())),this._activeSources.forEach(r=>{r.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}};Qt([An(0)],ar.prototype,"fadeIn",void 0);Qt([An(0)],ar.prototype,"fadeOut",void 0);var gn=class extends De{constructor(){super(ie(gn.getDefaults(),arguments,["attack","decay","sustain","release"]));this.name="Envelope",this._sig=new Je({context:this.context,value:0}),this.output=this._sig,this.input=void 0;let e=ie(gn.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(De.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(fn(e))return e;{let n;for(n in eo)if(eo[n][t]===e)return n;return e}}_setCurve(e,t,n){if(fn(n)&&Reflect.has(eo,n)){let r=eo[n];ui(r)?e!=="_decayCurve"&&(this[e]=r[t]):this[e]=r}else if($t(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._decayCurve}set decayCurve(e){xe(["linear","exponential"].some(t=>t===e),`Invalid envelope curve: ${e}`),this._decayCurve=e}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let r=this.toSeconds(this.attack),s=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){let a=1/r;r=(1-o)/a}if(r<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,r,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,r,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,r,t)}if(s&&this.sustain<1){let a=t*this.sustain,c=e+r;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,s+c):this._sig.exponentialApproachValueAtTime(a,c,s)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);let t=this.getValueAtTime(e);if(t>0){let n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(xe($t(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return Ga(this,e,t,n),this}asArray(e=1024){return Qe(this,void 0,void 0,function*(){let t=e/this.context.sampleRate,n=new Ys(1,t,this.context.sampleRate),r=this.toSeconds(this.attack)+this.toSeconds(this.decay),s=r+this.toSeconds(this.release),o=s*.1,a=s+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(r+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}};Qt([An(0)],gn.prototype,"attack",void 0);Qt([An(0)],gn.prototype,"decay",void 0);Qt([Ju(0,1)],gn.prototype,"sustain",void 0);Qt([An(0)],gn.prototype,"release",void 0);var eo=(()=>{let i=128,e,t,n=[];for(e=0;e<i;e++)n[e]=Math.sin(e/(i-1)*(Math.PI/2));let r=[],s=6.4;for(e=0;e<i-1;e++){t=e/(i-1);let d=Math.sin(t*(Math.PI*2)*s-Math.PI/2)+1;r[e]=d/10+t*.83}r[i-1]=1;let o=[],a=5;for(e=0;e<i;e++)o[e]=Math.ceil(e/(i-1)*a)/a;let c=[];for(e=0;e<i;e++)t=e/(i-1),c[e]=.5*(1-Math.cos(Math.PI*t));let l=[];for(e=0;e<i;e++){t=e/(i-1);let d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){let f=new Array(d.length);for(let m=0;m<d.length;m++)f[m]=1-d[m];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:r,Out:u(r)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})(),qn=class extends De{constructor(){super(ie(qn.getDefaults(),arguments));this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;let e=ie(qn.getDefaults(),arguments);this._volume=this.output=new pi({context:this.context,volume:e.volume}),this.volume=this._volume.volume,it(this,"volume")}static getDefaults(){return Object.assign(De.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){let n=this["_original_"+e]=this[e];this[e]=(...r)=>{let s=r[t],o=this.context.transport.schedule(a=>{r[t]=a,n.apply(this,r)},s);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(e,t,n,r){let s=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,s,r),this.triggerRelease(s+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}},Xn=class extends qn{constructor(){super(ie(Xn.getDefaults(),arguments));let e=ie(Xn.getDefaults(),arguments);this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(qn.getDefaults(),{detune:0,onsilence:ke,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);let r=this.toSeconds(t);return this._triggerEnvelopeAttack(r,n),this.setNote(e,r),this}triggerRelease(e){this.log("triggerRelease",e);let t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){let n=this.toSeconds(t),r=e instanceof It?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){let s=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(r,s,n)}else this.frequency.setValueAtTime(r,n);return this}};Qt([An(0)],Xn.prototype,"portamento",void 0);var to=class extends gn{constructor(){super(ie(to.getDefaults(),arguments,["attack","decay","sustain","release"]));this.name="AmplitudeEnvelope",this._gainNode=new Ft({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}},cr=class extends Xn{constructor(){super(ie(cr.getDefaults(),arguments));this.name="Synth";let e=ie(cr.getDefaults(),arguments);this.oscillator=new or(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new to(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),it(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Xn.getDefaults(),{envelope:Object.assign(ku(gn.getDefaults(),Object.keys(De.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(ku(or.getDefaults(),[...Object.keys(Ct.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){let n=this.toSeconds(this.envelope.attack),r=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+r)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}},lr=class extends cr{constructor(){super(ie(lr.getDefaults(),arguments));this.name="MembraneSynth",this.portamento=0;let e=ie(lr.getDefaults(),arguments);this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,it(this,["oscillator","envelope"])}static getDefaults(){return Xi(Xn.getDefaults(),cr.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){let n=this.toSeconds(t),r=this.toFrequency(e instanceof It?e.toFrequency():e),s=r*this.octaves;return this.oscillator.frequency.setValueAtTime(s,n),this.oscillator.frequency.exponentialRampToValueAtTime(r,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}};Qt([Ju(0)],lr.prototype,"octaves",void 0);Qt([An(0)],lr.prototype,"pitchDecay",void 0);var Ku=new Set;function Wa(i){Ku.add(i)}function eh(i,e){let t=`registerProcessor("${i}", ${e})`;Ku.add(t)}var Xw=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;Wa(Xw);var jw=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;Wa(jw);var Yw=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;Wa(Yw);var Zw="feedback-comb-filter",$w=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;eh(Zw,$w);var ur=class extends qn{constructor(){super(ie(ur.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"));this.name="Sampler",this._activeSources=new Map;let e=ie(ur.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(n=>{let r=parseInt(n,10);if(xe(Ws(n)||li(r)&&isFinite(r),`url key is neither a note or midi pitch: ${n}`),Ws(n)){let s=new It(this.context,n).toMidi();t[s]=e.urls[n]}else li(r)&&isFinite(r)&&(t[r]=e.urls[r])}),this._buffers=new Js({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(qn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ke,onerror:ke,release:.1,urls:{}})}_findClosest(e){let t=96,n=0;for(;n<t;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(r=>{let s=qu(new It(this.context,r).toFrequency()),o=Math.round(s),a=s-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=Hu(c+a),d=new er({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),$t(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){let f=this._activeSources.get(o),m=f.indexOf(d);m!==-1&&f.splice(m,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{let r=new It(this.context,n).toMidi();if(this._activeSources.has(r)&&this._activeSources.get(r).length){let s=this._activeSources.get(r);t=this.toSeconds(t),s.forEach(o=>{o.stop(t)}),this._activeSources.set(r,[])}}),this}releaseAll(e){let t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,r=1){let s=this.toSeconds(n);return this.triggerAttack(e,s,r),$t(t)?(xe($t(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{let c=t[Math.min(a,t.length-1)];this.triggerRelease(o,s+this.toSeconds(c))})):this.triggerRelease(e,s+this.toSeconds(t)),this}add(e,t,n){if(xe(Ws(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Ws(e)){let r=new It(this.context,e).toMidi();this._buffers.add(r,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}};Qt([An(0)],ur.prototype,"attack",void 0);Qt([An(0)],ur.prototype,"release",void 0);var Qw="bit-crusher",Jw=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;eh(Qw,Jw);var th=class extends De{constructor(){super(...arguments);this.name="Listener",this.positionX=new qe({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new qe({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new qe({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new qe({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new qe({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new qe({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new qe({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new qe({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new qe({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(De.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}};Xs(i=>{i.listener=new th({context:i})});js(i=>{i.listener.dispose()});var qb=en().transport,Xb=en().destination,jb=en().destination,Yb=en().listener,Zb=en().draw,$b=en();var{floor:Kw,random:eb}=Math;function tb(i){return Kw(eb()*(i+1))}var no=tb;function nb(i,e){let[t,n]=i.map(r=>r.split(" ").indexOf(e)).flatMap((r,s)=>r>=0?[r,s]:[]);return t>=0?[t,n]:[]}var Ha=nb;var ib={default:["` 1 2 3 4 5 6 7 8 9 0 - = Backspace","Tab q w e r t y u i o p [ ] \\","CapsLock a s d f g h j k l ; ' Enter","Shift z x c v b n m , . /"],shift:["~ ! @ # $ % ^ & * ( ) _ + Backspace","Tab Q W E R T Y U I O P { } |",'CapsLock A S D F G H J K L : " Enter',"Shift Z X C V B N M < > ?"]},qa=ib;var rb=["red","green","blue","cyan","magenta","yellow"],Xa=rb;var tn=document.body,Yr=new Rr,hr=new St,zt={colum:14,row:4},dr=new Le(NaN,NaN),ja=Array.from({length:zt.colum*zt.row},(i,e)=>{let t=new Ar,n=new ri({opacity:0}),r=new Vt(t,n),s=`${"CDEFGAB"[e%7]}${Math.floor(e/7)}`;return r.userData.osc=new Xe(s,"square").toDestination(),r}),Ya=new Fe,fr=Ya.domElement,nh=new oa;function Za(){Ya.render(Yr,hr)}function sb(i){i.start(),i.stop("+0.05")}function ih(){nh.setFromCamera(dr,hr);let[i]=nh.intersectObjects(ja);if(!i)return;try{sb(i.object.userData.osc)}catch{}let e=Xa[no(Xa.length-1)],t=new Ar(1,1),n=new ri({color:e}),r=new Vt(t,n),s=()=>.05*(Math.random()-.5);r.scale.set(.075+s(),.075+s(),0),Object.assign(r.position,i.point),Yr.add(r),Za(),window.requestAnimationFrame(Za)}function ob({key:i}){if(i===" ")return rh();let[e=no(zt.colum-1),t=no(zt.row-1)]=[...Ha(qa.default,i),...Ha(qa.shift,i)],n=()=>Math.random()-.5;dr.x=(e+n())/(zt.colum-1)*2-1,dr.y=-((t+n())/(zt.row-1))*2+1,ih()}function io(i){let e=()=>.2*(Math.random()-.5);dr.x=i.clientX/fr.clientWidth*2-1+e(),dr.y=-(i.clientY/fr.clientHeight)*2+1+e(),ih()}function sh(i){i.preventDefault(),[...i.touches].map(io)}function ab(){dr.set(NaN,NaN)}function cb(){let i=hr.aspect/zt.colum,e=1/zt.row;for(let[t,n]of ja.entries())n.scale.set(i,e,1),Object.assign(n.position,{x:i*(t%zt.colum-(zt.colum-1)/2),y:e*(Math.floor(t/zt.colum)-(zt.row-1)/2)})}function oh(){Ya.setSize(window.innerWidth,window.innerHeight),hr.aspect=fr.clientWidth/fr.clientHeight,hr.updateProjectionMatrix(),cb(),Za()}function rh(){Yr.background=new Re,Yr.clear(),Yr.add(...ja),hr.position.z=1,oh()}function lb(){Object.assign(fr.style,{width:"100%",height:"100%"}),tn.addEventListener("keydown",ob),tn.addEventListener("touchstart",sh,{passive:!1}),tn.addEventListener("touchmove",sh,{passive:!1}),tn.addEventListener("mousedown",io),tn.addEventListener("mousedown",()=>{tn.addEventListener("mousemove",io)});for(let i of["mouseup","mouseleave"])tn.addEventListener(i,()=>{tn.removeEventListener("mousemove",io)});for(let i of["keyup","mouseup","mouseleave","touchend"])tn.addEventListener(i,ab);tn.appendChild(fr),Object.assign(tn.style,{overflow:"hidden",overscrollBehavior:"none"}),window.addEventListener("resize",oh),rh()}lb();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */
//# sourceMappingURL=main.js.map
