document.addEventListener("DOMContentLoaded", () => {
  const words = ["project", "commit", "package", "graphic"];
  let index = 0;
  const wordElement = document.getElementById("changing-word");

  function changeWord() {
    wordElement.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % words.length;
      wordElement.textContent = words[index];
      wordElement.classList.remove("fade-out");
    }, 500);
  }

  setInterval(changeWord, 2000);
});
