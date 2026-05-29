const NameInput = document.getElementById("name"); // Form inputs
const CommentInput = document.getElementById("comment");
const SubmitButton = document.getElementById("submit");
const googe = new Map([
  [
    "it is only me",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/6378596402331648",
      defaultName: "Chud",
    },
  ],
  [
    "it's only me",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/6378596402331648",
      defaultName: "Chud",
    },
  ],
  [
    "its only me",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/6378596402331648",
      defaultName: "Chud",
    },
  ],
  [
    "ouverture",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/6378596402331648",
      defaultName: "Chud",
    },
  ],
  [
    "deel 3",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/5824173536051200",
      defaultName: "Chud",
    },
  ],
  [
    "overtime",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/5081172681555968",
      defaultName: "King",
    },
  ],
  [
    "sudden death",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/5081172681555968",
      defaultName: "King",
    },
  ],
  [
    "doctor said",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/5841741193805824",
      defaultName: "Chud + Doctor",
    },
  ],
  [
    "spices",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/5817681592320000",
      defaultName: "The Dutch",
    },
  ],
  [
    "new soup",
    {
      src: "https://musiclab.chromeexperiments.com/Song-Maker/embed/5684209074700288",
      defaultName: "Brother",
    },
  ],
]);

SubmitButton.addEventListener("click", function (event) {
  //Submit
  event.preventDefault(); // Gör så att sidan inte laddar om.
  const name = NameInput.value.trim(); // får och trimmar användarnamnet
  const text = CommentInput.value.trim(); // får och trimmar kommentaren
  const lowerText = text.toLowerCase(); //för checking

  if (text === "") {
    //imagine inte skriva något
    alert("Please enter a comment before submitting.");
    return;
  }
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
  }
  if (text.toLowerCase().includes("wii")) {
    //detta är inte ett bug
    const newComment = document.createElement("audio");
    newComment.src = "../Assets/MM.opus";
    newComment.autoplay = true;
    newComment.loop = true;
    newComment.volume = 0.1;
    CommentInput.value = "";
    return;
  }
  const CommenterName = document.createElement("h3");
  CommenterName.classList.add("commentername");

  if (googe.has(lowerText)) {
    const googer = googe.get(lowerText);
    const newComment = document.createElement("iframe");
    newComment.classList.add("comment");
    newComment.src = googer.src; // sandbox för säkerhet
    newComment.setAttribute("sandbox", "allow-scripts allow-same-origin");
    CommenterName.textContent = name || googer.defaultName;
    Commented(CommenterName, newComment);
  } else {
    //kommentaren skrivs här.
    const newComment = document.createElement("p");
    CommenterName.classList.add("commentername");
    newComment.classList.add("comment");
    newComment.textContent = text;
    CommenterName.textContent = name || "Anonymous";
    Commented(CommenterName, newComment);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  //Fake comments
  const page = window.location.pathname.split("/").pop();
  if (page === "files.html") {
    AddFakeComment("Passive Agressive Chud", "USELESS INFORMATION!!!");
    AddFakeComment("Anonymous", "I hate passive aggressive chuds.");
  } else if (page === "displays.html") {
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

function sanitize(str) {
  //gör inget just nu + jag har störra fisk att fritera inom programmering
  //kastrerar text för att förhindra XSS attacker även längre.
  const div = document.createElement("div");
  div.textContent = str;
  return div.textContent;
}
