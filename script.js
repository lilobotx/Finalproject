const PNGButton = document.getElementById("PNGButton");
const JPGButton = document.getElementById("JPGButton");
const GIFButton = document.getElementById("GIFButton");
const MP4Button = document.getElementById("MP4Button");
const WEBPButton = document.getElementById("WEBPButton");
const SVGButton = document.getElementById("SVGButton");
const SelectedIMG = document.getElementById("SelectedIMG");

let selectedFormat = "../Assets/Easy.webp";

PNGButton.addEventListener("click", function (event) {
  console.log("PNG Button Clicked");
  selectedFormat = "../Assets/PNG.png";
  SelectedIMG.src = selectedFormat;
});

JPGButton.addEventListener("click", function (event) {
  console.log("JPG Button Clicked");
  selectedFormat = "../Assets/JPG.jpg";
  SelectedIMG.src = selectedFormat;
});

GIFButton.addEventListener("click", function (event) {
  console.log("GIF Button Clicked");
  selectedFormat = "../Assets/GIF.gif";
  SelectedIMG.src = selectedFormat;
});

MP4Button.addEventListener("click", function (event) {
  console.log("MP4 Button Clicked");
  selectedFormat = "../Assets/hadi-shatter.gif";
  SelectedIMG.src = selectedFormat;
});

WEBPButton.addEventListener("click", function (event) {
  console.log("WEBP Button Clicked");
  selectedFormat = "../Assets/WebP.webp";
  SelectedIMG.src = selectedFormat;
});

SVGButton.addEventListener("click", function (event) {
  console.log("SVG Button Clicked");
  selectedFormat = "../Assets/SVG.svg";
  SelectedIMG.src = selectedFormat;
});
