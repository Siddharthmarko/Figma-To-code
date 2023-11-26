    const cursor = document.querySelector('.mouse');
    const allProject = document.querySelectorAll('.box');
    const activeSection = document.querySelectorAll('.nav-section > li');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - cursor.clientHeight / 2) + 'px';
        cursor.style.top = (e.clientY - cursor.clientWidth / 2) + 'px';
    })
    
const listItems = document.querySelectorAll('.box');

listItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        listItems.forEach((li) => {
            if (li !== item) {
                li.classList.add('unfocus-box');
            }
        });
    });

    item.addEventListener('mouseout', () => {
        listItems.forEach((li) => {
            li.classList.remove('unfocus-box');
        });
    });
});

activeSection.forEach((li) => {
        
    li.addEventListener('click', (e) => {
        
        li.classList.add('active');
        if(li.nextElementSibling == null) {
            scrollToSection(400);
            li.previousElementSibling.classList.remove('active');
        } else {
            scrollToSection(0);
            li.nextElementSibling.classList.remove('active');
        }    
    });
    
})
function scrollToSection(range){
    window.scrollTo({
        top: `${range}`,
        behavior: 'smooth'
    });
}