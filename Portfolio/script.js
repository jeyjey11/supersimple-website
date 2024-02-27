const fadeInElements = document.querySelectorAll('.fade-in');

const onScroll = () => {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop <= (windowHeight * 0.8)) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', onScroll);