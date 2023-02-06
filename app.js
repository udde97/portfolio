const themeButton = document.querySelector("#toggleTheme");

const darkmode = document.querySelector(".dark-layer");

// En toggle funktion som är knuten till en knapp som heter themebutton, inkluderat en if statement så att ifall  hemsidan har har en default färg så ska den ändra bakgrunds färgen till ''light-mode'' när an tryckt på knappen och vise versa för dark mode.
// Att ha en ändringsbar kontrast på hemsidan så att även användare med
// Här används även manipulation av dom träd genom att ändra namnet från darkmode till lightmode med hjälp av innertext.
themeButton.addEventListener("click", function toggleTheme(event) {
  if (document.querySelector(".dark-layer").style.backgroundColor == "") {
    themeButton.innerText = "Dark Mode";
    document.querySelector(".dark-layer").style.backgroundColor = "#f5f0f080";
  } else {
    themeButton.innerText = "Light Mode";
    document.querySelector(".dark-layer").style.backgroundColor = "";
  }
  console.log(document.querySelector(".dark-layer").style.backgroundColor);
});

//Meddelande funktion som fungerar

const fname = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  //  skrivs i html så att den skickas i rätt format, När jag får den i mailet ser jag sedan vem som skickat den och med vilka uppgifter. Variabeln används senare nedan i body.
  let ebody = `
        <b>Name: </b>${fname.value}
        <br>
        <b>Email: </b>${email.value}
        <br>
        <b>Message: </b>${message.value}
        
        `;
  // copy paste script som används för att sätta upp meddelande funktionen, Oroa er inte för lösenordet då det inte är lösenorder för min mail utan endast för smpt, jobbar dock på att  fixa en tokenkod så att den inte syns.

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mahamud.abukar@chasacademy.se",
    Password: "6D9D26F6FE09C79C03A26FD10A1202596894",
    To: "mahamud.abukar@chasacademy.se",
    From: "abukar.udd@gmail.com",
    Subject: "Email from:" + email.value,
    Body: ebody,
  }).then((message) => alert(message));
});
