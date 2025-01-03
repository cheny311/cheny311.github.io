const rectangle = document.querySelector('.rectangle');
const spans = document.querySelectorAll('.rectangle span');

rectangle.addEventListener('mousemove', (e) => {
    const rect = rectangle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    spans.forEach((span, index) => {
        const offsetFactor = (index + 1) * 10; // Add unique offset for each span
        const moveX = Math.min(10, Math.max(-10, (e.clientX - centerX) / offsetFactor));
        const moveY = Math.min(10, Math.max(-10, (e.clientY - centerY) / offsetFactor));
        span.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

rectangle.addEventListener('mouseleave', () => {
    spans.forEach((span) => {
        span.style.transform = 'translate(0, 0)';
    });
});
document.querySelectorAll('.rect-container').forEach((container, index) => {
    container.addEventListener('click', () => {
        const pages = [
            '../Hair/hair2.html', // Rectangle 1
            '../toe2/index.html', // Rectangle 2
            '../toe3/face-filter/index.html', // Rectangle 3
            '../toe4/Nana/nana.html', // Rectangle 4
            '../../homepage/self/index.html'  // Rectangle 5
        ];

        window.location.href = pages[index];
    });
});
const nailClipper = document.querySelector('.nail-clipper');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // 计算轻微移动，范围控制在 -15px 到 15px
  const offsetX = (clientX / window.innerWidth - 0.5) * 30;
  const offsetY = (clientY / window.innerHeight - 0.5) * 30;

  nailClipper.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

