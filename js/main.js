let car=document.querySelector('.car')
let finish=document.querySelector('.finish')
let score=document.querySelector('.score')
let txt=document.querySelector('.span')
let x=0;
let z=0;
let y=0;
function reset() {
    x=0;
    z=0;
}
document.body.onkeydown= (e) => {
    finish.style.backgroundColor='red'
    txt.className='span'
  if (e.keyCode===40) {
    x+=5
    car.style.top=`${x}%`
  }
  if (e.keyCode===38) {
    x-=5
    car.style.top=`${x}%`
  }
  if (e.keyCode===39) {
    z+=5;
    car.style.left=`${z}%`
  }
  if (e.keyCode===37) {
    z-=5;
    car.style.left=`${z}%`
  }
  if (x>=35&&x<60&&z>=35&&z<60) {
    y++
    finish.style.backgroundColor='green'
    score.innerHTML=`Score:${y}`
    txt.className='active'
    x=0
    z=0
    car.style.left=`${z}%`
    car.style.top=`${x}%`
}
}
