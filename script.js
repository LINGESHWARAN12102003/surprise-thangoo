function toggleMusic(){

let music=document.getElementById("music");

if(music.paused){
music.play();
}else{
music.pause();
}

}

/* simple confetti */

let canvas=document.getElementById("confetti");
let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let confetti=[];

for(let i=0;i<100;i++){

confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2,
d:Math.random()*5
});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

confetti.forEach(c=>{
ctx.beginPath();
ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
ctx.fill();
});

update();

}

function update(){

confetti.forEach(c=>{
c.y+=c.d;

if(c.y>canvas.height){
c.y=0;
}

});

}

setInterval(draw,30);
