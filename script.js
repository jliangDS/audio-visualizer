"use strict";

var bars = 200;

function initPage() {

    var audio = new Audio();

    audio.src = "Dee_Yan-Key_-_04_-_Vivace_con_spirito.mp3";
  
    // set to the size of the device 
    var canvas = document.getElementById("renderer");
    canvas.onclick = function onClick() {
        console.log('onclick');
        audio.play();
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    // find the center of the window 
    var center_x = canvas.width/2;
    var center_y = canvas.height/2;
    var radius = 150; 

    // draw a circle 
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    ctx.stroke();
    
    // for loop
    for(let i = 0; i<bars; i++){

        // divide a circle into equal parts 
        var rads = Math.PI * 2 / bars;

        var bar_height = 100;
        var bar_width = 2;

        var x = center_x + Math.cos(rads * i) * (radius);
        var y = center_y + Math.sin(rads * i) * (radius);
        var x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
        var y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

        // draw a bar 
        drawBar(x, y, x_end, y_end, ctx);
    }
    console.log(canvas, canvas.width, canvas.height, center_x, center_y);
}

function drawBar(x1, y1, x2, y2, ctx) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}