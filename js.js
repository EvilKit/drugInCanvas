// Иницализируем необходимые переменные
function init() {
  canvas = document.getElementById("example");
  context = canvas.getContext("2d");
 
  canvas.width = 1200;
  canvas.height = 700;
  width = 40;
  height = 70;
  drag = false; // переменная истинная когда зажата кнопка мыши
  dragRect = new Shape(canvas.width / 2 - width / 2, canvas.height / 2 - height / 2, width, height);
  canvas.onmousedown = mouseDown;
  
  setInterval(draw, 1000 / 1000);

// Метод отрисовки
function draw() {
	
 


 
 
  //context.fillStyle = "#BDBDFF";
  //context.clearRect(0, 0, canvas.width, canvas.height);
  dragRect.draw();

}







// Класс задающий прямокгольник
function Shape(topX, topY, width, height, fillColor, strokeColor) {
  this.x = topX;
  this.y = topY;
  this.height = height; // Высота
  this.width = width; // Ширина
  this.offsetX = 0;
  this.offsetY = 0;
  this.draw = function() // Метод рисующий прямоугольник
  {
      	     context.fillStyle="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
  
    context.fillRect(this.x, this.y, this.width, this.height);
    //context.lineWidth = 2;
    context.strokeStyle = "#00003A";
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}
// Метод срабатывающий на нажатие кнопки мыши
function mouseDown(evt) {
  var mouseX = evt.pageX - canvas.offsetLeft;
  var mouseY = evt.pageY - canvas.offsetTop;
  if (mouseX < dragRect.x + dragRect.width && mouseX > dragRect.x && mouseY < dragRect.y + dragRect.height && mouseY > dragRect.y) {
    drag = true;
    dragRect.offsetX = mouseX - dragRect.x + 8;
    dragRect.offsetY = mouseY - dragRect.y + 8;
    canvas.onmousemove = mouseMove;
    canvas.onmouseup = mouseUp;
  }
}
// Движение мыши
function mouseMove(evt) {
  var mouseY = evt.pageY;
  var mouseX = evt.pageX;
  if (drag) {
    // Изменение координат фигуры
   dragRect.x = mouseX - dragRect.offsetX; 
   dragRect.y = mouseY - dragRect.offsetY;
      
   //
      
  }
  
}
// Если отпущина кнопка мыши, то переменная drag принимает ложное значение
function mouseUp(evt) {
  drag = false;
}
}
function Random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}