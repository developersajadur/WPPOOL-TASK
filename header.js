// Intersection Observer setup
const heroSection = document.getElementById('hero-section');
const chartSection = document.getElementById('chart-section');
const headerTop = document.getElementById('header-top');
const headerChart = document.getElementById('header-chart');
const scrollButton = document.getElementById('scroll-button');
const nextSection = document.getElementById('index'); 
const main = document.getElementById('main'); 
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target === heroSection) {
            if (entry.isIntersecting) {
                showHeaderTop();
                showScrollButton();
                hideMainContent(); 
            } else {
                hideScrollButton();
            }
        } else if (entry.target === chartSection) {
            if (entry.isIntersecting) {
                showHeaderChart();
                hideScrollButton();
            }
        }
    });
}, observerOptions);

observer.observe(heroSection);
observer.observe(chartSection);

// Function to show headerTop and hide headerChart
function showHeaderTop() {
    headerTop.style.display = 'flex';
    headerChart.style.display = 'none';
}

// Function to show headerChart and hide headerTop
function showHeaderChart() {
    headerTop.style.display = 'none';
    headerChart.style.display = 'flex';
}

// Functions to show/hide the scroll button
function showScrollButton() {
    scrollButton.style.display = 'flex';
}

function hideScrollButton() {
    scrollButton.style.display = 'none';
}

// Function to hide the main content
function hideMainContent() {
    main.classList.add("hidden");
    main.classList.remove("block");
}

// Initial check on page load
if (isElementInViewport(heroSection)) {
    showHeaderTop();
    showScrollButton();
} else {
    hideScrollButton();
}

// Prevent default scrolling
window.addEventListener('wheel', (event) => {
    const scrollDirection = Math.sign(event.deltaY);
    if (isElementInViewport(heroSection) && scrollDirection > 0) {
        event.preventDefault();
    }
}, { passive: false });

// Scroll to next section on button click
scrollButton.addEventListener('click', () => {
    // Show the main content
    main.classList.add("block");
    main.classList.remove("hidden");
    
    // Scroll to the next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Click the first dropdown menu item
const makeblock = document.querySelectorAll(".makeblock");
makeblock.forEach(item => {
    item.addEventListener("click", () => {
        main.classList.add("hidden");
        main.classList.remove("block");

        // Scroll to the next section
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});
