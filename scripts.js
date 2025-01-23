var video = document.getElementById("myVid");
var btn = document.getElementById("myBtn");
var mt = document.getElementById("mute");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
function sound() {
    if (video.muted === false) {
      video.muted = true;
      mt.innerHTML = "Unmute";
    } else {
      video.muted = false;
      mt.innerHTML = "Mute";
    }
  }