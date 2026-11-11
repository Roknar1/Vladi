'use strict';
const $=id=>document.getElementById(id),canvas=$('track'),ctx=canvas.getContext('2d');
const store={get(key,fallback){try{return localStorage.getItem(key)??fallback}catch{return fallback}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};
let pilot=store.get('apex.pilot',''),state='login',lane=1,x=240,traffic=[],distance=0,elapsed=0,spawn=0,road=0,last=0,best=0;
const centers=[120,240,360],playerY=452;
function bestKey(){return 'apex.best.'+pilot.toLocaleLowerCase()}
function showReady(){state='ready';$('overlay').hidden=false;document.body.classList.remove('playing');$('login-panel').hidden=true;$('ready-panel').hidden=false;$('pilot').textContent=pilot.toUpperCase();$('logout').hidden=false;best=Number(store.get(bestKey(),'0'))||0;$('best').textContent=best;$('pause').disabled=true;$('result-label').textContent='¿LISTO PARA SALIR?';$('result-title').textContent='Pisa a fondo.';$('result-text').textContent='Esquiva el tráfico. Cada metro cuenta.';$('start').textContent='Comenzar carrera →'}
$('login').addEventListener('submit',e=>{e.preventDefault();const value=$('name').value.trim();if(value.length<2){$('name').setCustomValidity('Escribe al menos 2 caracteres.');$('name').reportValidity();return}pilot=value;store.set('apex.pilot',pilot);showReady()});$('name').addEventListener('input',()=> $('name').setCustomValidity(''));
$('logout').onclick=()=>{state='login';pilot='';store.set('apex.pilot','');traffic=[];distance=0;$('score').textContent='0';$('best').textContent='0';$('speed').textContent='0';$('level').textContent='NIVEL 01';$('pilot').textContent='PILOTO SIN CONECTAR';$('logout').hidden=true;$('pause').disabled=true;$('pause').textContent='Ⅱ';$('overlay').hidden=false;document.body.classList.remove('playing');$('login-panel').hidden=false;$('ready-panel').hidden=true;$('name').focus()};
function start(){if(state==='paused'){state='playing';$('overlay').hidden=true;document.body.classList.add('playing');$('pause').textContent='Ⅱ';$('pause').setAttribute('aria-label','Pausar carrera');return}state='playing';lane=1;x=240;traffic=[];distance=0;elapsed=0;spawn=.7;road=0;$('score').textContent='0';$('overlay').hidden=true;document.body.classList.add('playing');$('pause').disabled=false;$('pause').textContent='Ⅱ';$('pause').setAttribute('aria-label','Pausar carrera');last=performance.now()}
$('start').onclick=start;
function pause(){if(state==='paused'){start();return}if(state!=='playing')return;state='paused';$('overlay').hidden=false;document.body.classList.remove('playing');$('result-label').textContent='TOMA UN RESPIRO';$('result-title').textContent='En pausa.';$('result-text').textContent='Tu carrera te espera en el mismo lugar.';$('start').textContent='Continuar →';$('pause').textContent='▶';$('pause').setAttribute('aria-label','Continuar carrera')}
$('pause').onclick=pause;
function move(dir){if(state==='playing')lane=Math.max(0,Math.min(2,lane+dir))}
$('left').onclick=()=>move(-1);$('right').onclick=()=>move(1);
document.addEventListener('keydown',e=>{if(e.target.matches('input'))return;const k=e.key.toLowerCase();if(['arrowleft','arrowright','a','d','p',' '].includes(k))e.preventDefault();if(e.repeat)return;if(k==='arrowleft'||k==='a')move(-1);if(k==='arrowright'||k==='d')move(1);if(k==='p'||k===' ')pause()});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state==='playing')pause()});window.addEventListener('blur',()=>{if(state==='playing')pause()});
function finish(){state='over';const score=Math.floor(distance),record=score>best;if(record){best=score;store.set(bestKey(),String(best))}$('best').textContent=best;$('overlay').hidden=false;document.body.classList.remove('playing');$('pause').disabled=true;$('result-label').textContent=record?'NUEVO RÉCORD PERSONAL':'FIN DE LA CARRERA';$('result-title').textContent=score+' metros.';$('result-text').textContent=record?'Has superado tu marca. ¿Una vuelta más?':'El tráfico ganó esta vez. Vuelve a intentarlo.';$('start').textContent='Volver a correr →'}
let W=innerWidth,H=innerHeight,dpr=1;
function resize(){W=innerWidth;H=innerHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=W*dpr;canvas.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
window.addEventListener('resize',resize);resize();
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{$('fullscreen').title='Usa F11 para activar pantalla completa';}};
document.addEventListener('fullscreenchange',()=>{$('fullscreen').setAttribute('aria-label',document.fullscreenElement?'Salir de pantalla completa':'Activar pantalla completa')});
function poly(points,color){ctx.fillStyle=color;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fill()}
function line(points,color,width=1){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke()}
function project(u,t){const depth=.035+.965*t*t;return [W/2+u*W*.52*depth,H*.34+H*.72*t*t]}
function car(cx,cy,size,color,player=false){ctx.save();ctx.translate(cx,cy);ctx.scale(size,size);
ctx.shadowColor=player?'#36dfff':'#ee4a8b';ctx.shadowBlur=player?26:9;ctx.fillStyle=player?'#2cbde433':'#ea477722';ctx.beginPath();ctx.ellipse(0,12,57,16,0,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
poly([[-48,-5],[-45,-28],[-31,-40],[29,-40],[44,-28],[49,-5],[44,15],[-44,15]],'#070a12');
poly([[-49,-6],[-38,-31],[-27,-48],[25,-48],[38,-31],[49,-6],[44,10],[-44,10]],color);
poly([[-28,-44],[25,-44],[33,-26],[-34,-26]],'#0a1529');
poly([[-26,-42],[23,-42],[28,-29],[-30,-29]],'#152b48');line([[-25,-41],[22,-41]],'#82d9f899',1.4);
poly([[-36,-23],[35,-23],[43,-9],[-43,-9]],player?'#3eaac4':'#526078');
poly([[-46,-5],[46,-5],[42,13],[-42,13]],player?'#147792':'#2e344b');
ctx.fillStyle='#080c18';ctx.fillRect(-30,3,60,8);ctx.fillStyle='#aaaec2';ctx.fillRect(-8,3,16,5);
ctx.shadowColor='#ff225f';ctx.shadowBlur=10;line([[-40,-5],[-21,-3],[-16,-6],[16,-6],[21,-3],[40,-5]],'#ff4979',3);ctx.shadowBlur=0;
ctx.fillStyle='#060b13';ctx.fillRect(-43,-27,86,5);ctx.fillRect(-35,-29,4,7);ctx.fillRect(31,-29,4,7);
ctx.fillStyle='#9de8ff';ctx.fillRect(-37,8,10,3);ctx.fillRect(27,8,10,3);
if(player){ctx.shadowColor='#54edff';ctx.shadowBlur=20;poly([[-35,13],[-26,13],[-30,29+Math.sin(road)*5]],'#6cf5ff');poly([[26,13],[35,13],[30,29+Math.cos(road)*5]],'#6cf5ff')}
ctx.restore()}
function draw(){
const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#080b20');sky.addColorStop(.34,'#30224e');sky.addColorStop(.65,'#13162b');sky.addColorStop(1,'#070b17');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);
const glow=ctx.createRadialGradient(W*.5,H*.32,0,W*.5,H*.32,W*.42);glow.addColorStop(0,'#be55f32e');glow.addColorStop(1,'#6529cb00');ctx.fillStyle=glow;ctx.fillRect(0,0,W,H);
ctx.fillStyle='#afb9e4';ctx.beginPath();ctx.arc(W*.72,H*.16,Math.min(W,H)*.026,0,Math.PI*2);ctx.fill();
for(let i=0;i<52;i++){const bx=(i/52)*W,bw=W/60+9,bh=H*(.04+((i*17)%13)/100),by=H*.35-bh;ctx.fillStyle=i%3?'#0c1226':'#111930';ctx.fillRect(bx,by,bw,bh);if(i%4===0){ctx.fillStyle='#b15ce788';ctx.fillRect(bx,by,2,bh)}for(let row=0;row<Math.floor((bh-10)/12);row++)for(let col=0;col<3;col++){if((i+row*3+col)%4===0)continue;ctx.fillStyle=(i+row)%3?'#517fa33b':'#d3a9ee55';ctx.fillRect(bx+4+col*6,by+9+row*12,2,4)}}
poly([project(-1,0),project(1,0),project(1,1.1),project(-1,1.1)],'#181c31');
for(let j=0;j<22;j++){let t=((j/22+road/12000)%1),t2=Math.min(1.08,t+.023);poly([project(-1,t),project(1,t),project(1,t2),project(-1,t2)],j%2?'#1e233911':'#7e95c309')}
for(const u of [-1,1]){line([project(u,0),project(u,1.1)],'#38b9e9',2);line([project(u*1.07,0),project(u*1.07,1.1)],'#f05dce',2)}
for(let j=0;j<18;j++){const t=(j/18+road/9000)%1,te=Math.min(1.05,t+.023);for(const u of [-1/3,1/3])poly([project(u-.005,t),project(u+.005,t),project(u+.005,te),project(u-.005,te)],'#b4c5e188')}
for(let j=0;j<11;j++){const t=(j/11+road/16000)%1;for(const side of [-1,1]){const p=project(side*1.2,t),height=H*.38*(.1+t*t);line([p,[p[0],p[1]-height],[p[0]-side*W*.045*t,p[1]-height]],'#364563',Math.max(1,3*t));ctx.shadowColor='#6adfff';ctx.shadowBlur=15;line([[p[0],p[1]-height],[p[0]-side*W*.045*t,p[1]-height]],'#83e5ff',Math.max(1,3*t));ctx.shadowBlur=0}}
for(const a of [...traffic].sort((a,b)=>a.y-b.y)){const t=Math.max(.02,(a.y+90)/645),p=project((a.lane-1)*.66,t);car(p[0],p[1],Math.max(.05,t*t)*Math.min(W/700,1.8),a.color)}
const p=project((x-240)/120*.66,.84);car(p[0],p[1],Math.min(W/610,1.65),'#51d9f3',true);
}
function tick(now){const dt=Math.min((now-last)/1000||0,.05);last=now;if(state==='playing'){elapsed+=dt;const speed=Math.min(420,190+elapsed*3);road+=speed*dt;distance+=speed*dt/11;x+=(centers[lane]-x)*Math.min(1,dt*18);spawn-=dt;if(spawn<=0){traffic.push({lane:Math.floor(Math.random()*3),y:-65,color:['#829bc0','#e68156','#b5b8a7','#b595c3'][Math.floor(Math.random()*4)]});spawn=Math.max(.85,1.5-elapsed*.008)}for(const a of traffic){a.y+=speed*dt;if(Math.abs(centers[a.lane]-x)<44&&Math.abs(a.y-playerY)<25){finish();break}}traffic=traffic.filter(a=>a.y<650);$('score').textContent=Math.floor(distance);$('speed').textContent=Math.round(speed*.55);$('speedbar').style.width=(speed/420*100)+'%';$('level').textContent='NIVEL '+String(1+Math.floor(elapsed/15)).padStart(2,'0')}draw();requestAnimationFrame(tick)}
if(pilot)showReady();requestAnimationFrame(tick);
