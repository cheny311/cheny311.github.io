const audio = document.getElementById("my-audio");

window.addEventListener("scroll", () => {
  const speed = Math.max(0.5, 1 - window.scrollY / window.innerHeight);
  audio.playbackRate = speed;
});


