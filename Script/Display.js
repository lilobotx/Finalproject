const OLEDButton = document.getElementById("OLEDButton");
const IPSButton = document.getElementById("IPSButton");
const VAButton = document.getElementById("VAButton");
const TNButton = document.getElementById("TNButton");
const CRTButton = document.getElementById("CRTButton");
const MicroLEDButton = document.getElementById("MicroLEDButton");
const SelectedIMG = document.getElementById("SelectedIMG");
const ColorStat = document.getElementById("ColorStat");
const ContrastStat = document.getElementById("ContrastStat");
const EfficiencyStat = document.getElementById("EfficiencyStat");
const SpeedStat = document.getElementById("SpeedStat");
const ViewingAngleStat = document.getElementById("ViewingAngleStat");
const AffordabilityStat = document.getElementById("AffordabilityStat");
const ColorDisc = document.getElementById("ColorDisc");
const ContrastDisc = document.getElementById("ContrastDisc");
const EfficiencyDisc = document.getElementById("EfficiencyDisc");
const SpeedDisc = document.getElementById("SpeedDisc");
const ViewingAngleDisc = document.getElementById("ViewingAngleDisc");
const AffordabilityDisc = document.getElementById("AffordabilityDisc");
const NumColorStat = document.getElementById("NumColorStat");
const NumContrastStat = document.getElementById("NumContrastStat");
const NumEfficiencyStat = document.getElementById("NumEfficiencyStat");
const NumSpeedStat = document.getElementById("NumSpeedStat");
const NumViewingAngleStat = document.getElementById("NumViewingAngleStat");
const NumAffordabilityStat = document.getElementById("NumAffordabilityStat");

let selectedFormat = "../Assets/PNG.png";

OLEDButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/OLED.png";
  SelectedIMG.src = selectedFormat;
  ColorStat.style.width = "95%";
  ContrastStat.style.width = "100%";
  EfficiencyStat.style.width = "75%";
  SpeedStat.style.width = "95%";
  ViewingAngleStat.style.width = "90%";
  AffordabilityStat.style.width = "10%";
  NumColorStat.textContent = "95/100";
  NumContrastStat.textContent = "100/100";
  NumEfficiencyStat.textContent = "75/100";
  NumSpeedStat.textContent = "95/100";
  NumViewingAngleStat.textContent = "90/100";
  NumAffordabilityStat.textContent = "10/100";
  ColorDisc.textContent =
    "OLED screens have exellent color reproduction. Each pixel emits its own light, allowing for true black levels and vibrant colors.";
  ContrastDisc.textContent =
    "OLED displays have perfect contrast because they can turnoff individual pixels.";
  EfficiencyDisc.textContent =
    "OLED screens can be less energy efficient than other display technologies, especially when displaying bright content, as each pixel emits its own light.";
  SpeedDisc.textContent =
    "OLED displays have very fast response times, often in the range of 0.1 to 1 millisecond, which allows for smooth motion and reduced motion blur.";
  ViewingAngleDisc.textContent =
    "OLED screens have wide viewing angles, maintaining color accuracy and contrast even when viewed from the side.";
  AffordabilityDisc.textContent = "OLED screens are expensive.";
});

IPSButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/IPS.png";
  SelectedIMG.src = selectedFormat;
  ColorStat.style.width = "80%";
  ContrastStat.style.width = "70%";
  EfficiencyStat.style.width = "70%";
  SpeedStat.style.width = "90%";
  ViewingAngleStat.style.width = "80%";
  AffordabilityStat.style.width = "75%";
  NumColorStat.textContent = "80/100";
  NumContrastStat.textContent = "70/100";
  NumEfficiencyStat.textContent = "70/100";
  NumSpeedStat.textContent = "90/100";
  NumViewingAngleStat.textContent = "80/100";
  NumAffordabilityStat.textContent = "75/100";
  ColorDisc.textContent =
    "IPS panels have good color reproduction, with accurate and vibrant colors.";
  ContrastDisc.textContent =
    "The backlight in IPS panel leads to lower contrast ratios as it can cause light bleed";
  EfficiencyDisc.textContent =
    "IPS panels have decent energy efficiency and consumes more power because of its complex design and backlight.";
  SpeedDisc.textContent = "IPS panels have fast response times.";
  ViewingAngleDisc.textContent =
    "IPS panels have wide viewing angles, maintaining color accuracy and contrast even when viewed from the side.";
  AffordabilityDisc.textContent = "Most likely it won't bankrupt you.";
});

VAButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/VA.png";
  SelectedIMG.src = selectedFormat;
  ColorStat.style.width = "70%";
  ContrastStat.style.width = "80%";
  EfficiencyStat.style.width = "75%";
  SpeedStat.style.width = "70%";
  ViewingAngleStat.style.width = "70%";
  AffordabilityStat.style.width = "80%";
  NumColorStat.textContent = "70/100";
  NumContrastStat.textContent = "80/100";
  NumEfficiencyStat.textContent = "75/100";
  NumSpeedStat.textContent = "70/100";
  NumViewingAngleStat.textContent = "70/100";
  NumAffordabilityStat.textContent = "80/100";
  ColorDisc.textContent = "VA panels have good color reproduction.";
  ContrastDisc.textContent =
    "VA panels have excellent contrast ratios, providing deep blacks.";
  EfficiencyDisc.textContent =
    "VA panels are generally more energy efficient than OLED screens, as they use a backlight to illuminate the pixels.";
  SpeedDisc.textContent = "VA panels don't have the fastest response times.";
  ViewingAngleDisc.textContent =
    "VA panels have narrow viewing angles, which can lead to color shifts and reduced contrast when viewed from the side.";
  AffordabilityDisc.textContent = "VA panels are generally affordable.";
});

TNButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/TN.png";
  SelectedIMG.src = selectedFormat;
  ColorStat.style.width = "60%";
  ContrastStat.style.width = "40%";
  EfficiencyStat.style.width = "85%";
  SpeedStat.style.width = "90%";
  ViewingAngleStat.style.width = "25%";
  AffordabilityStat.style.width = "95%";
  NumColorStat.textContent = "60/100";
  NumContrastStat.textContent = "40/100";
  NumEfficiencyStat.textContent = "85/100";
  NumSpeedStat.textContent = "90/100";
  NumViewingAngleStat.textContent = "25/100";
  NumAffordabilityStat.textContent = "95/100";
  ColorDisc.textContent =
    "TN panels have poor color reproduction, with less accurate and less vibrant colors compared to other panel types.";
  ContrastDisc.textContent =
    "TN panels have lower contrast ratios compared to other panel types.";
  EfficiencyDisc.textContent =
    "TN panels are generally energy efficient, as they use a simpler design and backlight.";
  SpeedDisc.textContent = "TN panels have really fast response times.";
  ViewingAngleDisc.textContent =
    "TN panels have very narrow viewing angles, which can lead to color shifts and reduced contrast when viewed from the side.";
  AffordabilityDisc.textContent = "TN panels are affordable.";
});

CRTButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/CRT.png";
  SelectedIMG.src = selectedFormat;
  ColorStat.style.width = "80%";
  ContrastStat.style.width = "70%";
  EfficiencyStat.style.width = "10%";
  SpeedStat.style.width = "95%";
  ViewingAngleStat.style.width = "95%";
  AffordabilityStat.style.width = "20%";
  NumColorStat.textContent = "80/100";
  NumContrastStat.textContent = "70/100";
  NumEfficiencyStat.textContent = "10/100";
  NumSpeedStat.textContent = "95/100";
  NumViewingAngleStat.textContent = "95/100";
  NumAffordabilityStat.textContent = "20/100";
  ColorDisc.textContent = "CRT monitors have good color reproduction.";
  ContrastDisc.textContent = "CRT monitors have decent contrast ratios.";
  EfficiencyDisc.textContent = "Poor energy efficiency.";
  SpeedDisc.textContent = "CRT monitors have insanely fast response times.";
  ViewingAngleDisc.textContent =
    "CRT monitors have wide viewing angles, providing consistent color and contrast from various viewing positions.";
  AffordabilityDisc.textContent = "CRT monitors are generally affordable.";
});

MicroLEDButton.addEventListener("click", function (event) {
  selectedFormat = "../Assets/MicroLED.png";
  SelectedIMG.src = selectedFormat;
  ColorStat.style.width = "100%";
  ContrastStat.style.width = "100%";
  EfficiencyStat.style.width = "90%";
  SpeedStat.style.width = "100%";
  ViewingAngleStat.style.width = "100%";
  AffordabilityStat.style.width = "0%";
  NumColorStat.textContent = "100/100";
  NumContrastStat.textContent = "100/100";
  NumEfficiencyStat.textContent = "90/100";
  NumSpeedStat.textContent = "100/100";
  NumViewingAngleStat.textContent = "100/100";
  NumAffordabilityStat.textContent = "-100/100";
  ColorDisc.textContent =
    "MicroLED screens have exellent color reproduction. Each pixel emits its own light, allowing for true black levels and vibrant colors.";
  ContrastDisc.textContent =
    "MicroLED screens have perfect contrast ratios due to their ability to turn off individual pixels.";
  EfficiencyDisc.textContent =
    "MicroLED screens are more energy efficient as they use inorganic materials that are more efficient at emitting light.";
  SpeedDisc.textContent = "MicroLED screens have nano second response times.";
  ViewingAngleDisc.textContent =
    "MicroLED screens have wide viewing angles, maintaining color accuracy and contrast even when viewed from the side.";
  AffordabilityDisc.textContent =
    "MicroLED technology is still in the early stages of development and is currently very expensive to produce.";
});
