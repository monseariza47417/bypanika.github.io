const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let index = 0;

nextButton.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}
