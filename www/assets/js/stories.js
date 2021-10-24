const container = document.querySelector(".stories-itens");
const perfis = document.querySelectorAll(".stories-container li");
const itens = container.querySelectorAll("li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const closed = document.querySelector(".close-stories");
let autoSlide;
let current = 0;

perfis.forEach((perfil, index) => {
    perfil.addEventListener("click", () => {
        current = index;
        container.classList.add("open");
        itens[current].classList.add("open");
        autoSlide = setInterval(() => {
            nextSlide();
        }, 2000);
    });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
closed.addEventListener("click", resetAndCloseStories);

function nextSlide() {
    current++;
    if(current > itens.length - 1) {
        resetAndCloseStories();
        return;
    }
    itens.forEach(item => item.classList.remove("open"));
    itens[current].classList.add("open");
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        nextSlide();
    }, 2000);
}

function prevSlide() {
    current--;
    if(current < 0) {
        resetAndCloseStories();
        return;
    }
    itens.forEach(item => item.classList.remove("open"));
    itens[current].classList.add("open");
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        nextSlide();
    }, 2000);
}

function resetAndCloseStories() {
    clearInterval(autoSlide);
    itens.forEach(item => item.classList.remove("open"));
    container.classList.remove("open");
}