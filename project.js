function bringnavbar(){
    const burger=document.querySelector('.menu');
    const nav=document.querySelector('.nav-list');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
});
}

bringnavbar();