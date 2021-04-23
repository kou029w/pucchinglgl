var nc="128",lh=0,ic=1,uh=2,rc=1,hh=2,pr=3,Yr=0,it=1,Zr=2,sc=1,mr=0,gr=1,oc=2,ac=3,cc=4,dh=5,_i=100,fh=101,ph=102,lc=103,uc=104,mh=200,gh=201,_h=202,vh=203,hc=204,dc=205,xh=206,yh=207,wh=208,bh=209,Mh=210,Sh=0,Th=1,Eh=2,no=3,Ah=4,Ch=5,Lh=6,Rh=7,fc=0,Dh=1,Nh=2,_r=0,Ph=1,Ih=2,Fh=3,Oh=4,kh=5,pc=300,io=301,ro=302,mc=303,gc=304,so=306,oo=307,ao=1e3,Ut=1001,co=1002,Ct=1003,_c=1004,vc=1005,nn=1006,Vh=1007,lo=1008,uo=1009,Bh=1010,Uh=1011,ho=1012,zh=1013,$r=1014,Cn=1015,Qr=1016,Gh=1017,Hh=1018,Wh=1019,Jr=1020,qh=1021,vi=1022,zt=1023,Xh=1024,jh=1025,fo=1026,po=1027,Yh=1028,Zh=1029,$h=1030,Qh=1031,Jh=1032,Kh=1033,xc=33776,yc=33777,wc=33778,bc=33779,Mc=35840,Sc=35841,Tc=35842,Ec=35843,ed=36196,Ac=37492,Cc=37496,td=37808,nd=37809,id=37810,rd=37811,sd=37812,od=37813,ad=37814,cd=37815,ld=37816,ud=37817,hd=37818,dd=37819,fd=37820,pd=37821,md=36492,gd=37840,_d=37841,vd=37842,xd=37843,yd=37844,wd=37845,bd=37846,Md=37847,Sd=37848,Td=37849,Ed=37850,Ad=37851,Cd=37852,Ld=37853,Rd=0,vr=3e3,Lc=3001,Dd=3007,Nd=3002,Pd=3003,Id=3004,Fd=3005,Od=3006,kd=3200,Vd=3201,Bd=0,Ud=1,mo=7680,zd=519,go=35044,_o=35048,Rc="300 es",Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},at=[];for(let i=0;i<256;i++)at[i]=(i<16?"0":"")+i.toString(16);var vo=Math.PI/180,Dc=180/Math.PI;function xr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[i&255]+at[i>>8&255]+at[i>>16&255]+at[i>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toUpperCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Gd(i,e){return(i%e+e)%e}function xo(i,e,t){return(1-t)*i+t*e}function Nc(i){return(i&i-1)==0&&i!==0}function Hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}var Ae=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};Ae.prototype.isVector2=!0;var rt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=r[0],v=r[3],p=r[6],m=r[1],T=r[4],S=r[7],y=r[2],x=r[5],b=r[8];return s[0]=o*_+a*m+c*y,s[3]=o*v+a*T+c*x,s[6]=o*p+a*S+c*b,s[1]=l*_+u*m+h*y,s[4]=l*v+u*T+h*x,s[7]=l*p+u*S+h*b,s[2]=d*_+f*m+g*y,s[5]=d*v+f*T+g*x,s[8]=d*p+f*S+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+n*c,r[3]=t*o+n*l,r[6]=t*a+n*u,r[1]=-n*s+t*c,r[4]=-n*o+t*l,r[7]=-n*a+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rt.prototype.isMatrix3=!0;var xi,Kn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),xi.width=e.width,xi.height=e.height;let n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},qd=0,wt=class extends Jn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Ut,r=Ut,s=nn,o=lo,a=zt,c=uo,l=1,u=vr){super();Object.defineProperty(this,"id",{value:qd++}),this.uuid=xr(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=xr()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yo(r[o].image)):s.push(yo(r[o]))}else s=yo(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};wt.DEFAULT_IMAGE=void 0;wt.DEFAULT_MAPPING=pc;wt.prototype.isTexture=!0;function yo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Kn.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ke=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,o=.01,a=.1,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],v=c[6],p=c[10];if(Math.abs(u-d)<o&&Math.abs(h-_)<o&&Math.abs(g-v)<o){if(Math.abs(u+d)<a&&Math.abs(h+_)<a&&Math.abs(g+v)<a&&Math.abs(l+f+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(f+1)/2,y=(p+1)/2,x=(u+d)/4,b=(h+_)/4,A=(g+v)/4;return T>S&&T>y?T<o?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=x/n,s=b/n):S>y?S<o?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=x/r,s=A/r):y<o?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=b/s,r=A/s),this.set(n,r,s,t),this}let m=Math.sqrt((v-g)*(v-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(h-_)/m,this.z=(d-u)/m,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Ke.prototype.isVector4=!0;var ei=class extends Jn{constructor(e,t,n){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t),n=n||{},this.texture=new wt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};ei.prototype.isWebGLRenderTarget=!0;var sn=class{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let v=1-a,p=c*d+l*f+u*g+h*_,m=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let y=Math.sqrt(T),x=Math.atan2(y,p*m);v=Math.sin(v*x)/y,a=Math.sin(a*x)/y}let S=a*m;if(c=c*v+d*S,l=l*v+f*S,u=u*v+g*S,h=h*v+_*S,v===1-a){let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};sn.prototype.isQuaternion=!0;var O=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,h=c*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};O.prototype.isVector3=!0;var wo=new O,Pc=new sn,Lt=class{constructor(e=new O(Infinity,Infinity,Infinity),t=new O(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new O),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new O),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox),bo.applyMatrix4(e.matrixWorld),this.union(bo));let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new O),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yr),yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Kr.subVectors(this.max,wr),yi.subVectors(e.a,wr),wi.subVectors(e.b,wr),bi.subVectors(e.c,wr),Ln.subVectors(wi,yi),Rn.subVectors(bi,wi),ti.subVectors(yi,bi);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-ti.z,ti.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,ti.z,0,-ti.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-ti.y,ti.x,0];return!Mo(t,yi,wi,bi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,yi,wi,bi,Kr))?!1:(es.crossVectors(Ln,Rn),t=[es.x,es.y,es.z],Mo(t,yi,wi,bi,Kr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new O),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(yr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Lt.prototype.isBox3=!0;var vn=[new O,new O,new O,new O,new O,new O,new O,new O],yr=new O,bo=new Lt,yi=new O,wi=new O,bi=new O,Ln=new O,Rn=new O,ti=new O,wr=new O,Kr=new O,es=new O,ni=new O;function Mo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ni.fromArray(i,s);let a=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=e.dot(ni),l=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Xd=new Lt,Ic=new O,So=new O,To=new O,br=class{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new O),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Lt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){To.subVectors(e,this.center);let t=To.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(To.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return So.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ic.copy(e.center).add(So)),this.expandByPoint(Ic.copy(e.center).sub(So)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new O,Eo=new O,ts=new O,Dn=new O,Ao=new O,ns=new O,Co=new O,Mi=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new O),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new O),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Eo.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Eo);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ts),a=Dn.dot(this.direction),c=-Dn.dot(ts),l=Dn.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ts).multiplyScalar(d).add(Eo),f}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,s){Ao.subVectors(t,e),ns.subVectors(n,e),Co.crossVectors(Ao,ns);let o=this.direction.dot(Co),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);let c=a*this.direction.dot(ns.crossVectors(Dn,ns));if(c<0)return null;let l=a*this.direction.dot(Ao.cross(Dn));if(l<0||c+l>o)return null;let u=-a*Dn.dot(Co);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,c,l,u,h,d,f,g,_,v){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Yd)}lookAt(e,t,n){let r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Nn.crossVectors(n,Rt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Nn.crossVectors(n,Rt)),Nn.normalize(),is.crossVectors(Rt,Nn),r[0]=Nn.x,r[4]=is.x,r[8]=Rt.x,r[1]=Nn.y,r[5]=is.y,r[9]=Rt.y,r[2]=Nn.z,r[6]=is.z,r[10]=Rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],v=n[10],p=n[14],m=n[3],T=n[7],S=n[11],y=n[15],x=r[0],b=r[4],A=r[8],E=r[12],F=r[1],k=r[5],L=r[9],C=r[13],N=r[2],P=r[6],D=r[10],B=r[14],q=r[3],X=r[7],Z=r[11],K=r[15];return s[0]=o*x+a*F+c*N+l*q,s[4]=o*b+a*k+c*P+l*X,s[8]=o*A+a*L+c*D+l*Z,s[12]=o*E+a*C+c*B+l*K,s[1]=u*x+h*F+d*N+f*q,s[5]=u*b+h*k+d*P+f*X,s[9]=u*A+h*L+d*D+f*Z,s[13]=u*E+h*C+d*B+f*K,s[2]=g*x+_*F+v*N+p*q,s[6]=g*b+_*k+v*P+p*X,s[10]=g*A+_*L+v*D+p*Z,s[14]=g*E+_*C+v*B+p*K,s[3]=m*x+T*F+S*N+y*q,s[7]=m*b+T*k+S*P+y*X,s[11]=m*A+T*L+S*D+y*Z,s[15]=m*E+T*C+S*B+y*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],v=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+v*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],v=e[14],p=e[15],m=h*v*l-_*d*l+_*c*f-a*v*f-h*c*p+a*d*p,T=g*d*l-u*v*l-g*c*f+o*v*f+u*c*p-o*d*p,S=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,y=g*h*c-u*_*c-g*a*d+o*_*d+u*a*v-o*h*v,x=t*m+n*T+r*S+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=m*b,e[1]=(_*d*s-h*v*s-_*r*f+n*v*f+h*r*p-n*d*p)*b,e[2]=(a*v*s-_*c*s+_*r*l-n*v*l-a*r*p+n*c*p)*b,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*f-n*c*f)*b,e[4]=T*b,e[5]=(u*v*s-g*d*s+g*r*f-t*v*f-u*r*p+t*d*p)*b,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*p-t*c*p)*b,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*b,e[8]=S*b,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=y*b,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*v+t*h*v)*b,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*v-t*a*v)*b,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,_=o*u,v=o*h,p=a*h,m=c*l,T=c*u,S=c*h,y=n.x,x=n.y,b=n.z;return r[0]=(1-(_+p))*y,r[1]=(f+S)*y,r[2]=(g-T)*y,r[3]=0,r[4]=(f-S)*x,r[5]=(1-(d+p))*x,r[6]=(v+m)*x,r[7]=0,r[8]=(g+T)*b,r[9]=(v-m)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Si.set(r[0],r[1],r[2]).length(),o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);let l=1/s,u=1/o,h=1/a;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){let a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),h=(t+e)*c,d=(n+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xe.prototype.isMatrix4=!0;var Si=new O,Gt=new xe,jd=new O(0,0,0),Yd=new O(1,1,1),Nn=new O,is=new O,Rt=new O,Fc=new xe,Oc=new sn,ii=class{constructor(e=0,t=0,n=0,r=ii.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new O(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ii.prototype.isEuler=!0;ii.DefaultOrder="XYZ";ii.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Lo=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Zd=0,kc=new O,Ti=new sn,yn=new xe,rs=new O,Mr=new O,$d=new O,Qd=new sn,Vc=new O(1,0,0),Bc=new O(0,1,0),Uc=new O(0,0,1),Jd={type:"added"},zc={type:"removed"},Ze=class extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:Zd++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DefaultUp.clone();let e=new O,t=new ii,n=new sn,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new rt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Mr,rs,this.up):yn.lookAt(rs,Mr,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(yn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zc)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(zc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new O),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new sn),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,$d),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new O),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Qd,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new O),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ze.DefaultUp=new O(0,1,0);Ze.DefaultMatrixAutoUpdate=!0;Ze.prototype.isObject3D=!0;var Ro=new O,Kd=new O,ef=new rt,Ht=class{constructor(e=new O(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ro.subVectors(n,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new O),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new O);let n=e.delta(Ro),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new O),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ef.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Ht.prototype.isPlane=!0;var Wt=new O,wn=new O,Do=new O,bn=new O,Ei=new O,Ai=new O,Gc=new O,No=new O,Po=new O,Io=new O,et=class{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new O),r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),wn.subVectors(n,t),Do.subVectors(e,t);let o=Wt.dot(Wt),a=Wt.dot(wn),c=Wt.dot(Do),l=wn.dot(wn),u=wn.dot(Do),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new O),h===0)return s.set(-2,-1,-1);let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,bn),c.set(0,0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),wn.subVectors(e,t),Wt.cross(wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Wt.cross(wn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new O),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return et.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ht),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return et.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return et.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return et.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return et.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new O);let n=this.a,r=this.b,s=this.c,o,a;Ei.subVectors(r,n),Ai.subVectors(s,n),No.subVectors(e,n);let c=Ei.dot(No),l=Ai.dot(No);if(c<=0&&l<=0)return t.copy(n);Po.subVectors(e,r);let u=Ei.dot(Po),h=Ai.dot(Po);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ei,o);Io.subVectors(e,s);let f=Ei.dot(Io),g=Ai.dot(Io);if(g>=0&&f<=g)return t.copy(s);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ai,a);let v=u*g-f*h;if(v<=0&&h-u>=0&&f-g>=0)return Gc.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Gc,a);let p=1/(v+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ei,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tf=0;function Pn(){Object.defineProperty(this,"id",{value:tf++}),this.uuid=xr(),this.name="",this.type="Material",this.fog=!0,this.blending=gr,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Pn.prototype=Object.assign(Object.create(Jn.prototype),{constructor:Pn,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(i){if(i!==void 0)for(let e in i){let t=i[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===sc;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(i){let e=i===void 0||typeof i=="string";e&&(i={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(i).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(i).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(i).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(i).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(i).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(i).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(i).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(i).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(i).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(i).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(i).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(i).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(i).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(i).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(i).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(i).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(i).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(t.blending=this.blending),this.side!==Yr&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=n(i.textures),s=n(i.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(i){this.name=i.name,this.fog=i.fog,this.blending=i.blending,this.side=i.side,this.vertexColors=i.vertexColors,this.opacity=i.opacity,this.transparent=i.transparent,this.blendSrc=i.blendSrc,this.blendDst=i.blendDst,this.blendEquation=i.blendEquation,this.blendSrcAlpha=i.blendSrcAlpha,this.blendDstAlpha=i.blendDstAlpha,this.blendEquationAlpha=i.blendEquationAlpha,this.depthFunc=i.depthFunc,this.depthTest=i.depthTest,this.depthWrite=i.depthWrite,this.stencilWriteMask=i.stencilWriteMask,this.stencilFunc=i.stencilFunc,this.stencilRef=i.stencilRef,this.stencilFuncMask=i.stencilFuncMask,this.stencilFail=i.stencilFail,this.stencilZFail=i.stencilZFail,this.stencilZPass=i.stencilZPass,this.stencilWrite=i.stencilWrite;let e=i.clippingPlanes,t=null;if(e!==null){let n=e.length;t=new Array(n);for(let r=0;r!==n;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=i.clipIntersection,this.clipShadows=i.clipShadows,this.shadowSide=i.shadowSide,this.colorWrite=i.colorWrite,this.precision=i.precision,this.polygonOffset=i.polygonOffset,this.polygonOffsetFactor=i.polygonOffsetFactor,this.polygonOffsetUnits=i.polygonOffsetUnits,this.dithering=i.dithering,this.alphaTest=i.alphaTest,this.alphaToCoverage=i.alphaToCoverage,this.premultipliedAlpha=i.premultipliedAlpha,this.visible=i.visible,this.toneMapped=i.toneMapped,this.userData=JSON.parse(JSON.stringify(i.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Pn.prototype,"needsUpdate",{set:function(i){i===!0&&this.version++}});var Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Oo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ce=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Gd(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Fo(s,r,e+1/3),this.g=Fo(s,r,e),this.b=Fo(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Hc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(ss);let n=xo(qt.h,ss.h,t),r=xo(qt.s,ss.s,t),s=xo(qt.l,ss.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};Ce.NAMES=Hc;Ce.prototype.isColor=!0;Ce.prototype.r=1;Ce.prototype.g=1;Ce.prototype.b=1;var ri=class extends Pn{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};ri.prototype.isMeshBasicMaterial=!0;var Ve=new O,os=new Ae,bt=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=go,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ce),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ae),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new O),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ke),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};bt.prototype.isBufferAttribute=!0;var Vo=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Bo=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},In=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};function Wc(i){if(i.length===0)return-Infinity;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}var nf=0,on=new xe,Uo=new Ze,Ci=new O,Dt=new Lt,Sr=new Lt,st=new O,ct=class extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:nf++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)>65535?Bo:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new In(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-Infinity,-Infinity,-Infinity),new O(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,Infinity);return}if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(Dt.min,Sr.min),Dt.expandByPoint(st),st.addVectors(Dt.max,Sr.max),Dt.expandByPoint(st)):(Dt.expandByPoint(Sr.min),Dt.expandByPoint(Sr.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)st.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(st));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)st.fromBufferAttribute(a,l),c&&(Ci.fromBufferAttribute(e,l),st.add(Ci)),r=Math.max(r,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new bt(new Float32Array(4*a),4));let c=t.tangent.array,l=[],u=[];for(let F=0;F<a;F++)l[F]=new O,u[F]=new O;let h=new O,d=new O,f=new O,g=new Ae,_=new Ae,v=new Ae,p=new O,m=new O;function T(F,k,L){h.fromArray(r,F*3),d.fromArray(r,k*3),f.fromArray(r,L*3),g.fromArray(o,F*2),_.fromArray(o,k*2),v.fromArray(o,L*2),d.sub(h),f.sub(h),_.sub(g),v.sub(g);let C=1/(_.x*v.y-v.x*_.y);!isFinite(C)||(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(C),m.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(C),l[F].add(p),l[k].add(p),l[L].add(p),u[F].add(m),u[k].add(m),u[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let F=0,k=S.length;F<k;++F){let L=S[F],C=L.start,N=L.count;for(let P=C,D=C+N;P<D;P+=3)T(n[P+0],n[P+1],n[P+2])}let y=new O,x=new O,b=new O,A=new O;function E(F){b.fromArray(s,F*3),A.copy(b);let k=l[F];y.copy(k),y.sub(b.multiplyScalar(b.dot(k))).normalize(),x.crossVectors(A,k);let C=x.dot(u[F])<0?-1:1;c[F*4]=y.x,c[F*4+1]=y.y,c[F*4+2]=y.z,c[F*4+3]=C}for(let F=0,k=S.length;F<k;++F){let L=S[F],C=L.start,N=L.count;for(let P=C,D=C+N;P<D;P+=3)E(n[P+0]),E(n[P+1]),E(n[P+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let r in n){if(e.attributes[r]===void 0)continue;let o=n[r].array,a=e.attributes[r],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let h=0,d=l;h<u;h++,d++)o[d]=c[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let _=0,v=c.length;_<v;_++){f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ct,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new ct().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};ct.prototype.isBufferGeometry=!0;var qc=new xe,Li=new Mi,zo=new br,Fn=new O,On=new O,kn=new O,Go=new O,Ho=new O,Wo=new O,as=new O,cs=new O,ls=new O,us=new Ae,hs=new Ae,ds=new Ae,qo=new O,fs=new O,It=class extends Ze{constructor(e=new ct,t=new ri){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),e.ray.intersectsSphere(zo)===!1)||(qc.copy(s).invert(),Li.copy(e.ray).applyMatrix4(qc),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){let p=f[_],m=r[p.materialIndex],T=Math.max(p.start,g.start),S=Math.min(p.start+p.count,g.start+g.count);for(let y=T,x=S;y<x;y+=3){let b=a.getX(y),A=a.getX(y+1),E=a.getX(y+2);o=ps(this,m,e,Li,c,l,u,h,d,b,A,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=_,m=v;p<m;p+=3){let T=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);o=ps(this,r,e,Li,c,l,u,h,d,T,S,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=f.length;_<v;_++){let p=f[_],m=r[p.materialIndex],T=Math.max(p.start,g.start),S=Math.min(p.start+p.count,g.start+g.count);for(let y=T,x=S;y<x;y+=3){let b=y,A=y+1,E=y+2;o=ps(this,m,e,Li,c,l,u,h,d,b,A,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{let _=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let p=_,m=v;p<m;p+=3){let T=p,S=p+1,y=p+2;o=ps(this,r,e,Li,c,l,u,h,d,T,S,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};It.prototype.isMesh=!0;function rf(i,e,t,n,r,s,o,a){let c;if(e.side===it?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side!==Zr,a),c===null)return null;fs.copy(a),fs.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fs);return l<t.near||l>t.far?null:{distance:l,point:fs.clone(),object:i}}function ps(i,e,t,n,r,s,o,a,c,l,u,h){Fn.fromBufferAttribute(r,l),On.fromBufferAttribute(r,u),kn.fromBufferAttribute(r,h);let d=i.morphTargetInfluences;if(e.morphTargets&&s&&d){as.set(0,0,0),cs.set(0,0,0),ls.set(0,0,0);for(let g=0,_=s.length;g<_;g++){let v=d[g],p=s[g];v!==0&&(Go.fromBufferAttribute(p,l),Ho.fromBufferAttribute(p,u),Wo.fromBufferAttribute(p,h),o?(as.addScaledVector(Go,v),cs.addScaledVector(Ho,v),ls.addScaledVector(Wo,v)):(as.addScaledVector(Go.sub(Fn),v),cs.addScaledVector(Ho.sub(On),v),ls.addScaledVector(Wo.sub(kn),v)))}Fn.add(as),On.add(cs),kn.add(ls)}i.isSkinnedMesh&&e.skinning&&(i.boneTransform(l,Fn),i.boneTransform(u,On),i.boneTransform(h,kn));let f=rf(i,e,t,n,Fn,On,kn,qo);if(f){a&&(us.fromBufferAttribute(a,l),hs.fromBufferAttribute(a,u),ds.fromBufferAttribute(a,h),f.uv=et.getUV(qo,Fn,On,kn,us,hs,ds,new Ae)),c&&(us.fromBufferAttribute(c,l),hs.fromBufferAttribute(c,u),ds.fromBufferAttribute(c,h),f.uv2=et.getUV(qo,Fn,On,kn,us,hs,ds,new Ae));let g={a:l,b:u,c:h,normal:new O,materialIndex:0};et.getNormal(Fn,On,kn,g.normal),f.face=g}return f}var ms=class extends ct{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(h,2));function g(_,v,p,m,T,S,y,x,b,A,E){let F=S/b,k=y/A,L=S/2,C=y/2,N=x/2,P=b+1,D=A+1,B=0,q=0,X=new O;for(let Z=0;Z<D;Z++){let K=Z*k-C;for(let ae=0;ae<P;ae++){let J=ae*F-L;X[_]=J*m,X[v]=K*T,X[p]=N,l.push(X.x,X.y,X.z),X[_]=0,X[v]=0,X[p]=x>0?1:-1,u.push(X.x,X.y,X.z),h.push(ae/b),h.push(1-Z/A),B+=1}}for(let Z=0;Z<A;Z++)for(let K=0;K<b;K++){let ae=d+K+P*Z,J=d+K+P*(Z+1),z=d+(K+1)+P*(Z+1),Te=d+(K+1)+P*Z;c.push(ae,J,Te),c.push(J,z,Te),q+=6}a.addGroup(f,q,E),f+=q,d+=B}}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ht(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let r in n)e[r]=n[r]}return e}var sf={clone:Ri,merge:ht},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends Pn{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=of,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};si.prototype.isShaderMaterial=!0;var Xo=class extends Ze{constructor(){super();this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new O),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Xo.prototype.isCamera=!0;var Mt=class extends Xo{constructor(e=50,t=1,n=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};Mt.prototype.isPerspectiveCamera=!0;var Di=90,Ni=1,gs=class extends Ze{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let r=new Mt(Di,Ni,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(1,0,0)),this.add(r);let s=new Mt(Di,Ni,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);let o=new Mt(Di,Ni,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);let a=new Mt(Di,Ni,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);let c=new Mt(Di,Ni,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,1)),this.add(c);let l=new Mt(Di,Ni,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u}},Tr=class extends wt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:io,a=a!==void 0?a:vi,super(e,t,n,r,s,o,a,c,l,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Tr.prototype.isCubeTexture=!0;var jo=class extends ei{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Tr(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=zt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:it,blending:mr});s.uniforms.tEquirect.value=t;let o=new It(r,s),a=t.minFilter;return t.minFilter===lo&&(t.minFilter=nn),new gs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};jo.prototype.isWebGLCubeRenderTarget=!0;var Yo=class extends wt{constructor(e,t,n,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d);this.image={data:e||null,width:t||1,height:n||1},this.magFilter=l!==void 0?l:Ct,this.minFilter=u!==void 0?u:Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Yo.prototype.isDataTexture=!0;var Pi=new br,_s=new O,vs=class{constructor(e=new Ht,t=new Ht,n=new Ht,r=new Ht,s=new Ht,o=new Ht){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],f=n[9],g=n[10],_=n[11],v=n[12],p=n[13],m=n[14],T=n[15];return t[0].setComponents(a-r,h-c,_-d,T-v).normalize(),t[1].setComponents(a+r,h+c,_+d,T+v).normalize(),t[2].setComponents(a+s,h+l,_+f,T+p).normalize(),t[3].setComponents(a-s,h-l,_-f,T-p).normalize(),t[4].setComponents(a-o,h-u,_-g,T-m).normalize(),t[5].setComponents(a+o,h+u,_+g,T+m).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function cf(i,e){let t=e.isWebGL2,n=new WeakMap;function r(l,u){let h=l.array,d=l.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,d),l.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:h instanceof Uint8Array&&(g=5121),{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let d=u.array,f=u.updateRange;i.bindBuffer(h,l),f.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var Er=class extends ct{constructor(e=1,t=1,n=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],v=[];for(let p=0;p<u;p++){let m=p*d-o;for(let T=0;T<l;T++){let S=T*h-s;g.push(S,-m,0),_.push(0,0,1),v.push(T/a),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let m=0;m<a;m++){let T=m+l*p,S=m+l*(p+1),y=m+1+l*(p+1),x=m+1+l*p;f.push(T,S,x),f.push(S,y,x)}this.setIndex(f),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(_,3)),this.setAttribute("uv",new In(v,2))}},lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf="vec3 transformed = vec3( position );",mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
}`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`
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
}`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Yf=`uniform bool receiveShadow;
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
#endif`,Zf=`#if defined( USE_ENVMAP )
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
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,gp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#ifdef USE_SHADOWMAP
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
#endif`,Np=`#ifdef USE_SHADOWMAP
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
#endif`,Pp=`#ifdef USE_SHADOWMAP
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
#endif`,Ip=`float getShadowMask() {
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Wp=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,qp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`#include <envmap_common_pars_fragment>
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#include <common>
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
}`,rm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
}`,vm=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,ym=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
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
#include <transmissionmap_pars_fragment>
#include <bsdfs>
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
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
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
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
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
}`,bm=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Tm=`uniform float size;
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
}`,Em=`uniform vec3 color;
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
}`,Am=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Lm=`uniform float rotation;
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
}`,ye={alphamap_fragment:lf,alphamap_pars_fragment:uf,alphatest_fragment:hf,aomap_fragment:df,aomap_pars_fragment:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:vf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:wf,color_fragment:bf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:Tf,common:Ef,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Rf,emissivemap_fragment:Df,emissivemap_pars_fragment:Nf,encodings_fragment:Pf,encodings_pars_fragment:If,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:kf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:Zf,envmap_vertex:Bf,fog_vertex:Uf,fog_pars_vertex:zf,fog_fragment:Gf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Wf,lightmap_fragment:qf,lightmap_pars_fragment:Xf,lights_lambert_vertex:jf,lights_pars_begin:Yf,lights_toon_fragment:$f,lights_toon_pars_fragment:Qf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Kf,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:rp,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:cp,map_fragment:lp,map_pars_fragment:up,map_particle_fragment:hp,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:vp,normal_fragment_maps:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:Tp,project_vertex:Ep,dithering_fragment:Ap,dithering_pars_fragment:Cp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Np,shadowmap_vertex:Pp,shadowmask_pars_fragment:Ip,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:kp,skinnormal_vertex:Vp,specularmap_fragment:Bp,specularmap_pars_fragment:Up,tonemapping_fragment:zp,tonemapping_pars_fragment:Gp,transmissionmap_fragment:Hp,transmissionmap_pars_fragment:Wp,uv_pars_fragment:qp,uv_pars_vertex:Xp,uv_vertex:jp,uv2_pars_fragment:Yp,uv2_pars_vertex:Zp,uv2_vertex:$p,worldpos_vertex:Qp,background_frag:Jp,background_vert:Kp,cube_frag:em,cube_vert:tm,depth_frag:nm,depth_vert:im,distanceRGBA_frag:rm,distanceRGBA_vert:sm,equirect_frag:om,equirect_vert:am,linedashed_frag:cm,linedashed_vert:lm,meshbasic_frag:um,meshbasic_vert:hm,meshlambert_frag:dm,meshlambert_vert:fm,meshmatcap_frag:pm,meshmatcap_vert:mm,meshtoon_frag:gm,meshtoon_vert:_m,meshphong_frag:vm,meshphong_vert:xm,meshphysical_frag:ym,meshphysical_vert:wm,normal_frag:bm,normal_vert:Mm,points_frag:Sm,points_vert:Tm,shadow_frag:Em,shadow_vert:Am,sprite_frag:Cm,sprite_vert:Lm},ee={common:{diffuse:{value:new Ce(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new rt},uv2Transform:{value:new rt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ce(15658734)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new rt}}},an={basic:{uniforms:ht([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:ht([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.fog,ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:ht([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:ht([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:ht([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:ht([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:ht([ee.points,ee.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:ht([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:ht([ee.common,ee.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:ht([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:ye.normal_vert,fragmentShader:ye.normal_frag},sprite:{uniforms:ht([ee.sprite,ee.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},cube:{uniforms:ht([ee.envmap,{opacity:{value:1}}]),vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:ht([ee.common,ee.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:ht([ee.lights,ee.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};an.physical={uniforms:ht([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ce(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};function Rm(i,e,t,n,r){let s=new Ce(0),o=0,a,c,l=null,u=0,h=null;function d(g,_,v,p){let m=_.isScene===!0?_.background:null;m&&m.isTexture&&(m=e.get(m));let T=i.xr,S=T.getSession&&T.getSession();S&&S.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),p=!0),(i.autoClear||p)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),m&&(m.isCubeTexture||m.mapping===so)?(c===void 0&&(c=new It(new ms(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ri(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:it,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,x,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||u!==m.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,l=m,u=m.version,h=i.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new It(new Er(2,2),new si({name:"BackgroundMaterial",uniforms:Ri(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||u!==m.version||h!==i.toneMapping)&&(a.material.needsUpdate=!0,l=m,u=m.version,h=i.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function f(g,_){t.buffers.color.setClear(g.r,g.g,g.b,_,r)}return{getClearColor:function(){return s},setClearColor:function(g,_=1){s.set(g),o=_,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,f(s,o)},render:d}}function Dm(i,e,t,n){let r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=_(null),l=c;function u(C,N,P,D,B){let q=!1;if(o){let X=g(D,P,N);l!==X&&(l=X,d(l.object)),q=v(D,B),q&&p(D,B)}else{let X=N.wireframe===!0;(l.geometry!==D.id||l.program!==P.id||l.wireframe!==X)&&(l.geometry=D.id,l.program=P.id,l.wireframe=X,q=!0)}C.isInstancedMesh===!0&&(q=!0),B!==null&&t.update(B,34963),q&&(b(C,N,P,D),B!==null&&i.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function f(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function g(C,N,P){let D=P.wireframe===!0,B=a[C.id];B===void 0&&(B={},a[C.id]=B);let q=B[N.id];q===void 0&&(q={},B[N.id]=q);let X=q[D];return X===void 0&&(X=_(h()),q[D]=X),X}function _(C){let N=[],P=[],D=[];for(let B=0;B<r;B++)N[B]=0,P[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:P,attributeDivisors:D,object:C,attributes:{},index:null}}function v(C,N){let P=l.attributes,D=C.attributes,B=0;for(let q in D){let X=P[q],Z=D[q];if(X===void 0||X.attribute!==Z||X.data!==Z.data)return!0;B++}return l.attributesNum!==B||l.index!==N}function p(C,N){let P={},D=C.attributes,B=0;for(let q in D){let X=D[q],Z={};Z.attribute=X,X.data&&(Z.data=X.data),P[q]=Z,B++}l.attributes=P,l.attributesNum=B,l.index=N}function m(){let C=l.newAttributes;for(let N=0,P=C.length;N<P;N++)C[N]=0}function T(C){S(C,0)}function S(C,N){let P=l.newAttributes,D=l.enabledAttributes,B=l.attributeDivisors;P[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),B[C]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),B[C]=N)}function y(){let C=l.newAttributes,N=l.enabledAttributes;for(let P=0,D=N.length;P<D;P++)N[P]!==C[P]&&(i.disableVertexAttribArray(P),N[P]=0)}function x(C,N,P,D,B,q){n.isWebGL2===!0&&(P===5124||P===5125)?i.vertexAttribIPointer(C,N,P,B,q):i.vertexAttribPointer(C,N,P,D,B,q)}function b(C,N,P,D){if(n.isWebGL2===!1&&(C.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let B=D.attributes,q=P.getAttributes(),X=N.defaultAttributeValues;for(let Z in q){let K=q[Z];if(K>=0){let ae=B[Z];if(ae!==void 0){let J=ae.normalized,z=ae.itemSize,Te=t.get(ae);if(Te===void 0)continue;let Y=Te.buffer,le=Te.type,se=Te.bytesPerElement;if(ae.isInterleavedBufferAttribute){let _e=ae.data,we=_e.stride,Re=ae.offset;_e&&_e.isInstancedInterleavedBuffer?(S(K,_e.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=_e.meshPerAttribute*_e.count)):T(K),i.bindBuffer(34962,Y),x(K,z,le,J,we*se,Re*se)}else ae.isInstancedBufferAttribute?(S(K,ae.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)):T(K),i.bindBuffer(34962,Y),x(K,z,le,J,0,0)}else if(Z==="instanceMatrix"){let J=t.get(C.instanceMatrix);if(J===void 0)continue;let z=J.buffer,Te=J.type;S(K+0,1),S(K+1,1),S(K+2,1),S(K+3,1),i.bindBuffer(34962,z),i.vertexAttribPointer(K+0,4,Te,!1,64,0),i.vertexAttribPointer(K+1,4,Te,!1,64,16),i.vertexAttribPointer(K+2,4,Te,!1,64,32),i.vertexAttribPointer(K+3,4,Te,!1,64,48)}else if(Z==="instanceColor"){let J=t.get(C.instanceColor);if(J===void 0)continue;let z=J.buffer,Te=J.type;S(K,1),i.bindBuffer(34962,z),i.vertexAttribPointer(K,3,Te,!1,12,0)}else if(X!==void 0){let J=X[Z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(K,J);break;case 3:i.vertexAttrib3fv(K,J);break;case 4:i.vertexAttrib4fv(K,J);break;default:i.vertexAttrib1fv(K,J)}}}}y()}function A(){k();for(let C in a){let N=a[C];for(let P in N){let D=N[P];for(let B in D)f(D[B].object),delete D[B];delete N[P]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;let N=a[C.id];for(let P in N){let D=N[P];for(let B in D)f(D[B].object),delete D[B];delete N[P]}delete a[C.id]}function F(C){for(let N in a){let P=a[N];if(P[C.id]===void 0)continue;let D=P[C.id];for(let B in D)f(D[B].object),delete D[B];delete P[C.id]}}function k(){L(),l!==c&&(l=c,d(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:k,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:m,enableAttribute:T,disableUnusedAttributes:y}}function Nm(i,e,t,n){let r=n.isWebGL2,s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Pm(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=t.logarithmicDepthBuffer===!0,u=i.getParameter(34930),h=i.getParameter(35660),d=i.getParameter(3379),f=i.getParameter(34076),g=i.getParameter(34921),_=i.getParameter(36347),v=i.getParameter(36348),p=i.getParameter(36349),m=h>0,T=o||e.has("OES_texture_float"),S=m&&T,y=o?i.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:p,vertexTextures:m,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:y}}function Im(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Ht,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){let g=h.length!==0||d||n!==0||r;return r=d,t=u(h,f,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{let m=s?0:n,T=m*4,S=p.clippingState||null;c.value=S,S=u(g,d,T,f);for(let y=0;y!==T;++y)S[y]=t[y];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,v=null;if(_!==0){if(v=c.value,g!==!0||v===null){let p=f+_*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<p)&&(v=new Float32Array(p));for(let T=0,S=f;T!==_;++T,S+=4)o.copy(h[T]).applyMatrix4(m,a),o.normal.toArray(v,S),v[S+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Fm(i){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=io:a===gc&&(o.mapping=ro),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===mc||a===gc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=i.getRenderTarget(),u=new jo(c.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),i.setRenderTarget(l),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function Om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function km(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],34962);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let v=0,p=_.length;v<p;v++)e.update(_[v],34962)}}function l(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let m=f.array;_=f.version;for(let T=0,S=m.length;T<S;T+=3){let y=m[T+0],x=m[T+1],b=m[T+2];d.push(y,x,x,b,b,y)}}else{let m=g.array;_=g.version;for(let T=0,S=m.length/3-1;T<S;T+=3){let y=T+0,x=T+1,b=T+2;d.push(y,x,x,b,b,y)}}let v=new(Wc(d)>65535?Bo:Vo)(d,1);v.version=_;let p=s.get(h);p&&e.remove(p),s.set(h,v)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Vm(i,e,t,n){let r=n.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){i.drawElements(s,f,a,d*c),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,f,a,d*c,g),t.update(f,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Bm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Um(i,e){return i[0]-e[0]}function zm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Gm(i){let e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,u=l===void 0?0:l.length,h=e[o.id];if(h===void 0){h=[];for(let v=0;v<u;v++)h[v]=[v,0];e[o.id]=h}for(let v=0;v<u;v++){let p=h[v];p[0]=v,p[1]=l[v]}h.sort(zm);for(let v=0;v<8;v++)v<u&&h[v][1]?(n[v][0]=h[v][0],n[v][1]=h[v][1]):(n[v][0]=Number.MAX_SAFE_INTEGER,n[v][1]=0);n.sort(Um);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,g=0;for(let v=0;v<8;v++){let p=n[v],m=p[0],T=p[1];m!==Number.MAX_SAFE_INTEGER&&T?(d&&o.getAttribute("morphTarget"+v)!==d[m]&&o.setAttribute("morphTarget"+v,d[m]),f&&o.getAttribute("morphNormal"+v)!==f[m]&&o.setAttribute("morphNormal"+v,f[m]),t[v]=T,g+=T):(d&&o.hasAttribute("morphTarget"+v)===!0&&o.deleteAttribute("morphTarget"+v),f&&o.hasAttribute("morphNormal"+v)===!0&&o.deleteAttribute("morphNormal"+v),t[v]=0)}let _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",t)}return{update:r}}function Hm(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Zo=class extends wt{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Zo.prototype.isDataTexture2DArray=!0;var $o=class extends wt{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};$o.prototype.isDataTexture3D=!0;var jc=new wt,Wm=new Zo,qm=new $o,Yc=new Tr,Zc=[],$c=[],Qc=new Float32Array(16),Jc=new Float32Array(9),Kc=new Float32Array(4);function Ii(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function $m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(mt(t,n))return;Kc.set(n),i.uniformMatrix2fv(this.addr,!1,Kc),dt(t,n)}}function Qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(mt(t,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),dt(t,n)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(mt(t,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),dt(t,n)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;mt(t,e)||(i.uniform2iv(this.addr,e),dt(t,e))}function tg(i,e){let t=this.cache;mt(t,e)||(i.uniform3iv(this.addr,e),dt(t,e))}function ng(i,e){let t=this.cache;mt(t,e)||(i.uniform4iv(this.addr,e),dt(t,e))}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rg(i,e){let t=this.cache;mt(t,e)||(i.uniform2uiv(this.addr,e),dt(t,e))}function sg(i,e){let t=this.cache;mt(t,e)||(i.uniform3uiv(this.addr,e),dt(t,e))}function og(i,e){let t=this.cache;mt(t,e)||(i.uniform4uiv(this.addr,e),dt(t,e))}function ag(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||jc,r)}function cg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qm,r)}function lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||Yc,r)}function ug(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wm,r)}function hg(i){switch(i){case 5126:return Xm;case 35664:return jm;case 35665:return Ym;case 35666:return Zm;case 35674:return $m;case 35675:return Qm;case 35676:return Jm;case 5124:case 35670:return Km;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return ug}}function dg(i,e){i.uniform1fv(this.addr,e)}function fg(i,e){let t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){let t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){let t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){let t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){let t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vg(i,e){let t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xg(i,e){i.uniform1iv(this.addr,e)}function yg(i,e){i.uniform2iv(this.addr,e)}function wg(i,e){i.uniform3iv(this.addr,e)}function bg(i,e){i.uniform4iv(this.addr,e)}function Mg(i,e){i.uniform1uiv(this.addr,e)}function Sg(i,e){i.uniform2uiv(this.addr,e)}function Tg(i,e){i.uniform3uiv(this.addr,e)}function Eg(i,e){i.uniform4uiv(this.addr,e)}function Ag(i,e,t){let n=e.length,r=el(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||jc,r[s])}function Cg(i,e,t){let n=e.length,r=el(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Yc,r[s])}function Lg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return wg;case 35669:case 35673:return bg;case 5125:return Mg;case 36294:return Sg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg}}function Rg(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=hg(e.type)}function tl(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Lg(e.type)}tl.prototype.updateCache=function(i){let e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),dt(e,i)};function nl(i){this.id=i,this.seq=[],this.map={}}nl.prototype.setValue=function(i,e,t){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(i,e[o.id],t)}};var Qo=/(\w+)(\])?(\[|\.)?/g;function il(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){let n=i.name,r=n.length;for(Qo.lastIndex=0;;){let s=Qo.exec(n),o=Qo.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){il(t,l===void 0?new Rg(a,i,e):new tl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new nl(a),il(t,h)),t=h}}}function Vn(i,e){this.seq=[],this.map={};let t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){let r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);Dg(r,s,this)}}Vn.prototype.setValue=function(i,e,t,n){let r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Vn.prototype.setOptional=function(i,e,t){let n=e[t];n!==void 0&&this.setValue(i,t,n)};Vn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Vn.seqWithValue=function(i,e){let t=[];for(let n=0,r=i.length;n!==r;++n){let s=i[n];s.id in e&&t.push(s)}return t};function rl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ng=0;function Pg(i){let e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function sl(i){switch(i){case vr:return["Linear","( value )"];case Lc:return["sRGB","( value )"];case Nd:return["RGBE","( value )"];case Id:return["RGBM","( value, 7.0 )"];case Fd:return["RGBM","( value, 16.0 )"];case Od:return["RGBD","( value, 256.0 )"];case Dd:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Pd:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ol(i,e,t){let n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=i.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+Pg(s)}function Ar(i,e){let t=sl(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Ig(i,e){let t=sl(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Fg(i,e){let t;switch(e){case Ph:t="Linear";break;case Ih:t="Reinhard";break;case Fh:t="OptimizedCineon";break;case Oh:t="ACESFilmic";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Og(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function kg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vg(i,e){let t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r).name;t[o]=i.getAttribLocation(e,o)}return t}function Cr(i){return i!==""}function al(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(Bg,Ug)}function Ug(i,e){let t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jo(t)}var zg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Gg,ll).replace(zg,Hg)}function Hg(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ll(i,e,t,n)}function ll(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pr&&(e="SHADOWMAP_TYPE_VSM"),e}function qg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case so:case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ro:case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Dh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function Yg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Wg(t),l=qg(t),u=Xg(t),h=jg(t),d=i.gammaFactor>0?i.gammaFactor:1,f=t.isWebGL2?"":Og(t),g=kg(s),_=r.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[g].filter(Cr).join(`
`),v.length>0&&(v+=`
`),p=[f,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(v=[hl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[f,hl(t),"#define SHADER_NAME "+t.shaderName,g,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?ye.tonemapping_pars_fragment:"",t.toneMapping!==_r?Fg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",ye.encodings_pars_fragment,t.map?Ar("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ar("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ar("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ar("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Ar("lightMapTexelToLinear",t.lightMapEncoding):"",Ig("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Jo(o),o=al(o,t),o=cl(o,t),a=Jo(a),a=al(a,t),a=cl(a,t),o=ul(o),a=ul(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Rc?"":"out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=m+v+o,S=m+p+a,y=rl(r,35633,T),x=rl(r,35632,S);if(r.attachShader(_,y),r.attachShader(_,x),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){let E=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(y).trim(),k=r.getShaderInfoLog(x).trim(),L=!0,C=!0;if(r.getProgramParameter(_,35714)===!1){L=!1;let N=ol(r,y,"vertex"),P=ol(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(_,35715),"gl.getProgramInfoLog",E,N,P)}else E!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",E):(F===""||k==="")&&(C=!1);C&&(this.diagnostics={runnable:L,programLog:E,vertexShader:{log:F,prefix:v},fragmentShader:{log:k,prefix:p}})}r.deleteShader(y),r.deleteShader(x);let b;this.getUniforms=function(){return b===void 0&&(b=new Vn(r,_)),b};let A;return this.getAttributes=function(){return A===void 0&&(A=Vg(r,_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=x,this}function Zg(i,e,t,n,r,s){let o=[],a=n.isWebGL2,c=n.logarithmicDepthBuffer,l=n.floatVertexTextures,u=n.maxVertexUniforms,h=n.vertexTextures,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function _(x){let A=x.skeleton.bones;if(l)return 1024;{let F=Math.floor((u-20)/4),k=Math.min(F,A.length);return k<A.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+A.length+" bones. This GPU supports "+k+"."),0):k}}function v(x){let b;return x&&x.isTexture?b=x.encoding:x&&x.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=x.texture.encoding):b=vr,b}function p(x,b,A,E,F){let k=E.fog,L=x.isMeshStandardMaterial?E.environment:null,C=e.get(x.envMap||L),N=f[x.type],P=F.isSkinnedMesh?_(F):0;x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let D,B;if(N){let Z=an[N];D=Z.vertexShader,B=Z.fragmentShader}else D=x.vertexShader,B=x.fragmentShader;let q=i.getRenderTarget();return{isWebGL2:a,shaderID:N,shaderName:x.type,vertexShader:D,fragmentShader:B,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:h,outputEncoding:q!==null?v(q.texture):i.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!C,envMapMode:C&&C.mapping,envMapEncoding:v(C),envMapCubeUV:!!C&&(C.mapping===so||C.mapping===oo),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ud,tangentSpaceNormalMap:x.normalMapType===Bd,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&F.geometry&&F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.transmissionMap)&&!!x.displacementMap,fog:!!k,useFog:x.fog,fogExp2:k&&k.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&P>0,maxBones:P,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:_r,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===Zr,flipSided:x.side===it,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.fragmentShader),b.push(x.vertexShader)),x.defines!==void 0)for(let A in x.defines)b.push(A),b.push(x.defines[A]);if(x.isRawShaderMaterial===!1){for(let A=0;A<g.length;A++)b.push(x[g[A]]);b.push(i.outputEncoding),b.push(i.gammaFactor)}return b.push(x.customProgramCacheKey),b.join()}function T(x){let b=f[x.type],A;if(b){let E=an[b];A=sf.clone(E.uniforms)}else A=x.uniforms;return A}function S(x,b){let A;for(let E=0,F=o.length;E<F;E++){let k=o[E];if(k.cacheKey===b){A=k,++A.usedTimes;break}}return A===void 0&&(A=new Yg(i,b,x,r),o.push(A)),A}function y(x){if(--x.usedTimes==0){let b=o.indexOf(x);o[b]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:S,releaseProgram:y,programs:o}}function $g(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.program!==e.program?i.program.id-e.program.id:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dl(i){let e=[],t=0,n=[],r=[],s={id:-1};function o(){t=0,n.length=0,r.length=0}function a(d,f,g,_,v,p){let m=e[t],T=i.get(g);return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,program:T.program||s,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},e[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.program=T.program||s,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function c(d,f,g,_,v,p){let m=a(d,f,g,_,v,p);(g.transparent===!0?r:n).push(m)}function l(d,f,g,_,v,p){let m=a(d,f,g,_,v,p);(g.transparent===!0?r:n).unshift(m)}function u(d,f){n.length>1&&n.sort(d||Qg),r.length>1&&r.sort(f||Jg)}function h(){for(let d=t,f=e.length;d<f;d++){let g=e[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function Kg(i){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new dl(i),e.set(r,[o])):s>=e.get(r).length?(o=new dl(i),e.get(r).push(o)):o=e.get(r)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function e_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ce};break;case"SpotLight":t={position:new O,direction:new O,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function t_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var n_=0;function i_(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function r_(i,e){let t=new e_,n=t_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new O);let s=new O,o=new xe,a=new xe;function c(u){let h=0,d=0,f=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let g=0,_=0,v=0,p=0,m=0,T=0,S=0,y=0;u.sort(i_);for(let b=0,A=u.length;b<A;b++){let E=u[b],F=E.color,k=E.intensity,L=E.distance,C=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=F.r*k,d+=F.g*k,f+=F.b*k;else if(E.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(E.sh.coefficients[N],k);else if(E.isDirectionalLight){let N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let P=E.shadow,D=n.get(E);D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,r.directionalShadow[g]=D,r.directionalShadowMap[g]=C,r.directionalShadowMatrix[g]=E.shadow.matrix,T++}r.directional[g]=N,g++}else if(E.isSpotLight){let N=t.get(E);if(N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(F).multiplyScalar(k),N.distance=L,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,E.castShadow){let P=E.shadow,D=n.get(E);D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,r.spotShadow[v]=D,r.spotShadowMap[v]=C,r.spotShadowMatrix[v]=E.shadow.matrix,y++}r.spot[v]=N,v++}else if(E.isRectAreaLight){let N=t.get(E);N.color.copy(F).multiplyScalar(k),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),r.rectArea[p]=N,p++}else if(E.isPointLight){let N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){let P=E.shadow,D=n.get(E);D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,D.shadowCameraNear=P.camera.near,D.shadowCameraFar=P.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=C,r.pointShadowMatrix[_]=E.shadow.matrix,S++}r.point[_]=N,_++}else if(E.isHemisphereLight){let N=t.get(E);N.skyColor.copy(E.color).multiplyScalar(k),N.groundColor.copy(E.groundColor).multiplyScalar(k),r.hemi[m]=N,m++}}p>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ee.LTC_FLOAT_1,r.rectAreaLTC2=ee.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ee.LTC_HALF_1,r.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;let x=r.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==T||x.numPointShadows!==S||x.numSpotShadows!==y)&&(r.directional.length=g,r.spot.length=v,r.rectArea.length=p,r.point.length=_,r.hemi.length=m,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=y,x.directionalLength=g,x.pointLength=_,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=T,x.numPointShadows=S,x.numSpotShadows=y,r.version=n_++)}function l(u,h){let d=0,f=0,g=0,_=0,v=0,p=h.matrixWorldInverse;for(let m=0,T=u.length;m<T;m++){let S=u[m];if(S.isDirectionalLight){let y=r.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(S.isSpotLight){let y=r.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let y=r.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let y=r.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let y=r.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),v++}}}return{setup:c,setupView:l,state:r}}function fl(i,e){let t=new r_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function c(){t.setup(n)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function s_(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new fl(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new fl(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ko=class extends Pn{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=kd,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Ko.prototype.isMeshDepthMaterial=!0;var ea=class extends Pn{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ea.prototype.isMeshDistanceMaterial=!0;var o_=`uniform sampler2D shadow_pass;
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
}`,a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function pl(i,e,t){let n=new vs,r=new Ae,s=new Ae,o=new Ke,a=[],c=[],l={},u=t.maxTextureSize,h={0:it,1:Yr,2:Zr},d=new si({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new It(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc,this.render=function(x,b,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||x.length===0)return;let E=i.getRenderTarget(),F=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),L=i.state;L.setBlending(mr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let C=0,N=x.length;C<N;C++){let P=x[C],D=P.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let B=D.getFrameExtents();if(r.multiply(B),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===pr){let X={minFilter:nn,magFilter:nn,format:zt};D.map=new ei(r.x,r.y,X),D.map.texture.name=P.name+".shadowMap",D.mapPass=new ei(r.x,r.y,X),D.camera.updateProjectionMatrix()}if(D.map===null){let X={minFilter:Ct,magFilter:Ct,format:zt};D.map=new ei(r.x,r.y,X),D.map.texture.name=P.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let q=D.getViewportCount();for(let X=0;X<q;X++){let Z=D.getViewport(X);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),L.viewport(o),D.updateMatrices(P,X),n=D.getFrustum(),y(b,A,D.camera,P,this.type)}!D.isPointLightShadow&&this.type===pr&&p(D,A),D.needsUpdate=!1}v.needsUpdate=!1,i.setRenderTarget(E,F,k)};function p(x,b){let A=e.update(_);d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,A,d,_,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,A,f,_,null)}function m(x,b,A){let E=x<<0|b<<1|A<<2,F=a[E];return F===void 0&&(F=new Ko({depthPacking:Vd,morphTargets:x,skinning:b}),a[E]=F),F}function T(x,b,A){let E=x<<0|b<<1|A<<2,F=c[E];return F===void 0&&(F=new ea({morphTargets:x,skinning:b}),c[E]=F),F}function S(x,b,A,E,F,k,L){let C=null,N=m,P=x.customDepthMaterial;if(E.isPointLight===!0&&(N=T,P=x.customDistanceMaterial),P===void 0){let D=!1;A.morphTargets===!0&&(D=b.morphAttributes&&b.morphAttributes.position&&b.morphAttributes.position.length>0);let B=!1;x.isSkinnedMesh===!0&&(A.skinning===!0?B=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",x));let q=x.isInstancedMesh===!0;C=N(D,B,q)}else C=P;if(i.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){let D=C.uuid,B=A.uuid,q=l[D];q===void 0&&(q={},l[D]=q);let X=q[B];X===void 0&&(X=C.clone(),q[B]=X),C=X}return C.visible=A.visible,C.wireframe=A.wireframe,L===pr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(E.matrixWorld),C.nearDistance=F,C.farDistance=k),C}function y(x,b,A,E,F){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&F===pr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);let C=e.update(x),N=x.material;if(Array.isArray(N)){let P=C.groups;for(let D=0,B=P.length;D<B;D++){let q=P[D],X=N[q.materialIndex];if(X&&X.visible){let Z=S(x,C,X,E,A.near,A.far,F);i.renderBufferDirect(A,null,C,Z,x,q)}}}else if(N.visible){let P=S(x,C,N,E,A.near,A.far,F);i.renderBufferDirect(A,null,C,P,x,null)}}let L=x.children;for(let C=0,N=L.length;C<N;C++)y(L[C],b,A,E,F)}}function c_(i,e,t){let n=t.isWebGL2;function r(){let I=!1,Q=new Ke,ne=null,ue=new Ke(0,0,0,0);return{setMask:function(j){ne!==j&&!I&&(i.colorMask(j,j,j,j),ne=j)},setLocked:function(j){I=j},setClear:function(j,pe,ke,je,Yn){Yn===!0&&(j*=je,pe*=je,ke*=je),Q.set(j,pe,ke,je),ue.equals(Q)===!1&&(i.clearColor(j,pe,ke,je),ue.copy(Q))},reset:function(){I=!1,ne=null,ue.set(-1,0,0,0)}}}function s(){let I=!1,Q=null,ne=null,ue=null;return{setTest:function(j){j?ae(2929):J(2929)},setMask:function(j){Q!==j&&!I&&(i.depthMask(j),Q=j)},setFunc:function(j){if(ne!==j){if(j)switch(j){case Sh:i.depthFunc(512);break;case Th:i.depthFunc(519);break;case Eh:i.depthFunc(513);break;case no:i.depthFunc(515);break;case Ah:i.depthFunc(514);break;case Ch:i.depthFunc(518);break;case Lh:i.depthFunc(516);break;case Rh:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ne=j}},setLocked:function(j){I=j},setClear:function(j){ue!==j&&(i.clearDepth(j),ue=j)},reset:function(){I=!1,Q=null,ne=null,ue=null}}}function o(){let I=!1,Q=null,ne=null,ue=null,j=null,pe=null,ke=null,je=null,Yn=null;return{setTest:function(qe){I||(qe?ae(2960):J(2960))},setMask:function(qe){Q!==qe&&!I&&(i.stencilMask(qe),Q=qe)},setFunc:function(qe,gn,Bt){(ne!==qe||ue!==gn||j!==Bt)&&(i.stencilFunc(qe,gn,Bt),ne=qe,ue=gn,j=Bt)},setOp:function(qe,gn,Bt){(pe!==qe||ke!==gn||je!==Bt)&&(i.stencilOp(qe,gn,Bt),pe=qe,ke=gn,je=Bt)},setLocked:function(qe){I=qe},setClear:function(qe){Yn!==qe&&(i.clearStencil(qe),Yn=qe)},reset:function(){I=!1,Q=null,ne=null,ue=null,j=null,pe=null,ke=null,je=null,Yn=null}}}let a=new r,c=new s,l=new o,u={},h=null,d={},f=null,g=!1,_=null,v=null,p=null,m=null,T=null,S=null,y=null,x=!1,b=null,A=null,E=null,F=null,k=null,L=i.getParameter(35661),C=!1,N=0,P=i.getParameter(7938);P.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),C=N>=1):P.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),C=N>=2);let D=null,B={},q=new Ke(0,0,i.canvas.width,i.canvas.height),X=new Ke(0,0,i.canvas.width,i.canvas.height);function Z(I,Q,ne){let ue=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let pe=0;pe<ne;pe++)i.texImage2D(Q+pe,0,6408,1,1,0,6408,5121,ue);return j}let K={};K[3553]=Z(3553,3553,1),K[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ae(2929),c.setFunc(no),Re(!1),ut(ic),ae(2884),_e(mr);function ae(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function J(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function z(I){I!==h&&(i.bindFramebuffer(36160,I),h=I)}function Te(I,Q){Q===null&&h!==null&&(Q=h),d[I]!==Q&&(i.bindFramebuffer(I,Q),d[I]=Q,n&&(I===36009&&(d[36160]=Q),I===36160&&(d[36009]=Q)))}function Y(I){return f!==I?(i.useProgram(I),f=I,!0):!1}let le={[_i]:32774,[fh]:32778,[ph]:32779};if(n)le[lc]=32775,le[uc]=32776;else{let I=e.get("EXT_blend_minmax");I!==null&&(le[lc]=I.MIN_EXT,le[uc]=I.MAX_EXT)}let se={[mh]:0,[gh]:1,[_h]:768,[hc]:770,[Mh]:776,[wh]:774,[xh]:772,[vh]:769,[dc]:771,[bh]:775,[yh]:773};function _e(I,Q,ne,ue,j,pe,ke,je){if(I===mr){g===!0&&(J(3042),g=!1);return}if(g===!1&&(ae(3042),g=!0),I!==dh){if(I!==_||je!==x){if((v!==_i||T!==_i)&&(i.blendEquation(32774),v=_i,T=_i),je)switch(I){case gr:i.blendFuncSeparate(1,771,1,771);break;case oc:i.blendFunc(1,1);break;case ac:i.blendFuncSeparate(0,0,769,771);break;case cc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case gr:i.blendFuncSeparate(770,771,1,771);break;case oc:i.blendFunc(770,1);break;case ac:i.blendFunc(0,769);break;case cc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,m=null,S=null,y=null,_=I,x=je}return}j=j||Q,pe=pe||ne,ke=ke||ue,(Q!==v||j!==T)&&(i.blendEquationSeparate(le[Q],le[j]),v=Q,T=j),(ne!==p||ue!==m||pe!==S||ke!==y)&&(i.blendFuncSeparate(se[ne],se[ue],se[pe],se[ke]),p=ne,m=ue,S=pe,y=ke),_=I,x=null}function we(I,Q){I.side===Zr?J(2884):ae(2884);let ne=I.side===it;Q&&(ne=!ne),Re(ne),I.blending===gr&&I.transparent===!1?_e(mr):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);let ue=I.stencilWrite;l.setTest(ue),ue&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(32926):J(32926)}function Re(I){b!==I&&(I?i.frontFace(2304):i.frontFace(2305),b=I)}function ut(I){I!==lh?(ae(2884),I!==A&&(I===ic?i.cullFace(1029):I===uh?i.cullFace(1028):i.cullFace(1032))):J(2884),A=I}function xt(I){I!==E&&(C&&i.lineWidth(I),E=I)}function Vt(I,Q,ne){I?(ae(32823),(F!==Q||k!==ne)&&(i.polygonOffset(Q,ne),F=Q,k=ne)):J(32823)}function $(I){I?ae(3089):J(3089)}function oe(I){I===void 0&&(I=33984+L-1),D!==I&&(i.activeTexture(I),D=I)}function R(I,Q){D===null&&oe();let ne=B[D];ne===void 0&&(ne={type:void 0,texture:void 0},B[D]=ne),(ne.type!==I||ne.texture!==Q)&&(i.bindTexture(I,Q||K[I]),ne.type=I,ne.texture=Q)}function M(){let I=B[D];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function G(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){q.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),q.copy(I))}function Me(I){X.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function ve(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},D=null,B={},h=null,d={},f=null,g=!1,_=null,v=null,p=null,m=null,T=null,S=null,y=null,x=!1,b=null,A=null,E=null,F=null,k=null,q.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ae,disable:J,bindFramebuffer:Te,bindXRFramebuffer:z,useProgram:Y,setBlending:_e,setMaterial:we,setFlipSided:Re,setCullFace:ut,setLineWidth:xt,setPolygonOffset:Vt,setScissorTest:$,activeTexture:oe,bindTexture:R,unbindTexture:M,compressedTexImage2D:G,texImage2D:W,texImage3D:ie,scissor:ce,viewport:Me,reset:ve}}function l_(i,e,t,n,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap,f,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function _(R,M){return g?new OffscreenCanvas(R,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(R,M,G,W){let ie=1;if((R.width>W||R.height>W)&&(ie=W/Math.max(R.width,R.height)),ie<1||M===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){let ce=M?Wd:Math.floor,Me=ce(ie*R.width),ve=ce(ie*R.height);f===void 0&&(f=_(Me,ve));let I=G?_(Me,ve):f;return I.width=Me,I.height=ve,I.getContext("2d").drawImage(R,0,0,Me,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+ve+")."),I}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Nc(R.width)&&Nc(R.height)}function m(R){return a?!1:R.wrapS!==Ut||R.wrapT!==Ut||R.minFilter!==Ct&&R.minFilter!==nn}function T(R,M){return R.generateMipmaps&&M&&R.minFilter!==Ct&&R.minFilter!==nn}function S(R,M,G,W){i.generateMipmap(R);let ie=n.get(M);ie.__maxMipLevel=Math.log2(Math.max(G,W))}function y(R,M,G){if(a===!1)return M;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=M;return M===6403&&(G===5126&&(W=33326),G===5131&&(W=33325),G===5121&&(W=33321)),M===6407&&(G===5126&&(W=34837),G===5131&&(W=34843),G===5121&&(W=32849)),M===6408&&(G===5126&&(W=34836),G===5131&&(W=34842),G===5121&&(W=32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function x(R){return R===Ct||R===_c||R===vc?9728:9729}function b(R){let M=R.target;M.removeEventListener("dispose",b),E(M),M.isVideoTexture&&d.delete(M),o.memory.textures--}function A(R){let M=R.target;M.removeEventListener("dispose",A),F(M),o.memory.textures--}function E(R){let M=n.get(R);M.__webglInit!==void 0&&(i.deleteTexture(M.__webglTexture),n.remove(R))}function F(R){let M=R.texture,G=n.get(R),W=n.get(M);if(!!R){if(W.__webglTexture!==void 0&&i.deleteTexture(W.__webglTexture),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else i.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&i.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer);n.remove(M),n.remove(R)}}let k=0;function L(){k=0}function C(){let R=k;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),k+=1,R}function N(R,M){let G=n.get(R);if(R.isVideoTexture&&ut(R),R.version>0&&G.__version!==R.version){let W=R.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(G,R,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,G.__webglTexture)}function P(R,M){let G=n.get(R);if(R.version>0&&G.__version!==R.version){ae(G,R,M);return}t.activeTexture(33984+M),t.bindTexture(35866,G.__webglTexture)}function D(R,M){let G=n.get(R);if(R.version>0&&G.__version!==R.version){ae(G,R,M);return}t.activeTexture(33984+M),t.bindTexture(32879,G.__webglTexture)}function B(R,M){let G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,M);return}t.activeTexture(33984+M),t.bindTexture(34067,G.__webglTexture)}let q={[ao]:10497,[Ut]:33071,[co]:33648},X={[Ct]:9728,[_c]:9984,[vc]:9986,[nn]:9729,[Vh]:9985,[lo]:9987};function Z(R,M,G){if(G?(i.texParameteri(R,10242,q[M.wrapS]),i.texParameteri(R,10243,q[M.wrapT]),(R===32879||R===35866)&&i.texParameteri(R,32882,q[M.wrapR]),i.texParameteri(R,10240,X[M.magFilter]),i.texParameteri(R,10241,X[M.minFilter])):(i.texParameteri(R,10242,33071),i.texParameteri(R,10243,33071),(R===32879||R===35866)&&i.texParameteri(R,32882,33071),(M.wrapS!==Ut||M.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,10240,x(M.magFilter)),i.texParameteri(R,10241,x(M.minFilter)),M.minFilter!==Ct&&M.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let W=e.get("EXT_texture_filter_anisotropic");if(M.type===Cn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Qr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(R,M){R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b),R.__webglTexture=i.createTexture(),o.memory.textures++)}function ae(R,M,G){let W=3553;M.isDataTexture2DArray&&(W=35866),M.isDataTexture3D&&(W=32879),K(R,M),t.activeTexture(33984+G),t.bindTexture(W,R.__webglTexture),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);let ie=m(M)&&p(M.image)===!1,ce=v(M.image,ie,!1,u),Me=p(ce)||a,ve=s.convert(M.format),I=s.convert(M.type),Q=y(M.internalFormat,ve,I);Z(W,M,Me);let ne,ue=M.mipmaps;if(M.isDepthTexture)Q=6402,a?M.type===Cn?Q=36012:M.type===$r?Q=33190:M.type===Jr?Q=35056:Q=33189:M.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===fo&&Q===6402&&M.type!==ho&&M.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ho,I=s.convert(M.type)),M.format===po&&Q===6402&&(Q=34041,M.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Jr,I=s.convert(M.type))),t.texImage2D(3553,0,Q,ce.width,ce.height,0,ve,I,null);else if(M.isDataTexture)if(ue.length>0&&Me){for(let j=0,pe=ue.length;j<pe;j++)ne=ue[j],t.texImage2D(3553,j,Q,ne.width,ne.height,0,ve,I,ne.data);M.generateMipmaps=!1,R.__maxMipLevel=ue.length-1}else t.texImage2D(3553,0,Q,ce.width,ce.height,0,ve,I,ce.data),R.__maxMipLevel=0;else if(M.isCompressedTexture){for(let j=0,pe=ue.length;j<pe;j++)ne=ue[j],M.format!==zt&&M.format!==vi?ve!==null?t.compressedTexImage2D(3553,j,Q,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,j,Q,ne.width,ne.height,0,ve,I,ne.data);R.__maxMipLevel=ue.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,Q,ce.width,ce.height,ce.depth,0,ve,I,ce.data),R.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,Q,ce.width,ce.height,ce.depth,0,ve,I,ce.data),R.__maxMipLevel=0;else if(ue.length>0&&Me){for(let j=0,pe=ue.length;j<pe;j++)ne=ue[j],t.texImage2D(3553,j,Q,ve,I,ne);M.generateMipmaps=!1,R.__maxMipLevel=ue.length-1}else t.texImage2D(3553,0,Q,ve,I,ce),R.__maxMipLevel=0;T(M,Me)&&S(W,M,ce.width,ce.height),R.__version=M.version,M.onUpdate&&M.onUpdate(M)}function J(R,M,G){if(M.image.length!==6)return;K(R,M),t.activeTexture(33984+G),t.bindTexture(34067,R.__webglTexture),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);let W=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),ie=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let j=0;j<6;j++)!W&&!ie?ce[j]=v(M.image[j],!1,!0,l):ce[j]=ie?M.image[j].image:M.image[j];let Me=ce[0],ve=p(Me)||a,I=s.convert(M.format),Q=s.convert(M.type),ne=y(M.internalFormat,I,Q);Z(34067,M,ve);let ue;if(W){for(let j=0;j<6;j++){ue=ce[j].mipmaps;for(let pe=0;pe<ue.length;pe++){let ke=ue[pe];M.format!==zt&&M.format!==vi?I!==null?t.compressedTexImage2D(34069+j,pe,ne,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+j,pe,ne,ke.width,ke.height,0,I,Q,ke.data)}}R.__maxMipLevel=ue.length-1}else{ue=M.mipmaps;for(let j=0;j<6;j++)if(ie){t.texImage2D(34069+j,0,ne,ce[j].width,ce[j].height,0,I,Q,ce[j].data);for(let pe=0;pe<ue.length;pe++){let je=ue[pe].image[j].image;t.texImage2D(34069+j,pe+1,ne,je.width,je.height,0,I,Q,je.data)}}else{t.texImage2D(34069+j,0,ne,I,Q,ce[j]);for(let pe=0;pe<ue.length;pe++){let ke=ue[pe];t.texImage2D(34069+j,pe+1,ne,I,Q,ke.image[j])}}R.__maxMipLevel=ue.length}T(M,ve)&&S(34067,M,Me.width,Me.height),R.__version=M.version,M.onUpdate&&M.onUpdate(M)}function z(R,M,G,W){let ie=M.texture,ce=s.convert(ie.format),Me=s.convert(ie.type),ve=y(ie.internalFormat,ce,Me);W===32879||W===35866?t.texImage3D(W,0,ve,M.width,M.height,M.depth,0,ce,Me,null):t.texImage2D(W,0,ve,M.width,M.height,0,ce,Me,null),t.bindFramebuffer(36160,R),i.framebufferTexture2D(36160,G,W,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(R,M,G){if(i.bindRenderbuffer(36161,R),M.depthBuffer&&!M.stencilBuffer){let W=33189;if(G){let ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Cn?W=36012:ie.type===$r&&(W=33190));let ce=Re(M);i.renderbufferStorageMultisample(36161,ce,W,M.width,M.height)}else i.renderbufferStorage(36161,W,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,R)}else if(M.depthBuffer&&M.stencilBuffer){if(G){let W=Re(M);i.renderbufferStorageMultisample(36161,W,35056,M.width,M.height)}else i.renderbufferStorage(36161,34041,M.width,M.height);i.framebufferRenderbuffer(36160,33306,36161,R)}else{let W=M.texture,ie=s.convert(W.format),ce=s.convert(W.type),Me=y(W.internalFormat,ie,ce);if(G){let ve=Re(M);i.renderbufferStorageMultisample(36161,ve,Me,M.width,M.height)}else i.renderbufferStorage(36161,Me,M.width,M.height)}i.bindRenderbuffer(36161,null)}function Y(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);let W=n.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===fo)i.framebufferTexture2D(36160,36096,3553,W,0);else if(M.depthTexture.format===po)i.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function le(R){let M=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Y(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]=i.createRenderbuffer(),Te(M.__webglDepthbuffer[W],R,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Te(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function se(R){let M=R.texture,G=n.get(R),W=n.get(M);R.addEventListener("dispose",A),W.__webglTexture=i.createTexture(),W.__version=M.version,o.memory.textures++;let ie=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultisampleRenderTarget===!0,Me=M.isDataTexture3D||M.isDataTexture2DArray,ve=p(R)||a;if(a&&M.format===vi&&(M.type===Cn||M.type===Qr)&&(M.format=zt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ie){G.__webglFramebuffer=[];for(let I=0;I<6;I++)G.__webglFramebuffer[I]=i.createFramebuffer()}else if(G.__webglFramebuffer=i.createFramebuffer(),ce)if(a){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,G.__webglColorRenderbuffer);let I=s.convert(M.format),Q=s.convert(M.type),ne=y(M.internalFormat,I,Q),ue=Re(R);i.renderbufferStorageMultisample(36161,ue,ne,R.width,R.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ie){t.bindTexture(34067,W.__webglTexture),Z(34067,M,ve);for(let I=0;I<6;I++)z(G.__webglFramebuffer[I],R,36064,34069+I);T(M,ve)&&S(34067,M,R.width,R.height),t.bindTexture(34067,null)}else{let I=3553;Me&&(a?I=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(I,W.__webglTexture),Z(I,M,ve),z(G.__webglFramebuffer,R,36064,I),T(M,ve)&&S(3553,M,R.width,R.height),t.bindTexture(3553,null)}R.depthBuffer&&le(R)}function _e(R){let M=R.texture,G=p(R)||a;if(T(M,G)){let W=R.isWebGLCubeRenderTarget?34067:3553,ie=n.get(M).__webglTexture;t.bindTexture(W,ie),S(W,M,R.width,R.height),t.bindTexture(W,null)}}function we(R){if(R.isWebGLMultisampleRenderTarget)if(a){let M=R.width,G=R.height,W=16384;R.depthBuffer&&(W|=256),R.stencilBuffer&&(W|=1024);let ie=n.get(R);t.bindFramebuffer(36008,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ie.__webglFramebuffer),i.blitFramebuffer(0,0,M,G,0,0,M,G,W,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ie.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Re(R){return a&&R.isWebGLMultisampleRenderTarget?Math.min(h,R.samples):0}function ut(R){let M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}let xt=!1,Vt=!1;function $(R,M){R&&R.isWebGLRenderTarget&&(xt===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),xt=!0),R=R.texture),N(R,M)}function oe(R,M){R&&R.isWebGLCubeRenderTarget&&(Vt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Vt=!0),R=R.texture),B(R,M)}this.allocateTextureUnit=C,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=P,this.setTexture3D=D,this.setTextureCube=B,this.setupRenderTarget=se,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=we,this.safeSetTexture2D=$,this.safeSetTextureCube=oe}function u_(i,e,t){let n=t.isWebGL2;function r(s){let o;if(s===uo)return 5121;if(s===Gh)return 32819;if(s===Hh)return 32820;if(s===Wh)return 33635;if(s===Bh)return 5120;if(s===Uh)return 5122;if(s===ho)return 5123;if(s===zh)return 5124;if(s===$r)return 5125;if(s===Cn)return 5126;if(s===Qr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qh)return 6406;if(s===vi)return 6407;if(s===zt)return 6408;if(s===Xh)return 6409;if(s===jh)return 6410;if(s===fo)return 6402;if(s===po)return 34041;if(s===Yh)return 6403;if(s===Zh)return 36244;if(s===$h)return 33319;if(s===Qh)return 33320;if(s===Jh)return 36248;if(s===Kh)return 36249;if(s===xc||s===yc||s===wc||s===bc)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mc||s===Sc||s===Tc||s===Ec)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Mc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ec)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ed)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Ac||s===Cc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Ac)return o.COMPRESSED_RGB8_ETC2;if(s===Cc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===cd||s===ld||s===ud||s===hd||s===dd||s===fd||s===pd||s===gd||s===_d||s===vd||s===xd||s===yd||s===wd||s===bd||s===Md||s===Sd||s===Td||s===Ed||s===Ad||s===Cd||s===Ld)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===md)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Jr)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}var ta=class extends Mt{constructor(e=[]){super();this.cameras=e}};ta.prototype.isArrayCamera=!0;var Fi=class extends Ze{constructor(){super();this.type="Group"}};Fi.prototype.isGroup=!0;var h_={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h_))),l&&e.hand){o=!0;for(let _ of e.hand.values()){let v=t.getJointPose(_,n);if(l.joints[_.jointName]===void 0){let m=new Fi;m.matrixAutoUpdate=!1,m.visible=!1,l.joints[_.jointName]=m,l.add(m)}let p=l.joints[_.jointName];v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=v.radius),p.visible=v!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}},ml=class extends Jn{constructor(e,t){super();let n=this,r=e.state,s=null,o=1,a=null,c="local-floor",l=null,u=[],h=new Map,d=new Mt;d.layers.enable(1),d.viewport=new Ke;let f=new Mt;f.layers.enable(2),f.viewport=new Ke;let g=[d,f],_=new ta;_.layers.enable(1),_.layers.enable(2);let v=null,p=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let C=u[L];return C===void 0&&(C=new xs,u[L]=C),C.getTargetRaySpace()},this.getControllerGrip=function(L){let C=u[L];return C===void 0&&(C=new xs,u[L]=C),C.getGripSpace()},this.getHand=function(L){let C=u[L];return C===void 0&&(C=new xs,u[L]=C),C.getHandSpace()};function m(L){let C=h.get(L.inputSource);C&&C.dispatchEvent({type:L.type,data:L.inputSource})}function T(){h.forEach(function(L,C){L.disconnect(C)}),h.clear(),v=null,p=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){c=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){s.addEventListener("select",m),s.addEventListener("selectstart",m),s.addEventListener("selectend",m),s.addEventListener("squeeze",m),s.addEventListener("squeezestart",m),s.addEventListener("squeezeend",m),s.addEventListener("end",T),s.addEventListener("inputsourceschange",S);let C=t.getContextAttributes();C.xrCompatible!==!0&&await t.makeXRCompatible();let N={antialias:C.antialias,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:o},P=new XRWebGLLayer(s,t,N);s.updateRenderState({baseLayer:P}),a=await s.requestReferenceSpace(c),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function S(L){let C=s.inputSources;for(let N=0;N<u.length;N++)h.set(C[N],u[N]);for(let N=0;N<L.removed.length;N++){let P=L.removed[N],D=h.get(P);D&&(D.dispatchEvent({type:"disconnected",data:P}),h.delete(P))}for(let N=0;N<L.added.length;N++){let P=L.added[N],D=h.get(P);D&&D.dispatchEvent({type:"connected",data:P})}}let y=new O,x=new O;function b(L,C,N){y.setFromMatrixPosition(C.matrixWorld),x.setFromMatrixPosition(N.matrixWorld);let P=y.distanceTo(x),D=C.projectionMatrix.elements,B=N.projectionMatrix.elements,q=D[14]/(D[10]-1),X=D[14]/(D[10]+1),Z=(D[9]+1)/D[5],K=(D[9]-1)/D[5],ae=(D[8]-1)/D[0],J=(B[8]+1)/B[0],z=q*ae,Te=q*J,Y=P/(-ae+J),le=Y*-ae;C.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(le),L.translateZ(Y),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();let se=q+Y,_e=X+Y,we=z-le,Re=Te+(P-le),ut=Z*X/_e*se,xt=K*X/_e*se;L.projectionMatrix.makePerspective(we,Re,ut,xt,se,_e)}function A(L,C){C===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(C.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.getCamera=function(L){_.near=f.near=d.near=L.near,_.far=f.far=d.far=L.far,(v!==_.near||p!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),v=_.near,p=_.far);let C=L.parent,N=_.cameras;A(_,C);for(let D=0;D<N.length;D++)A(N[D],C);L.matrixWorld.copy(_.matrixWorld),L.matrix.copy(_.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);let P=L.children;for(let D=0,B=P.length;D<B;D++)P[D].updateMatrixWorld(!0);return N.length===2?b(_,d,f):_.projectionMatrix.copy(d.projectionMatrix),_};let E=null;function F(L,C){if(l=C.getViewerPose(a),l!==null){let P=l.views,D=s.renderState.baseLayer;r.bindXRFramebuffer(D.framebuffer);let B=!1;P.length!==_.cameras.length&&(_.cameras.length=0,B=!0);for(let q=0;q<P.length;q++){let X=P[q],Z=D.getViewport(X),K=g[q];K.matrix.fromArray(X.transform.matrix),K.projectionMatrix.fromArray(X.projectionMatrix),K.viewport.set(Z.x,Z.y,Z.width,Z.height),q===0&&_.matrix.copy(K.matrix),B===!0&&_.cameras.push(K)}}let N=s.inputSources;for(let P=0;P<u.length;P++){let D=u[P],B=N[P];D.update(B,C,a)}E&&E(L,C)}let k=new Xc;k.setAnimationLoop(F),this.setAnimationLoop=function(L){E=L},this.dispose=function(){}}};function d_(i){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,T,S){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),c(p,m)):m.isMeshToonMaterial?(n(p,m),u(p,m)):m.isMeshPhongMaterial?(n(p,m),l(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?d(p,m):h(p,m)):m.isMeshMatcapMaterial?(n(p,m),f(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),_(p,m)):m.isMeshNormalMaterial?(n(p,m),v(p,m)):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,T,S):m.isSpriteMaterial?a(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap);let T=i.get(m).envMap;if(T){p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T._needsFlipEnvMap?-1:1,p.reflectivity.value=m.reflectivity,p.refractionRatio.value=m.refractionRatio;let x=i.get(T).__maxMipLevel;x!==void 0&&(p.maxMipLevel.value=x)}m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(S=m.clearcoatRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,T,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=S*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function c(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function l(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===it&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===it&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===it&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===it&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===it&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===it&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),i.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m){h(p,m),p.reflectivity.value=m.reflectivity,p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&p.sheen.value.copy(m.sheen),m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===it&&p.clearcoatNormalScale.value.negate()),p.transmission.value=m.transmission,m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===it&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===it&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function _(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function v(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===it&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===it&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function f_(){let i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return i.style.display="block",i}function Ne(i){i=i||{};let e=i.canvas!==void 0?i.canvas:f_(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,c=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1,h=null,d=null,f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;let _=this,v=!1,p=0,m=0,T=null,S=-1,y=null,x=new Ke,b=new Ke,A=null,E=e.width,F=e.height,k=1,L=null,C=null,N=new Ke(0,0,E,F),P=new Ke(0,0,E,F),D=!1,B=new vs,q=!1,X=!1,Z=new xe,K=new O,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return T===null?k:1}let z=t;function Te(w,U){for(let V=0;V<w.length;V++){let H=w[V],te=e.getContext(H,U);if(te!==null)return te}return null}try{let w={alpha:n,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ke,!1),z===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),z=Te(U,w),z===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,le,se,_e,we,Re,ut,xt,Vt,$,oe,R,M,G,W,ie,ce,Me,ve,I,Q,ne;function ue(){Y=new Om(z),le=new Pm(z,Y,i),Y.init(le),Q=new u_(z,Y,le),se=new c_(z,Y,le),_e=new Bm(z),we=new $g,Re=new l_(z,Y,se,we,le,Q,_e),ut=new Fm(_),xt=new cf(z,le),ne=new Dm(z,Y,xt,le),Vt=new km(z,xt,_e,ne),$=new Hm(z,Vt,xt,_e),Me=new Gm(z),W=new Im(we),oe=new Zg(_,ut,Y,le,ne,W),R=new d_(we),M=new Kg(we),G=new s_(Y,le),ce=new Rm(_,ut,se,$,a),ie=new pl(_,$,le),ve=new Nm(z,Y,_e,le),I=new Vm(z,Y,_e,le),_e.programs=oe.programs,_.capabilities=le,_.extensions=Y,_.properties=we,_.renderLists=M,_.shadowMap=ie,_.state=se,_.info=_e}ue();let j=new ml(_,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(E,F,!1))},this.getSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),w=new Ae),w.set(E,F)},this.setSize=function(w,U,V){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,F=U,e.width=Math.floor(w*k),e.height=Math.floor(U*k),V!==!1&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),w=new Ae),w.set(E*k,F*k).floor()},this.setDrawingBufferSize=function(w,U,V){E=w,F=U,k=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),w=new Ke),w.copy(x)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,U,V,H){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,U,V,H),se.viewport(x.copy(N).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(P)},this.setScissor=function(w,U,V,H){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,U,V,H),se.scissor(b.copy(P).multiplyScalar(k).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(w){se.setScissorTest(D=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){C=w},this.getClearColor=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),w=new Ce),w.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(w,U,V){let H=0;(w===void 0||w)&&(H|=16384),(U===void 0||U)&&(H|=256),(V===void 0||V)&&(H|=1024),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ke,!1),M.dispose(),G.dispose(),we.dispose(),ut.dispose(),$.dispose(),ne.dispose(),j.dispose(),j.removeEventListener("sessionstart",Za),j.removeEventListener("sessionend",$a),Zn.stop()};function pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let w=_e.autoReset,U=ie.enabled,V=ie.autoUpdate,H=ie.needsUpdate,te=ie.type;ue(),_e.autoReset=w,ie.enabled=U,ie.autoUpdate=V,ie.needsUpdate=H,ie.type=te}function je(w){let U=w.target;U.removeEventListener("dispose",je),Yn(U)}function Yn(w){qe(w),we.remove(w)}function qe(w){let U=we.get(w).programs;U!==void 0&&U.forEach(function(V){oe.releaseProgram(V)})}function gn(w,U){w.render(function(V){_.renderBufferImmediate(V,U)})}this.renderBufferImmediate=function(w,U){ne.initAttributes();let V=we.get(w);w.hasPositions&&!V.position&&(V.position=z.createBuffer()),w.hasNormals&&!V.normal&&(V.normal=z.createBuffer()),w.hasUvs&&!V.uv&&(V.uv=z.createBuffer()),w.hasColors&&!V.color&&(V.color=z.createBuffer());let H=U.getAttributes();w.hasPositions&&(z.bindBuffer(34962,V.position),z.bufferData(34962,w.positionArray,35048),ne.enableAttribute(H.position),z.vertexAttribPointer(H.position,3,5126,!1,0,0)),w.hasNormals&&(z.bindBuffer(34962,V.normal),z.bufferData(34962,w.normalArray,35048),ne.enableAttribute(H.normal),z.vertexAttribPointer(H.normal,3,5126,!1,0,0)),w.hasUvs&&(z.bindBuffer(34962,V.uv),z.bufferData(34962,w.uvArray,35048),ne.enableAttribute(H.uv),z.vertexAttribPointer(H.uv,2,5126,!1,0,0)),w.hasColors&&(z.bindBuffer(34962,V.color),z.bufferData(34962,w.colorArray,35048),ne.enableAttribute(H.color),z.vertexAttribPointer(H.color,3,5126,!1,0,0)),ne.disableUnusedAttributes(),z.drawArrays(4,0,w.count),w.count=0},this.renderBufferDirect=function(w,U,V,H,te,Se){U===null&&(U=ae);let he=te.isMesh&&te.matrixWorld.determinant()<0,me=tc(w,U,H,te);se.setMaterial(H,he);let Ie=V.index,fe=V.attributes.position;if(Ie===null){if(fe===void 0||fe.count===0)return}else if(Ie.count===0)return;let Ee=1;H.wireframe===!0&&(Ie=Vt.getWireframeAttribute(V),Ee=2),(H.morphTargets||H.morphNormals)&&Me.update(te,V,H,me),ne.setup(te,H,me,V,Ie);let de,De=ve;Ie!==null&&(de=xt.get(Ie),De=I,De.setIndex(de));let tn=Ie!==null?Ie.count:fe.count,pt=V.drawRange.start*Ee,$n=V.drawRange.count*Ee,Je=Se!==null?Se.start*Ee:0,Qn=Se!==null?Se.count*Ee:Infinity,Ye=Math.max(pt,Je),to=Math.min(tn,pt+$n,Je+Qn)-1,yt=Math.max(0,to-Ye+1);if(yt!==0){if(te.isMesh)H.wireframe===!0?(se.setLineWidth(H.wireframeLinewidth*J()),De.setMode(1)):De.setMode(4);else if(te.isLine){let _n=H.linewidth;_n===void 0&&(_n=1),se.setLineWidth(_n*J()),te.isLineSegments?De.setMode(1):te.isLineLoop?De.setMode(2):De.setMode(3)}else te.isPoints?De.setMode(0):te.isSprite&&De.setMode(4);if(te.isInstancedMesh)De.renderInstances(Ye,yt,te.count);else if(V.isInstancedBufferGeometry){let _n=Math.min(V.instanceCount,V._maxInstanceCount);De.renderInstances(Ye,yt,_n)}else De.render(Ye,yt)}},this.compile=function(w,U){d=G.get(w),d.init(),w.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(),w.traverse(function(V){let H=V.material;if(H)if(Array.isArray(H))for(let te=0;te<H.length;te++){let Se=H[te];eo(Se,w,V)}else eo(H,w,V)})};let Bt=null;function sh(w){Bt&&Bt(w)}function Za(){Zn.stop()}function $a(){Zn.start()}let Zn=new Xc;Zn.setAnimationLoop(sh),typeof window!="undefined"&&Zn.setContext(window),this.setAnimationLoop=function(w){Bt=w,j.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},j.addEventListener("sessionstart",Za),j.addEventListener("sessionend",$a),this.render=function(w,U){let V,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),V=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(U=j.getCamera(U)),w.isScene===!0&&w.onBeforeRender(_,w,U,V||T),d=G.get(w,g.length),d.init(),g.push(d),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(Z),X=this.localClippingEnabled,q=W.init(this.clippingPlanes,X,U),h=M.get(w,f.length),h.init(),f.push(h),Qa(w,U,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(L,C),q===!0&&W.beginShadows();let te=d.state.shadowsArray;ie.render(te,w,U),d.setupLights(),d.setupLightsView(U),q===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),V!==void 0&&this.setRenderTarget(V),ce.render(h,w,U,H);let Se=h.opaque,he=h.transparent;Se.length>0&&Ja(Se,w,U),he.length>0&&Ja(he,w,U),T!==null&&(Re.updateRenderTargetMipmap(T),Re.updateMultisampleRenderTarget(T)),w.isScene===!0&&w.onAfterRender(_,w,U),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1),ne.resetDefaultState(),S=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Qa(w,U,V,H){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){H&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);let he=$.update(w),me=w.material;me.visible&&h.push(w,he,me,V,K.z,null)}}else if(w.isImmediateRenderObject)H&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z),h.push(w,null,w.material,V,K.z,null);else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==_e.render.frame&&(w.skeleton.update(),w.skeleton.frame=_e.render.frame),!w.frustumCulled||B.intersectsObject(w))){H&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);let he=$.update(w),me=w.material;if(Array.isArray(me)){let Ie=he.groups;for(let fe=0,Ee=Ie.length;fe<Ee;fe++){let de=Ie[fe],De=me[de.materialIndex];De&&De.visible&&h.push(w,he,De,V,K.z,de)}}else me.visible&&h.push(w,he,me,V,K.z,null)}}let Se=w.children;for(let he=0,me=Se.length;he<me;he++)Qa(Se[he],U,V,H)}function Ja(w,U,V){let H=U.isScene===!0?U.overrideMaterial:null;for(let te=0,Se=w.length;te<Se;te++){let he=w[te],me=he.object,Ie=he.geometry,fe=H===null?he.material:H,Ee=he.group;if(V.isArrayCamera){let de=V.cameras;for(let De=0,tn=de.length;De<tn;De++){let pt=de[De];me.layers.test(pt.layers)&&(se.viewport(x.copy(pt.viewport)),d.setupLightsView(pt),Ka(me,U,pt,Ie,fe,Ee))}}else Ka(me,U,V,Ie,fe,Ee)}}function Ka(w,U,V,H,te,Se){if(w.onBeforeRender(_,U,V,H,te,Se),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),w.isImmediateRenderObject){let he=tc(V,U,te,w);se.setMaterial(te),ne.reset(),gn(w,he)}else _.renderBufferDirect(V,U,H,te,w,Se);w.onAfterRender(_,U,V,H,te,Se)}function eo(w,U,V){U.isScene!==!0&&(U=ae);let H=we.get(w),te=d.state.lights,Se=d.state.shadowsArray,he=te.state.version,me=oe.getParameters(w,te.state,Se,U,V),Ie=oe.getProgramCacheKey(me),fe=H.programs;H.environment=w.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=ut.get(w.envMap||H.environment),fe===void 0&&(w.addEventListener("dispose",je),fe=new Map,H.programs=fe);let Ee=fe.get(Ie);if(Ee!==void 0){if(H.currentProgram===Ee&&H.lightsStateVersion===he)return ec(w,me),Ee}else me.uniforms=oe.getUniforms(w),w.onBuild(me,_),w.onBeforeCompile(me,_),Ee=oe.acquireProgram(me,Ie),fe.set(Ie,Ee),H.uniforms=me.uniforms;let de=H.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(de.clippingPlanes=W.uniform),ec(w,me),H.needsLights=ah(w),H.lightsStateVersion=he,H.needsLights&&(de.ambientLightColor.value=te.state.ambient,de.lightProbe.value=te.state.probe,de.directionalLights.value=te.state.directional,de.directionalLightShadows.value=te.state.directionalShadow,de.spotLights.value=te.state.spot,de.spotLightShadows.value=te.state.spotShadow,de.rectAreaLights.value=te.state.rectArea,de.ltc_1.value=te.state.rectAreaLTC1,de.ltc_2.value=te.state.rectAreaLTC2,de.pointLights.value=te.state.point,de.pointLightShadows.value=te.state.pointShadow,de.hemisphereLights.value=te.state.hemi,de.directionalShadowMap.value=te.state.directionalShadowMap,de.directionalShadowMatrix.value=te.state.directionalShadowMatrix,de.spotShadowMap.value=te.state.spotShadowMap,de.spotShadowMatrix.value=te.state.spotShadowMatrix,de.pointShadowMap.value=te.state.pointShadowMap,de.pointShadowMatrix.value=te.state.pointShadowMatrix);let De=Ee.getUniforms(),tn=Vn.seqWithValue(De.seq,de);return H.currentProgram=Ee,H.uniformsList=tn,Ee}function ec(w,U){let V=we.get(w);V.outputEncoding=U.outputEncoding,V.instancing=U.instancing,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas}function tc(w,U,V,H){U.isScene!==!0&&(U=ae),Re.resetTextureUnits();let te=U.fog,Se=V.isMeshStandardMaterial?U.environment:null,he=T===null?_.outputEncoding:T.texture.encoding,me=ut.get(V.envMap||Se),Ie=V.vertexColors===!0&&H.geometry&&H.geometry.attributes.color&&H.geometry.attributes.color.itemSize===4,fe=we.get(V),Ee=d.state.lights;if(q===!0&&(X===!0||w!==y)){let Ye=w===y&&V.id===S;W.setState(V,w,Ye)}let de=!1;V.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Ee.state.version||fe.outputEncoding!==he||H.isInstancedMesh&&fe.instancing===!1||!H.isInstancedMesh&&fe.instancing===!0||fe.envMap!==me||V.fog&&fe.fog!==te||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==W.numPlanes||fe.numIntersection!==W.numIntersection)||fe.vertexAlphas!==Ie)&&(de=!0):(de=!0,fe.__version=V.version);let De=fe.currentProgram;de===!0&&(De=eo(V,U,H));let tn=!1,pt=!1,$n=!1,Je=De.getUniforms(),Qn=fe.uniforms;if(se.useProgram(De.program)&&(tn=!0,pt=!0,$n=!0),V.id!==S&&(S=V.id,pt=!0),tn||y!==w){if(Je.setValue(z,"projectionMatrix",w.projectionMatrix),le.logarithmicDepthBuffer&&Je.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,pt=!0,$n=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){let Ye=Je.map.cameraPosition;Ye!==void 0&&Ye.setValue(z,K.setFromMatrixPosition(w.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Je.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||V.skinning)&&Je.setValue(z,"viewMatrix",w.matrixWorldInverse)}if(V.skinning){Je.setOptional(z,H,"bindMatrix"),Je.setOptional(z,H,"bindMatrixInverse");let Ye=H.skeleton;if(Ye){let to=Ye.bones;if(le.floatVertexTextures){if(Ye.boneTexture===null){let yt=Math.sqrt(to.length*4);yt=Hd(yt),yt=Math.max(yt,4);let _n=new Float32Array(yt*yt*4);_n.set(Ye.boneMatrices);let ch=new Yo(_n,yt,yt,zt,Cn);Ye.boneMatrices=_n,Ye.boneTexture=ch,Ye.boneTextureSize=yt}Je.setValue(z,"boneTexture",Ye.boneTexture,Re),Je.setValue(z,"boneTextureSize",Ye.boneTextureSize)}else Je.setOptional(z,Ye,"boneMatrices")}}return(pt||fe.receiveShadow!==H.receiveShadow)&&(fe.receiveShadow=H.receiveShadow,Je.setValue(z,"receiveShadow",H.receiveShadow)),pt&&(Je.setValue(z,"toneMappingExposure",_.toneMappingExposure),fe.needsLights&&oh(Qn,$n),te&&V.fog&&R.refreshFogUniforms(Qn,te),R.refreshMaterialUniforms(Qn,V,k,F),Vn.upload(z,fe.uniformsList,Qn,Re)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Vn.upload(z,fe.uniformsList,Qn,Re),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Je.setValue(z,"center",H.center),Je.setValue(z,"modelViewMatrix",H.modelViewMatrix),Je.setValue(z,"normalMatrix",H.normalMatrix),Je.setValue(z,"modelMatrix",H.matrixWorld),De}function oh(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function ah(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return T},this.setRenderTarget=function(w,U=0,V=0){T=w,p=U,m=V,w&&we.get(w).__webglFramebuffer===void 0&&Re.setupRenderTarget(w);let H=null,te=!1,Se=!1;if(w){let he=w.texture;(he.isDataTexture3D||he.isDataTexture2DArray)&&(Se=!0);let me=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(H=me[U],te=!0):w.isWebGLMultisampleRenderTarget?H=we.get(w).__webglMultisampledFramebuffer:H=me,x.copy(w.viewport),b.copy(w.scissor),A=w.scissorTest}else x.copy(N).multiplyScalar(k).floor(),b.copy(P).multiplyScalar(k).floor(),A=D;if(se.bindFramebuffer(36160,H),se.viewport(x),se.scissor(b),se.setScissorTest(A),te){let he=we.get(w.texture);z.framebufferTexture2D(36160,36064,34069+U,he.__webglTexture,V)}else if(Se){let he=we.get(w.texture),me=U||0;z.framebufferTextureLayer(36160,36064,he.__webglTexture,V||0,me)}},this.readRenderTargetPixels=function(w,U,V,H,te,Se,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){se.bindFramebuffer(36160,me);try{let Ie=w.texture,fe=Ie.format,Ee=Ie.type;if(fe!==zt&&Q.convert(fe)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let de=Ee===Qr&&(Y.has("EXT_color_buffer_half_float")||le.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Ee!==uo&&Q.convert(Ee)!==z.getParameter(35738)&&!(Ee===Cn&&(le.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!de){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z.checkFramebufferStatus(36160)===36053?U>=0&&U<=w.width-H&&V>=0&&V<=w.height-te&&z.readPixels(U,V,H,te,Q.convert(fe),Q.convert(Ee),Se):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Ie=T!==null?we.get(T).__webglFramebuffer:null;se.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(w,U,V=0){let H=Math.pow(2,-V),te=Math.floor(U.image.width*H),Se=Math.floor(U.image.height*H),he=Q.convert(U.format);Re.setTexture2D(U,0),z.copyTexImage2D(3553,V,he,w.x,w.y,te,Se,0),se.unbindTexture()},this.copyTextureToTexture=function(w,U,V,H=0){let te=U.image.width,Se=U.image.height,he=Q.convert(V.format),me=Q.convert(V.type);Re.setTexture2D(V,0),z.pixelStorei(37440,V.flipY),z.pixelStorei(37441,V.premultiplyAlpha),z.pixelStorei(3317,V.unpackAlignment),U.isDataTexture?z.texSubImage2D(3553,H,w.x,w.y,te,Se,he,me,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(3553,H,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,he,U.mipmaps[0].data):z.texSubImage2D(3553,H,w.x,w.y,he,me,U.image),H===0&&V.generateMipmaps&&z.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V,H,te=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Se,height:he,data:me}=V.image,Ie=Q.convert(H.format),fe=Q.convert(H.type),Ee;if(H.isDataTexture3D)Re.setTexture3D(H,0),Ee=32879;else if(H.isDataTexture2DArray)Re.setTexture2DArray(H,0),Ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,H.flipY),z.pixelStorei(37441,H.premultiplyAlpha),z.pixelStorei(3317,H.unpackAlignment);let de=z.getParameter(3314),De=z.getParameter(32878),tn=z.getParameter(3316),pt=z.getParameter(3315),$n=z.getParameter(32877);z.pixelStorei(3314,Se),z.pixelStorei(32878,he),z.pixelStorei(3316,w.min.x),z.pixelStorei(3315,w.min.y),z.pixelStorei(32877,w.min.z),z.texSubImage3D(Ee,te,U.x,U.y,U.z,w.max.x-w.min.x+1,w.max.y-w.min.y+1,w.max.z-w.min.z+1,Ie,fe,me),z.pixelStorei(3314,de),z.pixelStorei(32878,De),z.pixelStorei(3316,tn),z.pixelStorei(3315,pt),z.pixelStorei(32877,$n),te===0&&H.generateMipmaps&&z.generateMipmap(Ee),se.unbindTexture()},this.initTexture=function(w){Re.setTexture2D(w,0),se.unbindTexture()},this.resetState=function(){p=0,m=0,T=null,se.reset(),ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Lr=class extends Ze{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Lr.prototype.isScene=!0;var gl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},_l=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},p_=new _l,Oi=class{constructor(e){this.manager=e!==void 0?e:p_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},na=class extends Oi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=gl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),gl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},vl=class extends Oi{constructor(e){super(e)}load(e,t,n,r){let s=new Tr,o=new na(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}},xl=class extends Oi{constructor(e){super(e)}load(e,t,n,r){let s=new wt,o=new na(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a;let c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=c?vi:zt,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ia=class extends Ze{constructor(e,t=1){super();this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};ia.prototype.isLight=!0;var yl=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},wl="\\[\\]\\.:\\/",ra="[^"+wl+"]",m_="[^"+wl.replace("\\.","")+"]",ub=/((?:WC+[\/:])*)/.source.replace("WC",ra),hb=/(WCOD+)?/.source.replace("WCOD",m_),db=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ra),fb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ra),sa=class{constructor(e,t,n=0,r=Infinity){this.ray=new Mi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return oa(e,this,n,t),n.sort(bl),n}intersectObjects(e,t=!1,n=[]){for(let r=0,s=e.length;r<s;r++)oa(e[r],this,n,t);return n.sort(bl),n}};function bl(i,e){return i.distance-e.distance}function oa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,o=r.length;s<o;s++)oa(r[s],e,t,!0)}}var g_=new ri({side:it,depthWrite:!1,depthTest:!1}),pb=new It(new ms,g_);Oi.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),yl.extractUrlBase(i)};Oi.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Lt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Lt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Lt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Lt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Lt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};br.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};vs.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};rt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};rt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};rt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};rt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};rt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};rt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};xe.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};xe.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};xe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new O().setFromMatrixColumn(this,3)};xe.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};xe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};xe.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};xe.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};xe.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};xe.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};xe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};xe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};xe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};xe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};xe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};xe.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};xe.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};xe.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Ht.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};sn.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};sn.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Mi.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Mi.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Mi.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};et.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};et.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};et.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};et.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};et.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};et.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),et.getBarycoord(i,e,t,n,r)};et.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),et.getNormal(i,e,t,n)};Ae.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Ae.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};Ae.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};O.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};O.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};O.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};O.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};O.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};O.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};O.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};O.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};O.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ke.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Ke.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Ze.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ze.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};Ze.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ze.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ze.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});It.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(It.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Rd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Mt.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(ia.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(bt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===_o},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(_o)}}});bt.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?_o:go),this};bt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},bt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ct.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};ct.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new bt(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};ct.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};ct.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ct.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ct.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};ct.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(ct.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Lr.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Pn.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ce}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===sc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}}});Object.defineProperties(si.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Ne.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Ne.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Ne.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ne.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ne.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ne.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ne.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ne.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ne.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ne.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ne.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ne.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ne.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ne.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ne.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Ne.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ne.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ne.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ne.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ne.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ne.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ne.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ne.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ne.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ne.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ne.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Lc:vr}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(pl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(ei.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});gs.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};gs.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Kn.crossOrigin=void 0;Kn.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new xl;r.setCrossOrigin(this.crossOrigin);let s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Kn.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new vl;r.setCrossOrigin(this.crossOrigin);let s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Kn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Kn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var Ml="14.7.77",Sl=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),Tl=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),aa=(i,e)=>({startTime:e,type:"setValue",value:i}),El=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),Al=(i,e,{startTime:t,target:n,timeConstant:r})=>n+(e-n)*Math.exp((t-i)/r),ki=i=>i.type==="exponentialRampToValue",ys=i=>i.type==="linearRampToValue",Bn=i=>ki(i)||ys(i),ca=i=>i.type==="setValue",Mn=i=>i.type==="setValueCurve",ws=(i,e,t,n)=>{let r=i[e];return r===void 0?n:Bn(r)||ca(r)?r.value:Mn(r)?r.values[r.values.length-1]:Al(t,ws(i,e-1,r.startTime,n),r)},Cl=(i,e,t,n,r)=>t===void 0?[n.insertTime,r]:Bn(t)?[t.endTime,t.value]:ca(t)?[t.startTime,t.value]:Mn(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,ws(i,e-1,t.startTime,r)],la=i=>i.type==="cancelAndHold",ua=i=>i.type==="cancelScheduledValues",Un=i=>la(i)||ua(i)?i.cancelTime:ki(i)||ys(i)?i.endTime:i.startTime,Ll=(i,e,t,{endTime:n,value:r})=>t===r?r:0<t&&0<r||t<0&&r<0?t*(r/t)**((i-e)/(n-e)):0,Rl=(i,e,t,{endTime:n,value:r})=>t+(i-e)/(n-e)*(r-t),__=(i,e)=>{let t=Math.floor(e),n=Math.ceil(e);return t===n?i[t]:(1-(e-t))*i[t]+(1-(n-e))*i[n]},v_=(i,{duration:e,startTime:t,values:n})=>{let r=(i-t)/e*(n.length-1);return __(n,r)},bs=i=>i.type==="setTarget",Dl=class{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){let t=Un(e);if(la(e)||ua(e)){let n=this._automationEvents.findIndex(s=>ua(e)&&Mn(s)?s.startTime+s.duration>=t:Un(s)>=t),r=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),la(e)){let s=this._automationEvents[this._automationEvents.length-1];if(r!==void 0&&Bn(r)){if(bs(s))throw new Error("The internal list is malformed.");let o=Mn(s)?s.startTime+s.duration:Un(s),a=Mn(s)?s.values[s.values.length-1]:s.value,c=ki(r)?Ll(t,o,a,r):Rl(t,o,a,r),l=ki(r)?Sl(c,t,this._currenTime):Tl(c,t,this._currenTime);this._automationEvents.push(l)}s!==void 0&&bs(s)&&this._automationEvents.push(aa(this.getValue(t),t)),s!==void 0&&Mn(s)&&s.startTime+s.duration>t&&(this._automationEvents[this._automationEvents.length-1]=El(new Float32Array([6,7]),s.startTime,t-s.startTime))}}else{let n=this._automationEvents.findIndex(o=>Un(o)>t),r=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(r!==void 0&&Mn(r)&&Un(r)+r.duration>t)return!1;let s=ki(e)?Sl(e.value,e.endTime,this._currenTime):ys(e)?Tl(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(s);else{if(Mn(e)&&t+e.duration>Un(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,s)}}return!0}flush(e){let t=this._automationEvents.findIndex(n=>Un(n)>e);if(t>1){let n=this._automationEvents.slice(t-1),r=n[0];bs(r)&&n.unshift(aa(ws(this._automationEvents,t-2,r.startTime,this._defaultValue),r.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;let t=this._automationEvents.findIndex(o=>Un(o)>e),n=this._automationEvents[t],r=(t===-1?this._automationEvents.length:t)-1,s=this._automationEvents[r];if(s!==void 0&&bs(s)&&(n===void 0||!Bn(n)||n.insertTime>e))return Al(e,ws(this._automationEvents,r-1,s.startTime,this._defaultValue),s);if(s!==void 0&&ca(s)&&(n===void 0||!Bn(n)))return s.value;if(s!==void 0&&Mn(s)&&(n===void 0||!Bn(n)||s.startTime+s.duration>e))return e<s.startTime+s.duration?v_(e,s):s.values[s.values.length-1];if(s!==void 0&&Bn(s)&&(n===void 0||!Bn(n)))return s.value;if(n!==void 0&&ki(n)){let[o,a]=Cl(this._automationEvents,r,s,n,this._defaultValue);return Ll(e,o,a,n)}if(n!==void 0&&ys(n)){let[o,a]=Cl(this._automationEvents,r,s,n,this._defaultValue);return Rl(e,o,a,n)}return this._defaultValue}},x_=i=>({cancelTime:i,type:"cancelAndHold"}),y_=i=>({cancelTime:i,type:"cancelScheduledValues"}),w_=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),b_=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),M_=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),S_=()=>new DOMException("","AbortError"),T_=i=>(e,t,[n,r,s],o)=>{i(e[r],[t,n,s],a=>a[0]===t&&a[1]===n,o)},E_=i=>(e,t,n)=>{let r=[];for(let s=0;s<n.numberOfInputs;s+=1)r.push(new Set);i.set(e,{activeInputs:r,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},A_=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Vi=new WeakSet,Nl=new WeakMap,ha=new WeakMap,Pl=new WeakMap,da=new WeakMap,Ms=new WeakMap,Il=new WeakMap,fa=new WeakMap,pa=new WeakMap,ma=new WeakMap,Fl={construct(){return Fl}},C_=i=>{try{let e=new Proxy(i,Fl);new e}catch{return!1}return!0},Ol=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,kl=(i,e)=>{let t=[],n=i.replace(/^[\s]+/,""),r=n.match(Ol);for(;r!==null;){let s=r[1].slice(1,-1),o=r[0].replace(/([\s]+)?;?$/,"").replace(s,new URL(s,e).toString());t.push(o),n=n.slice(r[0].length).replace(/^[\s]+/,""),r=n.match(Ol)}return[t.join(";"),n]},Vl=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Bl=i=>{if(!C_(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},L_=(i,e,t,n,r,s,o,a,c,l,u,h)=>(d,f,g={credentials:"omit"})=>{let _=s(d);if(_.audioWorklet!==void 0)return Promise.all([r(f),Promise.resolve(i(u,u))]).then(([[T,S],y])=>{let[x,b]=kl(T,S),A=y?b:b.replace(/\s+extends\s+AudioWorkletProcessor\s*{/," extends (class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}){"),k=`${x};(registerProcessor=>{${A}
})((n,p)=>registerProcessor(n,class extends p{${y?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${y?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}))`,L=new Blob([k],{type:"application/javascript; charset=utf-8"}),C=URL.createObjectURL(L);return _.audioWorklet.addModule(C,g).then(()=>a(_)?void 0:o(_).audioWorklet.addModule(C,g)).finally(()=>URL.revokeObjectURL(C))});let v=l.get(d);if(v!==void 0&&v.has(f))return Promise.resolve();let p=c.get(d);if(p!==void 0){let T=p.get(f);if(T!==void 0)return T}let m=r(f).then(([T,S])=>{let[y,x]=kl(T,S),b=`${y};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${x}
})})(window,'_AWGS')`;return t(b)}).then(()=>{let T=h._AWGS.pop();if(T===void 0)throw new SyntaxError;n(_.currentTime,_.sampleRate,()=>T(class{},void 0,(S,y)=>{if(S.trim()==="")throw e();let x=pa.get(_);if(x!==void 0){if(x.has(S))throw e();Bl(y),Vl(y.parameterDescriptors),x.set(S,y)}else Bl(y),Vl(y.parameterDescriptors),pa.set(_,new Map([[S,y]]))},_.sampleRate,void 0,void 0))});return p===void 0?c.set(d,new Map([[f,m]])):p.set(f,m),m.then(()=>{let T=l.get(d);T===void 0?l.set(d,new Set([f])):T.add(f)}).finally(()=>{let T=c.get(d);T!==void 0&&T.delete(f)}),m},Xt=(i,e)=>{let t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Ss=(i,e)=>{let t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");let[n]=t;return i.delete(n),n},Ul=(i,e,t,n)=>{let r=Xt(i,e),s=Ss(r,o=>o[0]===t&&o[1]===n);return r.size===0&&i.delete(e),s},Rr=i=>Xt(Il,i),Bi=i=>{if(Vi.has(i))throw new Error("The AudioNode is already stored.");Vi.add(i),Rr(i).forEach(e=>e(!0))},zl=i=>"port"in i,Dr=i=>{if(!Vi.has(i))throw new Error("The AudioNode is not stored.");Vi.delete(i),Rr(i).forEach(e=>e(!1))},ga=(i,e)=>{!zl(i)&&e.every(t=>t.size===0)&&Dr(i)},R_=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>{let f=new WeakMap;return(g,_,v,p,m)=>{let{activeInputs:T,passiveInputs:S}=s(_),{outputs:y}=s(g),x=a(g),b=A=>{let E=c(_),F=c(g);if(A){let k=Ul(S,g,v,p);i(T,g,k,!1),!m&&!h(g)&&t(F,E,v,p),d(_)&&Bi(_)}else{let k=n(T,g,v,p);e(S,p,k,!1),!m&&!h(g)&&r(F,E,v,p);let L=o(_);if(L===0)u(_)&&ga(_,T);else{let C=f.get(_);C!==void 0&&clearTimeout(C),f.set(_,setTimeout(()=>{u(_)&&ga(_,T)},L*1e3))}}};return l(y,[_,v,p],A=>A[0]===_&&A[1]===v&&A[2]===p,!0)?(x.add(b),u(g)?i(T,g,[v,p,b],!0):e(S,p,[g,v,b],!0),!0):!1}},D_=i=>(e,t,[n,r,s],o)=>{let a=e.get(n);a===void 0?e.set(n,new Set([[r,t,s]])):i(a,[r,t,s],c=>c[0]===r&&c[1]===t,o)},N_=i=>(e,t)=>{let n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);let r=()=>{t.removeEventListener("ended",r),t.disconnect(n),n.disconnect()};t.addEventListener("ended",r)},P_=i=>(e,t)=>{i(e).add(t)},I_={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},F_=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=r(a),u={...I_,...c},h=n(l,u),d=s(l)?e():null;super(a,!1,h,d);this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){let c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){let c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},ft=(i,e)=>i.context===e,O_=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!ft(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,fftSize:c.fftSize,maxDecibels:c.maxDecibels,minDecibels:c.minDecibels,smoothingTimeConstant:c.smoothingTimeConstant};c=i(o,u)}return n.set(o,c),await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Ts=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},cn=()=>new DOMException("","IndexSizeError"),_a=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?cn():n}})(i.getChannelData)},k_={numberOfChannels:1},V_=(i,e,t,n,r,s,o,a)=>{let c=null;return class Gl{constructor(u){if(r===null)throw new Error("Missing the native OfflineAudioContext constructor.");let{length:h,numberOfChannels:d,sampleRate:f}={...k_,...u};c===null&&(c=new r(1,1,44100));let g=n!==null&&e(s,s)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(g.numberOfChannels===0)throw t();return typeof g.copyFromChannel!="function"?(o(g),_a(g)):e(Ts,()=>Ts(g))||a(g),i.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===Gl.prototype||i.has(u)}}},St=-34028234663852886e22,gt=-St,Sn=i=>Vi.has(i),B_={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},U_=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d={...B_,...u},f=r(h,d),g=o(h),_=g?e():null;super(l,!1,f,_);this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,g,f.playbackRate,gt,St)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){let u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;let h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Bi(this);let d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Sn(this)&&Dr(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},z_=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=null,a=null,c=async(l,u,h)=>{let d=t(l),f=ft(d,u);if(!f){let g={buffer:d.buffer,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,loop:d.loop,loopEnd:d.loopEnd,loopStart:d.loopStart,playbackRate:d.playbackRate.value};d=e(u,g),o!==null&&d.start(...o),a!==null&&d.stop(a)}return s.set(u,d),f?await i(u,l.playbackRate,d.playbackRate,h):await n(u,l.playbackRate,d.playbackRate,h),await r(l,u,d,h),d};return{set start(l){o=l},set stop(l){a=l},render(l,u,h){let d=s.get(u);return d!==void 0?Promise.resolve(d):c(l,u,h)}}},G_=i=>"playbackRate"in i,H_=i=>"frequency"in i&&"gain"in i,W_=i=>"offset"in i,q_=i=>!("frequency"in i)&&"gain"in i,X_=i=>"detune"in i&&"frequency"in i,j_=i=>"pan"in i,_t=i=>Xt(Nl,i),Nr=i=>Xt(Pl,i),va=(i,e)=>{let{activeInputs:t}=_t(i);t.forEach(r=>r.forEach(([s])=>{e.includes(i)||va(s,[...e,i])}));let n=G_(i)?[i.playbackRate]:zl(i)?Array.from(i.parameters.values()):H_(i)?[i.Q,i.detune,i.frequency,i.gain]:W_(i)?[i.offset]:q_(i)?[i.gain]:X_(i)?[i.detune,i.frequency]:j_(i)?[i.pan]:[];for(let r of n){let s=Nr(r);s!==void 0&&s.activeInputs.forEach(([o])=>va(o,e))}Sn(i)&&Dr(i)},Hl=i=>{va(i.destination,[])},Y_=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),Z_=(i,e,t,n,r,s,o,a,c)=>class extends i{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h=new c(u);if(h===null)throw n();if(!Y_(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);let{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";let g=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",g)};h.addEventListener("statechange",g)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Hl(this)}))}createMediaElementSource(u){return new r(this,{mediaElement:u})}createMediaStreamDestination(){return new s(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{let d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},$_=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d=o(h),f=r(h,u,d),g=d?e(a):null;super(l,!1,f,g);this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},Q_=i=>{let e=null,t=async(n,r,s)=>{let o=r.destination;return await i(n,r,o,s),o};return{render(n,r,s){return e===null&&(e=t(n,r,s)),e}}},J_=(i,e,t,n,r)=>(s,o)=>{let a=o.listener,c=()=>{let m=e(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),T=r(o),S=n(o,256,9,0),y=(A,E)=>{let F=t(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:E});return F.connect(m,0,A),F.start(),Object.defineProperty(F.offset,"defaultValue",{get(){return E}}),i({context:s},T,F.offset,gt,St)},x=[0,0,-1,0,1,0],b=[0,0,0];return S.onaudioprocess=({inputBuffer:A})=>{let E=[A.getChannelData(0)[0],A.getChannelData(1)[0],A.getChannelData(2)[0],A.getChannelData(3)[0],A.getChannelData(4)[0],A.getChannelData(5)[0]];E.some((k,L)=>k!==x[L])&&(a.setOrientation(...E),x=E);let F=[A.getChannelData(6)[0],A.getChannelData(7)[0],A.getChannelData(8)[0]];F.some((k,L)=>k!==b[L])&&(a.setPosition(...F),b=F)},m.connect(S),{forwardX:y(0,0),forwardY:y(1,0),forwardZ:y(2,-1),positionX:y(6,0),positionY:y(7,0),positionZ:y(8,0),upX:y(3,0),upY:y(4,1),upZ:y(5,0)}},{forwardX:l,forwardY:u,forwardZ:h,positionX:d,positionY:f,positionZ:g,upX:_,upY:v,upZ:p}=a.forwardX===void 0?c():a;return{get forwardX(){return l},get forwardY(){return u},get forwardZ(){return h},get positionX(){return d},get positionY(){return f},get positionZ(){return g},get upX(){return _},get upY(){return v},get upZ(){return p}}},Es=i=>"context"in i,Pr=i=>Es(i[0]),oi=(i,e,t,n)=>{for(let r of i)if(t(r)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},Wl=(i,e,[t,n],r)=>{oi(i,[e,t,n],s=>s[0]===e&&s[1]===t,r)},ql=(i,[e,t,n],r)=>{let s=i.get(e);s===void 0?i.set(e,new Set([[t,n]])):oi(s,[t,n],o=>o[0]===t,r)},Ui=i=>"inputs"in i,As=(i,e,t,n)=>{if(Ui(e)){let r=e.inputs[n];return i.connect(r,t,0),[r,t,0]}return i.connect(e,t,n),[e,t,n]},Xl=(i,e,t)=>{for(let n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},K_=(i,e,t)=>Ss(i,n=>n[0]===e&&n[1]===t),jl=(i,e)=>{if(!Rr(i).delete(e))throw new Error("Missing the expected event listener.")},Yl=(i,e,t)=>{let n=Xt(i,e),r=Ss(n,s=>s[0]===t);return n.size===0&&i.delete(e),r},Cs=(i,e,t,n)=>{Ui(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},Ue=i=>Xt(ha,i),Ir=i=>Xt(da,i),ai=i=>fa.has(i),Ls=i=>!Vi.has(i),Zl=i=>new Promise(e=>{let t=i.createScriptProcessor(256,1,1),n=i.createGain(),r=i.createBuffer(1,2,44100),s=r.getChannelData(0);s[0]=1,s[1]=1;let o=i.createBufferSource();o.buffer=r,o.loop=!0,o.connect(t).connect(i.destination),o.connect(n),o.disconnect(n),t.onaudioprocess=a=>{let c=a.inputBuffer.getChannelData(0);Array.prototype.some.call(c,l=>l===1)?e(!0):e(!1),o.stop(),t.onaudioprocess=null,o.disconnect(t),t.disconnect(i.destination)},o.start()}),xa=(i,e)=>{let t=new Map;for(let n of i)for(let r of n){let s=t.get(r);t.set(r,s===void 0?1:s+1)}t.forEach((n,r)=>e(r,n))},Rs=i=>"context"in i,ev=i=>{let e=new Map;i.connect=(t=>(n,r=0,s=0)=>{let o=Rs(n)?t(n,r,s):t(n,r),a=e.get(n);return a===void 0?e.set(n,[{input:s,output:r}]):a.every(c=>c.input!==s||c.output!==r)&&a.push({input:s,output:r}),o})(i.connect.bind(i)),i.disconnect=(t=>(n,r,s)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(let[o,a]of e){let c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(r===void 0)e.delete(n);else{let o=e.get(n);if(o!==void 0){let a=o.filter(c=>c.output!==r&&(c.input!==s||s===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(let[o,a]of e)a.forEach(c=>{Rs(o)?i.connect(o,c.output,c.input):i.connect(o,c.output)})})(i.disconnect)},tv=(i,e,t,n)=>{let{activeInputs:r,passiveInputs:s}=Nr(e),{outputs:o}=_t(i),a=Rr(i),c=l=>{let u=Ue(i),h=Ir(e);if(l){let d=Yl(s,i,t);Wl(r,i,d,!1),!n&&!ai(i)&&u.connect(h,t)}else{let d=K_(r,i,t);ql(s,d,!1),!n&&!ai(i)&&u.disconnect(h,t)}};return oi(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),Sn(i)?Wl(r,i,[t,c],!0):ql(s,[i,t,c],!0),!0):!1},nv=(i,e,t,n)=>{let{activeInputs:r,passiveInputs:s}=_t(e),o=Xl(r[n],i,t);return o===null?[Ul(s,i,t,n)[2],!1]:[o[2],!0]},iv=(i,e,t)=>{let{activeInputs:n,passiveInputs:r}=Nr(e),s=Xl(n,i,t);return s===null?[Yl(r,i,t)[1],!1]:[s[2],!0]},ya=(i,e,t,n,r)=>{let[s,o]=nv(i,t,n,r);if(s!==null&&(jl(i,s),o&&!e&&!ai(i)&&Cs(Ue(i),Ue(t),n,r)),Sn(t)){let{activeInputs:a}=_t(t);ga(t,a)}},wa=(i,e,t,n)=>{let[r,s]=iv(i,t,n);r!==null&&(jl(i,r),s&&!e&&!ai(i)&&Ue(i).disconnect(Ir(t),n))},rv=(i,e)=>{let t=_t(i),n=[];for(let r of t.outputs)Pr(r)?ya(i,e,...r):wa(i,e,...r),n.push(r[0]);return t.outputs.clear(),n},sv=(i,e,t)=>{let n=_t(i),r=[];for(let s of n.outputs)s[1]===t&&(Pr(s)?ya(i,e,...s):wa(i,e,...s),r.push(s[0]),n.outputs.delete(s));return r},ov=(i,e,t,n,r)=>{let s=_t(i);return Array.from(s.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(r===void 0||o[2]===r)).map(o=>(Pr(o)?ya(i,e,...o):wa(i,e,...o),s.outputs.delete(o),o[0]))},av=(i,e,t,n,r,s,o,a,c,l,u,h,d,f,g)=>class extends l{constructor(v,p,m,T){super(m);this._context=v,this._nativeAudioNode=m;let S=u(v);h(S)&&t(Zl,()=>Zl(S))!==!0&&ev(m),ha.set(this,m),Il.set(this,new Set),v.state!=="closed"&&p&&Bi(this),i(this,T,m)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(v){this._nativeAudioNode.channelCount=v}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(v){this._nativeAudioNode.channelCountMode=v}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(v){this._nativeAudioNode.channelInterpretation=v}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(v,p=0,m=0){if(p<0||p>=this._nativeAudioNode.numberOfOutputs)throw r();let T=u(this._context),S=g(T);if(d(v)||f(v))throw s();if(Es(v)){let b=Ue(v);try{let E=As(this._nativeAudioNode,b,p,m),F=Ls(this);(S||F)&&this._nativeAudioNode.disconnect(...E),this.context.state!=="closed"&&!F&&Ls(v)&&Bi(v)}catch(E){throw E.code===12?s():E}if(e(this,v,p,m,S)){let E=c([this],v);xa(E,n(S))}return v}let y=Ir(v);if(y.name==="playbackRate"&&y.maxValue===1024)throw o();try{this._nativeAudioNode.connect(y,p),(S||Ls(this))&&this._nativeAudioNode.disconnect(y,p)}catch(b){throw b.code===12?s():b}if(tv(this,v,p,S)){let b=c([this],v);xa(b,n(S))}}disconnect(v,p,m){let T,S=u(this._context),y=g(S);if(v===void 0)T=rv(this,y);else if(typeof v=="number"){if(v<0||v>=this.numberOfOutputs)throw r();T=sv(this,y,v)}else{if(p!==void 0&&(p<0||p>=this.numberOfOutputs)||Es(v)&&m!==void 0&&(m<0||m>=v.numberOfInputs))throw r();if(T=ov(this,y,v,p,m),T.length===0)throw s()}for(let x of T){let b=c([this],x);xa(b,a)}}},cv=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>(f,g,_,v=null,p=null)=>{let m=new Dl(_.defaultValue),T=g?n(m):null,S={get defaultValue(){return _.defaultValue},get maxValue(){return v===null?_.maxValue:v},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(y){_.value=y,S.setValueAtTime(y,f.context.currentTime)},cancelAndHoldAtTime(y){if(typeof _.cancelAndHoldAtTime=="function")T===null&&m.flush(f.context.currentTime),m.add(r(y)),_.cancelAndHoldAtTime(y);else{let x=Array.from(m).pop();T===null&&m.flush(f.context.currentTime),m.add(r(y));let b=Array.from(m).pop();_.cancelScheduledValues(y),x!==b&&b!==void 0&&(b.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(b.value,b.endTime):b.type==="linearRampToValue"?_.linearRampToValueAtTime(b.value,b.endTime):b.type==="setValue"?_.setValueAtTime(b.value,b.startTime):b.type==="setValueCurve"&&_.setValueCurveAtTime(b.values,b.startTime,b.duration))}return S},cancelScheduledValues(y){return T===null&&m.flush(f.context.currentTime),m.add(s(y)),_.cancelScheduledValues(y),S},exponentialRampToValueAtTime(y,x){if(y===0)throw new RangeError;if(!Number.isFinite(x)||x<0)throw new RangeError;return T===null&&m.flush(f.context.currentTime),m.add(o(y,x)),_.exponentialRampToValueAtTime(y,x),S},linearRampToValueAtTime(y,x){return T===null&&m.flush(f.context.currentTime),m.add(a(y,x)),_.linearRampToValueAtTime(y,x),S},setTargetAtTime(y,x,b){return T===null&&m.flush(f.context.currentTime),m.add(c(y,x,b)),_.setTargetAtTime(y,x,b),S},setValueAtTime(y,x){return T===null&&m.flush(f.context.currentTime),m.add(l(y,x)),_.setValueAtTime(y,x),S},setValueCurveAtTime(y,x,b){let A=y instanceof Float32Array?y:new Float32Array(y);if(h!==null&&h.name==="webkitAudioContext"){let E=x+b,F=f.context.sampleRate,k=Math.ceil(x*F),L=Math.floor(E*F),C=L-k,N=new Float32Array(C);for(let D=0;D<C;D+=1){let B=(A.length-1)/b*((k+D)/F-x),q=Math.floor(B),X=Math.ceil(B);N[D]=q===X?A[q]:(1-(B-q))*A[q]+(1-(X-B))*A[X]}T===null&&m.flush(f.context.currentTime),m.add(u(N,x,b)),_.setValueCurveAtTime(N,x,b);let P=L/F;P<E&&d(S,N[N.length-1],P),d(S,A[A.length-1],E)}else T===null&&m.flush(f.context.currentTime),m.add(u(A,x,b)),_.setValueCurveAtTime(A,x,b);return S}};return t.set(S,_),e.set(S,f),i(S,T),S},lv=i=>({replay(e){for(let t of i)if(t.type==="exponentialRampToValue"){let{endTime:n,value:r}=t;e.exponentialRampToValueAtTime(r,n)}else if(t.type==="linearRampToValue"){let{endTime:n,value:r}=t;e.linearRampToValueAtTime(r,n)}else if(t.type==="setTarget"){let{startTime:n,target:r,timeConstant:s}=t;e.setTargetAtTime(r,n,s)}else if(t.type==="setValue"){let{startTime:n,value:r}=t;e.setValueAtTime(r,n)}else if(t.type==="setValueCurve"){let{duration:n,startTime:r,values:s}=t;e.setValueCurveAtTime(s,r,n)}else throw new Error("Can't apply an unknown automation.")}}),ba=class{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,r)=>e.call(t,n,r,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}},uv={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},hv=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>class extends e{constructor(g,_,v){var p;let m=a(g),T=c(m),S=u({...uv,...v}),y=pa.get(m),x=y==null?void 0:y.get(_),b=T||m.state!=="closed"?m:(p=o(m))!==null&&p!==void 0?p:m,A=r(b,T?null:g.baseLatency,l,_,x,S),E=T?n(_,S,x):null;super(g,!0,A,E);let F=[];A.parameters.forEach((L,C)=>{let N=t(this,T,L);F.push([C,N])}),this._nativeAudioWorkletNode=A,this._onprocessorerror=null,this._parameters=new ba(F),T&&i(m,this);let{activeInputs:k}=s(this);h(A,k)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(g){let _=typeof g=="function"?d(this,g):null;this._nativeAudioWorkletNode.onprocessorerror=_;let v=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=v!==null&&v===_?g:v}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Ds(i,e,t,n,r){if(typeof i.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),i.copyFromChannel(e[t],n,r);else{let s=i.getChannelData(n);if(e[t].byteLength===0)e[t]=s.slice(r,r+128);else{let o=new Float32Array(s.buffer,r*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}var $l=(i,e,t,n,r)=>{typeof i.copyToChannel=="function"?e[t].byteLength!==0&&i.copyToChannel(e[t],n,r):e[t].byteLength!==0&&i.getChannelData(n).set(e[t],r)},Ns=(i,e)=>{let t=[];for(let n=0;n<i;n+=1){let r=[],s=typeof e=="number"?e:e[n];for(let o=0;o<s;o+=1)r.push(new Float32Array(128));t.push(r)}return t},dv=(i,e)=>{let t=Xt(ma,i),n=Ue(e);return Xt(t,n)},fv=async(i,e,t,n,r,s,o)=>{let a=e===null?Math.ceil(i.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=r.reduce((v,p)=>v+p,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(s===void 0)throw new Error("Missing the processor constructor.");let h=_t(i),d=await dv(t,i),f=Ns(n.numberOfInputs,n.channelCount),g=Ns(n.numberOfOutputs,r),_=Array.from(i.parameters.keys()).reduce((v,p)=>({...v,[p]:new Float32Array(128)}),{});for(let v=0;v<a;v+=128){if(n.numberOfInputs>0&&e!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let m=0;m<n.channelCount;m+=1)Ds(e,f[p],m,m,v);s.parameterDescriptors!==void 0&&e!==null&&s.parameterDescriptors.forEach(({name:p},m)=>{Ds(e,_,p,c+m,v)});for(let p=0;p<n.numberOfInputs;p+=1)for(let m=0;m<r[p];m+=1)g[p][m].byteLength===0&&(g[p][m]=new Float32Array(128));try{let p=f.map((T,S)=>h.activeInputs[S].size===0?[]:T),m=o(v/t.sampleRate,t.sampleRate,()=>d.process(p,g,_));if(u!==null)for(let T=0,S=0;T<n.numberOfOutputs;T+=1){for(let y=0;y<r[T];y+=1)$l(u,g[T],y,S+y,v);S+=r[T]}if(!m)break}catch(p){i.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return u},pv=(i,e,t,n,r,s,o,a,c,l,u,h,d,f,g,_)=>(v,p,m)=>{let T=new WeakMap,S=null,y=async(x,b,A)=>{let E=u(x),F=null,k=ft(E,b),L=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(h===null){let C=L.reduce((B,q)=>B+q,0),N=r(b,{channelCount:Math.max(1,C),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,C)}),P=[];for(let B=0;B<x.numberOfOutputs;B+=1)P.push(n(b,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:L[B]}));let D=o(b,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});D.connect=e.bind(null,P),D.disconnect=c.bind(null,P),F=[N,P,D]}else k||(E=new h(b,v));if(T.set(b,F===null?E:F[2]),F!==null){if(S===null){if(m===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");let q=x.channelCount*x.numberOfInputs,X=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length,Z=q+X;S=fv(x,Z===0?null:await(async()=>{let ae=new d(Z,Math.ceil(x.context.length/128)*128,b.sampleRate),J=[],z=[];for(let le=0;le<p.numberOfInputs;le+=1)J.push(o(ae,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),z.push(r(ae,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));let Te=await Promise.all(Array.from(x.parameters.values()).map(async le=>{let se=s(ae,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:le.value});return await f(ae,le,se.offset,A),se})),Y=n(ae,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,q+X)});for(let le=0;le<p.numberOfInputs;le+=1){J[le].connect(z[le]);for(let se=0;se<p.channelCount;se+=1)z[le].connect(Y,se,le*p.channelCount+se)}for(let[le,se]of Te.entries())se.connect(Y,0,q+le),se.start(0);return Y.connect(ae.destination),await Promise.all(J.map(le=>g(x,ae,le,A))),_(ae)})(),b,p,L,m,l)}let C=await S,N=t(b,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[P,D,B]=F;C!==null&&(N.buffer=C,N.start(0)),N.connect(P);for(let q=0,X=0;q<x.numberOfOutputs;q+=1){let Z=D[q];for(let K=0;K<L[q];K+=1)P.connect(Z,X+K,K);X+=L[q]}return B}if(k)for(let[C,N]of x.parameters.entries())await i(b,N,E.parameters.get(C),A);else for(let[C,N]of x.parameters.entries())await f(b,N,E.parameters.get(C),A);return await g(x,b,E,A),E};return{render(x,b,A){a(b,x);let E=T.get(b);return E!==void 0?Promise.resolve(E):y(x,b,A)}}},mv=(i,e,t,n,r,s,o,a,c,l,u,h,d,f,g,_,v,p,m,T)=>class extends g{constructor(y,x){super(y,x);this._nativeContext=y,this._audioWorklet=i===void 0?void 0:{addModule:(b,A)=>i(this,b,A)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new r(this)}createBuffer(y,x,b){return new t({length:x,numberOfChannels:y,sampleRate:b})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new s(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new u(this,{maxDelayTime:y})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(y,x){return new f(this,{feedback:x,feedforward:y})}createOscillator(){return new _(this)}createPanner(){return new v(this)}createPeriodicWave(y,x,b={disableNormalization:!1}){return new p(this,{...b,imag:x,real:y})}createStereoPanner(){return new m(this)}createWaveShaper(){return new T(this)}decodeAudioData(y,x,b){return l(this._nativeContext,y).then(A=>(typeof x=="function"&&x(A),A)).catch(A=>{throw typeof b=="function"&&b(A),A})}},gv={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},_v=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d={...gv,...u},f=r(h,d),g=o(h),_=g?t():null;super(l,!1,f,_);this._Q=e(this,g,f.Q,gt,St),this._detune=e(this,g,f.detune,1200*Math.log2(gt),-1200*Math.log2(gt)),this._frequency=e(this,g,f.frequency,l.sampleRate/2,0),this._gain=e(this,g,f.gain,40*Math.log10(gt),St),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},vv=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=ft(u,c);if(!h){let d={Q:u.Q.value,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,detune:u.detune.value,frequency:u.frequency.value,gain:u.gain.value,type:u.type};u=e(c,d)}return s.set(c,u),h?(await i(c,a.Q,u.Q,l),await i(c,a.detune,u.detune,l),await i(c,a.frequency,u.frequency,l),await i(c,a.gain,u.gain,l)):(await n(c,a.Q,u.Q,l),await n(c,a.detune,u.detune,l),await n(c,a.frequency,u.frequency,l),await n(c,a.gain,u.gain,l)),await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},xv=(i,e)=>(t,n)=>{let r=e.get(t);if(r!==void 0)return r;let s=i.get(t);if(s!==void 0)return s;try{let o=n();return o instanceof Promise?(i.set(t,o),o.catch(()=>!1).then(a=>(i.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},yv={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},wv=(i,e,t,n,r)=>class extends i{constructor(o,a){let c=n(o),l={...yv,...a},u=t(c,l),h=r(c)?e():null;super(o,!1,u,h)}},bv=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!ft(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfInputs:c.numberOfInputs};c=i(o,u)}return n.set(o,c),await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Mv={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Sv=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=n(a),u=s({...Mv,...c}),h=t(l,u),d=r(l)?e():null;super(a,!1,h,d)}},Tv=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!ft(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfOutputs:c.numberOfOutputs};c=i(o,u)}return n.set(o,c),await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Ev=i=>(e,t,n,r)=>i(t,e,n,r),Av=i=>(e,t,n=0,r=0)=>{let s=e[n];if(s===void 0)throw i();return Rs(t)?s.connect(t,0,r):s.connect(t,0)},Cv=i=>(e,t)=>{let n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),r=e.createBuffer(1,2,44100);return n.buffer=r,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Lv={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Rv=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...Lv,...l},d=n(u,h),f=s(u),g=f?t():null;super(c,!1,d,g);this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,gt,St),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){let l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;let u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Bi(this);let l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Sn(this)&&Dr(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},Dv=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=null,a=null,c=async(l,u,h)=>{let d=t(l),f=ft(d,u);if(!f){let g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,offset:d.offset.value};d=e(u,g),o!==null&&d.start(o),a!==null&&d.stop(a)}return s.set(u,d),f?await i(u,l.offset,d.offset,h):await n(u,l.offset,d.offset,h),await r(l,u,d,h),d};return{set start(l){o=l},set stop(l){a=l},render(l,u,h){let d=s.get(u);return d!==void 0?Promise.resolve(d):c(l,u,h)}}},Nv=i=>e=>(i[0]=e,i[0]),Pv={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Iv=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=n(a),u={...Pv,...c},h=t(l,u),f=r(l)?e():null;super(a,!1,h,f);this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&s(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){let c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,44100),this._isBufferNullified=!0,s(this,0)}else this._isBufferNullified=!1,s(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},Fv=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!ft(c,o)){let u={buffer:c.buffer,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,disableNormalization:!c.normalize};c=i(o,u)}return n.set(o,c),Ui(c)?await t(s,o,c.inputs[0],a):await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},Ov=(i,e)=>(t,n,r)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,r)}catch(s){throw s.name==="SyntaxError"?i():s}},kv=()=>new DOMException("","DataCloneError"),Vv=i=>{let{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{t.onmessage=()=>{e.close(),t.close(),n()},e.postMessage(i,[i])})},Bv=(i,e,t,n,r,s,o,a,c,l,u)=>(h,d)=>{let f=o(h)?h:s(h);if(r.has(d)){let g=t();return Promise.reject(g)}try{r.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(g=>(e(a,()=>a(g))||u(g),i.add(g),g)):new Promise((g,_)=>{let v=async()=>{try{await Vv(d)}catch{}},p=m=>{_(m),v()};try{f.decodeAudioData(d,m=>{typeof m.copyFromChannel!="function"&&(l(m),_a(m)),i.add(m),v().then(()=>g(m))},m=>{p(m===null?n():m)})}catch(m){p(m)}})},Uv=(i,e,t,n,r,s,o,a)=>(c,l)=>{let u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");let h=s(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){let f=n(c),{outputs:g}=t(c);for(let _ of g)if(Pr(_)){let v=n(_[0]);i(f,v,_[1],_[2])}else{let v=r(_[0]);f.connect(v,_[1])}}}else e.set(c,u-l)},zv={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},Gv=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...zv,...l},d=n(u,h),f=s(u),g=f?t(h.maxDelayTime):null;super(c,!1,d,g);this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},Hv=(i,e,t,n,r)=>s=>{let o=new WeakMap,a=async(c,l,u)=>{let h=t(c),d=ft(h,l);if(!d){let f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:s};h=e(l,f)}return o.set(l,h),d?await i(l,c.delayTime,h.delayTime,u):await n(l,c.delayTime,h.delayTime,u),await r(c,l,h,u),h};return{render(c,l,u){let h=o.get(l);return h!==void 0?Promise.resolve(h):a(c,l,u)}}},Wv=i=>(e,t,n,r)=>i(e[r],s=>s[0]===t&&s[1]===n),qv=i=>(e,t)=>{i(e).delete(t)},Xv=i=>"delayTime"in i,jv=(i,e,t)=>function n(r,s){let o=Es(s)?s:t(i,s);if(Xv(o))return[];if(r[0]===o)return[r];if(r.includes(o))return[];let{outputs:a}=e(o);return Array.from(a).map(c=>n([...r,o],c[0])).reduce((c,l)=>c.concat(l),[])},Ps=(i,e,t)=>{let n=e[t];if(n===void 0)throw i();return n},Yv=i=>(e,t=void 0,n=void 0,r=0)=>t===void 0?e.forEach(s=>s.disconnect()):typeof t=="number"?Ps(i,e,t).disconnect():Rs(t)?n===void 0?e.forEach(s=>s.disconnect(t)):r===void 0?Ps(i,e,n).disconnect(t,0):Ps(i,e,n).disconnect(t,0,r):n===void 0?e.forEach(s=>s.disconnect(t)):Ps(i,e,n).disconnect(t,0),Zv={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},$v=(i,e,t,n,r,s,o,a)=>class extends i{constructor(l,u){let h=s(l),d={...Zv,...u},f=n(h,d),g=o(h),_=g?t():null;super(l,!1,f,_);this._attack=e(this,g,f.attack),this._knee=e(this,g,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,g,f.ratio),this._release=e(this,g,f.release),this._threshold=e(this,g,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){let u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,r()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){let u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,r()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Qv=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=ft(u,c);if(!h){let d={attack:u.attack.value,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,knee:u.knee.value,ratio:u.ratio.value,release:u.release.value,threshold:u.threshold.value};u=e(c,d)}return s.set(c,u),h?(await i(c,a.attack,u.attack,l),await i(c,a.knee,u.knee,l),await i(c,a.ratio,u.ratio,l),await i(c,a.release,u.release,l),await i(c,a.threshold,u.threshold,l)):(await n(c,a.attack,u.attack,l),await n(c,a.knee,u.knee,l),await n(c,a.ratio,u.ratio,l),await n(c,a.release,u.release,l),await n(c,a.threshold,u.threshold,l)),await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},Jv=()=>new DOMException("","EncodingError"),Kv=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}let r=i.document.head;if(r===null)n(new SyntaxError);else{let s=i.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(a)};i.onerror=(u,h,d,f,g)=>{if(h===a||h===i.location.href&&d===1&&f===1)return l(),n(g),!1;if(c!==null)return c(u,h,d,f,g)},s.onerror=()=>{l(),n(new SyntaxError)},s.onload=()=>{l(),t()},s.src=a,s.type="module",r.appendChild(s)}}),ex=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,r){if(n!==null){let s=this._listeners.get(n);s===void 0&&(s=i(this,n),typeof n=="function"&&this._listeners.set(n,s)),this._nativeEventTarget.addEventListener(t,s,r)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,r){let s=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,s===void 0?null:s,r)}},tx=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},nx=i=>async e=>{try{let t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},ix={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},rx=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=r(a),u={...ix,...c},h=n(l,u),d=s(l),f=d?t():null;super(a,!1,h,f);this._gain=e(this,d,h.gain,gt,St)}get gain(){return this._gain}},sx=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=ft(u,c);if(!h){let d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,gain:u.gain.value};u=e(c,d)}return s.set(c,u),h?await i(c,a.gain,u.gain,l):await n(c,a.gain,u.gain,l),await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},ox=(i,e)=>t=>e(i,t),ax=i=>e=>{let t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},cx=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},lx=i=>e=>{let t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},ux=i=>e=>i.get(e),ot=()=>new DOMException("","InvalidStateError"),hx=i=>e=>{let t=i.get(e);if(t===void 0)throw ot();return t},dx=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,8e3),i.set(t,n),n},fx=i=>e=>{let t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Is=()=>new DOMException("","InvalidAccessError"),px=i=>{i.getFrequencyResponse=(e=>(t,n,r)=>{if(t.length!==n.length||n.length!==r.length)throw Is();return e.call(i,t,n,r)})(i.getFrequencyResponse)},mx={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},gx=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=n(a),u=r(l),h={...mx,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f);px(d),this._nativeIIRFilterNode=d,s(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},Ql=(i,e,t,n,r,s,o,a,c,l,u)=>{let h=l.length,d=a;for(let f=0;f<h;f+=1){let g=t[0]*l[f];for(let _=1;_<r;_+=1){let v=d-_&c-1;g+=t[_]*s[v],g-=i[_]*o[v]}for(let _=r;_<n;_+=1)g+=t[_]*s[d-_&c-1];for(let _=r;_<e;_+=1)g-=i[_]*o[d-_&c-1];s[d]=l[f],o[d]=g,d=d+1&c-1,u[f]=g}return d},_x=(i,e,t,n)=>{let r=t instanceof Float64Array?t:new Float64Array(t),s=n instanceof Float64Array?n:new Float64Array(n),o=r.length,a=s.length,c=Math.min(o,a);if(r[0]!==1){for(let g=0;g<o;g+=1)s[g]/=r[0];for(let g=1;g<a;g+=1)r[g]/=r[0]}let l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),f=i.numberOfChannels;for(let g=0;g<f;g+=1){let _=i.getChannelData(g),v=d.getChannelData(g);u.fill(0),h.fill(0),Ql(r,o,s,a,c,u,h,0,l,_,v)}return d},vx=(i,e,t,n,r)=>(s,o)=>{let a=new WeakMap,c=null,l=async(u,h,d)=>{let f=null,g=e(u),_=ft(g,h);if(h.createIIRFilter===void 0?f=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):_||(g=h.createIIRFilter(o,s)),a.set(h,f===null?g:f),f!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");let p=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,p,p.destination,d);let m=await r(p);return _x(m,h,s,o)})()}let v=await c;return f.buffer=v,f.start(0),f}return await n(u,h,g,d),g};return{render(u,h,d){let f=a.get(h);return f!==void 0?Promise.resolve(f):l(u,h,d)}}},xx=(i,e,t,n,r,s)=>o=>(a,c)=>{let l=i.get(a);if(l===void 0){if(!o&&s(a)){let u=n(a),{outputs:h}=t(a);for(let d of h)if(Pr(d)){let f=n(d[0]);e(u,f,d[1],d[2])}else{let f=r(d[0]);u.disconnect(f,d[1])}}i.set(a,c)}else i.set(a,l+c)},yx=(i,e)=>t=>{let n=i.get(t);return e(n)||e(t)},wx=(i,e)=>t=>i.has(t)||e(t),bx=(i,e)=>t=>i.has(t)||e(t),Mx=(i,e)=>t=>{let n=i.get(t);return e(n)||e(t)},Sx=i=>e=>i!==null&&e instanceof i,Tx=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,Ex=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,Ax=(i,e)=>t=>i(t)||e(t),Cx=i=>e=>i!==null&&e instanceof i,Lx=i=>i!==null&&i.isSecureContext,Rx=(i,e,t,n)=>class extends i{constructor(s,o){let a=t(s),c=e(a,o);if(n(a))throw TypeError();super(s,!0,c,null);this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Dx={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Nx=(i,e,t,n)=>class extends i{constructor(s,o){let a=t(s);if(n(a))throw new TypeError;let c={...Dx,...o},l=e(a,c);super(s,!1,l,null);this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Px=(i,e,t,n)=>class extends i{constructor(s,o){let a=t(s),c=e(a,o);if(n(a))throw new TypeError;super(s,!0,c,null);this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Ix=(i,e,t)=>class extends i{constructor(r,s){let o=t(r),a=e(o,s);super(r,!0,a,null)}},Fx=(i,e,t,n,r,s)=>class extends t{constructor(a,c){super(a);this._nativeContext=a,Ms.set(this,a),n(a)&&r.set(a,new Set),this._destination=new i(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){let c=typeof a=="function"?s(this,a):null;this._nativeContext.onstatechange=c;let l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Fr=i=>{let e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{let t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Ox=(i,e)=>(t,n,r)=>{let s=new Set;return t.connect=(o=>(a,c=0,l=0)=>{let u=s.size===0;if(e(a))return o.call(t,a,c,l),i(s,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),i(s,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{let u=s.size>0;if(a===void 0)o.apply(t),s.clear();else if(typeof a=="number"){o.call(t,a);for(let d of s)d[1]===a&&s.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(let d of s)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&s.delete(d)}let h=s.size===0;u&&h&&r()})(t.disconnect),t},ze=(i,e,t)=>{let n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},tt=(i,e)=>{ze(i,e,"channelCount"),ze(i,e,"channelCountMode"),ze(i,e,"channelInterpretation")},Jl=i=>typeof i.getFloatTimeDomainData=="function",kx=i=>{i.getFloatTimeDomainData=e=>{let t=new Uint8Array(e.length);i.getByteTimeDomainData(t);let n=Math.max(t.length,i.fftSize);for(let r=0;r<n;r+=1)e[r]=(t[r]-128)*.0078125;return e}},Vx=(i,e)=>(t,n)=>{let r=t.createAnalyser();if(tt(r,n),!(n.maxDecibels>n.minDecibels))throw e();return ze(r,n,"fftSize"),ze(r,n,"maxDecibels"),ze(r,n,"minDecibels"),ze(r,n,"smoothingTimeConstant"),i(Jl,()=>Jl(r))||kx(r),r},Bx=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,We=(i,e,t)=>{let n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},Ux=i=>{i.start=(e=>{let t=!1;return(n=0,r=0,s)=>{if(t)throw ot();e.call(i,n,r,s),t=!0}})(i.start)},Ma=i=>{i.start=(e=>(t=0,n=0,r)=>{if(typeof r=="number"&&r<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,r)})(i.start)},Sa=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},zx=(i,e,t,n,r,s,o,a,c,l,u)=>(h,d)=>{let f=h.createBufferSource();return tt(f,d),We(f,d,"playbackRate"),ze(f,d,"buffer"),ze(f,d,"loop"),ze(f,d,"loopEnd"),ze(f,d,"loopStart"),e(t,()=>t(h))||Ux(f),e(n,()=>n(h))||c(f),e(r,()=>r(h))||l(f,h),e(s,()=>s(h))||Ma(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||Sa(f),i(h,f),f},Gx=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,Hx=(i,e)=>(t,n,r)=>{let s=t.destination;if(s.channelCount!==n)try{s.channelCount=n}catch{}r&&s.channelCountMode!=="explicit"&&(s.channelCountMode="explicit"),s.maxChannelCount===0&&Object.defineProperty(s,"maxChannelCount",{value:n});let o=i(t,{channelCount:n,channelCountMode:s.channelCountMode,channelInterpretation:s.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{s.channelCount=c}catch(l){if(c>s.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),s.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),s.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>s.maxChannelCount}),o.connect(s),o},Wx=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,qx=i=>{let{port1:e}=new MessageChannel;try{e.postMessage(i)}finally{e.close()}},Xx=(i,e,t,n,r)=>(s,o,a,c,l,u)=>{if(a!==null)try{let h=new a(s,c,u),d=new Map,f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>f,set:g=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof g=="function"?g:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){let v=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(v!==null){let p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=m=>{m.type==="error"?(Object.defineProperties(m,{type:{value:"processorerror"}}),v(m)):v(new ErrorEvent(_[0],{...m}))},d.set(v,_[1]))}}return g.call(h,"error",_[1],_[2]),g.call(h,..._)})(h.addEventListener),h.removeEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){let v=d.get(_[1]);v!==void 0&&(d.delete(_[1]),_[1]=v)}return g.call(h,"error",_[1],_[2]),g.call(h,_[0],_[1],_[2])})(h.removeEventListener),u.numberOfOutputs!==0){let g=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(g).connect(s.destination),r(h,()=>g.disconnect(),()=>g.connect(s.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return qx(u),e(s,o,l,u)},Kl=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),jx=i=>new Promise((e,t)=>{let{port1:n,port2:r}=new MessageChannel;n.onmessage=({data:s})=>{n.close(),r.close(),e(s)},n.onmessageerror=({data:s})=>{n.close(),r.close(),t(s)},r.postMessage(i)}),Yx=async(i,e)=>{let t=await jx(e);return new i(t)},Zx=(i,e,t,n)=>{let r=ma.get(i);r===void 0&&(r=new WeakMap,ma.set(i,r));let s=Yx(t,n);return r.set(e,s),s},$x=(i,e,t,n,r,s,o,a,c,l,u,h,d)=>(f,g,_,v)=>{if(v.numberOfInputs===0&&v.numberOfOutputs===0)throw c();let p=Array.isArray(v.outputChannelCount)?v.outputChannelCount:Array.from(v.outputChannelCount);if(p.some($=>$<1))throw c();if(p.length!==v.numberOfOutputs)throw e();if(v.channelCountMode!=="explicit")throw c();let m=v.channelCount*v.numberOfInputs,T=p.reduce(($,oe)=>$+oe,0),S=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(m+S>6||T>6)throw c();let y=new MessageChannel,x=[],b=[];for(let $=0;$<v.numberOfInputs;$+=1)x.push(o(f,{channelCount:v.channelCount,channelCountMode:v.channelCountMode,channelInterpretation:v.channelInterpretation,gain:1})),b.push(r(f,{channelCount:v.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:v.channelCount}));let A=[];if(_.parameterDescriptors!==void 0)for(let{defaultValue:$,maxValue:oe,minValue:R,name:M}of _.parameterDescriptors){let G=s(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:v.parameterData[M]!==void 0?v.parameterData[M]:$===void 0?0:$});Object.defineProperties(G.offset,{defaultValue:{get:()=>$===void 0?0:$},maxValue:{get:()=>oe===void 0?gt:oe},minValue:{get:()=>R===void 0?St:R}}),A.push(G)}let E=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,m+S)}),F=Kl(g,f.sampleRate),k=a(f,F,m+S,Math.max(1,T)),L=r(f,{channelCount:Math.max(1,T),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,T)}),C=[];for(let $=0;$<v.numberOfOutputs;$+=1)C.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[$]}));for(let $=0;$<v.numberOfInputs;$+=1){x[$].connect(b[$]);for(let oe=0;oe<v.channelCount;oe+=1)b[$].connect(E,oe,$*v.channelCount+oe)}let N=new ba(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:$},oe)=>{let R=A[oe];return R.connect(E,0,m+oe),R.start(0),[$,R.offset]}));E.connect(k);let P=v.channelInterpretation,D=null,B=v.numberOfOutputs===0?[k]:C,q={get bufferSize(){return F},get channelCount(){return v.channelCount},set channelCount($){throw t()},get channelCountMode(){return v.channelCountMode},set channelCountMode($){throw t()},get channelInterpretation(){return P},set channelInterpretation($){for(let oe of x)oe.channelInterpretation=$;P=$},get context(){return k.context},get inputs(){return x},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},get onprocessorerror(){return D},set onprocessorerror($){typeof D=="function"&&q.removeEventListener("processorerror",D),D=typeof $=="function"?$:null,typeof D=="function"&&q.addEventListener("processorerror",D)},get parameters(){return N},get port(){return y.port2},addEventListener(...$){return k.addEventListener($[0],$[1],$[2])},connect:i.bind(null,B),disconnect:l.bind(null,B),dispatchEvent(...$){return k.dispatchEvent($[0])},removeEventListener(...$){return k.removeEventListener($[0],$[1],$[2])}},X=new Map;y.port1.addEventListener=($=>(...oe)=>{if(oe[0]==="message"){let R=typeof oe[1]=="function"?oe[1]:typeof oe[1]=="object"&&oe[1]!==null&&typeof oe[1].handleEvent=="function"?oe[1].handleEvent:null;if(R!==null){let M=X.get(oe[1]);M!==void 0?oe[1]=M:(oe[1]=G=>{u(f.currentTime,f.sampleRate,()=>R(G))},X.set(R,oe[1]))}}return $.call(y.port1,oe[0],oe[1],oe[2])})(y.port1.addEventListener),y.port1.removeEventListener=($=>(...oe)=>{if(oe[0]==="message"){let R=X.get(oe[1]);R!==void 0&&(X.delete(oe[1]),oe[1]=R)}return $.call(y.port1,oe[0],oe[1],oe[2])})(y.port1.removeEventListener);let Z=null;Object.defineProperty(y.port1,"onmessage",{get:()=>Z,set:$=>{typeof Z=="function"&&y.port1.removeEventListener("message",Z),Z=typeof $=="function"?$:null,typeof Z=="function"&&(y.port1.addEventListener("message",Z),y.port1.start())}}),_.prototype.port=y.port1;let K=null;Zx(f,q,_,v).then($=>K=$);let J=Ns(v.numberOfInputs,v.channelCount),z=Ns(v.numberOfOutputs,p),Te=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce(($,{name:oe})=>({...$,[oe]:new Float32Array(128)}),{}),Y=!0,le=()=>{v.numberOfOutputs>0&&k.disconnect(L);for(let $=0,oe=0;$<v.numberOfOutputs;$+=1){let R=C[$];for(let M=0;M<p[$];M+=1)L.disconnect(R,oe+M,M);oe+=p[$]}},se=new Map;k.onaudioprocess=({inputBuffer:$,outputBuffer:oe})=>{if(K!==null){let R=h(q);for(let M=0;M<F;M+=128){for(let G=0;G<v.numberOfInputs;G+=1)for(let W=0;W<v.channelCount;W+=1)Ds($,J[G],W,W,M);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:G},W)=>{Ds($,Te,G,m+W,M)});for(let G=0;G<v.numberOfInputs;G+=1)for(let W=0;W<p[G];W+=1)z[G][W].byteLength===0&&(z[G][W]=new Float32Array(128));try{let G=J.map((ie,ce)=>{if(R[ce].size>0)return se.set(ce,F/128),ie;let ve=se.get(ce);return ve===void 0?[]:(ie.every(I=>I.every(Q=>Q===0))&&(ve===1?se.delete(ce):se.set(ce,ve-1)),ie)});Y=u(f.currentTime+M/f.sampleRate,f.sampleRate,()=>K.process(G,z,Te));for(let ie=0,ce=0;ie<v.numberOfOutputs;ie+=1){for(let Me=0;Me<p[ie];Me+=1)$l(oe,z[ie],Me,ce+Me,M);ce+=p[ie]}}catch(G){Y=!1,q.dispatchEvent(new ErrorEvent("processorerror",{colno:G.colno,filename:G.filename,lineno:G.lineno,message:G.message}))}if(!Y){for(let G=0;G<v.numberOfInputs;G+=1){x[G].disconnect(b[G]);for(let W=0;W<v.channelCount;W+=1)b[M].disconnect(E,W,G*v.channelCount+W)}if(_.parameterDescriptors!==void 0){let G=_.parameterDescriptors.length;for(let W=0;W<G;W+=1){let ie=A[W];ie.disconnect(E,0,m+W),ie.stop()}}E.disconnect(k),k.onaudioprocess=null,_e?le():ut();break}}}};let _e=!1,we=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Re=()=>k.connect(we).connect(f.destination),ut=()=>{k.disconnect(we),we.disconnect()},xt=()=>{if(Y){ut(),v.numberOfOutputs>0&&k.connect(L);for(let $=0,oe=0;$<v.numberOfOutputs;$+=1){let R=C[$];for(let M=0;M<p[$];M+=1)L.connect(R,oe+M,M);oe+=p[$]}}_e=!0},Vt=()=>{Y&&(Re(),le()),_e=!1};return Re(),d(q,xt,Vt)},eu=(i,e)=>{let t=i.createBiquadFilter();return tt(t,e),We(t,e,"Q"),We(t,e,"detune"),We(t,e,"frequency"),We(t,e,"gain"),ze(t,e,"type"),t},Qx=(i,e)=>(t,n)=>{let r=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,r),tt(r,n),r},Jx=i=>{let e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw ot()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw ot()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw ot()}})},Or=(i,e)=>{let t=i.createChannelSplitter(e.numberOfOutputs);return tt(t,e),Jx(t),t},Kx=(i,e,t,n,r)=>(s,o)=>{if(s.createConstantSource===void 0)return t(s,o);let a=s.createConstantSource();return tt(a,o),We(a,o,"offset"),e(n,()=>n(s))||Ma(a),e(r,()=>r(s))||Sa(a),i(s,a),a},zi=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),e0=(i,e,t,n)=>(r,{offset:s,...o})=>{let a=r.createBuffer(1,2,44100),c=e(r,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(r,{...o,gain:s}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;let h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return i(r,c),n(zi(h,l),d,f)},t0=(i,e)=>(t,n)=>{let r=t.createConvolver();if(tt(r,n),n.disableNormalization===r.normalize&&(r.normalize=!n.disableNormalization),ze(r,n,"buffer"),n.channelCount>2||(e(r,"channelCount",s=>()=>s.call(r),s=>o=>{if(o>2)throw i();return s.call(r,o)}),n.channelCountMode==="max"))throw i();return e(r,"channelCountMode",s=>()=>s.call(r),s=>o=>{if(o==="max")throw i();return s.call(r,o)}),r},tu=(i,e)=>{let t=i.createDelay(e.maxDelayTime);return tt(t,e),We(t,e,"delayTime"),t},n0=i=>(e,t)=>{let n=e.createDynamicsCompressor();if(tt(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return We(n,t,"attack"),We(n,t,"knee"),We(n,t,"ratio"),We(n,t,"release"),We(n,t,"threshold"),n},Tt=(i,e)=>{let t=i.createGain();return tt(t,e),We(t,e,"gain"),t},i0=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);let r=e.createIIRFilter(n.feedforward,n.feedback);return tt(r,n),r};function r0(i,e){let t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function s0(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function nu(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=s0(t,e),t[0]+=i[n];return t}var o0=(i,e,t,n)=>(r,s,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{let h=Kl(s,r.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),g=d.length,_=f.length,v=Math.min(g,_);if(g===0||g>20)throw n();if(d[0]===0)throw e();if(_===0||_>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let A=0;A<_;A+=1)f[A]/=d[0];for(let A=1;A<g;A+=1)d[A]/=d[0]}let p=t(r,h,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;let m=32,T=[],S=[],y=[];for(let A=0;A<o;A+=1){T.push(0);let E=new Float32Array(m),F=new Float32Array(m);E.fill(0),F.fill(0),S.push(E),y.push(F)}p.onaudioprocess=A=>{let E=A.inputBuffer,F=A.outputBuffer,k=E.numberOfChannels;for(let L=0;L<k;L+=1){let C=E.getChannelData(L),N=F.getChannelData(L);T[L]=Ql(d,g,f,_,v,S[L],y[L],T[L],m,C,N)}};let x=r.sampleRate/2;return zi({get bufferSize(){return h},get channelCount(){return p.channelCount},set channelCount(A){p.channelCount=A},get channelCountMode(){return p.channelCountMode},set channelCountMode(A){p.channelCountMode=A},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(A){p.channelInterpretation=A},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...A){return p.addEventListener(A[0],A[1],A[2])},dispatchEvent(...A){return p.dispatchEvent(A[0])},getFrequencyResponse(A,E,F){if(A.length!==E.length||E.length!==F.length)throw i();let k=A.length;for(let L=0;L<k;L+=1){let C=-Math.PI*(A[L]/x),N=[Math.cos(C),Math.sin(C)],P=nu(f,N),D=nu(d,N),B=r0(P,D);E[L]=Math.sqrt(B[0]*B[0]+B[1]*B[1]),F[L]=Math.atan2(B[1],B[0])}},removeEventListener(...A){return p.removeEventListener(A[0],A[1],A[2])}},p)},a0=(i,e)=>i.createMediaElementSource(e.mediaElement),c0=(i,e)=>{let t=i.createMediaStreamDestination();return tt(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},l0=(i,{mediaStream:e})=>{let t=e.getAudioTracks();t.sort((s,o)=>s.id<o.id?-1:s.id>o.id?1:0);let n=t.slice(0,1),r=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(r,"mediaStream",{value:e}),r},u0=(i,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);let r=new MediaStream([n]),s=t.createMediaStreamSource(r);if(n.kind!=="audio")throw i();if(e(t))throw new TypeError;return s},h0=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,d0=(i,e,t,n,r,s)=>(o,a)=>{let c=o.createOscillator();return tt(c,a),We(c,a,"detune"),We(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):ze(c,a,"type"),e(t,()=>t(o))||Ma(c),e(n,()=>n(o))||s(c,o),e(r,()=>r(o))||Sa(c),i(o,c),c},f0=i=>(e,t)=>{let n=e.createPanner();return n.orientationX===void 0?i(e,t):(tt(n,t),We(n,t,"orientationX"),We(n,t,"orientationY"),We(n,t,"orientationZ"),We(n,t,"positionX"),We(n,t,"positionY"),We(n,t,"positionZ"),ze(n,t,"coneInnerAngle"),ze(n,t,"coneOuterAngle"),ze(n,t,"coneOuterGain"),ze(n,t,"distanceModel"),ze(n,t,"maxDistance"),ze(n,t,"panningModel"),ze(n,t,"refDistance"),ze(n,t,"rolloffFactor"),n)},p0=(i,e,t,n,r,s,o,a,c)=>(l,{coneInnerAngle:u,coneOuterAngle:h,coneOuterGain:d,distanceModel:f,maxDistance:g,orientationX:_,orientationY:v,orientationZ:p,panningModel:m,positionX:T,positionY:S,positionZ:y,refDistance:x,rolloffFactor:b,...A})=>{let E=l.createPanner();if(A.channelCount>2||A.channelCountMode==="max")throw o();tt(E,A);let F={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},k=t(l,{...F,channelInterpretation:"speakers",numberOfInputs:6}),L=n(l,{...A,gain:1}),C=n(l,{...F,gain:1}),N=n(l,{...F,gain:0}),P=n(l,{...F,gain:0}),D=n(l,{...F,gain:0}),B=n(l,{...F,gain:0}),q=n(l,{...F,gain:0}),X=r(l,256,6,1),Z=s(l,{...F,curve:new Float32Array([1,1]),oversample:"none"}),K=[_,v,p],ae=[T,S,y];X.onaudioprocess=({inputBuffer:Y})=>{let le=[Y.getChannelData(0)[0],Y.getChannelData(1)[0],Y.getChannelData(2)[0]];le.some((_e,we)=>_e!==K[we])&&(E.setOrientation(...le),K=le);let se=[Y.getChannelData(3)[0],Y.getChannelData(4)[0],Y.getChannelData(5)[0]];se.some((_e,we)=>_e!==ae[we])&&(E.setPosition(...se),ae=se)},Object.defineProperty(N.gain,"defaultValue",{get:()=>0}),Object.defineProperty(P.gain,"defaultValue",{get:()=>0}),Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0}),Object.defineProperty(q.gain,"defaultValue",{get:()=>0});let J={get bufferSize(){},get channelCount(){return E.channelCount},set channelCount(Y){if(Y>2)throw o();L.channelCount=Y,E.channelCount=Y},get channelCountMode(){return E.channelCountMode},set channelCountMode(Y){if(Y==="max")throw o();L.channelCountMode=Y,E.channelCountMode=Y},get channelInterpretation(){return E.channelInterpretation},set channelInterpretation(Y){L.channelInterpretation=Y,E.channelInterpretation=Y},get coneInnerAngle(){return E.coneInnerAngle},set coneInnerAngle(Y){E.coneInnerAngle=Y},get coneOuterAngle(){return E.coneOuterAngle},set coneOuterAngle(Y){E.coneOuterAngle=Y},get coneOuterGain(){return E.coneOuterGain},set coneOuterGain(Y){if(Y<0||Y>1)throw e();E.coneOuterGain=Y},get context(){return E.context},get distanceModel(){return E.distanceModel},set distanceModel(Y){E.distanceModel=Y},get inputs(){return[L]},get maxDistance(){return E.maxDistance},set maxDistance(Y){if(Y<0)throw new RangeError;E.maxDistance=Y},get numberOfInputs(){return E.numberOfInputs},get numberOfOutputs(){return E.numberOfOutputs},get orientationX(){return C.gain},get orientationY(){return N.gain},get orientationZ(){return P.gain},get panningModel(){return E.panningModel},set panningModel(Y){E.panningModel=Y},get positionX(){return D.gain},get positionY(){return B.gain},get positionZ(){return q.gain},get refDistance(){return E.refDistance},set refDistance(Y){if(Y<0)throw new RangeError;E.refDistance=Y},get rolloffFactor(){return E.rolloffFactor},set rolloffFactor(Y){if(Y<0)throw new RangeError;E.rolloffFactor=Y},addEventListener(...Y){return L.addEventListener(Y[0],Y[1],Y[2])},dispatchEvent(...Y){return L.dispatchEvent(Y[0])},removeEventListener(...Y){return L.removeEventListener(Y[0],Y[1],Y[2])}};u!==J.coneInnerAngle&&(J.coneInnerAngle=u),h!==J.coneOuterAngle&&(J.coneOuterAngle=h),d!==J.coneOuterGain&&(J.coneOuterGain=d),f!==J.distanceModel&&(J.distanceModel=f),g!==J.maxDistance&&(J.maxDistance=g),_!==J.orientationX.value&&(J.orientationX.value=_),v!==J.orientationY.value&&(J.orientationY.value=v),p!==J.orientationZ.value&&(J.orientationZ.value=p),m!==J.panningModel&&(J.panningModel=m),T!==J.positionX.value&&(J.positionX.value=T),S!==J.positionY.value&&(J.positionY.value=S),y!==J.positionZ.value&&(J.positionZ.value=y),x!==J.refDistance&&(J.refDistance=x),b!==J.rolloffFactor&&(J.rolloffFactor=b),(K[0]!==1||K[1]!==0||K[2]!==0)&&E.setOrientation(...K),(ae[0]!==0||ae[1]!==0||ae[2]!==0)&&E.setPosition(...ae);let z=()=>{L.connect(E),i(L,Z,0,0),Z.connect(C).connect(k,0,0),Z.connect(N).connect(k,0,1),Z.connect(P).connect(k,0,2),Z.connect(D).connect(k,0,3),Z.connect(B).connect(k,0,4),Z.connect(q).connect(k,0,5),k.connect(X).connect(l.destination)},Te=()=>{L.disconnect(E),a(L,Z,0,0),Z.disconnect(C),C.disconnect(k),Z.disconnect(N),N.disconnect(k),Z.disconnect(P),P.disconnect(k),Z.disconnect(D),D.disconnect(k),Z.disconnect(B),B.disconnect(k),Z.disconnect(q),q.disconnect(k),k.disconnect(X),X.disconnect(l.destination)};return c(zi(J,E),z,Te)},m0=i=>(e,{disableNormalization:t,imag:n,real:r})=>{let s=n instanceof Float32Array?n:new Float32Array(n),o=r instanceof Float32Array?r:new Float32Array(r),a=e.createPeriodicWave(o,s,{disableNormalization:t});if(Array.from(n).length<2)throw i();return a},kr=(i,e,t,n)=>i.createScriptProcessor(e,t,n),g0=(i,e)=>(t,n)=>{let r=n.channelCountMode;if(r==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);let s=t.createStereoPanner();return tt(s,n),We(s,n,"pan"),Object.defineProperty(s,"channelCountMode",{get:()=>r,set:o=>{if(o!==r)throw e()}}),s},_0=(i,e,t,n,r,s)=>{let o=16385,a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(g,_,v,p)=>{let m=new Float32Array(o),T=new Float32Array(o);for(let E=0;E<o;E+=1){let F=E/(o-1)*c;m[E]=Math.cos(F),T[E]=Math.sin(F)}let S=t(g,{...l,gain:0}),y=n(g,{...u,curve:m}),x=n(g,{...u,curve:a}),b=t(g,{...l,gain:0}),A=n(g,{...u,curve:T});return{connectGraph(){_.connect(S),_.connect(x.inputs===void 0?x:x.inputs[0]),_.connect(b),x.connect(v),v.connect(y.inputs===void 0?y:y.inputs[0]),v.connect(A.inputs===void 0?A:A.inputs[0]),y.connect(S.gain),A.connect(b.gain),S.connect(p,0,0),b.connect(p,0,1)},disconnectGraph(){_.disconnect(S),_.disconnect(x.inputs===void 0?x:x.inputs[0]),_.disconnect(b),x.disconnect(v),v.disconnect(y.inputs===void 0?y:y.inputs[0]),v.disconnect(A.inputs===void 0?A:A.inputs[0]),y.disconnect(S.gain),A.disconnect(b.gain),S.disconnect(p,0,0),b.disconnect(p,0,1)}}},d=(g,_,v,p)=>{let m=new Float32Array(o),T=new Float32Array(o),S=new Float32Array(o),y=new Float32Array(o),x=Math.floor(o/2);for(let B=0;B<o;B+=1)if(B>x){let q=(B-x)/(o-1-x)*c;m[B]=Math.cos(q),T[B]=Math.sin(q),S[B]=0,y[B]=1}else{let q=B/(o-1-x)*c;m[B]=1,T[B]=0,S[B]=Math.cos(q),y[B]=Math.sin(q)}let b=e(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),A=t(g,{...l,gain:0}),E=n(g,{...u,curve:m}),F=t(g,{...l,gain:0}),k=n(g,{...u,curve:T}),L=n(g,{...u,curve:a}),C=t(g,{...l,gain:0}),N=n(g,{...u,curve:S}),P=t(g,{...l,gain:0}),D=n(g,{...u,curve:y});return{connectGraph(){_.connect(b),_.connect(L.inputs===void 0?L:L.inputs[0]),b.connect(A,0),b.connect(F,0),b.connect(C,1),b.connect(P,1),L.connect(v),v.connect(E.inputs===void 0?E:E.inputs[0]),v.connect(k.inputs===void 0?k:k.inputs[0]),v.connect(N.inputs===void 0?N:N.inputs[0]),v.connect(D.inputs===void 0?D:D.inputs[0]),E.connect(A.gain),k.connect(F.gain),N.connect(C.gain),D.connect(P.gain),A.connect(p,0,0),C.connect(p,0,0),F.connect(p,0,1),P.connect(p,0,1)},disconnectGraph(){_.disconnect(b),_.disconnect(L.inputs===void 0?L:L.inputs[0]),b.disconnect(A,0),b.disconnect(F,0),b.disconnect(C,1),b.disconnect(P,1),L.disconnect(v),v.disconnect(E.inputs===void 0?E:E.inputs[0]),v.disconnect(k.inputs===void 0?k:k.inputs[0]),v.disconnect(N.inputs===void 0?N:N.inputs[0]),v.disconnect(D.inputs===void 0?D:D.inputs[0]),E.disconnect(A.gain),k.disconnect(F.gain),N.disconnect(C.gain),D.disconnect(P.gain),A.disconnect(p,0,0),C.disconnect(p,0,0),F.disconnect(p,0,1),P.disconnect(p,0,1)}}},f=(g,_,v,p,m)=>{if(_===1)return h(g,v,p,m);if(_===2)return d(g,v,p,m);throw r()};return(g,{channelCount:_,channelCountMode:v,pan:p,...m})=>{if(v==="max")throw r();let T=i(g,{...m,channelCount:1,channelCountMode:v,numberOfInputs:2}),S=t(g,{...m,channelCount:_,channelCountMode:v,gain:1}),y=t(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p}),{connectGraph:x,disconnectGraph:b}=f(g,_,S,y,T);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});let A={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(L){S.channelCount!==L&&(E&&b(),{connectGraph:x,disconnectGraph:b}=f(g,L,S,y,T),E&&x()),S.channelCount=L},get channelCountMode(){return S.channelCountMode},set channelCountMode(L){if(L==="clamped-max"||L==="max")throw r();S.channelCountMode=L},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(L){S.channelInterpretation=L},get context(){return S.context},get inputs(){return[S]},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get pan(){return y.gain},addEventListener(...L){return S.addEventListener(L[0],L[1],L[2])},dispatchEvent(...L){return S.dispatchEvent(L[0])},removeEventListener(...L){return S.removeEventListener(L[0],L[1],L[2])}},E=!1,F=()=>{x(),E=!0},k=()=>{b(),E=!1};return s(zi(A,T),F,k)}},v0=(i,e,t,n,r,s,o)=>(a,c)=>{let l=a.createWaveShaper();if(s!==null&&s.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);tt(l,c);let u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();ze(l,{curve:u},"curve"),ze(l,c,"oversample");let h=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>v=>(_.call(l,v),d&&(n(v)&&h===null?h=i(a,l):!n(v)&&h!==null&&(h(),h=null)),v)),r(l,()=>{d=!0,n(l.curve)&&(h=i(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},x0=(i,e,t,n,r)=>(s,{curve:o,oversample:a,...c})=>{let l=s.createWaveShaper(),u=s.createWaveShaper();tt(l,c),tt(u,c);let h=t(s,{...c,gain:1}),d=t(s,{...c,gain:-1}),f=t(s,{...c,gain:1}),g=t(s,{...c,gain:-1}),_=null,v=!1,p=null,m={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){h.channelCount=y,d.channelCount=y,l.channelCount=y,f.channelCount=y,u.channelCount=y,g.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){h.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,f.channelCountMode=y,u.channelCountMode=y,g.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){h.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,f.channelInterpretation=y,u.channelInterpretation=y,g.channelInterpretation=y},get context(){return l.context},get curve(){return p},set curve(y){if(y!==null&&y.length<2)throw e();if(y===null)l.curve=y,u.curve=y;else{let x=y.length,b=new Float32Array(x+2-x%2),A=new Float32Array(x+2-x%2);b[0]=y[0],A[0]=-y[x-1];let E=Math.ceil((x+1)/2),F=(x+1)/2-1;for(let k=1;k<E;k+=1){let L=k/E*F,C=Math.floor(L),N=Math.ceil(L);b[k]=C===N?y[C]:(1-(L-C))*y[C]+(1-(N-L))*y[N],A[k]=C===N?-y[x-1-C]:-((1-(L-C))*y[x-1-C])-(1-(N-L))*y[x-1-N]}b[E]=x%2==1?y[E-1]:(y[E-2]+y[E-1])/2,l.curve=b,u.curve=A}p=y,v&&(n(p)&&_===null?_=i(s,h):_!==null&&(_(),_=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,u.oversample=y},addEventListener(...y){return h.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return h.dispatchEvent(y[0])},removeEventListener(...y){return h.removeEventListener(y[0],y[1],y[2])}};o!==null&&(m.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==m.oversample&&(m.oversample=a);let T=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(g).connect(f),v=!0,n(p)&&(_=i(s,h))},S=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(g),g.disconnect(f),v=!1,_!==null&&(_(),_=null)};return r(zi(m,f),T,S)},Et=()=>new DOMException("","NotSupportedError"),y0={numberOfChannels:1},w0=(i,e,t,n,r)=>class extends i{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");let{length:u,numberOfChannels:h,sampleRate:d}={...y0,...l},f=n(h,u,d);e(Fr,()=>Fr(f))||f.addEventListener("statechange",(()=>{let g=0,_=v=>{this._state==="running"&&(g>0?(f.removeEventListener("statechange",_),v.stopImmediatePropagation(),this._waitForThePromiseToSettle(v)):g+=1)};return _})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",r(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Hl(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},b0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},M0=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...b0,...l},d=t(u,h),f=s(u),g=f?n():null,_=c.sampleRate/2;super(c,!1,d,g);this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){let l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;let u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Bi(this);let l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Sn(this)&&Dr(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},S0=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=null,a=null,c=null,l=async(u,h,d)=>{let f=t(u),g=ft(f,h);if(!g){let _={channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,detune:f.detune.value,frequency:f.frequency.value,periodicWave:o===null?void 0:o,type:f.type};f=e(h,_),a!==null&&f.start(a),c!==null&&f.stop(c)}return s.set(h,f),g?(await i(h,u.detune,f.detune,d),await i(h,u.frequency,f.frequency,d)):(await n(h,u.detune,f.detune,d),await n(h,u.frequency,f.frequency,d)),await r(u,h,f,d),f};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h,d){let f=s.get(h);return f!==void 0?Promise.resolve(f):l(u,h,d)}}},T0={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},E0=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...T0,...l},d=t(u,h),f=s(u),g=f?n():null;super(c,!1,d,g);this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,gt,St),this._orientationY=e(this,f,d.orientationY,gt,St),this._orientationZ=e(this,f,d.orientationZ,gt,St),this._positionX=e(this,f,d.positionX,gt,St),this._positionY=e(this,f,d.positionY,gt,St),this._positionZ=e(this,f,d.positionZ,gt,St),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},A0=(i,e,t,n,r,s,o,a,c,l)=>()=>{let u=new WeakMap,h=null,d=async(f,g,_)=>{let v=null,p=s(f),m={channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation},T={...m,coneInnerAngle:p.coneInnerAngle,coneOuterAngle:p.coneOuterAngle,coneOuterGain:p.coneOuterGain,distanceModel:p.distanceModel,maxDistance:p.maxDistance,panningModel:p.panningModel,refDistance:p.refDistance,rolloffFactor:p.rolloffFactor},S=ft(p,g);if("bufferSize"in p)v=n(g,{...m,gain:1});else if(!S){let y={...T,orientationX:p.orientationX.value,orientationY:p.orientationY.value,orientationZ:p.orientationZ.value,positionX:p.positionX.value,positionY:p.positionY.value,positionZ:p.positionZ.value};p=r(g,y)}if(u.set(g,v===null?p:v),v!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");let L=new o(6,f.context.length,g.sampleRate),C=e(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});C.connect(L.destination),h=(async()=>{let N=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(P,D)=>{let B=t(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:D===0?1:0});return await a(L,P,B.offset,_),B}));for(let P=0;P<6;P+=1)N[P].connect(C,0,P),N[P].start(0);return l(L)})()}let y=await h,x=n(g,{...m,gain:1});await c(f,g,x,_);let b=[];for(let L=0;L<y.numberOfChannels;L+=1)b.push(y.getChannelData(L));let A=[b[0][0],b[1][0],b[2][0]],E=[b[3][0],b[4][0],b[5][0]],F=n(g,{...m,gain:1}),k=r(g,{...T,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:E[0],positionY:E[1],positionZ:E[2]});x.connect(F).connect(k.inputs[0]),k.connect(v);for(let L=128;L<y.length;L+=128){let C=[b[0][L],b[1][L],b[2][L]],N=[b[3][L],b[4][L],b[5][L]];if(C.some((P,D)=>P!==A[D])||N.some((P,D)=>P!==E[D])){A=C,E=N;let P=L/g.sampleRate;F.gain.setValueAtTime(0,P),F=n(g,{...m,gain:0}),k=r(g,{...T,orientationX:A[0],orientationY:A[1],orientationZ:A[2],positionX:E[0],positionY:E[1],positionZ:E[2]}),F.gain.setValueAtTime(1,P),x.connect(F).connect(k.inputs[0]),k.connect(v)}}return v}return S?(await i(g,f.orientationX,p.orientationX,_),await i(g,f.orientationY,p.orientationY,_),await i(g,f.orientationZ,p.orientationZ,_),await i(g,f.positionX,p.positionX,_),await i(g,f.positionY,p.positionY,_),await i(g,f.positionZ,p.positionZ,_)):(await a(g,f.orientationX,p.orientationX,_),await a(g,f.orientationY,p.orientationY,_),await a(g,f.orientationZ,p.orientationZ,_),await a(g,f.positionX,p.positionX,_),await a(g,f.positionY,p.positionY,_),await a(g,f.positionZ,p.positionZ,_)),Ui(p)?await c(f,g,p.inputs[0],_):await c(f,g,p,_),p};return{render(f,g,_){let v=u.get(g);return v!==void 0?Promise.resolve(v):d(f,g,_)}}},C0={disableNormalization:!1},L0=(i,e,t,n)=>class iu{constructor(s,o){let a=e(s),c=n({...C0,...o}),l=i(a,c);return t.add(l),l}static[Symbol.hasInstance](s){return s!==null&&typeof s=="object"&&Object.getPrototypeOf(s)===iu.prototype||t.has(s)}},R0=(i,e)=>(t,n,r,s)=>(i(n).replay(r),e(n,t,r,s)),D0=(i,e,t)=>async(n,r,s,o)=>{let a=i(n),c=[...o,n];await Promise.all(a.activeInputs.map((l,u)=>Array.from(l).filter(([h])=>!c.includes(h)).map(async([h,d])=>{let g=await e(h).render(h,r,c),_=n.context.destination;!t(h)&&(n!==_||!t(n))&&g.connect(s,d,u)})).reduce((l,u)=>[...l,...u],[]))},N0=(i,e,t)=>async(n,r,s,o)=>{let a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([c,l])=>{let h=await i(c).render(c,r,o);t(c)||h.connect(s,l)}))},P0=(i,e,t,n)=>r=>i(Fr,()=>Fr(r))?Promise.resolve(i(n,n)).then(s=>{if(!s){let o=t(r,512,0,1);r.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>r.currentTime,o.connect(r.destination)}return r.startRendering()}):new Promise(s=>{let o=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});r.oncomplete=a=>{o.disconnect(),s(a.renderedBuffer)},o.connect(r.destination),r.startRendering()}),I0=i=>(e,t)=>{i.set(e,t)},F0=i=>(e,t)=>i.set(e,t),O0=(i,e,t,n,r,s,o,a)=>{let c=[];return(l,u)=>t(l).render(l,u,c).then(()=>Promise.all(Array.from(n(u)).map(h=>t(h).render(h,u,c)))).then(()=>r(u)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),_a(h)):e(s,()=>s(h))||a(h),i.add(h),h))},k0={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},V0=(i,e,t,n,r,s)=>class extends i{constructor(a,c){let l=r(a),u={...k0,...c},h=t(l,u),d=s(l),f=d?n():null;super(a,!1,h,f);this._pan=e(this,d,h.pan)}get pan(){return this._pan}},B0=(i,e,t,n,r)=>()=>{let s=new WeakMap,o=async(a,c,l)=>{let u=t(a),h=ft(u,c);if(!h){let d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,pan:u.pan.value};u=e(c,d)}return s.set(c,u),h?await i(c,a.pan,u.pan,l):await n(c,a.pan,u.pan,l),Ui(u)?await r(a,c,u.inputs[0],l):await r(a,c,u,l),u};return{render(a,c,l){let u=s.get(c);return u!==void 0?Promise.resolve(u):o(a,c,l)}}},U0=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},z0=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;let t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,8e3),r=URL.createObjectURL(t),s=!1,o=!1;try{await n.audioWorklet.addModule(r);let a=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>s=!0,a.onprocessorerror=()=>o=!0,c.connect(a),await n.startRendering()}catch{}finally{URL.revokeObjectURL(r)}return s&&!o},G0=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);let t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(r=>{t.oncomplete=()=>{n.disconnect(),r(t.currentTime!==0)},t.startRendering()})},H0=()=>new DOMException("","UnknownError"),W0={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},q0=(i,e,t,n,r,s,o)=>class extends i{constructor(c,l){let u=r(c),h={...W0,...l},d=t(u,h),g=s(u)?n():null;super(c,!0,d,g);this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},X0=(i,e,t)=>()=>{let n=new WeakMap,r=async(s,o,a)=>{let c=e(s);if(!ft(c,o)){let u={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,curve:c.curve,oversample:c.oversample};c=i(o,u)}return n.set(o,c),Ui(c)?await t(s,o,c.inputs[0],a):await t(s,o,c,a),c};return{render(s,o,a){let c=n.get(o);return c!==void 0?Promise.resolve(c):r(s,o,a)}}},j0=()=>typeof window=="undefined"?null:window,Y0=(i,e)=>t=>{t.copyFromChannel=(n,r,s=0)=>{let o=i(s),a=i(r);if(a>=t.numberOfChannels)throw e();let c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,r,s=0)=>{let o=i(s),a=i(r);if(a>=t.numberOfChannels)throw e();let c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},Z0=i=>e=>{e.copyFromChannel=(t=>(n,r,s=0)=>{let o=i(s),a=i(r);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,r,s=0)=>{let o=i(s),a=i(r);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},$0=i=>(e,t)=>{let n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",r=>()=>{let s=r.call(e);return s===n?null:s},r=>s=>r.call(e,s===null?n:s))},Q0=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});let r=t.createBufferSource();e(n,()=>{let a=n.numberOfInputs;for(let c=0;c<a;c+=1)r.connect(n,0,c)},()=>r.disconnect(n))},ru=i=>{if(i===null)return!1;let e=i.length;return e%2!=0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},Fs=(i,e,t,n)=>{let r=Object.getPrototypeOf(i);for(;!r.hasOwnProperty(e);)r=Object.getPrototypeOf(r);let{get:s,set:o}=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(i,e,{get:t(s),set:n(o)})},J0=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),K0=i=>({...i,channelCount:i.numberOfOutputs}),ey=i=>{let{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},su=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;su(i,e,t+1e-7)}},ty=i=>{let e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},ny=i=>{let e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},iy=i=>{let e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Ta=i=>{let e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},ou=i=>{let e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Ea=i=>{let e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},ry=i=>{i.start=(e=>(t=0,n=0,r)=>{let s=i.buffer,o=s===null?n:Math.min(s.duration,n);s!==null&&o>s.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,o,r)})(i.start)},au=(i,e)=>{let t=e.createGain();i.connect(t);let n=(r=>()=>{r.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),zi(i,t),i.stop=(r=>{let s=!1;return(o=0)=>{if(s)try{r.call(i,o)}catch{t.gain.setValueAtTime(0,o)}else r.call(i,o),s=!0}})(i.stop)},Gi=(i,e)=>t=>{let n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},sy=T_(oi),oy=D_(oi),ay=Wv(Ss),cu=new WeakMap,cy=cx(cu),jt=xv(new Map,new WeakMap),ln=j0(),lu=Vx(jt,cn),Aa=ax(_t),lt=D0(_t,Aa,ai),ly=O_(lu,Ue,lt),Be=hx(Ms),Tn=h0(ln),Pe=Cx(Tn),uu=new WeakMap,hu=ex(Gi),Vr=Gx(ln),Ca=Sx(Vr),La=Tx(ln),du=Ex(ln),Xe=av(E_(Nl),R_(sy,oy,As,ay,Cs,_t,cy,Rr,Ue,oi,Sn,ai,Ls),jt,xx(fa,Cs,_t,Ue,Ir,Sn),cn,Is,Et,Uv(As,fa,_t,Ue,Ir,Be,Sn,Pe),jv(uu,_t,Xt),hu,Be,Ca,La,du,Pe),uy=F_(Xe,ly,cn,lu,Be,Pe),Ra=new WeakSet,fu=Bx(ln),pu=Nv(new Uint32Array(1)),Da=Y0(pu,cn),Na=Z0(pu),hy=V_(Ra,jt,Et,fu,Tn,U0(fu),Da,Na),Os=N_(Tt),mu=N0(Aa,Nr,ai),un=Ev(mu),Hi=zx(Os,jt,ty,ny,iy,Ta,ou,Ea,ry,$0(Fs),au),hn=R0(lx(Nr),mu),dy=z_(un,Hi,Ue,hn,lt),Yt=cv(A_(Pl),uu,da,lv,x_,y_,w_,b_,M_,aa,El,Vr,su),fy=U_(Xe,dy,Yt,ot,Hi,Be,Pe,Gi),py=$_(Xe,Q_,cn,ot,Hx(Tt,Fs),Be,Pe,lt),my=vv(un,eu,Ue,hn,lt),ci=F0(cu),gy=_v(Xe,Yt,my,Is,eu,Be,Pe,ci),zn=Ox(oi,La),_y=Q0(ot,zn),Gn=Qx(Vr,_y),vy=bv(Gn,Ue,lt),xy=wv(Xe,vy,Gn,Be,Pe),yy=Tv(Or,Ue,lt),wy=Sv(Xe,yy,Or,Be,Pe,K0),by=e0(Os,Hi,Tt,zn),Wi=Kx(Os,jt,by,Ta,Ea),My=Dv(un,Wi,Ue,hn,lt),Sy=Rv(Xe,Yt,My,Wi,Be,Pe,Gi),gu=t0(Et,Fs),Ty=Fv(gu,Ue,lt),Ey=Iv(Xe,Ty,gu,Be,Pe,ci),Ay=Hv(un,tu,Ue,hn,lt),Cy=Gv(Xe,Yt,Ay,tu,Be,Pe,ci),_u=n0(Et),Ly=Qv(un,_u,Ue,hn,lt),Ry=$v(Xe,Yt,Ly,_u,Et,Be,Pe,ci),Dy=sx(un,Tt,Ue,hn,lt),Ny=rx(Xe,Yt,Dy,Tt,Be,Pe),Py=o0(Is,ot,kr,Et),ks=P0(jt,Tt,kr,G0(Tt,Tn)),Iy=vx(Hi,Ue,Tn,lt,ks),Fy=i0(Py),Oy=gx(Xe,Fy,Iy,Be,Pe,ci),ky=J_(Yt,Gn,Wi,kr,Pe),vu=new WeakMap,Vy=Fx(py,ky,hu,Pe,vu,Gi),xu=d0(Os,jt,Ta,ou,Ea,au),By=S0(un,xu,Ue,hn,lt),Uy=M0(Xe,Yt,xu,By,Be,Pe,Gi),yu=Cv(Hi),zy=x0(yu,ot,Tt,ru,zn),Vs=v0(yu,ot,zy,ru,zn,Vr,Fs),Gy=p0(As,ot,Gn,Tt,kr,Vs,Et,Cs,zn),wu=f0(Gy),Hy=A0(un,Gn,Wi,Tt,wu,Ue,Tn,hn,lt,ks),Wy=E0(Xe,Yt,wu,Hy,Be,Pe,ci),qy=m0(cn),Xy=L0(qy,Be,new WeakSet,ey),jy=_0(Gn,Or,Tt,Vs,Et,zn),bu=g0(jy,Et),Yy=B0(un,bu,Ue,hn,lt),Zy=V0(Xe,Yt,bu,Yy,Be,Pe),$y=X0(Vs,Ue,lt),Qy=q0(Xe,ot,Vs,$y,Be,Pe,ci),Mu=Lx(ln),Pa=tx(ln),Su=new WeakMap,Jy=dx(Su,Tn),Ia=Wx(ln),Ky=Mu?L_(jt,Et,Kv(ln),Pa,nx(S_),Be,Jy,Pe,new WeakMap,new WeakMap,z0(Ia,Tn),ln):void 0,ew=Ax(Ca,Pe),tw=Bv(Ra,jt,kv,Jv,new WeakSet,Be,ew,Ts,Fr,Da,Na),Tu=mv(Ky,uy,hy,fy,gy,xy,wy,Sy,Ey,tw,Cy,Ry,Ny,Oy,Vy,Uy,Wy,Xy,Zy,Qy),nw=Rx(Xe,a0,Be,Pe),iw=Nx(Xe,c0,Be,Pe),rw=Px(Xe,l0,Be,Pe),sw=u0(ot,Pe),ow=Ix(Xe,sw,Be),aw=Z_(Tu,ot,Et,H0,nw,iw,rw,ow,Vr),Fa=fx(vu),cw=P_(Fa),Eu=Av(cn),lw=qv(Fa),Au=Yv(cn),Cu=new WeakMap,uw=ox(Cu,Xt),hw=$x(Eu,cn,ot,Gn,Or,Wi,Tt,kr,Et,Au,Pa,uw,zn),dw=Xx(ot,hw,Tt,Et,zn),fw=pv(un,Eu,Hi,Gn,Or,Wi,Tt,lw,Au,Pa,Ue,Ia,Tn,hn,lt,ks),pw=ux(Su),mw=I0(Cu),Lu=Mu?hv(cw,Xe,Yt,fw,dw,_t,pw,Be,Pe,Ia,J0,mw,Gi):void 0,gw=Ov(Et,Tn),_w=O0(Ra,jt,Aa,Fa,ks,Ts,Da,Na),vw=w0(Tu,jt,ot,gw,_w),xw=yx(Ms,Ca),yw=wx(ha,La),ww=bx(da,du),bw=Mx(Ms,Pe);function ge(i,e){if(!i)throw new Error(e)}function Hn(i,e,t=Infinity){if(!(e<=i&&i<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${i}`)}function Du(i){!i.isOffline&&i.state!=="running"&&Ru('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}var Nu=console;function Mw(...i){Nu.log(...i)}function Ru(...i){Nu.warn(...i)}function Ft(i){return typeof i=="undefined"}function be(i){return!Ft(i)}function Sw(i){return typeof i=="function"}function li(i){return typeof i=="number"}function ui(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function Tw(i){return typeof i=="boolean"}function Zt(i){return Array.isArray(i)}function dn(i){return typeof i=="string"}function Bs(i){return dn(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Ew(i){return new aw(i)}function Aw(i,e,t){return new vw(i,e,t)}var hi=typeof self=="object"?self:null,Cw=hi&&(hi.hasOwnProperty("AudioContext")||hi.hasOwnProperty("webkitAudioContext"));function Lw(i,e,t){return ge(be(Lu),"This node only works in a secure context (https or localhost)"),new Lu(i,e,t)}function $t(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function $e(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((n=n.apply(i,e||[])).next())})}var Pu=class{constructor(e,t,n){this._callback=e,this._type=t,this._updateInterval=n,this._createClock()}_createWorker(){let e=new Blob([`
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
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch(e){this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}};function di(i){return ww(i)}function Wn(i){return yw(i)}function Us(i){return bw(i)}function qi(i){return xw(i)}function Iu(i){return i instanceof AudioBuffer}function Rw(i,e){return i==="value"||di(e)||Wn(e)||Iu(e)}function Xi(i,...e){if(!e.length)return i;let t=e.shift();if(ui(i)&&ui(t))for(let n in t)Rw(n,t[n])?i[n]=t[n]:ui(t[n])?(i[n]||Object.assign(i,{[n]:{}}),Xi(i[n],t[n])):Object.assign(i,{[n]:t[n]});return Xi(i,...e)}function Dw(i,e){return i.length===e.length&&i.every((t,n)=>e[n]===t)}function re(i,e,t=[],n){let r={},s=Array.from(e);if(ui(s[0])&&n&&!Reflect.has(s[0],n)&&(Object.keys(s[0]).some(a=>Reflect.has(i,a))||(Xi(r,{[n]:s[0]}),t.splice(t.indexOf(n),1),s.shift())),s.length===1&&ui(s[0]))Xi(r,s[0]);else for(let o=0;o<t.length;o++)be(s[o])&&(r[t[o]]=s[o]);return Xi(i,r)}function Nw(i){return i.constructor.getDefaults()}function ji(i,e){return Ft(i)?e:i}function Fu(i,e){return e.forEach(t=>{Reflect.has(i,t)&&delete i[t]}),i}var fn=class{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||hi&&this.toString()===hi.TONE_DEBUG_CLASS)&&Mw(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}};fn.version=Ml;var Oa=1e-6;function zs(i,e){return i>e+Oa}function ka(i,e){return zs(i,e)||Qt(i,e)}function Ou(i,e){return i+Oa<e}function Qt(i,e){return Math.abs(i-e)<Oa}function Pw(i,e,t){return Math.max(Math.min(i,t),e)}var Jt=class extends fn{constructor(){super();this.name="Timeline",this._timeline=[];let e=re(Jt.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:Infinity,increasing:!1}}get length(){return this._timeline.length}add(e){if(ge(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){let t=this._timeline[this.length-1];ge(ka(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{let t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){let t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){let t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){let n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){let n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){let t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];let n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Qt(this._timeline[t].time,e)){for(let n=t;n>=0&&Qt(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&ka(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){let t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){let t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0,r=this._timeline.length,s=r;if(r>0&&this._timeline[r-1][t]<=e)return r-1;for(;n<s;){let o=Math.floor(n+(s-n)/2),a=this._timeline[o],c=this._timeline[o+1];if(Qt(a[t],e)){for(let l=o;l<this._timeline.length;l++){let u=this._timeline[l];if(Qt(u[t],e))o=l;else break}return o}else{if(Ou(a[t],e)&&zs(c[t],e))return o;zs(a[t],e)?s=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){let n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){let n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let r=this._search(e),s=this._search(t);return r!==-1&&s!==-1?(this._timeline[r].time!==e&&(r+=1),this._timeline[s].time===t&&(s-=1),this._iterate(n,r,s)):r===-1&&this._iterate(n,0,s),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){let n=this._search(e);if(n!==-1&&Qt(this._timeline[n].time,e)){let r=n;for(let s=n;s>=0&&Qt(this._timeline[s].time,e);s--)r=s;this._iterate(s=>{t(s)},r,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}},ku=[];function Gs(i){ku.push(i)}function Iw(i){ku.forEach(e=>e(i))}var Vu=[];function Hs(i){Vu.push(i)}function Fw(i){Vu.forEach(e=>e(i))}var Yi=class extends fn{constructor(){super(...arguments);this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(r=>{Ft(this._events)&&(this._events={}),this._events.hasOwnProperty(r)||(this._events[r]=[]),this._events[r].push(t)}),this}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(r=>{if(Ft(this._events)&&(this._events={}),this._events.hasOwnProperty(e))if(Ft(t))this._events[e]=[];else{let s=this._events[e];for(let o=s.length-1;o>=0;o--)s[o]===t&&s.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){let n=this._events[e].slice(0);for(let r=0,s=n.length;r<s;r++)n[r].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{let n=Object.getOwnPropertyDescriptor(Yi.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}},Va=class extends Yi{constructor(){super(...arguments);this.isOffline=!1}toJSON(){return{}}},Zi=class extends Va{constructor(){super();this.name="Context",this._constants=new Map,this._timeouts=new Jt,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;let e=re(Zi.getDefaults(),arguments,["context"]);e.context?this._context=e.context:this._context=Ew({latencyHint:e.latencyHint}),this._ticker=new Pu(this.emit.bind(this,"tick"),e.clockSource,e.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(e.latencyHint),this.lookAhead=e.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Iw(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return ge(qi(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return ge(qi(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return ge(qi(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){ge(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){ge(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){ge(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){ge(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return Lw(this.rawContext,e,t)}addAudioWorkletModule(e,t){return $e(this,void 0,void 0,function*(){ge(be(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(t)||this._workletModules.set(t,this.rawContext.audioWorklet.addModule(e)),yield this._workletModules.get(t)})}workletsAreReady(){return $e(this,void 0,void 0,function*(){let e=[];this._workletModules.forEach(t=>e.push(t)),yield Promise.all(e)})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get latencyHint(){return this._latencyHint}_setLatencyHint(e){let t=0;if(this._latencyHint=e,dn(e))switch(e){case"interactive":t=.1;break;case"playback":t=.5;break;case"balanced":t=.25;break}this.lookAhead=t,this.updateInterval=t/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return qi(this._context)?this._context.resume():Promise.resolve()}close(){return $e(this,void 0,void 0,function*(){qi(this._context)&&(yield this._context.close()),this._initialized&&Fw(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{let t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=e;let r=this._context.createBufferSource();return r.channelCount=1,r.channelCountMode="explicit",r.buffer=t,r.loop=!0,r.start(0),this._constants.set(e,r),r}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this}_timeoutLoop(){let e=this.now(),t=this._timeouts.peek();for(;this._timeouts.length&&t&&t.time<=e;)t.callback(),this._timeouts.shift(),t=this._timeouts.peek()}setTimeout(e,t){this._timeoutIds++;let n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){let n=++this._timeoutIds,r=()=>{let s=this.now();this._timeouts.add({callback:()=>{e(),r()},id:n,time:s+t})};return r(),n}},Bu=class extends Va{constructor(){super(...arguments);this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e,t){return $e(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}};function nt(i,e){Zt(e)?e.forEach(t=>nt(i,t)):Object.defineProperty(i,e,{enumerable:!0,writable:!1})}function Uu(i,e){Zt(e)?e.forEach(t=>Uu(i,t)):Object.defineProperty(i,e,{writable:!0})}var Fe=()=>{},Oe=class extends fn{constructor(){super();this.name="ToneAudioBuffer",this.onload=Fe;let e=re(Oe.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,e.url&&Iu(e.url)||e.url instanceof Oe?this.set(e.url):dn(e.url)&&this.load(e.url).catch(e.onerror)}static getDefaults(){return{onerror:Fe,onload:Fe,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Kt().sampleRate}set(e){return e instanceof Oe?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return $e(this,void 0,void 0,function*(){let t=Oe.load(e).then(n=>{this.set(n),this.onload(this)});Oe.downloads.push(t);try{yield t}finally{let n=Oe.downloads.indexOf(t);Oe.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){let t=Zt(e)&&e[0].length>0,n=t?e.length:1,r=t?e[0].length:e.length,s=Kt(),o=s.createBuffer(n,r,s.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(li(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length),n=this.numberOfChannels;for(let r=0;r<n;r++){let s=this.toArray(r);for(let o=0;o<s.length;o++)t[o]+=s[o]}t=t.map(r=>r/n),this.fromArray(t)}return this}toArray(e){if(li(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{let t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){let n=Math.floor(e*this.sampleRate),r=Math.floor(t*this.sampleRate);ge(n<r,"The start time must be less than the end time");let s=r-n,o=Kt().createBuffer(this.numberOfChannels,s,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,r),a);return new Oe(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new Oe().fromArray(e)}static fromUrl(e){return $e(this,void 0,void 0,function*(){return yield new Oe().load(e)})}static load(e){return $e(this,void 0,void 0,function*(){let t=e.match(/\[([^\]\[]+\|.+)\]$/);if(t){let a=t[1].split("|"),c=a[0];for(let l of a)if(Oe.supportsType(l)){c=l;break}e=e.replace(t[0],c)}let n=Oe.baseUrl===""||Oe.baseUrl.endsWith("/")?Oe.baseUrl:Oe.baseUrl+"/",r=yield fetch(n+e);if(!r.ok)throw new Error(`could not load url: ${e}`);let s=yield r.arrayBuffer();return yield Kt().decodeAudioData(s)})}static supportsType(e){let t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return $e(this,void 0,void 0,function*(){for(yield Promise.resolve();Oe.downloads.length;)yield Oe.downloads[0]})}};Oe.baseUrl="";Oe.downloads=[];var Ws=class extends Zi{constructor(){super({clockSource:"offline",context:Us(arguments[0])?arguments[0]:Aw(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Us(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]});this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Us(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return $e(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;let n=Math.floor(this.sampleRate/128);e&&t%n==0&&(yield new Promise(r=>setTimeout(r,1)))}})}render(e=!0){return $e(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(e);let t=yield this._context.startRendering();return new Oe(t)})}close(){return Promise.resolve()}},zu=new Bu,Br=zu;function Kt(){return Br===zu&&Cw&&Ow(new Zi),Br}function Ow(i){qi(i)?Br=new Zi(i):Us(i)?Br=new Ws(i):Br=i}if(hi&&!hi.TONE_SILENCE_LOGGING){let e=` * Tone.js v${Ml} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function kw(i){return Math.pow(10,i/20)}function Vw(i){return 20*(Math.log(i)/Math.LN10)}function Gu(i){return Math.pow(2,i/12)}var qs=440;function Bw(){return qs}function Uw(i){qs=i}function Ba(i){return Math.round(Hu(i))}function Hu(i){return 69+12*Math.log2(i/qs)}function zw(i){return qs*Math.pow(2,(i-69)/12)}var Xs=class extends fn{constructor(e,t,n){super();this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{let n=parseInt(e,10),r=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*r:this._beatsToUnits(4/n)*r},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{let t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let r=0;return e&&e!=="0"&&(r+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(r+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(r+=this._beatsToUnits(parseFloat(n)/4)),r},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof Xs&&this.fromType(this._val),Ft(this._val))return this._noArg();if(dn(this._val)&&Ft(this._units)){for(let e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(ui(this._val)){let e=0;for(let t in this._val)if(be(this._val[t])){let n=this._val[t];e+=new this.constructor(this.context,t).valueOf()*n}return e}if(be(this._units)){let e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return dn(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}},Ot=class extends Xs{constructor(){super(...arguments);this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{let t=new Ot(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){let n=new this.constructor(this.context,e).valueOf(),r=this.valueOf(),a=Math.round(r/n)*n-r;return r+a*t}toNotation(){let e=this.toSeconds(),t=["1m"];for(let s=1;s<9;s++){let o=Math.pow(2,s);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],r=new Ot(this.context,t[0]).toSeconds();return t.forEach(s=>{let o=new Ot(this.context,s).toSeconds();Math.abs(o-e)<Math.abs(r-e)&&(n=s,r=o)}),n}toBarsBeatsSixteenths(){let e=this._beatsToUnits(1),t=this.valueOf()/e;t=parseFloat(t.toFixed(4));let n=Math.floor(t/this._getTimeSignature()),r=t%1*4;t=Math.floor(t)%this._getTimeSignature();let s=r.toString();return s.length>3&&(r=parseFloat(parseFloat(s).toFixed(3))),[n,t,r].join(":")}toTicks(){let e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.round(t*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return Ba(this.toFrequency())}_now(){return this.context.now()}},Nt=class extends Ot{constructor(){super(...arguments);this.name="Frequency",this.defaultUnits="hz"}static get A4(){return Bw()}static set A4(e){Uw(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:Nt.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(e,t){let r=Gw[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?r:Nt.mtof(r)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let r=1;return e&&e!=="0"&&(r*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(r*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(r*=this._beatsToUnits(parseFloat(n)/4)),r}}})}transpose(e){return new Nt(this.context,this.valueOf()*Gu(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return Ba(this.valueOf())}toNote(){let e=this.toFrequency(),t=Math.log2(e/Nt.A4),n=Math.round(12*t)+57,r=Math.floor(n/12);return r<0&&(n+=-12*r),Hw[n%12]+r.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){let e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return zw(e)}static ftom(e){return Ba(e)}},Gw={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},Hw=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],$i=class extends Ot{constructor(){super(...arguments);this.name="TransportTime"}_now(){return this.context.transport.seconds}},vt=class extends fn{constructor(){super();let e=re(vt.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:Kt()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return new Ot(this.context,e).toSeconds()}toFrequency(e){return new Nt(this.context,e).toFrequency()}toTicks(e){return new $i(this.context,e).toTicks()}_getPartialProperties(e){let t=this.get();return Object.keys(t).forEach(n=>{Ft(e[n])&&delete t[n]}),t}get(){let e=Nw(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){let n=this[t];be(n)&&be(n.value)&&be(n.setValueAtTime)?e[t]=n.value:n instanceof vt?e[t]=n._getPartialProperties(e[t]):Zt(n)||li(n)||dn(n)||Tw(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&be(this[t])&&(this[t]&&be(this[t].value)&&be(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof vt?this[t].set(e[t]):this[t]=e[t])}),this}},js=class extends Jt{constructor(e="stopped"){super();this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){let t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return Hn(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){let n=this._search(t);for(let r=n;r>=0;r--){let s=this._timeline[r];if(s.state===e)return s}}getNextState(e,t){let n=this._search(t);if(n!==-1)for(let r=n;r<this._timeline.length;r++){let s=this._timeline[r];if(s.state===e)return s}}},Ge=class extends vt{constructor(){super(re(Ge.getDefaults(),arguments,["param","units","convert"]));this.name="Param",this.overridden=!1,this._minOutput=1e-7;let e=re(Ge.getDefaults(),arguments,["param","units","convert"]);for(ge(be(e.param)&&(di(e.param)||e.param instanceof Ge),"param must be an AudioParam");!di(e.param);)e.param=e.param._param;this._swappable=be(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new Jt(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,be(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(vt.getDefaults(),{convert:!0,units:"number"})}get value(){let e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return be(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-Infinity:this._param.minValue}get maxValue(){return be(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return be(this.maxValue)&&be(this.minValue)&&Hn(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?kw(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?Vw(e):e}setValueAtTime(e,t){let n=this.toSeconds(t),r=this._fromType(e);return ge(isFinite(r)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(r),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:r}),this._param.setValueAtTime(r,n),this}getValueAtTime(e){let t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),r=this._events.get(t),s=this._initialValue;if(r===null)s=this._initialValue;else if(r.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){let o=this._events.getBefore(r.time),a;o===null?a=this._initialValue:a=o.value,r.type==="setTargetAtTime"&&(s=this._exponentialApproach(r.time,a,r.value,r.constant,t))}else if(n===null)s=r.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=r.value;if(r.type==="setTargetAtTime"){let a=this._events.getBefore(r.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?s=this._linearInterpolate(r.time,o,n.time,n.value,t):s=this._exponentialInterpolate(r.time,o,n.time,n.value,t)}else s=r.value;return this._toType(s)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){let n=this._fromType(e),r=this.toSeconds(t);return ge(isFinite(n)&&isFinite(r),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:r,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,r),this._param.linearRampToValueAtTime(n,r),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Qt(n,0)?this._minOutput:n,this._assertRange(n);let r=this.toSeconds(t);return ge(isFinite(n)&&isFinite(r),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:r,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,r),this._param.exponentialRampToValueAtTime(n,r),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);let r=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,r),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){let r=this._fromType(e);ge(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");let s=this.toSeconds(t);return this._assertRange(r),ge(isFinite(r)&&isFinite(s),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:s,type:"setTargetAtTime",value:r}),this.log(this.units,"setTargetAtTime",e,s,n),this._param.setTargetAtTime(r,s,n),this}setValueCurveAtTime(e,t,n,r=1){n=this.toSeconds(n),t=this.toSeconds(t);let s=this._fromType(e[0])*r;this.setValueAtTime(this._toType(s),t);let o=n/(e.length-1);for(let a=1;a<e.length;a++){let c=this._fromType(e[a])*r;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){let t=this.toSeconds(e);return ge(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){let t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));ge(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);let r=this._events.get(t),s=this._events.getAfter(t);return r&&Qt(r.time,t)?s?(this._param.cancelScheduledValues(s.time),this._events.cancel(s.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):s&&(this._param.cancelScheduledValues(s.time),this._events.cancel(s.time),s.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):s.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){let t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);let n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){let r=this._events.getAfter(n.time),s=r?r.time:t+2,o=(s-t)/10;for(let a=t;a<s;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,r=>{r.type==="cancelScheduledValues"?e.cancelScheduledValues(r.time):r.type==="setTargetAtTime"?e.setTargetAtTime(r.value,r.time,r.constant):e[r.type](r.value,r.time)}),this}setParam(e){ge(this._swappable,"The Param must be assigned as 'swappable' in the constructor");let t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,r,s){return n+(t-n)*Math.exp(-(s-e)/r)}_linearInterpolate(e,t,n,r,s){return t+(r-t)*((s-e)/(n-e))}_exponentialInterpolate(e,t,n,r,s){return t*Math.pow(r/t,(s-e)/(n-e))}},Le=class extends vt{constructor(){super(...arguments);this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return be(this.input)?di(this.input)||this.input instanceof Ge?1:this.input.numberOfInputs:0}get numberOfOutputs(){return be(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return be(e)&&(e instanceof Le||Wn(e))}_getInternalNodes(){let e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){let e=this._getInternalNodes();ge(e.length>0,"ToneAudioNode does not have any internal nodes");let t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){let t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return Qi(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Ru("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return Ww(this,e,t,n),this}chain(...e){return Ua(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),be(this.input)&&(this.input instanceof Le?this.input.dispose():Wn(this.input)&&this.input.disconnect()),be(this.output)&&(this.output instanceof Le?this.output.dispose():Wn(this.output)&&this.output.disconnect()),this._internalChannels=[],this}};function Ua(...i){let e=i.shift();i.reduce((t,n)=>(t instanceof Le?t.connect(n):Wn(t)&&Qi(t,n),n),e)}function Qi(i,e,t=0,n=0){for(ge(be(i),"Cannot connect from undefined node"),ge(be(e),"Cannot connect to undefined node"),(e instanceof Le||Wn(e))&&ge(e.numberOfInputs>0,"Cannot connect to node with no inputs"),ge(i.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof Le||e instanceof Ge;)be(e.input)&&(e=e.input);for(;i instanceof Le;)be(i.output)&&(i=i.output);di(e)?i.connect(e,t):i.connect(e,t,n)}function Ww(i,e,t=0,n=0){if(be(e))for(;e instanceof Le;)e=e.input;for(;!Wn(i);)be(i.output)&&(i=i.output);di(e)?i.disconnect(e,t):Wn(e)?i.disconnect(e,t,n):i.disconnect()}var Pt=class extends Le{constructor(){super(re(Pt.getDefaults(),arguments,["gain","units"]));this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;let e=re(Pt.getDefaults(),arguments,["gain","units"]);this.gain=new Ge({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),nt(this,"gain")}static getDefaults(){return Object.assign(Le.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}},fi=class extends Le{constructor(e){super(e);this.onended=Fe,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new Pt({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){let n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(Le.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:Fe})}_startGain(e,t=1){ge(this._startTime===-1,"Source cannot be started more than once");let n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){ge(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();let t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.context.currentTime),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{let n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==Fe&&(this.onended(this),this.onended=Fe,!this.context.isOffline)){let e=()=>this.dispose();typeof window.requestIdleCallback!="undefined"?window.requestIdleCallback(e):setTimeout(e,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),ge(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}},Ur=class extends fi{constructor(){super(re(Ur.getDefaults(),arguments,["offset"]));this.name="ToneConstantSource",this._source=this.context.createConstantSource();let e=re(Ur.getDefaults(),arguments,["offset"]);Qi(this._source,this._gainNode),this.offset=new Ge({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(fi.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){let t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}},Qe=class extends Le{constructor(){super(re(Qe.getDefaults(),arguments,["value","units"]));this.name="Signal",this.override=!0;let e=re(Qe.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new Ur({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Le.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return za(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,r){return this._param.setValueCurveAtTime(e,t,n,r),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}};function za(i,e,t,n){(e instanceof Ge||di(e)||e instanceof Qe&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof Qe&&(e.overridden=!0)),Qi(i,e,t,n)}var zr=class extends Ge{constructor(){super(re(zr.getDefaults(),arguments,["value"]));this.name="TickParam",this._events=new Jt(Infinity),this._multiplier=1;let e=re(zr.getDefaults(),arguments,["value"]);this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Ge.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);let r=this._fromType(e),s=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){let c=n*a+t,l=this._exponentialApproach(s.time,s.value,r,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){let n=this.toSeconds(t);super.setValueAtTime(e,t);let r=this._events.get(n),s=this._events.previousEvent(r),o=this._getTicksUntilEvent(s,n);return r.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){let n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);let r=this._events.get(n),s=this._events.previousEvent(r),o=this._getTicksUntilEvent(s,n);return r.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);let n=this._fromType(e),r=this._events.get(t),s=Math.round(Math.max((t-r.time)*10,1)),o=(t-r.time)/s;for(let a=0;a<=s;a++){let c=o*a+r.time,l=this._exponentialInterpolate(r.time,r.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Ft(e.ticks)){let o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}let n=this._fromType(this.getValueAtTime(e.time)),r=this._fromType(this.getValueAtTime(t)),s=this._events.get(t);return s&&s.time===t&&s.type==="setValueAtTime"&&(r=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+r)+e.ticks}getTicksAtTime(e){let t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(t);return this.getTimeOfTick(r+e)-n}getTimeOfTick(e){let t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){let r=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-r)/(n.time-t.time),a=Math.sqrt(Math.pow(r,2)-2*o*(t.ticks-e)),c=(-r+a)/o,l=(-r-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?Infinity:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){let n=this.toSeconds(t),r=this.toSeconds(e),s=this.getTicksAtTime(n);return this.getTicksAtTime(n+r)-s}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){let t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}},Gr=class extends Qe{constructor(){super(re(Gr.getDefaults(),arguments,["value"]));this.name="TickSignal";let e=re(Gr.getDefaults(),arguments,["value"]);this.input=this._param=new zr({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(Qe.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}},Hr=class extends vt{constructor(){super(re(Hr.getDefaults(),arguments,["frequency"]));this.name="TickSource",this._state=new js,this._tickOffset=new Jt;let e=re(Hr.getDefaults(),arguments,["frequency"]);this.frequency=new Gr({context:this.context,units:e.units,value:e.frequency}),nt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},vt.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){let n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),be(t)&&this.setTicksAtTime(t,n)),this}stop(e){let t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){let n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&this._state.setStateAtTime("paused",t),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this}getTicksAtTime(e){let t=this.toSeconds(e),n=this._state.getLastState("stopped",t),r={state:"paused",time:t};this._state.add(r);let s=n,o=0;return this._state.forEachBetween(n.time,t+this.sampleTime,a=>{let c=s.time,l=this._tickOffset.get(a.time);l&&l.time>=s.time&&(o=l.ticks,c=l.time),s.state==="started"&&a.state!=="started"&&(o+=this.frequency.getTicksAtTime(a.time)-this.frequency.getTicksAtTime(c)),s=a}),this._state.remove(r),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){let t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);let t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);let r=t,s=0;return this._state.forEachBetween(t.time,e+this.sampleTime,o=>{let a=r.time,c=this._tickOffset.get(o.time);c&&c.time>=r.time&&(s=c.seconds,a=c.time),r.state==="started"&&o.state!=="started"&&(s+=o.time-a),r=o}),this._state.remove(n),s}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){let n=this._tickOffset.get(t),r=this._state.get(t),s=Math.max(n.time,r.time),o=this.frequency.getTicksAtTime(s)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let r=this._state.get(e);this._state.forEachBetween(e,t,o=>{r&&r.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(r.time,e),o.time-this.sampleTime,n),r=o});let s=null;if(r&&r.state==="started"){let o=Math.max(r.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(r.time),l=a-c,u=Math.ceil(l)-l;u=Qt(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){s=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(s)throw s;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}},Ji=class extends vt{constructor(){super(re(Ji.getDefaults(),arguments,["callback","frequency"]));this.name="Clock",this.callback=Fe,this._lastUpdate=0,this._state=new js("stopped"),this._boundLoop=this._loop.bind(this);let e=re(Ji.getDefaults(),arguments,["callback","frequency"]);this.callback=e.callback,this._tickSource=new Hr({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,nt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(vt.getDefaults(),{callback:Fe,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Du(this.context);let n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){let t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){let n=this.toSeconds(t),r=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(r+e,n)}_loop(){let e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":let r=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,r);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,r)=>{this.callback(n,r)}))}getStateAtTime(e){let t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};Yi.mixin(Ji);var Ys=class extends fn{constructor(){super();this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;let e=re(Ys.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;let n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:Fe,onload:Fe,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return ge(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=Fe,r=Fe){return dn(t)?this._buffers.set(e.toString(),new Oe(this.baseUrl+t,n,r)):this._buffers.set(e.toString(),new Oe(t,n,r)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}},pn=class extends $i{constructor(){super(...arguments);this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}},Wu=class extends vt{constructor(){super(...arguments);this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Jt,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){let e=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=e;){let t=this._events.shift();t&&e-t.time<=this.expiration&&t.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}};Gs(i=>{i.draw=new Wu({context:i})});Hs(i=>{i.draw.dispose()});var qu=class extends fn{constructor(){super(...arguments);this.name="IntervalTimeline",this._root=null,this._length=0}add(e){ge(be(e.time),"Events must have a time property"),ge(be(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new Xu(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){let t=[];this._root.search(e.time,t);for(let n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{let t=e.getBalance(),n,r=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,r=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,r=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,r=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,r=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),r&&this._rebalance(r)}e.dispose()}_rotateLeft(e){let t=e.parent,n=e.isLeftChild(),r=e.right;r&&(e.right=r.left,r.left=e),t!==null?n?t.left=r:t.right=r:this._setRoot(r)}_rotateRight(e){let t=e.parent,n=e.isLeftChild(),r=e.left;r&&(e.left=r.right,r.right=e),t!==null?n?t.left=r:t.right=r:this._setRoot(r)}_rebalance(e){let t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){let t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let r=1;r<t.length;r++)t[r].low>n.low&&(n=t[r]);return n.event}}return null}forEach(e){if(this._root!==null){let t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){let n=[];this._root.search(e,n),n.forEach(r=>{r.event&&t(r.event)})}return this}forEachFrom(e,t){if(this._root!==null){let n=[];this._root.searchAfter(e,n),n.forEach(r=>{r.event&&t(r.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}},Xu=class{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}},pi=class extends Le{constructor(){super(re(pi.getDefaults(),arguments,["volume"]));this.name="Volume";let e=re(pi.getDefaults(),arguments,["volume"]);this.input=this.output=new Pt({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,nt(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(Le.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-Infinity}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-Infinity):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}},Wr=class extends Le{constructor(){super(re(Wr.getDefaults(),arguments));this.name="Destination",this.input=new pi({context:this.context}),this.output=new Pt({context:this.context}),this.volume=this.input.volume;let e=re(Wr.getDefaults(),arguments);Ua(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Le.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),Ua(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}};Gs(i=>{i.destination=new Wr({context:i})});Hs(i=>{i.destination.dispose()});var ju=class extends fn{constructor(e){super();this.name="TimelineValue",this._timeline=new Jt({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){let t=this._timeline.get(e);return t?t.value:this._initialValue}},En=class{constructor(e,t){this.id=En._eventId++;let n=Object.assign(En.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=n.time}static getDefaults(){return{callback:Fe,once:!1,time:0}}invoke(e){this.callback&&(this.callback(e),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}};En._eventId=0;var Zs=class extends En{constructor(e,t){super(e,t);this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);let n=Object.assign(Zs.getDefaults(),t);this.duration=new pn(e.context,n.duration).valueOf(),this._interval=new pn(e.context,n.interval).valueOf(),this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},En.getDefaults(),{duration:Infinity,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvents(e){let t=this.transport.getTicksAtTime(e);t>=this.time&&t>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new pn(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;let t=this.transport.getTicksAtTime(e);t>this.time&&(this._nextTick=this.time+Math.ceil((t-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new pn(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new pn(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}},Ki=class extends vt{constructor(){super(re(Ki.getDefaults(),arguments));this.name="Transport",this._loop=new ju(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Jt,this._repeatedEvents=new qu,this._syncedSignals=[],this._swingAmount=0;let e=re(Ki.getDefaults(),arguments);this._ppq=e.ppq,this._clock=new Ji({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),nt(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(vt.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!=0&&t%(this._swingTicks*2)!=0){let n=t%(this._swingTicks*2)/(this._swingTicks*2),r=Math.sin(n*Math.PI)*this._swingAmount;e+=new pn(this.context,this._swingTicks*2/3).toSeconds()*r}this._timeline.forEachAtTime(t,n=>n.invoke(e))}schedule(e,t){let n=new En(this,{callback:e,time:new $i(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,r=Infinity){let s=new Zs(this,{callback:e,duration:new Ot(this.context,r).toTicks(),interval:new Ot(this.context,t).toTicks(),time:new $i(this.context,n).toTicks()});return this._addEvent(s,this._repeatedEvents)}scheduleOnce(e,t){let n=new En(this,{callback:e,once:!0,time:new $i(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){let t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){let t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new pn(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){let n;return be(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){Zt(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new Ot(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new Ot(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new pn(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){let e=this.now(),t=this._clock.getTicksAtTime(e);return new pn(this.context,t).toBarsBeatsSixteenths()}set position(e){let t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){let t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){let e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){let t=this.now();if(this.state==="started"){let n=this._clock.getTicksAtTime(t),r=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),s=t+r;this.emit("stop",s),this._clock.setTicksAtTime(e,s),this.emit("start",s,this._clock.getSecondsAtTime(s))}else this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return Math.round(this._clock.getTicksAtTime(e))}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{let t=this.now(),n=this.getTicksAtTime(t),r=e-n%e;return this._clock.nextTickTime(r,t)}}syncSignal(e,t){if(!t){let r=this.now();if(e.getValueAtTime(r)!==0){let s=this.bpm.getValueAtTime(r),o=1/(60/s/this.PPQ);t=e.getValueAtTime(r)/o}else t=0}let n=new Pt(t);return this.bpm.connect(n),n.connect(e._param),this._syncedSignals.push({initial:e.value,ratio:n,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){let n=this._syncedSignals[t];n.signal===e&&(n.ratio.dispose(),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Uu(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}};Yi.mixin(Ki);Gs(i=>{i.transport=new Ki({context:i})});Hs(i=>{i.transport.dispose()});var At=class extends Le{constructor(e){super(e);this.input=void 0,this._state=new js("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=Fe,this._syncedStop=Fe,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new pi({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,nt(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(Le.getDefaults(),{mute:!1,onstop:Fe,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let r=Ft(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(r=this._clampToCurrentTime(r),!this._synced&&this._state.getValueAtTime(r)==="started")ge(zs(r,this._state.get(r).time),"Start time must be strictly greater than previous start time"),this._state.cancel(r),this._state.setStateAtTime("started",r),this.log("restart",r),this.restart(r,t,n);else if(this.log("start",r),this._state.setStateAtTime("started",r),this._synced){let s=this._state.get(r);s&&(s.offset=this.toSeconds(ji(t,0)),s.duration=n?this.toSeconds(n):void 0);let o=this.context.transport.schedule(a=>{this._start(a,t,n)},r);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>r&&this._syncedStart(this.now(),this.context.transport.seconds)}else Du(this.context),this._start(r,t,n);return this}stop(e){let t=Ft(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||be(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{let n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(t>0){let n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){let r=t-this.toSeconds(n.time),s;n.duration&&(s=this.toSeconds(n.duration)-r),this._start(e,this.toSeconds(n.offset)+r,s)}}},this._syncedStop=e=>{let t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=Fe,this.unsync(),this._volume.dispose(),this._state.dispose(),this}},er=class extends fi{constructor(){super(re(er.getDefaults(),arguments,["url","onload"]));this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;let e=re(er.getDefaults(),arguments,["url","onload"]);Qi(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Ge({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new Oe(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(fi.getDefaults(),{url:new Oe,loop:!1,loopEnd:0,loopStart:0,onload:Fe,onerror:Fe,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,r=1){ge(this.buffer.loaded,"buffer is either not set or not loaded");let s=this.toSeconds(e);this._startGain(s,r),this.loop?t=ji(t,this.loopStart):t=ji(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){let a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;ka(o,a)&&(o=(o-c)%l+c),Qt(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Ou(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(s,o)),be(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(s+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}};function mi(i,e){return $e(this,void 0,void 0,function*(){let t=e/i.context.sampleRate,n=new Ws(1,t,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}var qr=class extends fi{constructor(){super(re(qr.getDefaults(),arguments,["frequency","type"]));this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];let e=re(qr.getDefaults(),arguments,["frequency","type"]);Qi(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new Ge({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new Ge({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),nt(this,["frequency","detune"])}static getDefaults(){return Object.assign(fi.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){let t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}},He=class extends At{constructor(){super(re(He.getDefaults(),arguments,["frequency","type"]));this.name="Oscillator",this._oscillator=null;let e=re(He.getDefaults(),arguments,["frequency","type"]);this.frequency=new Qe({context:this.context,units:"frequency",value:e.frequency}),nt(this,"frequency"),this.detune=new Qe({context:this.context,units:"cents",value:e.detune}),nt(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(At.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){let t=this.toSeconds(e),n=new qr({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){let t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){let t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return He._periodicWaveCache.find(t=>t.phase===this._phase&&Dw(t.partials,this._partials));{let e=He._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;let t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{let n=this._getCachedPeriodicWave();if(be(n)){let{partials:r,wave:s}=n;this._wave=s,this._partials=r,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{let[r,s]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(r,s);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),He._periodicWaveCache.push({imag:s,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:r,type:this._type,wave:this._wave}),He._periodicWaveCache.length>100&&He._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){Hn(e,0);let t=this._type,n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{let r=new Float32Array(e);this._partials.forEach((s,o)=>r[o]=s),this._partials=Array.from(r),this.type=this._type}}_getRealImaginary(e,t){let r=4096/2,s=new Float32Array(r),o=new Float32Array(r),a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,r=a,this._partials.length===0)return[s,o]}else{let c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),r=a):this._partialCount=0,this._partials=[]}for(let c=1;c<r;++c){let l=2/(c*Math.PI),u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(s[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(s[c]=0,o[c]=0)}return[s,o]}_inverseFFT(e,t,n){let r=0,s=e.length;for(let o=0;o<s;o++)r+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return r}getInitialValue(){let[e,t]=this._getRealImaginary(this._type,0),n=0,r=Math.PI*2,s=32;for(let o=0;o<s;o++)n=Math.max(this._inverseFFT(e,t,o/s*r),n);return Pw(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}};He._periodicWaveCache=[];var Xr=class extends Le{constructor(){super(Object.assign(re(Xr.getDefaults(),arguments,["context"])))}connect(e,t=0,n=0){return za(this,e,t,n),this}},tr=class extends Xr{constructor(){super(Object.assign(re(tr.getDefaults(),arguments,["mapping","length"])));this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;let e=re(tr.getDefaults(),arguments,["mapping","length"]);Zt(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):Sw(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(Qe.getDefaults(),{length:1024})}setMap(e,t=1024){let n=new Float32Array(t);for(let r=0,s=t;r<s;r++){let o=r/(s-1)*2-1;n[r]=e(o,r)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){let t=["none","2x","4x"].some(n=>n.includes(e));ge(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}},Yu=class extends Xr{constructor(){super(...arguments);this.name="AudioToGain",this._norm=new tr({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}},qn=class extends Qe{constructor(){super(Object.assign(re(qn.getDefaults(),arguments,["value"])));this.name="Multiply",this.override=!1;let e=re(qn.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new Pt({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Qe.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}},nr=class extends At{constructor(){super(re(nr.getDefaults(),arguments,["frequency","type","modulationType"]));this.name="AMOscillator",this._modulationScale=new Yu({context:this.context}),this._modulationNode=new Pt({context:this.context});let e=re(nr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new He({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new He({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new qn({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),nt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(He.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}},ir=class extends At{constructor(){super(re(ir.getDefaults(),arguments,["frequency","type","modulationType"]));this.name="FMOscillator",this._modulationNode=new Pt({context:this.context,gain:0});let e=re(ir.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new He({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new Qe({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new He({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new qn({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new qn({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),nt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(He.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}},gi=class extends At{constructor(){super(re(gi.getDefaults(),arguments,["frequency","width"]));this.name="PulseOscillator",this._widthGate=new Pt({context:this.context,gain:0}),this._thresh=new tr({context:this.context,mapping:t=>t<=0?-1:1});let e=re(gi.getDefaults(),arguments,["frequency","width"]);this.width=new Qe({context:this.context,units:"audioRange",value:e.width}),this._triangle=new He({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),nt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(At.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}},rr=class extends At{constructor(){super(re(rr.getDefaults(),arguments,["frequency","type","spread"]));this.name="FatOscillator",this._oscillators=[];let e=re(rr.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new Qe({context:this.context,units:"frequency",value:e.frequency}),this.detune=new Qe({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,nt(this,["frequency","detune"])}static getDefaults(){return Object.assign(He.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){let t=-e/2,n=e/(this._oscillators.length-1);this._forEach((r,s)=>r.detune.value=t+n*s)}}get count(){return this._oscillators.length}set count(e){if(Hn(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){let n=new He({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):Fe});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}},sr=class extends At{constructor(){super(re(sr.getDefaults(),arguments,["frequency","modulationFrequency"]));this.name="PWMOscillator",this.sourceType="pwm",this._scale=new qn({context:this.context,value:2});let e=re(sr.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new gi({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new He({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),nt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(At.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}},Zu={am:nr,fat:rr,fm:ir,oscillator:He,pulse:gi,pwm:sr},or=class extends At{constructor(){super(re(or.getDefaults(),arguments,["frequency","type"]));this.name="OmniOscillator";let e=re(or.getDefaults(),arguments,["frequency","type"]);this.frequency=new Qe({context:this.context,units:"frequency",value:e.frequency}),this.detune=new Qe({context:this.context,units:"cents",value:e.detune}),nt(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(He.getDefaults(),ir.getDefaults(),nr.getDefaults(),rr.getDefaults(),gi.getDefaults(),sr.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;let t=Zu[e],n=this.now();if(this._oscillator){let r=this._oscillator;r.stop(n),this.context.setTimeout(()=>r.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Zu[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&li(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&li(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&dn(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(e=1024){return $e(this,void 0,void 0,function*(){return mi(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}};function $u(i,e=Infinity){let t=new WeakMap;return function(n,r){Reflect.defineProperty(n,r,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(s){Hn(s,i,e),t.set(this,s)}})}}function An(i,e=Infinity){let t=new WeakMap;return function(n,r){Reflect.defineProperty(n,r,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(s){Hn(this.toSeconds(s),i,e),t.set(this,s)}})}}var ar=class extends At{constructor(){super(re(ar.getDefaults(),arguments,["url","onload"]));this.name="Player",this._activeSources=new Set;let e=re(ar.getDefaults(),arguments,["url","onload"]);this._buffer=new Oe({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(At.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:Fe,onerror:Fe,playbackRate:1,reverse:!1})}load(e){return $e(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=Fe){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=ji(t,this._loopStart):t=ji(t,0);let r=this.toSeconds(t),s=n;n=ji(n,Math.max(this._buffer.duration-r,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);let a=new er({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Ft(s)?a.start(e,r):a.start(e,r,o-this.toSeconds(this.fadeOut))}_stop(e){let t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){this._stop(e),this._start(e,t,n)}seek(e,t){let n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){let r=this.toSeconds(e);this._stop(n),this._start(n,r)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&Hn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&Hn(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){let t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;let t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(r=>r.cancelStop())),this._activeSources.forEach(r=>{r.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}};$t([An(0)],ar.prototype,"fadeIn",void 0);$t([An(0)],ar.prototype,"fadeOut",void 0);var mn=class extends Le{constructor(){super(re(mn.getDefaults(),arguments,["attack","decay","sustain","release"]));this.name="Envelope",this._sig=new Qe({context:this.context,value:0}),this.output=this._sig,this.input=void 0;let e=re(mn.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(Le.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(dn(e))return e;{let n;for(n in $s)if($s[n][t]===e)return n;return e}}_setCurve(e,t,n){if(dn(n)&&Reflect.has($s,n)){let r=$s[n];ui(r)?e!=="_decayCurve"&&(this[e]=r[t]):this[e]=r}else if(Zt(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._decayCurve}set decayCurve(e){ge(["linear","exponential"].some(t=>t===e),`Invalid envelope curve: ${e}`),this._decayCurve=e}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let r=this.toSeconds(this.attack),s=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){let a=1/r;r=(1-o)/a}if(r<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,r,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,r,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,r,t)}if(s&&this.sustain<1){let a=t*this.sustain,c=e+r;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,s+c):this._sig.exponentialApproachValueAtTime(a,c,s)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);let t=this.getValueAtTime(e);if(t>0){let n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(ge(Zt(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return za(this,e,t,n),this}asArray(e=1024){return $e(this,void 0,void 0,function*(){let t=e/this.context.sampleRate,n=new Ws(1,t,this.context.sampleRate),r=this.toSeconds(this.attack)+this.toSeconds(this.decay),s=r+this.toSeconds(this.release),o=s*.1,a=s+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(r+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}};$t([An(0)],mn.prototype,"attack",void 0);$t([An(0)],mn.prototype,"decay",void 0);$t([$u(0,1)],mn.prototype,"sustain",void 0);$t([An(0)],mn.prototype,"release",void 0);var $s=(()=>{let i=128,e,t,n=[];for(e=0;e<i;e++)n[e]=Math.sin(e/(i-1)*(Math.PI/2));let r=[],s=6.4;for(e=0;e<i-1;e++){t=e/(i-1);let d=Math.sin(t*(Math.PI*2)*s-Math.PI/2)+1;r[e]=d/10+t*.83}r[i-1]=1;let o=[],a=5;for(e=0;e<i;e++)o[e]=Math.ceil(e/(i-1)*a)/a;let c=[];for(e=0;e<i;e++)t=e/(i-1),c[e]=.5*(1-Math.cos(Math.PI*t));let l=[];for(e=0;e<i;e++){t=e/(i-1);let d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){let f=new Array(d.length);for(let g=0;g<d.length;g++)f[g]=1-d[g];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:r,Out:u(r)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})(),Xn=class extends Le{constructor(){super(re(Xn.getDefaults(),arguments));this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;let e=re(Xn.getDefaults(),arguments);this._volume=this.output=new pi({context:this.context,volume:e.volume}),this.volume=this._volume.volume,nt(this,"volume")}static getDefaults(){return Object.assign(Le.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){let n=this["_original_"+e]=this[e];this[e]=(...r)=>{let s=r[t],o=this.context.transport.schedule(a=>{r[t]=a,n.apply(this,r)},s);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(e,t,n,r){let s=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,s,r),this.triggerRelease(s+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}},jn=class extends Xn{constructor(){super(re(jn.getDefaults(),arguments));let e=re(jn.getDefaults(),arguments);this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(Xn.getDefaults(),{detune:0,onsilence:Fe,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);let r=this.toSeconds(t);return this._triggerEnvelopeAttack(r,n),this.setNote(e,r),this}triggerRelease(e){this.log("triggerRelease",e);let t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){let n=this.toSeconds(t),r=e instanceof Nt?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){let s=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(r,s,n)}else this.frequency.setValueAtTime(r,n);return this}};$t([An(0)],jn.prototype,"portamento",void 0);var Qs=class extends mn{constructor(){super(re(Qs.getDefaults(),arguments,["attack","decay","sustain","release"]));this.name="AmplitudeEnvelope",this._gainNode=new Pt({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}},cr=class extends jn{constructor(){super(re(cr.getDefaults(),arguments));this.name="Synth";let e=re(cr.getDefaults(),arguments);this.oscillator=new or(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Qs(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),nt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(jn.getDefaults(),{envelope:Object.assign(Fu(mn.getDefaults(),Object.keys(Le.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Fu(or.getDefaults(),[...Object.keys(At.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){let n=this.toSeconds(this.envelope.attack),r=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+r)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}},lr=class extends cr{constructor(){super(re(lr.getDefaults(),arguments));this.name="MembraneSynth",this.portamento=0;let e=re(lr.getDefaults(),arguments);this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,nt(this,["oscillator","envelope"])}static getDefaults(){return Xi(jn.getDefaults(),cr.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){let n=this.toSeconds(t),r=this.toFrequency(e instanceof Nt?e.toFrequency():e),s=r*this.octaves;return this.oscillator.frequency.setValueAtTime(s,n),this.oscillator.frequency.exponentialRampToValueAtTime(r,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}};$t([$u(0)],lr.prototype,"octaves",void 0);$t([An(0)],lr.prototype,"pitchDecay",void 0);var Qu=new Set;function Ga(i){Qu.add(i)}function Ju(i,e){let t=`registerProcessor("${i}", ${e})`;Qu.add(t)}var qw=`
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
`;Ga(qw);var Xw=`
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
`;Ga(Xw);var jw=`
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
`;Ga(jw);var Yw="feedback-comb-filter",Zw=`
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
`;Ju(Yw,Zw);var ur=class extends Xn{constructor(){super(re(ur.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"));this.name="Sampler",this._activeSources=new Map;let e=re(ur.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(n=>{let r=parseInt(n,10);if(ge(Bs(n)||li(r)&&isFinite(r),`url key is neither a note or midi pitch: ${n}`),Bs(n)){let s=new Nt(this.context,n).toMidi();t[s]=e.urls[n]}else li(r)&&isFinite(r)&&(t[r]=e.urls[r])}),this._buffers=new Ys({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(Xn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:Fe,onerror:Fe,release:.1,urls:{}})}_findClosest(e){let t=96,n=0;for(;n<t;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(r=>{let s=Hu(new Nt(this.context,r).toFrequency()),o=Math.round(s),a=s-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=Gu(c+a),d=new er({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),Zt(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){let f=this._activeSources.get(o),g=f.indexOf(d);g!==-1&&f.splice(g,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{let r=new Nt(this.context,n).toMidi();if(this._activeSources.has(r)&&this._activeSources.get(r).length){let s=this._activeSources.get(r);t=this.toSeconds(t),s.forEach(o=>{o.stop(t)}),this._activeSources.set(r,[])}}),this}releaseAll(e){let t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,r=1){let s=this.toSeconds(n);return this.triggerAttack(e,s,r),Zt(t)?(ge(Zt(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{let c=t[Math.min(a,t.length-1)];this.triggerRelease(o,s+this.toSeconds(c))})):this.triggerRelease(e,s+this.toSeconds(t)),this}add(e,t,n){if(ge(Bs(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Bs(e)){let r=new Nt(this.context,e).toMidi();this._buffers.add(r,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}};$t([An(0)],ur.prototype,"attack",void 0);$t([An(0)],ur.prototype,"release",void 0);var $w="bit-crusher",Qw=`
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
`;Ju($w,Qw);var Ku=class extends Le{constructor(){super(...arguments);this.name="Listener",this.positionX=new Ge({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Ge({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Ge({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Ge({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Ge({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Ge({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Ge({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Ge({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Ge({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Le.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}};Gs(i=>{i.listener=new Ku({context:i})});Hs(i=>{i.listener.dispose()});var Wb=Kt().transport,qb=Kt().destination,Xb=Kt().destination,jb=Kt().listener,Yb=Kt().draw,Zb=Kt();var{floor:Jw,random:Kw}=Math;function eb(i){return Jw(Kw()*(i+1))}var Js=eb;function tb(i,e){let[t,n]=i.map(r=>r.split(" ").indexOf(e)).flatMap((r,s)=>r>=0?[r,s]:[]);return t>=0?[t,n]:[]}var Ha=tb;var nb={default:["` 1 2 3 4 5 6 7 8 9 0 - = Backspace","Tab q w e r t y u i o p [ ] \\","CapsLock a s d f g h j k l ; ' Enter","Shift z x c v b n m , . /"],shift:["~ ! @ # $ % ^ & * ( ) _ + Backspace","Tab Q W E R T Y U I O P { } |",'CapsLock A S D F G H J K L : " Enter',"Shift Z X C V B N M < > ?"]},Wa=nb;var ib=["red","green","blue","cyan","magenta","yellow"],qa=ib;var en=document.body,jr=new Lr,hr=new Mt,kt={colum:14,row:4},dr=new Ae(NaN,NaN),Xa=Array.from({length:kt.colum*kt.row},(i,e)=>{let t=new Er,n=new ri({opacity:0}),r=new It(t,n),s=`${"CDEFGAB"[e%7]}${Math.floor(e/7)}`;return r.userData.osc=new He(s,"square").toDestination(),r}),ja=new Ne,fr=ja.domElement,eh=new sa;function Ya(){ja.render(jr,hr)}function rb(i){i.start(),i.stop("+0.05")}function th(){eh.setFromCamera(dr,hr);let[i]=eh.intersectObjects(Xa);if(!i)return;try{rb(i.object.userData.osc)}catch{}let e=qa[Js(qa.length-1)],t=new Er(1,1),n=new ri({color:e}),r=new It(t,n),s=()=>.05*(Math.random()-.5);r.scale.set(.075+s(),.075+s(),0),Object.assign(r.position,i.point),jr.add(r),Ya(),window.requestAnimationFrame(Ya)}function sb({key:i}){if(i===" ")return nh();let[e=Js(kt.colum-1),t=Js(kt.row-1)]=[...Ha(Wa.default,i),...Ha(Wa.shift,i)],n=()=>Math.random()-.5;dr.x=(e+n())/(kt.colum-1)*2-1,dr.y=-((t+n())/(kt.row-1))*2+1,th()}function Ks(i){let e=()=>.2*(Math.random()-.5);dr.x=i.clientX/fr.clientWidth*2-1+e(),dr.y=-(i.clientY/fr.clientHeight)*2+1+e(),th()}function ih(i){i.preventDefault(),[...i.touches].map(Ks)}function ob(){dr.set(NaN,NaN)}function ab(){let i=hr.aspect/kt.colum,e=1/kt.row;for(let[t,n]of Xa.entries())n.scale.set(i,e,1),Object.assign(n.position,{x:i*(t%kt.colum-(kt.colum-1)/2),y:e*(Math.floor(t/kt.colum)-(kt.row-1)/2)})}function rh(){ja.setSize(window.innerWidth,window.innerHeight),hr.aspect=fr.clientWidth/fr.clientHeight,hr.updateProjectionMatrix(),ab(),Ya()}function nh(){jr.background=new Ce,jr.clear(),jr.add(...Xa),hr.position.z=1,rh()}function cb(){Object.assign(fr.style,{width:"100%",height:"100%"}),en.addEventListener("keydown",sb),en.addEventListener("touchstart",ih,{passive:!1}),en.addEventListener("touchmove",ih,{passive:!1}),en.addEventListener("mousedown",Ks),en.addEventListener("mousedown",()=>{en.addEventListener("mousemove",Ks)});for(let i of["mouseup","mouseleave"])en.addEventListener(i,()=>{en.removeEventListener("mousemove",Ks)});for(let i of["keyup","mouseup","mouseleave","touchend"])en.addEventListener(i,ob);en.appendChild(fr),Object.assign(en.style,{overflow:"hidden",overscrollBehavior:"none"}),window.addEventListener("resize",rh),nh()}cb();
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
