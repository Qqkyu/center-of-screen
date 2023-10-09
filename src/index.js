import "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.0/split.min.js";

const Split = window.Split;

const gutterSize = 10;
const minSize = 0;
const snapOffset = 0;

Split(["#split-0-0", "#split-0-1"], {
  minSize,
  snapOffset,
  gutterSize,
  onDrag: () => {
    const leftSideWidth = document.getElementById("split-0-1").clientWidth;
    document.getElementById("split-1-0").style.width = `${leftSideWidth}px`;
    document.getElementById(
      "split-1-1"
    ).style.width = `calc(100% - ${leftSideWidth}px - ${gutterSize / 2}px)`;
  },
});

Split(["#split-1-0", "#split-1-1"], {
  minSize,
  snapOffset,
  gutterSize,
  onDrag: () => {
    const rightSideWidth = document.getElementById("split-1-0").clientWidth;
    document.getElementById("split-0-1").style.width = `${rightSideWidth}px`;
    document.getElementById(
      "split-0-0"
    ).style.width = `calc(100% - ${rightSideWidth}px - ${gutterSize / 2}px)`;
  },
});

const fullscreenBtn = document.getElementById("fullscreen-button");

fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement == null) {
    fullscreenBtn.innerText = "Exit fullscreen";
    document.body.requestFullscreen();
  } else {
    fullscreenBtn.innerText = "Enter fullscreen";
    document.exitFullscreen();
  }
});