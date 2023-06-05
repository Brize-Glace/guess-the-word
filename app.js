const randomIndex = Math.floor(Math.random() * words.length);
const selectedWord = words[randomIndex];
const wordElement = document.getElementById("word");
const guessInput = document.getElementById("guess");
const messageElement = document.getElementById("message");
const triesElement = document.getElementById("tries");

console.log(words);

let guessedLetters = [];
let remainingTries = 15;

function initializeWord() {
  let displayWord = "";
  for (let i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.includes(selectedWord[i])) {
      displayWord += selectedWord[i];
    } else {
      displayWord += "_";
    }
    displayWord += " ";
  }
  wordElement.textContent = displayWord;
}

function checkGuess() {
  const guess = guessInput.value.toLowerCase();

  if (guessedLetters.includes(guess)) {
    messageElement.textContent = "Tu as déjà essayé cette lettre ou ce mot. Essaye autre chose !";
    return;
  }

  if (guess.length === 1) {
    guessedLetters.push(guess);

    if (selectedWord.includes(guess)) {
      messageElement.textContent = "La lettre est présente dans le mot !";
    } else {
      messageElement.textContent = "La lettre n'est pas dans le mot. Essaie encore !";
      remainingTries--;
      triesElement.textContent = `Essais restants : ${remainingTries}`;

      if (remainingTries === 0) {
        guessInput.disabled = true;
        messageElement.textContent = `Tu as épuisé tous tes essais. Le mot était "${selectedWord}".`;
      }
    }
  } else if (guess.length === selectedWord.length) {
    if (guess === selectedWord) {
      guessedLetters = selectedWord.split("");
      guessInput.disabled = true;
      messageElement.textContent = "Bravo, tu as deviné le mot correctement !";
    } else {
      messageElement.textContent = "Ce n'est pas le bon mot. Essaie encore !";
      remainingTries--;
      triesElement.textContent = `Essais restants : ${remainingTries}`;

      if (remainingTries === 0) {
        guessInput.disabled = true;
        messageElement.textContent = `Tu as épuisé tous tes essais. Le mot était "${selectedWord}".`;
      }
    }
  } else {
    messageElement.textContent = "La supposition doit être une lettre unique ou un mot de la même longueur que le mot à deviner.";
  }

  initializeWord();
  guessInput.value = "";
}

initializeWord();
triesElement.textContent = `Essais restants : ${remainingTries}`;
