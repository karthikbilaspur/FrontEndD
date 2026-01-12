// Utility functions
const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

// Dark mode toggle
const darkModeToggle = getElement('#dark-mode-toggle');
const darkModeClass = 'dark-mode';
const darkModeStorageKey = 'dark-mode';

const toggleDarkMode = () => {
    document.body.classList.toggle(darkModeClass);
    localStorage.setItem(darkModeStorageKey, document.body.classList.contains(darkModeClass));
};

const initDarkMode = () => {
    const darkMode = localStorage.getItem(darkModeStorageKey);
    if (darkMode === 'true') {
        document.body.classList.add(darkModeClass);
    }
};

darkModeToggle.addEventListener('click', toggleDarkMode);
initDarkMode();

// Scroll to top
const scrollTopBtn = getElement('#scroll-top');

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

scrollTopBtn.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Form validation
const contactForm = getElement('#contact-form');

const validateForm = (e) => {
    e.preventDefault();
    const name = getElement('#name').value;
    const email = getElement('#email').value;
    const message = getElement('#message').value;
    if (name && email && message) {
        // send form data
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields');
    }
};

contactForm.addEventListener('submit', validateForm);

// Carousel
const carouselInner = getElement('.carousel-inner');
const prevBtn = getElement('.prev');
const nextBtn = getElement('.next');
const projects = getElements('.project');
let currentIndex = 0;

const updateCarousel = () => {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
};

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

// Set current year
getElement('#year').innerText = new Date().getFullYear();