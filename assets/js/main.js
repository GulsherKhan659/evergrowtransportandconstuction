  const carousel = document.getElementById('carousel');
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        let currentIndex = 0;
        let autoSlideInterval;

        // 1. Update Carousel View
        const updateCarousel = () => {
            const offset = -currentIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        };

        // 2. Navigation Logic
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        };

        // 3. Auto Slide
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextSlide, 5000); // Slide every 5 seconds
        };

        // 4. Initialization
        // Start the automatic rotation of the slides
        startAutoSlide();