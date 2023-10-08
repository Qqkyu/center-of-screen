import "https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.0/split.min.js";

const Split = window.Split;

const gutterSize = 10;

Split(["#split-0-0", "#split-0-1"], {
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
  gutterSize,
  onDrag: () => {
    const rightSideWidth = document.getElementById("split-1-0").clientWidth;
    document.getElementById("split-0-1").style.width = `${rightSideWidth}px`;
    document.getElementById(
      "split-0-0"
    ).style.width = `calc(100% - ${rightSideWidth}px - ${gutterSize / 2}px)`;
  },
});
