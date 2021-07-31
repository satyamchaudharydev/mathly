const mbar = document.getElementById('mbar');
const cat = document.getElementById('cat');
const marrow = document.getElementById('marrow');
const msort = document.getElementById('msort');
const hidden = document.getElementById('hidden');
const oth = document.getElementById('oth');

hidden.classList.remove('hider');


mbar.addEventListener('click',() => {
  document.getElementById('menu2').classList.toggle('menu-show');
  document.getElementById('mbar').classList.toggle('mbar-show');
  
  
});

cat.addEventListener('click',() => {
document.getElementById('container').classList.toggle('container-show') ;
  hidden.classList.add('hider');
  
 console.log('dsf') ;
});
marrow.addEventListener('click',() => {
document.getElementById('drop-down').classList.toggle('drop-down-show') ;
  oth.classList.add('hider');
  
 console.log('dsf') ;
});
 
msort.addEventListener('click',() => {
document.getElementById('drop-down').classList.toggle('drop-down-show') ;
  oth.classList.add('hider');
  
 console.log('dsf') ;
});
hidden.addEventListener('click' ,() => {
   hidden.classList.remove('hider');
 document.getElementById('container').classList.toggle('container-show') ;
  console.log('sasa')
})
oth.addEventListener('click' ,() => {
   oth.classList.remove('hider');
 document.getElementById('drop-down').classList.toggle('drop-down-show') ;

  console.log('sasa')
})