import createFetchAdvice from "./utils/createFetchAdvice";
import "./scss/styles.scss";

const article = document.createElement("article");
article.classList.add("advice");

const title = document.createElement("h1");
title.classList.add("advice__title");
title.textContent = "Loading...";
article.appendChild(title);

const text = document.createElement("p");
text.classList.add("advice__text");
text.setAttribute("aria-live", "polite");
text.textContent = "Loading...";
article.appendChild(text);

const button = document.createElement("button");
button.classList.add("advice__button");
button.setAttribute("aria-label", "Generate random advice");
article.appendChild(button);

const image = document.createElement("img");
image.src = "/assets/images/icon-dice.svg";
image.alt = "dice";
button.appendChild(image);

const fethAdvice = createFetchAdvice({
  image,
  button,
  title,
  text,
});

button.addEventListener("click", fethAdvice);

document.body.appendChild(article);

fethAdvice();
