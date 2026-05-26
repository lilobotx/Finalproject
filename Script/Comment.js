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
        CommentInput.value = "";
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            newComment,
            document.getElementById("CommentDisplay").firstChild,
          );
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            CommenterName,
            document.getElementById("CommentDisplay").firstChild,
          );
      } else if (text.toLowerCase() == "deel 3") {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5824173536051200";
        CommenterName.textContent = name || "Chud";
        CommentInput.value = "";
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            newComment,
            document.getElementById("CommentDisplay").firstChild,
          );
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            CommenterName,
            document.getElementById("CommentDisplay").firstChild,
          );
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
        CommentInput.value = "";
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            newComment,
            document.getElementById("CommentDisplay").firstChild,
          );
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            CommenterName,
            document.getElementById("CommentDisplay").firstChild,
          );
      } else if (text.toLowerCase().includes("wii")) {
        const newComment = document.createElement("audio");
        newComment.src = "../Assets/MM.opus";
        newComment.autoplay = true;
        newComment.loop = true;
        newComment.volume = 0.1;
        CommentInput.value = "";
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            newComment,
            document.getElementById("CommentDisplay").firstChild,
          );
      } else {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("p");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.textContent = text;
        CommenterName.textContent = name || "Anonymous";
        CommentInput.value = "";
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            newComment,
            document.getElementById("CommentDisplay").firstChild,
          );
        document
          .getElementById("CommentDisplay")
          .insertBefore(
            CommenterName,
            document.getElementById("CommentDisplay").firstChild,
          );
      }
    }
  } else {
    alert("Please enter a comment before submitting.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.endsWith("files.html")) {
    const CommenterName = document.createElement("h3");
    const newComment = document.createElement("p");
    CommenterName.classList.add("commentername");
    newComment.classList.add("comment");
    newComment.textContent = "useless info that no one asked for";
    CommenterName.textContent = "Passive Agressive Chud";
    document
      .getElementById("CommentDisplay")
      .insertBefore(
        newComment,
        document.getElementById("CommentDisplay").firstChild,
      );
    document
      .getElementById("CommentDisplay")
      .insertBefore(
        CommenterName,
        document.getElementById("CommentDisplay").firstChild,
      );
  } else if (window.location.href.endsWith("displays.html")) {
    const CommenterName = document.createElement("h3");
    const newComment = document.createElement("p");
    CommenterName.classList.add("commentername");
    newComment.classList.add("comment");
    newComment.textContent =
      "wow that was really cool. it was almost like my life's purpose was to see that and comment on it";
    CommenterName.textContent = "Graphical G";
    document
      .getElementById("CommentDisplay")
      .insertBefore(
        newComment,
        document.getElementById("CommentDisplay").firstChild,
      );
    document
      .getElementById("CommentDisplay")
      .insertBefore(
        CommenterName,
        document.getElementById("CommentDisplay").firstChild,
      );
  }
});
