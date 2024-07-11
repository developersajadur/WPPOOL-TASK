const slider = document.getElementById('slider');
        const totalSlides = slider.children.length;
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
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.getElementById('currentPage').innerText = currentIndex + 1;
        }