const langBtn=document.getElementById('langBtn');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const qrBtn=document.getElementById('qrBtn');
const qrModal=document.getElementById('qrModal');
const modalClose=document.getElementById('modalClose');
let currentLang='zh';
function setLang(lang){currentLang=lang;document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-zh][data-en]').forEach(el=>{el.textContent=el.dataset[lang];});langBtn.textContent=lang==='zh'?'EN':'中';}
langBtn.addEventListener('click',()=>setLang(currentLang==='zh'?'en':'zh'));
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
function openModal(){qrModal.classList.add('open');qrModal.setAttribute('aria-hidden','false');}
function closeModal(){qrModal.classList.remove('open');qrModal.setAttribute('aria-hidden','true');}
qrBtn.addEventListener('click',openModal);modalClose.addEventListener('click',closeModal);qrModal.addEventListener('click',e=>{if(e.target.dataset.close)closeModal();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('year').textContent=new Date().getFullYear();
