var mouseEvent = "empty"
var last_potion_of_x, last_potion_of_y;
var radius = 75;

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")


canvas.addEventListener("mousedown", my_mousedown);
function  my_mousedown(e){
	color = "orange";
	lineWidth = "4";
	radius = 40;
	mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
	var current_postion_of_x = e.clientX-canvas.offsetLeft;
    var current_postion_of_y = e.clientY-canvas.offsetTop;

	if(mouseEvent == "mouseDown"){
		console.log("Current position of x & y coordinates = ");
		console.log("x = " + current_postion_of_x + "y = " + current_postion_of_y);
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.arc(current_postion_of_x, current_postion_of_y, radius, 0, 2 * Math.PI);
		ctx.stroke();
	}
}