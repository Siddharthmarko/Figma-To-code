    const cursor = document.querySelector('.mouse');
document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - cursor.clientHeight / 2) + 'px';
        cursor.style.top = (e.clientY - cursor.clientWidth / 2) + 'px';
    })
document.addEventListener('mouseover', (e) => {
    console.log('Mouse entered!', e.target);
    
});
