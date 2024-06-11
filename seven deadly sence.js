var cursor=document.querySelector('#light');
var text=document.querySelector('.heading');
document.addEventListener ('mousemove',function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left= x + 'px'
    cursor.style.top = y +'px'
})
const target = document.querySelectorAll('info');
const targetmove = (x,y) => 'perspecttive(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)'
target.forEach(info =>{
     const heigth = info.offsetHeigth
     const width = info.offsetWeigth

     info.addEventListener('mousemove',(e) => {
        const x = e.clientX
        const y = e.clientY
        

        const l = 50*((x-width / 2) / width)
        const k = -50*((y-height / 2) /height)
        info.style.transfrom = targetmove(l,k)
     })
  info.addEventListener('mouseout',() => p.style.transfrom = targetmove(0,0))
})