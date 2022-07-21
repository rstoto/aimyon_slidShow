let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://pbs.twimg.com/media/FViQKudUsAAfnkR?format=jpg&name=medium",
"https://pbs.twimg.com/media/FWlUceWUIAExF7S?format=jpg&name=medium",
"https://pbs.twimg.com/media/FVSeD-ZUsAEaZZT?format=jpg&name=medium",
"https://pbs.twimg.com/media/FUfEsK-VUAAxp_S?format=jpg&name=900x900",
"https://pbs.twimg.com/media/FT7MbJoUsAERQ7K?format=jpg&name=large",
"https://pbs.twimg.com/media/FT2kNCkVsAEK42L?format=jpg&name=large",
"https://pbs.twimg.com/media/FT2ONVBUEAY10RA?format=jpg&name=large",
"https://pbs.twimg.com/media/FTW_Je-VIAAxPoh?format=jpg&name=medium",
"https://pbs.twimg.com/media/FSuBGR2UsAA5xue?format=jpg&name=medium",
"https://pbs.twimg.com/media/FRgzYjVUUAAQ4qM?format=jpg&name=medium",
"https://pbs.twimg.com/media/FRGwi_7UUAAJuor?format=jpg&name=medium",
"https://pbs.twimg.com/media/FQdzMgBVsAAlGd8?format=jpg&name=900x900",
"https://pbs.twimg.com/media/FQYxktgUYAEVDN3?format=jpg&name=900x900",
"https://pbs.twimg.com/media/FQDViHxacAAtzrv?format=jpg&name=large",
"https://pbs.twimg.com/media/FPu1kNeVgAEfrmC?format=jpg&name=large",
"https://pbs.twimg.com/media/FPF-si3VcAMAAEu?format=jpg&name=large",
"https://pbs.twimg.com/media/FLuGQ5uVIAEu-Nn?format=jpg&name=medium",
"https://pbs.twimg.com/media/FLE3l5MVEAIa8oB?format=jpg&name=900x900",
"https://pbs.twimg.com/media/FKG6VTTVUAY6Lb-?format=jpg&name=medium",
"https://pbs.twimg.com/media/FH8i11_VIAAwvbH?format=jpg&name=large",
"https://pbs.twimg.com/media/FGZwP2cVUAI1rPh?format=jpg&name=medium",
"https://pbs.twimg.com/media/FFG9IJbaIAAkJpd?format=jpg&name=large",
"https://pbs.twimg.com/media/E6AoCFqUUAAA4pm?format=jpg&name=medium"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 2000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
