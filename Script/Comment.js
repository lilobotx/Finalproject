const NameInput = document.getElementById("name");
const CommentInput = document.getElementById("comment");
const SubmitButton = document.getElementById("submit");

SubmitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const name = NameInput.value.trim();
  const text = CommentInput.value.trim();

  if (text != "") {
    if (name.length > 24) {
      alert("Name cannot exceed 24 characters.");
      return;
    } else {
      if (
        text.toLowerCase() === "it is only me" ||
        text.toLowerCase() === "it's only me" ||
        text.toLowerCase() === "overture" ||
        text.toLowerCase() === "deel 6" ||
        text.toLowerCase() === "its only me" ||
        text.toLowerCase() === "ouverture"
      ) {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/6378596402331648";
        CommenterName.textContent = name || "Chud";
        Commented(CommenterName, newComment);
      } else if (text.toLowerCase() == "deel 3") {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5824173536051200";
        CommenterName.textContent = name || "Chud";
        Commented(CommenterName, newComment);
      } else if (
        text.toLowerCase() == "overtime" ||
        text.toLowerCase() == "sudden death"
      ) {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5081172681555968";
        CommenterName.textContent = name || "King";
        Commented(CommenterName, newComment);
      } else if (text.toLowerCase().includes("wii")) {
        const newComment = document.createElement("audio");
        newComment.src = "../Assets/MM.opus";
        newComment.autoplay = true;
        newComment.loop = true;
        newComment.volume = 0.1;
        Commented(CommenterName, newComment);
      } else if (text.toLowerCase() == "doctor said") {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5841741193805824";
        CommenterName.textContent = name || "Chud + Doctor";
        Commented(CommenterName, newComment);
      } else if (
        text.toLowerCase() == "will you sail" ||
        text.toLowerCase() == "spices"
      ) {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5817681592320000";
        CommenterName.textContent = name || "Waffle Enjoyer";
        Commented(CommenterName, newComment);
      } else if (text.toLowerCase() == "new soup") {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5684209074700288";
        CommenterName.textContent = name || "Brother";
        Commented(CommenterName, newComment);
      } else {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("p");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.textContent = text;
        CommenterName.textContent = name || "Anonymous";
        Commented(CommenterName, newComment);
      }
    }
  } else {
    alert("Please enter a comment before submitting.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.endsWith("files.html")) {
    AddFakeComment("Passive Agressive Chud", "USELESS INFORMATION!!!");
    AddFakeComment("Anonymous", "I hate passive aggressive chuds.");
  } else if (window.location.href.endsWith("displays.html")) {
    AddFakeComment(
      "Graphical G",
      "Wow it is displaying what my display can display on my display that displays the thing that can be displayed. Wonderful.",
    );
    AddFakeComment(
      "Random Schizo",
      "What is he talking about? Is it all in his head? Is he a chud? Is he a king? Is he a waffle enjoyer? Is he a brother? Who knows.",
    );
    AddFakeComment("Lurker", "Insert (Does he know?)");
  }
});

function Commented(CommenterName, newComment) {
  CommentInput.value = "";
  document.getElementById("CommentDisplay").appendChild(CommenterName);
  document.getElementById("CommentDisplay").appendChild(newComment);
}

function AddFakeComment(name, text) {
  const CommenterName = document.createElement("h3");
  const newComment = document.createElement("p");
  CommenterName.classList.add("commentername");
  newComment.classList.add("comment");
  newComment.textContent = text;
  CommenterName.textContent = name;
  Commented(CommenterName, newComment);
}
