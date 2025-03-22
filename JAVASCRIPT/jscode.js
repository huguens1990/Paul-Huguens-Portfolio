function menuAppart() {
    document.getElementById('openMenu').style.display = "none";
    document.getElementById('closeMenu').style.display = "block";
    document.querySelector('nav').style.display = "block";
    const elements = [
        { id: 'elementA', delay: 175 },
        { id: 'elementB', delay: 250 },
        { id: 'elementC', delay: 325 },
        { id: 'elementD', delay: 400 },
        { id: 'elementE', delay: 475 },
    ];

    elements.forEach(({ id, delay }) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display='block';
                element.style.opacity='1';
            }
        }, delay);
    });
}
function menuDisppart() {
    document.getElementById('closeMenu').style.display = "none";
    document.getElementById('openMenu').style.display = "block";
    
    const elements = [
        { id: 'elementA', delay: 475 },
        { id: 'elementB', delay: 400 },
        { id: 'elementC', delay: 325 },
        { id: 'elementD', delay: 250 },
        { id: 'elementE', delay: 175 },
    ];

    elements.forEach(({ id, delay }) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display='none';
                element.style.opacity='1';
            }
        }, delay);
    });
    setTimeout(() => {
        document.querySelector('nav').style.display = "none";
    }, 400);
    
}

const listItems = document.querySelectorAll('nav ul li a');

listItems.forEach(a => {
    a.addEventListener('click', () => {
        listItems.forEach(item => item.classList.remove('active'));
        a.classList.add('active');
    });
});