const OLEDButton = document.getElementById("OLEDButton");
const IPSButton = document.getElementById("IPSButton");
const VAButton = document.getElementById("VAButton");
const TNButton = document.getElementById("TNButton");
const CRTButton = document.getElementById("CRTButton");
const MicroLEDButton = document.getElementById("MicroLEDButton");
const SelectedIMG = document.getElementById("SelectedIMG");

let selectedFormat = "../Assets/PNG.png";

OLEDButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/PNG.png";
  SelectedIMG.src = selectedFormat;
});

JPGButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/JPG.jpg";
  SelectedIMG.src = selectedFormat;
});

GIFButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/GIF.gif";
  SelectedIMG.src = selectedFormat;
});

MP4Button.addEventListener("click", function (event) {
  selectedFormat = "../Assets/hadi-shatter.gif";
  SelectedIMG.src = selectedFormat;
});

WEBPButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/WebP.webp";
  SelectedIMG.src = selectedFormat;
});

SVGButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/SVG.svg";
  SelectedIMG.src = selectedFormat;
});
