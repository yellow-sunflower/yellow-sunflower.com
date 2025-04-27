document.addEventListener("DOMContentLoaded", function () {
  /**
   * Creates a word changer that smoothly transitions between words
   * @param {string} elementId - The ID of the element containing the changing word
   * @param {Array<string>} words - Array of words to cycle through
   * @param {number} interval - Time between word changes in milliseconds
   * @param {number} fadeDuration - Duration of fade animation in milliseconds
   */
  function createWordChanger(
    elementId,
    words,
    interval = 2000,
    fadeDuration = 500
  ) {
    const wordElement = document.getElementById(elementId);
    if (!wordElement) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
    }

    const wrapperId = `wrapper-${elementId}`;
    const wrapperElement = document.getElementById(wrapperId);

    if (!wrapperElement) {
      console.error(`Wrapper element with ID "${wrapperId}" not found.`);
      return;
    }

    let currentIndex = 0;

    wordElement.textContent = words[currentIndex];
    wrapperElement.style.width = `${wordElement.offsetWidth}px`;

    function changeWord() {
      wordElement.classList.add("fade-out");

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        wordElement.textContent = words[currentIndex];

        wrapperElement.style.width = `${wordElement.offsetWidth}px`;

        wordElement.classList.remove("fade-out");
      }, fadeDuration);
    }

    setInterval(changeWord, interval);
  }

  createWordChanger("changing-word-service", [
    "visualization",
    "science",
    "storytelling",
    "analysis",
    "automation",
  ]);

  createWordChanger("changing-word-hero", [
    "commit",
    "graphic",
    "story",
    "discussion",
  ]);
});
