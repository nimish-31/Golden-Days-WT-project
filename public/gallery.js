const images = document.querySelectorAll('.dream img');
const lightbox = document.createElement('div');
const lightboxImg = document.createElement('img');

// Add lightbox styles
lightbox.classList.add('lightbox');
lightboxImg.classList.add('lightbox-content');
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

// Event listeners
images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'block';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// gallery.js

// gallery.js

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.animate__animated');

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function checkSlide() {
        images.forEach((image) => {
            const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
            const imageBottom = image.offsetTop + image.height;
            const isHalfShown = slideInAt > image.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;

            if (isHalfShown && isNotScrolledPast) {
                image.classList.add('animate__pulse');
            } else {
                image.classList.remove('animate__pulse');
            }
        });
    }

    window.addEventListener('scroll', debounce(checkSlide));
});

