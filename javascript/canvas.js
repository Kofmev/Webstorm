window.onload = function() {
    var canvas = document.getElementById("hordeCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("horde");
    ctx.drawImage(img, 10, 10);
};