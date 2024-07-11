const slider = document.getElementById('slider');
const totalSlides = Math.ceil(slider.children.length / 2); // Show 2 slides at once
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Adjust to show 2 slides
}

updateSlider();