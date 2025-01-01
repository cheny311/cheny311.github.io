document.addEventListener('DOMContentLoaded', function() {
    // 处理星星的创建和添加
    const starContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('i');
        star.className = 'blinking-star fa fa-star';
        star.style.animationDelay = `${Math.random() * 0.8}s`;
        star.style.color = 'yellow'; // 确保星星是可见的
        starContainer.appendChild(star);
    }

    // 处理灯泡的创建和添加
    const lightBulbContainer = document.querySelector('.light-bulb-container');
    for (let i = 0; i < 50; i++) {
        let bulb = document.createElement('div');
        bulb.className = 'light-bulb';
        lightBulbContainer.appendChild(bulb);
    }

});
