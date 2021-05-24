canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var lastPositionx, lastPositiony;
color = "black";
width_of_line = 1;
var width = screen.width;
var newwidth = screen.width - 70;
var newheight = screen.height - 300;
if(width < 992) {
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    console.log("touchstart");
    lastPositionx = e.touches[0].clientX - canvas.offsetLeft;
    lastPositiony = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_position_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinates are");
    console.log("x = " + lastPositionx + " , y = " + lastPositiony);
    ctx.moveTo(lastPositionx, lastPositiony);
    console.log("Current position of x and y coordinates are");
    console.log("x = " + current_position_x + " , y = " + current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();
    lastPositionx = current_position_x;
    lastPositiony = current_position_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

