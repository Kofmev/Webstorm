var i = 0;

function fn(e) {
    if (i % 4 === 0) ctx.drawImage(im1, 0, 0, can.width, can.height);
    else if (i % 4 === 1) ctx.drawImage(im2, 0, 0, can.width, can.height);
    else if (i % 4 === 2) ctx.drawImage(im3, 0, 0, can.width, can.height);
    else
        ctx.drawImage(im4, 0, 0, can.width, can.height);
    e.preventDefault();
    i++;
    }

var can = document.getElementById("hordeCanvas");
var ctx = can.getContext("2d");
var im1 = document.getElementById("a");
var im2 = document.getElementById("b");
var im3 = document.getElementById("c");
var im4 = document.getElementById("d");
document.addEventListener("DOMContentLoaded", function () {
    can.addEventListener("click", fn, false);
}, false);
