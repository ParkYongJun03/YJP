const sec_toggleBtn = document.querySelector('.sec_sidebar_toggleBtn');
const sec_sidebar_up = document.querySelector('.sec_sidebar_up');
const sidebar = document.querySelector('.sidebar');

const web_scroll = document.querySelector('.web_scroll');

sec_toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sec_sidebar_up.classList.toggle('active');
    sec_toggleBtn.classList.toggle('active');
    console.log('toggle!');
});

sec_toggleBtn.addEventListener('click', () => {
});
web_scroll.setAttribute('max', document.body.clientHeight-window.innerHeight);

document.addEventListener('scroll', () =>{
    web_scroll.setAttribute('value', window.pageYOffset); 
});
document.addEventListener('load', ()=>{
    web_scroll.setAttribute('max', document.body.clientHeight-window.innerHeight);
});