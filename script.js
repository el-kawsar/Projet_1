const bouton = document.getElementById("btnMessage");
const message = document.getElementById("message");

bouton.addEventListener("click", function() {
    message.textContent = "Bienvenue sur ma page personnelle ! 😊";
});
