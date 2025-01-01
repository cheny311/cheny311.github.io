document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('dblclick', () => {
        if (item.requestFullscreen) {
            item.requestFullscreen();
        } else if (item.webkitRequestFullscreen) { /* Safari */
            item.webkitRequestFullscreen();
        } else if (item.msRequestFullscreen) { /* IE11 */
            item.msRequestFullscreen();
        }
    });
});
