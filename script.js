let btn = document.querySelector("button");

function getRandom(){
    let randomX = Math.random() * 95;
    let randomY = Math.random() * 95;
    return {randomX,randomY}
}


btn.addEventListener("click",function(){
  let img =  document.createElement("img")
  let url = [
    'https://static.wikia.nocookie.net/oggyandthecockroaches/images/d/d9/OGGY_PERSO.png/revision/latest?cb=20181112161051',
    'https://i.pinimg.com/474x/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.jpg',
    'https://w0.peakpx.com/wallpaper/807/829/HD-wallpaper-oggy-cartoon-oggy-and-the-cockroaches-cartoon-oggy.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWLEqsiFnpcivOr46smZISEH8SpGCtM1Ffw&s'
]
  img.src =  url[Math.floor(Math.random()* url.length)];

  img.style.width ='100px';
  img.style.height ='70px';

  let {randomX,randomY} = getRandom();
  img.style.position = "absolute";
  img.style.top = randomX + '%';
  img.style.left = randomY + '%';

  document.body.appendChild(img)
});