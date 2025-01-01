document.addEventListener('DOMContentLoaded', function() {
    // 动态生成星星
    const starContainer = document.querySelector('.star-container');
    for (let i = 0; i < 100; i++) { // 可以增加或减少这个数字来调整星星的总数
        let star = document.createElement('i');
        star.className = 'blinking-star fa fa-star';
        star.style.animationDelay = `${Math.random() * 2}s`; // 随机延迟以使星星闪烁不同步
        starContainer.appendChild(star);
    }
    

    // 动态生成彩色圆圈
    const circleContainer = document.querySelector('.circle-container');
    const colors = ['#d5ff8d', '#ff9ad8', '#88ccff']; // 可以根据设计需要添加更多颜色
    for (let i = 0; i < 20; i++) { // 根据容器大小和设计需求调整圆圈数量
        let circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // 随机选择颜色
        circleContainer.appendChild(circle);
    }
});
