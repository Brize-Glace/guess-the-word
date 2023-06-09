const codeInput = document.getElementById("codeAnim");
const form = document.getElementById("codeForm");
const displayGame = document.getElementsByClassName("container")[0];
const displayVerif = document.getElementsByClassName("verify")[0];
const messageCode = document.getElementById("messageCode")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredCode = codeInput.value;

    fetch("https://api.jsonbin.io/v3/b/64832fb58e4aa6225eaba52e/latest", {
        headers:{
            "X-Master-Key": "$2b$10$3LAJC/h3ZR4euvKhXUECpOG5fFd8DRH89xCInUlVFdLhFkI7GyrZK"
        }
    })
    .then(response => response.json())
    .then(data => {
        const codeAnim = data.record.codes;

        if (codeAnim.includes(enteredCode)) {
            console.log("code valide!");
            displayVerif.style.display = "none";
            displayGame.style.display = "flex"
            messageCode.innerHTML = "Code Valide!"
        } else {
            console.log("code invalide!");
            messageCode.innerHTML = "Code Invalide!"
        }
    })
    .catch(error => {
        console.error("erreur lors de la requête API vers la source externe: ", error)
    });
});