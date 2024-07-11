// document.getElementById('scroll-button').addEventListener('click', function() {
//     document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
//     this.style.display = 'none';
// });

// Intersection Observer setup
const heroSection = document.getElementById('hero-section');
const chartSection = document.getElementById('chart-section');
const headerTop = document.getElementById('header-top');
const headerChart = document.getElementById('header-chart');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target === heroSection && entry.isIntersecting) {
            showHeaderTop();
        } else if (entry.target === chartSection && entry.isIntersecting) {
            showHeaderChart();
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

// Scroll event listener to toggle headers based on scroll position
window.addEventListener('scroll', () => {
    if (isElementInViewport(heroSection)) {
        showHeaderTop();
    } else if (isElementInViewport(chartSection)) {
        showHeaderChart();
    }
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

// Initial check on page load
if (isElementInViewport(heroSection)) {
    showHeaderTop();
} else if (isElementInViewport(chartSection)) {
    showHeaderChart();
}

// Scroll to next section on button click
const scrollButton = document.getElementById('scroll-button');
scrollButton.addEventListener('click', () => {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
});


