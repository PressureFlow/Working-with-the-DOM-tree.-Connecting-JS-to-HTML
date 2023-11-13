
// Задание №1

let input = document.querySelector('#input');
let title = document.querySelector('#title');

input.addEventListener("keyup", (e)=>{
  e.preventDefault();
  setTimeout(replaceTitle, 300);
});

function replaceTitle() {
  title.textContent = input.value;
  document.title = input.value;
}

// Задание №2

let btn = document.querySelector('#btn');

btn.append(1);

btn.addEventListener('click', function replaceNum(num){
  if ('click'){
    btn.textContent = parseInt(btn.textContent) + 1;
  };
});

// Задание №3

var isRect = true;
var elem = document.getElementById('myCanvas');

elem.addEventListener('click', checkCanvas);


var ctx = elem.getContext('2d');

drawRectangle();

function drawRectangle(){
  ctx.clearRect(0, 0, elem.width, elem.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 100, 100);
}

function drawCircle (){
  ctx.clearRect(0, 0, elem.width, elem.height);
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, 2*Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.stroke();
}

function checkCanvas (event){
  if (isRect){
    drawCircle();
    isRect = false;
  }
  else {
    drawRectangle();
    isRect = true;
  }
}












   


