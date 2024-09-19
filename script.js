document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    
    function animateFlowers() {
        flowers.forEach(flower => {
            flower.style.animation = 'grow 3s infinite ease-in-out';
        });
    }

    animateFlowers();
});
