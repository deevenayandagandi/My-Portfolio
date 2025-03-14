document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    function revealOnScroll() {
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const screenBottom = window.innerHeight;

            if (cardTop < screenBottom - 100) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});
