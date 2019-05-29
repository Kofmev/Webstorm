

var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4');

video.appendChild(source);
video.play();

setTimeout(function() {
    video.pause();

    source.setAttribute('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4');

    video.load();
    video.play();
}, 1000);



