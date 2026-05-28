const PNGButton = document.getElementById("PNGButton"); //alla knappar och element som behövs för att byta display och ändra stats.
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
const QualityDisc = document.getElementById("QualityDisc");
const EfficiencyDisc = document.getElementById("EfficiencyDisc");
const SpeedDisc = document.getElementById("SpeedDisc");
const CompatibilityDisc = document.getElementById("CompatibilityDisc");

let selectedFormat = "Assets/PNG.png";

PNGButton.addEventListener("click", function (event) {
  //ändrar stats och bild
  console.log("PNG Button Clicked");
  selectedFormat = "Assets/PNG.png";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "95/100";
  NumEfficiencyStat.textContent = "75/100";
  NumSpeedStat.textContent = "50/100";
  NumCompatibilityStat.textContent = "95/100";
  StatQuality.style.width = "95%";
  StatEfficiency.style.width = "75%";
  StatSpeed.style.width = "50%";
  StatCompatibility.style.width = "95%";
  QualityDisc.textContent =
    "PNG is a lossless format, which means that it preserves all image details and colors in up to 8-bit per channels RGBA.";
  EfficiencyDisc.textContent =
    "PNG uses lossless compression reducing file size and preserving all image details and colors. However, it is not as efficient as lossy formats, which can achieve much smaller file sizes by sacrificing some image quality.";
  SpeedDisc.textContent =
    "Higher quality formats like PNG can take longer to load and display due to their larger file sizes and its more complex compression algorithms.";
  CompatibilityDisc.textContent =
    "PNG is widely supported by web browsers, image editing software, and other applications.";
});

JPGButton.addEventListener("click", function (event) {
  console.log("JPG Button Clicked");
  selectedFormat = "Assets/JPG.jpg";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "50/100";
  NumEfficiencyStat.textContent = "90/100";
  NumSpeedStat.textContent = "90/100";
  NumCompatibilityStat.textContent = "100/100";
  StatQuality.style.width = "50%";
  StatEfficiency.style.width = "90%";
  StatSpeed.style.width = "90%";
  StatCompatibility.style.width = "100%";
  QualityDisc.textContent =
    "JPG is a lossy format (compresses images by discarding some image data). JPG does not support transparency. JPG struggles with images that have sharp edges and text, as it can introduce artifacts and blurring.";
  EfficiencyDisc.textContent =
    "JPG uses lossy compression in multiple passes. Can achieve much smaller file sizes at the cost of some image quality.";
  SpeedDisc.textContent = "JPG files are usually small.";
  CompatibilityDisc.textContent =
    "JPG is widely supported by web browsers, image editing software, and other applications.";
});

GIFButton.addEventListener("click", function (event) {
  console.log("GIF Button Clicked");
  selectedFormat = "Assets/GIF.gif";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "25/100";
  NumEfficiencyStat.textContent = "25/100";
  NumSpeedStat.textContent = "25/100";
  NumCompatibilityStat.textContent = "80/100";
  StatQuality.style.width = "25%";
  StatEfficiency.style.width = "25%";
  StatSpeed.style.width = "25%";
  StatCompatibility.style.width = "80%";
  QualityDisc.textContent =
    "GIF is a simple format that supports animation and 1-bit transparency. It can only display up to 256 colors, which makes it unsuitable for photographs and images with many colors and gradients.";
  EfficiencyDisc.textContent =
    "GIF uses lossless compression, But the technology is so ancient that the compression is very inefficient.";
  SpeedDisc.textContent = "GIF files are unessesarily large.";
  CompatibilityDisc.textContent =
    "GIF is widely supported by web browsers, some image editing software, and other applications.";
});

MP4Button.addEventListener("click", function (event) {
  console.log("MP4 Button Clicked");
  selectedFormat = "Assets/hadi-shatter.gif";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "60/100";
  NumEfficiencyStat.textContent = "70/100";
  NumSpeedStat.textContent = "10/100";
  NumCompatibilityStat.textContent = "80/100";
  StatQuality.style.width = "60%";
  StatEfficiency.style.width = "70%";
  StatSpeed.style.width = "10%";
  StatCompatibility.style.width = "80%";
  QualityDisc.textContent =
    "MP4 is a video format that supports high-quality video playback.";
  EfficiencyDisc.textContent =
    "MP4 uses mostly efficient compression depending on the codec used with H.264 being the most common and AV1 being the best in terms of efficiency. However, AV1 is not widely supported and requires much more processing power to encode and decode compared to H.264.";
  SpeedDisc.textContent =
    "Video files are larger and take longer to load and play than image files.";
  CompatibilityDisc.textContent =
    "MP4 is widely supported by web browsers, video players, and other applications.";
});

WEBPButton.addEventListener("click", function (event) {
  console.log("WEBP Button Clicked");
  selectedFormat = "Assets/WebP.webp";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "70/100";
  NumEfficiencyStat.textContent = "95/100";
  NumSpeedStat.textContent = "90/100";
  NumCompatibilityStat.textContent = "65/100";
  StatQuality.style.width = "70%";
  StatEfficiency.style.width = "95%";
  StatSpeed.style.width = "90%";
  StatCompatibility.style.width = "65%";
  QualityDisc.textContent =
    "WEBP is a modern image format that supports both lossless and lossy compression.";
  EfficiencyDisc.textContent =
    "WEBP uses efficient compression, which means that it can achieve smaller file sizes than JPEG while still preserving image quality.";
  SpeedDisc.textContent = "WEBP files are small and efficient.";
  CompatibilityDisc.textContent =
    "WEBP is widely supported by web browsers, image editing software, and other applications. But because it is a newer format, it may not be supported by older software and devices.";
});

SVGButton.addEventListener("click", function (event) {
  console.log("SVG Button Clicked");
  selectedFormat = "Assets/SVG.svg";
  SelectedIMG.src = selectedFormat;
  NumQualityStat.textContent = "100/100";
  NumEfficiencyStat.textContent = "100/100";
  NumSpeedStat.textContent = "90/100";
  NumCompatibilityStat.textContent = "35/100";
  StatQuality.style.width = "100%";
  StatEfficiency.style.width = "100%";
  StatSpeed.style.width = "90%";
  StatCompatibility.style.width = "35%";
  QualityDisc.textContent =
    "SVG is a vector image format that supports scalability and interactivity. Can basically be infinitely scaled without losing quality. making it ideal for logos, icons, and other graphics that need to be displayed at different sizes. It is not ideal for photographs and images with many colors and gradients.";
  EfficiencyDisc.textContent =
    "Vector formats use mathematical equations to represent images, which means that they can achieve smaller file sizes than raster formats like PNG and JPEG, especially for simple graphics and images with large areas of solid color. However, for complex images with many details and colors, SVG files can become larger than raster formats.";
  SpeedDisc.textContent =
    "SVG files are generally smaller and load faster than raster image files depenging on the complexity of the image. Simple SVG files can load very quickly, while complex SVG files with many details and animations may take longer to load and render.";
  CompatibilityDisc.textContent =
    "SVG is widely supported by web browsers, few image editing software, and applications. However, because it is a vector format, it may not be supported by older software that only support raster formats.";
});
