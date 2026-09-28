const langBtn=document.getElementById('langBtn');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const qrBtn=document.getElementById('qrBtn');
const qrModal=document.getElementById('qrModal');
const modalClose=document.getElementById('modalClose');
const bioBtn=document.getElementById('bioBtn');
const bioModal=document.getElementById('bioModal');
const bioClose=document.getElementById('bioClose');
const copyBioBtn=document.getElementById('copyBioBtn');
const quickBioText=document.getElementById('quickBioText');
let currentLang='zh';
function setLang(lang){currentLang=lang;document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-zh][data-en]').forEach(el=>{el.textContent=el.dataset[lang];});langBtn.textContent=lang==='zh'?'EN':'中';}
langBtn.addEventListener('click',()=>setLang(currentLang==='zh'?'en':'zh'));
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
function openModal(modal){modal.classList.add('open');modal.setAttribute('aria-hidden','false');}
function closeModal(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}
qrBtn.addEventListener('click',()=>openModal(qrModal));
modalClose.addEventListener('click',()=>closeModal(qrModal));
qrModal.addEventListener('click',e=>{if(e.target.dataset.close)closeModal(qrModal);});
bioBtn.addEventListener('click',()=>openModal(bioModal));
bioClose.addEventListener('click',()=>closeModal(bioModal));
bioModal.addEventListener('click',e=>{if(e.target.dataset.bioClose)closeModal(bioModal);});
copyBioBtn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(quickBioText.textContent.trim());const old=copyBioBtn.textContent;copyBioBtn.textContent=currentLang==='zh'?'已复制':'Copied';setTimeout(()=>copyBioBtn.textContent=old,1400);}catch(e){}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal(qrModal);closeModal(bioModal);}});
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.pub-list li').forEach(li=>{const cats=(li.dataset.cat||'').split(' ');li.classList.toggle('hidden',f!=='all'&&!cats.includes(f));});}));
document.getElementById('year').textContent=new Date().getFullYear();
