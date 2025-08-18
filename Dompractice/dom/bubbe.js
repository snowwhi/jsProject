// creation
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

for (let i = 1; i <= 80; i++) {
    let circle = document.createElement('div');
    circle.className = 'round';
    let randomNum = Math.floor(Math.random() * 10) + 1;
    circle.innerText = randomNum;
    
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.margin = "8px";
    circle.style.display = 'flex';
    circle.style.alignItems = 'center';
    circle.style.justifyContent = 'center';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = getRandomColor();
    circle.style.boxShadow = '1px 1px 5px aliceblue, inset 1px 1px 5px white';
    circle.style.transition = 'transform 0.2s'; 

    circle.addEventListener('mouseenter', () => {
        circle.style.transform = 'scale(1.2)';
    });

    circle.addEventListener('mouseleave', () => {
        circle.style.transform = 'scale(1)';
    });
    

    document.querySelector('.frame').appendChild(circle);
}
