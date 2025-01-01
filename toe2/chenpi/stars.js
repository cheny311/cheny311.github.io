document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.querySelector('.star-container');
    const colors = ['yellow', 'white']; // alternating colors
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('i');
        star.className = 'blinking-star fa fa-star';
        star.style.color = colors[i % 2];
        star.style.animationDelay = `${Math.random() * 2}s`;
        starContainer.appendChild(star);
    }
});
