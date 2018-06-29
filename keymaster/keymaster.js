var chalengeText = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "fox", "jumps", "over", "the", "lazy", "dog", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "fox", "jumps", "over", "the", "lazy", "dog"];
var typedWords = 0;
var correctWords = 0;
var wrongWords = 0;

function drawChalengeText() {
  var listChalengeText = document.getElementById("listChalengeText");

  var inputWord = document.getElementById("inputArea");
  inputWord.value = "";

  let placar = "Typed = " + typedWords + " | Correct = " + correctWords + " | Wrong = " + wrongWords;
  document.getElementById('placar').innerHTML = placar;

  while (listChalengeText.firstChild && chalengeText.length > 0) {
    listChalengeText.removeChild(listChalengeText.firstChild);
  }

  var currIndex;
  for (currIndex = 0; currIndex < chalengeText.length; currIndex++) {
    var newLi = document.createElement("li");
    newLi.setAttribute("id", "word" + currIndex);
    newLi.innerHTML = chalengeText[currIndex];
    listChalengeText.appendChild(newLi);
  }
}

function checkCurrWord(event) {
  var inputWord = document.getElementById("inputArea");
  var currWord = document.getElementById("word0"); // + typedWords
  if (event.which == 32) {
    if (inputWord.value.trim() == chalengeText[0]) {
      correctWords++;
    } else {
      currWord.style.color = "red";
      wrongWords++;
    }
    var inputWord = document.getElementById("inputArea");
    inputWord.value = "";
    typedWords++;

    chalengeText.splice(0, 1);
    drawChalengeText();

  } else {
    if (inputWord.value == chalengeText[0].substring(0, inputWord.value.length)) {
      currWord.style.color = "green";
    } else {
      currWord.style.color = "red";
    }
  }
}

window.onload = function loadText() {
  drawChalengeText();

};
