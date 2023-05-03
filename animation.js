window.onload = () => {
    startSetTimeoutAnimation();
    startAnimFrameAnimation();
};

function startSetTimeoutAnimation() {
    const refreshRate = 1000 / 60;
    const maxXPosition = 1030;
    let elem = document.getElementById("animate");
    let speedX = 1;
    let positionX = 0;

    window.setInterval(() => {
        positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
            speedX = speedX * (-1);
        }
        elem.style.top = positionX + 'px';
    }, refreshRate);
    window.requestAnimationFrame(step);
}
