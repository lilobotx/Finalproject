const NameInput = document.getElementById("name"); // Form inputs
const CommentInput = document.getElementById("comment");
const SubmitButton = document.getElementById("submit");

SubmitButton.addEventListener("click", function (event) {
  //Submit
  event.preventDefault(); // Gör så att sidan inte laddar om.
  const name = NameInput.value.trim(); // får och trimmar användarnamnet
  const text = CommentInput.value.trim(); // får och trimmar kommentaren

  if (text != "") {
    if (name.length > 24) {
      //24 bokstäver namn gräns annars namn blir för långt.
      alert("Name cannot exceed 24 characters.");
      return;
    }
    if (text.length > 16000) {
      //16000 bokstäver kommentar gräns annars kommentar blir för lång.
      alert(
        "I will not let you bomb the comment section with a comment that long.",
      );
      return;
    } else {
      if (
        text.toLowerCase() === "it is only me" || //massor av random google song maker låtar som jag har gjort och embeddad som går att få fram via att skriva ett visst ord/fras. Google fångar in cookies för ingen anledning. Job had one bro.
        text.toLowerCase() === "it's only me" ||
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
        //detta är inte ett bug
        const newComment = document.createElement("audio");
        newComment.src = "Assets/MM.opus";
        newComment.autoplay = true;
        newComment.loop = true;
        newComment.volume = 0.1;
        CommentInput.value = "";
      } else if (text.toLowerCase() == "doctor said") {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5841741193805824";
        CommenterName.textContent = name || "Chud + Doctor";
        Commented(CommenterName, newComment);
      } else if (text.toLowerCase() == "spices") {
        const CommenterName = document.createElement("h3");
        const newComment = document.createElement("iframe");
        CommenterName.classList.add("commentername");
        newComment.classList.add("comment");
        newComment.src =
          "https://musiclab.chromeexperiments.com/Song-Maker/embed/5817681592320000";
        CommenterName.textContent = name || "The Dutch";
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
        //kommentaren skrivs här.
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
    alert("Please enter a comment before submitting."); //mangot skrev inget.
  }
});

document.addEventListener("DOMContentLoaded", function () {
  //Fake comments
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
      "What is he talking about? Is it all in his head? Is he a chud? Is he a king? Is he a dutch? Is he a brother? Who knows.",
    );
    AddFakeComment("Lurker", "Insert (Does he know?)");
  }
});

function Commented(CommenterName, newComment) {
  //Lägger till kommentaren i kommentarsfältet.
  CommentInput.value = "";
  document.getElementById("CommentDisplay").appendChild(CommenterName);
  document.getElementById("CommentDisplay").appendChild(newComment);
}

function AddFakeComment(name, text) {
  //Lägger till fake kommentarer.
  const CommenterName = document.createElement("h3");
  const newComment = document.createElement("p");
  CommenterName.classList.add("commentername");
  newComment.classList.add("comment");
  newComment.textContent = text;
  CommenterName.textContent = name;
  Commented(CommenterName, newComment);
}
