const redactContent = () => {
  let startTime = new Date().getTime();

  let words = document.getElementById("content").value.toLowerCase();
  let redactWords = document.getElementById("redactWords").value.toLowerCase();

  if (!words) {
    alert("enter word or sentence");
  }

  if (!redactWords) {
    alert("enter words to redact");
  }

  let replacement = document.getElementById("replacement").value;

  if (replacement === "REDACTED") {
    replacement = document.getElementById("customReplacement").value;
    if (!replacement) {
      alert("enter custom replacement");
    }
  }

  words = words.split(" ");
  redactWords = redactWords.split(" ");

  let wordLength = words.length;

  let redactedWords = [];

  let finalWords = words.map((word) => {
    if (redactWords.includes(word)) {
      redactedWords.push(word);
      return replacement;
    } else {
      return word;
    }
  });

  let redactedWordLength = redactedWords.length;
  let redactedWordCharLength = redactedWords.join("").length;

  finalWords = finalWords.join(" ");

  let endTime = new Date().getTime();

  document.getElementById("redactedText").textContent = finalWords;
  document.getElementById("wordsScanned").textContent = wordLength;
  document.getElementById("redactMatch").textContent = redactedWordLength;
  document.getElementById("redactedChar").textContent = redactedWordCharLength;

  let timeTaken = endTime - startTime;

  document.getElementById("timeTaken").textContent = timeTaken;
};

const toggleCustomInput = () => {
  const customReplacementInput = document.getElementById("customReplacement");
  const replacementSelect = document.getElementById("replacement");
  if (replacementSelect.value === "REDACTED") {
    customReplacementInput.style.display = "inline-block";
  } else {
    customReplacementInput.style.display = "none";
  }
};
const resetForm = () => {
  document.getElementById("content").value = "";
  document.getElementById("redactWords").value = "";
  document.getElementById("replacement").value = "";
  document.getElementById("customReplacement").value = "";
  document.getElementById("redactedText").textContent = "";
  document.getElementById("wordsScanned").textContent = "";
  document.getElementById("redactMatch").textContent = "";
  document.getElementById("redactedChar").textContent = "";
  document.getElementById("timeTaken").textContent = "";
};
