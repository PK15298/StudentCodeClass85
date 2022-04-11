canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_img = "rover.png";
background_img = "mars.jpg";

function background_image() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function rover_image() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = background_image;
    background_imgtag.src = background_img;

    rover_imgtag = new Image();
    rover_imgtag.onload = rover_image;
    rover_imgtag.src = rover_img;

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "37") {
        left();
        console.log("left");
    }

    if (keyPressed == "38") {
        up();
        console.log("up");
    }

    if (keyPressed == "39") {
        right();
        console.log("right");
    }

    if (keyPressed == "40") {
        down();
        console.log("down");
    }
}
function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 background_image();
		 rover_image();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		background_image();
		 rover_image();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		background_image();
		 rover_image();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		background_image();
		rover_image();
   }
}
	