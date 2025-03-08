const clock = document.getElementById('division')

setInterval(()=>{
let date = new Date();
clock.innerHTML = date.toLocaleTimeString() ;
},1000)