import isError from "./isError";
import type Advice from "../types/advice";

const API_URl = "https://api.adviceslip.com/advice";

interface Elements {
  image: HTMLImageElement;
  button: HTMLButtonElement;
  title: HTMLHeadingElement;
  text: HTMLParagraphElement;
}

const createFetchAdvice =
  ({ image, button, title, text }: Elements) =>
  async () => {
    image.classList.add("advice__image-spin");
    button.setAttribute("aria-label", "Loading advice...");
    button.disabled = true;

    interface Data {
      slip: Advice;
    }

    try {
      const response = await fetch(API_URl);
      const { slip }: Data = await response.json();
      const { id, advice } = slip;

      title.textContent = `Advice #${id}`;
      text.textContent = `"${advice}"`;
      text.classList.remove("advice__text--error");
    } catch (error) {
      const message = isError(error) ? error.message : "Something went wrong";

      title.textContent = "Error";
      text.textContent = message;
      text.classList.add("advice__text--error");
    } finally {
      image.classList.remove("advice__image-spin");
      button.setAttribute("aria-label", "Generate random advice");
      button.disabled = false;
    }
  };

export default createFetchAdvice;
