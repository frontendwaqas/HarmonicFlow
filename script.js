let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlsIcon = document.querySelector("#cntrlsIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPuse() {
  if (ctrlsIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlsIcon.classList.remove("fa-pause");
    ctrlsIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlsIcon.classList.add("fa-pause");
    ctrlsIcon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlsIcon.classList.add("fa-pause");
  ctrlsIcon.classList.remove("fa-play");
};
