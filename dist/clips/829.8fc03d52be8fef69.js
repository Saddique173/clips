var ke=Object.defineProperty,ae=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,ge=(m,f,s)=>f in m?ke(m,f,{enumerable:!0,configurable:!0,writable:!0,value:s}):m[f]=s,le=(m,f)=>{for(var s in f||(f={}))me.call(f,s)&&ge(m,s,f[s]);if(ae)for(var s of ae(f))he.call(f,s)&&ge(m,s,f[s]);return m},ve=(m,f)=>{var s={};for(var h in m)me.call(m,h)&&f.indexOf(h)<0&&(s[h]=m[h]);if(null!=m&&ae)for(var h of ae(m))f.indexOf(h)<0&&he.call(m,h)&&(s[h]=m[h]);return s};(self.webpackChunkclips=self.webpackChunkclips||[]).push([[829],{3327:(m,f,s)=>{"use strict";s.r(f),s.d(f,{defaultOptions:()=>x,fetchFile:()=>Q,getCreateFFmpegCore:()=>F});const x={corePath:`https://unpkg.com/@ffmpeg/core@${s(3681).devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};var y=s(5861),C=s(6945),e=s(3630);const M=function(){var B=(0,y.Z)(function*(b,A){(0,C.log)("info",`fetch ${b}`);const v=yield(yield fetch(b)).arrayBuffer();(0,C.log)("info",`${b} file size = ${v.byteLength} bytes`);const T=new Blob([v],{type:A}),D=URL.createObjectURL(T);return(0,C.log)("info",`${b} blob URL = ${D}`),D});return function(A,v){return B.apply(this,arguments)}}(),F=function(){var B=(0,y.Z)(function*({corePath:b,workerPath:A,wasmPath:v}){if("undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope){if("string"!=typeof b)throw Error("corePath should be a string!");const $=new URL(b,"file:///C:/Users/admin/MyProj/clips/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,P=yield M($,"application/javascript"),O=yield M(void 0!==v?v:$.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),j=yield M(void 0!==A?A:$.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return"undefined"==typeof createFFmpegCore?new Promise(V=>{if(globalThis.importScripts(P),"undefined"==typeof createFFmpegCore)throw Error((0,e.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)($));(0,C.log)("info","ffmpeg-core.js script loaded"),V({createFFmpegCore,corePath:P,wasmPath:O,workerPath:j})}):((0,C.log)("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:P,wasmPath:O,workerPath:j}))}if("string"!=typeof b)throw Error("corePath should be a string!");const T=new URL(b,"file:///C:/Users/admin/MyProj/clips/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,D=yield M(T,"application/javascript"),G=yield M(void 0!==v?v:T.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),J=yield M(void 0!==A?A:T.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return"undefined"==typeof createFFmpegCore?new Promise($=>{const P=document.createElement("script"),O=()=>{if(P.removeEventListener("load",O),"undefined"==typeof createFFmpegCore)throw Error((0,e.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(T));(0,C.log)("info","ffmpeg-core.js script loaded"),$({createFFmpegCore,corePath:D,wasmPath:G,workerPath:J})};P.src=D,P.type="text/javascript",P.addEventListener("load",O),document.getElementsByTagName("head")[0].appendChild(P)}):((0,C.log)("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:D,wasmPath:G,workerPath:J}))});return function(A){return B.apply(this,arguments)}}(),Q=function(){var B=(0,y.Z)(function*(b){let A=b;return void 0===b?new Uint8Array:("string"==typeof b?A=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(b)?atob(b.split(",")[1]).split("").map(v=>v.charCodeAt(0)):yield(yield fetch(new URL(b,"file:///C:/Users/admin/MyProj/clips/node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js").href)).arrayBuffer():(b instanceof File||b instanceof Blob)&&(A=yield(B=>new Promise((b,A)=>{const v=new FileReader;v.onload=()=>{b(v.result)},v.onerror=({target:{error:{code:T}}})=>{A(Error(`File could not be read! Code=${T}`))},v.readAsArrayBuffer(B)}))(b)),new Uint8Array(A))});return function(A){return B.apply(this,arguments)}}()},6151:m=>{m.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}}},9639:(m,f,s)=>{var h=s(8926).default;const{defaultArgs:Z,baseOptions:x}=s(6151),y=s(8333),{defaultOptions:C,getCreateFFmpegCore:e}=s(3327),{version:M}=s(3681),F=Error("ffmpeg.wasm is not ready, make sure you have completed load().");m.exports=(_={})=>{const k=le(le(le({},x),C),_),{log:Q,progress:b}=k,A=ve(k,["log","logger","progress"]);let v=null,T=null,D=null,G=null,J=!1,$=()=>{},P=Q,O=b,j=0,V=0,U=!1,z=0;const H=(p,g)=>{$({type:p,message:g}),P&&console.log(`[${p}] ${g}`)},X=p=>{const[g,S,L]=p.split(":");return 60*parseFloat(g)*60+60*parseFloat(S)+parseFloat(L)},K=({type:p,message:g})=>{H(p,g),((p,g)=>{if("string"==typeof p)if(p.startsWith("  Duration")){const S=p.split(", ")[0].split(": ")[1],L=X(S);g({duration:L,ratio:z}),(0===j||j>L)&&(j=L,U=!0)}else if(U&&p.startsWith("    Stream")){const S=p.match(/([\d.]+) fps/);if(S){const L=parseFloat(S[1]);V=j*L}else V=0;U=!1}else if(p.startsWith("frame")||p.startsWith("size")){const S=p.split("time=")[1].split(" ")[0],L=X(S),Y=p.match(/frame=\s*(\d+)/);if(V&&Y){const W=parseFloat(Y[1]);z=Math.min(W/V,1)}else z=L/j;g({ratio:z,time:L})}else p.startsWith("video:")&&(g({ratio:1}),j=0)})(g,O),(p=>{"FFMPEG_END"===p&&null!==D&&(D(),D=null,G=null,J=!1)})(g)},ne=function(){var p=h(function*(){if(H("info","load ffmpeg-core"),null!==v)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{H("info","loading ffmpeg-core");const{createFFmpegCore:g,corePath:S,workerPath:L,wasmPath:Y}=yield e(A);v=yield g({mainScriptUrlOrBlob:S,printErr:W=>K({type:"fferr",message:W}),print:W=>K({type:"ffout",message:W}),locateFile:(W,ce)=>{if("undefined"!=typeof window||"undefined"!=typeof WorkerGlobalScope){if(void 0!==Y&&W.endsWith("ffmpeg-core.wasm"))return Y;if(void 0!==L&&W.endsWith("ffmpeg-core.worker.js"))return L}return ce+W}}),T=v.cwrap(A.mainName||"proxy_main","number",["number","number"]),H("info","ffmpeg-core loaded")}});return function(){return p.apply(this,arguments)}}();return H("info",`use ffmpeg.wasm v${M}`),{setProgress:p=>{O=p},setLogger:p=>{$=p},setLogging:p=>{P=p},load:ne,isLoaded:()=>null!==v,run:(...p)=>{if(H("info",`run ffmpeg command: ${p.join(" ")}`),null===v)throw F;if(J)throw Error("ffmpeg.wasm can only run one command at a time");return J=!0,new Promise((g,S)=>{const L=[...Z,...p].filter(Y=>0!==Y.length);D=g,G=S,T(...y(v,L))})},exit:()=>{if(null===v)throw F;G&&G("ffmpeg has exited"),J=!1;try{v.exit(1)}catch(p){H(p.message),G&&G(p)}finally{v=null,T=null,D=null,G=null}},FS:(p,...g)=>{if(H("info",`run FS.${p} ${g.map(S=>"string"==typeof S?S:`<${S.length} bytes binary file>`).join(" ")}`),null===v)throw F;{let S=null;try{S=v.FS[p](...g)}catch(L){throw Error("readdir"===p?`ffmpeg.FS('readdir', '${g[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:"readFile"===p?`ffmpeg.FS('readFile', '${g[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return S}}}}},260:(m,f,s)=>{s(7854);const h=s(9639),{fetchFile:Z}=s(3327);m.exports={createFFmpeg:h,fetchFile:Z}},3630:m=>{m.exports={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:s=>`\ncreateFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${s}. Use another URL when calling createFFmpeg():\n\nconst ffmpeg = createFFmpeg({\n  corePath: 'http://localhost:3000/ffmpeg-core.js',\n});\n`}},6945:m=>{let f=!1,s=()=>{};m.exports={logging:f,setLogging:y=>{f=y},setCustomLogger:y=>{s=y},log:(y,C)=>{s({type:y,message:C}),f&&console.log(`[${y}] ${C}`)}}},8333:m=>{m.exports=(f,s)=>{const h=f._malloc(s.length*Uint32Array.BYTES_PER_ELEMENT);return s.forEach((Z,x)=>{const y=f.lengthBytesUTF8(Z)+1,C=f._malloc(y);f.stringToUTF8(Z,C,y),f.setValue(h+Uint32Array.BYTES_PER_ELEMENT*x,C,"i32")}),[s.length,h]}},1829:(m,f,s)=>{"use strict";s.r(f),s.d(f,{VideoModule:()=>Le});var h=s(9808),Z=s(4466),x=s(9100),y=s(5861),C=s(1135),e=s(5e3),M=s(4411),F=s(1609),_=s(3075),Q=s(3446),B=s(8549),b=s(235);function A(r,l){if(1&r&&(e.TgZ(0,"app-alert",9)(1,"p"),e._uU(2),e.qZA()()),2&r){const t=e.oxw();e.Q6J("color",t.alertColor),e.xp6(2),e.Oqu(t.alertMsg)}}const v=function(r,l){return{"opacity-50":r,"hover:bg-indigo-700":l}};let T=(()=>{class r{constructor(t,o){this.modal=t,this.clipService=o,this.inSubmission=!1,this.showAlert=!1,this.alertColor="blue",this.alertMsg="Please wait! Updating clip",this.update=new e.vpe,this.activeClip=null,this.clipID=new _.NI(""),this.title=new _.NI("",[_.kI.required,_.kI.minLength(3)]),this.editForm=new _.cw({title:this.title,id:this.clipID})}ngOnInit(){this.modal.register("editClip")}ngOnDestroy(){this.modal.unregister("editClip")}ngOnChanges(){!this.activeClip||(this.inSubmission=!1,this.showAlert=!1,this.clipID.setValue(this.activeClip.docID),this.title.setValue(this.activeClip.title))}submit(){var t=this;return(0,y.Z)(function*(){if(t.activeClip){t.inSubmission=!0,t.showAlert=!0,t.alertColor="blue",t.alertMsg="Please wait! Updating the clip.";try{yield t.clipService.updateClip(t.clipID.value,t.title.value)}catch(o){return t.inSubmission=!1,t.alertColor="red",void(t.alertMsg="Some thing went wrong. Try again later")}t.activeClip.title=t.title.value,t.update.emit(t.activeClip),t.inSubmission=!1,t.alertColor="green",t.alertMsg="Success!"}})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(F.Z),e.Y36(M.Y))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit"]],inputs:{activeClip:"activeClip"},outputs:{update:"update"},features:[e.TTD],decls:12,vars:8,consts:[["modalID","editClip"],[1,"text-2xl","font-bold"],[3,"color",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mt-4"],[1,"block","text-xl","mb-4"],["placeholder","Enter Title",3,"control"],[1,"mt-4","text-right"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","rounded-md","text-white","bg-indigo-600","focus:outline-none",3,"disabled","ngClass"],[3,"color"]],template:function(t,o){1&t&&(e.TgZ(0,"app-modal",0)(1,"p",1),e._uU(2,"Edit Video"),e.qZA(),e.YNc(3,A,3,2,"app-alert",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return o.submit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"Title"),e.qZA(),e._UZ(8,"app-input",6),e.qZA(),e.TgZ(9,"div",7)(10,"button",8),e._uU(11," Update "),e.qZA()()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",o.showAlert),e.xp6(1),e.Q6J("formGroup",o.editForm),e.xp6(4),e.Q6J("control",o.title),e.xp6(2),e.Q6J("disabled",o.inSubmission)("ngClass",e.WLB(5,v,o.inSubmission,!o.inSubmission)))},directives:[Q.z,h.O5,B.w,_._Y,_.JL,_.sg,b.a,h.mk],styles:[""]}),r})();const D=function(r){return["/","clip",r]};function G(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",10)(1,"a",11),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",13)(4,"a",14),e._uU(5),e.qZA(),e.TgZ(6,"a",15),e.NdJ("click",function(c){const R=e.CHM(t).$implicit;return e.oxw().copyToClipboard(c,R.docID)}),e._uU(7," Copy Link "),e.qZA()(),e.TgZ(8,"div",16),e.NdJ("click",function(c){const R=e.CHM(t).$implicit;return e.oxw().openModal(c,R)}),e.TgZ(9,"a",17)(10,"span",18),e._uU(11,"build"),e.qZA()(),e.TgZ(12,"a",19),e.NdJ("click",function(c){const R=e.CHM(t).$implicit;return e.oxw().deleteClip(c,R)}),e.TgZ(13,"span",18),e._uU(14,"delete"),e.qZA()()()()}if(2&r){const t=l.$implicit;e.xp6(2),e.Q6J("src",t.screenshotURL,e.LSH),e.xp6(2),e.Q6J("routerLink",e.VKq(3,D,t.docID)),e.xp6(1),e.hij(" ",t.title," ")}}let J=(()=>{class r{constructor(t,o,c,w){this.router=t,this.route=o,this.clipService=c,this.modal=w,this.videoOrder="1",this.clips=[],this.activeClip=null,this.sort$=new C.X(this.videoOrder)}ngOnInit(){this.route.queryParams.subscribe(t=>{this.videoOrder="2"===t.sort?t.sort:1,this.sort$.next(this.videoOrder)}),this.clipService.getUserClips(this.sort$).subscribe(t=>{this.clips=[],t.forEach(o=>{this.clips.push(Object.assign({docID:o.id},o.data()))})})}sort(t){const{value:o}=t.target;this.router.navigate([],{relativeTo:this.route,queryParams:{sort:o}})}openModal(t,o){t.preventDefault(),this.activeClip=o,this.modal.toggleModal("editClip")}update(t){this.clips.forEach((o,c)=>{o.docID==t.docID&&(this.clips[c].title=t.title)})}deleteClip(t,o){t.preventDefault(),this.clipService.deleteClip(o),this.clips.forEach((c,w)=>{c.docID==o.docID&&this.clips.splice(w,1)})}copyToClipboard(t,o){return(0,y.Z)(function*(){if(t.preventDefault(),!o)return;const c=`${location.origin}/clip/${o}`;yield navigator.clipboard.writeText(c),alert("Link Copied")})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(x.F0),e.Y36(x.gz),e.Y36(M.Y),e.Y36(F.Z))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-manage"]],decls:13,vars:4,consts:[[1,"container","mx-auto","my-8","bg-secondary","p-6"],[1,"rounded","relative","flex","justify-between"],["routerLink","/upload",1,"bg-indigo-400","text-white","py-4","px-10","text-xl"],[1,"text-black","px-8","text-xl","outline-none","appearance-none",3,"change"],["value","1",3,"selected"],["value","2",3,"selected"],[1,"container","mx-auto","my-8"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4"],["class","mt-6 rounded-tl-2xl rounded-br-2xl shadow-xl bg-secondary flex flex-col justify-start",4,"ngFor","ngForOf"],[3,"activeClip","update"],[1,"mt-6","rounded-tl-2xl","rounded-br-2xl","shadow-xl","bg-secondary","flex","flex-col","justify-start"],["href","#"],["crossorigin","",1,"card-img-top","rounded-tl-2xl","w-full",3,"src"],[1,"p-6","text-2xl"],[1,"font-bold","mb-2",3,"routerLink"],["href","#",1,"bg-gray-400","text-white","px-2","py-1","ml-2","text-sm","rounded",3,"click"],[1,"flex","text-center","text-2xl","bg-gray-800","p-2","mt-auto",3,"click"],["href","#",1,"flex-1","p-2","border-right","border-r-2","border-gray-700","transition","hover:text-indigo-400"],[1,"material-icons","text-base"],["href","#",1,"flex-1","p-2","rounded-br-2xl","transition","hover:text-indigo-400",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"a",2),e._uU(3,"Upload Videos"),e.qZA(),e.TgZ(4,"select",3),e.NdJ("change",function(w){return o.sort(w)}),e.TgZ(5,"option",4),e._uU(6,"Recent Uploads"),e.qZA(),e.TgZ(7,"option",5),e._uU(8,"Oldest Uploads"),e.qZA()()()(),e.TgZ(9,"div",6)(10,"div",7),e.YNc(11,G,15,5,"div",8),e.qZA()(),e.TgZ(12,"app-edit",9),e.NdJ("update",function(w){return o.update(w)}),e.qZA()),2&t&&(e.xp6(5),e.Q6J("selected","1"===o.videoOrder),e.xp6(2),e.Q6J("selected","2"===o.videoOrder),e.xp6(4),e.Q6J("ngForOf",o.clips),e.xp6(1),e.Q6J("activeClip",o.activeClip))},directives:[x.yS,_.YN,_.Kr,h.sg,T],styles:[""]}),r})();const P={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let O;const j=new Uint8Array(16);function V(){if(!O&&(O="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(j)}const U=[];for(let r=0;r<256;++r)U.push((r+256).toString(16).slice(1));const ee=function X(r,l,t){if(P.randomUUID&&!l&&!r)return P.randomUUID();const o=(r=r||{}).random||(r.rng||V)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,l){t=t||0;for(let c=0;c<16;++c)l[t+c]=o[c];return l}return function z(r,l=0){return U[r[l+0]]+U[r[l+1]]+U[r[l+2]]+U[r[l+3]]+"-"+U[r[l+4]]+U[r[l+5]]+"-"+U[r[l+6]]+U[r[l+7]]+"-"+U[r[l+8]]+U[r[l+9]]+"-"+U[r[l+10]]+U[r[l+11]]+U[r[l+12]]+U[r[l+13]]+U[r[l+14]]+U[r[l+15]]}(o)};var K=s(3900),ne=s(9260),i=s(9841),n=s(4128),a=s(377),d=s(1205),u=s(260);let E=(()=>{class r{constructor(){this.isRunning=!1,this.isReady=!1,this.ffmpeg=(0,u.createFFmpeg)({log:!0})}init(){var t=this;return(0,y.Z)(function*(){t.isReady||(yield t.ffmpeg.load(),t.isReady=!0)})()}getScreenshots(t){var o=this;return(0,y.Z)(function*(){o.isRunning=!0;const c=yield(0,u.fetchFile)(t);o.ffmpeg.FS("writeFile",t.name,c);const w=[1,2,3],R=[];w.forEach(oe=>{R.push("-i",t.name,"-ss",`00:00:0${oe}`,"-frames:v","1","-filter:v","scale=510:-1",`output_0${oe}.png`)}),yield o.ffmpeg.run(...R);const I=[];return w.forEach(oe=>{const te=o.ffmpeg.FS("readFile",`output_0${oe}.png`),re=new Blob([te.buffer],{type:"image/png"}),q=URL.createObjectURL(re);I.push(q)}),o.isRunning=!1,I})()}blobFromURL(t){return(0,y.Z)(function*(){return yield(yield fetch(t)).blob()})()}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),N=(()=>{class r{handleEvent(t){t.preventDefault()}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275dir=e.lG2({type:r,selectors:[["","app-event-blocker",""]],hostBindings:function(t,o){1&t&&e.NdJ("drop",function(w){return o.handleEvent(w)})("dragover",function(w){return o.handleEvent(w)})}}),r})();var k=s(2313);let p=(()=>{class r{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(k.H7,16))},r.\u0275pipe=e.Yjl({name:"safeURL",type:r,pure:!0}),r})();function g(r,l){1&r&&(e.ynx(0),e.TgZ(1,"span",5),e._uU(2," settings "),e.qZA(),e.BQk())}function S(r,l){1&r&&(e.TgZ(0,"span",5),e._uU(1," autorenew "),e.qZA())}const L=function(r){return{"bg-indigo-400 border-indigo-400 border-solid":r}};function Y(r,l){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",7),e.NdJ("dragend",function(){return e.CHM(t),e.oxw(2).isDragover=!1})("dragover",function(){return e.CHM(t),e.oxw(2).isDragover=!0})("dragenter",function(){return e.CHM(t),e.oxw(2).isDragover=!0})("dragleave",function(){return e.CHM(t),e.oxw(2).isDragover=!1})("mouseleave",function(){return e.CHM(t),e.oxw(2).isDragover=!1})("drop",function(c){return e.CHM(t),e.oxw(2).storeFile(c)}),e.TgZ(2,"h5"),e._uU(3,"Drop your file here (mp4 only!)"),e.qZA(),e.YNc(4,S,2,0,"span",8),e.qZA(),e.TgZ(5,"input",9),e.NdJ("change",function(c){return e.CHM(t),e.oxw(2).storeFile(c)}),e.qZA(),e.BQk()}if(2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.VKq(2,L,t.isDragover)),e.xp6(3),e.Q6J("ngIf",t.ffmpegService.isRunning)}}function W(r,l){if(1&r&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"percent"),e.qZA()),2&r){const t=e.oxw(4);e.xp6(1),e.Oqu(e.lcZ(2,1,t.percentage))}}function ce(r,l){if(1&r&&(e.TgZ(0,"app-alert",20)(1,"p"),e._uU(2),e.qZA(),e.YNc(3,W,3,3,"p",21),e.qZA()),2&r){const t=e.oxw(3);e.Q6J("color",t.alertColor),e.xp6(2),e.Oqu(t.alertMsg),e.xp6(1),e.Q6J("ngIf",t.showPercentage)}}const ye=function(r,l){return{"border-green-400":r,"border-transparent":l}};function _e(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",22),e.NdJ("click",function(){const w=e.CHM(t).$implicit;return e.oxw(3).selectedScreenshot=w}),e._UZ(1,"img",23),e.ALo(2,"safeURL"),e.qZA()}if(2&r){const t=l.$implicit,o=e.oxw(3);e.Q6J("ngClass",e.WLB(4,ye,t===o.selectedScreenshot,t!==o.selectedScreenshot)),e.xp6(1),e.Q6J("src",e.lcZ(2,2,t),e.LSH)}}const be=function(r,l){return{"opacity-50":r,"hover:bg-indigo-700":l}};function we(r,l){if(1&r){const t=e.EpF();e.YNc(0,ce,4,3,"app-alert",10),e.TgZ(1,"form",11),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw(2).uploadFile()}),e.TgZ(2,"h2",12),e._uU(3,"Select a Thumbnail"),e.qZA(),e.TgZ(4,"div",13),e.YNc(5,_e,3,7,"div",14),e.qZA(),e.TgZ(6,"div",15)(7,"label",16),e._uU(8,"Title"),e.qZA(),e._UZ(9,"app-input",17),e.qZA(),e.TgZ(10,"div",18)(11,"button",19),e._uU(12," Publish "),e.qZA()()()}if(2&r){const t=e.oxw(2);e.Q6J("ngIf",t.showAlert),e.xp6(1),e.Q6J("formGroup",t.uploadForm),e.xp6(4),e.Q6J("ngForOf",t.screenshots),e.xp6(4),e.Q6J("control",t.title),e.xp6(2),e.Q6J("disabled",t.inSubmission)("ngClass",e.WLB(6,be,t.inSubmission,!t.inSubmission))}}function xe(r,l){if(1&r&&(e.YNc(0,Y,6,4,"ng-container",3),e.YNc(1,we,13,9,"ng-template",null,6,e.W1O)),2&r){const t=e.MAs(2),o=e.oxw();e.Q6J("ngIf",!o.nextStep)("ngIfElse",t)}}let Ce=(()=>{class r{constructor(t,o,c,w,R){this.storage=t,this.auth=o,this.clipsService=c,this.router=w,this.ffmpegService=R,this.isDragover=!1,this.file=null,this.nextStep=!1,this.showAlert=!1,this.alertColor="blue",this.alertMsg="Please wait your clip is being uploaded.",this.inSubmission=!1,this.percentage=0,this.showPercentage=!1,this.user=null,this.screenshots=[],this.selectedScreenshot="",this.title=new _.NI("",[_.kI.required,_.kI.minLength(3)]),this.uploadForm=new _.cw({title:this.title}),o.user.subscribe(I=>this.user=I),this.ffmpegService.init()}ngOnDestroy(){var t;null===(t=this.task)||void 0===t||t.cancel()}storeFile(t){var o=this;return(0,y.Z)(function*(){var c,w,R,I;o.ffmpegService.isRunning||(o.isDragover=!1,o.file=t.dataTransfer?null!==(w=null===(c=t.dataTransfer)||void 0===c?void 0:c.files.item(0))&&void 0!==w?w:null:null!==(I=null===(R=t.target.files)||void 0===R?void 0:R.item(0))&&void 0!==I?I:null,o.file&&"video/mp4"===o.file.type&&(o.screenshots=yield o.ffmpegService.getScreenshots(o.file),o.selectedScreenshot=o.screenshots[0],o.title.setValue(o.file.name.replace(/\.[^/.]+$/,"")),o.nextStep=!0))})()}uploadFile(){var t=this;return(0,y.Z)(function*(){t.uploadForm.disable(),t.showAlert=!0,t.alertColor="blue",t.alertMsg="Please wait! Your clip is being uploaded.",t.inSubmission=!0,t.showPercentage=!0;const o=ee(),c=`clips/${o}.mp4`,w=yield t.ffmpegService.blobFromURL(t.selectedScreenshot),R=`screenshots/${o}.png`;t.task=t.storage.upload(c,t.file);const I=t.storage.ref(c);t.screenshotTask=t.storage.upload(R,w);const oe=t.storage.ref(R);var te;(0,i.a)([t.task.percentageChanges(),t.screenshotTask.percentageChanges()]).subscribe(te=>{const[re,q]=te;re&&q&&(t.percentage=(re+q)/200)}),(0,n.D)([t.task.snapshotChanges(),t.screenshotTask.snapshotChanges()]).pipe((0,K.w)(()=>(0,n.D)([I.getDownloadURL(),oe.getDownloadURL()]))).subscribe({next:(te=(0,y.Z)(function*(re){var q,se;const[Ze,Me]=re,Re={uid:null===(q=t.user)||void 0===q?void 0:q.uid,displayName:null===(se=t.user)||void 0===se?void 0:se.displayName,title:t.title.value,fileName:`${o}.mp4`,url:Ze,screenshotURL:Me,screenshotFileName:`${o}.png`,timestamp:ne.Z.firestore.FieldValue.serverTimestamp()},Pe=yield t.clipsService.createClip(Re);t.alertColor="green",t.alertMsg="Success! Your clip is now ready to share with world.",t.showPercentage=!1,setTimeout(()=>{t.router.navigate(["clip",Pe.id])},2e3)}),function(q){return te.apply(this,arguments)}),error:te=>{t.uploadForm.enable(),t.alertColor="red",t.alertMsg="Upload failed! Please try again later.",t.inSubmission=!0,t.showPercentage=!1,console.error(te)}})})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.Q1),e.Y36(d.zQ),e.Y36(M.Y),e.Y36(x.F0),e.Y36(E))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-upload"]],decls:7,vars:2,consts:[[1,"container","mx-auto","my-8","bg-secondary","p-6"],[1,"rounded","relative","flex","flex-col"],[1,"font-bold","mb-6"],[4,"ngIf","ngIfElse"],["uploadEditorCtr",""],[1,"material-icons","text-center","text-6xl","p-8","animate-spin"],["uploadFormCtr",""],["app-event-blocker","",1,"w-full","px-10","py-40","rounded","text-center","cursor-pointer","border","border-dashed","border-gray-400","transition","duration-500","hover:text-white","hover:bg-indigo-400","hover:border-indigo-400","hover:border-solid","text-xl",3,"ngClass","dragend","dragover","dragenter","dragleave","mouseleave","drop"],["class","material-icons text-center text-6xl p-8 animate-spin",4,"ngIf"],["type","file",1,"mt-4",3,"change"],[3,"color",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-4","text-xl"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4"],["class","border-8 cursor-pointer",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"block","text-xl","mb-4"],["placeholder","EnterTitle",3,"control"],[1,"mt-4","text-right"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","rounded-md","text-white","bg-indigo-600","focus:outline-none",3,"disabled","ngClass"],[3,"color"],[4,"ngIf"],[1,"border-8","cursor-pointer",3,"ngClass","click"],[3,"src"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"Upload Video"),e.qZA(),e.YNc(4,g,3,0,"ng-container",3),e.YNc(5,xe,3,2,"ng-template",null,4,e.W1O),e.qZA()()),2&t){const c=e.MAs(6);e.xp6(4),e.Q6J("ngIf",!o.ffmpegService.isReady)("ngIfElse",c)}},directives:[h.O5,N,h.mk,B.w,_._Y,_.JL,_.sg,h.sg,b.a],pipes:[h.Zx,p],styles:[""]}),r})();var Fe=s(9635),ue=s(4004),Te=s(5698);const pe=(0,ue.U)(r=>!!r);let de=(()=>{class r{constructor(t,o){this.router=t,this.auth=o,this.canActivate=(c,w)=>{const R=c.data.authGuardPipe||(()=>pe);return this.auth.user.pipe((0,Te.q)(1),R(c,w),(0,ue.U)(I=>"boolean"==typeof I?I:Array.isArray(I)?this.router.createUrlTree(I):this.router.parseUrl(I)))}}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(x.F0),e.LFG(d.zQ))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"any"}),r})();const fe=()=>("/",(0,Fe.z)(pe,(0,ue.U)(l=>l||"/"))),Ae=[{path:"manage",component:J,data:{authOnly:!0,authGuardPipe:fe},canActivate:[de]},{path:"upload",component:Ce,data:{authOnly:!0,authGuardPipe:fe},canActivate:[de]},{path:"manage-clips",redirectTo:"manage"}];let Ee=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[x.Bz.forChild(Ae)],x.Bz]}),r})(),Le=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[h.ez,Z.m,Ee,_.UX]]}),r})()},7854:m=>{var f=function(s){"use strict";var x,h=Object.prototype,Z=h.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},C=y.iterator||"@@iterator",e=y.asyncIterator||"@@asyncIterator",M=y.toStringTag||"@@toStringTag";function F(i,n,a){return Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}),i[n]}try{F({},"")}catch(i){F=function(n,a,d){return n[a]=d}}function _(i,n,a,d){var E=Object.create((n&&n.prototype instanceof D?n:D).prototype),N=new ee(d||[]);return E._invoke=function z(i,n,a){var d=B;return function(E,N){if(d===A)throw new Error("Generator is already running");if(d===v){if("throw"===E)throw N;return ne()}for(a.method=E,a.arg=N;;){var k=a.delegate;if(k){var p=ie(k,a);if(p){if(p===T)continue;return p}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(d===B)throw d=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);d=A;var g=Q(i,n,a);if("normal"===g.type){if(d=a.done?v:b,g.arg===T)continue;return{value:g.arg,done:a.done}}"throw"===g.type&&(d=v,a.method="throw",a.arg=g.arg)}}}(i,a,N),E}function Q(i,n,a){try{return{type:"normal",arg:i.call(n,a)}}catch(d){return{type:"throw",arg:d}}}s.wrap=_;var B="suspendedStart",b="suspendedYield",A="executing",v="completed",T={};function D(){}function G(){}function J(){}var $={};F($,C,function(){return this});var P=Object.getPrototypeOf,O=P&&P(P(K([])));O&&O!==h&&Z.call(O,C)&&($=O);var j=J.prototype=D.prototype=Object.create($);function V(i){["next","throw","return"].forEach(function(n){F(i,n,function(a){return this._invoke(n,a)})})}function U(i,n){function a(E,N,k,p){var g=Q(i[E],i,N);if("throw"!==g.type){var S=g.arg,L=S.value;return L&&"object"==typeof L&&Z.call(L,"__await")?n.resolve(L.__await).then(function(Y){a("next",Y,k,p)},function(Y){a("throw",Y,k,p)}):n.resolve(L).then(function(Y){S.value=Y,k(S)},function(Y){return a("throw",Y,k,p)})}p(g.arg)}var d;this._invoke=function u(E,N){function k(){return new n(function(p,g){a(E,N,p,g)})}return d=d?d.then(k,k):k()}}function ie(i,n){var a=i.iterator[n.method];if(a===x){if(n.delegate=null,"throw"===n.method){if(i.iterator.return&&(n.method="return",n.arg=x,ie(i,n),"throw"===n.method))return T;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var d=Q(a,i.iterator,n.arg);if("throw"===d.type)return n.method="throw",n.arg=d.arg,n.delegate=null,T;var u=d.arg;return u?u.done?(n[i.resultName]=u.value,n.next=i.nextLoc,"return"!==n.method&&(n.method="next",n.arg=x),n.delegate=null,T):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,T)}function H(i){var n={tryLoc:i[0]};1 in i&&(n.catchLoc=i[1]),2 in i&&(n.finallyLoc=i[2],n.afterLoc=i[3]),this.tryEntries.push(n)}function X(i){var n=i.completion||{};n.type="normal",delete n.arg,i.completion=n}function ee(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(H,this),this.reset(!0)}function K(i){if(i){var n=i[C];if(n)return n.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var a=-1,d=function u(){for(;++a<i.length;)if(Z.call(i,a))return u.value=i[a],u.done=!1,u;return u.value=x,u.done=!0,u};return d.next=d}}return{next:ne}}function ne(){return{value:x,done:!0}}return G.prototype=J,F(j,"constructor",J),F(J,"constructor",G),G.displayName=F(J,M,"GeneratorFunction"),s.isGeneratorFunction=function(i){var n="function"==typeof i&&i.constructor;return!!n&&(n===G||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,J):(i.__proto__=J,F(i,M,"GeneratorFunction")),i.prototype=Object.create(j),i},s.awrap=function(i){return{__await:i}},V(U.prototype),F(U.prototype,e,function(){return this}),s.AsyncIterator=U,s.async=function(i,n,a,d,u){void 0===u&&(u=Promise);var E=new U(_(i,n,a,d),u);return s.isGeneratorFunction(n)?E:E.next().then(function(N){return N.done?N.value:E.next()})},V(j),F(j,M,"Generator"),F(j,C,function(){return this}),F(j,"toString",function(){return"[object Generator]"}),s.keys=function(i){var n=[];for(var a in i)n.push(a);return n.reverse(),function d(){for(;n.length;){var u=n.pop();if(u in i)return d.value=u,d.done=!1,d}return d.done=!0,d}},s.values=K,ee.prototype={constructor:ee,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=x,this.done=!1,this.delegate=null,this.method="next",this.arg=x,this.tryEntries.forEach(X),!i)for(var n in this)"t"===n.charAt(0)&&Z.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=x)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var n=this;function a(p,g){return E.type="throw",E.arg=i,n.next=p,g&&(n.method="next",n.arg=x),!!g}for(var d=this.tryEntries.length-1;d>=0;--d){var u=this.tryEntries[d],E=u.completion;if("root"===u.tryLoc)return a("end");if(u.tryLoc<=this.prev){var N=Z.call(u,"catchLoc"),k=Z.call(u,"finallyLoc");if(N&&k){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(N){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else{if(!k)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return a(u.finallyLoc)}}}},abrupt:function(i,n){for(var a=this.tryEntries.length-1;a>=0;--a){var d=this.tryEntries[a];if(d.tryLoc<=this.prev&&Z.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var u=d;break}}u&&("break"===i||"continue"===i)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null);var E=u?u.completion:{};return E.type=i,E.arg=n,u?(this.method="next",this.next=u.finallyLoc,T):this.complete(E)},complete:function(i,n){if("throw"===i.type)throw i.arg;return"break"===i.type||"continue"===i.type?this.next=i.arg:"return"===i.type?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):"normal"===i.type&&n&&(this.next=n),T},finish:function(i){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.finallyLoc===i)return this.complete(a.completion,a.afterLoc),X(a),T}},catch:function(i){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc===i){var d=a.completion;if("throw"===d.type){var u=d.arg;X(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(i,n,a){return this.delegate={iterator:K(i),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=x),T}},s}(m.exports);try{regeneratorRuntime=f}catch(s){"object"==typeof globalThis?globalThis.regeneratorRuntime=f:Function("r","regeneratorRuntime = r")(f)}},8926:m=>{function f(h,Z,x,y,C,e,M){try{var F=h[e](M),_=F.value}catch(Q){return void x(Q)}F.done?Z(_):Promise.resolve(_).then(y,C)}m.exports=function s(h){return function(){var Z=this,x=arguments;return new Promise(function(y,C){var e=h.apply(Z,x);function M(_){f(e,y,C,M,F,"next",_)}function F(_){f(e,y,C,M,F,"throw",_)}M(void 0)})}},m.exports.__esModule=!0,m.exports.default=m.exports},3681:m=>{"use strict";m.exports=JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.11.6","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","start:worker":"node scripts/worker-server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}')}}]);