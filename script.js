const PNGButton = document.getElementById("PNGButton");
const JPGButton = document.getElementById("JPGButton");
const GIFButton = document.getElementById("GIFButton");
const MP4Button = document.getElementById("MP4Button");
const WEBPButton = document.getElementById("WEBPButton");
const SVGButton = document.getElementById("SVGButton");
const SelectedIMG = document.getElementById("SelectedIMG");
const StatQuality = document.getElementById("StatQuality");
const StatEfficiency = document.getElementById("StatEfficiency");
const StatSpeed = document.getElementById("StatSpeed");
const StatCompatibility = document.getElementById("StatCompatibility");
const NumQualityStat = document.getElementById("NumQualityStat");
const NumEfficiencyStat = document.getElementById("NumEfficiencyStat");
const NumSpeedStat = document.getElementById("NumSpeedStat");
const NumCompatibilityStat = document.getElementById("NumCompatibilityStat");

let selectedFormat = "../Assets/Easy.webp";

PNGButton.addEventListener("click", function (event) {
  console.log("PNG Button Clicked");
  selectedFormat = "../Assets/PNG.png";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "95/100";
  NumEfficiencyStat.textContent = "76/100";
  NumSpeedStat.textContent = "50/100";
  NumCompatibilityStat.textContent = "95/100";
  StatQuality.style.width = "95%";
  StatEfficiency.style.width = "76%";
  StatSpeed.style.width = "50%";
  StatCompatibility.style.width = "95%";
});

JPGButton.addEventListener("click", function (event) {
  console.log("JPG Button Clicked");
  selectedFormat = "../Assets/JPG.jpg";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "50/100";
  NumEfficiencyStat.textContent = "90/100";
  NumSpeedStat.textContent = "90/100";
  NumCompatibilityStat.textContent = "100/100";
  StatQuality.style.width = "50%";
  StatEfficiency.style.width = "90%";
  StatSpeed.style.width = "90%";
  StatCompatibility.style.width = "100%";
});

GIFButton.addEventListener("click", function (event) {
  console.log("GIF Button Clicked");
  selectedFormat = "../Assets/GIF.gif";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "25/100";
  NumEfficiencyStat.textContent = "25/100";
  NumSpeedStat.textContent = "25/100";
  NumCompatibilityStat.textContent = "80/100";
  StatQuality.style.width = "25%";
  StatEfficiency.style.width = "25%";
  StatSpeed.style.width = "25%";
  StatCompatibility.style.width = "80%";
});

MP4Button.addEventListener("click", function (event) {
  console.log("MP4 Button Clicked");
  selectedFormat = "../Assets/hadi-shatter.gif";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "60/100";
  NumEfficiencyStat.textContent = "50/100";
  NumSpeedStat.textContent = "10/100";
  NumCompatibilityStat.textContent = "70/100";
  StatQuality.style.width = "60%";
  StatEfficiency.style.width = "50%";
  StatSpeed.style.width = "10%";
  StatCompatibility.style.width = "70%";
});

WEBPButton.addEventListener("click", function (event) {
  console.log("WEBP Button Clicked");
  selectedFormat = "../Assets/WebP.webp";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "70/100";
  NumEfficiencyStat.textContent = "95/100";
  NumSpeedStat.textContent = "90/100";
  NumCompatibilityStat.textContent = "65/100";
  StatQuality.style.width = "70%";
  StatEfficiency.style.width = "95%";
  StatSpeed.style.width = "90%";
  StatCompatibility.style.width = "65%";
});

SVGButton.addEventListener("click", function (event) {
  console.log("SVG Button Clicked");
  selectedFormat = "../Assets/SVG.svg";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "100/100";
  NumEfficiencyStat.textContent = "100/100";
  NumSpeedStat.textContent = "90/100";
  NumCompatibilityStat.textContent = "35/100";
  StatQuality.style.width = "100%";
  StatEfficiency.style.width = "100%";
  StatSpeed.style.width = "90%";
  StatCompatibility.style.width = "35%";
});
