document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.burger'),l=document.querySelector('.links');
  if(b)b.addEventListener('click',()=>l.classList.toggle('open'));
  const lb=document.querySelector('.lb');
  if(lb){const im=lb.querySelector('img');
    document.querySelectorAll('.gallery a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();im.src=a.href;im.alt=a.querySelector('img').alt;lb.classList.add('open')}));
    lb.addEventListener('click',e=>{if(e.target!==im)lb.classList.remove('open')});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});}
});
