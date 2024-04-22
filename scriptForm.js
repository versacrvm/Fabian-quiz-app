const form = document.querySelector('[data-js="form"]');
const questionInput = document.getElementById("yourQuestion");
const answerInput = document.getElementById("yourAnswer");
const questionCharacterCount = document.querySelector(
  "[data-js=questionCharacterCount]"
);
const answerCharacterCount = document.querySelector(
  "[data-js=answerCharacterCount]"
);
const MAX_LENGTH = 150;

questionInput.addEventListener("input", (e) => {
  questionCharacterCount.textContent = MAX_LENGTH - e.target.value.length;
});

answerInput.addEventListener("input", (e) => {
  answerCharacterCount.textContent = MAX_LENGTH - e.target.value.length;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const questionValue = formElements.yourQuestion.value;
  const answerValue = formElements.yourAnswer.value;
  const tagValue = formElements.yourTag.value;

  //const formData = new FormData(event.target);
  //const data = Object.fromEntries(formData);

  //console.log(data);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  const cardButton = document.createElement("button");
  cardButton.classList.add("cardButton");
  cardButton.textContent = "Hide Answer";

  const questionElement = document.createElement("p");
  questionElement.classList.add("question");
  questionElement.textContent = questionValue;

  const answerElement = document.createElement("p");
  answerElement.classList.add("answer");
  answerElement.textContent = answerValue;

  const tagElement = document.createElement("p");
  tagElement.classList.add("tag");
  tagElement.textContent = tagValue;

  cardContainer.appendChild(questionElement);
  cardContainer.appendChild(answerElement);
  cardContainer.appendChild(tagElement);
  cardContainer.appendChild(cardButton);
  document.body.appendChild(cardContainer);

  event.target.reset();
});
