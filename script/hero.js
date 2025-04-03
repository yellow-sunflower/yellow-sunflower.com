function createWordChanger(
  elementId,
  words,
  interval = 2000,
  fadeDuration = 500
) {
  let index = 0;
  const wordElement = document.getElementById(elementId);

  if (!wordElement) return;

  function changeWord() {
    wordElement.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % words.length;
      wordElement.textContent = words[index];
      wordElement.classList.remove("fade-out");
    }, fadeDuration);
  }

  setInterval(changeWord, interval);
}

document.addEventListener("DOMContentLoaded", () => {
  createWordChanger("changing-word-hero", ["commit", "package", "graphic"]);
  createWordChanger("changing-word-service", [
    "visualization",
    "science",
    "design",
    "storytelling",
  ]);
});
