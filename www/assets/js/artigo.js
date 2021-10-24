// AUMENTA FONTE ARTIGO
const plusText = document.querySelector("[data-js='plus']");
plusText.addEventListener("click", () => {
  const content = document.querySelector(".artigo__content");
  content.classList.toggle("plus");
});