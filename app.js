const words = [
  "chien", "chat", "oiseau", "poisson", "cheval", "éléphant", "tigre", "girafe", "souris", "lapin", "serpent",
  "loup", "renard", "perroquet", "écureuil", "tortue", "poulet", "canard", "mouton", "vache", "cochon", "abeille",
  "papillon", "escargot", "araignée", "grenouille", "crocodile", "ours", "lion", "pingouin", "autruche", "phasme",
  "singe", "gorille", "chimpanzé", "rat", "hamster", "léopard", "lynx", "phoque", "dauphin", "requin", "baleine",
  "girafe", "hippopotame", "rhinocéros", "koala", "kangourou", "panda", "sanglier", "cerf", "chameau", "dromadaire",
  "zèbre", "vautour", "faucon", "hibou", "aigle", "colibri", "corbeau", "pie", "moineau", "hirondelle", "perruche",
  "canari", "tourterelle", "merle", "rossignol", "étourneau", "geai", "corneille", "mésange", "pinson", "martin-pêcheur",
  "albatros", "mouette", "goéland", "cormoran", "pélican", "flamant", "cygne", "oie", "poule", "coq", "dindon", "paon",
  "caille", "faisan", "pintade", "aigrette", "héron", "cigogne", "perdrix", "coucou", "martinet", "chevalier",
  "sarcelle", "bécasseau", "bernache", "tarier", "foulque", "tadorne", "sizerin", "goélette", "pipit", "tarin",
  "gorgebleue", "bruant", "mouette", "bécassine", "engoulevent", "hirondelle", "huppe", "bergeronnette", "fuligule",
  "grèbe", "cormorant", "martin", "héron", "milan", "fauvette", "bergeronnette", "grive", "gobemouche", "pinson",
  "bruant", "traquet", "geai", "pouillot", "pigeon", "verdier", "rougequeue", "tarier", "buse", "huppe", "rossignol",
  "linotte", "serin", "hirondelle", "pétrel", "passereau", "roitelet", "guifette", "chevalier", "foulque", "courlis",
  "gravelot", "caille", "sittelle", "bécasse", "mésange", "sizerin", "héron", "cigogne", "perdrix", "pipit", "sarcelle",
  "canard", "pouillot", "paruline", "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne",
  "chevalier", "traquet", "buse", "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron",
  "cigogne", "milan", "fauvette", "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau",
  "guifette", "courlis", "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau",
  "mouette", "roitelet", "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit",
  "traquet", "guillemot", "roitelet", "gravelot", "sarcelle", "cormoran", "bécassine", "courlis", "merle", "oie",
  "pouillot", "paruline", "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne", "chevalier",
  "traquet", "buse", "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron", "cigogne", "milan",
  "fauvette", "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau", "guifette", "courlis",
  "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau", "mouette", "roitelet",
  "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit", "traquet", "guillemot",
  "roitelet", "gravelot", "sarcelle", "cormoran", "bécassine", "courlis", "merle", "oie", "pouillot", "paruline",
  "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne", "chevalier", "traquet", "buse",
  "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron", "cigogne", "milan", "fauvette",
  "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau", "guifette", "courlis",
  "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau", "mouette", "roitelet",
  "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit", "traquet", "guillemot",
  "roitelet", "gravelot", "sarcelle", "cormoran", "bécassine", "courlis", "merle", "oie", "pouillot", "paruline",
  "gorgebleue", "bécasseau", "bernache", "bruant", "fuligule", "goélette", "tadorne", "chevalier", "traquet", "buse",
  "tarier", "grive", "pinson", "grèbe", "colombe", "cormoran", "martin", "héron", "cigogne", "milan", "fauvette",
  "bergeronnette", "roitelet", "linotte", "serin", "hirondelle", "pétrel", "passereau", "guifette", "courlis",
  "gravelot", "sittelle", "bécasse", "mésange", "pic", "chardonneret", "faucon", "vanneau", "mouette", "roitelet",
  "busard", "chouette", "engoulevent", "bergeonnette", "fauvette", "martin-pêcheur", "pipit", "traquet", "guillemot"
];
const randomIndex = Math.floor(Math.random() * words.length);
const selectedWord = words[randomIndex];
const wordElement = document.getElementById("word");
const guessInput = document.getElementById("guess");
const messageElement = document.getElementById("message");
const triesElement = document.getElementById("tries");

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
