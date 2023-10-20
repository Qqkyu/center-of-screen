import "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.0/split.min.js";

const Split = window.Split;

const gutterSize = 10;
const minSize = 20;
const snapOffset = 0;

function convertPxToCm(px) {
  return Math.round(((px * window.devicePixelRatio * 2.54) / 96) * 100) / 100;
}

Split(["#split-0-0", "#split-0-1"], {
  minSize,
  snapOffset,
  gutterSize,
  onDrag: () => {
    const leftSideWidth = document.getElementById("split-0-1").clientWidth;
    document.getElementById("px-size").innerText = `${leftSideWidth * 2} px`;
    document.getElementById("cm-size").innerText = `${convertPxToCm(
      leftSideWidth * 2
    )} cm`;
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
    document.getElementById("px-size").innerText = `${rightSideWidth * 2} px`;
    document.getElementById("cm-size").innerText = `${convertPxToCm(
      rightSideWidth * 2
    )} cm`;
    document.getElementById("split-0-1").style.width = `${rightSideWidth}px`;
    document.getElementById(
      "split-0-0"
    ).style.width = `calc(100% - ${rightSideWidth}px - ${gutterSize / 2}px)`;
  },
});

const fullscreenBtn = document.getElementById("fullscreen-button");

fullscreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  const enterFullscreenImg = fullscreenBtn.querySelector(
    "#enter-fullscreen-img"
  );
  const exitFullscreenImg = fullscreenBtn.querySelector("#exit-fullscreen-img");

  if (document.fullscreenElement) {
    enterFullscreenImg.style.display = "none";
    exitFullscreenImg.style.display = "block";
    fullscreenBtn.title = "Exit fullscreen mode";
  } else {
    enterFullscreenImg.style.display = "block";
    exitFullscreenImg.style.display = "none";
    fullscreenBtn.title = "Open fullscreen mode";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sideWidth = document.getElementById("split-0-1").clientWidth;
  document.getElementById("px-size").innerText = `${sideWidth * 2} px`;
  document.getElementById("cm-size").innerText = `${convertPxToCm(
    sideWidth * 2
  )} cm`;
});
