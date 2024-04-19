const toggleButton = document.querySelector("[data-js=toggleButton]");
const hiddenAnswer = document.querySelector("[data-js=hiddenAnswer]");
const bookmarks = document.querySelector("[data-js=bookmark]");

toggleButton.addEventListener("click", () => {
  if (hiddenAnswer.classList.contains("hidden")) {
    hiddenAnswer.classList.remove("hidden");
    toggleButton.textContent = "Hide Answer";
  } else {
    hiddenAnswer.classList.add("hidden");
    toggleButton.textContent = "Show Answer";
  }
});

bookmarks.addEventListener("click", () => {
  const currentSrc = bookmarks.getAttribute("src");
  if (currentSrc === "./resources/bookmark_transparent.png") {
    bookmarks.setAttribute("src", "./resources/bookmark_filled.png");
  } else {
    bookmarks.setAttribute("src", "./resources/bookmark_transparent.png");
  }
});
